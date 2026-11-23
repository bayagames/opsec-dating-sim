/* ============ POSTGAME: the screen ============
   Fullscreen, everywhere (title screen and phone). Opens only once this file has seen an ending.
   Four rooms down the side: The Week (a map of every big choice, left to right, that you can drag and zoom),
   Endings (the gallery and what you know about each), Scenes (watch again), Records (every run, hints, achievements).
   Once the loop is closed, a fifth: The Week After. */
const PGV={sec:'map',end:null,node:null,tx:40,ty:0,k:1,fit:true,from:'title'};
const pgOpen=()=>Object.keys(META.ends||{}).length>0;
const fmtDur=ms=>{const m=Math.round((ms||0)/60000),h=Math.floor(m/60);return h?h+'h '+String(m%60).padStart(2,'0')+'m':m+'m'};
const TIERC={good:'var(--mint)',mixed:'var(--butter)',bad:'var(--coral)',true:'#c9b6ff',secret:'#c9b6ff'};
const TIERN={true:'True ending',good:'Ending',mixed:'Ending',bad:'Bad ending',secret:'Secret ending'};
/* opening and closing: from the title, or from the phone (where it sits over the phone and returns to it) */
function postgame(sec,from){if(!pgOpen()){toast('Finish a run to open the postgame','var(--dim)');return}
 if(sec)PGV.sec=sec;PGV.from=from||(S&&S.inWorld&&$('ov').classList.contains('phoneov')?'phone':PGV.from||'title');
 if(document.pointerLockElement){WD.selfUnlock=true;try{document.exitPointerLock()}catch(e){}}
 pgDraw()}
function pgEsc(){if(PGV.end||PGV.node!==null&&PGV.node!==undefined){PGV.end=null;PGV.node=null;pgDraw();return}pgClose()}
function pgClose(){const el=$('pgx');if(el)el.remove();document.body.classList.remove('pgon');if(PGV.from==='phone'&&S&&S.inWorld){phone()}else if($('title').classList.contains('on'))titleView('main')}
function pgShell(inner,rail){let el=$('pgx');if(!el){el=document.createElement('div');el.id='pgx';$('app').appendChild(el)}document.body.classList.add('pgon');
 const ne=Object.keys(META.ends).length;
 el.innerHTML=`<div class="pgtop"><div class="pgbrand"><span class="pgdot"></span><b>${pgOpen()?'POSTGAME':'ACHIEVEMENTS'}</b><span class="pgfile">${esc(META.name||'File '+PROF)}</span></div>
  <div class="pgmeta">${pgOpen()?`<span><b>${ne}</b>/${ENDORDER.length} endings</span>`:''}<span><b>${achPct()}%</b> achievements</span><span><b>${fmtDur(META.play)}</b> played</span></div>
  <button class="pgclose" id="pgClose" aria-label="Close">✕</button></div>
  <div class="pgmain">${rail?`<nav class="pgrail">${rail}</nav>`:''}<section class="pgsec">${inner}</section></div>`;
 $('pgClose').onclick=pgClose;
 el.querySelectorAll('[data-sec]').forEach(b=>b.onclick=()=>{PGV.sec=b.dataset.sec;PGV.end=null;PGV.node=null;pgDraw()});
 return el}
function pgRail(){const S_=[['map','The Week','A map of every choice'],['ends','Endings',Object.keys(META.ends).length+' of '+ENDORDER.length],['scenes','Scenes','Watch again'],['records','Records','Every run, hints, trophies']];
 if(META.loopClosed)S_.push(['after','The Week After','Monday, finally']);
 return S_.map(s=>`<button class="pgnav ${PGV.sec===s[0]?'on':''}" data-sec="${s[0]}"><b>${s[1]}</b><small>${s[2]}</small></button>`).join('')}
