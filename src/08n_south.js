/* ============ THE SOUTH BLOCK, THE PLAZA, THE OUTSIDE OF THE CON ============ */
/* Food court (x -64..-10, z 34..60): six counters on the east wall, tables, a mezzanine at Level 1 along the north,
   the Sky Garden on its roof at Level 2. Cosplay hall (x -10..50, z 34..76): runway, contest stage, changing rooms,
   photo studio, armour repair. Chill-out and nap pods (x 50..80), the quiet room above the chill-out. The plaza runs
   along the whole front: the hotel drop-off, the con entrance, the taxi rank, the giant sign, the car park ramp. */
const FOODS=[['NOODLES','#ffb347'],['PIZZA (NO PINEAPPLE)','#ff5d73'],['TACOS','#8affc1'],['CLUB-MATE','#ffd166'],['DUMPLINGS','#ff8fc8'],['COLD BREW','#c9a46a']];
const FOODPOS=FOODS.map((f,i)=>({x:-13.6,z:i<3?37.5+i*3.2:50.5+(i-3)*3.2}));
function buildSouth(){
 const D=door,W=wallLine,GL=MT.glass,CH=MT.chrome,WC=MT.wallCon;
 const mr=(x0,z0,x1,z1,y,n,c)=>(MAPR.con=MAPR.con||[]).push({x0,z0,x1,z1,y,n,c:c||'#5a3a2a'});
 D('v',-10,47,3,3.2);D('h',56,65,2,2.6);
 /* ================= FOOD COURT ================= */
 {const X0=-64,X1=-10,Z0=34,Z1=60,H=L2-.45;sFloor(X0,Z0,X1,Z1,0,MT.tile);
  W('v',X1,Z0,Z1,0,L2,MT.panel,-1);W('h',Z1,X0,X1,0,L2,GL,-1);for(let x=X0+2;x<X1;x+=4.5)box(x-.06,0,Z1+.05,x+.06,L2+1.1,Z1+.5,CH,{col:false});
  W('h',Z0,X0,X1,0,L1,MT.panel,1);
  // the mezzanine (Level 1) along the north, open to the hall below; the Sky Garden deck above everything
  sFloor(X0,Z0,X1,42,L1,MT.wood,[],.45,MT.ceil);railing(X0,42,X1,42,L1,{m:CH,glass:GL});sFloor(X0,Z0,X1,Z1,L2,MT.timber,[],.45,MT.ceilDark);
  // six food counters on the east wall
  FOODS.forEach((f,i)=>{const z=FOODPOS[i].z;box(X1-1.6,0,z-1.5,X1-.2,2.8,z+1.5,MT.plain('#3a2a24'));kSign(X1-1.61,2.95,z,2.8,.6,'w',f[0],f[1],'#1b1026');
   box(X1-2.6,0,z-1.4,X1-1.6,1.1,z+1.4,{side:MT.plain(f[1]),top:MT.plain('#f6eefc')});box(X1-2.5,1.1,z-1.2,X1-2,1.5,z+1.2,MT.glass,{col:false});kOnWall('v',X1-1.6,-1,z,2.6,1.4,1.2,MT.menuBoard);
   box(X1-1.62,2.8,z-1.5,X1-.2,3.1,z+1.5,MT.glow(f[1],1.2),{col:false});addLight(X1-3.2,2.6,z,hx(f[1]).map(v=>.7+v*.3),6,.7)});
  // tables, high tables at the window, a few booths
  for(let r=0;r<3;r++)for(let c=0;c<4;c++){const x=-56+c*9,z=45+r*4.6;table(x,z,1.6,1.2,MT.plain('#e9e3da'));chair(x-.6,z+.9,'s',MT.plain('#ff5d73'));chair(x+.6,z-.9,'n',MT.plain('#7cc4ff'));chair(x+.6,z+.9,'s',MT.plain('#ffd166'))}
  for(let i=0;i<8;i++){const x=-60+i*5.6;box(x-.9,1.02,58.6,x+.9,1.08,59.4,MT.woodDark,{col:false});box(x-.05,0,58.95,x+.05,1.02,59.05,CH,{col:false});colBox(x-.9,58.6,x+.9,59.4,0,1.08);kStool(x-.5,58,.76,MT.fabric('#3a3a44'));kStool(x+.5,58,.76,MT.fabric('#3a3a44'))}
  for(let i=0;i<5;i++)kPendant(-58+i*11,L1-.45,38,1.4,.35,'#ffd98a',8,.7,'#2a1f36');for(let i=0;i<4;i++)for(const z of[46,54])kPendant(-56+i*12,H,z,3.4,.6,'#fff0e0',13,.8,'#2a1f36');
  // the mezzanine terrace: tables along the rail
  for(let i=0;i<6;i++){const x=-58+i*8.6;table(x,38.4,1.6,1.2,MT.plain('#f6eefc'),.76,L1);chair(x-1.1,38.4,'w',MT.plain('#ff5d73'),L1);chair(x+1.1,38.4,'e',MT.plain('#ff5d73'),L1)}for(const x of[-50,-30])kPlant(x,35,1.2,L1,'#2a1f36');
  for(let i=0;i<5;i++)downl(-58+i*11,L2-.45,38,'#ffe8c8',7,.5);
  kSign(-37,6.8,59.78,10,1.2,'n','FOOD COURT','#ffb347','#1b1026');mr(X0,Z0,X1,Z1,0,'Food Court','#5a3a2a');mr(X0,Z0,X1,42,L1,'Food court terrace','#4a3a2a')}
 /* ---- the Sky Garden on the food court roof (Level 2, open air) ---- */
 {const y=L2;railing(-64,60,-10,60,y,{m:CH,glass:GL});railing(-10,34,-10,60,y,{m:CH,glass:GL});
  for(const[x0,z0,x1,z1]of[[-62,36,-56,40],[-46,36,-40,40],[-30,36,-24,40],[-60,52,-54,58],[-36,48,-28,54],[-20,52,-14,58]]){kPlanter(x0,z0,x1,z1,.7,y,MT.clad)}
  for(const[x,z]of[[-50,46],[-22,44],[-42,57]])tree(x,z,y);
  for(const[x,z,r]of[[-52,40,0],[-36,44,1],[-18,46,1],[-46,52,0]]){if(r)box(x-.35,y,z-1.4,x+.35,y+.45,z+1.4,{side:MT.timber,top:MT.timber});else box(x-1.4,y,z-.35,x+1.4,y+.45,z+.35,{side:MT.timber,top:MT.timber})}
  for(let x=-62;x<=-12;x+=10){box(x-.05,y,59.4,x+.05,y+3.4,59.5,MT.plain('#222'),{col:false})}for(let x=-62;x<-12;x+=1.25)box(x-.05,y+3.1+Math.sin(x*.5)*.15,59.4,x+.05,y+3.2+Math.sin(x*.5)*.15,59.5,MT.glow(['#ffd166','#ff8fc8','#8affc1'][Math.abs(Math.round(x))%3],2.2),{col:false});
  for(const[x,z]of[[-56,46],[-36,40],[-20,54]])addLight(x,y+3,z,[1,.82,.55],12,.55);mr(-64,34,-10,60,y,'Sky Garden','#2a4a2a')}
 /* ================= COSPLAY HALL ================= */
 {const X0=-10,X1=50,Z0=34,Z1=76,H=L2-.45;sFloor(X0,Z0,X1,Z1,0,MT.tileDark);ceilQ(X0,Z0,X1,Z1,H,MT.ceilDark);
  W('v',X0,Z0+.2,Z1-.2,0,L2,MT.panel,1);W('v',X1,Z0+.2,Z1-.2,0,L2,MT.panel,-1);W('h',Z1,X0,X1,0,L2,MT.panel,-1);W('h',Z0,X0,X1,0,L1,MT.panel,1);W('h',Z0,X0,X1,L1,L2-L1,MT.panel,1);
  // the runway: a long raised catwalk into the room, seats down both sides, the contest stage behind it
  box(14,0,44,22,.6,64,{side:MT.plain('#1c2133'),top:MT.plain('#2a3450')},{walk:1});stairs(16.5,64,19.5,65.4,0,.6,'z-',MT.plain('#2a3450'),{sides:1});
  box(9,0,36,27,.9,44,{side:MT.plain('#1c2133'),top:MT.plain('#2a3450')},{walk:1});kOnWall('h',34.2,1,18,20,1.4,5.6,signM('COSPLAY CONTEST · DAY 3','#2bf0ff','#1c2133',20,5.6));
  for(let i=0;i<8;i++){const z=46+i*2.4,c=i%2?'#2bf0ff':'#ff5fb0';addLight(18,6.4,z,hx(c),9,.75);box(17.75,H-.4,z-.25,18.25,H,z+.25,MT.glow(c),{col:false,b:1})}
  for(const s of[-1,1])for(let r=0;r<3;r++)rowAlongZ(18+s*(5+r*2.2),46,62,0,'#2a3450',s<0?1:0);
  box(8,0,62,12,1,64,MT.plain('#2a2a34'));for(let i=0;i<3;i++)kStool(9+i*1,61.2,.5,MT.fabric('#ff5fb0'));kSign(10,1.05,64.01,3.6,.5,'s','JUDGES','#ffd166','#1c2133');
  // changing rooms along the west wall: curtained cubicles
  for(let i=0;i<6;i++){const z=48+i*3.6;box(X0+.2,0,z,X0+3.4,2.4,z+.08,MT.plain('#5a5a64'));box(X0+3.3,.3,z+.1,X0+3.36,2.3,z+3.5,MT.fabric(['#ff5fb0','#2bf0ff','#ffd166','#c9b6ff'][i%4]),{col:false});box(X0+.2,2.2,z,X0+3.4,2.3,z+3.6,MT.plain('#888'),{col:false})}
  box(X0+.2,0,69.6,X0+3.4,2.4,69.68,MT.plain('#5a5a64'));kSign(X0+3.42,2.6,58.6,7,.5,'e','CHANGING ROOMS','#2bf0ff','#1c2133');
  // the photo studio in the south-east corner: a glowing curved backdrop, softboxes
  box(36,0,75.6,48,4.6,75.8,MT.glow('#f6eefc',1.4),{col:false});quad([36,.01,75.6],[48,.01,75.6],[48,.01,69],[36,.01,69],MT.glow('#f6eefc',1.1),1,1);
  for(const x of[35.5,48.5]){box(x-.05,0,68.4,x+.05,2.2,68.5,MT.plain('#222'),{col:false});box(x-.4,2.2,68.4,x+.4,3,68.48,MT.glow('#fff6fb',2.2),{col:false});addLight(x,2.6,69.5,[1,.95,1],6,1)}
  kSign(42,4.8,75.58,8,.5,'n','PHOTO STUDIO','#ff5fb0','#1c2133');
  // armour repair: benches with hot glue, foam, tools; armour on stands
  for(const z of[46,54])table(42,z,4,1.4,MT.plain('#c9a46a'));for(let i=0;i<6;i++)box(40.4+i*.6,.76,45.6,40.8+i*.6,.9+(i%3)*.08,46.2,MT.plain(['#ff5fb0','#2bf0ff','#f4f4f0','#ffd166'][i%4]),{col:false});
  for(const[x,z]of[[47,40],[47,43],[47,60]]){box(x-.25,0,z-.25,x+.25,.06,z+.25,MT.plain('#2a2a34'),{col:false});box(x-.04,.06,z-.04,x+.04,1,z+.04,MT.plain('#2a2a34'),{col:false});box(x-.3,1,z-.2,x+.3,1.7,z+.2,MT.gloss('#c8ccd6'),{col:false});box(x-.14,1.7,z-.14,x+.14,2.05,z+.14,MT.gloss('#c8ccd6'),{col:false})}
  kSign(49.78,3,50,5,.5,'w','ARMOUR REPAIR · HOT GLUE','#ffd166','#1c2133');
  for(const[x,z]of[[0,46],[36,46],[0,62],[36,62]])lightPanel(x,H,z,4,2,'#f0f8ff',16,.85);for(const x of[-2,8,28,40])for(const z of[40,52,66])kPendant(x,H,z,3.2,.5,'#fff2fa',13,.8,'#1c2133');mr(X0,Z0,X1,Z1,0,'Cosplay Hall','#1a4a5a')}
 /* ================= CHILL-OUT, NAP PODS, QUIET ROOM ================= */
 {sFloor(50,34,80,56,0,MT.carpetDark);ceilQ(50,34,80,56,L1-.45,MT.ceilDark);W('v',80,34,72,0,L1,MT.panel,-1);W('h',56,50,80,0,L1-.45,MT.panel,-1);
  quad([52,.01,54],[78,.01,54],[78,.01,38],[52,.01,38],MT.rug,6,4);const bc=['#ff8fc8','#8affc1','#c9b6ff','#ffd166','#7cc4ff'];
  for(let i=0;i<12;i++){const x=54+(i%4)*6,z=40+Math.floor(i/4)*5;box(x-.55,0,z-.55,x+.55,.5,z+.55,MT.fabric(bc[i%5]))}
  for(const[x,z,c]of[[51,35,'#ff8fc8'],[79,35,'#8affc1'],[51,55,'#c9b6ff'],[79,55,'#ffd166']]){box(x-.15,0,z-.15,x+.15,.9,z+.15,MT.lava);addLight(x,1,z,hx(c),7,1.1)}
  kOnWall('v',79.8,-1,45,6,1.2,2.4,mt(signTex('~ breathe ~','#c9b6ff','#140c1e',512,128),0,1,1));box(52,0,44,53.4,1.4,48,GL);box(52.1,.1,44.1,53.3,1.2,47.9,MT.water,{col:false});addLight(52.7,1,46,[.4,.8,1],4,.7);
  mr(50,34,80,56,0,'Chill-out','#3a2a5a');
  sFloor(50,56,80,72,0,MT.carpetDark);ceilQ(50,56,80,72,3.4,MT.ceilDark);W('v',50,56,72,0,3.4,MT.panel,1);W('h',72,50,80,0,3.4,MT.panel,-1);
  for(let i=0;i<6;i++){const x=52.5+i*4.6;box(x-1.4,0,66,x+1.4,1.4,71.8,MT.gloss('#e9eef5'));box(x-1.1,.4,65.95,x+1.1,1.2,66,MT.glow('#c9b6ff',.9),{col:false})}for(let i=0;i<3;i++){const z=58+i*3;box(78.2,0,z-1.2,79.8,1.4,z+1.2,MT.gloss('#e9eef5'))}
  addLight(64,2.6,60,[.7,.6,1],9,.6);mr(50,56,80,72,0,'Nap pods','#2a2a4a');
  sFloor(50,34,80,56,L1,MT.carpetGrey);ceilQ(50,34,80,56,L2-.45,MT.ceil);W('v',50,34,56,L1,L2-L1,MT.wallWarm,1);W('h',56,50,80,L1,L2-L1,MT.wallWarm,-1);W('v',80,34,56,L1,L2-L1,MT.wallWarm,-1);
  sofa(58,48,3,'n',  '#6a5a8a',L1);sofa(72,42,3,'s','#6a5a8a',L1);sofa(64,52,3,'s','#6a5a8a',L1);for(const[x,z]of[[51.5,54.5],[78.5,54.5],[78.5,36]])kPlant(x,z,1.2,L1,'#e9e3da');todWindow(65,L1+1,55.79,6,2.4,'n');
  for(const z of[40,50])addLight(65,L1+3,z,[1,.9,.75],9,.6);mr(50,34,80,56,L1,'Quiet room','#3a3a4a')}
 // the chill-out's west wall is the cosplay hall's east wall (x 50); the nap pods' west wall stands at x 50 too
 buildPlaza();
}
/* ================= THE PLAZA AND THE OUTSIDE ================= */
function buildPlaza(){
 const G0=G.lmK;G.lmK=.45;
 const pz=(x0,z0,x1,z1,m)=>{floorQ(x0,z0,x1,z1,0,m||MT.pavers);surf(x0,z0,x1,z1,0)};
 // pavement in front of everything, the boulevard, the far pavement; the plaza east, by the villages
 pz(-296,60,-220,100);surf(-220,60,-178,76,0);pz(-220,76,-178,100);pz(-178,60,-96,100);pz(-96,68,-80,100);pz(-80,60,-72,100);pz(-72,92,-64,100);pz(-64,60,-10,100);pz(-10,76,80,100);pz(80,72,296,100);pz(50,72,80,76);pz(80,34,215,72);pz(215,56,296,72);pz(196,-64,215,34);
 pz(-296,100,296,114,MT.road);pz(-296,114,296,124);
 // past the barriers the boulevard runs on between city blocks to a junction (seen, not walked; lit coarsely)
 G.lmK=.08;
 for(const[x0,x1]of[[-470,-296],[296,470]]){floorQ(x0,100,x1,114,0,MT.road);floorQ(x0,114,x1,124,0,MT.pavers);floorQ(x0,56,x1,100,0,MT.pavers)}
 for(let x=-466;x<466;x+=6)floorQ(x,106.85,x+3,107.15,.02,MT.plain('#e9e3da'));
 for(const z of[100,114])box(-470,0,z-.15,470,.15,z+.15,MT.plain('#9a9aa8'),{col:false});
 G.lmK=.45;
 // lawns, trees and benches along the front, light poles
 for(const[x0,x1]of[[-290,-226],[-170,-104],[-58,-16],[-4,46],[84,150],[160,226],[236,290]]){floorQ(x0,84,x1,92,.03,MT.grass);box(x0-.15,0,83.85,x1+.15,.3,84.1,MT.plain('#9a9aa8'),{col:false});box(x0-.15,0,91.9,x1+.15,.3,92.15,MT.plain('#9a9aa8'),{col:false});
  for(let x=x0+5;x<x1-3;x+=10)tree(x,88)}
 for(let x=-457;x<466;x+=18){if(x>-224&&x<-176)continue;kStreetLamp(x,98.6,0);box(x-.3,5,98.3,x+.3,5.3,98.9,MT.glow('#ffd98a',1.3),{col:false,b:1});addLight(x,4.8,98.6,[1,.85,.6],12,.75)}
 // the road closures at either end of the plaza: barriers across pavement and road, cones, a police van, the sign
 for(const X of[-296,296]){const s=Math.sign(X);for(let z=60.4;z<124;z+=2.2){box(X-.12,0,z,X+.12,.95,z+1.8,MT.plain('#f4f4f0'),{col:false});box(X-.13,.55,z,X+.13,.85,z+1.8,MT.hazard,{col:false})}
  colBox(X-.2,56,X+.2,124,0,4);for(const z of[103,106,109,112])box(X+s*1.6-.18,0,z-.18,X+s*1.6+.18,.7,z+.18,MT.plain('#ff8a3a'),{col:false});
  car(X+s*7,104.5,'x','#e9eef5',{plate:'POLICE'});box(X+s*7-1.1,1.55,103.9,X+s*7+1.1,1.75,105.1,MT.glow('#5ab4ff',1.4),{col:false});
  for(const z of[89.5,94.5])box(X+s*.3-.05,0,z-.05,X+s*.3+.05,2.2,z+.05,MT.plain('#3a3a44'),{col:false});box(X+s*.26-.04,1.35,89.5,X+s*.26+.04,2.15,94.5,MT.plain('#3a3a44'),{col:false});
  kSign(X+s*.21,1.4,92,4.6,.7,s>0?'w':'e','ROAD CLOSED · EVENT TRAFFIC','#1b1026','#ffd166')}
 // the side street past the hotel's west wall (deliveries), gated at the plaza
 floorQ(-296,-175,-264,60,0,MT.road);for(let z=-170;z<56;z+=6)floorQ(-280.15,z,-279.85,z+3,.02,MT.plain('#e9e3da'));
 for(let x=-295;x<-264;x+=2.3){box(x,0,59.7,x+.08,2.2,59.9,MT.plain('#2a2a30'),{col:false})}box(-296,2.1,59.7,-264,2.2,59.9,MT.plain('#2a2a30'),{col:false});box(-296,.9,59.72,-264,1,59.88,MT.plain('#2a2a30'),{col:false});colBox(-296,59.6,-264,60,0,4);
 kSign(-280,2.35,59.95,6,.55,'s','HALCYON · DELIVERIES · NO ENTRY','#ffd166','#2a2a30');for(const z of[-120,-60,0,48]){kStreetLamp(-297,z,0);addLight(-297,4.8,z,[1,.85,.6],12,.6)}
 // city blocks closing the view: west of the side street, east of the con, along the far side, and across both ends
 G.lmK=.06;
 const BLK=[[-470,-175,-298,-90,38],[-470,-84,-298,-20,64],[-470,-14,-298,54,26],[217,-175,300,-110,46],[217,-104,300,-40,30],[217,-34,300,54,22],[306,-175,470,-40,72],[306,-34,470,54,34],
  [-520,40,-480,140,60],[480,40,520,140,52]];
 for(const[x0,z0,x1,z1,h]of BLK){box(x0,0,z0,x1,h,z1,{side:MT.facade,top:MT.plain('#1a1826')},{col:false});box(x0-.02,0,z0-.02,x1+.02,4,z1+.02,MT.plain('#2a2630'),{col:false,nt:1});
  for(let x=x0+3;x<x1-6;x+=12)box(x,.4,z1+.03,x+8,3.4,z1+.05,MT.glow(['#ffd98a','#9fd4ff','#ff9fd0','#fff4e0'][((x/12)|0)&3],.5),{col:false});box(x0-.4,h,z0-.4,x1+.4,h+.8,z1+.4,MT.plain('#2a2630'),{col:false,nt:1})}
 G.lmK=.45;
 // the ground the district stands on, round the site (inside it every yard and street has its own floor)
 {const g0=G.lmK;G.lmK=.02;for(const r of rectsMinus(-700,-600,700,700,[[-296,-175,296,124]]))floorQ(r[0],r[1],r[2],r[3],-.02,MT.plain('#1c1a22'));G.lmK=g0}
 // the service yard behind the hotel and the con's west side (deliveries, bins, the hotel's loading bay)
 floorQ(-264,-175,-110,-64.4,0,MT.road);for(const[x,z]of[[-250,-70],[-244,-70],[-200,-70],[-150,-70]])box(x-1.2,0,z-.8,x+1.2,1.4,z+.8,MT.plain(['#2a4a2a','#3a3a44'][((x/50)|0)&1]),{col:false});
 buildGarden();
 for(let x=-60;x<-14;x+=4)box(x-.12,0,60.5,x+.12,.9,60.74,MT.plain('#3a3a44'));
 // the car park ramp, between the foyer and the food court, going down under the foyer
 {const x0=-72,x1=-64,zt=92,zb=60;ramp(x0,zb,x1,zt,BY,0,'z');quad([x0,BY,zb],[x0,0,zt],[x1,0,zt],[x1,BY,zb],MT.road,.5,8);
  for(const x of[x0-.3,x1])box(x,0,zb,x+.3,1,zt,MT.concrete);for(const x of[x0,x1-.3]){quad(x===x0?[x0+.01,BY,zt]:[x1-.31,BY,zb],x===x0?[x0+.01,BY,zb]:[x1-.31,BY,zt],x===x0?[x0+.01,0,zb]:[x1-.31,0,zt],x===x0?[x0+.01,0,zt]:[x1-.31,0,zb],MT.concrete,8,1)}
  colBox(x0-.3,zb,x0,zt,BY,1);colBox(x1,zb,x1+.3,zt,BY,1);for(const x of[x0-.3,x1+.1])box(x,0,zt-.3,x+.2,3.2,zt-.1,MT.plain('#2a2a34'));box(x0-.4,3.2,zt-2,x1+.4,3.6,zt+.2,MT.plain('#2a2a34'),{col:false,b:1});kSign(-68,3.65,zt+.21,7.6,.6,'s','CAR PARK · HALCYON GUESTS','#ffd166','#2a2a34');
  for(let z=64;z<92;z+=6)box(x0+.2,BY+(z-zb)/(zt-zb)*5+.02,z,x1-.2,BY+(z-zb)/(zt-zb)*5+.03,z+.1,MT.plain('#e9e3da'),{col:false});
  (MAPR.con=MAPR.con||[]).push({x0,z0:zb,x1,z1:zt,y:0,n:'Ramp',c:'#3a3a3a'})}
 // the giant neon sign, the taxi rank, the bus stop, the coffee cart
 {const cx=-37,cz=80;box(cx-10,0,cz-.4,cx+10,7.2,cz+.4,MT.plain('#1b1026'));kSign(cx,2.4,cz+.41,19,3.6,'s','CTRL+ALT+CON','#ff5d73','#1b1026');kSign(cx,2.4,cz-.41,19,3.6,'n','CTRL+ALT+CON','#ff5d73','#1b1026');
  box(cx-9.6,6.4,cz-.5,cx+9.6,6.7,cz+.5,MT.glow('#ff5d73',2.6),{col:false});addLight(cx,4,cz+3,[1,.35,.45],16,1.3);addLight(cx,4,cz-3,[1,.35,.45],14,1.1)}
 // the taxi rank: on the boulevard between the hotel and the con's doors, where the guests actually come out
 for(let i=0;i<3;i++){car(-146+i*6,101.6,'x','#ffd166',{taxi:1})}box(-136.1,0,98.9,-135.9,3,99.1,MT.plain('#2a2a30'));panel(-136,3,99.11,2,.6,'s',sign('TAXI','#1b1026','#ffd166',128,48));panel(-136,3,98.89,2,.6,'n',sign('TAXI','#1b1026','#ffd166',128,48));
 {const x=24,z=96.8;box(x-4,0,z-1.5,x+4,.12,z+1.5,MT.plain('#5a5a64'),{col:false});box(x-4,0,z-1.5,x+4,2.8,z-1.3,MT.glass);box(x-4.1,2.8,z-1.7,x+4.1,3,z+1.7,MT.plain('#2a2026'),{col:false,b:1});box(x-3.9,0,z-1.3,x-3.7,2.8,z+1.5,MT.chrome,{col:false});
  panel(x,.6,z-1.29,3,1.8,'s',MT.lumen);box(x-3,0,z-1.2,x+3,.45,z-.5,MT.woodDark);panel(x+3.8,2.9,z,1,.4,'e',sign('BUS 42','#1b1026','#ffd166',128,48))}
 {const x=-20,z=72;box(x-1.5,0,z-.75,x+1.5,1,z+.75,MT.plain('#3a2418'));box(x-1.3,1,z-.55,x+1.3,1.4,z+.3,MT.chrome,{col:false});box(x-.05,1,z-.05,x+.05,2.8,z+.05,MT.plain('#888'),{col:false});
  box(x-1.9,2.8,z-1.4,x+1.9,2.92,z+1.4,MT.plain('#ff5d73'),{col:false,b:1});addLight(x,2.5,z,[1,.85,.6],6,.9);kSign(x,.2,z+.76,2.8,.6,'s','BEAN THERE · COFFEE','#ffd9a0','#3a2418')}
 // the far side of the boulevard: shopfronts and towers
 G.lmK=.1;
 for(let x=-470;x<450;x+=24){const h=14+((x*7)%5+5)%5*9,w=22,si=(Math.round(x/24)+40)%8;box(x,0,124,x+w,h,140,{side:MT.facade,top:MT.plain('#1a1826')},{col:false});box(x+1,0,123.9,x+w-1,3.6,124,MT.glow(['#ffd98a','#9fd4ff','#ff9fd0','#fff4e0'][si%4],.6),{col:false});
  kSign(x+w/2,3.9,123.88,10,.9,'n',['NOODLE BAR','PHONE REPAIRS','24H PHARMACY','LAUNDRETTE','KEBABS','PRINT SHOP','CORNER SHOP','VAPE & VINYL'][si],'#ffd166','#1b1026')}
 colBox(-296,124,296,125,0,5);colBox(215,-175,215.5,56,0,5);
 G.lmK=.45;
 // the outside of the con: cladding over walls seen from the street, Hall A's box rising over the Ring roof
 G.lmK=.25;
 skin('h',76.02,-10,50,0,L2,MT.clad,1,[]);kSign(20,4,76.05,30,4.5,'s','COSPLAY HALL · CONTEST DAY 3','#2bf0ff','#1c2133');
 skin('h',72.02,50,80,0,3.4,MT.clad,1,[]);skin('v',80.02,34,72,0,L2,MT.clad,1,[]);skin('h',56.02,50,80,3.4,L1,MT.clad,1,[]);skin('h',34.02,168,196,0,L2,MT.clad,1,[]);skin('v',196.02,-64,34,0,L2,MT.cfac,1,[]);
 skin('h',-64.02,176,196,0,L2,MT.clad,-1,[]);skin('v',176.02,-150,-64,0,10,MT.clad,1,[]);skin('h',-158.02,-110,176,0,4,MT.clad,-1,[]);skin('v',-110.02,-158,-64,0,5,MT.clad,-1,[]);
 for(const[o,at,a0,a1,d]of[['h',-64,-60,50,1],['h',-136,-60,50,-1],['v',-60,-136,-64,-1],['v',50,-136,-64,1]])skin(o,at+(d>0?.02:-.02)*(o==='h'?1:1),a0,a1,16.5,HAR,MT.cfac,d,[]);
 skin('v',-60.02,-136,-64,5,16.5,MT.clad,-1,[]);skin('v',50.02,-136,-64,4,16.5,MT.clad,1,[]);skin('h',-136.02,-60,50,4,16.5,MT.clad,-1,[]);
 floorQ(-60,-136,50,-64,HAR+.02,MT.gravel);kSign(-5,19,-63.96,60,6,'s','CTRL+ALT+CON · HALL A','#ff5d73','#120a14');
 skin('v',134.02,-54,20,11,16.5,MT.clad,1,[]);skin('h',-54.02,110,134,11,16.5,MT.clad,-1,[]);skin('v',110.02,-111,-64,4.4,16.5,MT.clad,1,[]);skin('h',-111.02,62,110,11,16.5,MT.clad,-1,[]);skin('v',61.98,-111,-64,11,16.5,MT.clad,-1,[]);
 // roofs over everything below the con roof line
 for(const r of[[-64,-64,56,-50],[-64,-24,-50,20],[40,-50,56,20],[-64,20,56,34],[-64,-50,-50,-24],[62,-111,110,-54],[56,-64,62,-54]])floorQ(r[0],r[1],r[2],r[3],16.52,MT.gravel);
 for(const r of[[110,-64,168,-54],[134,-54,196,34],[56,20,134,34],[168,-64,196,-54],[-10,34,50,76],[50,34,80,56]])floorQ(r[0],r[1],r[2],r[3],11.02,MT.gravel);
 for(const[r,y]of[[[50,56,80,72],3.42],[[-110,-158,176,-150],4.02],[[-110,-150,-64,-64],4.02],[[50,-150,62,-64],4.02],[[62,-150,134,-111],4.42],[[110,-111,134,-64],4.42],[[-40,-150,30,-136],5.02],[[-64,-150,-60,-64],4.02]])floorQ(r[0],r[1],r[2],r[3],y,MT.gravel);floorQ(134,-150,176,-64,10.02,MT.gravel);
 G.lmK=G0;
 skyline(0,-20,330,520,64,-2,[-530,-200,530,165]);
}

