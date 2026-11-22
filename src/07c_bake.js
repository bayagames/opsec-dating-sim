/* ============ BAKED LIGHTING ============ */
/* Every light in a region is baked into lightmaps on the GPU when the game loads:
   1. each lit quad already owns a patch of a lightmap page (packLM, uv1);
   2. per light, a cube shadow map is rendered from the light's position (distance to the nearest surface);
   3. the region's meshes are drawn again "flattened" into lightmap space, and each texel adds that light's
      contribution: N·L, the game's falloff curve, and a soft shadow test (12 jittered taps against the cube);
   4. gutters are dilated and the result is packed to 8-bit RGBM, which the materials read as a lightMap.
   So all light comes from the level's own sources, and every source casts shadows on everything in its reach.
   Characters and other moving things sample the same lights on the CPU (probeAt). */
const BAKE={cube:320,fill:.11,soft:.22,rgbm:8};
const PD12='const vec2 PD[12]=vec2[](vec2(-.326,-.406),vec2(-.840,-.074),vec2(-.696,.457),vec2(-.203,.621),vec2(.962,-.195),vec2(.473,-.480),vec2(.519,.767),vec2(.185,-.893),vec2(.507,.064),vec2(.896,.412),vec2(-.322,-.933),vec2(-.792,-.598));';
function bakeOK(){const r=G.r;return !!(r&&r.capabilities.isWebGL2&&(r.extensions.has('EXT_color_buffer_half_float')||r.extensions.has('EXT_color_buffer_float')))}
function bakeMats(){
 if(G.bk)return G.bk;const T=G.T;
 const vs='attribute vec2 lmuv;varying vec3 wp;varying vec3 wn;void main(){wp=position;wn=normal;gl_Position=vec4(lmuv*2.-1.,0.,1.);}';
 const cov=new T.ShaderMaterial({vertexShader:vs,fragmentShader:'varying vec3 wp;varying vec3 wn;void main(){gl_FragColor=vec4(0.,0.,0.,1.);}',side:T.DoubleSide,depthTest:false,depthWrite:false,blending:T.NoBlending});
 const light=new T.ShaderMaterial({uniforms:{lp:{value:new T.Vector3()},lc:{value:new T.Vector3()},lr:{value:1},far:{value:1},cube:{value:null},soft:{value:BAKE.soft},fillk:{value:BAKE.fill},dn:{value:0}},
  vertexShader:vs,
  fragmentShader:PD12+`uniform vec3 lp,lc;uniform float lr,far,soft,fillk,dn;uniform samplerCube cube;varying vec3 wp;varying vec3 wn;
  // the depth bias grows where the light grazes the surface: a cube texel covers a long strip of a wall seen edge-on,
  // and a flat bias there leaves rings of false shadow round every light (acne)
  float vis(vec3 p,float d,float ndl){vec3 dir=(p-lp)/d;vec3 t1=normalize(cross(dir,abs(dir.y)<.9?vec3(0.,1.,0.):vec3(1.,0.,0.)));vec3 t2=cross(dir,t1);
   float r=soft*(.5+d*.08)/max(d,.3),bias=.035+d*.012+(1.-clamp(ndl,0.,1.))*(.03+d*.025),s=0.;for(int i=0;i<12;i++){vec2 o=PD[i]*r;vec2 c=textureCube(cube,dir+t1*o.x+t2*o.y).rg*far;s+=c.x>d-bias?(c.y>d-bias?1.:.6):0.;}return s/12.;}
  void main(){vec3 n=normalize(wn);vec3 L=lp-wp;float d=length(L);if(d>lr)discard;vec3 l=L/d;float x=clamp(1.-d/lr,0.,1.),fall=x*x,ndl=dot(n,l);if(length(wn)>1.5&&ndl<0.){n=-n;ndl=-ndl;}
   // ceiling fittings (downlights, panels) shine down: what's level with or above them only gets a little spill
   if(dn>.5)fall*=mix(.05,1.,smoothstep(.05,.55,l.y));
   vec3 p=wp+n*(.03+d*.006);float sh=vis(p,length(p-lp),ndl);
   gl_FragColor=vec4(lc*(max(ndl,0.)+fillk*(ndl*.5+.5))*fall*sh,0.);}`,
  side:T.DoubleSide,depthTest:false,depthWrite:false,blending:T.CustomBlending,blendEquation:T.AddEquation,blendSrc:T.OneFactor,blendDst:T.OneFactor,blendSrcAlpha:T.ZeroFactor,blendDstAlpha:T.OneFactor});
 const dist=new T.ShaderMaterial({uniforms:{lp:{value:new T.Vector3()},far:{value:1}},
  vertexShader:'varying vec3 wp;void main(){wp=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);}',
  fragmentShader:'uniform vec3 lp;uniform float far;varying vec3 wp;void main(){gl_FragColor=vec4(length(wp-lp)/far,1.,0.,1.);}',side:T.DoubleSide});
 // gutter dilation + RGBM encode into an 8-bit page
 const fin=new T.ShaderMaterial({uniforms:{src:{value:null},px:{value:1},M:{value:BAKE.rgbm}},
  vertexShader:'varying vec2 v;void main(){v=uv;gl_Position=vec4(position.xy,0.,1.);}',
  fragmentShader:`uniform sampler2D src;uniform float px,M;varying vec2 v;void main(){vec4 c=texture2D(src,v);
   if(c.a<.5){vec3 a=vec3(0.);float n=0.;for(int y=-2;y<=2;y++)for(int x=-2;x<=2;x++){vec4 s=texture2D(src,v+vec2(float(x),float(y))*px);if(s.a>.5){a+=s.rgb;n+=1.;}}if(n>0.)c.rgb=a/n;}
   vec3 h=max(c.rgb,0.);float m=clamp(max(max(h.r,h.g),max(h.b,1e-6))/M,1./255.,1.);m=ceil(m*255.)/255.;gl_FragColor=vec4(clamp(h/(m*M),0.,1.),m);}`,
  depthTest:false,depthWrite:false,blending:T.NoBlending});
 // the sun: one directional light with an orthographic shadow map over the area that matters (G.sun[reg])
 const sun=new T.ShaderMaterial({uniforms:{sd:{value:new T.Vector3()},lc:{value:new T.Vector3()},cp:{value:new T.Vector3()},far:{value:1},smat:{value:new T.Matrix4()},smap:{value:null},tx:{value:1}},
  vertexShader:vs,
  fragmentShader:PD12+`uniform vec3 sd,lc,cp;uniform float far,tx;uniform mat4 smat;uniform sampler2D smap;varying vec3 wp;varying vec3 wn;
  void main(){vec3 n=normalize(wn);float ndl=dot(n,sd);if(length(wn)>1.5&&ndl<0.){n=-n;ndl=-ndl;}if(ndl<=0.)discard;vec3 p=wp+n*.04;vec4 c=smat*vec4(p,1.);vec2 uv=c.xy/c.w*.5+.5;float sh=1.;
   if(uv.x>0.&&uv.x<1.&&uv.y>0.&&uv.y<1.){float d=dot(cp-p,sd),s=0.;for(int i=0;i<12;i++){float z=texture2D(smap,uv+PD[i]*tx*1.6).r*far;s+=z>d-.05?1.:0.;}sh=s/12.;}
   gl_FragColor=vec4(lc*ndl*sh,0.);}`,
  side:T.DoubleSide,depthTest:false,depthWrite:false,blending:T.CustomBlending,blendEquation:T.AddEquation,blendSrc:T.OneFactor,blendDst:T.OneFactor,blendSrcAlpha:T.ZeroFactor,blendDstAlpha:T.OneFactor});
 const sdep=new T.ShaderMaterial({uniforms:{cp:{value:new T.Vector3()},sd:{value:new T.Vector3()},far:{value:1}},
  vertexShader:'varying vec3 wp;void main(){wp=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);}',
  fragmentShader:'uniform vec3 cp,sd;uniform float far;varying vec3 wp;void main(){gl_FragColor=vec4(dot(cp-wp,sd)/far,0.,0.,1.);}',side:T.DoubleSide});
 return G.bk={cov,light,dist,fin,sun,sdep};
}
/* a shadow material that cuts holes where a texture is transparent (leaves), sharing the light's uniforms */
/* for point lights a leaf writes its distance to g and leaves r "far": leaves cast a light, dappled shadow instead of
   a solid one (a pot plant under a downlight otherwise throws huge dark blobs over the walls round it) */
