/* ============ THE SITE: the Halcyon Hotel (west) + the CTRL+ALT+CON convention centre ============ */
/* x grows east, z grows south. Ground y=0, Level 1 y=5.5, Level 2 y=11, basement y=-5, con roof y=16.5.
   HOTEL (x -264..-128): its own limestone-and-brass building across a lane from the con, with a garden in front of
     its east glass: the grand atrium lobby (reception, six lifts, the café, a sweeping staircase), the Promenade along
     its north side, the Bar with its terrace in the lane, the Grill, the luggage room and back stairs; Level 1:
     mezzanine, the Grand Ballroom, meeting rooms, the Lumen Lounge; Level 2: the pool hall, spa and gym. The tower
     rises behind it. The Link (x -128..-110), a glazed two-storey bridge building, joins it to the con's Foyer.
   CON (x -110..196): the Foyer (a three-storey glass atrium: registration, the Lumen mega-booth, escalators) and
     Hall C off its north side open onto the Ring, a 14 m concourse round an open courtyard, double height with a balcony at Level 1 and its own
     floor at Level 2. Off the Ring: Hall A (the arena: 110 x 72 m, a seating bowl that climbs from the floor to
     Level 2), Hall B, the Expo Hall, Village Row (two storeys of villages and workshops), the food court, the cosplay
     hall and the chill-out. Behind everything: backstage, the staff corridor, the MDF, security, the service corridor,
     the kitchen and the loading dock. Below: the car park, the NOC, the plant room and laundry, the service tunnel. */
