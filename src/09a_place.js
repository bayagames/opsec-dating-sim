/* ============ WORLD CONTENT: who stands where, what you can use, what's locked ============ */
const BG2AREA={train:'platform',con:'foyer',lock:'lockpick',ctf:'ctf',soc:'soc',stream:'creator',hotel:'room1337',roof:'plantdeck',stage:'hallA',keynote:'hallA',vendor:'vendor',flat:'flat',bakery:'bakery',cos:'cosplay',chill:'lounge',bar:'bar',lobby:'lobby',office:'office'};
const FAR={home:330,con:1400,f13:900,office:440,station:600};
/* Day 1 onboarding steps: badge → opening ceremony → hotel check-in → drop your bag → (the whole con) */
const d1=k=>S&&(S.ch>1||(S.ch===1&&!!S.f['d1_'+k]));
const onboarding=()=>S&&(S.ch===0||(S.ch===1&&!S.f.d1_room));
const HANDLES=['xX_r00t_Xx','null_byte','packet_pam','sudo_sam','lord_of_logs','0xDEADBEEF','grep_grrl','cron_job','bitflip','yak_shaver','tcp_tina','salt_n_hash','mitm_mike','captcha_carl','ssh_sasha','vimlord','emacs_emma','port_80','buffer_bob','kernel_kev','dns_dana','wifi_wendy','phreak','byte_me','404_found','hexadecimal_hal','proxy_pete','zero_cool_ish','ping_pong','cookie_monster','segfault_sue','race_condition','heap_hannah','stack_smash','the_doorman'];
const NPCLINES={
 any:['First con? Pro tip: drink water. Club-Mate is not water.','I\'ve been awake for 31 hours. I can see sounds.','Have you seen the badge? It has a hidden game on it. I\'ve found nothing. For six hours.','Someone said there\'s free pizza somewhere. There is never free pizza.','My talk got rejected. I\'m giving it in the corridor anyway.','Don\'t connect to the Wi-Fi. Either of them.','I\'m not a hacker, I\'m a "security researcher". The difference is a lawyer.','I lost my laptop charger and with it, my will to live.','Is that a SafeSphere tote? Bold choice.','I just watched a man pick a handcuff lock with a hairpin. I need to lie down.','Tabs. Obviously tabs. Fight me.','I came for the talks. I stayed for the stickers.','Somebody\'s been rickrolling every TV in the hotel. Respect.','My mum thinks I\'m at a "computer party". She\'s not wrong.','I brought three phones. One for me, one burner, one to look cool.'],
 foyer:['The Lumen booth has a rotating logo. It\'s been rotating for nine hours. I\'ve been watching it for four.','The registration queue had its own queue. For the queue.','Escalators to Level 1 are over there. The workshops are up there. So is the good coffee.'],
 vestibule:['First time? The rope means badge first. The volunteers will find you. They always find you.'],
 lobby:['The lobby piano is a MIDI device. Someone\'s been playing it over Bluetooth.','The concierge asked if I was "with the hackers". I said no. I was wearing four lanyards.'],
 cafe:['They do a flat white called "The Zero Day". It\'s just a flat white. It costs more.'],
 mezz:['Best view in the hotel. You can watch everyone forget their badges.'],
 ringN:['Hall A doors are on this side. The queue for the keynote will start here on Sunday. Probably Friday.','I walked the whole Ring twice looking for Hall B. It was behind me both times.'],
 ringE:['Village Row is through there. Every door is a different rabbit hole.','The courtyard\'s the only place in the building where your phone gets real signal. Suspicious, honestly.'],
 ringS:['The cosplay hall is basically a film set. A man in full armour held the door for me.','Food court. Courtyard. Food court. Courtyard. That\'s my whole weekend.'],
 walkway:['Hall C\'s doors are on this side. Track 3. That\'s where the talks with the best titles go.','Courtyard door\'s right there. Shortcut to the fresh air. Tell no one.'],
 gallery:['Best people-watching in the building. That man has dropped his badge three times.','From up here the con looks almost organised. Almost.','You can go the whole way round up here. I\'ve done six laps. For my health.'],
 courtyard:['Fresh air. I forgot this existed.','Somebody threw a phone in the fountain. It was a burner. I think.','That tree has better uptime than my homelab.'],
 hallA:['Saving seats for the keynote. Yes, all of these.','The AV team here are wizards. Respect the AV team.','The back rows are so high up you can see the speaker\'s bald spot. And their notes.'],
 hallB:['Track 2 is where the weird talks are. I love Track 2.','That speaker found a bug in a toaster. A whole toaster. On stage.'],
 vendor:['I bought a USB cable that might be a keylogger. For science.','The lanyard guy only sells lanyards. I respect his focus.','My laptop lid has no lid left. It\'s all stickers.','The demo stage just bricked a smart lock on purpose. Huge applause.'],
 villagerow:['One door after another. I\'ve been in every village. I\'ve learned nothing. I\'ve loved it all.'],
 lockpick:['I opened my first lock! It was the practice one. I still feel like a god.'],
 ctf:['We\'re 40th. But we\'re having fun. That\'s what we tell ourselves.','The crypto challenge is just a picture of a duck. Why is it a duck.','The scoreboard tower is four-sided so every team can feel bad from any angle.'],
 soc:['Seventeen people here have their home address as their Wi-Fi name. Priya\'s keeping count.'],
 carhack:['They unlocked it with a radio, started the wipers with a laptop, and the horn has been going for an hour.','Please do not start the car. They keep saying it. Someone always starts the car.'],
 ics:['Every time the toy train stops, a siren goes off and a grown adult screams "WHO DID THAT".','It\'s a model city. Somebody keeps turning off its water. In the model. It\'s very upsetting.'],
 soceng:['A woman just talked a fake bank into "verifying" a fake account in ninety seconds. Standing ovation.','Rule one of the vishing booth: never say "um". Rule two: say "um" all the time, it\'s disarming.'],
 food:['The pizza place says NO PINEAPPLE. They seem to have strong reasons.','Noodles are the official food of incident response.'],
 fcterrace:['Eating lunch above the food court like a gargoyle. Ten out of ten.'],
 cosplay:['My armour is ninety per cent hot glue. The other ten is pain.','Neon Ronin\'s wings this year. Unreal.','The photo studio backdrop makes everyone look like an album cover.'],
 lounge:['Shh. I\'m recompiling my soul.','These bean bags have seen things.'],
 naps:['zzz','I booked a nap pod with a fake name. Opsec.'],
 workshop:['Threat modelling is just being anxious, but with a spreadsheet.','I asked "what\'s my threat model?" and the speaker said "your group chat". Fair.'],
 workshopA:['Wireshark workshop. I captured my own packets. They were mostly cat videos.'],
 hwv:['I soldered my thumb to a badge. It\'s fine. It\'s part of the badge now.','That LED wall is running Game of Life. Someone made a glider that spells "HELP".'],
 creator:['Studio pods! Tiny rooms with ring lights. I\'m not streaming. I just like the lighting.'],
 arcade:['KERNEL holds every high score in here. Every. Single. One.','The claw machine is rigged. I checked the firmware.'],
 conops:['If you\'re in Con Ops, something is on fire. Metaphorically. Usually.'],
 press:['I\'m a journalist. I\'m not allowed to say for whom. It\'s a very small newsletter.'],
 speakers:['The speaker lounge has real biscuits. Do not tell the attendees.'],
 quiet:['...','(they mouth "sorry" and go back to breathing)'],
 plaza:['Taxi driver asked if I was "one of the hacker lot". I said no. He said "sure".','The big CTRL+ALT+CON sign was sponsored by Lumen. Someone put a sticker over the logo. Iconic.'],
 terrace:['Best seat in the hotel. Fairy lights, a heater, and a wall between you and four thousand hackers.','You can hear Hall C through that wall. Someone in there just said "and that\'s why you never trust the printer".'],
 skybridge:['A glass bridge between a hotel and a con. Peak architecture. Mild vertigo.'],link:['Hotel that way, con that way. I\'ve been standing in the middle for ten minutes deciding.'],garden:['The hotel garden. Grass, a fountain and, at last, no lanyards.'],hallC:['Track 3 talks are the weird ones. "I hacked my cat flap." Packed.'],badgelab:['I\'ve soldered my badge to my badge. I\'m not sure how. It still lights up.'],
 hotelL1:['The gym looks out over the pool. Nobody at this con has used either.'],
 carpark:['Down here it smells like petrol and secrets.','That black car with the PRIV4CY plate? Lumen. Of course it\'s Lumen.'],
 noc:['Fourteen hundred devices on the con network. Three hundred are named "iPhone".','If the con goes offline, we go offline. Then we go home.'],
 plant:['Laundry carts make an excellent hiding place. Allegedly.'],
 corridor:['Room 1336 has been ordering room service for six hours. Somebody\'s fine.','The ice machine sounds like a dial-up modem.'],
 roof:['How did you get up here? ...Same way as me, I suppose.','Best signal in the building. Worst opsec in the building.'],
 station:['The 09:12 is always late. Today it\'s early. Nobody knows what to do.'],
 office:['Have you tried turning the printer into a planter? I have. It\'s nicer.']
};
const CHLINES={2:['Did you see what WHISPER did to MegaHax? Brutal.','Everyone\'s checking their posts. I deleted four years of tweets this morning.'],3:['WHISPER hit the Lumen CEO! On the main screens!','Lumen security asked to scan my badge. I said no. They asked again.','I uninstalled SafeSphere. Just in case. Just... vibes.'],4:['Rumour is something big\'s happening at the keynote.','Hall A at four. Everyone\'s going. EVERYONE.']};
/* named-but-faceless people with jobs */
const ROLELINES={
 Volunteer:['Badge pickup is here! Write your name. Or don\'t. Your call. Mostly don\'t.','Lanyard? Lanyard. Lanyard!','If you see someone who looks lost, that\'s every first-timer. Be nice.'],
 Info:['Hall A is on the north side of the Ring. Village Row is east. Level 1 is up the escalators. You\'re welcome.','The courtyard\'s through the glass doors. The bar\'s in the hotel. The hotel\'s through the big gap. Everything\'s through something.'],
 Receptionist:['Welcome to the Halcyon. Lifts are behind you. The bar is to your left. The hackers are... everywhere.','Please don\'t plug anything into the lobby TVs. Someone did. It still plays the Matrix.'],
 Barista:['Flat white? Flat black? Flat earth? Kidding. Two pounds eighty.'],
 Doorman:['Welcome to the hotel. Please don\'t hack the revolving door. Somebody tried yesterday.','Taxis to the left, hackers to the right. Mostly hackers.'],
 Security:['Badge?','We\'ve had the Lumen people in here twice asking for camera footage. Twice. Without a warrant. Weird, that.'],
 Engineer:['We\'re watching every packet on the con network. Not reading them. Watching. There\'s a difference.','Someone\'s been running a rogue AP since Friday. We see it. We can\'t find it. It\'s killing me.'],
 Commuter:['Platform 4. Conference quarter. Half this train is in hoodies.','Is everyone on this train going to that hacker thing? I just want to get to work.'],
 Coworker:['Is it Friday yet? It\'s Monday. Oh no.','Gary bought eleven gift cards. Eleven.','Linda says you\'re "the IT one". I said we know.'],
 Partygoer:['WELCOME TO 1336. We ordered fries six hours ago. We have since ordered more fries.','Somebody brought a soldering iron to a party. That somebody is me.','Don\'t mind us. We\'re reverse-engineering the TV. The TV is winning.']
};
function genCrowd(){
 const spots={foyer:[[-96,40],[-76,10],[-104,4],[-70,48,0,1],[-92,6],[-80,54]],vestibule:[[-92,62,0,1]],foyerG:[[-68,16,L1],[-68,44,L1,1]],foyerG2:[[-68,24,L2]],skybridge:[[-116,-16,L1]],link:[[-121,-15.2],[-114,-19,0,1]],garden:[[-150,40],[-130,20,0,1],[-160,10]],hallC:[[-87,-44,0,1],[-108,-38,0,1],[-66.6,-46,0,1],[-87,-29.2]],badgelab:[[-98,-48.4,L2,1],[-78,-40.4,L2,1],[-80,-30,L2]],
  ringN:[[-40,-57],[-8,-55],[22,-53],[40,-57,0,1],[-30,-61,0,1],[4,-61]],ringE:[[47,-30],[48,4],[52.4,-16,0,1]],ringS:[[-40,28],[0,30],[30,26],[-20,30.4,0,1]],walkway:[[-57,-10],[-56,8]],gallery:[[-20,-62,L1,1],[30,-62,L1],[54,-20,L1],[0,32,L1],[-62,0,L1,1]],ring2:[[-30,-57,L2],[20,-57,L2,1],[48,-10,L2],[-10,27,L2]],
  courtyard:[[-40,-30],[16,-24],[34,-4],[-36,12],[10,10],[-5,-12,-1.2,1],[24,-30.6,0,1],[-34,-21.8,0,1]],
  hallA:[[-5,-100,0,1],[-5,-108],[38,-104],[-25,-83.05,1.65,1],[15,-77.65,3.3,1],[-5,-76.75,3.575,1],[-55,-80],[45,-74],[-20,-67,L1],[25,-67,L2,1],[-25,-80.5,8.875,1]],hallB:[[86,-74,0,1],[75,-70],[86,-96,0,1]],
  vendor:[[66,-27],[86,-14],[110,-27],[96,-14,0,1],[76,2],[120,-14],[62,-46],[100,-45,0,1],[122,-38,0,1],[90,2.5,0,1]],constore:[[63,10]],seconc:[[90,27],[130,27,0,1]],seconc1:[[100,27,L1],[70,30,L1,1]],
  villagerow:[[163,-30],[163,0],[163,20,0,1]],vrL1:[[163,-20,L1],[163,10,L1,1]],lockpick:[[145,-38.8,0,1],[140,-44.5],[152,-34]],ctf:[[139,-25.2,0,1],[152,-2.2,0,1],[141,-14]],soc:[[143.9,4,0,1],[151.9,10,0,1],[154,18]],
  carhack:[[178,-44,0,1],[174,-56],[190,-48]],ics:[[180,-14.6,0,1],[188,-31]],soceng:[[176.6,-2,0,1],[178.8,6,0,1],[186,8]],aero:[[173,23.7,0,1],[184,30]],
  workshopA:[[140.6,-47,L1,1],[142.8,-37,L1,1]],workshop:[[140.6,-24,L1,1],[145,-14,L1,1]],hwv:[[146.5,-3,L1,1],[146.5,10,L1,1],[154,18,L1]],creator:[[176,-52,L1],[173.4,-46,L1,1]],arcade:[[180.2,-26,L1,1],[183.2,-34,L1,1],[175,-30,L1]],
  tabletop:[[176,-11.2,L1,1],[186,-.4,L1,1],[180,-6,L1]],film:[[183,12.2,L1,1],[178,32,L1,1]],conops:[[66,-98,L2],[71,-84,L2,1]],press:[[85.2,-94.7,L2,1]],speakers:[[101,-86,L2]],quiet:[[60,46.6,L2-5.5,1]],
  food:[[-56,49.6+.9,0,1],[-38,44],[-26,52],[-47,54.2+.9,0,1],[-60,58,0,1]],fcterrace:[[-45,40.6,L1,1],[-30,39.5,L1]],skygarden:[[-36,42,L2],[-46,53.1,L2,1]],
  cosplay:[[2,46],[30,50],[18,50,.6,1],[42,64],[-4,64,0,1],[11.9,54,0,1],[24.1,58,0,1]],lounge:[[58,40,0,1],[70,48]],naps:[[64,60]],
  lobby:[[-204,40],[-192,22],[-212,26.6,0,1],[-186,33.4,0,1],[-209,8],[-214,46.4,0,1]],cafe:[[-190,50.75,0,1],[-183.6,52,0,1]],mezz:[[-178,44,L1],[-220,22,L1]],hotelL1:[[-214,-12,L1],[-154,-16,L1,1]],
  promenade:[[-240,-12],[-194,-20],[-144,-10,0,1]],bar:[[-164.5,-57.6,0,1],[-148,-57.6,0,1],[-158,-42.8,0,1],[-138,-32.8,0,1],[-168.6,-45.8,0,1],[-144,-50]],terrace:[[-124.8,-47,.05,1],[-117.2,-31,.05,1],[-119,-40]],
  grill:[[-189,-55.05,0,1],[-178,-31.05,0,1],[-192,-44]],ballroom:[[-159,-40,L1],[-166.6,-49.6,L1,1]],meeting:[[-191.6,-50.2,L1,1]],library:[[-245,-31,L1,1],[-240,-44,L1]],
  pool:[[-163,-26.6,L2,1],[-144,-30,L2]],gym:[[-177.7,-55,L2,1],[-189,-40,L2]],spa:[[-221,-58.8,L2,1],[-244,-40,L2]],plaza:[[-90,74],[-60,72],[-6,95.6,0,1],[24,97.4,0,1],[-30,90],[-140,80],[120,76]],
  carpark:[[-120,-26,BY],[-90,13,BY]],noc:[[-55,5.9,BY,1],[-46,6.6,BY,1]],plant:[[-239,-20,BY]],security:[[-80,-75]],dock:[[150,-100]],service:[[20,-154]],
  station:[[720,30],[750,40],[715,34.6,0,1],[760,28.6,0,1],[740,26]],platform:[[720,14.5],[750,9.6],[730,16,0,1],[760,14.5],[727.5,-4]],office:[[514.3,3.4,0,1],[520.7,12.3,0,1],[510,6.5],[528,9]]};
 let i=0;
 for(const a in spots)for(const p of spots[a]){
  if(!AREAS[a])continue;
  WD.npcs.push({id:'n'+i,v:i%8,role:null,reg:AREAS[a].reg,x:p[0],z:p[1],y:p[2]||0,hx:p[0],hz:p[1],ar:a,tx:p[0],tz:p[1],wait:rnd()*5,still:!!p[3]});
  i++;
 }
 const R=(role,reg,x,z,y,ar,v)=>WD.npcs.push({id:'r'+(i++),v:v===undefined?7:v,role,reg,x,z,y:y||0,hx:x,hz:z,ar,tx:x,tz:z,wait:0,still:true});
 R('Volunteer','con',-109,47,0,'foyer',3);R('Volunteer','con',-109,55,0,'foyer',5);R('Info','con',-88,50,0,'foyer',2);R('Doorman','con',-203.5,62.4,0,'plaza');
 R('Receptionist','con',-222.6,18,0,'lobby',4);R('Receptionist','con',-222.6,27,0,'lobby',6);R('Barista','con',-186,43.6,0,'cafe',1);R('Security','con',-96,-92.4,0,'security');
 R('Engineer','con',-55,6.6,BY,'noc',0);R('Engineer','con',-37,6.6,BY,'noc',2);
 for(const[x,z]of[[260,17],[262.6,17.4],[260.2,17.2],[263,14.6]])R('Partygoer','f13',x,z,0,'room1336',(x*7|0)%7);
 R('Commuter','station',727,9,0,'platform',2);R('Commuter','station',744,13,0,'platform',5);R('Coworker','office',502.6,1.7,0,'office',4);
}
/* ---------------- what's open: the con and the hotel open up as the story needs them, so the first days stay small ----------------
   Each entry: areas, when they open, what you're told if you try earlier. Areas not listed are always open. */