function pgDraw(){const f={map:pgMap,ends:pgEnds,scenes:pgScenes,records:pgRecords,after:pgAfter}[PGV.sec]||pgMap;f()}
/* ---------- The Week: the tree, left to right ---------- */
const PGL={cw:250,rh:54,nw:210,nh:42,ew:180};
function pgLayout(){const nodes=[],edges=[];let leaf=0,maxD=0;
 const walk=(n,d,par)=>{const me={n,d,kids:[],par,id:nodes.length};nodes.push(me);maxD=Math.max(maxD,d);if(par)edges.push([par,me]);
  const kids=(n.kids||[]).slice();for(const k of n.ends||[])kids.push({end:k});
  if(n.end){me.leaf=1;me.y=leaf++*PGL.rh;return me}
  if(!kids.length){me.y=leaf++*PGL.rh;return me}
  for(const c of kids)me.kids.push(walk(c,d+1,me));me.y=(me.kids[0].y+me.kids[me.kids.length-1].y)/2;return me};
 walk(TREE,0,null);
 for(const m of nodes)m.x=m.n.end?(maxD)*PGL.cw:m.d*PGL.cw;
 return{nodes,edges,w:maxD*PGL.cw+PGL.ew+40,h:leaf*PGL.rh}}
function wrap2(t,n){const w=t.split(' '),L=['',''];let i=0;for(const x of w){if((L[i]+' '+x).trim().length>n&&i===0&&L[0])i=1;L[i]=(L[i]+' '+x).trim()}if(L[1].length>n)L[1]=L[1].slice(0,n-1)+'…';return L.filter(Boolean)}
function pgMap(){const T=pgLayout(),fl=META.fl||{};
 const seenN=n=>!n.fl||!!fl[n.fl],hidden=n=>n.secret&&!seenN(n)&&!(n.need&&n.need());
 const nodeSVG=m=>{const n=m.n;
  if(n.end){const k=n.end,got=!!META.ends[k],E=ENDINFO[k],c=TIERC[E[2]];return`<g class="tn te ${got?'got':''} ${PGV.end===k?'sel':''}" data-e="${k}" transform="translate(${m.x},${m.y})"><rect x="0" y="${-PGL.nh/2}" width="${PGL.ew}" height="${PGL.nh}" rx="21" style="--c:${c}"/><circle cx="18" cy="0" r="6" style="fill:${got?c:'none'};stroke:${c}"/><text x="32" y="5">${esc(got?E[0]:'? ? ?')}</text></g>`}
  const s=seenN(n),h=hidden(n),L=h?['A hidden branch']:wrap2(n.t,30);
  return`<g class="tn td ${s?'seen':''} ${h?'hid':''} ${PGV.node===m.id?'sel':''}" data-n="${m.id}" transform="translate(${m.x},${m.y})"><rect x="0" y="${-PGL.nh/2}" width="${PGL.nw}" height="${PGL.nh}" rx="9"/>${n.fl&&s?`<text class="tick" x="${PGL.nw-16}" y="5">✓</text>`:''}${L.map((l,i)=>`<text x="12" y="${(L.length===1?5:-3)+i*15}">${esc(l)}</text>`).join('')}</g>`};
 const edge=([a,b])=>{const x1=a.x+PGL.nw,y1=a.y,x2=b.x,y2=b.y,mx=(x1+x2)/2;const lit=(b.n.end?!!META.ends[b.n.end]:(!b.n.fl||fl[b.n.fl]));return`<path class="te-l ${lit?'lit':''}" d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}"/>`};
 const cols=[];for(const m of T.nodes)if(!m.n.end)cols[m.d]=1;
 const inner=`<div class="pgmapwrap"><div class="pghead"><h2>The Week</h2><p>Every big choice, left to right, and where it leads. Ticks are choices you've made in some run. Drag to move, scroll or pinch to zoom, tap anything.</p></div>
  <div class="pgcanvas" id="pgCanvas"><svg id="pgSvg" width="100%" height="100%"><defs><pattern id="pgGrid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#ffffff08"/></pattern></defs><rect width="100%" height="100%" fill="url(#pgGrid)"/>
   <g id="pgView">${T.edges.map(edge).join('')}${T.nodes.map(nodeSVG).join('')}</g></svg>
   <div class="pgzoom"><button id="pgZi" aria-label="Zoom in">+</button><button id="pgZo" aria-label="Zoom out">−</button><button id="pgZf" aria-label="Fit">⤢</button></div>
   <div class="pglegend"><span><i class="lg seen"></i>Chosen</span><span><i class="lg"></i>Not yet</span><span><i class="lg hid"></i>Hidden</span><span><i class="lg end"></i>Ending</span></div>
   ${pgDetail()}</div></div>`;
 const el=pgShell(inner,pgRail());const cv=$('pgCanvas'),svg=$('pgSvg'),G_=$('pgView');
 const apply=()=>G_.setAttribute('transform',`translate(${PGV.tx},${PGV.ty}) scale(${PGV.k})`);
 const fit=()=>{const r=cv.getBoundingClientRect();const k=Math.min(1.2,Math.max(.25,Math.min((r.width-40)/T.w,(r.height-60)/(T.h+PGL.nh))));PGV.k=k;PGV.tx=24;PGV.ty=(r.height-T.h*k)/2;apply()};
 // open at a size you can read, on the start of the week; the fit button shows the whole thing
 const home=()=>{const r=cv.getBoundingClientRect(),root=T.nodes[0];PGV.k=r.width<700?.7:.95;PGV.tx=24;PGV.ty=r.height/2-root.y*PGV.k;apply()};
 if(PGV.fit){PGV.fit=false;requestAnimationFrame(home)}else apply();
 const zoomAt=(f,cx,cy)=>{const k=Math.min(2.5,Math.max(.2,PGV.k*f));PGV.tx=cx-(cx-PGV.tx)*k/PGV.k;PGV.ty=cy-(cy-PGV.ty)*k/PGV.k;PGV.k=k;apply()};
 $('pgZi').onclick=()=>{const r=cv.getBoundingClientRect();zoomAt(1.25,r.width/2,r.height/2)};$('pgZo').onclick=()=>{const r=cv.getBoundingClientRect();zoomAt(.8,r.width/2,r.height/2)};$('pgZf').onclick=fit;
 cv.addEventListener('wheel',e=>{e.preventDefault();const r=cv.getBoundingClientRect();zoomAt(e.deltaY<0?1.12:.89,e.clientX-r.left,e.clientY-r.top)},{passive:false});
 const P=new Map();let moved=0,pinch=null;
 const drop=e=>{P.delete(e.pointerId);if(P.size<2)pinch=null;svg.classList.remove('grab')};
 svg.addEventListener('dragstart',e=>e.preventDefault());
 svg.addEventListener('lostpointercapture',drop);
 svg.addEventListener('pointerdown',e=>{if(e.button>0)return;e.preventDefault();try{svg.setPointerCapture(e.pointerId)}catch(_){}svg.classList.add('grab');P.set(e.pointerId,[e.clientX,e.clientY]);moved=0;if(P.size===2){const[a,b]=[...P.values()];pinch=Math.hypot(a[0]-b[0],a[1]-b[1])}});
 svg.addEventListener('pointermove',e=>{if(!P.has(e.pointerId))return;if(e.pointerType==='mouse'&&!(e.buttons&1)){drop(e);return}const o=P.get(e.pointerId),dx=e.clientX-o[0],dy=e.clientY-o[1];P.set(e.pointerId,[e.clientX,e.clientY]);
  if(P.size===2&&pinch){const[a,b]=[...P.values()],d=Math.hypot(a[0]-b[0],a[1]-b[1]),r=cv.getBoundingClientRect();zoomAt(d/pinch,(a[0]+b[0])/2-r.left,(a[1]+b[1])/2-r.top);pinch=d;moved=99;return}
  moved+=Math.abs(dx)+Math.abs(dy);PGV.tx+=dx;PGV.ty+=dy;apply()});
 const up=e=>{if(!P.has(e.pointerId))return;drop(e);if(moved>6||P.size)return;
  const t=document.elementFromPoint(e.clientX,e.clientY),g=t&&t.closest&&t.closest('.tn');if(!g){if(PGV.end||PGV.node!==null){PGV.end=null;PGV.node=null;pgMap()}return}
  if(g.dataset.e){PGV.end=g.dataset.e;PGV.node=null}else{PGV.node=+g.dataset.n;PGV.end=null}pgMap()};
 svg.addEventListener('pointerup',up);svg.addEventListener('pointercancel',drop);
 pgDetailWire(T)}
