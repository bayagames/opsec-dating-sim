/* ============ FLOW: the week, its story beats, free time, hangouts, leads, the case board, the final act ============ */
/* ---- routes: six scenes each. Scene 0 is meeting them (free); 1-5 take part of a day; 5 is the last, just the two of you.
   req[i] = {d: earliest day, a: affection, sk/cl: skill/clout rank, c: extra condition, y: why it's locked} ---- */
const ROUTES={};
function route(g,o){const req=o.req.map(r=>Object.assign({d:1,a:0},r));ROUTES[g]=Object.assign({n:6,aff:req.map(r=>r.a)},o,{req})}
const sceneReq=g=>{const R=ROUTES[g];return R?R.req[scn(g)]:null};
function sceneWhy(g){const R=ROUTES[g],i=scn(g);if(!R||i>=R.n)return null;const r=R.req[i];
 if(day()<r.d)return'their story continues on Day '+r.d;
 if(aff(g)<r.a)return'needs ♥ '+r.a+' (you have '+aff(g)+')';
 if(r.sk&&rank('skill')<r.sk)return'needs Skill rank '+r.sk+' ('+RANKS.skill[r.sk]+')';
 if(r.cl&&rank('clout')<r.cl)return'needs Clout rank '+r.cl+' ('+RANKS.clout[r.cl]+')';
 if(r.c&&!r.c())return r.y||'not yet';
 return null}
const sceneReady=g=>met(g)&&ROUTES[g]&&scn(g)<ROUTES[g].n&&scn(g)>0&&!sceneWhy(g);
function adv(g,i){if(!S)return;S.sc[g]=Math.max(S.sc[g]||0,i+1);if(ROUTES[g]&&S.sc[g]>=ROUTES[g].n)loveDone(g)}
function loveDone(g){META.routes[g]=1;saveMeta();ach('love_'+g);const n=romCount();if(n>=2)ach('love2');if(n>=3)ach('love3')}
/* ---- the calendar ---- */
const BEATS={};
function beat(id,o){BEATS[id]=Object.assign({id,sc:id},o)}
/* DAYS[d][slot] = beat id (or a function choosing one), null = free */
const DAYS={};
const curBeat=()=>{if(!S||S.ending)return null;const D=DAYS[S.day];if(!D)return null;let b=D[S.slot];if(typeof b==='function')b=b();return b&&!S.done[b]?BEATS[b]:null};
const isFree=()=>!!S&&S.day>=1&&!curBeat()&&!S.ending&&DAYS[S.day]&&DAYS[S.day][S.slot]!==undefined;
function blockedMsg(){const b=curBeat();return b?'Not now: '+b.t:''}
let beatBusy=false;
/* a beat can be several steps in different places (Day 1's evening: badge, ceremony, check-in, room) */
const beatStep=b=>b&&b.steps?Object.assign({},b,b.steps[(S.bstep&&S.bstep[b.id])||0]):b;
function startBeat(b0){if(beatBusy)return;beatBusy=true;const b=beatStep(b0);S.inBeat=b0.id;
 run(scr(b.sc),()=>{beatBusy=false;S.inBeat=null;if(S.failing)return;
  if(b0.steps){S.bstep=S.bstep||{};const k=(S.bstep[b0.id]||0)+1;if(k<b0.steps.length){S.bstep[b0.id]=k;save();hub();return}}
  S.done[b0.id]=1;addSlotLog(b0.t);if(b0.after)b0.after();if(S.ending)return;
  // most story beats happen at the start of their part of the day and leave the rest of it free; travel and the big ones use it up
  if(S.noAdvance||!b0.adv){delete S.noAdvance;save();hub();return}if(b0.adv==='day'){endDay();return}nextSlot()})}
function addSlotLog(t){if(!S||!t)return;S.slog=S.slog||{};const k=S.day+':'+S.slot;(S.slog[k]=S.slog[k]||[]).push(t)}
/* time moves only here */
function spend(kind,what){S.acts=(S.acts||0)+1;addSlotLog(what||({hang:'Time with someone',lead:'Worked a lead',talk:'A talk',ctf:'CTF practice',bounty:'Bug bounty',rest:'Rested',wait:'Let it go by'}[kind]||kind));
 if(S.restore&&!S.oc&&S.day>=1){S.oc=1;toast('Overclocked: one more thing this '+SLOTN[S.slot].toLowerCase(),'var(--mint)');save();hub();return}
 nextSlot()}
