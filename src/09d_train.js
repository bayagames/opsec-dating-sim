/* ============ THE TRAIN, MOVING ============
   The coaches stand still (08p_train.js); everything outside slides past at ~90 km/h: the ground, the next track,
   catenary masts and wires, fences, trees, back gardens and terraces, a city of towers, warehouses, billboards,
   signals, road bridges. Every so often a tunnel swallows the train, or another train roars past the other way.
   All of it is built here at runtime, unlit (shading painted in), tinted by the time of day, and lit windows come on
   at dusk. The camera sways and dips over the rail joints.
   Also here: the 16:12 at Platform 4 (a model that can pull out of the station for the departure cutscene), the
   passengers in the seats, the information screens, and the trip itself: board, ride, arrive. */
const TRV={v:24,s:0,L:1600,zc:36,root:null,inst:[],mats:[],tun:null,pass:null,pis:[],sit:[],next:{tun:25,pass:12},stn:null};
/* ---- little builders ---- */
function cTex(w,h,paint,rx,ry){const T=G.T,c=document.createElement('canvas');c.width=w;c.height=h;paint(c.getContext('2d'),w,h);const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;
 if(rx||ry){t.wrapS=t.wrapT=T.RepeatWrapping;t.repeat.set(rx||1,ry||1)}t.anisotropy=G.aniso||4;return t}
function bMat(map,col,o){const T=G.T;o=o||{};const m=new T.MeshBasicMaterial(Object.assign({map:map||null,color:new T.Color(col||'#ffffff'),vertexColors:!!o.vc,transparent:!!o.tr,alphaTest:o.at||0,side:o.ds?T.DoubleSide:T.FrontSide,depthWrite:o.tr?false:true,fog:true},o.extra||{}));
 m.userData.base=m.color.clone();m.userData.glow=!!o.glow;TRV.mats.push(m);return m}
/* a box sitting on y=0, shaded by face (sun from the upper left), UVs scaled to metres/tile */
function sGeo(w,h,d,tile){const T=G.T,g=new T.BoxGeometry(w,h,d);g.translate(0,h/2,0);const n=g.attributes.normal,uv=g.attributes.uv,col=[];
 for(let i=0;i<n.count;i++){const nx=n.getX(i),ny=n.getY(i),nz=n.getZ(i);const k=ny>.5?1:ny<-.5?.35:nx>.5?.86:nx<-.5?.66:nz>.5?.78:.72;col.push(k,k,k);
  if(tile){const fu=Math.abs(nx)>.5?d:w,fv=Math.abs(ny)>.5?d:h;uv.setXY(i,uv.getX(i)*fu/tile[0],uv.getY(i)*fv/tile[1])}}
 g.setAttribute('color',new T.Float32BufferAttribute(col,3));return g}
function roofGeo(w,h,d){const T=G.T,g=new T.BufferGeometry(),hw=w/2,hd=d/2;
 const P=[[-hw,0,-hd],[hw,0,-hd],[0,h,-hd],[-hw,0,hd],[hw,0,hd],[0,h,hd]];const v=[],c=[],u=[];
 const tri=(a,b,cc,k,uv)=>{for(const i of[a,b,cc])v.push(...P[i]);for(let j=0;j<3;j++)c.push(k,k,k);u.push(...uv)};
 tri(0,2,1,.7,[0,0,.5,1,1,0]);tri(3,4,5,.7,[0,0,1,0,.5,1]);
 for(const[a,b,cc,dd,k]of[[0,3,5,2,.95],[1,2,5,4,.62]]){tri(a,b,cc,k,[0,0,d/3,0,d/3,1]);tri(a,cc,dd,k,[0,0,d/3,1,0,1])}
 g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setAttribute('color',new T.Float32BufferAttribute(c,3));g.setAttribute('uv',new T.Float32BufferAttribute(u,2));return g}
function treeGeo(){const T=G.T,g=new T.BufferGeometry(),v=[],u=[],c=[];
 for(const a of[0,Math.PI/2]){const cx=Math.cos(a)*1.6,cz=Math.sin(a)*1.6;const q=[[-cx,0,-cz],[cx,0,cz],[cx,5,cz],[-cx,5,-cz]];for(const i of[0,1,2,0,2,3])v.push(...q[i]);u.push(0,0,1,0,1,1,0,0,1,1,0,1);for(let j=0;j<6;j++)c.push(1,1,1)}
 g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setAttribute('uv',new T.Float32BufferAttribute(u,2));g.setAttribute('color',new T.Float32BufferAttribute(c,3));return g}
/* a pool of the same thing, scattered along the loop; each frame they slide on by the distance travelled */
function pool(geo,mat,items,parent){const T=G.T,m=new T.InstancedMesh(geo,mat,items.length);m.instanceMatrix.setUsage(T.DynamicDrawUsage);m.frustumCulled=false;
 if(items.some(i=>i.c)){for(let i=0;i<items.length;i++)m.setColorAt(i,new T.Color(items[i].c||'#ffffff'))}
 (parent||TRV.root).add(m);const P={m,items};TRV.inst.push(P);return P}