/* the drawer on the right: an ending, or a choice */
function pgDetail(){if(PGV.end)return`<aside class="pgdrawer">${pgEndCard(PGV.end)}</aside>`;
 if(PGV.node!==null&&PGV.node!==undefined){const T=pgLayout(),m=T.nodes[PGV.node];if(!m)return'';const n=m.n,fl=META.fl||{},seen=!n.fl||fl[n.fl],hid=n.secret&&!seen&&!(n.need&&n.need());
  const below=[];const col=x=>{for(const c of x.kids)if(c.n.end)below.push(c.n.end);else col(c)};col(m);
  return`<aside class="pgdrawer"><button class="pgdx" id="pgDx">✕</button><p class="pgk">A choice</p><h3>${hid?'A hidden branch':esc(n.t)}</h3><p>${hid?'Something in the week you haven\'t found yet. The riddles in Records point the way.':seen?(n.fl?'You\'ve made this choice in at least one run.':'Where every week starts.'):'You haven\'t made this choice yet.'}</p>
  ${below.length?`<p class="pgk">Leads to</p><div class="pgchips">${[...new Set(below)].map(k=>`<button class="pgchip ${META.ends[k]?'got':''}" data-e="${k}" style="--c:${TIERC[ENDINFO[k][2]]}">${META.ends[k]?esc(ENDINFO[k][0]):'? ? ?'}</button>`).join('')}</div>`:''}</aside>`}
 return''}