const L1=5.5,L2=11,BY=-5,RFY=16.5,HAR=26,HX=-64,SITE=[-300,-175,300,135];
function siteTextures(){
 tex('terrazzo',512,512,(c,w,h)=>{c.fillStyle='#bdb5aa';c.fillRect(0,0,w,h);blotch(c,w,h,20,'#b2aa9e',.5,30,90);
  for(let i=0;i<2600;i++){const r=rnd(),col=r<.35?'#8a8478':r<.55?'#b8ab96':r<.7?'#ece6dc':r<.8?'#6a6a74':r<.9?'#c98a6a':'#5a7a8a';c.fillStyle=col;c.globalAlpha=.55+rnd()*.4;c.beginPath();c.ellipse(rnd()*w,rnd()*h,1+rnd()*3.5,1+rnd()*2.5,rnd()*3,0,7);c.fill()}
  c.globalAlpha=1;c.fillStyle='#a8a090';c.fillRect(0,0,w,2);c.fillRect(0,0,2,h);grain(c,w,h,8)});
 tex('limestone',256,256,(c,w,h)=>{c.fillStyle='#d8cdb8';c.fillRect(0,0,w,h);blotch(c,w,h,26,'#cbbfa6',.5,14,60);noise(c,w,h,1400,'#8a7a60',.12);
  for(let y=0;y<4;y++){c.fillStyle='#a8987c';c.fillRect(0,y*64,w,2);const o=(y%2)*64;for(let x=0;x<3;x++)c.fillRect(o+x*128-1,y*64,2,64)}grain(c,w,h,8)});
 tex('woodPanel',256,256,(c,w,h)=>{for(let i=0;i<8;i++){const v=rnd()*14;c.fillStyle=`rgb(${92+v|0},${58+v*.6|0},${36+v*.4|0})`;c.fillRect(i*32,0,32,h);
   for(let k=0;k<10;k++){c.strokeStyle=`rgba(40,20,8,${.1+rnd()*.12})`;c.beginPath();const x=i*32+2+rnd()*28;c.moveTo(x,0);c.bezierCurveTo(x+(rnd()-.5)*5,h*.3,x+(rnd()-.5)*5,h*.7,x,h);c.stroke()}
   c.fillStyle='#1a0e0699';c.fillRect(i*32+30,0,2,h);c.fillStyle='#ffffff12';c.fillRect(i*32,0,1,h)}grain(c,w,h,8)});
 tex('coffer',256,256,(c,w,h)=>{c.fillStyle='#efe6d6';c.fillRect(0,0,w,h);for(let y=0;y<2;y++)for(let x=0;x<2;x++){const X=x*128,Y=y*128;c.fillStyle='#e2d6c0';c.fillRect(X+12,Y+12,104,104);
   const g=c.createLinearGradient(X+12,Y+12,X+116,Y+116);g.addColorStop(0,'#d4c6ac');g.addColorStop(1,'#f4ecde');c.fillStyle=g;c.fillRect(X+22,Y+22,84,84);c.fillStyle='#f8f2e8';c.fillRect(X+30,Y+30,68,68);c.strokeStyle='#c9a46a';c.lineWidth=2;c.strokeRect(X+30,Y+30,68,68)}grain(c,w,h,5)});
 tex('acoustic',256,256,(c,w,h)=>{c.fillStyle='#2a2234';c.fillRect(0,0,w,h);for(let x=0;x<4;x++){const g=c.createLinearGradient(x*64,0,x*64+64,0);g.addColorStop(0,'#241c2e');g.addColorStop(.5,'#342a40');g.addColorStop(1,'#241c2e');c.fillStyle=g;c.fillRect(x*64+3,3,58,h-6)}
  noise(c,w,h,3000,'#000',.18);c.fillStyle='#0e0a14';for(let x=0;x<=4;x++)c.fillRect(x*64-2,0,4,h);grain(c,w,h,8)});
 tex('expoCarpet',256,256,(c,w,h)=>{c.fillStyle='#24203a';c.fillRect(0,0,w,h);noise(c,w,h,5000,'#3a3454',.4);noise(c,w,h,3000,'#14121e',.4);grain(c,w,h,12)});
 tex('aisle',256,256,(c,w,h)=>{c.fillStyle='#4a1424';c.fillRect(0,0,w,h);noise(c,w,h,5000,'#5e1c30',.4);noise(c,w,h,3000,'#2a0a14',.4);c.fillStyle='#ffd16640';c.fillRect(0,0,w,4);c.fillRect(0,h-4,w,4);grain(c,w,h,12)});
 tex('deck',256,256,(c,w,h)=>{c.fillStyle='#3a3a44';c.fillRect(0,0,w,h);for(let i=0;i<16;i++){const g=c.createLinearGradient(i*16,0,i*16+16,0);g.addColorStop(0,'#2a2a32');g.addColorStop(.5,'#4a4a56');g.addColorStop(1,'#2a2a32');c.fillStyle=g;c.fillRect(i*16,0,16,h)}grain(c,w,h,8)});
 tex('rubber',128,128,(c,w,h)=>{c.fillStyle='#2a2c32';c.fillRect(0,0,w,h);noise(c,w,h,1800,'#5a7a9a',.35);noise(c,w,h,900,'#8a8a94',.2);grain(c,w,h,10)});
 tex('mosaic',256,256,(c,w,h)=>{for(let y=0;y<16;y++)for(let x=0;x<16;x++){const v=rnd();c.fillStyle=v<.5?'#3a8aaa':v<.8?'#4aa0c0':v<.95?'#2a6a8a':'#e9f4f8';c.fillRect(x*16+1,y*16+1,14,14)}c.fillStyle='#d8e8ee';for(let i=0;i<=16;i++){c.fillRect(i*16-1,0,2,h);c.fillRect(0,i*16-1,w,2)}});
 tex('poolTile',256,256,(c,w,h)=>{c.fillStyle='#e9eef0';c.fillRect(0,0,w,h);for(let y=0;y<8;y++)for(let x=0;x<8;x++){const v=226+rnd()*14|0;c.fillStyle=`rgb(${v},${v+4},${v+6})`;c.fillRect(x*32+1,y*32+1,30,30)}c.fillStyle='#b8c4c8';for(let i=0;i<=8;i++){c.fillRect(i*32-1,0,2,h);c.fillRect(0,i*32-1,w,2)}grain(c,w,h,5)});
 tex('parkFloor',256,256,(c,w,h)=>{c.fillStyle='#5a5a60';c.fillRect(0,0,w,h);blotch(c,w,h,30,'#4a4a50',.5,10,50);blotch(c,w,h,10,'#2a2a30',.35,6,26);noise(c,w,h,1500,'#000',.12);grain(c,w,h,16)});
 tex('timber',256,256,(c,w,h)=>{for(let i=0;i<8;i++){const v=rnd()*18;c.fillStyle=`rgb(${120+v|0},${88+v|0},${60+v*.6|0})`;c.fillRect(0,i*32,w,30);c.fillStyle='#2a1a10';c.fillRect(0,i*32+30,w,2);
   for(let k=0;k<8;k++){c.strokeStyle='rgba(60,30,10,.15)';c.beginPath();const y=i*32+3+rnd()*24;c.moveTo(0,y);c.lineTo(w,y+(rnd()-.5)*4);c.stroke()}const j=(i*71)%w;c.fillStyle='#2a1a10';c.fillRect(j,i*32,2,30)}grain(c,w,h,10)});
 tex('velvet',128,256,(c,w,h)=>{for(let x=0;x<w;x++){const t=Math.sin(x/w*Math.PI*6)*.5+.5;c.fillStyle=`rgb(${70+t*60|0},${12+t*14|0},${30+t*20|0})`;c.fillRect(x,0,1,h)}grain(c,w,h,10)});
 tex('drape',128,256,(c,w,h)=>{for(let x=0;x<w;x++){const t=Math.sin(x/w*Math.PI*8)*.5+.5;c.fillStyle=`rgb(${14+t*20|0},${12+t*16|0},${22+t*26|0})`;c.fillRect(x,0,1,h)}grain(c,w,h,8)});
 tex('wallpaper',256,256,(c,w,h)=>{c.fillStyle='#3a2a2e';c.fillRect(0,0,w,h);c.strokeStyle='#c9a46a40';c.lineWidth=2;for(let y=0;y<4;y++)for(let x=0;x<4;x++){const X=x*64+(y%2)*32,Y=y*64;c.beginPath();c.ellipse(X+32,Y+32,14,24,0,0,7);c.stroke();c.beginPath();c.moveTo(X+32,Y+4);c.lineTo(X+32,Y+60);c.stroke();
   c.beginPath();c.arc(X+32,Y+32,4,0,7);c.fillStyle='#c9a46a40';c.fill()}grain(c,w,h,8)});
 tex('marbleDark',512,512,(c,w,h)=>{c.fillStyle='#1e1a22';c.fillRect(0,0,w,h);blotch(c,w,h,30,'#2a2430',.6,30,110);
  for(let i=0;i<16;i++){c.strokeStyle=rnd()<.7?'#d8cfc2':'#c9a46a';c.globalAlpha=.12+rnd()*.28;c.lineWidth=.6+rnd()*1.8;c.beginPath();let x=rnd()*w,y=-10;c.moveTo(x,y);while(y<h+10){x+=(rnd()-.5)*44;y+=8+rnd()*22;c.lineTo(x,y)}c.stroke()}c.globalAlpha=1;grain(c,w,h,8)});
 tex('hotelFac',256,256,(c,w,h)=>{c.fillStyle='#b8ab92';c.fillRect(0,0,w,h);blotch(c,w,h,16,'#a89a80',.4,10,40);for(let y=0;y<4;y++)for(let x=0;x<4;x++){const X=x*64+14,Y=y*64+10,on=rnd();
   c.fillStyle='#4a3e30';c.fillRect(X-3,Y-3,42,48);c.fillStyle=on<.45?'#ffd49a':on<.55?'#ffe8c8':on<.62?'#9fc4e0':'#1c1a24';c.fillRect(X,Y,36,42);if(on<.62){c.fillStyle='#ffffff28';c.fillRect(X,Y,36,6)}c.fillStyle='#4a3e30';c.fillRect(X+17,Y,2,42)}grain(c,w,h,8)});
 // the con's upper walls: big dark composite panels, a thin magenta light line every storey, no windows
 tex('conFac',256,256,(c,w,h)=>{c.fillStyle='#1a1a26';c.fillRect(0,0,w,h);for(let y=0;y<2;y++)for(let x=0;x<2;x++){const v=rnd()*8;c.fillStyle=`rgb(${30+v|0},${30+v|0},${44+v|0})`;c.fillRect(x*128+3,y*128+3,122,122)}
  c.fillStyle='#0c0c14';c.fillRect(0,0,w,3);c.fillRect(0,0,3,h);c.fillRect(0,127,w,3);c.fillRect(127,0,3,h);c.fillStyle='#ff5d7390';c.fillRect(0,236,w,4);grain(c,w,h,6)});
 tex('cladding',256,256,(c,w,h)=>{c.fillStyle='#3a3c48';c.fillRect(0,0,w,h);for(let y=0;y<4;y++)for(let x=0;x<2;x++){const v=rnd()*10;c.fillStyle=`rgb(${62+v|0},${64+v|0},${76+v|0})`;c.fillRect(x*128+2,y*64+2,124,60)}grain(c,w,h,6)});
 tex('screenBig',1024,512,(c,w,h)=>{const g=c.createRadialGradient(w/2,h/2,20,w/2,h/2,w*.6);g.addColorStop(0,'#2a1a5a');g.addColorStop(.6,'#0d0826');g.addColorStop(1,'#04030c');c.fillStyle=g;c.fillRect(0,0,w,h);
  c.strokeStyle='#ff5d7340';c.lineWidth=2;for(let i=0;i<14;i++){c.beginPath();c.moveTo(0,h*.7+i*14);c.lineTo(w,h*.55+i*22);c.stroke()}
  c.fillStyle='#fff';c.textAlign='center';c.font='bold 120px monospace';c.fillText('CTRL+ALT+CON',w/2,h*.46);c.fillStyle='#ff5d73';c.font='40px sans-serif';c.fillText('#20  ·  be excellent to each other',w/2,h*.62);
  c.fillStyle='#8affc1';c.font='28px monospace';c.fillText('MAIN STAGE · HALL A',w/2,h*.78)});
 tex('screenSide',512,512,(c,w,h)=>{c.fillStyle='#07060f';c.fillRect(0,0,w,h);c.fillStyle='#ffd166';c.textAlign='center';c.font='bold 54px monospace';c.fillText('NOW',w/2,110);c.fillStyle='#fff';c.font='bold 40px sans-serif';
  ['OPENING','CEREMONY','& KEYNOTE'].forEach((t,i)=>c.fillText(t,w/2,200+i*56));c.fillStyle='#ff5d73';c.font='30px monospace';c.fillText('NEXT: CTF FINALS',w/2,420)});
 tex('expoBanner',512,128,(c,w,h)=>{c.fillStyle='#1b1026';c.fillRect(0,0,w,h);c.fillStyle='#ffd166';c.font='bold 52px monospace';c.textAlign='center';c.fillText('EXPO HALL',w/2,68);c.fillStyle='#8affc1';c.font='22px sans-serif';c.fillText('120 EXHIBITORS · CON STORE · DEMO STAGE',w/2,104)});
 tex('carpark',256,256,(c,w,h)=>{c.fillStyle='#4a4a50';c.fillRect(0,0,w,h);blotch(c,w,h,24,'#3a3a40',.5,10,40);noise(c,w,h,1200,'#000',.15);grain(c,w,h,14)});
 tex('hazard',128,32,(c,w,h)=>{c.fillStyle='#ffd166';c.fillRect(0,0,w,h);c.fillStyle='#1b1026';for(let i=-2;i<10;i++){c.beginPath();c.moveTo(i*16,0);c.lineTo(i*16+10,0);c.lineTo(i*16+2,h);c.lineTo(i*16-8,h);c.fill()}});
 tex('mapBoard',512,384,(c,w,h)=>{c.fillStyle='#1b1026';c.fillRect(0,0,w,h);c.fillStyle='#ffd166';c.font='bold 28px monospace';c.fillText('YOU ARE HERE',20,40);
  const R=(x,y,ww,hh,col,t)=>{c.fillStyle=col;c.fillRect(x,y,ww,hh);c.fillStyle='#1b1026';c.font='bold 13px sans-serif';c.fillText(t,x+4,y+16)};
  R(150,60,150,90,'#ff5d73','HALL A');R(310,60,80,70,'#7cc4ff','HALL B');R(170,170,120,90,'#8affc1','COURTYARD');R(310,160,90,110,'#ffd166','EXPO');R(410,90,80,220,'#c9b6ff','VILLAGES');R(30,160,120,140,'#ffe0a0','HOTEL');R(150,280,130,50,'#ffb347','FOOD · COSPLAY');
  c.fillStyle='#ff5d73';c.beginPath();c.arc(160,300,9,0,7);c.fill()});
 tex('scoreBig',512,256,(c,w,h)=>{c.fillStyle='#04120c';c.fillRect(0,0,w,h);c.fillStyle='#8affc1';c.font='bold 30px monospace';c.fillText('CTF · LIVE SCOREBOARD',18,40);c.font='24px monospace';
  ['1  r00tbeer        4200','2  null_pointers   3900','3  KERNEL (ada)    3650','4  baby_shark      2100','5  segfault_sues   1900','6  dave_hax          40'].forEach((t,i)=>{c.fillStyle=i===2?'#ffd166':i===5?'#ff5d73':'#8affc1';c.fillText(t,24,84+i*30)})});
 tex('menuBoard',384,256,(c,w,h)=>{c.fillStyle='#1a1410';c.fillRect(0,0,w,h);c.strokeStyle='#c9a46a';c.lineWidth=4;c.strokeRect(6,6,w-12,h-12);c.fillStyle='#ffe0a0';c.font='bold 26px serif';c.textAlign='center';c.fillText('THE HALCYON GRILL',w/2,44);
  c.font='17px serif';c.fillStyle='#f4ecde';['Steak frites ........ 24','Roast cod ........... 21','Mushroom risotto .... 17','Halcyon burger ...... 16','Sticky toffee pudding  8'].forEach((t,i)=>c.fillText(t,w/2,90+i*30))});
 tex('pressWall',256,256,(c,w,h)=>{c.fillStyle='#f6eefc';c.fillRect(0,0,w,h);c.font='bold 22px monospace';for(let y=0;y<4;y++)for(let x=0;x<2;x++){c.fillStyle=(x+y)%2?'#ff5d73':'#1b1026';c.fillText((x+y)%2?'C+A+C':'#20',x*128+18,y*64+40)}});
 tex('bookshelf',256,128,(c,w,h)=>{c.fillStyle='#3a2418';c.fillRect(0,0,w,h);for(let r=0;r<3;r++){c.fillStyle='#2a180e';c.fillRect(0,r*42+38,w,4);let x=4;while(x<w-8){const bw=5+rnd()*9;c.fillStyle=['#8a3a3a','#2a4a7a','#c9a46a','#3a6a4a','#e9e3da','#5a3a6a','#1b1026'][Math.floor(rnd()*7)];c.fillRect(x,r*42+8+rnd()*8,bw,30-rnd()*6);x+=bw+1}}});
 tex('locker2',256,256,(c,w,h)=>{c.fillStyle='#5a6070';c.fillRect(0,0,w,h);for(let x=0;x<4;x++){c.fillStyle='#6a7286';c.fillRect(x*64+3,3,58,h-6);c.fillStyle='#3a404e';for(let k=0;k<4;k++)c.fillRect(x*64+14,14+k*6,36,2);c.fillStyle='#c8ccd6';c.fillRect(x*64+50,h/2,5,16)}grain(c,w,h,6)});
}
/* ---------------- builder helpers for the site ---------------- */
/* a floor with rectangular holes (atria, stairwells): the rest is cut into rectangles along every hole edge.
   Emits the walkable surface, the top face, and (with th) the slab's underside and its exposed edges */
