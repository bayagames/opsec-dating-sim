/* ============ HUB ============ */
const LOCS=[
 {k:'stage',n:'Main Stage',c:'#ffffff33',from:1},
 {k:'vendor',n:'Vendor Hall',c:'#ffd16633',from:1},
 {k:'lock',n:'Lockpick Village',g:'nyx',c:'#ffd16644',from:1},
 {k:'ctf',n:'CTF Room',g:'ada',c:'#8affc144',from:1},
 {k:'soc',n:'Blue Team Village',g:'priya',c:'#7cc4ff44',from:1},
 {k:'stream',n:'Stream Booth',g:'juno',c:'#ff8fc855',from:1},
 {k:'cos',n:'Cosplay Hall',g:'kit',c:'#2bf0ff44',from:1},
 {k:'chill',n:'Chill-out Lounge',g:'rin',c:'#c9b6ff44',from:2},
 {k:'bar',n:'Hotel Bar',g:'bea',c:'#ff9a5c44',from:2},
 {k:'lobby',n:'Hotel Lobby',g:'ellie',c:'#ffe0a044',from:3},
 {k:'roof',n:'Rooftop',g:'mira',c:'#cfd8ff44',from:3,need:()=>S.f.roof_open},
 {k:'hotel',n:'Room 1337',c:'#ffb34744',from:1}
];
const sceneReady=g=>{const R=ROUTES[g],s=S.stage[g];return s<R.scenes.length&&S.ch>=R.req[s]&&S.aff[g]>=R.aff[s]};
const daveReady=()=>{const s=S.stage.dave;return s<DAVE.length&&DAVE[s].ok()};
const TALKS={1:['"Your Smart Fridge Is Part of a Botnet"','Anything with Wi-Fi and a default password is somebody else\'s computer. You go home and change your router password in your head.',{skill:6}],
 2:['"I Social-Engineered My Way Into My Own Wedding"','Confidence, a hi-vis vest and a clipboard open most doors. The best defence is a culture where it\'s fine to ask "who are you?"',{skill:6}],
 3:['"Data Brokers: Who Has Your Address?"','People-search sites sell your address to anyone. You learn how to request removal, and do it from your seat for three of them.',{skill:5,exp:-8}],
 4:['"Threat Modelling for Normal People"','Who are you protecting, from whom, and how much effort is it worth? You think about Ellie\'s bakery the whole time.',{skill:6}]};
