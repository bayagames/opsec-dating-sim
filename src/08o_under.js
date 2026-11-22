/* ============ UNDERGROUND, THE CON ROOF, THE NAMED AREAS ============ */
/* Basement (y -5): the car park under the hotel and the Foyer (x -160..-64, z -54..60) with the ramp from the plaza,
   the Network Operations Centre (x -64..-30, z -24..10), the plant room and hotel laundry (x -200..-160, z -54..20),
   the hotel basement at the foot of the back stairs (x -200..-160, z 20..54), and the service tunnel (z -60..-54) from
   the car park's north wall to the loading dock. The con roof (y 16.5) over the Expo Hall is walkable: fire stairs
   from the dock, the antenna mast with the listening post. */
function buildUnder(){
 const D=door,W=wallLine,CO=MT.concrete,CE=-.4,H=CE-BY;
 const mr=(x0,z0,x1,z1,n,c)=>(MAPR.con=MAPR.con||[]).push({x0,z0,x1,z1,y:BY,n,c:c||'#3a3a3a'});
 D('v',-64,-8,2,2.4,BY);D('v',-160,-20,3,2.6,BY);D('v',-160,40,3,2.6,BY);D('h',20,-180,2,2.4,BY);D('h',-54,-90,3,2.6,BY);gap('h',60,-68,8,4.2,BY);
 /* ---------- car park ---------- */
 {const X0=-160,X1=-64,Z0=-54,Z1=60;sFloor(X0,Z0,X1,Z1,BY,MT.park);G.lmK=.6;ceilQ(X0,Z0,X1,Z1,CE,CO);G.lmK=1;
  W('v',X0,Z0,Z1,BY,H,CO,1);W('v',X1,Z0,Z1,BY,H,CO,-1);W('h',Z0,X0,X1,BY,H,CO,1);W('h',Z1,X0,X1,BY,H,CO,-1);
  for(let x=-152;x<-64;x+=12)for(let z=-46;z<60;z+=12){if(x>-73&&z>48)continue;box(x-.35,BY,z-.35,x+.35,CE,z+.35,CO);box(x-.36,BY+.8,z-.36,x+.36,BY+1.1,z+.36,MT.plain('#ffd166'),{col:false})}
  // parking bays in rows, aisles between them, arrows; cars in about two bays out of three
  const cc=['#2a3a5a','#8a8a94','#3a1a1a','#e9e3da','#2a4a2a','#5a4a3a','#14141a','#7a2a2a'];let ci=0;
  for(const zr of[-50,-32,-14,4,22,40]){for(let x=-158;x<-66;x+=3){floorQ(x,zr,x+.1,zr+5.6,BY+.01,MT.plain('#e9e3da'))}floorQ(-158,zr+5.6,-66,zr+5.7,BY+.01,MT.plain('#e9e3da'));
   for(let x=-156.5;x<-67;x+=3){if(Math.abs(x+113)<1.6&&zr===4)continue;if(((x*7+zr*3)|0)%3!==0)car(x,zr+2.8,'z',cc[(ci++)%cc.length],{y:BY})}}
  car(-113,6.8,'z','#0d0d14',{plate:'PRIV4CY',y:BY});
  for(const z of[-41,-23,-5,13,31,49])for(let x=-150;x<-66;x+=16){floorQ(x,z-.3,x+2.4,z+.3,BY+.012,MT.plain('#e9e3da'))}
  for(let x=-154;x<-66;x+=12)for(const z of[-50,-40,-22,-4,14,32,50,57]){box(x-.6,CE-.12,z-.12,x+.6,CE,z+.12,MT.glow('#ffb24a',1.6),{col:false,b:1});addLight(x,CE-.6,z,[1,.64,.3],14,.85)}
  kSign(-112,CE-.9,59.78,10,.6,'n','P · HALCYON GUESTS + VIPs ONLY','#ffd166','#2a2a30');kSign(-64.22,BY+2.6,-8,3,.45,'w','NOC →','#8affc1','#2a2a30');kSign(-90,BY+2.7,-53.78,4,.45,'s','SERVICE TUNNEL · STAFF','#ffd166','#2a2a30');
  for(const x of[-106,-102]){kOnWall('h',Z0+.2,1,x,1.6,BY,2.5,mt('lift',0,1,0,{r:.25,m:.7}))}kSign(-104,BY+2.8,Z0+.22,4,.4,'s','LIFTS · FOYER','#8affc1','#2a2a30');
  box(-80,BY,58.4,-78.6,BY+1.6,59.6,MT.plain('#2a2a34'));box(-79.95,BY+.9,58.38,-78.65,BY+1.4,58.4,MT.glow('#8affc1',1.4),{col:false});
  mr(X0,Z0,X1,Z1,'Car park','#3a3a3a')}
 /* ---------- the Network Operations Centre ---------- */
 {const X0=-64,X1=-30,Z0=-24,Z1=10;sFloor(X0,Z0,X1,Z1,BY,MT.tileDark);ceilQ(X0,Z0,X1,Z1,CE,MT.ceilDark);W('v',X0,Z0,Z1,BY,H,MT.plain('#4a4a54'),1);W('v',X1,Z0,Z1,BY,H,MT.plain('#4a4a54'),-1);W('h',Z0,X0,X1,BY,H,MT.plain('#4a4a54'),1);W('h',Z1,X0,X1,BY,H,MT.plain('#4a4a54'),-1);
  for(let i=0;i<8;i++){rack(-58+i*3,-22.6,'s',BY);rack(-58+i*3,-19.4,'n',BY)}box(-60,BY+2.6,-23.8,-34,BY+2.8,-18,MT.metal,{col:false,b:1});
  for(let i=0;i<3;i++){const x=-55+i*9;table(x,4,5,1.2,MT.plain('#1a1a24'),.76,BY);for(let k=0;k<3;k++)kMonitor(x-1.6+k*1.6,BY+.76,3.7,'s',[MT.dash,MT.code,MT.scope][k],.5);for(let k=0;k<2;k++)kChair(x-.8+k*1.6,5.1,'n',BY,'#2a2a34')}
  kOnWall('h',Z1-.2,-1,-47,16,BY+.8,2.4,MT.dash,4,2.4);kSign(-47,BY+3.4,Z1-.22,8,.5,'n','NETWORK OPERATIONS · CTRL+ALT+CON','#8affc1','#1a2a24');
  addLight(-47,CE-.5,-21,[.4,1,.8],14,.9);addLight(-47,CE-.5,4,[.5,.8,1],12,.8);addLight(-36,CE-.5,-8,[.5,.8,1],10,.6);mr(X0,Z0,X1,Z1,'Network Ops','#1a3a3a')}
 /* ---------- plant room + laundry, and the hotel basement ---------- */
 {const X0=-200,X1=-160;sFloor(X0,-54,X1,20,BY,CO);ceilQ(X0,-54,X1,20,CE,CO);W('v',X0,-54,54,BY,H,CO,1);W('h',-54,X0,X1,BY,H,CO,1);W('v',X1,-54,54,BY,H,CO,-1);W('h',20,X0,X1,BY,H,CO,-1);
  for(let i=0;i<5;i++){const z=-50+i*6;box(-198,BY,z,-193,BY+2.4,z+4,MT.metal);box(-196,BY+2.4,z+1.5,-195,CE,z+2.5,MT.metal,{col:false});box(-193.02,BY+1.6,z+1.6,-193,BY+1.9,z+2.4,MT.glow('#ff5d73',2),{col:false})}
  for(let z=-52;z<18;z+=5)box(-200,CE-.6,z,-160,CE-.4,z+.3,MT.metal,{col:false,b:1});for(let x=-196;x<-162;x+=6)box(x,CE-.9,-54,x+.25,CE-.65,20,MT.plain('#3a5a8a'),{col:false,b:1});
  for(let i=0;i<7;i++){box(-166,BY,-50+i*3,-163,BY+1.1,-48+i*3,MT.chrome);box(-166.02,BY+.4,-49.4+i*3,-166,BY+.9,-48.6+i*3,MT.glass,{col:false})}
  for(let i=0;i<4;i++){box(-186+i*3,BY,-4,-184+i*3,BY+1,-2.6,MT.plain('#5a7a9a'));box(-186+i*3,BY+1,-4,-184+i*3,BY+1.2,-2.6,MT.linen,{col:false})}
  for(let i=0;i<4;i++)box(-188+i*1.1,CE-1,6+i*1.3,-187.4+i*1.1,CE-.1,6.6+i*1.3,mt('white','#f4f4f8',.5,0,{glass:1}),{col:false});
  kSign(-180,BY+2.6,-53.78,6,.5,'s','PLANT ROOM · LAUNDRY','#ffd166','#2a2a30');addLight(-180,CE-.6,-30,[1,.85,.6],14,.9);addLight(-180,CE-.6,0,[1,.85,.6],12,.8);addLight(-170,CE-.6,12,[1,.85,.6],9,.6);mr(X0,-54,X1,20,'Plant room & laundry');
  // the hotel basement: the foot of the back stairs, the service lift, linen cages
  sFloor(X0,20,X1,54,BY,CO);ceilQ(X0,40,X1,54,CE,CO);stairShell(-196,24,-190,38,BY,0,'z-',CO,.3);W('h',54,X0,X1,BY,H,CO,-1);
  box(-196,BY,38,-190,BY+.01,38.05,MT.plain('#ffd166'),{col:false});kOnWall('h',53.8,-1,-170,1.8,BY,2.5,MT.elev);kSign(-170,BY+2.7,53.78,2.4,.4,'n','SERVICE LIFT','#ffd166','#2a2a30');
  for(let i=0;i<3;i++){const x=-186+i*4;box(x,BY,48,x+2.4,BY+1.6,52,MT.metal,{col:false});colBox(x,48,x+2.4,52,BY,BY+1.6);for(let k=0;k<3;k++)box(x+.2,BY+.2+k*.45,48.2,x+2.2,BY+.5+k*.45,51.8,MT.linen,{col:false})}
  addLight(-180,CE-.6,36,[1,.9,.7],12,.9);mr(X0,20,X1,54,'Hotel basement')}
 /* ---------- the service tunnel ---------- */
 {sFloor(-100,-60,140,-54,BY,CO);ceilQ(-100,-60,140,-54,CE,CO);W('h',-60,-100,134,BY,H,CO,1);W('h',-54,-64,140,BY,H,CO,-1);W('v',-100,-60,-54,BY,H,CO,1);
  sFloor(134,-110,140,-60,BY,CO);ceilQ(134,-64,140,-60,CE,CO);W('v',134,-110,-60,BY,H,CO,1);W('v',140,-110,-54,BY,H,CO,-1);
  for(let x=-96;x<140;x+=12){box(x,CE-.8,-59.8,x+12,CE-.6,-59.6,MT.metal,{col:false});lightPanel(x+6,CE,-57,.5,1,'#ffb24a',9,.7)}for(let z=-104;z<-60;z+=12)lightPanel(137,CE,z,1,.5,'#ffb24a',9,.7);
  kSign(-60,BY+2.4,-59.78,5,.45,'s','TUNNEL → LOADING DOCK','#ffd166','#2a2a30');kSign(137,BY+2.6,-60.22,2.8,.4,'n','↑ LOADING DOCK','#ffd166','#2a2a30');
  (MAPR.con=MAPR.con||[]).push({x0:-100,z0:-60,x1:140,z1:-54,y:BY,n:'Service tunnel',c:'#3a3a3a'},{x0:134,z0:-110,x1:140,z1:-60,y:BY,n:'',c:'#3a3a3a'})}
 /* ---------- the con roof over the Expo Hall ---------- */
 {const y=RFY,X0=56,X1=134,Z0=-54,Z1=20;floorQ(X0,Z0,X1,Z1,y+.02,MT.gravel);surf(X0,Z0,X1,Z1,y+.02);
  for(const[a,b,c,d]of[[X0-.4,Z0-.4,X1+.4,Z0],[X0-.4,Z1,X1+.4,Z1+.4],[X0-.4,Z0,X0,Z1],[X1,Z0,X1+.4,Z1]])box(a,y,b,c,y+1.1,d,CO);
  for(const[x,z,w,d]of[[66,-46,4,3],[78,-46,3,3],[94,-36,5,3],[114,-20,3,4],[72,-12,6,4],[100,8,4,3],[122,6,5,3],[86,10,3,3]])box(x,y,z,x+w,y+1.6,z+d,{side:MT.metal,top:MT.fan});
  box(126,y,-52,132,y+3,-46,CO);kOnWall('v',126,-1,-49,1.4,y,2.4,MT.door);kSign(125.98,y+2.6,-49,2,.4,'w','FIRE STAIRS','#ff5d73','#3a3a44');
  {const mx=104,mz=-6;box(mx,y,mz,mx+.6,y+5.6,mz+.6,MT.metal);box(mx-.2,y+5.6,mz-.2,mx+.8,y+5.8,mz+.8,MT.glow('#ff5d73'),{col:false});box(mx-.05,y+.8,mz+.58,mx+.6,y+1.2,mz+.7,MT.plain('#111'),{col:false});box(mx+.1,y+1.05,mz+.7,mx+.2,y+1.12,mz+.71,MT.glow('#8affc1',2.4),{col:false});
   kBeam([mx+.3,y+4.6,mz+.3],[mx+.3,y+4.2,mz+2.2],.5,.08,MT.plain('#d9d4cc'))}
  for(let i=0;i<6;i++)addLight(64+i*13,y+3,-30+(i%3)*20,[.55,.55,.95],16,.35);
  (MAPR.con=MAPR.con||[]).push({x0:X0,z0:Z0,x1:X1,z1:Z1,y,n:'Con roof',c:'#2a2a4a'})}
}
/* ================= AREAS (what the map calls each place, where fast travel lands, which backdrop a scene uses) ================= */
function siteAreas(){
 const A=(k,n,r,sp,bg,o)=>area(k,n,'con',r,sp,bg,o),PI=Math.PI,G1={y0:4,y1:10},G2={y0:9.5,y1:15.5},B={y0:-7,y1:-2};
 // outside
 A('plaza','Arrival Plaza',[-215,60,215,140],[-88,74,0,0],'con',{out:1});A('vestibule','Convention Entrance',[-96,60,-80,68],[-88,64.5,0,0],'con',{sub:1});
 // hotel ground floor
 A('lobby','Hotel Lobby',[-160,-4,-110,60],[-135,54,0,0],'lobby',{y1:4});A('cafe','Halcyon Café',[-129,42,-110,60],[-122,49,PI,0],'lobby',{sub:1,y1:4});
 A('promenade','The Promenade',[-200,-24,-64,-4],[-120,-14,PI/2,0],'lobby',{y1:4});A('lifts','Hotel lifts',[-160,-36,-136,-24],[-148,-26,0,0],'lobby',{sub:1,y1:4});
 A('bar','Hotel Bar',[-110,-64,-64,-24],[-88,-30,0,0],'bar',{y1:4});A('grill','The Grill',[-136,-64,-110,-24],[-123,-28,0,0],'bar',{y1:4});A('pdining','Private dining',[-160,-64,-136,-36],[-140,-44,PI/2,0],'bar',{y1:4});
 A('hkitchen','Hotel kitchen',[-200,-64,-160,-24],[-185,-27,0,0],'lobby',{y1:4,hide:1});A('luggage','Luggage room',[-180,-4,-160,20],[-163,8,-PI/2,0],'lobby',{y1:4});A('backoffice','Hotel back office',[-200,-4,-180,20],[-188,4,-PI/2,0],'lobby',{y1:4,hide:1});
 A('backstairs','Back stairs',[-200,20,-160,40],[-170,30,-PI/2,0],'lobby',{hide:1,y0:-1,y1:4});A('boutique','Halcyon Boutique',[-200,40,-160,60],[-163,50,-PI/2,0],'lobby',{y1:4});
 A('terrace','Bar Terrace',[-64,-50,-50,-24],[-57,-27,0,.05],'bar',{out:1,y1:4});
 // hotel level 1 + 2
 A('mezz','Hotel Mezzanine',[-160,-4,-110,60],[-114,20,PI/2,L1],'lobby',G1);A('hotelL1','Mezzanine corridor',[-200,-24,-64,-4],[-130,-14,PI/2,L1],'lobby',G1);
 A('ballroom','Grand Ballroom',[-110,-64,-80,-24],[-95,-27,0,L1],'lobby',G1);A('lumenlounge','The Lumen Lounge',[-80,-64,-64,-24],[-72,-27,0,L1],'lobby',G1);
 A('meeting','Meeting rooms',[-160,-64,-110,-24],[-123,-27,0,L1],'lobby',G1);A('library','Hotel library',[-200,-64,-160,-24],[-185,-27,0,L1],'lobby',G1);
 A('hotelL2','Hotel · Level 2',[-200,-24,-64,-4],[-130,-14,PI/2,L2],'lobby',G2);A('gym','Gym',[-136,-64,-110,-24],[-123,-27,0,L2],'lobby',G2);A('pool','Pool',[-110,-64,-64,-24],[-87,-27,0,L2],'lobby',G2);A('spa','The Spa',[-200,-64,-136,-24],[-185,-25.6,0,L2],'lobby',G2);
 A('skybridge','Skybridge',[-110,6,-72,10],[-100,8,-PI/2,L1],'lobby',Object.assign({sub:1},G1));
 // the con: foyer, ring, courtyard
 A('foyer','The Foyer',[-110,-4,-64,60],[-90,40,0,0],'con');A('foyerG','Foyer galleries',[-82,-4,-64,60],[-68,36,PI/2,L1],'con',G1);A('foyerG2','Foyer · Level 2',[-82,-4,-64,60],[-68,30,PI/2,L2],'con',G2);
 A('walkway','Ring · West',[-64,-24,-50,20],[-57,0,0,0],'con');A('ringN','Ring · North',[-64,-64,56,-50],[-20,-57,-PI/2,0],'con');A('ringE','Ring · East',[40,-50,56,20],[48,-20,0,0],'con');A('ringS','Ring · South',[-64,20,56,34],[0,27,-PI/2,0],'con');
 A('gallery','Ring balcony',[-64,-64,56,34],[0,-62,-PI/2,L1],'con',G1);A('ring2','Ring · Level 2',[-64,-64,56,34],[-20,-57,-PI/2,L2],'con',G2);A('skyterrace','Sky terrace',[-64,-50,-50,-24],[-57,-30,0,L2],'con',Object.assign({out:1},G2));
 A('courtyard','Courtyard',[-50,-50,40,20],[-40,0,-PI/2,0],'con',{out:1,y0:-3});
 // halls and back of house
 A('hallA','Hall A · Main Stage',[-60,-136,50,-64],[-55,-67,0,0],'stage',{y1:13});A('backstage','Backstage',[-40,-150,30,-136],[-5,-139,PI,1.6],'stage',{hide:1});
 A('hallB','Hall B',[62,-111,110,-64],[86,-67,0,0],'stage');A('hallBback','Hall B backstage',[62,-150,110,-111],[86,-114,PI,0],'con',{hide:1});
 A('stafffw','Staff corridor',[-64,-150,-60,-64],[-62,-68,0,0],'con',{sub:1});A('security','Security Office',[-110,-100,-64,-64],[-70,-82,PI/2,0],'con');A('stores','Con stores',[-110,-150,-64,-100],[-70,-125,PI/2,0],'con',{hide:1});
 A('staffc','Staff corridor',[50,-150,56,-64],[53,-68,0,0],'con',{sub:1});A('mdf','Network closet',[56,-100,62,-86],[57.5,-93,-PI/2,0],'con');A('service','Service corridor',[-110,-158,176,-150],[-5,-154,-PI/2,0],'con');
 A('kitchenC','Con kitchen',[110,-111,134,-64],[122,-67,0,0],'con',{hide:1});A('breakroom','Staff break room',[110,-150,134,-111],[122,-114,PI,0],'con',{hide:1});A('dock','Loading Dock',[134,-150,176,-64],[146,-67,0,0],'con');
 A('neconc','North-east concourse',[56,-64,168,-54],[66,-59,-PI/2,0],'con');A('neconc2','Level 2 · north-east',[56,-64,110,-54],[60,-59,-PI/2,L2],'con',G2);
 A('conops','Con Ops',[62,-111,80,-64],[71,-67,0,L2],'con',G2);A('press','Press room',[80,-111,92,-64],[86,-67,0,L2],'con',G2);A('speakers','Speaker lounge',[92,-111,110,-64],[101,-67,0,L2],'con',G2);
 // expo + south-east concourse
 A('vendor','Expo Hall',[56,-54,134,20],[60,-38,-PI/2,0],'vendor');A('constore','Con Store',[57,10,73,20],[65,9,PI,0],'vendor',{sub:1});A('demostage','Demo stage',[112,-54,132,-30],[116,-28,0,0],'vendor',{sub:1});
 A('seconc','South-east concourse',[56,20,158,34],[60,27,-PI/2,0],'con');A('seconc1','South-east · Level 1',[56,20,158,34],[60,27,-PI/2,L1],'con',G1);
 // village row
 A('villagerow','Village Row',[158,-54,168,34],[163,-50,PI,0],'con');A('vrL1','Village Row · Level 1',[158,-54,168,34],[163,-36,PI,L1],'con',G1);
 A('lockpick','Lockpick Village',[134,-54,158,-30],[155,-42,PI/2,0],'lock');A('ctf','CTF Arena',[134,-30,158,0],[155,-15,PI/2,0],'ctf');A('soc','Blue Team SOC',[134,0,158,20],[155,10,PI/2,0],'soc');
 A('carhack','Car Hacking Village',[168,-64,196,-36],[171,-45,-PI/2,0],'con');A('ics','ICS Village',[168,-36,196,-10],[171,-23,-PI/2,0],'con');A('soceng','Social Engineering Village',[168,-10,196,16],[171,3,-PI/2,0],'con');A('aero','Aerospace Village',[168,16,196,34],[171,25,-PI/2,0],'con');
 A('workshopA','Workshop A',[134,-54,158,-30],[155,-42,PI/2,L1],'con',G1);A('workshop','Workshop B',[134,-30,158,-8],[155,-19,PI/2,L1],'con',G1);A('hwv','Hardware Hacking Village',[134,-8,158,20],[155,6,PI/2,L1],'con',G1);
 A('creator','Creator Corner',[168,-64,196,-40],[171,-53,-PI/2,L1],'stream',G1);A('arcade','Retro Arcade',[168,-40,196,-16],[171,-28,-PI/2,L1],'con',G1);A('tabletop','Tabletop & Board Games',[168,-16,196,10],[171,-3,-PI/2,L1],'con',G1);A('film','Film room',[168,10,196,34],[171,22,-PI/2,L1],'con',G1);
 // south block
 A('food','Food Court',[-64,34,-10,60],[-37,37,PI,0],'con');A('fcterrace','Food Court Terrace',[-64,34,-10,42],[-37,36,PI,L1],'con',Object.assign({sub:1},G1));A('skygarden','Sky Garden',[-64,34,-10,60],[-37,36,PI,L2],'con',Object.assign({out:1},G2));
 A('cosplay','Cosplay Hall',[-10,34,50,76],[5,37,PI,0],'cos');A('lounge','Chill-out Lounge',[50,34,80,56],[53,37,PI,0],'chill');A('naps','Nap pods',[50,56,80,72],[65,58,PI,0],'chill');A('quiet','Quiet room',[50,34,80,56],[53,37,PI,L1],'chill',G1);
 // underground + roof
 A('basement','Hotel basement',[-200,20,-160,54],[-175,45,-PI/2,BY],'lobby',Object.assign({hide:1},B));A('carpark','Car park',[-160,-54,-64,60],[-104,-50,PI,BY],'con',B);
 A('noc','Network Operations Centre',[-64,-24,-30,10],[-62,-8,-PI/2,BY],'soc',B);A('plant','Plant Room & Laundry',[-200,-54,-160,20],[-163,-20,PI/2,BY],'con',B);A('tunnel','Service tunnel',[-100,-60,140,-54],[-90,-57,-PI/2,BY],'con',B);A('tunnelN','Service tunnel',[134,-110,140,-60],[137,-63,0,BY],'con',Object.assign({sub:1},B));
 A('conroof','Convention Centre roof',[56,-54,134,20],[124,-49,PI/2,RFY],'roof',{y0:15,y1:24,out:1,fog:[.1,.08,.18],fr:[60,320]});
}
