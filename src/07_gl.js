/* ============ WEBGL ENGINE ============ */
const G={ok:false,regions:{},atlas:null,actx:null,rects:{},sctx:null,scell:{},boxes:{},walls:{},lights:{},surf:{}};
const VS=`attribute vec3 p;attribute vec2 u;attribute vec3 c;attribute vec4 r;uniform mat4 M;varying vec2 vu;varying vec3 vc;varying vec4 vr;varying float vd;
void main(){gl_Position=M*vec4(p,1.);vu=u;vc=c;vr=r;vd=gl_Position.w;}`;
const FS=`precision mediump float;uniform sampler2D T;uniform vec3 F;uniform vec2 FR;varying vec2 vu;varying vec3 vc;varying vec4 vr;varying float vd;
void main(){vec2 f=clamp(fract(vu),.002,.998);vec2 a=vr.xy+vec2(f.x,1.-f.y)*vr.zw;vec4 t=texture2D(T,a);if(t.a<.5)discard;vec3 col=t.rgb*vc;float fg=clamp((vd-FR.x)/(FR.y-FR.x),0.,1.);gl_FragColor=vec4(mix(col,F,fg),1.);}`;
function glInit(cv){
 let gl=null;try{gl=cv.getContext('webgl',{antialias:true,powerPreference:'high-performance'})||cv.getContext('experimental-webgl')}catch(e){}
 if(!gl)return false;
 const sh=(t,s)=>{const o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(o));return o};
 const pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,VS));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FS));gl.linkProgram(pr);gl.useProgram(pr);
 G.gl=gl;G.pr=pr;G.cv=cv;
 G.loc={p:gl.getAttribLocation(pr,'p'),u:gl.getAttribLocation(pr,'u'),c:gl.getAttribLocation(pr,'c'),r:gl.getAttribLocation(pr,'r'),M:gl.getUniformLocation(pr,'M'),T:gl.getUniformLocation(pr,'T'),F:gl.getUniformLocation(pr,'F'),FR:gl.getUniformLocation(pr,'FR')};
 gl.enable(gl.DEPTH_TEST);gl.enable(gl.CULL_FACE);gl.cullFace(gl.BACK);
 G.sbuf=gl.createBuffer();
 G.ok=true;return true;
}
function mkTex(canvas){const gl=G.gl,t=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,canvas);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);return t}
function upTex(t,canvas){const gl=G.gl;gl.bindTexture(gl.TEXTURE_2D,t);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,canvas)}
/* ---- atlas ---- */
const AT=2048,ATW=4096,ATH=2048;let shelf={x:0,y:0,h:0};
function aAlloc(w,h){if(shelf.x+w>ATW){shelf.x=0;shelf.y+=shelf.h;shelf.h=0}if(shelf.y+h>ATH)return null;const r={x:shelf.x,y:shelf.y,w,h};shelf.x+=w;shelf.h=Math.max(shelf.h,h);return r}
function tex(key,w,h,paint){
 if(G.rects[key])return key;
 const r=aAlloc(w,h);if(!r){console.warn('atlas full',key);return 'white'}
 const c=G.actx;c.save();c.beginPath();c.rect(r.x,r.y,w,h);c.clip();c.translate(r.x,r.y);paint(c,w,h);c.restore();
 const i=1.5;G.rects[key]=[(r.x+i)/ATW,(r.y+i)/ATH,(w-2*i)/ATW,(h-2*i)/ATH];return key;
}
/* ---- matrices ---- */
function persp(f,a,n,fa){const t=1/Math.tan(f/2);return[t/a,0,0,0,0,t,0,0,0,0,(fa+n)/(n-fa),-1,0,0,2*fa*n/(n-fa),0]}
function mul(a,b){const o=new Array(16);for(let i=0;i<4;i++)for(let j=0;j<4;j++){let s=0;for(let k=0;k<4;k++)s+=a[k*4+j]*b[i*4+k];o[i*4+j]=s}return o}
function viewM(px,py,pz,yaw,pit){
 const cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pit),sp=Math.sin(pit);
 const fx=-sy*cp,fy=sp,fz=-cy*cp;const rx=cy,ry=0,rz=-sy;
 const ux=ry*fz-rz*fy,uy=rz*fx-rx*fz,uz=rx*fy-ry*fx;
 return[rx,ux,-fx,0,ry,uy,-fy,0,rz,uz,-fz,0,-(rx*px+ry*py+rz*pz),-(ux*px+uy*py+uz*pz),(fx*px+fy*py+fz*pz),1];
}
/* ---- geometry building ---- */
let BR=null;
function region(name,o){G.regions[name]={v:[],buf:null,n:0,fog:o.fog,fr:o.fr||[8,60]};G.boxes[name]=[];G.walls[name]=[];G.lights[name]=[];G.surf[name]=[];BR=name}
function addLight(x,y,z,col,range,inten){G.lights[BR].push([x,y,z,col[0],col[1],col[2],range,inten||1])}
function lightAt(x,y,z,nx,ny,nz){
 const R=G.regions[BR];const amb=R.amb||[.34,.32,.4];const hs=.12*(ny*.5+.5);
 let r=amb[0]+hs,g=amb[1]+hs,b=amb[2]+hs;
 for(const L of G.lights[BR]){const dx=L[0]-x,dy=L[1]-y,dz=L[2]-z;const d2=dx*dx+dy*dy+dz*dz;if(d2>L[6]*L[6])continue;const d=Math.sqrt(d2)||1;const nd=Math.max(0,(dx*nx+dy*ny+dz*nz)/d)*.78+.22;const at=(1-d/L[6]);const k=nd*at*at*L[7];r+=L[3]*k;g+=L[4]*k;b+=L[5]*k}
 if(G.ao!==undefined&&Math.abs(ny)<.5){const k=.72+.28*Math.min(1,Math.max(0,(y-G.ao)/1.1));r*=k;g*=k;b*=k}
 return[Math.min(r,1.35),Math.min(g,1.35),Math.min(b,1.35)];
}
function quad(a,b,c,d,m,uw,vh){
 const R=G.regions[BR],rect=G.rects[m.t]||G.rects.white;
 const e1=[b[0]-a[0],b[1]-a[1],b[2]-a[2]],e2=[d[0]-a[0],d[1]-a[1],d[2]-a[2]];
 let nx=e1[1]*e2[2]-e1[2]*e2[1],ny=e1[2]*e2[0]-e1[0]*e2[2],nz=e1[0]*e2[1]-e1[1]*e2[0];const nl=Math.hypot(nx,ny,nz)||1;nx/=nl;ny/=nl;nz/=nl;
 const L1=Math.hypot(...e1),L2=Math.hypot(...e2);
 const su=m.e?1:Math.max(1,Math.ceil(L1/2.2)),sv=m.e?1:Math.max(1,Math.ceil(L2/(Math.abs(ny)<.5?1.1:2.2)));
 const col=m.c||[1,1,1];
 const P=(s,t)=>[a[0]+e1[0]*s+e2[0]*t,a[1]+e1[1]*s+e2[1]*t,a[2]+e1[2]*s+e2[2]*t];
 const LC={};
 const C=(i,j)=>{const k=i+','+j;if(LC[k])return LC[k];const p=P(i/su,j/sv);let l=m.e?[1,1,1]:lightAt(p[0],p[1],p[2],nx,ny,nz);return LC[k]=[col[0]*l[0],col[1]*l[1],col[2]*l[2]]};
 const v=R.v;
 const push=(i,j)=>{const p=P(i/su,j/sv),cc=C(i,j);v.push(p[0],p[1],p[2],uw*i/su,vh*j/sv,cc[0],cc[1],cc[2],rect[0],rect[1],rect[2],rect[3])};
 for(let i=0;i<su;i++)for(let j=0;j<sv;j++){push(i,j);push(i+1,j);push(i+1,j+1);push(i,j);push(i+1,j+1);push(i,j+1)}
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
 if(o.walk)surf(x0,z0,x1,z1,y1);
}
function panel(cx,y,cz,w,h,dir,m){
 const hw=w/2;
 if(dir==='s')quad([cx-hw,y,cz],[cx+hw,y,cz],[cx+hw,y+h,cz],[cx-hw,y+h,cz],m,1,1);
 if(dir==='n')quad([cx+hw,y,cz],[cx-hw,y,cz],[cx-hw,y+h,cz],[cx+hw,y+h,cz],m,1,1);
 if(dir==='e')quad([cx,y,cz+hw],[cx,y,cz-hw],[cx,y+h,cz-hw],[cx,y+h,cz+hw],m,1,1);
 if(dir==='w')quad([cx,y,cz-hw],[cx,y,cz+hw],[cx,y+h,cz+hw],[cx,y+h,cz-hw],m,1,1);
}
function floorQ(x0,z0,x1,z1,y,m){quad([x0,y,z1],[x1,y,z1],[x1,y,z0],[x0,y,z0],m,(x1-x0)*m.s,(z1-z0)*m.s)}
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
 const L=ax==='x'?x1-x0:z1-z0,dl=L/n;
 for(let i=0;i<n;i++){const top=y0+(i+1)*dh;const a=up?i*dl:L-(i+1)*dl;
  if(ax==='x')box(x0+a,o.solid===false?top-.12:y0,z0,x0+a+dl,top,z1,m,{col:false,nz0:1,nz1:o.sides?0:1});
  else box(x0,o.solid===false?top-.12:y0,z0+a,x1,top,z0+a+dl,m,{col:false,nx0:1,nx1:o.sides?0:1});}
 if(ax==='x')ramp(x0,z0,x1,z1,up?y0:y1,up?y1:y0,'x');else ramp(x0,z0,x1,z1,up?y0:y1,up?y1:y0,'z');
}
function slab(x0,z0,x1,z1,y,th,m,mu){floorQ(x0,z0,x1,z1,y,m);ceilQ(x0,z0,x1,z1,y-th,mu||m);const e=mu||m;
 quad([x0,y-th,z1],[x1,y-th,z1],[x1,y,z1],[x0,y,z1],e,1,1);quad([x1,y-th,z0],[x0,y-th,z0],[x0,y,z0],[x1,y,z0],e,1,1);
 quad([x1,y-th,z1],[x1,y-th,z0],[x1,y,z0],[x1,y,z1],e,1,1);quad([x0,y-th,z0],[x0,y-th,z1],[x0,y,z1],[x0,y,z0],e,1,1);surf(x0,z0,x1,z1,y)}