function newCount(){let n=0;LOCS.forEach(l=>{if(l.g&&locOpen(l)&&sceneReady(l.g))n++});if(daveReady())n++;return n}
const locOpen=l=>S.ch>=l.from&&(!l.need||l.need())&&(!l.g||l.g==='nyx'||l.g==='ada'||l.g==='priya'||l.g==='juno'||l.g==='kit'||l.g==='mira'||S.f['met_'+l.g]);
function hub2d(){
 closeOv();S.resume=null;save();show('hub');hud();
 const gl=GOALS[S.ch];const nc=newCount();
 $('hub').innerHTML=`<h2>${CHAP[S.ch][0]}</h2><p class="sub">${CHAP[S.ch][1]} · ${SUBS[S.ch]}</p>
 <button class="story" id="cont"><div><b>Continue story: ${gl[0]}</b><small>${gl[1]}${nc?` · ${nc} new scene${nc>1?'s':''} still waiting`:''}</small></div><span class="ar">▸</span></button>
 <div class="map">${LOCS.filter(locOpen).map(l=>{
  let s='',tag='',th='';
  if(l.g){const g=l.g,R=ROUTES[g],st=S.stage[g];
   const met=S.f['met_'+g];
   th=`<div class="thumb">${head(g==='kit'&&st<1?'kitc':g,met?(st>=R.scenes.length?'h':'n'):'s')}</div>`;
   if(!met)s='Someone new is here';
   else if(st>=R.scenes.length)s=`${CH[g].name} · ♥ ${S.aff[g]} · route complete`;
   else if(S.ch<R.req[st])s=`${CH[g].name} · ♥ ${S.aff[g]} · more later`;
   else if(S.aff[g]<R.aff[st])s=`${CH[g].name} · ♥ ${S.aff[g]}/${R.aff[st]} to continue`;
   else s=`${CH[g].name} · ♥ ${S.aff[g]}`;
   if(sceneReady(g))tag='NEW';
  }else if(l.k==='stage'){s=S.talk[S.ch]?'Talk attended':'A talk is on';if(!S.talk[S.ch])tag='TALK'}
  else if(l.k==='vendor'){s=S.ch<2?'Still setting up':`Shop · ${S.cred} credits`;if(daveReady()){tag='NEW';th=`<div class="thumb">${head('davex','d')}</div>`;s+=' · Dave'}}
  else if(l.k==='hotel'){const left=(S.room[S.ch+'b']?0:1)+(S.room[S.ch+'i']?0:1);s=left?`${left} thing${left>1?'s':''} to do`:'Nothing left today';}
  return `<button class="loc" style="--lc:${l.c}" data-k="${l.k}">${th}${tag?`<span class="tag">${tag}</span>`:''}<strong>${l.n}</strong><span>${s}</span></button>`}).join('')}</div>`;
 $('hub').querySelectorAll('.loc').forEach(b=>b.onclick=()=>go(b.dataset.k));
 $('cont').onclick=advance;
}
function hub(){
 closeOv();$('ov').classList.remove('phoneov');S.resume=null;
 if(!G.ok){hub2d();return}
 S.inWorld=1;S.pos=[WD.reg,WD.x,WD.z,WD.yaw,WD.y];save();show('world');WD.active=true;hud();updObjective();
 // walking around always means mouse-look: grab the mouse now (this runs inside the click/key that ended the scene)
 if(!WD.touch&&!locked())relock();
}
function advance(){
 const nc=newCount();
 const goOn=()=>{closeOv();const c=S.ch;S.resume='close';
  if(c===4){run(KEYNOTE(),null);return}
  run(CLOSE[c](),()=>{S.ch=c+1;S.resume='open';save();run(OPEN[S.ch](),hub)})};
 if(nc||S.ch===4){
  const unfinished=ROM.filter(g=>S.f['met_'+g]&&S.stage[g]<ROUTES[g].scenes.length).map(g=>CH[g].name);
  ov(`<div class="card"><h3>${S.ch===4?'Ready for the keynote?':'Move the story on?'}</h3><p>${nc?`There ${nc>1?'are':'is'} still ${nc} new scene${nc>1?'s':''} waiting. `:''}${S.ch===4?(unfinished.length?`Routes not finished: ${unfinished.join(', ')}. After the keynote, they close for good.`:'Every route you started is finished.'):'Unseen scenes will still be there in the next chapter.'}</p><div class="row"><button class="btn pri" id="ay">Continue</button><button class="btn" id="an">Not yet</button></div></div>`);
  $('ay').onclick=goOn;$('an').onclick=()=>{closeOv();hub()};
 }else goOn();
}
function go(k){
 if(k==='stage'){
  if(S.talk[S.ch])return run([{bg:'stage'},{hide:1},N('The next talk is about blockchain. You leave before you can be persuaded of anything.')],hub);
  const t=TALKS[S.ch];S.talk[S.ch]=1;
  return run([{bg:'stage'},{hide:1},N('You catch a talk: '+t[0]+'.'),N(t[1]),FX(t[2])],hub);
 }
 if(k==='vendor')return vendor();
 if(k==='hotel')return roomMenu();
 const g=LOCS.find(l=>l.k===k).g;
 if(sceneReady(g)){
  const R=ROUTES[g];
  return run(R.scenes[S.stage[g]](),()=>{if(S.f.hold){delete S.f.hold}else S.stage[g]++;hub()});
 }
 hang(g,k);
}
function hang(g,k){
 const R=ROUTES[g],st=S.stage[g];
 const opts=[];
 const key=S.ch+g;
 opts.push({t:'Talk shop',hint:S.hang[key]?'Already did that this chapter':'Quiz · once per chapter',if:()=>!S.hang[key],then:()=>{S.hang[key]=1;return[{unlock:'hang'},{game:'quiz',who:g,n:3}]}});
 const gi=Object.keys(ITEMS).find(i=>ITEMS[i].g===g);
 if(gi&&S.inv[gi]&&!S.gifted[g])opts.push({t:'Give the '+ITEMS[gi].n,then:()=>{S.inv[gi]--;if(!S.inv[gi])delete S.inv[gi];S.gifted[g]=1;return[FX({[g]:15}),L(pg,'b',GIFTLINE[g])]}});
 const pg=typeof worldLook==='function'?worldLook(g):g;
 opts.push({t:'Just hang out for a bit',then:()=>[L(pg,'h',pick(CHAT_IDLE[g]))]});
 opts.push({t:'Leave',then:[]});
 let note='';
 if(st<R.scenes.length){if(S.ch<R.req[st])note=' (Their story continues in a later chapter.)';else note=` (Their next scene opens at ♥ ${R.aff[st]}. You\'re at ${S.aff[g]}.)`}
 else note=' (You\'ve seen all their scenes.)';
 run([{bg:k},L(pg,'n',R.idle[1]),N(R.idle[0]+note),C(...opts)],hub);
}
const GIFTLINE={ellie:'A proofing basket! A real rattan one! I\'m going to cry into my sourdough.',nyx:'A clear practice set... for me? I\'m going to pretend this isn\'t the best present I\'ve had in years.',ada:'An ESC keycap. The most important key. You understand me on a molecular level.',priya:'A privacy screen. Nobody has ever given me something this thoughtful. Shoulder surfers, beware.',juno:'Holo stickers! My laptop lid has one empty spot and it\'s YOURS.',kit:'A whole reel of addressable LEDs?! Do you know what I can BUILD with this?',rin:'A metre-long gummy worm. You\'ve reverse-engineered my heart. That\'s a crime, by the way.',bea:'A hacker zine. With drawings. You... noticed I draw. Thank you.',mira:'A cipher wheel. Analogue. Unhackable. You pay attention.'};
const CHAT_IDLE={
 ellie:['I sold a croissant for "one bitcoin". I don\'t think he was serious. I hope he wasn\'t serious.','Everyone here is so nice! Weird, but nice. Like a village of owls.','Someone asked what my threat model is. I said "pigeons".'],
 nyx:['Fun fact: most office doors open with a credit card and confidence.','I\'ve been here four hours and three people have told me how they\'d "theoretically" rob a bank.','You\'re standing like a pentester. Weight on the back foot. Ready to run. Good.'],
 ada:['I renamed my wifi "Pretty Fly for a Wi-Fi". I regret nothing.','Did you know the scoreboard is written in Perl? I\'m going to be thinking about that all day.','Sorry, I was compiling. Not code. My thoughts.'],
 priya:['Fourteen people here have their home address in their Wi-Fi name. Fourteen.','Have you updated your phone? Do it now. I\'ll wait. I\'m serious.','I don\'t do small talk. This is medium talk. Feel honoured.'],
 juno:['Chat says hi! Okay chat\'s not on. But in spirit, chat says hi.','I learned what a port is today. I\'m telling everyone. I\'m insufferable.','Do you think I\'d look good in a hacker hood? Like, ironically. But also not.'],
 kit:['I\'ve burned myself on the glue gun six times today. A personal best. Or worst.','Static Bloom season three got announced and I screamed in the hall. Sorry to everyone.','If you need anything foamed, I\'m your girl.'],
 rin:['I\'ve analysed the lava lamp. It\'s not phoning home. Rare for this con.','Do you want a worm? You look like you need a worm.','I named my laptop "Gremlin". It earned it.'],
 bea:['Someone just tried to pay with an NFT. I gave him a napkin.','Four hundred Club-Mates today. We\'ve run out. There may be a riot.','You\'re the only one who says thank you. Keep it up. It\'s noticed.'],
 mira:['Look down there. Every lit window is someone telling an app where they are.','I like the wind up here. It can\'t be logged.','You came back. People rarely come back.']
};
function vendor(){
 const opts=[];
 if(daveReady())opts.push({t:'Talk to Dave',hint:'NEW',then:()=>{const s=S.stage.dave;return[...DAVE[s].sc(),()=>{S.stage.dave++;return[]}]}});
 if(S.ch>=2)opts.push({t:'Browse the shop',then:()=>{Q=[];onDone=null;shop();return[]}});
 opts.push({t:'Leave',then:[]});
 run([{bg:'vendor'},{hide:1},N(S.ch<2?'Stalls are still being built. Stickers everywhere. Nothing for sale until tomorrow.':'Stalls of stickers, lock picks, LEDs, suspicious USB cables and one man selling only lanyards.'),C(...opts)],hub);
}
function shop(){
 const draw=()=>{
  ov(`<div class="card"><h3>Vendor Hall</h3><p class="small">Credits: <b class="term" style="font-size:20px;color:var(--butter)">${S.cred}</b>. Earn more from bug bounties and inbox triage in Room 1337, and from minigames.</p>${Object.entries(ITEMS).map(([k,it])=>{const own=S.inv[k]||(it.g&&S.gifted[it.g]);const lock=it.g&&!S.f['met_'+it.g];return `<div class="item"><div><b>${lock?'???':it.n}</b>${S.inv[k]?' <span class="small">(in your bag)</span>':''}<small>${lock?'You haven\'t met who this is for yet.':it.d}</small></div><span class="price">${it.p}c</span><button class="btn" data-k="${k}" ${S.cred<it.p||own||lock?'disabled':''}>${own?'Got it':'Buy'}</button></div>`}).join('')}<div class="row"><button class="btn pri" id="sx">Done</button></div></div>`);
  $('ov').querySelectorAll('.item .btn').forEach(b=>b.onclick=()=>{const k=b.dataset.k;S.cred-=ITEMS[k].p;fx({item:k});draw()});
  $('sx').onclick=()=>{closeOv();hub()};
 };draw();
}
function roomMenu(){
 const b=S.ch+'b',i=S.ch+'i';
 run([{bg:'hotel'},{hide:1},{unlock:'room'},N('Room 1337. The minibar hums. The bed crunches. Your laptop waits.'),C(
  {t:'Grind a bug bounty',hint:S.room[b]?'Done for this chapter':'Terminal minigame · credits',if:()=>!S.room[b],then:()=>{S.room[b]=1;return[{game:'pipe',n:3,title:'Bug bounty'}]}},
  {t:'Triage your inbox',hint:S.room[i]?'Done for this chapter':'Phishing minigame · a perfect run lowers Exposure',if:()=>!S.room[i],then:()=>{S.room[i]=1;return[{game:'phish'}]}},
  {t:'Look out of the window',then:()=>[N(pick(['The city glitters. Somewhere out there, Proof is closed for the night, and a tiny person in a cape is drawn on a stack of empty bags.','A pigeon on the ledge stares at you. You stare back. Neither of you blinks.','From up here, the con\'s glowing lanyards look like fireflies.']))]},
  {t:'Leave',then:[]})],hub);
}

