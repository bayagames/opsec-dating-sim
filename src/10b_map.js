/* ============ THE MAP: full screen, pan and zoom, fast travel grouped by building ============ */
/* Fast travel goes to a handful of hubs you've already been to and can reach without a train: the whole site (hotel,
   con, outside, underground) and the hotel tower are one network; home, the office and the station are each their own.
   Anywhere else: walk, or pick a room on the map and travel to the hub nearest it. */
const FTHUBS=['plaza','foyer','ringN','vendor','villagerow','food','lobby','corridor','roof','flat','office','station'];
const MAPV={net:null,reg:null,lv:0,ox:0,oz:0,sc:1,q:'',open:{},sel:null,drag:null};
const MAPNET={con:['con','f13'],f13:['con','f13'],home:['home'],office:['office'],station:['station'],train:['train']};
const MAPREG={con:'Conference Quarter',f13:'Hotel tower',home:'Linden Street',office:'Brindle & Co',station:'Central Station',train:'The Quarterline'};
function areaGroup(A){
 if(A.reg==='f13')return (A.sp[3]||0)>2?'Hotel roof':'Hotel · 13th floor';
 if(A.reg!=='con')return MAPREG[A.reg]||A.reg;
 if(A.y1<=-1.5||(A.sp[3]||0)<-2)return'Underground';
 if(A.r[2]<=-108&&!A.out)return'Halcyon Hotel';
 if(A.out)return'Outside';
 return'Convention Centre';
}
const AGROUPS=['Convention Centre','Halcyon Hotel','Hotel · 13th floor','Hotel roof','Outside','Underground','Linden Street','Brindle & Co','Central Station'];
function levelName(reg,y){const L=LEVELS[reg]||[];const v=levelOf(reg,y);const l=L.find(l=>l[0]===v);return l?l[1]:''}
function ftList(){const net=MAPNET[WD.reg]||[WD.reg];return Object.values(AREAS).filter(a=>FTHUBS.includes(a.k)&&net.includes(a.reg)&&!a.hide&&S.visited&&S.visited[a.k]&&!areaLock(a.k))}
/* the travel hub nearest a place (same network), for rooms that aren't hubs themselves */
function nearHub(A){const L=ftList();let best=null,bd=1e18;for(const h of L){const d=(h.reg===A.reg?0:400)+Math.hypot(h.sp[0]-A.sp[0],h.sp[1]-A.sp[1])+Math.abs((h.sp[3]||0)-(A.sp[3]||0))*6;if(d<bd){bd=d;best=h}}return best}
function canTravel(){return !$('vn').classList.contains('on')&&!(typeof ftBlocked==='function'&&ftBlocked())}
function fastTravel(k){if(!AREAS[k])return;S.ftRecent=[k].concat((S.ftRecent||[]).filter(x=>x!==k)).slice(0,6);closePhone();fadeTp(()=>teleportArea(k))}
/* the map of the place you're in (or, from the world map, of somewhere else: look, but you can't travel there) */
function mapOpen(fromPhone,view){
 if(!S)return;const o=$('ov');if(!(o.classList.contains('wmapov'))){MAPV.from=fromPhone?'phone':'direct';MAPV.fromWorld=false}if((o.classList.contains('on')&&!o.classList.contains('phoneov'))||$('card').classList.contains('on'))return;

 WD.active=false;o.classList.remove('wmapov');
 const mine=!view||(MAPNET[WD.reg]||[WD.reg]).includes(view);const reg=mine&&!view?WD.reg:view;MAPV.base=mine?WD.reg:view;MAPV.reg=mine&&!view?WD.reg:view;
 if(MAPV.reg===WD.reg)MAPV.lv=levelOf(WD.reg,WD.y);else{const L=LEVELS[MAPV.reg]||[[0]];MAPV.lv=(L.find(l=>l[0]===0)||L[0])[0]}
 MAPV.sel=null;MAPV.q='';mapFit(MAPV.reg===WD.reg);
 if(typeof sfx==='function')sfx('phoneOpen');drawMap();
}
/* the levels you can look at: every level of the current network you've set foot on */
function mapTabs(){const net=MAPNET[MAPV.base||WD.reg]||[WD.reg],V=S.visited||{},vis=Object.values(AREAS).filter(a=>V[a.k]),t=[];
 for(const r of net)for(const l of LEVELS[r]||[]){const seen=vis.some(a=>a.reg===r&&levelOf(r,a.sp[3]||0)===l[0])||(r===WD.reg&&levelOf(r,WD.y)===l[0]);if(seen)t.push([r,l[0],(net.length>1?(r==='f13'?'Tower · ':''):'')+l[1]])}
 if(!t.length){const r=MAPV.reg,L=(LEVELS[r]||[[0,'']]).find(l=>l[0]===MAPV.lv)||[MAPV.lv,''];t.push([r,L[0],L[1]||MAPREG[r]||''])}
 return t}