const _o3={};
function poolTick(P,s){const T=G.T,o=_o3.o||(_o3.o=new T.Object3D()),L=TRV.L;
 for(let i=0;i<P.items.length;i++){const it=P.items[i];const z=TRV.zc-L/2+(((it.z+s)%L)+L)%L;o.position.set(it.x,it.y||0,z);o.rotation.set(0,it.r||0,0);o.scale.set(it.sx||1,it.sy||1,it.sz||1);o.updateMatrix();P.m.setMatrixAt(i,o.matrix)}
 P.m.instanceMatrix.needsUpdate=true}
/* ---- textures ---- */
function trvTextures(){const R=Math.random;
 const T={};
 T.grass=cTex(256,256,(c,w,h)=>{c.fillStyle='#5a7a3a';c.fillRect(0,0,w,h);for(let i=0;i<5;i++){c.fillStyle=['#6a8a42','#4e6e34','#7a8a48','#5e7e3e','#8a9a5a'][i];c.fillRect(0,i*51,w,51)}for(let i=0;i<3000;i++){c.fillStyle=R()<.5?'#3e5a2a':'#7a9a4a';c.fillRect(R()*w,R()*h,2,2)}c.fillStyle='#4a3a2a55';for(let x=0;x<w;x+=64)c.fillRect(x,0,2,h)},12,12);
 T.ballast=cTex(128,128,(c,w,h)=>{c.fillStyle='#6a645c';c.fillRect(0,0,w,h);for(let i=0;i<2600;i++){const v=60+R()*80|0;c.fillStyle=`rgb(${v},${v-4},${v-10})`;c.fillRect(R()*w,R()*h,2+R()*2,2+R()*2)}},4,200);
 T.sleep=cTex(64,128,(c,w,h)=>{c.fillStyle='#6a645c';c.fillRect(0,0,w,h);for(let i=0;i<900;i++){const v=70+R()*70|0;c.fillStyle=`rgb(${v},${v-4},${v-10})`;c.fillRect(R()*w,R()*h,2,2)}for(let y=0;y<h;y+=32){c.fillStyle='#4a3e32';c.fillRect(4,y+6,w-8,14)}},1,1);
 T.house=cTex(256,256,(c,w,h)=>{c.fillStyle='#a8644a';c.fillRect(0,0,w,h);for(let y=0;y<h;y+=8)for(let x=(y/8)%2*8;x<w;x+=16){c.fillStyle=R()<.5?'#b06c50':'#984e3a';c.fillRect(x,y,15,7)}
  for(const[x,y]of[[30,40],[150,40],[30,150],[150,150]]){c.fillStyle='#e8e4dc';c.fillRect(x-4,y-4,76,72);c.fillStyle='#2a3440';c.fillRect(x,y,68,64);c.fillStyle='#3a4a5a';c.fillRect(x,y,68,20);c.fillStyle='#e8e4dc';c.fillRect(x+32,y,4,64)}});
 T.houseLit=cTex(256,256,(c,w,h)=>{for(const[x,y]of[[30,40],[150,40],[30,150],[150,150]])if(R()<.6){c.fillStyle=R()<.5?'#ffcf80':'#ffe2b0';c.fillRect(x,y,68,64)}});
 T.roof=cTex(128,128,(c,w,h)=>{c.fillStyle='#4a4a52';c.fillRect(0,0,w,h);for(let y=0;y<h;y+=10){c.fillStyle='#3a3a42';c.fillRect(0,y,w,2)}for(let i=0;i<600;i++){c.fillStyle='#5a5a62';c.fillRect(R()*w,R()*h,3,2)}},1,1);
 T.tower=cTex(256,512,(c,w,h)=>{c.fillStyle='#8a8e98';c.fillRect(0,0,w,h);for(let y=8;y<h;y+=24)for(let x=8;x<w;x+=24){c.fillStyle=R()<.12?'#c8d4e0':'#3a4656';c.fillRect(x,y,16,14)}},1,1);
 T.towerLit=cTex(256,512,(c,w,h)=>{for(let y=8;y<h;y+=24)for(let x=8;x<w;x+=24)if(R()<.35){c.fillStyle=R()<.5?'#ffd89a':'#cfe6ff';c.fillRect(x,y,16,14)}},1,1);
 T.ware=cTex(256,128,(c,w,h)=>{c.fillStyle='#8a9098';c.fillRect(0,0,w,h);for(let x=0;x<w;x+=6){c.fillStyle='#727880';c.fillRect(x,0,2,h)}c.fillStyle='#c0304a';c.fillRect(0,0,w,10);c.fillStyle='#3a3e46';c.fillRect(100,60,56,68)},1,1);
 T.tree=cTex(128,128,(c,w,h)=>{c.fillStyle='#4a3020';c.fillRect(60,70,8,58);for(let i=0;i<260;i++){const a=R()*Math.PI*2,r=R()*50;c.fillStyle=['#3e6a2e','#4e7e36','#2e5a26','#6a8e3e'][(R()*4)|0];c.beginPath();c.arc(64+Math.cos(a)*r,56+Math.sin(a)*r*.85,5+R()*6,0,7);c.fill()}});
 T.fence=cTex(256,64,(c,w,h)=>{c.strokeStyle='#5a5e66';c.lineWidth=2;for(let y=14;y<h;y+=14){c.beginPath();c.moveTo(0,y);c.lineTo(w,y);c.stroke()}c.fillStyle='#3a3e46';for(let x=0;x<w;x+=64)c.fillRect(x,0,5,h)},1,1);
 T.brick=cTex(128,128,(c,w,h)=>{c.fillStyle='#7a4a3a';c.fillRect(0,0,w,h);for(let y=0;y<h;y+=8)for(let x=(y/8)%2*8;x<w;x+=16){c.fillStyle=R()<.5?'#8a5442':'#6a3e30';c.fillRect(x,y,15,7)}},1,1);
 T.tunnel=cTex(128,128,(c,w,h)=>{c.fillStyle='#2a2422';c.fillRect(0,0,w,h);for(let y=0;y<h;y+=8)for(let x=(y/8)%2*8;x<w;x+=16){c.fillStyle=R()<.5?'#332a26':'#221c1a';c.fillRect(x,y,15,7)}for(let i=0;i<40;i++){c.fillStyle='#ffffff10';c.fillRect(R()*w,R()*h,1,20)}},1,1);
 T.board=cTex(512,256,(c,w,h)=>{const g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,'#1a3a7a');g.addColorStop(1,'#2a7ac0');c.fillStyle=g;c.fillRect(0,0,w,h);c.fillStyle='#fff';c.font='bold 64px sans-serif';c.fillText('SafeSphere',40,110);c.font='28px sans-serif';c.fillText('Your shield on the internet. Free forever.',40,160);
  c.save();c.translate(300,214);c.rotate(-.04);c.fillStyle='#ff5d73';c.font='bold 30px sans-serif';c.fillText('FOREVER IS A LONG TIME',-120,0);c.restore()});
 T.board2=cTex(512,256,(c,w,h)=>{c.fillStyle='#1b1026';c.fillRect(0,0,w,h);c.fillStyle='#ff5d73';c.font='bold 72px Chakra Petch, sans-serif';c.fillText('CTRL+ALT+CON',30,120);c.fillStyle='#8affc1';c.font='32px VT323, monospace';c.fillText('#20 · THIS WEEK · CONFERENCE QUARTER',32,180)});
 T.board3=cTex(512,256,(c,w,h)=>{c.fillStyle='#f4efe6';c.fillRect(0,0,w,h);c.fillStyle='#1b1026';c.font='bold 58px Georgia, serif';c.fillText('Brindle & Co',40,110);c.font='italic 28px Georgia, serif';c.fillText('Insurance you\'ll never need to think about.',40,170)});
 T.trainSide=cTex(1024,128,(c,w,h)=>{c.fillStyle='#e9ece8';c.fillRect(0,0,w,h);c.fillStyle='#1f8a8a';c.fillRect(0,h-34,w,14);for(let x=24;x<w-40;x+=62){c.fillStyle='#2a3440';c.fillRect(x,26,48,42)}c.fillStyle='#ffd166';for(const x of[240,760])c.fillRect(x,14,56,h-14)},1,1);
 T.trainLit=cTex(1024,128,(c,w,h)=>{for(let x=24;x<w-40;x+=62){c.fillStyle='#fff1d6';c.fillRect(x,26,48,42)}},1,1);
 T.wallPlain=cTex(256,128,(c,w,h)=>{c.fillStyle='#8a8a84';c.fillRect(0,0,w,h);for(let i=0;i<1500;i++){c.fillStyle=R()<.5?'#7a7a74':'#9a9a94';c.fillRect(R()*w,R()*h,3,2)}c.fillStyle='#6a6a64';for(let x=0;x<w;x+=64)c.fillRect(x,0,3,h)},1,1);
 T.wall=cTex(512,128,(c,w,h)=>{c.fillStyle='#8a8a84';c.fillRect(0,0,w,h);for(let i=0;i<1500;i++){c.fillStyle=R()<.5?'#7a7a74':'#9a9a94';c.fillRect(R()*w,R()*h,3,2)}c.fillStyle='#ff5d73';c.font='bold 40px sans-serif';c.fillText('whisper was here',90,84);c.fillStyle='#8affc1';c.font='bold 20px sans-serif';c.fillText('FOREVER IS A LONG TIME',300,40)},1,1);
 return T}
