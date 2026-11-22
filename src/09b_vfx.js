/* ============ VFX ============ */
/* Small, cheap effects that make a place feel alive. Levels register emitters while they are built (vfx(...));
   vfxBuild() turns them into GPU-animated objects (no per-particle work on the CPU) grouped per region:
     dust   motes drifting in a volume (warm, catching the light)      steam  puffs rising, swelling and fading
     smoke  slower, greyer, bigger (chimneys)                          beam   a soft shaft of sunlight through a window
     birds  a flock wheeling in a slow loop overhead */
const VFXU={t:{value:0}};
function vfx(type,o){(G.vfxDef=G.vfxDef||{});(G.vfxDef[BR]=G.vfxDef[BR]||[]).push(Object.assign({type},o))}
function vfxBuild(){
 const T=G.T;G.vfxRoot={};if(!G.vfxDef)return;
 for(const reg in G.vfxDef){const root=new T.Group();root.visible=false;G.scene.add(root);G.vfxRoot[reg]=root;
  for(const e of G.vfxDef[reg]){const o=vfxMake(e);if(o){o.userData.noAO=1;o.frustumCulled=false;root.add(o)}}}
}
const VFX_VS_PTS=`attribute vec4 seed;uniform float t,size,sp;uniform vec3 b0,b1;varying float va;varying vec3 vs;
 void main(){vec3 p;float a;`;
function vfxPoints(n,mode,o){
 const T=G.T,g=new T.BufferGeometry(),pos=new Float32Array(n*3),sd=new Float32Array(n*4);
 for(let i=0;i<n;i++){sd[i*4]=Math.random();sd[i*4+1]=Math.random();sd[i*4+2]=Math.random();sd[i*4+3]=Math.random()}
 g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('seed',new T.Float32BufferAttribute(sd,4));
 const u={t:VFXU.t,size:{value:o.size||1},b0:{value:new T.Vector3(...o.b0)},b1:{value:new T.Vector3(...(o.b1||o.b0))},col:{value:new T.Color(...(o.col||[1,1,1]))},op:{value:o.op||1},sp:{value:o.sp||1}};
 let body;
 if(mode==='dust')body=`vec3 r=seed.xyz;p=mix(b0,b1,r);float w=t*.06*sp+seed.w*40.;p+=vec3(sin(w*1.3+r.x*20.)*.25,sin(w*.7+r.y*30.)*.18+fract(w*.05+seed.w)*.4-.2,cos(w*1.1+r.z*20.)*.25);a=.55+.45*sin(t*1.5+seed.w*30.);vs=vec3(1.);`;
 else if(mode==='steam')body=`float k=fract(t*.18*sp+seed.w);p=b0+vec3((seed.x-.5)*.08+sin(k*6.+seed.y*9.)*.06*k,k*1.1*size,(seed.z-.5)*.08+cos(k*5.+seed.x*9.)*.06*k);a=smoothstep(0.,.15,k)*(1.-k);vs=vec3(.4+k*2.2);`;
 else if(mode==='smoke')body=`float k=fract(t*.05*sp+seed.w);p=b0+vec3((seed.x-.5)*.4+k*k*3.,k*9.*size,(seed.z-.5)*.4+k*1.2);a=smoothstep(0.,.1,k)*(1.-k)*.8;vs=vec3(1.+k*5.);`;
 else body=`float ang=t*.12*sp+seed.w*6.2831,rad=mix(length(b1-b0)*.25,length(b1-b0)*.5,seed.x);vec3 c=(b0+b1)*.5;p=c+vec3(cos(ang)*rad,sin(t*.4+seed.y*6.)*2.+seed.z*4.,sin(ang)*rad*.7);a=1.;vs=vec3(1.,sin(t*14.+seed.y*40.),0.);`;
 const vs=VFX_VS_PTS+body+`va=a;vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=size*(mode_SIZE)*vs.x/-mv.z;gl_Position=projectionMatrix*mv;}`;
 const ps={dust:'8.',steam:'90.',smoke:'160.',birds:'40.'}[mode];
 const fs={
  dust:`uniform vec3 col;uniform float op;varying float va;varying vec3 vs;void main(){vec2 q=gl_PointCoord-.5;float d=length(q);if(d>.5)discard;gl_FragColor=vec4(col*va*op*(1.-d*2.),1.);}`,
  steam:`uniform vec3 col;uniform float op;varying float va;varying vec3 vs;void main(){vec2 q=gl_PointCoord-.5;float d=length(q);if(d>.5)discard;gl_FragColor=vec4(col,va*op*(1.-d*2.)*(1.-d*2.));}`,
  smoke:`uniform vec3 col;uniform float op;varying float va;varying vec3 vs;void main(){vec2 q=gl_PointCoord-.5;float d=length(q);if(d>.5)discard;gl_FragColor=vec4(col,va*op*(1.-d*2.)*(1.-d*2.));}`,
  birds:`uniform vec3 col;uniform float op;varying float va;varying vec3 vs;void main(){vec2 q=gl_PointCoord-.5;float f=vs.y*.12;float y=abs(q.x)*(.6+f)-q.y*1.2-.05;if(abs(y)>.07||abs(q.x)>.45)discard;gl_FragColor=vec4(col,op);}`}[mode];
 const m=new T.ShaderMaterial({uniforms:u,vertexShader:vs.replace('mode_SIZE',ps),fragmentShader:fs,transparent:true,depthWrite:false,
  blending:mode==='dust'?T.AdditiveBlending:T.NormalBlending});
 const pts=new T.Points(g,m);pts.renderOrder=3;return pts;
}
/* a sunbeam: the window's rectangle swept along the sun's direction into the room, brightest at the glass,
   fading with distance and towards its edges, cut off at the floor */
