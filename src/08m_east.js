/* ============ THE EXPO HALL, THE SOUTH-EAST CONCOURSE, VILLAGE ROW ============ */
/* Expo (x 56..134, z -54..20, 16.5 m to a trussed roof): a grid of booths on aisles, the twelve indie stalls, the Con
   Store, the demo stage. Windows look into it from Ring East (L1, L2), the NE concourse (L2) and the south-east
   corridor (L1). Village Row (x 134..196) is two storeys round a corridor (x 158..168): lockpicking, the CTF arena and
   the Blue Team SOC on the west; car hacking, ICS, social engineering and aerospace on the east; workshops, the hardware
   hacking village, Creator Corner, the retro arcade, tabletop games and the film room upstairs. */
const STALLS=[['STICKERS','#ff8fc8'],['LOCK PICKS','#ffd166'],['LEDs & BADGES','#2bf0ff'],['SUSPICIOUS USB CABLES','#ff5d73'],['LANYARDS ONLY','#8affc1'],['T-SHIRTS','#c9b6ff'],['KEYBOARDS','#ffb347'],['BOOKS & ZINES','#7cc4ff'],['RETRO COMPUTERS','#9be36b'],['FPGA BOARDS','#2bf0ff'],['"MILITARY-GRADE" VPNs','#ff5d73'],['FARADAY BAGS','#8affc1']];
/* where each indie stall's counter is (the stall interactions stand in front of these) */
const STALLPOS=STALLS.map((s,i)=>({x:66+(i%6)*10,z:-31+Math.floor(i/6)*10}));
function buildEast(){
 const D=door,W=wallLine,GL=MT.glass,CH=MT.chrome,WC=MT.wallCon,WP=MT.wallPale;
 const mr=(x0,z0,x1,z1,y,n,c)=>(MAPR.con=MAPR.con||[]).push({x0,z0,x1,z1,y,n,c:c||'#3a3a5a'});
 /* ---------- doors ---------- */
 D('h',20,75,6,4.5);D('h',20,115,6,4.5);                                   // expo <-> SE concourse
 D('h',34,70,3,3);D('h',34,70,2,2.6,L1);                                    // chill-out, quiet room from the SE side
 for(const[c,w]of[[-42,3],[-15,4],[10,3]]){D('v',158,c,w,3);}for(const[c,w]of[[-42,3],[-19,3],[6,3]])D('v',158,c,w,3,L1);
 for(const[c,w]of[[-45,3],[-23,3],[3,3],[25,3]])D('v',168,c,w,3);for(const[c,w]of[[-50,3],[-28,3],[-3,3],[22,3]])D('v',168,c,w,3,L1);
 /* ================= EXPO HALL ================= */
 {const X0=56,X1=134,Z0=-54,Z1=20,H=16.5;
  sFloor(X0,Z0,X1,Z1,0,MT.expo);
  for(const z of[-27,-13.5,2])floorQ(X0,z-1.5,X1,z+1.5,.008,MT.aisle);for(const x of[61,91,121]){for(const r of rectsMinus(x-1,Z0,x+1,Z1,[[x-1,-28.5,x+1,-25.5],[x-1,-15,x+1,-12],[x-1,.5,x+1,3.5]]))floorQ(r[0],r[1],r[2],r[3],.008,MT.aisle)}
  W('v',X0,Z0+.2,Z1-.2,0,L1+1,WP,1);W('h',Z0,X0,X1,0,L2,WP,1);W('h',Z0,X0,110,L2,1,WP,1);W('h',Z0,110,X1,L2,H-L2,WP,1);W('v',X1,Z0+.2,Z1-.2,0,H,WP,-1);
  W('h',Z1,X0,X1,0,L1,WP,-1);W('h',Z1,X0,X1,L1,1,WP,-1);W('h',Z1,X0,X1,L1+1,L2-L1-1,GL,-1);W('h',Z1,X0,X1,L2,H-L2,WP,-1);
  // the roof: deck on deep trusses, high-bay lamps
  G.lmK=.4;ceilQ(X0,Z0,X1,Z1,H,MT.deck);G.lmK=1;
  for(let x=X0+6.5;x<X1;x+=13){const y0=H-2.6,y1=H-.2;box(x-.15,y1-.2,Z0,x+.15,y1,Z1,MT.metal,{col:false,b:1});box(x-.15,y0,Z0,x+.15,y0+.2,Z1,MT.metal,{col:false,b:1});
   for(let z=Z0;z<Z1-1;z+=3)kBeam([x,y0+.2,z],[x,y1-.2,z+1.5],.1,.1,MT.metal,[1,0,0]),kBeam([x,y1-.2,z+1.5],[x,y0+.2,z+3],.1,.1,MT.metal,[1,0,0])}
  for(let x=X0+13;x<X1;x+=13)for(let z=Z0+8;z<Z1;z+=14){box(x-.35,H-3.6,z-.35,x+.35,H-3.2,z+.35,MT.plain('#2a2a30'),{col:false});box(x-.3,H-3.62,z-.3,x+.3,H-3.6,z+.3,MT.glow('#fff4e8',1.6),{col:false,b:1});box(x-.01,H-3.2,z-.01,x+.01,H-2.6,z+.01,MT.plain('#222'),{col:false});addLight(x,H-4.2,z,[1,.95,.88],20,.85)}
  // the big banner, sponsor banners
  box(80,10.4,-53.7,110,13.4,-53.6,MT.plain('#1b1026'),{col:false});kOnWall('h',-53.6,1,95,30,10.4,3,MT.expoBanner);
  for(const[x,z,c,t]of[[73,-6,'#ff5d73','HACK THE PLANET'],[108,-6,'#8affc1','BE EXCELLENT'],[91,-30,'#7cc4ff','#20']]){box(x-.02,12,z-.02,x+.02,H-2.6,z+.02,MT.plain('#222'),{col:false});box(x-3,9,z-.06,x+3,12,z+.06,MT.fabric(c),{col:false});kSign(x,9.4,z+.07,5.4,2.2,'s',t,'#1b1026',c);kSign(x,9.4,z-.07,5.4,2.2,'n',t,'#1b1026',c)}
  // the twelve indie stalls (two rows of six), then sponsor booths filling the rest of the grid
  STALLS.forEach((st,i)=>{const p=STALLPOS[i];booth(p.x,p.z-1,8,4,'s',st[1],st[0],{screen:i%3===0?MT.code:null})});
  const NAMES=[['ZEROTRUST CO','#7cc4ff'],['PACKETPUSHERS','#ffd166'],['BUG BOUNTY HQ','#8affc1'],['QUANTUM-SAFE™','#c9b6ff'],['PWN PIZZA','#ff9a5c'],['CIPHER & CO','#9be36b'],['RED TEAM RENTALS','#ff5d73'],['SAFE HARBOUR VPN','#2bf0ff'],
   ['YUBI-OR-NOT','#ffb347'],['OPEN SOURCE FDN','#8affc1'],['THREAT INTEL INC','#ff8fc8'],['SHELLSHOCK SNACKS','#ffd166'],['THE PRIVACY CO-OP','#9be36b'],['DEF-IANT LABS','#7cc4ff'],['ROOTKIT RECORDS','#ff5d73'],['ENTROPY ENTERPRISES','#c9b6ff']];
  let n=0;for(const z of[-4,10])for(let i=0;i<6;i++){const x=66+i*10;if(z===10&&i<2)continue;const nm=NAMES[n++%NAMES.length];booth(x,z-1,8,4,'s',nm[1],nm[0],{screen:i%2?MT.dash:null})}
  for(let i=0;i<4;i++){const nm=NAMES[(n++)%NAMES.length];booth(128,-24+i*10,4,8,'s',nm[1],nm[0],{nolamp:i%2})}
  // the Con Store in the south-west corner: counter, shelves, a tee wall
  {const x0=57,x1=73,z0=12,z1=19.6;box(x0+1,0,z0,x1-1,1.1,z0+1,{side:MT.plain('#ff5d73'),top:MT.plain('#f6eefc')});kSign((x0+x1)/2,.2,z0-.01,8,.8,'n','CON STORE · CREDITS ACCEPTED','#1b1026','#ffd166');
   box(x0+.2,0,z1-.8,x1,2.6,z1,MT.plain('#3a2a4a'));kOnWall('h',z1-.8,-1,(x0+x1)/2,14,1.1,1.3,signM('GEAR · GIFTS · CLUB-MATE','#8affc1','#3a2a4a',14,1.3));
   for(let i=0;i<10;i++)box(x0+1.2+i*1.5,.3,z1-.82,x0+2.2+i*1.5,1,z1-.8,MT.fabric(['#ff5d73','#1b1026','#8affc1','#ffd166','#7cc4ff'][i%5]),{col:false});
   for(let i=0;i<5;i++)box(x0+2+i*3,1.1,z0+.2,x0+2.6+i*3,1.4,z0+.8,MT.plain(['#ffd166','#8affc1','#ff5d73'][i%3]),{col:false});lightPanel((x0+x1)/2,5,z0+3,6,2,'#fff',12,.8);mr(x0,z0-2,x1,z1,0,'Con Store','#5a2a4a')}
  // the demo stage in the north-east corner, with seats
  {box(112,0,-53.6,132,.8,-42,{side:MT.plain('#1c2133'),top:MT.plain('#2a3450')},{walk:1});stairs(120.5,-42,123.5,-40.6,0,.8,'z-',MT.plain('#2a3450'),{sides:1});
   kOnWall('h',-53.8,1,122,16,1.6,6,signM('DEMO STAGE · LIVE HACKS ON THE HOUR','#2bf0ff','#1c2133',16,6));box(118,.8,-48,126,1.8,-47,MT.plain('#1c2133'));
   for(let r=0;r<4;r++)seatRow(113,131,-37+r*1.6,0,'s','#2a3450');for(const x of[114,130])addLight(x,6,-46,[.4,.9,1],12,1);mr(112,-54,132,-30,0,'Demo stage','#1c2133')}
  // a charging lounge in the middle of the hall
  {const cx=96,cz=4;quad([cx-4,.012,cz+3],[cx+4,.012,cz+3],[cx+4,.012,cz-3],[cx-4,.012,cz-3],MT.rug,2,2);for(const[x,z]of[[cx-2.5,cz-1.5],[cx+2.5,cz-1.5],[cx-2.5,cz+1.5],[cx+2.5,cz+1.5]])box(x-.6,0,z-.6,x+.6,.45,z+.6,MT.fabric('#c9b6ff'));
   box(cx-.4,0,cz-.4,cx+.4,1.2,cz+.4,MT.plain('#1b1026'));box(cx-.42,1,cz-.42,cx+.42,1.15,cz+.42,MT.glow('#8affc1',1.4),{col:false});kSign(cx,3.4,cz,4,.6,'s','CHARGE · REST · HYDRATE','#8affc1','#1b1026')}
  mr(X0,Z0,X1,Z1,0,'Expo Hall','#5a4a2a');
 }
 /* ================= SOUTH-EAST CONCOURSE (two levels) ================= */
 {sFloor(56,20,158,34,0,MT.carpetCon);W('h',20,56,134,0,L1,WC,1);W('h',34,56,80,0,L1,WC,-1);W('h',34,80,158,0,L1,GL,-1);
  sFloor(56,20,158,34,L1,MT.carpetGallery,[[155,22,158,32]],.45,MT.ceilDark);sCeil(56,20,158,34,L2-.45,MT.ceilDark);
  W('h',20,56,134,L1,1,WC,1);W('h',34,56,80,L1,L2-L1,WC,-1);W('h',34,80,158,L1,L2-L1,GL,-1);
  for(let x=60;x<158;x+=10){downl(x,L1-.45,27,'#ffe8f0',8,.55);lightPanel(x,L2-.45,27,2,1,'#f0f0ff',10,.6)}
  for(let x=84;x<158;x+=4.6)box(x-.06,0,34.05,x+.06,L2,34.5,CH,{col:false});
  const ds=(x,y,z,d,t,c)=>kSign(x,y,z,Math.min(7,t.length*.32+1.2),.7,d,t,c||'#ffd166','#1b1026');
  ds(75,5,20.22,'s','EXPO HALL','#ffd166');ds(115,5,20.22,'s','EXPO HALL','#ffd166');ds(70,3.4,33.78,'n','CHILL-OUT','#c9b6ff');ds(70,L1+2.9,33.78,'n','QUIET ROOM','#c9b6ff');ds(150,L1+2.6,20.22,'s','VILLAGES L1 →','#8affc1');
  for(const x of[90,110,130]){box(x-1.4,0,32.6,x+1.4,.45,33.4,{side:MT.clad,top:MT.woodDark});box(x-1.4,L1,32.6,x+1.4,L1+.45,33.4,{side:MT.clad,top:MT.woodDark})}for(const x of[62,145])kPlant(x,22,1.4,0,'#2a1f36');for(const x of[100,140])kPlant(x,22,1.3,L1,'#2a1f36');
  mr(56,20,158,34,0,'SE concourse','#5a2a4a');mr(56,20,158,34,L1,'','#3a2a4a')}
 /* ================= VILLAGE ROW ================= */
 // the corridor: two storeys, stairs at both ends, a light strip down the middle
 {const X0=158,X1=168,Z0=-54,Z1=34;sFloor(X0,Z0,X1,Z1,0,MT.carpetGrey);sFloor(X0,Z0,X1,Z1,L1,MT.carpetGrey,[[158,-32,161.2,-22]],.45,MT.ceilDark);sCeil(X0,Z0,X1,Z1,L2-.45,MT.ceilDark);
  // west wall (x 158): G from z -54 to 20 (the SE concourse is open beyond), L1 likewise; east wall (x 168) the full length on both floors
  W('v',X0,Z0,20,0,L1,MT.panel,1);W('v',X0,Z0,20,L1,L2-L1,MT.panel,1);W('v',X1,Z0,Z1,0,L1,MT.panel,-1);W('v',X1,Z0,Z1,L1,L2-L1,MT.panel,-1);W('h',Z1,X0,X1,0,L2,GL,-1);
  stairs(158.2,-32,161.2,-22,0,L1,'z+',MT.carpetGrey,{nose:MT.plain('#ffd166')});railing(161.2,-32,161.2,-22,0,{y2:L1,m:CH,glass:GL});railing(161.2,-32,161.2,-22,L1,{m:CH,glass:GL});railing(158.2,-32,161.2,-32,L1,{m:CH,glass:GL});
  // the south stair starts 2 m clear of the SOC's wall, so you can walk onto it from the concourse or the corridor
  stairs(155,22,158,32,0,L1,'z+',MT.carpetGrey,{nose:MT.plain('#ffd166'),sides:1});railing(155,22,155,32,0,{y2:L1,m:CH,glass:GL});railing(158,22,158,32,0,{y2:L1,m:CH,glass:GL});railing(155,22,155,32,L1,{m:CH,glass:GL});railing(158,22,158,32,L1,{m:CH,glass:GL});railing(155,22,158,22,L1,{m:CH,glass:GL});
  colBox(158.2,-23,161.2,-22,0,4);railing(158,-54,168,-54,L1,{m:CH,glass:GL});
  for(let z=Z0+4;z<Z1;z+=8){lightPanel(163,L1-.45,z,1.2,1.2,'#f0f4ff',9,.6);lightPanel(163,L2-.45,z,1.2,1.2,'#f0f4ff',9,.6)}
  for(let z=Z0;z<Z1;z+=4){box(162.8,L1-.47,z+.4,163.2,L1-.45,z+3.6,MT.glow('#8affc1',1.4),{col:false,b:1})}
  mr(X0,Z0,X1,Z1,0,'Village Row','#3a3a5a');mr(X0,Z0,X1,Z1,L1,'Village Row · L1','#3a3a5a')}
 const ds=(x,y,z,d,t,c)=>kSign(x,y,z,Math.min(6,t.length*.3+1.1),.65,d,t,c||'#ffd166','#1b1026');
 // a village room: floor, ceiling, walls (the corridor wall is drawn by the corridor), a sign by its door
 const vroom=(x0,z0,x1,z1,y,h,fl,wa,ce,n,c,dz,side,sg,sc)=>{sFloor(x0,z0,x1,z1,y,fl);ceilQ(x0,z0,x1,z1,y+h,ce||MT.ceilDark);
  W('h',z0,x0,x1,y,h,wa,1);W('h',z1,x0,x1,y,h,wa,-1);if(side==='w')W('v',x0,z0,z1,y,h,wa,1);else W('v',x1,z0,z1,y,h,wa,-1);
  if(side==='w')W('v',x1,z0,z1,y,h,wa,-1);else W('v',x0,z0,z1,y,h,wa,1);
  if(sg)ds(side==='w'?158.22:167.78,y+3.4,dz,side==='w'?'e':'w',sg,sc);mr(x0,z0,x1,z1,y,n,c)};
 /* ---------- ground floor, west ---------- */
 // lockpick village
 vroom(134,-54,158,-30,0,L1-.45,MT.carpetGrey,MT.wallWarm,null,'Lockpick','#5a4a2a',-42,'w','LOCKPICK VILLAGE');
 {for(const z of[-48,-41,-36])for(const x of[140,150]){table(x,z,5,1.2,MT.plain('#e9d9b9'));for(let k=0;k<4;k++)box(x-1.9+k*1.2,.76,z-.15,x-1.65+k*1.2,.98,z+.15,MT.plain(['#ffd166','#ff5d73','#7cc4ff','#8affc1'][k]),{col:false})}
  kOnWall('h',-53.8,1,146,14,.8,2.4,MT.pegs,2,2.4);kSign(146,3.4,-53.78,10,.7,'s','LOCKPICK VILLAGE · ASK BEFORE YOU PICK','#1b1026','#ffd166');
  {const x=136.5,z=-32.5;box(x-1,0,z-1,x+1,2,z+1,MT.gloss('#ffd166'));for(let i=0;i<10;i++){const a=i/10*Math.PI;box(x+Math.cos(a)*.75-.12,2+Math.sin(a)*.8,z-.12,x+Math.cos(a)*.75+.12,2.2+Math.sin(a)*.8,z+.12,MT.chrome,{col:false})}box(x-.12,.7,z+1,x+.12,1.2,z+1.02,MT.plain('#1b1026'),{col:false})}
  lightPanel(140,L1-.45,-42,3,1,'#fff5e0',9,.8);lightPanel(152,L1-.45,-42,3,1,'#fff5e0',9,.8);lightPanel(146,L1-.45,-34,3,1,'#fff5e0',8,.6)}
 // the CTF arena: dark, team tables in rows, the four-sided scoreboard tower, a giant scoreboard on the wall
 vroom(134,-30,158,0,0,L1-.45,MT.carpetDark,MT.panel,MT.black,'CTF Arena','#1a4a3a',-15,'w','CTF ARENA','#8affc1');
 {const cx=146,cz=-15;box(cx-2,0,cz-2,cx+2,4.9,cz+2,MT.plain('#04120c'));for(const[d,x,z]of[['s',cx,cz+2.01],['n',cx,cz-2.01],['e',cx+2.01,cz],['w',cx-2.01,cz]])panel(x,1.6,z,3.6,3,d,MT.score);
  box(cx-2.4,4.6,cz-2.4,cx+2.4,4.75,cz+2.4,MT.glow('#8affc1',2),{col:false,b:1});addLight(cx,2.5,cz+5,[.4,1,.6],12,1.1);addLight(cx,2.5,cz-5,[.4,1,.6],10,.8);
  for(const z of[-27,-4])for(const x of[139,152]){table(x,z,5,1.2,MT.plain('#1a1a24'));for(let k=0;k<3;k++)kMonitor(x-1.6+k*1.6,.76,z-.3,'s',MT.code,.5);for(let k=0;k<3;k++)kChair(x-1.6+k*1.6,z+.75,'n',0,'#1a1a24');addLight(x,2,z,[.4,1,.7],6,.5)}
  table(146,-8.6,4,1.2,MT.plain('#1a1a24'));for(let k=0;k<3;k++)kMonitor(144.6+k*1.4,.76,-8.9,'s',MT.code,.45);kSign(146,.2,-8,3,.5,'s','TEAM KERNEL','#8affc1','#04120c');
  kOnWall('h',-29.8,1,146,14,1.2,3.4,MT.scoreBig);for(let x=135;x<158;x+=3)box(x,L1-.6,-29.7,x+2.4,L1-.55,-29.65,MT.glow('#8affc1',2),{col:false})}
 // the Blue Team SOC: a wall of screens, two rows of analyst desks
 vroom(134,0,158,20,0,L1-.45,MT.carpetGrey,WP,null,'Blue Team SOC','#1a3a5a',10,'w','BLUE TEAM SOC','#7cc4ff');
 {for(let r=0;r<2;r++)for(let c=0;c<6;c++)kOnWall('v',134.2,1,2+c*3.2,3,1+r*1.7,1.6,[MT.dash,MT.score,MT.scope][(r+c)%3]);
  for(const x of[142,150])for(const z of[4,10,16]){kDesk(x,z,2.4,1,'w',MT.plain('#e9eef5'));kMonitor(x-.25,.74,z-.5,'e',MT.dash,.5);kMonitor(x-.25,.74,z+.5,'e',MT.dash,.5);kChair(x+.9,z,'w',0,'#3a3a4a')}
  lightPanel(146,L1-.45,10,6,1,'#eef4ff',12,.8);addLight(137,3,10,[.5,.75,1],10,1)}
 /* ---------- ground floor, east ---------- */
 // car hacking: a real car, bonnet up, laptops on tables round it
 vroom(168,-64,196,-36,0,L1-.45,MT.tileDark,MT.panel,null,'Car Hacking','#5a3a2a',-45,'e','CAR HACKING','#ff9a5c');
 {car(182,-50,'x','#c0304a',{bonnet:1});box(183.3,1.55,-50.85,184.2,2.3,-49.15,MT.gloss('#c0304a'),{col:false});
  for(const[x,z]of[[174,-58],[190,-58],[174,-42],[190,-42]]){table(x,z,2.4,1,MT.plain('#2a2a34'));kMonitor(x,.76,z-.3,'s',MT.code,.5)}
  kOnWall('v',195.8,-1,-50,10,1.4,2,signM('CAN BUS · KEY FOBS · "PLEASE DO NOT START THE CAR"','#ff9a5c','#1b1026',10,2));lightPanel(182,L1-.45,-50,6,3,'#fff4e8',16,1.05);lightPanel(174,L1-.45,-58,3,1,'#fff4e8',10,.7);lightPanel(190,L1-.45,-42,3,1,'#fff4e8',10,.7)}
 // ICS: a model city with a toy train loop and a siren on a pole
 vroom(168,-36,196,-10,0,L1-.45,MT.carpetGrey,WP,null,'ICS Village','#3a5a2a',-23,'e','ICS VILLAGE','#9be36b');
 {box(175,0,-30,191,.9,-16,{side:MT.plain('#2a2a34'),top:MT.grass});for(let i=0;i<21;i++){const x=176.5+(i%7)*2.1,z=-28.5+Math.floor(i/7)*4.2,h=.3+((i*7)%5)*.25;box(x-.4,.9,z-.4,x+.4,.9+h,z+.4,{side:MT.facade,top:MT.plain('#3a3a44')},{col:false})}
  box(189,.9,-29,189.6,2.4,-28.4,MT.plain('#d9d4cc'),{col:false});box(188.9,2.4,-29.1,189.7,2.5,-28.3,MT.glow('#ff5d73',2),{col:false});
  for(const[a,b,c,d]of[[175.6,-29.4,190.4,-29],[175.6,-17,190.4,-16.6],[175.6,-29,176,-17],[190,-29,190.4,-17]])box(a,.9,b,c,.93,d,MT.plain('#5a5a64'),{col:false});
  kOnWall('v',195.8,-1,-23,10,1.4,2,signM('ICS VILLAGE · THE TRAIN MUST NOT STOP','#9be36b','#1b1026',10,2));lightPanel(183,L1-.45,-23,6,3,'#f4fff0',15,1)}
 // social engineering: two glass vishing booths, an audience
 vroom(168,-10,196,16,0,L1-.45,MT.carpetDark,MT.panel,null,'Social Engineering','#5a2a4a',3,'e','SOCIAL ENGINEERING','#ff8fc8');
 {for(let i=0;i<2;i++){const z=-5+i*8;box(191,0,z-1.6,195.8,2.8,z+1.6,GL);box(191,2.8,z-1.6,195.8,3,z+1.6,MT.plain('#ff8fc8'),{col:false});table(193.6,z,.6,1.6,MT.plain('#2a2a34'),.9);box(193.4,.9,z-.15,193.8,1.05,z+.15,MT.plain('#111'),{col:false});addLight(193,2.4,z,[1,.6,.8],5,.8)}
  for(let r=0;r<4;r++)rowAlongZ(176+r*2.2,-8,13,0,'#5a2a4a',1);kOnWall('v',195.8,-1,1.5,6,3.2,.8,signM('VISHING CALL CHALLENGE · ON AIR','#ff8fc8','#1b1026',6,.8));lightPanel(180,L1-.45,3,6,2,'#fff0f6',16,1);lightPanel(190,L1-.45,-6,3,1,'#fff0f6',10,.8)}
 // aerospace village (new): a satellite on a plinth, a cockpit simulator, a drone cage
 vroom(168,16,196,34,0,L1-.45,MT.carpetGrey,WP,null,'Aerospace Village','#2a3a5a',25,'e','AEROSPACE VILLAGE','#7cc4ff');
 {const sx=182,sz=25;box(sx-1.2,0,sz-1.2,sx+1.2,1,sz+1.2,MT.plain('#2a2a34'));box(sx-.5,1,sz-.5,sx+.5,2,sz+.5,MT.gloss('#c8ccd6'));for(const s of[-1,1])box(sx+s*.5,1.3,sz-.4,sx+s*2.6,1.36,sz+.4,MT.plain('#1a2a6a'),{col:false});box(sx-.05,2,sz-.05,sx+.05,2.8,sz+.05,MT.chrome,{col:false});
  box(171,0,18,175,1.3,22,MT.plain('#2a2a34'));kMonitor(173,1.3,19,'s',MT.dash,1.2);box(172.6,0,22.4,173.4,.5,23.2,MT.fabric('#3a3a4a'));
  for(const[a,b]of[[188,18],[195,18],[188,32],[195,32]])box(a-.04,0,b-.04,a+.04,3,b+.04,MT.metal,{col:false});box(188,3,18,195,3.04,32,MT.metal,{col:false});colBox(188,18,195,32,0,3);
  for(let i=0;i<3;i++){const x=190+i*2,z=22+i*3;box(x-.3,.6+i*.4,z-.3,x+.3,.7+i*.4,z+.3,MT.plain('#14141a'),{col:false})}lightPanel(182,L1-.45,25,6,2,'#f4f8ff',15,1)}
 /* ---------- Level 1, west ---------- */
 // workshops are wide rooms: rows run along z, facing the screen on the west wall
 vroom(134,-54,158,-30,L1,L2-.45-L1,MT.carpetGrey,WP,MT.ceil,'Workshop A','#2a3a5a',-42,'w','WORKSHOP A','#7cc4ff');
 vroom(134,-30,158,-8,L1,L2-.45-L1,MT.carpetGrey,WP,MT.ceil,'Workshop B','#2a3a5a',-19,'w','WORKSHOP B','#7cc4ff');
 for(const[z0,z1,deck]of[[-54,-30,mt(signTex('Intro to Wireshark (Bring Snacks)','#1b1026','#f6eefc',512,128),0,1,1,{k:1})],[-30,-8,MT.slides]]){const zc=(z0+z1)/2;kOnWall('v',134.2,1,zc,(z1-z0)-6,L1+1,2.6,deck);
  for(let r=0;r<6;r++){const x=140+r*2.2;for(const[a,b]of[[z0+2,zc-1],[zc+1,z1-2]])rowAlongZ(x,a,b,L1,'#4a6080')}box(136.6,L1,zc-.6,137.4,L1+1.1,zc+.6,MT.woodDark);
  for(const z of[zc-5,zc+5])lightPanel(146,L2-.45,z,3,1,'#f4f8ff',10,.65)}
 // hardware hacking village: the LED wall, solder benches, the badge table
 vroom(134,-8,158,20,L1,L2-.45-L1,MT.concrete,MT.panel,MT.ceilDark,'Hardware Hacking','#2a4a3a',6,'w','HARDWARE HACKING','#8affc1');
 {const y=L1;kOnWall('v',134.2,1,6,16,y+.6,3,MT.ledwall,4,3);addLight(137,y+2,6,[.8,.6,1],12,1.1);
  for(const z of[-3,6,15])for(const x of[142,151]){table(x,z,1.2,5,MT.plain('#d9d4cc'),.8,y);box(x-.4,y+.8,z-2,x,y+1.3,z-1.5,MT.glow('#ffd98a'),{col:false});kMonitor(x+.45,y+.84,z+.6,'w',MT.scope,.45);box(x-.1,y+.8,z-.6,x+.3,y+.86,z+.4,MT.plain('#2a6a3a'),{col:false})}
  lightPanel(146,L2-.45,0,4,1,'#f0fff4',9,.7);lightPanel(146,L2-.45,12,4,1,'#f0fff4',9,.7);kOnWall('h',19.8,-1,146,5,y+1,1.2,signM('SOLDER PRACTICE · ALL WELCOME','#8affc1','#1a2a24',5,1.2))}
 /* ---------- Level 1, east ---------- */
 // Creator Corner: a streaming stage with a ring light and a desk, three studio pods
 vroom(168,-64,196,-40,L1,L2-.45-L1,MT.carpetDark,MT.panel,MT.ceilDark,'Creator Corner','#4a1a4a',-50,'e','CREATOR CORNER','#ff8fc8');
 {const y=L1;box(184,y,-62,194,y+.25,-52,MT.plain('#3a1a40'),{walk:1,col:false});kOnWall('v',195.8,-1,-57,9,y+.3,3,MT.stream);box(187.4,y+.25,-58,188,y+.85,-56,MT.plain('#ffffff'));
  for(const z of[-61.2,-52.8]){box(186.9,y+.25,z-.05,187,y+1.8,z+.05,MT.plain('#222'),{col:false});box(186.9,y+1.8,z-.4,186.98,y+2.6,z+.4,MT.glow('#fff6fb'),{col:false});addLight(186.4,y+2.2,z,[1,.7,.9],6,1)}
  for(let i=0;i<5;i++)box(193.3,y+.25,-61+i*1.4,193.8,y+.85,-60.4+i*1.4,MT.plain(['#ff8fc8','#c9b6ff','#ffd166','#8affc1','#ff5d73'][i]),{col:false});
  for(let i=0;i<3;i++){const x=171+i*5;box(x,y,-49.8,x+.1,y+2.4,-44,MT.panel);table(x+2.4,-47,2,1,MT.plain('#2a2a34'),.76,y);box(x+.6,y+1.6,-47.3,x+.66,y+2.4,-46.7,MT.glow('#fff6fb',1.8),{col:false});addLight(x+2,y+2.4,-47,[1,.75,.9],4,.6)}
  box(186,y,-49.8,186.1,y+2.4,-44,MT.panel);lightPanel(176,L2-.45,-58,3,1,'#fff0fa',12,.8);lightPanel(189,L2-.45,-57,3,2,'#fff0fa',12,.9);lightPanel(178,L2-.45,-46,4,1,'#fff0fa',10,.7)}
 // the retro arcade: rows of cabinets, a change machine, neon strips, the high-score board
 vroom(168,-40,196,-16,L1,L2-.45-L1,MT.carpetCon,MT.panel,MT.ceilDark,'Retro Arcade','#4a1a4a',-28,'e','RETRO ARCADE','#2bf0ff');
 {const y=L1,cab=(x,z,dir,scr)=>{const d=dir==='w'?-1:1;box(x-.34,y,z-.38,x+.34,y+1.85,z+.38,MT.gloss('#1a1424'));panel(x+d*.345,y+1.05,z,.62,.5,dir,scr);box(x+d*.34-.04,y+1.72,z-.38,x+d*.34+.04,y+1.9,z+.38,MT.glow(['#ff5fb0','#2bf0ff','#ffd166','#8affc1'][Math.abs(Math.round(z*3))%4],2),{col:false})};
  for(let z=-38.6;z<-17;z+=1.25)cab(195.3,z,'w',(Math.round(z*4))%2?MT.arcade:MT.arcade2);
  for(let z=-36;z<-20;z+=1.25){cab(181,z,'w',(Math.round(z*4))%2?MT.arcade2:MT.arcade);cab(182.4,z,'e',(Math.round(z*4))%2?MT.arcade:MT.arcade2)}
  box(169.6,y,-39.2,171,y+2.1,-37.8,MT.gloss('#1a2a5a'));panel(171.01,y+.1,-38.5,1.3,2,'e',MT.vend);
  for(let z=-39.5;z<-16;z+=5){box(168.22,y+3.6,z,168.28,y+3.66,z+3.5,MT.glow(z%10<-5?'#ff5fb0':'#2bf0ff',2.2),{col:false});box(195.72,y+3.6,z,195.78,y+3.66,z+3.5,MT.glow(z%10<-5?'#2bf0ff':'#ff5fb0',2.2),{col:false})}
  for(const[x,z,c]of[[176,-34,[1,.4,.8]],[176,-22,[.3,.9,1]],[189,-34,[.3,.9,1]],[189,-22,[1,.8,.4]]])addLight(x,y+3.4,z,c,10,.85);
  panel(176,y+1.2,-39.78,4,1,'s',sign('HIGH SCORES','#ffd166','#120a1c',256,64));panel(176,y+.4,-39.78,3.4,.7,'s',mt(signTex('1. KERNEL  99,999   2. r00tbeer  81,200   3. dave_hax  12','#8affc1','#120a1c',512,64),0,1,1,{k:1.2}));panel(168.22,y+1.1,-22,.8,1.05,'e',MT.poster(5))}
 // tabletop games (new): game tables, shelves of boxed games, a dice tower
 vroom(168,-16,196,10,L1,L2-.45-L1,MT.wood,MT.wallWarm,MT.ceil,'Tabletop','#4a3a2a',-3,'e','TABLETOP & BOARD GAMES','#ffb347');
 {const y=L1;for(const[x,z]of[[176,-10],[176,-2],[176,6],[186,-10],[186,-2],[186,6]]){table(x,z,2.4,1.4,MT.plain('#3a5a3a'),.76,y);for(const[dx,f]of[[-1.6,'e'],[1.6,'w']])kStool(x+dx,z,.46,MT.fabric('#5a3a2a'),y);for(let k=0;k<4;k++)box(x-.8+k*.4,y+.76,z-.2,x-.6+k*.4,y+.8,z,MT.plain(['#ff5d73','#ffd166','#7cc4ff','#f4f4f0'][k]),{col:false})}
  for(let i=0;i<4;i++){box(195,y,-15+i*6,195.8,y+2.4,-11+i*6,MT.woodDark);kOnWall('v',195,-1,-13+i*6,3.8,y+.1,2.2,MT.books,1.9,1.1)}lightPanel(181,L2-.45,-6,4,2,'#fff4e0',11,.8);lightPanel(181,L2-.45,4,4,2,'#fff4e0',11,.7)}
 // the film room (new): a small cinema showing hacker films
 vroom(168,10,196,34,L1,L2-.45-L1,MT.carpetDark,MT.acou,MT.black,'Film room','#2a1a3a',22,'e','FILM ROOM · NOW SHOWING','#ff5d73');
 {const y=L1;kOnWall('v',195.8,-1,22,14,y+.6,4,mt(signTex('HACKERS (1995)  ·  WARGAMES  ·  SNEAKERS','#8affc1','#04030c',512,160),0,1,1,{k:1.2}));
  for(let r=0;r<6;r++)rowAlongZ(186-r*2.2,13,31,y,'#5a1a2a',1);addLight(190,y+2.4,22,[.4,.9,.7],10,.6);for(const z of[14,30])downl(178,L2-.45,z,'#ff8a5c',6,.4)}
}
/* a row of seats running along z (sitters facing -x, at the screen on the west wall; or +x with face=1) */
function rowAlongZ(x,z0,z1,y,col,face){const m=MT.fabric(col),k=MT.plain('#1a1420'),d=face?1:-1;box(x-.3,y,z0,x+.3,y+.42,z1,k,{col:false});box(x-.3,y+.42,z0,x+.3,y+.5,z1,m,{col:false});
 const bx=x-d*.3;box(Math.min(bx,bx-d*.08),y+.5,z0,Math.max(bx,bx-d*.08),y+1.02,z1,m,{col:false});for(let z=z0;z<=z1;z+=.55)box(x-.3,y+.5,z-.025,x+.3,y+.7,z+.025,k,{col:false});colBox(x-.32,z0,x+.32,z1,y,y+.9)}
