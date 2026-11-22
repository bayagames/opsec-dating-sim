/* ============ SIX SCENES A ROUTE ============
   Every route is six scenes now: meeting (0), four hangouts (1-4) and the last one (5). The scene files were
   written as eight shorter scenes plus a crossover (SC[g+'_x']); here they're joined, in order, into six longer
   ones, so nothing written is lost. Scene 4 is always the crossover: time with someone else from the cast. */
const RMAP={_:[[0],[1,2],[3,4],[5,6],['x'],[7]],ellie:[[0],[1],[2],[3,4],[5,6,'x'],[7]]};
/* closeness needed for each scene, and the earliest day (the scene's own story timing wins if it's later) */
const NEWREQ={_:[{a:0,d:1},{a:5,d:1},{a:15,d:2},{a:26,d:3},{a:38,d:4},{a:50,d:5}],ellie:[{a:0,d:1},{a:0,d:1},{a:0,d:3},{a:20,d:3},{a:38,d:4},{a:54,d:6}]};
const XSUM={ellie:'Ellie and Bea swapped notebooks at the bar and nearly opened a business together.',nyx:'Nyx and Priya, red team and blue team, agreed to work together. Once.',ada:'Ada and Yuki raced each other to a dead draw and found the same bug.',priya:'Priya and Sunny followed the beacon flood through the ceiling to a box called LANTERN-01.',juno:'Juno\'s ex walked onto her stream. You turned the camera off.',kit:'Tilly built a camera into Kit\'s helmet.',rin:'Rin found his source from three years ago, on the roof. It was Mira.',bea:'Bea told Vesper she knows exactly what she is.',mira:'Fern has been feeding Mira toast for three weeks, and knows a way off the roof.',saoirse:'Saoirse and Delphine finally talked. Off the record. For an hour.',sunny:'Sunny and Tilly worked out how to roll every badge back at once.',tilly:'Ada found the patch someone slipped into Tilly\'s badges before the con.',petra:'Petra drove the uplink van onto the car park roof on its rims.',astrid:'Astrid and Wren watched Jupiter, and the thirteenth floor, from the pool.',yuki:'Yuki played live on Juno\'s stream, looking at you, not the chat.',vesper:'Vesper and Delphine recognised each other: two women saying other people\'s words.',delphine:'Delphine said sorry to Ellie, to her face.',noor:'Noor and Saoirse stopped arguing long enough to plan the story and the court order together.',fern:'You, Fern and Wren followed the trolley with no towels to Suite 1313.',wren:'Wren asked Bea what her drink was. Nobody had ever asked.',pia:'Pia told Juno no. Some songs aren\'t content.'};
/* old scene count -> the same progress in six scenes (for conditions written against the old numbering) */
const OLDN={_:[0,1,2,2,3,3,4,4,6],ellie:[0,1,2,3,4,4,5,5,6]};
(function(){
 for(const g of ROM){const R=ROUTES[g];if(!R)continue;const M=RMAP[g]||RMAP._,NR=NEWREQ[g]||NEWREQ._,old={},oreq=R.req,osum=R.sum||[];
  for(let i=0;i<8;i++){old[i]=SC[g+i];delete SC[g+i]}old.x=SC[g+'_x'];
  const req=[],sum=[];
  M.forEach((parts,ni)=>{const txt=parts.map(p=>old[p]).filter(t=>t!==undefined);
   if(txt.length){let t=txt.join('\n~ Later.\n');t=t.replace(/\[adv (\w+) (\d)\]/g,(m,w,k)=>'[adv '+w+' '+(OLDN[w]||OLDN._)[+k]+']');SC[g+ni]=t}
   const os=parts.filter(p=>p!=='x').map(p=>oreq[p]||{}),r={a:NR[ni].a,d:Math.max(NR[ni].d,...os.map(o=>o.d||1))};
   for(const o of os){if(o.c){const c0=r.c;r.c=c0?(()=>c0()&&o.c()):o.c;r.y=o.y||r.y}if(o.sk>1)r.sk=Math.max(r.sk||0,o.sk-1);if(o.cl>1)r.cl=Math.max(r.cl||0,o.cl-1)}
   req.push(r);sum.push(parts.map(p=>p==='x'?(XSUM[g]||''):(osum[p]||'')).filter(Boolean).join(' '))});
  R.n=6;R.req=req;R.sum=sum;R.aff=req.map(r=>r.a)}
 // texts written against old scene numbers
 {const all=Object.entries(TEXTQ);for(const[k]of all)delete TEXTQ[k];
  for(const[k,v]of all){const m=k.match(/^([a-z]+)_(\d)$/);let nk=k;if(m&&ROUTES[m[1]])nk=m[1]+'_'+((OLDN[m[1]]||OLDN._)[+m[2]+1]-1);if(TEXTQ[nk])nk+='b';TEXTQ[nk]=v}}
})();

/* ============ DATING: how you spend time with someone matters ============
   Before every hangout you choose how to spend it. Everyone has something they love and something they don't;
   you find out by trying (or by talking shop, which drops hints). Closeness comes slower the closer you get,
   there's only so much anyone can take in one day, and people you're dating notice when you vanish. */
