/* ============ POSTGAME ============
   Opens on the title screen once a file has seen an ending. A map of the week (every big choice and where it leads),
   each ending with the versions you've had and why, the hints you've earned (some are riddles), scenes to watch again,
   achievements, and once the loop is closed, the week after. */
/* how each ending is reached: shown once you've found it, or once a hint has told you */
const ENDHOW={
 disclosure:'Go to the keynote with a strong case (solve the Lumen mysteries, find the mole) and choose Disclosure at Saturday\'s council. Have someone in love with you.',
 half:'Disclosure with a middling case: some mysteries solved, not enough.',
 graph:'Reach the keynote with almost nothing: few mysteries solved, no mole found. LANTERN\'s demo runs.',
 frontpage:'Get close to Saoirse (her third scene) and choose Front Page at the council.',
 injunction:'Get close to Noor, and either Delphine or the Bastion audit solved; choose Injunction at the council.',
 killswitch:'Get close to Mira, find her signing key, and choose Kill Switch.',
 ghost:'Kill Switch, then run away with Mira when she asks.',
 double:'Get close to Vesper and hear her confession; when she offers, go inside Halberd with her.',
 whistle:'Get close to Delphine; she walks onto Victor\'s stage herself.',
 found:'Find Jonah Reyes and bring him to the keynote.',
 signal:'When Owen cuts the microphones, have the van (Petra and Astrid) or Astrid\'s dish ready.',
 blackout:'When Owen cuts the microphones, have Sunny on the uplink. She takes the whole building down.',
 scapegoat:'Let Krall\'s men catch you with Rin at midday on Sunday.',
 larp:'Reach the keynote with lots of Clout and little Skill, and bluff when Marge hands you the microphone.',
 opensource:'Nobody in love with you, but six or more people\'s stories well along.',
 notfound:'Nobody in love with you, and few people close.',
 lasttrain:'Choose Walk Away at the council.',
 proof:'On Friday, when Proof is in trouble, stay home with Ellie.',
 soldout:'Take Victor\'s offer on Friday and don\'t turn back.',
 dump:'Help Mira into LANTERN-01 on Thursday night, then choose The Dump.',
 trojan:'Fake-accept Victor\'s offer, get inside Suite 1313, then choose Trojan Horse.',
 rollback:'Win over Sunny and Tilly (their crossover) and choose Rollback.',
 doublecross:'Take Victor\'s offer, then turn on him: Double-Cross.',
 informant:'Report WHISPER to Krall on Tuesday night, become his informant, and give him the plan.',
 lastlogin:'Betray the people who trusted you and go up to the roof with nobody in love with you.',
 bigscore:'Meet three of the crew (Nyx, Petra, Kit, Tilly, Yuki), get two of them to their second scene, and say yes when Nyx asks on Friday.',
 zeroday:'Ask Astrid on the train what else is up there. Find the badge in the hotel pool after midnight. At the council, a plan with no name appears.',
 harem:'After Zero Day, type rewind on the laptop at the very start of a new run. In that loop, fall in love with all 21 and solve all 15 mysteries.'
};
/* hints: the first ones about the secret are riddles; later ones say it plainly */
const HINTS=[
 {id:'r1',riddle:1,t:'Seven days of static from a sky that remembers. Before you ever arrive, ask the girl with the headphones what else is up there.'},
 {id:'t_crew',t:'A locksmith, a driver, a costumer, a badge-maker and a speedrunner. Know enough of them by Friday and someone will offer you a very different weekend.'},
 {id:'r2',riddle:1,t:'Under a painted planet, after the last bell, a name is waiting in the water. It\'s yours. It\'s older than you.'},
 {id:'t_whisper',t:'On Tuesday night, the message you get from WHISPER can be answered, reported, or ignored. Each one is a different week.'},
 {id:'r3',riddle:1,t:'When the council sits and every plan is someone else\'s, say the one nobody wrote: switch off the thing that already knows.'},
 {id:'t_routes',t:'Some plans only exist if the right people trust you: Saoirse for the front page, Noor for a judge, Sunny and Tilly for the badges, Mira for the switch.'},
 {id:'p1',t:'Day 1, on the train: ask Astrid if anything else is up there.'},
 {id:'t_vesper',t:'Vesper is lying to you. Find out how, and she might stop. Or she might take you with her.'},
 {id:'p2',t:'The hotel pool, Level 2, Late night, from Wednesday: look into the deep end.'},
 {id:'t_heist',t:'If you help Mira on Thursday night, you get LANTERN-01\'s logs. If you tell Krall, you lose her for good.'},
 {id:'p3',t:'With both of those, a new plan appears at Saturday\'s council: pull the plug on the thing in Suite 1313.'},
 {id:'t_gifts',t:'Everyone tells you what they love by their second and fourth scenes. PEOPLEFINDR tells you sooner, for a price.'},
 {id:'t_loop',after:()=>META.secret,t:'At the very start of a run, before you leave the flat: open the laptop. Type what the last message told you.'},
 {id:'t_loop2',after:()=>META.loop,t:'In the loop, the Echo app on your phone tells you what\'s left and lets you rewind a bad day. Four things fit in every part of the day.'},
 {id:'t_loop3',after:()=>META.loop,t:'The loop\'s three mysteries are found in the loop only: listen with Astrid, ask Tilly and Wren, find Jonah in the tunnel, and look inside 1313.'}
];
const hintOK=h=>!h.after||h.after();
/* what you remember about each week: recorded at the ending card */
function recordEnding(k){META.endv=META.endv||{};const L=META.endv[k]=META.endv[k]||[];
 const lv=ROM.filter(g=>loved(g));
 const v={at:Date.now(),h:S.h,loved:lv,partner:S.partner||null,plan:S.plan||null,day:S.day,solved:Object.keys(S.solved).length,
  f:['path_whisper','path_report','path_alone','heist_yes','betray_mira','mira_taken','informant','fake_accept','took_offer','turncoat','crew_in','vesper_leaked','leak_you','jonah_met','loop_closed'].filter(x=>S.f[x])};
 L.unshift(v);if(L.length>8)L.length=8;
 META.fl=META.fl||{};for(const x in S.f)if(S.f[x])META.fl[x]=1;if(S.plan)META.fl['plan_'+S.plan]=1;if(S.loop)META.fl.loop=1;
 // every ending teaches you something new
 META.hints=META.hints||[];const fresh=[];for(const h of HINTS){if(fresh.length>=2)break;if(!META.hints.includes(h.id)&&hintOK(h)){META.hints.push(h.id);fresh.push(h)}}
 if(META.hints.length>=5)ach('hints5');if(HINTS.every(h=>META.hints.includes(h.id)))ach('hints_all');if(Object.keys(META.ends).length>=10)ach('tree10');
 saveMeta();return fresh}