/* ============ KEYNOTE ============ */
const TASKS=[
 {k:'stage',n:'The AV booth',d:'Legitimate, signed control of the screens.',best:'nyx',good:['kit','bea']},
 {k:'live',n:'Broadcast',d:'Make sure it goes out live, everywhere, at once.',best:'juno',good:['kit','dave']},
 {k:'legal',n:'Disclosure and legal cover',d:'Prove the regulator already has it.',best:'priya',good:['mira','nyx']},
 {k:'proof',n:'The evidence',d:'Walk the audience through what the app really does.',best:'rin',good:['ada','mira']},
 {k:'verify',n:'Independent verification',d:'Show anyone can reproduce it tonight.',best:'ada',good:['priya','rin']},
 {k:'story',n:'The human story',d:'Make people feel why it matters.',best:'ellie',good:['dave','bea']},
 {k:'inside',n:'Inside knowledge',d:'Know Victor\'s timing and the internal plans.',best:'bea',good:['dave','mira']}
];
const allyReady=g=>g==='dave'?!!S.f.dave_helped:(S.f['met_'+g]&&S.stage[g]>=Math.min(3,ROUTES[g].scenes.length-1));
const taskScore=(t,a)=>{let s=!a?(S.skill>=50?1:0):a===t.best?3:t.good.includes(a)?2:1;
 if(t.k==='proof'&&S.f.mira_data)s++;if(t.k==='inside'&&(S.clues.includes('runsheet')||S.f.dave_inside))s++;if(t.k==='legal'&&S.clues.includes('bastion'))s++;if(t.k==='stage'&&S.f.nyx_quit)s++;
 return Math.min(3,s)};
