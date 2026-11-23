/* ============ HUB, SHOP, ROOM 1337, THE PLAN, ENDINGS, TITLE ============ */
function hub(){
 closeOv();$('ov').classList.remove('phoneov','mapov');S.resume=null;
 if(!G.ok){hub2d();return}
 placeChars();S.inWorld=1;S.pos=[WD.reg,WD.x,WD.z,WD.yaw,WD.y];save();show('world');WD.active=true;hud();updObjective();
 if(!WD.touch&&!locked())relock();
 const b=curBeat();if(b&&b.auto)setTimeout(()=>{if(WD.active&&curBeat()===b)startBeat(b)},350);
}
/* no WebGL: the week as a list of choices */
function hub2d(){
 closeOv();save();show('hub');hud();
 const b=curBeat(),free=isFree();
 const ready=ROM.filter(g=>met(g)&&scn(g)<ROUTES[g].n);
 const leads=Object.keys(LEADS).filter(leadOpen);
 $('hub').innerHTML=`<h2>${esc(clockLabel())}</h2><p class="sub">${esc(objective()?objective().t:'')}</p>
 ${b?`<button class="story" id="cont"><div><b>${esc(b.t)}</b><small>The story continues</small></div><span class="ar">▸</span></button>`:''}
 ${free?`<div class="map">${ready.map(g=>`<button class="loc" data-g="${g}"><div class="thumb">${head(lookOf(g),'n')}</div><strong>${CH[g].name}</strong><span>${sceneReady(g)?'Ready':esc(sceneWhy(g)||'')}</span></button>`).join('')}
 ${leads.map(k=>`<button class="loc" data-l="${k}"><strong>${esc(LEADS[k].n)}</strong><span>${esc(MYST[LEADS[k].m].n)}</span></button>`).join('')}
 <button class="loc" data-a="talk"><strong>Catch a talk</strong><span>Skill</span></button><button class="loc" data-a="wait"><strong>${S.slot===5?'Sleep':'Let time pass'}</strong><span></span></button></div>`:''}`;
 if($('cont'))$('cont').onclick=()=>startBeat(b);
 $('hub').querySelectorAll('.loc').forEach(x=>x.onclick=()=>{if(x.dataset.g){const g=x.dataset.g;hangMenu(g,ROUTES[g].loc)}else if(x.dataset.l)leadStart(x.dataset.l);else if(x.dataset.a==='talk')attendTalk();else if(S.slot===5)endDay();else spend('wait')});
}
/* ---- the Con Store: see SHOPS ---- */
function shop(){shopOpen('constore')}
function vendor(){shopOpen('constore')}
/* ---- Room 1337 ---- */
function roomMenu(){
 run([{bg:'hotel'},{hide:1},{unlock:'room'},N('Room 1337. The minibar hums. The bed crunches. Your laptop waits.'),C(
  {t:'Hunt a bug bounty',hint:isFree()?'Terminal minigame · money · uses the '+SLOTN[S.slot].toLowerCase():curBeat()?blockedMsg():'Not now',then:()=>{bugBounty();Q=[];onDone=null;return[]}},
  {t:'Triage your inbox',hint:S.room['inbox'+S.day]?'Done today':'Free · phishing minigame · a clean run lowers Exposure',if:()=>!S.room['inbox'+S.day],then:()=>{S.room['inbox'+S.day]=1;return[{game:'phish'}]}},
  {t:S.slot===5?'Go to bed':'Lie down for a while',hint:S.slot===5?'Ends the day':isFree()?'Uses the '+SLOTN[S.slot].toLowerCase()+' · Exposure −10':'',if:()=>S.day>=1&&(isFree()||S.slot===5&&!curBeat()),then:()=>{if(S.slot===5){Q=[];onDone=null;endDay();return[]}restSlot();Q=[];onDone=null;return[]}},
  {t:'Look out of the window',then:()=>[N(pick(['The city glitters. Somewhere out there, Proof is closed for the night, and a tiny croissant is drawn on a stack of empty paper bags.','A pigeon on the ledge stares at you. You stare back. Neither of you blinks.','From up here, four thousand glowing badges look like fireflies.','The Lumen logo on the con\'s roof turns and turns. From here it looks like an eye.']))]},
  {t:'Leave',then:[]})],hub);
}
/* ---- the plan: who does what at the keynote ---- */
GAMES.plan=(st,done)=>{
 const allies=ROM.concat(['dave']).filter(allyReady);
 const as={};
 const draw=()=>{
  const used=Object.values(as);
  ov(`<div class="card"><h3>Positions</h3><p class="small">One person per job, and everyone can only be in one place. The right person in the right job holds; someone you love holds harder. An empty job falls to you${rank('skill')>=3?', and your Skill can just about carry one':''}.</p>
  ${allies.length?'':'<p class="small" style="color:var(--coral)">Nobody is close enough to you yet to trust with this. You\'ll be doing it alone.</p>'}
  <div class="plan">${TASKS.map(t=>{const a=as[t.k];const sc=taskScore(t,a);return`<div class="task ${sc>=3?'ok':''}"><b>${t.n} · <span class="term" style="color:${sc>=3?'var(--mint)':sc>=2?'var(--butter)':'var(--coral)'}">${a?(sc>=3?'Strong':sc>=2?'Solid':'Shaky'):(sc?'You, just about':'Nobody')}</span></b><small>${t.d}</small><div class="chips">${allies.map(g=>`<button class="chip ${a===g?'on':''}" data-t="${t.k}" data-g="${g}" ${used.includes(g)&&a!==g?'disabled':''}><span class="hd">${head(lookOf(g),'n')}</span>${CH[g].name}</button>`).join('')}</div></div>`}).join('')}</div>
  <div class="row"><button class="btn pri" id="pgo">Lock it in</button></div></div>`);
  $('ov').querySelectorAll('.chip').forEach(b=>b.onclick=()=>{const t=b.dataset.t,g=b.dataset.g;if(as[t]===g)delete as[t];else as[t]=g;draw()});
  $('pgo').onclick=()=>{S.assign={...as};S.pscore=TASKS.reduce((s,t)=>s+taskScore(t,as[t.k]),0);closeOv();done()};
 };draw();
};
const taskOf=k=>S.assign&&S.assign[k];
const taskOK=k=>{const t=TASKS.find(t=>t.k===k);return taskScore(t,taskOf(k))>=2};
/* how strong the keynote is: positions, plus what you actually know */
function keynoteScore(){let s=S.pscore||0;
 for(const m of['m3','m4','m5','m7','m8'])if(S.solved[m])s+=2;
 if(!S.solved.m6)s-=3;
 if(S.f.mira_data)s+=2;if(clue('locker'))s+=2;if(S.f.dave_inside)s+=1;if(clue('lifescore'))s+=1;
 return s}