const OPENS=[];
const opens=(areas,cond,msg)=>OPENS.push({areas:areas.split(' '),cond,msg});
const bdone=b=>!!(S&&(S.done[b]||S.day>+b[1]));
opens('walkway ringN hallA',()=>S.day>1||f('d1_badge'),'Badge first. Registration is on the Foyer\'s west wall.');
opens('link promenade lobby lifts cafe',()=>S.day>1||f('d1_open'),'The opening ceremony first: Hall A. The hotel will still be there afterwards.');
opens('corridor room1337 room1336',()=>S.day>1||f('d1_checkin'),'You haven\'t checked in yet. Reception is on the Promenade.');
opens('bar terrace garden',()=>S.day>1||f('d1_room'),'The bar opens tonight. Drop your bag in your room first.');
opens('hallC badgelab foyerG',()=>S.day>=2,'Tomorrow. Tonight is for the bar and your bed.');
opens('villagerow ctf lockpick soc hwv aero carhack soceng ics workshopA workshop ringE ringS gallery courtyard vendor constore demostage seconc',()=>S.day>2||bdone('d2_ctf'),'The villages open after the CTF kick-off in Hall C.');
opens('lounge naps quiet food fcterrace',()=>S.day>2||bdone('d2_rin'),'Doors open at midday.');
opens('vrL1 creator arcade tabletop film cosplay seconc1 skygarden ring2 foyerG2 neconc neconc2 speakers hallB hallBback',()=>S.day>2||bdone('d2_badge'),'Not open yet. Check the Calendar on your phone for what\'s on.');
opens('mezz hotelL1 lumenlounge ballroom meeting stairwell',()=>S.day>2||S.day===2&&S.slot>=3,'The mezzanine opens for the evening reception.');
opens('library hotelL2 gym pool spa grill boutique press roof plantdeck housekeeping',()=>S.day>=3,'Not today. There\'s plenty to do where you are.');
opens('noc carpark basement',()=>S.day>4||S.day===4&&S.slot>=1,'Staff and parking only. You\'ve no reason to be down there yet.');
opens('mdf conops stafffw staffc service security stores kitchenC breakroom dock backstage conroof backstairs luggage',()=>S.day>4||bdone('d4_noc'),'STAFF ONLY. A volunteer with a radio is watching the door.');
opens('backoffice pdining hkitchen plant tunnel tunnelN',()=>S.day>=5||f('heist_yes')&&S.day===4&&S.slot>=5,'Staff only. Not yet.');
const OPENOF={};
function areaLock(a){if(!S||window.__allOpen)return null;if(!Object.keys(OPENOF).length)for(const o of OPENS)for(const k of o.areas)OPENOF[k]=o;const o=OPENOF[a];return o&&!o.cond()?o.msg:null}
/* ---------------- gates: ropes, locked doors and card readers that open with the story ---------------- */
const GATES=[];
function gate(reg,kind,x0,z0,x1,z1,y,open,msg,label){GATES.push({reg,kind,x0,z0,x1,z1,y:y||0,open,msg,label:label||(kind==='rope'?'Roped off':kind==='card'?'Staff door':'Locked door')})}
function gateBox(g){const t=.3,h=g.kind==='rope'?1.3:3;return[Math.min(g.x0,g.x1)-t,Math.min(g.z0,g.z1)-t,Math.max(g.x0,g.x1)+t,Math.max(g.z0,g.z1)+t,g.y,g.y+h]}
function placeGates(){
 const preC=()=>d1('open'),hotelMsg='"Ceremony first!" says a volunteer, arms out like a goalkeeper. "Hall A. Everything opens up after."';
 const ropeC=(x0,z0,x1,z1,y)=>gate('con','rope',x0,z0,x1,z1,y,preC,()=>hotelMsg);
 // badge check: one rope right across the Foyer, and the food court door on the badge side of it
 gate('con','rope',-109.6,43,-64.6,43,0,()=>d1('badge'),()=>'A volunteer with a lanyard the size of a seatbelt: "Badge first! Registration\'s right there."');
 gate('con','rope',-64.8,51.6,-64.8,56.4,0,()=>d1('badge'),()=>'"Badge first," says a volunteer, who has said "badge first" four hundred times today.');
 // before the opening ceremony: the way to Hall A (Foyer, Ring West, Ring North, the hall's floor doors) stays open, everything else is roped
 ropeC(-109.4,-20.4,-109.4,-13.6);ropeC(-64.8,51.6,-64.8,56.4);ropeC(-98.4,-23.4,-93.6,-23.4);ropeC(-80.4,-23.4,-75.6,-23.4);ropeC(-63.4,-46.4,-63.4,-41.6);ropeC(-63.4,-32.4,-63.4,-27.6);ropeC(-80,40.6,-72,40.6);ropeC(-64.8,38,-64.8,42);
 ropeC(56.4,-63.6,56.4,-54.4);ropeC(56.4,20.4,56.4,33.6);ropeC(55.6,-42,55.6,-34);ropeC(55.6,-12,55.6,-4);
 ropeC(-40,33.6,-34,33.6);ropeC(2,33.6,8,33.6);ropeC(33,33.6,37,33.6);ropeC(51.5,33.6,54.5,33.6);ropeC(26.6,-59.4,26.6,-55.6);
 for(const c of[-10,20])ropeC(c-1.5,-49.6,c+1.5,-49.6);for(const c of[-30,10])ropeC(c-1.5,19.6,c+1.5,19.6);ropeC(-49.6,-1.5,-49.6,1.5);ropeC(-49.6,-38.5,-49.6,-35.5);for(const c of[-20,5])ropeC(39.6,c-1.5,39.6,c+1.5);
 for(const c of[-30,-5,20])ropeC(c-1.5,-64.6,c+1.5,-64.6,L1);
 // the bar (and its terrace) open once you've dropped your bag
 const barOpen=()=>d1('room'),barMsg=()=>'A sign on a stand: "BAR OPENS 7PM · HOTEL GUESTS: CHECK IN FIRST". It\'s not seven yet. Go and find your room.';
 gate('con','door',-154,-24,-148,-24,0,barOpen,barMsg,'The bar');
 // outside, once you're checked in
 const outMsg=()=>'You could go outside. But you\'ve only just arrived, and the opening ceremony is the whole point of being here.';
 const outG=(x0,z0,x1,z1,o,l)=>{gate('con','glass',x0,z0,x1,z1,0,()=>d1('checkin'),outMsg,l);GATES[GATES.length-1].out=o};
 outG(-91,68,-85,68,[0,1],'Convention doors');outG(-201.2,60,-196.8,60,[0,1],'Revolving door');outG(-212.2,60,-209.8,60,[0,1],'Hotel doors');outG(-188.2,60,-185.8,60,[0,1],'Hotel doors');outG(-174,28,-174,32,[1,0],'Garden doors');
 // basement fire stairs: from day 2
 gate('con','rope',-71.6,91.4,-64.4,91.4,0,()=>S.ch>=2,()=>'A barrier arm and a sign: "CAR PARK · HALCYON GUESTS · OPENS 6AM". It\'s late. Tomorrow.','Car park barrier');
 gate('con','door',-224,29.2,-224,30.8,0,()=>S.ch>=2,()=>'"FIRE STAIRS · B". A sign underneath: "Guests: emergencies only." Maybe tomorrow, when you\'re less new.','Fire stairs');
 // luggage room: Nyx can show you how
 gate('con','door',-224,7.2,-224,8.8,0,()=>!!S.f.luggage,()=>null,'Luggage room');
 // staff keycard doors (Nyx's route, chapter 2): every way into the back of house
 const card=()=>!!S.f.keycard,cardMsg=()=>'STAFF ONLY. You tap nothing against the reader, because you have nothing. It blinks red at you, smugly.';
 gate('con','card',-62.8,-64,-61.2,-64,0,card,cardMsg);gate('con','card',52,-64,54,-64,0,card,cardMsg);gate('con','card',121.2,-64,122.8,-64,0,card,cardMsg,'Kitchen');
 gate('con','card',-6.5,-136,-3.5,-136,1.6,card,cardMsg,'Backstage');gate('con','card',84.5,-111,87.5,-111,.8,card,cardMsg,'Backstage');gate('con','card',-91.5,-54,-88.5,-54,BY,card,cardMsg,'Service tunnel');
 // the Lumen Lounge
 gate('con','door',-137,-24,-135,-24,L1,()=>S.day>2||S.day===2&&S.slot>=3,()=>S.day<2||S.day===2&&S.slot<3?'LUMEN LOUNGE · INVITE ONLY. The door has a card reader and, somehow, an attitude.':'Locked. You\'d need someone with a staff key. Someone like a bartender. Or a former Lumen intern.','Lumen Lounge');
 // hotel 13th floor + roof
 gate('home','door',-306,5.6,-306,6.4,7.1,()=>false,()=>'Ellie\'s flat. Locked, obviously. A sticky note on the door: "GONE TO WORK (DOWNSTAIRS) (OBVIOUSLY)".','Flat 2');
 gate('home','door',-306,5.6,-306,6.4,10.3,()=>false,()=>'FLAT 3. Locked. Behind the door, very faintly, a cat is watching you through the letterbox.','Flat 3');
 gate('home','door',-293,-12,-292,-12,0,()=>false,()=>'The back door to the yard. Bins, Ellie\'s bike and a seagull with a criminal record. Nothing you need.','Back door');
 gate('f13','door',272.7,-12,273.9,-12,0,()=>S.day>=2,()=>'HOUSEKEEPING. Locked. Through the gap under the door you can hear a stairwell breathing.','Housekeeping');
 gate('f13','door',268,-.7,268,.7,0,()=>false,()=>'ALARMED · EMERGENCY ONLY. You are not having an emergency. Yet.','Fire exit');
 gate('f13','door',248,-1,248,1,TOP,()=>S.day>=2,()=>'MAINTENANCE · STAFF ONLY. The fence rattles in the wind. On the other side: air-con units, a water tank and, maybe, a footprint.','Maintenance door');
}
/* a door that only keeps you in (g.out: the direction of outside) opens once you've stood just outside it, and stays
   open until you're clear of it on the way in: arrive by taxi or fast travel and you can always get back indoors,
   but walking up to it from inside doesn't let you out */
