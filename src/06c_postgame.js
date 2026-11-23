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
 // the record of every run
 const st=META.stats=META.stats||{};const add=(k,v)=>st[k]=(st[k]||0)+(v||0);
 add('loved',lv.length);add('solved',Object.keys(S.solved).length);add('clues',S.clues.length);add('gifts',Object.values(S.gifted||{}).reduce((a,b)=>a+b,0));add('doxxed',S.fails||0);add('hangs',ROM.reduce((a,g)=>a+Math.max(0,scn(g)-1),0));add('days',S.day);
 META.lovedN=META.lovedN||{};for(const g of lv)META.lovedN[g]=(META.lovedN[g]||0)+1;
 META.hist=META.hist||[];META.hist.unshift({h:S.h,k,at:Date.now(),t:S.play||0,loved:lv,solved:Object.keys(S.solved).length,money:S.money||0,loop:!!S.loop});if(META.hist.length>40)META.hist.length=40;
 if(S.play&&(!st.fastest||S.play<st.fastest))st.fastest=S.play;
 if(META.hints.length>=5)ach('hints5');if(HINTS.every(h=>META.hints.includes(h.id)))ach('hints_all');if(Object.keys(META.ends).length>=10)ach('tree10');
 saveMeta();return fresh}
const PLANN={disc:'Disclosure',front:'Front Page',inj:'Injunction',kill:'Kill Switch',walk:'Walk Away',dump:'The Dump',trojan:'Trojan Horse',rollback:'Rollback',doublecross:'Double-Cross',informant:'Krall\'s way',soldout:'Sold out',bigscore:'The Big Score',oracle:'Pull the plug'};
const FLN={path_whisper:'answered WHISPER',path_report:'reported WHISPER to Krall',path_alone:'told nobody about WHISPER',heist_yes:'helped Mira into LANTERN-01',betray_mira:'betrayed Mira',mira_taken:'Mira was taken',informant:'were Krall\'s informant',fake_accept:'faked accepting Victor\'s offer',took_offer:'took Victor\'s offer',turncoat:'turned on Lumen from inside',crew_in:'joined Nyx\'s crew',vesper_leaked:'Vesper leaked the plan',leak_you:'were blamed for the leak',jonah_met:'found Jonah',loop_closed:'closed the loop'};
function whyLines(v){const out=[];if(v.plan)out.push('Plan: '+(PLANN[v.plan]||v.plan)+'.');
 out.push(v.loved.length?'In love: '+v.loved.map(g=>CH[g].name).join(', ')+'.':'Nobody in love with you.');
 if(v.f.length)out.push('You '+v.f.map(x=>FLN[x]).filter(Boolean).join('; ')+'.');out.push(v.solved+' mysteries solved.');return out}
/* the map of the week: every big choice, what it leads to, and the endings at the end of each branch */
const TREE_KIDS=[
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
const TREE={t:'3:02 AM · the forum post',kids:TREE_KIDS};
/* replaying a scene: a sandbox week where everyone's met and nothing you do is kept */
function replayScene(id){const keep=S;S=fresh(META.lastH||'you');S.replay=1;S.unl={aff:1};for(const g of ROM){S.met[g]=1;S.f['met_'+g]=1;S.aff[g]=70}
 const m=id.match(/^([a-z]+)(\d)$/);if(m){S.sc[m[1]]=+m[2];S.aff[m[1]]=Math.max(20,ROUTES[m[1]].aff[+m[2]]||20)}
 Object.assign(S.f,META.fl||{});S.day=6;S.slot=2;S.inWorld=0;ach('replay');
 run([{bg:(sceneArea(id)&&AREAS[sceneArea(id)]&&AREAS[sceneArea(id)].bg)||'con'},...scr(id)],()=>{S=keep;show('title');titleScreen();postgame('scenes','title')})}
/* the week after: free roam, nothing to do but be there */
DAYN[8]=DAYN[8]||'Monday';DAYS[8]=[null,null,null,null,null,null];
function epilogueMode(){S=fresh(META.lastH||'you');S.epilogue=1;S.day=8;S.ch=4;S.slot=2;S.money=200;S.unl={aff:1,phone:1,map:1,move:1,clues:1,money:1,skill:1,clout:1};
 for(const g of ROM){S.met[g]=1;S.f['met_'+g]=1;S.aff[g]=100;S.sc[g]=ROUTES[g].n}Object.assign(S.f,{d1_badge:1,d1_open:1,d1_checkin:1,d1_room:1,loop_closed:1});
 ach('epilogue');beatBusy=false;if(!WD.touch&&window.THREE)tryLock();
 initWorld(()=>{if(G.ok){S.inWorld=1;teleportArea('foyer')}hub();toast('Monday. Nothing to do. Everyone to see.','var(--mint)')})}
