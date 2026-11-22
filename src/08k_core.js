/* ============ THE CON CORE: the Foyer, the Link to the hotel, Hall C, the Ring, the courtyard ============ */
/* Foyer (x -110..-64, z -24..60): a three-storey glass atrium. Its west wall looks across the lane and the hotel's
   garden at the Halcyon; the Link (x -128..-110, z -22..-12), a glazed two-storey bridge building, is the one way
   through to the hotel: ground floor from the Promenade, the Skybridge above from the hotel mezzanine to the Foyer's
   north gallery. Registration on the west, the cloakroom and the lifts on the north wall, the info desk, the Lumen
   mega-booth, escalators up the east side to the Level 1 and Level 2 galleries. Hall C (x -110..-64, z -64..-24,
   double height, the Badge Lab over it) opens off the Foyer and Ring West. The Ring is a 14 m concourse round the
   open courtyard (x -50..40, z -50..20): double height at ground level with a 4 m balcony on its outer walls at
   Level 1, and a floor of its own at Level 2 with glass on the courtyard side. Hall A opens off Ring North. */
function buildCore(){
 const D=door,W=wallLine,GL=MT.glass,TZ=MT.terr,WC=MT.wallCon,CC=MT.carpetCon,CG=MT.carpetGallery,CH=MT.chrome;
 const mr=(x0,z0,x1,z1,y,n,c)=>(MAPR.con=MAPR.con||[]).push({x0,z0,x1,z1,y,n,c:c||'#5a2a4a'});
 /* ---------- doors ---------- */
 gap('h',60,-88,12,4);D('h',68,-88,6,3);                                   // vestibule: inner gap, outer doors
 D('v',-64,40,4,3.2);D('v',-64,54,4,3.2);                                  // foyer -> food court
 for(const c of[-10,20])D('h',-50,c,3,3);for(const c of[-30,10])D('h',20,c,3,3);D('v',-50,0,3,3);for(const c of[-20,5])D('v',40,c,3,3); // ring <-> courtyard glass doors
 D('v',-50,-37,3,3);                                                      // ring west <-> courtyard
 D('v',-110,-17,6,3.2);D('v',-110,-17,4,3,L1);                             // the Link and the Skybridge into the Foyer
 D('h',-24,-96,4,3.4);D('h',-24,-78,4,3.4);D('v',-64,-44,4,3.4);D('v',-64,-30,4,3.4);D('v',-64,-37,3,3,L2); // Hall C (Foyer, Ring West), the Badge Lab
 D('h',-64,-55,4,3.6);D('h',-64,45,4,3.6);D('h',-64,-62,1.6,2.4);D('h',-64,53,2,2.4); // hall A side aisles; staff corridors
 for(const c of[-30,-5,20]){D('h',-64,c,3,3,L1);D('h',-64,c,3,3,L2)}        // hall A at levels 1 and 2
 D('v',56,-38,8,4.5);D('v',56,-8,8,4.5);                                   // expo hall
 D('h',34,-37,6,4);D('h',34,5,6,4.5);D('h',34,35,4,3.4);D('h',34,53,3,3);    // food court, cosplay x2, chill-out
 gap('h',34,-37,20,4.4,L1);D('h',34,53,2,2.6,L1);D('h',34,-37,6,3,L2);       // food court mezzanine, quiet room, sky garden
 /* ================= FOYER ================= */
 sFloor(-110,-24,-64,60,0,TZ);sFloor(-96,60,-80,68,0,TZ);quad([-94,.012,67.5],[-82,.012,67.5],[-82,.012,61],[-94,.012,61],MT.carpetGrey,4,2);
 for(let x=-104;x<=-70;x+=11.5)floorQ(x-.08,-24,x+.08,60,.004,MT.plain('#8a8478'));for(let z=-19;z<=56;z+=12.5)floorQ(-110,z-.08,-64,z+.08,.004,MT.plain('#8a8478'));
 // the south curtain wall: 16.5 m of glass with steel fins, and the glass vestibule
 W('h',60,-110,-64,0,16.5,GL,-1);for(let x=-108;x<=-66;x+=4.6){if(x>-97&&x<-79)continue;box(x-.06,0,60.05,x+.06,16.5,60.6,CH,{col:false})}
 W('v',-96,60,68,0,4,GL,1);W('v',-80,60,68,0,4,GL,-1);W('h',68,-96,-80,0,4,GL,-1);ceilQ(-96,60,-80,68,4,MT.ceilDark);box(-96.3,4,59.8,-79.7,4.4,68.3,MT.plain('#1b1026'),{col:false});
 kSign(-88,4.42,68.31,14,.9,'s','CTRL+ALT+CON · ENTRANCE','#ff5d73','#1b1026');lightPanel(-88,4,64,4,2,'#fff4e0',9,.8);
 kSign(-88,4.5,59.78,8,.6,'n','FOYER · REGISTRATION · THE HALCYON →','#ffd166','#1b1026');
 // the west wall: glass onto the lane and the hotel garden, solid round the Link doors and behind registration, steel fins outside
 W('v',-110,-24,-4,0,L1,WC,1);W('v',-110,-4,42,0,L1,GL,1);W('v',-110,42,60,0,L1,WC,1);W('v',-110,-24,60,L1,16.5-L1,GL,1);
 for(let z=-1.5;z<=56;z+=4.6)box(-110.6,0,z-.06,-110.05,16.5,z+.06,CH,{col:false});
 kSign(-109.78,3.9,-17,6,.55,'e','THE LINK · HALCYON HOTEL','#ffe0a0','#1b1026');kSign(-109.78,L1+3.3,-17,5,.5,'e','SKYBRIDGE · HALCYON MEZZANINE','#ffe0a0','#1b1026');
 // the north wall: Hall C's doors, the lifts, the cloakroom; Level 1 runs along it as the north gallery from the Skybridge
 W('h',-24,-110,-64,0,L1,WC,-1);W('h',-24,-110,-64,L1,L2-L1,WC,-1);W('h',-24,-110,-64,L2,16.5-L2,GL,-1);
 for(const x of[-96,-78]){kSign(x,3.75,-23.78,4.6,.5,'s','HALL C · TRACK 3','#7cc4ff','#1b1026');box(x-2.2,3.4,-23.8,x+2.2,3.52,-23.7,MT.glow('#7cc4ff',1.1),{col:false})}
 {box(-92,0,-23.8,-82,2.6,-23.2,MT.woodDark);for(let i=0;i<14;i++)box(-91.6+i*.7,1.1,-23.2,-91.1+i*.7,1.9,-22.8,MT.fabric(['#2a2a34','#3a4a5a','#5a2a3a','#1b1026','#c9a46a'][i%5]),{col:false});
  box(-92,0,-21.8,-82,1.05,-21,{side:MT.plain('#7cc4ff'),top:MT.plain('#f6eefc')});kSign(-87,1.15,-20.98,6,.5,'s','CLOAKROOM · BAG DROP · £2','#1b1026','#7cc4ff');kSign(-87,2.9,-23.18,6,.55,'s','CLOAKROOM','#7cc4ff','#1b1026');
  for(const x of[-90,-84])downl(x,4.2,-22,'#fff4e8',8,.6);box(-92.2,4.2,-24,-81.8,4.35,-20.8,MT.clad,{col:false,b:1})}
 // east side: wall to the food court below Level 2, glass to the sky garden above
 W('v',-64,34,60,0,L1,WC,-1);W('v',-64,34,60,L1,L2-L1,WC,-1);W('v',-64,34,60,L2,16.5-L2,GL,-1);
 // the glass roof on a steel grid
 ceilQ(-110,-24,-64,60,16.5,GL);for(let x=-110;x<=-64;x+=5.75)box(x-.08,15.9,-24,x+.08,16.5,60,MT.plain('#2a2a34'),{col:false,b:1});for(let z=-20;z<=60;z+=8)box(-110,15.9,z-.08,-64,16.5,z+.08,MT.plain('#2a2a34'),{col:false,b:1});
 // galleries: Level 1 and 2 along the east side, an escalator landing at each, railings on every open edge
 sFloor(-72,-24,-64,60,L1,CG,[],.45,MT.ceilDark);sFloor(-82,22,-72,30,L1,CG,[],.45,MT.ceilDark);sFloor(-110,-24,-72,-14,L1,CG,[],.45,MT.ceilDark);
 sFloor(-72,-24,-64,60,L2,CG,[],.45,MT.ceilDark);sFloor(-82,4,-72,12,L2,CG,[],.45,MT.ceilDark);sCeil(-72,-24,-64,60,16.1,MT.ceilDark);
 for(const y of[L1,L2]){const lz=y===L1?[22,30]:[4,12];railing(-72,y===L1?-14:-24,-72,lz[0],y,{m:CH,glass:GL});railing(-72,lz[1],-72,60,y,{m:CH,glass:GL});railing(-82,lz[0],-82,lz[1],y,{m:CH,glass:GL});
  if(y===L1){railing(-82,30,-80,30,y,{m:CH,glass:GL});railing(-110,-14,-72,-14,y,{m:CH,glass:GL});for(let x=-106;x<-72;x+=8)downl(x,y-.45,-19,'#f4f0ff',7,.45)}else{railing(-82,4,-72,4,y,{m:CH,glass:GL});railing(-82,12,-80,12,y,{m:CH,glass:GL})}
  railing(-72,60,-64,60,y,{m:CH});for(let z=-20;z<60;z+=8)downl(-68,y-.45,z,'#f4f0ff',7,.45)}
 railing(-82,22,-80,22,L1,{m:CH,glass:GL});
 // escalators: ground -> L1 (rising north to the L1 landing), L1 -> L2 (rising north again)
 escalator(-80,30,-72,40,0,L1,'z-');escalator(-80,12,-72,22,L1,L2,'z-',{solid:false});stairShell(-80,12,-72,22,L1,L2,'z-',MT.clad,.4);
 tri([-80.02,0,40],[-80.02,L1,30],[-80.02,0,30],MT.clad,5,2);tri([-71.98,0,30],[-71.98,L1,30],[-71.98,0,40],MT.clad,5,2);
 for(const[a,b,ya,yb]of[[40,30,0,L1],[22,12,L1,L2]])kBeam([-76,ya+.9,a],[-76,yb+.9,b],.3,.12,MT.clad,[1,0,0]);
 kSign(-76,L1+3.2,40.02,6,.55,'s','↑ LEVEL 1 · WORKSHOPS · VILLAGES','#8affc1','#1b1026');kSign(-76,L2+3,22.02,6,.55,'s','↑ LEVEL 2 · HALL A BALCONY · CON OPS','#8affc1','#1b1026');
 // the Link: two storeys of glass across the lane. Ground floor: the Promenade's doors to the Foyer's. Level 1: the
 // Skybridge, the hotel mezzanine to the Foyer's north gallery. Solid on the bar terrace side below, glass above.
 {const x0=-128,x1=-110,z0=-22,z1=-12;sFloor(x0,z0,x1,z1,0,TZ);sFloor(x0,z0,x1,z1,L1,MT.carpetGrey,[],.45,MT.ceilDark);ceilQ(x0,z0,x1,z1,L2-.45,MT.ceilDark);
  W('h',z0,x0,x1,0,L1,WC,1);W('h',z0,x0,x1,L1,L2-L1,GL,1);W('h',z1,x0,x1,0,L1,GL,-1);W('h',z1,x0,x1,L1,L2-L1,GL,-1);
  box(x0+.08,L2-.45,z0-.1,x1,L2+.4,z1+.1,{side:MT.clad,top:MT.gravel},{col:false});box(x0+.08,L1-.45,z1-.06,x1,L1+.05,z1+.1,MT.clad,{col:false});box(x0+.08,L1-.45,z0-.1,x1,L1+.05,z0+.06,MT.clad,{col:false});
  quad([x0+4,.012,z1-1],[x1-4,.012,z1-1],[x1-4,.012,z0+1],[x0+4,.012,z0+1],MT.carpetGrey,4,2);
  for(const y of[0,L1]){for(let x=x0+3;x<x1;x+=4)downl(x,y===0?L1-.45:L2-.45,(z0+z1)/2,'#fff4e8',6,.45);kPlant(x0+1.4,z0+1,1.3,y,'#2a2026');kPlant(x1-1.4,z0+1,1.3,y,'#2a2026')}
  kOnWall('h',z0+.2,1,(x0+x1)/2,4,1.3,1.6,MT.mapBoard);box(-121,0,-14,-117,.45,-13.4,{side:MT.clad,top:MT.woodDark});
  kSign((x0+x1)/2,3.6,z0+.22,9,.5,'s','← HALCYON HOTEL · · · CTRL+ALT+CON →','#ffe0a0','#1b1026');kSign((x0+x1)/2,L1+2.9,z0+.22,6,.45,'s','SKYBRIDGE','#ffe0a0','#1b1026');
  mr(x0,z0,x1,z1,0,'The Link','#3a2a4a');mr(x0,z0,x1,z1,L1,'Skybridge','#3a2a4a')}
 // registration on the west wall: a long counter, badge printers, lanyard boxes, the sign, queue belts
 {const x0=-107.6;box(x0,0,44,x0+1.2,1.05,58,{side:MT.plain('#ff5d73'),top:MT.plain('#f6eefc')});box(x0+1.2,.05,44,x0+1.25,1,58,MT.plain('#1b1026'),{col:false});
  for(let i=0;i<6;i++){const z=45.5+i*2.2;kMonitor(x0+.5,1.05,z,'e',MT.dash,.4);box(x0+.15,1.05,z+.5,x0+.55,1.3,z+.9,MT.plain('#2a2a30'),{col:false});box(x0+.6,1.05,z-.8,x0+1.05,1.2,z-.4,MT.plain(['#ffd166','#8affc1','#ff5d73'][i%3]),{col:false})}
  kOnWall('v',-109.8,1,51,14,1.4,2.6,MT.wpan,2,2.6);kSign(-109.78,4.2,51,12,1.4,'e','REGISTRATION · BADGE PICKUP','#1b1026','#ffd166');
  for(let i=0;i<5;i++){const z=46+i*2.6;for(const x of[-103,-99]){box(x-.06,0,z-.06,x+.06,1,z+.06,CH,{col:false});box(x-.16,0,z-.16,x+.16,.03,z+.16,CH,{col:false})}box(-103,.88,z-.02,-99,.95,z+.02,MT.plain('#8a1e3a'),{col:false})}
}
 // registration has its own suspended ceiling (the atrium is 16 m tall): tiles on a frame hung from the roof, one tile askew,
 // and behind it a small box with a green light: the fake Wi-Fi
 {const y=4.4;for(let x=-110;x<-100.4;x+=1.2)for(let z=43;z<58.6;z+=1.2){if(Math.abs(x+105.2)<.2&&Math.abs(z-49.4)<.2)continue;box(x+.03,y,z+.03,x+1.17,y+.06,z+1.17,MT.ceil,{col:false,b:1})}
  box(-105.17,y-.14,49.43,-104.03,y-.08,50.57,MT.ceil,{col:false,b:1});box(-104.8,y-.02,49.8,-104.4,y+.06,50.2,MT.glow('#8affc1',2.4),{col:false,b:1});
  box(-110,y+.06,42.9,-100.2,y+.3,43.1,MT.clad,{col:false,b:1});box(-110,y+.06,58.6,-100.2,y+.3,58.8,MT.clad,{col:false,b:1});box(-100.4,y+.06,43,-100.2,y+.3,58.8,MT.clad,{col:false,b:1});
  for(const[x,z]of[[-108,44],[-101,44],[-108,58],[-101,58]])box(x-.015,y+.3,z-.015,x+.015,16.4,z+.015,MT.plain('#888'),{col:false});
  for(const z of[46,51,56])downl(-103,y,z,'#fff4e8',9,.7)}
 // the info desk: a round counter under a hanging ring sign
 {const cx=-88,cz=50;for(let i=0;i<12;i++){const a=i/12*Math.PI*2,b=(i+1)/12*Math.PI*2;kBeam([cx+Math.cos(a)*1.6,.55,cz+Math.sin(a)*1.6],[cx+Math.cos(b)*1.6,.55,cz+Math.sin(b)*1.6],1.1,.3,MT.plain('#7cc4ff'),[0,1,0])}
  for(let i=0;i<12;i++){const a=i/12*Math.PI*2+.13;box(cx+Math.cos(a)*1.6-.2,1.1,cz+Math.sin(a)*1.6-.2,cx+Math.cos(a)*1.6+.2,1.16,cz+Math.sin(a)*1.6+.2,MT.plain('#f6eefc'),{col:false})}
  colBox(cx-1.75,cz-1.75,cx+1.75,cz-1.35,0,1.1);colBox(cx-1.75,cz+1.35,cx+1.75,cz+1.75,0,1.1);colBox(cx-1.75,cz-1.35,cx-1.35,cz+1.35,0,1.1);colBox(cx+1.35,cz-1.35,cx+1.75,cz+1.35,0,1.1);
  for(const[d,dx,dz]of[['s',0,1.6],['n',0,-1.6],['e',1.6,0],['w',-1.6,0]])kSign(cx+dx*.982,4.6,cz+dz*.982,2.4,.55,d,'INFO','#1b1026','#7cc4ff');box(cx-.03,5.2,cz-.03,cx+.03,16.4,cz+.03,MT.plain('#2a2a34'),{col:false});
  box(cx-1.56,4.55,cz-1.56,cx+1.56,5.25,cz+1.56,MT.plain('#7cc4ff'),{col:false,nt:1});addLight(cx,3.6,cz,[.75,.88,1],10,.8)}
 // the Lumen mega-booth: a raised deck, a tower of screens, four SafeSphere demo pods, a counter, a lighting truss
 {const x0=-104,x1=-84,z0=12,z1=32,cx=(x0+x1)/2,cz=(z0+z1)/2;box(x0,0,z0,x1,.25,z1,{side:MT.plain('#0d1830'),top:MT.gloss('#16233e')},{walk:1,col:false});
  box(cx-1.6,.25,cz-1.6,cx+1.6,9,cz+1.6,MT.plain('#0d1830'));for(const[d,dx,dz]of[['s',0,1.61],['n',0,-1.61],['e',1.61,0],['w',-1.61,0]]){kSign(cx+dx,5.6,cz+dz,3,1,d,'LUMEN','#5ab4ff','#0d1830');screen(cx+dx*1.002,1.2,cz+dz*1.002,3,3.6,d,MT.lumen)}
  box(cx-2.2,9,cz-2.2,cx+2.2,9.5,cz+2.2,MT.glow('#5ab4ff',1.8),{col:false,b:1});
  for(const[x,z]of[[x0+3,z0+3],[x1-3,z0+3],[x0+3,z1-3],[x1-3,z1-3]]){box(x-.8,.25,z-.8,x+.8,2.2,z+.8,MT.gloss('#e9eef5'));box(x-.62,1,z+.8,x+.62,1.7,z+.83,MT.glow('#5ab4ff',1.3),{col:false});box(x-.85,2.2,z-.85,x+.85,2.3,z+.85,MT.glow('#5ab4ff',1.8),{col:false});box(x-.4,.25,z+.85,x+.4,.27,z+1.6,MT.plain('#5ab4ff'),{col:false})}
  box(cx-3,.25,z1-1.2,cx+3,1.3,z1-.6,{side:MT.plain('#0d1830'),top:MT.gloss('#e9eef5')});kSign(cx,.35,z1-.59,5.6,.7,'s','FREE PRIVACY! INSTALL SAFESPHERE','#5ab4ff','#0d1830');
  for(const z of[z0+.5,z1-.5])box(x0,7,z-.15,x1,7.3,z+.15,MT.metal,{col:false,b:1});for(const x of[x0+.5,x1-.5])box(x-.15,7,z0,x+.15,7.3,z1,MT.metal,{col:false,b:1});for(const x of[x0+.5,x1-.5])for(const z of[z0+.5,z1-.5])box(x-.12,.25,z-.12,x+.12,7,z+.12,MT.metal);
  for(let i=0;i<4;i++){const x=x0+3+i*4.7;box(x-.25,6.6,z0+.3,x+.25,7,z0+.7,MT.glow('#5ab4ff',2),{col:false,b:1});box(x-.25,6.6,z1-.7,x+.25,7,z1-.3,MT.glow('#5ab4ff',2),{col:false,b:1})}
  addLight(cx,6,z0+2,[.45,.7,1],14,1.1);addLight(cx,6,z1-2,[.45,.7,1],14,1.1);kSign(cx,9.6,z1-.4,12,1.4,'s','LUMEN · SafeSphere','#ffffff','#0d1830')}
 // a giant hanging sign in the atrium, light poles, planters with trees, benches, a you-are-here map
 {const y=12.5;box(-102,y,26.9,-74,y+2.6,27.1,MT.plain('#1b1026'),{col:false});kSign(-88,y+.1,27.11,27.6,2.4,'s','CTRL+ALT+CON #20','#ff5d73','#1b1026');kSign(-88,y+.1,26.89,27.6,2.4,'n','CTRL+ALT+CON #20','#ff5d73','#1b1026');
  for(const x of[-100,-76])box(x-.02,y+2.6,26.98,x+.02,16.4,27.02,MT.plain('#888'),{col:false});box(-102,y-.12,26.85,-74,y,27.15,MT.glow('#ff5d73',2.2),{col:false,b:1})}
 for(const[x,z]of[[-106,30],[-106,2],[-68,-1],[-100,38],[-76,52]]){kPlanter(x-1.4,z-1.4,x+1.4,z+1.4,.7,0,MT.clad);card(x,.7,z,3.6,4.2,.4,MT.leaves);card(x,.7,z,3.6,4.2,.4+Math.PI/2,MT.leaves);card(x,2.8,z,3,3,1.2,MT.leaves)}
 for(const[x,z,r]of[[-98,38,0],[-90,38,0],[-70,8,1],[-70,18,1]]){if(r)box(x-.35,0,z-1.6,x+.35,.45,z+1.6,{side:MT.clad,top:MT.woodDark});else box(x-1.6,0,z-.35,x+1.6,.45,z+.35,{side:MT.clad,top:MT.woodDark})}
 box(-66.4,0,-1.2,-65.6,2.4,1.2,MT.plain('#1b1026'));kOnWall('v',-66.4,-1,0,2,.6,1.5,MT.mapBoard);
 for(const[x,z]of[[-90,40],[-108,22],[-90,2],[-108,14]]){box(x-.1,0,z-.1,x+.1,6,z+.1,MT.plain('#2a2a34'),{col:false});box(x-.3,6,z-.3,x+.3,6.3,z+.3,MT.glow('#fff0f8',1.6),{col:false,b:1});addLight(x,5.6,z,[1,.94,.98],13,.75)}
 for(const[x,z]of[[-98,-2],[-78,-2],[-98,30],[-78,46],[-96,-18],[-80,-18]])addLight(x,12,z,[.92,.88,1],22,.7);
 // the lifts on the north wall (two cars; they serve G, L1, L2 and the car park)
 for(const x of[-106,-102]){kOnWall('h',-23.8,1,x,1.6,0,2.5,mt('lift',0,1,0,{r:.25,m:.7}));box(x-.9,2.5,-23.8,x+.9,2.62,-23.75,CH,{col:false})}kSign(-104,2.9,-23.78,4,.4,'s','LIFTS · ALL LEVELS · CAR PARK','#8affc1','#1b1026');
 for(const[x,z]of[[-100,-9],[-76,-9]])box(x-1.6,0,z-.35,x+1.6,.45,z+.35,{side:MT.clad,top:MT.woodDark});kPlanter(-89.4,-10.4,-86.6,-7.6,.7,0,MT.clad);card(-88,.7,-9,3.6,4.2,.4,MT.leaves);card(-88,.7,-9,3.6,4.2,.4+Math.PI/2,MT.leaves);card(-88,2.8,-9,3,3,1.2,MT.leaves);
 mr(-110,-24,-64,60,0,'Foyer','#4a3a5a');mr(-96,60,-80,68,0,'Entrance','#3a2a4a');mr(-72,-24,-64,60,L1,'','#3a2a4a');mr(-82,22,-72,30,L1,'','#3a2a4a');mr(-110,-24,-72,-14,L1,'','#3a2a4a');mr(-72,-24,-64,60,L2,'','#3a2a4a');mr(-82,4,-72,12,L2,'','#3a2a4a');
 buildHallC();
 buildRing();buildCourtyard();
}
/* ================= HALL C + the Badge Lab (x -110..-64, z -64..-24) ================= */
/* where the old hotel wing stood: a double-height talk hall (Track 3) with its stage on the north wall, doors from the
   Foyer and from Ring West; the Badge Lab over it on Level 2, glazed onto the Foyer atrium, its door off Ring West */