function pgDetailWire(){const x=$('pgDx');if(x)x.onclick=()=>{PGV.end=null;PGV.node=null;pgDraw()};document.querySelectorAll('#pgx .pgdrawer [data-e]').forEach(b=>b.onclick=()=>{PGV.end=b.dataset.e;PGV.node=null;pgDraw()})}
function pgEndCard(k){const E=ENDINFO[k],got=!!META.ends[k],V=(META.endv&&META.endv[k])||[],hinted=HINTS.some(h=>META.hints.includes(h.id)&&!h.riddle&&h.t.toLowerCase().includes(E[0].toLowerCase()));
 return`<button class="pgdx" id="pgDx">✕</button><p class="pgk" style="color:${TIERC[E[2]]}">${TIERN[E[2]]}</p><h3>${got?esc(E[0]):'? ? ?'}</h3><p class="pglede">${got?esc(E[1]):'You haven\'t found this one yet.'}</p>
 <p class="pgk">How</p><p>${got||hinted?esc(ENDHOW[k]||''):'Unknown. Every ending you find teaches you a little more: look in Records for hints.'}</p>
 ${V.length?`<p class="pgk">Your versions · ${V.length}</p>${V.map(v=>`<div class="pgver"><div class="pgvh"><b>${esc(v.h)}</b><span>${fmtTime(v.at)}</span></div><div class="pgfaces">${v.loved.map(g=>`<span title="${CH[g].name}">${head(lookOf(g),'h')}</span>`).join('')||'<span class="small">nobody in love</span>'}</div><p>${whyLines(v).map(esc).join(' ')}</p></div>`).join('')}`:''}`}
/* ---------- Endings: the gallery ---------- */
function pgEnds(){const tiers=[['true','The true ending'],['secret','Secret'],['good','Good'],['mixed','Mixed'],['bad','Bad']];
 const inner=`<div class="pgpad"><div class="pghead"><h2>Endings</h2><p>${Object.keys(META.ends).length} of ${ENDORDER.length} found. Who you love is your own business, and shows up in all of them.</p></div>
 <div class="pgsplit"><div class="pggal">${tiers.map(([t,n])=>{const ks=ENDORDER.filter(k=>ENDINFO[k][2]===t);if(!ks.length)return'';return`<div class="pgtier"><p class="pgk" style="color:${TIERC[t]}">${n} · ${ks.filter(k=>META.ends[k]).length}/${ks.length}</p><div class="pggrid">${ks.map(k=>{const got=META.ends[k],V=(META.endv&&META.endv[k])||[];return`<button class="pgcard ${got?'got':''} ${PGV.end===k?'sel':''}" data-e="${k}" style="--c:${TIERC[t]}"><span class="pgcn">${String(ENDORDER.indexOf(k)+1).padStart(2,'0')}</span><b>${got?esc(ENDINFO[k][0]):'? ? ?'}</b><small>${got?esc(ENDINFO[k][1]):'Not found'}</small>${V.length>1?`<i>×${V.length}</i>`:''}</button>`}).join('')}</div></div>`}).join('')}</div>
 ${PGV.end?`<aside class="pgdrawer pgside">${pgEndCard(PGV.end)}</aside>`:''}</div></div>`;
 pgShell(inner,pgRail());document.querySelectorAll('#pgx .pgcard').forEach(b=>b.onclick=()=>{PGV.end=b.dataset.e;pgEnds()});pgDetailWire()}
