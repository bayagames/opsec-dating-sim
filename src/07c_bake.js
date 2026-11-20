/* ============ BAKED LIGHTING ============ */
/* Every light in a region is baked into lightmaps on the GPU when the game loads:
   1. each lit quad already owns a patch of a lightmap page (packLM, uv1);
   2. per light, a cube shadow map is rendered from the light's position (distance to the nearest surface);
   3. the region's meshes are drawn again "flattened" into lightmap space, and each texel adds that light's
      contribution: N·L, the game's falloff curve, and a soft shadow test (12 jittered taps against the cube);
   4. gutters are dilated and the result is packed to 8-bit RGBM, which the materials read as a lightMap.
   So all light comes from the level's own sources, and every source casts shadows on everything in its reach.
   Characters and other moving things sample the same lights on the CPU (probeAt). */
const BAKE={cube:320,fill:.16,soft:.22,rgbm:8};
const PD12='const vec2 PD[12]=vec2[](vec2(-.326,-.406),vec2(-.840,-.074),vec2(-.696,.457),vec2(-.203,.621),vec2(.962,-.195),vec2(.473,-.480),vec2(.519,.767),vec2(.185,-.893),vec2(.507,.064),vec2(.896,.412),vec2(-.322,-.933),vec2(-.792,-.598));';
function bakeOK(){const r=G.r;return !!(r&&r.capabilities.isWebGL2&&(r.extensions.has('EXT_color_buffer_half_float')||r.extensions.has('EXT_color_buffer_float')))}
function bakeMats(){
 if(G.bk)return G.bk;const T=G.T;
 const vs='attribute vec2 lmuv;varying vec3 wp;varying vec3 wn;void main(){wp=position;wn=normal;gl_Position=vec4(lmuv*2.-1.,0.,1.);}';
 const cov=new T.ShaderMaterial({vertexShader:vs,fragmentShader:'varying vec3 wp;varying vec3 wn;void main(){gl_FragColor=vec4(0.,0.,0.,1.);}',side:T.DoubleSide,depthTest:false,depthWrite:false,blending:T.NoBlending});
 const light=new T.ShaderMaterial({uniforms:{lp:{value:new T.Vector3()},lc:{value:new T.Vector3()},lr:{value:1},far:{value:1},cube:{value:null},soft:{value:BAKE.soft},fillk:{value:BAKE.fill}},
  vertexShader:vs,
  fragmentShader:PD12+`uniform vec3 lp,lc;uniform float lr,far,soft,fillk;uniform samplerCube cube;varying vec3 wp;varying vec3 wn;
  float vis(vec3 p,float d){vec3 dir=(p-lp)/d;vec3 t1=normalize(cross(dir,abs(dir.y)<.9?vec3(0.,1.,0.):vec3(1.,0.,0.)));vec3 t2=cross(dir,t1);
   float r=soft*(.5+d*.08)/max(d,.3),bias=.035+d*.012,s=0.;for(int i=0;i<12;i++){vec2 o=PD[i]*r;float sd=textureCube(cube,dir+t1*o.x+t2*o.y).r*far;s+=sd>d-bias?1.:0.;}return s/12.;}
  void main(){vec3 n=normalize(wn);vec3 L=lp-wp;float d=length(L);if(d>lr)discard;vec3 l=L/d;float x=clamp(1.-d/lr,0.,1.),fall=x*x,ndl=dot(n,l);
   vec3 p=wp+n*.03;float sh=vis(p,length(p-lp));
   gl_FragColor=vec4(lc*(max(ndl,0.)+fillk*(ndl*.5+.5))*fall*sh,0.);}`,
  side:T.DoubleSide,depthTest:false,depthWrite:false,blending:T.CustomBlending,blendEquation:T.AddEquation,blendSrc:T.OneFactor,blendDst:T.OneFactor,blendSrcAlpha:T.ZeroFactor,blendDstAlpha:T.OneFactor});
 const dist=new T.ShaderMaterial({uniforms:{lp:{value:new T.Vector3()},far:{value:1}},
  vertexShader:'varying vec3 wp;void main(){wp=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);}',
  fragmentShader:'uniform vec3 lp;uniform float far;varying vec3 wp;void main(){gl_FragColor=vec4(length(wp-lp)/far,0.,0.,1.);}',side:T.DoubleSide});
 // gutter dilation + RGBM encode into an 8-bit page
 const fin=new T.ShaderMaterial({uniforms:{src:{value:null},px:{value:1},M:{value:BAKE.rgbm}},
  vertexShader:'varying vec2 v;void main(){v=uv;gl_Position=vec4(position.xy,0.,1.);}',
  fragmentShader:`uniform sampler2D src;uniform float px,M;varying vec2 v;void main(){vec4 c=texture2D(src,v);
   if(c.a<.5){vec3 a=vec3(0.);float n=0.;for(int y=-2;y<=2;y++)for(int x=-2;x<=2;x++){vec4 s=texture2D(src,v+vec2(float(x),float(y))*px);if(s.a>.5){a+=s.rgb;n+=1.;}}if(n>0.)c.rgb=a/n;}
   vec3 h=max(c.rgb,0.);float m=clamp(max(max(h.r,h.g),max(h.b,1e-6))/M,1./255.,1.);m=ceil(m*255.)/255.;gl_FragColor=vec4(clamp(h/(m*M),0.,1.),m);}`,
  depthTest:false,depthWrite:false,blending:T.NoBlending});
 return G.bk={cov,light,dist,fin};
}
/* prepare one region: float accumulation pages, the flattened bake scenes, and a shadow-caster scene */
function bakeSetup(reg){
 const T=G.T,r=G.r,R=G.regions[reg],LM=R.lm,BK=bakeMats();
 const opt={type:T.HalfFloatType,format:T.RGBAFormat,minFilter:T.NearestFilter,magFilter:T.NearestFilter,depthBuffer:false,generateMipmaps:false};
 R.bk={rt:[],scn:[],sh:new T.Scene(),cam:new T.Camera()};
 for(let p=0;p<LM.pages;p++){R.bk.rt.push(new T.WebGLRenderTarget(LM.S,LM.S,opt));R.bk.scn.push(new T.Scene())}
 for(const m of R.obj.children){if(!m.isMesh)continue;const pg=m.userData.pg,kd=m.userData.mk.split('|')[1];
  if(pg>=0){const b=new T.Mesh(m.geometry,BK.light);b.frustumCulled=false;b.userData.bs=m.geometry.boundingSphere;R.bk.scn[pg].add(b)}
  if(kd==='lit'){const s=new T.Mesh(m.geometry,BK.dist);s.matrixAutoUpdate=false;R.bk.sh.add(s)}}
 const ac=r.autoClear,cc=r.getClearColor(new T.Color()),ca=r.getClearAlpha();
 for(let p=0;p<LM.pages;p++){r.setRenderTarget(R.bk.rt[p]);r.setClearColor(0x000000,0);r.clear();R.bk.scn[p].overrideMaterial=BK.cov;r.render(R.bk.scn[p],R.bk.cam);R.bk.scn[p].overrideMaterial=null}
 r.setRenderTarget(null);r.setClearColor(cc,ca);r.autoClear=ac;
}
/* one light: render its cube shadow map, then add it into every page texel within its reach */
function bakeLight(reg,i){
 const T=G.T,r=G.r,R=G.regions[reg],l=G.lights[reg][i],BK=bakeMats();
 if(!G.bkCube){G.bkCubeRT=new T.WebGLCubeRenderTarget(BAKE.cube,{type:T.HalfFloatType,format:T.RGBAFormat,generateMipmaps:false,minFilter:T.NearestFilter,magFilter:T.NearestFilter});G.bkCube=new T.CubeCamera(.3,10,G.bkCubeRT)}
 const lr=l[6]*LOOK.reach,far=lr*1.05,cam=G.bkCube;
 for(const c of cam.children){c.far=far;c.near=.3;c.updateProjectionMatrix()}
 cam.position.set(l[0],l[1],l[2]);cam.updateMatrixWorld(true);
 BK.dist.uniforms.lp.value.set(l[0],l[1],l[2]);BK.dist.uniforms.far.value=far;
 const ac=r.autoClear,cc=r.getClearColor(new T.Color()),ca=r.getClearAlpha();
 r.setClearColor(0xffffff,1);r.autoClear=true;cam.update(r,R.bk.sh);
 const u=BK.light.uniforms;u.lp.value.set(l[0],l[1],l[2]);u.lc.value.set(lin(l[3]),lin(l[4]),lin(l[5])).multiplyScalar(l[7]*G.LK);u.lr.value=lr;u.far.value=far;u.cube.value=G.bkCubeRT.texture;
 r.autoClear=false;
 for(let p=0;p<R.bk.rt.length;p++){let any=false;for(const b of R.bk.scn[p].children){const s=b.userData.bs;b.visible=Math.hypot(s.center.x-l[0],s.center.y-l[1],s.center.z-l[2])<s.radius+lr;any=any||b.visible}
  if(!any)continue;r.setRenderTarget(R.bk.rt[p]);r.render(R.bk.scn[p],R.bk.cam)}
 r.setRenderTarget(null);r.autoClear=ac;r.setClearColor(cc,ca);
}
/* dilate gutters, pack to RGBM, hand the pages to the materials, free the float targets */
function bakeFinish(reg){
 const T=G.T,r=G.r,R=G.regions[reg],LM=R.lm,BK=bakeMats();
 if(!G.bkQuad){G.bkQuad=new T.Mesh(new T.PlaneGeometry(2,2),BK.fin);G.bkQuad.frustumCulled=false;G.bkQS=new T.Scene();G.bkQS.add(G.bkQuad)}
 R.lmTex=[];
 for(let p=0;p<LM.pages;p++){const out=new T.WebGLRenderTarget(LM.S,LM.S,{type:T.UnsignedByteType,format:T.RGBAFormat,minFilter:T.LinearFilter,magFilter:T.LinearFilter,depthBuffer:false,generateMipmaps:false});
  BK.fin.uniforms.src.value=R.bk.rt[p].texture;BK.fin.uniforms.px.value=1/LM.S;r.setRenderTarget(out);r.render(G.bkQS,R.bk.cam);
  const t=out.texture;t.channel=1;t.colorSpace=T.NoColorSpace;R.lmTex.push(t);R.bk.rt[p].dispose()}
 r.setRenderTarget(null);R.bk=null;
 R.obj.traverse(o=>{if(o.isMesh&&o.userData.mk&&o.userData.pg>=0){o.userData.lmk=reg+':'+o.userData.pg;o.material=getMat(o.userData.mk,o.userData.lmk)}});
}
/* bake everything, a few lights per frame so the loading bar moves; cb() when done */
function bakeAll(prog,cb){
 if(!bakeOK()){cb(false);return}
 const only=window.__bakeOnly,jobs=[];for(const reg in G.regions)if(!only||only.includes(reg))for(let i=0;i<G.lights[reg].length;i++)jobs.push([reg,i]);
 const regs=Object.keys(G.regions);let j=0,setUp={},n=Math.max(1,jobs.length);
 const step=()=>{const t0=performance.now();
  try{
   let k=0;while(j<jobs.length&&(k++<1||performance.now()-t0<30)){const[reg,i]=jobs[j];if(!setUp[reg]){bakeSetup(reg);setUp[reg]=1}bakeLight(reg,i);j++;
    if(j===jobs.length||jobs[j][0]!==reg)bakeFinish(reg)}
   for(const reg of regs)if(!setUp[reg]&&j>=jobs.length&&(!only||only.includes(reg))){bakeSetup(reg);bakeFinish(reg);setUp[reg]=1} // regions with no lights
  }catch(e){console.error('bake failed',e);cb(false);return}
  // wait for the GPU to really finish this batch (reading one pixel forces it), so progress is honest
  // and the browser never piles up seconds of queued work
  bakeSync();prog(j/n);
  if(j<jobs.length)setTimeout(step,0);else{if(G.bkCubeRT){G.bkCubeRT.dispose();G.bkCube=null}cb(true)}};
 requestAnimationFrame(step);
}
function bakeSync(){const T=G.T,r=G.r;if(!G.bkSyncRT){G.bkSyncRT=new T.WebGLRenderTarget(1,1,{depthBuffer:false});G.bkSyncBuf=new Uint8Array(4)}
 r.readRenderTargetPixels(G.bkSyncRT,0,0,1,1,G.bkSyncBuf)}
/* light at a point, for things that move (characters, crowds, doors): every nearby source, no shadows */
function probeAt(reg,x,y,z,out){
 const L=G.lights[reg]||[];let r=0,g=0,b=0;
 for(const l of L){const dx=l[0]-x,dy=l[1]-y,dz=l[2]-z,d=Math.hypot(dx,dy,dz),R=l[6]*LOOK.reach;if(d>=R)continue;const f=(1-d/R)*(1-d/R)*l[7]*G.LK*.55;r+=lin(l[3])*f;g+=lin(l[4])*f;b+=lin(l[5])*f}
 out.r=r;out.g=g;out.b=b;return out;
}
