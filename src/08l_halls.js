/* ============ HALL A (the arena), HALL B, and everything behind them ============ */
/* Hall A (x -60..50, z -136..-64, 26 m tall): a stage 60 m wide under a 50 m LED wall at the north end, a floor of
   seats, then a lower bowl rising from the floor to the Level 1 cross-aisle, and an upper tier hung above its back rows
   that climbs to the Level 2 deck. Side aisles at floor level lead in from Ring North. Behind the stage: backstage.
   West of the hall: the staff corridor, the security office and the stores; east: the staff corridor, the MDF. The
   service corridor runs behind everything. Hall B (x 62..110) sits off the north-east concourse with Con Ops, the
   press room and the speaker lounge above it; then the con kitchen, the staff break room and the loading dock. */
function buildHalls(){
 const D=door,W=wallLine,AC=MT.acou,GL=MT.glass,CH=MT.chrome,GR=MT.plain('#7a7a84'),GD=MT.plain('#4a4a54');
 const mr=(x0,z0,x1,z1,y,n,c)=>(MAPR.con=MAPR.con||[]).push({x0,z0,x1,z1,y,n,c:c||'#3a2a5a'});
 const SY=1.6; // stage height
 /* ---------- doors ---------- */
 D('h',-136,-5,3,2.6,SY);D('h',-150,-10,3,2.6);                             // backstage: from the stage (keycard), from the service corridor
 D('v',-64,-82,1.4,2.4);D('v',-64,-125,1.6,2.4);gap('h',-150,-62,4,3);gap('h',-150,53,6,3); // security, stores; staff corridors -> service corridor
 D('v',56,-93,1.4,2.3);                                                     // MDF
 D('h',-64,75,4,3.6);D('h',-64,97,4,3.6);D('h',-111,86,3,2.6,.8);D('h',-150,86,3,3);   // hall B; its backstage from the stage and the corridor
 D('h',-64,122,1.6,2.4);D('h',-111,122,1.6,2.4);D('h',-150,122,1.6,2.4);D('v',134,-90,4,3.6);D('v',134,-130,2,2.6);gap('h',-150,155,12,4); // kitchen, break room, dock
 for(const c of[71,86,101])D('h',-64,c,1.6,2.5,L2);                          // con ops, press, speakers (level 2)
 D('h',-54,90,6,4.5);D('h',-54,104,6,4.5);                                  // expo hall north doors
 /* ================= HALL A ================= */
 {const X0=-60,X1=50,Z0=-136,Z1=-64,H=26;
  sFloor(X0,Z0,X1,Z1,0,MT.carpetDark);
  // walls: acoustic panels inside, the ring face is drawn by the ring
  for(const[y,h]of[[0,L1],[L1,L2-L1],[L2,H-L2]])W('h',Z1,X0,X1,y,h,AC,-1);
  W('h',Z0,X0,X1,0,H,AC,1);W('v',X0,Z0+.2,Z1-.2,0,H,AC,1);W('v',X1,Z0+.2,Z1-.2,0,H,AC,-1);
  G.lmK=.35;ceilQ(X0,Z0,X1,Z1,H,MT.black);G.lmK=1;
  // the roof rig: a truss grid, moving heads, house lights
  for(let x=X0+6;x<X1;x+=12)box(x-.2,H-2.2,Z0,x+.2,H-1.8,Z1,MT.metal,{col:false,b:1});for(let z=Z0+8;z<Z1;z+=12)box(X0,H-2.2,z-.2,X1,H-1.8,z+.2,MT.metal,{col:false,b:1});
  for(let x=X0+6;x<X1;x+=12)for(let z=Z0+20;z<Z1-4;z+=12){const c=['#ff5d73','#8affc1','#7cc4ff','#ffd166','#c9b6ff'][Math.abs(Math.round(x*7+z))%5];box(x-.25,H-2.7,z-.25,x+.25,H-2.2,z+.25,MT.glow(c,1.6),{col:false,b:1})}
  // house lights: a grid hung low enough to reach the seats, plus a stage wash
  for(let x=-45;x<=35;x+=20)for(let z=-112;z<=-76;z+=12)addLight(x,15,z,[1,.86,.75],26,.8);
  for(const x of[-25,15])addLight(x,10,-120,[1,.9,.82],20,1.05);addLight(-5,14,-108,[.9,.8,1],24,.7);
  // the stage: a deck, steps up at both front corners, a footlight strip, the LED wall, side screens, speaker arrays, a podium
  const sx0=-35,sx1=25,sz0=Z0,sz1=-118;
  box(sx0,0,sz0+.2,sx1,SY,sz1,{side:MT.plain('#14101c'),top:MT.woodDark},{walk:1});box(sx0,SY-.1,sz1,sx1,SY,sz1+.06,MT.glow('#ff5d73',1.6),{col:false});
  for(const x of[sx0+4,sx1-4]){stairs(x-1.5,sz1,x+1.5,sz1+2.6,0,SY,'z-',MT.woodDark,{sides:1,nose:MT.plain('#ffd166')})}
  kOnWall('h',Z0+.2,1,-5,52,SY+3,15,MT.screenBig);box(-31.5,SY+2.8,Z0+.2,21.5,SY+3,Z0+.5,MT.plain('#14101c'),{col:false});box(-31.5,SY+18,Z0+.2,21.5,SY+18.2,Z0+.5,MT.plain('#14101c'),{col:false});
  kOnWall('h',Z0+.2,1,-33.5,3,SY,16.6,MT.drape,1.5,3);kOnWall('h',Z0+.2,1,23.5,3,SY,16.6,MT.drape,1.5,3);
  for(const[x,f]of[[X0+.2,'e'],[X1-.2,'w']]){const s=f==='e'?1:-1;kOnWall('v',x,s,-112,14,8,8,MT.screenSide);box(Math.min(x,x+s*.3),7.8,-119.2,Math.max(x,x+s*.3),8,-104.8,MT.plain('#14101c'),{col:false});addLight(x+s*4,10,-112,[.6,.6,1],12,.45)}
  for(const x of[-40,30]){for(let k=0;k<8;k++){const y=17-k*.75;box(x-.7,y-.7,-121-.5,x+.7,y,-121+.5,MT.plain('#16141c'),{col:false});box(x-.6,y-.6,-120.49,x+.6,y-.1,-120.47,MT.plain('#2a2a34'),{col:false})}box(x-.05,17,-121.05,x+.05,H-2,-120.95,MT.plain('#222'),{col:false})}
  box(-6,SY,-126,-4,SY+1.15,-125,{side:MT.plain('#2a2a3a'),top:MT.woodDark});kSign(-5,SY+.5,-124.99,1.6,.4,'s','#20','#ff5d73','#2a2a3a');box(-5.05,SY+1.15,-125.6,-4.95,SY+1.5,-125.3,MT.plain('#222'),{col:false});
  table(10,-127,5,1,MT.plain('#1b1026'),.76,SY);for(let i=0;i<4;i++)kStool(8.1+i*1.3,-126.2,.5,MT.fabric('#ff5d73'),SY);
  for(const[x,c]of[[-28,'#ff5d73'],[-16,'#7cc4ff'],[6,'#8affc1'],[18,'#ffd166']]){box(x-.4,H-6,-118.6,x+.4,H-5.4,-118,MT.glow(c,2),{col:false,b:1});addLight(x,10,-122,hx(c),16,.8)}
  addLight(-5,9,-124,[1,.92,.85],22,1.1);addLight(-5,6,-112,[1,.9,.8],16,.6);
  box(sx0,SY+19.6,sz1-.3,sx1,SY+20.1,sz1+.3,MT.metal,{col:false,b:1});for(let i=0;i<10;i++){const x=sx0+3+i*6;box(x-.3,SY+18.9,sz1-.3,x+.3,SY+19.6,sz1+.3,MT.glow(['#ff5fb0','#2bf0ff'][i%2],2),{col:false,b:1})}
  // floor seats: two blocks either side of the centre aisle, rows of 1 m, the front-of-house desk behind them
  for(let r=0;r<24;r++){const z=-114+r*1.05,c=r%2?'#5a2a4a':'#6a2a52';if(z>-96&&z<-89.5){seatRow(-46,-8,z,0,'s',c);continue}seatRow(-46,-8,z,0,'s',c);seatRow(-2,36,z,0,'s',c)}
  {const fx0=4,fx1=14,fz0=-95.6,fz1=-89.8;box(fx0,0,fz0,fx1,.4,fz1,{side:MT.plain('#1a1428'),top:MT.carpetDark},{walk:1});box(fx0+.5,.4,fz0+.5,fx1-.5,1.3,fz0+1.3,MT.plain('#22222c'));
   for(let i=0;i<4;i++){kMonitor(fx0+1.6+i*2.2,1.3,fz0+.9,'s',[MT.dash,MT.scope,MT.code,MT.dash][i],.6)}box(fx0+1,1.3,fz0+.6,fx1-1,1.38,fz0+1.2,MT.plain('#3a3a44'),{col:false});
   kChair(fx0+3,fz0+2.4,'n',.4,'#2a2a34');kChair(fx0+7,fz0+2.4,'n',.4,'#2a2a34');kSign((fx0+fx1)/2,.5,fz1+.01,4,.4,'s','FOH · AV','#7cc4ff','#1a1a24');addLight(9,3,-92,[.5,.7,1],7,.8)}
  // side aisles at floor level (from the Ring North doors to the floor)
  floorQ(X0,-88,-50,Z1,.01,MT.aisle);floorQ(40,-88,X1,Z1,.01,MT.aisle);
  // the lower bowl: 20 rows rising from the floor to the Level 1 cross-aisle, aisles at three places
  const AIS=[[-26,-24],[-6,-4],[14,16]];
  {const rows=20,dz=.9,dy=L1/rows;for(let i=0;i<rows;i++){const z0=-88+i*dz,y=(i+1)*dy;box(-50,0,z0,40,y,z0+dz,{side:MT.plain('#1a1428'),top:MT.carpetDark},{walk:1});
    let a=-49.6;for(const[p,q]of AIS.concat([[39.6,40]])){if(p-a>1)seatRow(a,p-.2,z0+.55,y,'s',i%2?'#5a2a4a':'#6a2a52');a=q+.2}
    for(const[p,q]of AIS)box(p,y,z0,q,y+.012,z0+.06,MT.glow('#ffd166',1.2),{col:false})}
   railing(-50,-88,-50,-70,0,{y2:L1,m:CH,glass:GL});railing(40,-88,40,-70,0,{y2:L1,m:CH,glass:GL})}
  // the Level 1 cross-aisle deck, and the Level 2 deck above it
  sFloor(X0+.2,-70,X1-.2,Z1,L1,MT.carpetDark,[],.45,MT.plain('#1a1428'));railing(X0,-70,-50,-70,L1,{m:CH,glass:GL});railing(40,-70,X1,-70,L1,{m:CH,glass:GL});
  sFloor(X0+.2,-70,X1-.2,Z1,L2,MT.carpetDark,[],.45,MT.plain('#1a1428'));railing(X0,-70,-50,-70,L2,{m:CH,glass:GL});railing(40,-70,X1,-70,L2,{m:CH,glass:GL});
  for(const x of[-55,-30,-5,20,45])downl(x,L1-.45,-67,'#ffd9b0',7,.5);for(const x of[-55,-30,-5,20,45])downl(x,L2-.45,-67,'#ffd9b0',7,.5);
  // the upper tier: 16 rows hung over the back of the lower bowl, rising to the Level 2 deck; a glowing front parapet
  {const rows=16,dz=1,z0=-86,y0=L2-rows*.2125;for(let i=0;i<rows;i++){const zz=z0+i*dz,y=y0+(i+1)*.2125,yb=y0+i*.2125-.35;box(-50,yb,zz,40,y,zz+dz,{side:MT.plain('#1a1428'),top:MT.carpetDark},{walk:1,b:1});
    let a=-49.6;for(const[p,q]of AIS.concat([[39.6,40]])){if(p-a>1)seatRow(a,p-.2,zz+.6,y,'s',i%2?'#3a2a5a':'#4a2a6a');a=q+.2}}
   const yf=y0+.2125;box(-50,yf,z0-.15,40,yf+1.05,z0,MT.plain('#1a1428'));box(-50,yf+.2,z0-.17,40,yf+.28,z0-.15,MT.glow('#ff5d73',1.8),{col:false});
   stairShell(-50,z0,40,-70,y0,L2,'z+',MT.plain('#1a1428'),.4);for(const x of[-50,40])railing(x,z0,x,-70,y0+.2,{y2:L2,m:CH,glass:GL});
   for(const x of[-40,-15,10,30])addLight(x,y0-1.2,-80,[1,.85,.7],10,.5);for(const x of[-42,-22,-2,18,36])addLight(x,18,-78,[1,.86,.74],16,.75)}
  for(const z of[-120,-104,-88,-76])for(const x of[X0+.25,X1-.25]){const s=x<0?1:-1;box(Math.min(x,x+s*.2),6.4,z-.8,Math.max(x,x+s*.2),6.7,z+.8,MT.glow('#ffcf9a',.9),{col:false,b:1});addLight(x+s*1.5,6,z,[1,.78,.55],12,.6)}
  for(const z of[-110,-100,-90])for(const x of[-30,-5,20])addLight(x,8,z,[1,.85,.72],16,.7);for(const x of[-40,-15,10,30])addLight(x,5,-78,[1,.84,.7],9,.45);
  for(const[x,z]of[[-55,-64.2],[45,-64.2]])kSign(x,3.9,z,2,.4,'n','EXIT','#8affc1','#0a1a10');
  mr(X0,Z0,X1,Z1,0,'Hall A','#3a2a5a');mr(X0,-70,X1,Z1,L1,'Hall A · L1','#3a2a5a');mr(X0,-86,X1,Z1,L2,'Hall A · balcony','#3a2a5a');
 }
 /* ---- backstage ---- */
 {const x0=-40,x1=30,z0=-150,z1=-136,y=SY;sFloor(x0,z0,x1,z1,y,MT.concrete,[[-12,-150,-8,-146]]);ceilQ(x0,z0,x1,z1,y+3.4,MT.ceil);
  W('h',z1,x0,x1,y,3.4,GR,-1);W('h',z0,x0,x1,0,y+3.4,GR,1);W('v',x0,z0,z1,0,y+3.4,GR,1);W('v',x1,z0,z1,0,y+3.4,GR,-1);
  stairs(-12,-150,-8,-146,0,y,'z+',MT.concrete,{nose:MT.plain('#ffd166'),sides:1});railing(-8,-150,-8,-146,0,{y2:y,m:MT.plain('#ffd166')});railing(-12,-150,-12,-146,y,{m:MT.plain('#ffd166')});
  for(let i=0;i<6;i++)box(-38+i*3,y,-149.6,-36+i*3,y+1.2,-148.6,MT.plain(['#2a2a34','#1a1a24'][i%2]));sofa(12,-148.6,3,'n','#4a5a8a',y);sofa(19,-148.6,3,'n','#4a5a8a',y);table(15.5,-145,2,.8,MT.plain('#e9e3da'),.76,y);
  for(let i=0;i<3;i++){kOnWall('h',z0+.2,1,22+i*2.6,2,y+1,1.2,mt('white','#c8d4e0',.5,0,{r:.05,m:.9}));for(let k=0;k<5;k++)box(21.2+i*2.6+k*.4,y+2.25,z0+.22,21.4+i*2.6+k*.4,y+2.35,z0+.26,MT.glow('#ffe8c8',2),{col:false})}
  for(let i=0;i<2;i++){const x=-30+i*5;box(x,y,-140,x+.06,y+1.8,-137,MT.metal,{col:false});box(x+.06,y+1.7,-140,x+3,y+1.76,-139.94,MT.metal,{col:false});for(let k=0;k<8;k++)box(x+.3+k*.32,y+.4,-140.1,x+.5+k*.32,y+1.68,-139.9,MT.fabric(['#ff5fb0','#2bf0ff','#1b1026','#ffd166'][k%4]),{col:false})}
  box(-6,y,-149.6,0,y+.9,-148.4,MT.plain('#e9e3da'));for(let k=0;k<5;k++)box(-5.6+k*1.1,y+.9,-149.3,-5+k*1.1,y+1.02,-148.7,MT.plain(['#2a8a3a','#ffd166','#c9a46a','#ff5d73','#f4f4f0'][k]),{col:false});
  kSign(-3,y+2,-149.78,3,.9,'s','RIDER: NO BROWN M&Ms','#1b1026','#ffd166');kSign(-5,y+2.75,-136.22,2.4,.4,'n','STAGE →','#ffd166','#2a2a34');
  for(const x of[-30,-10,10,24])lightPanel(x,y+3.4,-143,1.4,.6,'#f0f4ff',9,.8);mr(x0,z0,x1,z1,y,'Backstage','#3a3a44')}
 /* ---- the west staff corridor, security, the stores ---- */
 {sFloor(-64,-150,-60,-64,0,MT.concrete);ceilQ(-64,-150,-60,-64,4,MT.ceil);W('v',-64,-150,-64,0,4,GR,1);for(let z=-144;z<-66;z+=10)lightPanel(-62,4,z,.6,1.2,'#f0f4ff',7,.6);
  for(let z=-140;z<-70;z+=16){box(-63.8,2.8,z,-63.5,3.1,z+12,MT.metal,{col:false});box(-63.8,3.2,z,-63.6,3.35,z+12,MT.plain('#c0304a'),{col:false})}W('v',-60,-150,-64,0,4,GR,-1);kSign(-62,2.6,-64.02,2.4,.4,'n','STAFF ONLY · KEYCARD','#ff5d73','#2a2a34');mr(-64,-150,-60,-64,0,'','#3a3a44');
  // security: the CCTV wall, a desk, lockers, a radio charging rack, the coffee
  sFloor(-110,-100,-64,-64,0,MT.carpetGrey);ceilQ(-110,-100,-64,-64,4,MT.ceil);W('v',-110,-100,-64,0,4,GD,1);W('h',-100,-110,-64,0,4,GD,1);W('h',-64,-110,-64,0,4,GD,-1);W('v',-64,-100,-64,0,4,GD,-1);
  for(let r=0;r<3;r++)for(let c=0;c<6;c++)kOnWall('h',-99.8,1,-100+c*2.5,2.3,.9+r*.88,.78,[MT.dash,MT.scope,MT.code][(r+c)%3]);
  box(-104,0,-95.6,-84,.8,-94.4,MT.plain('#2a2a34'));for(let i=0;i<4;i++){kChair(-101+i*4.5,-93.6,'n',0,'#3a3a4a');kKeyboard(-101+i*4.5,.8,-95,'x')}kOnWall('v',-109.8,1,-80,6,0,2.2,MT.locker2,3,2.2);
  box(-71,0,-99.6,-67,1.1,-98.6,MT.metal);for(let i=0;i<8;i++)box(-70.8+i*.45,1.1,-99.4,-70.5+i*.45,1.5,-99.1,MT.plain('#14141a'),{col:false});box(-75,0,-65.6,-72,1,-64.4,MT.plain('#e9e3da'));kMug(-74,1,-65,'#ff5d73');
  for(const z of[-92,-80,-70])for(const x of[-100,-80])lightPanel(x,4,z,1.4,.6,'#eef4ff',9,.6);addLight(-92,2.4,-96,[.6,.8,1],9,.8);kSign(-63.78,2.6,-82,2,.4,'e','SECURITY','#8a8a94','#2a2a34');mr(-110,-100,-64,-64,0,'Security','#2a2a3a');
  sFloor(-110,-150,-64,-100,0,MT.concrete);ceilQ(-110,-150,-64,-100,4,MT.ceil);W('v',-110,-150,-100,0,4,GR,1);W('v',-64,-150,-100,0,4,GR,-1);
  for(let r=0;r<4;r++){const z=-144+r*10;for(const x0 of[-106,-90]){box(x0,0,z,x0+12,2.6,z+1.2,MT.metal);for(let k=0;k<8;k++)for(let l=0;l<2;l++)box(x0+.2+k*1.45,.1+l*1.3,z+.1,x0+1.4+k*1.45,.9+l*1.3+((k*3+l+r)%3)*.1,z+1.1,MT.plain(['#c9a46a','#8a6a3a','#3a5a8a','#e9e3da'][(k+l+r)%4]),{col:false})}}
  kSign(-87,2.6,-100.22,3,.45,'n','CON STORES · LOST & FOUND','#ffd166','#2a2a34');for(const z of[-140,-120])lightPanel(-87,4,z,2,.6,'#f0f4ff',10,.7);mr(-110,-150,-64,-100,0,'Stores','#3a3a44')}
 /* ---- the east staff corridor and the MDF ---- */
 {sFloor(50,-150,56,-64,0,MT.concrete);ceilQ(50,-150,56,-64,4,MT.ceil);W('v',56,-150,-64,0,4,GR,-1);W('v',50,-150,-64,0,4,GR,1);for(let z=-144;z<-66;z+=10)lightPanel(53,4,z,.6,1.2,'#f0f4ff',7,.6);mr(50,-150,56,-64,0,'','#3a3a44');
  sFloor(56,-100,62,-86,0,MT.tileDark);ceilQ(56,-100,62,-86,3,MT.ceil);W('h',-100,56,62,0,3,GD,1);W('h',-86,56,62,0,3,GD,-1);W('v',62,-100,-86,0,3,GD,-1);
  for(let i=0;i<4;i++)rack(61.4,-98.6+i*1.3,'w');for(let i=0;i<3;i++)rack(57.6+i*1.2,-87,'s');box(57,2.4,-99.8,61.8,2.6,-86.2,MT.metal,{col:false,b:1});
  box(58.6,1.3,-99.5,59.6,1.6,-99.1,MT.plain('#0d1830'),{col:false});box(58.8,1.6,-99.4,59.4,1.62,-99.2,MT.glow('#5ab4ff',2.2),{col:false});
  kSign(55.78,2.6,-93,2.4,.35,'w','MDF · NETWORK CORE','#8affc1','#1a2a24');addLight(59,2.4,-93,[.6,1,.8],7,.9);mr(56,-100,62,-86,0,'MDF','#2a3a3a')}
 /* ---- the service corridor ---- */
 {sFloor(-110,-158,176,-150,0,MT.concrete);ceilQ(-110,-158,176,-150,4,MT.ceil);W('h',-158,-110,176,0,4,GR,1);W('v',-110,-158,-150,0,4,GR,1);W('v',176,-158,-150,0,4,GR,-1);
  // its south wall: the backs of the stores, backstage, hall B, the break room (doors registered above)
  W('h',-150,-110,-64,0,4,GR,-1);W('h',-150,-60,-40,0,4,GR,-1);W('h',-150,30,50,0,4,GR,-1);W('h',-150,56,134,0,4,GR,-1);
  for(let x=-104;x<176;x+=12){lightPanel(x,4,-154,1.2,.6,'#f0f4ff',8,.55);box(x,3.3,-157.8,x+12,3.5,-157.6,MT.metal,{col:false})}
  for(let x=-90;x<170;x+=23){box(x,0,-157.8,x+1.2,1.1,-156.8,MT.plain('#5a5a64'));box(x+2,0,-157.8,x+2.8,.9,-157,MT.plain('#3a5a8a'))}
  kSign(150,1.6,-157.78,5,.6,'s','LOADING DOCK →','#ffd166','#3a3a44');kSign(-80,1.6,-157.78,5,.6,'s','← SECURITY · STORES','#ffd166','#3a3a44');mr(-110,-158,176,-150,0,'Service corridor','#3a3a44')}
 /* ================= NORTH-EAST CONCOURSE + HALL B ================= */
 {sFloor(56,-64,168,-54,0,MT.carpetCon);W('h',-64,56,168,0,L1,MT.wallCon,1);W('h',-64,56,110,L1,L2-L1,MT.wallCon,1);W('h',-64,110,168,L1,L2-L1,MT.wallCon,1);
  W('h',-54,56,134,0,L2,MT.wallCon,-1);W('h',-54,134,158,0,L2,MT.wallCon,-1);W('v',168,-64,-54,0,L2,MT.wallCon,-1);
  sFloor(56,-64,110,-54,L2,MT.carpetGallery,[],.45,MT.acou);ceilQ(110,-64,168,-54,L2-.45,MT.acou);sCeil(56,-64,110,-54,16.1,MT.acou);
  W('h',-64,56,110,L2,16.5-L2,MT.wallCon,1);W('h',-54,56,110,L2,1,MT.wallCon,-1);W('h',-54,56,110,L2+1,16.5-L2-1,GL,-1);W('v',110,-64,-54,L2,16.5-L2,MT.wallCon,-1);
  for(let x=62;x<168;x+=12){kPendant(x,L2-.45,-59,2.2,.6,'#ffe8f0',12,.8,'#2a1f36')}for(let x=60;x<110;x+=10)lightPanel(x,16.1,-59,2,1,'#f0f0ff',10,.6);
  const ds=(x,y,z,d,t,c)=>kSign(x,y,z,Math.min(7,t.length*.32+1.2),.7,d,t,c||'#ffd166','#1b1026');
  ds(75,4.4,-63.78,'s','HALL B · TRACK 2','#7cc4ff');ds(97,4.4,-63.78,'s','HALL B · TRACK 2','#7cc4ff');ds(90,5.2,-54.22,'n','EXPO HALL','#ffd166');ds(104,5.2,-54.22,'n','EXPO HALL','#ffd166');ds(122,2.8,-63.78,'s','KITCHEN · STAFF','#8a8a94');
  ds(150,4,-63.78,'s','VILLAGE ROW →','#8affc1');ds(71,L2+2.8,-63.78,'s','CON OPS','#ffd166');ds(86,L2+2.8,-63.78,'s','PRESS','#d9d4cc');ds(101,L2+2.8,-63.78,'s','SPEAKERS','#d9d4cc');
  for(const x of[66,108,140])box(x-1.4,0,-55.4,x+1.4,.45,-54.8,{side:MT.clad,top:MT.woodDark});for(const x of[60,130,165])kPlant(x,-62.4,1.4,0,'#2a1f36');
  mr(56,-64,168,-54,0,'NE concourse','#5a2a4a');mr(56,-64,110,-54,L2,'','#3a2a4a')}
 {const X0=62,X1=110,Z0=-111,Z1=-64,H=L2-.45;sFloor(X0,Z0,X1,Z1,0,MT.carpetDark);ceilQ(X0,Z0,X1,Z1,H,MT.acou);
  W('h',Z1,X0,X1,0,H,MT.wallPale,-1);W('h',Z0,X0,X1,0,H,AC,1);W('v',X0,Z0+.2,Z1-.2,0,H,AC,1);W('v',X1,Z0+.2,Z1-.2,0,H,AC,-1);
  box(X0+4,0,Z0+.2,X1-4,.8,-103,{side:MT.plain('#1a1428'),top:MT.woodDark},{walk:1});stairs(84,-103,88,-101.6,0,.8,'z-',MT.woodDark,{sides:1});
  kOnWall('h',Z0+.2,1,86,20,3.8,6.4,MT.slides);box(84.6,.8,-108,87.4,1.9,-107.2,MT.woodDark);kSign(86,1.3,-107.19,1.6,.35,'s','TRACK 2','#7cc4ff','#2a2a3a');
  for(let r=0;r<16;r++){const z=-98+r*1.55;seatRow(64,83,z,0,'s','#3f526a');seatRow(89,108,z,0,'s','#3f526a')}
  for(const z of[-104,-92,-80,-70])for(const x of[74,98])lightPanel(x,H,z,4,1.4,'#f4f8ff',17,.95);addLight(86,6,-104,[1,.95,.9],14,1);
  for(const[x,f]of[[X0+.2,1],[X1-.2,-1]])kOnWall('v',x,f,-90,8,3,4.5,MT.slides);mr(X0,Z0,X1,Z1,0,'Hall B','#2a3a5a');
  // Hall B backstage: AV store, flight cases, a green room
  sFloor(62,-150,110,-111,0,MT.concrete);ceilQ(62,-150,110,-111,4.4,MT.ceil);W('v',62,-150,-111,0,4.4,GR,1);W('v',110,-150,-111,0,4.4,GR,-1);W('h',-111,62,110,.8,3.6,GR,-1);box(62,0,-111.2,110,.8,-111,GR);
  stairs(84.5,-112.6,87.5,-111.2,0,.8,'z+',MT.concrete,{sides:1});
  for(let i=0;i<8;i++)box(64+i*2.4,0,-149.6,65.8+i*2.4,1.2,-148.4,MT.plain(['#2a2a34','#1a1a24','#3a3a44'][i%3]));sofa(100,-140,3,'n','#4a5a8a');sofa(100,-134,3,'s','#4a5a8a');table(100,-137,1.6,.8,MT.woodDark,.45);
  for(let i=0;i<4;i++)rack(70+i*1.4,-124,'s');for(const x of[72,98])lightPanel(x,4.4,-130,2,.6,'#f0f4ff',10,.7);mr(62,-150,110,-111,0,'Hall B backstage','#3a3a44')}
 // Level 2 above Hall B: Con Ops, the press room, the speaker lounge
 {const y=L2,ch=y+3.6;sFloor(62,-111,110,-64,y,MT.carpetGrey);for(const[x0,x1,m]of[[62,80,MT.carpetGrey],[80,92,MT.carpetGrey],[92,110,MT.carpetHotel]])ceilQ(x0,-111,x1,-64,ch,MT.ceil);
  W('h',-111,62,110,y,ch-y,MT.wallPale,1);W('v',62,-111,-64,y,ch-y,MT.wallPale,1);W('v',110,-111,-64,y,ch-y,MT.wallPale,-1);W('v',80,-111,-64,y,ch-y,MT.wallPale,-1);W('v',92,-111,-64,y,ch-y,MT.wallPale,-1);
  // con ops: whiteboards, radios, a big desk, badge boxes
  kOnWall('h',-110.8,1,71,10,y+.9,2,mt(signTex('KEYNOTE 4PM · AV · BADGES · RADIOS · DO NOT PANIC','#1b1026','#f6eefc',512,128),0,1,1,{k:1}));
  table(71,-90,6,2,MT.plain('#e9e3da'),.76,y);for(let i=0;i<6;i++)box(68.6+i*.9,y+.76,-90.6,69.2+i*.9,y+1.05,-90,MT.plain('#2a2a30'),{col:false});for(let i=0;i<4;i++)box(63,y,-104+i*3,65,y+.6,-102.2+i*3,MT.plain('#c9a46a'));
  for(const z of[-100,-84,-72])lightPanel(71,ch,z,3,1.2,'#fff8e0',9,.75);mr(62,-111,80,-64,y,'Con Ops','#5a4a1a');
  // press room: a step-and-repeat wall, rows of chairs, a lectern
  kOnWall('h',-110.8,1,86,10,y,3.4,MT.pressWall,1,1);box(85,y,-104,87,y+1.1,-103,MT.woodDark);for(let r=0;r<5;r++)for(let i=0;i<4;i++)kStool(82.2+i*2,-98+r*2.2,.46,MT.fabric('#3a3a4a'),y);
  for(const z of[-100,-82])lightPanel(86,ch,z,2,1,'#f4f8ff',8,.75);mr(80,-111,92,-64,y,'Press','#4a4a5a');
  // speaker lounge: sofas, a snack table, biscuits
  sofa(101,-96,3,'n','#4a5a8a',y);sofa(101,-90,3,'s','#4a5a8a',y);table(101,-93,1.6,1,MT.woodDark,.45,y);table(101,-104,4,1,MT.plain('#e9e3da'),.76,y);box(99.5,y+.76,-104.3,102.5,y+.9,-103.7,MT.bread,{col:false});
  quad([96,y+.012,-86],[106,y+.012,-86],[106,y+.012,-100],[96,y+.012,-100],MT.rugH,3,4);for(const z of[-100,-80])lightPanel(101,ch,z,2,1,'#fff4e0',8,.75);mr(92,-111,110,-64,y,'Speakers','#5a3a2a')}
 /* ---- the con kitchen, the staff break room ---- */
 {sFloor(110,-111,134,-64,0,MT.tile);ceilQ(110,-111,134,-64,4.4,MT.ceil);W('v',110,-111,-64,0,4.4,MT.tile,1);W('v',134,-111,-64,0,4.4,MT.tile,-1);W('h',-111,110,134,0,4.4,MT.tile,1);
  for(const z of[-100,-90,-80]){box(114,0,z-.6,130,.92,z+.6,MT.chrome);box(114,.92,z-.6,130,.96,z+.6,MT.metal,{col:false})}box(110.2,0,-110,111.4,.9,-66,MT.chrome);box(110.2,1.6,-110,111.2,2.8,-66,MT.metal,{col:false});
  for(const x of[114,120,126])lightPanel(x,4.4,-86,1.6,.6,'#f4f8ff',9,.65);mr(110,-111,134,-64,0,'Con kitchen','#3a3a44');
  sFloor(110,-150,134,-111,0,mt('vinyl',0,.5,0,{r:.5}));ceilQ(110,-150,134,-111,4,MT.ceil);W('v',110,-150,-111,0,4,MT.wallPale,1);W('v',134,-150,-111,0,4,MT.wallPale,-1);W('h',-111,110,134,0,4,MT.wallPale,-1);
  for(const[x,z]of[[116,-140],[124,-140],[116,-128],[124,-128]]){table(x,z,1.6,1.6,MT.plain('#e9e3da'));for(const[dx,dz,f]of[[0,-1.05,'n'],[0,1.05,'s']])chair(x+dx,z+dz,f,MT.plain('#3a5a8a'))}
  box(130,0,-149.6,133.6,.92,-145,{side:MT.plain('#e9e3da'),top:MT.plain('#3a3a44')});box(131,.92,-149.4,132,1.4,-148.6,MT.chrome,{col:false});kOnWall('v',133.8,-1,-136,6,0,2.2,MT.locker2,3,2.2);
  kSign(122,2.6,-149.78,4,.6,'s','STAFF ONLY · BREAK ROOM','#ffd166','#2a2a34');for(const z of[-142,-124])lightPanel(122,4,z,2,.6,'#fff8e8',9,.7);mr(110,-150,134,-111,0,'Break room','#3a3a4a')}
 /* ---- the loading dock (with the stair down to the service tunnel and the fire stairs to the roof) ---- */
 {const X0=134,X1=176,Z0=-150,Z1=-64,H=10;sFloor(X0,Z0,X1,Z1,0,MT.concrete,[[134,-122,140,-110]],.4,MT.concrete);G.lmK=.6;ceilQ(X0,Z0,X1,Z1,H,MT.deck);G.lmK=1;
  W('h',Z1,X0,X1,0,H,MT.concrete,-1);W('h',Z0,X0,X1,0,H,MT.concrete,1);W('v',X0,Z0+.2,Z1-.2,0,H,MT.concrete,1);W('v',X1,Z0+.2,Z1-.2,0,H,MT.concrete,-1);
  stairs(134,-122,140,-110,BY,0,'z-',MT.concrete,{nose:MT.plain('#ffd166'),solid:false});stairShell(134,-122,140,-110,BY,0,'z-',MT.concrete,.3);railing(140,-122,140,-110,0,{y2:BY,m:MT.plain('#ffd166'),under:5.3});railing(140,-110,140,-122,0,{m:MT.plain('#ffd166')});railing(134,-110,140,-110,0,{m:MT.plain('#ffd166')});
  for(let i=0;i<4;i++){const z=-140+i*18;kOnWall('v',X1-.2,-1,z,7,0,6,MT.plain('#8a8a94'));for(let k=0;k<12;k++)box(X1-.35,.4+k*.48,z-3.4,X1-.2,.44+k*.48,z+3.4,MT.plain('#5a5a64'),{col:false});box(X1-6,0,z-3.4,X1-.2,.12,z+3.4,MT.hazard,{col:false})}
  box(150,0,-120,166,3.8,-114,MT.plain('#e9e3da'));box(166,0,-120,170,2.8,-114,MT.plain('#2a4a8a'));kSign(158,1.2,-113.99,12,1.4,'s','HALCYON FRESH · DELIVERIES','#2a4a8a','#e9e3da');
  for(const[x,z]of[[142,-146],[146,-146],[142,-96],[150,-80],[160,-90]]){box(x,0,z,x+1.2,.15,z+1.2,MT.wood);box(x+.1,.15,z+.1,x+1.1,1+((x+z)%3)*.2,z+1.1,MT.plain('#c9a46a'))}
  {const x=160,z=-140;box(x-.7,0,z-1.6,x+.7,1.4,z+1,MT.gloss('#ffd166'));box(x-.6,1.4,z-.4,x+.6,2.4,z+.8,MT.glass,{col:false});box(x-.05,0,z-2.6,x+.05,3,z-2.5,MT.plain('#2a2a30'),{col:false});box(x-.5,.1,z-3.2,x+.5,.2,z-1.6,MT.plain('#2a2a30'),{col:false})}
  box(X0+.2,0,-70,X0+3,2.6,-66,MT.plain('#5a5a64'));kSign(X0+.22,2.8,-90,4,.5,'e','KITCHEN →','#ffd166','#3a3a44');
  kOnWall('h',Z1-.2,-1,146,1.4,0,2.4,MT.door);kSign(146,2.6,-64.22,2.8,.45,'n','FIRE STAIRS · ROOF','#ff5d73','#3a3a44');kSign(134.22,2.6,-116,3.2,.45,'e','↓ SERVICE TUNNEL','#ffd166','#3a3a44');
  for(let x=140;x<176;x+=12)for(let z=-144;z<-64;z+=16)lightPanel(x,H,z,2.4,.8,'#f4f8ff',14,.6);mr(X0,Z0,X1,Z1,0,'Loading dock','#3a3a44')}
}