/* ---------- Scenes: watch again ---------- */
function pgScenes(){const sc=META.seenSc||{},inRun=S&&S.inWorld&&!S.ending&&!S.replay;const tot=ROM.length*6,seen=ROM.reduce((a,g)=>a+[0,1,2,3,4,5].filter(i=>sc[g+i]).length,0);
 const inner=`<div class="pgpad"><div class="pghead"><h2>Scenes</h2><p>${seen} of ${tot} scenes seen, in any run.${inRun?' You can watch them again from the title screen.':' Watching again changes nothing.'}</p></div>
 <div class="pgpeople">${ROM.filter(g=>[0,1,2,3,4,5].some(i=>sc[g+i])).map(g=>{const ids=[0,1,2,3,4,5].map(i=>g+i),n=ids.filter(id=>sc[id]).length;return`<div class="pgperson ${n?'':'none'}" style="--c:${CH[g].col}"><div class="pgph">${n?head(lookOf(g),n===6?'h':'n'):'<span>?</span>'}</div><div class="pgpb"><b>${n?CH[g].name:'Someone you haven\'t met'}</b><div class="pgdots">${ids.map((id,i)=>`<button class="pgsd ${sc[id]?'on':''}" ${sc[id]&&!inRun?`data-r="${id}"`:'disabled'} title="${i===5?'The last scene':i===4?'With a friend':i===0?'Meeting':'Scene '+i}">${i===5?'♥':i===0?'·':i}</button>`).join('')}${sc['epi_'+g]?`<button class="pgsd on wide" ${inRun?'disabled':`data-r="epi_${g}"`}>Epilogue</button>`:''}</div></div></div>`}).join('')}${ROM.some(g=>!sc[g+'0'])?`<div class="pgperson none"><div class="pgph"><span>?</span></div><div class="pgpb"><b>${ROM.filter(g=>!sc[g+'0']).length} people you haven't met yet</b><small class="small">Their scenes appear here once you've seen them.</small></div></div>`:''}</div></div>`;
 pgShell(inner,pgRail());document.querySelectorAll('#pgx [data-r]').forEach(b=>b.onclick=()=>{$('pgx').remove();document.body.classList.remove('pgon');replayScene(b.dataset.r)})}
/* ---------- Records: every run, hints, achievements ---------- */
function pgRecords(){const st=META.stats||{},H=META.hist||[],hints=HINTS.filter(h=>META.hints.includes(h.id));
 const top=Object.entries(META.lovedN||{}).sort((a,b)=>b[1]-a[1]).slice(0,5);
 const fav=Object.entries((META.hist||[]).reduce((o,r)=>(o[r.k]=(o[r.k]||0)+1,o),{})).sort((a,b)=>b[1]-a[1])[0];
 const tiles=[['Time played',fmtDur(META.play)],['Runs finished',META.runs||0],['Endings',Object.keys(META.ends).length+'/'+ENDORDER.length],['Achievements',achPct()+'%'],['Fastest run',st.fastest?fmtDur(st.fastest):'—'],['Loops',META.loop||0],['Fell in love',(st.loved||0)+' times'],['Mysteries solved',st.solved||0],['Clues found',st.clues||0],['Money earned','£'+(st.earned||0)],['Gifts given',st.gifts||0],['Times doxxed',st.doxxed||0],['Hints',hints.length+'/'+HINTS.length],['Most common ending',fav?ENDINFO[fav[0]][0]:'—']];
 const all=Object.keys(ACH),got=all.filter(k=>META.ach[k]);
 const inner=`<div class="pgpad"><div class="pghead"><h2>Records</h2><p>Everything this file remembers.</p></div>
 <div class="pgtiles">${tiles.map(t=>`<div class="pgtile"><small>${t[0]}</small><b>${esc(String(t[1]))}</b></div>`).join('')}</div>
 ${top.length?`<p class="pgk">Most loved</p><div class="pgtop">${top.map(([g,n])=>`<div class="pgtopc" style="--c:${CH[g].col}"><span>${head(lookOf(g),'h')}</span><b>${CH[g].name}</b><small>${n} ${n===1?'run':'runs'}</small></div>`).join('')}</div>`:''}
 <div class="pgcols"><div><p class="pgk">Runs</p><div class="pghist">${H.slice(0,20).map(r=>`<div class="pgrun"><span class="pgrd" style="background:${TIERC[(ENDINFO[r.k]||[])[2]]||'var(--dim)'}"></span><div><b>${esc((ENDINFO[r.k]||['?'])[0])}</b><small>${esc(r.h)}${r.loop?' · in the loop':''} · ${fmtTime(r.at)}${r.t?' · '+fmtDur(r.t):''}</small></div><div class="pgfaces sm">${r.loved.slice(0,6).map(g=>`<span>${head(lookOf(g),'h')}</span>`).join('')}${r.loved.length>6?`<em>+${r.loved.length-6}</em>`:''}</div></div>`).join('')||'<p class="small">No finished runs on record yet.</p>'}</div></div>
 <div><p class="pgk">Hints · ${hints.length}/${HINTS.length}</p>${hints.map(h=>`<div class="pghint ${h.riddle?'riddle':''}">${h.riddle?'<b>?</b>':''}<span>${esc(h.t)}</span></div>`).join('')||'<p class="small">Every ending teaches you something.</p>'}</div></div>
 ${achBlock()}</div>`;
 pgShell(inner,pgRail());achWire()}