/* ---------- the world outside ---------- */
function trainSceneryBuild(){if(TRV.root||!G.ok)return;const T=G.T,X=TRN.x,TX=trvTextures(),L=TRV.L;TRV.tx=TX;const root=new T.Group();TRV.root=root;G.scene.add(root);
 const r=(()=>{let s=4242;return()=>(s=(s*16807)%2147483647)/2147483647})();
 const Y0=-1.25;
 // ground: fields and verges, ballast under both tracks, the next track's sleepers, rails and wires that never end
 const plane=(w,d,map,col,y,x)=>{const g=new T.PlaneGeometry(w,d);g.rotateX(-Math.PI/2);const m=new T.Mesh(g,bMat(map,col));m.position.set(x,y,TRV.zc);m.frustumCulled=false;root.add(m);return m};
 TRV.scroll=[];const sc=(mesh,tile,axis)=>{TRV.scroll.push({t:mesh.material.map,tile,axis:axis||'y'});return mesh};
 sc(plane(1800,1800,TX.grass,'#ffffff',Y0-.08,X),1800/12);
 TX.ballast.repeat.set(4,1800/9);sc(plane(12,1800,TX.ballast,'#ffffff',Y0,X+2),9);
 TX.sleep.repeat.set(1,1800/2.6);sc(plane(2.6,1800,TX.sleep,'#ffffff',Y0+.02,X+4.2),2.6);
 const rail=bMat(null,'#8a8a90');for(const x of[X+4.2-.72,X+4.2+.72]){const m=new T.Mesh(sGeo(.07,.16,1800),rail);m.position.set(x,Y0+.03,TRV.zc);m.frustumCulled=false;root.add(m)}
 const wire=bMat(null,'#2a2a30');for(const[x,y]of[[X,4.9],[X+4.2,4.9],[X,5.6],[X+4.2,5.6]]){const m=new T.Mesh(sGeo(.025,.025,1800),wire);m.position.set(x,y,TRV.zc);m.frustumCulled=false;root.add(m)}
 // lineside fences (scrolling)
 for(const x of[X-8,X+12]){const g=new T.PlaneGeometry(1800,1.4);g.rotateY(Math.PI/2);TX.fence.wrapS=T.RepeatWrapping;const f=TX.fence.clone();f.needsUpdate=true;f.wrapS=T.RepeatWrapping;f.repeat.set(1800/6,1);
  const m=new T.Mesh(g,bMat(f,'#ffffff',{tr:true,at:.4,ds:true}));m.position.set(x,Y0+.7,TRV.zc);m.frustumCulled=false;root.add(m);TRV.scroll.push({t:f,tile:6,axis:'x'})}
 // catenary masts every 60 m, both sides
 {const g=sGeo(.25,6.2,.25),arm=sGeo(5.6,.14,.14);arm.translate(2.6,5.4,0);const mg=mergeG([g,arm]);const it=[];for(let z=0;z<L;z+=60){it.push({x:X-3.2,y:Y0,z});it.push({x:X+7.4,y:Y0,z:z+30,r:Math.PI})}pool(mg,bMat(null,'#7a8088',{vc:1}),it)}
 // trees: thin along the line, thick in the fields
 {const it=[];for(let i=0;i<420;i++){const side=r()<.5?-1:1,z=r()*L,field=z>1000&&z<1400,dx=field?14+r()*140:14+r()*40;const s=.8+r()*1.3;it.push({x:side<0?X-dx:X+5+dx,y:Y0,z,sx:s,sy:s*(.8+r()*.5),sz:s,r:r()*3})}pool(treeGeo(),bMat(TX.tree,'#ffffff',{at:.5,ds:true,vc:1}),it)}
 // terraces: the backs of houses in the suburbs, with their roofs
 {const it=[];for(let z=520;z<990;z+=7.2){for(const side of[-1,1]){if(r()<.12)continue;const dx=24+(side>0?6:0)+r()*2;it.push({x:side<0?X-dx:X+5+dx,y:Y0,z,c:['#ffffff','#e8d8c8','#d8c8c8','#f0e8d8','#c8b8a8'][(r()*5)|0]})}}
  const hg=sGeo(9,6,7),rg=roofGeo(9.2,2.6,7.4);rg.translate(0,6,0);const H=pool(hg,bMat(TX.house,'#ffffff',{vc:1}),it);pool(rg,bMat(TX.roof,'#ffffff',{vc:1}),it);
  const lit=pool(hg,bMat(TX.houseLit,'#ffffff',{tr:true,glow:1,extra:{blending:T.AdditiveBlending}}),it);lit.lit=1;
  // sheds at the ends of the gardens
  const sh=[];for(const h of it)if(r()<.4)sh.push({x:h.x+(h.x<X?8:-8),y:Y0,z:h.z+r()*2,c:['#6a8a5a','#8a6a4a','#5a6a8a'][(r()*3)|0]});pool(sGeo(2,2.1,2.4),bMat(null,'#ffffff',{vc:1}),sh)}
 // the city: towers and blocks, near and far; a few big ones on the skyline
 {const it=[];for(let i=0;i<120;i++){const z=r()*500,side=r()<.5?-1:1,dx=34+r()*200,w=14+r()*20,h=18+r()*(dx>120?90:50);it.push({x:side<0?X-dx:X+5+dx,y:Y0,z,sx:w/10,sy:h/10,sz:(10+r()*14)/10,c:['#ffffff','#d8dce8','#e8e0d8','#c8d0d8'][(r()*4)|0]})}
  for(let i=0;i<40;i++){const z=r()*L,side=r()<.5?-1:1,dx=230+r()*55;it.push({x:side<0?X-dx:X+5+dx,y:Y0,z,sx:2+r()*2,sy:6+r()*10,sz:2+r()*2,c:'#c8ccd8'})}
  const g=sGeo(10,10,10);pool(g,bMat(TX.tower,'#ffffff',{vc:1}),it);const l=pool(g,bMat(TX.towerLit,'#ffffff',{tr:true,glow:1,extra:{blending:T.AdditiveBlending}}),it);l.lit=1}
 // warehouses and yards past the city
 {const it=[];for(let i=0;i<26;i++){const z=1400+r()*200,side=r()<.5?-1:1,dx=26+r()*80;it.push({x:side<0?X-dx:X+5+dx,y:Y0,z,sx:2+r()*2.5,sy:.8+r()*.5,sz:1.5+r()*2})}pool(sGeo(12,8,12),bMat(TX.ware,'#ffffff',{vc:1}),it)}
 // walls along the cutting through the city, here and there with graffiti
 {const a=[],b=[];let i=0;for(let z=0;z<500;z+=16){for(const x of[X-7.2,X+11.4]){(i++%5===2?b:a).push({x,y:Y0,z:z+(x>X?8:0)})}}
  pool(sGeo(.4,2.6,16,[8,2.6]),bMat(TX.wallPlain,'#ffffff',{vc:1}),a);pool(sGeo(.4,2.6,16,[16,2.6]),bMat(TX.wall,'#ffffff',{vc:1}),b)}
 // the coach windows: almost clear, a faint cool tint, a little more reflective in the dark
 {const gm=new T.MeshBasicMaterial({color:new T.Color('#c8d8e4'),transparent:true,opacity:.06,depthWrite:false,side:T.DoubleSide,fog:false});TRV.glass=gm;
  for(const w of TRN.glaze){const g=new T.PlaneGeometry(w.z1-w.z0,w.y1-w.y0);g.rotateY(Math.PI/2);const m=new T.Mesh(g,gm);m.position.set(w.x,(w.y0+w.y1)/2,(w.z0+w.z1)/2);m.renderOrder=2;root.add(m)}}
 // billboards facing the line
 TRV.boards=[];for(const[z,side,t]of[[120,-1,TX.board],[700,1,TX.board2],[1250,-1,TX.board],[1480,1,TX.board3]]){const g=new T.Group();const fr=new T.Mesh(sGeo(9,4.6,.3),bMat(null,'#3a3a44',{vc:1}));fr.position.y=3.4;g.add(fr);
  for(const px of[-3,3]){const p=new T.Mesh(sGeo(.3,3.4,.3),bMat(null,'#3a3a44',{vc:1}));p.position.x=px;g.add(p)}const face=new T.Mesh(new T.PlaneGeometry(8.6,4.2),bMat(t,'#ffffff'));face.position.set(0,5.7,.16);g.add(face);
  g.rotation.y=side<0?Math.PI/2:-Math.PI/2;g.userData={x:side<0?X-18:X+22,z};g.position.y=Y0;root.add(g);TRV.boards.push(g)}
 // signals by the line
 {const it=[];for(let z=40;z<L;z+=200)it.push({x:X-2.2,y:Y0,z});const g=mergeG([sGeo(.18,4.2,.18),(()=>{const h=sGeo(.5,1,.4);h.translate(0,4.2,0);return h})()]);pool(g,bMat(null,'#2a2a30',{vc:1}),it);
  const lg=sGeo(.22,.22,.05);lg.translate(0,4.85,-.22);const li=pool(lg,bMat(null,'#8affc1',{glow:1}),it);li.glow=1}
 // road bridges over the line
 TRV.bridges=[];for(const z of[300,1100]){const g=new T.Group(),bm=bMat(TX.brick,'#ffffff',{vc:1});const deck=new T.Mesh(sGeo(70,1.4,9),bm);deck.position.set(0,6.4,0);g.add(deck);
  for(const px of[-34,34]){const a=new T.Mesh(sGeo(2,7.8,10),bm);a.position.set(px,0,0);g.add(a)}for(const pz of[-4.3,4.3]){const pa=new T.Mesh(sGeo(70,1,.4),bm);pa.position.set(0,7.8,pz);g.add(pa)}
  for(const px of[-6,10]){const p=new T.Mesh(sGeo(1.4,6.4,8),bm);p.position.set(px,0,0);g.add(p)}
  const car1=new T.Mesh(sGeo(4.2,1.5,1.9),bMat(null,'#c0304a',{vc:1}));car1.position.set(-12,7.8,-2);g.add(car1);
  g.userData={x:X+2,z};g.position.y=Y0;root.add(g);TRV.bridges.push(g)}
 // the tunnel (one, reused): brick walls round both tracks and a lamp every 25 m
 {const g=new T.Group(),m=bMat(TX.tunnel,'#ffffff',{vc:1}),len=260;for(const[px,w]of[[-2.9,.6],[7.6,.6]]){const wm=new T.Mesh(sGeo(w,7,len,[4,4]),m);wm.position.set(px,0,0);g.add(wm)}
  const rf=new T.Mesh(sGeo(11.2,.6,len,[4,4]),m);rf.position.set(2.35,6.2,0);g.add(rf);const lm=bMat(null,'#ffd9a0',{glow:1});for(let z=-len/2+10;z<len/2;z+=25){const l=new T.Mesh(sGeo(.3,.2,.6),lm);l.position.set(-2.55,3.4,z);g.add(l)}
  // the portal: a brick face with an arch shape round the mouth
  for(const e of[-len/2,len/2]){for(const[px,w]of[[-8,10],[13,10]]){const p=new T.Mesh(sGeo(w,9,1),m);p.position.set(px,0,e);g.add(p)}const top=new T.Mesh(sGeo(31,3,1),m);top.position.set(2.5,6.8,e);g.add(top)}
  g.position.set(X,Y0,-9999);g.visible=false;root.add(g);TRV.tun={g,len,z:null}}
 // a train the other way, on the next track
 {const g=new T.Group(),len=72;const body=new T.Mesh(sGeo(2.8,3.6,len),bMat(null,'#e9ece8',{vc:1}));g.add(body);
  for(const s of[-1,1]){const p=new T.Mesh(new T.PlaneGeometry(len,1.6),bMat(TX.trainSide,'#ffffff'));p.rotation.y=s*Math.PI/2;p.position.set(s*1.41,1.6,0);g.add(p);const lp=new T.Mesh(new T.PlaneGeometry(len,1.6),bMat(TX.trainLit,'#ffffff',{tr:true,glow:1,extra:{blending:T.AdditiveBlending}}));lp.rotation.y=s*Math.PI/2;lp.position.set(s*1.42,1.6,0);g.add(lp)}
  g.position.set(X+4.2,Y0+.3,-9999);g.visible=false;root.add(g);TRV.pass={g,len,z:null}}
 // people in the seats: the top of a passer-by, cut off at the waist, sitting
 {const pick=TRN.seats.filter((s,i)=>((i*2654435761)>>>0)%100<11);for(const[i,s]of pick.entries()){const v=i%8,t=spriteTex('anon'+v,anonSVG(v));const g=new T.PlaneGeometry(.94,2.3*.56);const uv=g.attributes.uv;for(let j=0;j<uv.count;j++)uv.setY(j,.44+uv.getY(j)*.56);g.translate(0,2.3*.56/2,0);
   const m=new T.Mesh(g,new T.MeshBasicMaterial({map:t,alphaTest:.5,color:new T.Color(.9,.9,.92)}));m.position.set(s.x,.36,s.z);root.add(m);TRV.sit.push(m)}}
 // the passenger information screens over each saloon doorway
 for(const[z0,z1]of TRN.cars)for(const[pz,dir]of[[z0+2.7,1],[z1-2.7,-1]]){const c=document.createElement('canvas');c.width=512;c.height=96;const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;
  const m=new T.Mesh(new T.PlaneGeometry(.84,.16),new T.MeshBasicMaterial({map:t}));m.position.set(X,2.1,pz+dir*.024);if(dir<0)m.rotation.y=Math.PI;root.add(m);
  const bz=new T.Mesh(sGeo(.9,.2,.02),bMat(null,'#16161c',{vc:1}));bz.position.set(X,2.0,pz+dir*.012);root.add(bz);TRV.pis.push({c,t,o:Math.random()*300})}
 root.visible=false}
