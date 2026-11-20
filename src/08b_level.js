/* ============ LEVEL HELPERS ============ */
const DOORS={},MAPR={},AREAS={},INTS=[],WCH=[],DYN=[];
const LEVELS={home:[[0,'Bakery'],[3.4,'Flat']],con:[[0,'Ground floor'],[5.2,'Upper level']],f13:[[0,'13th floor'],[3.6,'Rooftop']]};
function door(o,at,c,w,h,y){(DOORS[BR]=DOORS[BR]||[]).push({o,at,c,w,h:h||2.7,y:y||0})}
function wallLine(o,fixed,a0,a1,Y,H,m,inward,frame){
 const ds=(DOORS[BR]||[]).filter(d=>d.o===o&&Math.abs(d.at-fixed)<.6&&d.c>a0&&d.c<a1&&d.y>=Y-.1&&d.y<Y+H-.5).sort((p,q)=>p.c-q.c);
 const t0=inward>0?fixed:fixed-.2,t1=inward>0?fixed+.2:fixed,face=inward>0?t1:t0;
 const P=[];let cur=a0;
 for(const d of ds){P.push([cur,d.c-d.w/2,Y,Y+H]);if(d.y>Y+.05)P.push([d.c-d.w/2,d.c+d.w/2,Y,d.y]);if(d.y+d.h<Y+H)P.push([d.c-d.w/2,d.c+d.w/2,d.y+d.h,Y+H]);cur=d.c+d.w/2;
  if(frame!==false){const fm=MT.frame,e=face+inward*.05,a=d.c-d.w/2,b=d.c+d.w/2,y1=d.y+d.h;
   if(o==='h'){box(a-.1,d.y,Math.min(face,e),a,y1+.1,Math.max(face,e),fm,{col:false});box(b,d.y,Math.min(face,e),b+.1,y1+.1,Math.max(face,e),fm,{col:false});box(a,y1,Math.min(face,e),b,y1+.1,Math.max(face,e),fm,{col:false})}
   else{box(Math.min(face,e),d.y,a-.1,Math.max(face,e),y1+.1,a,fm,{col:false});box(Math.min(face,e),d.y,b,Math.max(face,e),y1+.1,b+.1,fm,{col:false});box(Math.min(face,e),y1,a,Math.max(face,e),y1+.1,b,fm,{col:false})}}}
 P.push([cur,a1,Y,Y+H]);
 G.ao=Y;
 for(const s of P){if(s[1]-s[0]<.01||s[3]-s[2]<.01)continue;
  if(o==='h')box(s[0],s[2],t0,s[1],s[3],t1,m);else box(t0,s[2],s[0],t1,s[3],s[1],m);
  if(s[3]-s[2]>1)G.walls[BR].push(o==='h'?[s[0],fixed,s[1],fixed,s[2],s[3]]:[fixed,s[0],fixed,s[1],s[2],s[3]]);
  if(Math.abs(s[2]-Y)<.01&&!m.e){const sk=MT.skirt,f=face+inward*.012;
   if(o==='h'){if(inward>0)quad([s[0],Y,f],[s[1],Y,f],[s[1],Y+.13,f],[s[0],Y+.13,f],sk,1,1);else quad([s[1],Y,f],[s[0],Y,f],[s[0],Y+.13,f],[s[1],Y+.13,f],sk,1,1)}
   else{if(inward>0)quad([f,Y,s[1]],[f,Y,s[0]],[f,Y+.13,s[0]],[f,Y+.13,s[1]],sk,1,1);else quad([f,Y,s[0]],[f,Y,s[1]],[f,Y+.13,s[1]],[f,Y+.13,s[0]],sk,1,1)}}}
 G.ao=undefined;
}
function room(o){
 const{x0,z0,x1,z1}=o,y=o.y||0,h=o.h||3.2;
 if(!o.nofloor){floorQ(x0,z0,x1,z1,y,o.fl);surf(x0,z0,x1,z1,y)}
 if(!o.open&&!o.noceil)ceilQ(x0,z0,x1,z1,y+h,o.ce||MT.ceil);
 const sd=o.sides||'nsew',m=o.wa;
 if(sd.includes('n'))wallLine('h',z0,x0,x1,y,h,m,1,o.frame);
 if(sd.includes('s'))wallLine('h',z1,x0,x1,y,h,m,-1,o.frame);
 if(sd.includes('w'))wallLine('v',x0,z0+(sd.includes('n')?.2:0),z1-(sd.includes('s')?.2:0),y,h,m,1,o.frame);
 if(sd.includes('e'))wallLine('v',x1,z0+(sd.includes('n')?.2:0),z1-(sd.includes('s')?.2:0),y,h,m,-1,o.frame);
 if(o.n)(MAPR[BR]=MAPR[BR]||[]).push({x0,z0,x1,z1,y,n:o.n,c:o.mc||'#3a2a4a'});
}
function area(k,n,reg,r,sp,bg,o){AREAS[k]=Object.assign({k,n,reg,r,sp,bg,y0:-2,y1:4.9},o||{})}
function table(x,z,w,d,m,h,y){y=y||0;h=h||.76;box(x-w/2,y+h-.06,z-d/2,x+w/2,y+h,z+d/2,m,{col:false});const lg=MT.plain('#2a2530');for(const[sx,sz]of[[-1,-1],[1,-1],[-1,1],[1,1]])box(x+sx*(w/2-.08)-.03,y,z+sz*(d/2-.08)-.03,x+sx*(w/2-.08)+.03,y+h-.06,z+sz*(d/2-.08)+.03,lg,{col:false,nt:1});colBox(x-w/2,z-d/2,x+w/2,z+d/2,y,y+h)}
function chair(x,z,dir,m,y){y=y||0;const s=.22;box(x-s,y+.42,z-s,x+s,y+.48,z+s,m,{col:false});const bx={n:[x-s,z-s,x+s,z-s+.06],s:[x-s,z+s-.06,x+s,z+s],e:[x+s-.06,z-s,x+s,z+s],w:[x-s,z-s,x-s+.06,z+s]}[dir];box(bx[0],y+.48,bx[1],bx[2],y+.95,bx[3],m,{col:false});box(x-.03,y,z-.03,x+.03,y+.42,z+.03,MT.plain('#222'),{col:false,nt:1})}
function card(x,y,z,w,h,a,m){const c=Math.cos(a)*w/2,d=Math.sin(a)*w/2;quad([x-c,y,z-d],[x+c,y,z+d],[x+c,y+h,z+d],[x-c,y+h,z-d],m,1,1);quad([x+c,y,z+d],[x-c,y,z-d],[x-c,y+h,z-d],[x+c,y+h,z+d],m,1,1)}
function plant(x,z,s,y){s=s||1;y=y||0;box(x-.25*s,y,z-.25*s,x+.25*s,y+.5*s,z+.25*s,MT.gloss('#b0603a'));box(x-.22*s,y+.5*s,z-.22*s,x+.22*s,y+.52*s,z+.22*s,MT.plain('#3a2418'),{col:false});for(let i=0;i<3;i++)card(x,y+.38*s,z,1.1*s,1.4*s,i*Math.PI/3,MT.leaves)}
function tree(x,z,y){y=y||0;box(x-.16,y,z-.16,x+.16,y+2.4,z+.16,MT.plain('#4a3020'));const a0=rnd()*3;for(let i=0;i<4;i++)card(x,y+1.5,z,3.4,3.4,a0+i*Math.PI/4,MT.leaves);for(let i=0;i<3;i++)card(x,y+2.7,z,2.4,2.4,a0+.4+i*Math.PI/3,MT.leaves)}
function sofa(x,z,w,dir,c,y){y=y||0;const m=MT.fabric(c),d=.9;const hz=dir==='n'||dir==='s';const X0=hz?x-w/2:x-d/2,X1=hz?x+w/2:x+d/2,Z0=hz?z-d/2:z-w/2,Z1=hz?z+d/2:z+w/2;box(X0,y,Z0,X1,y+.45,Z1,m);const b={n:[X0,Z0,X1,Z0+.22],s:[X0,Z1-.22,X1,Z1],w:[X0,Z0,X0+.22,Z1],e:[X1-.22,Z0,X1,Z1]}[dir];box(b[0],y+.45,b[1],b[2],y+.9,b[3],m,{col:false})}
function lightPanel(x,y,z,w,d,col,rng,int){box(x-w/2-.05,y-.03,z-d/2-.05,x+w/2+.05,y,z+d/2+.05,MT.plain('#2a2a30'),{col:false,nt:1});box(x-w/2,y-.07,z-d/2,x+w/2,y-.03,z+d/2,MT.glow(col||'#fff4e0'),{col:false,b:1,nt:1});addLight(x,y-.4,z,hx(col||'#fff4e0'),rng||10,int||.8)}
function pendant(x,y,z,col,rng){box(x-.01,y-.9,z-.01,x+.01,y,z+.01,MT.plain('#222'),{col:false});box(x-.2,y-1.1,z-.2,x+.2,y-.9,z+.2,MT.glow(col||'#ffd98a'),{col:false,b:1});addLight(x,y-1.3,z,hx(col||'#ffd98a'),rng||6,.9)}
function lamp(x,z,y,col){y=y||0;box(x-.06,y,z-.06,x+.06,y+3.6,z+.06,MT.plain('#2a2a30'));box(x-.25,y+3.6,z-.25,x+.25,y+3.9,z+.25,MT.glow(col||'#ffd98a'),{col:false,b:1});addLight(x,y+3.3,z,hx(col||'#ffd98a'),9,.9)}
function screen(x,y,z,w,h,dir,m){panel(x,y,z,w,h,dir,m)}
function int(reg,x,z,label,act,o){INTS.push(Object.assign({reg,x,z,y:0,label,act,r:2.2},o||{}))}
const doorSign=(x,y,z,dir,t,fg)=>panel(x,y,z,Math.min(6,t.length*.3+1),.65,dir,sign(t,fg||'#ffd166'));
function skyBox(cx,cz,s,y0,y1){return;/* replaced by the sky dome */const x0=cx-s,x1=cx+s,z0=cz-s,z1=cz+s,m=MT.sky;quad([x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0],m,1,1);quad([x1,y0,z1],[x0,y0,z1],[x0,y1,z1],[x1,y1,z1],m,1,1);quad([x0,y0,z1],[x0,y0,z0],[x0,y1,z0],[x0,y1,z1],m,1,1);quad([x1,y0,z0],[x1,y0,z1],[x1,y1,z1],[x1,y1,z0],m,1,1);quad([x0,y1,z0],[x1,y1,z0],[x1,y1,z1],[x0,y1,z1],m,1,1)}
function skyline(cx,cz,r0,r1,n,yb){for(let i=0;i<n;i++){const a=i/n*Math.PI*2+rnd()*.1,R=r0+rnd()*(r1-r0),x=cx+Math.cos(a)*R,z=cz+Math.sin(a)*R,w=8+rnd()*14,h=yb+20+rnd()*90;box(x-w/2,yb,z-w/2,x+w/2,h,z+w/2,{side:MT.facade,top:MT.plain('#1a1826')},{col:false});if(rnd()<.35){box(x-.15,h,z-.15,x+.15,h+6,z+.15,MT.plain('#2a2a30'),{col:false});box(x-.35,h+6,z-.35,x+.35,h+6.5,z+.35,MT.glow('#ff5d73',3),{col:false,b:1})}}}

