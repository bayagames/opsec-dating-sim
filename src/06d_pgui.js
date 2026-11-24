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
function pgRail(){const S_=[['map','The Week','Chapters, choices, endings'],['ends','Endings',Object.keys(META.ends).length+' of '+ENDORDER.length],['scenes','Scenes','Watch again'],['records','Records','Every run, hints, trophies']];
 if(META.loopClosed)S_.push(['after','The Week After','Monday, finally']);
 return S_.map(s=>`<button class="pgnav ${PGV.sec===s[0]?'on':''}" data-sec="${s[0]}"><b>${s[1]}</b><small>${s[2]}</small></button>`).join('')}
function pgDraw(){const f={map:pgMap,ends:pgEnds,scenes:pgScenes,records:pgRecords,after:pgAfter}[PGV.sec]||pgMap;f()}
/* ---------- The Week: the chapters, left to right ----------
   A column for each day. In it, the chapters that day can be (the version you get depends on the choices before it);
   the big choices sit between the columns; the endings make the last column, each joined to the chapter it comes out
   of. Chapters you've reached show their banner; ones you haven't are greyed; secret ones stay hidden until found.
   The paths you've actually taken are lit, and "Last run" traces your most recent week. */
const PGL={cw:340,w:260,bh:98,h:150,ry:182,ew:210,eh:34,eg:42,r:12};
const PGDEC=[[2,'WHISPER\'s message'],[3,'Mira\'s ask'],[5,'Victor\'s offer'],[6,'The plan']];
// top to bottom in each column, chosen so the lines between columns cross as little as possible
const PGORD={3:['deaddrop','exposure','liaison'],4:['lantern','packetloss','thirty'],6:['crew','suite','lumenblue','finals'],7:['bigscore','keynote','kralls','zeroday','all']};
function pgLayout(){const seen=META.chaps||{};
 const vis=k=>!CHAP[k].secret||seen[k]||(k==='zeroday'&&META.secret)||(k==='all'&&META.loop);
 const nodes={},cols=[];
 for(let d=0;d<=7;d++){const ks=(PGORD[d]||CHORDER.filter(k=>CHAP[k].day===d)).filter(vis);cols[d]=ks;ks.forEach((k,i)=>nodes[k]={k,d,i,x:d*PGL.cw,y:(i-(ks.length-1)/2)*PGL.ry})}
 // endings: in groups, one for each chapter they come out of, each group as close to its chapter as it can sit
 const src=k=>{const r=(Object.keys(META.chend||{}).find(e=>e.endsWith('>'+k))||'').split('>')[0]||endSrc(k);return nodes[r]?r:'keynote'};
 const by={};for(const k of ENDORDER){if(k==='harem'&&!nodes.all)continue;(by[src(k)]=by[src(k)]||[]).push(k)}
 const groups=Object.keys(by).map(s=>({src:s,ends:by[s],h:PGL.eg+by[s].length*PGL.eh})).sort((a,b)=>nodes[a.src].y-nodes[b.src].y);
 let bot=-1e9;for(const g of groups){g.x=8*PGL.cw+30;g.y=Math.max(bot+28,nodes[g.src].y-g.h/2);bot=g.y+g.h}
 // pull the whole stack back towards the middle
 const mid=(groups[0].y+bot)/2,ctr=groups.reduce((a,g)=>a+nodes[g.src].y,0)/groups.length;for(const g of groups)g.y+=ctr-mid;
 const ys=[...Object.values(nodes).map(n=>[n.y-PGL.h/2,n.y+PGL.h/2]).flat(),...groups.map(g=>[g.y,g.y+g.h]).flat()];
 return{nodes,cols,groups,top:Math.min(...ys)-90,bot:Math.max(...ys)+24,w:8*PGL.cw+30+PGL.ew}}
/* a line like a train map: out of the right of one card, along to its own lane in the gap, up or down, into the next */
function pgPath(x1,y1,x2,y2,lx){const r=Math.min(PGL.r,Math.abs(y2-y1)/2);if(Math.abs(y2-y1)<1)return`M${x1},${y1} H${x2}`;const s=y2>y1?1:-1;
 return`M${x1},${y1} H${lx-r} Q${lx},${y1} ${lx},${y1+s*r} V${y2-s*r} Q${lx},${y2} ${lx+r},${y2} H${x2}`}
