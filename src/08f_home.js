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
 tex('sack',128,128,(c,w,h)=>{c.fillStyle='#d8c8a0';c.fillRect(0,0,w,h);for(let i=0;i<h;i+=3){c.fillStyle='#00000010';c.fillRect(0,i,w,1);c.fillRect(i,0,1,h)}c.fillStyle='#7a4a2a';c.font='bold 22px sans-serif';c.textAlign='center';c.fillText('FLOUR',64,60);c.font='14px sans-serif';c.fillText('T65 · 25 KG',64,82);grain(c,w,h,12)});
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
 region('home',{fog:[.86,.76,.68],fr:[70,330],day:1});G.regions.home.amb=[.6,.58,.6];
 // morning sun from the east-south-east, low and warm, over Linden Square and in through the Mill Lane windows
 G.sun.home={d:[.86,.42,.3],c:[1,.86,.7],k:3.1,c0:[-300,6,0],half:62,res:4096};
 const M={brick:mt('brick',0,.7,0,{r:.9}),plaster:mt('wallWarm','#f2ece2',.5,0,{r:.9}),paint:mt('wallPale','#ece8e2',.5,0,{r:.9}),green:MT.gloss('#24493a'),cream:MT.plain('#efe8dc'),
  stone:mt('concrete','#d8d0c0',.5,0,{r:.8}),sash:MT.plain('#f4f0e8'),metro:mt('metro',0,.9,0,{r:.35}),checker:mt('checker',0,.45,0,{r:.4}),oak:mt('wood','#d8b890',.6,0,{r:.5}),
  steel:mt('metal','#d8dce4',.5,0,{r:.3,m:.7}),deck:mt('decking',0,.5,0,{r:.8}),slate:mt('slate',0,.35,0,{r:.8}),lead:MT.plain('#5a5e66'),tileB:mt('tile','#eef4f6',.8,0,{r:.25}),
  rugA:mt('rug','#c9b6ff',.4,0,{r:1}),rugB:mt('rug','#ffd9a0',.4,0,{r:1})};
 const frame=MT.frame;
 /* ---------- helpers ---------- */
 // a real window: opening (via the door list, so both the room wall and the brick skin get it), glass, sash bars,
 // a stone sill and lintel outside, a painted sill board inside
 const win=(o,at,c,w,h,y,out,o2)=>{o2=o2||{};door(o,at,c,w,h,y,1);const g=MT.glass,t=.03,b=.035;
  if(o==='h'){box(c-w/2,y,at-t,c+w/2,y+h,at+t,g,{col:false});colBox(c-w/2,at-.05,c+w/2,at+.05,y,y+h);
   box(c-w/2,y+h/2-b,at-.04,c+w/2,y+h/2+b,at+.04,M.sash,{col:false});box(c-b,y,at-.04,c+b,y+h,at+.04,M.sash,{col:false});
   for(const[x0,x1]of[[c-w/2,c-w/2+.06],[c+w/2-.06,c+w/2]])box(x0,y,at-.05,x1,y+h,at+.05,M.sash,{col:false});box(c-w/2,y,at-.05,c+w/2,y+.06,at+.05,M.sash,{col:false});box(c-w/2,y+h-.06,at-.05,c+w/2,y+h,at+.05,M.sash,{col:false});
   const so=out*.2;box(c-w/2-.12,y-.1,Math.min(at+so,at+so+out*.12),c+w/2+.12,y,Math.max(at+so,at+so+out*.12),M.stone,{col:false});box(c-w/2-.12,y+h,Math.min(at+so,at+so+out*.04),c+w/2+.12,y+h+.24,Math.max(at+so,at+so+out*.04),M.stone,{col:false});
   if(!o2.noIn){const si=-out*.2;box(c-w/2-.06,y-.04,Math.min(at+si,at+si-out*.16),c+w/2+.06,y,Math.max(at+si,at+si-out*.16),M.sash,{col:false})}}
  else{box(at-t,y,c-w/2,at+t,y+h,c+w/2,g,{col:false});colBox(at-.05,c-w/2,at+.05,c+w/2,y,y+h);
   box(at-.04,y+h/2-b,c-w/2,at+.04,y+h/2+b,c+w/2,M.sash,{col:false});box(at-.04,y,c-b,at+.04,y+h,c+b,M.sash,{col:false});
   for(const[z0,z1]of[[c-w/2,c-w/2+.06],[c+w/2-.06,c+w/2]])box(at-.05,y,z0,at+.05,y+h,z1,M.sash,{col:false});box(at-.05,y,c-w/2,at+.05,y+.06,c+w/2,M.sash,{col:false});box(at-.05,y+h-.06,c-w/2,at+.05,y+h,c+w/2,M.sash,{col:false});
   const so=out*.2;box(Math.min(at+so,at+so+out*.12),y-.1,c-w/2-.12,Math.max(at+so,at+so+out*.12),y,c+w/2+.12,M.stone,{col:false});box(Math.min(at+so,at+so+out*.04),y+h,c-w/2-.12,Math.max(at+so,at+so+out*.04),y+h+.24,c+w/2+.12,M.stone,{col:false});
   if(!o2.noIn){const si=-out*.2;box(Math.min(at+si,at+si-out*.16),y-.04,c-w/2-.06,Math.max(at+si,at+si-out*.16),y,c+w/2+.06,M.sash,{col:false})}}
  // floors nobody visits: a lived-in room behind the glass instead of a void
  if(o2.backdrop){const d=-out*.35;if(o==='h')panel(c,y-.25,at+d,w+.8,h+.5,out>0?'s':'n',mt('winIn',0,1,1,{k:.55}));else panel(at+d,y-.25,c,w+.8,h+.5,out>0?'e':'w',mt('winIn',0,1,1,{k:.55}))}};
 // the brick outer skin of an exterior wall, with the same openings as the room wall behind it (no AO, no skirting)
 const skin=(o,fixed,a0,a1,y0,y1,inward,m)=>{m=m||M.brick;const ds=(DOORS[BR]||[]).filter(d=>d.o===o&&Math.abs(d.at-fixed)<.6&&d.c>a0&&d.c<a1&&d.y>=y0-.1&&d.y<y1-.3).sort((p,q)=>p.c-q.c);
  const t0=inward>0?fixed:fixed-.2,t1=inward>0?fixed+.2:fixed;let cur=a0;const P=[];
  for(const d of ds){P.push([cur,d.c-d.w/2,y0,y1]);if(d.y>y0+.01)P.push([d.c-d.w/2,d.c+d.w/2,y0,d.y]);if(d.y+d.h<y1)P.push([d.c-d.w/2,d.c+d.w/2,d.y+d.h,y1]);cur=d.c+d.w/2}P.push([cur,a1,y0,y1]);
  for(const s of P){if(s[1]-s[0]<.01||s[3]-s[2]<.01)continue;if(o==='h')box(s[0],s[2],t0,s[1],s[3],t1,m,{col:false});else box(t0,s[2],s[0],t1,s[3],s[1],m,{col:false})}};
 const WL=(o,f,a0,a1,y,h,m,inw)=>wallLine(o,f,a0,a1,y,h,m,inw);
 const rm=(x0,z0,x1,z1,y,h,fl,n,mc,ce)=>{floorQ(x0,z0,x1,z1,y,fl);surf(x0,z0,x1,z1,y);ceilQ(x0,z0,x1,z1,y+h,ce||MT.ceil);if(n)(MAPR.home=MAPR.home||[]).push({x0,z0,x1,z1,y,n,c:mc||'#4a4a5a'})};
 const radiator=(o,at,c,w,y)=>{const h=.6,d=.09;for(let i=0;i<Math.floor(w/.09);i++){const p=c-w/2+i*.09+.02;if(o==='h')box(p,y+.12,Math.min(at,at+d),p+.05,y+.12+h,Math.max(at,at+d),M.sash,{col:false});else box(Math.min(at,at+d),y+.12,p,Math.max(at,at+d),y+.12+h,p+.05,M.sash,{col:false})}};
 const loaf=(x,y,z,l,a,col)=>{const w=.12,hh=.09;if(a)box(x-w,y,z-l/2,x+w,y+hh,z+l/2,MT.plain(col||'#c88a40'),{col:false});else box(x-l/2,y,z-w,x+l/2,y+hh,z+w,MT.plain(col||'#c88a40'),{col:false});};
 const mug=(x,y,z,col)=>box(x-.045,y,z-.045,x+.045,y+.1,z+.045,MT.gloss(col||'#e9e3da'),{col:false});
 const can=(x,y,z,col)=>box(x-.033,y,z-.033,x+.033,y+.12,z+.033,MT.gloss(col||'#8affc1'),{col:false});
 const books=(x0,y0,z0,x1,y1,z1,dir)=>{box(x0,y0,z0,x1,y1,z1,MT.woodDark);const cx=(x0+x1)/2,cz=(z0+z1)/2,W=dir==='e'||dir==='w'?z1-z0:x1-x0;panel(dir==='e'?x1+.005:dir==='w'?x0-.005:cx,y0+.05,dir==='s'?z1+.005:dir==='n'?z0-.005:cz,W-.08,y1-y0-.1,dir,mt('books',0,1,0,{r:.8}))};
 const curtain=(o,at,c,w,y,h,col,inward)=>{const m=MT.fabric(col),d=inward*.12;for(const s of[-1,1]){const p=c+s*(w/2+.18);if(o==='h')box(p-.18,y-.15,Math.min(at+d,at+d+inward*.08),p+.18,y+h+.25,Math.max(at+d,at+d+inward*.08),m,{col:false});else box(Math.min(at+d,at+d+inward*.08),y-.15,p-.18,Math.max(at+d,at+d+inward*.08),y+h+.25,p+.18,m,{col:false})}
  if(o==='h')box(c-w/2-.4,y+h+.25,Math.min(at+d,at+d+inward*.04),c+w/2+.4,y+h+.29,Math.max(at+d,at+d+inward*.04),MT.brass,{col:false});else box(Math.min(at+d,at+d+inward*.04),y+h+.25,c-w/2-.4,Math.max(at+d,at+d+inward*.04),y+h+.29,c+w/2+.4,MT.brass,{col:false})};
 const bulb=(x,y,z,col,rng,int)=>{box(x-.01,y+.05,z-.01,x+.01,y+.45,z+.01,MT.plain('#222'),{col:false});box(x-.07,y-.08,z-.07,x+.07,y+.06,z+.07,MT.glow(col||'#ffe2b0',1.3),{col:false,b:1});addLight(x,y-.25,z,hx(col||'#ffe2b0'),rng||6,int||.75)};

 /* ================= THE STAIR HALL (west strip, every floor) ================= */
 for(let f=0;f<4;f++){const Y=HY[f],Y1=HY[f+1],ym=(Y+Y1)/2;
  door('v',SXE,6,1,2.2,Y);
  if(f===0){door('h',HZ1,-308,1.1,2.4,0)}else win('h',HZ1,-308,1.5,1.7,Y+.9,1);
  WL('v',HX0,-.4,HZ1,Y,Y1-Y,M.paint,1);WL('v',SXE,-.4,HZ1,Y,Y1-Y,M.paint,-1);WL('h',-.4,HX0,SXE,Y,Y1-Y,M.paint,1);WL('h',HZ1,HX0,SXE,Y,Y1-Y,M.paint,-1);
  stairs(-309.8,1,-308.1,4,Y,ym,'z-',M.oak,{solid:f===0,sides:1,nose:MT.plain('#4a3a2a')});stairs(-307.9,1,-306.2,4,ym,Y1,'z+',M.oak,{solid:false,nose:MT.plain('#4a3a2a')});
  slab(-309.8,-.2,-306.2,1,ym,.25,M.oak,M.paint);slab(-309.8,4,-306.2,HZ1-.2,Y1,.3,M.oak,M.paint);
  // handrails on the wall side and along the spine
  for(const[x,za,zb,ya,yb]of[[-309.72,4,1,Y,ym],[-306.28,1,4,ym,Y1]])railing(x,za,x,zb,ya,{y2:yb,h:.9,m:MT.woodDark});
  bulb(-308,Y1-.35,8,'#ffe2b0',7,.7);radiator('v',-309.8,9,1.2,Y1>0&&f<3?Y1:0);
 }
 if(true){ // spine wall between the two flights, the stairwell bulkhead on the roof and the solid riser block behind
  box(-308.1,0,1,-307.9,HY[4]+2.7,4,M.paint);
  ceilQ(HX0,-.4,SXE,HZ1,HY[4]+2.7,M.paint);floorQ(HX0-.1,-.5,SXE+.1,HZ1+.1,HY[4]+2.9,M.lead);box(HX0-.1,HY[4]+2.7,-.5,SXE+.1,HY[4]+2.9,HZ1+.1,M.stone,{col:false,nt:1});WL('v',HX0,-.4,HZ1,HY[4],2.7,M.paint,1);WL('h',-.4,HX0,SXE,HY[4],2.7,M.paint,1);WL('h',HZ1,HX0,SXE,HY[4],2.7,M.paint,-1);
  door('v',SXE,6,1,2.2,HY[4]);WL('v',SXE,-.4,HZ1,HY[4],2.7,M.paint,-1);
  box(HX0,0,HZ0,SXE,HY[4]+1.1,-.4,M.paint);
  floorQ(HX0,-.4,SXE,HZ1,0,MT.tile);surf(HX0,-.4,SXE,HZ1,0);(MAPR.home=MAPR.home||[]).push({x0:HX0,z0:-.4,x1:SXE,z1:HZ1,y:0,n:'Stairs',c:'#4a4a5a'});
  // ground-floor lobby: post, the bike, the coat hook nobody uses
  box(-309.6,0,9.6,-309.2,.95,10.4,MT.plain('#2a2a30'));box(-309.75,.9,8.6,-309.65,1.9,11.4,MT.gloss('#c0304a'),{col:false});
  for(const[x,z]of[[-308.4,11.4],[-308.1,11.1],[-307.7,11.5]])box(x-.15,0,z-.11,x+.15,.005,z+.11,MT.plain(['#e9e3da','#ffd166','#7cc4ff'][Math.abs(x|0)%3]),{col:false});
  box(-308.8,0,11.2,-307.4,.02,11.8,mt('rug','#5a3a2a',.4,0),{col:false});
  panel(-306.21,1.4,9.5,.5,.7,'w',sign('1A ↑','#ffd9a0','#4a2e22',128,96));
 }

 /* ================= GROUND FLOOR: PROOF ================= */
 const Y0=0,H0=3.6;
 // walls (interior side) + windows on the exterior
 win('v',HX1,4.75,2.4,2.1,.9,1);win('v',HX1,9.25,2.4,2.1,.9,1);win('v',HX1,-3,2.6,1,1.6,1);win('v',HX1,-10,1,1,1.4,1);win('h',HZ0,-302,1.2,.8,1.7,-1);
 door('h',HZ0,-292.5,1,2.2,0);door('h',2,-297,1.2,2.4,0);door('h',-8,-302,1,2.2,0);door('h',-8,-296.75,.8,2.1,0);door('h',-8,-292.75,1.4,2.2,0);
 WL('v',HX1,HZ0,2,Y0,H0,M.metro,-1);WL('v',HX1,2,HZ1-.2,Y0,H0,M.plaster,-1);WL('h',HZ0,SXE,HX1,Y0,H0,M.paint,1);WL('v',SXE,HZ0,-.4,Y0,H0,M.metro,-1);
 WL('h',2,SXE,HX1,Y0,H0,M.metro,1);WL('h',-8,SXE,HX1,Y0,H0,M.metro,1);WL('v',-298,HZ0,-8,Y0,H0,M.paint,1);WL('v',-295.5,HZ0,-8,Y0,H0,M.tileB,1);
 rm(SXE,2,HX1,HZ1,0,H0,M.checker,'Proof bakery','#6a4a2a',mt('ceil','#f4efe6',.4,0));rm(SXE,-8,HX1,2,0,H0,MT.tileDark,'Bakehouse','#5a4a3a');
 rm(SXE,HZ0,-298,-8,0,H0,MT.concrete,'Store','#4a4a5a');rm(-298,HZ0,-295.5,-8,0,H0,M.tileB,'WC','#4a5a6a');rm(-295.5,HZ0,HX1,-8,0,H0,MT.tileDark,'Back door','#4a4a5a');
 // --- the shopfront: green pilasters, stall riser, plate glass, a fascia with gold letters, a striped awning
 {const z=HZ1,g=M.green;box(SXE,0,z-.2,-305.6,3.9,z+.25,g);box(-290.4,0,z-.2,HX1+.2,3.9,z+.25,g);
  box(-305.6,0,z-.15,-303.2,.6,z+.15,g);box(-302,0,z-.15,-290.4,.6,z+.15,g);box(-305.6,3.0,z-.15,-290.4,3.12,z+.2,g,{col:false});box(SXE,3.12,z-.2,HX1+.2,3.9,z+.3,g,{col:false});
  box(-305.6,.6,z-.02,-303.2,3.0,z+.02,MT.glass,{col:false});box(-302,.6,z-.02,-290.4,3.0,z+.02,MT.glass,{col:false});for(const x of[-298.2,-294.3])box(x-.05,.6,z-.06,x+.05,3.0,z+.06,g,{col:false});
  colBox(SXE,z-.2,HX1,z+.25,0,3.9);
  // the door: glazed, brass push plate, an OPEN sign on a string
  box(-303.2,0,z-.06,-302,2.5,z+.06,g,{col:false});box(-303.05,.9,z-.03,-302.15,2.35,z+.03,MT.glass,{col:false});box(-303.2,2.5,z-.15,-302,3.0,z+.15,MT.glass,{col:false});box(-302.4,1.05,z-.09,-302.25,1.35,z-.06,MT.brass,{col:false});
  panel(-302.6,1.75,z-.08,.5,.24,'n',sign('OPEN','#ff5d73','#f4efe6',128,64));
  panel(-298,3.18,z+.31,10,.62,'s',sign('PROOF · BAKERY · EST. 2019','#e9c46a','#24493a',1024,72));
  // awning over the display windows, rolled out for the morning
  const aw=mt('awning',0,1,0,{r:.9});quad([-301.6,3.0,z+.3],[-290.8,3.0,z+.3],[-290.8,2.55,z+1.7],[-301.6,2.55,z+1.7],aw,4,1);quad([-290.8,3.0,z+.3],[-301.6,3.0,z+.3],[-301.6,2.55,z+1.7],[-290.8,2.55,z+1.7],aw,4,1);
  box(-301.6,2.35,z+1.68,-290.8,2.55,z+1.72,aw,{col:false});
  // the display window: tiered stands of bread, a cake under a cloche
  for(const[x0,x1]of[[-305.4,-303.6],[-301.8,-290.8]]){box(x0,0,z-1.1,x1,.62,z-.2,M.oak);for(let i=0;i<Math.floor((x1-x0)/.55);i++)loaf(x0+.3+i*.55,.62,z-.55,.42,true,['#c88a40','#a86a30','#d99a52'][i%3])}
  for(const x of[-300,-296,-292]){box(x-.04,.62,z-.75,x+.04,1.4,z-.67,MT.brass,{col:false});box(x-.4,1.0,z-1.05,x+.4,1.03,z-.35,M.oak,{col:false});box(x-.32,1.38,z-.95,x+.32,1.41,z-.45,M.oak,{col:false});for(const k of[-.22,0,.22]){loaf(x+k,1.03,z-.7,.3,true,'#d99a52');box(x+k-.08,1.41,z-.78,x+k+.08,1.5,z-.62,MT.plain(['#e9b06a','#c88a40','#f0c27a'][Math.abs(k*10|0)%3]),{col:false})}}
  box(-294.4,.62,z-.9,-293.6,.95,z-.4,MT.plain('#f4efe6'),{col:false});box(-294.3,.95,z-.85,-293.7,1.2,z-.45,MT.glass,{col:false});
 }
 // --- service counter: glass display case, till, card reader, paper bags; the bread wall behind
 {const cz=5;box(-305.2,0,cz-.45,-293.2,.95,cz+.45,{side:MT.woodDark,top:M.stone});box(-293.2,0,cz-.45,-291.6,1.05,cz+.45,{side:MT.woodDark,top:M.stone});
  box(-305,0.95,cz+.05,-297.6,1.45,cz+.45,MT.glass,{col:false});for(const x of[-305,-301.3,-297.6])box(x-.03,.95,cz+.03,x+.03,1.45,cz+.47,MT.chrome,{col:false});
  panel(-301.3,1.0,cz+.25,7.2,.4,'s',mt('pastry',0,1,0,{r:.7}));box(-305,1.22,cz+.06,-297.6,1.24,cz+.44,MT.glass,{col:false});
  quad([-305,1.245,cz+.44],[-297.6,1.245,cz+.44],[-297.6,1.245,cz+.06],[-305,1.245,cz+.06],mt('pastry',0,1,0,{r:.7}),1,1);
  box(-305,1.44,cz+.02,-297.6,1.47,cz+.48,M.stone,{col:false});box(-305,1.44,cz+.02,-297.6,1.45,cz+.05,MT.glow('#fff4e0',1.1),{col:false});addLight(-301.3,1.6,cz+.3,[1,.92,.8],2.6,.35);
  // till + card reader + bags + tip jar
  box(-296.4,.95,cz-.25,-295.8,1.2,cz+.15,MT.plain('#2a2a30'),{col:false});box(-296.35,1.2,cz-.2,-295.85,1.5,cz-.15,MT.dash,{col:false});box(-295.4,.95,cz-.05,-295.25,1.12,cz+.15,MT.plain('#1a1a20'),{col:false});box(-295.38,1.12,cz-.03,-295.27,1.13,cz+.08,MT.glow('#8affc1',1),{col:false});
  for(let i=0;i<4;i++)box(-294.7+i*.02,.95,cz-.3,-294.4+i*.02,1.25+i*.01,cz-.1,MT.plain('#c9a46a'),{col:false});box(-293.9,.95,cz+.1,-293.75,1.13,cz+.25,MT.glass,{col:false});
  // coffee machine, grinder, cups on the back counter
  box(-293.6,0,2.25,-290.4,.95,2.9,{side:MT.woodDark,top:M.stone});box(-293.3,.95,2.3,-292.1,1.55,2.8,MT.chrome);box(-293.2,1.2,2.82,-292.2,1.45,2.84,MT.plain('#2a2a30'),{col:false});box(-292.9,1.55,2.4,-292.5,1.62,2.7,MT.plain('#e9e3da'),{col:false});
  box(-291.8,.95,2.4,-291.4,1.55,2.7,MT.plain('#2a2a30'));box(-291.75,1.4,2.45,-291.45,1.62,2.65,MT.glass,{col:false});for(let i=0;i<5;i++)mug(-290.9,.95+i*.1,2.55,'#e9e3da');
  // the bread wall: wire baskets of loaves, a chalk menu above
  for(let r=0;r<3;r++)for(let i=0;i<6;i++){const x=-305+i*1.15,y=.95+r*.55;box(x,y,2.22,x+1,y+.04,2.6,MT.plain('#3a2a20'),{col:false});for(let k=0;k<3;k++)loaf(x+.18+k*.32,y+.04,2.42,.26,true,['#c88a40','#a86a30','#d99a52','#8a5a2a'][(r+i+k)%4])}
  box(-305.2,0,2.2,-298,.9,2.7,MT.woodDark);panel(-301.6,2.75,2.21,6.6,.75,'s',sign('SOURDOUGH · RYE · CINNAMON KNOTS · FLAT WHITES','#f4efe6','#1e2a26',1024,96));
  // Ellie's radio on the back counter
  box(-290.95,.95,2.45,-290.55,1.17,2.75,MT.gloss('#c0304a'),{col:false});box(-290.92,1.17,2.6,-290.9,1.45,2.62,MT.chrome,{col:false});
 }
 // --- customer side: bistro tables, a window bar with stools along Mill Lane, menu board, chalkboard, plants
 for(const[x,z]of[[-303.5,8.2],[-299.5,8.6],[-296,9.6]]){box(x-.04,0,z-.04,x+.04,.74,z+.04,MT.plain('#222'),{col:false});box(x-.25,0,z-.25,x+.25,.02,z+.25,MT.plain('#222'),{col:false});box(x-.38,.72,z-.38,x+.38,.76,z+.38,M.stone,{col:false});colBox(x-.38,z-.38,x+.38,z+.38,0,.76);
  for(const[dx,dz,d]of[[.65,0,'w'],[-.65,0,'e']])chair(x+dx,z+dz,d,MT.plain('#24493a'));mug(x+.1,.76,z-.05,'#f4efe6');}
 box(-290.75,1.0,3.6,-290.2,1.05,10.4,M.oak);colBox(-290.75,3.6,-290.2,10.4,0,1.05);for(const z of[4.2,5.3,8.7,9.8]){box(-291.2,0,z-.18,-290.84,.72,z+.18,MT.plain('#222'),{col:false});box(-291.25,.72,z-.22,-290.8,.78,z+.22,M.green,{col:false})}
 panel(-305.79,1.2,8.6,2.2,1.4,'e',MT.chalk);plant(-305.4,11.3,.8);plant(-291,11.3,.8);
 for(const x of[-303,-299,-295])pendant(x,3.6,5,'#ffd98a',6);for(const[x,z]of[[-301,9],[-295,9.6]])pendant(x,3.6,z,'#ffd98a',6);
 box(-292,0,10.6,-291.2,.9,11.2,MT.plain('#24493a'));panel(-291.6,.25,11.21,.7,.6,'s',sign('BINS →','#f4efe6','#24493a',128,96));
 // --- the bakehouse: deck ovens, proving cabinet, steel benches, mixer, rack trolleys, sacks, sink, hood, clock
 {for(const x of[-305.8,-302.2]){box(x,0,-7.8,x+3.4,2.1,-6.5,MT.chrome);panel(x+1.7,.25,-6.49,3,.65,'s',MT.oven);panel(x+1.7,1.1,-6.49,3,.65,'s',MT.oven);box(x+.2,1.88,-6.48,x+3.2,1.95,-6.44,MT.glow('#ff9a5c',1),{col:false});addLight(x+1.7,.9,-5.7,[1,.55,.25],4.5,.9)}
  box(-298.4,0,-7.8,-296.6,2.1,-6.9,MT.chrome);box(-298.3,.2,-6.89,-296.7,2,-6.87,MT.glass,{col:false});for(let i=0;i<6;i++)box(-298.2,.35+i*.28,-7.6,-296.8,.37+i*.28,-7,MT.steel,{col:false});
  box(-305.8,2.4,-7.8,-298.6,2.5,-6.2,MT.chrome,{col:false});box(-305.6,2.5,-7.6,-298.8,3.6,-7.2,MT.chrome,{col:false});
  for(const z of[-3.8,-.6]){box(-303.8,0,z-.45,-297.2,.9,z+.45,{side:MT.chrome,top:M.steel});for(let i=0;i<5;i++){box(-303.2+i*1.2,.9,z-.15,-302.8+i*1.2,1.02,z+.15,MT.plain('#f0e4cc'),{col:false})}box(-298.6,.9,z-.3,-298.3,.92,z+.3,MT.plain('#8a8a94'),{col:false})}
  box(-296.5,0,-1.2,-295.7,1.1,-.4,MT.gloss('#d8dce4'));box(-296.4,1.1,-1.1,-295.8,1.3,-.5,MT.chrome,{col:false});
  for(const[x,z]of[[-294.6,-4.6],[-293.4,-4.6]]){box(x-.3,0,z-.35,x+.3,1.8,z+.35,MT.steel,{col:false});colBox(x-.3,z-.35,x+.3,z+.35,0,1.8);for(let i=0;i<7;i++){box(x-.28,.15+i*.24,z-.33,x+.28,.17+i*.24,z+.33,MT.steel,{col:false});for(let k=0;k<3;k++)loaf(x-.18+k*.18,.17+i*.24,z,.4,false,['#c88a40','#a86a30','#d99a52'][(i+k)%3])}}
  for(let i=0;i<7;i++){const x=-305.6+(i%4)*.62,y=Math.floor(i/4)*.36;box(x,y,-1.9,x+.58,y+.34,-1.1,mt('sack',0,1,0,{r:.95}))}
  box(-291.2,0,-7.8,-290.2,.9,-6.6,MT.chrome);box(-291.1,.9,-7.7,-290.3,.92,-6.7,MT.steel,{col:false});box(-290.8,.92,-7.7,-290.7,1.3,-7.6,MT.chrome,{col:false});
  box(-291.2,1.4,-7.8,-290.2,2.6,-6.8,MT.plain('#e9e3da'));for(let i=0;i<3;i++)box(-291.15,1.5+i*.4,-7.7,-290.25,1.52+i*.4,-6.9,M.steel,{col:false});
  panel(-298,2.6,1.99,.45,.45,'n',sign('04:12','#1b1026','#f4efe6',128,128));
  box(-291.2,0,-1.6,-290.25,2.2,1.6,MT.steel);for(let i=0;i<4;i++)box(-291.15,.3+i*.5,-1.55,-290.3,.32+i*.5,1.55,MT.plain('#8a8a94'),{col:false});
  for(const[x,z]of[[-302,-2],[-296,-2],[-299,-5.5]])lightPanel(x,3.6,z,1.6,.4,'#f4f8ff',8,.7);
 }
 // --- dry store, WC, back lobby
 {for(let r=0;r<4;r++){box(-305.8,.2+r*.7,-11.8,-298.3,.24+r*.7,-11.2,MT.steel,{col:false});for(let i=0;i<9;i++)box(-305.6+i*.8,.24+r*.7,-11.75,-305+i*.8,.24+r*.7+.3+rnd()*.25,-11.25,MT.plain(['#d8c8a0','#c9a46a','#e9e3da','#7a4a2a'][(i+r)%4]),{col:false})}colBox(-305.8,-11.8,-298.3,-11.2,0,2.8);
  for(let i=0;i<4;i++)box(-305.6+i*.62,0,-9.2,-305.02+i*.62,.34,-8.4,mt('sack',0,1,0,{r:.95}));bulb(-302,3.6,-10,'#ffe2b0',5,.6);
  box(-297.6,0,-11.8,-296.6,.42,-11.3,MT.plain('#f4f4f8'));box(-297.6,.42,-11.8,-296.6,.8,-11.6,MT.plain('#f4f4f8'),{col:false});box(-296.4,.8,-11.8,-295.8,.92,-11.4,MT.plain('#f4f4f8'),{col:false});bulb(-296.75,3.6,-10,'#f4f8ff',4,.5);
  box(-295.2,0,-11.8,-294.4,1.2,-11.5,MT.plain('#3a5a3a'),{col:false});for(let i=0;i<3;i++)box(-293.8+i*.6,1.5,-11.85,-293.6+i*.6,1.7,-11.75,MT.chrome,{col:false});bulb(-292.75,3.6,-10,'#ffe2b0',5,.6);
 }
 // exterior skin, ground floor: rear and Mill Lane brick (the front is the shopfront)
 skin('v',HX1,HZ0,HZ1+.25,0,3.9,1);skin('h',HZ0,HX0,HX1+.2,0,3.9,-1);skin('h',HZ1,HX0,SXE,0,3.9,1);
 box(-308.6,2.45,HZ1+.2,-307.4,2.6,HZ1+.7,M.stone,{col:false});panel(-308,2.7,HZ1+.21,.7,.5,'s',sign('1A','#e9c46a','#2a2a30',128,96));
 box(-308.6,0,HZ1-.06,-307.4,2.4,HZ1+.06,MT.gloss('#7a1f2b'),{col:false});box(-307.6,1.1,HZ1+.06,-307.5,1.3,HZ1+.1,MT.brass,{col:false});box(-308.2,1.5,HZ1+.06,-307.8,1.56,HZ1+.08,MT.brass,{col:false});
 

 /* ================= FIRST FLOOR: FLAT 1A ================= */
 {const y=HY[1],h=2.9;
  // windows: two over Linden Street, the corner, Mill Lane, the back
  win('h',HZ1,-304.5,1,1.5,y+1,1);win('h',HZ1,-299,1.8,1.7,y+.75,1);win('h',HZ1,-294,1.8,1.7,y+.75,1);
  win('v',HX1,7.5,2,1.7,y+.75,1);win('v',HX1,-.5,1.4,1.2,y+1.1,1);win('v',HX1,-8,1.8,1.5,y+.85,1);win('h',HZ0,-297,1.8,1.5,y+.85,-1);win('h',HZ0,-292.5,1,1.2,y+1.1,-1);
  door('v',-303,8,1.1,2.1,y);door('v',-303,1,.85,2.05,y);door('v',-303,-2.5,.85,2.05,y);door('v',-303,-6,.9,2.05,y);door('h',-8,-304.5,.8,2,y);door('h',3,-293.5,5,2.35,y,1);
  WL('h',HZ1,SXE,HX1,y,h,M.paint,-1);WL('v',HX1,HZ0,HZ1,y,h,M.paint,-1);WL('h',HZ0,SXE,HX1,y,h,M.paint,1);WL('v',SXE,HZ0,-.4,y,h,M.paint,1);
  WL('v',-303,-8,HZ1,y,h,M.paint,1);WL('h',-8,SXE,-303,y,h,M.paint,1);WL('v',-303,HZ0,-8,y,h,M.paint,1);
  WL('h',3,-303,HX1,y,h,M.paint,1);WL('v',-297,-4,3,y,h,M.paint,1);WL('h',-1,-303,-297,y,h,M.tileB,1);WL('h',-4,-303,HX1,y,h,M.paint,1);
  rm(SXE,-8,-303,HZ1,y,h,M.oak,'Hallway','#4a4a5a');rm(-303,3,HX1,HZ1,y,h,M.oak,'Living room','#5a4a6a');rm(-297,-4,HX1,3,y,h,MT.tile,'Kitchen','#4a5a5a');
  rm(-303,-1,-297,3,y,h,M.tileB,'Bathroom','#4a5a6a');rm(-303,-4,-297,-1,y,h,MT.carpetGrey,'Box room','#4a4a5a');rm(-303,HZ0,HX1,-4,y,h,MT.carpetGrey,'Bedroom','#5a4a5a');rm(SXE,HZ0,-303,-8,y,h,M.oak,null);
  skin('h',HZ1,SXE,HX1+.2,y,HY[2],1);skin('v',HX1,HZ0-.2,HZ1+.2,y,HY[2],1);skin('h',HZ0,SXE,HX1+.2,y,HY[2],-1);
  // corridor: router on a shelf, coat hooks, shoes, a mirror, the meter cupboard
  box(-306,y+1.5,9.8,-305.75,y+1.53,11,M.oak,{col:false});box(-305.98,y+1.53,10.1,-305.8,y+1.6,10.5,MT.plain('#1a1a20'),{col:false});box(-305.79,y+1.56,10.15,-305.785,y+1.57,10.45,MT.glow('#8affc1',1.6),{col:false});
  for(let i=0;i<4;i++){box(-306,y+1.7,4.5+i*.4,-305.9,y+1.74,4.55+i*.4,MT.brass,{col:false})}box(-305.95,y+.7,4.4,-305.7,y+1.7,4.8,MT.fabric('#2a3a5a'),{col:false});box(-305.95,y+.9,5.2,-305.7,y+1.7,5.6,MT.fabric('#8a3a1a'),{col:false});
  for(const[x,z,c]of[[-305.3,4.2,'#e9e3da'],[-305,4.4,'#2a2a30'],[-305.4,4.7,'#ff5d73']])box(x-.14,y,z-.06,x+.14,y+.1,z+.06,MT.plain(c),{col:false});
  box(-303.25,y+1,9,-303.2,y+2,9.7,MT.chrome,{col:false});bulb(-304.5,y+h,6,'#ffe2b0',6,.6);bulb(-304.5,y+h,-3,'#ffe2b0',6,.5);radiator('v',-305.8,0,1.2,y);
  // ---- living room: the corner. Battlestation by the Mill Lane window, sofa, telly, books, plastic plant, pizza boxes
  {const D=MT.woodDark;box(-291.15,y,9,-290.2,y+.74,11.7,D);colBox(-291.15,9,-290.2,11.7,y,y+.74);
   box(-292.6,y,10.95,-291.15,y+.74,11.75,D);
   const mon=(z,m)=>{box(-290.55,y+.74,z-.08,-290.45,y+1.0,z+.08,MT.plain('#1a1a20'),{col:false});box(-290.6,y+.95,z-.34,-290.52,y+1.36,z+.34,MT.plain('#14141a'),{col:false});panel(-290.61,y+.98,z,.62,.36,'w',m)};
   mon(9.6,MT.code);mon(10.35,mt(signTex('firewalls r a joke','#8affc1','#07110d',256,128),0,1,1));box(-291.6,y+.74,11.15,-291.05,y+1.25,11.6,MT.plain('#1a1a20'),{col:false});box(-291.62,y+.85,11.2,-291.61,y+1.15,11.55,MT.glow('#c9b6ff',1.4),{col:false});
   box(-291.0,y+.74,9.5,-290.75,y+.76,10.5,MT.plain('#2a2a30'),{col:false});box(-290.98,y+.76,9.55,-290.77,y+.78,10.45,MT.glow('#ff8fc8',.8),{col:false});box(-291,y+.74,10.7,-290.85,y+.76,10.82,MT.plain('#2a2a30'),{col:false});
   can(-290.7,y+.74,11.3,'#8affc1');can(-290.6,y+.74,11.45,'#ffd166');can(-292.3,y+.74,11.4,'#8affc1');
   box(-290.95,y+.74,8.9,-290.75,y+1.25,9.05,MT.plain('#2a2a30'),{col:false});box(-291,y+1.2,8.85,-290.7,y+1.3,9.1,MT.glow('#fff0d0',1.2),{col:false});addLight(-290.9,y+1.15,9.3,[1,.9,.75],3.2,.5);
   box(-290.3,y+.76,9.05,-290.25,y+1.0,11.6,MT.glow('#9b59ff',.7),{col:false});addLight(-290.6,y+.9,10.3,[.6,.4,1],2.6,.35);
   chair(-292,10,'e',MT.plain('#c0304a'),y);box(-292.2,y+.48,9.75,-292.15,y+1.15,10.25,MT.plain('#c0304a'),{col:false});
   sofa(-297.6,6.8,2.6,'e','#5a4a7a',y);sofa(-299.6,4.3,1,'n','#5a4a7a',y);box(-300.6,y,6,-299.4,y+.4,7.6,D);colBox(-300.6,6,-299.4,7.6,y,y+.4);
   for(let i=0;i<3;i++)box(-300.4+i*.05,y+.4+i*.05,6.2-i*.03,-299.95+i*.05,y+.45+i*.05,6.65-i*.03,MT.plain('#d8a050'),{col:false});can(-299.7,y+.4,7.1,'#8affc1');can(-299.6,y+.4,7.35,'#8affc1');mug(-299.9,y+.4,6.9,'#7cc4ff');
   box(-302.8,y,4.8,-302.4,y+.55,8.6,D);box(-302.75,y+.55,5.2,-302.7,y+1.35,8.2,MT.plain('#101014'),{col:false});panel(-302.69,y+.62,6.7,2.8,.66,'e',MT.stream);
   books(-302.85,y,9.2,-302.45,y+2.2,11.6,'e');books(-296,y,3.25,-294.6,y+2,3.6,'s');
   box(-301,y,9.1,-299,y+.01,11,M.rugA,{col:false});box(-301.4,y,5.2,-298.6,y+.01,8.6,M.rugB,{col:false});
   box(-301.6,y,10.9,-301.4,y+1.6,11.1,MT.plain('#2a2a30'),{col:false});box(-301.75,y+1.6,10.75,-301.25,y+1.85,11.25,MT.plain('#f4efe6'),{col:false});
   plant(-291.2,6.5,.7,y);plant(-302.4,11.4,.8,y);
   radiator('h',11.7,-299,1.4,y);radiator('h',11.7,-294,1.4,y);radiator('v',-290.3,7.5,1.4,y);
   curtain('h',HZ1,-299,1.8,y+.75,1.7,'#7a3a4a',-1);curtain('h',HZ1,-294,1.8,y+.75,1.7,'#7a3a4a',-1);curtain('v',HX1,7.5,2,y+.75,1.7,'#7a3a4a',-1);
   panel(-302.79,y+1.2,4.2,.8,1.05,'e',MT.poster(1));panel(-296.5,y+1.2,3.21,.8,1.05,'s',MT.poster(4));panel(-303,y+1.3,10.3,.01,.01,'e',MT.plain('#000'));
   bulb(-297,y+h,7.5,'#ffe2b0',8,.55);}
  // ---- kitchen: L of units along the lane wall and the box-room wall, hob, sink under the window, fridge, kettle, mugs
  {const yk=y;box(-291,yk,-3.8,-290.2,yk+.9,2.6,{side:MT.plain('#3f5a6a'),top:M.oak});colBox(-291,-3.8,-290.2,2.6,yk,yk+.9);
   box(-296.8,yk,-3.8,-291,yk+.9,-3.1,{side:MT.plain('#3f5a6a'),top:M.oak});colBox(-296.8,-3.8,-291,-3.1,yk,yk+.9);
   for(let i=0;i<10;i++){const z=-3.6+i*.6;box(-290.99,yk+.08,z,-290.985,yk+.84,z+.02,MT.plain('#1a1a20'),{col:false});box(-291.01,yk+.75,z+.25,-290.99,yk+.79,z+.4,MT.chrome,{col:false})}
   quad([-290.8,yk+.905,-2.4],[-290.8,yk+.905,-1.6],[-290.25,yk+.905,-1.6],[-290.25,yk+.905,-2.4],mt('hob',0,1,0,{r:.2}),1,1);
   box(-290.95,yk+.86,-.95,-290.35,yk+.91,-.05,MT.chrome,{col:false});box(-290.4,yk+.91,-.55,-290.33,yk+1.15,-.45,MT.chrome,{col:false});
   box(-290.6,yk+1.5,-3.8,-290.2,yk+2.3,-1.4,MT.plain('#3f5a6a'));box(-290.6,yk+1.5,1.2,-290.2,yk+2.3,2.6,MT.plain('#3f5a6a'));box(-290.65,yk+1.48,-3.8,-290.6,yk+1.5,-1.4,MT.glow('#fff0d0',1),{col:false});addLight(-290.8,yk+1.3,-2.5,[1,.9,.75],2.5,.4);
   box(-296.8,yk,1.9,-296,yk+1.9,2.8,MT.gloss('#e9e3da'));box(-296.02,yk+1,2,-296,yk+1.5,2.05,MT.chrome,{col:false});for(const[dz,c]of[[2.2,'#ff5d73'],[2.4,'#ffd166'],[2.55,'#7cc4ff']])box(-295.99,yk+1.3+(dz-2.2),dz,-295.98,yk+1.45+(dz-2.2),dz+.1,MT.plain(c),{col:false});
   box(-290.8,yk+.9,1.4,-290.55,yk+1.15,1.65,MT.chrome,{col:false});box(-290.85,yk+.9,.5,-290.45,yk+1.1,.95,MT.plain('#2a2a30'),{col:false});for(let i=0;i<4;i++)mug(-290.7,yk+.9,-2.9+i*.14,['#e9e3da','#ff5d73','#7cc4ff','#ffd166'][i]);
   box(-296.6,yk+.9,-3.8,-291,yk+1.5,-3.78,M.metro,{col:false});table(-293.8,.2,1.2,.8,M.oak,.76,yk);chair(-293.8,-.4,'s',MT.plain('#c9a46a'),yk);chair(-293.8,.8,'n',MT.plain('#c9a46a'),yk);
   bulb(-293.5,yk+h,-.5,'#ffe2b0',7,.6);}
  // ---- bathroom: bath with shower screen, toilet, basin, mirror, towel rail
  {box(-302.8,y,-.8,-301,y+.55,2.8,MT.plain('#f4f4f8'));box(-302.6,y+.45,-.6,-301.2,y+.55,2.6,MT.plain('#bfe0f4'),{col:false});box(-301.05,y+.55,-.8,-301,y+2.2,.6,MT.glass,{col:false});box(-302.7,y+1.9,2.4,-302.6,y+2.1,2.6,MT.chrome,{col:false});
   box(-297.8,y,-.8,-297.2,y+.42,-.2,MT.plain('#f4f4f8'));box(-297.8,y+.42,-.8,-297.25,y+.85,-.6,MT.plain('#f4f4f8'),{col:false});
   box(-299.8,y,2.4,-299.6,y+.75,2.6,MT.plain('#f4f4f8'),{col:false});box(-300.1,y+.75,2.2,-299.3,y+.9,2.8,MT.plain('#f4f4f8'),{col:false});box(-300.1,y+1.1,2.77,-299.3,y+1.9,2.8,MT.chrome,{col:false});
   box(-298.6,y+.9,2.75,-297.6,y+.95,2.8,MT.chrome,{col:false});box(-298.5,y+.55,2.72,-297.7,y+.93,2.76,MT.fabric('#7cc4ff'),{col:false});
   box(-302.95,y,-.95,-297,y+1.2,-.9,M.metro,{col:false});lightPanel(-300,y+h,1,.6,.6,'#f4f8ff',4,.55);}
  // ---- box room: the homelab, boxes, an ironing board nobody has opened
  {rack(-302.4,-2.5,'e',y);box(-302.4,y+2.1,-3,-302,y+2.12,-2,MT.plain('#2a2a30'),{col:false});addLight(-301.6,y+1.2,-2.5,[.5,1,.8],3,.3);
   for(let i=0;i<5;i++)box(-299+(i%3)*.7,y+Math.floor(i/3)*.45,-3.8,-298.4+(i%3)*.7,y+.45+Math.floor(i/3)*.45,-3.2,MT.plain('#c9a46a'));box(-297.5,y,-1.6,-297.3,y+1.4,-1.3,MT.plain('#9aa0aa'),{col:false});
   bulb(-300,y+h,-2.5,'#ffe2b0',4,.4);}
  // ---- bedroom: unmade bed, bedside lamps, wardrobe, drawers, laundry chair, a rug
  {box(-295.5,y,-11.7,-292.1,y+.38,-9.6,MT.woodDark);box(-295.4,y+.38,-11.6,-292.2,y+.58,-9.7,MT.linen);colBox(-295.5,-11.7,-292.1,-7.6,y,y+.58);box(-295.5,y,-11.8,-292.1,y+1.15,-11.7,MT.woodDark);
   box(-295.4,y+.38,-9.7,-292.2,y+.6,-7.7,MT.fabric('#7cc4ff'));box(-295.4,y+.6,-9.4,-293.3,y+.68,-8.2,MT.fabric('#6ab0e8'),{col:false});box(-295.1,y+.58,-11.5,-293.9,y+.75,-10.9,MT.linen,{col:false});box(-293.7,y+.58,-11.5,-292.5,y+.75,-10.9,MT.linen,{col:false});
   for(const x of[-296.1,-291.5]){box(x-.3,y,-11.7,x+.3,y+.55,-11.2,MT.woodDark);box(x-.08,y+.55,-11.5,x+.08,y+.9,-11.35,MT.plain('#c9a46a'),{col:false});box(x-.16,y+.9,-11.6,x+.16,y+1.08,-11.25,MT.glow('#ffd9a0',.9),{col:false})}addLight(-291.5,y+1,-11.2,[1,.85,.65],3.2,.45);
   box(-302.8,y,-11.8,-300.4,y+2.2,-11.2,MT.woodDark);box(-301.62,y+.2,-11.19,-301.58,y+2.1,-11.18,MT.plain('#1a1a20'),{col:false});for(const x of[-301.8,-301.4])box(x-.02,y+1,-11.19,x+.02,y+1.3,-11.15,MT.brass,{col:false});
   box(-302.8,y,-10.6,-302.2,y+.9,-8.8,MT.woodDark);box(-302.8,y+.9,-10.3,-302.3,y+1.1,-9.9,MT.plain('#2a2a30'),{col:false});chair(-299.5,-5,'n',MT.plain('#3a3a4a'),y);box(-299.75,y+.48,-5.2,-299.25,y+.75,-4.8,MT.fabric('#ff5d73'),{col:false});
   box(-297.2,y,-9.2,-294.4,y+.01,-6.6,mt('rug','#8a3a4a',.4,0),{col:false});radiator('h',-11.8,-297,1.4,y);curtain('h',HZ0,-297,1.8,y+.85,1.5,'#3a5a7a',1);curtain('v',HX1,-8,1.8,y+.85,1.5,'#3a5a7a',-1);
   bulb(-297,y+h,-8,'#ffe2b0',6,.4);}
 }

 /* ================= SECOND AND THIRD FLOORS (exterior only; landings and locked doors in the stair hall) ================= */
 for(const f of[2,3]){const y=HY[f],bd={backdrop:1,noIn:1};
  win('h',HZ1,-304.5,1,1.5,y+1,1,bd);win('h',HZ1,-299,1.8,1.7,y+.75,1,bd);win('h',HZ1,-294,1.8,1.7,y+.75,1,bd);
  win('v',HX1,7.5,2,1.7,y+.75,1,bd);win('v',HX1,-.5,1.4,1.2,y+1.1,1,bd);win('v',HX1,-8,1.8,1.5,y+.85,1,bd);win('h',HZ0,-297,1.8,1.5,y+.85,-1,bd);win('h',HZ0,-292.5,1,1.2,y+1.1,-1,bd);
  skin('h',HZ1,SXE,HX1+.2,y,HY[f+1],1);skin('v',HX1,HZ0-.2,HZ1+.2,y,HY[f+1],1);skin('h',HZ0,SXE,HX1+.2,y,HY[f+1],-1);
  panel(-306.21,y+2.3,6,.8,.3,'w',sign(f===2?'FLAT 2':'FLAT 3','#e9c46a','#2a2a30',256,96));box(-306.25,y+1,6.55,-306.2,y+1.3,6.6,MT.brass,{col:false});}
 // cornice bands between floors, all round the two street faces
 for(const y of[3.9,HY[4]]){box(SXE,y-.15,HZ1+.2,HX1+.35,y+.1,HZ1+.42,M.stone,{col:false});box(HX1+.2,y-.15,HZ0-.2,HX1+.42,y+.1,HZ1+.42,M.stone,{col:false})}
 // stair hall front: brick from the first floor up; west party wall face above the neighbour
 skin('h',HZ1,HX0,SXE,3.9,HY[4]+2.7,1);box(HX0-.2,10.3,HZ0,HX0,HY[4]+2.7,HZ1+.2,M.brick,{col:false});skin('h',HZ0,HX0,SXE,3.9,HY[4]+1.1,-1);

 /* ================= THE ROOF TERRACE ================= */
 {const y=HY[4];slab(SXE,HZ0,HX1,HZ1,y,.3,M.deck,M.paint);
  for(const[a,b,c,d]of[[SXE,HZ1-.2,HX1+.2,HZ1+.2],[HX1-.2,HZ0-.2,HX1+.2,HZ1+.2],[SXE,HZ0-.2,HX1+.2,HZ0+.2]]){box(a,y,b,c,y+1.05,d,M.brick);box(a-.05,y+1.05,b-.05,c+.05,y+1.15,d+.05,M.stone,{col:false})}
  for(const[x,z]of[[-305.2,11],[-305.2,-11],[-291,-11]])box(x-.5,y,z-.5,x+.5,y+1.6,z+.5,M.brick);
  // planters, a little lemon tree, the bench, a bistro set, string lights, the water tank, an aerial, the bakehouse skylight
  for(const[x0,z0,x1,z1]of[[-304,11,-296,11.7],[-291.7,-6,-291,6]]){box(x0,y,z0,x1,y+.5,z1,MT.woodDark);for(let i=0;i<Math.floor(Math.max(x1-x0,z1-z0));i++){const px=x1-x0>1?x0+.5+i:x0+.35,pz=x1-x0>1?z0+.35:z0+.5+i;card(px,y+.5,pz,.7,.6,i*.7,MT.leaves)}}
  plant(-295,9.5,1.3,y);box(-300.5,y,-1,-297.5,y+.45,-.4,MT.woodDark);box(-300.5,y+.45,-1,-297.5,y+.9,-.9,MT.woodDark,{col:false});
  table(-295.5,2,.8,.8,MT.plain('#2a2a30'),.74,y);chair(-296.2,2,'e',MT.plain('#24493a'),y);chair(-294.8,2,'w',MT.plain('#24493a'),y);mug(-295.6,y+.74,2.1,'#f4efe6');
  for(const[x,z]of[[-304.5,10],[-291.8,10],[-291.8,-4],[-304.5,-4]])box(x-.04,y,z-.04,x+.04,y+2.6,z+.04,MT.plain('#2a2a30'),{col:false});
  for(const[a,b]of[[[-304.5,10],[-291.8,10]],[[-291.8,10],[-291.8,-4]],[[-291.8,-4],[-304.5,-4]],[[-304.5,-4],[-304.5,10]]])for(let i=1;i<10;i++){const t=i/10,x=a[0]+(b[0]-a[0])*t,z=a[1]+(b[1]-a[1])*t,sag=Math.sin(t*Math.PI)*.35;box(x-.04,y+2.5-sag,z-.04,x+.04,y+2.58-sag,z+.04,MT.glow('#ffd98a',1.2),{col:false})}
  addLight(-298,y+2.2,3,[1,.85,.6],7,.35);
  box(-304.5,y,-10.5,-302.5,y+1.8,-8.5,MT.plain('#5a6a7a'));box(-301,y,-11,-299.4,y+1,-9.8,MT.plain('#9aa0aa'));box(-300.9,y+.2,-9.79,-299.5,y+.9,-9.78,MT.plain('#2a2a30'),{col:false});
  box(-292,y,-9.6,-291.94,y+3.4,-9.54,MT.metal,{col:false});box(-292.6,y+3.2,-9.6,-291.4,y+3.24,-9.54,MT.metal,{col:false});
  box(-302,y,-7,-298,y+.5,-3.5,MT.plain('#4a4a52'));box(-301.9,y+.5,-6.9,-298.1,y+.9,-3.6,MT.glass,{col:false});
  // a corner nobody uses: the washing line
  box(-305.6,y,-2,-305.5,y+1.8,-1.9,MT.metal,{col:false});box(-305.6,y,4,-305.5,y+1.8,4.1,MT.metal,{col:false});box(-305.56,y+1.78,-1.9,-305.54,y+1.8,4,MT.plain('#e9e3da'),{col:false});
  for(const[z,c]of[[-1,'#ff5d73'],[.2,'#e9e3da'],[1.6,'#7cc4ff'],[2.8,'#2a2a30']])box(-305.6,y+1.2,z,-305.5,y+1.78,z+.6,MT.fabric(c),{col:false});
  rm(SXE,HZ0,HX1,HZ1,y,0,M.deck,'Roof terrace','#3a4a3a');
 }

 /* ================= OUTSIDE: Linden Street, Mill Lane, Linden Square, the backs of Albion Road, the city ================= */
 G.lmK=.32; // scenery gets lightmap texels too, but at a third of the density of the rooms
 {const pav=MT.pavers,road=MT.road,kerb=M.stone;
  // pavements and roads (the building sits on the corner)
  floorQ(-372,HZ1+.25,-286,16,-.12,pav);floorQ(-290+.2,-90,-286,HZ1+.25,-.12,pav);floorQ(-372,16,-232,24,-.27,road);floorQ(-286,-90,-278,16,-.27,road);
  floorQ(-372,24,-232,27.5,-.12,pav);floorQ(-278,-90,-274,24,-.12,pav);floorQ(-372,-90,HX0,HZ0-.2,-.12,MT.concrete);
  box(-372,-.27,15.85,-286,-.12,16,kerb,{col:false});box(-286.15,-.27,-90,-286,-.12,16,kerb,{col:false});box(-372,-.27,24,-232,-.12,24.15,kerb,{col:false});floorQ(HX0,-20,HX1,HZ0-.2,-.12,MT.concrete);floorQ(HX0,-90,-289.8,-20.25,-.12,MT.concrete);box(-278,-.27,-90,-277.85,-.12,24,kerb,{col:false});
  for(let x=-368;x<-236;x+=6)box(x,-.27,19.9,x+3,-.265,20.1,MT.plain('#f4efe6'),{col:false});for(let z=-86;z<14;z+=6)box(-282.1,-.27,z,-281.9,-.265,z+3,MT.plain('#f4efe6'),{col:false});
  for(let z=16.4;z<23.6;z+=1)box(-306,-.27,z,-302.4,-.265,z+.5,MT.plain('#f4efe6'),{col:false});for(const[x,z]of[[-306.5,15.6],[-301.9,15.6],[-306.5,24.4],[-301.9,24.4]])box(x-.06,-.12,z-.06,x+.06,2.4,z+.06,MT.plain('#2a2a30'),{col:false}),box(x-.2,2.4,z-.2,x+.2,2.8,z+.2,MT.glow('#ffb347',1.2),{col:false,b:1});
  // street furniture: lamps (still on at 7am), trees in grates, a bus stop, a post box, bins, bollards, bikes
  for(const x of[-330,-310,-296,-270,-250])lamp(x,15.4,-.12,'#ffd9a0');for(const z of[-40,-20])lamp(-286.6,z,-.12,'#ffd9a0');
  for(const x of[-322,-300,-262])tree(x,25.5,-.12);for(const z of[-30,-10])tree(-275.8,z,-.12);
  box(-320,-.12,14,-316,2.5,14.1,MT.glass,{col:false});box(-320,2.5,13.4,-316,2.6,15,MT.plain('#2a2a30'),{col:false});panel(-318,1,14.11,3.6,1.3,'s',MT.lumenbanner);box(-319.8,-.12,13.6,-316.2,.45,13.9,MT.plain('#2a2a30'),{col:false});
  box(-289,-.12,14,-288.5,1.3,14.5,MT.gloss('#c0304a'));box(-289.05,1.3,13.95,-288.45,1.38,14.55,MT.gloss('#a02838'),{col:false});
  for(const z of[-20,-15,-14])box(-288.8,-.12,z,-288,1.05,z+.7,MT.plain('#2a4a3a'));for(const x of[-287.2,-286.6])for(const z of[14.8,13.6])box(x-.06,-.12,z-.06,x+.06,.9,z+.06,MT.plain('#2a2a30'),{col:false});
  box(-312,-.12,13.2,-311.95,.9,15,MT.metal,{col:false});box(-312.1,0,13.4,-311.85,.9,14.8,MT.plain('#3a5a8a'),{col:false});
  box(-305.5,-.12,13.1,-305,.95,13.9,MT.plain('#24493a'));panel(-305.25,.1,13.91,.45,.75,'s',sign('FRESH ROLLS','#f4efe6','#24493a',128,192));
  // parked cars and a van
  car(-326,22,'x','#7cc4ff');car(-336,22,'x','#f4efe6');car(-260,18,'x','#c0304a');car(-280.2,-12,'z','#2a2a30');car(-280.2,-24,'z','#ffd166',{taxi:1});
  box(-352,-.27,17,-345,2.6,19.3,MT.plain('#f4f4f8'));box(-345,-.27,17.2,-343.4,1.9,19.1,MT.plain('#f4f4f8'));box(-344.95,1,17.4,-344.9,1.8,19,MT.gloss('#2a3444'),{col:false});panel(-348.5,.9,19.31,5,1.1,'s',sign('WARBURTON & SONS · FLOUR','#24493a','#f4f4f8',512,96));
  // the terrace across Linden Street: shops below, sash windows above, chimneys, all different
  const row=[[-372,-356,15,'facYellow','LAUNDERETTE','#7cc4ff'],[-356,-342,12.5,'facBrick','MIGHTY KEBAB','#ff5d73'],[-342,-326,17,'facRender','LINDEN PHARMACY','#8affc1'],[-326,-312,13.5,'facBrick','BOOKS & ZINES','#ffd166'],
   [-312,-298,15,'facGrey','DANNY\'S BARBERS','#c9b6ff'],[-298,-280,12.5,'facYellow','CORNER SHOP · OPEN 24H','#ffb347'],[-280,-258,18,'facRender','THE CROWN','#e9c46a'],[-258,-240,14,'facBrick','FLOWERS','#ff8fc8']];
  for(const[x0,x1,h,ft,nm,col]of row){const z0=27.5,z1=40;box(x0,-.12,z0,x1,h,z1,{side:mt(ft,0,.09,0,{r:.85}),top:M.lead});box(x0-.05,h-.4,z0-.3,x1+.05,h,z0,M.stone,{col:false});
   box(x0+.3,-.12,z0-.05,x1-.3,3.4,z0,MT.plain('#2a2a30'),{col:false});panel((x0+x1)/2,.4,z0-.06,x1-x0-1.4,2.3,'n',mt('shopwin',0,1,1,{k:.7}));panel((x0+x1)/2,2.75,z0-.07,x1-x0-1,.6,'n',sign(nm,col,'#1b1026',512,72));
   for(let k=0;k<2;k++){const cx=x0+3+k*(x1-x0-6);box(cx-.5,h,z0+3,cx+.5,h+1.6,z0+4,M.brick,{col:false});for(let p=0;p<3;p++)box(cx-.4+p*.3,h+1.6,z0+3.3,cx-.25+p*.3,h+1.9,z0+3.5,MT.plain('#b0603a'),{col:false})}}
  // the next-door launderette, attached to Proof, and the one past it
  for(const[x0,x1,h,ft,nm,col]of[[-330,-310.2,10.3,'facBrick','SUDS · SELF-SERVICE LAUNDRY','#7cc4ff'],[-352,-330,13.5,'facRender','KAPOOR & CO · NEWSAGENT','#ffd166']]){box(x0,-.12,HZ0,x1,h,HZ1,{side:mt(ft,0,.09,0,{r:.85}),top:M.lead});box(x0-.05,h-.3,HZ1,x1,h,HZ1+.3,M.stone,{col:false});
   panel((x0+x1)/2,.4,HZ1+.06,x1-x0-1.6,2.4,'s',mt('shopwin',0,1,1,{k:.7}));panel((x0+x1)/2,2.95,HZ1+.07,x1-x0-1.2,.6,'s',sign(nm,col,'#1b1026',512,72));
   for(let k=0;k<3;k++)box(x0+2+k*6,h,-3,x0+3.2+k*6,h+1.4,-2,M.brick,{col:false});box(x0+3,h,4,x0+5,h+.6,6,MT.glass,{col:false})}
  // Linden Square, across Mill Lane: grass, paths, plane trees, benches, a drinking fountain, railings
  floorQ(-274,-60,-226,24,-.12,MT.grass);floorQ(-252,-60,-248,24,-.11,pav);floorQ(-274,-18,-226,-14,-.11,pav);
  for(let z=-58;z<23;z+=2)box(-273.9,-.12,z,-273.85,1,z+.04,MT.plain('#1a2a20'),{col:false});box(-273.92,.95,-60,-273.83,1,23.5,MT.plain('#1a2a20'),{col:false});
  for(const[x,z]of[[-266,-48],[-266,-30],[-266,-4],[-266,14],[-238,-44],[-238,-26],[-236,4],[-238,20],[-258,8],[-244,-52]])tree(x,z,-.12);
  for(const[x,z]of[[-253.6,-6],[-253.6,8],[-246.4,-30]]){box(x-.25,-.12,z-1,x+.25,.42,z+1,MT.woodDark,{col:false});box(x+(x<-250?-.25:.2),.42,z-1,x+(x<-250?-.2:.25),.85,z+1,MT.woodDark,{col:false})}
  box(-250.5,-.12,-16.5,-249.5,1,-15.5,M.stone,{col:false});box(-250.3,1,-16.3,-249.7,1.1,-15.7,MT.chrome,{col:false});
  // the tall block beyond the square, far enough that its shadow stops short of Proof
  box(-226,-.12,-70,-206,26,30,{side:mt('facTall',0,.08,0,{r:.85}),top:M.lead});box(-226,-.12,-120,-200,32,-70,{side:mt('facGrey',0,.06,0,{r:.85}),top:M.lead});
  // the backs of Albion Road: yards, fences, pitched slate roofs and chimney stacks
  for(let i=0;i<7;i++){const x0=-352+i*12,x1=x0+11.6,z0=-46,z1=-34,h=7.5+(i%3)*.6;box(x0,-.12,z0,x1,h,z1,{side:mt(i%2?'facBrick':'facYellow',0,.12,0,{r:.85}),top:M.slate});
   const r=M.slate;quad([x0,h,z1],[x1,h,z1],[x1,h+3,(z0+z1)/2],[x0,h+3,(z0+z1)/2],r,6,2);quad([x1,h,z0],[x0,h,z0],[x0,h+3,(z0+z1)/2],[x1,h+3,(z0+z1)/2],r,6,2);
   quad([x0,h,z0],[x0,h,z1],[x0,h+3,(z0+z1)/2],[x0,h+3,(z0+z1)/2],M.brick,1,1);quad([x1,h,z1],[x1,h,z0],[x1,h+3,(z0+z1)/2],[x1,h+3,(z0+z1)/2],M.brick,1,1);
   box(x1-1.2,h+1.4,(z0+z1)/2-.6,x1-.2,h+4.4,(z0+z1)/2+.6,M.brick,{col:false});box(x0+2,-.12,z1,x0+2.1,1.8,-14,MT.woodDark,{col:false});box(x0,-.12,-14.1,x1,1.8,-14,MT.woodDark,{col:false})}
  for(const[x,z]of[[-320,-24],[-296,-26],[-336,-22]])tree(x,z,-.12);
  // Proof's own yard: brick walls, bins, crates, Ellie's bike
  box(HX0,-.12,-20,HX0+.25,2,HZ0,M.brick,{col:false});box(HX0,-.12,-20.25,HX1,2,-20,M.brick,{col:false});box(HX1-.25,-.12,-20,HX1,2,-14,M.brick,{col:false});
  for(const x of[-308,-306.8])box(x,-.12,-19.6,x+1,1.2,-18.8,MT.plain('#2a4a3a'));for(let i=0;i<4;i++)box(-302+(i%2)*.7,-.12+Math.floor(i/2)*.4,-19.7,-301.4+(i%2)*.7,.28+Math.floor(i/2)*.4,-19.1,MT.plain('#c9a46a'));
  box(-296,.3,-18.5,-294.4,.35,-18.45,MT.gloss('#24493a'),{col:false});for(const x of[-295.9,-294.5])box(x-.3,-.12,-18.52,x+.3,.48,-18.43,MT.plain('#1a1a20'),{col:false});
  // the railway viaduct across the backs, arches and a train sitting at the signal
  for(let i=0;i<14;i++){const x0=-380+i*12;box(x0,-.12,-72,x0+2,9,-64,M.brick,{col:false})}box(-380,9,-72,-212,10.4,-64,M.brick,{col:false});box(-380,10.4,-71.8,-212,11.4,-71.6,M.stone,{col:false});box(-380,10.4,-64.4,-212,11.4,-64.2,M.stone,{col:false});
  box(-340,10.4,-69.5,-276,14.2,-66.5,{side:MT.trainside,top:MT.plain('#8a8a94')},{col:false});
  // the city: a haze of towers all round (unlit by the bake, they sit in the fog)
  G.lmK=1;
  {const far=mt('facTall',0,.05,1,{k:.75}),far2=mt('facGrey',0,.05,1,{k:.7});for(let i=0;i<36;i++){const a=i/36*Math.PI*2+rnd()*.12,R=150+rnd()*110,x=-300+Math.cos(a)*R,z=Math.sin(a)*R,w=10+rnd()*16,h=24+rnd()*70;box(x-w/2,-.12,z-w/2,x+w/2,h,z+w/2,{side:i%2?far:far2,top:MT.plain('#4a4a5a')},{col:false})}
   const spire=mt('concrete','#c9c2b4',.2,1,{k:.8});box(-262,-.12,-128,-254,34,-120,spire,{col:false});for(let k=0;k<6;k++){const s=3.6-k*.6;box(-258-s,34+k*3,-124-s,-258+s,37+k*3,-124+s,spire,{col:false})}}
 }
 G.lmK=1;

 /* ================= lights, areas, map ================= */
 addLight(-298,2.6,8,[1,.85,.65],8,.55);addLight(-308,2.4,8,[1,.88,.7],6,.55);
 const A=(k,n,r,sp,o)=>area(k,n,'home',r,sp,o&&o.bg||'flat',o);
 A('bakery','Proof bakery',[SXE,2,HX1,HZ1],[-297.5,9.6,Math.PI,0],{bg:'bakery',y0:-1,y1:3.5});
 A('bakehouse','Bakehouse',[SXE,HZ0,HX1,2],[-299,0,Math.PI,0],{bg:'bakery',y0:-1,y1:3.5});
 A('stairs','Stairs',[HX0,-.4,SXE,HZ1],[-308,9,Math.PI,0],{y0:-1,y1:17,hide:1});
 A('flat','Flat 1A',[SXE,HZ0,HX1,HZ1],[-296.5,6.5,-Math.PI/2,HY[1]],{y0:3.5,y1:7});
 for(const[k,n,r]of[['livingroom','Living room',[-303,3,HX1,HZ1]],['kitchen','Kitchen',[-297,-4,HX1,3]],['bathroom','Bathroom',[-303,-1,-297,3]],['boxroom','Box room',[-303,-4,-297,-1]],['bedroom','Bedroom',[-303,HZ0,HX1,-4]]])
  A(k,n,r,[(r[0]+r[2])/2,(r[1]+r[3])/2,0,HY[1]],{y0:3.5,y1:7,sub:1});
 A('hometerrace','Roof terrace',[SXE,HZ0,HX1,HZ1],[-298,6,Math.PI,HY[4]],{y0:13,y1:18});
}