function cutMat(base,map){const T=G.T,u=Object.assign({},base.uniforms,{map:{value:map}});
 return new T.ShaderMaterial({uniforms:u,vertexShader:'varying vec3 wp;varying vec2 vu;void main(){vu=uv;wp=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);}',
  fragmentShader:base.fragmentShader.replace('varying vec3 wp;','varying vec3 wp;varying vec2 vu;uniform sampler2D map;').replace('void main(){','void main(){if(texture2D(map,vu).a<.5)discard;').replace('gl_FragColor=vec4(length(wp-lp)/far,1.,0.,1.);','gl_FragColor=vec4(1.,length(wp-lp)/far,0.,1.);'),side:T.DoubleSide})}
/* prepare one region: float accumulation pages, the flattened bake scenes, and a shadow-caster scene */
function bakeSetup(reg){
 const T=G.T,r=G.r,R=G.regions[reg],LM=R.lm,BK=bakeMats();
 const opt={type:T.HalfFloatType,format:T.RGBAFormat,minFilter:T.NearestFilter,magFilter:T.NearestFilter,depthBuffer:false,generateMipmaps:false};
 R.bk={rt:[],scn:[],sh:new T.Scene(),cam:new T.Camera()};
 for(let p=0;p<LM.pages;p++){R.bk.rt.push(new T.WebGLRenderTarget(LM.S,LM.S,opt));R.bk.scn.push(new T.Scene())}
 for(const m of R.obj.children){if(!m.isMesh)continue;const pg=m.userData.pg,kd=m.userData.mk.split('|')[1];
  if(pg>=0){const b=new T.Mesh(m.geometry,BK.light);b.frustumCulled=false;b.userData.bs=m.geometry.boundingSphere;R.bk.scn[pg].add(b)}
  if(kd==='lit'||kd==='cut'){const s=new T.Mesh(m.geometry,BK.dist);s.matrixAutoUpdate=false;
   if(kd==='cut'){const map=texObj(m.userData.mk.split('|')[0]);s.userData.dm=cutMat(BK.dist,map);s.userData.sm=cutMat(BK.sdep,map);s.material=s.userData.dm}else{s.userData.dm=BK.dist;s.userData.sm=BK.sdep}
   R.bk.sh.add(s)}}
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
 const u=BK.light.uniforms;u.lp.value.set(l[0],l[1],l[2]);u.lc.value.set(lin(l[3]),lin(l[4]),lin(l[5])).multiplyScalar(l[7]*G.LK*(R.lk||1));u.lr.value=lr;u.far.value=far;u.cube.value=G.bkCubeRT.texture;u.dn.value=l[8]?1:0;
 r.autoClear=false;
 for(let p=0;p<R.bk.rt.length;p++){let any=false;for(const b of R.bk.scn[p].children){const s=b.userData.bs;b.visible=Math.hypot(s.center.x-l[0],s.center.y-l[1],s.center.z-l[2])<s.radius+lr;any=any||b.visible}
  if(!any)continue;r.setRenderTarget(R.bk.rt[p]);r.render(R.bk.scn[p],R.bk.cam)}
 r.setRenderTarget(null);r.autoClear=ac;r.setClearColor(cc,ca);
}
/* the sun: render depth along its direction over the area of interest, then add sunlight (N·L, soft shadow) to every page */
function bakeSun(reg){
 const T=G.T,r=G.r,R=G.regions[reg],S=G.sun[reg],BK=bakeMats();
 const sd=new T.Vector3(...S.d).normalize(),c=new T.Vector3(...S.c0),D=S.half*2.5,far=D*2,cp=c.clone().addScaledVector(sd,D);
 const ft=r.extensions.has('EXT_color_buffer_float')?T.FloatType:T.HalfFloatType,res=S.res||4096;
 const rt=new T.WebGLRenderTarget(res,res,{type:ft,format:T.RGBAFormat,minFilter:T.NearestFilter,magFilter:T.NearestFilter,generateMipmaps:false});
 const cam=new T.OrthographicCamera(-S.half,S.half,S.half,-S.half,.1,far);cam.position.copy(cp);cam.up.set(0,1,0);if(Math.abs(sd.y)>.95)cam.up.set(0,0,1);cam.lookAt(c);cam.updateMatrixWorld(true);cam.updateProjectionMatrix();
 BK.sdep.uniforms.cp.value.copy(cp);BK.sdep.uniforms.sd.value.copy(sd);BK.sdep.uniforms.far.value=far;
 const ac=r.autoClear,cc=r.getClearColor(new T.Color()),ca=r.getClearAlpha();
 for(const o of R.bk.sh.children)o.material=o.userData.sm;r.setRenderTarget(rt);r.setClearColor(0xffffff,1);r.autoClear=true;r.clear();r.render(R.bk.sh,cam);for(const o of R.bk.sh.children)o.material=o.userData.dm;
 const u=BK.sun.uniforms;u.sd.value.copy(sd);u.cp.value.copy(cp);u.far.value=far;u.smap.value=rt.texture;u.tx.value=1/res;u.lc.value.set(lin(S.c[0]),lin(S.c[1]),lin(S.c[2])).multiplyScalar(S.k);
 u.smat.value.multiplyMatrices(cam.projectionMatrix,cam.matrixWorldInverse);
 r.autoClear=false;
 for(let p=0;p<R.bk.rt.length;p++){for(const b of R.bk.scn[p].children)b.visible=true;R.bk.scn[p].overrideMaterial=BK.sun;r.setRenderTarget(R.bk.rt[p]);r.render(R.bk.scn[p],R.bk.cam);R.bk.scn[p].overrideMaterial=null}
 r.setRenderTarget(null);r.autoClear=ac;r.setClearColor(cc,ca);rt.dispose();
}
/* dilate gutters, pack to RGBM, hand the pages to the materials, free the float targets */
function bakeFinish(reg){
 const T=G.T,r=G.r,R=G.regions[reg],LM=R.lm,BK=bakeMats();
 if(!G.bkQuad){G.bkQuad=new T.Mesh(new T.PlaneGeometry(2,2),BK.fin);G.bkQuad.frustumCulled=false;G.bkQS=new T.Scene();G.bkQS.add(G.bkQuad)}
 R.lmTex=[];
 for(let p=0;p<LM.pages;p++){const out=new T.WebGLRenderTarget(LM.S,LM.S,{type:T.UnsignedByteType,format:T.RGBAFormat,minFilter:T.LinearFilter,magFilter:T.LinearFilter,depthBuffer:false,generateMipmaps:false});
  BK.fin.uniforms.src.value=R.bk.rt[p].texture;BK.fin.uniforms.px.value=1/LM.S;r.setRenderTarget(out);r.render(G.bkQS,R.bk.cam);
  // read the page back into a plain texture and delete the framebuffer: a texture still attached to a render target
  // and sampled every frame can make drivers copy it per draw (that leaked memory fast)
  const px=new Uint8Array(LM.S*LM.S*4);r.readRenderTargetPixels(out,0,0,LM.S,LM.S,px);out.dispose();R.bk.rt[p].dispose();
  const t=new T.DataTexture(px,LM.S,LM.S,T.RGBAFormat,T.UnsignedByteType);t.minFilter=t.magFilter=T.LinearFilter;t.generateMipmaps=false;t.channel=1;t.colorSpace=T.NoColorSpace;t.needsUpdate=true;t.onUpdate=()=>{t.image={width:LM.S,height:LM.S,data:null}};R.lmTex.push(t)}
 r.setRenderTarget(null);R.bk=null;
 R.obj.traverse(o=>{if(o.isMesh&&o.userData.mk&&o.userData.pg>=0){o.userData.lmk=reg+':'+o.userData.pg;o.material=getMat(o.userData.mk,o.userData.lmk)}});
 return R.lmTex.map(t=>t.image.data);
}
/* the finished pages are cached in IndexedDB, keyed by a fingerprint of the region's lights and lightmap layout,
   so only the first load on a device (or after the level changes) pays for the bake */
