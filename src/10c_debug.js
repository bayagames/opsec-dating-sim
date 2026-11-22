/* ============ DEBUG MENU (F9, or ` ) : jump to any point of the story, teleport, give yourself things ============
   "Jump" starts a fresh game and fast-plays it (careful choices, minigames skipped, instant text) until the chosen beat,
   so everything before it really happened: flags, clues, people met. */
const AUTOBAD=/sell|deal\.|walk away|bluff|stay\. let|military|seven proxies|nothing to hide|i'm a hacker|legal name|post a selfie|join "ctrlaltcon"|sure, free points|tell them your hometown/i;
async function autoplay(until,o){o=o||{};const keepGames={};for(const k in GAMES){keepGames[k]=GAMES[k];GAMES[k]=(st,done)=>{try{if(st.res)st.res(4,5)}catch(e){}
  if(k==='plan'){S.assign={};const al=ROM.concat(['dave']).filter(allyReady);for(const t of TASKS){const g=[t.best,...t.good].find(x=>al.includes(x)&&!Object.values(S.assign).includes(x))||al.find(x=>!Object.values(S.assign).includes(x));if(g)S.assign[t.k]=g}S.pscore=TASKS.reduce((s,t)=>s+taskScore(t,S.assign[t.k]),0)}
  if(k==='quiz'&&st.who)fx({[st.who]:6,skill:2});done()}}
 const wasTest=window.__test;window.__test=1;let n=0;
 try{for(;n<200000;n++){if(n%300===0)await new Promise(r=>setTimeout(r,0));
  if(!S||S.ending)break;if(until())break;
  const ov=$('ov'),card=$('card');
  if(card.classList.contains('on')){card.click();continue}
  if(ov.classList.contains('on')){const bt=ov.querySelector('#tutok,#qd,#gd,#sd,#xd,#pgo,#cok,.btn.pri');if(bt){bt.click();continue}closeOv();continue}
  if($('vn').classList.contains('on')){const ch=[...$('chs').querySelectorAll('.ch')];if(ch.length){const ok=ch.filter(b=>!AUTOBAD.test(b.textContent));(ok[0]||ch[0]).click();continue}tapBox();continue}
  const bt=curBeat();if(bt){startBeat(bt);continue}
  if(isFree()){if(o.hang){const g=ROM.find(sceneReady);if(g){const i=scn(g);run([...scr(g+i),()=>{adv(g,i);spend('hang');return[]}],hub);continue}}
   if(S.slot===5)endDay();else spend('wait');continue}
  if(S.slot===5)endDay();else spend('wait')}}
 finally{for(const k in keepGames)GAMES[k]=keepGames[k];window.__test=wasTest}
 return n}