function vfxBeam(e){
 const T=G.T,S=e.sun,d=new T.Vector3(...S).normalize().negate(),L=e.len||7,P=e.pts,pos=[],at=[];
 const sides=[[0,1],[1,2],[2,3],[3,0]];
 for(const[i,j]of sides){const a=P[i],b=P[j];const a2=[a[0]+d.x*L,a[1]+d.y*L,a[2]+d.z*L],b2=[b[0]+d.x*L,b[1]+d.y*L,b[2]+d.z*L];
  for(const[p,t,s]of[[a,0,0],[b,0,1],[b2,1,1],[a,0,0],[b2,1,1],[a2,1,0]]){pos.push(...p);at.push(t,s)}}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('bt',new T.Float32BufferAttribute(at,2));
 const m=new T.ShaderMaterial({uniforms:{t:VFXU.t,fy:{value:e.floor},col:{value:new T.Color(...(e.col||[1,.86,.62]))},op:{value:e.op||.06}},
  vertexShader:'attribute vec2 bt;varying vec2 v;varying vec3 wp;void main(){v=bt;wp=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);}',
  fragmentShader:'uniform float t,fy,op;uniform vec3 col;varying vec2 v;varying vec3 wp;void main(){if(wp.y<fy)discard;float f=pow(1.-v.x,1.6)*smoothstep(0.,.25,v.y)*smoothstep(1.,.75,v.y)*smoothstep(fy,fy+.4,wp.y);'+
   'float n=.85+.15*sin(wp.x*3.+wp.z*2.+t*.4);gl_FragColor=vec4(col*f*op*n,1.);}',
  transparent:true,depthWrite:false,side:T.DoubleSide,blending:T.AdditiveBlending});
 const mesh=new T.Mesh(g,m);mesh.renderOrder=4;return mesh;
}
/* a window that shows the real time of day: sky, skyline, stars and lit windows at night, drawn by a shader
   that reads the same palette as the sky dome (TODU, updated every frame from the clock) */
const TODU={hz:null,zn:null,st:{value:0}};
function todWindow(x,y,z,w,h,dir,o){vfx('window',Object.assign({x:x+(G.ox||0),y,z,w,h,dir},o||{}))}
function vfxWindow(e){
 const T=G.T;if(!TODU.hz){TODU.hz={value:new T.Color(.7,.75,.85)};TODU.zn={value:new T.Color(.25,.45,.85)}}
 const g=new T.PlaneGeometry(e.w,e.h);const m=new T.ShaderMaterial({uniforms:{hz:TODU.hz,zn:TODU.zn,st:TODU.st,t:VFXU.t,sd:{value:(e.x*.37+e.z*.11)%1},asp:{value:e.w/e.h},mul:{value:e.mul||2}},
  vertexShader:'varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:`uniform vec3 hz,zn;uniform float st,t,sd,asp,mul;varying vec2 v;
   float h1(float n){return fract(sin(n*127.1+sd*311.7)*43758.5453);}
   void main(){vec2 p=vec2(v.x*asp,v.y);vec3 c=mix(hz,zn,smoothstep(.15,1.,v.y));
    float sx=floor(p.x*40.);float s=h1(sx)*fract(sin(dot(floor(p*vec2(40.,60.)),vec2(12.9,78.2))+sd)*4375.5);c+=vec3(step(.985,s)*st*.9);
    float bw=floor(p.x*7.+sd*3.);float bh=.12+.3*h1(bw);float bld=step(v.y,bh);
    vec3 bc=mix(vec3(.16,.17,.22)*(1.-.75*st)+hz*.18,vec3(.03,.025,.05),st);
    vec2 cell=floor(vec2(p.x*60.,v.y*70.));float lit=step(.62,h1(cell.x*7.31+cell.y*1.7))*step(.25,fract(p.x*60.))*step(.3,fract(v.y*70.));
    bc+=lit*vec3(1.,.82,.5)*(.08+.9*st);c=mix(c,bc,bld);
    float fr=step(.035,v.x)*step(v.x,.965)*step(.04,v.y)*step(v.y,.96)*(1.-step(abs(v.x-.5),.012));
    c=mix(vec3(.12,.11,.14),c,fr);gl_FragColor=vec4(c*mul,1.);}`});
 const me=new T.Mesh(g,m);me.position.set(e.x,e.y+e.h/2,e.z);me.rotation.y={s:0,n:Math.PI,e:Math.PI/2,w:-Math.PI/2}[e.dir];return me}
function vfxMake(e){
 if(e.type==='window')return vfxWindow(e);
 if(e.type==='beam')return vfxBeam(e);
 return vfxPoints(e.n||40,e.type,e);
}
function vfxTick(){if(!G.vfxRoot)return;VFXU.t.value=performance.now()/1000;if(TODU.hz&&S){const P=TODP[clamp(S.slot||0,0,5)];TODU.hz.value.setRGB(...P.hz);TODU.zn.value.setRGB(...P.zn);TODU.st.value=P.st}for(const k in G.vfxRoot)G.vfxRoot[k].visible=k===WD.reg}