const LMDB={db:null,open(){return new Promise(res=>{try{const q=indexedDB.open('opsec_lightmaps',1);q.onupgradeneeded=()=>q.result.createObjectStore('lm');q.onsuccess=()=>{LMDB.db=q.result;res()};q.onerror=()=>res()}catch(e){res()}})},
 get(k){return new Promise(res=>{if(!LMDB.db)return res(null);try{const q=LMDB.db.transaction('lm').objectStore('lm').get(k);q.onsuccess=()=>res(q.result||null);q.onerror=()=>res(null)}catch(e){res(null)}})},
 put(k,v){if(!LMDB.db)return;try{const t=LMDB.db.transaction('lm','readwrite');t.objectStore('lm').put(v,k)}catch(e){}}};
function lmKey(reg){const R=G.regions[reg],L=G.lights[reg]||[];let h=0;const add=v=>{h=(h*31+Math.round(v*100))|0};
 for(const l of L)l.forEach(add);const SU=G.sun&&G.sun[reg];if(SU)[...SU.d,...SU.c,SU.k,SU.half,...SU.c0].forEach(add);let verts=0;R.obj.traverse(o=>{if(o.isMesh&&o.userData.pg>=0){verts+=o.geometry.attributes.position.count;const a=o.geometry.attributes.lmuv.array;for(let i=0;i<a.length;i+=97)add(a[i]*1e4)}});
 return['v7',reg,R.lm.S,R.lm.pages,R.lm.D.toFixed(3),verts,h,G.LK,R.lk||1,LOOK.reach,BAKE.fill,BAKE.soft,BAKE.cube].join('|')}
