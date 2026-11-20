/* ============ BRINDLE & CO (the office) + CENTRAL STATION ============ */
function buildOffice(){
 region('office',{fog:[.62,.68,.78],fr:[14,60],day:1});G.regions.office.amb=[.62,.62,.66];
 const D=door,mr=o=>room(o);
 D('v',509,5,1,2.2);D('h',14,528,1,2.2);D('v',524,18,1,2.2);
 mr({x0:500,z0:0,x1:532,z1:22,h:3,fl:MT.carpetGrey,wa:MT.wallPale,ce:MT.ceil,n:'Brindle & Co',mc:'#4a4a5a'});
 for(let x=503;x<532;x+=6)panel(x,.9,.21,4.6,1.7,'s',MT.morning);
 for(let x=504;x<532;x+=6)for(const z of[5,12,19])lightPanel(x,3,z,1.2,1.2,'#f6f8ff',8,.55);
 // Linda's glass office
 mr({x0:500,z0:0,x1:509,z1:9,h:3,fl:MT.carpetGrey,wa:MT.glass,ce:MT.ceil,sides:'se',n:'',mc:'#4a4a5a'});
 table(504.5,3,2.4,1.1,MT.woodDark);screen(504.5,.78,2.6,.6,.38,'s',MT.dash);chair(504.5,4.1,'n',MT.plain('#2a2a34'));plant(501,8,1);
 panel(509.01,2.2,3,.9,.3,'e',sign('LINDA · IT & FACILITIES MANAGER','#1b1026','#e9eef5',256,48));
 // accounts: two rows of desks, and the printer that hates you
 for(const z of[7,13])for(let i=0;i<4;i++){const x=513+i*3;table(x,z,2.4,1.1,MT.plain('#e9e3da'));screen(x,.78,z-.35,.55,.35,'s',i%2?MT.dash:MT.code);chair(x,z+.9,'n',MT.plain('#3a5a8a'))}
 panel(518.5,2.4,.22,6,.5,'s',sign('ACCOUNTS · CLAIMS','#1b1026','#e9eef5',256,48));
 box(510.4,0,15.6,511.8,1,17,MT.plain('#d9d4cc'));box(510.6,1,15.9,511.6,1.15,16.7,MT.plain('#8a8a94'),{col:false});box(511.81,.8,16.2,511.82,.9,16.4,MT.glow('#ff5d73',2.4),{col:false});
 panel(511.1,1.5,15.58,1.6,.3,'n',sign('PC LOAD LETTER','#ff5d73','#1b1026',256,48));
 // your helpdesk corner
 table(528,3,4,1.2,MT.woodDark);screen(527.2,.78,2.55,.6,.38,'s',MT.code);screen(528.8,.78,2.55,.6,.38,'s',mt(signTex('TICKETS: 47','#8affc1','#07110d',256,128),0,1,1));chair(528,4.2,'n',MT.plain('#c0304a'));
 box(526.2,.76,3.2,526.6,.86,3.5,MT.plain('#c0304a'),{col:false});panel(531.79,1.6,3,3,.6,'w',sign('IT HELPDESK · HAVE YOU TRIED','#8affc1','#07110d',512,64));
 panel(531.79,1,7,.8,1.05,'w',MT.poster(4));plant(531,9,.8);
 // kitchenette + meeting room
 box(500.2,0,15,507,1,15.8,{side:MT.plain('#d9d4cc'),top:MT.plain('#f4f4f8')});box(500.2,0,15.8,501.2,1.9,17,MT.chrome);box(503,1,15.1,503.4,1.3,15.4,MT.plain('#2a2a30'),{col:false});
 panel(504,1.4,15.81,2,.4,'n',mt(signTex('WHO TOOK MY YOGHURT','#1b1026','#ffd166',256,64),0,1,0,{r:.8}));box(506,0,19,507,1.6,20,MT.plain('#7cc4ff'));
 mr({x0:524,z0:14,x1:532,z1:22,h:3,fl:MT.carpetGrey,wa:MT.glass,ce:MT.ceil,sides:'nw',n:'',mc:'#4a4a5a'});
 table(528,18,4,1.6,MT.woodDark);for(let i=0;i<3;i++){chair(526.6+i*1.4,16.8,'s',MT.plain('#3a3a4a'));chair(526.6+i*1.4,19.2,'n',MT.plain('#3a3a4a'))}panel(531.79,1,18,3,1.4,'w',MT.slides);
 // exit to the lifts
 panel(516,0,21.79,1.6,2.4,'n',MT.elev);panel(516,2.5,21.79,2,.35,'n',sign('LIFTS · EXIT','#1b1026','#e9eef5',256,48));
 panel(520,1.2,21.79,1.2,1.4,'n',mt(signTex('TEAMWORK','#1b1026','#ffd166',256,128),0,1,0,{r:.8}));
 const A=(k,n,r,sp,bg,o)=>area(k,n,'office',r,sp,bg,o);
 A('office','Brindle & Co · 3rd floor',[500,0,532,22],[516,20,0,0],'office');
 A('lindaoffice','Linda\'s office',[500,0,509,9],[507,5,Math.PI/2,0],'office',{sub:1});
}
function buildStation(){
 region('station',{fog:[.62,.68,.78],fr:[30,140],day:1});G.regions.station.amb=[.5,.5,.56];
 const D=door,mr=o=>room(o);
  // concourse
 mr({x0:700,z0:20,x1:772,z1:44,h:12,fl:MT.tile,wa:MT.brick,ce:MT.glass,sides:'sew',n:'Concourse',mc:'#4a4a5a'});
 for(let x=702;x<772;x+=6)box(x,11.6,20,x+.3,12,44,MT.metal,{col:false});
 box(722,6,23.6,750,9,24.4,MT.plain('#14121e'));panel(736,6.2,24.41,27,2.6,'s',MT.board);panel(736,6.2,23.59,27,2.6,'n',MT.board);
 box(735.9,9,23.9,736.1,12,24.1,MT.metal,{col:false});
 for(let i=0;i<3;i++)panel(733+i*3,0,43.79,2.6,3.2,'n',mt('white','#bfe0f4',.5,1,{k:.5}));box(733,7.6,43.7,739,9.4,44,MT.plain('#f6eefc'),{col:false});panel(736,7.7,43.69,5.6,1.6,'n',sign('CENTRAL','#1b1026','#f6eefc',256,72));
 for(let i=0;i<4;i++){box(701,0,28+i*3,702,1.8,29.6+i*3,MT.gloss('#2a3a6a'));box(702.01,1,28.2+i*3,702.02,1.6,29.4+i*3,MT.glow('#7cc4ff',1.3),{col:false})}
 panel(700.22,2.4,32.5,4,.5,'e',sign('TICKETS','#1b1026','#f6eefc',256,48));
 box(760,0,30,770,2.8,36,MT.plain('#3a2418'));panel(759.99,1.6,33,9,1,'w',sign('PASTY PALACE · HOT DRINKS','#ffd9a0','#3a2418',512,64));box(759.2,0,30.4,760,1.1,35.6,MT.plain('#c9a46a'));
 for(const[x,z]of[[715,34],[725,38],[747,38],[750,30]]){box(x-1.5,0,z-.35,x+1.5,.45,z+.35,MT.woodDark);box(x-1.5,.45,z+.25,x+1.5,.9,z+.35,MT.woodDark,{col:false})}
 for(const[x,z]of[[712,26],[760,26],[712,42],[760,42]])lightPanel(x,12,z,3,3,'#f4f8ff',18,.32);addLight(736,5,32,[1,.95,.9],16,.4);
 // ticket barriers
 for(let i=0;i<9;i++){const x=716+i*5;if(i===4)continue;box(x-.3,0,19.6,x+.3,1.1,20.6,MT.chrome);box(x-.25,1.1,19.7,x+.25,1.15,20.5,MT.glow(i%2?'#8affc1':'#ffd166',1.6),{col:false})}
 colBox(700,19.6,713,20.6,0,1.2);colBox(759,19.6,772,20.6,0,1.2);
 // platform 4 + track + train
 mr({x0:700,z0:6,x1:772,z1:20,h:7,fl:MT.concrete,wa:MT.brick,ce:MT.ceilDark,sides:'ew',n:'Platform 4',mc:'#3a3a44'});
 floorQ(700,6.4,772,6.8,.01,MT.plain('#ffd166'));
 for(let x=704;x<772;x+=12){box(x-.15,0,15,x+.15,7,15.3,MT.metal);panel(x,4.6,15.31,1.6,1,'s',sign('4','#1b1026','#f6eefc',128,96))}
 for(let x=706;x<772;x+=12)lightPanel(x,7,10,4,.6,'#f4f8ff',12,.7);
 box(700,7,19.85,772,12,20.15,MT.brick,{col:false});box(700,-1.2,-.3,772,7,0,MT.brick,{col:false});floorQ(700,0,772,6,-1.2,MT.gravel);for(const z of[1.6,4.4])box(700,-1.2,z-.05,772,-1.05,z+.05,MT.chrome,{col:false});box(699.8,-1.2,6,772,0,6.2,MT.concrete);colBox(700,0,772,6,-2,6);
 // the train: floor level with the platform, one solid body (no see-through seams), sliding doors on the carriage seams
 box(704,-.95,1,768,3.4,5.7,{side:MT.plain('#c9ced8'),top:MT.plain('#8a8a94')},{col:false});for(let i=0;i<4;i++)panel(712+i*16,-.4,5.705,16,3.8,'s',MT.trainside);box(704,3.4,1.1,768,3.75,5.6,{side:MT.plain('#9a9ea8'),top:MT.plain('#5a5a64')},{col:false});
 box(704,-.95,5.7,768,-.4,5.72,MT.plain('#1a1a22'),{col:false});
 for(const x of[720,752,708.6,763.4])panel(x,.05,5.715,1.5,2.3,'s',MT.traindoor);
 // the boarding door at 736 stands open: the carriage inside, warm light, a yellow frame and a green "doors open" bar
 panel(736,.05,5.725,1.5,2.3,'s',MT.trainin);
 for(const x of[735.2,736.75])box(x,.05,5.71,x+.05,2.38,5.76,MT.plain('#ffd166'),{col:false});box(735.2,2.33,5.71,736.8,2.38,5.76,MT.plain('#ffd166'),{col:false});
 box(735.3,2.48,5.71,736.7,2.56,5.76,MT.glow('#8affc1',1.1),{col:false});addLight(736,1.9,6.2,[1,.88,.7],4.5,.6);
 box(703.6,-.95,1.1,704,3.3,5.6,MT.plain('#ff5d73'),{col:false});
 box(732,5.1,6.15,740,5.95,6.2,MT.plain('#1b1026'),{col:false});panel(736,5.2,6.21,8,.7,'s',sign('PLATFORM 4 · CONFERENCE QUARTER','#ffd166','#1b1026',512,64));for(const x of[732.5,739.5])box(x-.02,5.95,6.16,x+.02,7,6.2,MT.metal,{col:false});
 (MAPR.station=MAPR.station||[]).push({x0:700,z0:0,x1:772,z1:6,y:0,n:'',c:'#2a2a30'});
 skyline(736,22,120,190,30,-6);
 const A=(k,n,r,sp,bg,o)=>area(k,n,'station',r,sp,bg,o);
 A('station','Central Station',[700,20,772,44],[736,41,0,0],'train');
 A('platform','Platform 4',[700,0,772,20],[736,9,0,0],'train');
}