function nextSlot(){S.oc=0;S.slot++;if(S.slot>5){endDay();return}save();toast(SLOTN[S.slot],'var(--dim)');if(typeof sfx==='function')sfx('advance');hub()}
function endDay(){
 const d=S.day;S.slot=5;
 const sleep=SC['sleep'+d]!==undefined?scr('sleep'+d):scr('sleep');
 run(sleep,()=>{newDay(d+1)})}
function newDay(d){
 if(S.day>=1&&S.exp<=10)ach('lowkey');
 S.day=d;S.ch=Math.min(d,4);S.slot=0;S.oc=0;S.exp=S.foot;S.hang={};delete S.failing;
 const wake=S.wakeAt||'room1337';snapDay();save();
 const go=()=>{run([{chapter:d},{hide:1}],hub)};
 if(G.ok&&S.inWorld)fadeTp(()=>{teleportArea(wake);S.pos=null;go()});else go();
}
/* the world calls this when you walk into the place a beat is waiting */
function beatCheck(){const b=beatStep(curBeat());if(!b||beatBusy||!WD.active)return;if((b.manual||b.who||b.int)&&!b.auto)return;if(b.auto){startBeat(curBeat());return}
 if(!b.w)return;const a=areaAt(WD.reg,WD.x,WD.z,WD.y);
 if(b.pos){const p=b.pos;if(WD.reg===p[0]&&Math.hypot(WD.x-p[1],WD.z-p[2])<(p[4]||3)&&Math.abs(WD.y-(p[3]||0))<2.5)startBeat(curBeat());return}
 if(a===b.w||(b.ws&&b.ws.includes(a)))startBeat(curBeat())}
