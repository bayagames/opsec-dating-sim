/* ============ HALCYON TOWER: 13th floor + hotel roof ============ */
/* A square corridor loop around a lift core, ~24 rooms, fire stairs at both ends, a window at each
   corridor end. Roof: public pool terrace (west) and, behind a fence, the plant deck (east). */
const TOP=3.6;
const F13ROOMS=[];
function buildTower(){
 region('f13',{fog:[.1,.06,.08],fr:[8,60]});G.regions.f13.amb=[.36,.32,.34];
 const D=door,mr=o=>room(o),W=wallLine;
 const nb=i=>212+i*16/3,sb=i=>212+i*5.2;
 // doors that are real openings
 D('h',-12,273.3,1.2,2.3);D('h',12,261.4,1,2.3);D('h',12,266,1,2.3);D('v',220,0,1.4,2.3);D('h',8,216,1.4,2.3,TOP);D('v',268,0,1.4,2.3);D('v',270.67,-13.6,1.2,2.3,TOP);D('v',248,0,2,2.4,TOP);
 gap('h',-8,222,4,3);gap('h',-8,266,4,3);gap('h',8,222,4,3);gap('h',8,266,4,3);
 // corridors
 mr({x0:212,z0:-12,x1:276,z1:-8,h:3,fl:MT.carpetHotel,wa:MT.wallHotel,sides:'nwe',n:'13th floor',mc:'#5a2a3a'});
 mr({x0:212,z0:8,x1:276,z1:12,h:3,fl:MT.carpetHotel,wa:MT.wallHotel,sides:'swe',n:'',mc:'#5a2a3a'});
 mr({x0:220,z0:-8,x1:224,z1:8,h:3,fl:MT.carpetHotel,wa:MT.wallHotel,sides:'',n:'',mc:'#5a2a3a'});
 mr({x0:264,z0:-8,x1:268,z1:8,h:3,fl:MT.carpetHotel,wa:MT.wallHotel,sides:'',n:'',mc:'#5a2a3a'});
 for(const[z,d]of[[-10,'e'],[10,'e']]){panel(212.21,.9,z,3,1.5,'e',MT.cityview);panel(275.79,.9,z,3,1.5,'w',MT.cityview)}
 // the lift core
 box(224,0,-8,264,3,8,{side:MT.wallHotel,top:MT.plain('#3a2a2a')});
 for(let i=0;i<4;i++){const x=239+i*2.4;panel(x,0,-8.02,1.5,2.3,'n',MT.elev);panel(x,0,8.02,1.5,2.3,'s',MT.elev);box(x+.8,1.2,-8.06,x+.9,1.35,-8.01,MT.glow('#ffd166',2),{col:false})}
 panel(242.6,2.45,-8.03,4,.35,'n',sign('LIFTS · LOBBY · LEVEL 1','#ffe0a0','#3a2a2a',256,48));
 box(228,0,-8.6,229.4,1.6,-8,MT.metal);panel(228.7,1.62,-8.62,1,.3,'n',sign('ICE','#7cc4ff','#2a2a34',128,64));
 box(231,0,8,233,2,8.7,MT.gloss('#1a2a5a'));panel(232,.1,8.71,1.8,1.8,'s',MT.vend);
 box(249,0,9.2,250.4,1.1,10.4,MT.plain('#e9e3da'));box(249.1,1.1,9.3,250.3,1.3,10.3,MT.linen,{col:false});box(249,0,9.2,249.05,1.1,10.4,MT.chrome,{col:false});
 for(let x=216;x<276;x+=6){lightPanel(x,3,-10,.8,.8,'#ffe8c0',6,.65);lightPanel(x,3,10,.8,.8,'#ffe8c0',6,.65)}lightPanel(222,3,0,.8,.8,'#ffe8c0',6,.6);lightPanel(266,3,0,.8,.8,'#ffe8c0',6,.6);
 // north row: 1301..1311 + housekeeping (NE)
 for(let i=0;i<12;i++){const x0=nb(i),x1=nb(i+1),cx=(x0+x1)/2,num=1301+i;F13ROOMS.push({num,x:cx,z:-12,side:'n'});
  if(i===11){panel(cx,2.35,-11.79,1.2,.25,'s',sign('HOUSEKEEPING','#1b1026','#d8b060',256,48));continue}
  panel(cx,0,-11.79,1,2.2,'s',MT.door);panel(cx,2.3,-11.78,.5,.25,'s',sign(String(num),'#1b1026',num===1309||num===1303?'#ffd166':'#d8b060',128,64));}
 // south row: 1327..1336, then 1337 on the corner
 for(let i=0;i<10;i++){const x0=sb(i),x1=sb(i+1),cx=(x0+x1)/2,num=1327+i;F13ROOMS.push({num,x:cx,z:12,side:'s'});
  if(num!==1336){panel(cx,0,11.79,1,2.2,'n',MT.door)}panel(cx,2.3,11.78,.5,.25,'n',sign(String(num),'#1b1026','#d8b060',128,64))}
 panel(266,2.3,11.78,.5,.25,'n',sign('1337','#1b1026','#ffd166',128,64));
 // Kit's door (1309) and Priya's (1303): a few details
 box(nb(8)+2.4,1.05,-11.78,nb(8)+2.5,1.25,-11.7,MT.plain('#2bf0ff'),{col:false});
 box(nb(2)+2.45,.95,-11.8,nb(2)+2.75,1.35,-11.62,MT.plain('#2a2a30'),{col:false});box(nb(2)+2.6,1.33,-11.72,nb(2)+2.62,1.42,-11.7,MT.plain('#888'),{col:false});
 // fire stairs west (up to the public roof)
 mr({x0:212,z0:-8,x1:220,z1:8,h:7.6,nofloor:1,fl:MT.concrete,wa:MT.concrete,n:'Fire stairs',mc:'#4a4a5a'});
 floorQ(212,-8,220,-6,0,MT.concrete);surf(212,-8,220,-6,0);floorQ(216.5,-6,220,4,0,MT.concrete);surf(216.5,-6,220,4,0);
 stairs(212.4,-6,216.5,4,0,TOP,'z+',MT.concrete,{nose:MT.plain('#ffd166')});railing(216.5,-6,216.5,4,0,{y2:TOP,m:MT.plain('#ffd166')});
 slab(212.2,4,219.8,7.8,TOP,.3,MT.concrete);floorQ(212.2,4,219.8,7.8,0,MT.concrete);
 panel(219.79,1.2,-2,1.4,.35,'w',sign('ROOF ↑','#ff5d73','#3a3a44',256,64));panel(216,TOP+2.5,7.79,1.6,.4,'n',sign('ROOF TERRACE','#ff5d73','#3a3a44',256,64));
 addLight(216,2.6,-2,[1,.95,.85],8,1);addLight(216,6.4,5,[1,.95,.85],7,1);
 // fire stairs east: alarmed
 mr({x0:268,z0:-8,x1:276,z1:8,h:3,fl:MT.concrete,wa:MT.concrete,n:'',mc:'#4a4a5a'});panel(268.21,2.4,0,2,.4,'e',sign('ALARMED · EMERGENCY ONLY','#ff5d73','#3a3a44',256,48));
 // housekeeping closet: service stairs up to the plant deck (how Mira gets up there)
 const hx0=nb(11);mr({x0:hx0,z0:-22,x1:276,z1:-12,h:7.6,nofloor:1,fl:MT.concrete,wa:MT.wallPale,n:'Housekeeping',mc:'#3a3a44'});
 floorQ(hx0,-22,276,-21,0,MT.concrete);surf(hx0,-22,276,-21,0);floorQ(hx0,-21,272,-12,0,MT.concrete);surf(hx0,-21,272,-12,0);floorQ(272,-15,276,-12,0,MT.concrete);surf(272,-15,276,-12,0);
 stairs(272,-21,275.8,-15,0,TOP,'z+',MT.concrete);slab(hx0+.2,-15,275.8,-12.2,TOP,.3,MT.concrete);railing(272,-21,272,-15,0,{y2:TOP,m:MT.metal});
 for(let i=0;i<3;i++)box(hx0+.3,0,-21.7+i*1.6,hx0+1,1.9,-20.4+i*1.6,MT.plain('#e9e3da'));box(hx0+1.2,0,-14,hx0+2.4,1.1,-12.6,MT.plain('#5a7a9a'));addLight(273,2.6,-17,[1,.95,.9],7,.9);addLight(273,6.4,-13,[1,.95,.9],6,.9);
 // 1336: the party that never stops
 mr({x0:sb(9),z0:12,x1:264,z1:22,h:3,fl:MT.carpetGrey,wa:MT.wallHotel,n:'1336',mc:'#4a1a4a'});
 box(sb(9)+.3,0,18,263.7,.55,21.8,MT.linen);box(sb(9)+.2,0,13,sb(9)+1.4,.8,15,MT.plain('#2a2a30'));for(let i=0;i<6;i++)box(sb(9)+.4+i*.3,.8,13.3,sb(9)+.6+i*.3,1.1,13.5,MT.plain(['#ffd166','#8affc1','#ff5d73'][i%3]),{col:false});
 for(let i=0;i<8;i++)box(sb(9)+.4+i*.6,.01,15.5,sb(9)+.8+i*.6,.06,15.8,MT.plain('#c9a46a'),{col:false});addLight(261,2.4,15,[1,.3,.8],7,1.1);addLight(262,2.4,19,[.3,.8,1],6,1);
 box(263.8,1,15,263.9,2,17,MT.glow('#ff5fb0',1.6),{col:false});
 // ROOM 1337: corner room, two windows, bathroom, seating area for Night 3
 mr({x0:264,z0:12,x1:276,z1:22,h:3,fl:MT.carpetGrey,wa:MT.wallHotel,n:'Room 1337',mc:'#5a4a3a'});
 panel(275.79,.8,17,5,1.8,'w',MT.cityview);panel(271,.8,21.79,5,1.8,'n',MT.cityview);
 box(271.6,0,12.4,275.8,.55,15.8,MT.linen);box(275.6,0,12.3,275.8,1.2,15.9,MT.woodDark);box(274.4,.55,12.7,275.5,.68,15.5,MT.plain('#ffffff'),{col:false});
 box(275.2,0,16,275.8,.55,16.6,MT.woodDark);box(275.4,.55,16.2,275.6,.75,16.4,MT.glow('#ffd98a'),{col:false});
 box(264.2,0,17,268,3,17.15,MT.wallPale);box(267.85,0,17,268,3,20.3,MT.wallPale);floorQ(264.2,17.15,267.85,21.8,.01,MT.tile);
 box(264.3,0,19.4,265.9,.55,21.7,MT.plain('#f4f4f8'));quad([264.5,.5,21.5],[265.7,.5,21.5],[265.7,.5,19.6],[264.5,.5,19.6],MT.water,1,1);box(267,0,20.6,267.7,.85,21.7,MT.plain('#f4f4f8'));
 sofa(271.5,19.6,2.6,'s','#6a5a8a');for(const x of[269.2,273.8]){box(x-.45,0,17.2,x+.45,.45,18.1,MT.fabric('#c9a46a'));box(x-.45,.45,17.2,x+.45,.85,17.4,MT.fabric('#c9a46a'),{col:false})}table(271.5,18.1,1.2,.7,MT.woodDark,.42);
 table(269.5,12.7,2,.8,MT.woodDark);screen(269.5,.78,12.38,.5,.32,'s',MT.code);chair(269.5,13.6,'s',MT.plain('#3a3a4a'));
 box(264.4,0,12.3,265.3,.85,13.2,MT.plain('#2a2a30'));panel(264.85,.2,13.21,.6,.5,'s',sign('MINIBAR','#ffd166','#2a2a30',128,64));
 addLight(270,2.6,15,[1,.85,.65],8,1);addLight(266,2.6,19,[.9,.95,1],4,.7);addLight(272,2.4,19.5,[1,.8,.6],6,.8);
 /* ---------------- roof ---------------- */
 const rf=(a,b,c,d)=>{floorQ(a,b,c,d,TOP,MT.gravel);surf(a,b,c,d,TOP)};
 rf(212,-22,hx0,-8);rf(hx0,-12,276,-8);rf(220,-8,276,8);rf(212,8,276,22);
 for(const[a,b,c,d]of[[211.6,-22.4,276.4,-22],[211.6,22,276.4,22.4],[211.6,-22,212,22],[276,-22,276.4,22]])box(a,TOP,b,c,TOP+1.1,d,MT.concrete);
 // fence between the public terrace and the plant deck, with the maintenance door
 for(const[a,b]of[[-22,-1],[1,22]]){box(247.97,TOP,a,248.03,TOP+2.4,b,mt('white','#9a9aa8',.5,0,{glass:1}));for(let z=a;z<=b;z+=2)box(247.94,TOP,z-.04,248.06,TOP+2.4,z+.04,MT.metal,{col:false});box(247.94,TOP+2.35,a,248.06,TOP+2.45,b,MT.metal,{col:false})}
 for(const z of[-1.05,1.05])box(247.9,TOP,z-.06,248.1,TOP+2.6,z+.06,MT.metal);panel(248.11,TOP+2.6,0,2.2,.35,'e',sign('MAINTENANCE · STAFF ONLY','#ff5d73','#3a3a44',256,48));
 // public half: pool terrace, bar, loungers, string lights, telescope
 floorQ(222,-18,238,-6,TOP+.02,MT.water);box(221.6,TOP,-18.4,238.4,TOP+.25,-18,MT.tile);box(221.6,TOP,-6,238.4,TOP+.25,-5.6,MT.tile);box(221.6,TOP,-18,222,TOP+.25,-6,MT.tile);box(238,TOP,-18,238.4,TOP+.25,-6,MT.tile);colBox(222,-18,238,-6,TOP,TOP+1);
 for(let i=0;i<4;i++)addLight(226+i*4,TOP+.6,-12,[.4,.8,1],6,.7);
 for(let i=0;i<5;i++){const x=223+i*3.4;box(x-.5,TOP,-3.8,x+.5,TOP+.4,-1.8,MT.plain('#e9e3da'));box(x-.5,TOP+.4,-3.8,x+.5,TOP+.9,-3.4,MT.plain('#e9e3da'),{col:false})}
 box(214,TOP,14,222,TOP+1.1,15,{side:MT.woodDark,top:MT.plain('#3a2418')});box(214,TOP,19,222,TOP+2.4,19.6,MT.woodDark);panel(218,TOP+1.2,18.99,7,1.1,'n',MT.bottles);panel(218,TOP+2.5,19,5,.5,'n',sign('SKY BAR · OPEN TILL LATE','#ff9a5c','#241510',512,64));
 for(const[x,z]of[[226,12],[232,16],[238,12],[230,6]]){table(x,z,1.1,1.1,MT.plain('#2a2026'),.76,TOP);chair(x-.8,z,'e',MT.plain('#c9a46a'),TOP);chair(x+.8,z,'w',MT.plain('#c9a46a'),TOP)}
 for(let x=214;x<=246;x+=4){box(x-.05,TOP,-20,x+.05,TOP+3.2,-19.9,MT.plain('#222'),{col:false});box(x-.05,TOP,20,x+.05,TOP+3.2,20.1,MT.plain('#222'),{col:false});
  for(let z=-19;z<20;z+=1.6)box(x-.07,TOP+3.05+Math.sin(z*.4)*.12,z-.05,x+.07,TOP+3.15+Math.sin(z*.4)*.12,z+.05,MT.glow('#ffd166',2.2),{col:false});addLight(x,TOP+2.6,0,[1,.8,.45],9,.5)}
 box(243.9,TOP,17.9,244.1,TOP+1.2,18.1,MT.metal);box(243.7,TOP+1.2,17.7,245.1,TOP+1.5,18.3,MT.plain('#2a2a34'),{col:false});
 for(const[x,z]of[[214,-20],[246,-20],[214,20],[246,8]])plant(x,z,1.1,TOP);
 // plant deck: air-con units, the water tank, Mira's spot
 for(const[x,z,w,d]of[[252,-20,4,3],[258,-20,3,3],[252,8,5,3],[262,14,3,4],[256,-10,4,3]])box(x,TOP,z,x+w,TOP+1.6,z+d,{side:MT.metal,top:MT.fan});
 {const cx=266,cz=8;for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s2=Math.sin(a);box(cx+c*1.7-.75,TOP,cz+s2*1.7-.75,cx+c*1.7+.75,TOP+4.2,cz+s2*1.7+.75,MT.metal)}box(cx-2.4,TOP+4.2,cz-2.4,cx+2.4,TOP+4.5,cz+2.4,MT.plain('#5a5a6a'),{col:false})}
 box(270,TOP,-4,271.6,TOP+.6,-2.8,MT.plain('#5a4a3a'));box(269.6,TOP,-3.6,272.4,TOP+.03,-1.4,MT.fabric('#3a3a5a'),{col:false});
 box(258,TOP,-1,258.2,TOP+7,-.8,MT.metal);box(257.6,TOP+7,-1.4,258.6,TOP+7.2,-.4,MT.glow('#ff5d73'),{col:false});
 for(let i=0;i<4;i++)addLight(252+i*7,TOP+3,-6+(i%2)*10,[.5,.5,.9],12,.4);
 // stair houses poke above the roof
 roofTop(212,-8,220,8,7.62,MT.concrete);roofTop(hx0,-22,276,-12,7.62,MT.concrete);
 skyline(244,0,100,150,52,-60);
 (MAPR.f13=MAPR.f13||[]).push({x0:212,z0:-22,x1:248,z1:22,y:TOP,n:'Pool Terrace',c:'#2a2a4a'},{x0:248,z0:-22,x1:276,z1:22,y:TOP,n:'Plant Deck',c:'#2a3a3a'},{x0:212,z0:-8,x1:220,z1:8,y:TOP,n:'',c:'#4a4a5a'},{x0:hx0,z0:-22,x1:276,z1:-12,y:TOP,n:'',c:'#4a4a5a'});
 for(let i=0;i<11;i++)(MAPR.f13=MAPR.f13||[]).push({x0:nb(i),z0:-22,x1:nb(i+1),z1:-12,y:0,n:'',c:'#3a2a30'});for(let i=0;i<9;i++)MAPR.f13.push({x0:sb(i),z0:12,x1:sb(i+1),z1:22,y:0,n:'',c:'#3a2a30'});
 MAPR.f13.push({x0:224,z0:-8,x1:264,z1:8,y:0,n:'Lifts',c:'#2a2026'});
 const A=(k,n,r,sp,bg,o)=>area(k,n,'f13',r,sp,bg,o);
 A('corridor','13th floor',[212,-12,276,12],[243,-10,0,0],'hotel',{y0:-1,y1:3});
 A('room1337','Room 1337',[264,12,276,22],[266,13.5,Math.PI,0],'hotel',{y0:-1,y1:3,sub:1});
 A('room1336','Room 1336',[sb(9),12,264,22],[261.4,13.5,Math.PI,0],'hotel',{y0:-1,y1:3,sub:1});
 A('housekeeping','Housekeeping',[hx0,-22,276,-12],[273.3,-13.2,0,0],'hotel',{y0:-1,y1:3,sub:1});
 A('stairwell','Fire stairs',[212,-8,220,8],[218.5,-4,Math.PI/2,0],'hotel',{y0:-1,y1:8,hide:1,sub:1});
 A('roof','Hotel Roof · Pool Terrace',[212,-22,248,22],[216,10,Math.PI,TOP],'roof',{y0:3.3,y1:14,out:1,fog:[.1,.08,.18],fr:[60,320]});
 A('plantdeck','Hotel Roof · Plant Deck',[248,-22,276,22],[252,0,-Math.PI/2,TOP],'roof',{y0:3.3,y1:14,out:1,fog:[.1,.08,.18],fr:[60,320],sub:1});
}
