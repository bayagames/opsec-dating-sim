/* ============ THE MAP: full screen, pan and zoom, fast travel grouped by building ============ */
/* Fast travel goes anywhere you've already been that you can reach without a train: the whole site (hotel, con, outside,
   underground) and the hotel tower are one network; home, the office and the station are each their own. */
const MAPV={net:null,reg:null,lv:0,ox:0,oz:0,sc:1,q:'',open:{},sel:null,drag:null};
const MAPNET={con:['con','f13'],f13:['con','f13'],home:['home'],office:['office'],station:['station']};
const MAPREG={con:'The site',f13:'Hotel tower',home:'Linden Street',office:'Brindle & Co',station:'Central Station'};
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
function ftList(){const net=MAPNET[WD.reg]||[WD.reg];return Object.values(AREAS).filter(a=>net.includes(a.reg)&&!a.hide&&S.visited&&S.visited[a.k])}
function canTravel(){return !$('vn').classList.contains('on')&&!(typeof ftBlocked==='function'&&ftBlocked())}
function fastTravel(k){if(!AREAS[k])return;S.ftRecent=[k].concat((S.ftRecent||[]).filter(x=>x!==k)).slice(0,6);closePhone();fadeTp(()=>teleportArea(k))}
function mapOpen(){
 if(!S)return;const o=$('ov');if((o.classList.contains('on')&&!o.classList.contains('phoneov'))||$('card').classList.contains('on'))return;
 if(document.pointerLockElement){WD.selfUnlock=true;try{document.exitPointerLock()}catch(e){}}
 WD.active=false;
 const reg=WD.reg;MAPV.reg=reg;MAPV.lv=levelOf(reg,WD.y);MAPV.sel=null;MAPV.q='';mapFit(true);
 if(typeof sfx==='function')sfx('phoneOpen');drawMap();
}
/* the levels you can look at: every level of the current network you've set foot on */
function mapTabs(){const net=MAPNET[WD.reg]||[WD.reg],V=S.visited||{},vis=Object.values(AREAS).filter(a=>V[a.k]),t=[];
 for(const r of net)for(const l of LEVELS[r]||[]){const seen=vis.some(a=>a.reg===r&&levelOf(r,a.sp[3]||0)===l[0])||(r===WD.reg&&levelOf(r,WD.y)===l[0]);if(seen)t.push([r,l[0],(net.length>1?(r==='f13'?'Tower · ':''):'')+l[1]])}
 return t}
function mapBounds(reg,lv){const rs=(MAPR[reg]||[]).filter(r=>Math.abs(r.y-lv)<.6);let a=1e9,b=1e9,c=-1e9,d=-1e9;for(const r of rs){a=Math.min(a,r.x0);b=Math.min(b,r.z0);c=Math.max(c,r.x1);d=Math.max(d,r.z1)}
 if(a>c){a=WD.x-40;c=WD.x+40;b=WD.z-40;d=WD.z+40}return[a,b,c,d]}
function mapFit(onMe){const cv=$('bmap'),W=cv?cv.width:900,H=cv?cv.height:600;const[a,b,c,d]=mapBounds(MAPV.reg,MAPV.lv);
 MAPV.sc=Math.min((W-30)/(c-a),(H-30)/(d-b));MAPV.ox=(a+c)/2;MAPV.oz=(b+d)/2;
 if(onMe&&MAPV.reg===WD.reg){MAPV.sc=Math.max(MAPV.sc,W/220);MAPV.ox=WD.x;MAPV.oz=WD.z}}
