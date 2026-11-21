/* ============ THREE.JS ENGINE ============ */
/* Levels are still described with the small builder API below (box, quad, room...). Quads are collected
   per region, per 32 m chunk and per material, then turned into merged BufferGeometries so the scene is a
   few hundred draw calls with frustum culling. Lighting is real time: a hemisphere fill per area plus a
   pool of point lights that follows the player and picks the nearest level lights. */
const G={qd:{},sun:{},lmK:1,LK:7.6,HK:5.5,ok:false,regions:{},boxes:{},walls:{},lights:{},surf:{},tx:{},mats:{},rects:{},chars:[],q:'high'};
const lin=c=>c<=.04045?c/12.92:Math.pow((c+.055)/1.055,2.4);
const QUALITY={
 low:{dpr:1,lights:6,bloom:false,msaa:0,std:false,shadowBlobs:true},
 medium:{dpr:1.5,lights:10,bloom:true,msaa:0,std:true,env:true,grade:true,bump:true},
 high:{dpr:2,lights:16,bloom:true,msaa:0,fxaa:true,std:true,env:true,grade:true,ao:true,bump:true}
};
/* the look, in one place: emissive gain is compressed above 1 so signs and fixtures read as lit without
   blooming into fog; bloom only catches what is genuinely bright */
const LOOK={exposure:1.12,hemi:3.2,fill:.5,env:{home:.6,con:.5,f13:.55,office:.7,station:.7},bloomStr:.26,bloomRad:.62,bloomThr:1.05,ao:.85,sat:1.12,con:1.07,vig:.12,light:7.6,reach:1.3,bake:1.7,bakeFill:.3,bakeEnv:.4};
/* ---- textures: every texture gets its own canvas; small non-repeating ones are packed into atlases later ---- */
function tex(key,w,h,paint){
 if(G.tx[key])return key;
 const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');paint(x,w,h);
 G.tx[key]={c,w,h,rep:false,used:false,paint};return key;
}
/* a texture of its own (never the shared atlas) for meshes built outside the level builder, whose UVs span 0..1:
   handing them an atlased texture shows the whole atlas, every sign and poster in the game, on one door */