function pgMap(){const T=pgLayout(),seen=META.chaps||{},path=META.chpath||{},chend=META.chend||{},last=PGV.last?(META.lastPath||[]):null;
 const onLast=k=>last&&last.includes(k),lastEnd=last&&META.hist&&META.hist[0]?META.hist[0].k:null;
 const card=n=>{const C=CHAP[n.k],s=!!seen[n.k],cls=['ct',s?'seen':'',PGV.node===n.k?'sel':'',last?(onLast(n.k)?'onpath':'off'):''].join(' ');
  const ban=chBanner(n.k,{lite:1}).replace('<svg ','<svg x="0" y="0" width="'+PGL.w+'" height="'+PGL.bh+'" ');
  return`<g class="${cls}" data-c="${n.k}" transform="translate(${n.x},${n.y-PGL.h/2})"><rect class="ctbg" width="${PGL.w}" height="${PGL.h}" rx="12"/>
  <g clip-path="url(#pgClip)" class="ctban">${ban}</g>${s?'':`<rect class="ctveil" width="${PGL.w}" height="${PGL.bh}" rx="12"/><text class="ctlock" x="${PGL.w/2}" y="${PGL.bh/2+6}" text-anchor="middle">NOT REACHED</text>`}
  <text class="ctk" x="14" y="${PGL.bh+19}">${C.n?'CH '+C.n:'PROLOGUE'}${C.n?' · '+DAYN[C.day].slice(0,3).toUpperCase():''}${s&&seen[n.k]>1?' · ×'+seen[n.k]:''}</text>
  <text class="ctn" x="14" y="${PGL.bh+39}">${esc(C.t)}</text>${C.via?`<text class="ctv" x="14" y="${PGL.bh+55}" >${esc(C.via.length>34?C.via.slice(0,33)+'…':C.via)}</text>`:''}${s?`<circle class="ctdot" cx="${PGL.w-16}" cy="${PGL.bh+16}" r="5"/>`:''}</g>`};
 // chapter to chapter: each target in the next column has its own lane, so lines into it share one track
 let E='';
 for(const k in T.nodes){const a=T.nodes[k];for(const nx of CHAP[k].next){const b=T.nodes[nx];if(!b)continue;const n=T.cols[b.d].length,gx=a.x+PGL.w,lx=gx+(b.i+1)*(b.x-gx)/(n+1);
  const lit=!!path[k+'>'+nx],on=last&&lit&&onLast(k)&&onLast(nx)&&last.indexOf(nx)===last.indexOf(k)+1;
  E+=`<path class="ce ${lit?'lit':''} ${on?'onpath':''}" data-a="${k}" data-b="${nx}" d="${pgPath(gx,a.y,b.x-6,b.y,lx)}" marker-end="url(#pgArr${on?'O':lit?'L':''})"/>`}}
 // chapter to its endings: one line to the group
 T.groups.forEach((g,gi)=>{const a=T.nodes[g.src],gx=a.x+PGL.w,lx=gx+(gi+1)*(g.x-gx)/(T.groups.length+1),ty=Math.max(g.y+20,Math.min(g.y+g.h-16,a.y));
  const lit=g.ends.some(e=>chend[g.src+'>'+e]),on=last&&lastEnd&&g.ends.includes(lastEnd)&&onLast(g.src);
  E+=`<path class="ce ${lit?'lit':''} ${on?'onpath':''}" data-a="${g.src}" data-b="eg:${g.src}" d="${pgPath(gx,a.y,g.x-6,ty,lx)}" marker-end="url(#pgArr${on?'O':lit?'L':''})"/>`});
 const grp=g=>`<g class="eg ${last?(g.ends.includes(lastEnd)?'onpath':'off'):''}" data-g="${g.src}" transform="translate(${g.x},${g.y})"><rect class="egbg" width="${PGL.ew}" height="${g.h}" rx="12"/><text class="egk" x="14" y="24">FROM ${esc(CHAP[g.src].t.toUpperCase())}</text>
  ${g.ends.map((k,i)=>{const got=!!META.ends[k],I=ENDINFO[k],c=TIERC[I[2]];return`<g class="tn te ${got?'got':''} ${PGV.end===k?'sel':''} ${last?(lastEnd===k?'onpath':''):''}" data-e="${k}" transform="translate(8,${PGL.eg+i*PGL.eh})"><rect x="0" y="-13" width="${PGL.ew-16}" height="26" rx="13" style="--c:${c}"/><circle cx="14" cy="0" r="5" style="fill:${got?c:'none'};stroke:${c}"/><text x="26" y="4.5">${esc(got?I[0]:'? ? ?')}</text></g>`}).join('')}</g>`;
 const heads=[0,1,2,3,4,5,6,7].map(d=>`<text class="cday" x="${d*PGL.cw+PGL.w/2}" y="${T.top+28}" text-anchor="middle">${d?DAYN[d].toUpperCase():'TWO WEEKS EARLIER'}</text>`).join('')+`<text class="cday" x="${8*PGL.cw+30+PGL.ew/2}" y="${T.top+28}" text-anchor="middle">ENDINGS</text>`;
 const decs=PGDEC.map(([d,t])=>{const x=d*PGL.cw+PGL.w+(PGL.cw-PGL.w)/2;return`<g class="cdec" transform="translate(${x},${T.top+58})"><path d="M0 -9 L9 0 L0 9 L-9 0Z"/><text x="0" y="26" text-anchor="middle">${esc(t)}</text></g>`}).join('');
 const nCh=CHORDER.filter(k=>!CHAP[k].secret).length,gotCh=CHORDER.filter(k=>seen[k]).length;
 const inner=`<div class="pgmapwrap"><div class="pghead pgmh"><div><h2>The Week</h2><p>${gotCh} of ${nCh}${CHORDER.length>nCh?'+':''} chapters reached · ${Object.keys(META.ends).length} of ${ENDORDER.length} endings. Each day is a chapter; the choice before it decides which. Point at a chapter to see every path through it.</p></div>
  <button class="pglast ${PGV.last?'on':''}" id="pgLast" ${META.lastPath&&META.lastPath.length?'':'disabled'}>${PGV.last?'Showing your last run':'Show your last run'}</button></div>
  <div class="pgcanvas" id="pgCanvas"><svg id="pgSvg" width="100%" height="100%"><defs><pattern id="pgGrid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#ffffff08"/></pattern><clipPath id="pgClip"><rect width="${PGL.w}" height="${PGL.bh}" rx="12"/></clipPath>
   ${[['','#ffffff40'],['L','#8affc1'],['O','#ffd166']].map(([k,c])=>`<marker id="pgArr${k}" viewBox="0 0 10 10" refX="4" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 1 L8 5 L0 9z" fill="${c}"/></marker>`).join('')}</defs><rect width="100%" height="100%" fill="url(#pgGrid)"/>
   <g id="pgView">${[0,1,2,3,4,5,6,7].map(d=>`<rect class="ccol" x="${d*PGL.cw-16}" y="${T.top}" width="${PGL.w+32}" height="${T.bot-T.top}" rx="18"/>`).join('')}${heads}${decs}${E}${Object.values(T.nodes).map(card).join('')}${T.groups.map(grp).join('')}</g></svg>
   <div class="pgzoom"><button id="pgZi" aria-label="Zoom in">+</button><button id="pgZo" aria-label="Zoom out">−</button><button id="pgZf" aria-label="Fit">⤢</button></div>
   <div class="pglegend"><span><i class="lg seen"></i>Reached</span><span><i class="lg"></i>Not yet</span><span><i class="lg lit"></i>A way you've gone</span><span><i class="lg path"></i>Your last run</span></div>
   ${pgDetail()}</div></div>`;
 const el=pgShell(inner,pgRail());const cv=$('pgCanvas'),svg=$('pgSvg'),G_=$('pgView');
 $('pgLast').onclick=()=>{PGV.last=!PGV.last;pgMap()};
 const apply=()=>G_.setAttribute('transform',`translate(${PGV.tx},${PGV.ty}) scale(${PGV.k})`);
 const fit=()=>{const r=cv.getBoundingClientRect(),H=T.bot-T.top;const k=Math.min(1.1,Math.max(.18,Math.min((r.width-40)/T.w,(r.height-30)/H)));PGV.k=k;PGV.tx=(r.width-T.w*k)/2;PGV.ty=(r.height-H*k)/2-T.top*k;apply()};
 // open on the start of the week at a size you can read; the fit button shows all of it
 const home=()=>{const r=cv.getBoundingClientRect();PGV.k=r.width<700?.55:.8;PGV.tx=28;PGV.ty=r.height/2;apply()};
 if(PGV.fit){PGV.fit=false;requestAnimationFrame(home)}else apply();
 const zoomAt=(f,cx,cy)=>{const k=Math.min(2.2,Math.max(.15,PGV.k*f));PGV.tx=cx-(cx-PGV.tx)*k/PGV.k;PGV.ty=cy-(cy-PGV.ty)*k/PGV.k;PGV.k=k;apply()};
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
  const t=document.elementFromPoint(e.clientX,e.clientY),g=t&&t.closest&&t.closest('.tn,.ct');if(!g){if(PGV.end||PGV.node){PGV.end=null;PGV.node=null;pgMap()}return}
  if(g.dataset.e){PGV.end=g.dataset.e;PGV.node=null}else{PGV.node=g.dataset.c;PGV.end=null}pgMap()};
 svg.addEventListener('pointerup',up);svg.addEventListener('pointercancel',drop);
 const focus=k=>{G_.classList.toggle('focus',!!k);G_.querySelectorAll('.hl').forEach(x=>x.classList.remove('hl'));if(!k)return;const set=pgThrough(k);
  G_.querySelectorAll('.ct').forEach(x=>{if(set.has(x.dataset.c))x.classList.add('hl')});
  G_.querySelectorAll('.ce').forEach(x=>{const b=x.dataset.b;if(set.has(x.dataset.a)&&(set.has(b)||b.startsWith('eg:')&&set.has(b.slice(3))))x.classList.add('hl')});
  G_.querySelectorAll('.eg').forEach(x=>{if(set.has(x.dataset.g))x.classList.add('hl')})};
 const base=PGV.node||(PGV.end?(Object.keys(META.chend||{}).find(e=>e.endsWith('>'+PGV.end))||'').split('>')[0]||endSrc(PGV.end):null);
 focus(base);
 G_.addEventListener('mouseover',e=>{if(P.size)return;const g=e.target.closest&&e.target.closest('.ct,.eg');focus(g?(g.dataset.c||g.dataset.g):base)});
 G_.addEventListener('mouseleave',()=>focus(base));
 pgDetailWire()}
/* every chapter on some path through k: everything that can lead to it, and everything it can lead to */
function pgThrough(k){const set=new Set([k]);const up=[k],dn=[k];
 while(up.length){const x=up.pop();for(const p in CHAP)if(CHAP[p].next.includes(x)&&!set.has(p)){set.add(p);up.push(p)}}
 const seenDn=new Set([k]);while(dn.length){const x=dn.pop();for(const n of CHAP[x].next)if(!seenDn.has(n)){seenDn.add(n);set.add(n);dn.push(n)}}
 return set}
/* the drawer on the right: a chapter, or an ending */
function pgDetail(){if(PGV.end)return`<aside class="pgdrawer">${pgEndCard(PGV.end)}</aside>`;
 const k=PGV.node;if(!k||!CHAP[k])return'';const C=CHAP[k],n=(META.chaps||{})[k]||0,s=n>0;
 const nexts=C.next.filter(x=>!CHAP[x].secret||(META.chaps||{})[x]);
 const ends=ENDORDER.filter(e=>(META.chend||{})[k+'>'+e]||(!(Object.keys(META.chend||{}).some(x=>x.endsWith('>'+e)))&&endSrc(e)===k)).filter(e=>e!=='harem'||s);
 return`<aside class="pgdrawer pgchd"><button class="pgdx" id="pgDx">✕</button><div class="pgchb ${s?'':'dim'}">${chBanner(k)}</div>
 <p class="pgk">${C.n?esc(CHN[C.n])+' · '+esc(DAYN[C.day]):'Prologue · '+esc(DAYN[0])}</p><h3>${esc(C.t)}</h3>
 <p class="pglede">${s?esc(C.d):'You haven\'t reached this chapter yet.'}</p>
 ${C.via?`<p class="pgk">How you get here</p><p>${esc(C.via)}.</p>`:''}
 <p class="pgk">Reached</p><p>${s?`In ${n} run${n>1?'s':''}.`:'Never, yet.'}</p>
 ${nexts.length?`<p class="pgk">What can come next</p><div class="pgchips">${nexts.map(x=>`<button class="pgchip ${(META.chaps||{})[x]?'got':''}" data-c="${x}" style="--c:${CHAP[x].art[3]}">${esc(CHAP[x].t)}</button>`).join('')}</div>`:''}
 ${ends.length?`<p class="pgk">Endings from here</p><div class="pgchips">${ends.map(e=>`<button class="pgchip ${META.ends[e]?'got':''}" data-e="${e}" style="--c:${TIERC[ENDINFO[e][2]]}">${META.ends[e]?esc(ENDINFO[e][0]):'? ? ?'}</button>`).join('')}</div>`:''}</aside>`}
function pgDetailWire(){const x=$('pgDx');if(x)x.onclick=()=>{PGV.end=null;PGV.node=null;pgDraw()};
 document.querySelectorAll('#pgx .pgdrawer [data-e]').forEach(b=>b.onclick=()=>{PGV.end=b.dataset.e;PGV.node=null;pgDraw()});
 document.querySelectorAll('#pgx .pgdrawer [data-c]').forEach(b=>b.onclick=()=>{PGV.node=b.dataset.c;PGV.end=null;pgDraw()})}
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
 <div class="pgach">${ks.map(k=>{const on=!!META.ach[k],[an,ad,hid]=achShow(k);return`<div class="pga ${on?'on':''}"><span class="pgai">${on?'★':hid?'?':'☆'}</span><div><b>${esc(an)}</b><small>${esc(ad)}</small></div></div>`}).join('')}</div>`}
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
