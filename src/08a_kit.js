/* ============ PROP KIT: shared pieces for the office and the station ============ */
/* Everything here is sized in metres and placed from a reference point, so props sit on floors and against wall
   faces exactly (no overlaps to flicker), and textured faces tile at their real size (nothing stretched). */
// a panel whose texture repeats every tw x th metres
function kTq(cx,y,cz,w,h,dir,m,tw,th){const hw=w/2,u=w/(tw||w),v=h/(th||h);
 if(dir==='s')quad([cx-hw,y,cz],[cx+hw,y,cz],[cx+hw,y+h,cz],[cx-hw,y+h,cz],m,u,v);if(dir==='n')quad([cx+hw,y,cz],[cx-hw,y,cz],[cx-hw,y+h,cz],[cx+hw,y+h,cz],m,u,v);
 if(dir==='e')quad([cx,y,cz+hw],[cx,y,cz-hw],[cx,y+h,cz-hw],[cx,y+h,cz+hw],m,u,v);if(dir==='w')quad([cx,y,cz-hw],[cx,y,cz+hw],[cx,y+h,cz+hw],[cx,y+h,cz-hw],m,u,v)}
// a sign whose texture has the sign's own proportions
function kSign(cx,y,cz,w,h,dir,t,fg,bg,lit){panel(cx,y,cz,w,h,dir,signM(t,fg,bg,w,h,lit))}
// a box given by its centre on the floor and its size
function kBox(x,y,z,w,h,d,m,o){box(x-w/2,y,z-d/2,x+w/2,y+h,z+d/2,m,o)}
// a box fixed to a wall: o is the wall's orientation ('h' runs along x, 'v' along z), face its room-side plane,
// s which way the room lies (+1/-1), a0..a1 along the wall, d0..d1 out from the face
function kWall(o,face,s,a0,a1,y0,y1,d0,d1,m,col){const p0=face+s*d0,p1=face+s*d1;if(o==='h')box(a0,y0,Math.min(p0,p1),a1,y1,Math.max(p0,p1),m,{col:!!col});else box(Math.min(p0,p1),y0,a0,Math.max(p0,p1),y1,a1,m,{col:!!col})}
// a picture/screen/sign on a wall face, just proud of it
function kOnWall(o,face,s,c,w,y,h,m,tw,th){const p=face+s*.006;if(o==='h')kTq(c,y,p,w,h,s>0?'s':'n',m,tw,th);else kTq(p,y,c,w,h,s>0?'e':'w',m,tw,th)}
// a straight beam of square-ish section between two points (any angle): side vector sv sets which way its width lies
function kBeam(p0,p1,w,h,m,sv){const d=[p1[0]-p0[0],p1[1]-p0[1],p1[2]-p0[2]],L=Math.hypot(...d);if(L<1e-4)return;const u=d.map(v=>v/L);
 let s=sv||(Math.abs(u[1])>.9?[1,0,0]:[0,1,0]);let t=[u[1]*s[2]-u[2]*s[1],u[2]*s[0]-u[0]*s[2],u[0]*s[1]-u[1]*s[0]];const tl=Math.hypot(...t);t=t.map(v=>v/tl);
 s=[t[1]*u[2]-t[2]*u[1],t[2]*u[0]-t[0]*u[2],t[0]*u[1]-t[1]*u[0]];
 const P=(a,b,c)=>[p0[0]+u[0]*a+s[0]*b+t[0]*c,p0[1]+u[1]*a+s[1]*b+t[1]*c,p0[2]+u[2]*a+s[2]*b+t[2]*c],hw=w/2,hh=h/2;
 const c=[[-hw,-hh],[hw,-hh],[hw,hh],[-hw,hh]];
 for(let i=0;i<4;i++){const[a1,b1]=c[i],[a2,b2]=c[(i+1)%4];quad(P(0,a1,b1),P(0,a2,b2),P(L,a2,b2),P(L,a1,b1),m,L*(m.s||.5),.5)}}
