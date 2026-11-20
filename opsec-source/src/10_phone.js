/* ============ PHONE ============ */
const ICON={
 messages:['#8affc1','<path d="M6 8h20v13H13l-5 4v-4H6z" fill="#1b1026"/>'],
 map:['#7cc4ff','<path d="M5 9l7-3 8 3 7-3v17l-7 3-8-3-7 3z" fill="none" stroke="#1b1026" stroke-width="2.4" stroke-linejoin="round"/><path d="M12 6v17M20 9v17" stroke="#1b1026" stroke-width="2"/>'],
 goals:['#ffd166','<circle cx="16" cy="16" r="10" fill="none" stroke="#1b1026" stroke-width="2.4"/><circle cx="16" cy="16" r="5" fill="none" stroke="#1b1026" stroke-width="2.4"/><circle cx="16" cy="16" r="1.8" fill="#1b1026"/>'],
 hearts:['#ff8fc8','<path d="M16 26s-10-6-10-13a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7-10 13-10 13z" fill="#1b1026"/>'],
 stats:['#ff5d73','<path d="M7 25V15M13 25V9M19 25V13M25 25V6" stroke="#1b1026" stroke-width="3.4" stroke-linecap="round"/>'],
 evidence:['#c9b6ff','<circle cx="14" cy="14" r="7" fill="none" stroke="#1b1026" stroke-width="2.6"/><path d="M19 19l7 7" stroke="#1b1026" stroke-width="3.4" stroke-linecap="round"/>'],
 bag:['#ffb347','<path d="M8 12h16l-1.5 14h-13z" fill="#1b1026"/><path d="M12 12a4 4 0 0 1 8 0" fill="none" stroke="#1b1026" stroke-width="2.4"/>'],
 saves:['#8affc1','<path d="M8 6h13l4 4v16H8z" fill="none" stroke="#1b1026" stroke-width="2.4" stroke-linejoin="round"/><path d="M11 6v6h9V6M11 26v-7h10v7" fill="none" stroke="#1b1026" stroke-width="2.2"/>'],
 log:['#bba8cf','<path d="M8 7h16v18H8z" fill="none" stroke="#1b1026" stroke-width="2.4"/><path d="M11 12h10M11 16h10M11 20h6" stroke="#1b1026" stroke-width="2"/>'],
 settings:['#d9d4cc','<circle cx="16" cy="16" r="4.5" fill="none" stroke="#1b1026" stroke-width="2.6"/><path d="M16 5v4M16 23v4M5 16h4M23 16h4M8.2 8.2l2.8 2.8M21 21l2.8 2.8M8.2 23.8l2.8-2.8M21 11l2.8-2.8" stroke="#1b1026" stroke-width="2.6" stroke-linecap="round"/>']
};
const APPN={messages:'Messages',map:'Map',goals:'Goals',hearts:'Hearts',stats:'Stats',evidence:'Evidence',bag:'Bag',saves:'Saves',log:'Log',settings:'Settings'};
const APPU={messages:'phone',map:'map',goals:'map',hearts:'aff',stats:'skill',evidence:'clues',bag:'cred'};
const PTIME=['07:12','10:31','11:04','09:47','13:22','16:02','23:48'];
let phApp=null,phThread=null,phReg=null;
function phone(app){
 if(!S)return;
 if(document.pointerLockElement){WD.selfUnlock=true;try{document.exitPointerLock()}catch(e){}}
 WD.active=false;
 phApp=app||null;phThread=null;phReg=null;drawPhone();
}
function closePhone(){closeOv();$('ov').classList.remove('phoneov');if($('vn').classList.contains('on'))return;if(G.ok&&S.inWorld)hub();else if($('hub').classList.contains('on'))hub()}
function drawPhone(){
 const apps=Object.keys(APPN).filter(a=>!APPU[a]||S.unl[APPU[a]]);
 const unread=S.msgs.filter(m=>!m.r).length,nn=S.ch>0&&G.ok?newScenes().length:0;
 let body='',title='';
 if(!phApp){
  body=`<div class="home"><div class="clock">${PTIME[S.ch]||'00:00'}</div><div class="date">${S.ch<=5?CHAP[S.ch][1]:'The afterparty'}</div><div class="grid">${apps.map(a=>`<button class="app" data-a="${a}"><span class="ic" style="background:${ICON[a][0]}"><svg viewBox="0 0 32 32">${ICON[a][1]}</svg>${a==='messages'&&unread?`<i>${unread}</i>`:''}${a==='goals'&&nn?`<i>${nn}</i>`:''}</span><span class="nm">${APPN[a]}</span></button>`).join('')}</div></div>`;
 }else{
  title=APPN[phApp];
  body=APPS[phApp]();
 }
 ov(`<div class="phone"><div class="pbar"><span>${S.ch>0?'CTRL+ALT+NET':'HOME-WIFI'}</span><span>${PTIME[S.ch]||''}</span><span class="bat"><b style="width:${Math.max(8,92-S.ch*13)}%"></b></span></div>${phApp?`<div class="ptop"><button class="pback" id="pback" aria-label="Back">‹</button><b>${phThread?esc(CH[phThread]?CH[phThread].name:phThread):title}</b></div>`:''}<div class="pbody">${body}</div><button class="phome" id="phome" aria-label="Close phone"></button></div>`);
 $('ov').classList.add('phoneov');
 $('ov').onclick=e=>{if(e.target===$('ov'))closePhone()};
 $('phome').onclick=closePhone;
 if($('pback'))$('pback').onclick=()=>{if(phThread){phThread=null}else phApp=null;drawPhone()};
 $('ov').querySelectorAll('.app').forEach(b=>b.onclick=()=>{phApp=b.dataset.a;drawPhone()});
 if(APPS_AFTER[phApp])APPS_AFTER[phApp]();
}
const bar=(v,c)=>`<div class="bar"><i style="width:${v}%;background:${c}"></i></div>`;
const APPS={
 messages(){
  S.msgs.forEach(m=>{if(!phThread||m.f===phThread)m.r=1});hud();
  if(phThread){const ms=S.msgs.filter(m=>m.f===phThread);return `<div class="thread">${ms.map(m=>`<div class="bub2">${esc(m.t)}<small>Ch.${m.c}</small></div>`).join('')}</div>`}
  const by={};S.msgs.forEach(m=>{by[m.f]=m});const ks=Object.keys(by).sort((a,b)=>S.msgs.lastIndexOf(by[b])-S.msgs.lastIndexOf(by[a]));
  return ks.length?ks.map(k=>`<button class="chat" data-f="${esc(k)}">${CH[k]?`<span class="hd">${head(k==='dave'?'davex':k,'n')}</span>`:'<span class="hd"></span>'}<span><b>${esc(CH[k]?CH[k].name:k)}</b><small>${esc(by[k].t)}</small></span></button>`).join(''):'<p class="small">No messages yet.</p>';
 },
 map(){
  if(S.ch===0)return `<div class="tabs">${LEVELS.home.map(l=>`<button class="${'home:'+l[0]===(phReg||'home:'+levelOf('home',WD.y))?'on':''}" data-r="home:${l[0]}">${l[1]}</button>`).join('')}</div><canvas id="pmap" width="560" height="480"></canvas><p class="small">Home: your flat upstairs, Proof downstairs. No fast travel needed.</p>`;
  const tabs=[];for(const r of['con','f13'])for(const l of LEVELS[r]){if(r==='f13'&&l[0]>0&&!S.f.roof_open)continue;tabs.push([r+':'+l[0],l[1]])}
  phReg=phReg||((WD.reg==='home'?'con':WD.reg)+':'+levelOf(WD.reg==='home'?'con':WD.reg,WD.y));
  const vis=Object.values(AREAS).filter(a=>a.reg!=='home'&&!a.hide&&S.visited&&S.visited[a.k]);
  const can=!$('vn').classList.contains('on');
  return `<div class="tabs">${tabs.map(r=>`<button class="${r[0]===phReg?'on':''}" data-r="${r[0]}">${r[1]}</button>`).join('')}</div><canvas id="pmap" width="560" height="480"></canvas>
  <p class="small">Red arrow: you. Yellow dots: new scenes. Green star: your goal (an arrow means it's on another level). Unvisited rooms show "?".</p>
  <b>Fast travel</b><p class="small">${can?'Anywhere you\'ve already been.':'Not available during a conversation.'}</p><div class="ft">${vis.map(a=>`<button class="btn" data-k="${a.k}" ${can&&a.k!==WD.area?'':'disabled'}>${a.n}</button>`).join('')}</div>`;
 },
 goals(){
  const o=objective();const ns=S.ch>0&&G.ok?newScenes():[];
  let h=`<div class="goal"><small>CHAPTER ${S.ch} · ${CHAP[S.ch]?CHAP[S.ch][0]:''}</small><b>${o?esc(o.t):''}</b></div>`;
  h+=`<b>New scenes (${ns.length})</b>`+(ns.length?ns.map(n=>`<div class="girl"><div class="hd">${head(n.id==='dave'?'davex':n.id,'n')}</div><div class="i"><b>${CH[n.id].name}</b><br><span class="small">${AREAS[n.a]?AREAS[n.a].n:''}</span></div></div>`).join(''):'<p class="small">Nothing waiting right now. Talk shop with people, give gifts, or move the story on.</p>');
  const later=ROM.filter(g=>S.f['met_'+g]&&S.stage[g]<ROUTES[g].scenes.length&&!sceneReady(g));
  if(later.length)h+=`<b style="display:block;margin-top:10px">Coming later</b>`+later.map(g=>{const R=ROUTES[g],s=S.stage[g];return`<p class="small">${CH[g].name}: ${S.ch<R.req[s]?'chapter '+R.req[s]:'needs ♥ '+R.aff[s]+' (now '+S.aff[g]+')'}</p>`}).join('');
  return h;
 },
 hearts(){
  const met=ROM.filter(g=>S.f['met_'+g]);
  return met.length?met.map(g=>{const R=ROUTES[g],n=R.scenes.length,s=S.stage[g];const nx=s<n?(S.ch<R.req[s]?`Next scene: chapter ${R.req[s]}`:S.aff[g]<R.aff[s]?`Next scene at ♥ ${R.aff[s]}`:'Next scene ready now'):'Route complete';return`<div class="girl"><div class="hd">${head(g,s>=n?'h':'n')}</div><div class="i"><b>${CH[g].name}</b> <span class="dots">${'■'.repeat(s)}${'□'.repeat(n-s)}</span>${bar(S.aff[g],CH[g].col)}<span class="small">♥ ${S.aff[g]} · ${R.blurb}<br>${nx}${S.gifted[g]?' · gift given':''}${S.hang[S.ch+g]?' · talked shop this chapter':''}</span></div></div>`}).join(''):'<p class="small">You haven\'t met anyone yet.</p>';
 },
 stats(){
  return [['Skill',S.skill,'var(--mint)','skill'],['Clout',S.clout,'var(--butter)','clout'],['Exposure',S.exp,'var(--coral)','exp']].filter(m=>S.unl[m[3]]).map(m=>`<div style="margin:8px 0 12px"><b>${m[0]}</b> <span class="term" style="font-size:22px">${m[1]}</span>${bar(m[1],m[2])}<span class="small">${TUT[m[3]][1]}</span></div>`).join('')+(S.unl.cred?`<p><b>Credits</b> <span class="term" style="font-size:22px;color:var(--butter)">${S.cred}</span></p>`:'');
 },
 evidence(){return S.clues.length?S.clues.map((c,i)=>`<div class="clue"><small>#${i+1}</small>${esc(CLUE[c])}</div>`).join(''):'<p class="small">No evidence yet.</p>'},
 bag(){const e=Object.entries(S.inv);return (e.length?e.map(([k,v])=>{const it=ITEMS[k];return`<div class="item"><div><b>${it.n}${v>1?' ×'+v:''}</b><small>${it.d}${it.g?` Give it to ${CH[it.g].name} when you hang out.`:''}</small></div></div>`}).join(''):'<p class="small">Empty. The Con Store in the Vendor Hall sells gear and gifts.</p>')},
 saves(){return '<div id="spanel"></div>'},
 log(){return S.log.slice(-80).reverse().map(l=>`<div class="logl">${l[0]?`<b>${esc(l[0])}</b> `:''}${esc(l[1])}</div>`).join('')||'<p class="small">Nothing yet.</p>'},
 settings(){return `<div class="row"><button class="btn" id="stf">Text: ${S.fast?'instant':'typewriter'}</button><button class="btn" id="sts">Look speed: ${({0.6:'slow',1:'normal',1.6:'fast'})[S.sens||1]||'normal'}</button><button class="btn" id="sti">Invert look: ${S.inv?'on':'off'}</button><button class="btn" id="stm">Footsteps: ${S.mute?'off':'on'}</button><button class="btn" id="stt">Touch look: ${S.tcam?'drag the camera':'drag the world'}</button></div>
  <p style="margin-top:14px"><b>Controls</b></p><p class="small">Keyboard: WASD or arrows to walk, Shift to run, mouse to look (click the world to capture the mouse, Esc to release), E to interact, P for phone, M for map.<br>Touch: drag the left side to walk, drag the right side to look, tap the prompt to interact. Push the stick all the way to run. If looking feels backwards, switch Touch look above.</p>
  <p class="small">The game autosaves while you explore. Use the Saves app for save slots and export.</p><div class="row"><button class="btn" id="stq">Quit to title (autosaves)</button></div>`}
};
const APPS_AFTER={
 saves(){savesPanel($('spanel'),'phone',drawPhone)},
 messages(){$('ov').querySelectorAll('.chat').forEach(b=>b.onclick=()=>{phThread=b.dataset.f;drawPhone()})},
 map(){const c=$('pmap');if(!c)return;const key=phReg||('home:'+levelOf('home',WD.y));const[rg,lv]=key.split(':');drawMapCanvas(c,rg,{level:+lv});$('ov').querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{phReg=b.dataset.r;drawPhone()});
  $('ov').querySelectorAll('.ft .btn').forEach(b=>b.onclick=()=>{const k=b.dataset.k;closePhone();fadeTp(()=>teleportArea(k))})},
 settings(){$('stf').onclick=()=>{S.fast=!S.fast;drawPhone()};$('sts').onclick=()=>{const o=[.6,1,1.6];S.sens=o[(o.indexOf(S.sens||1)+1)%3];drawPhone()};$('sti').onclick=()=>{S.inv=!S.inv;drawPhone()};$('stm').onclick=()=>{S.mute=!S.mute;drawPhone()};$('stt').onclick=()=>{S.tcam=!S.tcam;drawPhone()};$('stq').onclick=()=>{S.pos=[WD.reg,WD.x,WD.z,WD.yaw,WD.y];save();closeOv();$('ov').classList.remove('phoneov');WD.active=false;titleScreen()}}
};
