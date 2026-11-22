/* ============ THE HALCYON HOTEL (west block of the site) ============ */
/* Ground: the atrium lobby (x -160..-110, z -4..60: reception on the west wall, the grand staircase, the café in the
   south-east corner, a piano, three chandeliers under a skylight 16.5 m up), the Promenade along the north
   (x -200..-64, z -24..-4) with the lift lobby, the Bar (x -110..-64) and its terrace door, the Grill and its private
   dining room, the hotel kitchen, and the back rooms behind reception (back office, luggage, back stairs, boutique).
   Level 1: galleries round the atrium, the mezzanine corridor, the Grand Ballroom, the Lumen Lounge, two meeting rooms,
   the library, and the glass skybridge across the con Foyer. Level 2: galleries, the pool hall, the gym, the spa. */
function buildHotel(){
 const D=door,W=wallLine,LIM=MT.lime,WP=MT.wpan,MAR=MT.marble,CPT=MT.carpetHotel,COF=MT.coffer,BR_=MT.brass,MD=MT.mdark;
 const mr=o=>{(MAPR.con=MAPR.con||[]).push({x0:o.x0,z0:o.z0,x1:o.x1,z1:o.z1,y:o.y||0,n:o.n||'',c:o.c||'#5a4a3a'})};
 /* ---------- doors (before the walls that hold them) ---------- */
 gap('v',-110,25,30,5);                       // lobby <-> con foyer, the big gap
 gap('h',-4,-87,20,5);                        // promenade <-> foyer
 gap('v',-64,-14,16,5);                       // promenade <-> ring west
 D('h',-24,-87,6,3.4);D('v',-64,-37,4,3);       // bar from the promenade; bar -> terrace
 D('h',-24,-123,5,3.2);D('v',-136,-50,2,2.6);D('v',-160,-44,1.6,2.4);D('h',-24,-185,1.6,2.4); // grill, private dining, kitchen pass, kitchen staff door
 D('v',-160,8,1.6,2.4);D('v',-180,4,1.2,2.3);D('v',-160,30,1.6,2.4);D('v',-160,50,4,3.2); // luggage, back office, back stairs, boutique
  // level 1
 D('v',-110,8,4,3,L1);                          // skybridge
 D('h',-24,-95,4,3.4,L1);D('h',-24,-72,2,2.6,L1);D('h',-24,-123,2,2.6,L1);D('h',-24,-185,2.4,2.8,L1);
 D('v',-136,-50,1.6,2.4,L1);
 // level 2
 D('h',-24,-87,3,3,L2);D('h',-24,-123,2,2.6,L2);D('h',-24,-185,2,2.6,L2);D('v',-110,-44,1.6,2.4,L2);
 /* ================= GROUND FLOOR ================= */
 // ---- the atrium lobby ----
 sFloor(-160,-4,-110,60,0,MAR);
 for(let x=-150;x<=-120;x+=10)floorQ(x-.06,-4,x+.06,60,.004,MT.plain('#b89c74'));
 W('v',-160,-4,60,0,L1,LIM,1);W('v',-160,-4,60,L1,L2-L1,LIM,1);W('v',-160,-4,60,L2,16.5-L2,LIM,1);
 W('v',-110,-4,60,0,L1,LIM,-1);W('v',-110,-4,60,L1,L2-L1,LIM,-1);W('v',-110,-4,60,L2,16.5-L2,LIM,-1);
 // south facade: a three-storey glass wall with stone piers, the revolving door and two side doors
 D('h',60,-135,4.4,3.2);D('h',60,-147,2.4,2.8);D('h',60,-123,2.4,2.8);
 W('h',60,-160,-110,0,16.5,MT.glass,-1);
 for(const x of[-152,-141,-129,-118])column(x,59.7,0,16.5,.7,LIM,null);
 // the revolving door: drum, four leaves, a brass canopy
 {const cx=-135,cz=60;for(let i=0;i<8;i++){const a=i/8*Math.PI;box(cx+Math.cos(a)*2.1-.04,0,cz+Math.sin(a)*.6-.04,cx+Math.cos(a)*2.1+.04,3.1,cz+Math.sin(a)*.6+.04,MT.brass,{col:false})}
  box(cx-2.25,3.1,cz-1.2,cx+2.25,3.35,cz+1.2,BR_,{col:false,b:1});for(const a of[.3,1.1,1.9,2.7])kBeam([cx,1.55,cz],[cx+Math.cos(a)*1.9,1.55,cz+Math.sin(a)*1.1],3.1,.04,MT.glass)}
 // gallery slabs at L1 and L2 (a U round the void), coffered soffits with downlights
 const VOID=[-152,4,-118,60];
 sFloor(-160,-4,-110,60,L1,CPT,[VOID],.45,COF);sFloor(-160,-4,-110,60,L2,CPT,[VOID],.45,COF);
 for(const y of[L1,L2]){railing(-152,60,-152,4,y,{m:BR_,glass:MT.glass});railing(-118,4,-118,60,y,{m:BR_,glass:MT.glass});
  if(y===L1){railing(-152,4,-142.2,4,y,{m:BR_,glass:MT.glass});railing(-127.8,4,-118,4,y,{m:BR_,glass:MT.glass})}else railing(-152,4,-118,4,y,{m:BR_,glass:MT.glass});
  for(const z of[10,22,34,46,56])for(const x of[-156,-114])downl(x,y-.45,z,'#ffe2b0',7,.5);for(const x of[-148,-135,-122])downl(x,y-.45,0,'#ffe2b0',7,.5)}
 // skylight and the ceiling round it
 ceilQ(VOID[0],VOID[1],VOID[2],VOID[3],16.5,MT.glass);for(let x=-152;x<=-118;x+=4.25)box(x-.06,16.2,4,x+.06,16.5,60,MT.plain('#2a2026'),{col:false,b:1});
 for(let z=4;z<=60;z+=7)box(-152,16.2,z-.06,-118,16.5,z+.06,MT.plain('#2a2026'),{col:false,b:1});
 sCeil(-160,-4,-110,60,16.5,COF,[VOID]);
 // three chandeliers down the middle of the atrium
 for(const z of[16,32,48])chandelier(-135,16.4,z,1.6,'#ffe2b0');
 // reception: a long stone counter on the west wall, a brass back wall with the name, the key rack
 {const x0=-157.2;box(x0,0,13,x0+1.4,1.1,32,{side:WP,top:MD});box(x0-.1,1.1,12.9,x0+1.5,1.16,32.1,MD,{col:false});box(x0+1.4,.08,13,x0+1.45,1.02,32,BR_,{col:false});
  kOnWall('v',-159.8,1,22.5,12,1.2,3.6,WP,2,2);kSign(-159.78,2.6,22.5,7,1.1,'e','THE HALCYON · RECEPTION','#ffe0a0','#2a1a12');box(-159.8,4.9,16,-159.6,5.05,29,BR_,{col:false});
  for(let i=0;i<6;i++)for(let k=0;k<3;k++)box(-159.79,1.4+k*.32,17+i*.9,-159.7,1.6+k*.32,17.5+i*.9,BR_,{col:false});
  for(const z of[16,22.5,29]){kMonitor(x0+.5,1.16,z,'w',MT.dash,.42);box(z>20?x0+.7:x0+.6,1.16,z+1.2,x0+.85,1.22,z+1.35,BR_,{col:false})}
  box(x0+.4,1.16,19.2,x0+.6,1.34,19.4,BR_,{col:false});addLight(-155,3.2,22.5,[1,.82,.6],10,.9);
  for(const z of[13.6,31.4])kPlant(x0-1,z,1.1,0,'#3a2a20')}
 // concierge and bell desk
 box(-151.5,0,38,-148.5,1.05,40,{side:WP,top:MD});kSign(-150,1.1,40.01,2.6,.4,'s','CONCIERGE','#ffe0a0','#2a1a12');box(-147.5,0,41,-146.8,1.6,42.6,BR_);for(const s of[-1,1])box(-147.15+s*.3,0,41.5,-147.15+s*.3+.06,1.2,42.1,MT.plain('#222'),{col:false});
 // the grand staircase up to the mezzanine
 stairs(-142,4,-128,20,0,L1,'z-',MAR,{nose:BR_});railing(-142,20,-142,4,0,{y2:L1,m:BR_,glass:MT.glass});railing(-128,20,-128,4,0,{y2:L1,m:BR_,glass:MT.glass});
 // solid stone sides under the stair (a step run seen edge-on is a row of fins)
 tri([-142.02,0,20],[-142.02,L1,4],[-142.02,0,4],LIM,4,1.4);tri([-127.98,0,4],[-127.98,L1,4],[-127.98,0,20],LIM,4,1.4);
 for(const x of[-142.02,-127.98]){const s=x<-135?-1:1;kBeam([x+s*.04,1.1,20],[x+s*.04,L1+1.1,4],.08,.08,MT.brass,[0,1,0])}
 box(-143,0,20,-141,1.2,21,LIM);box(-129,0,20,-127,1.2,21,LIM);for(const x of[-142,-128]){box(x-.2,1.2,20.3,x+.2,1.3,20.7,BR_,{col:false});box(x-.12,1.3,20.38,x+.12,1.62,20.62,MT.glow('#ffe2b0',1.4),{col:false})}
 quad([-140.5,.012,30],[-129.5,.012,30],[-129.5,.012,21],[-140.5,.012,21],MT.rug,1,1);
 // lounge: sofas round two coffee tables on rugs, armchairs, a grand piano, palms
 for(const[cx,cz]of[[-147,30],[-123,30]]){quad([cx-4,.012,cz+4],[cx+4,.012,cz+4],[cx+4,.012,cz-4],[cx-4,.012,cz-4],MT.rugH,2,2);sofa(cx,cz-2.4,3.2,'n','#3a4a5a');sofa(cx,cz+2.4,3.2,'s','#3a4a5a');
  kBox(cx,0,cz,1.8,.42,1,WP);box(cx-.9,.42,cz-.5,cx+.9,.46,cz+.5,MD,{col:false});box(cx-.2,.46,cz-.2,cx+.2,.7,cz+.2,MT.glass,{col:false})}
 for(const[x,z,f]of[[-151.6,30,'e'],[-118.4,30,'w']]){box(x-.45,0,z-.45,x+.45,.45,z+.45,MT.fabric('#c9a46a'));const bx=f==='e'?[x-.45,x-.27]:[x+.27,x+.45];box(bx[0],.45,z-.45,bx[1],.9,z+.45,MT.fabric('#c9a46a'),{col:false})}
 // grand piano
 {const px=-150,pz=48;box(px-1,0,pz-.8,px+1,.95,pz+.8,MT.gloss('#0a0a0e'));box(px-1,.95,pz-.8,px+1,1,pz+.1,MT.gloss('#0a0a0e'),{col:false});kBeam([px-1,1,pz+.1],[px+.8,1.9,pz+.1],.04,.04,MT.gloss('#0a0a0e'));
  box(px-.95,.7,pz+.8,px+.95,.78,pz+1.05,MT.plain('#f4f4f0'),{col:false});for(let i=0;i<14;i++)box(px-.9+i*.13,.78,pz+.82,px-.84+i*.13,.82,pz+.98,MT.plain('#111'),{col:false});kBox(px,0,pz+1.6,1,.5,.4,MT.gloss('#0a0a0e'))}
 for(const[x,z]of[[-157,2],[-113,2],[-157,57],[-113,57],[-144,57],[-126,57]])kPlant(x,z,1.6,0,'#2a2026');
 // the café: a curved-front counter, pastries under glass, a coffee machine, little marble tables
 {const cz=44.6;box(-128,0,cz,-117,1.05,cz+.7,{side:WP,top:MD});box(-117,0,cz,-116.3,1.05,cz+7,{side:WP,top:MD});box(-127.6,1.05,cz+.1,-124,1.4,cz+.6,MT.glass,{col:false});box(-127.5,1.06,cz+.15,-124.1,1.18,cz+.55,MT.bread,{col:false});
  box(-122,1.05,cz+.1,-120.4,1.55,cz+.6,MT.chrome);box(-121.8,1.2,cz+.6,-120.6,1.42,cz+.62,MT.glow('#ffd166',1.4),{col:false});box(-119.5,1.05,cz+.2,-118.5,1.25,cz+.5,MT.plain('#2a2a30'),{col:false});
  box(-127,0,cz-2.4,-117.5,2.4,cz-2.2,WP);kOnWall('h',cz-2.2,1,-124,6,1.2,1,MT.menuBoard);kSign(-122.2,2.6,cz-2.19,7,.7,'s','HALCYON CAFÉ · FLAT WHITES','#ffd9a0','#2a1810');
  // a slatted timber canopy over the café (the atrium is 16 m tall), pendants hung from it
  for(let x=-128.6;x<-118.2;x+=.6)box(x,3.5,cz-2.6,x+.18,3.68,58.6,MT.wood,{col:false,b:1});box(-129,3.68,cz-2.6,-118.1,3.74,58.6,MT.woodDark,{col:false});for(const x of[-128.9,-118.3])for(const z of[cz-2.4,58.4])box(x-.08,0,z-.08,x+.08,3.5,z+.08,MT.woodDark);
  for(const x of[-125,-121])kPendant(x,3.5,cz+.35,1.3,.22,'#ffd98a',5,.7,'#c9a46a');for(const[x,z]of[[-124,52],[-120,52]])kPendant(x,3.5,z,1.2,.2,'#ffd98a',5,.55,'#c9a46a');
  for(const[tx,tz]of[[-126,50],[-122,50],[-126,54.5],[-122,54.5],[-118,52]]){box(tx-.4,.74,tz-.4,tx+.4,.78,tz+.4,MD,{col:false});box(tx-.04,0,tz-.04,tx+.04,.74,tz+.04,BR_,{col:false});colBox(tx-.4,tz-.4,tx+.4,tz+.4,0,.78);kStool(tx-.75,tz,.46,MT.fabric('#6a3a4a'));kStool(tx+.75,tz,.46,MT.fabric('#6a3a4a'))}}
 // wall sconces on the stone piers
 for(const z of[8,20,32,44,56]){box(-159.8,2.6,z-.12,-159.65,3,z+.12,MT.glow('#ffe2b0',1.5),{col:false});if(z<9||z>41)box(-110.35,2.6,z-.12,-110.2,3,z+.12,MT.glow('#ffe2b0',1.5),{col:false})}
 addLight(-135,3,10,[1,.84,.62],14,.7);addLight(-135,3,40,[1,.84,.62],14,.7);addLight(-148,3,30,[1,.84,.62],10,.6);addLight(-122,3,30,[1,.84,.62],10,.6);addLight(-122,3,52,[1,.8,.58],9,.8);
 mr({x0:-160,z0:-4,x1:-110,z1:60,n:'Hotel Lobby',c:'#5a4a3a'});
 // ---- the promenade: a marble gallery along the north, the lift lobby, the doors to the bar and the grill ----
 sFloor(-200,-24,-64,-4,0,MAR);quad([-198,.012,-11],[-66,.012,-11],[-66,.012,-17],[-198,.012,-17],mt('carpetHotel',0,.5,0,{r:1}),66,3);
 sCeil(-200,-24,-64,-4,L1-.45,COF);
 W('h',-24,-200,-160,0,L1,WP,1);W('h',-24,-136,-64,0,L1,WP,1);W('v',-200,-24,-4,0,L1,WP,1);
 W('h',-4,-200,-160,0,L1,WP,-1);W('h',-4,-110,-64,0,L1,LIM,-1);
 for(let x=-196;x<=-68;x+=8){if(x>-161&&x<-109||Math.abs(x+87)<4)continue;box(x-.3,0,-23.8,x+.3,L1-.45,-23.5,LIM);box(x-.35,L1-.8,-23.85,x+.35,L1-.45,-23.45,BR_,{col:false})}
 for(const x of[-192,-176,-168,-104,-96,-78,-70])kOnWall('h',-23.8,1,x,2.4,1.4,1.6,MT.morning);
 for(let x=-194;x<=-66;x+=8)downl(x,L1-.45,-14,'#ffe2b0',7,.55);
 for(const[x,z]of[[-198,-22],[-66,-22],[-108,-6],[-66,-6]])kPlant(x,z,1.4,0,'#2a2026');
 for(const x of[-180,-100,-76]){box(x-1.2,0,-22.9,x+1.2,.45,-22.3,{side:WP,top:MT.fabric('#6a3a4a')})}
 // the lift lobby: three lifts each side, a call panel, the floor indicator
 sFloor(-160,-36,-136,-24,0,MAR);sCeil(-160,-36,-136,-24,L1-.45,COF);W('v',-160,-36,-24,0,L1,LIM,1);W('v',-136,-36,-24,0,L1,LIM,-1);W('h',-36,-160,-136,0,L1,LIM,1);
 for(let i=0;i<3;i++){const z=-33.5+i*3.6;for(const[x,f,s]of[[-159.8,'e',1],[-136.2,'w',-1]]){kOnWall('v',x,s,z,1.6,0,2.5,mt('lift',0,1,0,{r:.25,m:.7}));kWall('v',x,s,z-.95,z+.95,2.5,2.62,0,.05,BR_);
   box(x+s*.02-.01,2.7,z-.25,x+s*.02+.01,2.9,z+.25,MT.glow('#ffd166',1.6),{col:false})}}
 kSign(-148,3.6,-35.78,6,.6,'s','LIFTS · ROOMS 1–14 · ROOF TERRACE','#ffe0a0','#2a1a12');box(-148.4,1.1,-35.8,-147.6,1.5,-35.7,BR_,{col:false});
 addLight(-148,4,-30,[1,.85,.62],9,.8);mr({x0:-160,z0:-36,x1:-136,z1:-24,n:'Lifts',c:'#4a3a2a'});mr({x0:-200,z0:-24,x1:-64,z1:-4,n:'Promenade',c:'#5a4a3a'});
 // ---- the bar: dark marble and wood, a long counter, a mirrored back bar, booths, a terrace door ----
 sFloor(-110,-64,-64,-24,0,MT.woodDark);sCeil(-110,-64,-64,-24,L1-.45,MT.ceilDark);
 W('v',-110,-64,-24,0,L1,WP,1);W('v',-64,-64,-24,0,L1,WP,-1);W('h',-64,-110,-64,0,L1,WP,1);
 {const bz=-60;box(-102,0,bz,-74,1.1,bz+1,{side:WP,top:MD});box(-102.1,1.08,bz-.08,-73.9,1.14,bz+1.08,MD,{col:false});box(-102,.1,bz+1,-74,.16,bz+1.1,BR_,{col:false});
  box(-102,0,-63.8,-74,3.2,-62.6,WP);kOnWall('h',-62.6,1,-88,26,1.2,1.6,MT.bottles,6,1.6);for(const y of[1.18,1.98])box(-102,y,-62.6,-74,y+.04,-62.3,MT.glass,{col:false});
  kSign(-88,3.4,-62.58,8,.8,'s','THE HALCYON BAR','#ff9a5c','#241510');for(let i=0;i<12;i++)kStool(-100.5+i*2.3,bz+1.7,.78,MT.fabric('#8a2a2a'));
  for(let i=0;i<6;i++)kPendant(-99+i*4.6,L1-.45,bz+.5,1.3,.18,'#ffb066',6,.8,'#c9a46a');kBox(-100,1.14,bz+.5,.25,.3,.25,MT.chrome,{col:false})}
 // booths along the west wall: two high-backed benches facing across a table
 for(let i=0;i<5;i++){const z=-50+i*4.2,fb=MT.fabric('#5a1e2c');for(const s of[-1,1]){const z0=z+s*.75,z1=z+s*1.35;box(-109.8,0,Math.min(z0,z1),-105.4,.45,Math.max(z0,z1),fb);const b0=z+s*1.15;box(-109.8,.45,Math.min(b0,z1),-105.4,1.25,Math.max(b0,z1),fb,{col:false})}
  table(-107.4,z,2.6,.9,MD,.74);kPendant(-107.4,L1-.45,z,1.6,.16,'#ffb066',5,.65)}
 for(const[x,z]of[[-94,-44],[-84,-44],[-74,-44],[-94,-34],[-84,-34],[-74,-34]]){box(x-.5,.72,z-.5,x+.5,.76,z+.5,MD,{col:false});box(x-.05,0,z-.05,x+.05,.72,z+.05,BR_,{col:false});colBox(x-.5,z-.5,x+.5,z+.5,0,.76);
  for(const[dx,f]of[[-1,'e'],[1,'w']]){const cx=x+dx*.95;box(cx-.35,0,z-.35,cx+.35,.42,z+.35,MT.fabric('#6a3a2a'));box(dx<0?cx-.35:cx+.17,.42,z-.35,dx<0?cx-.17:cx+.35,.82,z+.35,MT.fabric('#6a3a2a'),{col:false})}}
 kOnWall('v',-109.8,1,-30,3.6,1.8,2,MT.keyscreen);kOnWall('v',-64.2,-1,-30,2.4,2,1.3,mt(signTex('HAPPY HOUR 5-7','#ff9a5c','#241510',256,128),0,1,1,{k:1.2}));
 kSign(-64.22,3.12,-37,3.6,.45,'w','TERRACE · COURTYARD →','#ff9a5c','#241510');
 addLight(-88,3.4,-44,[1,.62,.36],18,.95);addLight(-88,3.4,-30,[1,.62,.36],14,.8);addLight(-107,3,-40,[1,.62,.36],10,.75);addLight(-74,3.4,-40,[1,.62,.36],10,.7);
 mr({x0:-110,z0:-64,x1:-64,z1:-24,n:'Hotel Bar',c:'#5a3a2a'});
 // ---- the Grill + private dining ----
 sFloor(-136,-64,-110,-24,0,MT.wood);sCeil(-136,-64,-110,-24,L1-.45,COF);W('v',-136,-64,-36,0,L1,WP,1);W('h',-64,-136,-110,0,L1,WP,1);
 {box(-134,0,-63.8,-112,1.1,-62.4,MT.chrome);box(-134,1.1,-63.8,-112,1.16,-62.4,MT.plain('#e9e3da'),{col:false});kOnWall('h',-63.8,1,-123,20,1.6,1.4,MT.oven,2,1.4);
  kSign(-123,3.6,-63.78,8,.7,'s','THE HALCYON GRILL','#ffe0a0','#2a1a12');kOnWall('v',-109.8,-1,-40,2.6,1.4,1.8,MT.menuBoard);
  for(const x of[-131,-125,-119,-114])for(const z of[-56,-48,-40,-32]){table(x,z,1.4,1.4,MT.linen,.76);
   for(const[dx,dz,f]of[[0,-.95,'n'],[0,.95,'s']])chair(x+dx,z+dz,f,MT.fabric('#5a1e2c'));box(x-.05,.76,z-.05,x+.05,.96,z+.05,MT.glow('#ffd98a',1.4),{col:false})}
  for(let i=0;i<4;i++)kPendant(-128+i*5.2,L1-.45,-44,1.4,.22,'#ffd98a',7,.7,'#2a2026');addLight(-123,3.6,-56,[1,.82,.58],11,.6)}
 sFloor(-160,-64,-136,-36,0,MT.wood);sCeil(-160,-64,-136,-36,L1-.45,COF);W('v',-160,-64,-36,0,L1,MT.wpaper,1);W('h',-64,-160,-136,0,L1,MT.wpaper,1);W('h',-36,-160,-136,0,L1,LIM,-1);
 table(-148,-50,10,1.8,MT.woodDark,.76);for(let i=0;i<7;i++){chair(-152.5+i*1.5,-51.3,'n',MT.fabric('#3a4a5a'));chair(-152.5+i*1.5,-48.7,'s',MT.fabric('#3a4a5a'))}chandelier(-148,L1-.45,-50,.8,null,.3);
 kOnWall('v',-159.8,1,-50,4,1.2,2.2,MT.morning);mr({x0:-136,z0:-64,x1:-110,z1:-24,n:'The Grill',c:'#5a3a2a'});mr({x0:-160,z0:-64,x1:-136,z1:-36,n:'Private dining',c:'#4a3a2a'});
 // ---- the hotel kitchen ----
 sFloor(-200,-64,-160,-24,0,MT.tile);sCeil(-200,-64,-160,-24,L1-.45,MT.ceil);W('v',-200,-64,-24,0,L1,MT.tile,1);W('h',-64,-200,-160,0,L1,MT.tile,1);W('v',-160,-64,-36,0,L1,MT.tile,-1);
 for(const z of[-56,-46,-36]){box(-194,0,z-.6,-170,.92,z+.6,MT.chrome);box(-194,.92,z-.6,-170,.96,z+.6,MT.metal,{col:false});for(let i=0;i<4;i++)box(-192+i*6,.96,z-.3,-190.6+i*6,1.12,z+.3,MT.plain('#d8dce4'),{col:false})}
 box(-199.8,0,-63,-198.6,.9,-25,MT.chrome);box(-199.8,1.6,-63,-198.8,2.8,-25,MT.metal,{col:false});box(-198,2.8,-63.8,-168,3.4,-61.8,MT.metal,{col:false,b:1});
 kOnWall('h',-63.8,1,-184,24,0,2.2,MT.oven,3,2.2);for(const x of[-168,-164])kOnWall('h',-63.8,1,x,2.2,0,2.4,MT.locker2,2.2,2.4);
 for(const x of[-196,-188,-180,-172,-164])lightPanel(x,L1-.45,-44,1.6,.6,'#f4f8ff',9,.6);mr({x0:-200,z0:-64,x1:-160,z1:-24,n:'Hotel kitchen',c:'#3a3a44'});
 // ---- behind reception: back office, luggage room, back stairs, the boutique ----
 for(const[x0,z0,x1,z1,fl,wa,n]of[[-200,-4,-180,20,MT.carpetGrey,MT.wallPale,'Back office'],[-180,-4,-160,20,MT.concrete,MT.wallPale,'Luggage room'],[-200,40,-160,60,MT.wood,LIM,'Halcyon Boutique']]){
  sFloor(x0,z0,x1,z1,0,fl);sCeil(x0,z0,x1,z1,4,MT.ceil);mr({x0,z0,x1,z1,n,c:'#4a4a5a'})}
 W('v',-200,-4,60,0,L1,LIM,1);W('h',20,-200,-160,0,L1,MT.wallPale,-1);W('v',-180,-4,20,0,4,MT.wallPale,1);W('h',40,-200,-160,0,L1,LIM,1);W('h',60,-200,-160,0,L1,LIM,-1);
 W('v',-160,-4,20,0,L1,MT.wallPale,-1);W('v',-160,20,40,0,L1,MT.concrete,-1);W('v',-160,40,60,0,L1,LIM,-1);
 // back office: desks, the safe, a CCTV monitor
 for(const z of[2,8,14]){kDesk(-194,z,1.6,.8,'w',MT.plain('#e9e3da'));kMonitor(-194.3,.74,z,'e',MT.dash,.5);kChair(-192.8,z,'w',0,'#3a3a4a')}
 box(-199.6,0,16,-198.4,1.2,18.4,MT.plain('#3a3a44'));box(-198.39,.5,16.8,-198.37,.7,17.6,MT.chrome,{col:false});kOnWall('h',-4,1,-190,2,1.6,1.2,MT.dash);lightPanel(-190,4,8,1.2,.6,'#f4f8ff',8,.6);
 // luggage room
 for(let r=0;r<2;r++){const z=r?10.4:-2.6;box(-179.6,0,z,-171,2.4,z+.7,MT.metal);for(let k=0;k<6;k++)for(let l=0;l<2;l++)box(-179.4+k*1.4,.1+l*1.2,z,-178.4+k*1.4,.8+l*1.2+((k*7+l*3+r)%4)*.07,z+.7,MT.plain(['#3a5a8a','#8a3a3a','#2a2a30','#c9a46a','#0d1830'][(k+l+r)%5]),{col:false})}
 box(-170,0,14,-166,1.1,16.4,MT.plain('#0d1830'));kSign(-168,.3,16.41,3,.6,'s','LUMEN · FRAGILE','#5ab4ff','#0d1830');lightPanel(-170,4,6,1.6,.6,'#f4f4ff',8,.7);
 for(let i=0;i<3;i++){box(-164+i*1.4,0,17,-163+i*1.4,.06,18.6,MT.brass,{col:false});box(-164+i*1.4,0,17,-163.94+i*1.4,1.8,17.06,MT.brass,{col:false})}
 // boutique: shelves, a counter, two mannequins, a glass front onto the lobby
 for(const z of[42,48,54])box(-199.6,0,z,-198.6,2.4,z+4,{side:MT.woodDark,top:MT.woodDark});for(const z of[42.5,48.5,54.5])for(let k=0;k<3;k++)box(-198.58,.5+k*.7,z,-198.5,.9+k*.7,z+3,MT.plain(['#c9a46a','#3a4a5a','#f4efe6'][k]),{col:false});
 box(-176,0,52,-170,1,53,{side:WP,top:MD});for(const[x,z]of[[-186,48],[-182,55]]){box(x-.2,0,z-.2,x+.2,.08,z+.2,MT.chrome,{col:false});box(x-.03,.08,z-.03,x+.03,.9,z+.03,MT.chrome,{col:false});box(x-.24,.9,z-.14,x+.24,1.6,z+.14,MT.plain('#e9e3da'),{col:false});box(x-.1,1.6,z-.1,x+.1,1.85,z+.1,MT.plain('#e9e3da'),{col:false})}
 kSign(-159.78,3.4,50,4,.6,'e','HALCYON BOUTIQUE','#ffe0a0','#2a1a12');kSign(-160.22,3.4,50,4,.6,'w','HALCYON BOUTIQUE','#ffe0a0','#2a1a12');
 addLight(-180,3.4,46,[1,.85,.65],10,.8);addLight(-180,3.4,55,[1,.85,.65],8,.6);
 // the back stairs: fire stairs to the basement, the service lift, both on a concrete landing
 sFloor(-200,20,-160,40,0,MT.concrete,[[-196,24,-190,38]],.4,MT.concrete);ceilQ(-200,20,-160,40,L1-.45,MT.concrete);
 stairs(-196,24,-190,38,BY,0,'z-',MT.concrete,{nose:MT.plain('#ffd166'),solid:false});railing(-190,24,-190,38,0,{y2:BY,m:MT.plain('#ffd166'),under:5.2});railing(-190,24,-190,38,0,{m:MT.plain('#ffd166')});railing(-196,38,-190,38,0,{m:MT.plain('#ffd166')});railing(-196,24,-196,38,0,{m:MT.plain('#ffd166')});
 kOnWall('h',40,-1,-166,1.8,0,2.5,MT.elev);kSign(-166,2.7,39.98,2.4,.4,'n','SERVICE LIFT','#ffd166','#2a2a30');kSign(-193,2.6,20.02,3.2,.45,'s','FIRE STAIRS · B','#ff5d73','#2a2a30');
 addLight(-180,3.6,30,[1,.95,.85],10,.9);mr({x0:-200,z0:20,x1:-160,z1:40,n:'Back stairs',c:'#4a4a5a'});
 buildHotelUp();buildHotelOut();
}
/* ---------------- hotel levels 1 and 2 ---------------- */
function buildHotelUp(){
 const W=wallLine,LIM=MT.lime,WP=MT.wpan,CPT=MT.carpetHotel,COF=MT.coffer,BR_=MT.brass,MD=MT.mdark,GL=MT.glass;
 const mr=(x0,z0,x1,z1,y,n,c)=>(MAPR.con=MAPR.con||[]).push({x0,z0,x1,z1,y,n,c:c||'#5a3a40'});
 const lifts=y=>{sFloor(-160,-36,-136,-24,y,CPT);sCeil(-160,-36,-136,-24,y+5.05,COF);W('v',-160,-36,-24,y,5.5,LIM,1);W('v',-136,-36,-24,y,5.5,LIM,-1);W('h',-36,-160,-136,y,5.5,LIM,1);
  for(let i=0;i<3;i++){const z=-33.5+i*3.6;for(const[x,s]of[[-159.8,1],[-136.2,-1]]){kOnWall('v',x,s,z,1.6,y,2.5,mt('lift',0,1,0,{r:.25,m:.7}));kWall('v',x,s,z-.95,z+.95,y+2.5,y+2.62,0,.05,BR_);box(x+s*.02-.01,y+2.7,z-.25,x+s*.02+.01,y+2.9,z+.25,MT.glow('#ffd166',1.6),{col:false})}}
  kSign(-148,y+3.4,-35.78,4.4,.5,'s',y<L2?'LEVEL 1 · BALLROOM · MEETING ROOMS':'LEVEL 2 · POOL · SPA · GYM','#ffe0a0','#2a1a12');addLight(-148,y+3.6,-30,[1,.85,.62],8,.7)};
 for(const y of[L1,L2]){
  // the mezzanine corridors: carpet runner, pilasters, a glazed south wall onto the con Foyer, sconces
  if(y===L1)sFloor(-199.8,-24,-64,-4,y,CPT);else{sFloor(-199.8,-24,-64,-4,y,CPT,[[-199.8,-22,-193.8,-8]],.45,COF);sCeil(-199.8,-24,-64,-4,16.1,COF)}
  const h=y===L1?L2-y:16.5-y;
  W('h',-24,-200,-160,y,h,WP,1);W('h',-24,-136,-64,y,h,WP,1);W('v',-200,-24,-4,y,h,WP,1);W('h',-4,-200,-160,y,h,LIM,-1);
  W('h',-4,-110,-64,y,1,LIM,-1);W('h',-4,-110,-64,y+1,h-1,GL,-1);
  for(const x of[-196,-188,-180,-172,-164,-104,-96,-80,-68]){if(Math.abs(x+87)<3||Math.abs(x+95)<3||Math.abs(x+72)<2||Math.abs(x+185)<2.4)continue;box(x-.3,y,-23.8,x+.3,y+h-.1,-23.5,LIM);box(x-.35,y+2.4,-23.5,x+.35,y+2.9,-23.35,MT.glow('#ffe2b0',1.4),{col:false})}
  for(let x=-194;x<=-66;x+=8)downl(x,y+(y===L1?h-.45:h-.4),-14,'#ffe2b0',7,.5);
  quad([-190,y+.012,-11],[-66,y+.012,-11],[-66,y+.012,-17],[-190,y+.012,-17],MT.rugH,62,3);
  for(let i=0;i<3;i++){const x=-180+i*8;box(x,y,-5.6,x+2.4,y+.45,-4.8,{side:WP,top:MT.fabric('#6a3a4a')});kOnWall('h',-4.2,-1,x+1.2,1.8,y+1.4,1.2,MT.morning)}
  for(const x of[-190,-175])kSign(x,y+2.5,-4.22,1.6,.3,'n','STAFF ONLY','#ffe0a0','#2a1a12');for(const x of[-190,-175])kOnWall('h',-4.2,-1,x,1,y,2.2,MT.door);
  kPlant(-108,-6,1.3,y,'#2a2026');kPlant(-66,-22,1.3,y,'#2a2026');
  lifts(y);
  // the atrium galleries at this level: armchairs by the balustrade, plants, doors to staff rooms on the west wall
  for(const z of[16,30,44]){for(const[x,f]of[[-157.5,'e']]){box(x-.45,y,z-.45,x+.45,y+.45,z+.45,MT.fabric('#3a4a5a'));box(x-.45,y+.45,z-.45,x-.27,y+.9,z+.45,MT.fabric('#3a4a5a'),{col:false})}
   kOnWall('v',-159.8,1,z+6,1,y,2.2,MT.door);kSign(-159.78,y+2.4,z+6,1.4,.26,'e','PRIVATE','#ffe0a0','#2a1a12')}
  for(const z of[20,36,52]){box(-113.4,y,z-.45,-112.5,y+.45,z+.45,MT.fabric('#3a4a5a'));box(-112.68,y+.45,z-.45,-112.5,y+.9,z+.45,MT.fabric('#3a4a5a'),{col:false})}
  for(const z of[8,58])kPlant(-156,z,1.2,y,'#2a2026');kPlant(-114,58,1.2,y,'#2a2026');
  mr(-160,-4,-110,60,y,'',y===L1?'#4a3a40':'#3a3040');mr(-200,-24,-64,-4,y,y===L1?'Mezzanine':'Level 2','#5a3a40');
 }
 // the stair between the mezzanine and level 2 (west end)
 stairs(-199.8,-22,-193.8,-8,L1,L2,'z+',CPT,{nose:BR_});railing(-193.8,-22,-193.8,-8,L1,{y2:L2,m:BR_});railing(-193.8,-22,-193.8,-8,L2,{m:BR_,glass:GL});railing(-199.8,-22,-193.8,-22,L2,{m:BR_,glass:GL});colBox(-199.8,-11.5,-193.8,-8,L1,L1+3);
 kSign(-195,L1+2.6,-23.78,3,.4,'s','↑ POOL · SPA · GYM','#ffe0a0','#2a1a12');
 /* ---- Level 1: the Grand Ballroom ---- */
 {const y=L1,ch=9.4;sFloor(-110,-64,-80,-24,y,MT.wood);ceilQ(-110,-64,-80,-24,ch,COF);
  W('v',-110,-64,-24,y,ch-y,MT.velvet,1);W('v',-80,-64,-24,y,ch-y,MT.velvet,-1);W('h',-64,-110,-80,y,ch-y,MT.velvet,1);
  for(const z of[-58,-48,-38,-30])for(const x of[-109.8,-80.2]){const s=x<-90?1:-1;box(Math.min(x,x+s*.5),y,z-.4,Math.max(x,x+s*.5),ch,z+.4,LIM)}
  box(-104,y,-63.8,-86,y+.9,-58,{side:WP,top:MT.wood},{walk:1});stairs(-97,-58,-93,-56.8,y,y+.9,'z-',MT.wood,{sides:1});kOnWall('h',-63.8,1,-95,16,y+.9,3,MT.drape,4,3);
  kSign(-95,y+3.2,-63.78,8,.6,'s','LUMEN PARTNER GALA · TONIGHT','#5ab4ff','#0d1830');
  quad([-101,y+.012,-36],[-89,y+.012,-36],[-89,y+.012,-48],[-101,y+.012,-48],MT.mdark,4,4);
  for(const[x,z]of[[-105,-52],[-85,-52],[-105,-42],[-85,-42],[-105,-32],[-85,-32],[-95,-29]]){box(x-.75,y+.72,z-.75,x+.75,y+.76,z+.75,MT.linen,{col:false});box(x-.08,y,z-.08,x+.08,y+.72,z+.08,MT.plain('#2a2530'),{col:false});colBox(x-.75,z-.75,x+.75,z+.75,y,y+.76);
   for(let i=0;i<6;i++){const a=i/6*Math.PI*2,cx=x+Math.cos(a)*1.15,cz=z+Math.sin(a)*1.15;kStool(cx,cz,.46,MT.fabric('#c9a46a'),y)}box(x-.06,y+.76,z-.06,x+.06,y+1.1,z+.06,MT.glow('#ffd98a',1.4),{col:false})}
  for(const z of[-54,-42,-30])chandelier(-95,ch,z,1.1,null,.3);mr(-110,-64,-80,-24,y,'Grand Ballroom','#5a2a3a')}
 /* ---- Level 1: the Lumen Lounge ---- */
 {const y=L1,ch=y+3.6;sFloor(-80,-64,-64,-24,y,MT.carpetGallery);ceilQ(-80,-64,-64,-24,ch,MT.ceilDark);
  W('v',-64,-64,-24,y,L2-y,MT.panel,-1);W('h',-64,-80,-64,y,L2-y,MT.panel,1);
  box(-78,y,-62,-70,y+1.05,-60.8,{side:MT.plain('#0d1830'),top:MT.gloss('#e9eef5')});box(-77.8,y+1.05,-61.8,-76.2,y+1.1,-61,MT.plain('#f6eefc'),{col:false});
  kOnWall('h',-63.8,1,-72,8,y+1.4,1.8,MT.lumen);for(const z of[-50,-38]){sofa(-72,z-1.6,3,'n','#0d1830',y);sofa(-72,z+1.6,3,'s','#0d1830',y);kBox(-72,y,z,1.6,.4,.9,MT.chrome);box(-72.4,y+.4,z-.2,-71.6,y+.42,z+.2,MT.plain('#f6eefc'),{col:false})}
  for(const z of[-56,-44,-32])box(-64.25,y+.4,z-1.6,-64.2,y+.46,z+1.6,MT.glow('#5ab4ff',2),{col:false});for(const z of[-58,-44,-30])lightPanel(-72,ch,z,2,1,'#9ac8ff',9,.8);
  kSign(-72,y+2.75,-23.78,3.6,.45,'s','LUMEN LOUNGE · INVITE ONLY','#5ab4ff','#0d1830');mr(-80,-64,-64,-24,y,'Lumen Lounge','#0d1830')}
 /* ---- Level 1: meeting rooms + the library ---- */
 {const y=L1,ch=y+3.4;sFloor(-136,-64,-110,-24,y,MT.carpetGrey);ceilQ(-136,-64,-110,-24,ch,MT.ceil);W('v',-136,-64,-36,y,L2-y,MT.wallPale,1);W('h',-64,-136,-110,y,L2-y,MT.wallPale,1);W('v',-110,-64,-24,y,L2-y,MT.wallPale,-1);
  table(-123,-46,14,3,MT.woodDark,.76,y);for(let i=0;i<8;i++){kChair(-129.5+i*1.85,-48.2,'s',y,'#3a3a4a');kChair(-129.5+i*1.85,-43.8,'n',y,'#3a3a4a')}
  for(let i=0;i<8;i++){kPaper(-129.5+i*1.85,y+.76,-47,2);kPaper(-129.5+i*1.85,y+.76,-45,1);kMug(-129+i*1.85,y+.76,-46.2,'#f4f4f0')}
  kOnWall('h',-63.8,1,-123,8,y+.9,2.6,MT.slides);kSign(-123,y+2.75,-23.78,3,.4,'s','MEETING ROOM 1','#ffe0a0','#2a1a12');for(const z of[-56,-46,-34])lightPanel(-123,ch,z,4,1,'#f4f8ff',9,.75);
  sFloor(-160,-64,-136,-36,y,MT.carpetGrey);ceilQ(-160,-64,-136,-36,ch,MT.ceil);W('v',-160,-64,-36,y,L2-y,MT.wallPale,1);W('h',-64,-160,-136,y,L2-y,MT.wallPale,1);W('h',-36,-160,-136,y,L2-y,MT.wallPale,-1);
  for(let r=0;r<4;r++)for(let c=0;c<4;c++){const x=-155+c*4.6,z=-58+r*4.6;kDesk(x,z,1.6,.7,'n',MT.plain('#e9e3da'),y);kChair(x,z+.7,'n',y,'#4a5a7a')}kOnWall('h',-63.8,1,-148,8,y+1,2.4,MT.slides);
  for(const z of[-58,-46])lightPanel(-148,ch,z,4,1,'#f4f8ff',9,.75);mr(-160,-64,-110,-24,y,'Meeting rooms','#4a4a5a');
  // the library: shelves floor to ceiling, leather armchairs, a fireplace, reading lamps, a globe
  sFloor(-200,-64,-160,-24,y,MT.woodDark);ceilQ(-200,-64,-160,-24,L2-.45,COF);W('v',-200,-64,-24,y,L2-.45-y,WP,1);W('h',-64,-200,-160,y,L2-.45-y,WP,1);W('v',-160,-64,-24,y,L2-.45-y,WP,-1);
  for(const x of[-196,-188,-180,-172,-165]){const hw=x>-170?2.4:3;box(x-hw,y,-63.8,x+hw,L2-.6,-63.2,MT.woodDark);kOnWall('h',-63.2,1,x,hw*2-.4,y+.1,4.6,MT.books,2.8,1.15)}
  for(const z of[-58,-50,-42,-34,-28]){box(-199.8,y,z-3,-199.2,L2-.6,z+3,MT.woodDark);kOnWall('v',-199.2,1,z,5.6,y+.1,4.6,MT.books,2.8,1.15)}
  box(-182,y,-25,-176,y+1.4,-24,LIM);box(-181,y+.1,-25.04,-177,y+1,-25,MT.glow('#ff9a5c',1.8),{col:false});box(-182.4,y+1.4,-25.3,-175.6,y+1.6,-24,LIM,{col:false});addLight(-179,y+.8,-26,[1,.55,.25],8,1);
  quad([-188,y+.012,-30],[-170,y+.012,-30],[-170,y+.012,-44],[-188,y+.012,-44],MT.rug,3,3);
  for(const[x,z,f]of[[-184,-34,'e'],[-174,-34,'w'],[-184,-40,'e'],[-174,-40,'w']]){box(x-.5,y,z-.5,x+.5,y+.45,z+.5,MT.fabric('#5a2a1e'));const bx=f==='e'?[x-.5,x-.3]:[x+.3,x+.5];box(bx[0],y+.45,z-.5,bx[1],y+1.05,z+.5,MT.fabric('#5a2a1e'),{col:false})}
  kBox(-179,y,-37,1.4,.5,1.4,WP);for(const[x,z]of[[-186,-37],[-172,-37]]){box(x-.15,y,z-.15,x+.15,y+.06,z+.15,BR_,{col:false});box(x-.02,y,z-.02,x+.02,y+1.4,z+.02,BR_,{col:false});box(x-.2,y+1.4,z-.2,x+.2,y+1.7,z+.2,MT.glow('#ffd98a',1.4),{col:false});addLight(x,y+1.6,z,[1,.8,.55],5,.6)}
  box(-166,y,-56,-165.2,y+.8,-55.2,WP);box(-166.1,y+.8,-56.1,-165.1,y+1.6,-55.1,MT.gloss('#3a6a8a'),{col:false});
  for(const z of[-56,-46,-36])downl(-180,L2-.45,z,'#ffd98a',8,.6);mr(-200,-64,-160,-24,y,'Library','#4a3020')}
 /* ---- Level 2: the pool hall ---- */
 {const y=L2,px0=-104,pz0=-58,px1=-74,pz1=-34,pd=1.2;
  sFloor(-110,-64,-64,-24,y,MT.pooltile,[[px0,pz0,px1,pz1]]);W('v',-110,-64,-24,y,5.5,GL,1);W('v',-64,-64,-24,y,5.5,MT.mosaic,-1);W('h',-64,-110,-64,y,5.5,MT.mosaic,1);
  // the basin: tiled walls and floor, a glowing line under the water, steps at the shallow end, the water itself
  floorQ(px0,pz0,px1,pz1,y-pd,MT.mosaic);quad([px0,y-pd,pz0],[px1,y-pd,pz0],[px1,y,pz0],[px0,y,pz0],MT.mosaic,15,1);quad([px1,y-pd,pz1],[px0,y-pd,pz1],[px0,y,pz1],[px1,y,pz1],MT.mosaic,15,1);
  quad([px0,y-pd,pz1],[px0,y-pd,pz0],[px0,y,pz0],[px0,y,pz1],MT.mosaic,12,1);quad([px1,y-pd,pz0],[px1,y-pd,pz1],[px1,y,pz1],[px1,y,pz0],MT.mosaic,12,1);
  box(px0+.5,y-.5,pz0,px1-.5,y-.42,pz0+.03,MT.glow('#7cd4ff',2),{col:false});box(px0+.5,y-.5,pz1-.03,px1-.5,y-.42,pz1,MT.glow('#7cd4ff',2),{col:false});
  quad([px0,y-.15,pz1],[px1,y-.15,pz1],[px1,y-.15,pz0],[px0,y-.15,pz0],MT.water,6,5);colBox(px0,pz0,px1,pz1,y-pd,y+1);
  for(let i=0;i<6;i++){const x=px0+2.5+i*5;floorQ(x-.05,pz0+.5,x+.05,pz1-.5,y-pd+.01,MT.plain('#1a4a6a'))}
  for(const x of[px0+.4,px1-.4])box(x-.03,y,pz1-.3,x+.03,y+1,pz1-.24,MT.chrome,{col:false});
  for(let i=0;i<4;i++)addLight(px0+4+i*7.5,y-.6,(pz0+pz1)/2,[.45,.85,1],9,.8);
  for(let i=0;i<6;i++){const x=-106+i*7;box(x-.4,y,-27.6,x+.4,y+.38,-25.6,MT.plain('#f4f4f0'));box(x-.4,y+.38,-27.6,x+.4,y+.85,-27.2,MT.plain('#f4f4f0'),{col:false})}
  box(-66,y,-62,-64.6,y+2,-48,MT.woodDark);for(let k=0;k<4;k++)box(-65.9,y+.3+k*.42,-61.6,-64.7,y+.6+k*.42,-48.4,MT.plain(['#f4f4f0','#7cc4ff','#f4f4f0','#ffd166'][k]),{col:false});
  box(-71.4,y,-57,-70.6,y+2.2,-56.2,MT.plain('#f4f4f0'),{col:false});box(-71.6,y+2.2,-57.2,-70.4,y+2.3,-56,MT.plain('#ff5d73'),{col:false});
  ceilQ(-110,-64,-64,-24,16.5,GL);for(let x=-108;x<=-66;x+=6)box(x-.08,16.1,-64,x+.08,16.5,-24,MT.plain('#2a2a30'),{col:false,b:1});
  for(const z of[-60,-44,-28])for(const x of[-100,-80])addLight(x,15,z,[.85,.92,1],12,.55);kSign(-87,y+3.2,-23.78,4,.5,'s','POOL · ADULTS ONLY AFTER 9PM','#7cd4ff','#0d2030');mr(-110,-64,-64,-24,y,'Pool','#1a4a5a')}
 /* ---- Level 2: the gym (glass onto the pool) ---- */
 {const y=L2;sFloor(-136,-64,-110,-24,y,MT.rubber);ceilQ(-136,-64,-110,-24,16.1,MT.ceil);W('v',-136,-64,-36,y,5.1,MT.wallPale,1);W('h',-64,-136,-110,y,5.1,MT.wallPale,1);
  kOnWall('v',-135.8,1,-50,26,y+.3,2.4,mt('white','#c8d4e0',.5,0,{r:.05,m:.9}));
  for(let i=0;i<5;i++){const z=-60+i*3.4;box(-114.8,y,z-.45,-112.6,y+.25,z+.45,MT.plain('#2a2a34'));box(-112.6,y,z-.4,-112.4,y+1.3,z+.4,MT.plain('#2a2a34'),{col:false});box(-112.7,y+1.2,z-.35,-112.4,y+1.5,z+.35,MT.glow('#7cc4ff',1.2),{col:false})}
  for(let i=0;i<4;i++){const z=-40+i*3;box(-115,y,z-.3,-113,y+.9,z+.3,MT.plain('#3a3a44'))}
  box(-134,y,-62,-128,y+1.6,-61.2,MT.metal);for(let k=0;k<6;k++)box(-133.6+k*.95,y+.2,-61.15,-133.1+k*.95,y+.5+k*.08,-60.95,MT.plain('#14141a'),{col:false});
  for(const[x,z]of[[-126,-44],[-126,-36],[-120,-44]]){box(x-1.2,y,z-.4,x+1.2,y+.45,z+.4,MT.plain('#2a2a34'));box(x-.05,y+.45,z-.5,x+.05,y+1.6,z+.5,MT.chrome,{col:false})}
  for(const z of[-58,-44,-30])lightPanel(-123,16.1,z,5,1,'#f4f8ff',10,.75);kSign(-123,y+2.8,-23.78,2.4,.45,'s','GYM','#7cc4ff','#1a2a3a');mr(-136,-64,-110,-24,y,'Gym','#2a4a4a')}
 /* ---- Level 2: the spa ---- */
 {const y=L2;sFloor(-200,-64,-160,-24,y,MT.timber);sFloor(-160,-64,-136,-36,y,MT.timber);ceilQ(-200,-64,-160,-24,16.1,MT.wpan);ceilQ(-160,-64,-136,-36,16.1,MT.wpan);
  W('v',-200,-64,-24,y,5.1,LIM,1);W('h',-64,-200,-136,y,5.1,LIM,1);W('v',-136,-64,-36,y,5.1,LIM,-1);W('h',-36,-160,-136,y,5.1,LIM,-1);
  box(-190,y,-28,-182,y+1.05,-26.8,{side:WP,top:LIM});kSign(-185,y+2.8,-23.78,3,.5,'s','THE SPA','#e9dcc4','#2a2420');
  for(let i=0;i<4;i++){const x0=-199.8+i*6,x1=x0+5.6;box(x0,y,-64+.2,x0+.12,y+3,-56,LIM);box(x0+.12,y,-56.1,x1,y+3,-56,MT.fabric('#e9dcc4'),{col:false});box(x0+1,y,-62,x0+4,y+.75,-60.6,MT.linen);if(i===3)box(x1-.12,y,-63.8,x1,y+3,-56,LIM)}
  {const sx0=-172,sx1=-162,sz0=-62,sz1=-54;box(sx0,y,sz0,sx1,y+2.8,sz0+.15,WP);box(sx0,y,sz1-.15,sx1,y+2.8,sz1,WP);box(sx0,y,sz0,sx0+.15,y+2.8,sz1,WP);box(sx1-.15,y,sz0,sx1,y+2.8,sz1-3,WP);box(sx0,y+2.8,sz0,sx1,y+2.95,sz1,WP);
   for(const z of[sz0+.5,sz0+2])box(sx0+.15,y+.45+(z>sz0+1?.45:0),z,sx1-.15,y+.55+(z>sz0+1?.45:0),z+1.2,MT.wood);addLight(-167,y+2.2,-58,[1,.6,.3],5,.9);kSign(-163,y+2.4,sz1+.01,2,.35,'s','SAUNA','#e9dcc4','#2a2420')}
  for(let i=0;i<4;i++){const x=-157+i*5;box(x-.45,y,-62,x+.45,y+.42,-60,MT.linen);box(x-.45,y+.42,-62,x+.45,y+.8,-61.7,MT.linen,{col:false})}
  {const cx=-148,cz=-46;box(cx-3,y,cz-2,cx+3,y+.6,cz+2,LIM);quad([cx-2.7,y+.5,cz+1.7],[cx+2.7,y+.5,cz+1.7],[cx+2.7,y+.5,cz-1.7],[cx-2.7,y+.5,cz-1.7],MT.water,2,2);addLight(cx,y+.8,cz,[.5,.85,1],6,.8)}
  for(const x of[-196,-186,-176,-166])for(const z of[-50,-36])downl(x,16.1,z,'#ffd9b0',7,.55);for(const z of[-58,-44])downl(-148,16.1,z,'#ffd9b0',7,.5);
  for(const[x,z]of[[-198,-26],[-162,-26],[-138,-38]])kPlant(x,z,1.3,y,'#e9e3da');mr(-200,-64,-136,-24,y,'Spa','#3a3a30')}
}
/* ---------------- the outside of the hotel: stone skins, the tower, the porte-cochère, the roof ---------------- */
/* a facade skin just outside a wall line, with rectangular holes (doors, glazing) left open */
function skin(o,at,a0,a1,y0,y1,m,dir,holes){const R=rectsMinus(a0,y0,a1,y1,holes||[]),k=m.s||.125;
 for(const r of R){const[a,b,c,d]=r;if(o==='h'){if(dir>0)quad([a,b,at],[c,b,at],[c,d,at],[a,d,at],m,(c-a)*k,(d-b)*k);else quad([c,b,at],[a,b,at],[a,d,at],[c,d,at],m,(c-a)*k,(d-b)*k)}
  else{if(dir>0)quad([at,b,c],[at,b,a],[at,d,a],[at,d,c],m,(c-a)*k,(d-b)*k);else quad([at,b,a],[at,b,c],[at,d,c],[at,d,a],m,(c-a)*k,(d-b)*k)}}}