function endingKey(){
 if(haremReady())return'harem';
 if(S.f.end)return S.f.end;
 if(S.plan==='soldout')return'soldout';
 if(S.plan==='walk')return'lasttrain';
 if(S.f.scapegoat)return'scapegoat';
 if(S.f.larp)return'larp';
 if(S.plan==='kill')return S.f.ghost?'ghost':'killswitch';
 if(S.f.double)return'double';
 const sc=keynoteScore();
 if(S.f.blackout)return'blackout';
 if(S.f.signal)return'signal';
 if(sc<10)return'graph';
 if(S.f.jonah_stage)return'found';
 if(S.f.delphine_stage)return'whistle';
 if(S.plan==='front')return'frontpage';
 if(S.plan==='inj')return'injunction';
 if(sc<18)return'half';
 if(!romCount())return ROM.filter(g=>scn(g)>=2).length>=6?'opensource':'notfound';
 return'disclosure'}
function finishEnding(k){
 S.ending=k;S.inWorld=0;WD.active=false;if(typeof vcShow==='function')vcShow(false);if(document.pointerLockElement){WD.selfUnlock=true;try{document.exitPointerLock()}catch(e){}}if(typeof updBlur==='function')updBlur();META.ends[k]=1;META.runs=(META.runs||0)+1;saveMeta();const learned=typeof recordEnding==='function'&&!S.replay?recordEnding(k):[];ach('end_'+k);if(!S.fails)ach('survivor');if(S.foot<=5)ach('ghostfoot');
 LS.set(slotKey('auto'),'');
 const E=ENDINFO[k],seen=Object.keys(META.ends).length;
 const who=ROM.filter(loved);const face=k==='harem'?null:(S.partner||who[0]);
 ov(`<div class="card" style="text-align:center">${face?`<div style="width:150px;height:170px;margin:0 auto">${head(lookOf(face),'h')}</div>`:''}<p class="small">${{true:'TRUE ENDING',good:'ENDING',mixed:'ENDING',bad:'BAD ENDING',secret:'SECRET ENDING'}[E[2]]}</p><h3 style="font-size:40px">${esc(E[0])}</h3><p>${esc(E[1])}</p><p>${seen}/${ENDORDER.length} endings found.</p>
 <p class="small">${RANKS.skill[rank('skill')]} · ${RANKS.clout[rank('clout')]} · ${who.length} in love · ${Object.keys(S.solved).length}/12 mysteries · ${S.clues.length} clues</p>${learned.length?`<div class="ehints"><p class="small"><b>You learned something</b></p>${learned.map(h=>`<p class="hint ${h.riddle?'riddle':''}">${h.riddle?'<b>?</b> ':''}${esc(h.t)}</p>`).join('')}<p class="small">All your hints are in Postgame, on the title screen.</p></div>`:''}
 <div class="row" style="justify-content:center"><button class="btn pri" id="eT">Title screen</button></div></div>`);
 $('eT').onclick=()=>{closeOv();titleScreen()};
 if(k==='harem'){META.loopClosed=1;saveMeta()}
}
/* ---- title: choose a file, then play ---- */
function achPct(){const all=Object.keys(ACH).length;return all?Math.round(Object.keys(META.ach).filter(k=>ACH[k]).length/all*100):0}
function titleScreen(){
 show('title');$('tname').style.display='none';
 const fl=['ellie2','nyx','ada','priya','juno','kitc','rin','bea','mira','saoirse','sunny','tilly','petra','astrid','yuki','vesper','delphine','noor','fern','wren','pia'],ex=['h','s','h','n','h','s','b','s','n','s','h','b','h','n','s','s','n','n','h','h','n'];
 $('heads').innerHTML=fl.map((g,i)=>`<span>${head(g,ex[i])}</span>`).join('');
 if(!PROF){filesScreen();return}
 fileMenu();
}
function filesScreen(){PROF=0;$('tmain').style.display='none';const el=$('tprof');el.style.display='flex';
 const card=n=>{const p=readProf(n);if(!p)return`<button class="pfile empty" data-n="${n}"><h4>File ${n}</h4><span class="small">Empty. Start here.</span></button>`;
  const m=p.meta||{},all=Object.keys(ACH).length,a=Object.keys(m.ach||{}).filter(k=>ACH[k]).length,e=Object.keys(m.ends||{}).length;
  return`<button class="pfile" data-n="${n}"><h4>${esc(p.name||'File '+n)}</h4><span class="pct">${Math.round(a/all*100)}%</span><span class="small">${a}/${all} achievements · ${e}/${ENDORDER.length} endings · ${m.runs||0} runs${m.loop?' · ∞':''}</span><span class="small">${m.play?fmtDur(m.play)+' played':''}${p.last?(m.play?' · ':'')+'last '+fmtTime(p.last):''}</span><span class="btn del" data-del="${n}">Delete file</span></button>`};
 el.innerHTML=`<p class="small">Choose a file. Each one keeps its own runs, saves and achievements.</p><div class="pfiles">${[1,2,3].map(card).join('')}</div>`;
 el.querySelectorAll('.pfile').forEach(b=>b.onclick=e=>{const d=e.target.closest('[data-del]');if(d){e.stopPropagation();if(!d.dataset.c){d.dataset.c=1;d.textContent='Tap again to delete everything in this file';return}
   const n=d.dataset.del;try{for(const k of Object.keys(localStorage))if(k===profKey(n)||k.startsWith(profKey(n)+'_'))localStorage.removeItem(k)}catch(e){}filesScreen();return}
  const n=+b.dataset.n;if(!readProf(n)){loadProf(n);saveMeta()}else loadProf(n);fileMenu()})}