function soloTex(key){
 G.solo=G.solo||{};if(G.solo[key])return G.solo[key];const X=G.tx[key];if(!X)return null;const T=G.T;
 const c=document.createElement('canvas');c.width=X.w;c.height=X.h;X.paint(c.getContext('2d'),X.w,X.h);
 const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;t.anisotropy=G.aniso;return G.solo[key]=t;
}
/* ---- geometry building ---- */
let BR=null;
function region(name,o){G.regions[name]={groups:{},fog:o.fog,fr:o.fr||[8,60],amb:null,day:!!o.day};G.ftag=G.ftag||{};G.ftag[name]=[];G.boxes[name]=[];G.walls[name]=[];G.lights[name]=[];G.surf[name]=[];BR=name}
function addLight(x,y,z,col,range,inten){G.lights[BR].push([x,y,z,col[0],col[1],col[2],range,inten||1])}
function grp(m,cx,cz){
 const R=G.regions[BR],t=m.t||'white',kind=m.glass?'glass':m.e?'emit':(m.cut?'cut':'lit');
 const prof=m.e?'':(m.r!==undefined?m.r:.85)+':'+(m.m||0);
 const k=Math.floor(cx/32)+','+Math.floor(cz/32)+'|'+t+'|'+kind+'|'+prof;
 return R.groups[k]||(R.groups[k]={t,kind,prof,r:m.r,m:m.m||0,p:[],n:[],u:[],c:[],l:[],q:[]});
}
function quad(a,b,c,d,m,uw,vh){
 const e1=[b[0]-a[0],b[1]-a[1],b[2]-a[2]],e2=[d[0]-a[0],d[1]-a[1],d[2]-a[2]];
 let nx=e1[1]*e2[2]-e1[2]*e2[1],ny=e1[2]*e2[0]-e1[0]*e2[2],nz=e1[0]*e2[1]-e1[1]*e2[0];const nl=Math.hypot(nx,ny,nz);
 if(!(nl>1e-7))return; // zero-area quads give NaN normals, which bloom smears across the screen
 nx/=nl;ny/=nl;nz/=nl;
 const cx=(a[0]+c[0])/2,cz=(a[2]+c[2])/2;const g=grp(m,cx,cz);
 const T=G.tx[m.t||'white'];if(T){T.used=true;if(uw>1.01||vh>1.01||uw<0||vh<0)T.rep=true}
 const col=m.c||[1,1,1];const gk0=m.e?(m.k!==undefined?m.k:(m.t==='white'||!m.t?1.9:1.05)):1,gk=gk0>1?1+(gk0-1)*.55:gk0;
 const lc=[lin(col[0])*gk,lin(col[1])*gk,lin(col[2])*gk];
 // breakpoints along the vertical edge so walls darken towards the floor (cheap baked AO)
 let ss=[0,1],ts=[0,1];
 const vert=Math.abs(ny)<.5&&!m.e&&!m.glass&&G.ao!==undefined;
 if(vert){const vAx=Math.abs(e2[1])>=Math.abs(e1[1])?2:1,ev=vAx===2?e2:e1,y0=vAx===2?a[1]:a[1];
  const br=[0,1];for(const yy of[G.ao+.3,G.ao+1.1]){const t=(yy-y0)/(ev[1]||1e-9);if(t>.02&&t<.98)br.push(t)}br.sort((p,q)=>p-q);if(vAx===2)ts=br;else ss=br}
 const P=(s,t)=>[a[0]+e1[0]*s+e2[0]*t,a[1]+e1[1]*s+e2[1]*t,a[2]+e1[2]*s+e2[2]*t];
 const ao=y=>vert?(.62+.38*Math.min(1,Math.max(0,(y-G.ao)/1.1))):1;
 // every lit quad gets its own patch in the region's lightmap (packed later); (s,t) place each vertex inside it
 const lmq=!m.e&&!m.glass&&!m.cut?(G.qd[BR]||(G.qd[BR]=[])).push({w:Math.hypot(e1[0],e1[1],e1[2])*G.lmK,h:Math.hypot(e2[0],e2[1],e2[2])*G.lmK})-1:-1;
 const push=(s,t)=>{const p=P(s,t),k=ao(p[1]);g.p.push(p[0],p[1],p[2]);g.n.push(nx,ny,nz);g.u.push(uw*s,vh*t);g.c.push(lc[0]*k,lc[1]*k,lc[2]*k);g.l.push(s,t);g.q.push(lmq)};
 for(let i=0;i<ss.length-1;i++)for(let j=0;j<ts.length-1;j++){const s0=ss[i],s1=ss[i+1],t0=ts[j],t1=ts[j+1];push(s0,t0);push(s1,t0);push(s1,t1);push(s0,t0);push(s1,t1);push(s0,t1)}
}
function colBox(x0,z0,x1,z1,y0,y1){G.boxes[BR].push([Math.min(x0,x1),Math.min(z0,z1),Math.max(x0,x1),Math.max(z0,z1),y0,y1])}
function box(x0,y0,z0,x1,y1,z1,m,o){
 o=o||{};const s=(m.side||m),t=(m.top||m),bt=(m.bottom||m);
 const sc=x=>x*(s.s||.5);
 const W=x1-x0,H=y1-y0,D=z1-z0;
 if(!o.nf){
 if(!o.nz1)quad([x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1],s,sc(W),sc(H));
 if(!o.nz0)quad([x1,y0,z0],[x0,y0,z0],[x0,y1,z0],[x1,y1,z0],s,sc(W),sc(H));
 if(!o.nx1)quad([x1,y0,z1],[x1,y0,z0],[x1,y1,z0],[x1,y1,z1],s,sc(D),sc(H));
 if(!o.nx0)quad([x0,y0,z0],[x0,y0,z1],[x0,y1,z1],[x0,y1,z0],s,sc(D),sc(H));
 }
 if(!o.nt)quad([x0,y1,z1],[x1,y1,z1],[x1,y1,z0],[x0,y1,z0],t,W*(t.s||.5),D*(t.s||.5));
 if(o.b)quad([x0,y0,z0],[x1,y0,z0],[x1,y0,z1],[x0,y0,z1],bt,W*(bt.s||.5),D*(bt.s||.5));
 if(o.col!==false&&H>.1)colBox(x0,z0,x1,z1,y0,y1);
 if(o.walk){surf(x0,z0,x1,z1,y1);ftag(x0,z0,x1,z1,y1,t)}
}
function panel(cx,y,cz,w,h,dir,m){
 const hw=w/2;
 if(dir==='s')quad([cx-hw,y,cz],[cx+hw,y,cz],[cx+hw,y+h,cz],[cx-hw,y+h,cz],m,1,1);
 if(dir==='n')quad([cx+hw,y,cz],[cx-hw,y,cz],[cx-hw,y+h,cz],[cx+hw,y+h,cz],m,1,1);
 if(dir==='e')quad([cx,y,cz+hw],[cx,y,cz-hw],[cx,y+h,cz-hw],[cx,y+h,cz+hw],m,1,1);
 if(dir==='w')quad([cx,y,cz-hw],[cx,y,cz+hw],[cx,y+h,cz+hw],[cx,y+h,cz-hw],m,1,1);
}
/* every floor remembers what it's made of, so footsteps can sound like it */
function ftag(x0,z0,x1,z1,y,m,st){if(G.ftag&&G.ftag[BR]&&m)G.ftag[BR].push([Math.min(x0,x1),Math.min(z0,z1),Math.max(x0,x1),Math.max(z0,z1),y,m.t||'white',st?1:0,m.m||0])}
function floorQ(x0,z0,x1,z1,y,m){ftag(x0,z0,x1,z1,y,m);quad([x0,y,z1],[x1,y,z1],[x1,y,z0],[x0,y,z0],m,(x1-x0)*m.s,(z1-z0)*m.s)}
function ceilQ(x0,z0,x1,z1,y,m){quad([x0,y,z0],[x1,y,z0],[x1,y,z1],[x0,y,z1],m,(x1-x0)*m.s,(z1-z0)*m.s)}
function cross(x,y,z,w,h,m){const hw=w/2;
 quad([x-hw,y,z],[x+hw,y,z],[x+hw,y+h,z],[x-hw,y+h,z],m,1,1);quad([x+hw,y,z],[x-hw,y,z],[x-hw,y+h,z],[x+hw,y+h,z],m,1,1);
 quad([x,y,z+hw],[x,y,z-hw],[x,y+h,z-hw],[x,y+h,z+hw],m,1,1);quad([x,y,z-hw],[x,y,z+hw],[x,y+h,z+hw],[x,y+h,z-hw],m,1,1)}