function gateClosedAt(reg,x,z,y,r){const a=y+.4,b=y+1.75;for(const g of GATES){if(g.reg!==reg||g.open())continue;
  if(g.out){const cx=(g.x0+g.x1)/2,cz=(g.z0+g.z1)/2,s=(WD.x-cx)*g.out[0]+(WD.z-cz)*g.out[1],lat=Math.abs((WD.x-cx)*g.out[1]-(WD.z-cz)*g.out[0]),hl=Math.hypot(g.x1-g.x0,g.z1-g.z0)/2;
   if(s>0&&s<6&&lat<hl+2)g.pass=true;else if(s<-(r+.75)||Math.hypot(WD.x-cx,WD.z-cz)>9)g.pass=false;if(g.pass)continue}const q=gateBox(g);if(x+r>q[0]&&x-r<q[2]&&z+r>q[1]&&z-r<q[3]&&q[5]>a&&q[4]<b)return true}return false}
function gateAct(g){
 if(g.label==='Luggage room'){
  if(S.f.met_nyx&&scn('nyx')>=2)return run([N('The luggage room. Locked with a pin-tumbler lock that has seen better decades. You hear Nyx in your head: "Tension first. Then listen."'),{game:'timing',kind:'pins',n:3,who:'nyx'},()=>{S.f.luggage=1;return[N('Click. The door swings open onto a wall of suitcases and one very large flight case with a Lumen logo on it.')]}],hub);
  return run([N('LUGGAGE ROOM · STAFF ONLY. An old pin-tumbler lock. If only you knew someone who picks locks for a living.')],hub);
 }
 const m=g.msg();run([N(m)],hub);
}
/* ---------------- placing people and things ---------------- */
function placeWorld(){
 BR='con';
 /* everyone with a name is one entry; where they are depends on the day and the part of the day (WHERE, below) */
 for(const id of Object.keys(WHERE))WCH.push({id,reg:'con',x:0,z:0,y:0,on:false,when(){return this.on}});
 genCrowd();placeGates();
 const N1=t=>()=>run([N(t)],hub);
 const once=(k,a,b)=>()=>{const key=k+S.ch;if(S.room[key])return run([N(b)],hub);S.room[key]=1;run(a(),hub)};
 /* ---- home: Proof and Flat 1A ---- */
 const F=3.9,RF=13.5;
 int('home',-291.6,10.6,()=>'Look at your monitors',N1('Your forum post from 3 AM: "honestly most firewalls are a joke if you know what you\'re doing." Fourteen upvotes. One reply: "source?" You never answered.'),{y:F});
 int('home',-291.5,5.6,()=>'Water the plant',N1('It\'s plastic. You water it anyway. It\'s a ritual now.'),{y:F});
 int('home',-300.5,10.3,()=>'Check the pizza boxes',N1('Three boxes. Two empty. One contains a single crust you\'re saving for reasons you can\'t explain.'),{y:F});
 int('home',-296.5,11,()=>'Look out of the window',N1('Linden Street at 7 AM. The barber is unrolling his shutter, a van is unloading flour for Ellie, and the sun is coming up over the square, gold on every window across the road.'),{y:F});
 int('home',-291,7.5,()=>'Look down Mill Lane',N1('The lane, the square, the plane trees, a man walking a dog that is walking him. Somewhere a bus sighs. Morning, the whole city at once.'),{y:F});
 int('home',-301.8,10.3,()=>'Turn on the telly',N1('A breakfast show. A man in a nice jumper is explaining, with diagrams, that you should "never reuse passwords". You feel personally attacked.'),{y:F});
 int('home',-302,4.2,()=>'Browse the bookshelf',N1('Networking in a Nutshell. The Cuckoo\'s Egg. A cookbook Ellie gave you that you have opened once, to look at the pictures.'),{y:F});
 int('home',-305.4,9.9,()=>'Look at the router',N1('The router blinks. Its admin password is still "admin". You know. You KNOW. You\'ll change it tonight.'),{y:F});
 int('home',-291.4,1.5,()=>'Put the kettle on',N1('The kettle roars, clicks off, and you make the tea you will forget about and find, cold, at lunchtime.'),{y:F});
 int('home',-295.5,2.6,()=>'Open the fridge',N1('Oat milk, hot sauce, half a lemon of unknown age. A takeaway menu on the door has been annotated in red: "NO. Cook something." —Ellie'),{y:F});
 int('home',-299.9,2.2,()=>'Look in the mirror',N1('You look like someone who sleeps four hours a night and calls it "a routine". Fair.'),{y:F});
 int('home',-298.2,-2.6,()=>'Check the homelab',N1('A little rack humming in the box room: a NAS, a Pi cluster, and a switch you bought "for a project". Every light is green. The only thing in the flat that is.'),{y:F});
 int('home',-297.8,-6.6,()=>'Lie on the bed',N1('You lie down for one second. The ceiling has a crack shaped like a network diagram. Nope. Up. Work.'),{y:F});
 int('home',-307,7.5,()=>'Flat 2',N1('ELLIE · FLAT 2. A doormat that says "WIPE YOUR PAWS". It is 7 AM. She\'s been downstairs since four.'),{y:7.1});
 int('home',-307,7.5,()=>'Flat 3',N1('FLAT 3. A parcel addressed to "The Occupier" has been sitting here for a week. Nobody has ever seen the occupier. You have theories.'),{y:10.3});
 int('home',-298,11,()=>'Lean on the parapet',N1('From the roof: Linden Street, the square, the viaduct with a train waiting at the signal, and the city stacked up in the haze beyond. Somewhere out there is the con. Two weeks.'),{y:RF});
 int('home',-291,-2,()=>'Look out over the square',N1('The plane trees are full of starlings and the fountain\'s just been switched on. Ellie\'s string lights are still glowing from last night. Nobody turned them off. Nobody ever does.'),{y:RF});
 int('home',-299,-.8,()=>'Sit on the bench',N1('You sit. The air smells of bread and diesel. For a minute you don\'t check your phone. Then you check your phone.'),{y:RF});
 int('home',-308,10.6,()=>'Check the post',N1('Two pizza menus, a bank letter you will open "later", and a postcard from a VPN company with your full name spelled correctly. Unsettling.'));
 int('home',-302.2,-5.9,()=>'Look at the ovens',N1('Two deck ovens, already roaring. Ellie gets up at 4 AM every day. You get up at 4 AM sometimes, but from the other direction.'));
 int('home',-297.5,-6.4,()=>'Peer into the proving cabinet',N1('Rows of dough, rising in the warm, very slowly, very smugly. Like they know something.'));
 int('home',-293.8,-3.5,()=>'Steal a loaf from the rack',N1('You reach for a cooling loaf. From the shop, without turning round, Ellie says "I saw that." She did not see that. She always sees that.'));
 int('home',-305.4,8.6,()=>'Read the chalkboard',N1('Today\'s special: "cinnamon knot (ask the computer guy, he\'s had 400)". You have had 400.'));
 int('home',-301.3,6,()=>'Look in the display case',N1('Croissants, cinnamon knots, a raspberry slice and something called a "Monday bun" that is just a bun, but bigger. The glass is spotless. Ellie polishes it at 6.'));
 int('home',-292.7,3.4,()=>'Ellie\'s coffee machine',N1('It hisses like a cat that has opinions. A sign taped to it: "DO NOT TOUCH (looking at YOU, upstairs)".'));
 int('home',-290.6,3.4,()=>'Turn up the radio',N1('Local radio. Traffic on the ring road, a phone-in about seagulls, and then a song from 2009 that both you and Ellie sing along to, badly, without making eye contact.'));
 int('home',-302.6,10.9,()=>stepIs('door')?(beatStep(curBeat()).lbl||'Head out'):S.day>=1?'Walk to the station':null,()=>{if(stepIs('door'))return stepGo();fadeTp(()=>{teleportArea('station');run([N('Ten minutes\' walk, past the barber and the bus stop and the pigeons, to Central Station.')],hub)})});
 /* ---- office ---- */
 int('office',526.6,21,()=>stepIs('desk')?'Start on the helpdesk queue':'Your desk',()=>{if(stepIs('desk'))return stepGo();run([N('Forty-seven tickets. Forty-six of them are about the printer. The forty-seventh is also about the printer, but angrier.')],hub)});
 int('office',497.7,12,()=>stepIs('lift')?(beatStep(curBeat()).lbl||'Lifts · exit'):'Lifts · exit',()=>{if(stepIs('lift'))return stepGo();if(curBeat()&&curBeat().id==='d1_office')return run([L('linda','n','Queue first, {h}. Then you can go.')],hub);fadeTp(()=>{teleportArea('station');run([N('Down in the lift, out through the revolving door, and a short walk to Central Station.')],hub)})});
 int('office',505.6,18.7,()=>'Fight the Accounts printer',N1('PC LOAD LETTER. You open every drawer. You close every drawer. It prints one page, a photocopy of someone\'s hand from 2016. You decide this counts as a win.'));
 int('office',497.6,1.6,()=>'Make a tea',N1('The kettle takes four minutes and sounds like a jet engine. A note on the fridge: "WHO TOOK MY YOGHURT". Under it, in different pen: "it was me. I\'m not sorry. —G"'));
 int('office',503.4,6.05,()=>'Water cooler',N1('Nobody is having a conversation at the water cooler. Everyone is having a conversation on Slack about the water cooler.'));
 int('office',530.2,17.2,()=>'Look into the meeting room',N1('A slide titled "Synergy Q3". Below it, someone has drawn a duck. The duck is the only thing in the meeting that made sense.'));
 int('office',508,-3.25,()=>'Look out of the window',N1('The city, grey and busy. Somewhere out there, four thousand hackers are packing hoodies. In two weeks you\'ll be one of them.'));
 /* ---- station ---- */
 int('station',734,4.4,()=>'Board the train',()=>trainMenu(),{r:2.6});
 int('station',736,46.6,()=>'Exit · taxi rank',()=>{if(curBeat()&&curBeat().id==='d1_station')return run([N('Your train\'s on Platform 4. You\'ve checked three times. You check a fourth time.')],hub);run([N('The taxi rank. Where to?'),C({t:'The Halcyon and the con',if:()=>S.day>=1&&f('d1_badge'),then:()=>{fadeTp(()=>{teleportArea('plaza');run([N('Twenty minutes later the taxi pulls up outside the Halcyon. The neon sign is still shouting.')],hub)});return[]}},{t:'Linden Street: home',then:()=>{fadeTp(()=>{teleportArea('bakery');run([N('Home. Linden Street smells of bread and diesel, the way it always has.')],hub)});return[]}},{t:'Not yet',then:[]})],hub)});
 int('station',736,23.4,()=>'Read the departures board',N1('09:12 CONFERENCE QUARTER · HALCYON — PLATFORM 4 — ON TIME. A man next to you photographs the board, then his ticket, then his face. Then he posts all three.'));
 int('station',764.8,26,()=>'Pasty Palace',N1('"Cheese and onion, or cheese and onion?" You pick cheese and onion. It\'s the right choice.'));
 int('station',701.5,35.7,()=>'Ticket machine',N1('It offers to email you a receipt, text you a receipt, and "remember your card for next time". You pay with cash. The machine seems hurt.'));
 int('station',764.8,35.2,()=>'Platform Coffee',N1('"Flat white?" You nod. The barista draws a heart in the foam, then, after a long look at you, turns it into a padlock.'));
 int('station',708,43.6,()=>'Play the station piano',N1('You play the four notes of the only song you know. A man in a suit stops, listens, and puts a pound in a cup that isn\'t there. Then he catches the 09:20.'));
 /* ---- plaza ---- */
 int('con',-6,95.2,()=>'Taxi rank',()=>run([N('A taxi driver looks up from his phone. "Station?"'),C({t:'"Central Station, please."',then:()=>{fadeTp(()=>{teleportArea('station');run([N('The station. Commuters, pigeons, and a departures board that still has the 09:12 to the con on it.')],hub)});return[]}},{t:'"Not yet."',then:[]})],hub));
 int('con',-37,81.6,()=>'Look at the big sign',N1('CTRL+ALT+CON, in letters taller than you. Somebody has stuck a tiny sticker over the Lumen logo at the bottom. It says "no".'));
 int('con',-20,73.8,()=>'Coffee cart',N1('"Bean There". The barista has a badge, a beard and a QR code tattoo. "It goes to my mum\'s bakery," he says. You don\'t scan it. He respects that.'));
 int('con',24,97.6,()=>'Bus stop',N1('Bus 42. The timetable is a Lumen ad. "SafeSphere: Privacy On The Move." Someone has added, in marker: "on the move to where?"'));
 /* ---- foyer ---- */
 int('con',-105.2,53.4,()=>stepIs('reg')?'Pick up your badge':'Registration desk',()=>{if(stepIs('reg'))return stepGo();run([N(pick(['The volunteers have the thousand-yard stare of people who have handed out four thousand lanyards.','A volunteer is explaining, for the ninth time today, that the badge is not a phone charger.']))],hub)});
 int('con',-88,50,()=>'Info desk',()=>run([{w:'Info',np:1,t:pick(ROLELINES.Info)}],hub),{r:2.7});
 int('con',-94,32.6,()=>S.ch>=1&&S.ch<4?'Take a SafeSphere flyer':null,()=>run([N('"SafeSphere: your privacy, protected. Free forever!" On the back, in 4-point type: "By installing you agree to share insights with trusted partners."'),N(S.ch>=3?'You bin it. Three other people do the same while you watch.':'You fold it into a very small square.')],hub));
 int('con',-87,30.6,()=>'Try a SafeSphere demo pod',N1('The pod asks for your contacts "to protect them too". Then your location "to keep you safe". Then your camera "for your security". You step out. It says "Come back soon!" in a voice that is far too warm.'));
 int('con',-103,48.6,()=>'Look up at the ceiling',()=>run([N(S.clues.includes('evil_twin')?'The tile Nyx pointed out. Behind it, a small box with a Lumen asset tag blinks away, pretending to be the con\'s Wi-Fi.':'One ceiling tile above the registration desk is slightly askew. A tiny green light blinks behind it. Probably nothing. Probably.')],hub));
 /* ---- Hall A / Hall B ---- */
 int('con',-5,-79.5,()=>stepIs('seat')?'Take your seat for the opening ceremony':'Sit down for a talk',()=>{if(stepIs('seat'))return stepGo();attendTalk()},{y:2.75,r:3.2});
 int('con',-5,-124.2,()=>'Step up to the podium',N1('You grip the podium and look out at two thousand empty seats rising into the dark. Your heart rate doubles. Imagine doing this for real.'),{y:1.6});
 int('con',9,-89,()=>'Look at the AV desk',N1('Four screens, a mixing desk and an AV tech eating a sandwich with the calm of someone who has seen every possible failure. "Don\'t touch anything," she says, without looking up.'));
 int('con',-3,-147.4,()=>'Raid the speakers\' snacks',N1('Grapes, crisps and a bowl of only green M&Ms. You take one grape. You feel like a criminal.'),{y:1.6});
 int('con',86,-80,()=>'Catch a talk in Hall B',once('hb',()=>[N(pick(['Track 2: "I Found a Bug in a Toaster". It\'s an hour long. The toaster gets a standing ovation.','Track 2: "Your Smart Doorbell Is Watching Your Neighbours". The room goes quiet. Several people text their neighbours.','Track 2: "Lessons From a Year of Honeypots". The main lesson: people will try "admin/admin" on anything.'])),FX({skill:1})],'The next Track 2 talk is about blockchain. You leave before you can be persuaded of anything.'));
 /* ---- vendor ---- */
 int('con',65,11.2,()=>'Shop at the Con Store',()=>{if(S.ch<2)return run([N('"Opening tomorrow!" says a sign. The shopkeeper waves a price gun at you menacingly.')],hub);if(!S.unl.cred)return run([{unlock:'cred'}],()=>shop());shop()});
 [['STICKERS',''],['LOCK PICKS','Tension wrenches, rakes, a lock shaped like a heart. The vendor winks. You don\'t know why.'],['LEDs & BADGES','A badge that plays Snake. A badge that plays Doom. A badge that is just a very bright light.'],['SUSPICIOUS USB CABLES','"Totally normal cables," says the sign. The vendor is wearing sunglasses. You keep walking.'],['LANYARDS ONLY','He sells lanyards. Only lanyards. He seems at peace.'],['T-SHIRTS','"There\'s no place like 127.0.0.1." You\'ve seen four people wearing it already.'],['KEYBOARDS','Someone types on a keyboard so loud it sounds like popcorn. They look extremely happy.'],['BOOKS & ZINES','A zine titled "So You Got Doxxed". It\'s selling very well this weekend.'],['RETRO COMPUTERS','A beige machine from 1989 boots up with a noise like a jet engine. A crowd gathers in reverence.'],['FPGA BOARDS','Tiny boards that can pretend to be any chip. The vendor pretends to be a person who understands them.'],['"MILITARY-GRADE" VPNs','"Unbreakable!" says the poster. The vendor won\'t say what it\'s unbreakable against. You suspect "sales".'],['FARADAY BAGS','Little bags that block every signal. You put your phone in one. For the first time in years, it\'s quiet.']].forEach((s,i)=>{const cx=STALLPOS[i].x,cz=STALLPOS[i].z;if(i!==0)int('con',cx,cz+1.4,()=>'Browse: '+s[0].toLowerCase(),N1(s[1]))});
 int('con',116,-39.6,()=>'Watch the demo stage',N1('A presenter opens a "smart" padlock with a phone, a magnet and a deeply unimpressed expression. The lock\'s marketing slogan was "unpickable". The crowd chants it ironically.'));
 /* ---- villages ---- */
 int('con',146,-52.6,()=>'Practise on the pegboard locks',()=>{const k='peg'+S.ch;if(S.room[k])return run([N('Your fingers are sore. Maybe next chapter.')],hub);S.room[k]=1;run([N('You pick a padlock off the pegboard and get to work.'),{game:'timing',kind:'pins',n:3}],hub)});
 int('con',146,-12.2,()=>'Read the scoreboard tower',N1('Four screens, four sides, the same bad news for everyone. KERNEL (ada) is third. A team called "dave_hax" has forty points and a very aggressive logo.'));
 int('con',135.8,10,()=>'Watch the wall of screens',N1('Graphs, alerts, a map of every Wi-Fi network in the building. One flashes red: ROGUE AP: "CTRLALTCON". It\'s been flashing for days.'));
 int('con',186.2,-50,()=>'Look under the bonnet',N1('Wires everywhere, a laptop zip-tied to the engine, and a small handwritten sign: "If you start this car, you buy everyone lunch." The car has been started eleven times. Lunch has been excellent.'));
 int('con',183,-14.6,()=>'Watch the toy train',N1('A tiny train goes round a tiny city. A team on laptops tries to stop it. A different team tries to keep it moving. Every time it stops, a siren goes off and everybody cheers. Nobody is sure who\'s winning.'));
 int('con',189.6,-5,()=>'Try the vishing booth',once('vish',()=>[N('You step into the soundproof booth. On the screen: "Call the fake helpdesk. Get the fake password. Don\'t lie about who you are."'),C({t:'Be friendly, patient and honest about who you are',fx:{skill:2},then:[N('It takes six minutes. The "helpdesk" refuses to give you the password, then thanks you for not trying to trick them. The judges give you full marks for not being a creep.')]},{t:'Pretend to be the CEO and shout',fx:{clout:3,exp:2},then:[N('"This is the CEO!" The fake helpdesk hangs up. The crowd boos. A judge writes "classic" on her clipboard.')]})],'The booth has a queue of forty people. You\'ve had your turn.'));
 /* ---- food court, courtyard ---- */
 int('con',FOODPOS[0].x,FOODPOS[0].z,()=>'Order noodles',N1('Noodles in a cardboard box. They\'re incredible. It might just be that you haven\'t eaten since yesterday.'));
 int('con',FOODPOS[1].x,FOODPOS[1].z,()=>'Order pizza',N1('"Any toppings?" "Not pineapple." "Correct answer. We\'ve had incidents."'));
 int('con',FOODPOS[2].x,FOODPOS[2].z,()=>'Order tacos',N1('Three tacos. One falls apart instantly. Classic.'));
 int('con',FOODPOS[3].x,FOODPOS[3].z,()=>'Buy a Club-Mate',N1('Cold, fizzy, faintly bitter. You can feel your neurons applauding.'));
 int('con',-5,-12,()=>'Toss a credit in the fountain',()=>run([N(S.cred>0?'You toss a con credit in. You wish for a good keynote. A pigeon watches, judgementally.':'You don\'t have any credits. You wish anyway.'),...(S.cred>0?[FX({cred:-1})]:[])],hub),{y:-1.2});
 int('con',24,-30.8,()=>'Sit under the big tree',N1('The only tree in the building, and it\'s enormous. You sit on the bench beneath it. Through the glass on every side, the con carries on without you. For a minute, that\'s fine.'));
 /* ---- cosplay, lounge ---- */
 int('con',18,62.6,()=>'Strike a pose on the runway',N1('You stand at the end of the runway and pose. Nobody is watching. It still feels amazing. A tape mark on the floor says "WINGS NEED 3M CLEARANCE".'),{y:.6});
 int('con',-5.4,58,()=>'Peek into the changing rooms',N1('Curtains, safety pins and a man inside a cardboard robot asking someone to "do up his back". The robot\'s back is a recycling box.'));
 int('con',42,71,()=>'Step in front of the photo studio backdrop',N1('The backdrop glows. The lights hit you just right. For one shining second you look like the album cover of a band that only plays at 3 AM.'));
 int('con',78.2,36.4,()=>'Stare into a lava lamp',N1('The blob rises. The blob falls. You lose four minutes and gain inner peace.'));
 int('con',61.7,64.6,()=>'Borrow a nap pod',N1('You lie down in a pod that hums like a spaceship. Ten minutes later you wake up with a seatbelt mark on your face and the clarity of a monk.'));
 /* ---- hotel ---- */
 int('con',-218.4,22.5,()=>stepIs('reception')?'Check in at reception':'Talk to reception',()=>{if(stepIs('reception'))return stepGo();run([{w:'Receptionist',np:1,t:pick(['Everything all right with your room? The crunchy bed is a feature. We\'re told.','If anyone asks for your room number at the desk, we won\'t give it out. Somebody tried this morning. Twice.'])}],hub)});
 /* every lift door is a call button: hotel lobby lifts (both sides, all three podium levels), the Foyer's pair, the tower core */
 for(const y of[0,L1,L2])for(const z of[-33.5,-29.9,-26.3])for(const x of[-222.9,-201.1])int('con',x,z,()=>'Call the lift',()=>liftMenu(),{y,r:2.8,h:1.3});
 int('con',-186,46.4,()=>'Order a flat white',N1('A flat white in a cup that says "HALCYON". The barista writes your handle on it, then crosses it out and draws a little skull. "Opsec," she says.'));
 int('con',-168.5,-29.5,()=>'Watch the bar TV',()=>run([N(S.ch>=3?'Breaking news ticker: "Questions grow over popular privacy app." The whole bar goes quiet to read it.':'A muted football match. Somebody has changed the subtitles to Linux error messages.')],hub));
 int('con',-119,-46,()=>'Look up at the tower',N1('Twenty-five storeys of lit windows climbing out of the lane, the name in gold at the top, a red light blinking on the roof. Somewhere up there is Room 1337 and your bag. Down here: festoon lights, a patio heater, and the con\'s wall humming with bass from Hall C.'));
 int('con',-230,38.6,()=>S.ch>=2?'Service lift':null,()=>serviceLift());
 int('con',-234,52.4,()=>S.ch>=2?'Service lift':null,()=>serviceLift(),{y:BY});
 int('con',-232,17.6,()=>S.f.luggage?'Look at the Lumen flight case':null,()=>run([N('A flight case stencilled LUMEN · SAFESPHERE DEMO PODS · SPARE APs. Inside, in foam, six small white boxes. Five are labelled. One slot is empty.'),...(S.clues.includes('evil_twin')?[N('The missing one is in the ceiling above registration. You\'d bet your badge on it.')]:[N('Wi-Fi access points. Lumen brought spare Wi-Fi access points to a con that already has Wi-Fi.'),{unlock:'clues'},FX({clue:'evil_twin'})])],hub));
 /* ---- level 1 ---- */
 int('con',0,-60.6,()=>'Lean on the railing',N1('From the gallery you can see the whole Ring: lanyards flowing round the courtyard like a slow river. Someone below drops a badge. Someone else picks it up and reads the name aloud. Opsec, everyone.'),{y:L1});
 int('con',146,-19,()=>'Sit in on the workshop',once('ws',()=>[N(pick(['"Threat Modelling for People Who Hate Meetings." Step one: who wants your stuff? Step two: what happens if they get it? You take notes.','A live demo: the speaker finds four people\'s home towns from one holiday photo. The room goes very quiet.','"Your password manager is the one egg basket worth having." Somebody in the front row applauds alone.'])),FX({skill:2})],'The speaker is answering a question that is really a forty-minute statement. You slip back out.'),{y:L1});
 int('con',146,-42,()=>'Watch the Wireshark workshop',N1('Two hundred people capturing their own network traffic and discovering, collectively, that their laptops talk to more servers than they have friends.'),{y:L1});
 int('con',146.5,2,()=>'Solder practice station',()=>{const k='sol'+S.ch;if(S.room[k])return run([N('The volunteer shakes her head. "Let the iron cool. Come back later."')],hub);S.room[k]=1;run([T('Volunteer','Free solder lesson! Make a little LED badge. Mind your fingers.'),{game:'timing',kind:'solder',n:3}],hub)},{y:L1});
 int('con',136.4,6,()=>'Watch the LED wall',N1('Thousands of LEDs cycling through Conway\'s Game of Life. Someone has built a glider gun that spells "BE EXCELLENT".'),{y:L1});
 int('con',152.8,-3,()=>'Badge hacking table',N1('Tables of con badges with their guts out. A teenager has made hers play the con\'s theme tune in eight-bit. You clap. She bows.'),{y:L1});
 int('con',173.4,-43,()=>'Peek into a studio pod',N1('A tiny room with a ring light, a microphone and a streamer explaining SQL injection to 900 viewers using only a sandwich as a prop.'),{y:L1});
 int('con',180,-30,()=>'Play OUTRUN.EXE',once('arc',()=>[N('You grip the wheel. Neon palm trees. A synth soundtrack that sounds like 1987 dreaming of the future. You take first place and a little ticket printer chatters.'),FX({cred:3})],'You put your last coin in. You crash on the first corner. The machine plays a sad little tune.'),{y:L1});
 int('con',172,-38.5,()=>'Vending machine',()=>run([N(S.cred>0?'The machine thinks about it, then drops a Club-Mate with a clunk. One credit well spent.':'You pat your pockets. No credits. The machine glows at you, unbothered.'),...(S.cred>0?[FX({cred:-1})]:[])],hub),{y:L1});
 int('con',71,-109,()=>'Read the Con Ops whiteboard',()=>run([N(S.ch>=4?'Marge\'s whiteboard, rewritten overnight: "4PM KEYNOTE · AV: NYX (signed!) · EVIDENCE: RIN, ADA · REGULATOR: SENT · DO NOT BE WRONG." Someone has drawn a small heart next to the last line.':'A whiteboard: "BADGES · RADIOS · LOST PROPERTY · DAVE (?)". Under it, in Marge\'s handwriting: "Do not trust the Wi-Fi. I mean it."')],hub),{y:L2});
 int('con',86,-100,()=>'Press room',N1('Three journalists, one coffee machine, and a sign: "PLEASE DO NOT PHOTOGRAPH ATTENDEES WITHOUT CONSENT". A man photographs the sign.'),{y:L2});
 int('con',101,-102.6,()=>'Speaker lounge biscuits',N1('Real biscuits. Chocolate ones. You take one and walk out at a normal speed, as if you are a speaker. Nobody stops you. You are, for one biscuit, a speaker.'),{y:L2});
 int('con',64,44.5,()=>'Sit in the quiet room',once('qr',()=>[N('You sit. You breathe. You put your phone face-down. Somewhere far below, four thousand people are arguing about tabs. In here, nothing.'),FX({exp:-2})],'You sit for another minute. It\'s still nice.'),{y:L1});
 int('con',-50.8,-30,()=>'Look out over the courtyard',N1('From up here the courtyard is a green square in a glass box. The big tree, the amphitheatre, the fountain, and two people in cloaks having what looks like a very serious duel with foam swords.'),{y:L2});
 int('con',-175.2,-44,()=>'Look through the glass at the pool',N1('The hotel pool, glowing blue. One person is swimming slow lengths in a CTRL+ALT+CON hoodie. You have so many questions.'),{y:L2});
 int('con',-187,-61.4,()=>'Read the meeting room slides',N1('"LUMEN PARTNER BREAKFAST · SafeSphere 2 roadmap". Somebody forgot to close the projector. The next slide is titled "Monetising the Social Graph".'),{y:L1});
 /* ---- back of house ---- */
 int('con',-90,-97.4,()=>'Watch the CCTV wall',()=>run([N(S.ch>=2?'Fifteen screens. One is paused on the bar from last night: you can see Victor leaning over the counter towards Bea. A sticky note under the screen: "LUMEN ASKED FOR THIS FOOTAGE AGAIN. NO WARRANT. NO."':'Fifteen screens. The Foyer, the Ring, the bar, the car park. On one of them, a man is trying to pick up a free tote bag with his feet. Security is watching him very closely.')],hub));
 int('con',59,-97.6,()=>'Look at the box on the core switch',()=>run([N('Between the racks, plugged straight into the con\'s core switch: a small white box with a Lumen asset sticker and a hand-written label: "temp · do not unplug · V.H."'),...(S.clues.includes('evil_twin')?[N('The other end of the fake Wi-Fi. Nyx and Priya will want a photo.')]:[N('Lumen hardware, inside the con\'s own network. That\'s not sponsorship. That\'s a wiretap with a logo.'),{unlock:'clues'},FX({clue:'evil_twin'})])],hub));
 int('con',146,-65.6,()=>'Fire stairs · roof',()=>fadeTp(()=>teleportArea('conroof')));
 int('con',124.8,-49,()=>'Fire stairs · down',()=>fadeTp(()=>teleport('con',146,-66.5,0,0)),{y:RFY});
 int('con',104.3,-4.6,()=>'Check the box on the antenna mast',()=>run([N('Zip-tied to the mast, wrapped in grey tape so it looks like part of the roof: a weatherproof box with a directional antenna pointed straight down at the Halcyon.'),...(S.clues.includes('rooftop')?[N('WHISPER\'s real listening post. The one on the hotel was a decoy. Of course it was.')]:[N('This is the real one. Whoever watches this con watches it from here.'),{unlock:'clues'},FX({clue:'rooftop'})])],hub),{y:RFY});
 int('con',132.4,0,()=>'Look out from the con roof',N1('The whole site laid out below you: the courtyard tree, the glass Foyer, the hotel tower going up into the clouds with Room 1337 somewhere near the top. You can see the Lumen logo turning in the Foyer, very small, like a fly in a jar.'),{y:RFY});
 /* ---- basement ---- */
 int('con',-113,3.4,()=>'Look at the black car',N1('A long black car, very clean, very quiet. The plate reads PRIV4CY. On the dashboard: a SafeSphere air freshener, shaped like a shield.'),{y:BY});
 int('con',-47,6.8,()=>'Talk to the network engineers',()=>run([{w:'Engineer',np:1,t:S.ch>=3?'You want to trace WHISPER? Join the queue. Every upload goes out through an access point we don\'t own. Somewhere up high. Roof height.':pick(ROLELINES.Engineer)},...(S.f.met_priya?[N('A sticky note on a monitor: "PRIYA — your rogue AP list, printed. Don\'t lose it."')]:[])],hub),{y:BY});
 int('con',-246,-1.2,()=>'Hide among the laundry carts',N1('Warm towels, the smell of starch, and the hum of fifty machines. Nobody would look for you here. You think about staying until Monday.'),{y:BY});
 int('con',FOODPOS[4].x,FOODPOS[4].z,()=>'Order dumplings',N1('Six dumplings in a paper boat. The chef folds them faster than you can watch. "Mind, they\'re hot," he says, as you burn your mouth.'));
 int('con',FOODPOS[5].x,FOODPOS[5].z,()=>'Get a cold brew',N1('Cold brew in a can with a QR code on it. You don\'t scan it. The barista nods: "Good instinct."'));
 for(const x of[-106,-102]){for(const y of[0,L1])int('con',x,-23.2,()=>'Call the lift',()=>conLift(),{y,r:2.8,h:1.3});int('con',x,-52.4,()=>'Call the lift',()=>conLift(),{y:BY,r:2.8,h:1.3})}
 int('con',-213.6,49.6,()=>'Play the lobby piano',N1('You play the four notes of the only song you know. The piano, which is a MIDI device, plays the rest of the song for you. Somebody in the lobby claps. You bow, as if you meant it.'));
 int('con',-243,-26.4,()=>'Warm up by the library fire',N1('Leather chairs, shelves to the ceiling, a fire that is definitely gas but commits to the bit. A book on the arm of a chair: "Social Engineering: The Art of Human Hacking". Someone has left a bookmark at chapter one. Ominous.'),{y:L1});
 int('con',-159,-56.6,()=>'Look at the ballroom stage',N1('A banner: "LUMEN PARTNER GALA · TONIGHT". The tables are laid for two hundred. Every place card has a SafeSphere logo and a QR code. You turn one face-down. Then all of them on your table.'),{y:L1});
 int('con',-229.2,-53.4,()=>'Peek into the sauna',N1('A wall of heat and a man in a CTRL+ALT+CON towel reading a printed RFC. "It\'s the only place nobody asks me about my day job," he says.'),{y:L2});
 int('con',-5,-68,()=>'Look down at the stage',N1('From the top of the bowl the stage is a glowing postage stamp under a screen the size of a house. Two thousand seats. Tonight every one of them will be full.'),{y:L2});
 int('con',-70,40,()=>'Look up at the atrium',N1('Three storeys of glass, a giant hanging sign, the Lumen logo turning like a lighthouse, and through the west wall the Halcyon across its garden, every window lit, the Skybridge a bright line between the two buildings.'));
 int('con',96,6.4,()=>'Sit in the charging lounge',N1('Twelve sockets, forty people, one extension lead with a hand-written sign: "THIS IS NOT A HONEYPOT". It is clearly a honeypot.'));
 int('con',173,23.4,()=>'Try the cockpit simulator',N1('You land a passenger jet on the second try. The volunteer tells you the first try was a crash. You decide the first try was a test of the software.'));
 int('con',180,-12.6,()=>'Watch a board game',N1('Six strangers are playing a game where you have to guess who the traitor is. Everyone is accusing the one person who is actually a professional red-teamer. They are right.'),{y:L1});
 int('con',184,20,()=>'Watch a film',N1('Hackers (1995), at full volume. The audience shouts every line, including the bad ones. Especially the bad ones.'),{y:L1});
 int('con',-37,52,()=>'Stand in the sky garden',N1('A rooftop garden over the food court: trees in planters, fairy lights, the plaza glowing below and the hotel tower stacked above. It smells of rain and fried noodles.'),{y:L2});
 int('con',-79.3,57.6,()=>'Pay for parking',N1('The machine wants your registration plate, your phone number and your email "to send your receipt". You walk away. You don\'t have a car. You were just curious.'),{y:BY});
 /* ---- 13th floor + roof ---- */
 for(let i=0;i<4;i++)for(const z of[-8.6,8.6])int('f13',239.75+i*2.4,z,()=>'Call the lift',()=>liftMenu(),{r:2.8,h:1.3});
 int('f13',228.7,-9.2,()=>'Ice machine',N1('It makes a noise like a dial-up modem, then dispenses one ice cube. You treasure it.'));
 int('f13',232,9.4,()=>'Vending nook',N1('Crisps, Club-Mate, and a toothbrush for £6. Someone has taped a handwritten sign to the glass: "THE B4 BUTTON IS A LIE".'));
 int('f13',249.7,10.4,()=>'Housekeeping cart',N1('Tiny shampoos, tiny soaps, and a laminated card: "Please do not hack the housekeeping cart." So someone has tried.'));
 int('f13',212.8,-10,()=>'Look out of the corridor window',N1('Thirteen floors down, the plaza glows. The neon sign is a pink smudge. Over the road, an office tower with one lit window: a man eating cereal at his desk at midnight.'));
 int('f13',275.2,10,()=>'Look out of the corridor window',N1('The convention centre, flat-roofed and glowing, and beyond it the whole city. On the con roof, a tiny red light blinks on a mast.'));
 int('f13',261.4,13.4,()=>'Drop into Room 1336',()=>run([{w:'Partygoer',np:1,t:pick(ROLELINES.Partygoer)},N('The room is twelve people, six laptops, a mountain of fries and a TV showing a Linux boot screen on loop. Someone hands you a fry. You have been accepted.')],hub));
 int('f13',212+8*16/3+2.67,-12.7,()=>'Room 1309',()=>run([N(scn('kit')>=3?'Room 1309. Kit\'s room. A new sign on the door: "DO NOT DISTURB". The peephole has a sticker over it from the outside. You hope it was her.':S.stage.kit>=2?'Room 1309. A photo taken outside this door is how the creep found her. You don\'t linger. You check the corridor both ways when you leave.':'Room 1309. A cyan strip of armour paint on the door handle. Someone\'s been in and out in a hurry, carrying a costume.')],hub));
 int('f13',212+2*16/3+2.67,-12.7,()=>'Room 1303',N1('Room 1303. A Faraday bag hangs on the door handle like a "do not disturb" sign. Even the peephole has a tiny square of tape over it. You don\'t need to ask whose room this is.'));
 int('f13',269.5,13.6,()=>'Use your laptop',()=>roomMenu());
 int('f13',273.6,14.2,()=>stepIs('bed')?(beatStep(curBeat()).lbl||'Drop your bag'):S.day>=1&&S.slot===5&&!curBeat()?'Go to bed (end the day)':'Lie on the bed',()=>{if(stepIs('bed'))return stepGo();if(S.day>=1&&S.slot===5&&!curBeat())return endDay();roomMenu()});
 int('f13',274.6,17.4,()=>'Look out of the window',N1('Two windows. The city glitters through both. Somewhere out there, Proof is closed for the night, and a tiny person in a cape is drawn on a stack of empty bags.'));
 int('f13',264.9,13.9,()=>'Open the minibar',N1('£9 for a Toblerone. You close the minibar with respect.'));
 int('f13',265.4,18.8,()=>'Look at the bathtub',()=>run([N(S.ch>=4?'Still full of everyone\'s phones from last night. Priya\'s bathtub Faraday zone. It\'s a monument now.':'A bathtub. Clean. Suspiciously crunchy towel.')],hub),{r:2.6});
 int('f13',271.5,18.4,()=>'Sit in the seating area',N1('A sofa, two armchairs and a coffee table. Enough seats for a small party. You have never once had a small party.'));
 int('f13',244,17,()=>'Look through the telescope',N1('Pointed at the sky, it shows stars. Pointed at the office tower across the road, it shows a man eating cereal at his desk at midnight. You point it back at the stars.'),{y:TOP});
 int('f13',227,-3,()=>'Sit on a lounger',N1('You lie back by the pool. The city hums. For a minute, there is no con, no Lumen, no WHISPER. Just sky.'),{y:TOP});
 int('f13',218,13.2,()=>'Order at the sky bar',N1('"Sky bar" is a man called Phil with a cooler box. Phil makes a very good lemonade. Phil does not want to see your GitHub.'),{y:TOP});
 int('f13',230,-5,()=>'Dip your toes in the pool',N1('Cold. Shockingly cold. A man in the pool says "you get used to it", in the voice of someone who has not got used to it.'),{y:TOP});
 int('f13',249.4,0,()=>S.clues.includes('device')?'The spot where the sniffer was':null,N1('Just tape marks now, on the fence post by the maintenance door. Someone took the box. Someone with silver hair, probably.'),{y:TOP});
 int('f13',275,8,()=>'Look over the edge',N1('Thirteen floors down, the street glows. Up here the wind is loud enough that nobody could listen in. That\'s probably the point.'),{y:TOP});
}
/* ---------------- moving between places ---------------- */
/* the hotel lifts: lobby, mezzanine, level 2, the 13th floor, the car park (from day 2) */
function liftMenu(){
 const here=WD.reg,lv=here==='con'?(WD.y<-2?'B':WD.y>8?'2':WD.y>3?'1':'G'):'13',go=(r,x,z,yaw,y)=>()=>{fadeTp(()=>teleport(r,x,z,yaw,y));return[]};
 if(S.ch===1&&!S.f.d1_checkin)return run([N('You press the button. A little screen asks you to tap your room key. You don\'t have a room key yet. Reception first.')],hub);
 run([{hide:1},N(here==='con'?'The lift arrives with a soft ding. Muzak. A mirror. The panel: B, G, 1, 2, and then a long gap to 13.':'The lift arrives with a soft ding. Muzak. A mirror. You look tired, but in a cool way.'),C(
  {t:'G · Lobby',if:()=>lv!=='G',then:go('con',-212,-27,Math.PI,0)},
  {t:'1 · Mezzanine · Ballroom · Meeting rooms',if:()=>lv!=='1',then:go('con',-212,-27,Math.PI,L1)},
  {t:'2 · Pool · Spa · Gym',if:()=>lv!=='2',then:go('con',-212,-27,Math.PI,L2)},
  {t:'13 · Room 1337',if:()=>lv!=='13',then:go('f13',243,-10.2,0,0)},
  {t:'B · Car park',if:()=>S.ch>=2&&lv!=='B',then:go('con',-104,-51,Math.PI,BY)},
  {t:'Stay here',then:[]})],hub);
}
/* the con's public lifts on the Foyer's north wall */
function conLift(){
 const lv=WD.y<-2?'B':WD.y>8?'2':WD.y>3?'1':'G',go=(x,z,yaw,y)=>()=>{fadeTp(()=>teleport('con',x,z,yaw,y));return[]};
 run([{hide:1},N('A glass lift. Someone has stuck a sticker over the "door close" button that says "placebo".'),C(
  {t:'G · Foyer',if:()=>lv!=='G',then:go(-104,-21.6,Math.PI,0)},{t:'1 · North gallery (Skybridge)',if:()=>lv!=='1',then:go(-104,-21.6,Math.PI,L1)},
  {t:'B · Car park',if:()=>S.ch>=2&&lv!=='B',then:go(-104,-51,Math.PI,BY)},{t:'Stay here',then:[]})],hub);
}
function serviceLift(){
 run([N('A steel box that smells of laundry and old coffee.'),C(
  {t:'Ground · back stairs',if:()=>WD.y<-2,then:()=>{fadeTp(()=>teleport('con',-230,37.4,0,0));return[]}},
  {t:'B · basement',if:()=>WD.y>-2,then:()=>{fadeTp(()=>teleport('con',-234,51.2,0,BY));return[]}},
  {t:'Stay here',then:[]})],hub);
}
function trainMenu(){
 if(stepIs('train'))return stepGo();
 if(curBeat()&&curBeat().id==='d1_station')return run([N('Not that train. Yours is the 16:12 to the Conference Quarter, and something tells you to look around the concourse first.')],hub);
 run([{hide:1},N('The train hums at Platform 4. The doors chime. A screen above them lists the stops.'),C(
  {t:'Conference Quarter · the Halcyon and the con',if:()=>S.day>=1,then:()=>{ach('train');fadeTp(()=>{teleportArea('plaza');run([N('Twenty minutes, and the doors open onto the Conference Quarter. The Halcyon\'s neon is still shouting.')],hub)});return[]}},
  {t:'Linden Street · home',then:()=>{ach('train');fadeTp(()=>{teleportArea('bakery');run([N('Two stops. Linden Street smells of bread and diesel, the way it always has.')],hub)});return[]}},
  {t:'Brindle & Co · work',then:()=>{if(!(f('office_open')||leadOpen('office')))return[N('Linda made you promise not to come in this week. Linda would be thrilled to see you, which is exactly the problem.')];ach('train');ach('office');fadeTp(()=>{teleportArea('office');run([N('The office, on a weekday you\'re supposed to be off. The printer senses you immediately.')],hub)});return[]}},
  {t:'Not yet',then:[]})],hub);
}
function fadeTp(fn){if(window.__test){fn();WD.area=null;return}const f=$('fade');sfx('whoosh');f.classList.add('on');setTimeout(()=>{fn();WD.area=null;G.forceFrame=true;setTimeout(()=>f.classList.remove('on'),160)},300)}
/* ---------- characters ---------- */
/* a spot inside an area: near its middle, on its floor, with room round it; k picks the k-th such spot */
const SPOTC={};
function spotIn(key,k){k=k||0;const ck=key+':'+k;if(SPOTC[ck])return SPOTC[ck];const A=AREAS[key];if(!A)return null;
 const y=A.sp[3]||0,cx=(A.r[0]+A.r[2])/2,cz=(A.r[1]+A.r[3])/2,R=Math.max(A.r[2]-A.r[0],A.r[3]-A.r[1])/2,found=[];
 for(let r=0;r<=R&&found.length<=k;r+=1.1)for(let a=0;a<(r?Math.max(6,Math.round(r*2.4)):1);a++){const t=a/(r?Math.max(6,Math.round(r*2.4)):1)*Math.PI*2+r,x=cx+Math.cos(t)*r,z=cz+Math.sin(t)*r;
  if(x<A.r[0]+1||x>A.r[2]-1||z<A.r[1]+1||z>A.r[3]-1)continue;const h=heightAt(A.reg,x,z,y+1);if(Math.abs(h-y)>.35)continue;
  let ok=true;for(const[dx,dz]of[[0,0],[.9,0],[-.9,0],[0,.9],[0,-.9]])if(blockedAt(A.reg,x+dx,z+dz,h,.35)){ok=false;break}
  if(ok&&found.every(p=>Math.hypot(p[0]-x,p[1]-z)>2.4))found.push([x,z,h]);if(found.length>k)break}
 const p=found[k]||found[found.length-1]||[A.sp[0],A.sp[1],y];return SPOTC[ck]={reg:A.reg,x:p[0],z:p[1],y:p[2]}}