function mapBounds(reg,lv){const rs=(MAPR[reg]||[]).filter(r=>Math.abs(r.y-lv)<.6);let a=1e9,b=1e9,c=-1e9,d=-1e9;for(const r of rs){a=Math.min(a,r.x0);b=Math.min(b,r.z0);c=Math.max(c,r.x1);d=Math.max(d,r.z1)}
 if(a>c){a=WD.x-40;c=WD.x+40;b=WD.z-40;d=WD.z+40}return[a,b,c,d]}
function mapFit(onMe){const cv=$('bmap'),W=cv?cv.width:900,H=cv?cv.height:600;const[a,b,c,d]=mapBounds(MAPV.reg,MAPV.lv);
 MAPV.sc=Math.min((W-30)/(c-a),(H-30)/(d-b));MAPV.ox=(a+c)/2;MAPV.oz=(b+d)/2;
 if(onMe&&MAPV.reg===WD.reg){MAPV.sc=Math.max(MAPV.sc,W/220);MAPV.ox=WD.x;MAPV.oz=WD.z}}
function drawMap(){
 const mine=(MAPNET[WD.reg]||[WD.reg]).includes(MAPV.base||WD.reg);
 const tabs=mapTabs(),can=canTravel()&&mine,list=mine?ftList():[];const q=MAPV.q.trim().toLowerCase();
 const rec=(S.ftRecent||[]).filter(k=>list.some(a=>a.k===k));
 const groups={};for(const a of list){if(q&&!a.n.toLowerCase().includes(q))continue;const g=areaGroup(a);(groups[g]=groups[g]||[]).push(a)}
 const here=areaAt(WD.reg,WD.x,WD.z,WD.y);
 const sec=AGROUPS.filter(g=>groups[g]).map(g=>{const op=q||MAPV.open[g]!==false;return`<div class="mgrp"><button class="mgh" data-g="${esc(g)}"><span>${op?'▾':'▸'} ${esc(g)}</span><small>${groups[g].length}</small></button>${op?`<div class="mgl">${groups[g].sort((x,y)=>(x.sp[3]||0)-(y.sp[3]||0)||x.n.localeCompare(y.n)).map(a=>`<button class="mft${a.k===here?' here':''}" data-k="${a.k}" ${can?'':'disabled'}><b>${esc(a.n)}</b><small>${esc(levelName(a.reg,a.sp[3]||0))}${a.k===here?' · you are here':''}</small></button>`).join('')}</div>`:''}</div>`}).join('');
 ov(`<div class="bigmap"><div class="mtop"><button class="pback mworld" id="mback2" aria-label="World map">‹ <small>City</small></button><b>${esc(MAPREG[MAPV.base||WD.reg]||'Map')}</b><span class="small">${mine?'':'You\'re not here · just looking'}${mine&&typeof clockLabel==='function'?esc(clockLabel()):''}</span><button class="pback" id="mclose" aria-label="Close">✕</button></div>
 <div class="mbody"><div class="mview"><div class="tabs mtabs">${tabs.map(t=>`<button class="${t[0]===MAPV.reg&&t[1]===MAPV.lv?'on':''}" data-r="${t[0]}" data-l="${t[1]}">${esc(t[2])}</button>`).join('')}</div>
 <div class="mcv"><canvas id="bmap" width="900" height="620"></canvas>
 <div class="mzoom"><button id="mzi" aria-label="Zoom in">+</button><button id="mzo" aria-label="Zoom out">−</button><button id="mzme" aria-label="Centre on me">◎</button><button id="mzfit" aria-label="Whole level">▢</button></div>

 <div id="msel"></div></div>
 <div class="mleg small"><span style="color:#ff5d73">▲</span> you · <span style="color:#8affc1">★</span> story goal · <span style="color:#ffd166">●</span> someone with a scene · tap the map to select a spot, then travel or drop a pin</div></div>
 <div class="mside">${!mine?`<b>Getting there</b><p class="small">${esc((Object.values(WLOC).find(L=>L.reg.includes(MAPV.base))||{how:''}).how)}</p><p class="small">You can only travel around inside the place you're in. Go back to the city map to see everywhere else.</p><button class="btn" id="mtoworld">Back to the city map</button>`:''}<b ${mine?'':'style="display:none"'}>Fast travel</b><p class="small" ${mine?'':'style="display:none"'}>${can?'The main hubs you\'ve been to. Pick any room on the map to travel to the hub nearest it.':'Not available right now.'}</p>
 <input class="inp" id="mq" placeholder="Search places" value="${esc(MAPV.q)}" autocomplete="off">
 ${rec.length&&!q?`<div class="mrec"><small>Recent</small>${rec.map(k=>`<button class="chip mft" data-k="${k}" ${can?'':'disabled'}>${esc(AREAS[k].n)}</button>`).join('')}</div>`:''}
 <div class="mlist">${sec||'<p class="small">Nowhere yet. Explore.</p>'}</div></div></div></div>`);
 const o=$('ov');o.dataset.app='map';o.dataset.from=MAPV.from;o.classList.add('phoneov','mapov');updBlur();
 o.onclick=e=>{if(e.target===o)closePhone()};
 $('mclose').onclick=closePhone;if($('mback2'))$('mback2').onclick=phoneBack;if($('mtoworld'))$('mtoworld').onclick=phoneBack;if(!mine&&$('mzme'))$('mzme').style.display='none';
 o.querySelectorAll('.mtabs button').forEach(b=>b.onclick=()=>{MAPV.reg=b.dataset.r;MAPV.lv=+b.dataset.l;MAPV.sel=null;mapFit(MAPV.reg===WD.reg&&MAPV.lv===levelOf(WD.reg,WD.y));drawMap()});
 o.querySelectorAll('.mgh').forEach(b=>b.onclick=()=>{const g=b.dataset.g;MAPV.open[g]=MAPV.open[g]===false;drawMap()});
 o.querySelectorAll('.mft').forEach(b=>b.onclick=()=>fastTravel(b.dataset.k));
 const qi=$('mq');qi.oninput=()=>{MAPV.q=qi.value;const p=qi.selectionStart;drawMap();const n=$('mq');n.focus();n.setSelectionRange(p,p)};
 $('mzi').onclick=()=>{MAPV.sc*=1.4;paintMap()};$('mzo').onclick=()=>{MAPV.sc/=1.4;paintMap()};
 $('mzme').onclick=()=>{if(MAPV.reg!==WD.reg||MAPV.lv!==levelOf(WD.reg,WD.y)){MAPV.reg=WD.reg;MAPV.lv=levelOf(WD.reg,WD.y);drawMap()}MAPV.ox=WD.x;MAPV.oz=WD.z;MAPV.sc=Math.max(MAPV.sc,$('bmap').width/220);paintMap()};
 $('mzfit').onclick=()=>{mapFit(false);paintMap()};
 mapWire($('bmap'));paintMap();
}
function mapSize(cv){const r=cv.getBoundingClientRect(),d=Math.min(2,devicePixelRatio||1),w=Math.max(200,r.width*d|0),h=Math.max(160,r.height*d|0);if(cv.width!==w||cv.height!==h){const k=w/cv.width;cv.width=w;cv.height=h;MAPV.sc*=k}}
function paintMap(){const cv=$('bmap');if(!cv)return;mapSize(cv);MAPV.sc=clamp(MAPV.sc,cv.width/900,cv.width/12);drawMapCanvas(cv,MAPV.reg,{level:MAPV.lv,view:MAPV,labels:1});
 // what you just tapped: the room outlined, the spot marked
 {const x=cv.getContext('2d'),X=v=>(v-MAPV.ox)*MAPV.sc+cv.width/2,Z=v=>(v-MAPV.oz)*MAPV.sc+cv.height/2,u=Math.max(1,cv.width/900);
  const SA=MAPV.sel&&AREAS[MAPV.sel];if(SA&&SA.reg===MAPV.reg){const r=SA.r;x.save();x.strokeStyle='#ffd166';x.lineWidth=2.5*u;x.setLineDash([7*u,5*u]);x.strokeRect(X(r[0]),Z(r[1]),(r[2]-r[0])*MAPV.sc,(r[3]-r[1])*MAPV.sc);x.restore()}
  const P=MAPV.pt;if(P){const px=X(P.x),pz=Z(P.z);x.save();x.strokeStyle='#ffffff';x.lineWidth=2*u;x.beginPath();x.arc(px,pz,9*u,0,7);x.stroke();x.beginPath();x.moveTo(px-15*u,pz);x.lineTo(px-5*u,pz);x.moveTo(px+5*u,pz);x.lineTo(px+15*u,pz);x.moveTo(px,pz-15*u);x.lineTo(px,pz-5*u);x.moveTo(px,pz+5*u);x.lineTo(px,pz+15*u);x.stroke();x.fillStyle='#ffd166';x.beginPath();x.arc(px,pz,3*u,0,7);x.fill();x.restore()}}
 const s=$('msel');if(!s)return;const A=MAPV.sel&&AREAS[MAPV.sel],P=MAPV.pt;
 const inNet=A&&(MAPNET[WD.reg]||[]).includes(A.reg),hub=A&&inNet?(FTHUBS.includes(A.k)&&S.visited[A.k]&&!areaLock(A.k)?A:nearHub(A)):null,lk=A&&areaLock(A.k);
 s.innerHTML=A?`<div class="msel"><b>${esc(A.n)}</b><small>${esc(areaGroup(A))} · ${esc(levelName(A.reg,A.sp[3]||0))}${lk?' · closed for now':''}</small>${hub?`<button class="btn pri" id="mgo" ${canTravel()?'':'disabled'}>${hub===A?'Travel here':'Travel to '+esc(hub.n)+' (nearest)'}</button>`:''}${P?'<button class="btn" id="mpin">Pin this spot</button>':''}${S.wp?'<button class="btn" id="mclr">Remove my pin</button>':''}</div>`:(P||S.wp?`<div class="msel">${P?'<button class="btn" id="mpin">Pin this spot</button>':''}${S.wp?'<button class="btn" id="mclr">Remove my pin</button>':''}</div>`:'');
 if($('mgo'))$('mgo').onclick=()=>fastTravel(hub.k);
 if($('mpin'))$('mpin').onclick=()=>{S.wp={reg:MAPV.reg,x:P.x,z:P.z,y:MAPV.lv};MAPV.pt=null;toast('Pin set: follow the yellow marker','var(--butter)');paintMap()};
 if($('mclr'))$('mclr').onclick=()=>{S.wp=null;paintMap()}}
/* drag to pan, wheel or pinch to zoom, tap a room to pick it */
function mapWire(cv){
 const pts=new Map();let moved=0,pinch=0;
 const toW=(px,py)=>{const r=cv.getBoundingClientRect(),k=cv.width/r.width;return[MAPV.ox+((px-r.left)*k-cv.width/2)/MAPV.sc,MAPV.oz+((py-r.top)*k-cv.height/2)/MAPV.sc]};
 cv.onpointerdown=e=>{try{cv.setPointerCapture(e.pointerId)}catch(_){}pts.set(e.pointerId,[e.clientX,e.clientY]);moved=0;if(pts.size===2){const[a,b]=[...pts.values()];pinch=Math.hypot(a[0]-b[0],a[1]-b[1])}};
 cv.onpointermove=e=>{if(!pts.has(e.pointerId))return;const p=pts.get(e.pointerId),r=cv.getBoundingClientRect(),k=cv.width/r.width;
  if(pts.size===1){const dx=e.clientX-p[0],dy=e.clientY-p[1];moved+=Math.abs(dx)+Math.abs(dy);MAPV.ox-=dx*k/MAPV.sc;MAPV.oz-=dy*k/MAPV.sc}
  pts.set(e.pointerId,[e.clientX,e.clientY]);
  if(pts.size===2){const[a,b]=[...pts.values()],d=Math.hypot(a[0]-b[0],a[1]-b[1]);if(pinch)MAPV.sc*=d/pinch;pinch=d;moved=99}
  paintMap()};
 const up=e=>{if(!pts.has(e.pointerId))return;pts.delete(e.pointerId);if(pts.size<2)pinch=0;
  if(moved<14&&pts.size===0){const[wx,wz]=toW(e.clientX,e.clientY);let best=null,bs=1e18;
   for(const A of Object.values(AREAS)){if(A.reg!==MAPV.reg||A.hide)continue;const r=A.r;if(wx<r[0]||wx>r[2]||wz<r[1]||wz>r[3])continue;if(levelOf(A.reg,A.sp[3]||0)!==MAPV.lv)continue;const s=(r[2]-r[0])*(r[3]-r[1]);if(s<bs){bs=s;best=A.k}}
   MAPV.sel=best;MAPV.pt={x:wx,z:wz};paintMap()}};
 cv.onpointerup=up;cv.onpointercancel=up;
 cv.onwheel=e=>{e.preventDefault();const[wx,wz]=toW(e.clientX,e.clientY),f=Math.exp(-e.deltaY*.0015);MAPV.sc*=f;MAPV.ox=wx-(wx-MAPV.ox)/f;MAPV.oz=wz-(wz-MAPV.oz)/f;paintMap()};
}