/* walkable surfaces: flat or ramp (ya at min coord of ax, yb at max) */
function surf(x0,z0,x1,z1,y){G.surf[BR].push({x0:Math.min(x0,x1),z0:Math.min(z0,z1),x1:Math.max(x0,x1),z1:Math.max(z0,z1),y})}
function ramp(x0,z0,x1,z1,ya,yb,ax){G.surf[BR].push({x0,z0,x1,z1,ya,yb,ax})}
/* stairs: dir = direction of ascent: 'x+','x-','z+','z-' */
function stairs(x0,z0,x1,z1,y0,y1,dir,m,o){
 o=o||{};const n=Math.max(2,Math.round((y1-y0)/.19)),dh=(y1-y0)/n;const ax=dir[0],up=dir[1]==='+';
 const L=ax==='x'?x1-x0:z1-z0,dl=L/n;const nose=o.nose||MT.plain('#2a2230');
 for(let i=0;i<n;i++){const top=y0+(i+1)*dh;const a=up?i*dl:L-(i+1)*dl;
  if(ax==='x'){box(x0+a,o.solid===false?top-.12:y0,z0,x0+a+dl,top,z1,m,{col:false,nz0:1,nz1:o.sides?0:1});const ex=up?x0+a:x0+a+dl;box(ex-.025,top-.03,z0,ex+.025,top+.005,z1,nose,{col:false,nz0:1,nz1:1})}
  else{box(x0,o.solid===false?top-.12:y0,z0+a,x1,top,z0+a+dl,m,{col:false,nx0:1,nx1:o.sides?0:1});const ez=up?z0+a:z0+a+dl;box(x0,top-.03,ez-.025,x1,top+.005,ez+.025,nose,{col:false,nx0:1,nx1:1})}}
 ftag(x0,z0,x1,z1,Math.max(y0,y1),m.top||m,1);
 if(ax==='x')ramp(x0,z0,x1,z1,up?y0:y1,up?y1:y0,'x');else ramp(x0,z0,x1,z1,up?y0:y1,up?y1:y0,'z');
}
function slab(x0,z0,x1,z1,y,th,m,mu){floorQ(x0,z0,x1,z1,y,m);ceilQ(x0,z0,x1,z1,y-th,mu||m);const e=mu||m;
 quad([x0,y-th,z1],[x1,y-th,z1],[x1,y,z1],[x0,y,z1],e,1,1);quad([x1,y-th,z0],[x0,y-th,z0],[x0,y,z0],[x1,y,z0],e,1,1);
 quad([x1,y-th,z1],[x1,y-th,z0],[x1,y,z0],[x1,y,z1],e,1,1);quad([x0,y-th,z0],[x0,y-th,z1],[x0,y,z1],[x0,y,z0],e,1,1);surf(x0,z0,x1,z1,y)}