const PLANN={disc:'Disclosure',front:'Front Page',inj:'Injunction',kill:'Kill Switch',walk:'Walk Away',dump:'The Dump',trojan:'Trojan Horse',rollback:'Rollback',doublecross:'Double-Cross',informant:'Krall\'s way',soldout:'Sold out',bigscore:'The Big Score',oracle:'Pull the plug'};
const FLN={path_whisper:'answered WHISPER',path_report:'reported WHISPER to Krall',path_alone:'told nobody about WHISPER',heist_yes:'helped Mira into LANTERN-01',betray_mira:'betrayed Mira',mira_taken:'Mira was taken',informant:'were Krall\'s informant',fake_accept:'faked accepting Victor\'s offer',took_offer:'took Victor\'s offer',turncoat:'turned on Lumen from inside',crew_in:'joined Nyx\'s crew',vesper_leaked:'Vesper leaked the plan',leak_you:'were blamed for the leak',jonah_met:'found Jonah',loop_closed:'closed the loop'};
function whyLines(v){const out=[];if(v.plan)out.push('Plan: '+(PLANN[v.plan]||v.plan)+'.');
 out.push(v.loved.length?'In love: '+v.loved.map(g=>CH[g].name).join(', ')+'.':'Nobody in love with you.');
 if(v.f.length)out.push('You '+v.f.map(x=>FLN[x]).filter(Boolean).join('; ')+'.');out.push(v.solved+' mysteries solved.');return out}
