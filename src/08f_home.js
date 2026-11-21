/* ============ HOME: "PROOF", a corner building on Linden Street ============ */
/* A five-level Victorian corner building (x -310..-290, z -12..12), front onto Linden Street (south, +z),
   side onto Mill Lane (east, +x):
     ground  y 0     Proof bakery: shop (front), bakehouse (middle), dry store, WC, back lobby (rear)
     first   y 3.9   Flat 1A, yours: corridor, living room on the corner, kitchen, bathroom, box room, bedroom
     second  y 7.1   Ellie's flat (locked)        third  y 10.3  Flat 3 (locked)        roof  y 13.5  terrace
   A dog-leg stair in its own hall on the west side serves every floor. Windows are real openings with glass,
   sashes, sills and lintels, so the morning sun (baked) comes through them. Outside: the street, the terrace
   opposite, Linden Square across Mill Lane, the backs of Albion Road behind, a railway viaduct, and the city. */
const HY=[0,3.9,7.1,10.3,13.5],HX0=-310,HX1=-290,HZ0=-12,HZ1=12,SXE=-306;
function homeTextures(){
 tex('plasterF',256,256,(c,w,h)=>{c.fillStyle='#ece8e1';c.fillRect(0,0,w,h);blotch(c,w,h,10,'#e2ddd4',.35,40,110);noise(c,w,h,5000,'#8a8478',.06);noise(c,w,h,3000,'#ffffff',.08);grain(c,w,h,5)});
 tex('checker',256,256,(c,w,h)=>{for(let y=0;y<4;y++)for(let x=0;x<4;x++){c.fillStyle=(x+y)%2?'#2a2a30':'#ece6d8';c.fillRect(x*64,y*64,64,64)}c.strokeStyle='#00000022';c.lineWidth=1;for(let i=0;i<=4;i++){c.beginPath();c.moveTo(i*64,0);c.lineTo(i*64,h);c.moveTo(0,i*64);c.lineTo(w,i*64);c.stroke()}noise(c,w,h,1400,'#000',.08);grain(c,w,h,10)});
 tex('metro',256,256,(c,w,h)=>{c.fillStyle='#b8b4ae';c.fillRect(0,0,w,h);for(let y=0;y<8;y++)for(let x=-1;x<5;x++){const ox=(y%2)*32,v=236+rnd()*12|0;const g=c.createLinearGradient(0,y*32,0,y*32+32);g.addColorStop(0,`rgb(${v},${v},${v-6})`);g.addColorStop(1,`rgb(${v-14},${v-14},${v-18})`);c.fillStyle=g;c.fillRect(x*64+ox+2,y*32+2,60,28)}grain(c,w,h,6)});
 tex('books',256,256,(c,w,h)=>{c.fillStyle='#3a2418';c.fillRect(0,0,w,h);const cols=['#7a1f2b','#2a4a8a','#d8c8a0','#1f5a3a','#c9a46a','#4a2a5a','#e9e3da','#8a3a1a','#2a2a30','#5ab4ff','#ff5d73','#ffd166'];
  for(let r=0;r<4;r++){let x=4;const y0=r*64+6;c.fillStyle='#2a1810';c.fillRect(0,r*64+58,w,6);while(x<w-6){const bw=5+rnd()*9|0,bh=36+rnd()*16|0,lean=rnd()<.06;c.fillStyle=cols[rnd()*cols.length|0];if(lean){c.save();c.translate(x,y0+52);c.rotate(-.25);c.fillRect(0,-bh,bw,bh);c.restore();x+=bw+6;continue}
   c.fillRect(x,y0+52-bh,bw,bh);c.fillStyle='#ffffff30';c.fillRect(x+1,y0+56-bh,bw-2,2);c.fillRect(x+1,y0+44-bh/3,bw-2,1.5);x+=bw+1}}grain(c,w,h,8)});
 tex('slate',256,256,(c,w,h)=>{c.fillStyle='#3a3e48';c.fillRect(0,0,w,h);for(let y=0;y<16;y++)for(let x=-1;x<9;x++){const v=50+rnd()*18|0;c.fillStyle=`rgb(${v},${v+4},${v+12})`;c.fillRect(x*32+(y%2)*16+1,y*16+1,30,14);c.fillStyle='#00000040';c.fillRect(x*32+(y%2)*16,y*16+14,32,2)}grain(c,w,h,10)});
 tex('decking',256,256,(c,w,h)=>{for(let i=0;i<8;i++){const v=rnd()*18;c.fillStyle=`rgb(${150+v|0},${108+v|0},${72+v|0})`;c.fillRect(0,i*32,w,30);c.fillStyle='#2a1a10';c.fillRect(0,i*32+30,w,2);for(let k=0;k<6;k++){c.strokeStyle='#00000018';c.beginPath();const y=i*32+4+rnd()*22;c.moveTo(0,y);c.lineTo(w,y+(rnd()-.5)*4);c.stroke()}}grain(c,w,h,12)});
 tex('hob',128,128,(c,w,h)=>{c.fillStyle='#101014';c.fillRect(0,0,w,h);c.strokeStyle='#5a5a66';c.lineWidth=3;for(const[x,y,r]of[[34,34,20],[94,34,16],[34,94,16],[94,94,22]]){c.beginPath();c.arc(x,y,r,0,7);c.stroke()}c.fillStyle='#ffffff18';c.fillRect(0,0,w,10)});
 tex('awning',128,128,(c,w,h)=>{for(let i=0;i<8;i++){c.fillStyle=i%2?'#f2ead8':'#2f5a46';c.fillRect(i*16,0,16,h)}c.fillStyle='#00000030';c.fillRect(0,h-10,w,10);grain(c,w,h,8)});
 tex('winIn',128,160,(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#3a3030');g.addColorStop(1,'#1a1418');c.fillStyle=g;c.fillRect(0,0,w,h);const cc=['#c9a46a','#8a3a4a','#4a6a8a','#e9e3da'][rnd()*4|0];c.fillStyle=cc;c.fillRect(0,0,30+rnd()*20,h);c.fillRect(w-30-rnd()*20,0,50,h);c.fillStyle='#00000030';for(let x=0;x<w;x+=8)c.fillRect(x,0,3,h);c.fillStyle='#ffe0b030';c.fillRect(40,40,48,60)});
 tex('pastry',256,128,(c,w,h)=>{c.fillStyle='#f4efe6';c.fillRect(0,0,w,h);for(let r=0;r<2;r++)for(let i=0;i<7;i++){const x=10+i*35,y=14+r*58;const k=(i+r*3)%4;
   if(k===0){c.fillStyle='#d99a52';c.beginPath();c.ellipse(x+14,y+20,15,9,-.2,0,7);c.fill();c.strokeStyle='#a86a30';c.lineWidth=2;for(let j=-2;j<=2;j++){c.beginPath();c.moveTo(x+14+j*5,y+12);c.lineTo(x+14+j*5,y+28);c.stroke()}}
   else if(k===1){c.fillStyle='#c88a40';c.beginPath();c.arc(x+14,y+20,13,0,7);c.fill();c.fillStyle='#f4e2c0';c.beginPath();c.arc(x+14,y+20,6,0,7);c.fill();c.strokeStyle='#8a4a20';c.beginPath();c.arc(x+14,y+20,9,0,5);c.stroke()}
   else if(k===2){c.fillStyle='#e9b06a';c.fillRect(x+2,y+8,26,22);c.fillStyle='#7a2a3a';c.fillRect(x+8,y+14,14,10)}
   else{c.fillStyle='#b87a3a';c.beginPath();c.ellipse(x+14,y+20,14,12,0,0,7);c.fill();c.fillStyle='#ffffffaa';for(let j=0;j<6;j++)c.fillRect(x+6+rnd()*16,y+12+rnd()*14,2,2)}}grain(c,w,h,8)});
 tex('sack',128,128,(c,w,h)=>{c.fillStyle='#d2c19a';c.fillRect(0,0,w,h);for(let i=0;i<h;i+=3){c.fillStyle='#00000012';c.fillRect(0,i,w,1);c.fillRect(i,0,1,h)}blotch(c,w,h,10,'#ffffff',.25,6,20);grain(c,w,h,14)});
 tex('tvshow',256,144,(c,w,h)=>{const g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,'#ffd9a0');g.addColorStop(1,'#ff9a7a');c.fillStyle=g;c.fillRect(0,0,w,h);c.fillStyle='#e9e3da';c.fillRect(150,30,70,80);c.fillStyle='#3a5a8a';c.fillRect(160,40,50,40);c.fillStyle='#7a4a3a';c.beginPath();c.arc(80,70,22,0,7);c.fill();c.fillStyle='#2a4a8a';c.fillRect(56,92,48,52);c.fillStyle='#c0304a';c.fillRect(0,112,w,32);c.fillStyle='#fff';c.font='bold 15px sans-serif';c.fillText('NEVER REUSE PASSWORDS',10,133);c.fillStyle='#ffd166';c.fillRect(0,104,60,8)});
 tex('shopwin',256,128,(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#9ab8d0');g.addColorStop(.5,'#3a4858');g.addColorStop(1,'#1a1e26');c.fillStyle=g;c.fillRect(0,0,w,h);for(let i=0;i<9;i++){c.fillStyle=['#e9b06a','#ff5d73','#7cc4ff','#ffd166','#e9e3da'][i%5];c.globalAlpha=.55;c.fillRect(10+i*27,70+rnd()*20,18,30)}c.globalAlpha=1;c.fillStyle='#ffffff40';c.beginPath();c.moveTo(20,0);c.lineTo(70,0);c.lineTo(20,h);c.lineTo(0,h);c.fill()});
 // facades for the buildings around: storeys of sash windows reflecting a morning sky, a few with curtains or plants
 const fac=(key,wall,trim,rows)=>tex(key,256,512,(c,w,h)=>{c.fillStyle=wall;c.fillRect(0,0,w,h);blotch(c,w,h,20,'#00000030',.5,10,40);const rh=h/rows;
  for(let r=0;r<rows;r++){c.fillStyle=trim;c.fillRect(0,r*rh+rh-6,w,4);for(let i=0;i<3;i++){const x=22+i*80,y=r*rh+rh*.22,ww=50,hh=rh*.6;c.fillStyle=trim;c.fillRect(x-5,y-6,ww+10,hh+14);
   const g=c.createLinearGradient(0,y,0,y+hh);g.addColorStop(0,'#c8dcec');g.addColorStop(.6,'#6a7c90');g.addColorStop(1,'#3a4450');c.fillStyle=g;c.fillRect(x,y,ww,hh);
   if(rnd()<.35){c.fillStyle=['#c9a46a','#8a3a4a','#e9e3da','#4a6a8a'][rnd()*4|0];c.fillRect(x,y,ww*.3,hh);c.fillRect(x+ww*.7,y,ww*.3,hh)}if(rnd()<.15){c.fillStyle='#ffe0a0';c.globalAlpha=.6;c.fillRect(x+4,y+4,ww-8,hh-8);c.globalAlpha=1}
   c.fillStyle=trim;c.fillRect(x,y+hh/2-1.5,ww,3);c.fillRect(x+ww/2-1.5,y,3,hh);c.fillStyle='#ffffff40';c.fillRect(x+3,y+3,8,hh/2-6);if(rnd()<.2){c.fillStyle='#3f7a44';c.fillRect(x-4,y+hh+2,ww+8,8)}}}grain(c,w,h,10)});
 fac('facBrick','#8a4a38','#efe8dc',4);fac('facYellow','#c9a86a','#f4efe6',4);fac('facRender','#e3ddd2','#5a6a7a',5);fac('facGrey','#6a6a72','#e9e3da',5);fac('facTall','#7a5a4a','#d8cfc0',8);
}
function buildHome(){
 homeTextures();
 region('home',{fog:[.86,.76,.68],fr:[80,360],day:1});const RG=G.regions.home;RG.amb=[.6,.58,.6];RG.lmCap=20;RG.lmPages={high:4,medium:3,low:2};
 // morning sun from the east-south-east, low and warm, over Linden Square and in through the Mill Lane windows
 const SUN=[.86,.42,.3];G.sun.home={d:SUN,c:[1,.86,.7],k:2.5,c0:[-298,6,0],half:58,res:4096};
 const M={brick:mt('brick',0,.7,0,{r:.9}),plaster:mt('plasterF','#fbf2e4',.35,0,{r:.9}),paint:mt('plasterF',0,.35,0,{r:.9}),green:MT.gloss('#24493a'),
  stone:mt('concrete','#d8d0c0',.5,0,{r:.8}),sash:MT.plain('#f4f0e8'),metro:mt('metro',0,.9,0,{r:.35}),checker:mt('checker',0,.45,0,{r:.4}),oak:mt('wood','#d8b890',.6,0,{r:.5}),
  steel:mt('metal','#d8dce4',.5,0,{r:.3,m:.7}),deck:mt('decking',0,.5,0,{r:.8}),slate:mt('slate',0,.35,0,{r:.8}),lead:MT.plain('#5a5e66'),tileB:mt('tile','#eef4f6',.8,0,{r:.25}),
  rugA:mt('rug','#c9b6ff',.4,0,{r:1}),rugB:mt('rug','#ffd9a0',.4,0,{r:1}),sack:mt('sack',0,1.4,0,{r:.95}),black:MT.plain('#16161c'),walnut:MT.woodDark};
 const wins=[];
 /* ---------- helpers ---------- */
 // a panel whose texture tiles at its real size (tw x th metres per repeat), so nothing is ever stretched
 const tq=(cx,y,cz,w,h,dir,m,tw,th)=>{const hw=w/2,u=w/tw,v=h/th;
  if(dir==='s')quad([cx-hw,y,cz],[cx+hw,y,cz],[cx+hw,y+h,cz],[cx-hw,y+h,cz],m,u,v);if(dir==='n')quad([cx+hw,y,cz],[cx-hw,y,cz],[cx-hw,y+h,cz],[cx+hw,y+h,cz],m,u,v);
  if(dir==='e')quad([cx,y,cz+hw],[cx,y,cz-hw],[cx,y+h,cz-hw],[cx,y+h,cz+hw],m,u,v);if(dir==='w')quad([cx,y,cz-hw],[cx,y,cz+hw],[cx,y+h,cz+hw],[cx,y+h,cz-hw],m,u,v)};
 const sg=(cx,y,cz,w,h,dir,t,fg,bg,lit)=>panel(cx,y,cz,w,h,dir,signM(t,fg,bg,w,h,lit));
 // a real window: opening (so the room wall and the brick skin both get it), glass, sash bars, stone sill and lintel
 // outside, a painted sill board inside. `out` is +1/-1: which side of the wall plane is outdoors.
 const win=(o,at,c,w,h,y,out,o2)=>{o2=o2||{};door(o,at,c,w,h,y,1);const g=MT.glass,b=.03;wins.push({o,at,c,w,h,y,out,fl:o2.fl,noBeam:o2.noBeam||o2.backdrop});
  const B=(a0,y0,a1,y1,t0,t1,m)=>o==='h'?box(a0,y0,Math.min(t0,t1),a1,y1,Math.max(t0,t1),m,{col:false}):box(Math.min(t0,t1),y0,a0,Math.max(t0,t1),y1,a1,m,{col:false});
  B(c-w/2+.012,y+.012,c+w/2-.012,y+h-.012,at-.012,at+.012,g);if(o==='h')colBox(c-w/2,at-.06,c+w/2,at+.06,y,y+h);else colBox(at-.06,c-w/2,at+.06,c+w/2,y,y+h);
  // sashes: frame round the opening, a meeting rail, one glazing bar per sash
  B(c-w/2+.006,y+.006,c-w/2+.07,y+h-.006,at-.045,at+.045,M.sash);B(c+w/2-.07,y+.006,c+w/2-.006,y+h-.006,at-.045,at+.045,M.sash);B(c-w/2+.07,y+.006,c+w/2-.07,y+.07,at-.044,at+.044,M.sash);B(c-w/2+.07,y+h-.07,c+w/2-.07,y+h-.006,at-.044,at+.044,M.sash);
  B(c-w/2+.07,y+h/2-b,c+w/2-.07,y+h/2+b,at-.06,at+.06,M.sash);B(c-b*.7,y+.07,c+b*.7,y+h-.07,at-.03,at+.03,M.sash);
  const so=at+out*.2;B(c-w/2-.1,y-.09,c+w/2+.1,y-.01,so,so+out*.1,M.stone);B(c-w/2-.12,y+h,c+w/2+.12,y+h+.24,so,so+out*.035,M.stone);
  if(!o2.noIn){const si=at-out*.2;B(c-w/2-.06,y-.035,c+w/2+.06,y,si,si-out*.15,M.sash)}
  if(o2.backdrop){const d=at-out*.34;if(o==='h')tq(c,y-.3,d,w+1,h+.6,out>0?'s':'n',mt('winIn',0,1,1,{k:.5}),w+1,h+.6);else tq(d,y-.3,c,w+1,h+.6,out>0?'e':'w',mt('winIn',0,1,1,{k:.5}),w+1,h+.6)}};
 // the brick outer skin of an exterior wall with the same openings as the room wall behind it (no AO, no skirting)
 const skin=(o,fixed,a0,a1,y0,y1,inward,m)=>{m=m||M.brick;const ds=(DOORS[BR]||[]).filter(d=>d.o===o&&Math.abs(d.at-fixed)<.6&&d.c>a0&&d.c<a1&&d.y>=y0-.1&&d.y<y1-.3).sort((p,q)=>p.c-q.c);
  const t0=inward>0?fixed:fixed-.2,t1=inward>0?fixed+.2:fixed;let cur=a0;const P=[];
  for(const d of ds){P.push([cur,d.c-d.w/2,y0,y1]);if(d.y>y0+.01)P.push([d.c-d.w/2,d.c+d.w/2,y0,d.y]);if(d.y+d.h<y1)P.push([d.c-d.w/2,d.c+d.w/2,d.y+d.h,y1]);cur=d.c+d.w/2}P.push([cur,a1,y0,y1]);
  for(const s of P){if(s[1]-s[0]<.01||s[3]-s[2]<.01)continue;if(o==='h')box(s[0],s[2],t0,s[1],s[3],t1,m,{col:false});else box(t0,s[2],s[0],t1,s[3],s[1],m,{col:false})}};
 const WL=(o,f,a0,a1,y,h,m,inw)=>wallLine(o,f,a0,a1,y,h,m,inw);
 const rm=(x0,z0,x1,z1,y,h,fl,n,mc,ce)=>{floorQ(x0,z0,x1,z1,y,fl);surf(x0,z0,x1,z1,y);if(h>0)ceilQ(x0,z0,x1,z1,y+h,ce||MT.ceil);if(n)(MAPR.home=MAPR.home||[]).push({x0,z0,x1,z1,y,n,c:mc||'#4a4a5a'})};
 // things fixed to a wall, given the wall's room-side face and which way the room is (s = +1/-1)
 const onWall=(o,face,s,a0,a1,y0,y1,d0,d1,m,col)=>{const p0=face+s*d0,p1=face+s*d1;if(o==='h')box(a0,y0,Math.min(p0,p1),a1,y1,Math.max(p0,p1),m,{col:!!col});else box(Math.min(p0,p1),y0,a0,Math.max(p0,p1),y1,a1,m,{col:!!col})};
 const radiator=(o,face,s,c,w,y)=>{onWall(o,face,s,c-w/2,c+w/2,y+.14,y+.2,.03,.11,M.sash);onWall(o,face,s,c-w/2,c+w/2,y+.66,y+.72,.03,.11,M.sash);
  for(let p=c-w/2+.03;p<c+w/2-.03;p+=.075)onWall(o,face,s,p,p+.045,y+.15,y+.71,.04,.1,M.sash);onWall(o,face,s,c-w/2-.06,c-w/2-.02,y+.08,y+.16,.05,.09,MT.chrome)};
 const curtain=(o,face,s,c,w,y,h,col)=>{const m=MT.fabric(col);for(const k of[-1,1]){const p=c+k*(w/2+.2);onWall(o,face,s,p-.2,p+.2,y-.2,y+h+.22,.05,.13,m)}
  onWall(o,face,s,c-w/2-.45,c+w/2+.45,y+h+.25,y+h+.28,.08,.11,MT.brass);for(const k of[-1,1])onWall(o,face,s,c+k*(w/2+.42)-.015,c+k*(w/2+.42)+.015,y+h+.22,y+h+.3,0,.1,MT.brass)};
 const loaf=(x,y,z,l,along,col)=>{const w=.11,hh=.085,m=MT.plain(col||'#c88a40');if(along==='z')box(x-w,y,z-l/2,x+w,y+hh,z+l/2,m,{col:false});else box(x-l/2,y,z-w,x+l/2,y+hh,z+w,m,{col:false});};
 const mug=(x,y,z,col)=>box(x-.04,y,z-.04,x+.04,y+.095,z+.04,MT.gloss(col||'#e9e3da'),{col:false});
 const can=(x,y,z,col)=>box(x-.032,y,z-.032,x+.032,y+.12,z+.032,MT.gloss(col||'#8affc1'),{col:false});
 const shelfBooks=(o,face,s,a0,a1,y0,y1,d)=>{onWall(o,face,s,a0,a1,y0,y1,0,d,M.walnut,true);const fp=face+s*(d+.004),w=a1-a0,h=y1-y0-.1,cx=(a0+a1)/2;
  const dir=o==='h'?(s>0?'s':'n'):(s>0?'e':'w');if(o==='h')tq(cx,y0+.05,fp,w-.06,h,dir,mt('books',0,1,0,{r:.8}),.9,.9);else tq(fp,y0+.05,cx,w-.06,h,dir,mt('books',0,1,0,{r:.8}),.9,.9)};
 // an office chair: five-star base on castors, gas lift, a padded seat, a tall mesh back, armrests. `f` is the way you face
 const officeChair=(x,z,f,y,col)=>{const c=MT.plain('#1a1a20'),fab=MT.fabric(col||'#c0304a');
  for(let i=0;i<5;i++){const a=i/5*Math.PI*2,ex=x+Math.cos(a)*.3,ez=z+Math.sin(a)*.3;box(Math.min(x,ex)-.02,y+.06,Math.min(z,ez)-.02,Math.max(x,ex)+.02,y+.1,Math.max(z,ez)+.02,c,{col:false});box(ex-.03,y,ez-.03,ex+.03,y+.06,ez+.03,c,{col:false})}
  box(x-.03,y+.1,z-.03,x+.03,y+.44,z+.03,MT.chrome,{col:false});box(x-.25,y+.44,z-.25,x+.25,y+.52,z+.25,fab,{col:false});
  const back={n:[0,.24],s:[0,-.24],e:[-.24,0],w:[.24,0]}[f],bx=x+back[0],bz=z+back[1],hz=f==='n'||f==='s';
  box(hz?x-.23:bx-.03,y+.58,hz?bz-.03:z-.23,hz?x+.23:bx+.03,y+1.18,hz?bz+.03:z+.23,fab,{col:false});box(hz?x-.04:bx-.02,y+.5,hz?bz-.02:z-.04,hz?x+.04:bx+.02,y+.6,hz?bz+.02:z+.04,c,{col:false});
  for(const k of[-1,1]){const ax=hz?x+k*.26:x,az=hz?z:z+k*.26;box(ax-(hz?.03:.18),y+.52,az-(hz?.18:.03),ax+(hz?.03:.18),y+.72,az+(hz?.18:.03),c,{col:false})}colBox(x-.3,z-.3,x+.3,z+.3,y,y+.5)};
 const bulb=(x,y,z,col,rng,int)=>{box(x-.008,y-.45,z-.008,x+.008,y,z+.008,MT.plain('#222'),{col:false});box(x-.09,y-.62,z-.09,x+.09,y-.45,z+.09,MT.glow(col||'#ffe2b0',1.2),{col:false,b:1});addLight(x,y-.8,z,hx(col||'#ffe2b0'),rng||6,int||.75)};
 const potPlant=(x,z,s,y)=>{y=y||0;box(x-.2*s,y,z-.2*s,x+.2*s,y+.4*s,z+.2*s,MT.gloss('#b0603a'));box(x-.22*s,y+.37*s,z-.22*s,x+.22*s,y+.42*s,z+.22*s,MT.gloss('#9a5030'),{col:false});box(x-.18*s,y+.42*s,z-.18*s,x+.18*s,y+.43*s,z+.18*s,MT.plain('#3a2418'),{col:false});
  for(let i=0;i<3;i++)card(x,y+.43*s,z,.95*s,1.15*s,i*Math.PI/3+.3,MT.leaves)};

 /* ================= THE STAIR HALL (west strip, every floor) ================= */
 const HY1=HY;
 for(let f=0;f<4;f++){const Y=HY[f],Y1=HY[f+1],ym=(Y+Y1)/2;
  door('v',SXE,6,1,2.2,Y);
  if(f===0)door('h',HZ1,-308,1.1,2.4,0);else win('h',HZ1,-308,1.5,1.7,Y+.9,1,{noBeam:1});
  WL('v',HX0,-.4,HZ1,Y,Y1-Y,M.paint,1);WL('v',SXE,-.4,HZ1,Y,Y1-Y,M.paint,-1);WL('h',-.4,HX0,SXE,Y,Y1-Y,M.paint,1);WL('h',HZ1,HX0,SXE,Y,Y1-Y,M.paint,-1);
  stairs(-309.8,1,-308.1,4,Y,ym,'z-',M.oak,{solid:f===0,sides:1,nose:MT.plain('#4a3a2a')});stairs(-307.9,1,-306.2,4,ym,Y1,'z+',M.oak,{solid:false,nose:MT.plain('#4a3a2a')});
  slab(-309.8,-.2,-306.2,1,ym,.25,M.oak,M.paint);slab(-309.8,4,-306.2,HZ1-.2,Y1,.3,M.oak,M.paint);
  // the landing floor carries on through the doorway (the wall is 20 cm thick): no floor there is a wall to the player
  floorQ(-306.2,5.5,SXE,6.5,Y1+.006,M.oak);surf(-306.2,5.5,SXE,6.5,Y1);
  railing(-309.72,4,-309.72,1,Y,{y2:ym,h:.9,m:MT.woodDark});railing(-306.28,1,-306.28,4,ym,{y2:Y1,h:.9,m:MT.woodDark});
  bulb(-308,Y1-.3,8,'#ffe2b0',7,.7);if(f>0)radiator('v',-309.8,1,9.5,1.2,Y);
 }
 box(-308.1,0,1,-307.9,HY[4]+2.7,4,M.paint);
 // the bulkhead on the roof: walls, a door out to the terrace, a lead roof
 door('v',SXE,6,1,2.2,HY[4]);WL('v',HX0,-.4,HZ1,HY[4],2.7,M.paint,1);WL('h',-.4,HX0,SXE,HY[4],2.7,M.paint,1);WL('h',HZ1,HX0,SXE,HY[4],2.7,M.paint,-1);WL('v',SXE,-.4,HZ1,HY[4],2.7,M.paint,-1);
 ceilQ(HX0,-.4,SXE,HZ1,HY[4]+2.7,M.paint);box(HX0-.23,HY[4]+2.7,-.5,SXE+.1,HY[4]+2.92,HZ1+.23,{side:M.stone,top:M.lead},{col:false});bulb(-308,HY[4]+2.7,8,'#ffe2b0',6,.6);
 // the solid riser block behind the stairs, up to the parapet
 box(HX0,0,HZ0,SXE-.2,HY[4]+1.1,-.4,{side:M.paint,top:M.lead});
 floorQ(HX0,-.4,SXE,HZ1,0,MT.tile);surf(HX0,-.4,SXE,HZ1,0);(MAPR.home=MAPR.home||[]).push({x0:HX0,z0:-.4,x1:SXE,z1:HZ1,y:0,n:'Stairs',c:'#4a4a5a'});
 // ground-floor lobby: the post on the mat, the bike against the wall, a radiator, the way up
 radiator('v',-309.8,1,6.8,1,0);
 {const bx=-309.5,m=MT.gloss('#c0304a');for(const z of[8.2,9.6])box(bx-.03,.05,z-.32,bx+.03,.65,z+.32,MT.plain('#1a1a20'),{col:false});box(bx-.02,.55,8.2,bx+.02,.6,9.6,m,{col:false});box(bx-.02,.3,8.6,bx+.02,.75,8.66,m,{col:false});box(bx-.25,.95,9.4,bx+.25,.98,9.46,MT.plain('#1a1a20'),{col:false});colBox(bx-.1,7.8,bx+.1,10,0,1)}
 for(const[x,z,c]of[[-308.4,11.3,'#e9e3da'],[-308.1,11.05,'#ffd166'],[-307.7,11.4,'#7cc4ff']])box(x-.15,.021,z-.11,x+.15,.026,z+.11,MT.plain(c),{col:false});
 box(-308.8,0,10.9,-307.2,.02,11.75,mt('rug','#5a3a2a',.4,0),{col:false});
 sg(-306.01,1.5,9.2,.5,.42,'w','1A ↑','#ffd9a0','#4a2e22');

 /* ================= GROUND FLOOR: PROOF ================= */
 const H0=3.6;
 win('v',HX1,4.75,2.4,2.1,.9,1,{fl:0});win('v',HX1,9.25,2.4,2.1,.9,1,{fl:0});win('v',HX1,-3,2.6,1,1.6,1,{fl:0});win('v',HX1,-10,1,1,1.4,1,{fl:0});win('h',HZ0,-302,1.2,.8,1.7,-1,{noBeam:1});
 door('h',HZ0,-292.5,1,2.2,0);door('h',2,-297,1.2,2.4,0);door('h',-8,-302,1,2.2,0);door('h',-8,-296.75,.8,2.1,0);door('h',-8,-292.75,1.4,2.2,0);
 WL('v',HX1,HZ0,2,0,H0,M.metro,-1);WL('v',HX1,2,HZ1-.2,0,H0,M.plaster,-1);WL('h',HZ0,SXE,HX1,0,H0,M.paint,1);WL('v',SXE,HZ0,-.4,0,H0,M.metro,-1);
 WL('h',2,SXE,HX1,0,H0,M.metro,1);WL('h',-8,SXE,HX1,0,H0,M.metro,1);WL('v',-298,HZ0,-8,0,H0,M.paint,1);WL('v',-295.5,HZ0,-8,0,H0,M.tileB,1);
 rm(SXE,2,HX1,HZ1,0,H0,M.checker,'Proof bakery','#6a4a2a',mt('ceil','#f4efe6',.4,0));rm(SXE,-8,HX1,2,0,H0,MT.tileDark,'Bakehouse','#5a4a3a');
 rm(SXE,HZ0,-298,-8,0,H0,MT.concrete,'Store','#4a4a5a');rm(-298,HZ0,-295.5,-8,0,H0,M.tileB,'WC','#4a5a6a');rm(-295.5,HZ0,HX1,-8,0,H0,MT.tileDark,'Back door','#4a4a5a');
 // --- the shopfront: green pilasters, stall riser, plate glass in three bays, a fascia with gold letters, an awning
 {const z=HZ1,g=M.green;box(SXE-.02,0,z-.22,-305.6,3.88,z+.26,g);box(-290.4,0,z-.22,HX1+.22,3.88,z+.26,g);
  box(-305.6,0,z-.15,-303.25,.6,z+.15,g,{col:false});box(-301.95,0,z-.15,-290.4,.6,z+.15,g,{col:false});box(-305.6,3.0,z-.15,-290.4,3.12,z+.2,g,{col:false});box(SXE-.02,3.12,z-.21,HX1+.22,3.88,z+.31,g,{col:false});
  box(-305.6,.6,z-.012,-303.25,3.0,z+.012,MT.glass,{col:false});box(-301.95,.6,z-.012,-290.4,3.0,z+.012,MT.glass,{col:false});for(const x of[-298.1,-294.25])box(x-.05,.6,z-.06,x+.05,3.0,z+.06,g,{col:false});
  colBox(SXE,z-.2,HX1,z+.25,0,3.9);
  // the door: glazed, kick plate, brass push plate, an OPEN sign hanging inside
  box(-303.25,0,z-.07,-301.95,.25,z+.07,g,{col:false});box(-303.25,2.42,z-.07,-301.95,2.5,z+.07,g,{col:false});for(const x of[-303.25,-302.05])box(x,0,z-.07,x+.1,2.5,z+.07,g,{col:false});
  box(-303.15,.25,z-.012,-302.05,2.42,z+.012,MT.glass,{col:false});box(-303.25,2.5,z-.012,-301.95,3.0,z+.012,MT.glass,{col:false});box(-302.4,1.0,z-.1,-302.25,1.35,z-.07,MT.brass,{col:false});
  sg(-302.6,1.7,z-.11,.42,.2,'n','OPEN','#ff5d73','#f4efe6');box(-302.62,1.9,z-.115,-302.58,2.42,z-.105,MT.plain('#2a2a30'),{col:false});
  sg(-298,3.2,z+.305,10.2,.58,'s','PROOF · BAKERY · EST. 2019','#e9c46a','#24493a');
  const aw=mt('awning',0,1,0,{r:.9});quad([-301.6,3.0,z+.32],[-290.8,3.0,z+.32],[-290.8,2.55,z+1.7],[-301.6,2.55,z+1.7],aw,5,1);quad([-290.8,3.0,z+.32],[-301.6,3.0,z+.32],[-301.6,2.55,z+1.7],[-290.8,2.55,z+1.7],aw,5,1);
  box(-301.6,2.33,z+1.69,-290.8,2.55,z+1.72,aw,{col:false});for(const x of[-301.6,-290.8])box(x-.02,2.55,z+.32,x+.02,3.0,z+1.7,MT.plain('#2a2a30'),{col:false});
  // display window: a raised oak bed of loaves, three tiered stands, a cake under a glass cloche
  for(const[x0,x1]of[[-305.5,-303.5],[-301.7,-290.7]]){box(x0,0,z-1.05,x1,.62,z-.25,{side:M.walnut,top:M.oak});const n=Math.floor((x1-x0-.2)/.5);for(let i=0;i<n;i++)loaf(x0+.35+i*.5,.62,z-.62,.4,'z',['#c88a40','#a86a30','#d99a52'][i%3])}
  colBox(-305.5,z-1.05,-303.5,z-.2,0,.62);colBox(-301.7,z-1.05,-290.7,z-.2,0,.62);
  for(const x of[-299.6,-296.2,-292.8]){box(x-.035,.62,z-.67,x+.035,1.5,z-.6,MT.brass,{col:false});for(const[yy,r]of[[.98,.42],[1.36,.3]]){box(x-r,yy,z-.95,x+r,yy+.03,z-.33,M.oak,{col:false});for(let k=-1;k<=1;k++){const px=x+k*r*.62;if(yy<1.2)loaf(px,yy+.03,z-.64,.28,'z','#d99a52');else box(px-.07,yy+.03,z-.71,px+.07,yy+.12,z-.57,MT.plain(['#e9b06a','#c88a40','#f0c27a'][k+1]),{col:false})}}}
  box(-294.6,.62,z-.85,-293.9,.9,z-.4,MT.plain('#f4efe6'),{col:false});box(-294.52,.9,z-.8,-293.98,1.18,z-.45,MT.glass,{col:false});
 }
 // --- service counter: glass display case on an oak counter, till, card reader, paper bags; the bread wall behind
 {const cz=5;box(-305.2,0,cz-.45,-293.2,.95,cz+.45,{side:M.walnut,top:M.stone});box(-293.2,0,cz-.45,-291.7,1.05,cz+.45,{side:M.walnut,top:M.stone});
  for(const x of[-305.1,-301.3,-297.5])box(x-.025,.95,cz+.05,x+.025,1.42,cz+.45,MT.chrome,{col:false});
  box(-305.1,.95,cz+.44,-297.5,1.42,cz+.45,MT.glass,{col:false});box(-305.1,1.42,cz+.02,-297.5,1.45,cz+.47,M.stone,{col:false});
  const pas=mt('pastry',0,1,0,{r:.7});quad([-305.05,.951,cz+.43],[-297.55,.951,cz+.43],[-297.55,.951,cz+.07],[-305.05,.951,cz+.07],pas,7.5,.72);
  box(-305.05,1.18,cz+.07,-297.55,1.19,cz+.43,MT.glass,{col:false});quad([-305.05,1.191,cz+.43],[-297.55,1.191,cz+.43],[-297.55,1.191,cz+.07],[-305.05,1.191,cz+.07],pas,7.5,.72);
  box(-305.05,1.41,cz+.42,-297.55,1.415,cz+.44,MT.glow('#fff4e0',1),{col:false});addLight(-301.3,1.6,cz+.6,[1,.92,.8],2.4,.3);
  box(-296.4,.95,cz-.3,-295.8,1.14,cz+.1,M.black,{col:false});box(-296.34,1.14,cz-.22,-295.86,1.46,cz-.17,M.black,{col:false});tq(-296.1,1.17,cz-.165,.42,.26,'s',MT.dash,.42,.26);
  box(-295.4,.95,cz-.05,-295.24,1.11,cz+.14,M.black,{col:false});box(-295.38,1.111,cz-.03,-295.26,1.115,cz+.08,MT.glow('#8affc1',.9),{col:false});
  for(let i=0;i<5;i++)box(-294.75,.95+i*.012,cz-.32,-294.35,.962+i*.012,cz-.08,MT.plain('#c9a46a'),{col:false});box(-293.95,.95,cz+.1,-293.75,1.14,cz+.28,MT.glass,{col:false});
  // back counter: espresso machine, grinder, a stack of cups, Ellie's radio
  box(-293.6,0,2.2,-290.2,.95,2.85,{side:M.walnut,top:M.stone});box(-293.3,.95,2.3,-292.1,1.5,2.78,MT.chrome);box(-293.15,1.06,2.79,-292.25,1.1,2.86,MT.chrome,{col:false});
  for(const x of[-293,-292.4])box(x-.04,1.0,2.78,x+.04,1.06,2.84,M.black,{col:false});box(-292.95,1.5,2.36,-292.45,1.56,2.7,MT.plain('#e9e3da'),{col:false});
  box(-291.85,.95,2.38,-291.45,1.4,2.72,M.black);box(-291.8,1.4,2.42,-291.5,1.62,2.68,MT.glass,{col:false});for(let i=0;i<5;i++)mug(-291.0,.95+i*.095,2.5,'#e9e3da');
  box(-290.75,.95,2.4,-290.35,1.16,2.72,MT.gloss('#c0304a'),{col:false});box(-290.7,1.0,2.721,-290.5,1.12,2.725,MT.plain('#2a2a30'),{col:false});box(-290.4,1.16,2.6,-290.38,1.45,2.62,MT.chrome,{col:false});
  vfx('steam',{b0:[-292.7,1.56,2.55],n:22,size:.7,col:[1,1,1],op:.35,sp:1.2});
  // the bread wall: wire baskets of loaves on three shelves, a chalk menu board above
  box(-305.2,0,2.2,-298.1,.9,2.7,{side:M.walnut,top:M.oak});
  for(let r=0;r<3;r++)for(let i=0;i<6;i++){const x=-305.1+i*1.17,y=1.02+r*.52;box(x,y,2.22,x+1.07,y+.03,2.62,MT.plain('#3a2a20'),{col:false});for(let k=0;k<3;k++)loaf(x+.2+k*.33,y+.03,2.42,.28,'z',['#c88a40','#a86a30','#d99a52','#8a5a2a'][(r+i+k)%4])}
  sg(-301.65,2.72,2.205,6.8,.72,'s','SOURDOUGH · RYE · CINNAMON KNOTS · FLAT WHITES','#f4efe6','#1e2a26');
 }
 // --- customer side: three bistro tables, a window bar with stools along Mill Lane, menu chalkboard, plants, pendants
 for(const[x,z]of[[-303.6,8.4],[-299.4,8.6],[-296.6,7.8]]){box(x-.035,0,z-.035,x+.035,.72,z+.035,M.black,{col:false});box(x-.24,0,z-.24,x+.24,.025,z+.24,M.black,{col:false});box(x-.36,.72,z-.36,x+.36,.76,z+.36,M.stone,{col:false});colBox(x-.36,z-.36,x+.36,z+.36,0,.76);
  chair(x+.62,z,'e',MT.plain('#24493a'));chair(x-.62,z,'w',MT.plain('#24493a'));mug(x+.12,.76,z-.08,'#f4efe6');vfx('steam',{b0:[x+.12,.86,z-.08],n:8,size:.3,col:[1,1,1],op:.22,sp:.9})}
 box(-290.8,1.0,3.6,-290.2,1.05,10.4,{side:M.walnut,top:M.oak});colBox(-290.8,3.6,-290.2,10.4,0,1.05);
 for(const z of[4.2,5.3,8.7,9.8]){box(-291.35,0,z-.03,-291.29,.72,z+.03,M.black,{col:false});box(-291.5,0,z-.16,-291.14,.03,z+.16,M.black,{col:false});box(-291.52,.72,z-.19,-291.12,.78,z+.19,M.green,{col:false})}
 panel(-305.99,1.2,8.6,2.2,1.4,'e',MT.chalk);potPlant(-305.5,11.1,1);potPlant(-291.1,11.1,1);
 for(const x of[-303,-299.5,-296])pendant(x,3.6,5,'#ffd98a',5);for(const[x,z]of[[-301.5,8.6],[-296.6,7.8]])pendant(x,3.6,z,'#ffd98a',4.5);
 vfx('dust',{b0:[-305.5,.4,3],b1:[-290.6,3.3,11.5],n:140,size:1,col:[1,.9,.7],op:.5});
 // --- the bakehouse: two deck ovens, proving cabinet, steel benches with dough, mixer, cooling racks, sacks, sink, hood, clock
 {for(const x of[-305.8,-302.2]){box(x,0,-7.8,x+3.4,2.1,-6.5,MT.chrome);tq(x+1.7,.25,-6.49,3,.65,'s',MT.oven,1.5,.65);tq(x+1.7,1.1,-6.49,3,.65,'s',MT.oven,1.5,.65);box(x+.2,1.88,-6.48,x+3.2,1.95,-6.44,MT.glow('#ff9a5c',.9),{col:false});addLight(x+1.7,.9,-5.7,[1,.55,.25],4,.55);
   vfx('steam',{b0:[x+1.7,2.15,-6.7],n:14,size:1.1,col:[1,.95,.9],op:.15,sp:.7})}
  box(-298.4,0,-7.8,-296.6,2.1,-6.9,MT.chrome);box(-298.3,.2,-6.89,-296.7,2,-6.87,MT.glass,{col:false});for(let i=0;i<6;i++){box(-298.2,.35+i*.28,-7.6,-296.8,.37+i*.28,-7,M.steel,{col:false});for(let k=0;k<4;k++)box(-298.1+k*.33,.37+i*.28,-7.4,-297.85+k*.33,.45+i*.28,-7.15,MT.plain('#f0e4cc'),{col:false})}
  box(-305.8,2.4,-7.8,-298.6,2.5,-6.2,MT.chrome,{col:false});box(-305.6,2.5,-7.6,-298.8,3.6,-7.2,MT.chrome,{col:false});
  for(const z of[-3.8,-.8]){box(-303.8,0,z-.45,-297.6,.9,z+.45,{side:MT.chrome,top:M.steel});box(-303.7,.15,z-.4,-297.7,.18,z+.4,M.steel,{col:false});for(let i=0;i<5;i++)box(-303.3+i*1.15,.9,z-.16,-302.9+i*1.15,1.0,z+.16,MT.plain('#f0e4cc'),{col:false});box(-298.4,.9,z-.3,-298.1,.915,z+.3,MT.plain('#8a8a94'),{col:false})}
  box(-296.6,0,-1.2,-295.8,1.1,-.4,MT.gloss('#d8dce4'));box(-296.5,1.1,-1.1,-295.9,1.3,-.5,MT.chrome,{col:false});
  for(const x of[-294.4,-293.2]){const z=-4.4;for(const[px,pz]of[[-.3,-.35],[.3,-.35],[-.3,.35],[.3,.35]])box(x+px-.015,0,z+pz-.015,x+px+.015,1.8,z+pz+.015,M.steel,{col:false});colBox(x-.3,z-.35,x+.3,z+.35,0,1.8);
   for(let i=0;i<7;i++){box(x-.29,.15+i*.24,z-.34,x+.29,.165+i*.24,z+.34,M.steel,{col:false});for(let k=0;k<3;k++)loaf(x-.18+k*.18,.165+i*.24,z,.4,'z',['#c88a40','#a86a30','#d99a52'][(i+k)%3])}}
  for(let i=0;i<7;i++){const x=-305.6+(i%4)*.6,y=Math.floor(i/4)*.34;box(x,y,-2.1,x+.55,y+.33,-1.3,M.sack)}
  box(-291.1,0,-7.8,-290.2,.9,-6.6,MT.chrome);box(-291,.9,-7.7,-290.3,.905,-6.7,M.steel,{col:false});box(-290.75,.905,-7.7,-290.65,1.3,-7.6,MT.chrome,{col:false});
  box(-291.1,1.5,-7.8,-290.2,2.6,-6.7,MT.plain('#e9e3da'));for(let i=0;i<2;i++)box(-291.05,1.7+i*.45,-7.75,-290.25,1.72+i*.45,-6.75,M.steel,{col:false});
  sg(-298,2.45,1.995,.42,.42,'n','04:12','#1b1026','#f4efe6');
  box(-291.1,0,-1.6,-290.2,2.2,1.6,M.steel);for(let i=0;i<4;i++)box(-291.05,.3+i*.5,-1.55,-290.25,.32+i*.5,1.55,MT.plain('#8a8a94'),{col:false});
  for(const[x,z]of[[-302,-2.3],[-296,-2.3],[-300,-5.6]])lightPanel(x,3.6,z,1.6,.4,'#f4f8ff',8,.7);
  vfx('dust',{b0:[-304,.8,-5],b1:[-297,2.6,0],n:110,size:1.3,col:[1,.97,.92],op:.4,sp:.6});
 }
 // --- dry store, WC, back lobby
 {for(let r=0;r<4;r++){box(-305.8,.2+r*.7,-11.8,-298.3,.24+r*.7,-11.25,M.steel,{col:false});for(let i=0;i<9;i++)box(-305.6+i*.8,.24+r*.7,-11.75,-305.05+i*.8,.24+r*.7+.28+(i*7+r*3)%5*.05,-11.3,MT.plain(['#d8c8a0','#c9a46a','#e9e3da','#7a4a2a'][(i+r)%4]),{col:false})}
  for(const x of[-305.8,-298.35])box(x,0,-11.8,x+.05,2.9,-11.25,M.steel,{col:false});colBox(-305.8,-11.8,-298.3,-11.25,0,2.9);
  for(let i=0;i<4;i++)box(-305.6+i*.6,0,-9.4,-305.05+i*.6,.33,-8.6,M.sack);bulb(-302,3.6,-10,'#ffe2b0',5,.6);
  box(-297.3,0,-11.8,-296.5,.42,-11.3,MT.plain('#f4f4f8'));box(-297.3,.42,-11.8,-296.5,.8,-11.62,MT.plain('#f4f4f8'),{col:false});box(-296.1,.8,-11.8,-295.6,.9,-11.45,MT.plain('#f4f4f8'),{col:false});bulb(-296.65,3.6,-10,'#f4f8ff',4,.5);
  box(-295.2,0,-11.8,-294.4,1.2,-11.55,MT.plain('#3a5a3a'),{col:false});for(let i=0;i<3;i++)box(-293.8+i*.55,1.5,-11.8,-293.65+i*.55,1.6,-11.7,MT.chrome,{col:false});bulb(-292.75,3.6,-10,'#ffe2b0',5,.6);
 }
 // exterior skin, ground floor: rear and Mill Lane brick (the front is the shopfront); the street door to 1A
 skin('v',HX1,HZ0,HZ1+.25,0,3.9,1);skin('h',HZ0,HX0,HX1+.2,0,3.9,-1);skin('h',HZ1,HX0,SXE,0,3.9,1);
 box(-308.7,2.45,HZ1+.2,-307.3,2.6,HZ1+.6,M.stone,{col:false});sg(-308,2.68,HZ1+.205,.6,.36,'s','1A','#e9c46a','#2a2a30');
 box(-308.55,0,HZ1-.05,-307.45,2.4,HZ1+.05,MT.gloss('#7a1f2b'));box(-307.7,1.05,HZ1+.05,-307.6,1.25,HZ1+.09,MT.brass,{col:false});box(-308.2,1.45,HZ1+.05,-307.8,1.5,HZ1+.07,MT.brass,{col:false});

 /* ================= FIRST FLOOR: FLAT 1A ================= */
 /* interior faces: corridor x -306..-303, z -7.8..11.8 · living x -302.8..-290.2, z 3.2..11.8 · kitchen x -296.8..-290.2, z -3.8..3
    bathroom x -302.8..-297, z -.8..3 · box room x -302.8..-297, z -3.8..-1 · bedroom x -302.8..-290.2, z -11.8..-4 */
 {const y=HY[1],h=2.9;
  win('h',HZ1,-304.5,1,1.5,y+1,1,{fl:y});win('h',HZ1,-299,1.8,1.7,y+.75,1,{fl:y});win('h',HZ1,-294,1.8,1.7,y+.75,1,{fl:y});
  win('v',HX1,7.5,2,1.7,y+.75,1,{fl:y});win('v',HX1,-.5,1.4,1.2,y+1.1,1,{fl:y});win('v',HX1,-8,1.8,1.5,y+.85,1,{fl:y});win('h',HZ0,-297,1.8,1.5,y+.85,-1,{fl:y});win('h',HZ0,-292.5,1,1.2,y+1.1,-1,{fl:y});
  door('v',-303,8,1.1,2.1,y);door('v',-303,1,.85,2.05,y);door('v',-303,-2.5,.85,2.05,y);door('v',-303,-6,.9,2.05,y);door('h',-8,-304.5,.8,2,y);door('h',3,-293.5,5,2.35,y,1);
  WL('h',HZ1,SXE,HX1,y,h,M.paint,-1);WL('v',HX1,HZ0,HZ1,y,h,M.paint,-1);WL('h',HZ0,SXE,HX1,y,h,M.paint,1);WL('v',SXE,HZ0,-.4,y,h,M.paint,1);
  WL('v',-303,-8,HZ1,y,h,M.paint,1);WL('h',-8,SXE,-303,y,h,M.paint,1);WL('v',-303,HZ0,-8,y,h,M.paint,1);
  WL('h',3,-303,HX1,y,h,M.paint,1);WL('v',-297,-4,3,y,h,M.paint,1);WL('h',-1,-303,-297,y,h,M.tileB,1);WL('h',-4,-303,HX1,y,h,M.paint,1);
  rm(SXE,-8,-303,HZ1,y,h,M.oak,'Hallway','#4a4a5a');rm(-303,3,HX1,HZ1,y,h,M.oak,'Living room','#5a4a6a');rm(-297,-4,HX1,3,y,h,MT.tile,'Kitchen','#4a5a5a');
  rm(-303,-1,-297,3,y,h,M.tileB,'Bathroom','#4a5a6a');rm(-303,-4,-297,-1,y,h,MT.carpetGrey,'Box room','#4a4a5a');rm(-303,HZ0,HX1,-4,y,h,MT.carpetGrey,'Bedroom','#5a4a5a');rm(SXE,HZ0,-303,-8,y,h,M.oak,null);
  skin('h',HZ1,SXE,HX1+.2,y,HY[2],1);skin('v',HX1,HZ0-.2,HZ1+.2,y,HY[2],1);skin('h',HZ0,SXE,HX1+.2,y,HY[2],-1);
  // ---- hallway: everything flat to the walls, the 3 m between them left clear
  onWall('v',-306,1,9.4,10.6,y+1.5,y+1.53,0,.24,M.oak);box(-305.98,y+1.53,9.7,-305.82,y+1.6,10.1,M.black,{col:false});box(-305.819,y+1.56,9.75,-305.815,y+1.57,10.05,MT.glow('#8affc1',1.4),{col:false});
  for(let i=0;i<4;i++)onWall('v',-306,1,2.6+i*.4,2.66+i*.4,y+1.68,y+1.74,0,.08,MT.brass);onWall('v',-306,1,2.5,2.95,y+.75,y+1.68,.06,.24,MT.fabric('#2a3a5a'));onWall('v',-306,1,3.35,3.75,y+.95,y+1.68,.06,.22,MT.fabric('#8a3a1a'));
  onWall('v',-306,1,2.4,4.2,y,y+.4,0,.32,M.walnut,true);for(const[z,c]of[[2.7,'#e9e3da'],[3.1,'#2a2a30'],[3.6,'#ff5d73'],[3.95,'#7cc4ff']])box(-305.9,y+.4,z-.12,-305.72,y+.48,z+.12,MT.plain(c),{col:false});
  onWall('v',-303,-1,9.6,10.4,y+1.05,y+2.05,0,.03,MT.chrome);radiator('v',-305.8,1,-3,1,y);bulb(-304.5,y+h,6,'#ffe2b0',6,.6);bulb(-304.5,y+h,-3,'#ffe2b0',6,.5);
  // ---- living room: the battlestation in the corner, sofa facing the telly, bookshelf, the plastic plant, pizza boxes
  {const D=M.walnut;
   // desk along the Linden Street wall, between the bay and the corner
   box(-292.95,y+.72,11.02,-290.25,y+.76,11.78,D,{col:false});for(const x of[-292.88,-290.32])box(x-.04,y,11.05,x+.04,y+.72,11.75,D,{col:false});box(-292.9,y+.3,11.7,-290.3,y+.72,11.76,D,{col:false});colBox(-292.95,11.02,-290.25,11.78,y,y+.76);
   const mon=(x,m)=>{box(x-.07,y+.76,11.55,x+.07,y+.77,11.68,M.black,{col:false});box(x-.02,y+.77,11.6,x+.02,y+.98,11.64,M.black,{col:false});box(x-.33,y+.96,11.56,x+.33,y+1.35,11.6,M.black,{col:false});tq(x,y+.98,11.555,.62,.35,'n',m,.62,.35)};
   mon(-292.05,MT.code);mon(-291.3,mt(signTex('firewalls r a joke','#8affc1','#07110d',256,144),0,1,1,{k:1.2}));
   box(-292.35,y+.76,11.15,-291.0,y+.785,11.38,M.black,{col:false});box(-292.3,y+.785,11.18,-291.05,y+.79,11.35,MT.glow('#ff8fc8',.7),{col:false});box(-290.85,y+.76,11.2,-290.72,y+.78,11.32,M.black,{col:false});
   box(-290.75,y,11.1,-290.3,y+.5,11.7,M.black);box(-290.76,y+.1,11.15,-290.755,y+.45,11.65,MT.glow('#c9b6ff',1),{col:false});
   box(-290.55,y+.76,11.6,-290.45,y+1.28,11.7,M.black,{col:false});box(-290.65,y+1.25,11.45,-290.35,y+1.32,11.72,MT.glow('#fff0d0',1),{col:false});addLight(-290.5,y+1.15,11.3,[1,.9,.75],3,.5);
   box(-292.9,y+.76,11.76,-290.3,y+.8,11.78,MT.glow('#9b59ff',.6),{col:false});addLight(-291.6,y+1,11.5,[.6,.4,1],2.4,.3);
   can(-292.7,y+.76,11.3,'#8affc1');can(-292.6,y+.76,11.45,'#ffd166');mug(-290.85,y+.76,11.45,'#7cc4ff');
   officeChair(-291.6,10.35,'s',y,'#c0304a');
   // the telly on the west wall, the sofa facing it, a coffee table between
   box(-302.8,y,9.3,-302.35,y+.5,11.3,D);box(-302.79,y+.05,9.4,-302.34,y+.45,11.2,M.black,{col:false});
   box(-302.8,y+.78,9.55,-302.74,y+1.6,11.05,M.black,{col:false});tq(-302.739,y+.82,10.3,1.42,.76,'e',mt('tvshow',0,1,1,{k:1.05}),1.42,.76);
   sofa(-298.8,10.3,2.2,'e','#5a4a7a',y);box(-298.75,y+.45,9.25,-298.5,y+.7,9.55,MT.fabric('#ffd166'),{col:false});box(-298.75,y+.45,11.05,-298.5,y+.7,11.35,MT.fabric('#7cc4ff'),{col:false});
   box(-300.9,y,9.65,-300.05,y+.42,10.95,D);colBox(-300.9,9.65,-300.05,10.95,y,y+.42);
   for(let i=0;i<3;i++)box(-300.85+i*.03,y+.42+i*.045,9.75+i*.02,-300.4+i*.03,y+.46+i*.045,10.2+i*.02,MT.plain('#d8a050'),{col:false});can(-300.25,y+.42,10.5,'#8affc1');can(-300.2,y+.42,10.75,'#8affc1');mug(-300.6,y+.42,10.7,'#7cc4ff');
   box(-301.6,y,9.0,-298.0,y+.008,11.6,M.rugB,{col:false});
   // bookshelf + armchair at the kitchen end, the plastic plant by the lane window, a floor lamp, posters
   shelfBooks('v',-302.8,1,3.4,5.0,y,y+2.1,.36);sofa(-300.4,4.0,.95,'n','#7a3a4a',y);
   potPlant(-290.75,5.6,.9,y);box(-298.15,y,11.35,-298.05,y+1.55,11.45,M.black,{col:false});box(-298.3,y+1.55,11.2,-297.9,y+1.8,11.6,MT.plain('#f4efe6'),{col:false});addLight(-298.1,y+1.6,11.4,[1,.88,.7],3.5,.35);
   panel(-300.5,y+1.15,3.201,.8,1.05,'s',MT.poster(1));panel(-302.799,y+1.2,7.2,.01,.01,'e',MT.plain('#000'));panel(-296.2,y+1.15,3.201,.8,1.05,'s',MT.poster(4));
   radiator('h',11.8,-1,-299,1.4,y);radiator('h',11.8,-1,-294,1.4,y);radiator('v',-290.2,-1,7.5,1.4,y);
   curtain('h',11.8,-1,-299,1.8,y+.75,1.7,'#7a3a4a');curtain('h',11.8,-1,-294,1.8,y+.75,1.7,'#7a3a4a');curtain('v',-290.2,-1,7.5,2,y+.75,1.7,'#7a3a4a');
   bulb(-297,y+h,7.5,'#ffe2b0',8,.55);vfx('dust',{b0:[-302,y+.3,3.6],b1:[-290.6,y+2.6,11.5],n:120,size:1,col:[1,.9,.7],op:.45})}
  // ---- kitchen: an L of units along the lane wall and the box-room wall, hob, sink under the window, fridge, table
  {const yk=y,unit={side:MT.plain('#3f5a6a'),top:M.oak};box(-290.85,yk,-3.15,-290.2,yk+.9,2.2,unit);colBox(-290.85,-3.15,-290.2,2.2,yk,yk+.9);
   box(-296.8,yk,-3.8,-290.2,yk+.9,-3.15,unit);colBox(-296.8,-3.8,-290.2,-3.15,yk,yk+.9);
   for(let z=-3.15;z<2.2;z+=.6){box(-290.852,yk+.08,z,-290.85,yk+.84,z+.01,M.black,{col:false});box(-290.87,yk+.76,z+.22,-290.852,yk+.79,z+.38,MT.chrome,{col:false})}
   for(let x=-296.8;x<-290.85;x+=.6){box(x,yk+.08,-3.152,x+.01,yk+.84,-3.15,M.black,{col:false});box(x+.22,yk+.76,-3.17,x+.38,yk+.79,-3.152,MT.chrome,{col:false})}
   box(-290.8,yk+.9,-2.95,-290.25,yk+.91,-2.35,M.black,{col:false});quad([-290.79,yk+.916,-2.94],[-290.79,yk+.916,-2.36],[-290.26,yk+.916,-2.36],[-290.26,yk+.916,-2.94],mt('hob',0,1,0,{r:.2}),1,1);
   box(-290.8,yk+.86,-.95,-290.3,yk+.92,-.05,MT.chrome,{col:false});box(-290.75,yk+.9,-.9,-290.35,yk+.928,-.1,MT.plain('#9aa0aa'),{col:false});box(-290.34,yk+.9,-.55,-290.28,yk+1.15,-.45,MT.chrome,{col:false});box(-290.5,yk+1.13,-.53,-290.3,yk+1.16,-.47,MT.chrome,{col:false});
   box(-290.55,yk+1.45,-3.8,-290.2,yk+2.25,-1.5,{side:MT.plain('#3f5a6a'),top:MT.plain('#3f5a6a')});box(-290.55,yk+1.45,.5,-290.2,yk+2.25,2.2,{side:MT.plain('#3f5a6a'),top:MT.plain('#3f5a6a')});
   box(-290.552,yk+1.448,-3.8,-290.54,yk+1.452,-1.5,MT.glow('#fff0d0',1),{col:false});addLight(-290.75,yk+1.25,-2.6,[1,.9,.75],2.4,.4);
   onWall('h',-3.8,1,-296.8,-290.85,yk+.9,yk+1.45,0,.012,M.metro);
   box(-296.8,yk,2.2,-296.05,yk+1.9,3,MT.gloss('#e9e3da'));box(-296.07,yk+1,2.3,-296.04,yk+1.5,2.35,MT.chrome,{col:false});for(const[dz,c]of[[2.5,'#ff5d73'],[2.68,'#ffd166'],[2.84,'#7cc4ff']])box(-296.049,yk+1.2+(dz-2.5)*.8,dz-.06,-296.045,yk+1.32+(dz-2.5)*.8,dz+.06,MT.plain(c),{col:false});
   box(-290.8,yk+.9,1.4,-290.55,yk+1.15,1.65,MT.chrome,{col:false});box(-290.8,yk+.9,.55,-290.42,yk+1.08,.95,M.black,{col:false});for(let i=0;i<4;i++)mug(-290.55,yk+.9,-1.6+i*.13,['#e9e3da','#ff5d73','#7cc4ff','#ffd166'][i]);
   vfx('steam',{b0:[-290.68,yk+1.16,1.52],n:10,size:.4,col:[1,1,1],op:.25,sp:1});
   table(-294.3,.2,1.2,.8,M.oak,.76,yk);chair(-294.3,-.45,'s',MT.plain('#c9a46a'),yk);chair(-294.3,.85,'n',MT.plain('#c9a46a'),yk);
   bulb(-293.5,yk+h,-.5,'#ffe2b0',7,.55)}
  // ---- bathroom: bath under a shower along the box-room wall, toilet, basin + mirror, towel rail
  {const tub=MT.plain('#f4f4f8');box(-302.8,y,-.8,-299.1,y+.12,0,tub);for(const[a,b,c,d]of[[-302.8,-.8,-299.1,-.68],[-302.8,-.12,-299.1,0],[-302.8,-.68,-302.68,-.12],[-299.22,-.68,-299.1,-.12]])box(a,y+.12,b,c,y+.55,d,tub,{col:false});box(-302.68,y+.12,-.68,-299.22,y+.4,-.12,MT.plain('#bfe0f4'),{col:false});colBox(-302.8,-.8,-299.1,0,y,y+.55);
   box(-299.13,y+.56,-.77,-299.11,y+2.1,-.05,MT.glass,{col:false});box(-302.75,y+1.9,-.75,-302.65,y+2.05,-.55,MT.chrome,{col:false});box(-302.72,y+.55,-.79,-302.68,y+1.9,-.77,MT.chrome,{col:false});
   onWall('h',-.8,1,-302.8,-299.1,y+.55,y+2.1,0,.012,M.metro);
   box(-297.65,y,1.6,-297,y+.42,2.2,MT.plain('#f4f4f8'));box(-297.2,y+.42,1.62,-297.01,y+.82,2.18,MT.plain('#f4f4f8'),{col:false});box(-297.6,y+.4,1.65,-297.2,y+.43,2.15,MT.plain('#e9e3da'),{col:false});
   box(-300,y,2.75,-299.8,y+.78,2.95,MT.plain('#f4f4f8'),{col:false});box(-300.3,y+.78,2.5,-299.5,y+.92,3,MT.plain('#f4f4f8'),{col:false});box(-299.92,y+.92,2.85,-299.88,y+1.05,2.95,MT.chrome,{col:false});
   onWall('h',3,-1,-300.35,-299.45,y+1.15,y+1.95,0,.015,MT.chrome);onWall('h',3,-1,-298.6,-297.6,y+1.0,y+1.04,.04,.07,MT.chrome);onWall('h',3,-1,-298.5,-297.7,y+.6,y+1.02,.07,.1,MT.fabric('#7cc4ff'));
   lightPanel(-300,y+h,1.2,.6,.6,'#f4f8ff',4,.55)}
  // ---- box room: the homelab against the far wall, boxes, an ironing board nobody has opened
  {rack(-297.32,-2.6,'w',y);box(-297.6,y+2.1,-3.1,-297,y+2.12,-2.1,M.black,{col:false});addLight(-298,y+1.2,-2.6,[.5,1,.8],2.6,.25);
   for(let i=0;i<5;i++)box(-301+(i%3)*.72,y+Math.floor(i/3)*.46,-3.8,-300.36+(i%3)*.72,y+.45+Math.floor(i/3)*.46,-3.25,MT.plain(['#c9a46a','#b8935a','#d8b47a'][i%3]));
   box(-302.75,y,-1.3,-302.65,y+1.4,-1.05,MT.plain('#9aa0aa'),{col:false});bulb(-300,y+h,-2.4,'#ffe2b0',4,.4)}
  // ---- bedroom: bed with its head on the box-room wall, bedside lamps, wardrobe, drawers, chair, rug
  {const bx0=-298.6,bx1=-297.0;box(bx0,y,-6.2,bx1,y+.38,-4.05,M.walnut);colBox(bx0,-6.2,bx1,-4.05,y,y+.6);box(bx0,y,-4.05,bx1,y+1.15,-4,M.walnut);
   box(bx0+.05,y+.38,-6.15,bx1-.05,y+.56,-4.1,MT.linen,{col:false});box(bx0+.03,y+.5,-6.17,bx1-.03,y+.62,-4.9,MT.fabric('#7cc4ff'),{col:false});box(bx0+.1,y+.62,-5.6,bx1-.4,y+.68,-5.0,MT.fabric('#6ab0e8'),{col:false});
   box(bx0+.12,y+.56,-4.65,bx0+.75,y+.7,-4.15,MT.linen,{col:false});box(bx1-.75,y+.56,-4.65,bx1-.12,y+.7,-4.15,MT.linen,{col:false});
   for(const x of[bx0-.32,bx1+.32]){box(x-.24,y,-4.5,x+.24,y+.5,-4.02,M.walnut);box(x-.06,y+.5,-4.3,x+.06,y+.82,-4.18,MT.plain('#c9a46a'),{col:false});box(x-.14,y+.82,-4.38,x+.14,y+.98,-4.1,MT.glow('#ffd9a0',.8),{col:false})}addLight(bx1+.32,y+.9,-4.6,[1,.85,.65],3,.4);
   box(-302.8,y,-11.6,-302.2,y+2.2,-9.4,M.walnut);box(-302.2,y+.15,-10.51,-302.194,y+2.05,-10.49,M.black,{col:false});for(const z of[-10.65,-10.35])box(-302.2,y+1,z-.015,-302.17,y+1.3,z+.015,MT.brass,{col:false});
   box(-301.1,y,-11.8,-299.7,y+.9,-11.35,M.walnut);for(let i=0;i<3;i++)box(-301.05,y+.1+i*.27,-11.351,-299.75,y+.11+i*.27,-11.348,M.black,{col:false});box(-300.8,y+.9,-11.7,-300.4,y+1.15,-11.5,MT.plain('#2a2a30'),{col:false});
   chair(-291.2,-6.4,'w',MT.plain('#3a3a4a'),y);box(-291.4,y+.48,-6.6,-290.95,y+.72,-6.2,MT.fabric('#ff5d73'),{col:false});
   box(-299.2,y,-7.6,-296.4,y+.008,-5.0,mt('rug','#8a3a4a',.4,0),{col:false});
   radiator('h',-11.8,1,-297,1.4,y);curtain('h',-11.8,1,-297,1.8,y+.85,1.5,'#3a5a7a');curtain('v',-290.2,-1,-8,1.8,y+.85,1.5,'#3a5a7a');
   bulb(-297,y+h,-8,'#ffe2b0',6,.4)}
 }

 /* ================= SECOND AND THIRD FLOORS (exterior only; landings and locked doors in the stair hall) ================= */
 for(const f of[2,3]){const y=HY[f],bd={backdrop:1,noIn:1};
  win('h',HZ1,-304.5,1,1.5,y+1,1,bd);win('h',HZ1,-299,1.8,1.7,y+.75,1,bd);win('h',HZ1,-294,1.8,1.7,y+.75,1,bd);
  win('v',HX1,7.5,2,1.7,y+.75,1,bd);win('v',HX1,-.5,1.4,1.2,y+1.1,1,bd);win('v',HX1,-8,1.8,1.5,y+.85,1,bd);win('h',HZ0,-297,1.8,1.5,y+.85,-1,bd);win('h',HZ0,-292.5,1,1.2,y+1.1,-1,bd);
  skin('h',HZ1,SXE,HX1+.2,y,HY[f+1],1);skin('v',HX1,HZ0-.2,HZ1+.2,y,HY[f+1],1);skin('h',HZ0,SXE,HX1+.2,y,HY[f+1],-1);
  // a box behind the floor so the glass never shows daylight through the building
  box(SXE+.3,y,HZ0+.5,HX1-.5,HY[f+1]-.31,HZ1-.5,{side:MT.plain('#2a2228'),top:MT.plain('#2a2228')},{col:false});
  sg(-306.01,y+2.25,6,.7,.26,'w',f===2?'FLAT 2':'FLAT 3','#e9c46a','#2a2a30')}
 for(const y of[3.9,HY[4]]){box(SXE,y-.14,HZ1+.2,HX1+.36,y+.1,HZ1+.42,M.stone,{col:false});box(HX1+.2,y-.14,HZ0-.2,HX1+.42,y+.1,HZ1+.2,M.stone,{col:false})}
 skin('h',HZ1,HX0,SXE,3.9,HY[4]+2.7,1);box(HX0-.2,10.3,HZ0,HX0,HY[4]+2.9,HZ1+.2,M.brick,{col:false});skin('h',HZ0,HX0,SXE,3.9,HY[4]+1.1,-1);

 /* ================= THE ROOF TERRACE ================= */
 {const y=HY[4];slab(SXE,HZ0,HX1,HZ1,y,.3,M.deck,M.paint);(MAPR.home=MAPR.home||[]).push({x0:SXE,z0:HZ0,x1:HX1,z1:HZ1,y,n:'Roof terrace',c:'#3a4a3a'});
  for(const[a,b,c,d]of[[SXE,HZ1-.2,HX1+.2,HZ1+.2],[HX1-.2,HZ0-.2,HX1+.2,HZ1-.2],[SXE,HZ0-.2,HX1-.2,HZ0+.2]]){box(a,y,b,c,y+1.05,d,{side:M.brick,top:M.stone});box(a-.05,y+1.05,b-.05,c+.05,y+1.13,d+.05,M.stone,{col:false})}
  for(const[x,z]of[[-305.2,10.9],[-305.2,-10.9],[-291.1,-10.9]]){box(x-.5,y,z-.5,x+.5,y+1.7,z+.5,{side:M.brick,top:M.stone});for(let p=0;p<2;p++)box(x-.3+p*.4,y+1.7,z-.12,x-.1+p*.4,y+2.0,z+.12,MT.plain('#b0603a'),{col:false});vfx('smoke',{b0:[x,y+2,z],n:14,size:.35,col:[.86,.84,.82],op:.12,sp:.8})}
  // planters along the street edge and the lane edge, the lemon tree, the bench, the bistro set, string lights
  box(-304,y,10.95,-296,y+.5,11.75,{side:M.walnut,top:MT.plain('#3a2418')});for(let i=0;i<8;i++)card(-303.5+i,y+.5,11.35,.7,.55,i*.7,MT.leaves);
  box(-291.75,y,-6,-290.95,y+.5,6,{side:M.walnut,top:MT.plain('#3a2418')});for(let i=0;i<12;i++)card(-291.35,y+.5,-5.5+i,.7,.55,i*.7,MT.leaves);
  potPlant(-295,9.6,1.4,y);box(-300.5,y,-1,-297.5,y+.45,-.45,M.walnut);box(-300.5,y+.45,-1,-297.5,y+.9,-.92,M.walnut,{col:false});
  table(-295.5,2,.8,.8,M.black,.74,y);chair(-296.15,2,'e',MT.plain('#24493a'),y);chair(-294.85,2,'w',MT.plain('#24493a'),y);mug(-295.6,y+.74,2.1,'#f4efe6');
  const posts=[[-304.6,10.4],[-292.4,10.4],[-292.4,-4],[-304.6,-4]];for(const[x,z]of posts){box(x-.035,y,z-.035,x+.035,y+2.6,z+.035,M.black,{col:false});colBox(x-.06,z-.06,x+.06,z+.06,y,y+2.6)}
  for(let k=0;k<4;k++){const a=posts[k],b=posts[(k+1)%4];for(let i=1;i<12;i++){const t=i/12,x=a[0]+(b[0]-a[0])*t,z=a[1]+(b[1]-a[1])*t,sag=Math.sin(t*Math.PI)*.35;box(x-.035,y+2.48-sag,z-.035,x+.035,y+2.55-sag,z+.035,MT.glow('#ffd98a',1.1),{col:false})}}
  addLight(-298.5,y+2.1,3.2,[1,.85,.6],7,.3);
  box(-304.5,y,-10.5,-302.5,y+1.8,-8.5,MT.plain('#5a6a7a'));box(-301,y,-11,-299.4,y+1,-9.8,MT.plain('#9aa0aa'));box(-300.9,y+.2,-9.8,-299.5,y+.9,-9.79,M.black,{col:false});
  box(-292.03,y,-9.6,-291.97,y+3.4,-9.54,MT.metal,{col:false});box(-292.6,y+3.2,-9.6,-291.4,y+3.24,-9.54,MT.metal,{col:false});
  box(-302,y,-7,-298,y+.5,-3.5,MT.plain('#4a4a52'));box(-301.9,y+.5,-6.9,-298.1,y+.85,-3.6,MT.glass,{col:false});
  for(const z of[-2,4])box(-305.6,y,z,-305.5,y+1.8,z+.1,MT.metal,{col:false});box(-305.56,y+1.78,-1.9,-305.54,y+1.8,4,MT.plain('#e9e3da'),{col:false});
  for(const[z,c]of[[-1.2,'#ff5d73'],[.2,'#e9e3da'],[1.6,'#7cc4ff'],[2.8,'#2a2a30']])box(-305.58,y+1.2,z,-305.52,y+1.78,z+.6,MT.fabric(c),{col:false});
  vfx('birds',{b0:[-300,y+16,-30],b1:[-240,y+16,20],n:26,size:1.2,col:[.12,.12,.14],op:.9,sp:1});vfx('birds',{b0:[-340,y+22,-70],b1:[-290,y+22,-30],n:14,size:1,col:[.12,.12,.14],op:.8,sp:.7});
 }

 /* ================= OUTSIDE ================= */
 G.lmK=.32; // scenery gets lightmap texels too, at a third of the density of the rooms
 {const pav=MT.pavers,road=MT.road,kerb=M.stone;
  floorQ(-372,HZ1+.25,-286,16,-.12,pav);floorQ(-289.8,-90,-286,HZ1+.25,-.12,pav);floorQ(-372,16,-232,24,-.27,road);floorQ(-286,-90,-278,16,-.27,road);
  floorQ(-372,24,-232,27.5,-.12,pav);floorQ(-278,-90,-274,24,-.12,pav);floorQ(-372,-90,HX0,HZ0-.2,-.12,MT.concrete);floorQ(HX0,-90,-289.8,HZ0-.2,-.12,MT.concrete);
  box(-372,-.27,15.85,-286,-.105,16,kerb,{col:false});box(-286.15,-.27,-90,-286,-.105,15.85,kerb,{col:false});box(-372,-.27,24,-232,-.105,24.15,kerb,{col:false});box(-278,-.27,-90,-277.85,-.105,24,kerb,{col:false});
  for(let x=-368;x<-236;x+=6)if(x<-308||x>-300)box(x,-.27,19.92,x+3,-.266,20.08,MT.plain('#f4efe6'),{col:false});for(let z=-86;z<14;z+=6)box(-282.08,-.27,z,-281.92,-.266,z+3,MT.plain('#f4efe6'),{col:false});
  for(let z=16.4;z<23.6;z+=1)box(-306,-.27,z,-302.4,-.266,z+.5,MT.plain('#f4efe6'),{col:false});
  for(const[x,z]of[[-306.5,15.6],[-301.9,15.6],[-306.5,24.4],[-301.9,24.4]]){box(x-.05,-.12,z-.05,x+.05,2.4,z+.05,MT.plain('#2a2a30'),{col:false});box(x-.19,2.4,z-.19,x+.19,2.78,z+.19,MT.glow('#ffb347',1.1),{col:false,b:1})}
  for(const x of[-330,-316,-286.6,-270,-250])lamp(x,15.4,-.12,'#ffd9a0');for(const z of[-40,-20])lamp(-286.6,z,-.12,'#ffd9a0');
  for(const x of[-322,-300,-262])tree(x,25.5,-.12);for(const z of[-30,-8])tree(-275.8,z,-.12);
  box(-322,-.12,14.4,-318,2.5,14.46,MT.glass,{col:false});box(-322,2.5,13.6,-318,2.6,15,M.black,{col:false});for(const x of[-321.95,-318.05])box(x-.04,-.12,14.38,x+.04,2.5,14.48,M.black,{col:false});tq(-320,.9,14.47,3.4,1.3,'s',MT.lumenbanner,3.4,1.3);box(-321.8,-.12,13.75,-318.2,.45,14.05,M.black,{col:false});
  box(-289,-.12,14,-288.5,1.3,14.5,MT.gloss('#c0304a'));box(-289.05,1.3,13.95,-288.45,1.38,14.55,MT.gloss('#a02838'),{col:false});
  for(const z of[-20,-15.5])box(-288.8,-.12,z,-288,1.05,z+.7,MT.plain('#2a4a3a'));for(const x of[-287.2,-286.6])for(const z of[14.8,13.6])box(x-.06,-.12,z-.06,x+.06,.9,z+.06,M.black,{col:false});
  box(-312.6,-.12,13.3,-312.55,.9,15.2,MT.metal,{col:false});
  box(-305.6,-.12,13.1,-304.9,.95,13.2,M.green,{col:false});tq(-305.25,.1,13.212,.6,.8,'s',signM('FRESH ROLLS','#f4efe6','#24493a',.6,.8,false),.6,.8);
  car(-328,22,'x','#7cc4ff');car(-338,22,'x','#f4efe6');car(-262,18,'x','#c0304a');car(-280.2,-12,'z','#2a2a30');car(-280.2,-24,'z','#ffd166',{taxi:1});
  box(-352,-.27,17,-345,2.6,19.3,MT.plain('#f4f4f8'));box(-345,-.27,17.2,-343.4,1.9,19.1,MT.plain('#f4f4f8'));box(-344.95,1,17.4,-344.9,1.8,19,MT.gloss('#2a3444'),{col:false});sg(-348.5,.9,19.31,5,1.1,'s','WARBURTON & SONS · FLOUR','#24493a','#f4f4f8',false);
  // the terrace across Linden Street: shops below, sash windows above, chimneys
  const row=[[-372,-356,15,'facYellow','LAUNDERETTE','#7cc4ff'],[-356,-342,12.5,'facBrick','MIGHTY KEBAB','#ff5d73'],[-342,-326,17,'facRender','LINDEN PHARMACY','#8affc1'],[-326,-312,13.5,'facBrick','BOOKS & ZINES','#ffd166'],
   [-312,-298,15,'facGrey','DANNY\'S BARBERS','#c9b6ff'],[-298,-280,12.5,'facYellow','CORNER SHOP · OPEN 24H','#ffb347'],[-280,-258,18,'facRender','THE CROWN','#e9c46a'],[-258,-232,14,'facBrick','FLOWERS','#ff8fc8']];
  for(const[x0,x1,h,ft,nm,col]of row){const z0=27.5,z1=40,w=x1-x0;box(x0,-.12,z0,x1,h,z1,{side:mt(ft,0,.09,0,{r:.85}),top:M.lead});box(x0-.05,h-.4,z0-.3,x1+.05,h,z0,M.stone,{col:false});
   box(x0+.3,-.12,z0-.05,x1-.3,3.4,z0,M.black,{col:false});tq((x0+x1)/2,.4,z0-.06,w-1.4,2.3,'n',mt('shopwin',0,1,1,{k:.65}),4.6,2.3);sg((x0+x1)/2,2.75,z0-.07,Math.min(w-1,nm.length*.42+1),.6,'n',nm,col,'#1b1026');
   for(let k=0;k<2;k++){const cx=x0+3+k*(w-6);box(cx-.5,h,z0+3,cx+.5,h+1.6,z0+4,{side:M.brick,top:M.stone},{col:false});for(let p=0;p<3;p++)box(cx-.4+p*.3,h+1.6,z0+3.3,cx-.25+p*.3,h+1.9,z0+3.5,MT.plain('#b0603a'),{col:false});if(k===0&&(x0|0)%2===0)vfx('smoke',{b0:[cx,h+1.9,z0+3.4],n:16,size:.5,col:[.85,.83,.8],op:.14,sp:.6})}}
  for(const[x0,x1,h,ft,nm,col]of[[-330,-310.2,10.3,'facBrick','SUDS · SELF-SERVICE LAUNDRY','#7cc4ff'],[-352,-330,13.5,'facRender','KAPOOR & CO · NEWSAGENT','#ffd166']]){const w=x1-x0;box(x0,-.12,HZ0,x1,h,HZ1,{side:mt(ft,0,.09,0,{r:.85}),top:M.lead});box(x0-.05,h-.3,HZ1,x1,h,HZ1+.3,M.stone,{col:false});
   tq((x0+x1)/2,.4,HZ1+.06,w-1.6,2.4,'s',mt('shopwin',0,1,1,{k:.65}),4.6,2.4);sg((x0+x1)/2,2.95,HZ1+.07,Math.min(w-1.2,nm.length*.38+1),.6,'s',nm,col,'#1b1026');
   for(let k=0;k<3;k++)box(x0+2+k*6,h,-3,x0+3.2+k*6,h+1.4,-2,{side:M.brick,top:M.stone},{col:false});box(x0+3,h,4,x0+5,h+.6,6,MT.glass,{col:false})}
  // Linden Square across Mill Lane
  floorQ(-274,-60,-226,24,-.12,MT.grass);floorQ(-252,-60,-248,24,-.11,pav);floorQ(-274,-18,-252,-14,-.11,pav);floorQ(-248,-18,-226,-14,-.11,pav);
  for(let z=-58;z<23;z+=2)box(-273.9,-.12,z,-273.85,1,z+.04,MT.plain('#1a2a20'),{col:false});box(-273.92,.95,-60,-273.83,1,23.5,MT.plain('#1a2a20'),{col:false});
  for(const[x,z]of[[-266,-48],[-266,-30],[-266,-4],[-266,14],[-238,-44],[-238,-26],[-236,4],[-238,20],[-258,8],[-244,-52]])tree(x,z,-.12);
  for(const[x,z,s]of[[-253.6,-6,1],[-253.6,8,1],[-246.4,-30,-1]]){box(x-.25,-.12,z-1,x+.25,.42,z+1,M.walnut,{col:false});box(x-s*.25,.42,z-1,x-s*.2,.85,z+1,M.walnut,{col:false})}
  box(-250.5,-.12,-16.5,-249.5,1,-15.5,M.stone,{col:false});box(-250.3,1,-16.3,-249.7,1.1,-15.7,MT.chrome,{col:false});
  box(-226,-.12,-70,-206,26,30,{side:mt('facTall',0,.08,0,{r:.85}),top:M.lead});box(-226,-.12,-120,-200,32,-70,{side:mt('facGrey',0,.06,0,{r:.85}),top:M.lead});
  // the backs of Albion Road: pitched slate roofs, chimneys, yard fences
  for(let i=0;i<5;i++){const x0=-352+i*12,x1=x0+11.6,z0=-46,z1=-34,h=7.5+(i%3)*.6,mz=(z0+z1)/2;box(x0,-.12,z0,x1,h,z1,{side:mt(i%2?'facBrick':'facYellow',0,.12,0,{r:.85}),top:M.lead});
   quad([x0,h,z1],[x1,h,z1],[x1,h+3,mz],[x0,h+3,mz],M.slate,6,2);quad([x1,h,z0],[x0,h,z0],[x0,h+3,mz],[x1,h+3,mz],M.slate,6,2);
   quad([x0,h,z0],[x0,h,z1],[x0,h+3,mz],[x0,h+3,mz],M.brick,1,1);quad([x1,h,z1],[x1,h,z0],[x1,h+3,mz],[x1,h+3,mz],M.brick,1,1);
   box(x1-1.2,h+1.4,mz-.6,x1-.2,h+4.4,mz+.6,{side:M.brick,top:M.stone},{col:false});if(i%2)vfx('smoke',{b0:[x1-.7,h+4.4,mz],n:14,size:.45,col:[.86,.84,.82],op:.12,sp:.7});
   box(x0,-.12,-14.15,x1,1.8,-14.05,M.walnut,{col:false})}
  for(const[x,z]of[[-320,-24],[-296,-26],[-336,-22]])tree(x,z,-.12);
  box(HX0,-.12,-20,HX0+.25,2,HZ0-.2,M.brick,{col:false});box(HX0,-.12,-20.25,HX1,2,-20,M.brick,{col:false});box(HX1-.25,-.12,-20,HX1,2,-14,M.brick,{col:false});
  for(const x of[-308,-306.8])box(x,-.12,-19.6,x+1,1.2,-18.8,MT.plain('#2a4a3a'));for(let i=0;i<4;i++)box(-302+(i%2)*.7,-.12+Math.floor(i/2)*.4,-19.7,-301.4+(i%2)*.7,.28+Math.floor(i/2)*.4,-19.1,MT.plain('#c9a46a'));
  // the railway viaduct across the backs, and a train waiting at the signal
  for(let i=0;i<14;i++){const x0=-380+i*12;box(x0,-.12,-72,x0+2,9,-64,M.brick,{col:false})}box(-380,9,-72,-212,10.4,-64,M.brick,{col:false});box(-380,10.4,-71.8,-212,11.4,-71.6,M.stone,{col:false});box(-380,10.4,-64.4,-212,11.4,-64.2,M.stone,{col:false});
  box(-340,10.4,-69.5,-276,14.2,-66.5,{side:MT.trainside,top:MT.plain('#8a8a94')},{col:false});
  G.lmK=1;
  // the rest of the world: ground to the horizon, and the city all round in the morning haze (unlit, in the fog)
  floorQ(-900,-700,300,700,-.4,mt('concrete','#8a8a84',.02,1,{k:.55}));
  const far=[mt('facTall',0,.06,1,{k:.75}),mt('facGrey',0,.06,1,{k:.72}),mt('facRender',0,.07,1,{k:.75}),mt('facBrick',0,.07,1,{k:.7})];
  for(let i=0;i<64;i++){const a=i/64*Math.PI*2,R=110+(i*37%29),x=-298+Math.cos(a)*R,z=Math.sin(a)*R*.95,w=16+(i*13%11),h=14+(i*29%23);box(x-w/2,-.4,z-w/2,x+w/2,h,z+w/2,{side:far[i%4],top:MT.plain('#5a5a66')},{col:false})}
  for(let i=0;i<40;i++){const a=i/40*Math.PI*2+.3,R=170+(i*53%90),x=-298+Math.cos(a)*R,z=Math.sin(a)*R,w=12+(i*7%14),h=30+(i*41%70);box(x-w/2,-.4,z-w/2,x+w/2,h,z+w/2,{side:far[(i+1)%4],top:MT.plain('#5a5a66')},{col:false})}
  {const sp=mt('concrete','#c9c2b4',.2,1,{k:.8});box(-262,-.4,-128,-254,34,-120,sp,{col:false});for(let k=0;k<6;k++){const s=3.6-k*.6;box(-258-s,34+k*3,-124-s,-258+s,37+k*3,-124+s,sp,{col:false})}}
 }
 G.lmK=1;

 /* ================= sunbeams through every sunlit window ================= */
 {const d=SUN,L=Math.hypot(...d),u=[d[0]/L,d[1]/L,d[2]/L];
  for(const w of wins){if(w.noBeam||w.fl===undefined)continue;const n=w.o==='h'?[0,0,w.out]:[w.out,0,0],k=n[0]*u[0]+n[2]*u[2];if(k<.2)continue;
   const P=w.o==='h'?[[w.c-w.w/2,w.y,w.at],[w.c+w.w/2,w.y,w.at],[w.c+w.w/2,w.y+w.h,w.at],[w.c-w.w/2,w.y+w.h,w.at]]:[[w.at,w.y,w.c-w.w/2],[w.at,w.y,w.c+w.w/2],[w.at,w.y+w.h,w.c+w.w/2],[w.at,w.y+w.h,w.c-w.w/2]];
   vfx('beam',{pts:P,sun:SUN,floor:w.fl+.01,len:8,op:.05+.05*k})}}

 /* ================= lights, areas ================= */
 addLight(-298,2.6,8.5,[1,.85,.65],8,.5);addLight(-308,2.4,8,[1,.88,.7],6,.55);
 const A=(k,n,r,sp,o)=>area(k,n,'home',r,sp,o&&o.bg||'flat',o);
 A('bakery','Proof bakery',[SXE,2,HX1,HZ1],[-298,7,Math.PI,0],{bg:'bakery',y0:-1,y1:3.5});
 A('bakehouse','Bakehouse',[SXE,HZ0,HX1,2],[-299,0,Math.PI,0],{bg:'bakery',y0:-1,y1:3.5});
 A('stairs','Stairs',[HX0,-.4,SXE,HZ1],[-308,9,Math.PI,0],{y0:-1,y1:17,hide:1});
 A('flat','Flat 1A',[SXE,HZ0,HX1,HZ1],[-296.5,7.6,-Math.PI/2,HY[1]],{y0:3.5,y1:7});
 for(const[k,n,r]of[['livingroom','Living room',[-303,3,HX1,HZ1]],['kitchen','Kitchen',[-297,-4,HX1,3]],['bathroom','Bathroom',[-303,-1,-297,3]],['boxroom','Box room',[-303,-4,-297,-1]],['bedroom','Bedroom',[-303,HZ0,HX1,-4]]])
  A(k,n,r,[(r[0]+r[2])/2,(r[1]+r[3])/2,0,HY[1]],{y0:3.5,y1:7,sub:1});
 A('hometerrace','Roof terrace',[SXE,HZ0,HX1,HZ1],[-298,6,Math.PI,HY[4]],{y0:13,y1:18});
}