function fileMenu(){$('tprof').style.display='none';$('tmain').style.display='flex';
 const e=Object.keys(META.ends).length;
 $('tfile').innerHTML=`<b style="color:var(--butter)">${esc(META.name||'File '+PROF)}</b> · ${achPct()}% · ${e}/${ENDORDER.length} endings${META.play?' · '+fmtDur(META.play):''}`;
 $('bLoad').disabled=!['auto',1,2,3,4,5].some(k=>readSlot(k));
 $('bPost').style.display=e?'':'none';
}
$('bNew').onclick=()=>{$('tmain').style.display='none';$('tname').style.display='flex';$('hIn').focus()};
$('bBack').onclick=titleScreen;
$('bFiles').onclick=filesScreen;
$('bLoad').onclick=()=>savesScreen();
$('bAch').onclick=()=>achScreen();
$('bPost').onclick=()=>{PGV.fit=true;postgame('map','title')};
$('bGo').onclick=()=>{
 const h=($('hIn').value||'').trim().replace(/[<>&"{}]/g,'')||'n00b';
 S=fresh(h);META.lastH=h;saveMeta();if(META.runs)ach('newgame');
 // the loop: once you know, you can say the word at the very start
 if(META.secret)S.f.canrewind=1;
 S.resume='pro';startPrologue();
};
function startPrologue(){
 beatBusy=false;
 if(!WD.touch&&window.THREE)tryLock();
 initWorld(()=>{S.day=0;S.slot=0;S.wakeAt='flat';snapDay();if(G.ok){S.inWorld=1;teleportArea('flat')}hub()});
}
$('hIn').addEventListener('keydown',e=>{if(e.key==='Enter')$('bGo').click()});