const AFFCAP=16;
const TONES={quiet:'Somewhere quiet, just the two of you',fun:'Something fun',bold:'Something a bit reckless',work:'Work the case together'};
/* [loves, dislikes, what they say when you get it right, when you get it wrong, a hint for talk shop] */
const TASTE={
 ellie:['quiet','bold','This. Just this. A bench and you and nothing on fire.','Ooh. Okay. That\'s... a lot. Can we do something smaller next time?','She lights up whenever things slow down.'],
 nyx:['bold','fun','Now you\'re talking. Somewhere with a lock on it.','A party? With people? You\'re lucky I like you.','She only relaxes when something\'s a bit illegal.'],
 ada:['work','bold','A problem! For us! To solve! Best date ever, I mean, best... thing.','That\'s, um. I\'m going to need a minute. And a whiteboard.','She\'s happiest when there\'s a puzzle on the table.'],
 priya:['quiet','bold','Phones off. Door shut. Perfect threat model.','Reckless is a word I put in incident reports.','Anywhere without cameras is her idea of luxury.'],
 juno:['fun','quiet','Yes! Chaos! I\'m in!','Quiet. Right. I\'ll just... sit. In the quiet. Silently.','She hates silence. Silence is dead air.'],
 kit:['work','fun','Build something? With me? Get the glue gun.','Crowds and noise. My armour isn\'t that thick.','Give her something to make and she\'ll talk for hours.'],
 rin:['fun','bold','Snacks and nonsense. You know me too well.','Ah. Danger. Yay. My favourite. I\'m lying.','He relaxes when there\'s sugar and silliness.'],
 bea:['quiet','work','Somewhere nobody needs a drink from me. Bliss.','Work. On my night off. Of course.','She serves people all day. Give her quiet.'],
 mira:['bold','fun','Finally. Something that feels like breathing.','Fun. Right. I\'ve heard of it.','She trusts people who take risks with her.'],
 saoirse:['work','quiet','Notes out. Tell me everything.','Quiet. Lovely. Now I\'m thinking about my story.','The story is her love language.'],
 sunny:['quiet','work','Somewhere the radio can\'t reach. Please.','I literally just came off shift.','She never gets to switch off. Let her.'],
 tilly:['work','bold','Can I bring my soldering iron? I\'m bringing it.','Risky? Me? I\'ll... try. I\'ll hold your sleeve.','Making things is how she says hello.'],
 petra:['bold','quiet','Floor it.','Sitting still. My least favourite activity.','She\'s happiest doing something slightly dangerous at speed.'],
 astrid:['quiet','fun','Somewhere dark, with sky. Perfect.','Loud. Okay. I\'ll be at the edge.','Quiet and a view of the sky is all she wants.'],
 yuki:['fun','work','Games! Snacks! Yes!','Homework. On a date. Oh no.','She plays to relax. Let her play.'],
 vesper:['bold','work','Darling. Danger. You do know how to treat a girl.','Work. How very... like work.','She\'s bored by anything safe.'],
 delphine:['quiet','fun','No microphones. No brief. Thank god.','A party. Wonderful. I\'ve been to four hundred.','She\'s exhausted by performing. Give her quiet.'],
 noor:['work','bold','A case? Together? I\'ll get my pen.','Reckless. I\'ll be drafting your bail application.','She thinks best with a problem in front of her.'],
 fern:['quiet','bold','The garden at night. Yes.','That sounds like it involves a lot of people and no plants.','Somewhere green and quiet is her whole heart.'],
 wren:['fun','work','Yes! Let\'s go! Can I record it? I won\'t record it.','I do enough investigating on the podcast.','She wants to stop watching and start doing.'],
 pia:['fun','work','Something silly! Yes! I never get silly!','Work. On a Thursday. I play on Thursdays.','She\'s been sad for a year. She wants to laugh.']};
function tasteOf(g,t){const T=TASTE[g];return !T?0:T[0]===t?1:T[1]===t?-1:0}
function tasteKnown(g,t){return !!(S.taste&&S.taste[g]&&S.taste[g][t]!==undefined)}
/* the approach menu: one tap before every hangout */
function approachMenu(g,go){const T=TASTE[g]||[];S.taste=S.taste||{};
 return[{choice:Object.keys(TONES).map(t=>({t:TONES[t],hint:tasteKnown(g,t)?(S.taste[g][t]>0?'They loved this last time':S.taste[g][t]<0?'They didn\'t enjoy this':'It was fine'):'',then:()=>{const v=tasteOf(g,t);(S.taste[g]=S.taste[g]||{})[t]=v;S.amult=S.amult||{};S.amult[g]=v>0?1.6:v<0?.45:1;
  if(v>0)ach('tastes');const ln=v>0?T[2]:v<0?T[3]:null;return[...(ln?[L(typeof worldLook==='function'?worldLook(g):g,v>0?'h':'d',ln)]:[]),...go(),()=>{if(S.amult)delete S.amult[g];return[]}]}}))}]}
/* how much a moment can move someone: less the closer you are, and only so much a day */
function affGain(k,g){if(g<=0)return g;g=g*((S.amult&&S.amult[k])||1)*Math.max(.35,1-S.aff[k]/150);
 const dk=S.day+':'+k;S.affd=S.affd||{};const room=Math.max(0,AFFCAP-(S.affd[dk]||0));g=Math.min(Math.round(g),room);S.affd[dk]=(S.affd[dk]||0)+g;return g}
const warmToday=k=>S&&S.affd?S.affd[S.day+':'+k]||0:0;
function seen(g){if(!S)return;S.seenD=S.seenD||{};S.seenD[g]=S.day}
/* people you're dating notice if you disappear for a whole day */
function neglectCheck(d){if(!S||d<2)return;S.seenD=S.seenD||{};for(const g of ROM){if(!dating(g)||loved(g))continue;const last=S.seenD[g]||0;if(last<d-1){S.aff[g]=clamp(S.aff[g]-5,0,100);S.msgs.push({f:g,t:pick(['Everything okay? Haven\'t seen you.','You\'ve gone quiet. Busy saving the world?','Missed you yesterday. Just saying.','Did I do something?']),c:d,s:0,r:0});if(S.unl.aff)toast(CH[g].name+' missed you','var(--dim)')}}}