function railing(x0,z0,x1,z1,y,o){o=o||{};const h=o.h||1.05,m=o.m||MT.brass,g=o.glass;
 const dx=x1-x0,dz=z1-z0,L=Math.hypot(dx,dz),n=Math.max(1,Math.round(L/1.2));const y2=o.y2!==undefined?o.y2:y;
 for(let i=0;i<=n;i++){const t=i/n,px=x0+dx*t,pz=z0+dz*t,py=y+(y2-y)*t;box(px-.035,py,pz-.035,px+.035,py+h,pz+.035,m,{col:false,nt:1})}
 const ya=y+h,yb=y2+h,hx_=dx===0?.05:0,hz=dz===0?.05:0;
 if(y===y2){box(Math.min(x0,x1)-hx_,ya-.06,Math.min(z0,z1)-hz,Math.max(x0,x1)+hx_,ya,Math.max(z0,z1)+hz,m,{col:false});
  if(g){const gx=dx===0?.012:0,gz=dz===0?.012:0;box(Math.min(x0,x1)-gx,y+.08,Math.min(z0,z1)-gz,Math.max(x0,x1)+gx,ya-.08,Math.max(z0,z1)+gz,g,{col:false,nt:1})}
  else{box(Math.min(x0,x1)-hx_/2,y+h*.5-.02,Math.min(z0,z1)-hz/2,Math.max(x0,x1)+hx_/2,y+h*.5+.02,Math.max(z0,z1)+hz/2,m,{col:false});box(Math.min(x0,x1)-hx_/2,y+.12,Math.min(z0,z1)-hz/2,Math.max(x0,x1)+hx_/2,y+.16,Math.max(z0,z1)+hz/2,m,{col:false})}}
 else{for(let i=0;i<n;i++){const t0=i/n,t1=(i+1)/n;const p0=[x0+dx*t0,ya+(yb-ya)*t0,z0+dz*t0],p1=[x0+dx*t1,ya+(yb-ya)*t1,z0+dz*t1];
  const bx0=Math.min(p0[0],p1[0])-hx_,bx1=Math.max(p0[0],p1[0])+hx_,bz0=Math.min(p0[2],p1[2])-hz,bz1=Math.max(p0[2],p1[2])+hz,my=(p0[1]+p1[1])/2;box(bx0,my-.06,bz0,bx1,my,bz1,m,{col:false})}}
 colBox(x0-hx_,z0-hz,x1+hx_,z1+hz,Math.min(y,y2)-(o.under||0),Math.max(ya,yb)+.3);
}
/* ---- renderer ---- */
function glInit(cv){
 if(!window.THREE)return false;
 const T=THREE;
 let r=null;try{r=new T.WebGLRenderer({canvas:cv,antialias:true,powerPreference:'high-performance',stencil:false})}catch(e){console.warn(e)}
 if(!r||!r.capabilities)return false;
 r.outputColorSpace=T.SRGBColorSpace;r.toneMapping=T.NeutralToneMapping||T.ACESFilmicToneMapping;r.toneMappingExposure=LOOK.exposure;
 G.r=r;G.cv=cv;G.T=T;
 // the level was lit with a bounded (1-d/R)^2 falloff; keep that look instead of inverse-square,
 // which blows out ceilings that sit right next to their lights
 T.ShaderChunk.lights_pars_begin=T.ShaderChunk.lights_pars_begin.replace('float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );','float x_ = saturate( 1.0 - lightDistance / max( cutoffDistance, 0.001 ) ); return x_ * x_; float distanceFalloff = 1.0;');
 // baked lightmaps are stored as 8-bit RGBM (rgb * a * range): decode where three reads the lightmap
 T.ShaderChunk.lights_fragment_maps=T.ShaderChunk.lights_fragment_maps.replace('vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;','vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapTexel.a * '+BAKE.rgbm.toFixed(1)+' * lightMapIntensity;');
 G.scene=new T.Scene();
 G.cam=new T.PerspectiveCamera(70,1,.05,500);G.cam.rotation.order='YXZ';
 G.HK=LOOK.hemi;G.hemi=new T.HemisphereLight(0xffffff,0x222222,1);G.scene.add(G.hemi);
 G.fog=new T.Fog(0x000000,10,80);G.scene.fog=G.fog;
 G.aniso=Math.min(8,r.capabilities.getMaxAnisotropy());
 G.pool=[];
 sky();
 G.q=(typeof SETTINGS!=='undefined'&&SETTINGS.gfx)||(WD.touch?'medium':'high');
 G.ok=true;return true;
}
function setQuality(q){
 if(!QUALITY[q])q='high';G.q=q;const Q=QUALITY[q],T=G.T;if(!G.r)return;
 // light pool size
 const NL=G.baked?0:Q.lights;
 while(G.pool.length<NL){const l=new T.PointLight(0xffffff,0,10,1);l.userData={src:-1,k:0,tk:0};G.scene.add(l);G.pool.push(l)}
 while(G.pool.length>NL){const l=G.pool.pop();G.scene.remove(l);l.dispose&&l.dispose()}
 G.poolT=0;G.poolReg=null;
 // swap world materials
 for(const k in G.regions){const R=G.regions[k];if(!R.obj)continue;R.obj.traverse(o=>{if(o.isMesh&&o.userData.mk)o.material=getMat(o.userData.mk,o.userData.lmk)})}
 // post-processing
 if(G.composer){G.composer.renderTarget1.dispose();G.composer.renderTarget2.dispose();G.composer=null}
 if(Q.bloom){
  const size=G.r.getDrawingBufferSize(new T.Vector2());
  const rt=new T.WebGLRenderTarget(Math.max(1,size.x),Math.max(1,size.y),{type:T.HalfFloatType,samples:Q.msaa});
  const c=new T.EffectComposer(G.r,rt);c.addPass(new T.RenderPass(G.scene,G.cam));
  // glossy floors right under bright lights can overflow half-float to Inf; bloom would smear that into NaN
  // ambient occlusion: contact shadows where walls meet floors, under furniture, round people's feet
  G.gtao=null;if(Q.ao&&T.GTAOPass){try{const ao=new T.GTAOPass(G.scene,G.cam,Math.max(1,size.x>>1),Math.max(1,size.y>>1));
   ao.updateGtaoMaterial({radius:.55,distanceExponent:1.6,thickness:1.2,scale:1,samples:12,distanceFallOff:1});ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12});ao.blendIntensity=LOOK.ao;
   // cut-out characters, glass, the sky and markers would stamp rectangles into the AO buffer: leave them out
   ao.overrideVisibility=function(){const cache=this._visibilityCache;this.scene.traverse(o=>{cache.set(o,o.visible);if(o.isPoints||o.isLine||o.isSprite||o.userData.noAO)o.visible=false})};
   const ss=ao.setSize.bind(ao);ao.setSize=(w,h)=>ss(Math.max(1,w>>1),Math.max(1,h>>1));c.addPass(ao);G.gtao=ao}catch(e){console.warn(e);G.gtao=null}}
  c.addPass(new T.ShaderPass({uniforms:{tDiffuse:{value:null}},vertexShader:'varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'uniform sampler2D tDiffuse;varying vec2 v;void main(){vec4 c=texture2D(tDiffuse,v);c.rgb=clamp(c.rgb,0.,48.);if(c.r!=c.r||c.g!=c.g||c.b!=c.b)c.rgb=vec3(0.);gl_FragColor=c;}'}));
  G.bloom=new T.UnrealBloomPass(new T.Vector2(size.x/2,size.y/2),LOOK.bloomStr,LOOK.bloomRad,LOOK.bloomThr);c.addPass(G.bloom);
  c.addPass(new T.OutputPass());
  G.grade=null;if(Q.grade){G.grade=new T.ShaderPass(GRADE);c.addPass(G.grade)}
  G.fxaa=null;if(Q.fxaa){G.fxaa=new T.ShaderPass(T.FXAAShader);c.addPass(G.fxaa)}G.composer=c;
 }
 G.dprCap=Q.dpr;G.dprK=1;G.sizeKey='';
}
/* colour grade, after tone mapping: a touch of contrast and saturation, cool aubergine shadows, warm highlights,
   a soft vignette, and a whisper of animated grain that also dithers away banding in the dark gradients */
const GRADE={uniforms:{tDiffuse:{value:null},t:{value:0},res:{value:null},sat:{value:1},con:{value:1},vig:{value:0},sh:{value:null},hi:{value:null}},
 vertexShader:'varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
 fragmentShader:'uniform sampler2D tDiffuse;uniform float t,sat,con,vig;uniform vec2 res;uniform vec3 sh,hi;varying vec2 v;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}'+
 'void main(){vec4 c=texture2D(tDiffuse,v);vec3 x=c.rgb;float l=dot(x,vec3(.2126,.7152,.0722));x=mix(vec3(l),x,sat);x=clamp((x-.5)*con+.5,0.,1.);'+
 'float s=1.-smoothstep(0.,.45,l),g=smoothstep(.45,1.,l);x+=sh*s*.06;x*=mix(vec3(1.),hi,g*.6);'+
 'vec2 q=v-.5;q.x*=res.x/res.y;x*=1.-vig*smoothstep(.3,1.,length(q));'+
 'x+=(h(v*res+fract(t)*91.7)-.5)*(2.2/255.);gl_FragColor=vec4(clamp(x,0.,1.),c.a);}'};
/* reflection + soft ambient light per region: a small room built from that region's own light colours
   (warm ceiling glow, darker walls, a floor that catches it), blurred into an environment map. Glossy floors,
   brass, chrome and glass finally have something to reflect, and the fill light has direction. */
function buildEnv(reg){
 const T=G.T,R=G.regions[reg],L=G.lights[reg]||[];G.env=G.env||{};if(G.env[reg])return G.env[reg];
 let cr=0,cg=0,cb=0,w=0;for(const l of L){const k=l[7]*l[6];cr+=lin(l[3])*k;cg+=lin(l[4])*k;cb+=lin(l[5])*k;w+=k}
 const lc=w?[cr/w,cg/w,cb/w]:[1,.9,.8],a=(R.amb||[.3,.3,.35]).map(lin),fg=(R.fog||[.1,.1,.1]).map(lin);
 const sc=new T.Scene(),day=R.day;
 const top=day?new T.Color(.55,.7,1):new T.Color(lc[0]*.55+a[0],lc[1]*.55+a[1],lc[2]*.55+a[2]),wall=new T.Color(a[0]*1.1+fg[0]*.4,a[1]*1.1+fg[1]*.4,a[2]*1.1+fg[2]*.4),floor=new T.Color(a[0]*.35,a[1]*.32,a[2]*.32);
 const m=new T.ShaderMaterial({side:T.BackSide,depthWrite:false,uniforms:{top:{value:top},wall:{value:wall},floor:{value:floor}},
  vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:'uniform vec3 top,wall,floor;varying vec3 p;void main(){vec3 c=mix(floor,wall,smoothstep(-.35,.05,p.y));c=mix(c,top,smoothstep(.1,.85,p.y));gl_FragColor=vec4(c,1.);}'});
 sc.add(new T.Mesh(new T.SphereGeometry(10,32,16),m));
 // fixtures overhead: a few bright panels and strips, in the region's light colour
 const pm=new T.MeshBasicMaterial({color:new T.Color(lc[0]*(day?5:7),lc[1]*(day?5:7),lc[2]*(day?5:7))});
 for(let i=0;i<6;i++){const an=i/6*Math.PI*2,b=new T.Mesh(new T.BoxGeometry(1.6,.1,.6),pm);b.position.set(Math.cos(an)*3.4,4.2,Math.sin(an)*3.4);b.rotation.y=an;sc.add(b)}
 const c=new T.Mesh(new T.BoxGeometry(2.2,.1,2.2),pm);c.position.set(0,5,0);sc.add(c);
 if(day){const sun=new T.Mesh(new T.SphereGeometry(.7,16,8),new T.MeshBasicMaterial({color:new T.Color(14,12,9)}));sun.position.set(5,6,-3);sc.add(sun)}
 const gen=new T.PMREMGenerator(G.r);const rt=gen.fromScene(sc,.035);gen.dispose();
 sc.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material)o.material.dispose()});
 return G.env[reg]=rt.texture;
}
const BUMP={brick:2.2,tile:1.2,tileDark:1.2,concrete:1.4,wood:1,woodDark:1,marble:.5,carpetCon:1.6,carpetHotel:1.6,carpetDark:1.6,carpetGrey:1.6,carpetGallery:1.4,wallHotel:.8,wallCon:.8,panel:1.2,pavers:2,gravel:2.4,grass:1.8,ceil:1,metal:.6,road:1.2,rug:1.4,fabric:1,linen:.6,pegs:1.2};
/* materials are shared between regions and chunks: one per texture/kind/profile */
function getMat(mk,lmk){
 const key=mk+'|'+(QUALITY[G.q].std?'s':'l')+(lmk?'|'+lmk:'');if(G.mats[key])return G.mats[key];
 const T=G.T,[t,kind,prof]=mk.split('|');const map=t==='white'?null:texObj(t);
 let m;
 if(kind==='emit')m=new T.MeshBasicMaterial({map,vertexColors:true});
 else if(kind==='glass'){const o={vertexColors:true,transparent:true,opacity:.16,depthWrite:false,side:T.DoubleSide};m=QUALITY[G.q].std?new T.MeshStandardMaterial(Object.assign(o,{roughness:.05,metalness:.15,envMapIntensity:1.6})):new T.MeshLambertMaterial(o)}
 else{const pr=prof.split(':'),rough=+pr[0],metal=+pr[1];
  const o={map,vertexColors:true};if(kind==='cut'){o.alphaTest=.5;o.side=T.DoubleSide}
  if(QUALITY[G.q].std){o.roughness=Math.max(.3,rough);o.metalness=metal;
   // surface relief from the texture itself: grout lines, brick courses, wood grain, carpet pile catch the light
   const bk=QUALITY[G.q].bump&&map&&BUMP[t];if(bk){o.bumpMap=map;o.bumpScale=bk}
   m=new T.MeshStandardMaterial(o)}else m=new T.MeshLambertMaterial(o)}
 if(lmk&&m.isMeshStandardMaterial||lmk&&m.isMeshLambertMaterial){const[rg,pg]=lmk.split(':'),R=G.regions[rg];if(R&&R.lmTex&&R.lmTex[+pg]){m.lightMap=R.lmTex[+pg];m.lightMapIntensity=LOOK.bake}}
 return G.mats[key]=m;
}
function texObj(t){
 const X=G.tx[t];if(!X)return null;if(X.obj)return X.obj;
 const T=G.T,isA=X.atlas!==undefined,o=isA?G.atlas[X.atlas].tex:new T.CanvasTexture(X.c);
 if(!isA){o.colorSpace=T.SRGBColorSpace;o.wrapS=o.wrapT=T.RepeatWrapping;o.anisotropy=G.aniso;o.generateMipmaps=true;o.minFilter=T.LinearMipmapLinearFilter}
 return X.obj=o;
}
/* pack small, non-repeating textures (signs, posters, screens) into atlases to save draw calls */
function buildAtlases(){
 G.atlas=[];const T=G.T;const W=2048,H=2048;let A=null,sx=0,sy=0,sh=0;
 const fresh=()=>{const c=document.createElement('canvas');c.width=W;c.height=H;A={c,x:c.getContext('2d'),n:G.atlas.length};G.atlas.push(A);sx=sy=sh=0};
 const list=Object.entries(G.tx).filter(([k,X])=>X.used&&!X.rep&&k!=='white'&&X.w<=512&&X.h<=512).sort((a,b)=>b[1].h-a[1].h);
 for(const[k,X]of list){const w=X.w+6,h=X.h+6;if(!A)fresh();if(sx+w>W){sx=0;sy+=sh;sh=0}if(sy+h>H){fresh()}
  const px=sx+3,py=sy+3;const x=A.x;
  for(const[ox,oy]of[[-2,0],[2,0],[0,-2],[0,2]])x.drawImage(X.c,px+ox,py+oy);x.drawImage(X.c,px,py);
  X.atlas=A.n;X.rect=[(px+1)/W,1-(py+X.h-1)/H,(X.w-2)/W,(X.h-2)/H];sx+=w;sh=Math.max(sh,h)}
 for(const A of G.atlas){const t=new T.CanvasTexture(A.c);t.colorSpace=T.SRGBColorSpace;t.anisotropy=G.aniso;t.generateMipmaps=true;t.minFilter=T.LinearMipmapLinearFilter;A.tex=t;A.c=null;A.x=null}
}
/* ---- lightmap packing: each lit quad is a rectangle of texels (its real size x density), shelf-packed onto square pages.
   Density is chosen per region so the whole region fits the page budget; a 1-texel gutter stops neighbours bleeding. */