GAMES.plan=(st,done)=>{
 const allies=ROM.concat(['dave']).filter(allyReady);
 const as={};
 const draw=()=>{
  const used=Object.values(as);
  ov(`<div class="card"><h3>The plan</h3><p class="small">Assign one ally to each job. Everyone can only do one thing. Right person, right job: the closer the fit, the stronger the keynote. Empty jobs fall to you${S.skill>=50?', and your Skill can just about carry one':''}.</p>
  ${allies.length?'':'<p class="small" style="color:var(--coral)">Nobody is close enough to you yet to stand on that stage. You\'ll be doing this alone.</p>'}
  <div class="plan">${TASKS.map(t=>{const a=as[t.k];const sc=taskScore(t,a);return`<div class="task ${sc>=3?'ok':''}"><b>${t.n} · <span class="term" style="color:${sc>=3?'var(--mint)':sc>=2?'var(--butter)':'var(--coral)'}">${a?(sc>=3?'Strong':sc>=2?'Solid':'Shaky'):(sc?'You, just about':'Nobody')}</span></b><small>${t.d}</small><div class="chips">${allies.map(g=>`<button class="chip ${a===g?'on':''}" data-t="${t.k}" data-g="${g}" ${used.includes(g)&&a!==g?'disabled':''}><span class="hd">${head(g==='dave'?'davex':g,'n')}</span>${CH[g].name}</button>`).join('')}</div></div>`}).join('')}</div>
  <div class="row"><button class="btn pri" id="pgo">Lock in the plan</button></div></div>`);
  $('ov').querySelectorAll('.chip').forEach(b=>b.onclick=()=>{const t=b.dataset.t,g=b.dataset.g;if(as[t]===g)delete as[t];else as[t]=g;draw()});
  $('pgo').onclick=()=>{S.plan={...as};S.pscore=TASKS.reduce((s,t)=>s+taskScore(t,as[t.k]),0);closeOv();done()};
 };draw();
};
const TLINE={
 stage:{nyx:'Nyx holds up the signed authorisation to the AV crew. "Paperwork, gentlemen." They step aside. Every screen in Hall A is yours.',self:'You talk your way into the AV booth with Marge\'s note. The tech eyes you warily but lets you plug in.'},
 live:{juno:'Juno goes live to fifty thousand people. Within a minute, clips are on every platform. Lumen can\'t call this back.',self:'You start a livestream on your own phone. Forty-one viewers. Nineteen are bots. It\'s something.'},
 legal:{priya:'Priya puts the regulator\'s acknowledgement on screen, timestamped: received yesterday, 11:42 AM. "This is a disclosure, not an attack."',self:'You read out the regulator\'s reference number from your phone. It sounds smaller than it is.'},
 proof:{rin:'Rin walks on in a lilac hoodie and a pleated skirt, and calmly takes SafeSphere apart, line by line, in front of three thousand people. Nobody underestimates him ever again.',self:'You walk through the code yourself. You\'re nervous, but you know it now. Really know it.'},
 verify:{ada:'Ada puts a single command on screen. "Run this tonight. Check our work. Don\'t trust us. Trust the hash." A thousand laptops open at once.',self:'You post the files and say "please check our work". It\'s the right instinct, even without Ada\'s polish.'},
 story:{ellie:'Ellie walks out with flour still on her sleeve. "My name\'s Ellie. I make bread." She tells it exactly like she told you. You can hear a pin drop. Then you can hear three thousand people get angry.',self:'You tell Ellie\'s story for her, as best you can. It lands, but it isn\'t the same as hearing it from her.'},
 inside:{bea:'Bea knows Victor\'s run-sheet to the minute. "He does the reveal at 4:10," she\'d said. "Go at 4:09." You do. The SafeSphere 2 slide never even appears.',self:'You guess at Victor\'s timing. You go a little late; the SafeSphere 2 logo is already on screen when you interrupt.'}
};
const GLINE=(t,a)=>{const nm=CH[a].name;const L2={
 stage:`${nm} gets you into the AV booth. It takes some arguing, but the screens are yours.`,
 live:`${nm} gets it streaming on every account they can reach. Not as big as it could be, but it\'s out there.`,
 legal:`${nm} shows the regulator\'s receipt and explains it clearly enough.`,
 proof:`${nm} walks through the code. Clear, careful, convincing.`,
 verify:`${nm} posts the verification steps on screen and dares anyone to check them.`,
 story:`${nm} tells Ellie\'s story, and their own. It\'s raw and it lands.`,
 inside:`${nm} knows enough about Lumen\'s plans to time it right.`};
 if(a==='dave'&&t==='story')return'Dave takes the mic. "I was MegaHax. I made the TikToks. I didn\'t know. Now I do." It\'s the most honest thing anyone in a Lumen T-shirt has ever said.';
 if(a==='dave'&&t==='inside')return'Dave puts the intern deck on screen. Slide 14: "Users won\'t read the update notes." The hall goes very quiet.';
 if(a==='mira'&&t==='proof')return'Mira stands up. "I\'m the data scientist who built the contact graph. I\'m here to say it should never ship." Victor goes grey.';
 return L2[t]};
