/* ============ MINIGAMES ============ */
const QUIZ=[
 {q:'What does a VPN actually hide?',r:'Your traffic from the local network and ISP. Sites you log into still know it\'s you.',l:'Everything. I\'m literally a ghost online.',c:'It makes my Wi-Fi faster.'},
 {q:'What usually runs on port 22?',r:'SSH, for remote shell access.',l:'The backdoor port. Every system has one.',c:'Port 22? Like on a cruise ship?'},
 {q:'Strongest common form of two-factor login?',r:'A hardware security key, because it checks the real site\'s domain.',l:'I don\'t need 2FA. Nobody\'s getting my password.',c:'SMS codes. Texts are unhackable.'},
 {q:'What is a cryptographic hash?',r:'A one-way function: same input, same digest, no practical way back.',l:'Encryption, but more hardcore.',c:'The thing you have with eggs.'},
 {q:'What does incognito mode protect you from?',r:'Other people on the same device seeing your local history.',l:'The FBI. Obviously.',c:'Viruses.'},
 {q:'Best fix for SQL injection?',r:'Parameterized queries, so input is never treated as code.',l:'Firewall it harder.',c:'Ask users nicely not to type apostrophes.'},
 {q:'Best password strategy?',r:'Long, unique passwords from a password manager, one per site.',l:'P@$$w0rd! with a dollar sign. Unbreakable.',c:'My dog\'s name. She\'s very private.'},
 {q:'The padlock in the address bar means...',r:'The connection to that domain is encrypted. Not that the site is honest.',l:'The site has been hacker-approved.',c:'The website is closed.'},
 {q:'What is EXIF data in a photo?',r:'Metadata like camera, time and sometimes exact GPS location.',l:'A secret hacker layer only I can see.',c:'A filter.'},
 {q:'What is a zero-day?',r:'A flaw the vendor doesn\'t know about yet, so no patch exists.',l:'A hack so fast it takes zero days.',c:'Day zero of a diet.'},
 {q:'Principle of least privilege means...',r:'Give each user or process only the access it needs.',l:'Root on everything, always. Trust me.',c:'Being humble.'},
 {q:'What is Tor?',r:'Onion routing: traffic hops through relays so no single relay sees both ends.',l:'The dark web browser for elite hackers only.',c:'A Norse god with a hammer.'},
 {q:'chmod 777 on a server file means...',r:'Everyone can read, write and execute it. Usually a bad idea.',l:'Maximum hacker power level.',c:'Lucky sevens!'},
 {q:'What does DNS do?',r:'Turns names like example.com into IP addresses.',l:'It\'s the Matrix code of the internet.',c:'Do Not Spam.'},
 {q:'You find a USB stick in the car park. You...',r:'Don\'t plug it in. Hand it to security.',l:'Plug it in. I can handle whatever\'s on it.',c:'Free storage!'},
 {q:'What\'s a threat model?',r:'Working out who you\'re protecting what from, and how much effort it\'s worth.',l:'A list of people who are scared of me.',c:'A runway show for villains.'},
 {q:'Public-key cryptography: which key do you share?',r:'The public key. The private key never leaves you.',l:'Both. I\'m generous.',c:'Neither. I keep keys under the mat.'},
 {q:'What is social engineering?',r:'Manipulating people, not machines, into giving up access or information.',l:'Hacking people\'s brains with code.',c:'Networking at parties.'},
 {q:'Why install software updates?',r:'Patches close known holes that attackers are actively using.',l:'Real hackers never update. Updates are a psyop.',c:'New emojis.'},
 {q:'"End-to-end encrypted" means...',r:'Only the two endpoints can read messages, not the server in the middle.',l:'Encrypted from my end to the government\'s end.',c:'It ends.'},
 {q:'What\'s an "evil twin" Wi-Fi network?',r:'A fake access point named like a real one, so people connect to it instead.',l:'Wi-Fi with a goatee.',c:'When your router has a sibling.'},
 {q:'An app asks for your contacts "to find friends". The risk?',r:'It may upload everyone\'s numbers, people who never agreed to share them.',l:'None. I have no friends to leak.',c:'Your friends might find you.'},
 {q:'What is a data broker?',r:'A company that collects and sells personal data, often without you knowing.',l:'A hacker who trades secrets in the dark web bazaar.',c:'A stockbroker for spreadsheets.'},
 {q:'What does "responsible disclosure" mean?',r:'Telling the vendor about a flaw privately and giving them time to fix it before going public.',l:'Posting the exploit on Twitter, responsibly.',c:'Disclosing your feelings responsibly.'},
 {q:'Why can a "free" app be expensive?',r:'If you\'re not paying, your data often is the product.',l:'Because I crack all my apps anyway.',c:'In-app purchases for hats.'},
 {q:'What is a CVE?',r:'A public ID number for a known security vulnerability.',l:'Cyber Villain Extraordinaire. That\'s my title.',c:'A CV, but European.'},
 {q:'Why are password reuse and data breaches a nasty combo?',r:'Leaked passwords get tried on other sites. One breach unlocks many accounts.',l:'They aren\'t. Breaches only happen to noobs.',c:'Because remembering is hard.'},
 {q:'What is a firewall?',r:'A filter that allows or blocks network traffic based on rules.',l:'A literal wall of fire I deploy at will.',c:'Something you shouldn\'t lean on.'}
];
const PREF={ellie:{r:7,l:-4,c:4},nyx:{r:8,l:-6,c:-2},ada:{r:8,l:-3,c:1},priya:{r:6,l:-5,c:-1},juno:{r:5,l:6,c:3},kit:{r:6,l:2,c:4},rin:{r:8,l:-5,c:3},bea:{r:5,l:-3,c:6},mira:{r:7,l:-5,c:2}};
const REACT={
 ellie:{r:['Oh! That actually makes sense when you say it like that.','See, this is the version of you I like. The one who explains things.'],l:['...You\'re doing the voice again. The hacker voice.','Mm. That sounded like a film trailer.'],c:['Ha! Okay, you\'re ridiculous.','I\'m going to steal that joke for the bakery chalkboard.']},
 nyx:{r:['...Correct. Don\'t let it go to your head.','Okay. You\'ve read things. Noted.','Huh. Not a cop, then.'],l:['That is the most confident wrong thing I\'ve heard today.','I\'m writing that down for my larp bingo card.'],c:['...Was that a joke? Tell me that was a joke.','I respect the commitment to being wrong.']},
 ada:{r:['YES. Exactly. Sorry. Yes.','You get it! Do you know how rare that is?','Correct, and you didn\'t even say "btw".'],l:['Hmm. Hm. Hmmmm. No.','That\'s... technically a sentence.'],c:['Ha! Okay, that one was kind of funny.','I laughed. I\'m annoyed that I laughed.']},
 priya:{r:['Correct. I might trust you with a USB-C cable.','Good. That answer lowered my anxiety by 4%.'],l:['That attitude is how incident reports get written.','No. Absolutely not. I felt that in my SIEM.'],c:['...Please never touch a server.','I\'m adding you to a watchlist. A gentle one.']},
 juno:{r:['Ooh, smart! Chat says "W".','That\'s actually useful? Wait, let me write that down.'],l:['CHAT IS GOING CRAZY. Say more hacker words!','That sounded SO cool. Is it true? Doesn\'t matter!'],c:['Hahaha chat is spamming LMAO. Great content.','You\'re so random! I love it.']},
 kit:{r:['Oh, that\'s clean. Like a good solder joint.','Okay, you\'re smart. That\'s... noted. Stored. Saved.'],l:['That sounded like a line from Static Bloom. I liked it. Is it real?','Very dramatic. Ten out of ten for delivery.'],c:['Pfft. Okay that was good.','You\'re weird. Good weird.']},
 rin:{r:['Correct. Would you like a gummy worm? That\'s my highest honour.','Mm. Precise. You get a sticker.'],l:['I\'ve reverse-engineered malware with more humility than that.','That\'s a bold claim with zero evidence. Like a sales deck.'],c:['Hehe. Okay. That was cute.','Wrong, but funny. I\'ll allow it.']},
 bea:{r:['Look at you, making sense at a bar.','Huh. Okay, that I actually understood.'],l:['Mate, I serve fifty of you a night. Fifty.','That\'s what the bloke in the sunglasses said. He was wrong too.'],c:['Ha! Right, that one\'s going on the specials board.','You\'re an idiot. A funny idiot.']},
 mira:{r:['Precise. I like precise.','Correct. And you said it without wanting applause.'],l:['Bravado is just metadata about insecurity.','Loud. Loud people are easy to find.'],c:['Charming. Wrong, but charming.','A joke as deflection. Noted.']}
};
const GAMES={};
const headX=(who,g)=>g>=6?'h':g>0?'b':g<-3?'a':'s';
GAMES.quiz=(st,done)=>{
 const who=st.who,n=st.n||3;const qs=shuffle(QUIZ).slice(0,n);let i=0,sum=0;
 const step=()=>{
  if(i>=qs.length){
   ov(`<div class="card"><h3>Conversation over</h3><p>${CH[who].name} ${sum>14?'is clearly into it.':sum>0?'seems to have enjoyed that.':'is looking at the exit.'}</p><div class="row"><button class="btn pri" id="qd">Continue</button></div></div>`);
   $('qd').onclick=()=>{closeOv();done()};return;
  }
  const q=qs[i];const opts=shuffle([['r',q.r],['l',q.l],['c',q.c]]);
  ov(`<div class="card"><div class="mhead"><div class="hd">${head(who,'n')}</div><div><h3>Talk shop · ${i+1}/${n}</h3><span class="small">${S.unl.clout?'A real answer builds Skill. A confident bluff builds Clout. ':''}${CH[who].name} has opinions.</span></div></div><div class="q">${CH[who].name}: "${esc(q.q)}"</div><div class="ans">${opts.map(o=>`<button class="ch" data-k="${o[0]}">${esc(o[1])}</button>`).join('')}</div><div id="rx"></div></div>`);
  $('ov').querySelectorAll('.ans .ch').forEach(b=>b.onclick=()=>{
   const k=b.dataset.k;const g=PREF[who][k];sum+=g;
   const e={[who]:g};if(k==='r')e.skill=2;if(k==='l')e.clout=4;if(k==='c')e.clout=-1;fx(e);
   $('ov').querySelector('.mhead .hd').innerHTML=head(who,headX(who,g));
   $('ov').querySelectorAll('.ans .ch').forEach(x=>{x.disabled=true;if(x.dataset.k==='r')x.style.borderColor='var(--mint)';if(x===b&&k!=='r')x.style.borderColor='var(--coral)'});
   $('rx').innerHTML=`<div class="react">${esc(pick(REACT[who][k]))}</div><div class="row"><button class="btn pri" id="qn">Next</button></div>`;
   $('qn').onclick=()=>{i++;step()};
  });
 };step();
};
const PHISH=[
 {f:'security@paypa1-support.com',m:'Your account is LOCKED. Verify your identity within 1 hour: http://paypa1-verify.co/login',p:1,y:'"paypa1" with a one, a look-alike domain and a fake deadline.'},
 {f:'CTRL+ALT+CON Registration <reg@ctrlaltcon.org>',m:'Reminder: the closing keynote is Sunday 4pm in Hall A. No action needed.',p:0,y:'No link, no urgency, nothing asked of you. Legit.'},
 {f:'Unknown number',m:'hey its ur mum, new phone, can u send me £200 for a bill?? dont call im in a meeting',p:1,y:'"New number, send money, don\'t call" is the most common text scam there is.'},
 {f:'IT Helpdesk <it-help@brindle-helpdesk.net>',m:'Your password expires today. Keep your current password here: bit.ly/keep-pw',p:1,y:'A shortened link to "keep" a password, from a look-alike domain.'},
 {f:'GitHub <noreply@github.com>',m:'A new SSH key was added to your account. If this wasn\'t you, review your keys in Settings.',p:0,y:'Plausible notice that sends you to Settings, not a link. Check by logging in yourself.'},
 {f:'Hotel Front Desk (note under door)',m:'For your security, please call ext. 0 and read us your card number to confirm your booking.',p:1,y:'Hotels don\'t ask for your card number like that. A known hotel-room scam.'},
 {f:'CTF Bot <bot@ctf.ctrlaltcon.org>',m:'Your team solved "baby-rev". +100 points. Scoreboard updated.',p:0,y:'A notification. Asks for nothing.'},
 {f:'Free Crypto Airdrop',m:'Congrats! You won 2 ETH for attending. Connect your wallet and sign to claim!',p:1,y:'Nobody gives you free crypto for "attending". Signing would drain your wallet.'},
 {f:'Delivery <track@parcel-redeliver.info>',m:'We missed you! Pay a £1.99 redelivery fee: parcel-redeliver.info/pay',p:1,y:'Tiny fee, look-alike domain. Built to steal card details.'},
 {f:'Priya (Blue Team Village)',m:'Talk at 3 moved to room B. Bring no Bluetooth.',p:0,y:'In character, asks nothing, no link. Legit.'},
 {f:'"CEO" <ceo.office.urgent@gmail.com>',m:'Are you available? I need you to buy 5 gift cards for a client. Keep this between us.',p:1,y:'Gift cards, secrecy, a free email address: CEO fraud.'},
 {f:'Your bank app (push notification)',m:'New sign-in from a new device. Open the app to review.',p:0,y:'Tells you to open the app yourself. That\'s the safe pattern.'},
 {f:'Instagram Copyright Team <meta-copyright@ig-appeals.help>',m:'Your account will be deleted in 24h for copyright violation. Appeal now: ig-appeals.help/form',p:1,y:'Fake "copyright" panic with a look-alike domain. This is the exact trick that got Ellie.'},
 {f:'Lumen Growth Partners',m:'We noticed your account was compromised. We can restore it for a one-off £500 "recovery fee". Reply YES.',p:1,y:'Real platforms never charge for recovery. Whoever sent this knew you\'d been hacked. Suspicious timing.'},
 {f:'SafeSphere <hello@safesphere.app>',m:'Your free CTRL+ALT+CON privacy shield is ready! Tap to install and grant all permissions.',p:1,y:'"Grant all permissions" is never what a privacy app should ask. Remember this one.'},
 {f:'Ellie',m:'Did you leave your scarf at the bakery?? It\'s the stripy one. I\'ll keep it by the till.',p:0,y:'A friend, no link, no request. Legit (and you did leave your scarf).'}
];
GAMES.phish=(st,done)=>{
 const pool=st.pool?PHISH.filter((p,i)=>st.pool.includes(i)):PHISH;
 const items=st.pool?pool:shuffle(pool).slice(0,5);const n=items.length;let i=0,ok=0;
 const step=()=>{
  if(i>=n){
   const e={skill:ok>=n-1?4:1,cred:ok*4};if(ok===n&&!st.noexp)e.exp=-8;if(st.who)e[st.who]=ok*2;
   ov(`<div class="card"><h3>Inbox triaged: ${ok}/${n}</h3><p>${ok===n?'Flawless. Your inbox fears you.':ok>=n-2?'Decent. A couple got past you.':'Your inbox just became a botnet.'}</p><div class="row"><button class="btn pri" id="pd">Continue</button></div></div>`);
   $('pd').onclick=()=>{closeOv();fx(e);if(st.res)st.res(ok,n);done()};return;
  }
  const m=items[i];
  ov(`<div class="card"><h3>${esc(st.title||'Phish or legit?')} · ${i+1}/${n}</h3><span class="small">Look at the sender, the link and what it wants from you.${S.unl.exp?' Trusting a phish adds Exposure.':''}</span><div class="msg"><div class="from">From: ${esc(m.f)}</div><div>${esc(m.m)}</div></div><div class="row"><button class="btn" id="pP" style="border-color:var(--coral)">Phish</button><button class="btn" id="pL" style="border-color:var(--mint)">Legit</button></div><div id="py"></div></div>`);
  const ans=g=>{
   const right=(g===1)===(m.p===1);if(right)ok++;else if(m.p&&!st.noexp)fx({exp:7,phish:1});
   $('pP').disabled=$('pL').disabled=true;
   $('py').innerHTML=`<div class="react" style="border-color:${right?'var(--mint)':'var(--coral)'}"><b>${right?'Correct.':'Nope.'}</b> ${esc(m.y)}</div><div class="row"><button class="btn pri" id="pn">Next</button></div>`;
   $('pn').onclick=()=>{i++;step()};
  };
  $('pP').onclick=()=>ans(1);$('pL').onclick=()=>ans(0);
 };step();
};
const PIPE=[
 {g:'Find every line containing "flag" in log.txt',a:['grep','flag','log.txt'],d:['rm','-rf']},
 {g:'Count the lines in access.log',a:['wc','-l','access.log'],d:['cat','sudo']},
 {g:'List all files, hidden ones too, in long format',a:['ls','-la'],d:['cd','-h']},
 {g:'Show the last 20 lines of auth.log',a:['tail','-n','20','auth.log'],d:['head','-f']},
 {g:'Decode the base64 in secret.txt',a:['base64','-d','secret.txt'],d:['-e','md5sum']},
 {g:'Make script.sh executable for you only',a:['chmod','u+x','script.sh'],d:['777','chown']},
 {g:'Log into the CTF box as user ada',a:['ssh','ada@ctf.local'],d:['telnet','ftp']},
 {g:'Unique IPs from access.log, sorted',a:['cut','-d\' \'','-f1','access.log','|','sort','|','uniq'],d:['grep','rev']},
 {g:'Search all files here for "password", recursively',a:['grep','-r','password','.'],d:['find','-v']},
 {g:'Show which process is listening on port 8080',a:['ss','-ltnp','|','grep','8080'],d:['kill','ping']},
 {g:'Fingerprint safesphere.apk so others can verify it',a:['sha256sum','safesphere.apk'],d:['md5','zip']},
 {g:'Find which domains the app contacts, from capture.txt',a:['grep','-o','lumen-cdn.io','capture.txt','|','sort','|','uniq','-c'],d:['wc','head']},
 {g:'Show photo.jpg metadata',a:['exiftool','photo.jpg'],d:['open','-gps']},
 {g:'Strip all metadata from photo.jpg',a:['exiftool','-all=','photo.jpg'],d:['rm','-gps']}
];
GAMES.pipe=(st,done)=>{
 const n=st.n||3;let pool=PIPE;if(st.only)pool=PIPE.filter((p,i)=>st.only.includes(i));else if(st.hard)pool=PIPE.filter(p=>p.a.length>=4);
 const tasks=(st.only?pool:shuffle(pool)).slice(0,n);let i=0,ok=0,tm=null;
 const T=(st.hard?26:22)+S.skill/8;
 const step=()=>{
  if(i>=tasks.length){
   const e={skill:ok*2,cred:ok*8};if(st.who)e[st.who]=ok*(st.mult||4);
   ov(`<div class="card"><h3>${ok}/${n} commands landed</h3><p>${ok===n?'Clean run. Somebody pass this person a hoodie.':ok?'Some of those worked. The rest are now someone else\'s problem.':'The terminal is judging you.'}</p><div class="row"><button class="btn pri" id="xd">Continue</button></div></div>`);
   $('xd').onclick=()=>{closeOv();fx(e);if(st.res)st.res(ok,n);done()};return;
  }
  const t=tasks[i];const toks=shuffle(t.a.concat(t.d).map((v,j)=>({v,j})));let built=[];let left=T;
  ov(`<div class="card"><h3>${esc(st.title||'Terminal')} · ${i+1}/${n}</h3><span class="small">Tap the pieces in order to build the command before time runs out.</span><div class="q">${esc(t.g)}</div><div class="timer"><i id="tb" style="width:100%"></i></div><div class="cmd" id="cmd"></div><div class="toks" id="toks">${toks.map((k,j)=>`<button class="tok" data-j="${j}">${esc(k.v)}</button>`).join('')}</div><div class="row"><button class="btn" id="xu">Undo</button><button class="btn" id="xs">Give up</button></div><div id="xr"></div></div>`);
  const draw=()=>{$('cmd').textContent=built.map(b=>toks[b].v).join(' ')};
  let over=false;
  const fin=good=>{if(over)return;over=true;clearInterval(tm);if(good)ok++;$('ov').querySelectorAll('.tok,#xu,#xs').forEach(b=>b.disabled=true);
   $('xr').innerHTML=`<div class="react" style="border-color:${good?'var(--mint)':'var(--coral)'}">${good?'Command OK.':'Expected: <span class="term" style="font-size:20px;color:var(--mint)">'+esc(t.a.join(' '))+'</span>'}</div><div class="row"><button class="btn pri" id="xn">Next</button></div>`;$('xn').onclick=()=>{i++;step()}};
  $('ov').querySelectorAll('.tok').forEach(b=>b.onclick=()=>{built.push(+b.dataset.j);b.disabled=true;draw();
   if(built.length===t.a.length)fin(built.map(x=>toks[x].v).join(' ')===t.a.join(' '))});
  $('xu').onclick=()=>{const x=built.pop();if(x!==undefined)$('ov').querySelector(`.tok[data-j="${x}"]`).disabled=false;draw()};
  $('xs').onclick=()=>fin(false);
  tm=setInterval(()=>{if(!$('tb')){clearInterval(tm);return}left-=.25;$('tb').style.width=Math.max(0,left/T*100)+'%';if(left<=0)fin(false)},250);
 };step();
};
/* timing game: solder joints or lock pins */
GAMES.timing=(st,done)=>{
 const kind=st.kind||'solder';const n=st.n||3;let i=0,ok=0,raf=null;
 const W={solder:['Solder the joint','Tap when the iron is over the pad. Too early or late and you get a cold joint.','joint'],pins:['Set the pin','Tap when the pin hits the shear line.','pin']}[kind];
 const step=()=>{
  if(i>=n){
   const e={skill:ok*2,cred:ok*5};if(st.who)e[st.who]=ok*(st.mult||4);
   ov(`<div class="card"><h3>${ok}/${n} ${W[2]}s ${kind==='pins'?'set':'soldered'}</h3><p>${ok===n?(kind==='pins'?'Click. The lock opens like it was waiting for you.':'Shiny, cone-shaped, perfect. The LEDs blaze on.'):ok?'Good enough to work. Mostly.':(kind==='pins'?'The lock remains extremely locked.':'Something smells like burnt flux.')}</p><div class="row"><button class="btn pri" id="gd">Continue</button></div></div>`);
   $('gd').onclick=()=>{closeOv();fx(e);if(st.res)st.res(ok,n);done()};return;
  }
  const zw=Math.max(9,22-i*5+(S.skill>40?4:0));const zx=10+Math.random()*(80-zw);
  ov(`<div class="card"><h3>${W[0]} · ${i+1}/${n}</h3><span class="small">${W[1]}</span><div class="track" id="trk"><div class="zone" style="left:${zx}%;width:${zw}%"></div><div class="mk" id="mk"></div></div><div class="row"><button class="btn pri" id="gt" style="flex:1">${kind==='pins'?'Set it':'Now'}</button></div><div id="gr"></div></div>`);
  let p=0,dir=1,live=true;const sp=.9+i*.35;
  const tick=()=>{if(!live||!$('mk'))return;p+=dir*sp;if(p>=100){p=100;dir=-1}if(p<=0){p=0;dir=1}$('mk').style.left=p+'%';raf=requestAnimationFrame(tick)};tick();
  const hit=()=>{if(!live)return;live=false;cancelAnimationFrame(raf);const good=p>=zx&&p<=zx+zw;if(good)ok++;$('gt').disabled=true;
   $('gr').innerHTML=`<div class="react" style="border-color:${good?'var(--mint)':'var(--coral)'}">${good?(kind==='pins'?'Click. Pin set.':'Clean joint.'):(kind==='pins'?'Overset. The pin drops.':'Cold joint.')}</div><div class="row"><button class="btn pri" id="gn">Next</button></div>`;$('gn').onclick=()=>{i++;step()}};
  $('gt').onclick=hit;$('trk').onclick=hit;
 };step();
};
/* spot the leak: code review */
const SPOT={
 onboard:{t:'safesphere/onboarding.app',l:[['showScreen("Your privacy matters to us")',0],['askPermission(CONTACTS, reason="find friends")',0],['contacts = readAllContacts()',0],['upload(contacts, "metrics.lumen-cdn.io")',1],['saveSetting("onboarded", true)',0],['trackLocation(PRECISE, every="60s", background=true)',1],['logEvent("app_open")',0]],y:'It promises privacy, then ships your whole address book to Lumen and tracks your exact location every minute, in the background.'},
 vpn:{t:'safesphere/vpn_connect.app',l:[['tunnel = openTunnel(server)',0],['for request in traffic:',0],['    copy = clone(request)',0],['    send(copy.url, "logs.lumen-cdn.io")',1],['    forward(request, tunnel)',0],['showBadge("Protected")',0],['retain(copies, days=FOREVER)',1]],y:'A "privacy VPN" that copies every site you visit to its own servers and keeps it forever.'},
 bakery:{t:'proof-bakery/signup.page',l:[['email = form.email',0],['password = form.password',0],['db.save(email, password)',1],['sendWelcomeEmail(email)',0],['redirect("/thank-you")',0]],y:'The password is saved exactly as typed. If the database leaks, every password leaks. Passwords should be stored as slow, salted hashes.'},
 sponsor:{t:'safesphere/permissions.manifest',l:[['CAMERA  · used for: scanning QR codes',0],['MICROPHONE · used for: "always-on voice tips"',1],['CALL_LOG · used for: "spam protection"',1],['NOTIFICATIONS · used for: alerts',0],['NETWORK · used for: VPN tunnel',0]],y:'An always-on microphone and your full call history have nothing to do with a privacy shield.'},
 graph:{t:'safesphere2/contact_graph.app',l:[['for person in readAllContacts():',0],['    graph.addEdge(me, person)',0],['    graph.enrich(person, broker="Lumen Data Exchange")',1],['score = predictSpending(graph)',1],['showToast("You\'re protected!")',0]],y:'SafeSphere 2 maps who you know, enriches every contact with bought data and scores them for sale. People who never installed it get profiled.'}
};
GAMES.spot=(st,done)=>{
 const keys=st.keys;let i=0,score=0,tot=0;
 const step=()=>{
  if(i>=keys.length){
   const good=score>=tot-1;const e={skill:good?5:2,cred:score*4};if(st.who)e[st.who]=good?(st.mult||8):2;
   ov(`<div class="card"><h3>Review done: ${score}/${tot}</h3><p>${good?'You found the leaks. That\'s evidence-grade reading.':'You caught some of it. The rest is still leaking.'}</p><div class="row"><button class="btn pri" id="sd">Continue</button></div></div>`);
   $('sd').onclick=()=>{closeOv();fx(e);if(st.res)st.res(score,tot);done()};return;
  }
  const sn=SPOT[keys[i]];const sel=new Set();const bad=sn.l.filter(x=>x[1]).length;tot+=bad;
  ov(`<div class="card"><h3>Spot the leak · ${i+1}/${keys.length}</h3><span class="small">Tap every line that leaks or mishandles people's data (${bad} to find), then submit.</span><div class="q term" style="font-size:20px;color:var(--butter)">${esc(sn.t)}</div><div class="code" id="code">${sn.l.map((x,j)=>`<button data-j="${j}">${esc(x[0])}</button>`).join('')}</div><div class="row"><button class="btn pri" id="ss">Submit</button></div><div id="sr"></div></div>`);
  $('code').querySelectorAll('button').forEach(b=>b.onclick=()=>{const j=+b.dataset.j;if(sel.has(j))sel.delete(j);else sel.add(j);b.classList.toggle('sel')});
  $('ss').onclick=()=>{let s=0;$('code').querySelectorAll('button').forEach(b=>{const j=+b.dataset.j;b.disabled=true;const isBad=sn.l[j][1];if(isBad&&sel.has(j)){s++;b.className='bad'}else if(isBad)b.className='miss';else if(sel.has(j)){s-=.5;b.className='sel'}});s=Math.max(0,Math.round(s));score+=s;
   $('ss').disabled=true;$('sr').innerHTML=`<div class="react">${esc(sn.y)}</div><div class="row"><button class="btn pri" id="sn">Next</button></div>`;$('sn').onclick=()=>{i++;step()}};
 };step();
};