/* the map of the week: every big choice, what it leads to, and the endings at the end of each branch */
const TREE=[
 {t:'Prologue · the forum post',kids:[
  {t:'Day 1 · on the train, ask Astrid what else is up there',fl:'heard_echo',secret:1,kids:[{t:'Find the badge in the pool after midnight',fl:'badge0',secret:1,kids:[{t:'Saturday: pull the plug',fl:'plan_oracle',secret:1,ends:['zeroday']}]}]},
  {t:'Next run, at the very start: rewind',fl:'loop',secret:1,need:()=>META.secret,kids:[{t:'Everyone in love, all fifteen mysteries',fl:'loop_closed',ends:['harem']}]}]},
 {t:'Tuesday night ⚑ WHISPER\'s message',kids:[
  {t:'Answer',fl:'path_whisper',kids:[{t:'Wednesday ⚑ help Mira into LANTERN-01',fl:'heist_yes',kids:[{t:'The Dump',fl:'plan_dump',ends:['dump']}]},{t:'Help her, then tell Krall',fl:'betray_mira',ends:['lastlogin']}]},
  {t:'Report it to Krall',fl:'path_report',kids:[{t:'Become his informant',fl:'informant',ends:['informant','lastlogin']}]},
  {t:'Tell nobody',fl:'path_alone'}]},
 {t:'Friday',kids:[
  {t:'Proof is in trouble: stay home',fl:'stayed_home',ends:['proof']},
  {t:'Nyx\'s crew: steal LANTERN-02',fl:'crew_in',kids:[{t:'The Big Score',fl:'plan_bigscore',ends:['bigscore']}]},
  {t:'⚑ Victor\'s offer',kids:[{t:'Fake yes: inside Suite 1313',fl:'fake_accept',ends:['trojan']},{t:'Yes',fl:'took_offer',kids:[{t:'Stay sold',ends:['soldout']},{t:'Turn on him',fl:'turncoat',ends:['doublecross']}]}]}]},
 {t:'Saturday ⚑ the plan',kids:[
  {t:'Disclosure',fl:'plan_disc',ends:['disclosure','half','graph','opensource','notfound','found','whistle','signal','blackout','larp','scapegoat','double']},
  {t:'Front Page (Saoirse)',fl:'plan_front',ends:['frontpage']},{t:'Injunction (Noor)',fl:'plan_inj',ends:['injunction']},
  {t:'Rollback (Sunny and Tilly)',fl:'plan_rollback',ends:['rollback']},{t:'Kill Switch (Mira)',fl:'plan_kill',ends:['killswitch','ghost']},
  {t:'Walk away',fl:'plan_walk',ends:['lasttrain']}]}
];
const PG={tab:'tree',end:null};
function postgame(tab){if(tab)PG.tab=tab;const ne=Object.keys(META.ends).length;
 const tabs=[['tree','The week'],['ends','Endings'],['hints','Hints'],['replay','Scenes'],['ach','Achievements']].concat(META.loopClosed?[['epi','The week after']]:[]);
 const known=k=>!!META.ends[k],hinted=k=>ENDHOW[k]&&(known(k)||HINTS.some(h=>META.hints.includes(h.id)&&!h.riddle&&h.t.toLowerCase().includes((ENDINFO[k][0]||'').toLowerCase())));
 const chip=k=>`<button class="echip ${known(k)?'on':''} ${ENDINFO[k][2]}" data-e="${k}">${known(k)?esc(ENDINFO[k][0]):'???'}</button>`;
 const node=(n,d)=>{const seen=!n.fl||META.fl&&META.fl[n.fl],hide=n.secret&&!seen&&!(n.need&&n.need());
  return`<div class="tnode ${seen?'seen':''}"><div class="tl">${hide?'<i>??? · a hidden branch</i>':esc(n.t)}${n.fl&&seen?' <span class="ok">✓</span>':''}</div>${n.ends?`<div class="tends">${n.ends.map(chip).join('')}</div>`:''}${n.kids?`<div class="tkids">${n.kids.map(c=>node(c,d+1)).join('')}</div>`:''}</div>`};
 let body='';
 if(PG.tab==='tree')body=`<p class="small">Every big choice in the week, and where it goes. Ticks are choices you've made in some run. Tap an ending.</p><div class="ttree">${TREE.map(n=>node(n,0)).join('')}</div>`;
 if(PG.tab==='ends'){const k=PG.end;
  body=`<div class="egrid">${ENDORDER.map(chip).join('')}</div>`;
  if(k){const E=ENDINFO[k],V=(META.endv&&META.endv[k])||[];
   body+=`<div class="edetail"><p class="small">${{true:'TRUE ENDING',good:'ENDING',mixed:'ENDING',bad:'BAD ENDING',secret:'SECRET ENDING'}[E[2]]}</p><h3>${known(k)?esc(E[0]):'???'}</h3><p>${known(k)?esc(E[1]):'Not found yet.'}</p>
   <p class="small"><b>How:</b> ${known(k)||hinted(k)?esc(ENDHOW[k]||''):'Find more endings to learn more.'}</p>
   ${V.length?`<p class="small"><b>Your versions</b></p>${V.map(v=>`<div class="evar"><b>${esc(v.h)}</b> · ${fmtTime(v.at)}<br>${whyLines(v).map(esc).join(' ')}</div>`).join('')}`:''}</div>`}}
 if(PG.tab==='hints'){const H=HINTS.filter(h=>META.hints.includes(h.id));body=`<p class="small">${H.length}/${HINTS.length} hints. Every ending teaches you something. The strange ones are riddles.</p>${H.map(h=>`<div class="hint ${h.riddle?'riddle':''}">${h.riddle?'<b>?</b> ':''}${esc(h.t)}</div>`).join('')||'<p class="small">None yet.</p>'}`}
 if(PG.tab==='replay'){const sc=META.seenSc||{};body=`<p class="small">Scenes you've seen, in any run. Replaying changes nothing.</p>${ROM.map(g=>{const ids=[0,1,2,3,4,5].map(i=>g+i).filter(id=>sc[id]);return ids.length?`<div class="rrow"><span class="rhd">${head(lookOf(g),'h')}</span><div><b style="color:${CH[g].col}">${CH[g].name}</b><div class="rbtns">${ids.map(id=>{const i=+id.slice(g.length);return`<button class="btn" data-r="${id}">${i===5?'♥ Last':i===4?'With a friend':i===0?'Meeting':'Scene '+i}</button>`}).join('')}${sc['epi_'+g]?`<button class="btn" data-r="epi_${g}">Epilogue</button>`:''}</div></div></div>`:''}).join('')||'<p class="small">Nothing yet.</p>'}`}
 if(PG.tab==='ach'){const all=Object.keys(ACH),got=all.filter(k=>META.ach[k]).length;body=`<p class="small">${got}/${all.length} · ${achPct()}%</p>${bar(achPct(),'var(--butter)')}<div class="agrid">${all.map(k=>{const a=ACH[k],on=!!META.ach[k],hid=a[2]&&!on;return`<div class="atile ${on?'on':''}"><b>${hid?'???':esc(a[0])}</b><small>${hid?'Hidden':esc(a[1])}</small></div>`}).join('')}</div>`}
 if(PG.tab==='epi')body=`<p>Monday. The con's over. Everyone's still here. Walk around, talk to anyone, for as long as you like.</p><div class="row"><button class="btn pri" id="pgEpi">Go back</button></div>`;
 ov(`<div class="card pgcard"><div class="row" style="justify-content:space-between;align-items:center"><h3 style="margin:0">Postgame · ${esc(META.name||'')}</h3><button class="btn" id="pgx">Close</button></div><p class="small">${ne}/${ENDORDER.length} endings · ${achPct()}% achievements · ${META.runs||0} runs</p><div class="atabs">${tabs.map(t=>`<button class="${PG.tab===t[0]?'on':''}" data-pt="${t[0]}">${t[1]}</button>`).join('')}</div><div class="pgbody">${body}</div></div>`);
 const o=$('ov');$('pgx').onclick=closeOv;
 o.querySelectorAll('[data-pt]').forEach(b=>b.onclick=()=>postgame(b.dataset.pt));
 o.querySelectorAll('[data-e]').forEach(b=>b.onclick=()=>{PG.end=b.dataset.e;postgame('ends')});
 o.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>replayScene(b.dataset.r));
 if($('pgEpi'))$('pgEpi').onclick=()=>{closeOv();epilogueMode()};
}
const achScreen=()=>postgame('ach');
/* replaying a scene: a sandbox week where everyone's met and nothing you do is kept */
function replayScene(id){const keep=S;S=fresh(META.lastH||'you');S.replay=1;S.unl={aff:1};for(const g of ROM){S.met[g]=1;S.f['met_'+g]=1;S.aff[g]=70}
 const m=id.match(/^([a-z]+)(\d)$/);if(m){S.sc[m[1]]=+m[2];S.aff[m[1]]=Math.max(20,ROUTES[m[1]].aff[+m[2]]||20)}
 Object.assign(S.f,META.fl||{});S.day=6;S.slot=2;S.inWorld=0;ach('replay');
 run([{bg:(sceneArea(id)&&AREAS[sceneArea(id)]&&AREAS[sceneArea(id)].bg)||'con'},...scr(id)],()=>{S=keep;show('title');titleScreen();postgame('replay')})}
/* the week after: free roam, nothing to do but be there */
DAYN[8]=DAYN[8]||'Monday';DAYS[8]=[null,null,null,null,null,null];
function epilogueMode(){S=fresh(META.lastH||'you');S.epilogue=1;S.day=8;S.ch=4;S.slot=2;S.money=200;S.unl={aff:1,phone:1,map:1,move:1,clues:1,money:1,skill:1,clout:1};
 for(const g of ROM){S.met[g]=1;S.f['met_'+g]=1;S.aff[g]=100;S.sc[g]=ROUTES[g].n}Object.assign(S.f,{d1_badge:1,d1_open:1,d1_checkin:1,d1_room:1,loop_closed:1});
 ach('epilogue');beatBusy=false;if(!WD.touch&&window.THREE)tryLock();
 initWorld(()=>{if(G.ok){S.inWorld=1;teleportArea('foyer')}hub();toast('Monday. Nothing to do. Everyone to see.','var(--mint)')})}