/* where everyone is: a function of day d and part of the day s. A fixed spot [reg,x,z,y], an area (optionally with which spot), or null */
const at=(reg,x,z,y)=>({reg,x,z,y:y||0});
const WHERE={
 ellie:(d,s)=>d<=1&&s===0?at('home',-299,3.7):d===5&&s>=1&&s<=2?at('home',-299,3.7):(d===3||d===4||d>=6)&&s<=3?at('con',-183.6,56.8):(d>=3&&d!==5||d===5&&s>=3)&&s===4?['garden',1]:null,
 nyx:(d,s)=>d>=2&&s<=3?at('con',145,-44.5):d>=2&&s===4?['bar',2]:null,
 ada:(d,s)=>d>=2&&s!==3?at('con',146,-6.8):d>=2?['food',0]:null,
 priya:(d,s)=>d>=2&&s<=3?at('con',146,13):d>=2&&s===4?['quiet',0]:null,
 juno:(d,s)=>d>=2&&s<=4?at('con',189,-57,L1+.25):null,
 kit:(d,s)=>d>=2&&s<=3?at('con',18,66.8):d>=2&&s===4?['skygarden',0]:null,
 rin:(d,s)=>d>=2&&s>=1?at('con',64,37.4):d>=3&&s===0?['naps',0]:null,
 bea:(d,s)=>d>=1&&s>=2?at('con',-152,-61.4):d>=2&&s===1?['terrace',0]:null,
 mira:(d,s)=>d>=3&&s>=4?at('f13',270.8,-2.2,TOP):d>=4&&s===3?['conroof',0]:null,
 saoirse:(d,s)=>d>=3&&s<=3?['press',0]:d>=3&&s===4?['bar',1]:null,
 sunny:(d,s)=>d>=4?['noc',0]:null,
 tilly:(d,s)=>d>=2&&s<=4?['badgelab',0]:null,
 petra:(d,s)=>d>=2&&s<=2?['carhack',0]:d>=2&&s<=4?['carpark',0]:null,
 astrid:(d,s)=>d>=2&&s<=3?['aero',0]:d>=2&&s>=4?['conroof',1]:null,
 yuki:(d,s)=>d>=2&&s>=1?['arcade',0]:null,
 vesper:(d,s)=>d>=2&&s>=3?['lumenlounge',0]:d>=3&&s===0?['spa',0]:d>=3&&s===1?['pool',1]:null,
 delphine:(d,s)=>d>=2&&s<=2?at('con',-100,33.4):d>=2&&s<=4&&d!==5?['lumenlounge',1]:d===5&&s>=3?['grill',0]:null,
 noor:(d,s)=>d>=2&&s<=2?['speakers',0]:d>=2&&s<=4?['library',0]:null,
 fern:(d,s)=>d>=1&&s<=2?['garden',0]:d>=2&&s===3?['roof',0]:null,
 wren:(d,s)=>d>=2&&s<=3?['pool',0]:d>=2&&s===4?['gym',0]:null,
 pia:(d,s)=>d>=1&&s<=4?['station',2]:null,
 dave:(d,s)=>d===1&&s>=3?at('con',-81.5,22):d>=2?at('con',106,-27):null,
 marge:(d,s)=>d>=1&&d<7?at('con',75.6,-90,L2):d===7?at('con',-5,-121,1.6):null,
 victor:(d,s)=>d<=2&&d>=1&&s<=3?at('con',-100,30.4):d===5&&s>=3?['grill',1]:d>=3&&s===4?['lumenlounge',2]:null,
 owen:(d,s)=>d>=2&&s<=3?['conops',0]:null,
 krall:(d,s)=>d>=3&&s>=3?['corridor',0]:null,
 linda:(d,s)=>d===0&&s<=2?at('office',537.4,2.4):null,
 gary:(d,s)=>d===0&&s===1?at('office',521,8.6):null
};
/* a story beat can hold someone in place, or hide them (S.hold = {id:[reg,x,z,y]|0}) */
function placeChars(){if(!S)return;const d=S.day,sl=S.slot;
 for(const c of WCH){let p=S.hold&&S.hold[c.id]!==undefined?S.hold[c.id]:WHERE[c.id](d,sl);if(typeof GONE!=='undefined'&&GONE[c.id]&&GONE[c.id]())p=null;
  // someone with a scene ready waits where that scene starts, so talking to them never whisks you somewhere else
  if(p&&ROM.includes(c.id)&&S.day>=1&&sceneReady(c.id)){const sa=sceneArea(c.id+scn(c.id));if(sa&&AREAS[sa]&&!areaLock(sa))p=[sa,ROM.indexOf(c.id)%3]}
  if(Array.isArray(p)&&typeof p[0]==='string'&&!AREAS[p[0]]&&p.length>=3)p={reg:p[0],x:p[1],z:p[2],y:p[3]||0};
  else if(Array.isArray(p))p=spotIn(p[0],p[1]);
  if(!p){c.on=false;continue}c.on=true;c.reg=p.reg;c.x=p.x;c.z=p.z;c.y=p.y||0}}