function lmApply(reg,pages){const T=G.T,R=G.regions[reg],S=R.lm.S;R.lmTex=pages.map(px=>{const t=new T.DataTexture(px,S,S,T.RGBAFormat,T.UnsignedByteType);t.minFilter=t.magFilter=T.LinearFilter;t.generateMipmaps=false;t.channel=1;t.colorSpace=T.NoColorSpace;t.needsUpdate=true;t.onUpdate=()=>{t.image={width:S,height:S,data:null}};return t});
 R.obj.traverse(o=>{if(o.isMesh&&o.userData.mk&&o.userData.pg>=0){o.userData.lmk=reg+':'+o.userData.pg;o.material=getMat(o.userData.mk,o.userData.lmk)}})}
/* Lightmaps live per region, and only the place you're in (plus the one you just left, so hopping between the
   lobby and the 13th floor is instant) is held on the GPU. The first visit bakes a region and caches the pages in
   IndexedDB; later visits just load them. Leaving frees the textures and vertex buffers (they re-upload from memory
   if you come back), so the huge convention centre never shares the GPU with the station and the flat. */
const LMKEEP=2;
async function regionLM(reg,prog){
 const R=G.regions[reg];if(!R||!R.obj)return false;
 if(R.lmTex){lmTouch(reg);return true}
 if(window.__bakeOnly&&!window.__bakeOnly.includes(reg)){R.lmSkip=1;return false}
 if(!bakeOK())return false;
 await LMDB.open();const key=lmKey(reg),hit=window.__noLMCache?null:await LMDB.get(key);
 if(hit&&hit.length===R.lm.pages){prog&&prog(1,true);lmApply(reg,hit);lmTouch(reg);return true}
 const L=G.lights[reg],total=L.length+(G.sun&&G.sun[reg]?1:0)+1;let done=0;
 try{bakeSetup(reg)}catch(e){console.error('bake failed',e);return false}
 let i=0,ok=true;
 await new Promise(res=>{const step=()=>{const t0=performance.now();
  try{let k=0;while(i<L.length&&k<4&&(k===0||performance.now()-t0<30)){bakeLight(reg,i);i++;done++;k++}}catch(e){console.error('bake failed',e);ok=false;res();return}
  // wait for the GPU to really finish this batch (reading one pixel forces it): honest progress, no piled-up work
  bakeSync();prog&&prog(done/total,false);if(i<L.length)setTimeout(step,0);else res()};setTimeout(step,0)});
 if(!ok)return false;
 if(G.sun&&G.sun[reg]){try{bakeSun(reg)}catch(e){console.error('sun bake failed',e)}bakeSync();done++;prog&&prog(done/total,false)}
 const px=bakeFinish(reg);LMDB.put(key,px);
 if(G.bkCubeRT){G.bkCubeRT.dispose();G.bkCube=null}
 lmTouch(reg);if(window.__bkLog)console.log('# c '+G.lmRes.join(','));prog&&prog(1,false);return true;
}
function lmTouch(reg){G.lmRes=(G.lmRes||[]).filter(r=>r!==reg);G.lmRes.push(reg);while(G.lmRes.length>LMKEEP){const r=G.lmRes.shift();if(r!==WD.reg)regionRelease(r);else G.lmRes.push(r)}}
/* hand a region's GPU memory back: lightmap pages, the materials that use them, and its vertex buffers */
function regionRelease(reg){const R=G.regions[reg];if(!R||!R.obj)return;
 if(R.lmTex){for(const t of R.lmTex)t.dispose();R.lmTex=null}
 const rx=new RegExp('\\|'+reg+':\\d+$');for(const k in G.mats)if(rx.test(k)){G.mats[k].dispose();delete G.mats[k]}
 R.obj.traverse(o=>{if(o.isMesh&&o.userData.mk){if(o.userData.lmk){o.userData.lmk=null;o.material=getMat(o.userData.mk)}o.geometry.dispose()}});
 G.lmRes=(G.lmRes||[]).filter(r=>r!==reg)}
