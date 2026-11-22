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
 quit:['#ff5d73','<path d="M16 6v9" stroke="#1b1026" stroke-width="3" stroke-linecap="round"/><path d="M10.5 9.5a8.5 8.5 0 1 0 11 0" fill="none" stroke="#1b1026" stroke-width="2.8" stroke-linecap="round"/>'],
 calendar:['#ffd166','<rect x="6" y="8" width="20" height="18" rx="2" fill="none" stroke="#1b1026" stroke-width="2.4"/><path d="M6 13h20M11 5v6M21 5v6" stroke="#1b1026" stroke-width="2.4" stroke-linecap="round"/><rect x="10" y="17" width="4" height="4" fill="#1b1026"/>'],
 cases:['#c9b6ff','<rect x="5" y="7" width="22" height="18" rx="2" fill="none" stroke="#1b1026" stroke-width="2.4"/><circle cx="11" cy="13" r="2" fill="#1b1026"/><circle cx="21" cy="12" r="2" fill="#1b1026"/><circle cx="16" cy="20" r="2" fill="#1b1026"/><path d="M11 13L21 12L16 20Z" fill="none" stroke="#1b1026" stroke-width="1.6"/>'],
 story:['#8affc1','<path d="M7 6h12l6 6v14H7z" fill="none" stroke="#1b1026" stroke-width="2.4" stroke-linejoin="round"/><path d="M11 14h10M11 18h10M11 22h6" stroke="#1b1026" stroke-width="2"/>'],
 achieve:['#ffb347','<path d="M10 6h12v6a6 6 0 0 1-12 0z" fill="#1b1026"/><path d="M10 8H6a4 4 0 0 0 4 5M22 8h4a4 4 0 0 1-4 5" fill="none" stroke="#1b1026" stroke-width="2"/><path d="M16 18v4M11 26h10" stroke="#1b1026" stroke-width="2.6" stroke-linecap="round"/>'],
 settings:['#d9d4cc','<circle cx="16" cy="16" r="4.5" fill="none" stroke="#1b1026" stroke-width="2.6"/><path d="M16 5v4M16 23v4M5 16h4M23 16h4M8.2 8.2l2.8 2.8M21 21l2.8 2.8M8.2 23.8l2.8-2.8M21 11l2.8-2.8" stroke="#1b1026" stroke-width="2.6" stroke-linecap="round"/>']
};
const APPN={messages:'Messages',calendar:'Calendar',map:'Map',hearts:'Hearts',cases:'Case board',stats:'Stats',story:'Story',achieve:'Achievements',bag:'Bag',saves:'Saves',log:'Log',settings:'Settings',quit:'Quit'};
const APPU={messages:'phone',calendar:'notes',map:'map',hearts:'aff',cases:'clues',stats:'skill',story:'notes',achieve:'notes',bag:'cred'};
let phApp=null,phThread=null,phReg=null,phCase=null,phPick=[],phAns=null;
function phone(app){
 if(!S)return;
 // never open over a minigame, tutorial or chapter card: they own the overlay until they finish
 const o=$('ov');if((o.classList.contains('on')&&!o.classList.contains('phoneov'))||$('card').classList.contains('on'))return;
 const opening=!o.classList.contains('phoneov');
 if(document.pointerLockElement){WD.selfUnlock=true;try{document.exitPointerLock()}catch(e){}}
 WD.active=false;
 phApp=app||null;phThread=null;phReg=null;drawPhone();
 if(opening){const ph=$('ov').querySelector('.phone');if(ph)ph.classList.add('opening');if(typeof sfx==='function')sfx('phoneOpen')}
}
function closePhone(){if($('ov').classList.contains('phoneov')&&typeof sfx==='function')sfx('phoneClose');closeOv();$('ov').classList.remove('phoneov','mapov');if(G.ok&&S&&S.inWorld)relock();if($('vn').classList.contains('on'))return;if(G.ok&&S.inWorld)hub();else if($('hub').classList.contains('on'))hub()}
function drawPhone(){
 const apps=Object.keys(APPN).filter(a=>!APPU[a]||S.unl[APPU[a]]);
 const unread=S.msgs.filter(m=>!m.r).length,nn=S.day>0?ROM.filter(sceneReady).length:0,nc=S.day>0?Object.keys(MYST).filter(m=>S.unl.clues&&canSolve(m)).length:0;
 let body='',title='';
 if(!phApp){
  body=`<div class="home"><div class="clock">${S.day?SLOTT[S.slot]:'21:47'}</div><div class="date">${esc(clockLabel())}</div><div class="grid">${apps.map(a=>`<button class="app" data-a="${a}"><span class="ic" style="background:${ICON[a][0]}"><svg viewBox="0 0 32 32">${ICON[a][1]}</svg>${a==='messages'&&unread?`<i>${unread}</i>`:''}${a==='hearts'&&nn?`<i>${nn}</i>`:''}${a==='cases'&&nc?`<i>${nc}</i>`:''}</span><span class="nm">${APPN[a]}</span></button>`).join('')}</div></div>`;
 }else{
  title=APPN[phApp];
  body=APPS[phApp]();
 }
 ov(`<div class="phone"><div class="pbar"><span>${S.day>0&&WD.reg!=='home'&&WD.reg!=='office'?'CTRL+ALT+NET':'HOME-WIFI'}</span><span>${S.day?SLOTT[S.slot]:'21:47'}</span><span class="bat"><b style="width:${Math.max(8,96-S.slot*15)}%"></b></span></div>${phApp?`<div class="ptop"><button class="pback" id="pback" aria-label="Back">‹</button><b>${phThread?esc(CH[phThread]?CH[phThread].name:phThread):phCase?esc(MYST[phCase].n):title}</b></div>`:''}<div class="pbody">${body}</div><button class="phome" id="phome" aria-label="Close phone"></button></div>`);
 $('ov').classList.remove('mapov');$('ov').classList.add('phoneov');updBlur();
 $('ov').onclick=e=>{if(e.target===$('ov'))closePhone()};
 $('phome').onclick=closePhone;
 if($('pback'))$('pback').onclick=()=>{if(phThread){phThread=null}else if(phCase){phCase=null}else phApp=null;drawPhone()};
 $('ov').querySelectorAll('.app').forEach(b=>b.onclick=()=>{if(b.dataset.a==='map'){mapOpen();return}phApp=b.dataset.a;drawPhone()});
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
 calendar(){
  if(S.day===0)return'<p class="small">Two weeks to go. The con is circled on every calendar you own.</p>';
  const D=DAYS[S.day]||[];let h=`<div class="goal"><small>${esc(clockLabel())}</small><b>${esc(objective()?objective().t:'')}</b></div>`;
  h+=`<div class="cal">${SLOTN.map((n,i)=>{let b=D[i];if(typeof b==='function')b=i===S.slot?b():null;const B=b&&BEATS[b];const past=i<S.slot,cur=i===S.slot;const st=D[i]===undefined?'—':B?(S.done[b]?'✓ '+B.t:(past?'':(cur?'▶ ':'')+B.t)):(past?'✓ Free time':cur?'▶ Free: yours to spend':'Free');
   return`<div class="cs ${cur?'on':''} ${past?'past':''}"><b>${n}</b><span>${esc(st)}</span></div>`}).join('')}</div>`;
  if(isFree()){h+=`<b>Spend the ${SLOTN[S.slot].toLowerCase()}</b><p class="small">Walk up to someone and choose Spend time, work a lead from the Case board, catch a talk in Hall A, Hall C or Hall B, practise in the CTF Arena or hunt bugs on your laptop in Room 1337.${S.restore?' Overclocked: two things per part of the day.':''}</p>`;
   const ready=ROM.filter(sceneReady);if(ready.length)h+=`<p class="small">Ready for you: ${ready.map(g=>esc(CH[g].name)).join(', ')}.</p>`;
   h+=`<div class="row"><button class="btn" id="cwait">${S.slot===5?'Call it a night':'Let the '+SLOTN[S.slot].toLowerCase()+' go by'}</button></div>`}
  return h},
 hearts(){
  const met_=ROM.filter(met);
  return met_.length?`<p class="small">${met_.length}/${ROM.length} met · ${ROM.filter(loved).length} in love</p>`+met_.map(g=>{const R=ROUTES[g],i=scn(g),why=sceneWhy(g),st=loved(g)?'In love':STAGEN[Math.max(0,Math.min(4,i-1))];
   return`<div class="girl"><div class="hd">${head(lookOf(g),loved(g)?'h':'n')}</div><div class="i"><b>${CH[g].name}</b> <span class="dots">${'■'.repeat(Math.max(0,i-1))}${'□'.repeat(Math.max(0,R.n-1-Math.max(0,i-1)))}</span>${bar(aff(g),CH[g].col)}<span class="small">${st} · ♥ ${aff(g)} · ${esc(R.blurb)}<br>${loved(g)?'Their story is complete.':why?'Next: '+esc(why):'Next scene ready: find them'}${S.gifted[g]?' · gift given':''}</span></div></div>`}).join(''):'<p class="small">You haven\'t met anyone yet.</p>'},
 cases(){
  if(phCase){const M=MYST[phCase],cl=mystClues(phCase);
   if(S.solved[phCase])return`<div class="goal"><small>SOLVED</small><b>${esc(M.n)}</b></div><p>${esc(M.q)}</p><p style="color:var(--mint)">${esc(M.opts[M.a])}</p>${cl.map(c=>`<div class="clue"><small>${esc(CLUE[c].s)}</small>${esc(CLUE[c].t)}</div>`).join('')}`;
   const leads=Object.keys(LEADS).filter(k=>LEADS[k].m===phCase&&leadOpen(k));
   return`<div class="goal"><small>MYSTERY</small><b>${esc(M.n)}</b></div><p>${esc(M.q)}</p>
   <b>Clues (${cl.length})</b>${cl.length?cl.map(c=>`<button class="clue pick ${phPick.includes(c)?'on':''}" data-c="${c}"><small>${esc(CLUE[c].s)}</small>${esc(CLUE[c].t)}</button>`).join(''):'<p class="small">Nothing yet.</p>'}
   ${cl.length>=3?`<b>Your answer</b><div class="ans">${M.opts.map((o,i)=>`<button class="ch ${phAns===i?'on':''}" data-a="${i}">${esc(o)}</button>`).join('')}</div><p class="small">Pick an answer and the three clues that prove it.</p><div class="row"><button class="btn pri" id="csolve" ${phAns!==null&&phPick.length===3?'':'disabled'}>Solve</button></div>`:'<p class="small">You need at least three clues before you can say anything.</p>'}
   <b style="display:block;margin-top:12px">Leads</b>${leads.length?leads.map(k=>{const L=LEADS[k];return`<div class="lead"><b>${esc(L.n)}</b><small>${esc(L.d)}<br>Where: ${esc(AREAS[L.w]?AREAS[L.w].n:L.w)} · ${['Safe','Some risk','Risky','Very risky'][L.risk]}${L.need&&!L.need()?' · needs '+esc(L.needT):''} · takes part of a day</small></div>`}).join(''):'<p class="small">No open leads right now. People, and the story, will turn up more.</p>'}`}
  const ms=Object.keys(MYST).filter(m=>mystClues(m).length||Object.keys(LEADS).some(k=>LEADS[k].m===m&&leadOpen(k))||S.solved[m]||(S.restore&&META.solved[m]));
  return ms.length?`<p class="small">${Object.keys(S.solved).length}/${Object.keys(MYST).length} solved · ${S.clues.length} clues. Tap a case.</p>`+ms.map(m=>{const n=mystClues(m).length,lo=Object.keys(LEADS).filter(k=>LEADS[k].m===m&&leadOpen(k)).length;
   return`<button class="case ${S.solved[m]?'ok':''}" data-m="${m}"><b>${esc(MYST[m].n)}</b><small>${S.solved[m]?'Solved':esc(MYST[m].q)}<br>${n} clue${n===1?'':'s'}${lo?' · '+lo+' lead'+(lo>1?'s':''):''}${canSolve(m)?' · ready to solve':''}</small></button>`}).join(''):'<p class="small">Nothing on the board yet.</p>'},
 stats(){const rk=k=>{const v=S[k],r=rankOf(v),b=RANKXP[r+1];return`<div style="margin:8px 0 12px"><b>${k==='skill'?'Skill':'Clout'}</b> <span class="term" style="font-size:22px">${RANKS[k][r]}</span> <span class="small">rank ${r} · ${v} XP${b?' · '+(b-v)+' to '+RANKS[k][r+1]:''}</span>${bar(b?(v-RANKXP[r])/(b-RANKXP[r])*100:100,k==='skill'?'var(--mint)':'var(--butter)')}<span class="small">${TUT[k][1]}</span></div>`};
  return(S.unl.skill?rk('skill'):'')+(S.unl.clout?rk('clout'):'')+(S.unl.exp?`<div style="margin:8px 0 12px"><b>Exposure</b> <span class="term" style="font-size:22px">${S.exp}/100</span>${bar(S.exp,'var(--coral)')}<span class="small">Footprint ${S.foot}: where Exposure starts each morning. ${S.fails?'Doxxed '+S.fails+' time'+(S.fails>1?'s':'')+' this run.':''}</span></div>`:'')+(S.unl.cred?`<p><b>Credits</b> <span class="term" style="font-size:22px;color:var(--butter)">${S.cred}</span></p>`:'')},
 story(){const by={};for(const e of S.sum)(by[e.d]=by[e.d]||[]).push(e);const ks=Object.keys(by).map(Number).sort((a,b)=>a-b);
  return ks.length?ks.map(d=>`<div class="sumd"><b>${d===0?'Prologue':'Day '+d+' · '+DAYN[d]}</b>${by[d].map(e=>`<p>${d?`<small>${SLOTN[e.s]}</small> `:''}${esc(e.t)}</p>`).join('')}</div>`).join(''):'<p class="small">Your story so far will be written here.</p>'},
 achieve(){const ks=Object.keys(ACH),got=ks.filter(k=>META.ach[k]);
  return`<p class="small">${got.length}/${ks.length} unlocked, across every run.</p>`+ks.map(k=>{const a=ACH[k],on=!!META.ach[k],hid=a[2]&&!on;return`<div class="achv ${on?'on':''}"><b>${hid?'???':esc(a[0])}</b><small>${hid?'Hidden':esc(a[1])}</small></div>`}).join('')},
 bag(){const e=Object.entries(S.inv);return (e.length?e.map(([k,v])=>{const it=ITEMS[k];return`<div class="item"><div><b>${it.n}${v>1?' ×'+v:''}</b><small>${it.d}${it.g?` Give it to ${CH[it.g].name}.`:''}</small></div></div>`}).join(''):'<p class="small">Empty. The Con Store in the Expo Hall sells gear and gifts.</p>')},
 saves(){return '<div id="spanel"></div>'},
 log(){return S.log.slice(-80).reverse().map(l=>`<div class="logl">${l[0]?`<b>${esc(l[0])}</b> `:''}${esc(l[1])}</div>`).join('')||'<p class="small">Nothing yet.</p>'},
 settings(){const vol=[['master','Master'],['music','Music'],['amb','Ambience'],['sfx','Effects']];
  return `<div class="set"><h4>Sound</h4>${vol.map(([k,n])=>`<label class="sl"><span>${n}</span><input type="range" min="0" max="100" step="1" value="${Math.round(SETTINGS.vol[k]*100)}" data-v="${k}" style="--p:${Math.round(SETTINGS.vol[k]*100)}%"><b>${Math.round(SETTINGS.vol[k]*100)}</b></label>`).join('')}
  <h4>Graphics</h4><div class="seg" id="gq">${['low','medium','high'].map(q=>`<button data-q="${q}" class="${(G.q||'high')===q?'on':''}">${q[0].toUpperCase()+q.slice(1)}</button>`).join('')}</div>
  <p class="small">${G.q==='low'?'Simpler lighting, no glow. Best for older phones.':G.q==='medium'?'Full lighting and glow, lower resolution.':'Everything on, with antialiasing. The resolution drops automatically if frames get slow.'}</p>
  <h4>Controls</h4><label class="sl"><span>Look speed</span><input type="range" min="30" max="250" step="5" value="${Math.round(SETTINGS.sens*100)}" id="sens" style="--p:${Math.round((SETTINGS.sens*100-30)/220*100)}%"><b>${SETTINGS.sens.toFixed(2)}×</b></label>
  <div class="row" style="margin-top:6px"><button class="btn" id="stf">Text: ${S.fast?'instant':'typewriter'}</button></div>
  <p class="small" style="margin-top:12px">Keyboard: WASD or arrows to walk, Shift to run, mouse to look, E to interact, M for map. <b>Esc</b> or <b>P</b> opens this phone and frees the mouse; close it to step back in.<br>Touch: drag the left stick to walk, drag anywhere else to look, tap the prompt to interact. Push the stick all the way to run.</p></div>
  <p class="small">The game autosaves while you explore. Use the Saves app for save slots and export.</p>`},
 quit(){return `<div class="set"><h4>Quit to title?</h4><p class="small">Your game autosaves right now, where you're standing. You can pick it up again with Continue.</p><div class="row"><button class="btn pri" id="stq">Quit to title</button><button class="btn" id="stqn">Not yet</button></div></div>`}
};
const APPS_AFTER={
 calendar(){const w=$('cwait');if(w)w.onclick=()=>{closePhone();if(S.slot===5)return run([N('You call it a night.')],()=>endDay());run([N('You let the '+SLOTN[S.slot].toLowerCase()+' go by.')],()=>spend('wait'))}},
 cases(){$('ov').querySelectorAll('.case').forEach(b=>b.onclick=()=>{phCase=b.dataset.m;phPick=[];phAns=null;drawPhone()});
  $('ov').querySelectorAll('.clue.pick').forEach(b=>b.onclick=()=>{const c=b.dataset.c;if(phPick.includes(c))phPick=phPick.filter(x=>x!==c);else if(phPick.length<3)phPick.push(c);drawPhone()});
  $('ov').querySelectorAll('.ans .ch').forEach(b=>b.onclick=()=>{phAns=+b.dataset.a;drawPhone()});
  const sv=$('csolve');if(sv)sv.onclick=()=>{const m=phCase;const ok=solveMyst(m,phAns,phPick.slice());phPick=[];phAns=null;
   ov(`<div class="card"><h3>${ok?'Solved':'That doesn\'t hold up'}</h3><p>${ok?esc(MYST[m].n)+': '+esc(MYST[m].opts[MYST[m].a]):'The clues don\'t prove it, or the answer\'s wrong. You asked around while you were checking, and people noticed.'}</p><div class="row"><button class="btn pri" id="cok">OK</button></div></div>`);$('ov').classList.remove('phoneov');
   $('cok').onclick=()=>{closeOv();if(ok&&SC['solved_'+m]!==undefined){closePhone();run(scr('solved_'+m),hub)}else{phApp='cases';drawPhone()}}}},
 saves(){savesPanel($('spanel'),'phone',drawPhone)},
 messages(){$('ov').querySelectorAll('.chat').forEach(b=>b.onclick=()=>{phThread=b.dataset.f;drawPhone()})},
 settings(){$('stf').onclick=()=>{S.fast=!S.fast;drawPhone()};
  $('ov').querySelectorAll('input[data-v]').forEach(r=>{r.oninput=()=>{const k=r.dataset.v;SETTINGS.vol[k]=r.value/100;r.style.setProperty('--p',r.value+'%');r.nextElementSibling.textContent=r.value;if(typeof applyVolumes==='function')applyVolumes()};r.onchange=()=>{saveSettings();if(r.dataset.v==='sfx'||r.dataset.v==='master')sfx('notify')}});
  const sn=$('sens');sn.oninput=()=>{SETTINGS.sens=sn.value/100;sn.style.setProperty('--p',((sn.value-30)/220*100)+'%');sn.nextElementSibling.textContent=SETTINGS.sens.toFixed(2)+'×'};sn.onchange=saveSettings;
  $('gq').querySelectorAll('button').forEach(b=>b.onclick=()=>{SETTINGS.gfx=b.dataset.q;saveSettings();if(G.ok)setQuality(b.dataset.q);else G.q=b.dataset.q;drawPhone()})},
 quit(){$('stq').onclick=()=>{S.pos=[WD.reg,WD.x,WD.z,WD.yaw,WD.y];save();closeOv();$('ov').classList.remove('phoneov');WD.active=false;if(document.pointerLockElement){WD.selfUnlock=true;try{document.exitPointerLock()}catch(e){}}titleScreen()};$('stqn').onclick=()=>{phApp=null;drawPhone()}}
};