/* a step that starts when you talk to someone (who) or use something (int) */
const stepIs=k=>{const b=beatStep(curBeat());return!!b&&!beatBusy&&(b.who===k||b.int===k)};
const stepGo=()=>startBeat(curBeat());
function beatTarget(b0){const b=beatStep(b0);if(b.manual)return b.tg||null;if(b.int&&INTPOS[b.int]){const p=INTPOS[b.int];return{reg:p[0],x:p[1],z:p[2],y:p[3]}}if(b.who){const c=WCH.find(c=>c.id===b.who&&c.on);return c?{reg:c.reg,x:c.x,z:c.z,y:c.y||0}:null}if(b.auto)return null;if(b.pos)return{reg:b.pos[0],x:b.pos[1],z:b.pos[2],y:b.pos[3]||0};const A=AREAS[b.w];if(!A)return null;return{reg:A.reg,x:A.sp[0],z:A.sp[1],y:A.sp[3]||0}}
/* ---- free time: what you can do with a part of the day ---- */
function freeCheck(what){if(!S||S.day<1)return false;if(curBeat()){run([N(blockedMsg()+'. It\'s waiting where the green light is.')],hub);return false}if(!isFree()){run([N('Not right now.')],hub);return false}return true}
function hangMenu(g,bgk){
 const R=ROUTES[g],pg=typeof worldLook==='function'?worldLook(g):g;
 if(!met(g)){meet(g);adv(g,0);return run([{bg:bgk},...scr(g+'0')],hub)}
 const opts=[],why=sceneWhy(g),i=scn(g),free=isFree();
 if(i<R.n)opts.push({t:i===R.n-1?'Spend time together: the last one':'Spend time together',hint:why?('Locked: '+why):curBeat()?blockedMsg():!free?'Not now':'Uses the '+SLOTN[S.slot].toLowerCase()+(i===R.n-1?' · this is the end of their story':''),if:()=>true,then:()=>{
   if(why)return[N(CH[g].name+'\'s story '+(why.startsWith('their')?'continues later: ':'needs more: ')+why+'.')];
   if(!freeCheck())return[];
   return[...scr(g+i),()=>{adv(g,i);addSum(R.sum?R.sum[i]||'':'');if(S.slot===5)ach('night_owl');ach('first_hang');spend('hang');return[]}]}});
 const tk=g+':'+S.day;
 opts.push({t:'Talk shop',hint:S.hang[tk]?'Already did that today':'Free · once a day',if:()=>!S.hang[tk],then:()=>{S.hang[tk]=1;return[{unlock:'hang'},{game:'quiz',who:g,n:3}]}});
 const gi=Object.keys(ITEMS).find(k=>ITEMS[k].g===g);
 if(gi&&S.inv[gi]&&!S.gifted[g])opts.push({t:'Give the '+ITEMS[gi].n.toLowerCase(),then:()=>{S.inv[gi]--;if(!S.inv[gi])delete S.inv[gi];S.gifted[g]=1;if(Object.keys(S.gifted).length>=5)ach('gifts5');return[FX({[g]:12}),L(pg,'b',R.gift)]}});
 opts.push({t:'Just chat',then:()=>[L(pg,'h',pick(R.idle))]});
 opts.push({t:'Leave',then:[]});
 const st=STAGEN[Math.min(5,i>=R.n?5:Math.max(0,i-1))];
 run([{bg:bgk},L(pg,'n',pick(R.hello||R.idle)),N(`${CH[g].name} · ${loved(g)?'In love':st} · ♥ ${aff(g)}${why&&i<R.n?' · next: '+why:''}`),C(...opts)],hub);
}
/* talks, workshops and practice: Skill (and a little Clout) for a part of the day */
const TALKS=[
 ['"Your Smart Fridge Is Part of a Botnet"','Anything with Wi-Fi and a default password is somebody else\'s computer. You go home and change your router password in your head.',{skill:10}],
 ['"I Social-Engineered My Way Into My Own Wedding"','Confidence, a hi-vis vest and a clipboard open most doors. The defence is a culture where it\'s fine to ask "who are you?"',{skill:8,clout:4}],
 ['"Data Brokers: Who Has Your Address?"','People-search sites sell your address to anyone. You learn how to make them take it down, and do three from your seat.',{skill:8,foot:-3}],
 ['"Threat Modelling for Normal People"','What are you protecting, from whom, and how much effort is it worth? You think about Ellie\'s bakery the whole time.',{skill:10}],
 ['"Metadata Is Data"','Who you called, when, for how long, from where. You don\'t need the contents. The speaker maps a stranger\'s whole week from one phone bill.',{skill:10}],
 ['"Breaking Badges: A History of Con Hardware"','Twenty years of con badges, from paper to blinking circuit boards. The speaker thanks Tilly Marsh by name. Half the room cheers.',{skill:8,clout:3}],
 ['"Responsible Disclosure Without Getting Sued"','Tell the vendor. Tell the regulator. Keep receipts. Then tell the world. In that order, with dates.',{skill:12}]
];
function attendTalk(){if(!freeCheck())return;const i=(S.talks||0)%TALKS.length,t=TALKS[i];S.talks=(S.talks||0)+1;if(S.talks>=5)ach('talks5');
 run([{bg:'stage'},{hide:1},N('You find a seat. The talk: '+t[0]+'.'),N(t[1]),FX(t[2]),()=>{spend('talk');return[]}],hub)}
function ctfPractice(){if(!freeCheck())return;
 run([{bg:'ctf'},{hide:1},N('The CTF Arena. Scoreboard on the wall, four hundred laptops, the smell of solder and instant noodles. You pick a challenge off the board.'),{game:pick(['pipe','spot']),n:3,keys:shuffle(Object.keys(SPOT)).slice(0,2),title:'CTF practice'},
  ()=>{const r=[];if(day()>=2&&!clue('cipher')&&Math.random()<.5)r.push(N('One challenge on the board has no author. Its flag is EXPOSURE_IS_ART, and it\'s signed "—M".'),{fx:{clue:'cipher'}});r.push(FX({skill:6}),()=>{spend('ctf');return[]});return r}],hub)}
function bugBounty(){if(!freeCheck())return;
 run([{bg:'hotel'},{hide:1},N('You open the con\'s bug bounty board. Real bugs in con systems, paid in con credits.'),{game:'pipe',n:3,title:'Bug bounty'},()=>{spend('bounty');return[]}],hub)}