function railing(x0,z0,x1,z1,y,o){o=o||{};const h=o.h||1.05,m=o.m||MT.plain('#c9a46a'),g=o.glass;
 const dx=x1-x0,dz=z1-z0,L=Math.hypot(dx,dz),n=Math.max(1,Math.round(L/1.2));const y2=o.y2!==undefined?o.y2:y;
 for(let i=0;i<=n;i++){const t=i/n,px=x0+dx*t,pz=z0+dz*t,py=y+(y2-y)*t;box(px-.04,py,pz-.04,px+.04,py+h,pz+.04,m,{col:false,nt:1})}
 const ya=y+h,yb=y2+h,hx_=dx===0?.05:0,hz=dz===0?.05:0;
 if(y===y2){box(Math.min(x0,x1)-hx_,ya-.06,Math.min(z0,z1)-hz,Math.max(x0,x1)+hx_,ya,Math.max(z0,z1)+hz,m,{col:false});box(Math.min(x0,x1)-hx_/2,y+h*.5-.02,Math.min(z0,z1)-hz/2,Math.max(x0,x1)+hx_/2,y+h*.5+.02,Math.max(z0,z1)+hz/2,m,{col:false});box(Math.min(x0,x1)-hx_/2,y+.12,Math.min(z0,z1)-hz/2,Math.max(x0,x1)+hx_/2,y+.16,Math.max(z0,z1)+hz/2,m,{col:false})}
 else{for(let i=0;i<n;i++){const t0=i/n,t1=(i+1)/n;const p0=[x0+dx*t0,ya+(yb-ya)*t0,z0+dz*t0],p1=[x0+dx*t1,ya+(yb-ya)*t1,z0+dz*t1];
  const bx0=Math.min(p0[0],p1[0])-hx_,bx1=Math.max(p0[0],p1[0])+hx_,bz0=Math.min(p0[2],p1[2])-hz,bz1=Math.max(p0[2],p1[2])+hz,my=(p0[1]+p1[1])/2;box(bx0,my-.06,bz0,bx1,my,bz1,m,{col:false})}}
 colBox(x0-hx_,z0-hz,x1+hx_,z1+hz,Math.min(y,y2)-(o.under||0),Math.max(ya,yb)+.3);
}
function finishRegions(){
 const gl=G.gl;
 for(const k in G.regions){const R=G.regions[k];const a=new Float32Array(R.v);R.buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,R.buf);gl.bufferData(gl.ARRAY_BUFFER,a,gl.STATIC_DRAW);R.n=a.length/12;R.v=null;
  const H={},SH={};
  const put=(T,b,x0,z0,x1,z1)=>{for(let x=Math.floor(x0/4);x<=Math.floor(x1/4);x++)for(let z=Math.floor(z0/4);z<=Math.floor(z1/4);z++)(T[x+','+z]=T[x+','+z]||[]).push(b)};
  for(const b of G.boxes[k])put(H,b,b[0],b[1],b[2],b[3]);
  for(const s of G.surf[k])put(SH,s,s.x0,s.z0,s.x1,s.z1);
  R.hash=H;R.shash=SH;}
}
function bindAttribs(){const gl=G.gl,L=G.loc,st=48;
 gl.enableVertexAttribArray(L.p);gl.vertexAttribPointer(L.p,3,gl.FLOAT,false,st,0);
 gl.enableVertexAttribArray(L.u);gl.vertexAttribPointer(L.u,2,gl.FLOAT,false,st,12);
 gl.enableVertexAttribArray(L.c);gl.vertexAttribPointer(L.c,3,gl.FLOAT,false,st,20);
 gl.enableVertexAttribArray(L.r);gl.vertexAttribPointer(L.r,4,gl.FLOAT,false,st,32)}
