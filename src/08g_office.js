/* ============ BRINDLE & CO: the third floor of 41 Cannon Street ============ */
/* A deep open-plan floor (x 496..540, z -4..24, floor y 0, the street 10.8 m below) with floor-to-ceiling glazing on
   three sides and a solid core on the west:
     core (west)        lift lobby with two lifts, the WCs, the printer and lockers
     north-west         kitchen and breakout: worktop run, fridge, high table, water cooler, armchairs by the glass
     middle             three desk pods (Accounts & Claims, Marketing) between the structural columns
     north-east         Linda's glass office          east     sofas in the sun          south-east  the meeting room
     south              your IT helpdesk corner, with the red stapler
   Morning sun comes in low from the east-south-east through the east and south glazing (baked). Outside: Cannon
   Street with the towers opposite, Mill Road and its low warehouses and church to the east, Victoria Park to the
   south, the city all round. */
const OX0=496,OX1=540,OZ0=-4,OZ1=24,OCH=2.85,OGY=-10.8;
function officeTextures(){
 tex('cwFac',192,384,(c,w,h)=>{const g=c.createLinearGradient(0,0,w,h*.8);g.addColorStop(0,'#bcd4e6');g.addColorStop(.45,'#7a92aa');g.addColorStop(1,'#3e4c5e');c.fillStyle=g;c.fillRect(0,0,w,h);
  c.fillStyle='#ffffff26';c.beginPath();c.moveTo(w*.2,0);c.lineTo(w*.55,0);c.lineTo(w*.1,h*.8);c.lineTo(0,h*.8);c.lineTo(0,h*.45);c.fill();
  c.fillStyle='#2a3038';c.fillRect(0,h*.8,w,h*.2);c.fillStyle='#4a5260';c.fillRect(0,h*.8,w,4);c.fillStyle='#20242c';c.fillRect(0,0,8,h);c.fillRect(w-8,0,8,h);grain(c,w,h,6)});
 tex('cwFac2',192,384,(c,w,h)=>{const g=c.createLinearGradient(0,0,0,h*.78);g.addColorStop(0,'#c4e0dc');g.addColorStop(.5,'#6a9290');g.addColorStop(1,'#32484a');c.fillStyle=g;c.fillRect(0,0,w,h);
  if(rnd()<.6){c.fillStyle='#f6f0dc50';c.fillRect(20,30,w-40,h*.5)}c.fillStyle='#d8dcd8';c.fillRect(0,h*.78,w,h*.22);c.fillStyle='#e9ece8';c.fillRect(0,0,10,h);c.fillRect(w-10,0,10,h);grain(c,w,h,6)});
 tex('ceilTile',128,128,(c,w,h)=>{c.fillStyle='#e6e6e2';c.fillRect(0,0,w,h);noise(c,w,h,900,'#9a9a94',.25);c.fillStyle='#c8c8c4';c.fillRect(0,0,w,2);c.fillRect(0,0,2,h);c.fillRect(0,h/2-1,w,2);c.fillRect(w/2-1,0,2,h);grain(c,w,h,4)});
 tex('vinyl',256,256,(c,w,h)=>{for(let i=0;i<8;i++){const v=rnd()*16;c.fillStyle=`rgb(${196+v|0},${170+v|0},${136+v|0})`;c.fillRect(0,i*32,w,32);c.fillStyle='#00000022';c.fillRect(0,i*32+31,w,1);const o=rnd()*w;c.fillRect(o,i*32,1,32);
  for(let k=0;k<5;k++){c.strokeStyle='#7a5a3a14';c.beginPath();const y=i*32+3+rnd()*26;c.moveTo(0,y);c.bezierCurveTo(w*.3,y+3,w*.6,y-3,w,y+1);c.stroke()}}grain(c,w,h,6)});
 tex('carpetTile',128,128,(c,w,h)=>{for(let y=0;y<2;y++)for(let x=0;x<2;x++){const v=112+rnd()*10|0;c.fillStyle=`rgb(${v+4},${v+2},${v})`;c.fillRect(x*64,y*64,64,64);
  c.strokeStyle='#ffffff10';for(let i=0;i<64;i+=3){c.beginPath();if((x+y)%2){c.moveTo(x*64+i,y*64);c.lineTo(x*64+i,y*64+64)}else{c.moveTo(x*64,y*64+i);c.lineTo(x*64+64,y*64+i)}c.stroke()}}noise(c,w,h,2400,'#000',.12);grain(c,w,h,6)});
 tex('cork',256,160,(c,w,h)=>{c.fillStyle='#b88a5a';c.fillRect(0,0,w,h);noise(c,w,h,5000,'#6a4a2a',.35);c.strokeStyle='#5a3a22';c.lineWidth=8;c.strokeRect(0,0,w,h);
  const notes=[['FIRE DRILL · THURS 10:00','#f4f4f0'],['CAKE IN THE KITCHEN','#ffd166'],['MFA IS NOT OPTIONAL — LINDA','#f4f4f0'],['LOST: BLUE MUG','#8affc1'],['5-A-SIDE?','#7cc4ff'],['DON\'T PLUG IN USB STICKS YOU FIND','#ff8fa0']];
  for(let i=0;i<notes.length;i++){const x=12+(i%3)*80,y=14+Math.floor(i/3)*70;c.save();c.translate(x+34,y+28);c.rotate((rnd()-.5)*.12);c.fillStyle=notes[i][1];c.fillRect(-34,-26,68,52);c.fillStyle='#1b1026';c.font='9px sans-serif';
   const ws=notes[i][0].split(' ');let ln='',yy=-12;for(const wd of ws){if(c.measureText(ln+wd).width>60){c.fillText(ln,-30,yy);ln='';yy+=11}ln+=wd+' '}c.fillText(ln,-30,yy);c.fillStyle='#c0304a';c.beginPath();c.arc(0,-22,3,0,7);c.fill();c.restore()}});
 tex('wbrd',384,192,(c,w,h)=>{c.fillStyle='#f6f6f2';c.fillRect(0,0,w,h);c.strokeStyle='#9a9aa4';c.lineWidth=6;c.strokeRect(0,0,w,h);c.lineWidth=2.5;c.font='18px "Comic Sans MS", cursive';
  c.fillStyle='#2a4a9a';c.fillText('Q3: SYNERGY ROADMAP',20,32);c.strokeStyle='#2a4a9a';c.beginPath();c.moveTo(20,40);c.lineTo(230,40);c.stroke();
  c.strokeStyle='#c0304a';for(const[x,y,t]of[[40,80,'leads'],[150,80,'value'],[260,80,'???']]){c.strokeRect(x-10,y-20,90,32);c.fillStyle='#c0304a';c.fillText(t,x,y)}c.beginPath();c.moveTo(120,70);c.lineTo(138,70);c.moveTo(230,70);c.lineTo(248,70);c.stroke();
  c.strokeStyle='#1a7a4a';c.beginPath();c.ellipse(300,150,26,16,0,0,7);c.stroke();c.beginPath();c.arc(326,132,10,0,7);c.stroke();c.beginPath();c.moveTo(335,132);c.lineTo(346,135);c.stroke();c.fillStyle='#1a7a4a';c.fillText('the duck',262,186);
  c.fillStyle='#2a2a30';c.fillText('action: ask Linda',20,140);c.fillText('re: the printer',20,164)});
 tex('lockers',256,256,(c,w,h)=>{c.fillStyle='#5a6a80';c.fillRect(0,0,w,h);for(let x=0;x<4;x++)for(let y=0;y<2;y++){const X=x*64,Y=y*128;c.fillStyle='#6a7a92';c.fillRect(X+3,Y+3,58,122);c.fillStyle='#3a4658';for(let k=0;k<5;k++)c.fillRect(X+14,Y+14+k*6,36,2);
  c.fillStyle='#c8ccd6';c.fillRect(X+50,Y+60,5,14);c.fillStyle='#f4f4f0';c.fillRect(X+12,Y+96,22,10)}grain(c,w,h,6)});
 tex('mural',512,192,(c,w,h)=>{c.fillStyle='#24493a';c.fillRect(0,0,w,h);c.fillStyle='#f4efe6';c.font='bold 54px Chakra Petch, sans-serif';c.fillText('BRINDLE & CO',30,80);c.font='22px Chakra Petch, sans-serif';c.fillStyle='#ffd166';c.fillText('INSURANCE · CLAIMS · SINCE 1987',32,118);
  c.strokeStyle='#ffd16655';c.lineWidth=2;for(let i=0;i<9;i++){c.beginPath();c.arc(440,96,20+i*14,0,7);c.stroke()}c.fillStyle='#f4efe6';c.font='16px Chakra Petch, sans-serif';c.fillText('"We\'re covered."',32,160);grain(c,w,h,6)});
 tex('lift',128,224,(c,w,h)=>{const g=c.createLinearGradient(0,0,w,0);g.addColorStop(0,'#8a8e98');g.addColorStop(.5,'#d8dce4');g.addColorStop(1,'#8a8e98');c.fillStyle=g;c.fillRect(0,0,w,h);c.fillStyle='#4a4e58';c.fillRect(w/2-1,0,2,h);
  noise(c,w,h,600,'#ffffff',.2);for(let i=0;i<h;i+=3){c.fillStyle='#00000008';c.fillRect(0,i,w,1)}});
 tex('screenXL',256,144,(c,w,h)=>{c.fillStyle='#14182a';c.fillRect(0,0,w,h);c.fillStyle='#f4efe6';c.font='bold 16px sans-serif';c.fillText('Q3 CLAIMS · SYNERGY',14,26);const b=[40,62,30,80,55,90];
  for(let i=0;i<b.length;i++){c.fillStyle=i===5?'#ffd166':'#7cc4ff';c.fillRect(20+i*36,130-b[i],24,b[i])}c.fillStyle='#8affc1';c.font='12px sans-serif';c.fillText('slide 4 of 61',180,26)});
 tex('helpq',256,160,(c,w,h)=>{c.fillStyle='#07110d';c.fillRect(0,0,w,h);c.fillStyle='#8affc1';c.font='bold 16px monospace';c.fillText('TICKETS: 47',12,24);c.font='11px monospace';
  const t=['#4512 printer jammed','#4513 printer jammed (again)','#4514 cant find printer','#4515 printer is "looking at me"','#4516 gift cards?? from CEO','#4517 printer'];for(let i=0;i<t.length;i++){c.fillStyle=i===4?'#ff5d73':'#8affc1';c.fillText(t[i],12,48+i*18)}});
}
function buildOffice(){
 officeTextures();
 region('office',{fog:[.74,.8,.88],fr:[90,420],day:1});const RG=G.regions.office;RG.amb=[.62,.64,.7];RG.lmCap=18;RG.lmPages={high:4,medium:3,low:2};
 const SUN=[.78,.46,.42];G.sun.office={d:SUN,c:[1,.88,.72],k:4.4,c0:[518,0,10],half:46,res:4096};
 const M={paint:mt('plasterF','#f2f0ec',.35,0,{r:.9}),core:mt('plasterF','#d8dee6',.35,0,{r:.9}),carpet:mt('carpetTile',0,.8,0,{r:.95}),vinyl:mt('vinyl',0,.55,0,{r:.5}),
  stone:mt('tileDark','#c8c4bc',.35,0,{r:.25}),ceil:mt('ceilTile',0,.83,0,{r:.95}),white:MT.plain('#f2f2ee'),desk:mt('wood','#e8dcc8',.6,0,{r:.5}),oak:mt('wood','#c8a070',.6,0,{r:.5}),
  mull:MT.plain('#3a3e46'),fac:mt('concrete','#8a8e96',.3,0,{r:.7}),green:MT.gloss('#24493a'),steel:mt('metal','#d8dce4',.5,0,{r:.3,m:.7}),black:MT.plain('#16161c'),grey:MT.plain('#8a8e96'),
  stoneW:mt('concrete','#d8d0c0',.5,0,{r:.8}),lead:MT.plain('#5a5e66')};
 const wins=[];
 const WL=(o,f,a0,a1,h,m,inw)=>wallLine(o,f,a0,a1,0,h,m,inw);
 const rm=(x0,z0,x1,z1,fl,n,mc)=>{floorQ(x0,z0,x1,z1,0,fl);surf(x0,z0,x1,z1,0);if(n)(MAPR.office=MAPR.office||[]).push({x0,z0,x1,z1,y:0,n,c:mc||'#4a4a5a'})};
 /* ---------- the floor, the ceiling ---------- */
 rm(504.2,OZ0+.06,OX1-.06,OZ1-.06,M.carpet,'Open plan','#3a3a4a');
 rm(OX0+.2,OZ0+.06,504.2,7,M.vinyl,'Kitchen','#4a4a3a');
 rm(OX0+.2,7.2,504.2,16.8,M.stone,'Lifts','#3a3a44');
 ceilQ(OX0+.2,OZ0+.06,OX1-.06,OZ1-.06,OCH,M.ceil);
 /* ---------- the curtain wall: glass floor to ceiling, mullions every 1.5 m, a low upstand ---------- */
 // o: 'h' along x at z=at, 'v' along z at x=at; out: which side is outdoors (+1/-1)
 const cw=(o,at,a0,a1,out)=>{const n=Math.round((a1-a0)/1.5),st=(a1-a0)/n;
  const B=(p0,y0,p1,y1,t0,t1,m)=>o==='h'?box(p0,y0,Math.min(t0,t1),p1,y1,Math.max(t0,t1),m,{col:false}):box(Math.min(t0,t1),y0,p0,Math.max(t0,t1),y1,p1,m,{col:false});
  B(a0,.12,a1,OCH,at-.01,at+.01,MT.glass);B(a0,0,a1,.12,at-.07,at+.07,M.mull);
  for(let i=0;i<=n;i++){const p=a0+i*st;B(p-.035,.12,p+.035,OCH,at-.08,at+.08,M.mull)}
  for(let i=0;i<n;i++){const c=a0+(i+.5)*st;wins.push({o,at,c,w:st-.07,h:OCH-.12,y:.12,out,fl:0})}
  if(o==='h')colBox(a0,at-.1,a1,at+.1,0,OCH);else colBox(at-.1,a0,at+.1,a1,0,OCH);
  // outside: the facade bands at the slab edges, flush with the floors above and below
  const fo=at+out*.15;if(o==='h'){B(a0,-.7,a1,.12,at+out*.07,fo,M.fac);B(a0,OCH,a1,OCH+.75,at+out*.01,fo,M.fac)}else{B(a0,-.7,a1,.12,at+out*.07,fo,M.fac);B(a0,OCH,a1,OCH+.75,at+out*.01,fo,M.fac)}};
 cw('h',OZ0,OX0+.2,OX1-.08,-1);cw('v',OX1,OZ0+.08,OZ1-.08,1);cw('h',OZ1,504.2,OX1-.08,1);
 // the west party wall and the core walls
 WL('v',OX0,OZ0,OZ1,OCH,M.core,1);
 door('v',504,12,1.8,2.3,0);
 WL('h',7,OX0+.2,504.2,OCH,M.core,1);WL('h',16.8,OX0+.2,504.2,OCH,M.core,1);WL('v',504,7.2,16.8,OCH,MT.glass,1);
 door('v',504,21,.9,2.1,0);door('v',504,22.9,.9,2.1,0);WL('v',504,17,OZ1-.08,OCH,M.core,1);WL('h',OZ1-.2,OX0+.2,504,OCH,M.core,1);
 for(const[z,t]of[[21,'WC'],[22.9,'WC ♿']]){box(504.08,0,z-.45,504.12,2.1,z+.45,MT.door);kSign(504.205,2.18,z,.42,.2,'e',t,'#1b1026','#e9eef5',false)}
 /* ---------- the lift lobby ---------- */
 for(const z of[10,14]){kTq(OX0+.216,0,z,1.2,2.2,'e',mt('lift',0,1,0,{r:.25,m:.7}));kWall('v',OX0+.2,1,z-.7,z+.7,2.2,2.32,0,.04,M.steel);kWall('v',OX0+.2,1,z-.66,z-.6,0,2.2,0,.04,M.steel);kWall('v',OX0+.2,1,z+.6,z+.66,0,2.2,0,.04,M.steel);
  kSign(OX0+.245,2.42,z,.36,.18,'e','3','#ff5d73','#16161c')}
 kWall('v',OX0+.2,1,11.88,12.12,1.05,1.35,0,.02,M.steel);for(const y of[1.12,1.24])box(OX0+.22,y,11.97,OX0+.235,y+.06,12.03,MT.glow('#ffd166',1.4),{col:false});
 kOnWall('h',7.2,1,500.2,3.6,1.35,.8,signM('BRINDLE & CO · THIRD FLOOR','#f4efe6','#24493a',3.6,.8));
 {const bx=501.3;box(bx-.9,.4,16.32,bx+.9,.46,16.76,M.oak,{col:false});for(const x of[bx-.82,bx+.72])box(x,0,16.38,x+.1,.4,16.7,M.black,{col:false});colBox(bx-.9,16.32,bx+.9,16.76,0,.46)}
 kPlant(503.3,7.75,1.1,0,'#2a2a30');kPlant(503.3,16.25,1.1,0,'#2a2a30');
 kPanelLight(500,OCH,10,1.2,.6,'#f4f0e8',7,.55);kPanelLight(500,OCH,14,1.2,.6,'#f4f0e8',7,.55);
 /* ---------- the kitchen ---------- */
 {const f=OX0+.2;// worktop run along the west wall, z -3.4..4
  box(f,0,-3.4,f+.6,.86,4,M.white,{nt:1});box(f,.86,-3.4,f+.64,.9,4,mt('marble','#e8e4dc',.4,0,{r:.25}),{col:false});colBox(f,-3.4,f+.64,4,0,.9);
  {const n=12,dw=7.4/n;for(let i=0;i<n;i++){const z=-3.4+i*dw;box(f+.6,.06,z+.015,f+.606,.84,z+dw-.015,M.white,{col:false});box(f+.606,.72,z+dw/2-.05,f+.622,.74,z+dw/2+.05,M.steel,{col:false})}}
  kTq(f+.006,.9,.3,7.4,.6,'e',mt('metro',0,1,0,{r:.35}),.5,.25);
  kWall('v',f,1,-3.4,4,1.5,2.2,0,.35,M.white);for(let i=0;i<6;i++){const z=-3.4+i*7.4/6;box(f+.35,1.52,z+.012,f+.356,2.18,z+7.4/6-.012,M.white,{col:false})}
  box(f+.1,.86,-.2,f+.5,.905,.5,M.steel,{col:false});box(f+.14,.88,-.15,f+.46,.912,.45,MT.plain('#3a3e46'),{col:false});kWall('v',f,1,.13,.17,.9,1.22,.04,.08,MT.chrome);kWall('v',f,1,.13,.17,1.18,1.22,.08,.24,MT.chrome);
  box(f+.18,.9,1.45,f+.36,1.14,1.63,MT.gloss('#e9e3da'),{col:false});box(f+.14,.9,2.2,f+.5,1.32,2.62,MT.plain('#2a2a30'),{col:false});box(f+.48,1.02,2.32,f+.506,1.12,2.5,MT.glow('#8affc1',1.2),{col:false});
  box(f+.08,.9,3.1,f+.5,1.18,3.75,MT.plain('#e9e3da'),{col:false});box(f+.5,.96,3.15,f+.505,1.14,3.55,MT.plain('#2a2a30'),{col:false});
  // the fridge, and the note on it
  box(f,0,4.02,f+.7,1.86,4.78,MT.gloss('#e9ece8'));box(f+.7,1.05,4.08,f+.72,1.75,4.12,M.steel,{col:false});box(f+.7,.15,4.08,f+.72,.95,4.12,M.steel,{col:false});
  kTq(f+.722,1.25,4.45,.42,.32,'e',mt(signTex('WHO TOOK MY YOGHURT','#1b1026','#ffd166',256,192),0,1,0,{r:.8}));
  for(const[z,c]of[[.9,'#c0304a'],[1.05,'#2a4a8a'],[3.95,'#ffd166']])kMug(f+.3,.9,z,c);
  vfx('steam',{b0:[f+.27,1.16,1.54],n:14,size:.4,col:[1,1,1],op:.22,sp:1.1});vfx('steam',{b0:[f+.3,1.33,2.42],n:10,size:.35,col:[1,1,1],op:.18,sp:1.3});
  kBin(f+.25,4.95,0,'#2a4a3a');kBin(f+.6,4.95,0,'#2a2a8a');
 }
 // the high table and its stools
 {box(500.05,1.0,-.4,500.95,1.04,2.4,M.oak,{col:false});for(const z of[-.25,2.25])box(500.45,0,z-.04,500.55,1,z+.04,M.black,{col:false});box(500.2,0,-.35,500.8,.02,2.35,M.black,{col:false});colBox(500.05,-.4,500.95,2.4,0,1.04);
  for(const z of[.3,1.7])for(const x of[499.55,501.45])kStool(x,z,.74,MT.fabric('#c9a46a'));kMug(500.3,1.04,.5,'#7cc4ff');kPaper(500.6,1.04,1.6,3)}
 // the water cooler, against the lobby wall
 {const x=503.4,z=6.78;box(x-.17,0,z-.17,x+.17,1.05,z+.17,MT.gloss('#e9ece8'));box(x-.14,1.05,z-.14,x+.14,1.45,z+.14,mt('white','#9ad0f4',.5,0,{glass:1}));box(x-.06,.75,z-.2,x+.06,.82,z-.17,MT.plain('#2a4a8a'),{col:false});}
 kOnWall('h',7,-1,500,1.8,1.25,1.1,mt('cork',0,1,0,{r:.9}));
 // armchairs by the window
 for(const[x,z,f]of[[506.6,-2.4,'e'],[509,-2.4,'w']]){const m=MT.fabric(f==='e'?'#c0603a':'#3a6a5a'),w=.82;box(x-w/2,0,z-w/2,x+w/2,.42,z+w/2,m);const bx=f==='e'?x-w/2:x+w/2-.18;box(bx,.42,z-w/2,bx+.18,.9,z+w/2,m,{col:false});
  for(const k of[-1,1])box(x-w/2+(f==='e'?.18:0),.42,z+k*(w/2-.09)-.09,x+w/2-(f==='e'?0:.18),.62,z+k*(w/2-.09)+.09,m,{col:false})}
 {box(507.4,0,-2.75,508.2,.4,-2.05,M.oak);kMug(507.7,.4,-2.4,'#ffd166')}
 kPlant(505.3,-3.35,1.3,0,'#3a3e48');kPlant(511,-3.35,1.3,0,'#3a3e48');
 kPanelLight(500,OCH,-1,1.2,.6,'#f4f0e8',7,.5);kPanelLight(500,OCH,4,1.2,.6,'#f4f0e8',7,.5);
 /* ---------- by the core: printer, recycling, lockers ---------- */
 {const f=504.2;box(f+.05,0,18.4,f+.75,1.05,19.0,MT.plain('#e9e9e4'));box(f+.1,1.05,18.45,f+.7,1.15,18.95,MT.plain('#c8c8c4'),{col:false});box(f+.25,1.05,18.48,f+.45,1.2,18.56,MT.plain('#2a2a30'),{col:false});
  box(f+.75,.85,18.6,f+.756,.95,18.8,MT.glow('#ff5d73',2),{col:false});kSign(f+.758,.58,18.7,.5,.16,'e','PC LOAD LETTER','#ff5d73','#1b1026');
  for(let i=0;i<3;i++)box(f+.1,i*.26,19.2,f+.55,i*.26+.25,19.65,MT.plain(i%2?'#d8c8a0':'#c9b690'));
  kBin(f+.25,17.5,0,'#2a4a8a');kBin(f+.6,17.5,0,'#2a6a3a')}
 /* ---------- structural columns ---------- */
 for(const[x,z]of[[513,6],[522,6],[513,15],[522,15]])box(x-.25,0,z-.25,x+.25,OCH,z+.25,M.paint);
 /* ---------- desk pods: six desks back to back, screens between ---------- */
 const pod=(cx,cz,cols,label)=>{const x0=cx-2.4;box(x0,.74,cz-.01,x0+4.8,1.16,cz+.01,MT.fabric('#5a6a7a'),{col:false});
  for(let i=0;i<3;i++){const x=x0+.8+i*1.6;
   kDesk(x,cz-.4,1.6,.8,'s',M.desk);kDesk(x,cz+.4,1.6,.8,'n',M.desk);
   kMonitor(x,.74,cz-.18,'n',i%2?MT.dash:MT.code);kMonitor(x,.74,cz+.18,'s',i%2?MT.code:MT.dash);kKeyboard(x,.74,cz-.55,'x');kKeyboard(x,.74,cz+.55,'x');
   kChair(x,cz-1.05,'s',0,cols[i%cols.length]);kChair(x,cz+1.05,'n',0,cols[(i+1)%cols.length]);
   if(i!==1){kMug(x+.55,.74,cz-.6,'#e9e3da');kPaper(x-.5,.74,cz+.55,2)}else kPlant(x+.6,cz+.6,.35,.74)}
  if(label)kSign(cx,2.2,cz,2.6,.42,'n',label,'#f4efe6','#24493a');if(label)kSign(cx,2.2,cz+.002,2.6,.42,'s',label,'#f4efe6','#24493a');
  if(label){for(const k of[-1,1])box(cx+k*1.1-.005,2.62,cz-.005,cx+k*1.1+.005,OCH,cz+.005,M.black,{col:false})}};
 pod(517.5,1.6,['#3a5a8a','#2a3a5a'],'ACCOUNTS');pod(517.5,10.5,['#3a5a8a','#5a3a4a'],'CLAIMS');pod(517.5,19.4,['#c0603a','#3a6a5a'],'MARKETING');
  kPlant(511.8,10.5,1.2,0,'#3a3e48');kPlant(523.4,1.6,1.2,0,'#3a3e48');
 /* ---------- your helpdesk: the south-east corner of the open plan ---------- */
 {kDesk(526.6,22.6,3.2,.8,'s',M.desk);kDesk(528.6,21.4,1.6,.8,'e',M.desk);
  kMonitor(526.1,.74,22.82,'n',MT.code);kMonitor(527.1,.74,22.82,'n',mt('helpq',0,1,1,{k:1.2}));kKeyboard(526.6,.74,22.3,'x');
  box(525.3,.74,22.25,525.42,.8,22.45,MT.gloss('#c0304a'),{col:false});box(525.28,.8,22.27,525.44,.83,22.43,MT.gloss('#c0304a'),{col:false});
  kMug(527.8,.74,22.4,'#8affc1');kPaper(528.6,.74,20.9,4);box(528.4,.74,21.5,528.85,.9,21.95,MT.plain('#c9a46a'),{col:false});
  kChair(526.6,21.6,'s',0,'#c0304a');
  // the spares trolley and the router that runs the floor
  box(529.6,0,22.9,530.6,.9,23.6,M.steel);for(let i=0;i<3;i++)box(529.7+i*.3,.9,23,529.95+i*.3,1.02,23.5,MT.plain(['#2a2a30','#c9a46a','#2a2a30'][i]),{col:false});
  box(523.6,0,23.25,524.3,1.4,23.7,MT.gloss('#16161c'));for(let i=0;i<5;i++)box(523.65,.2+i*.24,23.244,524.25,.23+i*.24,23.25,MT.glow(['#8affc1','#7cc4ff','#ffd166','#8affc1','#ff5d73'][i],1.5),{col:false});
  kSign(526.6,2.05,21.9,3,.36,'n','IT HELPDESK · HAVE YOU TRIED TURNING IT OFF AND ON?','#8affc1','#07110d');for(const k of[-1,1])box(526.6+k*1.3-.005,2.41,21.895,526.6+k*1.3+.005,OCH,21.905,M.black,{col:false});
  kPlant(523.6,21.2,1,0,'#c0304a')}
 /* ---------- Linda's office: glass, north-east corner ---------- */
 door('v',531,2.6,1,2.25,0);WL('v',531,OZ0+.1,4.8,OCH,MT.glass,1);WL('h',4.8,531,OX1-.1,OCH,MT.glass,1);
 for(let z=OZ0+.4;z<4.6;z+=.6)if(Math.abs(z-2.6)>.7)box(531.062,1.05,z,531.072,1.2,z+.4,MT.plain('#e9eef5'),{col:false});
 kSign(531.058,1.5,1.4,1.2,.18,'w','LINDA · IT & FACILITIES','#1b1026','#e9eef5',false);
 {kDesk(535.8,.3,1.8,.8,'w',M.oak);kMonitor(535.55,.74,.3,'e',MT.dash);kKeyboard(535.95,.74,.3,'z');kMug(535.7,.74,1.05,'#c0304a');kPaper(536,.74,-.35,3);
  kChair(536.75,.3,'w',0,'#2a2a34');for(const z of[-.3,.9])kStool(534.6,z,.46,MT.fabric('#3a3a4a'));
  box(539.25,0,-3.8,539.85,1.3,-3.2,MT.plain('#8a8e96'));for(let i=0;i<3;i++)box(539.25,.2+i*.4,-3.2,539.85,.24+i*.4,-3.195,MT.plain('#5a5e66'),{col:false});
  kPlant(532,-3.3,1.2,0,'#e9e3da');kPlant(539.3,4.2,1.1,0,'#e9e3da');
  box(531.9,0,4.05,532.1,1.75,4.25,M.black);box(531.75,1.6,4.0,532.25,1.64,4.3,M.black,{col:false})}
 kPanelLight(535.5,OCH,.5,1.2,.6,'#f4f6ff',6,.45);
 /* ---------- sofas in the sun ---------- */
 sofa(535.5,7.3,2.2,'n','#3a5a6a');sofa(535.5,12.4,2.2,'s','#c9a46a');box(535,0,9.55,536,.38,10.15,M.oak);floorQ(534,8.1,537,11.6,.006,mt('fabric','#7a8a7a',.8,0,{r:1}));
 kPlant(539.3,5.8,1.2,0,'#3a3e48');kPlant(539.3,14.2,1.2,0,'#3a3e48');kMug(535.3,.38,9.8,'#ffd166');
 /* ---------- the meeting room ---------- */
 door('v',531,17.2,1,2.25,0);WL('h',15,531,OX1-.1,OCH,M.paint,1);WL('v',531,15.2,OZ1-.1,OCH,MT.glass,1);
 for(let z=15.6;z<23.6;z+=.6)if(Math.abs(z-17.2)>.7)box(531.062,1.05,z,531.072,1.2,z+.4,MT.plain('#e9eef5'),{col:false});
 kOnWall('h',15,-1,535.5,4.4,.75,1.65,mt('mural',0,1,0,{r:.8}));
 {box(534.9,.72,17.6,536.3,.76,21.4,MT.gloss('#f2f2ee'),{col:false});for(const z of[18,21])box(535.5,0,z-.05,535.7,.72,z+.05,M.steel,{col:false});colBox(534.9,17.6,536.3,21.4,0,.76);
  for(const z of[18.2,19.5,20.8]){kChair(534.25,z,'e',0,'#3a3a4a');kChair(536.95,z,'w',0,'#3a3a4a')}kChair(535.6,22.15,'n',0,'#3a3a4a');
  kOnWall('h',15.2,1,535.6,2.2,.95,1.24,mt('screenXL',0,1,1,{k:1.15}));kWall('h',15.2,1,534.45,536.75,.9,.95,0,.03,M.black);
kPlant(539.3,23.3,1.1,0,'#e9e3da');kPaper(535.3,.76,18.4,1);kPaper(535.9,.76,20.6,1)}
    kPanelLight(535.6,OCH,19.6,1.2,.6,'#f4f6ff',6,.5);
 /* ---------- ceiling lights over the open plan ---------- */
 for(const x of[508,517.5,527])for(const z of[-1.3,4.2,7.9,13.1,16.9,22.1])kPanelLight(x,OCH,z,1.2,.6,'#fff6ea',7,.3);kPanelLight(535.5,OCH,10,1.2,.6,'#fff4e0',7,.4);
 vfx('dust',{b0:[506,.3,-3.6],b1:[539.6,2.7,23.6],n:170,size:1,col:[1,.92,.8],op:.32,sp:.6});

 /* ================= OUTSIDE ================= */
 G.lmK=.22;
 // our own tower: curtain-wall facade above and below this floor
 {const fac=mt('cwFac',0,1,0,{r:.25,m:.3}),t=.15;
  const cx=(OX0+OX1+t)/2,W=OX1+t-OX0;kTq(cx,OGY,OZ0-t,W,-.7-OGY,'n',fac,1.5,3.6);kTq(cx,OCH+.75,OZ0-t,W,40-OCH-.75,'n',fac,1.5,3.6);
  kTq(cx,OGY,OZ1+t,W,-.7-OGY,'s',fac,1.5,3.6);kTq(cx,OCH+.75,OZ1+t,W,40-OCH-.75,'s',fac,1.5,3.6);
  kTq(OX1+t,OGY,(OZ0+OZ1)/2,OZ1-OZ0+.3,-.7-OGY,'e',fac,1.5,3.6);kTq(OX1+t,OCH+.75,(OZ0+OZ1)/2,OZ1-OZ0+.3,40-OCH-.75,'e',fac,1.5,3.6);
  quad([OX0,40,OZ1+t],[OX1+t,40,OZ1+t],[OX1+t,40,OZ0-t],[OX0,40,OZ0-t],M.lead,1,1)}
 // the neighbour to the west, taller, in stone
 box(452,OGY,OZ0-.15,OX0,46,OZ1+.15,{side:mt('facGrey',0,.05,0,{r:.85}),top:M.lead},{col:false,nx1:1});
 // streets: Cannon Street (north), Mill Road (east), Park Road (south). Pavements are 12 cm up, kerbs sit on the road side
 G.lmK=.3;
 {const pav=MT.pavers,road=MT.road,Y=OGY,P=Y+.12,kerb=M.stoneW,line=MT.plain('#f4efe6');
  floorQ(420,-8.4,544.4,OZ0-.15,P,pav);floorQ(OX1+.15,OZ0-.15,544.4,28.4,P,pav);floorQ(420,OZ1+.15,OX1+.15,28.4,P,pav);
  floorQ(420,-19.6,620,-8.4,Y,road);floorQ(544.4,-8.4,556,150,Y,road);floorQ(420,28.4,544.4,40,Y,road);
  floorQ(420,-23.8,620,-19.6,P,pav);floorQ(556,-8.4,560,150,P,pav);floorQ(560,-8.4,620,-4,P,pav);floorQ(420,40,544.4,42,P,pav);
  box(420,Y,-8.55,544.55,P,-8.4,kerb,{col:false});box(555.85,Y,-8.55,620,P,-8.4,kerb,{col:false});box(420,Y,-19.6,620,P,-19.45,kerb,{col:false});
  box(544.4,Y,-8.4,544.55,P,28.55,kerb,{col:false});box(420,Y,28.4,544.4,P,28.55,kerb,{col:false});box(420,Y,39.85,544.55,P,40,kerb,{col:false});box(544.4,Y,40,544.55,P,150,kerb,{col:false});box(555.85,Y,-8.4,556,P,150,kerb,{col:false});
  for(let x=424;x<616;x+=6)if(x<543||x>557)box(x,Y,-14.08,x+3,Y+.004,-13.92,line,{col:false});for(let z=0;z<146;z+=6)box(550.12,Y,z,550.28,Y+.004,z+3,line,{col:false});for(let x=424;x<540;x+=6)box(x,Y,34.12,x+3,Y+.004,34.28,line,{col:false});
  for(let i=0;i<7;i++)box(546+i*1.2,Y,-6,546.6+i*1.2,Y+.004,-2,line,{col:false});
  // traffic
  car(470,-11,'x','#c0304a',{y:Y});car(489,-16.8,'x','#e9e3da',{y:Y,taxi:1});car(531,-11.2,'x','#2a4a8a',{y:Y});car(553.2,8,'z','#ffd166',{y:Y});car(547,46,'z','#3a3a44',{y:Y});car(500,31,'x','#3a6a5a',{y:Y});car(476,37.2,'x','#e9e3da',{y:Y});
  // a red double-decker waiting at the stop
  {const bx=506,bz=-10.6,m=MT.gloss('#c0242e'),gl=MT.gloss('#2a3444');box(bx-5.5,Y+.35,bz-1.25,bx+5.5,Y+4.3,bz+1.25,m,{col:false});
   for(const z of[bz+1.25,bz-1.26])for(const[y0,y1]of[[1.1,1.9],[2.6,3.6]])box(bx-5.3,Y+y0,z,bx+5.3,Y+y1,z+.01,gl,{col:false});
   for(const x of[-3.6,3.4])for(const z of[-1.3,1.05])box(bx+x-.5,Y,bz+z,bx+x+.5,Y+.9,bz+z+.25,MT.plain('#14121a'),{col:false});kSign(bx+1,Y+3.85,bz+1.27,4,.4,'s','73 · VICTORIA PARK','#ffd166','#1b1026');
   box(bx-2,P,-7.2,bx+2,P+.05,-6.9,MT.plain('#2a2a30'),{col:false});for(const x of[bx-1.9,bx+1.8])box(x,P,-7.2,x+.1,P+2.6,-7.1,MT.plain('#2a2a30'),{col:false});box(bx-2,P+2.6,-7.4,bx+2,P+2.7,-6.6,MT.plain('#2a2a30'),{col:false});box(bx-1.8,P+.3,-7.16,bx+1.7,P+2.5,-7.15,MT.glass,{col:false})}
  for(const x of[438,470,530])kStreetLamp(x,-7.9,P);for(const x of[456,512,580])kStreetLamp(x,-20.1,P);for(const z of[2,30,60,100])kStreetLamp(544.9,z,P);for(const x of[440,500])kStreetLamp(x,27.9,P);
  for(const x of[446,462,522,552,598])tree(x,-21.8,P);for(const x of[440,474,526])tree(x,-6.8,P);
 }
 // the north side of Cannon Street: towers in glass and stone, shops at street level
 {const rows={facBrick:4,facYellow:4,facRender:5,facGrey:5,facTall:8};
  const row=[[420,452,30,'facGrey','THE CANNON · PUB','#ffd166'],[452,476,52,'cwFac','NOODLE BAR','#ff5d73'],[476,494,24,'facRender','CITY CYCLES','#8affc1'],[494,522,64,'cwFac2','MERIDIAN HOUSE','#e9e3da'],
   [522,540,34,'facBrick','FLAT WHITE · COFFEE','#ffd9a0'],[540,566,44,'cwFac','PHARMACY','#8affc1'],[566,596,28,'facTall','BANK OF THE NORTH','#7cc4ff'],[596,620,38,'facRender','HOTEL','#ff8fc8']];
  for(const[x0,x1,h,ft,nm,col]of row){const z1=-23.8,z0=-52,w=x1-x0,Y=OGY,fh=h-4.5;const tw=ft.startsWith('cw')?[1.5,3.6]:[w/Math.max(1,Math.round(w/8)),rows[ft]*3.6];
   box(x0,Y,z0,x1,Y+h,z1,{side:M.fac,top:M.lead},{col:false,nz1:1});kTq((x0+x1)/2,Y+4.5,z1,w,fh,'s',mt(ft,0,1,0,{r:.6}),tw[0],fh/Math.max(1,Math.round(fh/tw[1])));
   box(x0,Y,z1,x1,Y+4.2,z1+.05,MT.plain('#1a1c22'),{col:false});kTq((x0+x1)/2,Y+.5,z1+.06,w-1.6,2.6,'s',mt('shopwin',0,1,1,{k:.62}),4.6,2.6);
   kSign((x0+x1)/2,Y+3.25,z1+.07,Math.min(w-1.2,nm.length*.42+1),.62,'s',nm,col,'#1b1026');box(x0,Y+4.2,z1,x1,Y+4.5,z1+.25,M.stoneW,{col:false})}}
 // west of us: the stone neighbour, and an older brick block on the corner
 box(420,OGY,OZ0-.15,452,OGY+20,OZ1+.15,{side:mt('facBrick',0,1/8,0,{r:.85}),top:M.lead},{col:false,nx1:1});
 // Mill Road, east: a churchyard and a stone church with a tower, low brick warehouses beyond
 {const P=OGY+.12;floorQ(560,-4,620,150,P,MT.grass);
  for(const[z0,z1,h,ft]of[[26,52,12,'facBrick'],[54,92,9,'facRender'],[94,140,13,'facYellow']]){box(562,OGY,z0,592,OGY+h,z1,{side:mt(ft,0,1/8,0,{r:.85}),top:M.lead},{col:false});box(561.8,OGY+h,z0-.2,592.2,OGY+h+.6,z1+.2,M.stoneW,{col:false});
   for(let k=0;k<3;k++)box(566+k*9,OGY+h+.6,z0+4,569+k*9,OGY+h+2.4,z0+7,MT.plain('#5a5e66'),{col:false})}
  const st=mt('brick','#e8dcc4',.25,0,{r:.85}),sl=mt('slate',0,.3,0,{r:.8});box(564,OGY,-1,588,OGY+11,21,{side:st,top:sl},{col:false});box(563.5,OGY,6,571.5,OGY+27,14,{side:st,top:st},{col:false});
  kSpire(567.5,10,OGY+27,4,14,sl,9);const lw=MT.plain('#2a3040');for(const z of[1.5,4.2,16,18.7])box(563.94,OGY+3,z-.5,564,OGY+8.5,z+.5,lw,{col:false});box(563.44,OGY+2,9,563.5,OGY+9,11,lw,{col:false});for(const y of[12,15.5])box(563.44,OGY+y,9.4,563.5,OGY+y+2.2,10.6,lw,{col:false});for(const z of[7.5,10,12.5])box(563.45,OGY+19,z-.45,563.5,OGY+22,z+.45,MT.plain('#2a2a30'),{col:false});kTq(563.44,OGY+23.2,10,2.4,2.4,'w',signM('XII','#1b1026','#f4efe6',2.4,2.4,false));
  for(const[x,z]of[[576,-3],[584,23],[600,10],[610,40]])tree(x,z,P)}
 // Victoria Park, south: lawns, plane trees, paths, a pond, a bandstand
 {const Y=OGY+.12;floorQ(420,42,544.4,140,Y,MT.grass);floorQ(420,58,544.4,61,Y+.005,MT.gravel);floorQ(498,42,501,58,Y+.005,MT.gravel);floorQ(498,61,501,140,Y+.005,MT.gravel);
  floorQ(510,72,540,92,Y+.01,MT.water);for(const[x0,z0,x1,z1]of[[509.6,71.6,540.4,72],[509.6,92,540.4,92.4],[509.6,72,510,92],[540,72,540.4,92]])box(x0,Y,z0,x1,Y+.3,z1,M.stoneW,{col:false});
  for(const[x,z]of[[440,48],[460,50],[480,47],[520,49],[536,46],[470,70],[452,84],[486,96],[530,104],[470,112],[508,122]])tree(x,z,Y);
  {const cx=476,cz=78,g=MT.gloss('#24493a');box(cx-4,Y,cz-4,cx+4,Y+.6,cz+4,M.stoneW,{col:false});for(let i=0;i<8;i++){const a=i/8*Math.PI*2+Math.PI/8;box(cx+Math.cos(a)*3.6-.1,Y+.6,cz+Math.sin(a)*3.6-.1,cx+Math.cos(a)*3.6+.1,Y+3.6,cz+Math.sin(a)*3.6+.1,g,{col:false})}
   box(cx-4.2,Y+3.6,cz-4.2,cx+4.2,Y+3.9,cz+4.2,g,{col:false});kSpire(cx,cz,Y+3.9,4,1.6,g,5)}
  for(const x of[452,476,524])box(x-1,Y,56.8,x+1,Y+.45,57.4,MT.woodDark,{col:false});
  vfx('birds',{b0:[470,OGY+18,50],b1:[560,OGY+26,110],n:24,size:1,col:[.16,.15,.18],op:.9,sp:.8});vfx('birds',{b0:[440,OGY+30,-90],b1:[600,OGY+40,-40],n:14,size:1.2,col:[.16,.15,.18],op:.9,sp:.6})}
 // the city beyond, in the haze (unlit)
 G.lmK=1;
 {const far=[mt('facTall',0,.06,1,{k:.75}),mt('facGrey',0,.06,1,{k:.72}),mt('cwFac',0,.04,1,{k:.75}),mt('facRender',0,.07,1,{k:.75}),mt('cwFac2',0,.04,1,{k:.75})];
  floorQ(200,-400,840,420,OGY-.3,mt('concrete','#8a8a84',.02,1,{k:.55}));
  for(let i=0;i<56;i++){const a=i/56*Math.PI*2,R=150+(i*37%40),x=518+Math.cos(a)*R,z=10+Math.sin(a)*R,w=18+(i*13%14),h=26+(i*29%50);if(z>40&&z<145&&x>420&&x<620)continue;box(x-w/2,OGY-.3,z-w/2,x+w/2,OGY+h,z+w/2,{side:far[i%5],top:MT.plain('#5a5a66')},{col:false})}
  for(let i=0;i<44;i++){const a=i/44*Math.PI*2+.3,R=230+(i*53%110),x=518+Math.cos(a)*R,z=10+Math.sin(a)*R,w=14+(i*7%16),h=40+(i*41%110);box(x-w/2,OGY-.3,z-w/2,x+w/2,OGY+h,z+w/2,{side:far[(i+2)%5],top:MT.plain('#5a5a66')},{col:false})}}

 /* ================= sunbeams through the sunlit glazing ================= */
 {const d=SUN,L=Math.hypot(...d),u=[d[0]/L,d[1]/L,d[2]/L];
  for(const w of wins){const n=w.o==='h'?[0,0,w.out]:[w.out,0,0],k=n[0]*u[0]+n[2]*u[2];if(k<.25)continue;
   const P=w.o==='h'?[[w.c-w.w/2,w.y,w.at],[w.c+w.w/2,w.y,w.at],[w.c+w.w/2,w.y+w.h,w.at],[w.c-w.w/2,w.y+w.h,w.at]]:[[w.at,w.y,w.c-w.w/2],[w.at,w.y,w.c+w.w/2],[w.at,w.y+w.h,w.c+w.w/2],[w.at,w.y+w.h,w.c-w.w/2]];
   vfx('beam',{pts:P,sun:SUN,floor:.01,len:6,op:.028+.03*k})}}
 /* ================= areas ================= */
 const A=(k,n,r,sp,bg,o)=>area(k,n,'office',r,sp,bg,o);
 A('office','Brindle & Co · 3rd floor',[OX0,OZ0,OX1,OZ1],[498.4,12,-Math.PI/2,0],'office');
 A('lindaoffice','Linda\'s office',[531,OZ0,OX1,4.8],[532.4,2.6,-Math.PI/2,0],'office',{sub:1});
}
