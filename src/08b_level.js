/* ============ LEVEL HELPERS ============ */
const DOORS={},MAPR={},AREAS={},INTS=[],WCH=[],DYN=[];
const LEVELS={home:[[0,'Bakery'],[3.4,'Flat']],office:[[0,'3rd floor']],station:[[0,'Concourse']],con:[[-4.5,'Basement'],[0,'Ground floor'],[5.5,'Level 1'],[12,'Con roof']],f13:[[0,'13th floor'],[3.6,'Hotel roof']]};
function door(o,at,c,w,h,y,nf){(DOORS[BR]=DOORS[BR]||[]).push({o,at,c,w,h:h||2.7,y:y||0,nf})}
/* a wide opening between two spaces: a door with no frame */
const gap=(o,at,c,w,h,y)=>door(o,at,c,w,h,y,1);
function wallLine(o,fixed,a0,a1,Y,H,m,inward,frame){
 const ds=(DOORS[BR]||[]).filter(d=>d.o===o&&Math.abs(d.at-fixed)<.6&&d.c>a0&&d.c<a1&&d.y>=Y-.1&&d.y<Y+H-.5).sort((p,q)=>p.c-q.c);
 const t0=inward>0?fixed:fixed-.2,t1=inward>0?fixed+.2:fixed,face=inward>0?t1:t0;
 const P=[];let cur=a0;
 for(const d of ds){P.push([cur,d.c-d.w/2,Y,Y+H]);if(d.y>Y+.05)P.push([d.c-d.w/2,d.c+d.w/2,Y,d.y]);if(d.y+d.h<Y+H)P.push([d.c-d.w/2,d.c+d.w/2,d.y+d.h,Y+H]);cur=d.c+d.w/2;
  if(frame!==false&&!d.nf){const fm=m.glass?MT.chrome:MT.frame,e=face+inward*.05,a=d.c-d.w/2,b=d.c+d.w/2,y1=d.y+d.h;
   if(o==='h'){box(a-.1,d.y,Math.min(face,e),a,y1+.1,Math.max(face,e),fm,{col:false});box(b,d.y,Math.min(face,e),b+.1,y1+.1,Math.max(face,e),fm,{col:false});box(a,y1,Math.min(face,e),b,y1+.1,Math.max(face,e),fm,{col:false})}
   else{box(Math.min(face,e),d.y,a-.1,Math.max(face,e),y1+.1,a,fm,{col:false});box(Math.min(face,e),d.y,b,Math.max(face,e),y1+.1,b+.1,fm,{col:false});box(Math.min(face,e),y1,a,Math.max(face,e),y1+.1,b,fm,{col:false})}}}
 P.push([cur,a1,Y,Y+H]);
 G.ao=Y;
 for(const s of P){if(s[1]-s[0]<.01||s[3]-s[2]<.01)continue;
  if(m.glass){glassSeg(o,fixed,s[0],s[1],s[2],s[3],t0,t1);G.walls[BR].push(o==='h'?[s[0],fixed,s[1],fixed,s[2],s[3]]:[fixed,s[0],fixed,s[1],s[2],s[3]]);continue}
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
/* glass curtain wall: transparent pane, chrome mullions every ~2.4 m, solid to walk into */
function glassSeg(o,fixed,a,b,y0,y1,t0,t1){const g=MT.glass,c=MT.chrome,tm=(t0+t1)/2;
 if(o==='h'){box(a,y0,tm-.02,b,y1,tm+.02,g,{col:false});colBox(a,t0,b,t1,y0,y1)}else{box(tm-.02,y0,a,tm+.02,y1,b,g,{col:false});colBox(t0,a,t1,b,y0,y1)}
 const n=Math.max(1,Math.round((b-a)/2.4));
 for(let i=0;i<=n;i++){const p=a+(b-a)*i/n;if(o==='h')box(p-.04,y0,tm-.06,p+.04,y1,tm+.06,c,{col:false});else box(tm-.06,y0,p-.04,tm+.06,y1,p+.04,c,{col:false})}
 for(const yy of[y0,Math.min(y1,y0+3.2),y1-.08])if(yy<y1){if(o==='h')box(a,yy,tm-.06,b,yy+.08,tm+.06,c,{col:false});else box(tm-.06,yy,a,tm+.06,yy+.08,b,c,{col:false})}}
/* top surface only, for roofs you can see but not walk on */
function roofTop(x0,z0,x1,z1,y,m){floorQ(x0,z0,x1,z1,y,m||MT.gravel)}
/* a run of theatre seats as one long seat + back (much cheaper than single chairs) */
function seatRow(x0,x1,z,y,dir,col){const m=MT.fabric(col),d=dir==='n'?-1:1,k=MT.plain('#1a1420');box(x0,y,z-.3,x1,y+.42,z+.3,k,{col:false});box(x0,y+.42,z-.3,x1,y+.5,z+.3,m,{col:false});box(x0,y+.5,z+d*.3-(d>0?.08:0),x1,y+1.02,z+d*.3+(d<0?.08:0),m,{col:false});
 for(let x=x0;x<=x1;x+=.55)box(x-.025,y+.5,z-.3,x+.025,y+.7,z+.3,k,{col:false});colBox(x0,z-.32,x1,z+.32,y,y+.9)}
function car(x,z,ax,col,o){o=o||{};const L=4.4,W=1.9,b=MT.gloss(col),dk=MT.plain('#14121a'),gl=MT.gloss('#2a3444'),Y=o.y||0;
 const R=(a0,a1,c0,c1,y0,y1,m,op)=>ax==='x'?box(x+a0,Y+y0,z+c0,x+a1,Y+y1,z+c1,m,op):box(x+c0,Y+y0,z+a0,x+c1,Y+y1,z+a1,m,op);
 R(-L/2,L/2,-W/2,W/2,.3,.95,b);R(-1.1,1.2,-W/2+.1,W/2-.1,.95,1.5,gl,{col:false});R(-1,1.1,-W/2+.15,W/2-.15,1.5,1.55,b,{col:false});
 for(const a of[-1.4,1.4])for(const c of[-W/2,W/2-.24])R(a-.36,a+.36,c,c+.24,0,.68,dk,{col:false});
 R(L/2-.02,L/2+.02,-W/2+.15,-W/2+.5,.62,.8,MT.glow('#fff4d8',2.4),{col:false});R(L/2-.02,L/2+.02,W/2-.5,W/2-.15,.62,.8,MT.glow('#fff4d8',2.4),{col:false});
 R(-L/2-.02,-L/2+.02,-W/2+.15,-W/2+.5,.62,.8,MT.glow('#ff2a3a',2),{col:false});R(-L/2-.02,-L/2+.02,W/2-.5,W/2-.15,.62,.8,MT.glow('#ff2a3a',2),{col:false});
 if(o.bonnet)R(L/2-1.3,L/2-.1,-W/2+.05,W/2-.05,1.55,1.6,b,{col:false});
 if(o.taxi){R(-.3,.3,-.25,.25,1.55,1.8,MT.glow('#ffd166',1.8),{col:false})}
 if(o.plate)R(-L/2-.04,-L/2-.01,-.45,.45,.42,.6,mt(signTex(o.plate,'#1b1026','#f6eefc',256,64),0,1,0,{r:.6}),{col:false})}
function rack(x,z,dir,y){y=y||0;box(x-.32,y,z-.5,x+.32,y+2.1,z+.5,MT.gloss('#16161c'));const f=dir==='e'?x+.33:x-.33;for(let i=0;i<9;i++){const yy=y+.2+i*.21;box(Math.min(f,f+(dir==='e'?.01:-.01)),yy,z-.4,Math.max(f,f+(dir==='e'?.01:-.01)),yy+.03,z+.4,MT.glow(['#8affc1','#7cc4ff','#ffd166','#8affc1'][i%4],1.6),{col:false})}}
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
function skyline(cx,cz,r0,r1,n,yb,ex){for(let i=0;i<n;i++){const a=i/n*Math.PI*2+rnd()*.1,R=r0+rnd()*(r1-r0),x=cx+Math.cos(a)*R,z=cz+Math.sin(a)*R,w=8+rnd()*14,h=yb+20+rnd()*90;if(ex&&x+w/2>ex[0]&&x-w/2<ex[2]&&z+w/2>ex[1]&&z-w/2<ex[3])continue;box(x-w/2,yb,z-w/2,x+w/2,h,z+w/2,{side:MT.facade,top:MT.plain('#1a1826')},{col:false});if(rnd()<.35){box(x-.15,h,z-.15,x+.15,h+6,z+.15,MT.plain('#2a2a30'),{col:false});box(x-.35,h+6,z-.35,x+.35,h+6.5,z+.35,MT.glow('#ff5d73',3),{col:false,b:1})}}}

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

  buildOffice();buildStation();buildSite();buildTower();
}