/* ---- full-body characters ---- */
const LOWER={ellie:{t:'pants',c:'#3d5a8a',s:'#f4f4f4'},nyx:{t:'skirt',c:'#1a1520',l:'#2a2030',s:'#111',boot:1},ada:{t:'pants',c:'#2a3a5a',s:'#ffffff'},priya:{t:'pants',c:'#2a3040',s:'#1a1a1a'},juno:{t:'skirt',c:'#9b59ff',l:'#ffffff',thigh:1,s:'#ff8fc8'},kit:{t:'pants',c:'#5a5a46',s:'#2a2a2a',boot:1},kitc:{t:'pants',c:'#1c2133',s:'#2bf0ff',boot:1,knee:'#2bf0ff'},rin:{t:'skirt',c:'#c9b6ff',l:'#ff9fd0',thigh:1,s:'#ffffff'},bea:{t:'pants',c:'#17141c',s:'#111'},mira:{t:'long',c:'#17151c',s:'#111'},dave:{t:'shorts',c:'#c9a46a',s:'#ffffff'},davex:{t:'shorts',c:'#c9a46a',s:'#ffffff'},victor:{t:'pants',c:'#2c3140',s:'#0d0d10'},marge:{t:'long',c:'#4a3a5a',s:'#3a2a2a'}};
function bodySVG(id){
 const c=CH[id],oc=c.oc,sk=c.skin,lo=c.lower||LOWER[id]||{t:'pants',c:'#2a2f45',s:'#222'};const sh='#00000026';
 const short=c.outfit==='tee';let o='';
 // legs / lower
 const leg=(x,col)=>`<path d="M${x} 296 L${x+38} 296 L${x+34} 478 L${x+6} 478Z" fill="${col}"/>`;
 if(lo.t==='pants'){o+=`<path d="M56 290 L144 290 L140 478 L106 478 L100 330 L94 478 L60 478Z" fill="${lo.c}"/><path d="M100 330 L100 478" stroke="#0003" stroke-width="2"/>`;if(lo.knee)o+=`<rect x="64" y="380" width="26" height="22" rx="6" fill="${lo.knee}"/><rect x="110" y="380" width="26" height="22" rx="6" fill="${lo.knee}"/>`}
 else if(lo.t==='shorts'){o+=`<rect x="68" y="350" width="22" height="128" fill="${sk}"/><rect x="110" y="350" width="22" height="128" fill="${sk}"/><path d="M56 290 L144 290 L146 358 L104 358 L100 330 L96 358 L54 358Z" fill="${lo.c}"/>`}
 else if(lo.t==='skirt'){const lc=lo.l||sk;o+=`<rect x="70" y="350" width="22" height="128" fill="${lo.thigh?sk:lc}"/><rect x="108" y="350" width="22" height="128" fill="${lo.thigh?sk:lc}"/>`;if(lo.thigh)o+=`<rect x="69" y="392" width="24" height="86" fill="${lc}"/><rect x="107" y="392" width="24" height="86" fill="${lc}"/><rect x="69" y="392" width="24" height="5" fill="#0002"/><rect x="107" y="392" width="24" height="5" fill="#0002"/>`;
  o+=`<path d="M58 288 L142 288 L158 370 L42 370Z" fill="${lo.c}"/><path d="M70 300 L62 370 M86 300 L82 370 M100 300 L100 370 M114 300 L118 370 M130 300 L138 370" stroke="#0003" stroke-width="2"/>`}
 else{o+=`<path d="M58 288 L142 288 L156 480 L44 480Z" fill="${lo.c}"/><path d="M100 300 L100 480" stroke="#0002" stroke-width="2"/>`}
 // shoes
 const bh=lo.boot?34:16;o+=`<rect x="58" y="${482-bh}" width="38" height="${bh}" rx="7" fill="${lo.s}"/><rect x="104" y="${482-bh}" width="38" height="${bh}" rx="7" fill="${lo.s}"/><rect x="56" y="476" width="42" height="8" rx="4" fill="#0004"/><rect x="102" y="476" width="42" height="8" rx="4" fill="#0004"/>`;
 // arms (behind torso edges)
 const sl=short?'#0000':oc;
 o+=`<path d="M60 178 Q38 190 36 240 L34 300 L52 302 L56 246 Q60 214 66 200Z" fill="${short?sk:oc}"/><path d="M140 178 Q162 190 164 240 L166 300 L148 302 L144 246 Q140 214 134 200Z" fill="${short?sk:oc}"/>`;
 if(short)o+=`<path d="M60 178 Q40 188 38 214 L58 218 Q60 200 66 196Z" fill="${oc}"/><path d="M140 178 Q160 188 162 214 L142 218 Q140 200 134 196Z" fill="${oc}"/>`;
 o+=`<path d="M60 178 Q38 190 36 240 L34 300 L44 301 L48 246Z" fill="${sh}"/>`;
 o+=`<ellipse cx="43" cy="308" rx="10" ry="12" fill="${sk}"/><ellipse cx="157" cy="308" rx="10" ry="12" fill="${sk}"/>`;
 // torso
 o+=`<rect x="90" y="140" width="20" height="30" fill="${sk}"/><rect x="90" y="150" width="20" height="8" fill="#0002"/>`;
 o+=`<path d="M58 176 Q100 156 142 176 L150 296 Q100 306 50 296Z" fill="${oc}"/><path d="M58 176 Q76 168 86 166 L78 300 Q62 299 50 296Z" fill="${sh}"/>`;
 const of=c.outfit;
 if(of==='hoodie')o+=`<path d="M70 170 Q100 196 130 170 Q120 160 100 158 Q80 160 70 170Z" fill="#0003"/><path d="M92 178 L90 214 M108 178 L110 214" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".85"/><path d="M70 246 L130 246 L136 284 L64 284Z" fill="#0002"/><path d="M50 290 Q100 300 150 290 L150 300 Q100 310 50 300Z" fill="#0003"/>`;
 if(of==='jacket'){const inn=id==='juno'?'#9b59ff':'#ff3fa4';o+=`<path d="M86 166 L100 210 L114 166 L112 296 L88 296Z" fill="${inn}"/><path d="M84 166 L100 222 L74 186Z M116 166 L100 222 L126 186Z" fill="#0003"/><path d="M88 230 L88 296 M112 230 L112 296" stroke="#0004" stroke-width="2"/>`}
 if(of==='blazer'||of==='suit'){o+=`<path d="M84 164 L100 206 L116 164 L110 296 L90 296Z" fill="#eef1f6"/><path d="M82 166 L100 226 L70 186Z M118 166 L100 226 L130 186Z" fill="#0003"/><circle cx="100" cy="246" r="3" fill="#0005"/><circle cx="100" cy="266" r="3" fill="#0005"/>`;if(of==='suit'||c.acc.includes('tie'))o+=`<path d="M96 170 L104 170 L106 222 L100 232 L94 222Z" fill="#8b1e2d"/>`}
 if(of==='apron')o+=`<path d="M72 196 L128 196 L130 296 L70 296Z" fill="#f4efe6"/><path d="M60 290 L140 290 L146 420 L54 420Z" fill="#f4efe6"/><path d="M74 196 L82 166 M126 196 L118 166" stroke="#f4efe6" stroke-width="5"/><rect x="84" y="320" width="32" height="26" rx="4" fill="#e6dccb"/><path d="M60 292 L140 292" stroke="#d8cfc0" stroke-width="3"/>`;
 if(of==='tee')o+=`<path d="M84 168 Q100 180 116 168" stroke="#0003" stroke-width="3" fill="none"/><path d="M74 230 L88 218 L100 236 L112 220 L126 232" stroke="#2bf0ff" stroke-width="4" fill="none"/><path d="M50 288 L150 288 L150 298 L50 298Z" fill="#0003"/>`;
 if(of==='armor')o+=`<path d="M30 200 Q36 170 74 168 L78 204Z" fill="#2bf0ff" opacity=".85"/><path d="M170 200 Q164 170 126 168 L122 204Z" fill="#2bf0ff" opacity=".85"/><path d="M78 180 L122 180 L126 250 L100 264 L74 250Z" fill="#2a3450"/><path d="M100 184 L100 262" stroke="#ff5fb0" stroke-width="4"/><rect x="54" y="280" width="92" height="12" fill="#2bf0ff" opacity=".7"/>`;
 if(of==='vest')o+=`<path d="M60 178 L86 168 L100 236 L114 168 L140 178 L148 296 L52 296Z" fill="#17141c"/><path d="M94 170 L100 180 L106 170Z" fill="#7a1f2b"/><circle cx="96" cy="252" r="2.5" fill="#ffd166"/><circle cx="96" cy="272" r="2.5" fill="#ffd166"/>`;
 if(of==='turtle')o+=`<rect x="84" y="140" width="32" height="34" rx="9" fill="${oc}"/><path d="M86 152 H114 M86 160 H114" stroke="#fff1" stroke-width="2"/>`;
 return o;
}
function fullSVG(id){
 const p=por(id,'n',true);
 const inner=p.replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'');
 return `<svg viewBox="0 0 200 490" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="484" rx="64" ry="7" fill="#0006"/><g transform="translate(16,2) scale(.84)">${inner}</g>${bodySVG(id)}</svg>`;
}
/* ---- sprite atlas ---- */
const SW=128,SH=256;let snext=0;
function spriteCell(key,draw){
 if(G.scell[key])return G.scell[key];
 const i=snext++;if(i>=128){return G.scell['c:n0']||[0,0,.01,.01]}
 const cx=(i%16)*SW,cy=Math.floor(i/16)*SH;
 const rr=[(cx+1)/AT,(cy+1)/AT,(SW-2)/AT,(SH-2)/AT];G.scell[key]=rr;
 draw(G.sctx,cx,cy,()=>{G.sdirty=true});
 return rr;
}
function charSprite(id){
 return spriteCell('c:'+id,(c,cx,cy,dirty)=>{
  const img=new Image();img.onload=()=>{const h=SH-4,w=h*200/490;c.drawImage(img,cx+(SW-w)/2,cy+2,w,h);dirty()};
  img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(fullSVG(id));
 });
}
function markSprite(){return spriteCell('mark',(c,cx,cy,dirty)=>{c.fillStyle='#ffd166';c.beginPath();c.arc(cx+64,cy+64,46,0,7);c.fill();c.strokeStyle='#1b1026';c.lineWidth=6;c.stroke();c.fillStyle='#1b1026';c.font='bold 70px sans-serif';c.textAlign='center';c.fillText('!',cx+64,cy+90);dirty()})}
function tapeSprite(){return spriteCell('tape',(c,cx,cy,dirty)=>{c.fillStyle='#ffd166';for(let i=0;i<3;i++){c.save();c.translate(cx+64,cy+70+i*50);c.rotate(i%2?.18:-.18);c.fillRect(-64,-12,128,24);c.fillStyle='#1b1026';c.font='bold 15px sans-serif';c.textAlign='center';c.fillText('STAFF ONLY',0,6);c.fillStyle='#ffd166';c.restore()}dirty()})}
/* anonymous grey attendees: faceless, nameless */
function anonSprite(v){return spriteCell('anon'+v,(c,cx,cy,dirty)=>{
 const tone=['#8b8996','#7c7a88','#9794a2','#6f6d7b','#85838f','#7f7d8b','#918f9c','#3e3c48'][v%8];
 const dark='rgba(0,0,0,.22)',lite='rgba(255,255,255,.10)';
 const m=cx+64,H=[0,5,-6,9,-3,4,-8,2][v%8],w=[0,3,-2,5,1,-3,2,4][v%8];
 const top=cy+20+H;
 c.save();
 c.fillStyle='rgba(0,0,0,.35)';c.beginPath();c.ellipse(m,cy+250,34,6,0,0,7);c.fill();
 c.fillStyle=tone;
 // legs or skirt
 if(v%4===1){c.beginPath();c.moveTo(m-28-w,cy+150);c.lineTo(m+28+w,cy+150);c.lineTo(m+36+w,cy+192);c.lineTo(m-36-w,cy+192);c.fill();c.fillRect(m-20,cy+190,13,56);c.fillRect(m+7,cy+190,13,56)}
 else{c.beginPath();c.moveTo(m-27-w,cy+148);c.lineTo(m+27+w,cy+148);c.lineTo(m+24+w,cy+246);c.lineTo(m+4,cy+246);c.lineTo(m,cy+176);c.lineTo(m-4,cy+246);c.lineTo(m-24-w,cy+246);c.fill()}
 c.fillStyle=dark;c.fillRect(m-24,cy+243,20,7);c.fillRect(m+4,cy+243,20,7);
 // arms
 c.fillStyle=tone;c.beginPath();c.moveTo(m-30-w,top+66);c.quadraticCurveTo(m-44-w,top+80,m-42-w,cy+146);c.lineTo(m-32-w,cy+148);c.lineTo(m-26,top+80);c.fill();
 c.beginPath();c.moveTo(m+30+w,top+66);c.quadraticCurveTo(m+44+w,top+80,m+42+w,cy+146);c.lineTo(m+32+w,cy+148);c.lineTo(m+26,top+80);c.fill();
 // torso
 c.beginPath();c.moveTo(m-30-w,top+64);c.quadraticCurveTo(m,top+52,m+30+w,top+64);c.lineTo(m+29+w,cy+152);c.lineTo(m-29-w,cy+152);c.closePath();c.fill();
 c.fillStyle=dark;c.fillRect(m-29-w,top+64,12,cy+152-top-64);
 // neck + head
 c.fillStyle=tone;c.fillRect(m-6,top+44,12,16);
 c.beginPath();c.ellipse(m,top+30,20,24,0,0,7);c.fill();
 c.fillStyle=lite;c.beginPath();c.ellipse(m-6,top+22,7,10,0,0,7);c.fill();
 // hair silhouettes
 c.fillStyle='rgba(0,0,0,.28)';
 const hs=v%5;
 if(hs===0){c.beginPath();c.ellipse(m,top+16,21,13,0,Math.PI,0);c.fill()}
 if(hs===1){c.beginPath();c.arc(m,top+2,10,0,7);c.fill();c.beginPath();c.ellipse(m,top+16,21,13,0,Math.PI,0);c.fill()}
 if(hs===2){c.beginPath();c.moveTo(m-21,top+18);c.quadraticCurveTo(m,top-6,m+21,top+18);c.lineTo(m+22,top+60);c.lineTo(m+12,top+60);c.lineTo(m+16,top+24);c.lineTo(m-16,top+24);c.lineTo(m-12,top+60);c.lineTo(m-22,top+60);c.fill()}
 if(hs===3){c.beginPath();c.ellipse(m,top+12,23,12,0,Math.PI,0);c.fill();c.fillRect(m-24,top+10,30,5)}
 // lanyard + badge
 c.strokeStyle='rgba(255,93,115,.75)';c.lineWidth=2.5;c.beginPath();c.moveTo(m-10,top+60);c.lineTo(m,top+90);c.lineTo(m+10,top+60);c.stroke();
 c.fillStyle='#d9d4e0';c.fillRect(m-7,top+90,14,18);c.fillStyle='rgba(255,93,115,.8)';c.fillRect(m-7,top+90,14,4);
 if(v%3===2){c.strokeStyle='rgba(0,0,0,.3)';c.lineWidth=4;c.beginPath();c.moveTo(m-26,top+66);c.lineTo(m+24,cy+130);c.stroke()}
 c.restore();dirty();
})}