function rectsMinus(x0,z0,x1,z1,holes){const xs=new Set([x0,x1]),zs=new Set([z0,z1]);
 for(const h of holes){if(h[2]<=x0||h[0]>=x1||h[3]<=z0||h[1]>=z1)continue;xs.add(Math.max(x0,h[0]));xs.add(Math.min(x1,h[2]));zs.add(Math.max(z0,h[1]));zs.add(Math.min(z1,h[3]))}
 const X=[...xs].sort((a,b)=>a-b),Z=[...zs].sort((a,b)=>a-b),cells=[];
 for(let i=0;i<X.length-1;i++)for(let j=0;j<Z.length-1;j++){const cx=(X[i]+X[i+1])/2,cz=(Z[j]+Z[j+1])/2;if(holes.some(h=>cx>h[0]&&cx<h[2]&&cz>h[1]&&cz<h[3]))continue;cells.push([X[i],Z[j],X[i+1],Z[j+1]])}
 // merge runs along x so big floors stay a handful of quads
 const out=[];cells.sort((a,b)=>a[1]-b[1]||a[0]-b[0]);for(const c of cells){const p=out.find(o=>o[1]===c[1]&&o[3]===c[3]&&Math.abs(o[2]-c[0])<1e-6);if(p)p[2]=c[2];else out.push(c.slice())}
 const out2=[];out.sort((a,b)=>a[0]-b[0]||a[1]-b[1]);for(const c of out){const p=out2.find(o=>o[0]===c[0]&&o[2]===c[2]&&Math.abs(o[3]-c[1])<1e-6);if(p)p[3]=c[3];else out2.push(c.slice())}
 return out2}