/* ---------------- the Halcyon Garden: between the hotel's glass east front and the con's Foyer ---------------- */
/* x -174..-110, z -12..60: a paved garden open to the plaza, with lawns, a long reflecting pool, trees, benches and
   lamps; the hotel lobby's garden door on its west side; the Link crossing the lane at its north end */
function buildGarden(){
 const G0=G.lmK;G.lmK=.45;const P=MT.pavers,LW=MT.grass;
 const LAWNS=[[-170,-1,-154,25],[-170,35,-154,55],[-130,-1,-114,55]],POOL=[-148,6,-136,48];
 for(const r of rectsMinus(-174,-4,-110,60,LAWNS.concat([POOL])))floorQ(r[0],r[1],r[2],r[3],0,P);floorQ(-128,-12,-110,-4,0,P);surf(-174,-4,-110,60,0);surf(-128,-12,-110,-4,0);
 for(const[x0,z0,x1,z1]of LAWNS){floorQ(x0,z0,x1,z1,.02,LW);for(const[a,b,c,d]of[[x0-.12,z0-.12,x1+.12,z0],[x0-.12,z1,x1+.12,z1+.12],[x0-.12,z0,x0,z1],[x1,z0,x1+.12,z1]])box(a,0,b,c,.12,d,MT.plain('#9a9aa8'),{col:false})}
 // the reflecting pool: a stone rim, dark water, a row of little jets lit from below
 {const[x0,z0,x1,z1]=POOL;floorQ(x0,z0,x1,z1,-.4,MT.mdark);for(const[a,b,c,d]of[[x0-.4,z0-.4,x1+.4,z0],[x0-.4,z1,x1+.4,z1+.4],[x0-.4,z0,x0,z1],[x1,z0,x1+.4,z1]])box(a,0,b,c,.45,d,MT.lime);
  quad([x0,.25,z1],[x1,.25,z1],[x1,.25,z0],[x0,.25,z0],mt('water','#3a5670',.4,1,{k:.5}),3,10);colBox(x0,z0,x1,z1,0,.6);
  for(let z=z0+3;z<z1-1;z+=4){box(-142.1,.25,z-.1,-141.9,.32,z+.1,MT.glow('#7cd4ff',1.4),{col:false});box(-142.02,.32,z-.02,-141.98,1.1,z+.02,MT.plain('#cfe8f4'),{col:false})}
  addLight(-142,.6,14,[.5,.8,1],8,.6);addLight(-142,.6,40,[.5,.8,1],8,.6)}
 // trees on the lawns, benches facing the pool, low lamps along the paths, uplights under the trees
 for(const[x,z]of[[-162,6],[-162,18],[-162,44],[-122,6],[-122,22],[-122,38],[-122,50]]){tree(x,z);box(x-.15,.02,z+.8,x+.15,.1,z+1.1,MT.glow('#ffd98a',1.2),{col:false});addLight(x,.6,z+1,[1,.85,.6],5,.5)}
 for(const[x,z,f]of[[-151.4,14,'e'],[-151.4,30,'e'],[-132.6,20,'w'],[-132.6,38,'w']]){const bx=f==='e'?[x-.35,x+.35]:[x-.35,x+.35];box(bx[0],0,z-1.4,bx[1],.45,z+1.4,{side:MT.clad,top:MT.woodDark});box(f==='e'?x-.35:x+.2,.45,z-1.4,f==='e'?x-.2:x+.35,.9,z+1.4,MT.woodDark,{col:false})}
 for(const[x,z]of[[-150,0],[-134,0],[-150,54],[-134,54],[-172,37],[-112,-2],[-112,24]])lamp(x,z,0,'#ffd98a');
 // the stone that names the place, at the garden's mouth on the plaza; bike racks in the lane; planters by the con's glass
 box(-146,0,57.4,-138,1.2,58.4,MT.lime);kSign(-142,.25,58.42,7,.8,'s','THE HALCYON · GARDEN','#ffe0a0','#2a1a12');kSign(-142,.25,57.38,7,.8,'n','THE HALCYON · GARDEN','#ffe0a0','#2a1a12');
 for(let i=0;i<6;i++){const x=-126+i*2.2;box(x-.03,0,-10.6,x+.03,.8,-9.4,MT.chrome,{col:false});box(x-.03,.74,-10.6,x+.03,.8,-9.4,MT.chrome,{col:false})}colBox(-126.3,-10.7,-114.7,-9.3,0,.8);
 for(const z of[2,18,34])kPlanter(-113.4,z-1.4,-110.8,z+1.4,.6,0,MT.clad);
 (MAPR.con=MAPR.con||[]).push({x0:-174,z0:-12,x1:-110,z1:60,y:0,n:'Halcyon Garden',c:'#2a4a2a'});
 G.lmK=G0;
}
