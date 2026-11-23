/* ============ THE TRAIN: a three-coach Quarterline unit, from the inside ============ */
/* A region of its own (x ~1100). The train never moves: the world outside does (09d_train.js scrolls fields, houses,
   masts, bridges, tunnels and the odd passing train past the windows, and rocks the camera a little).
   Plan (x across, z along the train; the front is at z = 0, the train runs towards -z):
     each coach   23.4 m inside, 2.72 m wide: a vestibule at each end (sliding doors both sides, grab pole, door
                  buttons, extinguisher, CCTV), a glazed partition with an open doorway and a passenger information
                  screen, and a 18 m saloon of nine 2 m bays down each side of the aisle: airline pairs, table bays of
                  four, a floor-to-ceiling luggage stack, a wheelchair space, a bike bay, the toilet
     gangways     1.2 m concertina connections between coaches
     cabs         a locked cab door at the very front and the very back
   Coach A is the quiet coach. Coach B has the toilet and the wheelchair space. Coach C has the bikes. */
const TRN={x:1100,len:23.4,gw:1.2,hw:1.36,cars:[],seats:[],wins:[],tables:[],glaze:[]};
for(let k=0;k<3;k++){const z0=k*(TRN.len+TRN.gw);TRN.cars.push([z0,z0+TRN.len])}
function trainTextures(){
 tex('trCarpet',128,128,(c,w,h)=>{c.fillStyle='#1d2440';c.fillRect(0,0,w,h);for(let y=0;y<h;y+=16)for(let x=0;x<w;x+=16){const o=(y/16)%2?8:0;c.fillStyle='#2a3560';c.fillRect(x+o+5,y+5,6,6);c.fillStyle=(x+y)%48?'#3fa8a8':'#d0507a';c.fillRect(x+o+7,y+7,2,2)}noise(c,w,h,1600,'#0a0e20',.35);grain(c,w,h,8)});
 tex('trRubber',128,128,(c,w,h)=>{c.fillStyle='#5a5e66';c.fillRect(0,0,w,h);for(let y=4;y<h;y+=10)for(let x=4;x<w;x+=10){c.fillStyle='#6a6e76';c.beginPath();c.arc(x+((y/10)%2?5:0),y,2.6,0,7);c.fill()}noise(c,w,h,900,'#2a2e36',.3);grain(c,w,h,6)});
 tex('trMoq',128,128,(c,w,h)=>{c.fillStyle='#232a52';c.fillRect(0,0,w,h);for(let y=0;y<h;y+=32)for(let x=0;x<w;x+=32){c.strokeStyle='#3fb0b0';c.lineWidth=2;c.beginPath();c.moveTo(x+4,y+16);c.lineTo(x+16,y+4);c.lineTo(x+28,y+16);c.lineTo(x+16,y+28);c.closePath();c.stroke();c.fillStyle='#e0507e';c.fillRect(x+14,y+14,4,4);c.fillStyle='#ffd166';c.fillRect(x+1,y+1,3,3)}
  for(let i=0;i<h;i+=2){c.fillStyle='#00000010';c.fillRect(0,i,w,1)}grain(c,w,h,14)});
 tex('trHead',128,64,(c,w,h)=>{c.fillStyle='#f2f2ee';c.fillRect(0,0,w,h);c.fillStyle='#1f8a8a';c.fillRect(0,h-14,w,14);c.fillStyle='#f2f2ee';c.font='bold 10px sans-serif';c.textAlign='center';c.fillText('QUARTERLINE',w/2,h-4);grain(c,w,h,6)});
 tex('trCeil',256,128,(c,w,h)=>{c.fillStyle='#eef0f2';c.fillRect(0,0,w,h);c.fillStyle='#c8ccd2';c.fillRect(0,0,w,2);c.fillRect(0,64,w,2);for(const x of[60,190]){c.fillStyle='#d6dade';c.beginPath();c.arc(x,32,12,0,7);c.fill();c.fillStyle='#b8bcc4';for(let i=-9;i<=9;i+=3)c.fillRect(x+i,24,1,16)}c.fillStyle='#dfe3e6';c.fillRect(120,90,16,16);grain(c,w,h,4)});
 tex('trBellows',64,128,(c,w,h)=>{for(let y=0;y<h;y+=8){const g=c.createLinearGradient(0,y,0,y+8);g.addColorStop(0,'#2a2c32');g.addColorStop(.5,'#45484f');g.addColorStop(1,'#1a1c20');c.fillStyle=g;c.fillRect(0,y,w,8)}grain(c,w,h,6)});
 tex('trChequer',64,64,(c,w,h)=>{c.fillStyle='#9a9ea6';c.fillRect(0,0,w,h);for(let y=0;y<h;y+=8)for(let x=0;x<w;x+=8){c.fillStyle='#b8bcc4';c.save();c.translate(x+4,y+4);c.rotate(((x+y)/8)%2?.8:-.8);c.fillRect(-3,-1,6,2);c.restore()}grain(c,w,h,8)});
 tex('trLam',128,64,(c,w,h)=>{c.fillStyle='#cfd3d8';c.fillRect(0,0,w,h);noise(c,w,h,500,'#b8bcc4',.3);c.fillStyle='#1f8a8a';c.fillRect(0,h-5,w,5);grain(c,w,h,4)});
 tex('trDoorIn',128,256,(c,w,h)=>{c.fillStyle='#b9bec6';c.fillRect(0,0,w,h);c.fillStyle='#ffd166';c.fillRect(w-10,0,10,h);c.fillStyle='#8a8e96';c.fillRect(0,0,w,3);c.fillRect(0,h-3,w,3);grain(c,w,h,6)});
 tex('trRoute',512,192,(c,w,h)=>{c.fillStyle='#f4f2ec';c.fillRect(0,0,w,h);c.fillStyle='#1f8a8a';c.fillRect(0,0,w,34);c.fillStyle='#fff';c.font='bold 20px Chakra Petch, sans-serif';c.fillText('QUARTERLINE · ROUTE MAP',14,24);
  c.strokeStyle='#c0304a';c.lineWidth=8;c.beginPath();c.moveTo(40,120);c.lineTo(470,120);c.stroke();c.strokeStyle='#1f8a8a';c.lineWidth=6;c.beginPath();c.moveTo(250,120);c.lineTo(250,70);c.stroke();
  const st=[[40,120,'Linden St'],[250,120,'Central'],[250,70,'Brindle & Co'],[470,120,'Conference Qtr']];for(const[x,y,n]of st){c.fillStyle='#fff';c.strokeStyle='#1b1026';c.lineWidth=3;c.beginPath();c.arc(x,y,9,0,7);c.fill();c.stroke();c.fillStyle='#1b1026';c.font='bold 15px sans-serif';c.textAlign='center';c.fillText(n,x,y+(y>100?32:-16))}
  c.textAlign='left';c.font='12px sans-serif';c.fillStyle='#5b4870';c.fillText('Trains every 20 minutes. Please mind the gap.',14,h-12)});
 tex('trWifi',256,128,(c,w,h)=>{c.fillStyle='#1b1026';c.fillRect(0,0,w,h);c.strokeStyle='#8affc1';c.lineWidth=5;for(let i=1;i<4;i++){c.beginPath();c.arc(48,86,i*14,-2.4,-.74);c.stroke()}c.fillStyle='#8affc1';c.beginPath();c.arc(48,86,5,0,7);c.fill();
  c.fillStyle='#fff';c.font='bold 22px sans-serif';c.fillText('FREE WI-FI',96,52);c.font='14px sans-serif';c.fillStyle='#bba8cf';c.fillText('powered by Lumen SafeSphere',96,76);c.fillText('just log in with your socials!',96,96)});
 tex('trAd0',256,192,(c,w,h)=>{const g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,'#1a3a7a');g.addColorStop(1,'#2a7ac0');c.fillStyle=g;c.fillRect(0,0,w,h);c.fillStyle='#fff';c.beginPath();c.moveTo(128,30);c.lineTo(170,46);c.lineTo(166,96);c.lineTo(128,122);c.lineTo(90,96);c.lineTo(86,46);c.closePath();c.fill();
  c.fillStyle='#2a7ac0';c.font='bold 30px sans-serif';c.textAlign='center';c.fillText('L',128,90);c.fillStyle='#fff';c.font='bold 22px sans-serif';c.fillText('SafeSphere',128,150);c.font='13px sans-serif';c.fillText('Your shield on the internet. Free forever.',128,174)});
 tex('trAd1',256,192,(c,w,h)=>{c.fillStyle='#1b1026';c.fillRect(0,0,w,h);c.fillStyle='#ff5d73';c.font='bold 34px Chakra Petch, sans-serif';c.textAlign='center';c.fillText('CTRL+ALT+CON',128,70);c.fillStyle='#8affc1';c.font='20px VT323, monospace';c.fillText('#20 · THIS WEEK',128,100);c.fillStyle='#ffd166';c.font='15px sans-serif';c.fillText('Conference Quarter · alight here',128,150);c.fillStyle='#bba8cf';c.fillText('be excellent to each other',128,172)});
 tex('trAd2',256,192,(c,w,h)=>{c.fillStyle='#ffd166';c.fillRect(0,0,w,h);c.fillStyle='#1b1026';c.font='bold 24px sans-serif';c.textAlign='center';c.fillText('Seen something',128,62);c.fillText('that isn\'t right?',128,92);c.font='15px sans-serif';c.fillText('Tell a member of staff.',128,134);c.fillText('Don\'t tag it on SafeSphere.',128,156)});
 tex('trAd3',256,192,(c,w,h)=>{c.fillStyle='#f4efe6';c.fillRect(0,0,w,h);c.fillStyle='#7a3a1a';c.font='bold 28px Georgia, serif';c.textAlign='center';c.fillText('PROOF',128,64);c.font='italic 16px Georgia, serif';c.fillText('bakery · Linden Street',128,90);c.fillStyle='#c0304a';c.font='bold 15px sans-serif';c.fillText('Cinnamon knots from 7am',128,140);c.fillStyle='#5b4870';c.font='12px sans-serif';c.fillText('(they\'re not really knots)',128,162)});
 tex('trPrio',128,128,(c,w,h)=>{c.fillStyle='#7a2a8a';c.fillRect(0,0,w,h);c.fillStyle='#fff';c.font='bold 14px sans-serif';c.textAlign='center';c.fillText('PRIORITY SEAT',64,26);c.beginPath();c.arc(64,62,14,0,7);c.fill();c.fillRect(56,78,16,30);c.font='11px sans-serif';c.fillText('please offer this seat',64,120)});
 tex('trWheel',128,128,(c,w,h)=>{c.fillStyle='#1a4a9a';c.fillRect(0,0,w,h);c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.arc(58,80,24,0,7);c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(58,26,9,0,7);c.fill();c.fillRect(52,38,10,34);c.fillRect(52,64,34,9);c.fillRect(80,64,9,30)});
 tex('trNews',128,160,(c,w,h)=>{c.fillStyle='#ece8e0';c.fillRect(0,0,w,h);c.fillStyle='#1b1026';c.font='bold 16px Georgia, serif';c.fillText('THE DAILY BYTE',8,20);c.fillRect(8,26,112,2);c.font='bold 13px sans-serif';c.fillText('LUMEN VALUED AT',8,46);c.fillText('£40 BILLION',8,62);c.fillStyle='#9a968e';c.fillRect(8,70,112,46);for(let y=124;y<h-4;y+=6)c.fillRect(8,y,(y%12?112:80),2)});
}
function buildTrain(){
 trainTextures();
 region('train',{fog:[.6,.66,.74],fr:[90,780],day:1});const RG=G.regions.train;RG.amb=[.55,.56,.6];RG.lmCap=8;RG.lmPages={high:3,medium:2,low:2};
 const X=TRN.x,HW=TRN.hw,SILL=.84,HEAD=1.8,UPW=2.02,CEIL=2.32,CX=.82;
 const M={carpet:mt('trCarpet',0,1/1.2,0,{r:.95}),rubber:mt('trRubber',0,1/1.1,0,{r:.8}),low:MT.gloss('#d4d8de'),up:MT.gloss('#eceef0'),ceil:mt('trCeil',0,1/2,0,{r:.7}),
  moq:mt('trMoq',0,1/.4,0,{r:.95}),head:MT.fabric('#ddd8cc'),shell:MT.gloss('#3a3e48'),frame:MT.plain('#22242a'),chrome:MT.chrome,yellow:MT.gloss('#ffd166'),lam:mt('trLam',0,1,0,{r:.35}),
  door:mt('trDoorIn',0,1,0,{r:.4}),bell:mt('trBellows',0,1/.5,0,{r:.9}),cheq:mt('trChequer',0,1/.5,0,{r:.4,m:.5}),teal:MT.gloss('#1f8a8a'),dark:MT.plain('#16161c'),red:MT.gloss('#c0242e'),
  strip:MT.glow('#f2f6ff',1.6),blind:MT.fabric('#4a5a7a')};
 const mapR=(x0,z0,x1,z1,n,c)=>(MAPR.train=MAPR.train||[]).push({x0,z0,x1,z1,y:0,n,c:c||'#3a4a5a'});
 // a seat: cushion, back (moquette in front, a grey shell behind), headrest cover, a grab handle on the aisle side
 const seat=(sx0,sx1,z,f,aisle)=>{const pz0=f<0?z:z+.12,pz1=pz0+.5,bz0=f<0?z+.5:z,bz1=bz0+.12;
  box(sx0+.06,.14,pz0+.08,sx1-.06,.4,pz1-.08,M.shell,{col:false});box(sx0,.4,pz0,sx1,.5,pz1,M.moq,{col:false});
  if(f<0){box(sx0,.5,bz0,sx1,1.2,bz0+.08,M.moq,{col:false});box(sx0,.5,bz0+.08,sx1,1.22,bz1,M.shell,{col:false});box(sx0+.07,1.07,bz0-.012,sx1-.07,1.19,bz0,M.head,{col:false})}
  else{box(sx0,.5,bz1-.08,sx1,1.2,bz1,M.moq,{col:false});box(sx0,.5,bz0,sx1,1.22,bz1-.08,M.shell,{col:false});box(sx0+.07,1.07,bz1,sx1-.07,1.19,bz1+.012,M.head,{col:false})}
  if(aisle){const ax=aisle<0?sx0:sx1-.05;box(ax,.5,pz0+.06,ax+.05,.66,pz1-.04,M.shell,{col:false});const gx=aisle<0?sx0+.02:sx1-.1;box(gx,1.22,bz0+.02,gx+.08,1.3,bz1-.02,M.chrome,{col:false})}
  TRN.seats.push({x:(sx0+sx1)/2,z:(pz0+pz1)/2,f})};
 const row=(xa,xb,z,f,aisle)=>{const w2=(xb-xa)/2;seat(xa+.01,xa+w2-.01,z,f,aisle<0?0:0);seat(xa+w2+.01,xb-.01,z,f,0);
  const ax=aisle<0?xa:xb-.05;box(ax,.5,z+(f<0?.06:.18),ax+.05,.66,z+(f<0?.5:.62),M.shell,{col:false});const gx=aisle<0?xa+.02:xb-.1,bz=f<0?z+.5:z;box(gx,1.22,bz+.02,gx+.08,1.3,bz+.1,M.chrome,{col:false});
  colBox(xa,z,xb,z+.62,0,1.22)};
 // what people leave on tables
 const PROPS=[(x,z)=>kMug(x,.745,z,['#e9e3da','#c0304a','#1f8a8a'][(x*7|0)%3&3]),(x,z)=>kPaper(x,.745,z,2),(x,z)=>{box(x-.17,.745,z-.12,x+.17,.765,z+.12,MT.plain('#2a2a30'),{col:false});box(x-.17,.765,z+.1,x+.17,.99,z+.12,MT.plain('#2a2a30'),{col:false});box(x-.15,.79,z+.098,x+.15,.97,z+.1,MT.glow('#7cc4ff',.7),{col:false})},
  (x,z)=>box(x-.04,.745,z-.08,x+.04,.755,z+.08,MT.plain('#16161c'),{col:false}),(x,z)=>box(x-.05,.745,z-.05,x+.05,.98,z+.05,MT.gloss('#7cc4ff'),{col:false}),
  (x,z)=>box(x-.1,.745,z-.14,x+.1,.785,z+.14,MT.gloss(['#c0304a','#2a4a8a','#ffd166','#3a6a3a'][(z*5|0)&3]),{col:false}),(x,z)=>quad([x-.1,.747,z+.13],[x+.1,.747,z+.13],[x+.1,.747,z-.13],[x-.1,.747,z-.13],mt('trNews',0,1,0,{r:.8}),1,1),
  (x,z)=>{box(x-.09,.745,z-.06,x+.09,.79,z+.06,MT.plain('#f4efe6'),{col:false});box(x-.08,.79,z-.05,x+.08,.792,z+.05,MT.plain('#7a3a1a'),{col:false})}];
 const tableAt=(xa,xb,z0,z1,wall)=>{box(xa,.70,z0,xb,.745,z1,M.lam,{col:false});box(xa,.69,z0,xb,.70,z1,M.frame,{col:false});const px=wall<0?xa:xb-.12;box(px,0,(z0+z1)/2-.08,px+.12,.69,(z0+z1)/2+.08,M.shell,{col:false});
  colBox(xa,z0,xb,z1,0,.75);TRN.tables.push({x:(xa+xb)/2,z:(z0+z1)/2});const n=1+((rnd()*3)|0);for(let i=0;i<n;i++){const p=PROPS[(rnd()*PROPS.length)|0];p(xa+.15+rnd()*(xb-xa-.3),z0+.15+rnd()*(z1-z0-.3))}};
 const bag=(x0,x1,y,z0,z1)=>{const c=['#3a3a44','#c0304a','#1f4a8a','#2a2a30','#8a5a3a','#ffd166','#3a6a5a'][(rnd()*7)|0];box(x0,y,z0,x1,y+.18+rnd()*.12,z1,MT.fabric(c),{col:false})};
 const LAYOUT=[['AATTLTTAA','PATTTTLAA'],['WWTTLTTAA','CCTTTTLAA'],['AATTTTLBB','PATTLTTAA']];
 G.lmK=.9;
 TRN.cars.forEach(([z0,z1],k)=>{
  const vA=z0+2.7,vB=z1-2.7,dz=[z0+1.35,z1-1.35];
  // floors: rubber in the vestibules (yellow nosing at the doors), carpet in the saloon
  floorQ(X-HW,z0,X+HW,vA,0,M.rubber);floorQ(X-HW,vB,X+HW,z1,0,M.rubber);floorQ(X-HW,vA,X+HW,vB,0,M.carpet);surf(X-HW,z0,X+HW,z1,0);
  for(const d of dz)for(const s of[-1,1])box(X+s*HW-(s>0?.12:0),0,d-.66,X+s*HW+(s<0?.12:0),.012,d+.66,M.yellow,{col:false});
  // ceiling: a flat centre and sloped coves, LED strips along the cove line, lights along the middle
  ceilQ(X-CX,z0,X+CX,z1,CEIL,M.ceil);
  for(const s of[-1,1]){const a=[X+s*HW,UPW],b=[X+s*CX,CEIL];if(s<0)quad([a[0],a[1],z1],[a[0],a[1],z0],[b[0],b[1],z0],[b[0],b[1],z1],M.up,(z1-z0)/2,.5);else quad([a[0],a[1],z0],[a[0],a[1],z1],[b[0],b[1],z1],[b[0],b[1],z0],M.up,(z1-z0)/2,.5);
   box(X+s*CX-(s>0?.06:0),CEIL-.05,vA,X+s*CX+(s<0?.06:0),CEIL-.01,vB,M.strip,{col:false,b:1})}
  for(let z=vA+1.5;z<vB;z+=3)addLight(X,2.15,z,[.95,.97,1],4.6,.5);for(const z of[z0+1.35,z1-1.35]){addLight(X,2.15,z,[1,.96,.9],3.6,.45);box(X-.25,CEIL-.03,z-.25,X+.25,CEIL-.005,z+.25,MT.glow('#fff8ee',1.4),{col:false,b:1})}
  // the sides: lower panels, window pillars, an upper band; glass, rubber frames, sills; doors in the vestibules
  for(const s of[-1,1]){const wx0=s<0?X-HW-.12:X+HW,wx1=s<0?X-HW:X+HW+.12;
   const solid=(za,zb,y0,y1,m)=>box(wx0,y0,za,wx1,y1,zb,m||M.low,{col:false});
   colBox(Math.min(wx0,wx1)-(s<0?.05:0),z0,Math.max(wx0,wx1)+(s>0?.05:0),z1,0,2.4);
   // vestibule walls round the door openings
   for(const d of dz){const a=d-.65,b=d+.65,end=d<(z0+z1)/2?z0:z1;solid(Math.min(end,d<(z0+z1)/2?a:b),Math.max(end,d<(z0+z1)/2?a:b),0,UPW,M.up);
    const ptn=d<(z0+z1)/2?vA:vB;solid(Math.min(ptn,d<(z0+z1)/2?b:a),Math.max(ptn,d<(z0+z1)/2?b:a),0,UPW,M.up);solid(a,b,1.98,UPW,M.up);
    // the door: two closed leaves with windows (you can see out), yellow edges, a step of light at the threshold
    const fx=s<0?X-HW-.07:X+HW+.07;for(const[l0,l1]of[[a,d],[d,b]]){box(fx-.02,0,l0,fx+.02,1.05,l1,M.door,{col:false});box(fx-.02,1.78,l0,fx+.02,1.98,l1,M.door,{col:false});TRN.glaze.push({x:fx,z0:l0+.06,z1:l1-.06,y0:1.05,y1:1.78});box(fx-.025,1.05,l0,fx+.025,1.78,l0+.06,M.door,{col:false});box(fx-.025,1.05,l1-.06,fx+.025,1.78,l1,M.door,{col:false})}
    box(fx-.03,0,d-.015,fx+.03,1.98,d+.015,M.dark,{col:false});
    // buttons beside the door: open (a green ring), close
    const bx=s<0?X-HW+.004:X+HW-.004;    box(Math.min(bx,bx+s*-.03),1.05,b+.08,Math.max(bx,bx+s*-.03),1.25,b+.22,MT.plain('#2a2a30'),{col:false});box(Math.min(bx,bx+s*-.035),1.16,b+.11,Math.max(bx,bx+s*-.035),1.22,b+.19,MT.glow('#8affc1',1.6),{col:false});box(Math.min(bx,bx+s*-.035),1.08,b+.11,Math.max(bx,bx+s*-.035),1.13,b+.19,MT.glow('#ffd166',.8),{col:false});
    // a handrail either side of the doorway
    for(const zz of[a-.06,b+.06])box(Math.min(bx,bx-s*.07),.9,zz-.02,Math.max(bx,bx-s*.07),1.75,zz+.02,M.chrome,{col:false})}
   // the saloon side: windows every 2 m, pillars between
   solid(vA,vB,0,SILL);solid(vA,vB,HEAD,UPW,M.up);
   for(let i=0;i<9;i++){const zc=vA+1+i*2,w0=zc-.8,w1=zc+.8;solid(zc-1,w0,SILL,HEAD,M.up);solid(w1,zc+1,SILL,HEAD,M.up);
    const gx=s<0?X-HW-.09:X+HW+.09;TRN.glaze.push({x:gx,z0:w0,z1:w1,y0:SILL,y1:HEAD});
    // rubber frame and a sill you could put a coffee on
    const fi=s<0?X-HW+.005:X-HW,fo=s<0?X-HW-.02:X+HW+.02;const f0=Math.min(s<0?X-HW-.09:X+HW,s<0?X-HW+.01:X+HW+.09),f1=Math.max(s<0?X-HW-.09:X+HW,s<0?X-HW+.01:X+HW+.09);
    box(f0,SILL-.02,w0,f1+(s<0?.06:0)-(s>0?0:0),SILL+.02,w1,M.frame,{col:false});box(f0,HEAD-.03,w0,f1,HEAD+.01,w1,M.frame,{col:false});box(f0,SILL,w0,f1,HEAD,w0+.03,M.frame,{col:false});box(f0,SILL,w1-.03,f1,HEAD,w1,M.frame,{col:false});
    box(s<0?X-HW:X+HW-.07,SILL-.03,w0+.03,s<0?X-HW+.07:X+HW,SILL+.005,w1-.03,M.low,{col:false});
    TRN.wins.push({x:s<0?X-HW:X+HW,z:zc,s});
    // some blinds half down
    if(rnd()<.28){const bx=s<0?X-HW-.03:X+HW+.03,h=.25+rnd()*.45;box(bx-.006,HEAD-h,w0+.02,bx+.006,HEAD,w1-.02,M.blind,{col:false});box(bx-.02,HEAD-h-.02,w0+.02,bx+.02,HEAD-h,w1-.02,M.frame,{col:false})}}
   // luggage racks over the seats, a lip of chrome, brackets every bay; seat-reservation strips under them
   const rx0=s<0?X-HW:X+HW-.36,rx1=s<0?X-HW+.36:X+HW;box(rx0,1.93,vA,rx1,1.955,vB,MT.glass,{col:false});const lip=s<0?X-HW+.34:X+HW-.36;box(lip,1.92,vA,lip+.02,1.99,vB,M.chrome,{col:false});
   for(let z=vA;z<=vB+.01;z+=2)box(rx0,1.86,z-.02,rx1,1.93,z+.02,M.chrome,{col:false});
   for(let z=vA+.5;z<vB;z+=1)box(lip-.01,1.86,z-.09,lip+.01,1.9,z+.09,MT.glow(rnd()<.3?'#ffb020':'#8affc1',.9),{col:false});
   for(let z=vA+.3;z<vB-.6;z+=.7)if(rnd()<.32)bag(Math.min(rx0,rx1)+.04,Math.max(rx0,rx1)-.04,1.955,z,z+.4+rnd()*.25)}
  // the partitions between vestibule and saloon: glazed screens either side of an open doorway, posters, a CCTV dome
  for(const[pz,side]of[[vA,1],[vB,-1]]){const t0=side>0?pz-.06:pz,t1=side>0?pz:pz+.06;
   for(const s of[-1,1]){const a=s<0?X-HW:X+.45,b=s<0?X-.45:X+HW;box(a,0,t0,b,1.0,t1,M.low);box(a,1.9,t0,b,CEIL,t1,M.up,{col:false});box(a,1.0,(t0+t1)/2-.008,b,1.9,(t0+t1)/2+.008,MT.glass,{col:false});colBox(a,t0,b,t1,0,2.4);
    for(const xx of[a,b-.04])box(xx,1,t0-.005,xx+.04,1.9,t1+.005,M.frame,{col:false});box(a,.98,t0-.005,b,1.02,t1+.005,M.frame,{col:false});box(a,1.88,t0-.005,b,1.92,t1+.005,M.frame,{col:false})}
   box(X-.45,1.98,t0,X+.45,CEIL,t1,M.up,{col:false});for(const xx of[X-.47,X+.43])box(xx,0,t0-.01,xx+.04,1.98,t1+.01,M.chrome,{col:false});
   // posters on the saloon face: adverts, the wifi, priority seating
   const fz=side>0?t1+.004:t0-.004,fd=side>0?'s':'n';
   kTq(X-.95,1.1,fz,.62,.46,fd,mt('trAd'+((k*2+(side>0?0:1))%4),0,1,0,{r:.6}));kTq(X+.95,1.1,fz,.62,.46,fd,mt(side>0?'trWifi':'trRoute',0,1,0,{r:.6}));
   const vz=side>0?t0-.004:t1+.004,vd=side>0?'n':'s';kTq(X+.95,1.15,vz,.9,.34,vd,mt('trRoute',0,1,0,{r:.6}));kTq(X-.95,1.2,vz,.5,.38,vd,mt(['trAd2','trAd1','trAd3'][k],0,1,0,{r:.6}));
   box(X-.06,CEIL-.08,pz-.06,X+.06,CEIL,pz+.06,M.dark,{col:false})}
  // vestibule kit: grab poles, an extinguisher, the alarm, a bin, a CCTV dome
  for(const d of dz){box(X-.025,0,d-.025,X+.025,CEIL,d+.025,M.chrome,{col:false});colBox(X-.05,d-.05,X+.05,d+.05,0,2.3);box(X-.16,CEIL-.07,d+.4,X-.04,CEIL,d+.52,M.dark,{col:false})}
  {const e=k===0?z0:z1;const ez=k===0?z0+.6:z1-.6;box(X+HW-.25,0,ez-.1,X+HW-.05,.55,ez+.1,M.red,{col:false});box(X+HW-.2,.55,ez-.04,X+HW-.1,.66,ez+.04,M.dark,{col:false});
   kSign(X-HW+.005,1.5,ez,.36,.2,'e','ALARM','#fff','#c0242e');box(X-HW,1.25,ez-.1,X-HW+.06,1.45,ez+.1,M.red,{col:false});box(X+HW-.35,0,ez-.18,X+HW-.05,.7,ez+.18,MT.gloss('#5a5e66'))}
  // the ends of the coach: a cab door at the front and the back of the train, a gangway in between
  for(const[e,inw]of[[z0,1],[z1,-1]]){const cab=(k===0&&inw>0)||(k===2&&inw<0);
   if(cab){door('h',e,X,.72,1.98,0);wallLine('h',e,X-HW,X+HW,0,CEIL,M.up,inw);const dzf=inw>0?e+.205:e-.205;kTq(X,0,dzf,.7,1.96,inw>0?'s':'n',M.door);kTq(X,1.3,inw>0?dzf+.002:dzf-.002,.4,.3,inw>0?'s':'n',MT.plain('#0a0c10'));colBox(X-.4,Math.min(e,dzf),X+.4,Math.max(e,dzf)+.02,0,2.2);
    kSign(X,1.7,inw>0?dzf+.004:dzf-.004,.6,.12,inw>0?'s':'n','DRIVER ONLY','#fff','#c0242e');kSign(X-.9,1.5,inw>0?e+.205:e-.205,.7,.26,inw>0?'s':'n',k===0?'COACH A · QUIET':'COACH C','#1b1026','#ffd166')}
   else{door('h',e,X,1.0,2.0,0);wallLine('h',e,X-HW,X+HW,0,CEIL,M.up,inw);kSign(X+.9,1.85,inw>0?e+.205:e-.205,.6,.24,inw>0?'s':'n',['COACH A · QUIET','COACH B','COACH C'][k],'#1b1026','#ffd166')}}
  // the saloon: nine bays down each side
  for(const s of[-1,1]){const xa=s<0?X-HW+.04:X+.42,xb=s<0?X-.42:X+HW-.04,aisle=s<0?1:-1,L=LAYOUT[k][s<0?0:1];
   for(let b=0;b<9;b++){const zb=vA+b*2,ch=L[b];
    if(ch==='A'||ch==='P'){const f=b<4?-1:1;for(const r of[0,1])row(xa,xb,zb+.18+r*.92,f,s<0?1:-1);if(ch==='P')kTq(s<0?X-HW+.005:X+HW-.005,1.3,zb+1,.3,.3,s<0?'e':'w',mt('trPrio',0,1,0,{r:.6}))}
    else if(ch==='T'){row(xa,xb,zb,1,aisle);row(xa,xb,zb+1.38,-1,aisle);tableAt(xa,xb-.02,zb+.66,zb+1.34,s)}
    else if(ch==='L'){// floor-to-ceiling luggage stack: three shelves, suitcases
     const x0=xa+.02,x1=xb-.06;for(const xx of[x0,x1-.04])for(const zz of[zb+.2,zb+1.76])box(xx,0,zz,xx+.04,1.9,zz+.04,M.chrome,{col:false});
     for(const y of[.06,.72,1.38])box(x0,y,zb+.2,x1,y+.03,zb+1.8,MT.plain('#8a8e96'),{col:false});colBox(x0,zb+.2,x1,zb+1.8,0,1.9);
     for(const y of[.09,.75,1.41]){let z=zb+.26;while(z<zb+1.6){const w=.22+rnd()*.25,h=.35+rnd()*.25;if(rnd()<.8)box(x0+.06,y,z,x1-.06,Math.min(y+h,y+.62),z+w,MT.gloss(['#1a1a20','#c0304a','#2a4a8a','#5a5e66','#ffd166','#3a6a5a','#8a5a3a'][(rnd()*7)|0]),{col:false});z+=w+.04}}
     kSign(s<0?X-HW+.005:X+HW-.005,1.95,zb+1,.5,.12,s<0?'e':'w','LUGGAGE','#fff','#1f8a8a')}
    else if(ch==='W'){// the wheelchair space: open floor, tip-up seats folded against the wall, the call-for-aid button
     if(L[b-1]!=='W'){kTq(s<0?X-HW+.006:X+HW-.006,.9,zb+2,.5,.5,s<0?'e':'w',mt('trWheel',0,1,0,{r:.6}));floorQ(xa+.1,zb+.4,xb-.2,zb+3.6,.004,MT.plain('#2a4a8a'));
      for(const z of[zb+.6,zb+1.4])box(s<0?X-HW:X+HW-.14,.45,z,s<0?X-HW+.14:X+HW,.95,z+.6,M.moq,{col:false});box(s<0?X-HW:X+HW-.04,1.05,zb+2.6,s<0?X-HW+.04:X+HW,1.25,zb+2.8,MT.glow('#ffd166',1.2),{col:false});
      box(s<0?X-HW+.04:X+HW-.12,.8,zb+.2,s<0?X-HW+.12:X+HW-.04,.84,zb+3.8,M.chrome,{col:false})}}
    else if(ch==='B'){// bike bay: hooks and a bike hanging from one
     if(L[b-1]!=='B'){for(const z of[zb+1,zb+2.6]){const hx=s<0?X-HW+.05:X+HW-.05;box(hx-.03,1.7,z-.03,hx+.03,1.9,z+.03,M.chrome,{col:false})}
      const bx=s<0?X-HW+.35:X+HW-.35,z=zb+1;for(const zz of[z-.55,z+.55]){box(bx-.02,.05,zz-.33,bx+.02,.75,zz+.33,MT.plain('#16161c'),{col:false})}box(bx-.02,.6,z-.55,bx+.02,.66,z+.55,MT.gloss('#c0304a'),{col:false});box(bx-.03,.66,z+.35,bx+.03,1.75,z+.42,MT.gloss('#c0304a'),{col:false});colBox(bx-.3,z-.9,bx+.3,z+.9,0,1.9);
      kSign(s<0?X-HW+.005:X+HW-.005,1.4,zb+2.6,.5,.14,s<0?'e':'w','BIKES','#fff','#1f8a8a')}}
    else if(ch==='C'){// the toilet: a curved module, its door, the light that says whether it's free
     if(L[b-1]!=='C'){const x0=xa-.02,x1=xb+.04,za=zb+.1,zc=zb+3.9;box(x0,0,za,x1,2.15,zc,MT.gloss('#e4e6ea'));box(x0,2.15,za,x1,CEIL,zc,M.up,{col:false});
      const fx=s<0?x1+.004:x0-.004;kTq(fx,0,zb+2,.9,1.95,s<0?'e':'w',M.door);kSign(fx,2.0,zb+2,.6,.12,s<0?'e':'w','TOILET','#fff','#1f8a8a');box(Math.min(fx,fx+(s<0?.02:-.02)),1.6,zb+2.5,Math.max(fx,fx+(s<0?.02:-.02)),1.7,zb+2.75,MT.glow('#8affc1',1.6),{col:false})}}}}
  // a few things on the floor and seats: a rucksack, a forgotten lanyard, a crisp packet
  for(let i=0;i<3;i++){const z=vA+1+rnd()*15,s=rnd()<.5?-1:1;box(X+s*.25-.12,0,z-.1,X+s*.25+.12,.36,z+.12,MT.fabric(['#2a2a30','#c0304a','#3a6a5a'][i]),{col:false})}
  mapR(X-HW,z0,X+HW,z1,['Coach A','Coach B','Coach C'][k],'#3a4a5a');
  area(['coachA','coachB','coachC'][k],['Coach A · Quiet coach','Coach B','Coach C'][k],'train',[X-HW,z0,X+HW,z1],[X,z0+(k===1?11.5:12),0,0],'carriage',{y0:-1,y1:3})});
 // the gangways: chequer plate, concertina bellows, a low ceiling
 for(let k=0;k<2;k++){const a=TRN.cars[k][1],b=TRN.cars[k+1][0];floorQ(X-.6,a,X+.6,b,0,M.cheq);surf(X-.6,a,X+.6,b,0);
  for(const s of[-1,1]){box(s<0?X-.72:X+.6,0,a,s<0?X-.6:X+.72,2.1,b,M.bell,{col:false});colBox(s<0?X-.9:X+.6,a,s<0?X-.6:X+.9,b,0,2.3)}
  ceilQ(X-.6,a,X+.6,b,2.05,M.bell);addLight(X,1.9,(a+b)/2,[1,.95,.88],2.4,.35);mapR(X-.6,a,X+.6,b,'','#2a3440')}
 G.lmK=1;
}