function sFloor(x0,z0,x1,z1,y,m,holes,th,mu){const R=rectsMinus(x0,z0,x1,z1,holes||[]);for(const r of R){floorQ(r[0],r[1],r[2],r[3],y,m);surf(r[0],r[1],r[2],r[3],y);if(th)ceilQ(r[0],r[1],r[2],r[3],y-th,mu||m)}
 if(th){const e=mu||m;for(const h of holes||[]){const a=Math.max(x0,h[0]),b=Math.max(z0,h[1]),c=Math.min(x1,h[2]),d=Math.min(z1,h[3]);if(c<=a||d<=b)continue;
   if(b>z0)quad([a,y-th,b],[c,y-th,b],[c,y,b],[a,y,b],e,1,1);if(d<z1)quad([c,y-th,d],[a,y-th,d],[a,y,d],[c,y,d],e,1,1);if(a>x0)quad([a,y-th,d],[a,y-th,b],[a,y,b],[a,y,d],e,1,1);if(c<x1)quad([c,y-th,b],[c,y-th,d],[c,y,d],[c,y,b],e,1,1)}}}
/* ceiling with holes (no surface) */
function sCeil(x0,z0,x1,z1,y,m,holes){for(const r of rectsMinus(x0,z0,x1,z1,holes||[]))ceilQ(r[0],r[1],r[2],r[3],y,m)}
/* a run of identical lights */
function lightRow(x0,z0,x1,z1,n,y,col,rng,int,w,d){for(let i=0;i<n;i++){const t=n>1?i/(n-1):.5;lightPanel(x0+(x1-x0)*t,y,z0+(z1-z0)*t,w||1.2,d||1.2,col,rng,int)}}
/* a downlight: a small glowing disc flush with the ceiling, and its baked light */
function downl(x,y,z,col,rng,int){box(x-.12,y-.02,z-.12,x+.12,y,z+.12,MT.glow(col||'#ffe8c8',1.4),{col:false,b:1,nt:1});addLight(x,y-.5,z,hx(col||'#ffe8c8'),rng||6,int||.6,1)}
/* a chandelier: tiers of glowing crystal round a brass stem */
function chandelier(x,y,z,r,col,stem){const g=MT.glow(col||'#ffe2b0',1.6),st=stem===undefined?1.2:stem;box(x-.02,y-st,z-.02,x+.02,y,z+.02,MT.brass,{col:false});
 for(let t=0;t<3;t++){const rr=r*(1-t*.28),yy=y-st-t*.45;for(let i=0;i<10;i++){const a=i/10*Math.PI*2+t*.3,px=x+Math.cos(a)*rr,pz=z+Math.sin(a)*rr;box(px-.05,yy-.32,pz-.05,px+.05,yy,pz+.05,g,{col:false,b:1})}
  box(x-rr,yy+.01,z-.03,x+rr,yy+.05,z+.03,MT.brass,{col:false,b:1});box(x-.03,yy+.01,z-rr,x+.03,yy+.05,z+rr,MT.brass,{col:false,b:1})}
 box(x-.18,y-st-1.6,z-.18,x+.18,y-st-1.3,z+.18,g,{col:false,b:1});addLight(x,y-st-1,z,hx(col||'#ffe2b0'),r*7+6,1)}