function mergeG(gs){const T=G.T,v=[],c=[],u=[];for(const g of gs){const n=g.index?g.toNonIndexed():g;v.push(...n.attributes.position.array);u.push(...(n.attributes.uv?n.attributes.uv.array:new Float32Array(n.attributes.position.count*2)));c.push(...(n.attributes.color?n.attributes.color.array:new Float32Array(n.attributes.position.count*3).fill(1)))}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v,3));g.setAttribute('uv',new T.Float32BufferAttribute(u,2));g.setAttribute('color',new T.Float32BufferAttribute(c,3));return g}
/* how the outside looks at this time of day: a tint, and how much the windows glow */
const TRTINT=[[1,.96,.9,0],[1,1,1,0],[1,.95,.86,0],[.95,.7,.58,.35],[.3,.27,.38,1],[.18,.18,.28,1]];
function trvTint(){const k=S&&S.day>=1?TRTINT[clamp(S.slot,0,5)]:TRTINT[1],tun=TRV.inTun?.2:1;
 for(const m of TRV.mats){if(m.userData.glow){m.opacity=m.transparent?k[3]*(TRV.inTun?.4:1):1;continue}m.color.copy(m.userData.base).multiply(new G.T.Color(k[0]*tun,k[1]*tun,k[2]*tun))}}