// an office chair: five-star base on castors, gas lift, padded seat, tall back, armrests. f = the way the sitter faces
function kChair(x,z,f,y,col){y=y||0;const c=MT.plain('#1a1a20'),fab=MT.fabric(col||'#3a3a4a');
 for(let i=0;i<5;i++){const a=i/5*Math.PI*2+.3,ex=x+Math.cos(a)*.3,ez=z+Math.sin(a)*.3;kBeam([x,y+.08,z],[ex,y+.08,ez],.05,.04,c,[0,1,0]);box(ex-.03,y,ez-.03,ex+.03,y+.06,ez+.03,c,{col:false})}
 box(x-.06,y+.05,z-.06,x+.06,y+.118,z+.06,c,{col:false});box(x-.03,y+.118,z-.03,x+.03,y+.44,z+.03,MT.chrome,{col:false});box(x-.25,y+.44,z-.25,x+.25,y+.52,z+.25,fab,{col:false});
 const back={n:[0,.24],s:[0,-.24],e:[-.24,0],w:[.24,0]}[f],bx=x+back[0],bz=z+back[1],hz=f==='n'||f==='s';
 box(hz?x-.23:bx-.03,y+.58,hz?bz-.03:z-.23,hz?x+.23:bx+.03,y+1.12,hz?bz+.03:z+.23,fab,{col:false});box(hz?x-.04:bx-.02,y+.52,hz?bz-.02:z-.04,hz?x+.04:bx+.02,y+.58,hz?bz+.02:z+.04,c,{col:false});
 for(const k of[-1,1]){const ax=hz?x+k*.27:x,az=hz?z:z+k*.27;box(ax-(hz?.025:.16),y+.66,az-(hz?.16:.025),ax+(hz?.025:.16),y+.7,az+(hz?.16:.025),c,{col:false});
  box(ax-.015,y+.52,az-.015,ax+.015,y+.66,az+.015,c,{col:false})}
 colBox(x-.3,z-.3,x+.3,z+.3,y,y+.5)}
// a simple four-legged chair or stool
function kStool(x,z,h,m,y){y=y||0;const lg=MT.plain('#2a2a30');for(const[a,b]of[[-1,-1],[1,-1],[-1,1],[1,1]])box(x+a*.15-.015,y,z+b*.15-.015,x+a*.15+.015,y+h-.04,z+b*.15+.015,lg,{col:false});
 box(x-.19,y+h-.04,z-.19,x+.19,y+h,z+.19,m,{col:false});box(x-.16,y+.3,z-.16,x+.16,y+.32,z+.16,lg,{col:false});colBox(x-.2,z-.2,x+.2,z+.2,y,y+h)}
// a desk: top, two panel ends, a modesty panel on the side away from the sitter (facing f)
function kDesk(x,z,w,d,f,m,y,h){y=y||0;h=h||.74;const hz=f==='n'||f==='s',W=hz?w:d,D=hz?d:w,leg=MT.plain('#d8dce4');
 box(x-W/2,y+h-.03,z-D/2,x+W/2,y+h,z+D/2,m,{col:false});
 if(hz){for(const k of[-1,1])box(x+k*(W/2-.03)-.025,y,z-D/2+.04,x+k*(W/2-.03)+.025,y+h-.03,z+D/2-.04,leg,{col:false});const mz=f==='n'?z-D/2+.08:z+D/2-.08;box(x-W/2+.06,y+.3,mz-.01,x+W/2-.06,y+h-.03,mz+.01,leg,{col:false})}
 else{for(const k of[-1,1])box(x-W/2+.04,y,z+k*(D/2-.03)-.025,x+W/2-.04,y+h-.03,z+k*(D/2-.03)+.025,leg,{col:false});const mx=f==='w'?x-W/2+.08:x+W/2-.08;box(mx-.01,y+.3,z-D/2+.06,mx+.01,y+h-.03,z+D/2-.06,leg,{col:false})}
 colBox(x-W/2,z-D/2,x+W/2,z+D/2,y,y+h)}
// a monitor on a stand, its screen facing direction f (the sitter looks the other way at it)
function kMonitor(x,y,z,f,m,w){w=w||.56;const h=w*.6,k=MT.plain('#16161c'),hz=f==='n'||f==='s';const s={n:-1,s:1,e:1,w:-1}[f];
 if(hz){box(x-.11,y,z-.09,x+.11,y+.012,z+.09,k,{col:false});box(x-.025,y+.012,z-s*.02-.015,x+.025,y+.2,z-s*.02+.015,k,{col:false});box(x-w/2,y+.14,z-.02,x+w/2,y+.14+h,z+.02,k,{col:false});panel(x,y+.155,z+s*.025,w-.03,h-.03,f,m)}
 else{box(x-.09,y,z-.11,x+.09,y+.012,z+.11,k,{col:false});box(x-s*.02-.015,y+.012,z-.025,x-s*.02+.015,y+.2,z+.025,k,{col:false});box(x-.02,y+.14,z-w/2,x+.02,y+.14+h,z+w/2,k,{col:false});panel(x+s*.025,y+.155,z,w-.03,h-.03,f,m)}}
