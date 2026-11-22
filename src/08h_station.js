/* ============ CENTRAL STATION: a Victorian terminus with a modern concourse ============ */
/* Plan (x across, z along the tracks; north = -z):
     concourse   x 700..772, z 20..48   stone floor under a glass diagrid roof on two steel trees; ticket office and
                 machines on the west wall, Pasty Palace, Platform Coffee and Paper & Co on the east, the departures
                 board and clock hanging over the barrier line, three glazed portals onto the taxi rank (south)
     barriers    z 20.5..21.5, one wide gate open (the 09:12 is on Platform 4)
     walkway     z 12..20 behind the barriers, across the ends of the tracks (buffer stops below)
     train shed  x 700..772, z -66..12: one 72 m span arch of iron ribs, glazed in the middle, boarded and slated at
                 the sides; seven platforms on four islands; the 09:12 waits at Platform 4 with a door open
     beyond      the tracks run north out of the shed in a brick cutting, under a road bridge, into the city
   The morning sun is baked through both glass roofs, so the ribs, glazing bars and diagrid throw their shadows. */
const STB=-1.1,SZN=-66,SZW=12,SAR=(x)=>8+18*Math.sqrt(Math.max(0,1-((x-736)/36)**2));
function stationTextures(){
 tex('stoneFloor',256,256,(c,w,h)=>{for(let y=0;y<2;y++)for(let x=0;x<2;x++){const v=(x+y)%2?184:172;c.fillStyle=`rgb(${v},${v-8},${v-20})`;c.fillRect(x*128,y*128,128,128)}
  blotch(c,w,h,14,'#b8ae9a',.25,10,40);noise(c,w,h,3000,'#7a7060',.08);c.fillStyle='#8a8070';c.fillRect(0,0,w,2);c.fillRect(0,0,2,h);c.fillRect(0,127,w,2);c.fillRect(127,0,2,h);grain(c,w,h,5)});
 tex('ashlar',256,256,(c,w,h)=>{c.fillStyle='#9a8e78';c.fillRect(0,0,w,h);for(let r=0;r<4;r++)for(let k=-1;k<3;k++){const x=k*128+(r%2)*64,v=rnd()*14;c.fillStyle=`rgb(${214+v|0},${202+v|0},${178+v|0})`;c.fillRect(x+2,r*64+2,124,60);c.fillStyle='#ffffff14';c.fillRect(x+2,r*64+2,124,3)}noise(c,w,h,3000,'#7a6e58',.12);grain(c,w,h,6)});
 tex('sleepers',128,128,(c,w,h)=>{c.fillStyle='#6a645c';c.fillRect(0,0,w,h);noise(c,w,h,4200,'#3a3630',.5);noise(c,w,h,2600,'#9a948a',.4);
  for(let i=0;i<4;i++){const y=i*32+8;c.fillStyle='#5a4a3a';c.fillRect(6,y,w-12,16);c.fillStyle='#00000030';c.fillRect(6,y+13,w-12,3);for(let k=0;k<6;k++){c.fillStyle='#4a3a2a';c.fillRect(10+rnd()*(w-30),y+2+rnd()*10,14,1)}}grain(c,w,h,8)});
 tex('platSurf',128,128,(c,w,h)=>{c.fillStyle='#9a968e';c.fillRect(0,0,w,h);noise(c,w,h,5000,'#6a665e',.25);noise(c,w,h,2500,'#c8c4ba',.2);blotch(c,w,h,6,'#7a766e',.2,10,30);c.fillStyle='#00000018';c.fillRect(0,0,w,1);c.fillRect(0,0,1,h);grain(c,w,h,6)});
 tex('tactile',64,64,(c,w,h)=>{c.fillStyle='#d8c890';c.fillRect(0,0,w,h);for(let y=0;y<4;y++)for(let x=0;x<4;x++){c.fillStyle='#a89860';c.beginPath();c.arc(8+x*16,8+y*16,5,0,7);c.fill();c.fillStyle='#f0e0a8';c.beginPath();c.arc(7+x*16,7+y*16,3,0,7);c.fill()}});
 tex('trainWin',256,128,(c,w,h)=>{c.fillStyle='#e9ece8';c.fillRect(0,0,w,h);const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#5a6470');g.addColorStop(1,'#2a3038');c.fillStyle=g;c.fillRect(10,10,w-20,h-20);
  c.fillStyle='#ffe8c040';c.fillRect(10,10,w-20,30);for(const x of[30,150]){c.fillStyle='#2a3a6a';c.fillRect(x,58,70,58);c.fillStyle='#3a4a8a';c.fillRect(x+4,54,62,10);c.fillStyle='#c0304a';c.fillRect(x+8,62,54,4)}
  c.fillStyle='#ffffff30';c.beginPath();c.moveTo(20,10);c.lineTo(70,10);c.lineTo(30,h-10);c.lineTo(10,h-10);c.fill();c.fillStyle='#c8ccd6';c.fillRect(w/2-3,10,6,h-20)});
 tex('trainDoor',128,256,(c,w,h)=>{c.fillStyle='#ffd166';c.fillRect(0,0,w,h);c.fillStyle='#e0b04a';c.fillRect(w/2-2,0,4,h);for(const x of[10,70]){c.fillStyle='#e9ece8';c.fillRect(x,30,48,90);c.fillStyle='#3a4450';c.fillRect(x+4,34,40,82)}
  c.fillStyle='#2a2a30';c.fillRect(54,140,20,20);c.fillStyle='#8affc1';c.beginPath();c.arc(64,150,6,0,7);c.fill();grain(c,w,h,5)});
 tex('trainOpen',128,256,(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#ffe8c0');g.addColorStop(1,'#c8a070');c.fillStyle=g;c.fillRect(0,0,w,h);c.fillStyle='#2a3a6a';c.fillRect(20,120,88,70);c.fillStyle='#3a4a8a';c.fillRect(24,110,80,16);
  c.fillStyle='#c8ccd6';c.fillRect(60,0,6,120);c.fillStyle='#8a7a6a';c.fillRect(0,h-30,w,30);c.fillStyle='#ffd166';c.fillRect(0,h-34,w,4)});
 tex('depart',512,256,(c,w,h)=>{c.fillStyle='#0a0a0e';c.fillRect(0,0,w,h);c.font='bold 22px monospace';c.fillStyle='#ffb020';c.fillText('DEPARTURES',16,30);c.fillText('09:08',400,30);c.font='17px monospace';
  const R=[['09:12','CONFERENCE QUARTER','4','ON TIME'],['09:20','HARBOURSIDE','2','ON TIME'],['09:31','NORTHGATE PARKWAY','6','DELAYED'],['09:40','AIRPORT EXPRESS','1','ON TIME'],['09:44','MILLBROOK','5','CANCELLED'],['10:02','THE COAST','7','ON TIME']];
  for(let i=0;i<R.length;i++){const y=66+i*30,r=R[i];c.fillStyle=i===0?'#ffd166':'#ff9a20';c.fillText(r[0],16,y);c.fillText(r[1],90,y);c.fillText(r[2],380,y);c.fillStyle=r[3]==='ON TIME'?'#ffb020':'#ff5d73';c.fillText(r[3],410,y)}
  c.fillStyle='#ffffff08';for(let y=0;y<h;y+=3)c.fillRect(0,y,w,1)});
 tex('pfBoard',512,128,(c,w,h)=>{c.fillStyle='#0a0a0e';c.fillRect(0,0,w,h);c.font='bold 30px monospace';c.fillStyle='#ffb020';c.fillText('09:12  CONFERENCE QUARTER',16,46);c.font='22px monospace';c.fillText('Calling at: Halcyon only',16,88);c.fillStyle='#8affc1';c.fillText('ON TIME',380,88)});
 tex('clockF',128,128,(c,w,h)=>{c.fillStyle='#1a1a20';c.fillRect(0,0,w,h);c.fillStyle='#f4efe6';c.beginPath();c.arc(64,64,58,0,7);c.fill();c.strokeStyle='#1a1a20';c.lineWidth=3;for(let i=0;i<12;i++){const a=i/12*Math.PI*2;c.beginPath();c.moveTo(64+Math.cos(a)*48,64+Math.sin(a)*48);c.lineTo(64+Math.cos(a)*55,64+Math.sin(a)*55);c.stroke()}
  c.lineWidth=5;c.beginPath();c.moveTo(64,64);c.lineTo(64+Math.cos(-Math.PI/2+.5*Math.PI*2/12*9.13)*0+Math.cos(Math.PI*2*(9.13/12)-Math.PI/2)*30,64+Math.sin(Math.PI*2*(9.13/12)-Math.PI/2)*30);c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(64,64);c.lineTo(64+Math.cos(Math.PI*2*(8/60)-Math.PI/2)*46,64+Math.sin(Math.PI*2*(8/60)-Math.PI/2)*46);c.stroke()});
 tex('ticketOff',512,224,(c,w,h)=>{c.fillStyle='#24493a';c.fillRect(0,0,w,h);c.fillStyle='#f4efe6';c.font='bold 30px Chakra Petch, sans-serif';c.textAlign='center';c.fillText('TICKET OFFICE',w/2,38);
  for(let i=0;i<3;i++){const x=24+i*164;c.fillStyle='#c9a46a';c.fillRect(x,60,136,150);const g=c.createLinearGradient(0,66,0,200);g.addColorStop(0,'#fff4dc');g.addColorStop(1,'#c8b898');c.fillStyle=g;c.fillRect(x+8,66,120,120);
   if(i!==1){c.fillStyle='#3a4a6a';c.beginPath();c.arc(x+68,116,16,0,7);c.fill();c.fillRect(x+44,134,48,52)}else{c.fillStyle='#1b1026';c.font='bold 16px sans-serif';c.fillText('CLOSED',x+68,130)}c.fillStyle='#1b1026';c.font='14px sans-serif';c.fillText('WINDOW '+(i+1),x+68,204)}grain(c,w,h,5)});
 tex('tvm',96,160,(c,w,h)=>{c.fillStyle='#1a3a7a';c.fillRect(0,0,w,h);c.fillStyle='#0a0a14';c.fillRect(12,20,72,56);c.fillStyle='#7cc4ff';c.fillRect(16,24,64,48);c.fillStyle='#1b1026';c.font='bold 9px sans-serif';c.fillText('BUY TICKETS',20,40);c.fillStyle='#ffd166';c.fillRect(20,50,56,8);c.fillStyle='#f4efe6';c.fillRect(20,60,56,8);
  c.fillStyle='#c8ccd6';c.fillRect(30,90,36,8);c.fillRect(30,110,36,4);c.fillStyle='#f4efe6';c.font='bold 10px sans-serif';c.fillText('TICKETS',24,14)});
 tex('menuB',256,128,(c,w,h)=>{c.fillStyle='#2a1a14';c.fillRect(0,0,w,h);c.fillStyle='#f4efe6';c.font='bold 13px sans-serif';const L=[['CHEESE & ONION','3.20'],['STEAK','3.80'],['CHEESE & ONION (LARGE)','4.10'],['SAUSAGE ROLL','2.60'],['TEA / COFFEE','2.20']];
  for(let i=0;i<L.length;i++){c.fillText(L[i][0],12,24+i*22);c.fillText(L[i][1],206,24+i*22)}});
 tex('coffeeB',256,128,(c,w,h)=>{c.fillStyle='#14182a';c.fillRect(0,0,w,h);c.fillStyle='#f4efe6';c.font='bold 13px sans-serif';const L=[['FLAT WHITE','3.10'],['CAPPUCCINO','3.20'],['OAT ANYTHING','+0.40'],['TEA','2.20'],['RAISED EYEBROW','FREE']];
  for(let i=0;i<L.length;i++){c.fillStyle=i===4?'#ffd166':'#f4efe6';c.fillText(L[i][0],12,24+i*22);c.fillText(L[i][1],196,24+i*22)}});
 tex('papers',256,160,(c,w,h)=>{c.fillStyle='#e9e3da';c.fillRect(0,0,w,h);for(let r=0;r<3;r++)for(let i=0;i<6;i++){const x=6+i*42,y=8+r*52;c.fillStyle=['#f4f4f0','#c0304a','#2a4a8a','#ffd166','#1b1026','#8affc1'][(i+r*2)%6];c.fillRect(x,y,36,46);c.fillStyle='#1b1026';c.fillRect(x+3,y+4,30,6);c.fillStyle='#00000030';c.fillRect(x+3,y+14,30,2);c.fillRect(x+3,y+20,24,2)}});
}
function buildStation(){
 stationTextures();
 region('station',{fog:[.78,.8,.86],fr:[120,560],day:1});const RG=G.regions.station;RG.amb=[.6,.6,.64];RG.lmCap=12;RG.lmPages={high:4,medium:3,low:2};
 const SUN=[.42,.74,.52];G.sun.station={d:SUN,c:[1,.9,.74],k:2.6,c0:[736,6,-14],half:68,res:4096};
 const M={brick:mt('brick','#c88a6a',.7,0,{r:.9}),stone:mt('stoneFloor',0,1/2.4,0,{r:.35}),plat:mt('platSurf',0,.5,0,{r:.85}),cope:mt('concrete','#e8e4dc',.5,0,{r:.7}),tact:mt('tactile',0,2.5,0,{r:.8}),
  yellow:MT.plain('#ffd166'),iron:mt('metal','#3a4a5a',.5,0,{r:.45,m:.5}),green:mt('metal','#24493a',.5,0,{r:.45,m:.4}),steel:mt('metal','#d8dce4',.5,0,{r:.3,m:.7}),cream:mt('ashlar',0,1/2.4,0,{r:.85}),
  board:mt('concrete','#c4ccd4',.5,0,{r:.8}),slate:mt('slate',0,.5,0,{r:.8}),sleep:mt('sleepers',0,1/2.6,0,{r:.95}),gravel:MT.gravel,rail:mt('metal','#8a8a90',.5,0,{r:.3,m:.8}),black:MT.plain('#16161c'),
  oak:mt('wood','#c8a070',.6,0,{r:.5}),stoneW:mt('concrete','#d8d0c0',.5,0,{r:.8}),lead:MT.plain('#5a5e66')};
 // long things are laid in pieces so no lightmap patch is longer than a page
 const longZ=(z0,z1,f,step)=>{step=step||24;for(let z=z0;z<z1-1e-6;z+=step)f(z,Math.min(z1,z+step))};
 const flo=(x0,z0,x1,z1,y,m,step)=>longZ(z0,z1,(a,b)=>floorQ(x0,a,x1,b,y,m),step);
 const mapR=(x0,z0,x1,z1,n,c)=>(MAPR.station=MAPR.station||[]).push({x0,z0,x1,z1,y:0,n,c:c||'#4a4a5a'});
 /* ================= THE TRAIN SHED ================= */
 const ISL=[[704.55,715.45,'1','2'],[723.55,734.45,'3','4'],[742.55,753.45,'5','6'],[761.55,772,'7',null]];
 const TRK=[703,717,722,736,741,755,760],BEDS=[[700,704.55],[715.45,723.55],[734.45,742.55],[753.45,761.55]];
 // track beds: ballast, sleepers, rails, from the buffers out of the shed and away to the north
 G.lmK=1;
 for(const[x0,x1]of BEDS){flo(x0,SZN,x1,SZW,STB,M.gravel,26);quad([x1,STB,SZW],[x0,STB,SZW],[x0,0,SZW],[x1,0,SZW],M.brick,(x1-x0)*.7,.8)}
 for(const c of TRK){flo(c-1.3,SZN,c+1.3,11.2,STB+.012,M.sleep,26.2);for(const k of[-1,1])longZ(SZN,11.4,(a,b)=>box(c+k*.7175-.035,STB+.012,a,c+k*.7175+.035,STB+.17,b,M.rail,{col:false}),26.2);
  // buffer stop: a steel frame, two sprung buffers, a red lamp
  box(c-1,STB,11.3,c+1,STB+1.25,11.9,MT.gloss('#c0242e'),{col:false});box(c-1.05,STB+.95,11.25,c+1.05,STB+1.3,11.95,M.yellow,{col:false});
  for(const k of[-1,1])box(c+k*.75-.17,STB+.75,10.85,c+k*.75+.17,STB+1.09,11.3,M.black,{col:false});box(c-.1,STB+1.3,11.5,c+.1,STB+1.5,11.7,MT.glow('#ff2a3a',2.2),{col:false,b:1})}
 // the platforms: brick faces, a white coping, tactile strip and yellow line, an invisible rail so nobody steps off
 for(const[a,b]of ISL){flo(a,SZN,b,SZW,0,M.plat,26);for(let z=SZN;z<SZW;z+=26)surf(a,z,b,Math.min(SZW,z+26),0);
  for(const[e,s]of[[a,1],[b,-1]]){if(e>=771.9)continue;
   longZ(SZN,SZW,(z0,z1)=>{if(s>0)quad([e,STB,z0],[e,STB,z1],[e,0,z1],[e,0,z0],M.brick,(z1-z0)*.7,.8);else quad([e,STB,z1],[e,STB,z0],[e,0,z0],[e,0,z1],M.brick,(z1-z0)*.7,.8)},26);
   const X=(d0,d1)=>[Math.min(e+s*d0,e+s*d1),Math.max(e+s*d0,e+s*d1)];
   longZ(SZN,SZW,(z0,z1)=>{let[p,q]=X(-.03,.45);box(p,-.06,z0,q,.02,z1,M.cope,{col:false});[p,q]=X(.45,.85);box(p,0,z0,q,.012,z1,M.tact,{col:false});[p,q]=X(1,1.1);box(p,0,z0,q,.006,z1,M.yellow,{col:false})},26);
   const[p,q]=X(0,.06);colBox(p,SZN,q,SZW,0,1.6)}
  // the far end of each platform: a railing and a "no entry beyond" sign
  railing(a,SZN+.2,Math.min(b,771.8),SZN+.2,0,{h:1.1,m:M.green})}
 // the walkway across the ends of the tracks, behind the barriers
 floorQ(700,SZW,772,20,0,M.plat);surf(700,SZW,772,20,0);
 for(const[x0,x1]of BEDS){colBox(x0,SZW,x1,SZW+.15,0,1.6);railing(x0+.1,SZW+.08,x1-.1,SZW+.08,0,{h:1.05,m:M.green})}
 mapR(700,SZN,772,SZW,'Platforms','#3a3a44');mapR(700,SZW,772,20,'','#4a4a5a');
 // side walls: brick, with pilasters under every rib
 const RIBZ=[];for(let k=0;k<=10;k++)RIBZ.push(20-8.6*k);
 for(const[x,s]of[[700,1],[772,-1]]){const t0=s>0?x-.4:x,t1=s>0?x:x+.4;longZ(SZN,20,(z0,z1)=>box(t0,STB,z0,t1,8,z1,M.brick,{col:true}),21.5);
  for(const z of RIBZ){if(z>19)continue;const p0=s>0?x:x-.55,p1=s>0?x+.55:x;box(p0,STB,z-.4,p1,7.5,z+.4,M.brick,{col:true});box(Math.min(x,x+s*.75),7.5,z-.55,Math.max(x,x+s*.75),8,z+.55,M.stoneW,{col:false})}}
 // the arch: ribs, purlins, the roof skin (glass in the middle, boarded and slated at the sides), glazing bars
 {const N=24,P=[];for(let i=0;i<=N;i++){const x=700+72*i/N;P.push([x,SAR(x)])}
  for(const z of RIBZ){for(let i=0;i<N;i++){const[a,ya]=P[i],[b,yb]=P[i+1];kBeam([a,ya-.32,z],[b,yb-.32,z],.32,.5,M.iron,[0,0,1])}}
  for(let i=1;i<N;i++){const[x,y]=P[i];longZ(SZN,20,(z0,z1)=>box(x-.07,y-.2,z0,x+.07,y-.05,z1,M.iron,{col:false}),21.5)}
  for(let i=0;i<N;i++){const[a,ya]=P[i],[b,yb]=P[i+1],mid=(a+b)/2,glass=Math.abs(mid-736)<26,len=Math.hypot(b-a,yb-ya);
   if(glass){longZ(SZN,20,(z0,z1)=>quad([a,ya,z0],[b,yb,z0],[b,yb,z1],[a,ya,z1],MT.glass,1,1),43);
    for(let z=SZN+2.15;z<20;z+=2.15)if(!RIBZ.some(r=>Math.abs(r-z)<.3))kBeam([a,ya-.04,z],[b,yb-.04,z],.05,.07,M.iron,[0,0,1])}
   else longZ(SZN,20,(z0,z1)=>{quad([a,ya,z0],[b,yb,z0],[b,yb,z1],[a,ya,z1],M.board,len/1.2,(z1-z0)/1.2);quad([a,ya+.05,z0],[a,ya+.05,z1],[b,yb+.05,z1],[b,yb+.05,z0],M.slate,(z1-z0)/2,len/2)},21.5)}
  // a ridge vent along the crown, and the end ribs doubled up
  box(733.5,26,SZN,738.5,26.9,20,{side:M.iron,top:M.lead},{col:false});
  for(const z of[SZN,20])for(let i=0;i<N;i++){const[a,ya]=P[i],[b,yb]=P[i+1];kBeam([a,ya-.9,z],[b,yb-.9,z],.5,.5,M.iron,[0,0,1])}
  // the glazed screen above the concourse roof, at the south end of the arch
  for(let i=0;i<N;i++){const[a,ya]=P[i],[b,yb]=P[i+1];const lo=12;if(Math.max(ya,yb)<=lo)continue;const A=[a,Math.max(lo,Math.min(ya,yb)),19.9];
   if(Math.min(ya,yb)>lo)quad([a,lo,19.9],[b,lo,19.9],[b,Math.min(ya,yb),19.9],[a,Math.min(ya,yb),19.9],MT.glass,1,1);
   if(ya<yb)tri([a,Math.max(lo,ya),19.9],[b,Math.max(lo,ya),19.9],[b,yb,19.9],MT.glass);else tri([a,Math.max(lo,yb),19.9],[b,Math.max(lo,yb),19.9],[a,ya,19.9],MT.glass)}
  for(let x=704;x<770;x+=4){const y=SAR(x);if(y>13)box(x-.05,12.6,19.85,x+.05,y-.1,19.95,M.iron,{col:false})}}
 // lamps down the platforms: green iron posts with lanterns
 const post=(x,z,lit)=>{box(x-.09,0,z-.09,x+.09,.5,z+.09,M.green,{col:false});box(x-.05,.5,z-.05,x+.05,3.6,z+.05,M.green,{col:false});box(x-.18,3.6,z-.18,x+.18,3.66,z+.18,M.green,{col:false});
  box(x-.14,3.66,z-.14,x+.14,4.02,z+.14,MT.glow('#ffe2b0',1.3),{col:false});box(x-.2,4.02,z-.2,x+.2,4.1,z+.2,M.green,{col:false});colBox(x-.12,z-.12,x+.12,z+.12,0,3);if(lit)addLight(x,3.4,z,hx('#ffe2b0'),8,.55)};
 for(const z of[6,-8,-22,-36,-50])post(729,z,z>-40);for(const z of[4,-16])post(710,z,true);for(const z of[4,-16])post(748,z,true);post(766.5,-2,true);
 /* platform furniture on 3 | 4 */
 {// hanging platform signs at the end of each island
  for(const[a,b,l,r]of ISL){const cx=(a+b)/2;for(const x of[cx-1.6,cx+1.6])box(x-.06,0,10.8,x+.06,3.4,10.92,M.green,{col:false});box(cx-1.75,3.4,10.75,cx+1.75,4.2,10.97,M.green,{col:false});
   kSign(cx,3.45,10.98,3.4,.7,'s',r?l+'  |  '+r:l,'#f4efe6','#24493a');colBox(cx-1.7,10.75,cx+1.7,10.97,0,2)}
  // the platform 4 indicator over the 09:12
  box(727.35,3,6.85,730.65,3.9,7.15,M.black,{col:false});kTq(729,3.08,7.155,3.1,.74,'s',mt('pfBoard',0,1,1,{k:1.2}));kTq(729,3.08,6.845,3.1,.74,'n',mt('pfBoard',0,1,1,{k:1.2}));for(const x of[727.5,730.5]){box(x-.06,0,6.94,x+.06,3,7.06,M.green);}
  // benches, bins, a vending machine, a shelter
  const bench=(x,z,al)=>{const m=M.oak,k=M.green;if(al==='z'){box(x-.25,.42,z-1,x+.25,.47,z+1,m,{col:false});box(x-.04,.47,z-1,x+.04,.92,z+1,m,{col:false});for(const d of[-.85,.85])box(x-.27,0,z+d-.04,x+.27,.42,z+d+.04,k,{col:false});colBox(x-.27,z-1,x+.27,z+1,0,.92)}
   else{box(x-1,.42,z-.25,x+1,.47,z+.25,m,{col:false});box(x-1,.47,z-.04,x+1,.92,z+.04,m,{col:false});for(const d of[-.85,.85])box(x+d-.04,0,z-.27,x+d+.04,.42,z+.27,k,{col:false});colBox(x-1,z-.27,x+1,z+.27,0,.92)}};
  for(const z of[0,-12,-28])bench(729,z,'z');bench(710,-2,'z');bench(748,-6,'z');kBin(729,-6,0,'#24493a');kBin(729,-20,0,'#24493a');
  {const x=728.6,z=-14.5;box(x-.45,0,z-.4,x+.45,1.85,z+.4,MT.gloss('#c0304a'));kTq(x-.456,.55,z,.66,1.1,'w',mt('vend',0,1,1,{k:1.1}),.66,1.1);kTq(x+.456,.55,z,.66,1.1,'e',mt('vend',0,1,1,{k:1.1}),.66,1.1)}
  {const x0=726.4,x1=731.6,z0=-46,z1=-40,g=MT.glass;box(x0,2.4,z0,x1,2.5,z1,M.green,{col:false});for(const[x,z]of[[x0,z0],[x1,z0],[x0,z1],[x1,z1]])box(x-.05,0,z-.05,x+.05,2.4,z+.05,M.green);
   box(x0,.1,z0-.01,x1,2.3,z0+.01,g,{col:false});box(x0-.01,.1,z0,x0+.01,2.3,z1,g,{col:false});box(x1-.01,.1,z0,x1+.01,2.3,z1,g,{col:false});colBox(x0,z0-.05,x1,z0+.05,0,2.4);colBox(x0-.05,z0,x0+.05,z1,0,2.4);colBox(x1-.05,z0,x1+.05,z1,0,2.4);
   box(x0+.3,.42,z0+.15,x1-.3,.47,z0+.6,M.oak,{col:false});box(x0+.3,0,z0+.15,x0+.4,.42,z0+.6,M.green,{col:false});box(x1-.4,0,z0+.15,x1-.3,.42,z0+.6,M.green,{col:false});colBox(x0+.3,z0+.15,x1-.3,z0+.6,0,.47)}
 }
 /* ================= THE TRAINS ================= */
 // the 09:12 on Platform 4: three cars, white with a teal band, yellow doors; one door open with the light on inside
 const train=(c,zf,cars,liv,openZ)=>{const x0=c-1.45,x1=c+1.45,L=24,win=mt('trainWin',0,1,1,{k:.72}),dr=mt('trainDoor',0,1,0,{r:.35}),body=MT.gloss(liv.body),band=MT.gloss(liv.band);
  for(let k=0;k<cars;k++){const za=zf-k*(L+.25),zb=za-L;
   box(x0,-.9,zb,x1,3.3,za,{side:body,top:MT.plain('#8a8e96')});box(x0+.2,3.3,zb+.3,x1-.2,3.55,za-.3,MT.plain('#8a8e96'),{col:false});
   box(x0+.25,STB,zb+2,x1-.25,-.9,zb+5,M.black,{col:false});box(x0+.25,STB,za-5,x1-.25,-.9,za-2,M.black,{col:false});
   const doors=[za-6,za-18];
   for(const[x,f]of[[x0-.006,'w'],[x1+.006,'e']]){
    let cur=za-.6;const segs=[];for(const d of doors){segs.push([d+.8,cur]);cur=d-.8}segs.push([zb+.6,cur]);
    for(const[s0,s1]of segs){if(s1-s0<.3)continue;kTq(x,1.02,(s0+s1)/2,s1-s0,.95,f,win,2.2,.95);kTq(x,.3,(s0+s1)/2,s1-s0,.28,f,band,1,1)}
    for(const d of doors){const open=f==='w'&&openZ!==undefined&&Math.abs(d-openZ)<.1;kTq(x,.04,d,1.5,2.2,f,open?mt('trainOpen',0,1,1,{k:.9}):dr,1.5,2.2);
     if(open){const xo=f==='w'?x0-.03:x1+.03;box(Math.min(x0,xo),.04,d-.82,Math.max(x0,xo),2.28,d-.75,M.yellow,{col:false});box(Math.min(x0,xo),.04,d+.75,Math.max(x0,xo),2.28,d+.82,M.yellow,{col:false});box(Math.min(x0,xo),2.24,d-.82,Math.max(x0,xo),2.31,d+.82,M.yellow,{col:false});
      box(Math.min(x0,xo),2.4,d-.6,Math.max(x0,xo)-(f==='w'?.01:0),2.48,d+.6,MT.glow('#8affc1',1.4),{col:false});addLight(x0-.8,1.8,d,[1,.88,.7],4.5,.55)}}}
   if(k===0){box(x0+.05,-.9,za,x1-.05,3.1,za+.6,MT.gloss(liv.nose),{col:false});box(x0+.25,1.6,za+.6,x1-.25,2.6,za+.62,MT.gloss('#1a2028'),{col:false});
    for(const x of[x0+.4,x1-.4])box(x-.16,.3,za+.6,x+.16,.5,za+.63,MT.glow('#fff4d8',2.2),{col:false,b:1})}
   if(k<cars-1)box(x0+.35,-.4,zb-.25,x1-.35,3,zb,M.black,{col:false})}};
 train(736,10.4,3,{body:'#eef0ee',band:'#1f8a8a',nose:'#ffd166'},4.4);
 train(755,6,3,{body:'#3a4a8a',band:'#f4efe6',nose:'#ffd166'});
 vfx('smoke',{b0:[755,3.7,-30],n:12,size:.25,col:[.75,.75,.78],op:.08,sp:.5});
 /* ================= THE CONCOURSE ================= */
 const CY=12;
 floorQ(700.2,20,771.8,47.8,0,M.stone);surf(700.2,20,771.8,47.8,0);mapR(700,20,772,48,'Concourse','#4a4a5a');
 for(const x of[724,736,748])door('h',48,x,5,6,0);
 wallLine('v',700,20,47.8,0,CY,M.cream,1);wallLine('v',772,20,47.8,0,CY,M.cream,-1);wallLine('h',48,700,772,0,CY,M.cream,-1);
 // the screen wall over the barrier line, on a riveted girder
 box(700,7,19.8,772,CY,20.2,M.cream,{col:false});box(700.2,6.55,19.7,771.8,7,20.3,M.iron,{col:false,b:1});
 // the portals: glazed doors (closed; the taxi rank is an interaction), fanlights above
 for(const x of[724,736,748]){box(x-2.5,0,47.88,x+2.5,6,47.92,MT.glass,{col:false});box(x-.03,0,47.86,x+.03,6,47.94,M.iron,{col:false});box(x-2.5,2.6,47.86,x+2.5,2.68,47.94,M.iron,{col:false});colBox(x-2.5,47.7,x+2.5,48,0,6);
  kSign(x,6.25,47.79,3.2,.5,'n',x===736?'WAY OUT · TAXIS':'WAY OUT','#f4efe6','#24493a')}
 // the glass roof on a steel diagrid, held up by two steel trees
 box(700.2,CY,20.2,771.8,CY+.04,47.8,MT.glass,{col:false});
 {const bx0=700.2,bx1=771.8,bz0=20.2,bz1=47.8,sp=6;const clip=(x,z,dx,dz)=>{let t0=-1e9,t1=1e9;for(const[p,d,lo,hi]of[[x,dx,bx0,bx1],[z,dz,bz0,bz1]]){if(Math.abs(d)<1e-9)continue;let a=(lo-p)/d,b=(hi-p)/d;if(a>b)[a,b]=[b,a];t0=Math.max(t0,a);t1=Math.min(t1,b)}return t1>t0?[[x+dx*t0,z+dz*t0],[x+dx*t1,z+dz*t1]]:null};
  for(let c=bx0-30;c<bx1+30;c+=sp){for(const[dx,dz,yo]of[[1,1,0],[1,-1,.025]]){const s=clip(c,bz0,dx,dz);if(!s)continue;kBeam([s[0][0],CY-.2-yo,s[0][1]],[s[1][0],CY-.2-yo,s[1][1]],.32,.2,M.steel,[0,1,0])}}
  for(const[x0,z0,x1,z1]of[[bx0,bz0,bx1,bz0+.3],[bx0,bz1-.3,bx1,bz1],[bx0,bz0,bx0+.3,bz1],[bx1-.3,bz0,bx1,bz1]])box(x0,CY-.5,z0,x1,CY,z1,M.steel,{col:false});
  for(const[tx,tz]of[[718,34],[754,34]]){box(tx-.3,0,tz-.3,tx+.3,6.5,tz+.3,M.steel);box(tx-.45,0,tz-.45,tx+.45,.3,tz+.45,M.stoneW,{col:false});
   for(const[dx,dz]of[[1,1],[1,-1],[-1,1],[-1,-1],[1.4,0],[-1.4,0]])kBeam([tx,6.3,tz],[tx+dx*4.5,CY-.45,tz+dz*4.5],.22,.22,M.steel)}}
 // the departures board and the clock, over the gate line
 {const z=22.6;box(728,6,z-.15,744,8.7,z+.15,M.black,{col:false});kTq(736,6.1,z+.156,15.8,2.5,'s',mt('depart',0,1,1,{k:1.25}));kTq(736,6.1,z-.156,15.8,2.5,'n',mt('depart',0,1,1,{k:1.25}));
  for(const x of[730,742])box(x-.03,8.7,z-.03,x+.03,CY-.5,z+.03,M.black,{col:false});
  const cz=30,cy=7.2;box(735.55,cy,cz-.45,736.45,cy+.9,cz+.45,M.black,{col:false});for(const[d,x,zz]of[['s',736,cz+.456],['n',736,cz-.456],['e',736.456,cz],['w',735.544,cz]])kTq(x,cy+.05,zz,.8,.8,d,mt('clockF',0,1,0,{r:.5}));box(735.97,cy+.9,cz-.03,736.03,CY-.5,cz+.03,M.black,{col:false})}
 // the barrier line: gates every 1.4 m with glass paddles shut; one wide gate open opposite Platforms 3 and 4
 {const z0=20.5,z1=21.5;for(let k=0;k<=34;k++){if(k===13)continue;const x=712+1.4*k;box(x-.15,0,z0,x+.15,1.05,z1,MT.plain('#3a3e48'));box(x-.15,1.05,z0,x+.15,1.08,z1,MT.plain('#2a2a30'),{col:false});box(x-.152,.92,z0+.2,x+.152,.98,z0+.5,MT.glow(k===12||k===14?'#8affc1':'#ff5d73',1.6),{col:false});
   if(k<34&&k!==12){box(x+.15,.45,z0+.48,x+.7-.01,1.15,z0+.52,MT.glass,{col:false});box(x+.7+.01,.45,z0+.48,x+1.25,1.15,z0+.52,MT.glass,{col:false});colBox(x+.15,z0+.4,x+1.25,z0+.6,0,1.2)}}
  for(const[x0,x1]of[[700.2,711.85],[759.75,771.8]]){box(x0,0,20.95,x1,1.2,21.0,MT.glass,{col:false});box(x0,1.2,20.92,x1,1.26,21.03,M.steel,{col:false});colBox(x0,20.9,x1,21.05,0,1.3)}
  for(const x of[728.8,731.6])box(x-.03,1.08,20.97,x+.03,2.66,21.03,M.black,{col:false});box(728.8,2.3,20.98,731.6,2.64,21.02,M.black,{col:false});kSign(730.2,2.32,21.025,2.6,.3,'s','PLATFORMS 3 · 4 · 09:12','#ffd166','#1b1026')}
 // the west wall: the ticket office, machines, left luggage
 {const f=700.2;kOnWall('v',f,1,27.5,7.6,.4,3.3,mt('ticketOff',0,1,0,{r:.6}));kWall('v',f,1,23.7,31.3,1.05,1.1,0,.32,M.oak,true);kWall('v',f,1,23.7,31.3,0,1.05,0,.3,M.board);
  for(let i=0;i<4;i++){const z=33.6+i*1.4;box(f,0,z-.45,f+.62,1.8,z+.45,MT.gloss('#1a3a7a'));kTq(f+.624,.55,z,.8,1.1,'e',mt('tvm',0,1,1,{k:1.05}),.8,1.1)}
  kSign(f+.01,2.3,35.7,4,.42,'e','TICKETS · ANY MACHINE','#f4efe6','#1a3a7a');
  kTq(f+.016,.02,42,1.8,2.3,'e',MT.door);kSign(f+.01,2.6,42,2.2,.4,'e','LEFT LUGGAGE','#f4efe6','#24493a');kSign(f+.01,2.6,45.6,1.6,.4,'e','TOILETS →','#f4efe6','#24493a')}
 // the east wall: Pasty Palace, Platform Coffee, Paper & Co
 const kiosk=(z0,z1,name,col,menu,warm)=>{const x0=765.6,x1=766.6,f=771.8;box(x1,0,z0,f,3.6,z1,{side:MT.plain(col),top:M.lead});
  box(x0,0,z0+.4,x1,1.05,z1-.4,MT.plain('#2a2a30'));box(x0-.02,1.05,z0+.35,x1,1.1,z1-.35,M.oak,{col:false});box(x0+.05,1.1,z0+.6,x0+.5,1.5,z1-.6,MT.glass,{col:false});
  kTq(x0+.28,1.12,(z0+z1)/2,z1-z0-1.4,.3,'w',mt('pastry',0,1,0,{r:.7}),1.2,.3);
  for(const z of[z0,z1-.1])box(x0,0,z,x1,3,z+.1,MT.plain(col),{col:true});box(x0,3,z0,x1,3.6,z1,MT.plain(col),{col:false});kSign(x0-.006,3.06,(z0+z1)/2,z1-z0-.4,.48,'w',name,'#f4efe6',col);
  kTq(x1-.006,1.7,(z0+z1)/2,2.4,1.2,'w',mt(menu,0,1,1,{k:1.05}));addLight(x0-.4,2.6,(z0+z1)/2,hx(warm),5,.4)};
 kiosk(22.5,29.5,'PASTY PALACE','#7a3a1a','menuB','#ffd9a0');kiosk(32,38.5,'PLATFORM COFFEE','#1f4a4a','coffeeB','#ffe2b0');
 vfx('steam',{b0:[766.2,1.5,26],n:12,size:.5,op:.18,sp:.9});vfx('steam',{b0:[767.4,1.4,33.2],n:12,size:.45,op:.2,sp:1.1});
 {const f=771.8;kOnWall('v',f,-1,44,5,0,3.2,MT.plain('#16161c'));kTq(f-.012,.5,44,4.4,2.2,'w',mt('papers',0,1,1,{k:.75}),2.2,2.2);kSign(f-.014,2.85,44,4,.5,'w','PAPER & CO · NEWS · SNACKS','#ffd166','#1b1026')}
 // seating, planters, the piano
 const cbench=(x,z)=>{box(x-1.5,.42,z-.55,x+1.5,.47,z+.55,M.oak,{col:false});box(x-1.5,.47,z-.05,x+1.5,.95,z+.05,M.oak,{col:false});for(const d of[-1.3,1.3])box(x+d-.05,0,z-.55,x+d+.05,.42,z+.55,M.steel,{col:false});colBox(x-1.5,z-.55,x+1.5,z+.55,0,.95)};
 cbench(728,38);cbench(744,38);cbench(722,44);cbench(750,44);
 kPlanter(710,27,713,30,.6,0,MT.plain('#3a3e48'));kPlanter(757,41,760,44,.6,0,MT.plain('#3a3e48'));
 {const x=708,z=45.2;box(x-.75,0,z-.3,x+.75,1.25,z+.3,MT.gloss('#1a1416'));box(x-.72,.72,z-.45,x+.72,.78,z-.3,MT.plain('#f4efe6'),{col:false});for(let i=0;i<10;i++)box(x-.68+i*.14,.785,z-.43,x-.62+i*.14,.79,z-.37,MT.plain('#16161c'),{col:false});
  box(x-.75,1.25,z-.3,x+.75,1.28,z+.3,MT.gloss('#2a2026'),{col:false});kStool(x,z-1.05,.48,MT.gloss('#1a1416'));kSign(x,.95,z-.306,.8,.18,'n','PLAY ME','#ffd166','#1b1026')}
 // pendant lights in the concourse
 for(const x of[712,736,760])for(const z of[27,41])if(!(x===736&&z===27))kPendant(x,CY-.5,z,3.2,.3,'#ffe2b0',10,.45);
 // the busker's pitch between the planters: a warm pool of light so whoever plays there isn't in the dark
 kPendant(715.5,CY-.5,34.6,3.2,.3,'#ffd9a8',9,.7);addLight(715.5,2.4,35.6,[1,.86,.66],6,.55);
 vfx('dust',{b0:[702,.4,21],b1:[770,9,47],n:160,size:1.2,col:[1,.92,.8],op:.28,sp:.5});
 vfx('dust',{b0:[702,.4,-60],b1:[770,12,12],n:200,size:1.4,col:[1,.92,.8],op:.26,sp:.4});
 vfx('birds',{b0:[712,14,-50],b1:[760,20,-10],n:7,size:.5,col:[.3,.3,.34],op:.9,sp:.5});
 // sunbeams: down through the concourse roof and the shed glazing
 for(const[x0,z0,x1,z1]of[[708,24,716,30],[730,34,740,40],[752,24,760,30],[718,40,726,46]])vfx('beam',{pts:[[x0,CY,z0],[x1,CY,z0],[x1,CY,z1],[x0,CY,z1]],sun:SUN,floor:.01,len:16,op:.022});
 for(const[x0,z0,x1,z1]of[[720,-40,730,-30],[740,-20,750,-10],[726,-6,734,2]])vfx('beam',{pts:[[x0,24,z0],[x1,24,z0],[x1,24,z1],[x0,24,z1]],sun:SUN,floor:0,len:30,op:.018});
 /* ================= OUTSIDE ================= */
 G.lmK=.3;
 // the forecourt and taxi rank, seen through the portals
 {const P=0,Y=-.12;floorQ(690,47.8,782,62,P,MT.pavers);floorQ(690,62,782,72,Y,MT.road);floorQ(690,72,782,76,P,MT.pavers);box(690,Y,62,782,P,62.15,M.stoneW,{col:false});box(690,Y,71.85,782,P,72,M.stoneW,{col:false});
  box(700,5.6,48,772,5.75,52.5,M.steel,{col:false});box(700,5.75,48,772,5.8,52.5,MT.glass,{col:false});for(const x of[706,724,748,766])box(x-.08,0,52.3,x+.08,5.6,52.46,M.steel,{col:false});
  car(722,65,'x','#1a1a20',{y:Y,taxi:1});car(728,65,'x','#1a1a20',{y:Y,taxi:1});car(745,69,'x','#c0304a',{y:Y});car(760,65,'x','#1a1a20',{y:Y,taxi:1});
  kSign(736,2.4,58,2,.5,'s','TAXIS','#1b1026','#ffd166');box(735.95,0,57.95,736.05,2.4,58.05,M.black,{col:false});
  const rows={facBrick:4,facYellow:4,facRender:5,facGrey:5,facTall:8};
  for(const[x0,x1,h,ft,nm,col]of[[680,704,18,'facRender','THE GRAND CENTRAL HOTEL','#ffd166'],[704,722,14,'facBrick','THE RAILWAY ARMS','#e9c46a'],[722,744,22,'facGrey','LEFT LUGGAGE & LOCKERS','#7cc4ff'],[744,762,16,'facYellow','CORNER CAFE','#ff8fc8'],[762,790,26,'facTall','PLATFORM HOUSE','#8affc1']]){
   const z0=76,w=x1-x0,fh=h-4.4;box(x0,P,z0,x1,P+h,z0+16,{side:M.stoneW,top:M.lead},{col:false,nz0:1});kTq((x0+x1)/2,P+4.4,z0,w,fh,'n',mt(ft,0,1,0,{r:.6}),w/Math.max(1,Math.round(w/8)),fh/Math.max(1,Math.round(fh/(rows[ft]*3.6))));
   box(x0,P,z0-.05,x1,P+4.1,z0,MT.plain('#1a1c22'),{col:false});kTq((x0+x1)/2,P+.5,z0-.06,w-1.6,2.6,'n',mt('shopwin',0,1,1,{k:.62}),4.6,2.6);kSign((x0+x1)/2,P+3.2,z0-.07,Math.min(w-1.2,nm.length*.4+1),.6,'n',nm,col,'#1b1026');box(x0,P+4.1,z0-.25,x1,P+4.4,z0,M.stoneW,{col:false})}
  for(const x of[696,712,760,776])kStreetLamp(x,61.4,P);for(const x of[700,770])tree(x,74,P)}
 // north: the tracks run out of the shed in a brick cutting, under a road bridge, past a signal gantry, into the city
 {G.lmK=.2;const z0=-560,z1=SZN;flo(700,z0,772,z1,STB,M.gravel,48);for(const c of TRK){flo(c-1.3,z0,c+1.3,z1,STB+.012,M.sleep,46.8);for(const k of[-1,1])longZ(z0,z1,(a,b)=>box(c+k*.7175-.035,STB+.012,a,c+k*.7175+.035,STB+.17,b,M.rail,{col:false}),46.8)}
  for(const[x,s]of[[700,-1],[772,1]]){const t0=s<0?x-.6:x,t1=s<0?x:x+.6;longZ(z0,z1,(a,b)=>box(t0,STB,a,t1,4.5,b,M.brick,{col:false}),41);longZ(z0,z1,(a,b)=>box(t0-.1,4.5,a,t1+.1,4.8,b,M.stoneW,{col:false}),41)}
  // the road bridge
  box(696,4.2,-160,776,5.6,-150,{side:M.brick,top:MT.road},{col:false,b:1});box(696,5.6,-160,776,6.6,-159.6,M.brick,{col:false});box(696,5.6,-150.4,776,6.6,-150,M.brick,{col:false});
  car(720,-157.6,'x','#2a4a8a',{y:5.6});car(752,-152.4,'x','#ffd166',{y:5.6});{const bx=740,bz=-155,m=MT.gloss('#c0242e');box(bx-5.5,5.95,bz-1.25,bx+5.5,9.9,bz+1.25,m,{col:false})}
  // the signal gantry
  box(701,STB,-110.3,701.6,7.4,-109.7,M.iron,{col:false});box(770.4,STB,-110.3,771,7.4,-109.7,M.iron,{col:false});box(701.05,6.8,-110.4,770.95,7.4,-109.6,M.iron,{col:false});
  for(const c of TRK){box(c-.35,5.2,-110.3,c+.35,6.8,-109.9,M.black,{col:false});box(c-.12,6.2,-109.9,c+.12,6.44,-109.86,MT.glow(c===736?'#8affc1':'#ff2a3a',2.4),{col:false});box(c-.12,5.5,-109.9,c+.12,5.74,-109.86,MT.plain('#3a3a3a'),{col:false})}
  // the backs of buildings either side of the cutting
  floorQ(600,-560,700-.7,SZN,4.5,MT.concrete);floorQ(772.7,-560,880,SZN,4.5,MT.concrete);
  for(let i=0;i<20;i++){const zz=-80-i*24,hh=10+(i*7%3)*4,ft=['facBrick','facYellow','facRender'][i%3];box(672,4.5,zz-22,690,4.5+hh,zz,{side:mt(ft,0,1/8,0,{r:.85}),top:M.lead},{col:false});box(782,4.5,zz-22,800,4.5+hh+2,zz,{side:mt(['facGrey','facBrick','facTall'][i%3],0,1/8,0,{r:.85}),top:M.lead},{col:false})}
  for(const[x,z]of[[694,-90],[694,-140],[778,-120],[778,-200],[694,-230]])tree(x,z,4.5);
  vfx('birds',{b0:[680,30,-260],b1:[800,44,-140],n:18,size:1.1,col:[.18,.17,.2],op:.9,sp:.7})}
 // the city beyond, in the haze (unlit)
 G.lmK=1;
 {const far=[mt('facTall',0,.06,1,{k:.75}),mt('facGrey',0,.06,1,{k:.72}),mt('cwFac',0,.04,1,{k:.75}),mt('facRender',0,.07,1,{k:.75}),mt('cwFac2',0,.04,1,{k:.75})];
  floorQ(300,-900,1200,500,STB-.3,mt('concrete','#8a8a84',.02,1,{k:.55}));
  for(let i=0;i<60;i++){const a=i/60*Math.PI*2,R=200+(i*37%60),x=736+Math.cos(a)*R,z=-100+Math.sin(a)*R*1.3,w=18+(i*13%14),h=24+(i*29%50);if(Math.abs(x-736)<60&&z<-100)continue;box(x-w/2,STB-.3,z-w/2,x+w/2,h,z+w/2,{side:far[i%5],top:MT.plain('#5a5a66')},{col:false})}
  for(let i=0;i<44;i++){const a=i/44*Math.PI*2+.3,R=330+(i*53%140),x=736+Math.cos(a)*R,z=-100+Math.sin(a)*R*1.2,w=16+(i*7%16),h=40+(i*41%120);box(x-w/2,STB-.3,z-w/2,x+w/2,h,z+w/2,{side:far[(i+2)%5],top:MT.plain('#5a5a66')},{col:false})}}
 /* ================= areas ================= */
 const A=(k,n,r,sp,bg,o)=>area(k,n,'station',r,sp,bg,o);
 A('station','Central Station',[700,20,772,48],[736,45,0,0],'train');
 A('platform','Platform 4',[700,SZN,772,20],[729.7,17,0,0],'train');
}