/* ============ LEVELS ============ */
function buildLevels(){
 mats();
 /* ================= HOME: flat above the bakery ================= */
 region('home',{fog:[.12,.09,.08],fr:[6,34]});G.regions.home.amb=[.4,.36,.34];
 door('v',-302,6,1.2,2.3,0);door('v',-302,-6,1.1,2.3,3.4);
 room({x0:-302,z0:-8,x1:-288,z1:12,y:0,h:3.2,fl:MT.wood,wa:MT.wallWarm,n:'Proof bakery',mc:'#6a4a2a'});
 room({x0:-306,z0:-8,x1:-302,z1:8,y:0,h:6.8,fl:MT.wood,wa:MT.wallPale,n:'Stairs',mc:'#4a4a5a'});
 room({x0:-302,z0:-8,x1:-292,z1:2,y:3.4,h:2.8,fl:MT.carpetGrey,wa:MT.wallPale,n:'Your flat',mc:'#4a4a5a'});
 slab(-305.8,-7.8,-302.2,-4,3.4,.3,MT.wood,MT.wallPale);
 stairs(-305.8,-4,-302.2,4,0,3.4,'z-',MT.wood);
 panel(-302.21,1.2,7,1.1,.35,'w',sign('↑ FLAT 1A','#ffd9a0','#4a2e22',256,64));panel(-302.21,4.6,-5,1.1,.35,'w',sign('↓ PROOF','#ffd9a0','#4a2e22',256,64));
 addLight(-304,2.6,6,[1,.85,.7],6,.8);addLight(-304,6.2,-6,[1,.85,.7],6,.8);addLight(-304,4.5,0,[1,.85,.7],8,.9);addLight(-304,2.4,3,[1,.85,.7],5,.7);
 // flat
 const fy=3.4;
 addLight(-297,fy+2.4,-5,[.9,.95,1],7,.8);addLight(-295,fy+2.4,0,[1,.9,.8],6,.6);
 table(-293.2,-7.2,1.8,.9,MT.woodDark,.76,fy);box(-294,fy+.76,-7.6,-292.4,fy+1.35,-7.55,MT.black,{col:false});
 screen(-293.6,fy+.82,-7.54,.62,.45,'s',MT.code);screen(-292.85,fy+.82,-7.54,.62,.45,'s',mt(signTex('firewalls r a joke','#8affc1','#07110d',256,128),0,1,1));
 chair(-293.2,-6.3,'s',MT.plain('#c0304a'),fy);
 box(-301.8,fy,-1.6,-299.4,fy+.5,1.8,MT.linen);box(-301.8,fy,1.6,-299.4,fy+1,1.8,MT.woodDark);box(-301.4,fy+.5,1,-299.8,fy+.62,1.6,MT.plain('#7cc4ff'),{col:false});
 panel(-297,fy+1,-7.79,2.6,1.3,'s',MT.morning);panel(-292.21,fy+1,-3,2.4,1.2,'w',MT.morning);plant(-292.8,1.4,.7,fy);
 box(-298.6,fy,.2,-297.4,fy+.2,1.4,MT.plain('#d8a050'));box(-298.5,fy+.2,.3,-297.5,fy+.3,1.3,MT.plain('#c88a40'),{col:false});
 panel(-301.79,fy+1.1,-2.6,.8,1.05,'e',MT.poster(1));panel(-292.21,fy+1.1,-.4,.8,1.05,'w',MT.poster(4));
 sofa(-295.5,-1.6,2,'s','#6a5a8a',fy);table(-295.5,-3.4,1.2,.6,MT.woodDark,.4,fy);box(-296.6,fy,-7.7,-295.4,fy+1.8,-7.3,MT.woodDark);
 // bakery
 addLight(-296,2.8,6,[1,.8,.55],9,1);addLight(-292,2.8,9,[1,.8,.55],8,.9);addLight(-299,2.8,9,[1,.8,.55],7,.8);addLight(-295,2.8,-2,[1,.75,.5],9,.9);
 for(const x of[-299,-295.5,-292])pendant(x,3.2,7.5,'#ffd98a',5);
 box(-300,0,3,-291,1.05,4,{side:MT.woodDark,top:MT.plain('#e9e3da')});box(-300,1.05,3.05,-295.6,1.5,3.95,MT.bread,{col:false});
 for(const x of[-300,-296,-292])box(x,0,-7.8,x+3,1.6,-6.6,MT.oven);for(const x of[-300,-296,-292])panel(x+1.5,.2,-6.59,2.6,1.3,'s',MT.oven);
 for(let i=0;i<4;i++)box(-289.6,0,-6+i*1.2,-288.4,.6+rnd()*.2,-5+i*1.2,MT.plain('#e9dcc5'));
 box(-301.8,0,-4,-300.6,2.2,0,MT.metal);panel(-300.59,.2,-2,3.6,1.8,'e',MT.bread);
 panel(-301.79,1.2,9.6,2.2,1.4,'e',MT.chalk);panel(-295.5,2.4,3.02,4,.5,'s',sign('PROOF · since 2019','#ffd9a0','#4a2e22'));
 table(-299.5,9.5,1,1,MT.woodDark);chair(-299.5,10.3,'n',MT.plain('#c9a46a'));table(-291,9.5,1,1,MT.woodDark);chair(-291,10.3,'n',MT.plain('#c9a46a'));table(-295.5,8.5,1,1,MT.woodDark);chair(-294.7,8.5,'w',MT.plain('#c9a46a'));
 panel(-295.5,1,11.79,7,1.7,'n',MT.morning);panel(-295.5,0,11.78,1.2,2.2,'n',MT.door);plant(-301.4,11.4,.8);plant(-288.6,11.4,.8);
 area('flat','Your flat','home',[-302,-8,-292,2],[-296.5,-4,Math.PI/2,3.4],'flat',{y0:3,y1:7});
 area('stairs','Stairs','home',[-306,-8,-302,8],[-304,6,0,0],'flat',{y0:-1,y1:7,hide:1});
 area('bakery','Proof bakery','home',[-302,-8,-288,12],[-299,7,-Math.PI/2,0],'bakery',{y0:-1,y1:3});

 /* ================= CONVENTION CENTRE + HOTEL ================= */
 region('con',{fog:[.07,.04,.1],fr:[14,75]});G.regions.con.amb=[.3,.27,.36];
 door('h',-6,-24,5,3.4);door('h',-6,8,5,3.4);door('h',-6,34,4,3.2);
 door('h',6,-27,8,3.6);door('h',6,-6,3);door('h',6,9,3);door('h',6,23,3);door('h',6,37,3);door('v',44,0,4,3.4);
 door('h',6,-36.5,2.4,2.8,5.2);door('h',6,-2,3,2.9,5.2);door('h',6,27,3,2.9,5.2);
 door('h',-42,-38.5,2,2.4);door('v',-40,26,3,3);door('v',-40,14,2.4,2.8,5.2);door('h',32,-27,6,3.6);door('v',-6,42,4,3.2);
 room({x0:-40,z0:-6,x1:44,z1:6,h:10.5,fl:MT.carpetCon,wa:MT.wallCon,ce:MT.ceilDark,n:'Concourse',mc:'#5a2a4a'});
 room({x0:-40,z0:-42,x1:-8,z1:-6,h:10,fl:MT.carpetDark,wa:MT.panel,ce:MT.ceilDark,n:'Hall A',mc:'#3a2a5a'});
 room({x0:-40,z0:-52,x1:-26,z1:-42,h:3.4,fl:MT.carpetGrey,wa:MT.wallPale,n:'Green room',mc:'#4a4a5a'});
 room({x0:-8,z0:-36,x1:24,z1:-6,h:7,fl:MT.concrete,wa:MT.wallPale,ce:MT.ceilDark,n:'Vendor Hall',mc:'#5a4a2a'});
 room({x0:24,z0:-30,x1:44,z1:-6,h:8,fl:MT.tileDark,wa:MT.panel,ce:MT.ceilDark,n:'Cosplay Hall',mc:'#1a4a5a'});
 room({x0:-14,z0:6,x1:2,z1:20,h:4.5,fl:MT.carpetGrey,wa:MT.wallWarm,n:'Lockpick',mc:'#5a4a2a'});
 room({x0:2,z0:6,x1:16,z1:22,h:4.5,fl:MT.carpetDark,wa:MT.panel,ce:MT.ceilDark,n:'CTF',mc:'#1a4a3a'});
 room({x0:16,z0:6,x1:30,z1:22,h:4.5,fl:MT.carpetGrey,wa:MT.wallPale,n:'Blue Team',mc:'#1a3a5a'});
 room({x0:30,z0:6,x1:44,z1:20,h:4,fl:MT.carpetDark,wa:MT.panel,ce:MT.ceilDark,n:'Lounge',mc:'#3a2a5a'});
 door('v',10,18,2,2.6,5.2);
 room({x0:-14,z0:6,x1:10,z1:22,y:5.2,h:4,fl:MT.carpetGrey,wa:MT.wallPale,n:'Workshop B',mc:'#2a3a5a'});
 room({x0:10,z0:6,x1:44,z1:22,y:5.2,h:4,fl:MT.carpetCon,wa:MT.panel,ce:MT.ceilDark,n:'Retro Arcade',mc:'#4a1a4a'});
 for(const[x,w]of[[-36.5,2.4],[-2,3],[27,3]])slab(x-w/2,5.7,x+w/2,6.3,5.2,.3,MT.carpetGallery,MT.plain('#2a1f36'));
 slab(9.7,17,10.3,19,5.2,.3,MT.carpetGrey);
 room({x0:-40,z0:6,x1:-14,z1:32,h:11,fl:MT.marble,wa:MT.wallHotel,n:'Hotel Lobby',mc:'#5a4a3a'});
 room({x0:-62,z0:12,x1:-40,z1:32,h:4.5,fl:MT.woodDark,wa:MT.wallWarm,ce:MT.ceilDark,n:'Bar',mc:'#5a3a2a'});
 room({x0:-62,z0:6,x1:-40,z1:32,y:5.2,h:4,fl:MT.concrete,wa:MT.panel,ce:MT.ceilDark,n:'Hardware Village',mc:'#2a4a3a'});
 room({x0:-46,z0:32,x1:-6,z1:56,h:5,fl:MT.pavers,wa:MT.brick,open:1,frame:false,n:'Plaza',mc:'#3a3a4a'});
 room({x0:-6,z0:34,x1:16,z1:56,h:5,fl:MT.tile,wa:MT.wallWarm,n:'Food Court',mc:'#5a3a2a'});
 room({x0:44,z0:-18,x1:74,z1:22,h:4.5,fl:MT.grass,wa:MT.brick,open:1,nofloor:1,frame:false,n:'Garden',mc:'#2a4a2a'});
 /* concourse */
 for(let x=-34;x<44;x+=9)lightPanel(x,10.5,-1.2,3,1.2,'#ffe8f0',15,.8);
 for(let x=-30;x<44;x+=14){box(x-.35,0,-.35,x+.35,10.5,.35,MT.wallCon);box(x-.42,0,-.42,x+.42,.15,.42,MT.chrome,{col:false});box(x-.4,3.2,-.4,x+.4,3.3,.4,MT.glow('#ff5d73',1.8),{col:false,b:1})}
 /* gallery: upper walkway along the south side, reached from the lobby mezzanine or the stairs */
 slab(-39.8,3.2,43.8,5.8,5.2,.35,MT.carpetGallery,MT.plain('#2a1f36'));
 railing(-39.8,3.2,10,3.2,5.2,{m:MT.chrome,glass:MT.glass});railing(12,3.2,43.8,3.2,5.2,{m:MT.chrome,glass:MT.glass});
 for(let x=-36;x<44;x+=8){box(x-.25,4.78,4.3,x+.25,4.85,4.8,MT.glow('#fff1dc'),{col:false,b:1});addLight(x,4.4,4.5,[1,.9,.8],7,.55)}
 for(let x=-38;x<44;x+=10)box(x-.08,5.2,3.32,x+.08,5.25,5.6,MT.glow('#8affc1',1.6),{col:false});
 slab(10,.8,12,3.2,5.2,.35,MT.carpetGallery,MT.plain('#2a1f36'));box(10.05,0,.85,11.95,4.85,3.15,MT.wallCon);
 stairs(12,.8,20,3.2,0,5.2,'x-',MT.carpetGallery,{nose:MT.chrome});
 railing(12,.8,20,.8,5.2,{y2:0,m:MT.chrome});railing(10,.8,12,.8,5.2,{m:MT.chrome,glass:MT.glass});railing(10,.8,10,3.2,5.2,{m:MT.chrome,glass:MT.glass});
 box(12,0,3.15,20,4.85,3.25,MT.wallCon);
 doorSign(-2,8.2,5.78,'n','WORKSHOP B','#7cc4ff');doorSign(27,8.2,5.78,'n','RETRO ARCADE','#ff8fc8');doorSign(16,2.6,.78,'s','↑ GALLERY · WORKSHOPS · ARCADE','#8affc1');
 /* hanging banners in the atrium */
 for(const[x,c]of[[-27,'#ff5d73'],[-5,'#8affc1'],[19,'#ffd166'],[35,'#7cc4ff']]){box(x-.02,9.2,-2.6,x+.02,10.5,-2.4,MT.plain('#222'),{col:false});box(x-.9,5.6,-2.56,x+.9,9.2,-2.44,MT.fabric(c),{col:false})}
 doorSign(-24,3.6,-5.78,'s','HALL A · MAIN STAGE');doorSign(8,3.6,-5.78,'s','VENDOR HALL');doorSign(34,3.4,-5.78,'s','COSPLAY HALL','#2bf0ff');
 doorSign(-27,3.8,5.78,'n','HOTEL LOBBY','#ffe0a0');doorSign(-6,3.2,5.78,'n','LOCKPICK VILLAGE');doorSign(9,3.2,5.78,'n','CTF','#8affc1');doorSign(23,3.2,5.78,'n','BLUE TEAM VILLAGE','#7cc4ff');doorSign(37,3.2,5.78,'n','CHILL-OUT','#c9b6ff');doorSign(43.78,3.6,0,'w','GARDEN','#8affc1');
 panel(-10,6.4,-.01,12,3,'s',MT.lumenbanner);panel(-10,6.4,.01,12,3,'n',MT.lumenbanner);box(-16,9.4,-.03,-15.96,10.5,.03,MT.plain('#222'),{col:false});box(-4.04,9.4,-.03,-4,10.5,.03,MT.plain('#222'),{col:false});
 box(-20,0,-2.6,-12,1.05,-1.4,{side:MT.plain('#ff5d73'),top:MT.plain('#f6eefc')});panel(-16,1.4,-5.79,7,1,'s',sign('REGISTRATION · BADGE PICKUP','#1b1026','#ffd166'));
 for(let i=0;i<6;i++)box(-19.5+i*1.3,1.05,-2.3,-19.1+i*1.3,1.12,-1.7,MT.plain(['#ffd166','#8affc1','#ff5d73'][i%3]),{col:false});
 box(-4,0,-5.8,6,3.4,-5.4,MT.plain('#0d1830'));panel(1,1.2,-5.39,9,2.2,'s',MT.lumen);box(-2,0,-4.2,4,1,-3.4,MT.plain('#0d1830'));panel(1,.2,-3.39,5,.6,'s',sign('FREE PRIVACY! INSTALL SAFESPHERE','#5ab4ff','#0d1830'));addLight(1,3,-3,[.4,.7,1],8,1);
 box(26,0,1.5,34,.25,5.8,MT.plain('#3a1a40'),{walk:1,col:false});panel(30,.3,5.79,8,4.5,'n',MT.stream);box(29,.25,2.2,31,.85,2.8,MT.plain('#ffffff'));
 for(const x of[26.6,33.4]){box(x-.05,.25,2,x+.05,1.8,2.1,MT.plain('#222'),{col:false});box(x-.4,1.8,2,x+.4,2.6,2.08,MT.glow('#fff6fb'),{col:false});addLight(x,2.2,1.4,[1,.7,.9],6,1)}
 for(let i=0;i<5;i++)box(27+i*1.5,.25,5.2,27.6+i*1.5,.85,5.7,MT.plain(['#ff8fc8','#c9b6ff','#ffd166','#8affc1','#ff5d73'][i]),{col:false});
 for(const x of[-34,-6,4,40])box(x-1.2,0,-.5,x+1.2,.45,.5,MT.woodDark);
 for(const x of[-38,-30,-2,16,30,42])plant(x,-5,1);
 panel(-38,1.2,-5.79,.9,1.2,'s',MT.poster(4));panel(20,1.2,-5.79,.9,1.2,'s',MT.poster(2));panel(42,1.2,5.79,.9,1.2,'n',MT.poster(3));panel(-39.79,2,0,4,2.3,'e',MT.keyscreen);
 /* Hall A: walkable stage, AV platform */
 box(-36,0,-42,-12,1.2,-34,{side:MT.plain('#1a1428'),top:MT.woodDark},{walk:1});panel(-24,2.6,-41.79,18,7,'s',MT.keyscreen);
 stairs(-37.9,-37.5,-36,-35,0,1.2,'x+',MT.woodDark,{sides:1});stairs(-12,-37.5,-10.1,-35,0,1.2,'x-',MT.woodDark,{sides:1});
 box(-24.6,1.2,-36,-23.4,2.3,-35.3,MT.plain('#2a2a3a'));panel(-24,1.6,-35.29,1.2,.5,'s',sign('#20','#ff5d73','#2a2a3a',128,64));
 for(let r=0;r<12;r++){const z=-30+r*1.3;for(const[a,b]of[[-36,-25.5],[-22.5,-12]]){for(let x=a+.4;x<b;x+=.8)chair(x,z,'s',MT.plain(r%2?'#5a2a4a':'#6a2a52'));colBox(a,z-.3,b,z+.3,0,1)}}
 for(let i=0;i<6;i++){const x=-34+i*4,c=['#ff5d73','#8affc1','#7cc4ff'][i%3];box(x-.3,9.6,-34,x+.3,10,-33.4,MT.glow(c),{col:false,b:1});addLight(x,7.5,-37,hx(c),12,.7)}
 lightPanel(-24,10,-22,6,2,'#fff0f8',22,.6);lightPanel(-24,10,-12,6,2,'#fff0f8',18,.5);
 box(-39.8,0,-12,-31,1.4,-7.6,MT.plain('#1a1a24'),{walk:1});stairs(-31,-10.4,-29,-8.6,0,1.4,'x-',MT.plain('#2a2a34'),{sides:1});
 railing(-39.8,-12,-31,-12,1.4,{m:MT.metal});railing(-39.8,-7.6,-31,-7.6,1.4,{m:MT.metal});railing(-31,-12,-31,-10.4,1.4,{m:MT.metal});railing(-31,-8.6,-31,-7.6,1.4,{m:MT.metal});
 for(let i=0;i<3;i++){table(-38+i*2.6,-11,2,.7,MT.plain('#22222c'),.8,1.4);screen(-38.6+i*2.6,2.25,-11.3,.9,.55,'s',i%2?MT.code:MT.dash);screen(-37.4+i*2.6,2.25,-11.3,.9,.55,'s',MT.scope)}
 panel(-35.4,3.4,-7.59,3,.5,'s',sign('AV BOOTH','#7cc4ff','#1a1a24',256,64));addLight(-35,3.4,-9.5,[.5,.7,1],6,.9);
 /* green room */
 sofa(-36,-49,3,'s','#4a5a8a');table(-30,-47,2,1,MT.plain('#e9e3da'));box(-31,.76,-47.3,-29,.9,-46.7,MT.bread,{col:false});
 panel(-33,1.2,-51.79,4,1.3,'s',MT.glow('#fff8e0'));addLight(-33,2.6,-48,[1,.9,.75],9,1);panel(-28,1.2,-51.79,2,1,'s',sign('RIDER: NO BROWN M&Ms','#1b1026','#ffd166',256,128));
 /* vendor hall */
 const stalls=[['STICKERS','#ff8fc8'],['LOCK PICKS','#ffd166'],['LEDs & BADGES','#2bf0ff'],['SUSPICIOUS USB CABLES','#ff5d73'],['LANYARDS ONLY','#8affc1'],['T-SHIRTS','#c9b6ff'],['KEYBOARDS','#ffb347'],['BOOKS & ZINES','#7cc4ff'],['RETRO COMPUTERS','#9be36b']];
 stalls.forEach((s,i)=>{const cx=-2+(i%3)*9,cz=-31+Math.floor(i/3)*7;box(cx-3,0,cz-2,cx+3,2.6,cz-1.8,MT.plain('#2a2a34'));panel(cx,1.9,cz-1.79,5.6,.7,'s',sign(s[0],s[1],'#1b1026'));table(cx,cz,4.5,1,MT.plain(s[1]));for(let k=0;k<6;k++)box(cx-2+k*.75,.76,cz-.3,cx-1.6+k*.75,.9+rnd()*.2,cz+.2,MT.plain(['#fff','#222',s[1]][k%3]),{col:false});box(cx-3,2.6,cz-2,cx+3,2.7,cz+1,MT.plain(s[1]),{col:false,b:1});lightPanel(cx,7,cz,2,1,'#fff',10,.55)});
 box(13,0,-11,21,1.1,-9.5,{side:MT.plain('#ff5d73'),top:MT.plain('#f6eefc')});panel(17,.2,-9.49,6,.8,'s',sign('CON STORE · CREDITS ACCEPTED','#1b1026','#ffd166'));box(13,0,-12.6,21,2.6,-12.4,MT.plain('#3a2a4a'));panel(17,1.2,-12.39,6,1.2,'s',sign('GEAR · GIFTS · CLUB-MATE','#8affc1','#3a2a4a'));
 lightPanel(17,7,-11,4,2,'#fff',12,.8);lightPanel(5,7,-9,4,2,'#fff',12,.6);
 /* cosplay hall: walkable runway */
 box(28,0,-29.8,40,.6,-23,{side:MT.plain('#1c2133'),top:MT.plain('#2a3450')},{walk:1});stairs(33,-23,35,-21.6,0,.6,'z-',MT.plain('#2a3450'),{sides:1});
 panel(34,.8,-29.79,12,5,'s',sign('COSPLAY CONTEST · DAY 3','#2bf0ff','#1c2133'));lightPanel(30,8,-17,4,2,'#f0f8ff',14,.8);lightPanel(38,8,-17,4,2,'#f0f8ff',14,.8);addLight(31,2.5,-16,[1,.9,.9],7,.8);
 for(let i=0;i<5;i++){const x=29+i*2.5,c=i%2?'#2bf0ff':'#ff5fb0';addLight(x,6,-26,hx(c),9,.8);box(x-.25,7.8,-24.4,x+.25,8,-23.9,MT.glow(c),{col:false,b:1})}
 for(const z of[-19,-14])for(const x of[27,31])table(x,z,3,1.2,MT.plain('#c9a46a'));
 for(let i=0;i<4;i++){const x=41.5,z=-20+i*3;box(x-.6,0,z-.05,x+.6,1.8,z+.05,MT.plain('#888'),{col:false});for(let k=0;k<5;k++)box(x-.55+k*.24,.6,z-.25,x-.38+k*.24,1.7,z+.25,MT.plain(['#2bf0ff','#ff5fb0','#ffd166','#c9b6ff','#8affc1'][(k+i)%5]),{col:false});colBox(x-.6,z-.3,x+.6,z+.3,0,1.8)}
 for(const[x,z]of[[25.5,-28],[25.5,-24]]){box(x-.2,0,z-.2,x+.2,1.1,z+.2,MT.plain('#d9c9b9'));box(x-.3,1.1,z-.15,x+.3,1.7,z+.15,MT.plain('#d9c9b9'),{col:false});box(x-.13,1.7,z-.13,x+.13,1.95,z+.13,MT.plain('#d9c9b9'),{col:false})}
 panel(43.79,1.2,-12,.9,1.2,'w',MT.poster(3));
 /* villages */
 for(const z of[10.5,14.5])for(const x of[-10,-3])table(x,z,4,1.2,MT.plain('#e9d9b9'));
 for(let i=0;i<14;i++){const x=-11.5+(i%7)*1.2+(i>6?7:0),z=i%2?10.4:14.4;box(x,.76,z-.15,x+.25,.98,z+.15,MT.plain(['#ffd166','#ff5d73','#7cc4ff','#8affc1'][i%4]),{col:false})}
 panel(-6,1,19.79,10,2.2,'n',MT.pegs);panel(-6,3.4,19.79,6,.7,'n',sign('LOCKPICK VILLAGE · ASK BEFORE YOU PICK','#1b1026','#ffd166'));
 for(const z of[9,15])panel(1.79,0,z,1,2.2,'w',MT.door);lightPanel(-10,4.5,12,3,1,'#fff5e0',9,.8);lightPanel(-3,4.5,12,3,1,'#fff5e0',9,.8);
 for(const z of[10,13.5,17])for(const x of[5.5,12.5]){table(x,z,4,1,MT.plain('#1a1a24'));for(let k=0;k<3;k++)screen(x-1.3+k*1.3,.8,z-.3,.9,.55,'s',MT.code)}
 panel(9,1,21.79,12,3,'n',MT.score);addLight(9,3,19,[.5,1,.7],10,1);addLight(5,3,11,[.5,1,.7],7,.6);addLight(13,3,11,[.5,1,.7],7,.6);
 panel(23,1,21.79,12,3,'n',MT.dash);addLight(23,3,19,[.5,.75,1],10,1);
 for(const z of[10,14])for(const x of[19.5,26.5]){table(x,z,4,1.1,MT.plain('#e9eef5'));screen(x-.8,.8,z-.35,.8,.5,'s',MT.dash);screen(x+.8,.8,z-.35,.8,.5,'s',MT.dash)}
 panel(29.79,1.2,16,.9,1.2,'w',MT.poster(2));lightPanel(23,4.5,12,6,1,'#eef4ff',10,.8);
 const bc=['#ff8fc8','#8affc1','#c9b6ff','#ffd166','#7cc4ff'];
 for(let i=0;i<9;i++){const x=33+(i%3)*3.6,z=10+Math.floor(i/3)*3.4;box(x-.55,0,z-.55,x+.55,.5,z+.55,MT.fabric(bc[i%5]))}
 quad([31,.01,19],[43,.01,19],[43,.01,8],[31,.01,8],MT.rug,6,5.5);
 for(const[x,z,c]of[[31,7,'#ff8fc8'],[43,7,'#8affc1'],[31,19,'#c9b6ff'],[43,19,'#ffd166'],[37,13,'#ff8fc8']]){box(x-.15,0,z-.15,x+.15,.9,z+.15,MT.lava);addLight(x,1,z,hx(c),6,1.1)}
 panel(37,1.2,19.79,6,2.4,'n',mt(signTex('~ breathe ~','#c9b6ff','#140c1e',512,128),0,1,1));
 /* lobby: grand stair + mezzanine balcony */
 slab(-39.8,6.2,-33,31.8,5.2,.4,MT.marble,MT.wallHotel);
 stairs(-33,18,-24,20.6,0,5.2,'x-',MT.marble);
 railing(-24,17.95,-33,17.95,0,{y2:5.2,m:MT.plain('#c9a46a')});railing(-24,20.65,-33,20.65,0,{y2:5.2,m:MT.plain('#c9a46a')});
 const glass=MT.glow('#9fc4e0');
 railing(-33,6.2,-33,17.95,5.2,{m:MT.plain('#c9a46a'),glass});railing(-33,20.65,-33,31.8,5.2,{m:MT.plain('#c9a46a'),glass});
 box(-38.6,0,9,-35.6,1.1,16,{side:MT.woodDark,top:MT.marble});panel(-39.79,2.2,12.5,5,.8,'e',sign('RECEPTION','#ffe0a0','#3a2a2a'));
 for(const z of[10,14,24,28])pendant(-36.4,5.0-.2,z,'#ffe0a0',6);
 sofa(-21,23.4,3,'s','#6a3a4a');sofa(-21,28.6,3,'n','#6a3a4a');table(-21,26,2,1,MT.woodDark,.45);
 for(let i=0;i<2;i++){const x=-26+i*8;box(x-.9,10.4,15-.9,x+.9,10.8,15+.9,MT.glow('#ffe0a0'),{col:false,b:1});box(x-.02,10.8,15-.02,x+.02,11,15+.02,MT.plain('#888'),{col:false});addLight(x,8,15,[1,.85,.6],15,1)}
 addLight(-27,4,26,[1,.85,.6],10,.6);addLight(-28,3,19,[1,.85,.6],10,.8);addLight(-36,8,19,[1,.85,.6],12,.8);
 for(const[x,z]of[[-15.5,7.5],[-15.5,31],[-31.5,31],[-22.5,31]])plant(x,z,1.3);
 for(const[x,z]of[[-37,7.5],[-37,30.5],[-34.5,30.5]])plant(x,z,1,5.2);
 sofa(-37.5,10,2.4,'e','#4a5a7a',5.2);sofa(-37.5,27,2.4,'e','#4a5a7a',5.2);table(-35.6,10,.8,1.4,MT.woodDark,.45,5.2);
 panel(-14.21,0,24,1.6,2.4,'w',MT.elev);panel(-14.21,0,28,1.6,2.4,'w',MT.elev);panel(-14.21,2.6,26,3,.5,'w',sign('LIFTS','#ffe0a0','#3a2a2a',256,64));
 panel(-27,3.8,31.79,5,.6,'n',sign('EXIT · STREET','#ffe0a0','#3a2a2a'));panel(-39.79,3,26,3,.5,'e',sign('BAR','#ff9a5c','#3a2a2a',256,64));panel(-39.79,8.2,14,4.4,.55,'e',sign('HARDWARE HACKING VILLAGE','#8affc1','#1a2a24'));
 /* bar */
 box(-58,0,16,-48,1.1,17,{side:MT.woodDark,top:MT.plain('#3a2418')});box(-58,0,12.2,-48,2.8,13.6,MT.woodDark);panel(-53,1.2,13.61,10,1.5,'s',MT.bottles);
 for(let i=0;i<7;i++){const x=-57+i*1.5;box(x-.2,0,17.7,x+.2,.75,18.1,MT.plain('#8a2a2a'),{col:false})}
 for(const x of[-60,-55,-50,-45]){table(x,28.5,1.6,1,MT.woodDark);sofa(x,30.8,2,'n','#7a2a3a')}
 screen(-61.79,2,22,3,1.6,'e',MT.keyscreen);screen(-40.21,2.2,18,2.4,1.3,'w',mt(signTex('HAPPY HOUR 5-7','#ff9a5c','#241510',256,128),0,1,1));
 for(let i=0;i<4;i++)pendant(-57+i*3,4.5,16.5,'#ffb066',6);addLight(-52,3.5,27,[1,.55,.3],10,.8);
 panel(-53,3,12.21,5,.7,'s',sign('THE BAR','#ff9a5c','#241510'));
 /* hardware hacking village (mezzanine) */
 const hy=5.2;
 panel(-51,hy+.8,6.21,12,2.6,'s',MT.ledwall);addLight(-51,hy+2,8,[.8,.6,1],12,1.1);
 for(const z of[12,17,22,27])for(const x of[-57,-49]){table(x,z,5,1.2,MT.plain('#d9d4cc'),.8,hy);box(x-2,hy+.8,z-.4,x-1.5,hy+1.3,z,MT.glow('#ffd98a'),{col:false});screen(x+.6,hy+.84,z-.45,.8,.45,'s',MT.scope);box(x-.6,hy+.8,z+.1,x+.4,hy+.86,z+.4,MT.plain('#2a6a3a'),{col:false})}
 lightPanel(-53,hy+4,14,4,1,'#f0fff4',9,.7);lightPanel(-53,hy+4,24,4,1,'#f0fff4',9,.7);
 panel(-61.79,hy+1,19,4,1.2,'e',sign('SOLDER PRACTICE · ALL WELCOME','#8affc1','#1a2a24'));panel(-40.21,hy+2.4,26,3.6,.6,'w',sign('BADGE HACKING','#ffd166','#1a2a24'));
 /* plaza (street) */
 floorQ(-46,46,-6,56,.01,MT.road);floorQ(-46,45.6,-6,46,.02,MT.plain('#888'));
 box(-46,4.9,32,-6,40,32.25,MT.facade,{col:false});box(-40,3.6,32,-14,3.9,36,MT.plain('#3a2a2a'),{col:false,b:1});for(const x of[-36,-27,-18])addLight(x,3.4,34,[1,.85,.6],7,1);
 box(-46.2,4.9,32,-46,40,56,MT.facade,{col:false});box(-6,4.9,32,-5.8,40,56,MT.facade,{col:false});box(-46,0,56,-6,40,56.2,MT.facade,{col:false});
  for(const[x,z,c]of[[-38,50,'#ffd166'],[-24,52.5,'#ff5d73'],[-13,50,'#ffd166']]){box(x-2.2,0,z-1,x+2.2,1.2,z+1,MT.plain(c));box(x-1.4,1.2,z-.9,x+1.2,1.9,z+.9,MT.plain('#2a2a34'));box(x-.3,1.9,z-.25,x+.3,2.1,z+.25,MT.glow('#fff'),{col:false})}
 box(-40,0,38,-30,1.8,38.4,MT.plain('#1b1026'));panel(-35,.1,38.41,10,1.6,'s',sign('CTRL+ALT+CON','#ff5d73','#1b1026',512,96));panel(-35,.1,37.99,10,1.6,'n',sign('CTRL+ALT+CON','#ff5d73','#1b1026',512,96));addLight(-35,1.4,40,[1,.4,.5],8,1.2);
 for(const x of[-44,-34,-20,-10])lamp(x,45,0);for(const x of[-42,-12])tree(x,38);
 for(let x=-44;x<-6;x+=3)box(x-.12,0,45.2,x+.12,.8,45.44,MT.plain('#3a3a44'));
 for(const[x,z]of[[-20,40],[-16,40]])box(x-1,0,z-.35,x+1,.45,z+.35,MT.woodDark);
 /* food court */
 const foods=[['NOODLES','#ffb347'],['PIZZA (NO PINEAPPLE)','#ff5d73'],['TACOS','#8affc1'],['CLUB-MATE','#ffd166']];
 foods.forEach((f,i)=>{const x=-1+i*5;box(x-2,0,54.6,x+2,2.6,55.8,MT.plain('#3a2a24'));panel(x,1.9,54.59,3.8,.6,'n',sign(f[0],f[1],'#1b1026'));box(x-2,0,53.6,x+2,1.1,54.6,MT.plain(f[1]))});
 for(let i=0;i<6;i++){const x=1+(i%3)*5,z=40+Math.floor(i/3)*5;table(x,z,1.6,1.2,MT.plain('#e9e3da'));chair(x-.6,z+.9,'s',MT.plain('#ff5d73'));chair(x+.6,z-.9,'n',MT.plain('#7cc4ff'))}
 for(let i=0;i<3;i++)lightPanel(5,5,40+i*6,4,1,'#fff4e0',11,.8);
 /* garden with sunken amphitheatre */
 const px0=52,pz0=-6,px1=66,pz1=8;
 for(const r of[[44,-18,74,pz0],[44,pz1,74,22],[44,pz0,px0,pz1],[px1,pz0,74,pz1]]){floorQ(r[0],r[1],r[2],r[3],0,MT.grass);surf(r[0],r[1],r[2],r[3],0)}
 for(let k=0;k<3;k++){const i=k*1.2,y=-(k+1)*.4,a=px0+i,b=pz0+i,c2=px1-i,d=pz1-i,m=MT.plain('#9a9aa8'),ms=MT.concrete;
  for(const r of[[a,b,c2,b+1.2],[a,d-1.2,c2,d],[a,b+1.2,a+1.2,d-1.2],[c2-1.2,b+1.2,c2,d-1.2]]){floorQ(r[0],r[1],r[2],r[3],y,ms);surf(r[0],r[1],r[2],r[3],y)}
  quad([a,y,b],[c2,y,b],[c2,y+.4,b],[a,y+.4,b],m,1,1);quad([c2,y,d],[a,y,d],[a,y+.4,d],[c2,y+.4,d],m,1,1);quad([a,y,d],[a,y,b],[a,y+.4,b],[a,y+.4,d],m,1,1);quad([c2,y,b],[c2,y,d],[c2,y+.4,d],[c2,y+.4,b],m,1,1)}
 const fz=px0+3.6,fw=pz0+3.6,fx1=px1-3.6,fz1=pz1-3.6;floorQ(fz,fw,fx1,fz1,-1.2,MT.tile);surf(fz,fw,fx1,fz1,-1.2);
 box(57,-1.2,-1,61,-.6,3,MT.plain('#9a9aa8'));quad([57.2,-.62,2.8],[60.8,-.62,2.8],[60.8,-.62,-.8],[57.2,-.62,-.8],MT.water,2,2);box(58.7,-.6,.7,59.3,1.4,1.3,MT.plain('#9a9aa8'),{col:false});addLight(59,1,1,[.5,.8,1],8,1);
 for(const[x,z]of[[48,-14],[70,-14],[48,18],[70,18],[47,1],[71,1],[59,-14],[59,18]])tree(x,z);
 for(const x of[48,54,64,70])lamp(x,-9,0,'#ffd98a');for(const x of[48,54,64,70])lamp(x,12,0,'#ffd98a');
 for(const[x,z]of[[50,-16],[68,-16],[50,20],[68,20]])box(x-1,0,z-.35,x+1,.45,z+.35,MT.woodDark);
 box(44,4.4,-18,74,40,-17.8,MT.facade,{col:false});box(44,4.4,21.8,74,40,22,MT.facade,{col:false});box(73.8,4.4,-18,74,40,22,MT.facade,{col:false});box(44,9.3,-18,44.2,40,22,MT.facade,{col:false});
 panel(44.21,2.5,-3.5,2.6,.5,'e',sign('← CONCOURSE','#8affc1','#1a2a1a',256,64));
 (MAPR.con=MAPR.con||[]).push({x0:-40,z0:6,x1:-33,z1:32,y:5.2,n:'Mezzanine',c:'#5a4a3a'},{x0:-33,z0:6,x1:-14,z1:32,y:5.2,n:'',c:'#1a1222'});
 /* workshop B (upper level) */
 {const y=5.2;panel(-2,y+.9,21.79,8,3,'n',MT.slides);box(-6.2,y+.75,21.6,2.2,y+.9,21.8,MT.plain('#2a2a34'),{col:false});addLight(-2,y+2.6,19,[.9,.95,1],9,.9);
  box(-2.6,y,19.6,-1.4,y+1.1,20.2,MT.woodDark);box(-2.7,y+1.1,19.5,-1.3,y+1.16,20.3,MT.woodDark,{col:false});
  for(let r=0;r<5;r++){const z=10+r*1.7;for(let x=-12.4;x<9;x+=.9){if(Math.abs(x+2)<1)continue;chair(x,z,'n',MT.plain(r%2?'#3f526a':'#4a6080'),y)}colBox(-12.8,z-.3,-3,z+.3,y,y+1);colBox(-1,z-.3,9.2,z+.3,y,y+1)}
  for(const x of[-9,-2,5])for(const z of[9,15])lightPanel(x,y+4,z,2.4,1,'#f4f8ff',10,.6);
  panel(-13.79,y+.9,13,4,1.8,'e',mt(signTex('THREAT MODEL ALL THE THINGS','#1b1026','#f6eefc',512,128),0,1,1,{k:1}));
  panel(9.79,y+1.1,10,.8,1.05,'w',MT.poster(2));box(-13.6,y,7,-12.4,y+.9,9,MT.plain('#e9e3da'));box(-13.4,y+.9,7.3,-12.6,y+1.25,7.7,MT.chrome,{col:false});
  plant(-13.2,21.2,.9,y);plant(9.2,21.2,.9,y)}
 /* retro arcade (upper level) */
 {const y=5.2,cab=(x,z,dir,scr)=>{const d=dir==='n'?-1:1;box(x-.38,y,z-.34,x+.38,y+1.85,z+.34,MT.gloss('#1a1424'));panel(x,y+1.05,z+d*.345,.62,.5,dir,scr);box(x-.38,y+1.72,z+d*.34-.04,x+.38,y+1.9,z+d*.34+.04,MT.glow(['#ff5fb0','#2bf0ff','#ffd166','#8affc1'][Math.abs(Math.round(x*3))%4],2),{col:false});box(x-.36,y+.82,z+d*.35-.12,x+.36,y+.88,z+d*.35+.12,MT.plain('#2a2a34'),{col:false})};
  for(let x=12;x<43;x+=1.25){if(Math.abs(x-27)<1.6)continue;cab(x,21.3,'n',(Math.round(x*4))%2?MT.arcade:MT.arcade2)}
  for(let x=15;x<40;x+=1.25){if(Math.abs(x-27)<1.2)continue;cab(x,13.15,'n',(Math.round(x*4))%2?MT.arcade2:MT.arcade);cab(x,14.55,'s',(Math.round(x*4))%2?MT.arcade:MT.arcade2)}
  box(42.4,y,7,43.8,y+2.1,8.4,MT.gloss('#1a2a5a'));panel(42.39,y+.1,7.7,1.3,2,'w',MT.vend);
  for(let x=10.5;x<44;x+=5){box(x,y+3.1,6.22,x+3.5,y+3.16,6.28,MT.glow(x%10<5?'#ff5fb0':'#2bf0ff',2.2),{col:false});box(x,y+3.1,21.72,x+3.5,y+3.16,21.78,MT.glow(x%10<5?'#2bf0ff':'#ff5fb0',2.2),{col:false})}
  for(const[x,z,c]of[[16,10,[1,.4,.8]],[26,10,[.3,.9,1]],[36,10,[1,.4,.8]],[16,18,[.3,.9,1]],[26,18,[1,.8,.4]],[36,18,[.3,.9,1]]])addLight(x,y+3.2,z,c,9,.85);
  panel(10.21,y+1.1,10,.8,1.05,'e',MT.poster(5));panel(43.79,y+1.2,14,4,1,'w',sign('HIGH SCORES','#ffd166','#120a1c',256,64));panel(43.79,y+.4,14,3.4,.7,'w',mt(signTex('1. KERNEL  99,999   2. r00tbeer  81,200   3. dave_hax  12','#8affc1','#120a1c',512,64),0,1,1,{k:1.2}))}
 (MAPR.con=MAPR.con||[]).push({x0:-40,z0:3.2,x1:44,z1:6,y:5.2,n:'Gallery',c:'#3a2a4a'});
 /* areas */
 area('gallery','Concourse Gallery','con',[-40,.8,44,6],[-30,4.6,Math.PI/2,5.2],'con',{y0:4,y1:9.5,sub:1});
 area('workshop','Workshop B','con',[-14,6,10,22],[-2,7.5,Math.PI,5.2],'con',{y0:4,y1:9.5});
 area('arcade','Retro Arcade','con',[10,6,44,22],[27,7.5,Math.PI,5.2],'con',{y0:4,y1:9.5});
 area('stream','Stream Booth','con',[26,0,34,6],[30,.3,Math.PI,0],'stream',{sub:1});
 area('concourse','Concourse','con',[-40,-6,44,6],[-16,1.5,0,0],'con');
 area('hallA','Hall A · Main Stage','con',[-40,-42,-8,-6],[-24,-7.2,0,0],'stage',{y1:9});
 area('green','Green room','con',[-40,-52,-26,-42],[-33,-44,Math.PI/2,0],'stage');
 area('vendor','Vendor Hall','con',[-8,-36,24,-6],[8,-8,0,0],'vendor');
 area('cosplay','Cosplay Hall','con',[24,-30,44,-6],[34,-8,0,0],'cos');
 area('lockpick','Lockpick Village','con',[-14,6,2,20],[-6,8,Math.PI,0],'lock');
 area('ctf','CTF Room','con',[2,6,16,22],[9,8,Math.PI,0],'ctf');
 area('soc','Blue Team Village','con',[16,6,30,22],[23,8,Math.PI,0],'soc');
 area('lounge','Chill-out Lounge','con',[30,6,44,20],[37,8,Math.PI,0],'chill');
 area('mezz','Lobby Mezzanine','con',[-40,6,-33,32],[-35,22,0,5.2],'lobby',{y0:4,y1:9});
 area('hwv','Hardware Hacking Village','con',[-62,6,-40,32],[-42,14,Math.PI/2,5.2],'con',{y0:4,y1:9.5});
 area('lobby','Hotel Lobby','con',[-40,6,-14,32],[-27,9,Math.PI,0],'lobby',{y1:4});
 area('bar','Hotel Bar','con',[-62,12,-40,32],[-43,26,Math.PI/2,0],'bar',{y1:4});
 area('plaza','Hotel Entrance','con',[-46,32,-6,56],[-27,35,Math.PI,0],'con',{out:1});
 area('food','Food Court','con',[-6,34,16,56],[-3,42,-Math.PI/2,0],'con');
 area('garden','Garden','con',[44,-18,74,22],[46,0,-Math.PI/2,0],'con',{out:1});

 /* ================= HOTEL: 13th floor + rooftop ================= */
 region('f13',{fog:[.1,.06,.08],fr:[6,42]});G.regions.f13.amb=[.36,.32,.34];
 door('h',2,239,1.2,2.3);door('v',242,4.2,.9,2.2);door('v',250,0,1.4,2.5);door('v',260,0,1.2,2.4,3.6);
 room({x0:200,z0:-2,x1:250,z1:2,h:3,fl:MT.carpetHotel,wa:MT.wallHotel,n:'13th floor',mc:'#5a2a3a'});
 room({x0:236,z0:2,x1:246,z1:12,h:3,fl:MT.carpetGrey,wa:MT.wallHotel,n:'Room 1337',mc:'#5a4a3a'});
 room({x0:242,z0:2,x1:246,z1:6,h:3,fl:MT.tile,wa:MT.wallPale,sides:'ws',noceil:1,nofloor:1});floorQ(242.2,2.2,245.8,5.8,.01,MT.tile);
 room({x0:250,z0:-3,x1:260,z1:3,h:7.4,fl:MT.concrete,wa:MT.concrete,n:'Stairwell',mc:'#4a4a5a'});floorQ(250,-3,260,3,7.4,MT.concrete);
 stairs(251.2,-2.8,258,-.4,0,3.6,'x+',MT.concrete);
 railing(251.2,-.35,258,-.35,0,{y2:3.6,m:MT.metal});
 slab(258,-2.8,259.8,2.8,3.6,.3,MT.concrete);railing(258,-.35,258,2.8,3.6,{m:MT.metal});
 addLight(254,2.6,1.5,[1,.95,.85],9,1.1);addLight(258.5,6.6,0,[1,.95,.85],8,1.1);addLight(255,5.5,-1.5,[1,.95,.85],7,.8);
 panel(250.21,1.5,2.2,1.4,.4,'e',sign('ROOF ↑','#ff5d73','#3a3a44',256,64));panel(259.79,3.6+2.5,0,1.6,.4,'w',sign('ROOF EXIT','#ff5d73','#3a3a44',256,64));
 for(let x=204;x<250;x+=6)lightPanel(x,3,0,.8,.8,'#ffe8c0',6,.7);
 let num=1301;for(let x=204;x<248;x+=4.5){if(Math.abs(x-239)>1.5){panel(x,0,1.79,1,2.2,'n',MT.door);panel(x,2.3,1.78,.5,.25,'n',sign(String(num),'#1b1026','#d8b060',128,64))}panel(x,0,-1.79,1,2.2,'s',MT.door);panel(x,2.3,-1.78,.5,.25,'s',sign(String(num+1),'#1b1026','#d8b060',128,64));num+=2}
 panel(239,2.4,1.78,.5,.25,'n',sign('1337','#1b1026','#ffd166',128,64));
 panel(200.21,0,0,1.6,2.4,'e',MT.elev);box(214,0,-1.8,215.4,1.6,-1.2,MT.metal);panel(214.7,1.62,-1.5,1,.3,'s',sign('ICE','#7cc4ff','#2a2a34',128,64));
 addLight(240,2.6,7,[1,.85,.65],8,1);addLight(244,2.6,4,[.9,.95,1],4,.7);
 box(236.2,0,6,238.4,.55,8,MT.linen);box(236.2,0,5.9,236.35,1.1,8.1,MT.woodDark);box(236.4,.55,6.2,236.9,.68,7.8,MT.plain('#ffffff'),{col:false});
 box(236.2,0,8.3,236.8,.55,8.9,MT.woodDark);box(236.4,.55,8.5,236.6,.75,8.7,MT.glow('#ffd98a'),{col:false});
 panel(241.5,.9,11.79,6.5,1.8,'n',MT.cityview);table(245.4,8.2,.9,2,MT.woodDark);screen(245.4,.78,7.9,.5,.32,'w',MT.code);chair(244.6,8.2,'e',MT.plain('#3a3a4a'));
 box(245,0,10.4,245.9,.85,11.3,MT.plain('#2a2a30'));panel(244.99,.2,10.85,.6,.5,'w',sign('MINIBAR','#ffd166','#2a2a30',128,64));
 box(242.3,0,2.2,244.1,.55,3.9,MT.plain('#f4f4f8'));quad([242.5,.5,3.7],[243.9,.5,3.7],[243.9,.5,2.4],[242.5,.5,2.4],MT.water,1,1);box(245.2,0,4.6,245.8,.85,5.6,MT.plain('#f4f4f8'));
 // rooftop at y 3.6
 const ry=3.6;
 for(const r of[[196,-24,300,-3],[196,3,300,24],[196,-3,250,3],[260,-3,300,3]]){floorQ(r[0],r[1],r[2],r[3],ry,MT.gravel);surf(r[0],r[1],r[2],r[3],ry)}
 for(const r of[[195.6,-24.4,300.4,-24],[195.6,24,300.4,24.4],[195.6,-24,196,24],[300,-24,300.4,24]])box(r[0],ry,r[1],r[2],ry+1.1,r[3],MT.concrete);
 G.walls.f13.push([196,-24,300,-24,ry,ry+3],[196,24,300,24,ry,ry+3],[196,-24,196,24,ry,ry+3],[300,-24,300,24,ry,ry+3],[250,-3,260,-3,ry,ry+3],[250,3,260,3,ry,ry+3],[250,-3,250,3,ry,ry+3],[260,-3,260,3,ry,ry+3]);
 (MAPR.f13=MAPR.f13||[]).push({x0:196,z0:-24,x1:300,z1:24,y:ry,n:'Rooftop',c:'#2a2a4a'},{x0:250,z0:-3,x1:260,z1:3,y:ry,n:'',c:'#4a4a5a'});
 for(const[x,z,w,d]of[[270,-10,4,3],[276,-10,3,3],[266,10,5,3],[288,14,3,4],[220,-14,6,4],[230,14,4,3]])box(x,ry,z,x+w,ry+1.6,z+d,{side:MT.metal,top:MT.fan});
 box(282,ry,-10,286,ry+1.6,-7,{side:MT.metal,top:MT.fan});
 box(292,ry,-18,296,ry+4,-14,MT.plain('#6a6a7a'));box(291.5,ry+4,-18.5,296.5,ry+6,-13.5,MT.plain('#5a5a6a'),{col:false});
 box(205,ry,16,205.2,ry+7,16.2,MT.metal);box(204.6,ry+7,15.6,205.6,ry+7.2,16.6,MT.glow('#ff5d73'),{col:false});
 for(const[x,z]of[[240,-16],[244,-16],[248,-16]]){box(x-.5,ry,z-1,x+.5,ry+.4,z+1,MT.plain('#e9e3da'));box(x-.5,ry+.4,z+.6,x+.5,ry+.9,z+1,MT.plain('#e9e3da'),{col:false})}
 for(let x=232;x<=256;x+=4){box(x-.05,ry,-19,x+.05,ry+3,-18.9,MT.plain('#222'),{col:false});box(x-.12,ry+2.9,-19.1,x+.12,ry+3.1,-18.8,MT.glow('#ffd166'),{col:false});addLight(x,ry+2.6,-17,[1,.8,.4],7,.6)}
 box(214,ry,6,214.2,ry+1.2,6.2,MT.metal);box(213.8,ry+1.2,5.8,215.2,ry+1.5,6.4,MT.plain('#2a2a34'),{col:false});
 for(let i=0;i<10;i++)addLight(200+i*10,ry+3,0,[.5,.5,.9],14,.35);
 skyline(248,0,100,150,52,-60);skyBox(248,0,260,-60,180);
 area('room1337','Room 1337','f13',[236,2,246,12],[239,4,Math.PI,0],'hotel',{y0:-1,y1:3});
 area('stairwell','Stairwell','f13',[250,-3,260,3],[251,1.5,-Math.PI/2,0],'hotel',{y0:-1,y1:8,hide:1});
 area('corridor','13th floor','f13',[200,-2,250,2],[202,0,-Math.PI/2,0],'hotel',{y0:-1,y1:3});
 area('roof','Rooftop','f13',[196,-24,300,24],[262,0,-Math.PI/2,ry],'roof',{y0:3.3,y1:12,out:1,fog:[.1,.08,.18],fr:[60,320]});
}