function restSlot(){if(!freeCheck())return;run([{hide:1},N(pick(['You sit somewhere quiet and let the con go by for a while. Your shoulders come down from around your ears.','You lie down for twenty minutes and wake up an hour later, which is how naps work at cons.'])),FX({exp:-10}),()=>{spend('rest');return[]}],hub)}
/* ---- leads ---- */
const leadOpen=k=>{const L=LEADS[k];return L&&!S.leads[k]&&L.when()};
function leadStart(k){const L=LEADS[k];if(!freeCheck())return;if(L.need&&!L.need())return run([N('You\'d need '+L.needT+' to make sense of this.')],hub);
 S.leads[k]=1;run([...scr('lead_'+k),()=>{ach('first_lead');spend('lead');return[]}],hub)}
/* a risky moment: the roll is shown, so it's fair. Risk 1-3; the hoodie and a high Skill help; a coffee skips it */
function riskRoll(r,caught){
 {let p=[0,.2,.38,.55][r]||0;if(S.inv.hoodie)p-=.12;p-=rank('skill')*.04;p=clamp(p,.04,.9);
  if(S.inv.coffee){S.inv.coffee--;if(!S.inv.coffee)delete S.inv.coffee;return[N('The triple espresso kicks in. You\'re in and out before anyone has blinked.')]}
  const bad=Math.random()<p;if(!bad)return[N('Nobody sees you. '+pick(['Your heart is going like a drum, but nobody sees you.','A door closes somewhere else. You breathe out.','You\'re just another lanyard in a corridor.']))];
  return scr(caught||'caught').concat([FX({exp:20+r*12})])}}
/* ---- the case board ---- */
function solveMyst(m,answer,picks){const M=MYST[m];
 const ok=answer===M.a&&picks.length===3&&picks.every(c=>M.ev.includes(c));
 if(ok){S.solved[m]=1;META.solved[m]=1;saveMeta();fx({skill:M.xp});ach('first_solve');ach('solve_'+m);if(Object.keys(MYST).every(k=>S.solved[k]))ach('all_solved');addSum('Solved: '+M.n+'. '+M.opts[M.a]+'.')}
 else{S.wrong=(S.wrong||0)+1;fx({exp:8})}
 return ok}
/* the clues you hold that could speak to a mystery (some are red herrings) */
const mystClues=m=>S.clues.filter(c=>CLUE[c].m.includes(m));
const canSolve=m=>!S.solved[m]&&mystClues(m).filter(c=>MYST[m].ev.includes(c)).length>=3;
/* ---- the final act: who does what at the keynote ---- */
const TASKS=[
 {k:'uplink',n:'Cut LANTERN\'s uplink',d:'Stop the con\'s graph leaving the building before the signing.',best:'sunny',good:['petra','kit','tilly']},
 {k:'protect',n:'Keep Rin and the evidence safe',d:'Lumen will try to grab both before four.',best:'nyx',good:['wren','bea','petra']},
 {k:'screens',n:'Take the screens',d:'Every screen in Hall A, at the right second.',best:'yuki',good:['tilly','juno','kit']},
 {k:'verify',n:'Verify it live',d:'Prove anyone can check the evidence tonight.',best:'ada',good:['priya','rin']},
 {k:'broadcast',n:'Get it out everywhere',d:'Live, on every platform, before Lumen\'s lawyers wake up.',best:'juno',good:['saoirse','astrid']},
 {k:'legal',n:'Legal cover',d:'Prove it went to the regulator first.',best:'noor',good:['priya','delphine']},
 {k:'buyer',n:'Find the buyer',d:'Halberd\'s man is somewhere in the building.',best:'vesper',good:['fern','wren','astrid']},
 {k:'story',n:'The human story',d:'Make three thousand people feel why it matters.',best:'ellie',good:['pia','delphine','dave']}
];
const allyReady=g=>g==='dave'?!!S.f.dave_helped:(met(g)&&scn(g)>=3);
const taskScore=(t,a)=>{let s=!a?(rank('skill')>=3?1:0):a===t.best?3:t.good.includes(a)?2:1;if(a&&a!=='dave'&&loved(a))s++;return Math.min(3,s)};