function trainTick(dt){
 if(!G.ok)return;
 stationTrainTick();
 const on=WD.reg==='train';if(!on){if(TRV.root)TRV.root.visible=false;return}
 if(!TRV.root)trainSceneryBuild();TRV.root.visible=true;
 const T=G.T,X=TRN.x;TRV.s+=TRV.v*dt;const s=TRV.s;
 for(const sc of TRV.scroll){const o=(s/sc.tile)%1;if(sc.axis==='x')sc.t.offset.x=o;else sc.t.offset.y=o}
 for(const P of TRV.inst)poolTick(P,s);
 const wz=it=>TRV.zc-TRV.L/2+(((it.z+s)%TRV.L)+TRV.L)%TRV.L;
 for(const g of TRV.boards){g.position.x=g.userData.x;g.position.z=wz(g.userData)}
 for(const g of TRV.bridges){g.position.x=g.userData.x;g.position.z=wz(g.userData)}
 // the tunnel: now and then, from far ahead; inside it the windows go dark
 const tn=TRV.tun;TRV.next.tun-=dt;if(tn.z===null&&TRV.next.tun<=0){tn.z=TRV.zc-650;tn.g.visible=true}
 if(tn.z!==null){tn.z+=TRV.v*dt;tn.g.position.z=tn.z;TRV.inTun=Math.abs(tn.z-TRV.zc)<tn.len/2-8;if(tn.z-tn.len/2>TRV.zc+220){tn.z=null;tn.g.visible=false;TRV.inTun=false;TRV.next.tun=45+Math.random()*50}}
 // a train the other way
 const ps=TRV.pass;TRV.next.pass-=dt;if(ps.z===null&&TRV.next.pass<=0&&!TRV.inTun){ps.z=TRV.zc-700;ps.g.visible=true;ps.wh=false}
 if(ps.z!==null){ps.z+=TRV.v*2.3*dt;ps.g.position.z=ps.z;if(!ps.wh&&ps.z>TRV.zc-70){ps.wh=true;if(typeof sfx==='function')sfx('whoosh')}if(ps.z-ps.len/2>TRV.zc+300){ps.z=null;ps.g.visible=false;TRV.next.pass=25+Math.random()*40}}
 trvTint();if(TRV.glass){const k=S&&S.day>=1?TRTINT[clamp(S.slot,0,5)][3]:0;TRV.glass.opacity=TRV.inTun?.22:.06+k*.1}
 for(const m of TRV.sit)m.rotation.y=WD.cut&&cutOn()?WD.cutYaw:WD.yaw;
 // the information screens: amber dot-matrix, the next stop scrolling past
 TRV.pisT=(TRV.pisT||0)-dt;if(TRV.pisT<=0){TRV.pisT=.08;const dn=TDEST[(S&&S.trip&&S.trip.dest)||'con'].n;
  for(const p of TRV.pis){p.o+=4;const x=p.c.getContext('2d');x.fillStyle='#0a0806';x.fillRect(0,0,512,96);x.font='bold 40px monospace';x.fillStyle='#ffb020';const msg=`This is a Quarterline service.   Next stop: ${dn}.   Please take all your belongings with you.   `;const w=x.measureText(msg).width;const off=-(p.o%w);x.fillText(msg,off,62);x.fillText(msg,off+w,62);
   x.fillStyle='#00000055';for(let y=0;y<96;y+=4)x.fillRect(0,y,512,1);p.t.needsUpdate=true}}
 tripTick(dt);
}
/* the camera on a moving train: a slow sway, a little dip over every rail joint */
function trainSway(cam){if(WD.reg!=='train')return;const t=performance.now()/1000,j=(t%1.02);cam.position.y+=Math.sin(t*2.3)*.006+Math.sin(t*7.7)*.002-.007*Math.exp(-j*14)-.005*Math.exp(-Math.abs(j-.52)*14);cam.rotation.z+=Math.sin(t*.8)*.004+Math.sin(t*2.9)*.0015}
/* ---------- the 16:12 at Platform 4 ---------- */
function stationTrainBuild(){if(TRV.stn||!G.ok)return;const T=G.T,TX=TRV.tx||trvTextures();TRV.tx=TX;const g=new T.Group();
 const c=736,zf=10.4,L=24,body=bMat(null,'#e9ece8',{vc:1}),roof=bMat(null,'#8a8e96',{vc:1}),dark=bMat(null,'#16161c',{vc:1}),nose=bMat(null,'#ffd166',{vc:1});
 for(let k=0;k<3;k++){const za=zf-k*(L+.25),zm=za-L/2;const b=new T.Mesh(sGeo(2.9,4.2,L),body);b.position.set(c,-.9,zm);g.add(b);const rf=new T.Mesh(sGeo(2.5,.25,L-.6),roof);rf.position.set(c,3.3,zm);g.add(rf);
  for(const s of[-1,1]){const p=new T.Mesh(new T.PlaneGeometry(L,1.75),bMat(TX.trainSide,'#ffffff'));p.rotation.y=s*Math.PI/2;p.position.set(c+s*1.456,.2+.875,zm);g.add(p)}
  for(const bz of[za-3.5,za-L+3.5]){const bg=new T.Mesh(sGeo(2.5,.55,3),dark);bg.position.set(c,-1.1,bz);g.add(bg)}
  if(k<2){const gw=new T.Mesh(sGeo(2.2,3.1,.3),dark);gw.position.set(c,-.4,za-L-.12);g.add(gw)}}
 for(const[e,s]of[[zf,1],[zf-3*L-.5,-1]]){const n=new T.Mesh(sGeo(2.8,4,.6),nose);n.position.set(c,-.9,e+s*.3);g.add(n);const w=new T.Mesh(sGeo(2.3,1,.05),dark);w.position.set(c,1.6,e+s*.62);g.add(w);
  for(const x of[c-1,c+1]){const l=new T.Mesh(sGeo(.3,.2,.05),bMat(null,s>0?'#ff2a3a':'#fff4d8',{glow:1}));l.position.set(x,.35,e+s*.63);g.add(l)}}
 // the open door on Platform 4, lit warm inside
 const od=new T.Mesh(new T.PlaneGeometry(1.4,2.15),bMat(null,'#ffe2b0',{glow:1}));od.rotation.y=-Math.PI/2;od.position.set(c-1.47,1.1,4.4);g.add(od);g.userData.door=od;
 G.scene.add(g);g.visible=false;TRV.stn=g}