/* achievements, shared by Records and the title screen's own Achievements screen */
let ACHF='all';
function achBlock(){const all=achVis(),got=all.filter(k=>META.ach[k]).length,ks=all.filter(k=>ACHF==='all'||(ACHF==='got'?META.ach[k]:!META.ach[k]));
 return`<div class="pgachh"><p class="pgk">Achievements · ${got}/${all.length}</p><div class="pgring" style="--p:${achPct()}"><b>${achPct()}%</b></div><div class="pgseg">${[['all','All'],['got','Unlocked'],['no','Locked']].map(t=>`<button class="${ACHF===t[0]?'on':''}" data-af="${t[0]}">${t[1]}</button>`).join('')}</div></div>
 <div class="pgach">${ks.map(k=>{const a=ACH[k],on=!!META.ach[k],hid=a[2]&&!on;return`<div class="pga ${on?'on':''}"><span class="pgai">${on?'★':hid?'?':'☆'}</span><div><b>${hid?'Hidden':esc(a[0])}</b><small>${hid?'Keep playing.':esc(a[1])}</small></div></div>`}).join('')}</div>`}
function achWire(){document.querySelectorAll('#pgx [data-af]').forEach(b=>b.onclick=()=>{ACHF=b.dataset.af;pgDraw()})}
/* the title screen's Achievements: just the trophies, open from the first run */
function achScreen(){PGV.sec='ach';PGV.from='title';const prev=pgDraw;
 pgShell(`<div class="pgpad"><div class="pghead"><h2>Achievements</h2><p>Everything you've done in this file.</p></div>${achBlock()}</div>`,'');
 document.querySelectorAll('#pgx [data-af]').forEach(b=>b.onclick=()=>{ACHF=b.dataset.af;achScreen()})}
/* ---------- The Week After ---------- */
function pgAfter(){const inRun=S&&S.inWorld&&!S.ending&&!S.epilogue;
 const inner=`<div class="pgafter"><div class="pgaftbg"></div><div class="pgaftin"><p class="pgk">Unlocked by closing the loop</p><h2>The Week After</h2><p class="pglede">Monday. The con's over. Nobody's watching anyone. All twenty-one of them are still in the Quarter, and they're all yours.</p>
 <div class="pgheads">${ROM.map(g=>`<span>${head(lookOf(g),'h')}</span>`).join('')}</div>
 <ul class="pgafl"><li>Walk anywhere: every door is open.</li><li>Talk to anyone, give gifts, just chat.</li><li>No story, no clock, no Exposure. Stay as long as you like.</li></ul>
 ${inRun?'<p class="small">Finish or quit your current run to go back.</p>':`<button class="btn pri pgbig" id="pgGo">Go back to the Quarter</button>`}</div></div>`;
 pgShell(inner,pgRail());const b=$('pgGo');if(b)b.onclick=()=>{$('pgx').remove();document.body.classList.remove('pgon');epilogueMode()}}
/* ---------- playtime: counted while a run is open and the tab is visible ---------- */
setInterval(()=>{if(!PROF||!S||S.replay||document.hidden||$('title').classList.contains('on'))return;META.play=(META.play||0)+5000;S.play=(S.play||0)+5000;if((META.play/5000)%12===0)saveMeta()},5000);
addEventListener('visibilitychange',()=>{if(document.hidden&&PROF)saveMeta()});