function buildHotelOut(){
 const LIM=MT.lime,HF=MT.hfac,BR_=MT.brass,G0=G.lmK;
 G.lmK=.45;
 // south: stone over the boutique, the lobby glass is its own wall; west and north: windows above the ground floor
 skin('h',60.02,-200,-160,0,5.5,LIM,1,[]);for(let x=-198;x<-160;x+=4)box(x,5.5,60.02,x+2.4,15.6,60.12,MT.plain('#3a2e26'),{col:false});
 skin('h',60.02,-200,-160,5.5,16.5,HF,1,[]);
 skin('v',-200.02,-64,60,0,16.5,LIM,-1,[]);skin('v',-200.04,-64,60,5.6,16.2,HF,-1,[]);
 skin('h',-64.02,-200,-64,0,16.5,LIM,-1,[[-110,0,-64,5.2]]);skin('h',-64.04,-200,-110,5.6,16.2,HF,-1,[]);skin('h',-64.04,-110,-64,5.6,16.2,HF,-1,[]);
 // east, over the bar terrace (the bar's own wall below, with its door)
 skin('v',-63.98,-64,-24,5.5,16.5,LIM,1,[]);skin('v',-63.96,-64,-24,6,10.6,HF,1,[]);
 for(const y of[5.5,11,16.5]){box(-200.4,y-.25,-64.4,-199.98,y,60.4,LIM,{col:false});box(-200.4,y-.25,60.02,-160,y,60.4,LIM,{col:false});box(-200.4,y-.25,-64.4,-64,y,-64.02,LIM,{col:false})}
 // the podium roof: gravel, a stone parapet, plant on top, the atrium skylight and the pool glass left open
 for(const r of rectsMinus(-200,-64,-110,60,[[-152,4,-118,60],[-195,-62,-125,-26]]))floorQ(r[0],r[1],r[2],r[3],16.52,MT.gravel);floorQ(-110,-64,-64,-24,16.52,MT.glass);
 for(const[a,b,c,d]of[[-200.4,-64.4,-64,-64],[-200.4,60,-110,60.4],[-200.4,-64,-200,60]])box(a,16.5,b,c,17.6,d,LIM,{col:false});
 for(const[x,z,w,d]of[[-150,-20,5,3],[-140,-12,4,4],[-120,-18,3,3],[-180,-10,6,3],[-176,30,4,4],[-185,48,3,3]])box(x,16.52,z,x+w,18.1,z+d,{side:MT.metal,top:MT.fan},{col:false});
 // the tower: 25 storeys of lit windows, a setback crown with the name, red aviation lights
 G.lmK=.12;
 box(-195,16.5,-62,-125,104,-26,{side:HF,top:MT.plain('#1a1826')},{col:false,nt:1});
 for(let y=19.8;y<104;y+=3.3){box(-195.3,y,-62.3,-124.7,y+.18,-61.7,LIM,{col:false});box(-195.3,y,-26.3,-124.7,y+.18,-25.7,LIM,{col:false});box(-195.3,y,-62.3,-194.7,y+.18,-25.7,LIM,{col:false});box(-125.3,y,-62.3,-124.7,y+.18,-25.7,LIM,{col:false})}
 for(const x of[-195,-125])for(const z of[-62,-26])box(x-.6,16.5,z-.6,x+.6,106,z+.6,LIM,{col:false});
 box(-190,104,-58,-130,112,-30,{side:LIM,top:MT.plain('#1a1826')},{col:false});box(-180,112,-52,-140,116,-36,{side:LIM,top:MT.plain('#1a1826')},{col:false});
 kSign(-160,106,-29.98,30,5,'s','THE HALCYON','#ffe0a0','#120a14');kSign(-129.98,106,-44,22,5,'e','THE HALCYON','#ffe0a0','#120a14');
 for(const[x,z]of[[-180,-52],[-140,-36],[-140,-52],[-180,-36]]){box(x-.2,116,z-.2,x+.2,119,z+.2,MT.plain('#2a2a30'),{col:false});box(x-.35,119,z-.35,x+.35,119.5,z+.35,MT.glow('#ff2a3a',3),{col:false,b:1})}
 G.lmK=.45;
 // porte-cochère over the drop-off: a stone canopy on four brass-clad columns, downlights, the name on the fascia
 box(-154,5.2,60.4,-116,5.9,74,{side:LIM,top:MT.gravel},{col:false,b:1});for(const x of[-152,-118])for(const z of[66,73])box(x-.35,0,z-.35,x+.35,5.2,z+.35,BR_);
 kSign(-135,5.25,74.01,14,.6,'s','THE HALCYON','#ffe0a0','#1a1218');for(let x=-150;x<=-120;x+=6)for(const z of[63,69])downl(x,5.2,z,'#ffe2b0',8,.7);
 floorQ(-156,60,-114,76,.012,MT.terr);
 G.lmK=G0;
}