/* a column: square with a capital and base */
function column(x,z,y0,y1,s,m,cap){box(x-s/2,y0,z-s/2,x+s/2,y1,z+s/2,m);if(cap){box(x-s/2-.08,y1-.3,z-s/2-.08,x+s/2+.08,y1,z+s/2+.08,cap,{col:false});box(x-s/2-.06,y0,z-s/2-.06,x+s/2+.06,y0+.18,z+s/2+.06,cap,{col:false})}}
/* an escalator: a stair with glass balustrades and steel sides, plus the black handrails */
function escalator(x0,z0,x1,z1,ya,yb,dir,o){o=o||{};stairs(x0,z0,x1,z1,ya,yb,dir,MT.metal,{nose:MT.plain('#ffd166'),solid:o.solid});const ax=dir[0],w=ax==='x'?z1-z0:x1-x0;
 if(ax==='z'){for(const x of[x0,x1]){const up=dir[1]==='-';railing(x,up?z1:z0,x,up?z0:z1,ya,{y2:yb,m:MT.plain('#14141a'),h:1})}
  const zs=dir[1]==='-'?[z1,z0]:[z0,z1];
  for(const x of[x0+.06,x1-.06]){const p=[];for(const[zz,yy]of[[zs[0],ya],[zs[1],yb]])p.push([x,yy,zz]);quad([p[0][0],p[0][1]-.6,p[0][2]],[p[1][0],p[1][1]-.6,p[1][2]],[p[1][0],p[1][1]+.95,p[1][2]],[p[0][0],p[0][1]+.95,p[0][2]],MT.glass,1,1)}}
 else{for(const z of[z0,z1]){const up=dir[1]==='-';railing(up?x1:x0,z,up?x0:x1,z,ya,{y2:yb,m:MT.plain('#14141a'),h:1})}}}