function KEYNOTE(){return[
 {chapter:5},{bg:'stage'},{hide:1},
 N('3:40 PM. Backstage at Hall A. Cables, gaffer tape and a terrifying amount of adrenaline.'),
 ()=>{const al=ROM.concat(['dave']).filter(allyReady);return al.length?[N('Everyone who said they\'d come is here: '+al.map(g=>CH[g].name).join(', ')+'.'),N('They\'re all looking at you. Somehow, you\'re the one holding this together.')]:[N('You came alone. You didn\'t get close enough to anyone to ask. It\'s just you, a laptop and Marge\'s ten minutes.')]},
 {game:'plan'},
 {bg:'keynote'},
 N('4:02 PM. Hall A. Three thousand people. A light show. Victor Hale walks on to applause.'),
 L('victor','h','Friends. Hackers. Privacy is a human right. And today, SafeSphere becomes something bigger.'),
 L('marge','n','Victor, before you go on. The con has agreed to a ten-minute responsible disclosure segment.'),
 L('victor','a','That is not on my run-sheet.'),
 L('marge','s','It\'s on mine.'),
 {hide:1},
 ()=>TASKS.map(t=>{const a=S.plan[t.k];return N(!a?TLINE[t.k].self:(a===t.best?TLINE[t.k][a]:GLINE(t.k,a)))}),
 L('victor','a','This is a stunt. Let\'s hear the so-called hacker. Answer a few questions, if you can.'),
 ()=>{S.qa={r:0,l:0};return[]},
 C({t:'"Asking for contacts isn\'t the problem. Uploading everyone\'s numbers and selling who they know is. Those people never said yes."',then:()=>{S.qa.r++;return[]}},
  {t:'"Industry standard? I AM the industry."',then:()=>{S.qa.l++;return[]}},
  {t:'"Your face is industry standard."',then:()=>[]}),
 L('victor','s','Our audit by Bastion Security found nothing.'),
 C({t:'"Lumen pays Bastion. And Bastion\'s own analyst found this."',then:()=>{S.qa.r++;return[]}},
  {t:'"I hacked Bastion. They\'re nothing."',then:()=>{S.qa.l++;return[]}},
  {t:'"Bastion sounds like a nightclub."',then:()=>[]}),
 L('victor','a','Anyone could fake these so-called findings.'),
 C({t:'"That\'s why we published the hashes and a script. Anyone can check tonight. Please do."',then:()=>{S.qa.r++;return[]}},
  {t:'"Trust me. I\'m a hacker."',then:()=>{S.qa.l++;return[]}},
  {t:'"Could have been. Weren\'t, though."',then:()=>[]}),
 ()=>{
  if(S.qa.l>=3)return ENDS.larp();
  const total=S.pscore+S.qa.r*2;S.kres=total>=20?'full':total>=12?'partial':'fail';
  if(S.kres==='full')return[N('Silence. Then a sound like a wave: three thousand people uninstalling an app at once. Juno\'s counter on the big screen spins backwards.'),N('At 4:31 PM, a journalist publishes. At 4:40, the regulator confirms an investigation. At 5:02, SafeSphere disappears from both app stores, "pending review".'),L('victor','d','...'),N('Victor leaves the stage without his confetti.'),L('marge','h','Twenty years of closing keynotes. That was the best one.'),FX({skill:8,clout:8})];
  if(S.kres==='partial')return[N('Lumen\'s team cuts the house mic halfway through, but the stream has already gone out. By evening, it\'s trending.'),N('Lumen calls it "a misunderstanding". The regulator calls it "a matter we\'re looking into". SafeSphere 2\'s launch is "paused for review".'),N('Not a knockout. But the bell has rung, and everyone heard it.'),FX({skill:5,clout:5})];
  return[N('Lumen\'s AV team kills the screens two minutes in. Victor laughs it off. "Hackers, eh?" The confetti falls anyway.'),N('It isn\'t over. Priya\'s disclosure is sitting with the regulator. It will take months instead of minutes.'),N('But tonight, Victor gets his confetti.'),FX({skill:3})];
 },
 ()=>S.f.mira_done?[N('In the back row, a woman with silver hair stands, nods once, and slips out. No screens go black tonight.')]:S.f.met_mira?[{bg:'void'},W('NOT BAD. THE SLOW WAY. I\'LL ALLOW IT. —W'),N('Then every WHISPER account on every platform vanishes.'),{bg:'keynote'}]:[{bg:'void'},W('WELL PLAYED. —W'),{bg:'keynote'}],
 {chapter:6},{bg:'party'},{hide:1},
 N('The 0xFF Afterparty. Bass you feel in your teeth. Someone is DJing from a terminal. Someone else is DJing from a toaster.'),
 ()=>{const l=[];
  if(S.f.dave_helped)l.push(L('davex','h','BRO. People keep buying me drinks. For being honest. Is that a thing? Is honesty a flex now?'));
  if(S.f.met_ellie)l.push(L('ellie','h','I sold the last pastry to a man dressed as a router. He paid me in stickers. Best day of my life.'));
  if(S.f.met_nyx)l.push(L('nyx','s','You didn\'t die on stage. I\'m only mildly impressed. Mildly.'));
  if(S.f.met_ada)l.push(L('ada','b','I\'m at a party. Look at me. Partying. Is this how you hold a drink?'));
  if(S.f.met_kit)l.push(L('kitc','h','WANDERER! The Static Bloom salutes you! ...I put the armour back on for the party, sorry, I got shy.'));
  if(S.f.met_rin)l.push(L('rin','h','My boss emailed. Then a lawyer emailed. Then a better company emailed. With a job.'));
  return l},
 ()=>ROMANCE()
];}
function ROMANCE(){
 const c=ROM.filter(g=>S.f[g+'_done']&&S.aff[g]>=60);
 if(!c.length)return S.kres==='fail'?ENDS.alone():ENDS.friends();
 const place={ellie:'Find Ellie by the empty pastry table',nyx:'Find Nyx at the lockpick table',ada:'Find Ada in the quiet corner by the servers',priya:'Find Priya at the table with no devices',juno:'Find Juno by the DJ booth, camera off',kit:'Find Kit on the fire escape, armour off',rin:'Find Rin in a nest of bean bags',bea:'Find Bea behind the bar, apron off',mira:'Go up to the roof'};
 return[{hide:1},N('The party roars around you. But there\'s someone you need to find.'),C(...c.map(g=>({t:place[g],then:()=>ENDS[g]()})),{t:'Stay with everyone tonight',then:()=>ENDS.friends()})];
}
const ENDINFO={ellie:'Proof',nyx:'Authorized Access',ada:'Root Privileges',priya:'Air Gap',juno:'Going Live',kit:'Best Craftsmanship',rin:'Patch Notes',bea:'The Raccoon',mira:'Zero Knowledge',friends:'Open Source',doxxed:'Doxxed',larp:'Larp Exposed',alone:'404: Partner Not Found'};
const KRES=()=>({full:'Lumen is under investigation and SafeSphere is gone.',partial:'SafeSphere 2 is paused, and the whole internet is watching Lumen.',fail:'The fight with Lumen will be a long one. But it\'s started.'}[S.kres]||'');
const ENDS={
 ellie:()=>[{bg:'bakery'},
  N('Three weeks later. Proof. 7:12 AM.'),
  L('ellie','h','Morning, computer guy. The usual?'),
  N('There\'s a new sign by the till, hand-lettered: "Ask me about two-factor authentication! Free advice with every knot."'),
  N(KRES()+' Ellie followed every update and baked a cake shaped like a padlock for the day the news broke.'),
  L('ellie','b','I start teaching my first workshop on Saturday. "Online Safety for Small Shops." You\'re co-hosting. You don\'t get a choice.'),
  N('Your cinnamon knot comes in a bag with a new drawing: two tiny people at a laptop. One of them has a bandana. Both of them have capes.'),
  {end:'ellie'}],
 nyx:()=>[{bg:'lock'},
  L('nyx','s','You found me. Took you long enough. Was it the tension wrench, or the gaping vulnerability called my heart?'),
  L('nyx','b','Don\'t answer that. I hate that I said it.'),
  N('She hands you a clear padlock. Engraved on the shackle: "{h}". Inside, every pin is set for a single key. She gives you the key.'),
  N(KRES()),
  L('nyx','h','Next month I\'ve got a job testing a bank. Properly scoped this time. I need a partner. Paperwork included.'),
  L('nyx','b','Authorised access. To the bank. And... me. Ugh. Fine. Yes.'),
  {end:'nyx'}],
 ada:()=>[{bg:'ctf'},
  L('ada','b','You came to the corner! I ran a script to calculate the odds you would. It said 31%. I\'m so glad the script was wrong.'),
  N('She shows you her phone: the verification script has been run forty thousand times tonight. '+KRES()),
  L('ada','h','Also, my mum wants to meet you. She says anyone who stands next to me while I talk is "a keeper". She also wants you to fix her shop\'s email.'),
  L('ada','b','Will you be my CTF team? Permanently? Just the two of us? Forever? Too much? Too much.'),
  ME('sudo yes.'),
  L('ada','o','You can\'t just say sudo yes. That\'s so—'),
  L('ada','b','...Okay. That was perfect.'),
  {end:'ada'}],
 priya:()=>[{bg:'roof'},
  L('priya','n','You came to the device-free table. Phone?'),
  ME('Left in the room. Off. In the minibar. In a Faraday pouch. Inside the minibar.'),
  L('priya','b','...You have no idea what that does to me.'),
  N(KRES()+' Priya\'s name is on none of it. That\'s exactly how she wanted it.'),
  N('For three hours, nobody can track either of you. You talk about everything. None of it will ever be posted anywhere.'),
  L('priya','h','Same time next year. I\'ll send you the details. On paper. By hand.'),
  {end:'priya'}],
 juno:()=>[{bg:'stream'},
  L('juno','h','{h}! I turned the stream off. First time all con. It\'s just us.'),
  L('juno','b','Chat keeps asking who taught me. I said "someone real".'),
  N('Her new channel banner reads "learning in public". Her first video, "I said no to £20,000, here\'s why", has two million views. '+KRES()),
  L('juno','b','I saved it. For you. Like you said. I love you, {h}. Not chat. You.'),
  {end:'juno'}],
 kit:()=>[{bg:'roof'},
  N('The fire escape. Kit\'s Neon Ronin armour sits in a neat pile beside her. She\'s in a hoodie, knees up, watching the city.'),
  L('kit','b','I took it off. For you. I wanted you to have the real one.'),
  N(KRES()+' Kit\'s badge, the little key-shaped one, is still glowing in your pocket.'),
  L('kit','h','Next con, we\'re doing a pair cosplay. Neon Ronin and Byte. I\'ve already started the cape. I started it on Day 2.'),
  N('You press the badge twice. It lights up: BYTE. She laughs and leans into your shoulder.'),
  {end:'kit'}],
 rin:()=>[{bg:'chill'},
  L('rin','b','You found the nest. You\'re allowed in the nest. Very exclusive. You and one gummy worm.'),
  N(KRES()+' Rin starts a new job on Monday, at a company that publishes its audits in full.'),
  L('rin','n','Patch notes. Rin 2.0. New features: a spine. A better employer. A...'),
  L('rin','b','...a partner? Is that okay? Is that too much for one release?'),
  ME('Ship it.'),
  {end:'rin'}],
 bea:()=>[{bg:'bar'},
  N('After closing. The bar is dark except for one light. Bea\'s apron is off. Two Raccoons are waiting.'),
  L('bea','h','Look who it is. The one who talks to bartenders like people.'),
  N(KRES()+' Bea watched it on the bar TV and charged everyone in a Lumen lanyard double.'),
  L('bea','b','I sold my drawings at the con. All of them. Fifty quid each. Hackers love being drawn as animals. Who knew?'),
  L('bea','b','Monday, you\'re not a guest any more. So. Dinner? I\'ll draw you as something better than a raccoon.'),
  ME('I like being the raccoon.'),
  L('bea','h','Yeah. Me too.'),
  {end:'bea'}],
 mira:()=>[{bg:'dawn'},
  N('The roof. You stay until the sky goes from black to blue to pink.'),
  L('mira','n','Next year, I run it as a workshop. Opt-in. People give me their handle, I show them what I can find, and then I help them clean it up.'),
  N(KRES()+' Mira\'s old contact graph spec is part of the regulator\'s file now, her name on it, on purpose.'),
  L('mira','b','I\'ll need a co-host. Someone who leaks very little and asks good questions.'),
  N('The sun comes up over the city. For the first time in three years, she isn\'t watching any of it. Just you.'),
  {end:'mira'}],
 friends:()=>[{bg:'party'},
  N('You don\'t pick one person. You stay with all of them, at a sticky table, until the bar runs out of Club-Mate.'),
  N(KRES()),
  ()=>{const m=ROM.filter(g=>S.f['met_'+g]).map(g=>CH[g].name);return m.length?[N('By 3 AM there\'s a group chat. '+m.join(', ')+' and you. It\'s called "responsible disclosure". It has a strict no-screenshots rule. Priya enforces it.')]:[]},
  N('You came to the con as {h}, a legend online. You leave as yourself, with friends who know the difference.'),
  {end:'friends'}],
 doxxed:()=>[{bg:'void'},{hide:1},
  W('CONTESTANT: {H}.'),
  W('EVERYTHING YOU POSTED. EVERYTHING YOU CLICKED. EVERYTHING YOU SAID ON STREAM.'),
  N('Your name. Your face. Your hotel room. Your flat above the bakery. On every screen in the building.'),
  {bg:'con'},L('davex','d','Bro. Welcome to the club. The pizzas are pineapple.'),
  N('You spend the rest of the con changing passwords in a stairwell. Your Exposure hit 100.'),
  {end:'doxxed'}],
 larp:()=>[{bg:'keynote'},
  L('victor','h','"Trust me, I\'m a hacker." Ladies and gentlemen, the opposition.'),
  N('Three thousand people laugh. Not with you. The stream clips it. It does numbers. The wrong kind.'),
  N('Lumen\'s PR team turns it into a meme by dinner. SafeSphere 2 launches Monday, on schedule, with confetti.'),
  N('You had the evidence. You just couldn\'t stop performing long enough to say it.'),
  {end:'larp'}],
 alone:()=>[{bg:'hotel'},{hide:1},
  N('You go back to Room 1337 alone. Dave is in the corridor with a pizza.'),
  L('davex','d','Rough con, bro?'),
  N('You split the pizza. It\'s pineapple. Neither of you mentions it.'),
  N('Nobody waited for you tonight. Next time, spend more time with people than with your stats.'),
  {end:'alone'}]
};
function finishEnding(k){
 S.ending=k;S.inWorld=0;LS.set('opsec3_save','');
 const seen=endsSeen();if(!seen.includes(k)){seen.push(k);LS.set('opsec2_endings',JSON.stringify(seen))}
 const good=ROM.includes(k);
 ov(`<div class="card" style="text-align:center">${good?`<div style="width:150px;height:170px;margin:0 auto">${head(k,'h')}</div>`:''}<p class="small">${good||k==='friends'?'ENDING UNLOCKED':'BAD ENDING'}</p><h3 style="font-size:40px">${ENDINFO[k]}</h3><p>${endsSeen().length}/${Object.keys(ENDINFO).length} endings found.</p><p class="small">Skill ${S.skill} · Clout ${S.clout} · Exposure ${S.exp}${S.kres?' · Keynote: '+{full:'total victory',partial:'a strong hit',fail:'a slow burn'}[S.kres]:''}</p><div class="row" style="justify-content:center"><button class="btn pri" id="eT">Back to title</button></div></div>`);
 $('eT').onclick=()=>{closeOv();titleScreen()};
}