function kKeyboard(x,y,z,along){const k=MT.plain('#2a2a30');if(along==='x')box(x-.22,y,z-.07,x+.22,y+.02,z+.07,k,{col:false});else box(x-.07,y,z-.22,x+.07,y+.02,z+.22,k,{col:false})}
// a potted plant: a glossy pot with a rim, soil, and crossed leaf cards (single double-sided faces: no flicker)
function kPlant(x,z,s,y,pot){y=y||0;const pm=MT.gloss(pot||'#e9e3da');box(x-.2*s,y,z-.2*s,x+.2*s,y+.42*s,z+.2*s,pm);box(x-.17*s,y+.42*s,z-.17*s,x+.17*s,y+.42*s+.008,z+.17*s,MT.plain('#3a2418'),{col:false});
 for(let i=0;i<3;i++)card(x,y+.4*s,z,.95*s,1.25*s,i*Math.PI/3+.3,MT.leaves)}
// a big plant in a planter box
function kPlanter(x0,z0,x1,z1,h,y,m){y=y||0;box(x0,y,z0,x1,y+h,z1,m||MT.plain('#3a3e48'));floorQ(x0+.05,z0+.05,x1-.05,z1-.05,y+h-.03,MT.plain('#3a2418'));
 const n=Math.max(1,Math.round((x1-x0)*(z1-z0)/1.2));for(let i=0;i<n;i++){const px=x0+.3+((i*.618)%1)*(x1-x0-.6),pz=z0+.3+((i*.382+.5)%1)*(z1-z0-.6);for(let k=0;k<2;k++)card(px,y+h-.05,pz,1.1,1.3,i+k*Math.PI/2,MT.leaves)}}
// a bin, a mug, a stack of paper
function kBin(x,z,y,col){y=y||0;box(x-.15,y,z-.15,x+.15,y+.4,z+.15,MT.gloss(col||'#3a3a44'))}
function kMug(x,y,z,col){box(x-.04,y,z-.04,x+.04,y+.095,z+.04,MT.gloss(col||'#e9e3da'),{col:false})}
function kPaper(x,y,z,n){for(let i=0;i<(n||1);i++)box(x-.105+i*.01,y+i*.004,z-.148,x+.105+i*.01,y+i*.004+.003,z+.148,MT.plain('#f4f4f0'),{col:false})}
// a hanging ceiling light panel (baked point light under it)
function kPanelLight(x,y,z,w,d,col,rng,int){box(x-w/2,y-.04,z-d/2,x+w/2,y,z+d/2,MT.plain('#d8dce4'),{col:false,nt:1});box(x-w/2+.03,y-.045,z-d/2+.03,x+w/2-.03,y-.04,z+d/2-.03,MT.glow(col||'#f4f6ff',1.2),{col:false,b:1,nt:1});addLight(x,y-.35,z,hx(col||'#f4f6ff'),rng||7,int||.6,1)}
// a pendant: flex, shade, glowing underside
function kPendant(x,y,z,len,r,col,rng,int,shade){box(x-.006,y-len,z-.006,x+.006,y,z+.006,MT.plain('#222'),{col:false});box(x-r,y-len-.22,z-r,x+r,y-len,z+r,MT.plain(shade||'#1a1a20'),{col:false,nt:1});
 box(x-r+.02,y-len-.225,z-r+.02,x+r-.02,y-len-.215,z+r-.02,MT.glow(col||'#ffe2b0',1.3),{col:false,b:1,nt:1});addLight(x,y-len-.45,z,hx(col||'#ffe2b0'),rng||6,int||.7,1)}
// a street lamp (daytime: no light of its own)
function kStreetLamp(x,z,y){const m=MT.plain('#2a2a30');box(x-.07,y,z-.07,x+.07,y+.5,z+.07,m,{col:false});box(x-.045,y+.5,z-.045,x+.045,y+5.2,z+.045,m,{col:false});box(x-.22,y+5.2,z-.22,x+.22,y+5.5,z+.22,m,{col:false});box(x-.16,y+5.15,z-.16,x+.16,y+5.2,z+.16,MT.plain('#f4efe6'),{col:false})}
// a stepped pyramid roof (quads can only be parallelograms, so steps stand in for slopes far away)
function kSpire(cx,cz,y,r,h,m,n){n=n||8;for(let i=0;i<n;i++){const s=r*(1-i/n),y0=y+h*i/n;box(cx-s,y0,cz-s,cx+s,y0+h/n,cz+s,m,{col:false})}}