/* a run of glazing with a glass door/opening list (just wallLine with glass) */
const gwall=(o,at,a0,a1,y,h,inw)=>wallLine(o,at,a0,a1,y,h,MT.glass,inw);
/* a booth for the expo hall: back wall with graphic, counter, a screen, a banner up high */
function booth(cx,cz,w,d,face,col,name,o){o=o||{};const f={s:1,n:-1}[face]||1,bz=cz-f*d/2,fz=cz+f*d/2,m=MT.plain('#2a2a34');
 box(cx-w/2,0,Math.min(bz,bz-f*.12),cx+w/2,2.8,Math.max(bz,bz-f*.12),m);kOnWall('h',bz,f,cx,w-.2,.3,2.3,signM(name,col,'#1b1026',w-.2,2.3));
 for(const s of[-1,1])box(cx+s*w/2-(s>0?.08:0),0,Math.min(bz,cz),cx+s*w/2+(s<0?.08:0),2.4,Math.max(bz,cz),m);
 const cz2=cz+f*(d/2-.7);box(cx-w*.3,0,cz2-.3,cx+w*.3,1.05,cz2+.3,{side:MT.plain(col),top:MT.plain('#f6eefc')});
 for(let k=0;k<5;k++)box(cx-w*.25+k*w*.12,1.05,cz2-.12,cx-w*.25+k*w*.12+.22,1.18+rnd()*.12,cz2+.12,MT.plain(['#fff','#222',col][k%3]),{col:false});
 box(cx-w/2,2.8,Math.min(bz,cz),cx+w/2,2.95,Math.max(bz,cz),MT.plain(col),{col:false,b:1});
 if(o.screen)kMonitor(cx+w*.32,1.05,cz2,face,o.screen,.7);
 if(!o.nolamp)addLight(cx,3.4,cz+f*.5,hx(col).map(v=>.7+v*.3),7,.55)}