function dbgOpen(){if(!S)return;if(document.pointerLockElement){WD.selfUnlock=true;try{document.exitPointerLock()}catch(e){}}WD.active=false;dbgDraw()}
const DBG={tab:'jump'};
function beatList(){const L=[];for(let d=1;d<=7;d++)(DAYS[d]||[]).forEach((b,i)=>{if(typeof b==='string')L.push({d,i,id:b,t:BEATS[b].t})});return L}
function dbgDraw(){
 const tabs=[['jump','Jump to'],['tp','Teleport'],['give','Give & set'],['scene','Play a scene'],['end','Endings']];
 let body='';
 if(DBG.tab==='jump')body=`<p class="small">Starts a fresh game as "${esc(S.h)}" and fast-plays to the start of the chosen beat. Careful choices, minigames skipped. Takes a few seconds.</p>
  <label class="small"><input type="checkbox" id="dbgHang" ${DBG.hang?'checked':''}> Spend free time on people's scenes on the way (otherwise free time is skipped)</label>
  <div class="dbl">${beatList().map(b=>`<button class="dbi" data-b="${b.id}"><b>Day ${b.d} · ${SLOTN[b.i]}</b><small>${esc(b.t)}</small></button>`).join('')}<button class="dbi" data-b="__end"><b>Day 7 · the end</b><small>Play everything through to an ending</small></button></div>`;
 if(DBG.tab==='tp'){const net=MAPNET[WD.reg]?Object.values(AREAS):[];const g={};for(const a of Object.values(AREAS)){if(a.hide)continue;(g[areaGroup(a)]=g[areaGroup(a)]||[]).push(a)}
  body=`<label class="small"><input type="checkbox" id="dbgOpenAll" ${window.__allOpen?'checked':''}> Ignore area locks</label>`+AGROUPS.filter(k=>g[k]).map(k=>`<div class="dbh">${esc(k)}</div><div class="dbg2">${g[k].map(a=>`<button class="dbi" data-tp="${a.k}"><b>${esc(a.n)}</b><small>${esc(levelName(a.reg,a.sp[3]||0))}${areaLock(a.k)?' · locked now':''}</small></button>`).join('')}</div>`).join('')}
 if(DBG.tab==='give')body=`<div class="dbg2">${[['meet','Meet all 21'],['aff20','+20 affection, everyone met'],['aff100','Max affection, everyone met'],['clues','Every clue'],['solve','Solve every mystery'],['skill','Skill +100'],['clout','Clout +100'],['exp0','Exposure to 0'],['exp95','Exposure to 95'],['cred','+200 credits'],['items','Every item'],['visit','Visit every area'],['slot','Next part of the day'],['day','End the day'],['restore','Restore session (harem mode)']].map(x=>`<button class="dbi" data-g="${x[0]}"><b>${x[1]}</b></button>`).join('')}</div>
  <div class="dbh">Advance someone's story by one scene (plays it)</div><div class="dbg2">${ROM.map(g=>`<button class="dbi" data-adv="${g}"><b>${CH[g].name}</b><small>${scn(g)}/${ROUTES[g].n} · ♥ ${aff(g)}</small></button>`).join('')}</div>`;
 if(DBG.tab==='scene'){const ks=Object.keys(SC).sort();body=`<input class="inp" id="dbgQ" placeholder="Filter scenes" value="${esc(DBG.q||'')}"><div class="dbg2">${ks.filter(k=>!DBG.q||k.includes(DBG.q)).slice(0,300).map(k=>`<button class="dbi" data-sc="${k}"><b>${k}</b></button>`).join('')}</div>`}
 if(DBG.tab==='end')body=`<p class="small">Plays the ending's epilogue and shows its card. Ends this run.</p><div class="dbg2">${ENDORDER.map(k=>`<button class="dbi" data-end="${k}"><b>${esc(ENDINFO[k][0])}</b><small>${META.ends[k]?'seen':''}</small></button>`).join('')}</div>`;
 ov(`<div class="bigapp"><div class="mtop"><b>Debug</b><span class="small">${esc(clockLabel())} · Exposure ${S.exp} · ${RANKS.skill[rank('skill')]} / ${RANKS.clout[rank('clout')]}</span><button class="pback" id="dbx">✕</button></div>
  <div class="atabs">${tabs.map(t=>`<button class="${DBG.tab===t[0]?'on':''}" data-t="${t[0]}">${t[1]}</button>`).join('')}</div><div class="abody">${body}</div></div>`);
 const o=$('ov');o.classList.add('phoneov','mapov');updBlur();
 $('dbx').onclick=closePhone;o.querySelectorAll('.atabs button').forEach(b=>b.onclick=()=>{DBG.tab=b.dataset.t;dbgDraw()});
 if($('dbgHang'))$('dbgHang').onchange=e=>{DBG.hang=e.target.checked};
 if($('dbgOpenAll'))$('dbgOpenAll').onchange=e=>{window.__allOpen=e.target.checked};
 if($('dbgQ'))$('dbgQ').oninput=e=>{DBG.q=e.target.value;const p=e.target.selectionStart;dbgDraw();$('dbgQ').focus();$('dbgQ').setSelectionRange(p,p)};
 o.querySelectorAll('[data-b]').forEach(b=>b.onclick=()=>dbgJump(b.dataset.b));
 o.querySelectorAll('[data-tp]').forEach(b=>b.onclick=()=>{const k=b.dataset.tp;closePhone();fadeTp(()=>{teleportArea(k);S.visited[k]=1;hub()})});
 o.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>{dbgGive(b.dataset.g);dbgDraw()});
 o.querySelectorAll('[data-adv]').forEach(b=>b.onclick=()=>{const g=b.dataset.adv;closePhone();if(!met(g)){meet(g);adv(g,0);return run(scr(g+'0'),hub)}const i=scn(g);if(i>=ROUTES[g].n)return;run([...scr(g+i),()=>{adv(g,i);return[]}],hub)});
 o.querySelectorAll('[data-sc]').forEach(b=>b.onclick=()=>{closePhone();run(scr(b.dataset.sc),hub)});
 o.querySelectorAll('[data-end]').forEach(b=>b.onclick=()=>{closePhone();S.partner=ROM.find(loved)||null;run(scr('end_'+b.dataset.end),()=>{})});
}
function dbgGive(k){
 if(k==='meet')ROM.forEach(g=>{if(!met(g)){meet(g);adv(g,0)}});
 if(k==='aff20')ROM.filter(met).forEach(g=>{S.aff[g]=clamp(S.aff[g]+20,0,100)});
 if(k==='aff100')ROM.filter(met).forEach(g=>{S.aff[g]=100});
 if(k==='clues')Object.keys(CLUE).forEach(addClue);
 if(k==='solve')for(const m in MYST){S.solved[m]=1;META.solved[m]=1}
 if(k==='skill')fx({skill:100});if(k==='clout')fx({clout:100});
 if(k==='exp0')S.exp=0;if(k==='exp95')S.exp=95;if(k==='cred')fx({cred:200});
 if(k==='items')Object.keys(ITEMS).forEach(i=>{S.inv[i]=(S.inv[i]||0)+1});
 if(k==='visit')Object.keys(AREAS).forEach(a=>S.visited[a]=1);
 if(k==='slot'){closePhone();if(S.slot===5)endDay();else nextSlot();return}
 if(k==='day'){closePhone();endDay();return}
 if(k==='restore')S.restore=true;
 hud();save();toast('Done','var(--mint)')}
async function dbgJump(id){
 const h=S.h,hang=DBG.hang;closePhone();
 ov(`<div class="card"><h3>Fast-playing…</h3><p class="small">To ${id==='__end'?'an ending':esc(BEATS[id].t)}.</p></div>`);
 S=fresh(h);S.unl={};beatBusy=false;
 if(G.ok&&S.inWorld!==1){S.inWorld=1}
 run(scr('prologue'),()=>{S.day=1;S.ch=1;S.slot=0;S.exp=S.foot;snapDay();hub()});
 await autoplay(()=>id!=='__end'&&curBeat()&&curBeat().id===id&&!beatBusy&&!$('vn').classList.contains('on'),{hang});
 closeOv();if(S.ending)return;
 // land where the beat is waiting
 const b=curBeat(),tg=b&&beatTarget(b);if(G.ok&&tg){const A=b.w&&AREAS[b.w];if(A)teleportArea(b.w);else teleport(tg.reg,tg.x,tg.z+2,0,tg.y)}
 save();hub();toast('Jumped: '+(b?b.t:'done'),'var(--mint)')}
addEventListener('keydown',e=>{if((e.key==='F9'||e.key==='`')&&S&&!$('title').classList.contains('on')){e.preventDefault();if($('ov').classList.contains('on')&&$('dbx'))closePhone();else{closeOv();dbgOpen()}}});
