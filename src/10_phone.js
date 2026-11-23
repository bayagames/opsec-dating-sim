/* ============ PHONE ============ */
const ICON={
 postgame:['#ffd166','<path d="M6 24h20M9 24V14M16 24V8M23 24V17" stroke="#1b1026" stroke-width="3" stroke-linecap="round"/><circle cx="9" cy="11" r="2.4" fill="#1b1026"/><circle cx="16" cy="5.5" r="2.4" fill="#1b1026"/><circle cx="23" cy="14" r="2.4" fill="#1b1026"/>'],
 echo:['#c9b6ff','<path d="M16 6a10 10 0 1 0 10 10" fill="none" stroke="#1b1026" stroke-width="2.6" stroke-linecap="round"/><path d="M26 7v9h-9" fill="none" stroke="#1b1026" stroke-width="2.6" stroke-linejoin="round"/><circle cx="16" cy="16" r="2.5" fill="#1b1026"/>'],
 messages:['#8affc1','<path d="M6 8h20v13H13l-5 4v-4H6z" fill="#1b1026"/>'],
 map:['#7cc4ff','<path d="M5 9l7-3 8 3 7-3v17l-7 3-8-3-7 3z" fill="none" stroke="#1b1026" stroke-width="2.4" stroke-linejoin="round"/><path d="M12 6v17M20 9v17" stroke="#1b1026" stroke-width="2"/>'],
 goals:['#ffd166','<circle cx="16" cy="16" r="10" fill="none" stroke="#1b1026" stroke-width="2.4"/><circle cx="16" cy="16" r="5" fill="none" stroke="#1b1026" stroke-width="2.4"/><circle cx="16" cy="16" r="1.8" fill="#1b1026"/>'],
 hearts:['#ff8fc8','<path d="M16 26s-10-6-10-13a5.5 5.5 0 0 1 10-3 5.5 5.5 0 0 1 10 3c0 7-10 13-10 13z" fill="#1b1026"/>'],
 stats:['#ff5d73','<path d="M7 25V15M13 25V9M19 25V13M25 25V6" stroke="#1b1026" stroke-width="3.4" stroke-linecap="round"/>'],
 evidence:['#c9b6ff','<circle cx="14" cy="14" r="7" fill="none" stroke="#1b1026" stroke-width="2.6"/><path d="M19 19l7 7" stroke="#1b1026" stroke-width="3.4" stroke-linecap="round"/>'],
 bag:['#ffb347','<path d="M8 12h16l-1.5 14h-13z" fill="#1b1026"/><path d="M12 12a4 4 0 0 1 8 0" fill="none" stroke="#1b1026" stroke-width="2.4"/>'],
 saves:['#8affc1','<path d="M8 6h13l4 4v16H8z" fill="none" stroke="#1b1026" stroke-width="2.4" stroke-linejoin="round"/><path d="M11 6v6h9V6M11 26v-7h10v7" fill="none" stroke="#1b1026" stroke-width="2.2"/>'],
 log:['#bba8cf','<path d="M8 7h16v18H8z" fill="none" stroke="#1b1026" stroke-width="2.4"/><path d="M11 12h10M11 16h10M11 20h6" stroke="#1b1026" stroke-width="2"/>'],
 quit:['#ff5d73','<path d="M16 6v9" stroke="#1b1026" stroke-width="3" stroke-linecap="round"/><path d="M10.5 9.5a8.5 8.5 0 1 0 11 0" fill="none" stroke="#1b1026" stroke-width="2.8" stroke-linecap="round"/>'],
 calendar:['#ffd166','<rect x="6" y="8" width="20" height="18" rx="2" fill="none" stroke="#1b1026" stroke-width="2.4"/><path d="M6 13h20M11 5v6M21 5v6" stroke="#1b1026" stroke-width="2.4" stroke-linecap="round"/><rect x="10" y="17" width="4" height="4" fill="#1b1026"/>'],
 cases:['#c9b6ff','<rect x="5" y="7" width="22" height="18" rx="2" fill="none" stroke="#1b1026" stroke-width="2.4"/><circle cx="11" cy="13" r="2" fill="#1b1026"/><circle cx="21" cy="12" r="2" fill="#1b1026"/><circle cx="16" cy="20" r="2" fill="#1b1026"/><path d="M11 13L21 12L16 20Z" fill="none" stroke="#1b1026" stroke-width="1.6"/>'],
 story:['#8affc1','<path d="M7 6h12l6 6v14H7z" fill="none" stroke="#1b1026" stroke-width="2.4" stroke-linejoin="round"/><path d="M11 14h10M11 18h10M11 22h6" stroke="#1b1026" stroke-width="2"/>'],
 achieve:['#ffb347','<path d="M10 6h12v6a6 6 0 0 1-12 0z" fill="#1b1026"/><path d="M10 8H6a4 4 0 0 0 4 5M22 8h4a4 4 0 0 1-4 5" fill="none" stroke="#1b1026" stroke-width="2"/><path d="M16 18v4M11 26h10" stroke="#1b1026" stroke-width="2.6" stroke-linecap="round"/>'],
 settings:['#d9d4cc','<circle cx="16" cy="16" r="4.5" fill="none" stroke="#1b1026" stroke-width="2.6"/><path d="M16 5v4M16 23v4M5 16h4M23 16h4M8.2 8.2l2.8 2.8M21 21l2.8 2.8M8.2 23.8l2.8-2.8M21 11l2.8-2.8" stroke="#1b1026" stroke-width="2.6" stroke-linecap="round"/>']
};
const APPN={postgame:'Postgame',echo:'Echo',messages:'Messages',calendar:'Calendar',map:'Map',hearts:'Hearts',cases:'Case board',stats:'Stats',story:'Story',achieve:'Achievements',bag:'Bag',saves:'Saves',log:'Log',settings:'Settings',quit:'Quit'};
const APPU={echo:'echo',messages:'phone',calendar:'phone',map:'map',hearts:'aff',cases:'clues',stats:'skill',story:'phone',achieve:'phone',bag:'phone'};
/* the phone: a home screen of apps; every app opens full screen. Back (or Esc) goes back to the home screen. */
let phApp=null,phThread=null,phReg=null;const PH={case:null,pick:[],ans:null,heart:null,day:null,stab:'week',atab:'all',ctab:'board',sday:null};
function phone(app){
 if(!S)return;
 const o=$('ov');if((o.classList.contains('on')&&!o.classList.contains('phoneov'))||$('card').classList.contains('on'))return;
 const opening=!o.classList.contains('phoneov');if(opening)PH.day=null;
 if(document.pointerLockElement){WD.selfUnlock=true;try{document.exitPointerLock()}catch(e){}}
 WD.active=false;phThread=null;
 if(app){openApp(app,false);return}
 phApp=null;drawPhone();
 if(opening){const ph=o.querySelector('.phone');if(ph)ph.classList.add('opening');if(typeof sfx==='function')sfx('phoneOpen')}
}
function closePhone(){if($('ov').classList.contains('phoneov')&&typeof sfx==='function')sfx('phoneClose');const o=$('ov');delete o.dataset.app;delete o.dataset.from;closeOv();o.classList.remove('phoneov','mapov','appov');phApp=null;if(G.ok&&S&&S.inWorld)relock();if($('vn').classList.contains('on'))return;if(G.ok&&S.inWorld)hub();else if($('hub').classList.contains('on'))hub()}
/* Esc / back: from an app you opened on the phone, back to the phone; otherwise close */
function phoneBack(){const o=$('ov');if(o.dataset.app&&o.dataset.from==='phone'){phApp=null;phThread=null;drawPhone()}else closePhone()}
function drawPhone(){
 const apps=Object.keys(APPN).filter(a=>a==='postgame'?pgOpen():!APPU[a]||S.unl[APPU[a]]);
 const unread=S.msgs.filter(m=>!m.r).length,nn=S.day>0?ROM.filter(sceneReady).length:0,nc=S.day>0?Object.keys(MYST).filter(m=>S.unl.clues&&canSolve(m)).length:0;
 const body=`<div class="home"><div class="clock">${S.day?SLOTT[S.slot]:'07:12'}</div><div class="date">${esc(clockLabel())}</div><div class="grid">${apps.map(a=>`<button class="app" data-a="${a}"><span class="ic" style="background:${ICON[a][0]}"><svg viewBox="0 0 32 32">${ICON[a][1]}</svg>${a==='messages'&&unread?`<i>${unread}</i>`:''}${a==='hearts'&&nn?`<i>${nn}</i>`:''}${a==='cases'&&nc?`<i>${nc}</i>`:''}</span><span class="nm">${APPN[a]}</span></button>`).join('')}</div></div>`;
 ov(`<div class="phone"><div class="pbar"><span>${S.day>0&&WD.reg!=='home'&&WD.reg!=='office'?'CTRL+ALT+NET':'HOME-WIFI'}</span><span>${S.day?SLOTT[S.slot]:'07:12'}</span><span class="bat"><b style="width:${Math.max(8,96-S.slot*15)}%"></b></span></div><div class="pbody">${body}</div><button class="phome" id="phome" aria-label="Close phone"></button></div><p class="small phtip" id="phtip">${WD.touch?'':'Esc, P or Tab to put it away'}</p>`);
 const o=$('ov');delete o.dataset.app;delete o.dataset.from;o.classList.remove('mapov','appov');o.classList.add('phoneov');updBlur();
 o.onclick=e=>{if(e.target===o)closePhone()};
 $('phome').onclick=closePhone;
 o.querySelectorAll('.app').forEach(b=>b.onclick=()=>openApp(b.dataset.a,true));
}
function openApp(k,fromPhone){phApp=k;if(k==='map'){mapOpen(fromPhone);return}if(k==='postgame'){closeOv();$('ov').classList.remove('phoneov','mapov','appov');postgame('map','phone');return}drawApp(fromPhone===undefined?($('ov').dataset.from==='phone'):fromPhone)}
function drawApp(fromPhone){const k=phApp;
 const html=APPS[k]();
 ov(`<div class="bigapp app-${k}"><div class="mtop"><button class="pback" id="apb" aria-label="Back">${fromPhone?'‹':'✕'}</button><b>${APPN[k]}</b><span class="small">${esc(clockLabel())}</span><button class="pback" id="apx" aria-label="Close">✕</button></div>${html}</div>`);
 const o=$('ov');o.dataset.app=k;o.dataset.from=fromPhone?'phone':'direct';o.classList.add('phoneov','mapov','appov');updBlur();
 $('apb').onclick=phoneBack;$('apx').onclick=closePhone;
 if(APPS_AFTER[k])APPS_AFTER[k]();
}
const redraw=()=>drawApp($('ov').dataset.from==='phone');
const bar=(v,c)=>`<div class="bar"><i style="width:${clamp(v,0,100)}%;background:${c}"></i></div>`;
const tabsH=(cur,list,attr)=>`<div class="atabs">${list.map(t=>`<button class="${cur===t[0]?'on':''}" data-${attr}="${t[0]}">${esc(t[1])}</button>`).join('')}</div>`;
const whereNow=g=>{const c=WCH.find(c=>c.id===g);if(!c||!c.on)return null;const a=areaAt(c.reg,c.x,c.z,c.y);return a&&AREAS[a]?AREAS[a].n:null};
const APPS={
 /* ---- Messages: conversations, and texts you can answer ---- */
 messages(){
  const by={};S.msgs.forEach(m=>{(by[m.f]=by[m.f]||[]).push(m)});
  const ks=Object.keys(by).sort((a,b)=>S.msgs.lastIndexOf(by[b][by[b].length-1])-S.msgs.lastIndexOf(by[a][by[a].length-1]));
  if(!phThread&&ks.length&&innerWidth>760)phThread=ks[0];
  const nm=k=>CH[k]?CH[k].name:k,av=k=>CH[k]?head(lookOf(k),'n'):'';
  const list=ks.map(k=>{const L=by[k],last=L[L.length-1],un=L.filter(m=>!m.r).length,wait=L.some(m=>m.q&&m.ans===undefined);return`<button class="mthr ${phThread===k?'on':''}" data-f="${esc(k)}"><span class="hd">${av(k)}</span><span class="mt"><b>${esc(nm(k))}</b><small>${last.me?'You: ':''}${esc(last.t)}</small></span>${un?`<i class="nb">${un}</i>`:wait?'<i class="nb q">?</i>':''}</button>`}).join('');
  let th='<div class="mempty small">Pick a conversation.</div>';
  if(phThread&&by[phThread]){by[phThread].forEach(m=>m.r=1);hud();
   th=`<div class="mhead"><span class="hd">${av(phThread)}</span><b>${esc(nm(phThread))}</b>${CH[phThread]&&ROM.includes(phThread)?`<small>${met(phThread)?stageOf(phThread)+' · ♥ '+aff(phThread):''}</small>`:''}</div><div class="mlog">`+
    by[phThread].map(m=>`<div class="bub ${m.me?'me':''}">${esc(m.t)}<small>${m.c?'Day '+m.c+' · '+SLOTN[m.s||0]:'Before the con'}</small></div>${m.q&&m.ans===undefined&&TEXTQ[m.q]?`<div class="mreply">${TEXTQ[m.q].replies.map((r,i)=>`<button class="ch" data-q="${S.msgs.indexOf(m)}" data-i="${i}">${esc(sub(r.t))}</button>`).join('')}</div>`:''}`).join('')+'</div>'}
  return`<div class="msgs ${phThread?'open':''}"><div class="mlist">${list||'<p class="small" style="padding:12px">No messages yet.</p>'}</div><div class="mview2">${innerWidth<=760&&phThread?'<button class="btn" id="mback">‹ All conversations</button>':''}${th}</div></div>`},
 /* ---- Calendar: the week, today in detail, what you can do now ---- */
 calendar(){
  const d=PH.day!=null&&PH.day<=7?PH.day:S.day;
  const week=`<div class="cweek">${[0,1,2,3,4,5,6,7].map(i=>`<button class="cday ${i===d?'on':''} ${i<S.day?'past':''} ${i===S.day?'now':''}" data-d="${i}"><b>${i?DAYN[i].slice(0,3):'Before'}</b><small>${i?'Day '+i:'2 weeks out'}</small>${i===7?'<em>Keynote</em>':''}</button>`).join('')}</div>`;
  const rows=SLOTN.map((n,i)=>{let b=(DAYS[d]||[])[i];if(typeof b==='function')b=(d===S.day&&i===S.slot)?b():null;const B=b&&BEATS[b];
   const past=d<S.day||d===S.day&&i<S.slot,cur=d===S.day&&i===S.slot,log=(S.slog&&S.slog[d+':'+i])||[];
   let what='';if(B)what=past||S.done[b]?'✓ '+B.t:(d>S.day?'Story':B.t);
   const free=(DAYS[d]||[])[i]!==undefined;
   const evs=Object.values(EVENTS).filter(e=>e.d===d&&e.s===i&&(!e.when||e.when()));
   return`<div class="cslot ${cur?'on':''} ${past?'past':''}"><div class="ct"><b>${n}</b><small>${SLOTT[i]}</small></div><div class="cc">${what?`<div class="cbeat ${S.done[b]?'done':''}">${esc(what)}</div>`:''}${log.filter(x=>!B||x!==B.t).map(x=>`<div class="clog">${esc(x)}</div>`).join('')}${evs.map(e=>`<div class="cev ${S.evs&&S.evs[e.id]?'done':''}">${S.evs&&S.evs[e.id]?'✓ ':'◆ '}${esc(e.n)}<small>${esc(AREAS[e.w]?AREAS[e.w].n:'')}</small></div>`).join('')}${!past&&free&&!B?'<div class="cfree">Free</div>':''}${!past&&B&&!S.done[b]&&!B.adv&&d===S.day?'<div class="cfree">then free</div>':''}${!free?'<div class="cfree">—</div>':''}</div></div>`}).join('');
  let now='';
  if(d===S.day){const b=curBeat();
   if(b)now=`<div class="cnow"><b>Now: ${esc(beatStep(b).t||b.t)}</b><p class="small">The green light shows where. Free time comes after.</p><button class="btn" id="cpin">Point me there</button></div>`;
   else if(isFree()){const ready=ROM.filter(sceneReady),leads=Object.keys(LEADS).filter(leadOpen);
    now=`<div class="cnow"><b>The ${SLOTN[S.slot].toLowerCase()} is yours.</b><p class="small">One thing per part of the day${S.loop?' (six, in the loop)':''}. Walking, talking shop, gifts, shopping and your phone are free.</p>
    ${ready.length?`<div class="small"><b>Ready for you</b></div><div class="cppl">${ready.map(g=>`<button class="chip" data-who="${g}"><span class="hd">${head(lookOf(g),'n')}</span>${CH[g].name}<small>${esc(whereNow(g)||'')}</small></button>`).join('')}</div>`:''}
    ${eventsNow().length?`<div class="small"><b>On now</b></div><div class="cppl">${eventsNow().map(e=>`<button class="chip" data-ev="${e.id}">${esc(e.n)}<small>${esc(AREAS[e.w]?AREAS[e.w].n:'')}</small></button>`).join('')}</div>`:''}
    ${leads.length?`<div class="small"><b>Open leads</b></div><div class="cppl">${leads.map(k=>`<button class="chip" data-lead="${k}">${esc(LEADS[k].n)}<small>${esc(AREAS[LEADS[k].w]?AREAS[LEADS[k].w].n:'')}</small></button>`).join('')}</div>`:''}
    <div class="row"><button class="btn" id="cwait">${S.slot===5?'Call it a night':'Let the '+SLOTN[S.slot].toLowerCase()+' go by'}</button></div></div>`}}
  return`<div class="abody">${week}<div class="cgrid"><div class="cday2"><h3>${d?'Day '+d+' · '+DAYN[d]:'Two weeks before the con'}${d===7?' · Closing keynote':''}</h3>${rows}</div>${now?`<div class="cside">${now}</div>`:''}</div></div>`},
 /* ---- Hearts: everyone, and a full file on whoever you pick ---- */
 hearts(){
  const sel=PH.heart&&ROM.includes(PH.heart)?PH.heart:null;
  const card=g=>{const m=met(g),i=scn(g),lv=loved(g);return`<button class="hcard ${m?'':'unk'} ${sel===g?'on':''} ${lv?'love':''}" data-g="${g}" style="--hc:${CH[g].col}"><span class="hp">${m?head(lookOf(g),lv?'h':'n'):'<span class="sil">?</span>'}</span><b>${m?CH[g].name:'???'}</b><small>${m?stageOf(g):'Not met'}</small>${m?bar(aff(g),CH[g].col):''}${m&&sceneReady(g)?'<i class="nb">!</i>':''}</button>`};
  const grid=`<div class="hgrid">${ROM.map(card).join('')}</div>`;
  if(!sel)return`<div class="abody"><p class="small">${ROM.filter(met).length}/${ROM.length} met · ${ROM.filter(loved).length} in love · tap someone for their file</p>${grid}</div>`;
  const g=sel,R=ROUTES[g],i=scn(g),m=met(g),why=sceneWhy(g),wn=whereNow(g);
  let file;
  if(!m)file=`<div class="hfile"><h3>???</h3><p>${esc(UNMET[g]?'Someone: '+UNMET[g]+'.':'Someone you haven\'t met.')}</p><p class="small">${esc(R.blurb)}</p>${wn?`<p class="small">Seen around: ${esc(wn)}</p>`:''}</div>`;
  else{const steps=[];for(let k=1;k<R.n;k++){const done=i>k,next=i===k;steps.push(`<div class="hstep ${done?'done':''} ${next?'next':''}"><b>${k===R.n-1?'♥ Last scene':k===4?'Scene 4 · with a friend':'Scene '+k}</b><span>${done?esc((R.sum&&R.sum[k])||'Seen'):next?(why?'Locked: '+esc(why):'Ready now'+(wn?' · '+esc(wn):'')):'???'}</span></div>`)}
   file=`<div class="hfile"><div class="hfhead"><div class="hbig">${por(lookOf(g),loved(g)?'h':'n')}</div><div><h3 style="color:${CH[g].col}">${CH[g].name}</h3><p>${esc(R.blurb)}</p><p class="small">${stageOf(g)} · ♥ ${aff(g)}/100</p>${bar(aff(g),CH[g].col)}
   <div class="aff-marks">${R.aff.slice(1).map((a,k)=>`<i style="left:${a}%" title="Scene ${k+1}"></i>`).join('')}</div>
   <p class="small">${wn?'Right now: '+esc(wn):'Not around right now'}${S.hang[g+':'+S.day]?' · talked shop today':''}</p>
   <div class="chem"><b class="small">How they like to spend time</b><div class="chips">${Object.keys(TONES).map(t=>{const k=S.taste&&S.taste[g]&&S.taste[g][t];return`<span class="tchip ${k===1?'yes':k===-1?'no':k===0?'meh':'unk'}" title="${esc(TONES[t])}">${k===1?'♥ ':k===-1?'✗ ':k===0?'· ':'? '}${esc({quiet:'Quiet',fun:'Fun',bold:'Reckless',work:'The case'}[t])}</span>`}).join('')}</div>${S.thint&&S.thint[g]&&TASTE[g]?`<p class="small">“${esc(TASTE[g][4])}”</p>`:'<p class="small">Talk shop with them to learn more, or just try things.</p>'}</div>
   <p class="small">Today: ${warmToday(g)>=AFFCAP?'they\'ve had all of you they can take today. Tomorrow.':'room to get closer ('+(AFFCAP-warmToday(g))+' left today)'}${S.seenD&&S.seenD[g]?' · last together Day '+S.seenD[g]:''}</p>
   ${dating(g)&&!loved(g)?`<p class="small" style="color:var(--butter)">You're dating. Go a whole day without seeing them and they'll notice.</p>`:''}
   <div class="chem"><b class="small">Gifts</b><div class="chips">${GIFTS.filter(i=>prefKnown(g,i)).sort((a,b)=>prefOf(g,b)-prefOf(g,a)).map(i=>{const v=prefOf(g,i);return`<span class="tchip ${v===2?'yes':v===1?'meh':v<0?'no':'unk'}" title="${PREFW[v]}">${v===2?'♥♥ ':v===1?'♥ ':v<0?'✗ ':'· '}${esc(ITEMS[i].n)}</span>`}).join('')||'<span class="small">Nothing known yet. Give something, get closer, or ask around.</span>'}</div><p class="small">${S.gifted[g]?'Gifts given: '+S.gifted[g]+' · ':''}One gift a day each.</p></div>
   <div class="row">${wn?`<button class="btn" id="hpin">Pin their location</button>`:''}</div></div></div><div class="hsteps">${steps.join('')}</div></div>`}
  return`<div class="abody hsplit"><div class="hleft">${grid}</div><div class="hright"><button class="btn" id="hclose">‹ Everyone</button>${file}</div></div>`},
 /* ---- Case board: a corkboard of mysteries, clues on strings, leads as sticky notes ---- */
 cases(){
  const ms=Object.keys(MYST).filter(m=>mystClues(m).length||Object.keys(LEADS).some(k=>LEADS[k].m===m&&leadOpen(k))||S.solved[m]||(S.loop&&META.solved[m]));
  const tabs=tabsH(PH.ctab,[['board','Board'],['locker','Evidence locker'],['leads','All leads']],'ct');
  if(PH.ctab==='locker'){const by={};S.clues.forEach(c=>{(by[CLUE[c].m[0]]=by[CLUE[c].m[0]]||[]).push(c)});
   return tabs+`<div class="abody"><p class="small">${S.clues.length}/${Object.keys(CLUE).length} clues</p>${Object.keys(MYST).filter(m=>by[m]).map(m=>`<div class="dbh">${esc(MYST[m].n)}</div><div class="cork small-cork">${by[m].map(c=>`<div class="pin"><b>${esc(CLUE[c].s)}</b><span>${esc(CLUE[c].t)}</span></div>`).join('')}</div>`).join('')||'<p class="small">Nothing yet.</p>'}</div>`}
  if(PH.ctab==='leads'){const L=Object.keys(LEADS).filter(leadOpen);const done=Object.keys(S.leads);
   return tabs+`<div class="abody"><div class="cork">${L.map(k=>leadNote(k)).join('')||'<p class="small">No open leads.</p>'}</div>${done.length?`<div class="dbh">Worked</div><div class="small">${done.map(k=>esc(LEADS[k].n)).join(' · ')}</div>`:''}</div>`}
  const sel=PH.case&&MYST[PH.case]?PH.case:ms[0];
  const side=`<div class="clist">${ms.map(m=>`<button class="cmys ${m===sel?'on':''} ${S.solved[m]?'ok':''}" data-m="${m}"><b>${esc(MYST[m].n)}</b><small>${S.solved[m]?'SOLVED':mystClues(m).length+' clue'+(mystClues(m).length===1?'':'s')}${canSolve(m)?' · ready':''}</small></button>`).join('')||'<p class="small">Nothing on the board yet.</p>'}</div>`;
  if(!sel)return tabs+`<div class="abody">${side}</div>`;
  const M=MYST[sel],cl=mystClues(sel),n=cl.length,solvedM=S.solved[sel];
  const pos=cl.map((c,k)=>{const a=-Math.PI/2+(k+.5)/Math.max(1,n)*Math.PI*2,rx=36,ry=33;return[50+Math.cos(a)*rx,50+Math.sin(a)*ry]});
  const strings=cl.map((c,k)=>(PH.pick.includes(c)||solvedM&&M.ev.includes(c))?`<line x1="50" y1="50" x2="${pos[k][0]}" y2="${pos[k][1]}"/>`:'').join('');
  const board=`<div class="corkboard"><svg viewBox="0 0 100 100" preserveAspectRatio="none">${strings}</svg><div class="qcard ${solvedM?'ok':''}"><small>${solvedM?'SOLVED':'THE QUESTION'}</small><b>${esc(M.q)}</b>${solvedM?`<span>${esc(M.opts[M.a])}</span>`:''}</div>
   ${cl.map((c,k)=>`<button class="pin cl ${PH.pick.includes(c)?'on':''}" data-c="${c}" style="left:${pos[k][0]}%;top:${pos[k][1]}%;--r:${((k*37)%9)-4}deg"><b>${esc(CLUE[c].s)}</b><span>${esc(CLUE[c].t)}</span></button>`).join('')}</div>`;
  const leads=Object.keys(LEADS).filter(k=>LEADS[k].m===sel&&leadOpen(k));
  const solve=solvedM?'':n>=3?`<div class="csolve"><b>Your answer</b><div class="ans">${M.opts.map((o,i)=>`<button class="ch ${PH.ans===i?'on':''}" data-a="${i}">${esc(o)}</button>`).join('')}</div><p class="small">Pick an answer, and tap the three clues on the board that prove it (${PH.pick.length}/3).</p><button class="btn pri" id="csolve" ${PH.ans!==null&&PH.ans!==undefined&&PH.ans!==false&&PH.pick.length===3?'':'disabled'}>Solve</button></div>`:'<p class="small">You need at least three clues before you can say anything.</p>';
  return tabs+`<div class="abody csplit">${side}<div class="cmain"><h3>${esc(M.n)}</h3>${board}${solve}${leads.length?`<div class="dbh">Leads</div><div class="cork">${leads.map(leadNote).join('')}</div>`:''}</div></div>`},
 /* ---- Stats: ranks, exposure over the week, what's in your footprint, counters ---- */
 stats(){
  const ladder=k=>{const v=S[k],r=rankOf(v);return`<div class="sbox"><h4>${k==='skill'?'Skill':'Clout'} <span class="term">${RANKS[k][r]}</span></h4><div class="ladder">${RANKS[k].map((n,i)=>`<div class="rung ${i<=r?'got':''} ${i===r?'cur':''}"><b>${i}</b><span>${n}</span><small>${RANKXP[i]} XP</small></div>`).join('')}</div>${bar(RANKXP[r+1]?(v-RANKXP[r])/(RANKXP[r+1]-RANKXP[r])*100:100,k==='skill'?'var(--mint)':'var(--butter)')}<p class="small">${v} XP${RANKXP[r+1]?' · '+(RANKXP[r+1]-v)+' to '+RANKS[k][r+1]:' · top rank'}. ${esc(TUT[k][1])}</p></div>`};
  const pk=S.expPeak||{};
  const chart=`<div class="sbox"><h4>Exposure <span class="term">${S.exp}/100</span></h4>${bar(S.exp,'var(--coral)')}<p class="small">Resets each morning to your Footprint: ${S.foot}. ${S.fails?'Doxxed '+S.fails+' time'+(S.fails>1?'s':'')+'.':'Never doxxed this run.'}</p>
   <div class="echart">${[1,2,3,4,5,6,7].map(d=>`<div class="ecol ${d===S.day?'now':''}"><i style="height:${pk[d]||0}%"></i><small>D${d}</small><em>${pk[d]!==undefined?pk[d]:''}</em></div>`).join('')}</div><p class="small">Highest Exposure each day.</p>
   <h4 style="margin-top:12px">Your footprint</h4>${(S.footLog||[]).filter(x=>x.v).map(x=>`<div class="fl ${x.v<0?'good':''}"><b>${x.v>0?'+':''}${x.v}</b><span>${esc(x.w||'')}</span><small>${x.d?'Day '+x.d+' · '+SLOTN[x.s]:'Before the con'}</small></div>`).join('')||'<p class="small">Nothing yet.</p>'}</div>`;
  const cnt=[['People met',ROM.filter(met).length+'/'+ROM.length],['In love',ROM.filter(loved).length],['Scenes seen',ROM.reduce((a,g)=>a+Math.max(0,scn(g)-1),0)],['Mysteries solved',Object.keys(S.solved).length+'/12'],['Clues',S.clues.length+'/'+Object.keys(CLUE).length],['Leads worked',Object.keys(S.leads).length],['Talks',S.talks||0],['Things done with your time',S.acts||0],['Money','£'+(S.money||0)]];
  return`<div class="abody sgrid">${S.unl.skill?ladder('skill'):''}${S.unl.clout?ladder('clout'):''}${S.unl.exp?chart:''}<div class="sbox"><h4>This run</h4>${cnt.map(c=>`<div class="kv"><span>${c[0]}</span><b>${c[1]}</b></div>`).join('')}</div></div>`},
 /* ---- Story: your week so far ---- */
 story(){const by={};for(const e of S.sum)(by[e.d]=by[e.d]||[]).push(e);const ks=Object.keys(by).map(Number).sort((a,b)=>a-b);
  const d=PH.sday!==null&&by[PH.sday]?PH.sday:ks[ks.length-1];
  return ks.length?`<div class="atabs">${ks.map(k=>`<button class="${k===d?'on':''}" data-sd="${k}">${k===0?'Prologue':'Day '+k}</button>`).join('')}</div><div class="abody sview"><h3>${d===0?'Two weeks before':'Day '+d+' · '+DAYN[d]}</h3>${by[d].map(e=>`<div class="sent">${d?`<small>${SLOTN[e.s]}</small>`:''}<p>${esc(e.t)}</p></div>`).join('')}</div>`:'<div class="abody"><p class="small">Your story so far will be written here.</p></div>'},
 /* ---- Achievements: across every run ---- */
 achieve(){const cat=k=>k.startsWith('end_')?'end':k.includes('clue')||k.includes('solve')||k==='first_lead'?'myst':k.startsWith('skill_')||k.startsWith('clout_')?'rank':'other';
  const all=achVis();if(PH.atab==='end'&&!pgOpen()||PH.atab==='love')PH.atab='all';const ks=all.filter(k=>PH.atab==='all'||cat(k)===PH.atab),got=all.filter(k=>META.ach[k]).length;
  return tabsH(PH.atab,[['all','All'],...(pgOpen()?[['end','Endings']]:[]),['myst','Mysteries'],['rank','Ranks'],['other','Everything else']],'at')+`<div class="abody"><p class="small">${got}/${all.length} unlocked across every run</p>${bar(got/all.length*100,'var(--butter)')}<div class="agrid">${ks.map(k=>{const a=ACH[k],on=!!META.ach[k],hid=a[2]&&!on;return`<div class="atile ${on?'on':''}"><span class="aic">${on?'★':hid?'?':'☆'}</span><b>${hid?'???':esc(a[0])}</b><small>${hid?'Hidden':esc(a[1])}</small>${on?`<em>${new Date(META.ach[k]).toLocaleDateString()}</em>`:''}</div>`}).join('')}</div></div>`},
 /* ---- Echo: the loop. What's left, and the day you can take back ---- */
 echo(){const P=echoPlan(),left=P.people.filter(p=>p[1]!=='Done');
  return`<div class="abody"><p class="small">Loop ${META.loop||1}. Each part of the day holds ${LOOPOC+1} things. People can take three times as much of you each day, and stories can run up to two days early. Routes you've finished before aren't held to their day.</p><div class="row"><button class="btn pri" id="erw" ${S.snap&&S.day>=1?'':'disabled'}>Rewind to this morning</button></div><p class="small" style="margin-top:12px"><b>People · ${ROM.length-left.length}/${ROM.length} in love</b></p>${left.map(p=>`<div class="kv"><span>${esc(p[0])}</span><b class="small">${esc(p[1])}</b></div>`).join('')||'<p class="small">Everyone. You did it.</p>'}<p class="small" style="margin-top:12px"><b>Mysteries · ${allMyst().filter(m=>S.solved[m]).length}/${allMyst().length}</b></p>${P.mys.map(m=>`<div class="kv"><span>${esc(m[0])}</span><b class="small">${esc(m[1])}</b></div>`).join('')||'<p class="small">All of it.</p>'}<p class="small" style="margin-top:12px">${haremReady()?'Ready. Go to the keynote on Sunday.':'When everyone is in love with you and every mystery is solved, Sunday becomes something else.'}</p></div>`},
 bag(){const e=Object.entries(S.inv).filter(([k])=>ITEMS[k]);
  const who=k=>ROM.filter(g=>met(g)&&prefKnown(g,k)&&prefOf(g,k)>0).sort((a,b)=>prefOf(b,k)-prefOf(a,k));
  return`<div class="abody"><p class="small"><b class="term" style="font-size:22px;color:var(--butter)">£${S.money||0}</b> · Shops: Con Store (Expo Hall), Byte Café (Food Court), Halcyon Boutique (hotel lobby), the bar (evenings), Paper & Co (Central Station), Proof (mornings). Work: the info desk, a bar shift with Bea, a morning at Proof.</p><div class="bgrid">${e.length?e.map(([k,v])=>{const it=ITEMS[k],w=it.gear?[]:who(k);return`<div class="bitem"><b>${esc(it.n)}${v>1?' ×'+v:''}</b><small>${esc(it.d)}${it.gear?' (gear)':w.length?' · '+w.map(g=>CH[g].name+(prefOf(g,k)===2?' ♥':'')).join(', '):' · a gift: you haven\'t learned who loves it yet'}</small></div>`}).join(''):'<p class="small">Empty.</p>'}</div></div>`},
 saves(){return '<div class="abody"><div id="spanel"></div></div>'},
 log(){return`<div class="abody">`+(S.log.slice(-150).reverse().map(l=>`<div class="logl">${l[0]?`<b>${esc(l[0])}</b> `:''}${esc(l[1])}</div>`).join('')||'<p class="small">Nothing yet.</p>')+'</div>'},
 settings(){const vol=[['master','Master'],['music','Music'],['amb','Ambience'],['sfx','Effects']];
  return `<div class="abody"><div class="set"><h4>Sound</h4>${vol.map(([k,n])=>`<label class="sl"><span>${n}</span><input type="range" min="0" max="100" step="1" value="${Math.round(SETTINGS.vol[k]*100)}" data-v="${k}" style="--p:${Math.round(SETTINGS.vol[k]*100)}%"><b>${Math.round(SETTINGS.vol[k]*100)}</b></label>`).join('')}
  <h4>Graphics</h4><div class="seg" id="gq">${['low','medium','high'].map(q=>`<button data-q="${q}" class="${(G.q||'high')===q?'on':''}">${q[0].toUpperCase()+q.slice(1)}</button>`).join('')}</div>
  <p class="small">${G.q==='low'?'Simpler lighting, no glow. Best for older phones.':G.q==='medium'?'Full lighting and glow, lower resolution.':'Everything on, with antialiasing. The resolution drops automatically if frames get slow.'}</p>
  <h4>Controls</h4><label class="sl"><span>Look speed</span><input type="range" min="30" max="250" step="5" value="${Math.round(SETTINGS.sens*100)}" id="sens" style="--p:${Math.round((SETTINGS.sens*100-30)/220*100)}%"><b>${SETTINGS.sens.toFixed(2)}×</b></label>
  <div class="row" style="margin-top:6px"><button class="btn" id="stf">Text: ${S.fast?'instant':'typewriter'}</button><button class="btn" id="stdbg">Debug menu (F9)</button></div>
  <div class="row" style="margin-top:6px"><button class="btn" id="stlk">Capture the mouse: ${SETTINGS.nolock?'off (drag to look)':'on'}</button></div><p class="small">With capture off, the browser never shows its "press Esc to show your cursor" notice; you look around by dragging.</p>
  <p class="small" style="margin-top:12px">Keyboard: WASD or arrows to walk, Shift to run, mouse to look, E to interact with whatever you're pointing at, M for map. <b>Esc</b> or <b>P</b> opens this phone; Esc in an app goes back to the phone.<br>Touch: drag the left stick to walk, drag anywhere else to look, tap the prompt to interact.</p></div>
  <p class="small">The game autosaves while you explore. Use the Saves app for save slots and export.</p></div>`},
 quit(){return `<div class="abody"><div class="set"><h4>Quit to title?</h4><p class="small">Your game autosaves right now, where you're standing. You can pick it up again with Continue.</p><div class="row"><button class="btn pri" id="stq">Quit to title</button><button class="btn" id="stqn">Not yet</button></div></div></div>`}
};
function leadNote(k){const L=LEADS[k],ok=!L.need||L.need();return`<div class="sticky r${L.risk}"><b>${esc(L.n)}</b><span>${esc(L.d)}</span><small>${esc(AREAS[L.w]?AREAS[L.w].n:L.w)} · ${['Safe','Some risk','Risky','Very risky'][L.risk]}${ok?'':' · needs '+esc(L.needT)}</small>${AREAS[L.w]?`<button class="btn" data-pinlead="${k}">Pin it</button>`:''}</div>`}
function pinArea(k){const A=AREAS[k];if(!A)return;S.wp={reg:A.reg,x:A.sp[0],z:A.sp[1],y:A.sp[3]||0};toast('Pinned: '+A.n,'var(--butter)')}
const APPS_AFTER={
 messages(){const o=$('ov');o.querySelectorAll('.mthr').forEach(b=>b.onclick=()=>{phThread=b.dataset.f;redraw()});
  if($('mback'))$('mback').onclick=()=>{phThread=null;redraw()};
  o.querySelectorAll('.mreply .ch').forEach(b=>b.onclick=()=>{const m=S.msgs[+b.dataset.q],r=TEXTQ[m.q].replies[+b.dataset.i];m.ans=+b.dataset.i;if(ROM.includes(m.f))seen(m.f);
   S.msgs.push({f:m.f,me:1,t:sub(r.t),c:S.day,s:S.slot,r:1});if(r.fx)fx(r.fx);if(r.a)S.msgs.push({f:m.f,t:sub(r.a),c:S.day,s:S.slot,r:1});save();redraw();
   const lg=o.querySelector('.mlog');if(lg)lg.scrollTop=1e6});
  const lg=o.querySelector('.mlog');if(lg)lg.scrollTop=1e6},
 calendar(){const o=$('ov');o.querySelectorAll('.cday').forEach(b=>b.onclick=()=>{PH.day=+b.dataset.d;redraw()});
  const w=$('cwait');if(w)w.onclick=()=>{closePhone();if(S.slot===5)return run([N('You call it a night.')],()=>endDay());run([N('You let the '+SLOTN[S.slot].toLowerCase()+' go by.')],()=>spend('wait'))};
  if($('cpin'))$('cpin').onclick=()=>{const t=beatTarget(curBeat());if(t){S.wp=null;toast('Follow the green light','var(--mint)')}closePhone()};
  o.querySelectorAll('[data-who]').forEach(b=>b.onclick=()=>{const c=WCH.find(c=>c.id===b.dataset.who&&c.on);if(c){S.wp={reg:c.reg,x:c.x,z:c.z,y:c.y};toast('Pinned: '+CH[c.id].name,'var(--butter)')}closePhone()});
  o.querySelectorAll('[data-lead]').forEach(b=>b.onclick=()=>{pinArea(LEADS[b.dataset.lead].w);closePhone()});
  o.querySelectorAll('[data-ev]').forEach(b=>b.onclick=()=>{pinArea(EVENTS[b.dataset.ev].w);closePhone()})},
 hearts(){const o=$('ov');o.querySelectorAll('.hcard').forEach(b=>b.onclick=()=>{PH.heart=b.dataset.g;redraw()});if($('hclose'))$('hclose').onclick=()=>{PH.heart=null;redraw()};
  if($('hpin'))$('hpin').onclick=()=>{const c=WCH.find(c=>c.id===PH.heart&&c.on);if(c){S.wp={reg:c.reg,x:c.x,z:c.z,y:c.y};toast('Pinned: '+CH[c.id].name,'var(--butter)')}closePhone()}},
 cases(){const o=$('ov');
  o.querySelectorAll('[data-ct]').forEach(b=>b.onclick=()=>{PH.ctab=b.dataset.ct;redraw()});
  o.querySelectorAll('.cmys').forEach(b=>b.onclick=()=>{PH.case=b.dataset.m;PH.pick=[];PH.ans=null;redraw()});
  o.querySelectorAll('.pin.cl').forEach(b=>b.onclick=()=>{const c=b.dataset.c;if(PH.pick.includes(c))PH.pick=PH.pick.filter(x=>x!==c);else if(PH.pick.length<3)PH.pick.push(c);redraw()});
  o.querySelectorAll('.ans .ch').forEach(b=>b.onclick=()=>{PH.ans=+b.dataset.a;redraw()});
  o.querySelectorAll('[data-pinlead]').forEach(b=>b.onclick=()=>{pinArea(LEADS[b.dataset.pinlead].w);closePhone()});
  const sv=$('csolve');if(sv)sv.onclick=()=>{const m=PH.case||o.querySelector('.cmys.on').dataset.m;const ok=solveMyst(m,PH.ans,PH.pick.slice());PH.pick=[];PH.ans=null;
   const from=$('ov').dataset.from;
   ov(`<div class="card"><h3>${ok?'Solved':'That doesn\'t hold up'}</h3><p>${ok?esc(MYST[m].n)+': '+esc(MYST[m].opts[MYST[m].a]):'The clues don\'t prove it, or the answer\'s wrong. You asked around while you were checking, and people noticed.'}</p><div class="row"><button class="btn pri" id="cok">OK</button></div></div>`);$('ov').classList.remove('phoneov','mapov','appov');
   $('cok').onclick=()=>{closeOv();if(ok&&SC['solved_'+m]!==undefined){closePhone();run(scr('solved_'+m),hub)}else{phApp='cases';drawApp(from==='phone')}}}},
 story(){$('ov').querySelectorAll('[data-sd]').forEach(b=>b.onclick=()=>{PH.sday=+b.dataset.sd;redraw()})},
 echo(){const b=$('erw');if(b)b.onclick=()=>{if(!b.dataset.c){b.dataset.c=1;b.textContent='Tap again: lose everything since this morning';return}rewindDay()}},
 achieve(){$('ov').querySelectorAll('[data-at]').forEach(b=>b.onclick=()=>{PH.atab=b.dataset.at;redraw()})},
 saves(){savesPanel($('spanel'),'phone',redraw)},
 settings(){$('stf').onclick=()=>{S.fast=!S.fast;redraw()};$('stlk').onclick=()=>{SETTINGS.nolock=!SETTINGS.nolock;saveSettings();WD.noLock=!!SETTINGS.nolock;if(WD.noLock&&document.pointerLockElement){WD.selfUnlock=true;try{document.exitPointerLock()}catch(e){}}redraw()};$('stdbg').onclick=()=>{closeOv();dbgOpen()};
  $('ov').querySelectorAll('input[data-v]').forEach(r=>{r.oninput=()=>{const k=r.dataset.v;SETTINGS.vol[k]=r.value/100;r.style.setProperty('--p',r.value+'%');r.nextElementSibling.textContent=r.value;if(typeof applyVolumes==='function')applyVolumes()};r.onchange=()=>{saveSettings();if(r.dataset.v==='sfx'||r.dataset.v==='master')sfx('notify')}});
  const sn=$('sens');sn.oninput=()=>{SETTINGS.sens=sn.value/100;sn.style.setProperty('--p',((sn.value-30)/220*100)+'%');sn.nextElementSibling.textContent=SETTINGS.sens.toFixed(2)+'×'};sn.onchange=saveSettings;
  $('gq').querySelectorAll('button').forEach(b=>b.onclick=()=>{SETTINGS.gfx=b.dataset.q;saveSettings();if(G.ok)setQuality(b.dataset.q);else G.q=b.dataset.q;redraw()})},
 quit(){$('stq').onclick=()=>{S.pos=[WD.reg,WD.x,WD.z,WD.yaw,WD.y];save();closeOv();$('ov').classList.remove('phoneov','mapov','appov');WD.active=false;if(document.pointerLockElement){WD.selfUnlock=true;try{document.exitPointerLock()}catch(e){}}titleScreen()};$('stqn').onclick=phoneBack}
};