function drawMap(){
 const tabs=mapTabs(),can=canTravel(),list=ftList();const q=MAPV.q.trim().toLowerCase();
 const rec=(S.ftRecent||[]).filter(k=>list.some(a=>a.k===k));
 const groups={};for(const a of list){if(q&&!a.n.toLowerCase().includes(q))continue;const g=areaGroup(a);(groups[g]=groups[g]||[]).push(a)}
 const here=areaAt(WD.reg,WD.x,WD.z,WD.y);
 const sec=AGROUPS.filter(g=>groups[g]).map(g=>{const op=q||MAPV.open[g]!==false;return`<div class="mgrp"><button class="mgh" data-g="${esc(g)}"><span>${op?'▾':'▸'} ${esc(g)}</span><small>${groups[g].length}</small></button>${op?`<div class="mgl">${groups[g].sort((x,y)=>(x.sp[3]||0)-(y.sp[3]||0)||x.n.localeCompare(y.n)).map(a=>`<button class="mft${a.k===here?' here':''}" data-k="${a.k}" ${can?'':'disabled'}><b>${esc(a.n)}</b><small>${esc(levelName(a.reg,a.sp[3]||0))}${a.k===here?' · you are here':''}</small></button>`).join('')}</div>`:''}</div>`}).join('');
 ov(`<div class="bigmap"><div class="mtop"><b>Map</b><span class="small">${esc(MAPREG[WD.reg]||'')}${typeof clockLabel==='function'?' · '+esc(clockLabel()):''}</span><button class="pback" id="mclose" aria-label="Close">✕</button></div>
 <div class="mbody"><div class="mview"><div class="tabs mtabs">${tabs.map(t=>`<button class="${t[0]===MAPV.reg&&t[1]===MAPV.lv?'on':''}" data-r="${t[0]}" data-l="${t[1]}">${esc(t[2])}</button>`).join('')}</div>
 <canvas id="bmap" width="900" height="620"></canvas>
 <div class="mzoom"><button id="mzi" aria-label="Zoom in">+</button><button id="mzo" aria-label="Zoom out">−</button><button id="mzme" aria-label="Centre on me">◎</button><button id="mzfit" aria-label="Whole level">▢</button></div>
 <div class="mleg small"><span style="color:#ff5d73">▲</span> you · <span style="color:#8affc1">★</span> story goal · <span style="color:#ffd166">●</span> someone with a scene · tap a room you've visited to travel there</div>
 <div id="msel"></div></div>
 <div class="mside"><b>Fast travel</b><p class="small">${can?'Anywhere you\'ve been, in this part of the city. Trains go further.':'Not available right now.'}</p>
 <input class="inp" id="mq" placeholder="Search places" value="${esc(MAPV.q)}" autocomplete="off">
 ${rec.length&&!q?`<div class="mrec"><small>Recent</small>${rec.map(k=>`<button class="chip mft" data-k="${k}" ${can?'':'disabled'}>${esc(AREAS[k].n)}</button>`).join('')}</div>`:''}
 <div class="mlist">${sec||'<p class="small">Nowhere yet. Explore.</p>'}</div></div></div></div>`);
 const o=$('ov');o.classList.add('phoneov','mapov');updBlur();
 o.onclick=e=>{if(e.target===o)closePhone()};
 $('mclose').onclick=closePhone;
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
 const s=$('msel');if(!s)return;const A=MAPV.sel&&AREAS[MAPV.sel];
 s.innerHTML=A?`<div class="msel"><b>${esc(A.n)}</b><small>${esc(areaGroup(A))} · ${esc(levelName(A.reg,A.sp[3]||0))}</small>${(MAPNET[WD.reg]||[]).includes(A.reg)&&S.visited[A.k]?`<button class="btn pri" id="mgo" ${canTravel()?'':'disabled'}>Travel here</button>`:'<small>Not visited yet</small>'}</div>`:'';
 if($('mgo'))$('mgo').onclick=()=>fastTravel(A.k)}
/* drag to pan, wheel or pinch to zoom, tap a room to pick it */
function mapWire(cv){
 const pts=new Map();let moved=0,pinch=0;
 const toW=(px,py)=>{const r=cv.getBoundingClientRect(),k=cv.width/r.width;return[MAPV.ox+((px-r.left)*k-cv.width/2)/MAPV.sc,MAPV.oz+((py-r.top)*k-cv.height/2)/MAPV.sc]};
 cv.onpointerdown=e=>{cv.setPointerCapture(e.pointerId);pts.set(e.pointerId,[e.clientX,e.clientY]);moved=0;if(pts.size===2){const[a,b]=[...pts.values()];pinch=Math.hypot(a[0]-b[0],a[1]-b[1])}};
 cv.onpointermove=e=>{if(!pts.has(e.pointerId))return;const p=pts.get(e.pointerId),r=cv.getBoundingClientRect(),k=cv.width/r.width;
  if(pts.size===1){const dx=e.clientX-p[0],dy=e.clientY-p[1];moved+=Math.abs(dx)+Math.abs(dy);MAPV.ox-=dx*k/MAPV.sc;MAPV.oz-=dy*k/MAPV.sc}
  pts.set(e.pointerId,[e.clientX,e.clientY]);
  if(pts.size===2){const[a,b]=[...pts.values()],d=Math.hypot(a[0]-b[0],a[1]-b[1]);if(pinch)MAPV.sc*=d/pinch;pinch=d;moved=99}
  paintMap()};
 const up=e=>{if(!pts.has(e.pointerId))return;pts.delete(e.pointerId);if(pts.size<2)pinch=0;
  if(moved<8&&pts.size===0){const[wx,wz]=toW(e.clientX,e.clientY);let best=null,bs=1e18;
   for(const A of Object.values(AREAS)){if(A.reg!==MAPV.reg||A.hide)continue;const r=A.r;if(wx<r[0]||wx>r[2]||wz<r[1]||wz>r[3])continue;if(levelOf(A.reg,A.sp[3]||0)!==MAPV.lv)continue;const s=(r[2]-r[0])*(r[3]-r[1]);if(s<bs){bs=s;best=A.k}}
   MAPV.sel=best;paintMap()}};
 cv.onpointerup=up;cv.onpointercancel=up;
 cv.onwheel=e=>{e.preventDefault();const[wx,wz]=toW(e.clientX,e.clientY),f=Math.exp(-e.deltaY*.0015);MAPV.sc*=f;MAPV.ox=wx-(wx-MAPV.ox)/f;MAPV.oz=wz-(wz-MAPV.oz)/f;paintMap()};
}