/* ---------------- the whole site ---------------- */
function buildSite(){
 siteTextures();
 Object.assign(MT,{lime:mt('limestone',0,.4,0,{r:.7}),wpan:mt('woodPanel',0,.5,0,{r:.55}),coffer:mt('coffer',0,.25,0,{r:.85}),mdark:mt('marbleDark',0,.25,0,{r:.15}),terr:mt('terrazzo',0,.2,0,{r:.25}),
  wpaper:mt('wallpaper',0,.5,0,{r:.8}),acou:mt('acoustic',0,.4,0,{r:.9}),expo:mt('expoCarpet',0,.3,0,{r:.95}),aisle:mt('aisle',0,.3,0,{r:.95}),deck:mt('deck',0,.25,0,{r:.6,m:.3}),rubber:mt('rubber',0,.5,0,{r:.9}),
  mosaic:mt('mosaic',0,.5,0,{r:.2}),pooltile:mt('poolTile',0,.5,0,{r:.25}),park:mt('parkFloor',0,.2,0,{r:.85}),timber:mt('timber',0,.4,0,{r:.7}),velvet:mt('velvet',0,.5,0,{r:.9}),drape:mt('drape',0,.4,0,{r:.95}),
  hfac:mt('hotelFac',0,.125,1,{k:.5}),cfac:mt('conFac',0,.125,1,{k:.5}),clad:mt('cladding',0,.25,0,{r:.5,m:.3}),screenBig:mt('screenBig',0,1,1,{k:1.35}),screenSide:mt('screenSide',0,1,1,{k:1.3}),
  expoBanner:mt('expoBanner',0,1,1,{k:1.2}),hazard:mt('hazard',0,1,0,{r:.6}),mapBoard:mt('mapBoard',0,1,1,{k:1.1}),scoreBig:mt('scoreBig',0,1,1,{k:1.35}),menuBoard:mt('menuBoard',0,1,1,{k:.9}),
  pressWall:mt('pressWall',0,.5,0,{r:.6}),books:mt('bookshelf',0,1,0,{r:.8}),locker2:mt('locker2',0,.5,0,{r:.5,m:.3}),rugH:mt('carpetHotel','#d8c8b0',.4,0,{r:1})});
 region('con',{fog:[.07,.04,.1],fr:[30,190],lmPages:{high:8,medium:5,low:3},lmCap:9});G.regions.con.amb=[.36,.32,.42];G.regions.con.lk=1.15;
 const Z=zone,Y0=-.3;
 // outdoors: the plaza and the boulevard, the hotel garden and the lane between the buildings, the bar terrace
 Z('plaza',-300,60,300,140,-.3,80,['lobby','foyer','food','cosplay','boutique','ramp','seConc','seConc1','skygarden','plazaE','garden','hotelL1','hotelL2']);Z('plazaE',80,34,300,60,-.3,80,['seConc','seConc1','cosplay','chill','naps','vcorr','vcorr1','aero','film']);
 Z('garden',-174,-4,-110,60,-.3,80,['plaza','lobby','foyer','promenade','link','skybridge','hotelL1','hotelL2','terrace','lane']);Z('lane',-128,-12,-110,-4,-.3,80,['garden','link','skybridge','foyer','plaza','promenade','hotelL1','hotelL2']);
 Z('terrace',-128,-64,-110,-22,-.3,80,['bar','garden','link','skybridge','hotelL1','hotelL2','lumenlounge','pool']);
 // the hotel (world coordinates: its plan is HX west of these numbers' plan values)
 Z('lobby',-224,-4,-174,60,Y0,16.5,['promenade','garden','plaza','hotelL1','hotelL2','luggage','hstairs','boutique','liftH','foyer']);
 Z('promenade',-264,-24,-128,-4,Y0,5.5,['lobby','garden','link','bar','grill','liftH','kitchenH']);
 Z('liftH',-224,-36,-200,-24,Y0,16.5,['promenade','hotelL1','hotelL2']);
 Z('bar',-174,-64,-128,-24,Y0,5.5,['promenade','terrace']);
 Z('grill',-200,-64,-174,-24,Y0,5.5,['promenade','pdining']);
 Z('pdining',-224,-64,-200,-36,Y0,5.5,['grill','kitchenH']);
 Z('kitchenH',-264,-64,-224,-24,Y0,5.5,['promenade','pdining']);
 Z('backoffice',-264,-4,-244,20,Y0,5.5,['luggage']);Z('luggage',-244,-4,-224,20,Y0,5.5,['lobby','backoffice']);
 Z('hstairs',-264,20,-224,40,-6,5.5,['lobby','hotelB']);Z('boutique',-264,40,-224,60,Y0,5.5,['lobby','plaza']);
 Z('hotelL1',-264,-24,-128,-4,5.5,11,['lobby','liftH','ballroom','lumenlounge','meeting','library','garden','skybridge','hotelL2','plaza']);
 Z('ballroom',-174,-64,-144,-24,5.5,9.4,[]);Z('lumenlounge',-144,-64,-128,-24,5.5,9.1,['terrace']);Z('meeting',-224,-64,-174,-24,5.5,8.9,[]);Z('library',-264,-64,-224,-24,5.5,10.55,[]);
 Z('hotelL2',-264,-24,-128,-4,11,16.5,['lobby','liftH','pool','gym','spa','garden','plaza']);
 Z('pool',-174,-64,-128,-24,9.4,16.5,['gym','terrace']);Z('gym',-200,-64,-174,-24,11,16.5,[]);Z('spa',-264,-64,-200,-24,11,16.5,[]);
 // the Link: ground floor and the Skybridge over it
 Z('link',-128,-22,-110,-12,Y0,5.5,['promenade','foyer','garden','terrace','skybridge']);Z('skybridge',-128,-22,-110,-12,5.5,11.4,['hotelL1','foyer','garden','terrace','link','lane','plaza','lobby','hotelL2','hallC','badgelab']);
 // the con: foyer, Hall C, ring, courtyard
 Z('foyer',-110,-24,-64,68,Y0,16.5,['plaza','garden','link','skybridge','hallC','badgelab','ringW','ringS','food','courtyard','ringW2','ringS2','lobby']);
 Z('hallC',-110,-64,-64,-24,Y0,10.55,['foyer','ringW']);Z('badgelab',-110,-64,-64,-24,10.55,16.5,['foyer','ringW2']);
 Z('courtyard',-50,-50,40,20,-3,60,['ringN','ringE','ringS','ringW','ringN2','ringE2','ringS2','ringW2','roof']);
 const RG=['courtyard','ringN','ringE','ringS','ringW','ringN2','ringE2','ringS2','ringW2'];
 Z('ringN',-64,-64,56,-50,Y0,11,RG.concat(['hallA','staffE','staffW','neConc','expo']));Z('ringW',-64,-50,-50,20,Y0,11,RG.concat(['foyer','hallC']));
 Z('ringE',40,-50,56,20,Y0,11,RG.concat(['expo','neConc','seConc','seConc1']));Z('ringS',-64,20,56,34,Y0,11,RG.concat(['foyer','food','cosplay','chill','quiet','seConc','seConc1']));
 Z('ringN2',-64,-64,56,-50,11,16.5,RG.concat(['hallA','neConc2','expo']));Z('ringW2',-64,-50,-50,20,11,16.5,RG.concat(['foyer','badgelab']));Z('ringE2',40,-50,56,20,11,16.5,RG);Z('ringS2',-64,20,56,34,11,16.5,RG.concat(['skygarden']));
 // halls and back of house
 Z('hallA',-60,-136,50,-64,Y0,26,['ringN','ringN2','backstage','courtyard']);Z('backstage',-40,-150,30,-136,Y0,5,['hallA','service']);
 Z('staffW',-64,-150,-60,-64,Y0,4,['ringN','security','stores','service']);Z('security',-110,-100,-64,-64,Y0,4,[]);Z('stores',-110,-150,-64,-100,Y0,4,['service']);
 Z('staffE',50,-150,56,-64,Y0,4,['mdf','service','hallBback']);Z('mdf',56,-100,62,-86,Y0,3,[]);
 Z('service',-110,-158,176,-150,Y0,4,['hallBback','kitchenC','breakroom','dock']);
 Z('hallB',62,-111,110,-64,Y0,11,['neConc','hallBback']);Z('hallBback',62,-150,110,-111,Y0,4.4,[]);
 Z('kitchenC',110,-111,134,-64,Y0,4.4,['neConc','breakroom','dock']);Z('breakroom',110,-150,134,-111,Y0,4,[]);
 Z('dock',134,-150,176,-64,-6,10,['tunnel']);
 Z('neConc',56,-64,168,-54,Y0,11,['ringE','expo','vcorr','carhack']);Z('neConc2',56,-64,110,-54,11,16.5,['ringE2','conops','press','speakers','expo']);
 Z('conops',62,-111,80,-64,11,16.5,[]);Z('press',80,-111,92,-64,11,16.5,[]);Z('speakers',92,-111,110,-64,11,16.5,[]);
 Z('expo',56,-54,134,20,Y0,16.5,['ringE','neConc','seConc','seConc1','neConc2','ringE2']);
 // village row (two storeys)
 const VG=['lockpick','ctf','soc','carhack','ics','soceng','aero'],V1=['wsA','wsB','hwv','creator','arcade','tabletop','film'];
 Z('vcorr',158,-54,168,34,Y0,5.5,['neConc','seConc','vcorr1'].concat(VG));Z('vcorr1',158,-54,168,34,5.5,11,['vcorr','seConc1','neConc'].concat(V1));
 Z('lockpick',134,-54,158,-30,Y0,5.5,[]);Z('ctf',134,-30,158,0,Y0,5.5,[]);Z('soc',134,0,158,20,Y0,5.5,[]);
 Z('carhack',168,-64,196,-36,Y0,5.5,[]);Z('ics',168,-36,196,-10,Y0,5.5,[]);Z('soceng',168,-10,196,16,Y0,5.5,[]);Z('aero',168,16,196,34,Y0,5.5,['seConc','seConc1']);
 Z('wsA',134,-54,158,-30,5.5,11,[]);Z('wsB',134,-30,158,-8,5.5,11,[]);Z('hwv',134,-8,158,20,5.5,11,[]);
 Z('creator',168,-64,196,-40,5.5,11,[]);Z('arcade',168,-40,196,-16,5.5,11,[]);Z('tabletop',168,-16,196,10,5.5,11,[]);Z('film',168,10,196,34,5.5,11,[]);
 Z('seConc',56,20,158,34,Y0,5.5,['ringS','ringE','expo','vcorr','chill','seConc1']);Z('seConc1',56,20,158,34,5.5,11,['ringS','ringE','expo','vcorr1','quiet']);
 // south block
 Z('food',-64,34,-10,60,Y0,11,['ringS','foyer','plaza','cosplay']);Z('skygarden',-64,34,-10,60,11,24,['ringS2','plaza','foyer']);
 Z('cosplay',-10,34,50,76,Y0,11,['ringS','food']);Z('chill',50,34,80,56,Y0,5.5,['ringS','naps']);Z('naps',50,56,80,72,Y0,3.4,[]);Z('quiet',50,34,80,56,5.5,11,['ringS']);
 // underground
 Z('carpark',-224,-54,-64,60,-6,-.4,['noc','hotelB','plant','tunnel','ramp']);Z('ramp',-72,60,-64,92,-6,4,['plaza']);Z('noc',-64,-24,-30,10,-6,-.4,[]);
 Z('plant',-264,-54,-224,20,-6,-.4,['hotelB','carpark']);Z('hotelB',-264,20,-224,54,-6,-.4,['hstairs','carpark']);Z('tunnel',-100,-60,140,-54,-6,-.4,['dock']);Z('tunnelN',134,-122,140,-60,-6,-.4,['tunnel','dock']);
 // the con roof
 Z('roof',40,-54,134,20,15,40,['courtyard','ringN2','ringE2','ringS2','ringW2','plaza','expo']);
 // everything outside the buildings (facades, roofs, the tower, the city): seen only from places with windows or sky
 Z('outside',-600,-600,600,600,-20,400,['plaza','plazaE','garden','lane','terrace','link','skybridge','courtyard','roof','skygarden','foyer','lobby','food','seConc','seConc1','vcorr','vcorr1','ringN','ringE','ringS','ringW','ringN2','ringE2','ringS2','ringW2','pool','ramp','cosplay','hotelL1','hotelL2','promenade','boutique','badgelab','lumenlounge','bar']);
 // hubs: open concourses and corridors; a room that sees one also sees what it opens onto
 for(const n of['lobby','promenade','foyer','courtyard','ringN','ringW','ringE','ringS','ringN2','ringW2','ringE2','ringS2','neConc','neConc2','seConc','seConc1','vcorr','vcorr1','hotelL1','hotelL2','plaza','service','staffW','staffE','liftH','garden','lane','link','skybridge','terrace'])G.zones.con.find(q=>q.n===n).hub=true;
 G.zones.con.find(q=>q.n==='outside').bg=true;
 G.wallNT=true;placed(HX,buildHotel);buildCore();buildHalls();buildEast();buildSouth();buildUnder();G.wallNT=false;siteAreas();
}
/* the underside and the two side stringers of a stair that floats above the floor (seen from below or the side) */
function stairShell(x0,z0,x1,z1,ya,yb,dir,m,th){th=th||.35;const ax=dir[0],up=dir[1]==='+';
 if(ax==='z'){const zl=up?z0:z1,zh=up?z1:z0;// low end at zl (height ya), high end at zh (height yb)
  const A=[x0,ya-th,zl],B=[x1,ya-th,zl],C=[x1,yb-th,zh],Dd=[x0,yb-th,zh];if(up)quad(A,B,C,Dd,m,(x1-x0)/2,Math.abs(z1-z0)/2);else quad(B,A,Dd,C,m,(x1-x0)/2,Math.abs(z1-z0)/2);
  for(const[x,s]of[[x0,-1],[x1,1]]){const p=[[x,ya-th,zl],[x,yb-th,zh],[x,yb+.06,zh],[x,ya+.06,zl]];const n=(up?-1:1)*s;if(n>0)quad(p[0],p[1],p[2],p[3],m,Math.abs(z1-z0)/2,.3);else quad(p[1],p[0],p[3],p[2],m,Math.abs(z1-z0)/2,.3)}}
 else{const xl=up?x0:x1,xh=up?x1:x0;const A=[xl,ya-th,z0],B=[xl,ya-th,z1],C=[xh,yb-th,z1],Dd=[xh,yb-th,z0];if(up)quad(B,A,Dd,C,m,Math.abs(x1-x0)/2,(z1-z0)/2);else quad(A,B,C,Dd,m,Math.abs(x1-x0)/2,(z1-z0)/2);
  for(const[z,s]of[[z0,-1],[z1,1]]){const p=[[xl,ya-th,z],[xh,yb-th,z],[xh,yb+.06,z],[xl,ya+.06,z]];const n=(up?1:-1)*s;if(n>0)quad(p[0],p[1],p[2],p[3],m,Math.abs(x1-x0)/2,.3);else quad(p[1],p[0],p[3],p[2],m,Math.abs(x1-x0)/2,.3)}}}