/* one region at a time: the loop asks for the region the player is in; a prefetch at boot warms the likely one */
function regionNeed(reg,show){
 const R=G.regions[reg];if(!R||R.lmTex||R.lmSkip||!G.baked)return;if(G.lmBusy)return;
 G.lmBusy=reg;G.baking=true;
 // let go of the mouse while the loading screen is up (it's taken back when the bake is done, or on any click/key)
 const hadLock=show&&typeof locked==='function'&&locked();if(hadLock){WD.selfUnlock=true;try{document.exitPointerLock()}catch(e){}}
 lmUI(show,reg,null);
 regionLM(reg,(f,cached)=>{G.bakeP=f;lmUI(show,reg,cached,f)}).then(ok=>{
  if(!ok&&!R.lmSkip){G.baked=false;setQuality(G.q)}
  G.lmBusy=null;G.baking=false;lmUI(false);G.forceFrame=true;if(hadLock&&typeof relock==='function')setTimeout(relock,50)});
}
function lmUI(on,reg,cached,f){const e=$('loading');if(!e)return;e.classList.toggle('on',!!on);
 // the game view stays hidden while a bake runs: compositing a live canvas the GPU is busy baking into is slow and,
 // in some drivers, piles up memory
 const gl=$('gl');if(gl)gl.style.visibility=on?'hidden':'';if(!on)return;
 const p=Math.round((f||0)*100),bar=$('loadBar'),t=$('loadPct');if(bar)bar.style.width=p+'%';if(t)t.textContent=p+'%'}