function packLM(Q){
 const S=2048,maxP={high:4,medium:3,low:2}[G.q]||3;let area=0;for(const q of Q)area+=(q.w+.25)*(q.h+.25);
 let D=Math.min(9,Math.max(1.5,Math.sqrt(maxP*S*S*.62/Math.max(1,area))));
 const order=Q.map((q,i)=>i);
 for(let tries=0;tries<12;tries++){
  for(const q of Q){q.cw=Math.max(2,Math.ceil(q.w*D));q.ch=Math.max(2,Math.ceil(q.h*D))}
  order.sort((a,b)=>Q[b].ch-Q[a].ch);let pg=0,x=0,y=0,sh=0,ok=true;
  for(const i of order){const q=Q[i],w=q.cw+2,h=q.ch+2;if(x+w>S){x=0;y+=sh;sh=0}if(y+h>S){pg++;x=0;y=0;sh=0;if(pg>=maxP){ok=false;break}}q.pg=pg;q.x=x+1;q.y=y+1;x+=w;sh=Math.max(sh,h)}
  if(ok){if(pg===0&&S>1024){const r=packAt(Q,order,1024,D);if(r)return r}return{S,D,pages:pg+1}}D*=.85}
 return{S,D,pages:maxP};
}
function packAt(Q,order,S,D){let x=0,y=0,sh=0;const save=Q.map(q=>[q.x,q.y,q.pg]);
 for(const i of order){const q=Q[i],w=q.cw+2,h=q.ch+2;if(x+w>S){x=0;y+=sh;sh=0}if(y+h>S){Q.forEach((q,k)=>{[q.x,q.y,q.pg]=save[k]});return null}q.pg=0;q.x=x+1;q.y=y+1;x+=w;sh=Math.max(sh,h)}return{S,D,pages:1}}