function stationTrainTick(){const on=WD.reg==='station'&&G.ok;if(!on){if(TRV.stn)TRV.stn.visible=false;return}
 if(!TRV.stn)stationTrainBuild();const g=TRV.stn;g.visible=true;
 const dep=WD.cut&&WD.cut.k==='depart'&&cutOn();let dz=0;if(dep){const t=(performance.now()-WD.cut.t0)/1000-1.6;if(t>0)dz=-.5*1.1*t*t}
 g.position.z=dz;g.userData.door.visible=!dep;
 // the evening: the body darkens with the light
 const k=S&&S.day>=1?TRTINT[clamp(S.slot,0,5)]:TRTINT[1];for(const o of g.children){const m=o.material;if(m&&m.userData.base&&!m.userData.glow)m.color.copy(m.userData.base).multiplyScalar(Math.max(.45,(k[0]+k[1]+k[2])/3))}}
CUTS.depart={reg:'station',moves:[{eye:[733.3,1.85,15.8],at:[736.4,1.7,-14],to:{eye:[732.9,1.7,13.6],at:[736.3,1.5,-60]},dur:12,fov:44,fov1:40}],marks:[]};
/* ---------- the trip ---------- */
const TDEST={con:{n:'Conference Quarter',area:'plaza',arrive:'Twenty minutes, and the doors open onto the Conference Quarter. The Halcyon\'s neon is still shouting.'},
 home:{n:'Linden Street',area:'bakery',arrive:'Two stops. Linden Street smells of bread and diesel, the way it always has.'},
 office:{n:'Brindle & Co',area:'office',arrive:'The office, on a weekday you\'re supposed to be off. The printer senses you immediately.'}};