/* ============ TITLE ============ */
function titleScreen(){
 show('title');$('tmain').style.display='flex';$('tname').style.display='none';
 $('heads').innerHTML=['ellie','nyx','ada','priya','juno','kitc','rin','bea','mira'].map((g,i)=>`<span>${head(g,['h','s','h','n','h','s','b','s','n'][i])}</span>`).join('');
 const sv=LS.get('opsec3_save');$('bCont').disabled=!sv;$('bLoad').disabled=![ 'auto',1,2,3,4,5].some(k=>readSlot(k));
}
$('bNew').onclick=()=>{$('tmain').style.display='none';$('tname').style.display='flex';$('hIn').focus()};
$('bBack').onclick=titleScreen;
$('bGo').onclick=()=>{
 const h=($('hIn').value||'').trim().replace(/[<>&"]/g,'')||'n00b';
 S=fresh(h);S.resume='ch0';startCh0();
};
function startCh0(){
 // grab the mouse inside the "Begin" click, before the (slow) first build eats the browser's gesture window
 if(!WD.touch&&window.THREE)tryLock();
 initWorld();
 if(!G.ok){run(CH0ALL(),()=>{S.ch=1;S.resume='open';save();run(OPEN[1](),hub)});return}
 S.inWorld=1;teleportArea('flat');
 run(CH0(),()=>{S.f.ch0intro=1;save();run([{unlock:'move'}],hub)});
}
$('hIn').addEventListener('keydown',e=>{if(e.key==='Enter')$('bGo').click()});
$('bCont').onclick=()=>{const s=readSlot('auto');if(s&&s.h)resumeGame(s)};
$('bLoad').onclick=()=>savesScreen();
$('bEnds').onclick=()=>{const s=endsSeen();ov(`<div class="card"><h3>Endings ${s.length}/${Object.keys(ENDINFO).length}</h3><div class="endlist">${Object.keys(ENDINFO).map(k=>`<div class="${s.includes(k)?'':'no'}">${s.includes(k)?ENDINFO[k]:'???'}</div>`).join('')}</div><p class="small">Nine romances, one for friendship, three ways to fail. Every route can be finished in a single run.</p><div class="row"><button class="btn pri" id="ex">Close</button></div></div>`);$('ex').onclick=closeOv};
