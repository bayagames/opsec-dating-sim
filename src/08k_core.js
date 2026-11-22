/* ============ THE CON CORE: the Foyer, the Ring, the courtyard, the bar terrace ============ */
/* Foyer (x -110..-64, z -4..60): a three-storey glass atrium. Registration on the west, the info desk, the Lumen
   mega-booth in the middle, escalators up the east side to the Level 1 and Level 2 galleries, the glass skybridge
   from the hotel mezzanine across the void. The Ring is a 14 m concourse round the open courtyard (x -50..40,
   z -50..20): double height at ground level with a 4 m balcony on its outer walls at Level 1, and a floor of its own
   at Level 2 with glass on the courtyard side. Hall A opens off Ring North at all three levels. */
function buildCore(){
 const D=door,W=wallLine,GL=MT.glass,TZ=MT.terr,WC=MT.wallCon,CC=MT.carpetCon,CG=MT.carpetGallery,CH=MT.chrome;
 const mr=(x0,z0,x1,z1,y,n,c)=>(MAPR.con=MAPR.con||[]).push({x0,z0,x1,z1,y,n,c:c||'#5a2a4a'});
 /* ---------- doors ---------- */
 gap('h',60,-88,12,4);D('h',68,-88,6,3);                                   // vestibule: inner gap, outer doors
 D('v',-64,40,4,3.2);D('v',-64,54,4,3.2);                                  // foyer -> food court
 for(const c of[-10,20])D('h',-50,c,3,3);for(const c of[-30,10])D('h',20,c,3,3);D('v',-50,0,3,3);for(const c of[-20,5])D('v',40,c,3,3); // ring <-> courtyard glass doors
 D('h',-50,-57,3,3);D('h',-24,-57,3,3);gap('v',-50,-37,3,2.4);              // terrace <-> ring north / ring west / courtyard
 D('h',-64,-55,4,3.6);D('h',-64,45,4,3.6);D('h',-64,-62,1.6,2.4);D('h',-64,53,2,2.4); // hall A side aisles; staff corridors
 for(const c of[-30,-5,20]){D('h',-64,c,3,3,L1);D('h',-64,c,3,3,L2)}        // hall A at levels 1 and 2
 D('v',56,-38,8,4.5);D('v',56,-8,8,4.5);                                   // expo hall
 D('h',34,-37,6,4);D('h',34,5,6,4.5);D('h',34,35,4,3.4);D('h',34,53,3,3);    // food court, cosplay x2, chill-out
 gap('h',-50,-57,6,3,L2);gap('h',-24,-57,6,3,L2);gap('h',34,-37,20,4.4,L1);D('h',34,53,2,2.6,L1);D('h',34,-37,6,3,L2);       // food court mezzanine, quiet room, sky garden
 /* ================= FOYER ================= */
 sFloor(-110,-4,-64,60,0,TZ);sFloor(-96,60,-80,68,0,TZ);quad([-94,.012,67.5],[-82,.012,67.5],[-82,.012,61],[-94,.012,61],MT.carpetGrey,4,2);
 for(let x=-104;x<=-70;x+=11.5)floorQ(x-.08,-4,x+.08,60,.004,MT.plain('#8a8478'));for(let z=6;z<=56;z+=12.5)floorQ(-110,z-.08,-64,z+.08,.004,MT.plain('#8a8478'));
 // the south curtain wall: 16.5 m of glass with steel fins, and the glass vestibule
 W('h',60,-110,-64,0,16.5,GL,-1);for(let x=-108;x<=-66;x+=4.6){if(x>-97&&x<-79)continue;box(x-.06,0,60.05,x+.06,16.5,60.6,CH,{col:false})}
 W('v',-96,60,68,0,4,GL,1);W('v',-80,60,68,0,4,GL,-1);W('h',68,-96,-80,0,4,GL,-1);ceilQ(-96,60,-80,68,4,MT.ceilDark);box(-96.3,4,59.8,-79.7,4.4,68.3,MT.plain('#1b1026'),{col:false});
 kSign(-88,4.42,68.31,14,.9,'s','CTRL+ALT+CON · ENTRANCE','#ff5d73','#1b1026');lightPanel(-88,4,64,4,2,'#fff4e0',9,.8);
 kSign(-88,4.5,59.78,8,.6,'n','FOYER · REGISTRATION · THE HALCYON →','#ffd166','#1b1026');
 // east side: wall to the food court below Level 2, glass to the sky garden above
 W('v',-64,34,60,0,L1,WC,-1);W('v',-64,34,60,L1,L2-L1,WC,-1);W('v',-64,34,60,L2,16.5-L2,GL,-1);
 // the glass roof on a steel grid
 ceilQ(-110,-4,-64,60,16.5,GL);for(let x=-110;x<=-64;x+=5.75)box(x-.08,15.9,-4,x+.08,16.5,60,MT.plain('#2a2a34'),{col:false,b:1});for(let z=-4;z<=60;z+=8)box(-110,15.9,z-.08,-64,16.5,z+.08,MT.plain('#2a2a34'),{col:false,b:1});
 // galleries: Level 1 and 2 along the east side, an escalator landing at each, railings on every open edge
 sFloor(-72,-4,-64,60,L1,CG,[],.45,MT.ceilDark);sFloor(-82,22,-72,30,L1,CG,[],.45,MT.ceilDark);
 sFloor(-72,-4,-64,60,L2,CG,[],.45,MT.ceilDark);sFloor(-82,4,-72,12,L2,CG,[],.45,MT.ceilDark);sCeil(-72,-4,-64,60,16.1,MT.ceilDark);
 for(const y of[L1,L2]){const lz=y===L1?[22,30]:[4,12];railing(-72,-4,-72,lz[0],y,{m:CH,glass:GL});railing(-72,lz[1],-72,60,y,{m:CH,glass:GL});railing(-82,lz[0],-82,lz[1],y,{m:CH,glass:GL});
  if(y===L1){railing(-82,30,-80,30,y,{m:CH,glass:GL})}else{railing(-82,4,-72,4,y,{m:CH,glass:GL});railing(-82,12,-80,12,y,{m:CH,glass:GL})}
  railing(-72,60,-64,60,y,{m:CH});for(let z=0;z<60;z+=8)downl(-68,y-.45,z,'#f4f0ff',7,.45)}
 railing(-82,22,-80,22,L1,{m:CH,glass:GL});
 // escalators: ground -> L1 (rising north to the L1 landing), L1 -> L2 (rising north again)
 escalator(-80,30,-72,40,0,L1,'z-');escalator(-80,12,-72,22,L1,L2,'z-',{solid:false});stairShell(-80,12,-72,22,L1,L2,'z-',MT.clad,.4);
 tri([-80.02,0,40],[-80.02,L1,30],[-80.02,0,30],MT.clad,5,2);tri([-71.98,0,30],[-71.98,L1,30],[-71.98,0,40],MT.clad,5,2);
 for(const[a,b,ya,yb]of[[40,30,0,L1],[22,12,L1,L2]])kBeam([-76,ya+.9,a],[-76,yb+.9,b],.3,.12,MT.clad,[1,0,0]);
 kSign(-76,L1+3.2,40.02,6,.55,'s','↑ LEVEL 1 · WORKSHOPS · VILLAGES','#8affc1','#1b1026');kSign(-76,L2+3,22.02,6,.55,'s','↑ LEVEL 2 · HALL A BALCONY · CON OPS','#8affc1','#1b1026');
 // the skybridge from the hotel mezzanine, glazed on both sides, across the void to the east gallery
 {const y=L1,z0=6,z1=10;floorQ(-110,z0,-72,z1,y,MT.terr);surf(-110,z0,-72,z1,y);ceilQ(-110,z0,-72,z1,y-.4,MT.plain('#2a2a34'));
  quad([-110,y-.4,z0],[-72,y-.4,z0],[-72,y,z0],[-110,y,z0],MT.clad,9,.2);quad([-72,y-.4,z1],[-110,y-.4,z1],[-110,y,z1],[-72,y,z1],MT.clad,9,.2);
  for(const z of[z0,z1]){gwall('h',z,-110,-72,y,3,z===z0?1:-1);box(-110,y+3,Math.min(z,z+(z===z0?.15:-.15)),-72,y+3.2,Math.max(z,z+(z===z0?.15:-.15)),CH,{col:false})}
  ceilQ(-110,z0,-72,z1,y+3.2,GL);quad([-110,y+3.21,z1],[-72,y+3.21,z1],[-72,y+3.21,z0],[-110,y+3.21,z0],GL,1,1);for(let x=-108;x<-72;x+=4){downl(x,y+3.18,8,'#f4f8ff',5,.35)}
  kSign(-73,y+2.5,8,3.6,.4,'w','HALCYON HOTEL →','#ffe0a0','#1b1026');kSign(-109.98,y+2.6,8,3.6,.4,'e','CONVENTION · FOYER →','#ff5d73','#1b1026');mr(-110,z0,-72,z1,y,'Skybridge','#3a2a4a')}
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
 for(const[x,z]of[[-98,-2],[-78,-2],[-98,30],[-78,46]])addLight(x,12,z,[.92,.88,1],22,.7);
 // the lifts on the north wall (two cars; they serve G, L1, L2 and the car park)
 for(const x of[-106,-102]){kOnWall('h',-4,1,x,1.6,0,2.5,mt('lift',0,1,0,{r:.25,m:.7}));box(x-.9,2.5,-4,x+.9,2.62,-3.95,CH,{col:false})}kSign(-104,2.9,-3.98,4,.4,'s','LIFTS · ALL LEVELS · CAR PARK','#8affc1','#1b1026');
 mr(-110,-4,-64,60,0,'Foyer','#4a3a5a');mr(-96,60,-80,68,0,'Entrance','#3a2a4a');mr(-72,-4,-64,60,L1,'','#3a2a4a');mr(-82,22,-72,30,L1,'','#3a2a4a');mr(-72,-4,-64,60,L2,'','#3a2a4a');mr(-82,4,-72,12,L2,'','#3a2a4a');
 buildRing();buildCourtyard();
}
/* ================= THE RING ================= */
function buildRing(){
 const W=wallLine,GL=MT.glass,WC=MT.wallCon,CC=MT.carpetCon,CG=MT.carpetGallery,CH=MT.chrome;
 const mr=(x0,z0,x1,z1,y,n,c)=>(MAPR.con=MAPR.con||[]).push({x0,z0,x1,z1,y,n,c:c||'#5a2a4a'});
 // ground floors
 sFloor(-64,-64,56,-50,0,CC);sFloor(-64,-24,-50,20,0,CC);sFloor(40,-50,56,20,0,CC);sFloor(-64,20,56,34,0,CC);
 // outer walls, one level at a time (doors at the same spot on different levels need separate runs)
 const lv=[[0,L1],[L1,L2-L1],[L2,16.5-L2]];
 for(const[y,h]of lv){W('h',-64,-64,56,y,h,WC,1);W('h',34,-64,56,y,h,WC,-1)}
 W('v',56,-54,20,0,L1,WC,-1);for(const y of[L1,L2]){W('v',56,-54,20,y,1,WC,-1);W('v',56,-54,20,y+1,(y===L1?L2:16.5)-y-1,GL,-1)}
 // inner glass to the courtyard, both storeys
 for(const[y,h]of[[0,L2],[L2,16.5-L2]]){gwall('h',-50,-50,40,y,h,-1);gwall('h',20,-50,40,y,h,1);gwall('v',-50,-24,20,y,h,-1);gwall('v',40,-50,20,y,h,1)}
 // the terrace's north and south walls (doors onto the ring), glass where the terrace meets the courtyard is a balustrade
 W('h',-50,-64,-50,0,L2,WC,-1);W('h',-24,-64,-50,0,L2,WC,1);W('h',-50,-64,-50,L2,16.5-L2,GL,-1);W('h',-24,-64,-50,L2,16.5-L2,GL,1);
 // Level 1 balcony along the outer walls, and the L2 floor over the whole ring (its underside is the ring's ceiling)
 const BAL=[[-64,-64,56,-60],[52,-60,56,34],[-64,30,52,34],[-64,-24,-60,30]];
 for(const r of BAL)sFloor(r[0],r[1],r[2],r[3],L1,CG,[],.45,MT.ceilDark);
 sFloor(-64,-64,56,-50,L2,CG,[],.45,MT.acou);sFloor(-64,-24,-50,20,L2,CG,[],.45,MT.acou);sFloor(40,-50,56,20,L2,CG,[[46,-10,50,0]],.45,MT.acou);sFloor(-64,20,56,34,L2,CG,[],.45,MT.acou);
 sCeil(-64,-64,56,-50,16.1,MT.acou);sCeil(-64,-24,-50,20,16.1,MT.acou);sCeil(40,-50,56,20,16.1,MT.acou);sCeil(-64,20,56,34,16.1,MT.acou);
 // balcony railings
 railing(-64,-60,10,-60,L1,{m:CH,glass:GL});railing(14,-60,52,-60,L1,{m:CH,glass:GL});railing(52,-60,52,0,L1,{m:CH,glass:GL});railing(50,0,52,0,L1,{m:CH,glass:GL});railing(52,3,52,30,L1,{m:CH,glass:GL});railing(-60,30,52,30,L1,{m:CH,glass:GL});railing(-60,-24,-60,30,L1,{m:CH,glass:GL});
 // stairs: ground -> balcony in Ring North (landing at the west end), balcony -> Level 2 in Ring East
 stairs(14,-59.5,26,-55.5,0,L1,'x-',CC,{nose:MT.plain('#ffd166'),sides:1});sFloor(10,-60,14,-55.5,L1,CG,[],.45,MT.ceilDark);railing(26,-55.5,14,-55.5,0,{y2:L1,m:CH,glass:GL});railing(10,-55.5,14,-55.5,L1,{m:CH,glass:GL});railing(10,-60,10,-55.5,L1,{m:CH,glass:GL});railing(26,-59.5,14,-59.5,0,{y2:L1,m:CH});
 box(14,0,-59.62,26,L1-.45,-59.52,MT.clad,{col:false});colBox(14,-59.5,15.5,-55.5,0,3);
 stairs(46,-10,50,0,L1,L2,'z-',CG,{nose:MT.plain('#ffd166'),solid:false});stairShell(46,-10,50,0,L1,L2,'z-',MT.clad,.35);sFloor(46,0,52,3,L1,CG,[],.45,MT.ceilDark);railing(46,0,46,-10,L1,{y2:L2,m:CH,glass:GL});railing(50,0,50,-10,L1,{y2:L2,m:CH});railing(46,3,52,3,L1,{m:CH,glass:GL});railing(46,0,46,3,L1,{m:CH,glass:GL});
 railing(46,-10,46,0,L2,{m:CH,glass:GL});railing(50,-10,50,0,L2,{m:CH,glass:GL});railing(46,0,50,0,L2,{m:CH,glass:GL});
 // lights: big drum pendants in the double-height ring, downlights under the balcony and on Level 2
 for(let x=-56;x<=50;x+=12){kPendant(x,L2-.45,-55.5,2.4,.7,'#ffe8f0',17,1,'#2a1f36')}for(const z of[-44,-28,8])kPendant(44,L2-.45,z,2.4,.7,'#ffe8f0',14,.85,'#2a1f36');for(let x=-56;x<=34;x+=12)kPendant(x,L2-.45,26,2.4,.7,'#ffe8f0',14,.85,'#2a1f36');for(let z=-16;z<=14;z+=10)kPendant(-57,L2-.45,z,2.4,.7,'#ffe8f0',12,.8,'#2a1f36');
 for(let x=-60;x<=52;x+=8)downl(x,L1-.45,-62,'#ffe0d0',7,.45);for(let x=-60;x<=50;x+=8)downl(x,L1-.45,32,'#ffe0d0',7,.45);for(let z=-56;z<=28;z+=8)downl(54,L1-.45,z,'#ffe0d0',7,.45);for(let z=-20;z<=28;z+=8)downl(-62,L1-.45,z,'#ffe0d0',7,.45);
 for(let x=-56;x<=50;x+=10)lightPanel(x,16.1,-57,2.6,1.2,'#f0f0ff',12,.65);for(let x=-56;x<=50;x+=10)lightPanel(x,16.1,27,2.6,1.2,'#f0f0ff',12,.65);for(let z=-44;z<=14;z+=10)lightPanel(48,16.1,z,1.2,2.6,'#f0f0ff',12,.65);for(let z=-18;z<=14;z+=10)lightPanel(-57,16.1,z,1.2,2.6,'#f0f0ff',12,.65);
 // banners hanging in the double height, door signs, posters, benches, plants, charging pillars
 for(const[x,z,c]of[[-40,-56,'#ff5d73'],[-14,-56,'#8affc1'],[8,-56,'#7cc4ff'],[32,-56,'#ffd166'],[44,-36,'#ff8fc8'],[44,14,'#c9b6ff'],[30,27,'#2bf0ff'],[0,27,'#ff9a5c'],[-30,27,'#9be36b']]){
  box(x-.02,7.4,z-.02,x+.02,L2-.45,z+.02,MT.plain('#222'),{col:false});box(x-1.1,3.6,z-.05,x+1.1,7.4,z+.05,MT.fabric(c),{col:false});box(x-1.15,7.35,z-.08,x+1.15,7.45,z+.08,MT.metal,{col:false})}
 const ds=(x,y,z,d,t,c)=>kSign(x,y,z,Math.min(7,t.length*.32+1.2),.7,d,t,c||'#ffd166','#1b1026');
 ds(-55,4.2,-63.78,'s','HALL A · FLOOR','#ff5d73');ds(45,4.2,-63.78,'s','HALL A · FLOOR','#ff5d73');ds(-5,L1+3.4,-63.78,'s','HALL A · LEVEL 1 SEATING','#ff5d73');ds(-5,L2+3.6,-63.78,'s','HALL A · BALCONY','#ff5d73');
 ds(55.78,5,-38,'w','EXPO HALL · VENDORS','#ffd166');ds(55.78,5,-8,'w','EXPO HALL · CON STORE','#ffd166');ds(-37,4.6,33.78,'n','FOOD COURT','#ffb347');ds(5,5.2,33.78,'n','COSPLAY HALL','#2bf0ff');ds(53,3.6,33.78,'n','CHILL-OUT','#c9b6ff');
 ds(-57,3.4,-50.22,'n','BAR TERRACE','#ff9a5c');ds(-57,3.4,-23.78,'s','BAR TERRACE','#ff9a5c');ds(-62,2.7,-63.78,'s','STAFF','#8a8a94');ds(53,2.7,-63.78,'s','STAFF','#8a8a94');
 ds(30,4.3,-63.78,'s','VILLAGES · HALL B →','#8affc1');ds(55.78,L1+2.9,0,'w','← VILLAGE ROW L1','#8affc1');kSign(-37,L1+4.45,33.78,6,.5,'n','FOOD COURT TERRACE','#ffb347','#1b1026');ds(53,L1+2.9,33.78,'n','QUIET ROOM','#c9b6ff');ds(-37,L2+3.4,33.78,'n','SKY GARDEN','#9be36b');
 
 for(const[x,z,d,i]of[[-20,-63.78,'s',4],[30,-63.78,'s',2],[55.78,-24,'w',3],[-20,33.78,'n',1],[25,33.78,'n',5],[55.78,12,'w',4]])panel(x,1.2,z,.9,1.2,d,MT.poster(i));
 kOnWall('h',-63.8,1,-35,10,7,2.6,MT.lumenbanner);kOnWall('h',33.8,-1,-10,8,7.2,2,MT.keyscreen);
 for(const x of[-44,-28,-2,34])box(x-1.4,0,-61.2,x+1.4,.45,-60.6,{side:MT.clad,top:MT.woodDark});for(const x of[-46,-20,26])box(x-1.4,0,31.2,x+1.4,.45,31.8,{side:MT.clad,top:MT.woodDark});for(const z of[-40,-16])box(53.2,0,z-1.4,53.8,.45,z+1.4,{side:MT.clad,top:MT.woodDark});
 for(const[x,z]of[[-62,-52],[54,-52],[54,32],[-62,32],[54,18],[-52,-22],[-52,18]])kPlant(x,z,1.5,0,'#2a1f36');
 for(const[x,z]of[[-10,-61],[20,31],[53,-25]]){box(x-.3,0,z-.3,x+.3,1.3,z+.3,MT.plain('#1b1026'));box(x-.32,1.05,z-.32,x+.32,1.2,z+.32,MT.glow('#8affc1',1.4),{col:false})}
 // Level 2: the sky terrace over the bar terrace (open air), timber, planters, string lights, a view down into the courtyard
 {const y=L2;sFloor(-64,-50,-50,-24,y,MT.timber,[],.45,MT.timber);railing(-50,-50,-50,-24,y,{m:CH,glass:GL});
  for(const z of[-46,-36,-28]){kPlanter(-63.6,z-1.6,-61.8,z+1.6,.7,y,MT.clad)}for(const z of[-44,-32])box(-58.5,y,z-1.2,-57.5,y+.45,z+1.2,{side:MT.timber,top:MT.timber});
  for(let z=-49;z<=-25;z+=2)box(-56.5,y+3.6+Math.sin(z*.5)*.1,z-.04,-56.4,y+3.68+Math.sin(z*.5)*.1,z+.04,MT.glow('#ffd166',2.2),{col:false});for(const z of[-49,-25])box(-56.5,y,z-.05,-56.4,y+3.7,z+.05,MT.plain('#222'),{col:false});addLight(-57,y+3,-37,[1,.8,.45],12,.6);
  mr(-64,-50,-50,-24,y,'Sky terrace','#2a3a2a')}
 mr(-64,-64,56,-50,0,'Ring · North');mr(-64,-24,-50,20,0,'Ring · West');mr(40,-50,56,20,0,'Ring · East');mr(-64,20,56,34,0,'Ring · South');
 for(const r of BAL)mr(r[0],r[1],r[2],r[3],L1,'','#3a2a4a');mr(10,-60,14,-55.5,L1,'','#3a2a4a');mr(46,0,52,3,L1,'','#3a2a4a');
 mr(-64,-64,56,-50,L2,'Level 2 · Ring','#3a2a4a');mr(-64,-24,-50,20,L2,'','#3a2a4a');mr(40,-50,56,20,L2,'','#3a2a4a');mr(-64,20,56,34,L2,'','#3a2a4a');
}
/* ================= THE COURTYARD (open sky) + the bar terrace ================= */
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
 // the bar terrace (outside, on the courtyard's west edge, under the sky terrace): timber deck, tables, heaters, festoon lights
 {const x0=-64,z0=-50,x1=-50,z1=-24;floorQ(x0,z0,x1,z1,.05,MT.timber);surf(x0,z0,x1,z1,.05);
  railing(-50,-50,-50,-38.5,0,{m:MT.chrome,glass:MT.glass});railing(-50,-35.5,-50,-24,0,{m:MT.chrome,glass:MT.glass});
  for(const[x,z]of[[-60,-46],[-55,-42],[-60,-36],[-55,-30],[-60,-28]]){table(x,z,1.2,1.2,MT.plain('#2a2026'));chair(x-.8,z,'w',MT.plain('#c9a46a'));chair(x+.8,z,'e',MT.plain('#c9a46a'))}
  for(const z of[-44,-32]){box(-52.6,0,z-.25,-52.1,.1,z+.25,MT.metal,{col:false});box(-52.4,.1,z-.06,-52.3,2.2,z+.06,MT.metal,{col:false});box(-52.7,2.2,z-.35,-52,2.5,z+.35,MT.glow('#ff9a5c',1.4),{col:false})}
  for(let x=-63;x<=-51;x+=1.5){for(const z of[-44,-32])box(x-.05,4.4+Math.sin(x)*.08,z-.05,x+.05,4.5+Math.sin(x)*.08,z+.05,MT.glow('#ffd98a',2.2),{col:false})}
  addLight(-57,3.6,-44,[1,.75,.45],11,.75);addLight(-57,3.6,-30,[1,.75,.45],11,.75);(MAPR.con=MAPR.con||[]).push({x0,z0,x1,z1,y:0,n:'Bar terrace',c:'#4a3a2a'})}
}