function buildHallC(){
 const W=wallLine,WC=MT.wallCon,X0=-110,X1=-64,Z0=-64,Z1=-24,CH=MT.chrome;
 const mr=(x0,z0,x1,z1,y,n,c)=>(MAPR.con=MAPR.con||[]).push({x0,z0,x1,z1,y,n,c:c||'#2a3a5a'});
 sFloor(X0,Z0,X1,Z1,0,MT.carpetCon);
 W('v',X0,Z0+.2,Z1-.2,0,16.5,WC,1);W('h',Z0,X0,X1,0,16.5,WC,1);for(const[y,h]of[[0,L1],[L1,L2-L1],[L2,16.5-L2]])W('v',X1,Z0+.2,Z1-.2,y,h,WC,-1);
 // acoustic panels on the side walls, the stage and its screen, a lectern, two loudspeaker stacks
 for(let z=-60;z<-26;z+=4){kOnWall('v',X0+.2,1,z,3,1.2,6,MT.acou,1,2);kOnWall('v',X1-.2,-1,z,3,1.2,6,MT.acou,1,2)}
 box(-100,0,Z0+.2,-74,1,-57,{side:MT.plain('#1a1420'),top:MT.woodDark},{walk:1});for(const x of[-98,-76])stairs(x-1.2,-57,x+1.2,-55.2,0,1,'z-',MT.woodDark,{sides:1});
 kOnWall('h',Z0+.2,1,-87,26,1,9.6,MT.drape,6,9.6);box(-98.4,2.2,Z0+.2,-75.6,9.6,Z0+.36,MT.plain('#0a0a10'),{col:false});kOnWall('h',Z0+.36,1,-87,22,2.4,7,MT.screenBig);
 box(-89,1,-59.6,-88,2.1,-58.8,MT.woodDark);box(-89.1,2.1,-59.7,-87.9,2.16,-58.7,MT.woodDark,{col:false});box(-88.6,2.16,-59.5,-88.4,2.4,-59.3,MT.plain('#222'),{col:false});
 for(const x of[-101.5,-72.5]){box(x-.7,0,-60.6,x+.7,3.2,-59.2,MT.plain('#14141a'));for(let k=0;k<3;k++)box(x-.5,.4+k*.95,-59.18,x+.5,1.1+k*.95,-59.16,MT.plain('#2a2a34'),{col:false})}
 kSign(-87,9.9,Z0+.22,14,1,'s','HALL C · TRACK 3','#7cc4ff','#1b1026');
 // seats in two blocks with a centre aisle and side aisles to the Ring doors; an AV desk at the back
 for(let k=0;k<18;k++){const z=-51+k*1.15,c=k%2?'#2a3a5a':'#24304a';seatRow(-106,-89,z,0,'s',c);seatRow(-85,-69,z,0,'s',c)}
 box(-91,0,-27.4,-83,1.05,-26.4,{side:MT.plain('#1a1420'),top:MT.plain('#2a2a34')});for(let k=0;k<3;k++)kMonitor(-89.4+k*1.6,1.05,-26.7,'n',[MT.dash,MT.code,MT.scope][k],.5);
 // lights: a truss over the stage with spots, rows of panels over the seats, step lights on the aisles
 box(-102,8.6,-59.2,-72,8.9,-58.8,MT.metal,{col:false,b:1});for(let i=0;i<8;i++){const x=-100+i*3.7;box(x-.18,8.2,-59.2,x+.18,8.6,-58.8,MT.plain('#1a1a20'),{col:false});box(x-.12,8.18,-59.18,x+.12,8.2,-58.82,MT.glow('#fff0d8',1.2),{col:false})}
 for(const x of[-95,-87,-79])addLight(x,8,-56,[1,.92,.8],15,.95);
 for(const z of[-48,-38,-30])for(const x of[-100,-87,-74])lightPanel(x,L2-.45,z,2.4,1.2,'#f0f0ff',13,.6);
 for(let z=-50;z<-28;z+=3)for(const x of[-87,-107.4,-67.6])box(x-.1,0,z-.05,x+.1,.06,z+.05,MT.glow('#7cc4ff',1.2),{col:false});
 sFloor(X0,Z0,X1,Z1,L2,MT.carpetGrey,[],.45,MT.acou);mr(X0,Z0,X1,Z1,0,'Hall C');
 /* ---- Level 2: the Badge Lab ---- */
 {const y=L2;sCeil(X0,Z0,X1,Z1,16.1,MT.ceil);
  for(let r=0;r<4;r++){const z=-58+r*8;for(const[a,b]of[[-106,-90],[-86,-70]]){box(a,y,z-.6,b,y+.9,z+.6,{side:MT.plain('#2a2a34'),top:MT.plain('#e9e3da')});
    for(let k=0;k<4;k++){const x=a+2+k*4;box(x-.3,y+.9,z-.25,x+.3,y+.98,z+.05,MT.plain('#1a4a2a'),{col:false});box(x+.5,y+.9,z-.2,x+.75,y+1.1,z,MT.plain('#d8dce4'),{col:false});box(x-.08,y+.98,z+.1,x+.08,y+1.2,z+.3,MT.glow(['#8affc1','#ff5d73','#7cc4ff','#ffd166'][k],1.2),{col:false})}
    kStool(a+2,z+1.1,.66,MT.plain('#3a3a44'),y);kStool(b-2,z+1.1,.66,MT.plain('#3a3a44'),y)}}
  kOnWall('h',Z0+.2,1,-87,14,y+1.4,2.4,MT.scoreBig);kSign(-87,y+4,Z0+.22,10,.8,'s','BADGE LAB · SOLDER · FLASH · HACK','#8affc1','#1b1026');
  for(let i=0;i<6;i++)box(-108+i*1.4,y,-63.6,-107+i*1.4,y+2.2,-62.4,MT.plain(['#3a5a8a','#2a2a34','#5a3a6a'][i%3]));
  for(const z of[-56,-44,-32])for(const x of[-98,-78])lightPanel(x,16.1,z,2.4,1.2,'#f4f8ff',11,.7);
  mr(X0,Z0,X1,Z1,y,'Badge Lab','#1a3a2a')}
 // outside: cladding over the west wall onto the lane (the bar terrace sits against it), the roof
 skin('v',X0-.02,Z0,Z1,0,16.5,MT.clad,-1,[]);box(X0-.5,16.5,Z0,X0,17.4,Z1,MT.clad,{col:false});floorQ(X0,Z0,X1,Z1,16.52,MT.gravel);
}
/* ================= THE RING ================= */
function buildRing(){
 const W=wallLine,GL=MT.glass,WC=MT.wallCon,CC=MT.carpetCon,CG=MT.carpetGallery,CH=MT.chrome;
 const mr=(x0,z0,x1,z1,y,n,c)=>(MAPR.con=MAPR.con||[]).push({x0,z0,x1,z1,y,n,c:c||'#5a2a4a'});
 // ground floors
 sFloor(-64,-64,56,-50,0,CC);sFloor(-64,-50,-50,20,0,CC);sFloor(40,-50,56,20,0,CC);sFloor(-64,20,56,34,0,CC);
 // outer walls, one level at a time (doors at the same spot on different levels need separate runs)
 const lv=[[0,L1],[L1,L2-L1],[L2,16.5-L2]];
 for(const[y,h]of lv){W('h',-64,-64,56,y,h,WC,1);W('h',34,-64,56,y,h,WC,-1)}
 W('v',56,-54,20,0,L1,WC,-1);for(const y of[L1,L2]){W('v',56,-54,20,y,1,WC,-1);W('v',56,-54,20,y+1,(y===L1?L2:16.5)-y-1,GL,-1)}
 // inner glass to the courtyard, both storeys
 for(const[y,h]of[[0,L2],[L2,16.5-L2]]){gwall('h',-50,-50,40,y,h,-1);gwall('h',20,-50,40,y,h,1);gwall('v',-50,-50,20,y,h,-1);gwall('v',40,-50,20,y,h,1)}
 // Level 1 balcony along the outer walls, and the L2 floor over the whole ring (its underside is the ring's ceiling)
 const BAL=[[-64,-64,56,-60],[52,-60,56,34],[-64,30,52,34],[-64,-60,-60,30]];
 for(const r of BAL)sFloor(r[0],r[1],r[2],r[3],L1,CG,[],.45,MT.ceilDark);
 sFloor(-64,-64,56,-50,L2,CG,[],.45,MT.acou);sFloor(-64,-50,-50,20,L2,CG,[],.45,MT.acou);sFloor(40,-50,56,20,L2,CG,[[46,-10,50,0]],.45,MT.acou);sFloor(-64,20,56,34,L2,CG,[],.45,MT.acou);
 sCeil(-64,-64,56,-50,16.1,MT.acou);sCeil(-64,-50,-50,20,16.1,MT.acou);sCeil(40,-50,56,20,16.1,MT.acou);sCeil(-64,20,56,34,16.1,MT.acou);
 // balcony railings
 railing(-60,-60,10,-60,L1,{m:CH,glass:GL});railing(14,-60,52,-60,L1,{m:CH,glass:GL});railing(52,-60,52,0,L1,{m:CH,glass:GL});railing(50,0,52,0,L1,{m:CH,glass:GL});railing(52,3,52,30,L1,{m:CH,glass:GL});railing(-60,30,52,30,L1,{m:CH,glass:GL});railing(-60,-60,-60,30,L1,{m:CH,glass:GL});
 // stairs: ground -> balcony in Ring North (landing at the west end), balcony -> Level 2 in Ring East
 stairs(14,-59.5,26,-55.5,0,L1,'x-',CC,{nose:MT.plain('#ffd166'),sides:1});sFloor(10,-60,14,-55.5,L1,CG,[],.45,MT.ceilDark);railing(26,-55.5,14,-55.5,0,{y2:L1,m:CH,glass:GL});railing(10,-55.5,14,-55.5,L1,{m:CH,glass:GL});railing(10,-60,10,-55.5,L1,{m:CH,glass:GL});railing(26,-59.5,14,-59.5,0,{y2:L1,m:CH});
 box(14,0,-59.62,26,L1-.45,-59.52,MT.clad,{col:false});colBox(14,-59.5,15.5,-55.5,0,3);
 stairs(46,-10,50,0,L1,L2,'z-',CG,{nose:MT.plain('#ffd166'),solid:false});stairShell(46,-10,50,0,L1,L2,'z-',MT.clad,.35);sFloor(46,0,52,3,L1,CG,[],.45,MT.ceilDark);railing(46,0,46,-10,L1,{y2:L2,m:CH,glass:GL});railing(50,0,50,-10,L1,{y2:L2,m:CH});railing(46,3,52,3,L1,{m:CH,glass:GL});railing(46,0,46,3,L1,{m:CH,glass:GL});
 railing(46,-10,46,0,L2,{m:CH,glass:GL});railing(50,-10,50,0,L2,{m:CH,glass:GL});railing(46,0,50,0,L2,{m:CH,glass:GL});
 // lights: big drum pendants in the double-height ring, downlights under the balcony and on Level 2
 for(let x=-56;x<=50;x+=12){kPendant(x,L2-.45,-55.5,2.4,.7,'#ffe8f0',17,1,'#2a1f36')}for(const z of[-44,-28,8])kPendant(44,L2-.45,z,2.4,.7,'#ffe8f0',14,.85,'#2a1f36');for(let x=-56;x<=34;x+=12)kPendant(x,L2-.45,26,2.4,.7,'#ffe8f0',14,.85,'#2a1f36');for(let z=-44;z<=14;z+=10)kPendant(-57,L2-.45,z,2.4,.7,'#ffe8f0',12,.8,'#2a1f36');
 for(let x=-60;x<=52;x+=8)downl(x,L1-.45,-62,'#ffe0d0',7,.45);for(let x=-60;x<=50;x+=8)downl(x,L1-.45,32,'#ffe0d0',7,.45);for(let z=-56;z<=28;z+=8)downl(54,L1-.45,z,'#ffe0d0',7,.45);for(let z=-52;z<=28;z+=8)downl(-62,L1-.45,z,'#ffe0d0',7,.45);
 for(let x=-56;x<=50;x+=10)lightPanel(x,16.1,-57,2.6,1.2,'#f0f0ff',12,.65);for(let x=-56;x<=50;x+=10)lightPanel(x,16.1,27,2.6,1.2,'#f0f0ff',12,.65);for(let z=-44;z<=14;z+=10)lightPanel(48,16.1,z,1.2,2.6,'#f0f0ff',12,.65);for(let z=-48;z<=14;z+=10)lightPanel(-57,16.1,z,1.2,2.6,'#f0f0ff',12,.65);
 // banners hanging in the double height, door signs, posters, benches, plants, charging pillars
 for(const[x,z,c]of[[-40,-56,'#ff5d73'],[-14,-56,'#8affc1'],[8,-56,'#7cc4ff'],[32,-56,'#ffd166'],[44,-36,'#ff8fc8'],[44,14,'#c9b6ff'],[30,27,'#2bf0ff'],[0,27,'#ff9a5c'],[-30,27,'#9be36b']]){
  box(x-.02,7.4,z-.02,x+.02,L2-.45,z+.02,MT.plain('#222'),{col:false});box(x-1.1,3.6,z-.05,x+1.1,7.4,z+.05,MT.fabric(c),{col:false});box(x-1.15,7.35,z-.08,x+1.15,7.45,z+.08,MT.metal,{col:false})}
 const ds=(x,y,z,d,t,c)=>kSign(x,y,z,Math.min(7,t.length*.32+1.2),.7,d,t,c||'#ffd166','#1b1026');
 ds(-55,4.2,-63.78,'s','HALL A · FLOOR','#ff5d73');ds(45,4.2,-63.78,'s','HALL A · FLOOR','#ff5d73');ds(-5,L1+3.4,-63.78,'s','HALL A · LEVEL 1 SEATING','#ff5d73');ds(-5,L2+3.6,-63.78,'s','HALL A · BALCONY','#ff5d73');
 ds(55.78,5,-38,'w','EXPO HALL · VENDORS','#ffd166');ds(55.78,5,-8,'w','EXPO HALL · CON STORE','#ffd166');ds(-37,4.6,33.78,'n','FOOD COURT','#ffb347');ds(5,5.2,33.78,'n','COSPLAY HALL','#2bf0ff');ds(53,3.6,33.78,'n','CHILL-OUT','#c9b6ff');
 for(const z of[-44,-30])ds(-63.78,4.4,z,'e','HALL C · TRACK 3','#7cc4ff');ds(-63.78,L2+3.2,-37,'e','BADGE LAB','#8affc1');ds(-62,2.7,-63.78,'s','STAFF','#8a8a94');ds(53,2.7,-63.78,'s','STAFF','#8a8a94');
 ds(30,4.3,-63.78,'s','VILLAGES · HALL B →','#8affc1');ds(55.78,L1+2.9,0,'w','← VILLAGE ROW L1','#8affc1');kSign(-37,L1+4.45,33.78,6,.5,'n','FOOD COURT TERRACE','#ffb347','#1b1026');ds(53,L1+2.9,33.78,'n','QUIET ROOM','#c9b6ff');ds(-37,L2+3.4,33.78,'n','SKY GARDEN','#9be36b');
 
 for(const[x,z,d,i]of[[-20,-63.78,'s',4],[30,-63.78,'s',2],[55.78,-24,'w',3],[-20,33.78,'n',1],[25,33.78,'n',5],[55.78,12,'w',4]])panel(x,1.2,z,.9,1.2,d,MT.poster(i));
 kOnWall('h',-63.8,1,-35,10,7,2.6,MT.lumenbanner);kOnWall('h',33.8,-1,-10,8,7.2,2,MT.keyscreen);
 for(const x of[-44,-28,-2,34])box(x-1.4,0,-61.2,x+1.4,.45,-60.6,{side:MT.clad,top:MT.woodDark});for(const x of[-46,-20,26])box(x-1.4,0,31.2,x+1.4,.45,31.8,{side:MT.clad,top:MT.woodDark});for(const z of[-40,-16])box(53.2,0,z-1.4,53.8,.45,z+1.4,{side:MT.clad,top:MT.woodDark});
 for(const[x,z]of[[-62,-52],[54,-52],[54,32],[-62,32],[54,18],[-52,-22],[-52,18]])kPlant(x,z,1.5,0,'#2a1f36');
 for(const[x,z]of[[-10,-61],[20,31],[53,-25]]){box(x-.3,0,z-.3,x+.3,1.3,z+.3,MT.plain('#1b1026'));box(x-.32,1.05,z-.32,x+.32,1.2,z+.32,MT.glow('#8affc1',1.4),{col:false})}
 // Ring West, Level 2: benches along the glass over the courtyard
 for(const z of[-40,-14,6])box(-53.6,L2,z-1.4,-53,L2+.45,z+1.4,{side:MT.clad,top:MT.woodDark});
 mr(-64,-64,56,-50,0,'Ring · North');mr(-64,-50,-50,20,0,'Ring · West');mr(40,-50,56,20,0,'Ring · East');mr(-64,20,56,34,0,'Ring · South');
 for(const r of BAL)mr(r[0],r[1],r[2],r[3],L1,'','#3a2a4a');mr(10,-60,14,-55.5,L1,'','#3a2a4a');mr(46,0,52,3,L1,'','#3a2a4a');
 mr(-64,-64,56,-50,L2,'Level 2 · Ring','#3a2a4a');mr(-64,-50,-50,20,L2,'','#3a2a4a');mr(40,-50,56,20,L2,'','#3a2a4a');mr(-64,20,56,34,L2,'','#3a2a4a');
}
/* ================= THE COURTYARD (open sky) ================= */
function buildCourtyard(){
 const cy=(x0,z0,x1,z1,m)=>{floorQ(x0,z0,x1,z1,0,m);surf(x0,z0,x1,z1,0)};
 const AX0=-14,AZ0=-24,AX1=4,AZ1=-6; // the sunken amphitheatre
 for(const r of rectsMinus(-50,-50,40,20,[[AX0,AZ0,AX1,AZ1]]))cy(r[0],r[1],r[2],r[3],MT.grass);
 {const ring=[AX0-2,AZ0-2,AX1+2,AZ1+2],P=[[-50,-16,AX0-2,-14],[AX1+2,-16,20,-14],[22,-16,40,-14],[-6,-50,-4,AZ0-2],[-6,AZ1+2,-4,20],[20,-50,22,20]];
  for(const r of P)floorQ(r[0],r[1],r[2],r[3],.015,MT.pavers);for(const r of rectsMinus(ring[0],ring[1],ring[2],ring[3],[[AX0,AZ0,AX1,AZ1]]))floorQ(r[0],r[1],r[2],r[3],.015,MT.pavers)}
 (MAPR.con=MAPR.con||[]).push({x0:-50,z0:-50,x1:40,z1:20,y:0,n:'Courtyard',c:'#2a4a2a'});
 // the amphitheatre: three steps down to a paved ring round the fountain
 {const m=MT.plain('#9a9aa8'),ms=MT.concrete;for(let k=0;k<3;k++){const i=k*1.5,y=-(k+1)*.4,a=AX0+i,b=AZ0+i,c=AX1-i,d=AZ1-i;
   for(const r of[[a,b,c,b+1.5],[a,d-1.5,c,d],[a,b+1.5,a+1.5,d-1.5],[c-1.5,b+1.5,c,d-1.5]]){floorQ(r[0],r[1],r[2],r[3],y,ms);surf(r[0],r[1],r[2],r[3],y)}
   quad([a,y,b],[c,y,b],[c,y+.4,b],[a,y+.4,b],m,1,1);quad([c,y,d],[a,y,d],[a,y+.4,d],[c,y+.4,d],m,1,1);quad([a,y,d],[a,y,b],[a,y+.4,b],[a,y+.4,d],m,1,1);quad([c,y,b],[c,y,d],[c,y+.4,d],[c,y+.4,b],m,1,1)}
  const fx=(AX0+AX1)/2,fz=(AZ0+AZ1)/2;floorQ(AX0+4.5,AZ0+4.5,AX1-4.5,AZ1-4.5,-1.2,MT.tile);surf(AX0+4.5,AZ0+4.5,AX1-4.5,AZ1-4.5,-1.2);
  box(fx-2.4,-1.2,fz-2.4,fx+2.4,-.6,fz+2.4,MT.plain('#9a9aa8'));quad([fx-2.2,-.62,fz+2.2],[fx+2.2,-.62,fz+2.2],[fx+2.2,-.62,fz-2.2],[fx-2.2,-.62,fz-2.2],MT.water,2,2);
  box(fx-.35,-.6,fz-.35,fx+.35,1.6,fz+.35,MT.plain('#9a9aa8'),{col:false});box(fx-.9,1.6,fz-.9,fx+.9,1.75,fz+.9,MT.plain('#9a9aa8'),{col:false});addLight(fx,.6,fz,[.5,.8,1],10,1);
  for(const[x,z]of[[AX0+.2,fz],[AX1-.2,fz],[fx,AZ0+.2],[fx,AZ1-.2]])box(x-.15,-.4,z-.15,x+.15,-.3,z+.15,MT.glow('#7cd4ff',1.6),{col:false})}
 // the big tree and its bench
 {const tx=24,tz=-34;box(tx-.7,0,tz-.7,tx+.7,5,tz+.7,MT.plain('#4a3020'));for(const[a,y,s]of[[0,3.4,10],[.6,5.2,9],[1.2,7,7],[.3,8.6,5]])for(let i=0;i<4;i++)card(tx,y,tz,s,s*.9,a+i*Math.PI/4,MT.leaves);
  for(let i=0;i<8;i++){const a=i/8*Math.PI*2,b=(i+1)/8*Math.PI*2;kBeam([tx+Math.cos(a)*2.4,.22,tz+Math.sin(a)*2.4],[tx+Math.cos(b)*2.4,.22,tz+Math.sin(b)*2.4],.5,.44,MT.woodDark,[0,1,0])}
  for(const[x,z]of[[tx-3,tz],[tx+3,tz],[tx,tz-3],[tx,tz+3]])box(x-.12,0,z-.12,x+.12,.05,z+.12,MT.glow('#ffd98a',1.6),{col:false});addLight(tx,1.2,tz+3,[1,.85,.6],9,.7)}
 // trees, lamps with string lights between them, picnic tables, planters
 for(const[x,z]of[[-40,-40],[-40,10],[30,10],[8,-42],[-30,-6],[10,6]])tree(x,z);
 const LP=[[-44,-44],[-44,14],[34,14],[34,-44],[-24,-30],[14,-2],[-26,6],[4,-34]];for(const[x,z]of LP)lamp(x,z,0,'#ffd98a');
 for(const[a,b]of[[0,4],[1,6],[2,5],[3,7],[4,7],[5,6]]){const p=LP[a],q=LP[b];for(let i=1;i<10;i++){const t=i/10,x=p[0]+(q[0]-p[0])*t,z=p[1]+(q[1]-p[1])*t,y=3.4-Math.sin(t*Math.PI)*.5;box(x-.06,y-.06,z-.06,x+.06,y+.06,z+.06,MT.glow(['#ffd166','#ff8fc8','#8affc1'][i%3],2.4),{col:false})}}
 for(const[x,z]of[[-34,-24],[-34,-2],[12,-20],[30,-10],[-18,12]]){box(x-1.2,.7,z-.4,x+1.2,.76,z+.4,MT.woodDark,{col:false});colBox(x-1.2,z-.4,x+1.2,z+.4,0,.76);for(const s of[-1,1]){box(x-1.2,.42,z+s*.75-.15,x+1.2,.46,z+s*.75+.15,MT.woodDark,{col:false});colBox(x-1.2,z+s*.75-.15,x+1.2,z+s*.75+.15,0,.46)}for(const dx of[-1,1])box(x+dx*.9-.05,0,z-.9,x+dx*.9+.05,.7,z+.9,MT.plain('#2a2a30'),{col:false})}
 for(const[x0,z0,x1,z1]of[[-48,-26,-44,-18],[36,-30,38.6,-20],[-20,16,-10,18.6]])kPlanter(x0,z0,x1,z1,.6,0,MT.concrete);
 // a food truck parked on the paving by Ring East (closed for the night, but lit)
 {const x=31,z=4;box(x-1.3,.4,z-3.4,x+1.3,3.2,z+3.4,MT.gloss('#ff5d73'));box(x-1.35,1.2,z-2.6,x-1.29,2.4,z+1.6,MT.glow('#ffd98a',1.2),{col:false});box(x-2.6,2.4,z-2.6,x-1.3,2.5,z+1.6,MT.plain('#ffd166'),{col:false,b:1});
  for(const dz of[-2.4,2.4])for(const dx of[-1.2,1.1])box(x+dx-.1,0,z+dz-.4,x+dx+.1,.7,z+dz+.4,MT.plain('#14121a'),{col:false});kSign(x-1.36,2.6,z-.5,4,.5,'w','TACO 2 THE FUTURE','#ffd166','#1b1026');addLight(x-2,2.2,z,[1,.85,.55],7,.8)}
}