/* the area a scene opens in: its first [bg ...] */
const SCAREA={};function sceneArea(id){if(SCAREA[id]!==undefined)return SCAREA[id];const m=SC[id]&&SC[id].match(/^\s*\[bg ([a-z0-9]+)\]/m);return SCAREA[id]=m?bgArea(m[1]):null}
const UNMET={nyx:'the woman picking locks',ada:'the person at the CTF table',priya:'the woman by the dashboards',juno:'the streamer',kit:'the cosplayer',rin:'the person behind the bean bag',bea:'the bartender',mira:'the woman on the air-con unit',saoirse:'the woman with the notebook',sunny:'the woman in hi-vis',tilly:'the woman with the soldering iron',petra:'the mechanic',astrid:'the woman with the antenna',yuki:'the girl at the arcade cabinet',vesper:'the singer',delphine:'the woman in the navy suit',noor:'the woman with the case files',fern:'the gardener',wren:'the lifeguard',pia:'the violinist'};
const ROLEIDLE={
 marge:['Be excellent to each other. And hydrate.','If you see Lumen people in the ceiling, tell me. I\'m only half joking.','Twenty years of this con. Every year I swear it\'s the last.'],
 victor:['Have you tried SafeSphere? It\'s free. Forever.','Privacy is a human right. I say it in every interview.','Not now.'],
 owen:['Owen Pryce, deputy chair. If it\'s about the schedule, it\'s already changed.','Sponsors keep the lights on. People forget that.','Busy. Sorry. Very busy.'],
 krall:['Can I help you?','This floor is closed for refurbishment.','Move along.'],
 linda:['Queue first, {h}. Then you can go and do whatever you do in the evenings.','Enjoy your hacker thing. Don\'t hack anything I\'d have to explain to legal.'],
 gary:['Mate. Is it true you can hack a printer?','I put the new app on everyone\'s phone. The shield one. Lumen gave us a discount.'],
 dave:['Bro. Ten million downloads. Ten. Million.','Want a stress ball? It has a QR code. Don\'t scan it.'],
 davex:['Two-factor on everything now, bro. I\'m basically Priya.','I deleted all my boarding passes. I feel naked. In a good way.','Everything in my inbox looks like a scam now. Which is correct, I guess.']
};
function charAct(c){
 const id=c.id;
 if(stepIs(id))return stepGo();
 if(id==='dave'&&SC['dave'+(S.daveS||0)]!==undefined&&DAVEOK[S.daveS||0]&&DAVEOK[S.daveS||0]())return run([...scr('dave'+(S.daveS||0)),()=>{S.daveS=(S.daveS||0)+1;return[]}],hub);
 if(!ROM.includes(id)){const k=id==='dave'&&S.day>=2?'davex':id;return run([L(lookOf(id),'n',pick(ROLEIDLE[k]||['...']))],hub)}
 if(!met(id)&&SC[id+'0']===undefined)return run([L(lookOf(id),'n',pick(['Hey. Sorry, can\'t stop, I\'m in the middle of something. Later?','Oh! Hi. Not right now, sorry. Come back in a bit?','Busy, busy. Catch me later.']))],hub);
 const a=areaAt(c.reg,c.x,c.z,c.y);return hangMenu(id,a||ROUTES[id].loc);
}