/* wait for the GPU to finish everything queued so far: finish() is a real round trip; the 1-pixel read alone isn't
   (it only waits for work on its own target), and without a true sync the queued bake work can pile up into gigabytes */
function bakeSync(){const T=G.T,r=G.r;if(!G.bkSyncRT){G.bkSyncRT=new T.WebGLRenderTarget(1,1,{depthBuffer:false});G.bkSyncBuf=new Uint8Array(4)}
 try{r.getContext().finish()}catch(e){}r.readRenderTargetPixels(G.bkSyncRT,0,0,1,1,G.bkSyncBuf)}
/* light at a point, for things that move (characters, crowds, doors): every nearby source, no shadows */
function probeAt(reg,x,y,z,out){
 const L=G.lights[reg]||[];let r=0,g=0,b=0;
 for(const l of L){const dx=l[0]-x,dy=l[1]-y,dz=l[2]-z,d=Math.hypot(dx,dy,dz),R=l[6]*LOOK.reach;if(d>=R)continue;let f=(1-d/R)*(1-d/R)*l[7]*G.LK*.55;if(l[8])f*=.05+.95*Math.min(1,Math.max(0,(dy/(d||1)-.05)/.5));r+=lin(l[3])*f;g+=lin(l[4])*f;b+=lin(l[5])*f}
 out.r=r;out.g=g;out.b=b;return out;
}