function finishRegions(){
 const T=G.T;buildAtlases();
 for(const k in G.regions){const R=G.regions[k];const root=new T.Group();root.visible=false;
  // merge groups that now share an atlas texture
  const merged={},LM=R.lm=packLM(G.qd[k]||[]),QD=G.qd[k]||[];
  for(const gk in R.groups){const g=R.groups[gk],X=G.tx[g.t];let tk=g.t;
   if(X&&X.atlas!==undefined){const r=X.rect;for(let i=0;i<g.u.length;i+=2){const u=Math.min(1,Math.max(0,g.u[i])),v=Math.min(1,Math.max(0,g.u[i+1]));g.u[i]=r[0]+u*r[2];g.u[i+1]=r[1]+v*r[3]}tk='@atlas'+X.atlas}
   const mk=tk+'|'+g.kind+'|'+g.prof;
   // a merged mesh may only use one lightmap page, so split by page as well as chunk and material
   for(let v=0;v<g.q.length;v+=3){const q=g.q[v]>=0?QD[g.q[v]]:null,pg=q?q.pg:-1,ck=gk.split('|')[0]+'|'+mk+'|'+pg;
    const M=merged[ck]||(merged[ck]={mk,pg,p:[],n:[],u:[],c:[],l:[]});
    for(let w=v;w<v+3;w++){M.p.push(g.p[w*3],g.p[w*3+1],g.p[w*3+2]);M.n.push(g.n[w*3],g.n[w*3+1],g.n[w*3+2]);M.u.push(g.u[w*2],g.u[w*2+1]);M.c.push(g.c[w*3],g.c[w*3+1],g.c[w*3+2]);
     if(q)M.l.push((q.x+g.l[w*2]*q.cw)/LM.S,(q.y+g.l[w*2+1]*q.ch)/LM.S);else M.l.push(0,0)}}}
  G.qd[k]=null;
  for(const ck in merged){const M=merged[ck];if(!M.p.length)continue;
   if(M.mk.startsWith('@atlas')){const n=+M.mk.split('|')[0].slice(6);const ak='@atlas'+n;if(!G.tx[ak])G.tx[ak]={atlas:n,used:true}}
   const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(M.p,3));g.setAttribute('normal',new T.Float32BufferAttribute(M.n,3));g.setAttribute('uv',new T.Float32BufferAttribute(M.u,2));g.setAttribute('color',new T.Float32BufferAttribute(M.c,3));if(M.pg>=0){const a=new T.Float32BufferAttribute(M.l,2);g.setAttribute('uv1',a);g.setAttribute('lmuv',a)}g.computeBoundingSphere();
   const mesh=new T.Mesh(g,null);mesh.userData.mk=M.mk;mesh.userData.pg=M.pg;mesh.userData.reg=k;const kd=M.mk.split('|')[1];if(kd==='glass')mesh.userData.noAO=1;mesh.matrixAutoUpdate=false;root.add(mesh)}
  R.groups=null;R.obj=root;G.scene.add(root);
  const H={},SH={};
  const put=(Tb,b,x0,z0,x1,z1)=>{for(let x=Math.floor(x0/4);x<=Math.floor(x1/4);x++)for(let z=Math.floor(z0/4);z<=Math.floor(z1/4);z++)(Tb[x+','+z]=Tb[x+','+z]||[]).push(b)};
  for(const b of G.boxes[k])put(H,b,b[0],b[1],b[2],b[3]);
  for(const s of G.surf[k])put(SH,s,s.x0,s.z0,s.x1,s.z1);
  R.hash=H;R.shash=SH;}
 for(const k in G.tx)if(G.tx[k].c&&G.tx[k].atlas!==undefined)G.tx[k].c=null;
 setQuality(G.q);
}
/* ---- sky dome: gradient + stars, follows the camera, fog colour is the horizon ---- */
function sky(){
 const T=G.T;
 const m=new T.ShaderMaterial({side:T.BackSide,depthWrite:false,fog:false,uniforms:{hz:{value:new T.Color(.1,.06,.16)},zn:{value:new T.Color(.012,.012,.05)},t:{value:0},st:{value:1}},
  vertexShader:'varying vec3 vp;void main(){vp=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position.z=gl_Position.w*.9999;}',
  fragmentShader:'uniform vec3 hz;uniform vec3 zn;uniform float t;uniform float st;varying vec3 vp;float h(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,45.164)))*43758.5453);}void main(){float y=clamp(vp.y,0.,1.);vec3 c=mix(hz,zn,pow(y,.55));vec3 q=floor(vp*260.);float s=h(q);float sr=st*step(.9975,s)*smoothstep(.05,.35,vp.y)*(.6+.4*sin(t*2.+s*90.));c+=vec3(sr);c+=hz*.35*pow(1.-y,10.);gl_FragColor=vec4(c,1.);}'});
 G.sky=new T.Mesh(new T.SphereGeometry(300,32,16),m);G.sky.userData.noAO=1;G.sky.renderOrder=-10;G.sky.frustumCulled=false;G.scene.add(G.sky);
}
/* ---- light pool: the nearest level lights are mirrored into a fixed set of real point lights ---- */
/* ---- light pool (only without baked lighting): the nearest level lights are mirrored into a few real point lights ---- */
function updLights(dt,force){
 const reg=WD.reg,L=G.lights[reg]||[];const P=G.pool;if(!P.length)return;
 G.poolT-=dt;
 if(force||G.poolReg!==reg||G.poolT<=0){G.poolT=.2;
  const instant=force||G.poolReg!==reg;G.poolReg=reg;
  const ex=WD.x,ey=WD.eye,ez=WD.z,fx=-Math.sin(WD.yaw),fz=-Math.cos(WD.yaw);
  const sc=[];for(let i=0;i<L.length;i++){const l=L[i],dx=l[0]-ex,dy=(l[1]-ey)*1.6,dz=l[2]-ez,d=Math.hypot(dx,dy,dz);const ahead=(dx*fx+dz*fz)/(d||1);const s=d-l[6]*.55-ahead*3;if(d<l[6]+26)sc.push([s,i])}
  sc.sort((a,b)=>a[0]-b[0]);const want=new Set(sc.slice(0,P.length).map(s=>s[1]));
  const have=new Set();
  for(const p of P){const u=p.userData;if(u.src>=0&&want.has(u.src)&&!instant){u.tk=1;have.add(u.src)}else{u.tk=0;if(instant){u.k=0;u.src=-1}}}
  const free=P.filter(p=>p.userData.src<0||(p.userData.k<=.01&&p.userData.tk===0));
  for(const i of want){if(have.has(i))continue;const p=free.shift();if(!p)break;const l=L[i],u=p.userData;u.src=i;u.k=instant?1:0;u.tk=1;
   p.position.set(l[0],l[1],l[2]);p.color.setRGB(lin(l[3]),lin(l[4]),lin(l[5]));p.distance=l[6]*LOOK.reach;u.base=l[7]*G.LK}
 }
 for(const p of P){const u=p.userData;if(u.src<0){p.intensity=0;continue}u.k+=(u.tk-u.k)*Math.min(1,dt*5);if(u.tk===0&&u.k<.01){u.k=0;u.src=-1}
  p.intensity=u.base*u.k}
}
/* ---- characters as lit, camera-facing cut-outs ---- */
const SPRW=288,SPRH=720;
function spriteTex(key,svg){
 G.stx=G.stx||{};if(G.stx[key])return G.stx[key];const T=G.T;
 const c=document.createElement('canvas');c.width=SPRW;c.height=SPRH;const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;t.anisotropy=G.aniso;
 const img=new Image();img.onload=()=>{const x=c.getContext('2d');x.clearRect(0,0,SPRW,SPRH);x.drawImage(img,0,0,SPRW,SPRH);t.needsUpdate=true};
 img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
 return G.stx[key]=t;
}
function blobTex(){if(G.blob)return G.blob;const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d');const g=x.createRadialGradient(32,32,2,32,32,31);g.addColorStop(0,'rgba(0,0,0,.55)');g.addColorStop(.6,'rgba(0,0,0,.25)');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(0,0,64,64);const t=new G.T.CanvasTexture(c);return G.blob=t}
function cutout(texture,w,h,o){
 const T=G.T;o=o||{};
 const geo=new T.PlaneGeometry(w,h);geo.translate(0,h/2,0);
 const mat=new T.MeshLambertMaterial({map:texture,alphaTest:.5,emissive:0xffffff,emissiveMap:texture,emissiveIntensity:o.glow!==undefined?o.glow:.22});
 const m=new T.Mesh(geo,mat);m.userData.noAO=1;
 if(!o.noShadow){const s=new T.Mesh(new T.PlaneGeometry(w*.95,w*.5),new T.MeshBasicMaterial({map:blobTex(),transparent:true,depthWrite:false}));s.rotation.x=-Math.PI/2;s.position.y=.025;s.renderOrder=1;s.userData.noAO=1;const gg=new T.Group();gg.add(s);gg.add(m);gg.userData.body=m;return gg}
 const gg=new T.Group();gg.add(m);gg.userData.body=m;return gg;
}
function markObj(){
 const T=G.T;if(!G.markTex){const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d');x.fillStyle='#ffd166';x.beginPath();x.arc(64,64,52,0,7);x.fill();x.strokeStyle='#1b1026';x.lineWidth=8;x.stroke();x.fillStyle='#1b1026';x.font='bold 78px sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText('!',64,70);G.markTex=new T.CanvasTexture(c);G.markTex.colorSpace=T.SRGBColorSpace}
 const s=new T.Sprite(new T.SpriteMaterial({map:G.markTex,color:new T.Color(1.6,1.5,1.3),fog:true}));s.scale.set(.42,.42,1);return s;
}
function ringObj(){
 const T=G.T;const g=new T.RingGeometry(.42,.52,40);g.rotateX(-Math.PI/2);
 const m=new T.Mesh(g,new T.MeshBasicMaterial({color:new T.Color(2.2,1.7,.8),transparent:true,opacity:.8,depthWrite:false}));m.renderOrder=2;m.userData.noAO=1;return m;
}