const DEPART=[['The doors beep twice and slide shut. Through the glass, the platform clock ticks over.','A whistle. A jolt. The train eases out of Platform 4, out from under the iron and glass and into the light.'],
 ['The doors close with a sigh. Somebody runs for it and doesn\'t make it, and pretends they weren\'t running.','The train slides out of the station, slow, then not slow at all.']];
function tripStart(dest,o){o=o||{};closeOv();const ov_=$('ov');ov_.classList.remove('phoneov','mapov','wmapov');delete ov_.dataset.app;delete ov_.dataset.from;
 ach('train');if(dest==='office')ach('office');
 const trip={dest,story:!!o.story,el:0};
 const go=()=>fadeTp(()=>{teleportArea('coachB');S.trip=trip;WD.yaw=0;WD.pit=0;hub();if(o.story)setTimeout(o.story,450)});
 if(!G.ok||window.__test||!AREAS.platform){go();return}
 const D=DEPART[(S.day+S.slot)%2];run([{bg:'platform'},{hide:1},{cut:'depart'},N(D[0]),N(D[1])],go);
}
function tripReady(){return !!(S&&S.trip&&!S.trip.story&&WD.reg==='train'&&S.trip.el>=10)}
function tripArrive(){const t=S.trip;if(!t)return;const D=TDEST[t.dest]||TDEST.con;S.trip=null;tripHud();fadeTp(()=>{teleportArea(D.area);run([{bg:D.area},{hide:1},N(D.arrive)],hub)})}
function tripTick(dt){
 if(S&&WD.reg==='train'&&!S.trip&&!$('vn').classList.contains('on')&&!S.epilogue)S.trip={dest:'con',el:0};
 if(S&&S.trip&&!S.trip.story&&worldLive())S.trip.el+=dt;
 tripHud()}
