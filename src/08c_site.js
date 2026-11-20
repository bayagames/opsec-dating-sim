/* ============ THE SITE: Halcyon Hotel (west) + Convention Centre (east) ============ */
/* x grows east, z grows south. Ground y=0, Level 1 y=5.5, basement y=-4.5, con roof y=12.
   The two buildings meet at the Foyer (ground) and the glass skybridge (Level 1). The Ring is a wide loop
   corridor around an open courtyard: Foyer + west walk (west), Ring North, Ring East, Ring South. */
const L1=5.5,BY=-4.5,RFY=12,SITE=[-125,-115,165,110];
function buildSite(){
 region('con',{fog:[.07,.04,.1],fr:[18,110]});G.regions.con.amb=[.3,.27,.36];
 const D=door,W=wallLine,mr=(o)=>room(o);
 const grey=MT.plain('#7a7a84'),greyD=MT.plain('#4a4a54'),dkFloor=MT.carpetDark;
 /* ---------------- doors (registered before the rooms that share them) ---------------- */
 // hotel lobby
 gap('v',-45,10,12,6);D('h',-10,-70,3,3);D('h',30,-60,4,3.2);D('v',-85,3,1.6,2.4);D('v',-85,22,1.6,2.4);gap('h',-10,-53.5,8,3,L1);
 // bar, terrace, walkway, security
 D('v',-45,-17,3,2.8);D('v',-30,-17,3,2.8);D('v',-20,-17,2.4,2.6);D('v',-30,-30,1.6,2.4);D('h',-40,-41,1.6,2.4);
 gap('v',-30,-22,4,3,L1);gap('v',-45,-22,4,3,L1);
 // foyer, vestibule
 gap('h',-10,-25,10,11);D('v',-20,8,2.4,2.6);gap('v',-20,30.5,11,11);D('h',36,-32,6,3.2);D('h',44,-32,6,3);
 // ring north
 D('h',-35,-26,4,4);D('h',-35,16,4,4);D('h',-35,21.5,2,2.6);D('h',-35,35,4,3.4);D('h',-35,-5,4,3,L1);
 gap('h',-25,-25,10,11);D('h',-25,0,2.4,2.6);gap('v',50,-30,10,11);
 // ring east
 D('h',-35,55,6,4);D('v',50,-5,2.4,2.6);D('v',50,16,3,2.8);D('v',50,17,4,2.8,L1);gap('v',50,30.5,11,11);
 gap('v',60,3,10,5);gap('v',60,3,10,3.4,L1);D('h',36,55,3,2.8);D('h',36,55,2.4,2.6,L1);
 // ring south
 D('h',25,10,2.4,2.6);D('h',25,40,3,2.8);D('h',36,27,5,3.6);
 // food court (glass on the courtyard sides)
 D('v',26,16,2.4,2.6);
 // halls + back of house
 D('h',-82,-5,3,2.6,1.3);D('h',-90,21.5,2,2.6);D('v',23,-67,1.4,2.4);D('h',-82,85,3,3);D('h',-90,-41,3,2.6);D('h',-90,-10,3,2.6);D('v',125,-93,3,3);
 // village row (ground + level 1)
 D('h',-2,69,3,2.8);D('h',-2,86,3,2.8);D('h',-2,100,3,2.8);D('h',-2,115,3,2.8);D('h',8,70,4,3);D('h',8,90,3,2.8);D('h',8,111,3,2.8);
 D('h',-2,68,3,2.6,L1);D('h',-2,84,3,2.6,L1);D('h',-2,106,4,2.8,L1);D('h',8,68,3,2.6,L1);D('h',8,84,3,2.6,L1);D('h',8,99,3,2.6,L1);D('h',8,110,2,2.6,L1);D('h',8,118,2,2.6,L1);
 // cosplay, chill, nap pods
 D('h',54,54,2,2.4);D('h',56,16,1.6,2.4);D('h',56,40,1.6,2.4);
 // hotel level 1
 D('h',-24,-73,2,2.4,L1);D('h',-24,-57,2,2.6,L1);D('h',-20,-73,2,2.4,L1);gap('h',-20,-53.5,17,3.2,L1);
 // back of house extras
 gap('h',-90,85,3,3);D('h',-60,146,2,2.4);D('h',-90,-10,3,2.6,1.3);gap('h',-98,-93,6,3,BY);gap('h',-98,147.5,5,3,BY);
 // basement
 D('v',-85,22,2,2.4,BY);D('h',12,-92,2,2.4,BY);D('v',-25,3,2,2.4,BY);D('h',-40,-93,3,2.6,BY);

 /* ================= HOTEL (west) ================= */
 // lobby: double height, reception, four lifts, grand staircase, café
 mr({x0:-85,z0:-10,x1:-45,z1:30,h:11,fl:MT.marble,wa:MT.wallHotel,n:'Hotel Lobby',mc:'#5a4a3a'});
 box(-84,0,1,-81,1.1,13,{side:MT.woodDark,top:MT.marble});panel(-84.78,2.4,7,6,.8,'e',sign('THE HALCYON · RECEPTION','#ffe0a0','#3a2a2a',512,72));
 box(-84.8,0,3.5,-84.6,2.2,10.5,MT.woodDark,{col:false});for(let i=0;i<5;i++)box(-84.75,1.2+i*.2,4+i*1.2,-84.6,1.3+i*.2,4.6+i*1.2,MT.brass,{col:false});
 for(let i=0;i<4;i++){const x=-82.5+i*2.6;panel(x,0,29.78,1.6,2.5,'n',MT.elev);box(x-.9,2.5,29.7,x+.9,2.7,29.8,MT.brass,{col:false});box(x+.85,1.2,29.72,x+.95,1.35,29.8,MT.glow('#ffd166',2),{col:false})}
 panel(-78,3.1,29.78,4,.45,'n',sign('LIFTS · GUEST FLOORS','#ffe0a0','#3a2a2a',256,48));
 slab(-85,-10,-45,-4,L1,.4,MT.carpetHotel,MT.wallHotel);railing(-85,-4,-60,-4,L1,{m:MT.brass,glass:MT.glass});railing(-52,-4,-45,-4,L1,{m:MT.brass,glass:MT.glass});
 stairs(-60,-4,-52,7,0,L1,'z-',MT.marble,{nose:MT.brass});railing(-60,7,-60,-4,0,{y2:L1,m:MT.brass});railing(-52,7,-52,-4,0,{y2:L1,m:MT.brass});
 for(const[x,z]of[[-70,6],[-70,20]]){box(x-.9,10.3,z-.9,x+.9,10.7,z+.9,MT.glow('#ffe0a0'),{col:false,b:1});box(x-.02,10.7,z-.02,x+.02,11,z+.02,MT.plain('#888'),{col:false});addLight(x,8,z,[1,.85,.6],16,1)}
 addLight(-82,4,7,[1,.85,.6],9,.8);addLight(-56,3.5,0,[1,.85,.6],10,.6);addLight(-78,3,26,[1,.85,.6],8,.7);
 sofa(-72,14,3,'s','#6a3a4a');sofa(-72,19,3,'n','#6a3a4a');table(-72,16.5,2,1,MT.woodDark,.45);sofa(-64,24,2.4,'e','#4a5a7a');
 for(const[x,z]of[[-46.5,-8.5],[-83.5,-8.5],[-46.5,28.5],[-84,28.5],[-62,9]])plant(x,z,1.3);
 // lobby café
 box(-58,0,20,-49,1.05,21,{side:MT.wood,top:MT.marble});box(-57,1.05,20.2,-55.5,1.6,20.8,MT.chrome,{col:false});box(-52,1.05,20.3,-49.5,1.4,20.7,MT.bread,{col:false});
 panel(-53.5,2.6,29.78,6,.7,'n',sign('HALCYON CAFÉ · FLAT WHITES','#ffd9a0','#3a2418',512,64));for(let i=0;i<3;i++){table(-56+i*4,25.5,1,1,MT.woodDark);chair(-56+i*4,26.4,'n',MT.plain('#c9a46a'))}
 for(const x of[-56,-51])pendant(x,4.2,20.5,'#ffd98a',6);
 // revolving door (south) + entrance canopy outside
 box(-62,0,29.75,-58,.08,30.25,MT.chrome,{col:false});box(-60.05,0,29.6,-59.95,3.2,30.4,MT.chrome,{col:false});box(-62,3.2,29.7,-58,3.35,30.3,MT.brass,{col:false});
 box(-66,4.2,30,-54,4.45,36,MT.plain('#2a2026'),{col:false,b:1});for(const x of[-65,-55])box(x-.08,0,35.6,x+.08,4.2,35.8,MT.brass);
 panel(-60,4.5,30.25,10,1.1,'s',sign('THE HALCYON','#ffe0a0','#1a1218',512,72));addLight(-60,3.8,33,[1,.85,.6],8,1);
 // luggage room (locked: Nyx can show you how) + back stairs to the basement
 mr({x0:-110,z0:-6,x1:-85,z1:12,h:3.2,fl:MT.concrete,wa:MT.wallPale,n:'Luggage room',mc:'#4a4a5a'});
 for(let r=0;r<3;r++){const x=-108+r*7;box(x,0,-5,x+5,2.4,-4.4,MT.metal);for(let k=0;k<4;k++)for(let l=0;l<2;l++)box(x+.2+k*1.2,.1+l*1.2,-5,x+1.2+k*1.2,.8+l*1.2+rnd()*.2,-4.4,MT.plain(['#3a5a8a','#8a3a3a','#2a2a30','#c9a46a','#0d1830'][(k+l+r)%5]),{col:false})}
 box(-96,0,6,-93,1.1,8,MT.plain('#0d1830'));panel(-94.5,.3,8.01,2.6,.7,'s',sign('LUMEN · FRAGILE','#5ab4ff','#0d1830',256,64));lightPanel(-97,3.2,3,2,1,'#f4f4ff',8,.7);
 // hotel back stairs: fire stairs down to the basement + the service lift
 mr({x0:-110,z0:12,x1:-85,z1:30,h:10,nofloor:1,fl:MT.concrete,wa:MT.concrete,ce:MT.concrete,n:'Back stairs',mc:'#4a4a5a'});
 for(const r of[[-110,12,-98,30],[-93,12,-85,30],[-98,12,-93,14]]){floorQ(r[0],r[1],r[2],r[3],0,MT.concrete);surf(r[0],r[1],r[2],r[3],0)}
 stairs(-98,14,-93,26,BY,0,'z-',MT.concrete,{nose:MT.plain('#ffd166')});railing(-93,14,-93,26,0,{y2:BY,m:MT.plain('#ffd166')});railing(-98,26,-93,26,0,{m:MT.plain('#ffd166')});railing(-98,14,-98,26,0,{m:MT.plain('#ffd166')});
 panel(-86,0,29.78,1.6,2.4,'n',MT.elev);panel(-86,2.6,29.78,2,.35,'n',sign('SERVICE LIFT','#ffd166','#2a2a30',256,48));panel(-95.5,2.4,12.22,3,.45,'s',sign('FIRE STAIRS · B','#ff5d73','#2a2a30',256,48));
 addLight(-95,8,20,[1,.95,.85],10,1);addLight(-95,2,24,[1,.95,.85],7,.8);
 // pool hall (seen through the gym glass on level 1)
 mr({x0:-110,z0:-40,x1:-85,z1:-6,h:11,fl:MT.tile,wa:MT.wallPale,sides:'nws',n:'Pool',mc:'#1a4a5a'});W('v',-85,-40,-6,0,L1,MT.wallPale,-1);W('v',-85,-40,-6,L1,11-L1,MT.glass,-1);
 floorQ(-106,-36,-90,-12,.02,MT.water);box(-106.4,0,-36.4,-89.6,.3,-35.9,MT.tile,{col:false});for(let i=0;i<4;i++)addLight(-98,8,-32+i*7,[.5,.8,1],10,.8);
 for(let i=0;i<4;i++){box(-108.8,0,-32+i*6,-107.2,.4,-30.4+i*6,MT.plain('#f4f4f8'))}
 // bar (next to the lobby) with a terrace onto the courtyard
 mr({x0:-85,z0:-40,x1:-45,z1:-10,h:4.5,fl:MT.woodDark,wa:MT.wallWarm,ce:MT.ceilDark,n:'Hotel Bar',mc:'#5a3a2a'});
 box(-80,0,-36,-50,1.1,-35,{side:MT.woodDark,top:MT.plain('#3a2418')});box(-80,0,-39.8,-50,2.8,-38.4,MT.woodDark);panel(-65,1.2,-38.39,24,1.5,'s',MT.bottles);
 panel(-65,3,-39.78,6,.7,'s',sign('THE BAR','#ff9a5c','#241510'));for(let i=0;i<10;i++){const x=-78.5+i*3;box(x-.2,0,-34.3,x+.2,.75,-33.9,MT.plain('#8a2a2a'),{col:false})}
 for(const x of[-80,-74,-68,-62])for(const z of[-24,-17]){table(x,z,1.6,1,MT.woodDark);sofa(x,z+1.6,2,'n','#7a2a3a')}
 screen(-84.78,2,-22,3,1.6,'e',MT.keyscreen);screen(-50,2.3,-10.22,2.4,1.3,'n',mt(signTex('HAPPY HOUR 5-7','#ff9a5c','#241510',256,128),0,1,1));
 for(let i=0;i<5;i++)pendant(-78+i*7,4.5,-35.5,'#ffb066',6);addLight(-66,3.5,-20,[1,.55,.3],12,.8);
 floorQ(-45,-25,-30,-10,.05,MT.wood);surf(-45,-25,-30,-10,.05);
 for(const[x,z]of[[-40,-20],[-35,-14],[-40,-13]]){table(x,z,1.2,1.2,MT.plain('#2a2026'));chair(x-.8,z,'e',MT.plain('#c9a46a'));chair(x+.8,z,'w',MT.plain('#c9a46a'))}
 for(let x=-44;x<-30;x+=2.2){box(x,2.9,-24.9,x+.06,2.96,-10.1,MT.plain('#222'),{col:false});for(let z=-24;z<-10;z+=1.6)box(x-.05,2.8,z-.05,x+.1,2.9,z+.05,MT.glow('#ffd98a',2.2),{col:false})}
 addLight(-38,2.6,-17,[1,.8,.5],10,.9);for(const z of[-24,-11])box(-44.8,0,z,-30.2,.9,z+.5,MT.plain('#3a5a3a'),{col:false});colBox(-44.8,-24.8,-30.2,-24.3,0,.9);
 panel(-37,2.6,-10.22,6,.6,'n',sign('BAR TERRACE · COURTYARD →','#ff9a5c','#241510',512,64));
 // the hotel tower rising above the lobby and bar
 box(-110,11,-40,-45,72,30,{side:MT.facade,top:MT.plain('#1a1826')},{col:false,nt:1});roofTop(-110,-40,-45,30,72,MT.concrete);
 for(let z=-38;z<30;z+=8)box(-45.2,11,z,-44.9,72,z+.25,MT.glow('#ffe0a0',.6),{col:false});
 panel(-44.8,52,-5,18,4,'e',sign('THE HALCYON','#ffe0a0','#120a14',512,96));panel(-77.5,62,30.2,20,4.5,'s',sign('THE HALCYON','#ffe0a0','#120a14',512,96));

 /* ================= FOYER (the crossroads) ================= */
 mr({x0:-45,z0:-10,x1:-20,z1:36,h:14,fl:MT.marble,wa:MT.panel,ce:MT.glass,sides:'nws',frame:false,n:'Foyer',mc:'#4a3a5a'});
 W('v',-20,-10,36,0,14,MT.glass,-1);
 for(let z=-8;z<36;z+=4){box(-45,13.6,z-.08,-20,14,z+.08,MT.chrome,{col:false})}box(-33,13.6,-10,-32.8,14,36,MT.chrome,{col:false});
 // registration + info desk (south, next to the convention doors)
 box(-42,0,27,-39.5,1.1,35,{side:MT.plain('#ff5d73'),top:MT.plain('#f6eefc')});panel(-44.78,2.4,31,7,1,'e',sign('REGISTRATION · BADGE PICKUP','#1b1026','#ffd166'));
 for(let i=0;i<6;i++)box(-41.6,1.1,27.6+i*1.2,-41,1.17,28.2+i*1.2,MT.plain(['#ffd166','#8affc1','#ff5d73'][i%3]),{col:false});
 box(-27,0,28,-22,1.1,31,{side:MT.plain('#7cc4ff'),top:MT.plain('#f6eefc')});panel(-24.5,1.15,31.01,4.6,.5,'s',sign('INFO','#1b1026','#7cc4ff',256,48));
 // the Lumen mega-booth: rotating logo, screens, SafeSphere demo pods
 box(-43,0,-7,-33,.25,5,MT.plain('#0d1830'),{walk:1,col:false});
 box(-38.6,.25,-1.6,-37.4,7.5,-.4,MT.plain('#0d1830'));screen(-38,2,-1.61,6,3,'n',MT.lumen);screen(-38,2,-.39,6,3,'s',MT.lumen);
 for(const[x,z]of[[-41.5,-5],[-34.5,-5],[-41.5,3.5],[-34.5,3.5]]){box(x-.7,.25,z-.7,x+.7,2.1,z+.7,MT.gloss('#e9eef5'));box(x-.55,.95,z-.72,x+.55,1.6,z-.69,MT.glow('#5ab4ff',1.3),{col:false});box(x-.75,2.1,z-.75,x+.75,2.2,z+.75,MT.glow('#5ab4ff',1.8),{col:false})}
 panel(-38,.3,5.01,8,.5,'s',sign('FREE PRIVACY! INSTALL SAFESPHERE','#5ab4ff','#0d1830'));addLight(-38,5,-1,[.4,.7,1],12,1.1);
 // escalators up to Level 1
 stairs(-29,9,-25.5,21,0,L1,'z-',MT.metal,{nose:MT.plain('#ffd166')});stairs(-32.5,9,-29,21,0,L1,'z-',MT.metal,{nose:MT.plain('#ffd166')});
 railing(-32.5,21,-32.5,9,0,{y2:L1,m:MT.chrome,glass:MT.glass});railing(-29,21,-29,9,0,{y2:L1,m:MT.chrome});railing(-25.5,21,-25.5,9,0,{y2:L1,m:MT.chrome,glass:MT.glass});
 slab(-32.5,6,-25,9,L1,.4,MT.carpetGallery,MT.plain('#2a1f36'));railing(-32.5,6,-25,6,L1,{m:MT.chrome,glass:MT.glass});railing(-32.5,6,-32.5,9,L1,{m:MT.chrome,glass:MT.glass});
 panel(-29,6.8,21.2,6,.6,'s',sign('↑ LEVEL 1 · WORKSHOPS · CREATOR CORNER','#8affc1','#1b1026',512,64));
 lightPanel(-33,14,0,4,4,'#f4f8ff',20,.8);lightPanel(-33,14,20,4,4,'#f4f8ff',20,.8);addLight(-40,4,30,[1,.9,.8],10,.8);
 for(const[x,z]of[[-44,-8.5],[-21.5,-8.5],[-21.5,22]])plant(x,z,1.4);
 // fake Wi-Fi in the ceiling above registration (Nyx's find)
 box(-42,10.8,30.6,-41.2,10.9,31.4,MT.plain('#d9d4cc'),{col:false});box(-41.7,10.7,30.9,-41.5,10.8,31.1,MT.glow('#8affc1',2.4),{col:false});
 // vestibule: the convention doors
 mr({x0:-40,z0:36,x1:-24,z1:44,h:4,fl:MT.tileDark,wa:MT.panel,ce:MT.ceilDark,n:'Entrance',mc:'#3a2a4a'});
 lightPanel(-32,4,40,4,2,'#fff4e0',9,.8);panel(-32,3.2,36.22,6,.6,'s',sign('CTRL+ALT+CON · WELCOME','#ff5d73','#1b1026',512,64));
 panel(-32,3.2,43.78,6,.6,'n',sign('FOYER · REGISTRATION →','#ffd166','#1b1026',512,64));

 /* ================= THE RING ================= */
 const RH=11;
 // west walk (between the terrace and the courtyard)
 mr({x0:-30,z0:-25,x1:-20,z1:-10,h:RH,fl:MT.carpetCon,wa:MT.wallCon,ce:MT.ceilDark,sides:'w',n:'',mc:'#5a2a4a'});W('v',-20,-25,-10,0,RH,MT.glass,-1);
 // north
 mr({x0:-30,z0:-35,x1:50,z1:-25,h:RH,fl:MT.carpetCon,wa:MT.wallCon,ce:MT.ceilDark,sides:'nw',n:'Ring · North',mc:'#5a2a4a'});W('h',-25,-30,50,0,RH,MT.glass,-1);
 // east
 mr({x0:50,z0:-35,x1:60,z1:36,h:RH,fl:MT.carpetCon,wa:MT.wallCon,ce:MT.ceilDark,sides:'nes',n:'Ring · East',mc:'#5a2a4a'});W('v',50,-35,36,0,RH,MT.glass,1);
 // south
 mr({x0:-20,z0:25,x1:50,z1:36,h:RH,fl:MT.carpetCon,wa:MT.wallCon,ce:MT.ceilDark,sides:'',n:'Ring · South',mc:'#5a2a4a'});W('h',25,-20,50,0,RH,MT.glass,1);W('h',36,-20,10,0,RH,MT.glass,-1);W('h',36,10,50,0,RH,MT.wallCon,-1);
 // ring lighting + pillars + benches
 for(let x=-24;x<50;x+=10)lightPanel(x,RH,-27.5,2.6,1.2,'#ffe8f0',16,.75);for(let z=-28;z<34;z+=10)lightPanel(57.5,RH,z,1.2,2.6,'#ffe8f0',16,.75);for(let x=-14;x<50;x+=10)lightPanel(x,RH,27.5,2.6,1.2,'#ffe8f0',16,.75);
 for(let x=-24;x<50;x+=10)addLight(x,5,-32.5,[1,.9,.85],8,.55);for(let z=-28;z<34;z+=10)addLight(57.5,5,z,[1,.9,.85],8,.55);for(let x=-14;x<50;x+=10)addLight(x,5,33.5,[1,.9,.85],8,.55);
 for(const x of[-10,10,30])box(x-1.2,0,-27.2,x+1.2,.45,-26.4,MT.woodDark);for(const x of[0,20,40])box(x-1.2,0,26.4,x+1.2,.45,27.2,MT.woodDark);for(const z of[-15,5])box(51,0,z-1.2,51.8,.45,z+1.2,MT.woodDark);
 for(const[x,z]of[[-28.5,-33.5],[48.5,-33.5],[58.5,34.5],[-18.5,34.5]])plant(x,z,1.3);
 // signs at every door
 doorSign(-26,4.6,-34.78,'s','HALL A ·  MAIN STAGE');doorSign(16,4.6,-34.78,'s','HALL A');doorSign(35,4,-34.78,'s','HALL B · TRACK 2','#7cc4ff');doorSign(21.5,3,-34.78,'s','STAFF','#8a8a94');
 doorSign(55,4.6,-34.78,'s','VENDOR HALL','#ffd166');doorSign(59.78,5.4,3,'w','VILLAGE ROW →','#8affc1');doorSign(27,4.2,35.78,'n','COSPLAY HALL','#2bf0ff');doorSign(55,3.4,35.78,'n','CHILL-OUT','#c9b6ff');
 doorSign(40,3.4,25.22,'n','FOOD COURT','#ffb347');doorSign(-29.78,3.2,-17,'e','BAR TERRACE','#ff9a5c');doorSign(-29.78,3,-30,'e','SECURITY','#8a8a94');
 panel(-20.22,3.2,8,4,.5,'w',sign('COURTYARD','#8affc1','#1a2a1a',256,48));
 for(const[x,z,d,i]of[[-12,-34.78,'s',4],[44,-34.78,'s',2],[59.78,-20,'w',3],[-5,35.78,'n',1]])panel(x,1.2,z,.9,1.2,d,MT.poster(i));
 panel(59.78,1.5,20,5,2.6,'w',MT.keyscreen);panel(20,7.4,-34.78,10,2.6,'s',MT.lumenbanner);
 // hanging banners
 for(const[x,z,c]of[[-10,-29,'#ff5d73'],[25,-29,'#8affc1'],[55,-8,'#ffd166'],[55,18,'#7cc4ff'],[15,30,'#ff8fc8']]){box(x-.02,9.6,z-.02,x+.02,RH,z+.02,MT.plain('#222'),{col:false});box(x-.9,6.2,z-.06,x+.9,9.6,z+.06,MT.fabric(c),{col:false})}

 /* ================= COURTYARD (open sky) ================= */
 const cy=(x0,z0,x1,z1,m)=>{floorQ(x0,z0,x1,z1,0,m);surf(x0,z0,x1,z1,0)};
 cy(-20,-25,50,-7,MT.grass);cy(-20,7,26,25,MT.grass);cy(-20,-7,-2,7,MT.grass);cy(12,-7,50,7,MT.grass);cy(26,7,50,8,MT.grass);
 for(const r of[[-20,-1,-2,1],[12,-1,50,1],[4,-25,6,-7],[9,7,11,25]])floorQ(r[0],r[1],r[2],r[3],.015,MT.pavers);
 (MAPR.con=MAPR.con||[]).push({x0:-20,z0:-25,x1:50,z1:25,y:0,n:'Courtyard',c:'#2a4a2a'});
 // sunken amphitheatre + fountain
 {const px0=-2,pz0=-7,px1=12,pz1=7;
  for(let k=0;k<3;k++){const i=k*1.2,y=-(k+1)*.4,a=px0+i,b=pz0+i,c2=px1-i,d=pz1-i,m=MT.plain('#9a9aa8'),ms=MT.concrete;
   for(const r of[[a,b,c2,b+1.2],[a,d-1.2,c2,d],[a,b+1.2,a+1.2,d-1.2],[c2-1.2,b+1.2,c2,d-1.2]]){floorQ(r[0],r[1],r[2],r[3],y,ms);surf(r[0],r[1],r[2],r[3],y)}
   quad([a,y,b],[c2,y,b],[c2,y+.4,b],[a,y+.4,b],m,1,1);quad([c2,y,d],[a,y,d],[a,y+.4,d],[c2,y+.4,d],m,1,1);quad([a,y,d],[a,y,b],[a,y+.4,b],[a,y+.4,d],m,1,1);quad([c2,y,b],[c2,y,d],[c2,y+.4,d],[c2,y+.4,b],m,1,1)}
  floorQ(px0+3.6,pz0+3.6,px1-3.6,pz1-3.6,-1.2,MT.tile);surf(px0+3.6,pz0+3.6,px1-3.6,pz1-3.6,-1.2);
  box(3,-1.2,-2,7,-.6,2,MT.plain('#9a9aa8'));quad([3.2,-.62,1.8],[6.8,-.62,1.8],[6.8,-.62,-1.8],[3.2,-.62,-1.8],MT.water,2,2);box(4.7,-.6,-.3,5.3,1.4,.3,MT.plain('#9a9aa8'),{col:false});addLight(5,1,0,[.5,.8,1],9,1)}
 // one big tree
 box(29.4,0,-13.6,30.6,4.5,-12.4,MT.plain('#4a3020'));for(const[a,y,s]of[[0,3,9],[.6,4.6,8],[1.2,6.2,6],[.3,7.4,4]])for(let i=0;i<4;i++)card(30,y,-13,s,s*.9,a+i*Math.PI/4,MT.leaves);
 box(26,0,-17,34,.45,-16.4,MT.woodDark);
 for(const[x,z]of[[-14,-19],[-14,19],[44,-19],[20,19],[44,2]])lamp(x,z,0,'#ffd98a');for(const[x,z]of[[-15,-12],[20,-20],[40,-5],[-12,15]])tree(x,z);
 for(const[x,z]of[[-8,-20],[16,20],[38,-12]])box(x-1,0,z-.35,x+1,.45,z+.35,MT.woodDark);

 /* ================= HALL A (huge, raked) ================= */
 mr({x0:-30,z0:-82,x1:20,z1:-35,h:16,fl:dkFloor,wa:MT.panel,ce:MT.ceilDark,n:'Hall A',mc:'#3a2a5a'});
 box(-24,0,-82,14,1.3,-71,{side:MT.plain('#1a1428'),top:MT.woodDark},{walk:1});panel(-5,3.4,-81.78,30,11,'s',MT.keyscreen);
 stairs(-27,-74.5,-24,-72,0,1.3,'x+',MT.woodDark,{sides:1});stairs(14,-74.5,17,-72,0,1.3,'x-',MT.woodDark,{sides:1});
 box(-5.6,1.3,-73,-4.4,2.4,-72.2,MT.plain('#2a2a3a'));panel(-5,1.7,-72.19,1.2,.5,'s',sign('#20','#ff5d73','#2a2a3a',128,64));
 for(let r=0;r<4;r++)seatRow(-21,10,-68+r*1.5,0,'s',r%2?'#5a2a4a':'#6a2a52');
 // the rake: 20 rows rising to the back, a centre aisle
 {const rows=20,dy=L1/rows,dz=1.1;for(let i=0;i<rows;i++){const z0=-60+i*dz,y=(i+1)*dy;box(-22,0,z0,12,y,z0+dz,{side:MT.plain('#1a1428'),top:MT.carpetDark},{walk:1});
   seatRow(-21.6,-6.6,z0+.6,y,'s',i%2?'#5a2a4a':'#6a2a52');seatRow(-3.4,11.6,z0+.6,y,'s',i%2?'#5a2a4a':'#6a2a52');box(-6.5,y,z0,-3.5,y+.02,z0+.1,MT.glow('#ffd166',1.4),{col:false})}
  slab(-22,-38,12,-35,L1,.3,MT.carpetDark,MT.plain('#1a1428'));railing(-22,-60,-22,-38,0,{y2:L1,m:MT.chrome});railing(12,-60,12,-38,0,{y2:L1,m:MT.chrome})}
 for(let i=0;i<8;i++){const x=-22+i*5,c=['#ff5d73','#8affc1','#7cc4ff','#ffd166'][i%4];box(x-.3,13.4,-66,x+.3,13.8,-65.4,MT.glow(c),{col:false,b:1});addLight(x,10,-74,hx(c),14,.7)}
 box(-26,13.8,-66.2,16,14,-65.8,MT.metal,{col:false});box(-26,13.8,-52.2,16,14,-51.8,MT.metal,{col:false});
 // house lights: warm wall washes down both sides and a soft key on the stage, so the hall reads as a theatre, not a void
 for(const z of[-74,-64,-54,-44]){for(const x of[-29.2,19.2]){box(x-.15,6,z-.6,x+.15,6.25,z+.6,MT.glow('#ffcf9a',.9),{col:false,b:1});addLight(x+(x<0?1.2:-1.2),5.2,z,[1,.78,.55],11,.72)}}
 addLight(-5,7,-70,[1,.9,.85],18,1.05);addLight(-5,9,-50,[.85,.75,1],20,.55);
 // house lights over the raked seating (the rig is 14 m up, too high to reach the rows on its own)
 for(const z of[-58,-48,-40])for(const x of[-16,-5,6])addLight(x,(z+60)*.25+7,z,[1,.86,.7],11,.75);
 lightPanel(-5,16,-55,8,3,'#fff0f8',26,.6);lightPanel(-5,16,-42,8,3,'#fff0f8',22,.5);lightPanel(-26,16,-58,2,6,'#fff0f8',16,.5);lightPanel(16,16,-58,2,6,'#fff0f8',16,.5);
 for(let i=0;i<2;i++){table(15.5+i*2.4,-69,2,.7,MT.plain('#22222c'),.8);screen(15+i*2.4,.85,-69.3,.9,.55,'s',i?MT.code:MT.dash);screen(16+i*2.4,.85,-69.3,.9,.55,'s',MT.scope)}
 panel(17.5,2.2,-70.2,3,.5,'s',sign('AV DESK','#7cc4ff','#1a1a24',256,64));addLight(17.5,3,-68,[.5,.7,1],6,.9);
 // backstage (behind the stage, staff only)
 mr({x0:-26,z0:-90,x1:16,z1:-82,y:1.3,h:3.2,nofloor:1,fl:MT.concrete,wa:grey,ce:MT.ceil,n:'Backstage',mc:'#3a3a44'});
 for(const r of[[-26,-90,-11.5,-82],[-8.5,-90,16,-82],[-11.5,-86,-8.5,-82]]){floorQ(r[0],r[1],r[2],r[3],1.3,MT.concrete);surf(r[0],r[1],r[2],r[3],1.3)}
 stairs(-11.5,-90,-8.5,-86,0,1.3,'z+',MT.concrete);floorQ(-11.5,-90,-8.5,-86,-.01,MT.concrete);surf(-11.5,-90,-8.5,-89.9,0);
 for(let i=0;i<5;i++)box(-24+i*3,1.3,-89.6,-22+i*3,2.5,-88.6,MT.plain(['#2a2a34','#1a1a24'][i%2]));sofa(6,-88.8,3,'s','#4a5a8a',1.3);table(10,-86,1.6,.8,MT.plain('#e9e3da'),.76,1.3);
 panel(-3,2.3,-89.78,3,.9,'s',sign('RIDER: NO BROWN M&Ms','#1b1026','#ffd166',256,96));addLight(-5,3.8,-86,[1,.9,.75],12,.9);

 /* ================= HALL B ================= */
 mr({x0:23,z0:-62,x1:48,z1:-35,h:8,fl:dkFloor,wa:MT.wallPale,ce:MT.ceilDark,n:'Hall B',mc:'#2a3a5a'});
 box(26,0,-62,45,.6,-56,{side:MT.plain('#1a1428'),top:MT.woodDark},{walk:1});stairs(33.5,-56,36.5,-54.6,0,.6,'z-',MT.woodDark,{sides:1});
 panel(35.5,1.6,-61.78,14,5,'s',MT.slides);box(34.8,.6,-58,36.2,1.7,-57.3,MT.woodDark);
 for(let r=0;r<8;r++){seatRow(25,34,-51+r*1.6,0,'s','#3f526a');seatRow(37,46,-51+r*1.6,0,'s','#3f526a')}
 for(const z of[-54,-42])lightPanel(35.5,8,z,6,1.5,'#f4f8ff',14,.7);addLight(35.5,5,-58,[1,.95,.9],10,1);

 /* ================= STAFF CORRIDOR + MDF + SERVICE CORRIDOR ================= */
 mr({x0:20,z0:-90,x1:23,z1:-35,h:3.5,fl:MT.concrete,wa:grey,n:'',mc:'#3a3a44'});
 for(let z=-85;z<-38;z+=8)lightPanel(21.5,3.5,z,.6,1.2,'#f0f4ff',7,.6);
 mr({x0:23,z0:-72,x1:33,z1:-62,h:3,fl:MT.concrete,wa:greyD,n:'MDF',mc:'#2a3a3a'});
 for(let i=0;i<4;i++)rack(25+i*2,-71,'s');for(let i=0;i<3;i++)rack(32.3,-68+i*1.4,'w');
 box(28,1.4,-63.4,29,1.7,-63,MT.plain('#0d1830'),{col:false});box(28.2,1.7,-63.3,28.8,1.72,-63.1,MT.glow('#5ab4ff',2.2),{col:false});
 panel(28.5,2.1,-62.24,3,.4,'n',sign('MDF · NETWORK CORE','#8affc1','#1a2a24',256,48));addLight(28,2.6,-67,[.6,1,.8],8,.9);
 mr({x0:-45,z0:-96,x1:125,z1:-90,h:3.5,fl:MT.concrete,wa:grey,ce:MT.ceil,n:'Service corridor',mc:'#3a3a44'});
 for(let x=-40;x<125;x+=9)lightPanel(x,3.5,-93,1.2,.6,'#f0f4ff',8,.6);
 for(let x=-30;x<120;x+=17){box(x,0,-95.8,x+1.2,1.1,-94.8,MT.plain('#5a5a64'));box(x+2,0,-95.8,x+2.8,.9,-95,MT.plain('#3a5a8a'))}
 panel(100,1.4,-95.78,5,.6,'n',sign('LOADING DOCK →','#ffd166','#3a3a44',256,48));panel(-30,1.4,-95.78,5,.6,'n',sign('← SECURITY','#ffd166','#3a3a44',256,48));
 mr({x0:-45,z0:-90,x1:-37,z1:-40,h:3.5,fl:MT.concrete,wa:grey,n:'',mc:'#3a3a44'});for(let z=-84;z<-42;z+=9)lightPanel(-41,3.5,z,.6,1.2,'#f0f4ff',7,.6);
 mr({x0:83.5,z0:-90,x1:86.5,z1:-82,h:3.5,fl:MT.concrete,wa:grey,sides:'ew',n:'',mc:'#3a3a44'});
 // security office: CCTV wall
 mr({x0:-45,z0:-40,x1:-30,z1:-25,h:3.5,fl:MT.carpetGrey,wa:greyD,ce:MT.ceil,n:'Security',mc:'#2a2a3a'});
 for(let r=0;r<3;r++)for(let c=0;c<5;c++)screen(-43+c*2.4,.9+r*.85,-39.78,2.2,.75,'s',[MT.dash,MT.scope,MT.code][(r+c)%3]);
 box(-44,0,-36,-34,.8,-34.6,MT.plain('#2a2a34'));for(let i=0;i<3;i++)chair(-42+i*3,-33.8,'s',MT.plain('#3a3a4a'));addLight(-38,3,-35,[.7,.85,1],9,.9);
 // kitchen + loading dock + con roof fire stairs
 mr({x0:125,z0:-100,x1:152,z1:-50,h:7,nofloor:1,fl:MT.concrete,wa:MT.concrete,ce:MT.ceilDark,n:'Loading dock',mc:'#3a3a44'});
 for(const r of[[125,-100,145,-50],[150,-100,152,-50],[145,-86,150,-50]]){floorQ(r[0],r[1],r[2],r[3],0,MT.concrete);surf(r[0],r[1],r[2],r[3],0)}
 stairs(145,-98,150,-86,BY,0,'z+',MT.concrete,{nose:MT.plain('#ffd166')});railing(145,-86,145,-98,0,{y2:BY,m:MT.plain('#ffd166')});railing(145,-86,150,-86,0,{m:MT.plain('#ffd166')});
  for(let i=0;i<3;i++){panel(151.78,0,-92+i*12,6,5,'w',MT.plain('#8a8a94'));for(let k=0;k<8;k++)box(151.6,.4+k*.6,-95+i*12,151.75,.45+k*.6,-89+i*12,MT.plain('#5a5a64'),{col:false})}
 box(133,0,-82,147,3.6,-79,MT.plain('#e9e3da'));box(146,0,-82,149.5,2.6,-79,MT.plain('#2a4a8a'));panel(140,1,-79,9,1.2,'s',sign('HALCYON FRESH · DELIVERIES','#2a4a8a','#e9e3da',512,64));
 for(const[x,z]of[[128,-96],[131,-96],[128,-70],[135,-62]]){box(x,0,z,x+1.2,.15,z+1.2,MT.wood);box(x+.1,.15,z+.1,x+1.1,1+rnd()*.5,z+1.1,MT.plain('#c9a46a'))}
 box(126,0,-64,140,1,-62.8,MT.metal);box(126,0,-58,140,1,-56.8,MT.metal);for(let i=0;i<4;i++)box(127+i*3.4,1,-63.8,128.6+i*3.4,1.4,-63,MT.chrome,{col:false});
 panel(132,2.6,-50.22,6,.6,'n',sign('KITCHEN','#ffd166','#3a3a44',256,48));lightPanel(133,7,-60,4,2,'#f4f8ff',12,.8);lightPanel(138,7,-90,4,2,'#f4f8ff',14,.8);
 mr({x0:140,z0:-60,x1:152,z1:-50,h:3.5,fl:MT.concrete,wa:grey,sides:'nw',n:'',mc:'#3a3a44'});panel(145,0,-50.22,1.4,2.4,'n',MT.door);panel(146,2.6,-50.22,2.8,.45,'n',sign('FIRE STAIRS · ROOF','#ff5d73','#3a3a44',256,48));

 /* ================= VENDOR HALL (north-east) ================= */
 mr({x0:48,z0:-82,x1:118,z1:-35,h:9,fl:MT.concrete,wa:MT.wallPale,ce:MT.ceilDark,n:'Vendor Hall',mc:'#5a4a2a'});
 const stalls=[['STICKERS','#ff8fc8'],['LOCK PICKS','#ffd166'],['LEDs & BADGES','#2bf0ff'],['SUSPICIOUS USB CABLES','#ff5d73'],['LANYARDS ONLY','#8affc1'],['T-SHIRTS','#c9b6ff'],['KEYBOARDS','#ffb347'],['BOOKS & ZINES','#7cc4ff'],['RETRO COMPUTERS','#9be36b'],['FPGA BOARDS','#2bf0ff'],['"MILITARY-GRADE" VPNs','#ff5d73'],['FARADAY BAGS','#8affc1']];
 stalls.forEach((s,i)=>{const cx=68+(i%3)*12,cz=-74+Math.floor(i/3)*10;box(cx-3,0,cz-2,cx+3,2.6,cz-1.8,MT.plain('#2a2a34'));panel(cx,1.9,cz-1.79,5.6,.7,'s',sign(s[0],s[1],'#1b1026'));table(cx,cz,4.5,1,MT.plain(s[1]));
  for(let k=0;k<6;k++)box(cx-2+k*.75,.76,cz-.3,cx-1.6+k*.75,.9+rnd()*.2,cz+.2,MT.plain(['#fff','#222',s[1]][k%3]),{col:false});box(cx-3,2.6,cz-2,cx+3,2.7,cz+1,MT.plain(s[1]),{col:false,b:1});if(i%3===1)lightPanel(cx,9,cz,3,1,'#fff',14,.6)});
 box(50,0,-58,58,1.1,-56.5,{side:MT.plain('#ff5d73'),top:MT.plain('#f6eefc')});panel(54,.2,-56.49,7,.8,'s',sign('CON STORE · CREDITS ACCEPTED','#1b1026','#ffd166'));box(48.2,0,-62,58,2.6,-61.8,MT.plain('#3a2a4a'));panel(53,1.2,-61.79,8,1.2,'s',sign('GEAR · GIFTS · CLUB-MATE','#8affc1','#3a2a4a'));
 lightPanel(54,9,-58,4,2,'#fff',12,.8);
 box(104,0,-80,116,.6,-66,{side:MT.plain('#1c2133'),top:MT.plain('#2a3450')},{walk:1});stairs(108.5,-66,111.5,-64.6,0,.6,'z-',MT.plain('#2a3450'),{sides:1});panel(110,1.4,-81.78,10,4,'s',sign('DEMO STAGE · LIVE HACKS ON THE HOUR','#2bf0ff','#1c2133',512,96));
 for(let r=0;r<4;r++)seatRow(104,116,-60+r*1.6,0,'n','#2a3450');for(const x of[106,114])addLight(x,5,-72,[.4,.9,1],10,.9);lightPanel(74,9,-50,4,2,'#fff',14,.6);lightPanel(98,9,-50,4,2,'#fff',14,.6);
 panel(117.78,1.4,-45,.9,1.2,'w',MT.poster(4));

 /* ================= VILLAGE ROW (east) ================= */
 mr({x0:60,z0:-2,x1:122,z1:8,h:5,fl:MT.carpetGrey,wa:MT.panel,ce:MT.ceilDark,sides:'nse',n:'Village Row',mc:'#3a3a5a'});
 for(let x=64;x<122;x+=8)lightPanel(x,5,3,1.4,1.4,'#f0f4ff',9,.6);panel(121.78,1,3,6,2.6,'w',MT.cityview);
 doorSign(69,3.4,-1.78,'s','LOCKPICK VILLAGE');doorSign(93,3.4,-1.78,'s','CTF ARENA','#8affc1');doorSign(115,3.4,-1.78,'s','BLUE TEAM SOC','#7cc4ff');
 doorSign(70,3.6,7.78,'n','CAR HACKING','#ff9a5c');doorSign(90,3.4,7.78,'n','ICS VILLAGE','#9be36b');doorSign(111,3.4,7.78,'n','SOCIAL ENGINEERING','#ff8fc8');
 // lockpick
 mr({x0:60,z0:-35,x1:78,z1:-2,h:5,fl:MT.carpetGrey,wa:MT.wallWarm,n:'Lockpick',mc:'#5a4a2a'});
 for(const z of[-26,-19,-12])for(const x of[65,73])table(x,z,4,1.2,MT.plain('#e9d9b9'));
 for(let i=0;i<14;i++){const x=63.5+(i%7)*1.2+(i>6?.0:0),z=i<7?-26:-12;box(x,.76,z-.15,x+.25,.98,z+.15,MT.plain(['#ffd166','#ff5d73','#7cc4ff','#8affc1'][i%4]),{col:false})}
 panel(69,1,-34.78,12,2.2,'s',MT.pegs);panel(69,3.4,-34.78,8,.7,'s',sign('LOCKPICK VILLAGE · ASK BEFORE YOU PICK','#1b1026','#ffd166'));
 lightPanel(65,5,-20,3,1,'#fff5e0',9,.8);lightPanel(73,5,-20,3,1,'#fff5e0',9,.8);panel(77.78,0,-8,1,2.2,'w',MT.door);
 // CTF arena: big dark room, four-sided scoreboard tower
 mr({x0:78,z0:-35,x1:108,z1:-2,h:5,fl:MT.carpetDark,wa:MT.panel,ce:MT.black,n:'CTF Arena',mc:'#1a4a3a'});
 box(91,0,-20.5,95,4.9,-16.5,MT.plain('#04120c'));for(const[d,x,z]of[['s',93,-16.49],['n',93,-20.51],['e',95.01,-18.5],['w',90.99,-18.5]])panel(x,1.6,z,3.6,3,d,MT.score);
 box(90.6,4.6,-20.9,95.4,4.75,-16.1,MT.glow('#8affc1',2),{col:false,b:1});addLight(93,2.5,-14,[.4,1,.6],12,1.1);addLight(93,2.5,-23,[.4,1,.6],10,.8);
 for(const z of[-30,-8])for(const x of[83,93,103]){table(x,z,5,1.2,MT.plain('#1a1a24'));for(let k=0;k<3;k++)screen(x-1.6+k*1.6,.8,z-.3,1.1,.6,'s',MT.code);addLight(x,2,z,[.4,1,.7],6,.5)}
 table(93,-13.6,4,1.2,MT.plain('#1a1a24'));for(let k=0;k<3;k++)screen(91.6+k*1.4,.8,-13.9,1,.6,'s',MT.code);panel(93,.2,-13,3,.5,'s',sign('TEAM KERNEL','#8affc1','#04120c',256,48));
 // blue team SOC: wall of screens
 mr({x0:108,z0:-35,x1:122,z1:-2,h:5,fl:MT.carpetGrey,wa:MT.wallPale,n:'Blue Team SOC',mc:'#1a3a5a'});
 for(let r=0;r<2;r++)for(let c=0;c<5;c++)screen(110+c*2.4,1+r*1.6,-34.78,2.3,1.5,'s',[MT.dash,MT.score,MT.scope][(r+c)%3]);
 for(const z of[-26,-18,-10])for(const x of[111.5,118.5]){table(x,z,4,1.1,MT.plain('#e9eef5'));screen(x-.8,.8,z-.35,.8,.5,'s',MT.dash);screen(x+.8,.8,z-.35,.8,.5,'s',MT.dash)}
 lightPanel(115,5,-20,6,1,'#eef4ff',12,.8);addLight(115,3,-31,[.5,.75,1],10,1);
 // car hacking: a real car, bonnet up
 mr({x0:60,z0:8,x1:80,z1:36,h:5,fl:MT.tileDark,wa:MT.panel,n:'Car Hacking',mc:'#5a3a2a'});
 car(70,22,'x','#c0304a',{bonnet:1});box(71.3,1.55,21.15,72.2,2.3,22.85,MT.gloss('#c0304a'),{col:false});
 for(const[x,z]of[[64,16],[76,16],[64,29],[76,29]]){table(x,z,2.4,1,MT.plain('#2a2a34'));screen(x,.8,z-.3,1,.6,'s',MT.code)}
 panel(70,1.4,35.78,10,2,'n',sign('CAN BUS · KEY FOBS · "PLEASE DO NOT START THE CAR"','#ff9a5c','#1b1026',512,96));lightPanel(70,5,22,6,3,'#fff4e8',12,.9);
 // ICS village: model city with a toy train
 mr({x0:80,z0:8,x1:100,z1:36,h:5,fl:MT.carpetGrey,wa:MT.wallPale,n:'ICS Village',mc:'#3a5a2a'});
 box(83,0,15,97,.9,29,{side:MT.plain('#2a2a34'),top:MT.grass});
 for(let i=0;i<18;i++){const x=84.5+(i%6)*2.1,z=17+Math.floor(i/6)*4.2,h=.3+rnd()*1.2;box(x-.4,.9,z-.4,x+.4,.9+h,z+.4,{side:MT.facade,top:MT.plain('#3a3a44')},{col:false})}
 box(96,.9,16,96.6,2.4,16.6,MT.plain('#d9d4cc'),{col:false});box(95.9,2.4,15.9,96.7,2.5,16.7,MT.glow('#ff5d73',2),{col:false});
 for(const[a,b,c,d]of[[83.6,15.6,96.4,16],[83.6,28,96.4,28.4],[83.6,16,84,28],[96,16,96.4,28]])box(a,.9,b,c,.93,d,MT.plain('#5a5a64'),{col:false});
 panel(90,1.4,35.78,10,2,'n',sign('ICS VILLAGE · THE TRAIN MUST NOT STOP','#9be36b','#1b1026',512,96));lightPanel(90,5,22,6,3,'#f4fff0',12,.9);
 // social engineering: phone-booth call challenge
 mr({x0:100,z0:8,x1:122,z1:36,h:5,fl:MT.carpetDark,wa:MT.panel,n:'Social Engineering',mc:'#5a2a4a'});
 for(let i=0;i<2;i++){const x=106+i*8;box(x-1.6,0,30,x+1.6,2.8,34,MT.glass);box(x-1.6,2.8,30,x+1.6,3,34,MT.plain('#ff8fc8'),{col:false});table(x,32.8,1.6,.6,MT.plain('#2a2a34'),.9);box(x-.15,.9,32.6,x+.15,1.05,33,MT.plain('#111'),{col:false});addLight(x,2.4,32,[1,.6,.8],5,.8)}
 for(let r=0;r<3;r++)seatRow(103,119,18+r*1.8,0,'s','#5a2a4a');panel(111,3,35.78,10,.8,'n',sign('VISHING CALL CHALLENGE · ON AIR','#ff8fc8','#1b1026',512,64));lightPanel(111,5,22,6,2,'#fff0f6',12,.8);

 /* ================= FOOD COURT + COSPLAY + CHILL-OUT ================= */
 mr({x0:26,z0:8,x1:50,z1:25,h:5,fl:MT.tile,wa:MT.glass,ce:MT.ceil,sides:'nw',n:'Food Court',mc:'#5a3a2a'});
 const foods=[['NOODLES','#ffb347'],['PIZZA (NO PINEAPPLE)','#ff5d73'],['TACOS','#8affc1'],['CLUB-MATE','#ffd166']];
 foods.forEach((f,i)=>{const z=10+i*3.6;box(47.6,0,z,49.8,2.6,z+3.2,MT.plain('#3a2a24'));panel(47.59,1.9,z+1.6,3,.6,'w',sign(f[0],f[1],'#1b1026'));box(46.6,0,z,47.6,1.1,z+3.2,MT.plain(f[1]))});
 for(let i=0;i<6;i++){const x=30+(i%3)*5,z=12+Math.floor(i/3)*7;table(x,z,1.6,1.2,MT.plain('#e9e3da'));chair(x-.6,z+.9,'n',MT.plain('#ff5d73'));chair(x+.6,z-.9,'s',MT.plain('#7cc4ff'))}
 for(let i=0;i<3;i++)lightPanel(36,5,11+i*6,4,1,'#fff4e0',11,.8);
 slab(26,8,50,25,L1,.4,MT.wood,MT.ceil);railing(26,8,50,8,L1,{m:MT.chrome,glass:MT.glass});railing(26,8,26,25,L1,{m:MT.chrome,glass:MT.glass});
 for(const[x,z]of[[30,12],[38,20],[44,12]]){table(x,z,1.2,1.2,MT.plain('#f6eefc'),.76,L1);box(x-.05,L1,z-.05,x+.05,L1+2.4,z+.05,MT.plain('#888'),{col:false});box(x-1.2,L1+2.3,z-1.2,x+1.2,L1+2.42,z+1.2,MT.plain('#ff5d73'),{col:false,b:1})}
 slab(50,15,55,19,L1,.4,MT.carpetGallery,MT.plain('#2a1f36'));railing(50,15,55,15,L1,{m:MT.chrome,glass:MT.glass});railing(50,19,55,19,L1,{m:MT.chrome,glass:MT.glass});
 // cosplay hall: runway, changing rooms, photo studio
 mr({x0:10,z0:36,x1:45,z1:66,h:9,fl:MT.tileDark,wa:MT.panel,ce:MT.ceilDark,n:'Cosplay Hall',mc:'#1a4a5a'});
 box(22,0,40,32,.6,52,{side:MT.plain('#1c2133'),top:MT.plain('#2a3450')},{walk:1});stairs(25.5,52,28.5,53.4,0,.6,'z+',MT.plain('#2a3450'),{sides:1});
 panel(27,1,36.22,12,4.5,'s',sign('COSPLAY CONTEST · DAY 3','#2bf0ff','#1c2133'));for(let i=0;i<5;i++){const z=41+i*2.5,c=i%2?'#2bf0ff':'#ff5fb0';addLight(27,6,z,hx(c),9,.8);box(26.75,8.8,z-.25,27.25,9,z+.25,MT.glow(c),{col:false,b:1})}
 for(const z of[44,52])for(const x of[14,38])table(x,z,3,1.2,MT.plain('#c9a46a'));
 for(let i=0;i<4;i++){const x=12+i*2.6;box(x,0,58,x+.08,2.4,65.8,MT.plain('#5a5a64'));box(x+.1,2.2,58,x+2.5,2.3,58.06,MT.plain('#888'),{col:false});box(x+.1,.3,58,x+2.5,2.2,58.04,MT.fabric(['#ff5fb0','#2bf0ff','#ffd166','#c9b6ff'][i]),{col:false})}
 panel(17,2.6,57.9,8,.5,'n',sign('CHANGING ROOMS','#2bf0ff','#1c2133',256,48));
 box(35,0,65.6,44,4.6,65.8,MT.glow('#f6eefc',1.4),{col:false});quad([35,.01,65.6],[44,.01,65.6],[44,.01,60],[35,.01,60],MT.glow('#f6eefc',1.1),1,1);
 for(const x of[34.5,44.5]){box(x-.05,0,59.4,x+.05,2.2,59.5,MT.plain('#222'),{col:false});box(x-.4,2.2,59.4,x+.4,3,59.48,MT.glow('#fff6fb',2.2),{col:false});addLight(x,2.6,60.5,[1,.95,1],6,1)}
 panel(39.5,3.4,65.56,8,.5,'n',sign('PHOTO STUDIO','#ff5fb0','#1c2133',256,48));
 for(let i=0;i<3;i++){const x=40+i*1.6;box(x-.05,0,38,x+.05,1.8,38.1,MT.plain('#888'),{col:false});for(let k=0;k<4;k++)box(x-.5+k*.24,.6,37.8,x-.3+k*.24,1.7,38.3,MT.plain(['#2bf0ff','#ff5fb0','#ffd166','#c9b6ff'][(k+i)%4]),{col:false})}
 lightPanel(16,9,46,4,2,'#f0f8ff',14,.8);lightPanel(38,9,46,4,2,'#f0f8ff',14,.8);
 // chill-out lounge (quiet corner) + nap pods
 mr({x0:46,z0:36,x1:62,z1:54,h:4.5,fl:MT.carpetDark,wa:MT.panel,ce:MT.ceilDark,n:'Chill-out',mc:'#3a2a5a'});
 const bc=['#ff8fc8','#8affc1','#c9b6ff','#ffd166','#7cc4ff'];for(let i=0;i<9;i++){const x=49+(i%3)*4.5,z=40+Math.floor(i/3)*4;box(x-.55,0,z-.55,x+.55,.5,z+.55,MT.fabric(bc[i%5]))}
 quad([47,.01,52],[61,.01,52],[61,.01,38],[47,.01,38],MT.rug,6,6);
 for(const[x,z,c]of[[47,37,'#ff8fc8'],[61,37,'#8affc1'],[47,53,'#c9b6ff'],[61,53,'#ffd166']]){box(x-.15,0,z-.15,x+.15,.9,z+.15,MT.lava);addLight(x,1,z,hx(c),7,1.1)}
 panel(61.78,1.2,45,6,2.4,'w',mt(signTex('~ breathe ~','#c9b6ff','#140c1e',512,128),0,1,1));
 mr({x0:46,z0:54,x1:62,z1:66,h:3.2,fl:MT.carpetDark,wa:MT.panel,ce:MT.ceilDark,n:'Nap pods',mc:'#2a2a4a'});
 for(let i=0;i<5;i++){const x=48+i*3;box(x-1.1,0,60,x+1.1,1.4,65.6,MT.gloss('#e9eef5'));box(x-.9,.4,59.95,x+.9,1.2,60,MT.glow('#c9b6ff',.9),{col:false})}addLight(54,2.6,57,[.7,.6,1],8,.6);

 /* ================= ARRIVAL PLAZA ================= */
 const pz=(x0,z0,x1,z1,m)=>{floorQ(x0,z0,x1,z1,0,m||MT.pavers);surf(x0,z0,x1,z1,0)};
 pz(-112,30,-45,52);pz(-45,44,10,52);pz(-20,36,10,44);pz(-45,36,-40,44);pz(-24,36,-20,44);
 pz(-112,52,-100,96);pz(-10,52,10,96);pz(-100,90,-10,96);
 pz(-100,52,-10,62,MT.road);pz(-100,80,-10,90,MT.road);pz(-100,62,-80,80,MT.road);pz(-30,62,-10,80,MT.road);pz(-80,62,-30,80,MT.grass);
 for(const[a,b,c,d]of[[-80,61.8,-30,62],[-80,80,-30,80.2],[-80.2,62,-80,80],[-30,62,-29.8,80]])box(a,0,b,c,.18,d,MT.plain('#9a9aa8'),{col:false});
 for(let x=-96;x<-12;x+=6){floorQ(x,56.85,x+3,57.15,.02,MT.plain('#e9e3da'));floorQ(x,84.85,x+3,85.15,.02,MT.plain('#e9e3da'))}
 // the giant neon sign
 box(-64,0,70.6,-46,7.2,71.4,MT.plain('#1b1026'));panel(-55,2.4,71.41,17,3.6,'s',sign('CTRL+ALT+CON','#ff5d73','#1b1026',512,108));panel(-55,2.4,70.59,17,3.6,'n',sign('CTRL+ALT+CON','#ff5d73','#1b1026',512,108));
 box(-63.6,6.4,70.5,-46.4,6.7,71.5,MT.glow('#ff5d73',2.6),{col:false});addLight(-55,4,74,[1,.35,.45],16,1.3);addLight(-55,4,67,[1,.35,.45],14,1.1);
 for(const[x,z]of[[-74,66],[-36,76],[-74,76],[-36,66]])tree(x,z);
 // taxi rank, bus stop, coffee cart
 car(-104,40,'z','#ffd166',{taxi:1});car(-104,47,'z','#ffd166',{taxi:1});box(-107,0,35,-106.8,3,35.2,MT.plain('#2a2a30'));panel(-106.9,3,35.2,2,.6,'e',sign('TAXI','#1b1026','#ffd166',128,48));
 box(-4,0,46,4,.12,49,MT.plain('#5a5a64'),{col:false});box(-4,0,48.8,4,2.8,49,MT.glass);box(-4.1,2.8,45.8,4.1,3,49.2,MT.plain('#2a2026'),{col:false,b:1});box(-3.9,0,46.5,-3.7,2.8,48.8,MT.chrome,{col:false});
 panel(0,.6,48.79,3,1.8,'n',MT.lumen);box(-3,0,47.6,3,.45,48.3,MT.woodDark);panel(3.8,2.9,46,1,.4,'e',sign('BUS 42','#1b1026','#ffd166',128,48));
 box(-17,0,47,-14,1,48.5,MT.plain('#3a2418'));box(-16.8,1,47.2,-14.2,1.4,48.3,MT.chrome,{col:false});box(-15.55,1,47.7,-15.45,2.8,47.8,MT.plain('#888'),{col:false});
 box(-17.4,2.8,46.2,-13.6,2.92,49.3,MT.plain('#ff5d73'),{col:false,b:1});addLight(-15.5,2.5,48,[1,.85,.6],6,.9);panel(-15.5,.2,48.51,2.8,.6,'s',sign('BEAN THERE · COFFEE','#ffd9a0','#3a2418',256,48));
 for(const x of[-96,-84,-30,-18,-6])lamp(x,53,0);for(const x of[-90,-66,-44,-22])lamp(x,90,0);
 for(let x=-110;x<10;x+=3)box(x,0,95.6,x+.24,.8,95.84,MT.plain('#3a3a44'));
 // city around the plaza
 box(-112,0,96,10,48,96.3,MT.facade,{col:false});box(-112.3,0,30,-112,52,96,MT.facade,{col:false});box(10,9,36,10.3,40,96,MT.facade,{col:false});box(10,0,66,10.3,9,96,MT.facade,{col:false});
 colBox(-112.5,30,-112,96,0,5);colBox(-112,96,10,96.5,0,5);colBox(10,66,10.5,96,0,5);
 skyline(-50,60,150,230,40,-2,SITE);

 /* ================= LEVEL 1 ================= */
 // gallery ring above the Ring: walkways with glass railings, looking down into the Foyer and courtyard
 slab(-30,-34.8,55,-30,L1,.4,MT.carpetGallery,MT.plain('#2a1f36'));slab(55,-34.8,59.8,35.8,L1,.4,MT.carpetGallery,MT.plain('#2a1f36'));
 slab(-25,31,55,35.8,L1,.4,MT.carpetGallery,MT.plain('#2a1f36'));slab(-25,-30,-20.2,31,L1,.4,MT.carpetGallery,MT.plain('#2a1f36'));
 const rl=(a,b,c,d)=>railing(a,b,c,d,L1,{m:MT.chrome,glass:MT.glass});
 rl(-30,-30,-25,-30);rl(-20,-30,55,-30);rl(55,-30,55,15);rl(55,19,55,31);rl(-20,31,55,31);rl(-25,-30,-25,-24);rl(-25,-20,-25,6);rl(-25,9,-25,31);
 for(const[x0,z0,x1,z1]of[[-12,-34,-8,-32],[24,-34,28,-32],[57,-12,59,-8],[57,22,59,26],[10,33,14,35]]){box(x0,L1,z0,x1,L1+.45,z1,MT.woodDark)}
 for(let x=-20;x<55;x+=10)addLight(x,L1+2.4,-32.5,[1,.9,.85],8,.45);for(let z=-26;z<34;z+=10)addLight(57.5,L1+2.4,z,[1,.9,.85],8,.45);for(let x=-15;x<55;x+=10)addLight(x,L1+2.4,33.5,[1,.9,.85],8,.45);for(let z=-20;z<34;z+=12)addLight(-22.5,L1+2.4,z,[1,.9,.85],8,.45);
 panel(-5,L1+3.4,-34.78,6,.55,'s',sign('HALL A · UPPER SEATING','#ffd166','#1b1026',512,64));panel(52,L1+2.9,35.78,4,.45,'n',sign('QUIET ROOM','#c9b6ff','#1b1026',256,48));
 panel(59.78,L1+3.2,3,4,.5,'w',sign('WORKSHOPS · CREATOR CORNER · CON OPS →','#8affc1','#1b1026',512,64));panel(-24.78,L1+2.9,-22,4,.45,'e',sign('← SKYBRIDGE · HOTEL','#ffe0a0','#1b1026',512,64));
 (MAPR.con=MAPR.con||[]).push({x0:-30,z0:-35,x1:60,z1:-30,y:L1,n:'Gallery',c:'#3a2a4a'},{x0:55,z0:-30,x1:60,z1:36,y:L1,n:'',c:'#3a2a4a'},{x0:-25,z0:31,x1:55,z1:36,y:L1,n:'',c:'#3a2a4a'},{x0:-25,z0:-30,x1:-20,z1:31,y:L1,n:'',c:'#3a2a4a'},{x0:-32.5,z0:6,x1:-25,z1:21,y:L1,n:'',c:'#3a2a4a'});
 // skybridge into the hotel
 slab(-45,-24,-25,-20,L1,.3,MT.carpetGallery,MT.plain('#2a1f36'));
 for(const z of[-24,-20]){box(-45,L1,z-.03,-25,L1+3,z+.03,MT.glass);for(let x=-45;x<=-25;x+=2.5)box(x-.04,L1,z-.06,x+.04,L1+3,z+.06,MT.chrome,{col:false})}
 ceilQ(-45,-24,-25,-20,L1+3,MT.glass);box(-45,L1+3,-24.1,-25,L1+3.12,-19.9,MT.chrome,{col:false,nt:1});for(let x=-43;x<-25;x+=4)lightPanel(x,L1+3,-22,.8,.8,'#f4f8ff',6,.5);
 (MAPR.con=MAPR.con||[]).push({x0:-45,z0:-24,x1:-25,z1:-20,y:L1,n:'',c:'#3a2a4a'});
 // hotel level 1: corridor, meeting rooms, gym (pool view), the Lumen Lounge
 mr({x0:-85,z0:-24,x1:-45,z1:-20,y:L1,h:3.2,fl:MT.carpetHotel,wa:MT.wallHotel,n:'Hotel L1',mc:'#5a2a3a'});
 mr({x0:-62,z0:-20,x1:-45,z1:-10,y:L1,h:3.2,fl:MT.carpetHotel,wa:MT.wallHotel,sides:'w',n:'',mc:'#5a2a3a'});
 for(let x=-82;x<-46;x+=6)lightPanel(x,L1+3.2,-22,.8,.8,'#ffe8c0',6,.6);lightPanel(-53,L1+3.2,-15,1,1,'#ffe8c0',7,.6);
 mr({x0:-85,z0:-40,x1:-62,z1:-24,y:L1,h:3.2,fl:MT.carpetGrey,wa:MT.wallPale,n:'Meeting rooms',mc:'#4a4a5a'});
 table(-73.5,-32,8,2.4,MT.woodDark,.76,L1);for(let i=0;i<6;i++){chair(-77+i*1.4,-33.6,'s',MT.plain('#3a3a4a'),L1);chair(-77+i*1.4,-30.4,'n',MT.plain('#3a3a4a'),L1)}panel(-73.5,L1+.9,-39.78,5,2.2,'s',MT.slides);lightPanel(-73.5,L1+3.2,-32,4,1.2,'#f4f8ff',9,.8);
 mr({x0:-85,z0:-20,x1:-62,z1:-10,y:L1,h:3.2,fl:MT.tileDark,wa:MT.wallPale,sides:'nse',n:'Gym',mc:'#2a4a4a'});
 for(let i=0;i<4;i++){const x=-82+i*4;box(x-.4,L1,-16,x+.4,L1+1.3,-13.8,MT.plain('#2a2a34'));box(x-.35,L1+1.2,-16.1,x+.35,L1+1.6,-15.9,MT.glow('#7cc4ff',1.2),{col:false})}lightPanel(-73,L1+3.2,-15,4,1,'#f4f8ff',9,.8);
 mr({x0:-62,z0:-40,x1:-45,z1:-24,y:L1,h:3.2,fl:MT.carpetGallery,wa:MT.panel,ce:MT.ceilDark,n:'Lumen Lounge',mc:'#0d1830'});
 sofa(-54,-36,3,'s','#0d1830',L1);sofa(-54,-30,3,'n','#0d1830',L1);table(-54,-33,1.6,1,MT.chrome,.45,L1);panel(-53.5,L1+1,-39.78,6,1.6,'s',MT.lumen);
 box(-60,L1,-38,-58,L1+1,-36.5,MT.plain('#0d1830'));box(-59.8,L1+1,-37.8,-58.2,L1+1.05,-36.7,MT.plain('#f6eefc'),{col:false});addLight(-54,L1+2.6,-32,[.4,.7,1],9,1);
 panel(-57,L1+2.7,-24.22,4,.45,'n',sign('LUMEN LOUNGE · INVITE ONLY','#5ab4ff','#0d1830',256,48));
 // village row level 1: workshops, hardware hacking village, creator corner, con ops, press, speakers
 slab(60,-2,122,8,L1,.4,MT.carpetGallery,MT.ceilDark);
 mr({x0:60,z0:-2,x1:122,z1:8,y:L1,h:3.4,nofloor:1,fl:MT.carpetGallery,wa:MT.panel,ce:MT.ceilDark,sides:'nse',n:'',mc:'#3a3a5a'});
 for(let x=64;x<122;x+=8)lightPanel(x,L1+3.4,3,1.2,1.2,'#f0f4ff',8,.55);panel(121.78,L1+.8,3,6,2.4,'w',MT.cityview);
 doorSign(68,L1+2.9,-1.78,'s','WORKSHOP A','#7cc4ff');doorSign(84,L1+2.9,-1.78,'s','WORKSHOP B','#7cc4ff');doorSign(106,L1+3,-1.78,'s','HARDWARE HACKING','#8affc1');
 doorSign(68,L1+2.9,7.78,'n','CREATOR CORNER','#ff8fc8');doorSign(84,L1+2.9,7.78,'n','RETRO ARCADE','#2bf0ff');doorSign(99,L1+2.9,7.78,'n','CON OPS','#ffd166');doorSign(110,L1+2.9,7.78,'n','PRESS','#d9d4cc');doorSign(118,L1+2.9,7.78,'n','SPEAKERS','#d9d4cc');
 const wks=(x0,x1,nm,mc,deck)=>{mr({x0,z0:-35,x1,z1:-2,y:L1,h:3.4,fl:MT.carpetGrey,wa:MT.wallPale,n:nm,mc});const cx=(x0+x1)/2;panel(cx,L1+.9,-34.78,(x1-x0)-5,2.2,'s',deck);
  for(let r=0;r<5;r++)seatRow(x0+1,x1-1,-26+r*1.7,L1,'n',r%2?'#3f526a':'#4a6080');lightPanel(cx,L1+3.4,-25,3,1,'#f4f8ff',10,.6);lightPanel(cx,L1+3.4,-10,3,1,'#f4f8ff',10,.6);box(cx-.6,L1,-31.5,cx+.6,L1+1.1,-30.9,MT.woodDark)};
 wks(60,76,'Workshop A','#2a3a5a',mt(signTex('Intro to Wireshark (Bring Snacks)','#1b1026','#f6eefc',512,128),0,1,1,{k:1}));wks(76,92,'Workshop B','#2a3a5a',MT.slides);
 mr({x0:92,z0:-35,x1:122,z1:-2,y:L1,h:3.4,fl:MT.concrete,wa:MT.panel,ce:MT.ceilDark,n:'Hardware Hacking',mc:'#2a4a3a'});
 panel(107,L1+.6,-34.78,14,2.6,'s',MT.ledwall);addLight(107,L1+2,-32,[.8,.6,1],12,1.1);
 for(const z of[-26,-19,-12])for(const x of[98,107,116]){table(x,z,5,1.2,MT.plain('#d9d4cc'),.8,L1);box(x-2,L1+.8,z-.4,x-1.5,L1+1.3,z,MT.glow('#ffd98a'),{col:false});screen(x+.6,L1+.84,z-.45,.8,.45,'s',MT.scope);box(x-.6,L1+.8,z+.1,x+.4,L1+.86,z+.4,MT.plain('#2a6a3a'),{col:false})}
 lightPanel(102,L1+3.4,-18,4,1,'#f0fff4',9,.7);lightPanel(114,L1+3.4,-18,4,1,'#f0fff4',9,.7);panel(92.22,L1+1,-20,4,1.2,'e',sign('SOLDER PRACTICE · ALL WELCOME','#8affc1','#1a2a24'));
 mr({x0:60,z0:8,x1:76,z1:36,y:L1,h:3.4,fl:MT.carpetDark,wa:MT.panel,ce:MT.ceilDark,n:'Creator Corner',mc:'#4a1a4a'});
 box(62,L1,26,70,L1+.25,34,MT.plain('#3a1a40'),{walk:1,col:false});panel(66,L1+.3,35.78,8,3,'n',MT.stream);box(65,L1+.25,30.2,67,L1+.85,30.8,MT.plain('#ffffff'));
 for(const x of[62.6,69.4]){box(x-.05,L1+.25,30,x+.05,L1+1.8,30.1,MT.plain('#222'),{col:false});box(x-.4,L1+1.8,30,x+.4,L1+2.6,30.08,MT.glow('#fff6fb'),{col:false});addLight(x,L1+2.2,29.4,[1,.7,.9],6,1)}
 for(let i=0;i<5;i++)box(63+i*1.4,L1+.25,33.3,63.6+i*1.4,L1+.85,33.8,MT.plain(['#ff8fc8','#c9b6ff','#ffd166','#8affc1','#ff5d73'][i]),{col:false});
 for(let i=0;i<3;i++){const z=10+i*5;box(70,L1,z,75.8,L1+2.4,z+.1,MT.panel);table(73,z+2.2,2,1,MT.plain('#2a2a34'),.76,L1);box(71,L1+1.6,z+2.2,71.1,L1+2.4,z+2.8,MT.glow('#fff6fb',1.8),{col:false});addLight(72,L1+2.4,z+2,[1,.75,.9],4,.6)}
 box(70,L1,25,75.8,L1+2.4,25.1,MT.panel);lightPanel(64,L1+3.4,16,3,1,'#fff0fa',9,.6);
 // retro arcade
 mr({x0:76,z0:8,x1:92,z1:36,y:L1,h:3.4,fl:MT.carpetCon,wa:MT.panel,ce:MT.ceilDark,n:'Retro Arcade',mc:'#4a1a4a'});
 {const y=L1,cab=(x,z,dir,scr)=>{const d=dir==='n'?-1:1;box(x-.38,y,z-.34,x+.38,y+1.85,z+.34,MT.gloss('#1a1424'));panel(x,y+1.05,z+d*.345,.62,.5,dir,scr);box(x-.38,y+1.72,z+d*.34-.04,x+.38,y+1.9,z+d*.34+.04,MT.glow(['#ff5fb0','#2bf0ff','#ffd166','#8affc1'][Math.abs(Math.round(x*3))%4],2),{col:false})};
  for(let x=77.5;x<91;x+=1.25)cab(x,35.3,'n',(Math.round(x*4))%2?MT.arcade:MT.arcade2);
  for(let x=79;x<90;x+=1.25){cab(x,21.2,'n',(Math.round(x*4))%2?MT.arcade2:MT.arcade);cab(x,22.6,'s',(Math.round(x*4))%2?MT.arcade:MT.arcade2)}
  box(90.4,y,9,91.8,y+2.1,10.4,MT.gloss('#1a2a5a'));panel(90.39,y+.1,9.7,1.3,2,'w',MT.vend);
  for(let x=76.5;x<92;x+=5){box(x,y+3.1,8.22,x+3.5,y+3.16,8.28,MT.glow(x%10<5?'#ff5fb0':'#2bf0ff',2.2),{col:false});box(x,y+3.1,35.72,x+3.5,y+3.16,35.78,MT.glow(x%10<5?'#2bf0ff':'#ff5fb0',2.2),{col:false})}
  for(const[x,z,c]of[[80,14,[1,.4,.8]],[88,14,[.3,.9,1]],[80,30,[.3,.9,1]],[88,30,[1,.8,.4]]])addLight(x,y+3.2,z,c,9,.85);
  panel(76.22,y+1.1,14,.8,1.05,'e',MT.poster(5));panel(91.78,y+1.2,28,4,1,'w',sign('HIGH SCORES','#ffd166','#120a1c',256,64));panel(91.78,y+.4,28,3.4,.7,'w',mt(signTex('1. KERNEL  99,999   2. r00tbeer  81,200   3. dave_hax  12','#8affc1','#120a1c',512,64),0,1,1,{k:1.2}))}
 mr({x0:92,z0:8,x1:106,z1:36,y:L1,h:3.4,fl:MT.carpetGrey,wa:MT.wallPale,n:'Con Ops',mc:'#5a4a1a'});
 panel(99,L1+.9,35.78,10,2,'n',mt(signTex('KEYNOTE 4PM · AV · BADGES · RADIOS · DO NOT PANIC','#1b1026','#f6eefc',512,128),0,1,1,{k:1}));
 table(99,24,6,2,MT.plain('#e9e3da'),.76,L1);for(let i=0;i<6;i++)box(96.6+i*.9,L1+.76,23.4,97.2+i*.9,L1+1.05,24,MT.plain('#2a2a30'),{col:false});
 for(let i=0;i<4;i++)box(93,L1,12+i*3,95,L1+.6,13.8+i*3,MT.plain('#c9a46a'));lightPanel(99,L1+3.4,20,4,1.5,'#fff8e0',10,.8);
 mr({x0:106,z0:8,x1:114,z1:36,y:L1,h:3.4,fl:MT.carpetGrey,wa:MT.wallPale,n:'Press',mc:'#4a4a5a'});for(let r=0;r<3;r++)seatRow(107,113,18+r*2,L1,'s','#3a3a4a');box(108,L1,30,112,L1+1,31,MT.woodDark);panel(110,L1+1.2,35.78,6,1.2,'n',sign('PRESS ROOM · NO PHOTOS IN THE HALLS','#d9d4cc','#2a2a34',512,64));lightPanel(110,L1+3.4,22,2,1,'#f4f8ff',8,.7);
 mr({x0:114,z0:8,x1:122,z1:36,y:L1,h:3.4,fl:MT.carpetHotel,wa:MT.wallWarm,n:'Speakers',mc:'#5a3a2a'});sofa(118,20,3,'s','#4a5a8a',L1);sofa(118,26,3,'n','#4a5a8a',L1);table(118,23,1.6,1,MT.woodDark,.45,L1);table(118,32,3,1,MT.plain('#e9e3da'),.76,L1);box(117,L1+.76,31.7,119,L1+.9,32.3,MT.bread,{col:false});lightPanel(118,L1+3.4,23,2,1,'#fff4e0',8,.7);
 // quiet room
 mr({x0:46,z0:36,x1:62,z1:50,y:L1,h:3.4,fl:MT.carpetGrey,wa:MT.wallWarm,ce:MT.ceil,n:'Quiet room',mc:'#3a3a4a'});
 sofa(50,46,3,'n','#6a5a8a',L1);sofa(58,40,3,'s','#6a5a8a',L1);plant(47,49,1,L1);plant(61,49,1,L1);panel(54,L1+1,49.78,4,1.6,'n',MT.morning);addLight(54,L1+2.6,43,[1,.9,.75],8,.6);
 panel(54,L1+2.6,36.22,5,.5,'s',sign('QUIET ROOM · SHHH','#c9b6ff','#1b1026',256,48));

 /* ================= BASEMENT ================= */
 mr({x0:-110,z0:12,x1:-85,z1:30,y:BY,h:4.5,nofloor:1,fl:MT.concrete,wa:MT.concrete,ce:MT.concrete,noceil:1,n:'',mc:'#3a3a44'});
 for(const r of[[-110,12,-98,30],[-93,12,-85,30],[-98,26,-93,30],[-98,12,-93,14]]){floorQ(r[0],r[1],r[2],r[3],BY,MT.concrete);surf(r[0],r[1],r[2],r[3],BY)}
 panel(-86,BY,29.78,1.6,2.4,'n',MT.elev);panel(-86,BY+2.6,29.78,2,.35,'n',sign('SERVICE LIFT','#ffd166','#2a2a30',256,48));addLight(-95,BY+2.8,22,[1,.7,.4],8,.9);
 // car park
 mr({x0:-85,z0:-8,x1:-25,z1:60,y:BY,h:3,fl:MT.concrete,wa:MT.concrete,ce:MT.concrete,n:'Car park',mc:'#3a3a3a'});
 for(let x=-75;x<-25;x+=10)for(let z=2;z<60;z+=12){box(x-.35,BY,z-.35,x+.35,BY+3,z+.35,MT.concrete);box(x-.36,BY+.8,z-.36,x+.36,BY+1.1,z+.36,MT.plain('#ffd166'),{col:false})}
 for(let x=-82;x<-28;x+=3){floorQ(x,6,x+.1,12,BY+.01,MT.plain('#e9e3da'));floorQ(x,44,x+.1,50,BY+.01,MT.plain('#e9e3da'))}
 const cc=['#2a3a5a','#8a8a94','#3a1a1a','#e9e3da','#2a4a2a','#5a4a3a'];let ci=0;
 car(-56.5,9,'z','#0d0d14',{plate:'PRIV4CY',y:BY});for(let x=-80.5;x<-28;x+=6)if(Math.abs(x+56.5)>.6&&rnd()<.7)car(x,9,'z',cc[(ci++)%cc.length],{y:BY});
 for(let x=-80.5;x<-28;x+=6)if(rnd()<.6)car(x,47,'z',cc[(ci++)%cc.length],{y:BY});
 for(let x=-80;x<-26;x+=8)for(const z of[0,20,36,56]){box(x-.5,BY+2.9,z-.12,x+.5,BY+3,z+.12,MT.glow('#ffb24a',1.6),{col:false});addLight(x,BY+2.5,z,[1,.6,.25],10,.75)}
 panel(-25.22,BY+2.4,3,3,.45,'w',sign('NOC →','#8affc1','#2a2a30',256,48));panel(-55,BY+2.4,59.78,6,.5,'n',sign('P · HALCYON GUESTS + VIPs ONLY','#ffd166','#2a2a30',512,48));
 // con network operations centre
 mr({x0:-25,z0:-8,x1:0,z1:14,y:BY,h:3,fl:MT.tileDark,wa:greyD,ce:MT.ceilDark,n:'Network Ops',mc:'#1a3a3a'});
 for(let i=0;i<6;i++){rack(-22+i*3,-6.6,'s',BY);rack(-22+i*3,-3.4,'n',BY)}
 for(let i=0;i<3;i++){table(-18+i*7,8,4,1.2,MT.plain('#1a1a24'),.76,BY);screen(-19+i*7,BY+.8,7.7,1,.6,'s',MT.dash);screen(-17+i*7,BY+.8,7.7,1,.6,'s',MT.code)}
 panel(-12.5,BY+.8,13.78,10,1.6,'n',MT.dash);addLight(-12,BY+2.6,-5,[.4,1,.8],12,.9);addLight(-12,BY+2.6,8,[.5,.8,1],10,.8);
 // plant room + laundry
 mr({x0:-110,z0:-40,x1:-85,z1:12,y:BY,h:4,fl:MT.concrete,wa:MT.concrete,ce:MT.concrete,n:'Plant room',mc:'#3a3a3a'});
 for(let i=0;i<5;i++){const z=-36+i*5;box(-108,BY,z,-104.5,BY+2.2,z+3,MT.metal);box(-106.6,BY+2.2,z+1,-105.9,BY+4,z+1.7,MT.metal,{col:false});box(-106.5,BY+1.7,z+1.25,-105.9,BY+1.9,z+1.45,MT.glow('#ff5d73',2),{col:false})}
 for(let i=0;i<6;i++){box(-90,BY,-36+i*3,-87,BY+1.1,-34+i*3,MT.chrome);box(-88.9,BY+.4,-36.02+i*3,-88.1,BY+.9,-35.98+i*3,MT.glass,{col:false})}
 for(let i=0;i<3;i++){box(-99+i*3,BY,-8,-97+i*3,BY+1,-6.6,MT.plain('#5a7a9a'));box(-99+i*3,BY+1,-8,-97+i*3,BY+1.2,-6.6,MT.linen,{col:false})}
 for(let z=-38;z<10;z+=4)box(-110,BY+3.4,z,-85,BY+3.6,z+.3,MT.metal,{col:false});addLight(-98,BY+3.4,-20,[1,.85,.6],14,.9);addLight(-98,BY+3.4,0,[1,.85,.6],12,.8);
 for(let i=0;i<4;i++)box(-104+i*.9,BY+3,-12+i*1.3,-103.4+i*.9,BY+3.9,-11.4+i*1.3,mt('white','#f4f4f8',.5,0,{glass:1}),{col:false});
 // service tunnel: loading dock ↔ hotel back stairs
 mr({x0:-96,z0:-104,x1:150,z1:-98,y:BY,h:3,fl:MT.concrete,wa:MT.concrete,ce:MT.concrete,n:'Service tunnel',mc:'#3a3a3a'});
 mr({x0:-96,z0:-98,x1:-90,z1:-40,y:BY,h:3,fl:MT.concrete,wa:MT.concrete,ce:MT.concrete,sides:'ew',n:'',mc:'#3a3a3a'});
 for(let x=-90;x<150;x+=12){box(x,BY+2.2,-103.8,x+12,BY+2.4,-103.6,MT.metal,{col:false});lightPanel(x+6,BY+3,-101,.5,1,'#ffb24a',9,.7)}for(let z=-94;z<-42;z+=12)lightPanel(-93,BY+3,z,1,.5,'#ffb24a',9,.7);
 panel(-93,BY+2,-40.22,3,.4,'n',sign('TUNNEL → LOADING DOCK','#ffd166','#2a2a30',256,48));

 /* ================= CON ROOF (y 12) ================= */
 floorQ(48,-82,124,36,RFY,MT.gravel);surf(48,-82,124,36,RFY);
 for(const[a,b,c,d]of[[47.6,-82.4,124.4,-82],[47.6,36,124.4,36.4],[47.6,-82,48,36],[124,-82,124.4,36]])box(a,RFY,b,c,RFY+1.1,d,MT.concrete);
 for(const[x,z,w,d]of[[60,-70,4,3],[70,-70,3,3],[85,-60,5,3],[100,-40,3,4],[66,-20,6,4],[96,10,4,3],[110,24,5,3],[80,28,3,3]])box(x,RFY,z,x+w,RFY+1.6,z+d,{side:MT.metal,top:MT.fan});
 box(118,RFY,-56,124,RFY+3,-50,MT.concrete);panel(117.98,RFY,-53,1.4,2.4,'w',MT.door);panel(117.97,RFY+2.6,-53,2,.4,'w',sign('FIRE STAIRS','#ff5d73','#3a3a44',256,48));
 box(104,RFY,-6,104.6,RFY+5,-5.4,MT.metal);box(103.8,RFY+5,-6.2,104.8,RFY+5.2,-5.2,MT.glow('#ff5d73'),{col:false});box(103.95,RFY+.8,-5.42,104.6,RFY+1.2,-5.3,MT.plain('#111'),{col:false});box(104.1,RFY+1.05,-5.31,104.2,RFY+1.12,-5.29,MT.glow('#8affc1',2.4),{col:false});
 for(let i=0;i<8;i++)addLight(56+i*9,RFY+3,-20+(i%3)*20,[.5,.5,.9],16,.35);
 roofTop(-30,-82,20,-35,16.02,MT.concrete);roofTop(23,-62,48,-35,8.02,MT.concrete);roofTop(-45,-35,48,-25,11.02);roofTop(-30,-25,-20,-10,11.02);roofTop(-20,25,48,36,11.02);roofTop(10,36,45,66,9.02,MT.concrete);roofTop(46,36,62,66,8.92);roofTop(-40,36,-24,44,4.02,MT.concrete);
 roofTop(-45,-40,-30,-25,3.52,MT.concrete);roofTop(26,8,50,25,L1+.01,MT.wood);
 skyline(40,-20,160,240,40,-2,SITE);
 (MAPR.con=MAPR.con||[]).push({x0:48,z0:-82,x1:124,z1:36,y:RFY,n:'Con roof',c:'#2a2a4a'});

 /* ================= AREAS ================= */
 const A=(k,n,r,sp,bg,o)=>area(k,n,'con',r,sp,bg,o);
 A('plaza','Arrival Plaza',[-112,30,10,96],[-60,40,Math.PI,0],'con',{out:1});
 A('vestibule','Convention Entrance',[-40,36,-24,44],[-32,42.5,0,0],'con',{sub:1});
 A('lobby','Hotel Lobby',[-85,-10,-45,30],[-65,24,0,0],'lobby',{y1:4});
 A('cafe','Halcyon Café',[-59,19,-45,30],[-53,24,Math.PI,0],'lobby',{sub:1,y1:4});
 A('luggage','Luggage room',[-110,-6,-85,12],[-90,3,-Math.PI/2,0],'lobby');
 A('backstairs','Back stairs',[-110,12,-85,30],[-90,20,-Math.PI/2,0],'lobby',{hide:1,y0:-1,y1:6});
 A('bar','Hotel Bar',[-85,-40,-45,-10],[-60,-20,0,0],'bar',{y1:4});
 A('terrace','Bar Terrace',[-45,-25,-30,-10],[-38,-17,-Math.PI/2,0],'bar',{out:1,y1:4});
 A('foyer','The Foyer',[-45,-10,-20,36],[-32,26,0,0],'con');
 A('walkway','Ring · West Walk',[-30,-25,-20,-10],[-25,-14,0,0],'con');
 A('ringN','Ring · North',[-30,-35,50,-25],[0,-30,Math.PI/2,0],'con');
 A('ringE','Ring · East',[50,-35,60,36],[55,0,0,0],'con');
 A('ringS','Ring · South',[-20,25,50,36],[10,30,-Math.PI/2,0],'con');
 A('courtyard','Courtyard',[-20,-25,50,25],[-12,0,-Math.PI/2,0],'con',{out:1,y0:-3});
 A('hallA','Hall A · Main Stage',[-30,-82,20,-35],[-26,-38,0,0],'stage',{y1:12});
 A('backstage','Backstage',[-26,-90,16,-82],[-10,-84,0,1.3],'stage',{hide:1});
 A('hallB','Hall B',[23,-62,48,-35],[35,-37,0,0],'stage');
 A('vendor','Vendor Hall',[48,-82,118,-35],[55,-38,0,0],'vendor');
 A('villagerow','Village Row',[60,-2,122,8],[64,3,-Math.PI/2,0],'con');
 A('lockpick','Lockpick Village',[60,-35,78,-2],[69,-4,0,0],'lock');
 A('ctf','CTF Arena',[78,-35,108,-2],[88,-4,0,0],'ctf');
 A('soc','Blue Team SOC',[108,-35,122,-2],[115,-4,0,0],'soc');
 A('carhack','Car Hacking Village',[60,8,80,36],[70,10,Math.PI,0],'con');
 A('ics','ICS Village',[80,8,100,36],[90,10,Math.PI,0],'con');
 A('soceng','Social Engineering Village',[100,8,122,36],[111,10,Math.PI,0],'con');
 A('food','Food Court',[26,8,50,25],[38,23,0,0],'con');
 A('cosplay','Cosplay Hall',[10,36,45,66],[27,38.5,Math.PI,0],'cos');
 A('lounge','Chill-out Lounge',[46,36,62,54],[55,38,Math.PI,0],'chill');
 A('naps','Nap pods',[46,54,62,66],[54,56,Math.PI,0],'chill');
 A('security','Security Office',[-45,-40,-30,-25],[-32,-30,Math.PI/2,0],'con');
 A('mdf','Network closet',[23,-72,33,-62],[24.5,-67,-Math.PI/2,0],'con');
 A('service','Service corridor',[-45,-96,125,-90],[21.5,-93,0,0],'con',{hide:0});
 A('stafffw','Staff corridor',[-45,-90,-37,-40],[-41,-45,0,0],'con',{sub:1});
 A('staffc','Staff corridor',[20,-90,23,-35],[21.5,-38,0,0],'con',{sub:1});
 A('dock','Kitchen & Loading Dock',[125,-100,152,-50],[128,-93,-Math.PI/2,0],'con');
 A('gallery','Gallery Ring',[-30,-35,60,36],[-22.5,0,0,L1],'con',{y0:4,y1:10});
 A('skybridge','Skybridge',[-45,-24,-25,-20],[-30,-22,Math.PI/2,L1],'lobby',{y0:4,y1:10,sub:1});
 A('hotelL1','Hotel · Level 1',[-85,-24,-45,-10],[-50,-22,Math.PI/2,L1],'lobby',{y0:4,y1:10});
 A('mezz','Lobby Mezzanine',[-85,-10,-45,-4],[-56,-7,Math.PI,L1],'lobby',{y0:4,y1:10,sub:1});
 A('meeting','Meeting rooms',[-85,-40,-62,-24],[-73,-26,0,L1],'lobby',{y0:4,y1:10});
 A('gym','Gym',[-85,-20,-62,-10],[-64,-15,Math.PI/2,L1],'lobby',{y0:4,y1:10});
 A('lumenlounge','The Lumen Lounge',[-62,-40,-45,-24],[-57,-26,0,L1],'lobby',{y0:4,y1:10});
 A('fcterrace','Food Court Terrace',[26,8,55,25],[48,17,Math.PI/2,L1],'con',{y0:4,y1:10,sub:1,out:1});
 A('vrL1','Village Row · Level 1',[60,-2,122,8],[63,3,-Math.PI/2,L1],'con',{y0:4,y1:10});
 A('workshopA','Workshop A',[60,-35,76,-2],[68,-4,0,L1],'con',{y0:4,y1:10});
 A('workshop','Workshop B',[76,-35,92,-2],[84,-4,0,L1],'con',{y0:4,y1:10});
 A('hwv','Hardware Hacking Village',[92,-35,122,-2],[106,-4,0,L1],'con',{y0:4,y1:10});
 A('creator','Creator Corner',[60,8,76,36],[68,10,Math.PI,L1],'stream',{y0:4,y1:10});
 A('arcade','Retro Arcade',[76,8,92,36],[84,10,Math.PI,L1],'con',{y0:4,y1:10});
 A('conops','Con Ops',[92,8,106,36],[99,10,Math.PI,L1],'con',{y0:4,y1:10});
 A('press','Press room',[106,8,114,36],[110,10,Math.PI,L1],'con',{y0:4,y1:10});
 A('speakers','Speaker lounge',[114,8,122,36],[118,10,Math.PI,L1],'con',{y0:4,y1:10});
 A('quiet','Quiet room',[46,36,62,50],[52,38,Math.PI,L1],'chill',{y0:4,y1:10});
 A('basement','Hotel basement',[-110,12,-85,30],[-90,22,-Math.PI/2,BY],'lobby',{y0:-7,y1:-2,hide:1});
 A('carpark','Car park',[-85,-8,-25,60],[-80,22,Math.PI/2,BY],'con',{y0:-7,y1:-2});
 A('noc','Network Operations Centre',[-25,-8,0,14],[-22,3,-Math.PI/2,BY],'soc',{y0:-7,y1:-2});
 A('plant','Plant Room & Laundry',[-110,-40,-85,12],[-92,8,0,BY],'con',{y0:-7,y1:-2});
 A('tunnel','Service tunnel',[-96,-104,150,-40],[-93,-44,0,BY],'con',{y0:-7,y1:-2});
 A('conroof','Convention Centre roof',[48,-82,124,36],[116,-53,Math.PI/2,RFY],'roof',{y0:10,y1:20,out:1,fog:[.1,.08,.18],fr:[60,320]});
}