function tripHud(){let el=$('tripHud');const on=!!(S&&S.trip&&!S.trip.story&&WD.reg==='train'&&WD.active);
 if(!el){if(!on)return;el=document.createElement('div');el.id='tripHud';el.innerHTML='<div class="thl"><span class="thk">QUARTERLINE</span><b id="thN"></b><i><em id="thP"></em></i></div><button id="thGo"></button>';$('world').appendChild(el);
  $('thGo').addEventListener('click',e=>{e.stopPropagation();if(tripReady())tripArrive()});$('thGo').addEventListener('mousedown',e=>e.stopPropagation(),true)}
 el.classList.toggle('on',on);if(!on)return;const D=TDEST[S.trip.dest]||TDEST.con,p=Math.min(1,S.trip.el/10);
 const n='Next stop: '+D.n;if($('thN').textContent!==n)$('thN').textContent=n;$('thP').style.width=(p*100).toFixed(1)+'%';
 const b=$('thGo'),r=p>=1;b.classList.toggle('on',r);const bt=`Travel to ${D.n} <span class="kn">Enter</span>`;if(r&&b.dataset.t!==bt){b.innerHTML=bt;b.dataset.t=bt}}
addEventListener('keydown',e=>{if(e.key==='Enter'&&tripReady()&&typeof worldLive==='function'&&worldLive()){e.preventDefault();tripArrive()}});
