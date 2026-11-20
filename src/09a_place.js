/* ============ WORLD CONTENT: who stands where, what you can use, what's locked ============ */
const BG2AREA={train:'platform',con:'foyer',lock:'lockpick',ctf:'ctf',soc:'soc',stream:'creator',hotel:'room1337',roof:'plantdeck',stage:'hallA',keynote:'hallA',vendor:'vendor',flat:'flat',bakery:'bakery',cos:'cosplay',chill:'lounge',bar:'bar',lobby:'lobby',office:'office'};
const FAR={home:70,con:260,f13:460,office:80,station:220};
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
 walkway:['The bar terrace opens onto this walk. Shortcut to the courtyard. Tell no one.'],
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
 terrace:['Best seat in the hotel. You can see the whole courtyard and none of the queues.'],
 skybridge:['A glass bridge between a hotel and a con. Peak architecture. Peak vertigo.'],
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
 const spots={foyer:[[-30,14],[-24,-4],[-40,20],[-28,32,0,1],[-22,12]],vestibule:[[-36,39.5,0,1]],ringN:[[-15,-30],[10,-30],[35,-28],[25,-33,0,1],[-28,-28]],ringE:[[55,-20],[55,10],[53,25,0,1]],ringS:[[0,30],[30,30],[-10,33,0,1]],walkway:[[-25,-20]],
  courtyard:[[-12,-15],[20,-18],[38,0],[-10,18],[18,10],[5,-2,-1.2,1],[31,-15.6,0,1]],hallA:[[-5,-66,0,1],[-12,-56,1.1,1],[2,-48,3.3,1],[8,-44,4.4,1],[-27,-50],[16,-56]],hallB:[[30,-48,0,1],[40,-44,0,1],[36,-38]],
  vendor:[[62,-70],[86,-60],[74,-48],[98,-70],[90,-42],[108,-56,0,1]],villagerow:[[80,3],[105,3]],lockpick:[[64,-14,0,1],[74,-20]],ctf:[[84,-27,0,1],[100,-10,0,1],[88,-20]],soc:[[111,-14],[118,-30,0,1]],
  carhack:[[66,22,0,1],[74,26],[63,14]],ics:[[86,13,0,1],[94,30]],soceng:[[106,28.6,0,1],[110,20.8,0,1],[116,24]],food:[[30,13.5,0,1],[40,20],[44,12]],cosplay:[[16,46],[36,48],[27,46,.6,1],[40,61,0,1],[17,62]],lounge:[[49,48,0,1],[58,42]],naps:[[53,57]],
  lobby:[[-70,0],[-60,14],[-75,24],[-66,-4]],cafe:[[-56,26.4,0,1],[-48,23]],bar:[[-76,-24],[-62,-28],[-52,-19,0,1],[-70,-33.5,0,1],[-58,-33.5,0,1]],terrace:[[-40,-21,0,1],[-34,-12]],
  gallery:[[-8,-31,5.5,1],[26,-31.2,5.5,1],[58,-10,5.5,1],[20,34,5.5],[-22.5,12,5.5]],skybridge:[[-36,-22,5.5]],hotelL1:[[-70,-22,5.5]],gym:[[-78,-12.6,5.5,1]],workshop:[[80,-24.3,5.5,1],[88,-21,5.5,1]],workshopA:[[66,-22.6,5.5,1]],hwv:[[100,-24.8,5.5,1],[112,-17.8,5.5,1],[118,-10,5.5]],
  creator:[[73,14,5.5,1]],arcade:[[80,20,5.5,1],[86,24,5.5,1],[84,34,5.5]],conops:[[96,18,5.5],[102,26,5.5,1]],press:[[110,21,5.5,1]],speakers:[[116,30,5.5]],quiet:[[50,46.6,5.5,1]],fcterrace:[[34,14,5.5]],
  plaza:[[-50,40],[-90,44],[-20,50],[-6,47.6,0,1],[-70,92]],carpark:[[-60,30,-4.5]],noc:[[-18,9.2,-4.5,1],[-11,9.2,-4.5,1]],corridor:[[230,10],[250,-10]],roof:[[227,-2.8,3.6,1],[220,12,3.6],[235,15,3.6]],
  station:[[720,30],[750,40],[715,34.6,0,1],[760,28.6,0,1],[740,26]],platform:[[720,12],[750,10],[730,16,0,1],[760,14]],office:[[513,7.9,0,1],[522,13.9,0,1],[516,13.9,0,1]]};
 let i=0;
 for(const a in spots)for(const p of spots[a]){
  if(!AREAS[a])continue;
  WD.npcs.push({id:'n'+i,v:i%8,role:null,reg:AREAS[a].reg,x:p[0],z:p[1],y:p[2]||0,hx:p[0],hz:p[1],ar:a,tx:p[0],tz:p[1],wait:rnd()*5,still:!!p[3]});
  i++;
 }
 const R=(role,reg,x,z,y,ar,v)=>WD.npcs.push({id:'r'+(i++),v:v===undefined?7:v,role,reg,x,z,y:y||0,hx:x,hz:z,ar,tx:x,tz:z,wait:0,still:true});
 R('Volunteer','con',-43.4,29,0,'foyer',3);R('Volunteer','con',-43.4,33,0,'foyer',5);R('Info','con',-24.5,27.2,0,'foyer',2);R('Doorman','con',-56.5,31.6,0,'plaza');
 R('Receptionist','con',-84.4,5,0,'lobby',4);R('Receptionist','con',-84.4,10,0,'lobby',6);R('Barista','con',-53.5,19.3,0,'cafe',1);R('Security','con',-38,-33.2,0,'security');
 R('Engineer','con',-14,10.4,BY,'noc',0);R('Engineer','con',-7,9.4,BY,'noc',2);
 for(const[x,z]of[[260,17],[262.6,19.8],[260.2,20.6],[263,14.6]])R('Partygoer','f13',x,z,0,'room1336',(x*7|0)%7);
 R('Commuter','station',728,12,0,'platform',2);R('Commuter','station',744,13,0,'platform',5);R('Coworker','office',525,8.3,0,'office',4);
}
/* ---------------- gates: ropes, locked doors and card readers that open with the story ---------------- */
const GATES=[];
function gate(reg,kind,x0,z0,x1,z1,y,open,msg,label){GATES.push({reg,kind,x0,z0,x1,z1,y:y||0,open,msg,label:label||(kind==='rope'?'Roped off':kind==='card'?'Staff door':'Locked door')})}
function gateBox(g){const t=.3,h=g.kind==='rope'?1.3:3;return[Math.min(g.x0,g.x1)-t,Math.min(g.z0,g.z1)-t,Math.max(g.x0,g.x1)+t,Math.max(g.z0,g.z1)+t,g.y,g.y+h]}
function placeGates(){
 const preC=()=>d1('open'),hotelMsg='"Ceremony first!" says a volunteer, arms out like a goalkeeper. "Hall A. Everything opens up after."';
 const ropeC=(x0,z0,x1,z1,y)=>gate('con','rope',x0,z0,x1,z1,y,preC,()=>hotelMsg);
 // badge check
 gate('con','rope',-45,23.6,-20.4,23.6,0,()=>d1('badge'),()=>'A volunteer with a lanyard the size of a seatbelt: "Badge first! Registration\'s right there."');
 gate('con','rope',-19.6,25.4,-19.6,35.6,0,()=>d1('badge'),()=>'"Badge first," says a volunteer, who has said "badge first" four hundred times today.');
 // before the opening ceremony
 ropeC(-45.4,4.4,-45.4,15.6);ropeC(-32.5,21.6,-25.5,21.6);ropeC(33.2,-34.4,36.8,-34.4);ropeC(52.2,-34.4,57.8,-34.4);ropeC(-1.2,-24.6,1.2,-24.6);
 ropeC(-19.6,-18.2,-19.6,-15.8);ropeC(-19.6,6.8,-19.6,9.2);ropeC(60.4,-1.6,60.4,7.6);ropeC(49.6,-6.2,49.6,-3.8);ropeC(49.6,14.6,49.6,17.4);ropeC(53.6,35.6,56.4,35.6);
 ropeC(8.8,24.6,11.2,24.6);ropeC(38.6,24.6,41.4,24.6);ropeC(24.6,35.6,29.4,35.6);ropeC(-60,7.4,-52,7.4);
 // the bar opens once you've dropped your bag
 const barOpen=()=>d1('room'),barMsg=()=>'A sign on a stand: "BAR OPENS 7PM · HOTEL GUESTS: CHECK IN FIRST". It\'s not seven yet. Go and find your room.';
 gate('con','door',-71.5,-10,-68.5,-10,0,barOpen,barMsg,'The bar');gate('con','door',-30,-18.5,-30,-15.5,0,barOpen,barMsg,'Bar terrace');gate('con','door',-45,-18.5,-45,-15.5,0,barOpen,barMsg,'Bar terrace');
 // outside, once you're checked in
 const outMsg=()=>'You could go outside. But you\'ve only just arrived, and the opening ceremony is the whole point of being here.';
 gate('con','door',-35,44,-29,44,0,()=>d1('checkin'),outMsg,'Convention doors');gate('con','door',-62,30,-58,30,0,()=>d1('checkin'),outMsg,'Revolving door');
 // basement fire stairs: from day 2
 gate('con','door',-85,21.2,-85,22.8,0,()=>S.ch>=2,()=>'"FIRE STAIRS · B". A sign underneath: "Guests: emergencies only." Maybe tomorrow, when you\'re less new.','Fire stairs');
 // luggage room: Nyx can show you how
 gate('con','door',-85,2.2,-85,3.8,0,()=>!!S.f.luggage,()=>null,'Luggage room');
 // staff keycard doors (Nyx's route, chapter 2)
 const card=()=>!!S.f.keycard,cardMsg=()=>'STAFF ONLY. You tap nothing against the reader, because you have nothing. It blinks red at you, smugly.';
 gate('con','card',-30,-30.8,-30,-29.2,0,card,cardMsg);gate('con','card',20.5,-35,22.5,-35,0,card,cardMsg);gate('con','card',-6.5,-82,-3.5,-82,1.3,card,cardMsg,'Backstage');gate('con','card',-94.5,-40,-91.5,-40,BY,card,cardMsg,'Service tunnel');
 // the Lumen Lounge
 gate('con','door',-58,-24,-56,-24,L1,()=>S.ch>=4&&(S.f.met_bea||S.f.dave_helped),()=>S.ch<4?'LUMEN LOUNGE · INVITE ONLY. The door has a card reader and, somehow, an attitude.':'Locked. You\'d need someone with a staff key. Someone like a bartender. Or a former Lumen intern.','Lumen Lounge');
 // hotel 13th floor + roof
 gate('f13','door',272.7,-12,273.9,-12,0,()=>!!S.f.roof_open,()=>'HOUSEKEEPING. Locked. Through the gap under the door you can hear a stairwell breathing.','Housekeeping');
 gate('f13','door',268,-.7,268,.7,0,()=>false,()=>'ALARMED · EMERGENCY ONLY. You are not having an emergency. Yet.','Fire exit');
 gate('f13','door',248,-1,248,1,TOP,()=>!!S.f.roof_open,()=>'MAINTENANCE · STAFF ONLY. The fence rattles in the wind. On the other side: air-con units, a water tank and, maybe, a footprint.','Maintenance door');
}
function gateClosedAt(reg,x,z,y,r){const a=y+.4,b=y+1.75;for(const g of GATES){if(g.reg!==reg||g.open())continue;const q=gateBox(g);if(x+r>q[0]&&x-r<q[2]&&z+r>q[1]&&z-r<q[3]&&q[5]>a&&q[4]<b)return true}return false}
function gateAct(g){
 if(g.label==='Luggage room'){
  if(S.f.met_nyx&&S.stage.nyx>=1)return run([N('The luggage room. Locked with a pin-tumbler lock that has seen better decades. You hear Nyx in your head: "Tension first. Then listen."'),{game:'timing',kind:'pins',n:3,who:'nyx'},()=>{S.f.luggage=1;return[N('Click. The door swings open onto a wall of suitcases and one very large flight case with a Lumen logo on it.')]}],hub);
  return run([N('LUGGAGE ROOM · STAFF ONLY. An old pin-tumbler lock. If only you knew someone who picks locks for a living.')],hub);
 }
 const m=g.msg();run([N(m)],hub);
}
/* ---------------- placing people and things ---------------- */
function placeWorld(){
 BR='con';table(-46,15,2.6,1,MT.plain('#f4efe6'));box(-47.1,.76,14.7,-44.9,.92,15.3,MT.bread,{col:false});
 BR='con';
 const ch=()=>S?S.ch:0;
 const C=(id,reg,x,z,when,o)=>WCH.push(Object.assign({id,reg,x,z,y:0,when},o||{}));
 C('ellie','home',-295.5,2.2,()=>ch()===0);
 C('ellie','con',-46,16.4,()=>ch()>=3&&ch()<5);
 C('nyx','con',69,-24.8,()=>ch()>=1);
 C('ada','con',93,-12.4,()=>ch()>=1);
 C('priya','con',115,-22,()=>ch()>=1);
 C('juno','con',66,29.5,()=>ch()>=1,{y:L1+.25});
 C('kit','con',27,54.2,()=>ch()>=1,{spr:()=>(S.stage.kit<1||S.ch===3)?'kitc':'kit'});
 C('rin','con',51.2,46,()=>ch()>=2);
 C('bea','con',-65,-36.7,()=>ch()>=1);
 C('mira','f13',270.8,-2.2,()=>ch()>=3&&S.f.roof_open,{y:TOP});
 C('dave','con',-31.6,2,()=>ch()===1);
 C('dave','con',68,-75.1,()=>ch()>=2&&ch()<5,{spr:()=>'davex'});
 C('marge','con',99,22.6,()=>ch()>=1&&ch()<4,{y:L1});
 C('marge','con',-5,-76,()=>ch()===4,{y:1.3});
 C('victor','con',-38,6,()=>ch()>=1&&ch()<3);
 C('victor','con',-80,-30,()=>ch()===3);
 C('linda','office',504.5,1.9,()=>ch()===0);
 C('gary','office',520.6,8.6,()=>ch()===0);
 genCrowd();placeGates();
 const N1=t=>()=>run([N(t)],hub);
 const once=(k,a,b)=>()=>{const key=k+S.ch;if(S.room[key])return run([N(b)],hub);S.room[key]=1;run(a(),hub)};
 /* ---- home ---- */
 int('home',-293.2,-6.4,()=>'Look at your monitor',N1('Your forum post from 3 AM: "honestly most firewalls are a joke if you know what you\'re doing." Fourteen upvotes. One reply: "source?" You never answered.'),{y:3.4});
 int('home',-292.8,1.2,()=>'Water the plant',N1('It\'s plastic. You water it anyway. It\'s a ritual now.'),{y:3.4});
 int('home',-298,.6,()=>'Check the pizza boxes',N1('Three boxes. Two empty. One contains a single crust you\'re saving for reasons you can\'t explain.'),{y:3.4});
 int('home',-297,-7.2,()=>'Look out of the window',N1('Morning. The street below. The smell of bread rising up from Proof like a summons.'),{y:3.4});
 int('home',-296.5,-6,()=>'Look at the ovens',N1('Three ovens, already roaring. Ellie gets up at 4 AM every day. You get up at 4 AM sometimes, but from the other direction.'));
 int('home',-301.1,9.6,()=>'Read the chalkboard',N1('Today\'s special: "cinnamon knot (ask the computer guy, he\'s had 400)". You have had 400.'));
 int('home',-295.5,11.2,()=>S.ch!==0||S.f.ch0_work?null:S.f.ch0b?'Head out to work':'Leave for work',()=>{if(!S.f.ch0b)return run([N('Breakfast first. You can smell the cinnamon from here. Ellie\'s at the counter.')],hub);goOffice()});
 /* ---- office ---- */
 int('office',528,4.3,()=>S.ch!==0?null:S.f.ch0_work?'Your desk':'Start on the helpdesk queue',()=>{if(S.f.ch0_work)return run([N('Forty-seven tickets. Forty-six of them are about the printer. The forty-seventh is also about the printer, but angrier.')],hub);run(CH0QUEUE(),()=>{S.f.ch0_work=1;hub()})});
 int('office',516,20.9,()=>S.ch!==0?null:'Lifts · exit',()=>{if(!S.f.ch0_work)return run([L('linda','n','Queue first, {h}. Then you can go and do... whatever you do in the evenings.')],hub);if(!S.f.ch0_gary)return run([N('Across the office, Gary from Accounts is waving at you. Hard. With both arms. You should probably see what he wants.')],hub);goEvening()});
 int('office',511.1,14.9,()=>'Fight the Accounts printer',N1('PC LOAD LETTER. You open every drawer. You close every drawer. It prints one page, a photocopy of someone\'s hand from 2016. You decide this counts as a win.'));
 int('office',503.4,16.4,()=>'Make a tea',N1('The kettle takes four minutes and sounds like a jet engine. A note on the fridge: "WHO TOOK MY YOGHURT". Under it, in different pen: "it was me. I\'m not sorry. —G"'));
 int('office',506.5,20.4,()=>'Water cooler',N1('Nobody is having a conversation at the water cooler. Everyone is having a conversation on Slack about the water cooler.'));
 int('office',528,15.2,()=>'Look into the meeting room',N1('A slide titled "Synergy Q3". Below it, someone has drawn a duck. The duck is the only thing in the meeting that made sense.'));
 int('office',503,.9,()=>'Look out of the window',N1('The city, grey and busy. Somewhere out there, four thousand hackers are packing hoodies. In two weeks you\'ll be one of them.'));
 /* ---- station ---- */
 int('station',736,6.5,()=>'Board the train',()=>trainMenu(),{r:2.6});
 int('station',736,42.6,()=>'Exit · taxi rank',()=>{if(S.ch===0)return run([N('Your train\'s on Platform 4. You\'ve checked three times. You check a fourth time.')],hub);fadeTp(()=>{teleportArea('plaza');run([N('Twenty minutes later the taxi pulls up outside the Halcyon. The neon sign is still shouting.')],hub)})});
 int('station',736,25,()=>'Read the departures board',N1('09:12 CONFERENCE QUARTER · HALCYON — PLATFORM 4 — ON TIME. A man next to you photographs the board, then his ticket, then his face. Then he posts all three.'));
 int('station',759,33,()=>'Pasty Palace',N1('"Cheese and onion, or cheese and onion?" You pick cheese and onion. It\'s the right choice.'));
 int('station',702.6,30,()=>'Ticket machine',N1('It offers to email you a receipt, text you a receipt, and "remember your card for next time". You pay with cash. The machine seems hurt.'));
 /* ---- plaza ---- */
 int('con',-104,44,()=>'Taxi rank',()=>run([N('A taxi driver looks up from his phone. "Station?"'),C({t:'"Central Station, please."',then:()=>{fadeTp(()=>{teleportArea('station');run([N('The station. Commuters, pigeons, and a departures board that still has the 09:12 to the con on it.')],hub)});return[]}},{t:'"Not yet."',then:[]})],hub));
 int('con',-55,72.2,()=>'Look at the big sign',N1('CTRL+ALT+CON, in letters taller than you. Somebody has stuck a tiny sticker over the Lumen logo at the bottom. It says "no".'));
 int('con',-15.5,49.5,()=>'Coffee cart',N1('"Bean There". The barista has a badge, a beard and a QR code tattoo. "It goes to my mum\'s bakery," he says. You don\'t scan it. He respects that.'));
 int('con',0,47.2,()=>'Bus stop',N1('Bus 42. The timetable is a Lumen ad. "SafeSphere: Privacy On The Move." Someone has added, in marker: "on the move to where?"'));
 /* ---- foyer ---- */
 int('con',-38.6,31,()=>S.ch===1&&!S.f.d1_badge?'Pick up your badge':'Registration desk',()=>{if(S.ch===1&&!S.f.d1_badge)return run(D1_BADGE(),hub);run([N(pick(['The volunteers have the thousand-yard stare of people who have handed out four thousand lanyards.','A box labelled LOST BADGES. Eleven badges. Nine of them say "Dave".']))],hub)});
 int('con',-24.5,32.4,()=>'Info desk',()=>run([{w:'Info',np:1,t:pick(ROLELINES.Info)}],hub));
 int('con',-38,6.6,()=>S.ch>=1&&S.ch<4?'Take a SafeSphere flyer':null,()=>run([N('"SafeSphere: your privacy, protected. Free forever!" On the back, in 4-point type: "By installing you agree to share insights with trusted partners."'),N(S.ch>=3?'You bin it. Three other people do the same while you watch.':'You fold it into a very small square.')],hub));
 int('con',-34.5,4.6,()=>'Try a SafeSphere demo pod',N1('The pod asks for your contacts "to protect them too". Then your location "to keep you safe". Then your camera "for your security". You step out. It says "Come back soon!" in a voice that is far too warm.'));
 int('con',-40.5,29.4,()=>'Look up at the ceiling',()=>run([N(S.clues.includes('evil_twin')?'The tile Nyx pointed out. Behind it, a small box with a Lumen asset tag blinks away, pretending to be the con\'s Wi-Fi.':'One ceiling tile above the registration desk is slightly askew. A tiny green light blinks behind it. Probably nothing. Probably.')],hub));
 /* ---- Hall A / Hall B ---- */
 int('con',-5,-49.5,()=>S.ch===1&&S.f.d1_badge&&!S.f.d1_open?'Take a seat for the opening ceremony':'Sit down for a talk',()=>{if(S.ch===1&&!S.f.d1_open){if(!S.f.d1_badge)return run([N('No badge, no seat.')],hub);return run(D1_CEREMONY(),hub)}go('stage')},{y:2.75,r:3.2});
 int('con',-5,-72.6,()=>'Step up to the podium',N1('You grip the podium and look out at two thousand empty seats rising into the dark. Your heart rate doubles. Imagine doing this for real.'),{y:1.3});
 int('con',17.5,-67.8,()=>'Look at the AV desk',N1('Four screens, a mixing desk and an AV tech eating a sandwich with the calm of someone who has seen every possible failure. "Don\'t touch anything," she says, without looking up.'));
 int('con',-3,-88.2,()=>'Raid the speakers\' snacks',N1('Grapes, crisps and a bowl of only green M&Ms. You take one grape. You feel like a criminal.'),{y:1.3});
 int('con',35.5,-50,()=>'Catch a talk in Hall B',once('hb',()=>[N(pick(['Track 2: "I Found a Bug in a Toaster". It\'s an hour long. The toaster gets a standing ovation.','Track 2: "Your Smart Doorbell Is Watching Your Neighbours". The room goes quiet. Several people text their neighbours.','Track 2: "Lessons From a Year of Honeypots". The main lesson: people will try "admin/admin" on anything.'])),FX({skill:1})],'The next Track 2 talk is about blockchain. You leave before you can be persuaded of anything.'));
 /* ---- vendor ---- */
 int('con',54,-55.4,()=>'Shop at the Con Store',()=>{if(S.ch<2)return run([N('"Opening tomorrow!" says a sign. The shopkeeper waves a price gun at you menacingly.')],hub);if(!S.unl.cred)return run([{unlock:'cred'}],()=>shop());shop()});
 [['STICKERS',''],['LOCK PICKS','Tension wrenches, rakes, a lock shaped like a heart. The vendor winks. You don\'t know why.'],['LEDs & BADGES','A badge that plays Snake. A badge that plays Doom. A badge that is just a very bright light.'],['SUSPICIOUS USB CABLES','"Totally normal cables," says the sign. The vendor is wearing sunglasses. You keep walking.'],['LANYARDS ONLY','He sells lanyards. Only lanyards. He seems at peace.'],['T-SHIRTS','"There\'s no place like 127.0.0.1." You\'ve seen four people wearing it already.'],['KEYBOARDS','Someone types on a keyboard so loud it sounds like popcorn. They look extremely happy.'],['BOOKS & ZINES','A zine titled "So You Got Doxxed". It\'s selling very well this weekend.'],['RETRO COMPUTERS','A beige machine from 1989 boots up with a noise like a jet engine. A crowd gathers in reverence.'],['FPGA BOARDS','Tiny boards that can pretend to be any chip. The vendor pretends to be a person who understands them.'],['"MILITARY-GRADE" VPNs','"Unbreakable!" says the poster. The vendor won\'t say what it\'s unbreakable against. You suspect "sales".'],['FARADAY BAGS','Little bags that block every signal. You put your phone in one. For the first time in years, it\'s quiet.']].forEach((s,i)=>{const cx=68+(i%3)*12,cz=-74+Math.floor(i/3)*10;if(i!==0)int('con',cx,cz+.9,()=>'Browse: '+s[0].toLowerCase(),N1(s[1]))});
 int('con',110,-63.6,()=>'Watch the demo stage',N1('A presenter opens a "smart" padlock with a phone, a magnet and a deeply unimpressed expression. The lock\'s marketing slogan was "unpickable". The crowd chants it ironically.'));
 /* ---- villages ---- */
 int('con',69,-33.4,()=>'Practise on the pegboard locks',()=>{const k='peg'+S.ch;if(S.room[k])return run([N('Your fingers are sore. Maybe next chapter.')],hub);S.room[k]=1;run([N('You pick a padlock off the pegboard and get to work.'),{game:'timing',kind:'pins',n:3}],hub)});
 int('con',93,-15.6,()=>'Read the scoreboard tower',N1('Four screens, four sides, the same bad news for everyone. KERNEL (ada) is third. A team called "dave_hax" has forty points and a very aggressive logo.'));
 int('con',115,-33,()=>'Watch the wall of screens',N1('Graphs, alerts, a map of every Wi-Fi network in the building. One flashes red: ROGUE AP: "CTRLALTCON". It\'s been flashing for days.'));
 int('con',72.8,22,()=>'Look under the bonnet',N1('Wires everywhere, a laptop zip-tied to the engine, and a small handwritten sign: "If you start this car, you buy everyone lunch." The car has been started eleven times. Lunch has been excellent.'));
 int('con',90,13.6,()=>'Watch the toy train',N1('A tiny train goes round a tiny city. A team on laptops tries to stop it. A different team tries to keep it moving. Every time it stops, a siren goes off and everybody cheers. Nobody is sure who\'s winning.'));
 int('con',106,29.2,()=>'Try the vishing booth',once('vish',()=>[N('You step into the soundproof booth. On the screen: "Call the fake helpdesk. Get the fake password. Don\'t lie about who you are."'),C({t:'Be friendly, patient and honest about who you are',fx:{skill:2},then:[N('It takes six minutes. The "helpdesk" refuses to give you the password, then thanks you for not trying to trick them. The judges give you full marks for not being a creep.')]},{t:'Pretend to be the CEO and shout',fx:{clout:3,exp:2},then:[N('"This is the CEO!" The fake helpdesk hangs up. The crowd boos. A judge writes "classic" on her clipboard.')]})],'The booth has a queue of forty people. You\'ve had your turn.'));
 /* ---- food court, courtyard ---- */
 int('con',46,11.6,()=>'Order noodles',N1('Noodles in a cardboard box. They\'re incredible. It might just be that you haven\'t eaten since yesterday.'));
 int('con',46,15.2,()=>'Order pizza',N1('"Any toppings?" "Not pineapple." "Correct answer. We\'ve had incidents."'));
 int('con',46,18.8,()=>'Order tacos',N1('Three tacos. One falls apart instantly. Classic.'));
 int('con',46,22.4,()=>'Buy a Club-Mate',N1('Cold, fizzy, faintly bitter. You can feel your neurons applauding.'));
 int('con',5,2.4,()=>'Toss a credit in the fountain',()=>run([N(S.cred>0?'You toss a con credit in. You wish for a good keynote. A pigeon watches, judgementally.':'You don\'t have any credits. You wish anyway.'),...(S.cred>0?[FX({cred:-1})]:[])],hub),{y:-1.2});
 int('con',30,-15.4,()=>'Sit under the big tree',N1('The only tree in the building, and it\'s enormous. You sit on the bench beneath it. Through the glass on every side, the con carries on without you. For a minute, that\'s fine.'));
 /* ---- cosplay, lounge ---- */
 int('con',27,51.4,()=>'Strike a pose on the runway',N1('You stand at the end of the runway and pose. Nobody is watching. It still feels amazing. A tape mark on the floor says "WINGS NEED 3M CLEARANCE".'),{y:.6});
 int('con',17,59.6,()=>'Peek into the changing rooms',N1('Curtains, safety pins and a man inside a cardboard robot asking someone to "do up his back". The robot\'s back is a recycling box.'));
 int('con',39.5,61.4,()=>'Step in front of the photo studio backdrop',N1('The backdrop glows. The lights hit you just right. For one shining second you look like the album cover of a band that only plays at 3 AM.'));
 int('con',60.6,37.8,()=>'Stare into a lava lamp',N1('The blob rises. The blob falls. You lose four minutes and gain inner peace.'));
 int('con',54,58.6,()=>'Borrow a nap pod',N1('You lie down in a pod that hums like a spaceship. Ten minutes later you wake up with a seatbelt mark on your face and the clarity of a monk.'));
 /* ---- hotel ---- */
 int('con',-80.4,7,()=>S.ch===1&&S.f.d1_open&&!S.f.d1_checkin?'Check in at reception':'Talk to reception',()=>{if(S.ch===1&&!S.f.d1_checkin){if(!S.f.d1_open)return run([{w:'Receptionist',np:1,t:'Check-in for CTRL+ALT+CON guests opens after the opening ceremony. Hall A, in the convention centre. Through the big gap.'}],hub);return run(D1_CHECKIN(),hub)}run([N('"Room 1337? Ah. Thirteenth floor. You\'re the third person to ask if we did that on purpose." They don\'t answer the question.')],hub)});
 int('con',-78,27.6,()=>'Call the lift',()=>liftMenu());
 int('con',-53.5,21.8,()=>'Order a flat white',N1('A flat white in a cup that says "HALCYON". The barista writes your handle on it, then crosses it out and draws a little skull. "Opsec," she says.'));
 int('con',-84,-22,()=>'Watch the bar TV',()=>run([N(S.ch>=3?'Breaking news ticker: "Questions grow over popular privacy app." The whole bar goes quiet to read it.':'A muted football match. Somebody has changed the subtitles to Linux error messages.')],hub));
 int('con',-38,-11,()=>'Lean on the terrace rail',N1('From the terrace you can see straight across the courtyard: the big tree, the fountain, and through the glass, the whole Ring lit up like an aquarium of hoodies.'));
 int('con',-86,28.6,()=>S.ch>=2?'Service lift':null,()=>serviceLift());
 int('con',-86,28.6,()=>S.ch>=2?'Service lift':null,()=>serviceLift(),{y:BY});
 int('con',-96,6.4,()=>S.f.luggage?'Look at the Lumen flight case':null,()=>run([N('A flight case stencilled LUMEN · SAFESPHERE DEMO PODS · SPARE APs. Inside, in foam, six small white boxes. Five are labelled. One slot is empty.'),...(S.clues.includes('evil_twin')?[N('The missing one is in the ceiling above registration. You\'d bet your badge on it.')]:[N('Wi-Fi access points. Lumen brought spare Wi-Fi access points to a con that already has Wi-Fi.'),{unlock:'clues'},FX({clue:'evil_twin'})])],hub));
 /* ---- level 1 ---- */
 int('con',10,-30.6,()=>'Lean on the railing',N1('From the gallery you can see the whole Ring: lanyards flowing round the courtyard like a slow river. Someone below drops a badge. Someone else picks it up and reads the name aloud. Opsec, everyone.'),{y:L1});
 int('con',84,-30.8,()=>'Sit in on the workshop',once('ws',()=>[N(pick(['"Threat Modelling for People Who Hate Meetings." Step one: who wants your stuff? Step two: what happens if they get it? You take notes.','A live demo: the speaker finds four people\'s home towns from one holiday photo. The room goes very quiet.','"Your password manager is the one egg basket worth having." Somebody in the front row applauds alone.'])),FX({skill:2})],'The speaker is answering a question that is really a forty-minute statement. You slip back out.'),{y:L1});
 int('con',68,-30.8,()=>'Watch the Wireshark workshop',N1('Two hundred people capturing their own network traffic and discovering, collectively, that their laptops talk to more servers than they have friends.'),{y:L1});
 int('con',95,-20,()=>'Solder practice station',()=>{const k='sol'+S.ch;if(S.room[k])return run([N('The volunteer shakes her head. "Let the iron cool. Come back later."')],hub);S.room[k]=1;run([T('Volunteer','Free solder lesson! Make a little LED badge. Mind your fingers.'),{game:'timing',kind:'solder',n:3}],hub)},{y:L1});
 int('con',107,-33.4,()=>'Watch the LED wall',N1('Thousands of LEDs cycling through Conway\'s Game of Life. Someone has built a glider gun that spells "BE EXCELLENT".'),{y:L1});
 int('con',116,-11,()=>'Badge hacking table',N1('Tables of con badges with their guts out. A teenager has made hers play the con\'s theme tune in eight-bit. You clap. She bows.'),{y:L1});
 int('con',73,13.4,()=>'Peek into a studio pod',N1('A tiny room with a ring light, a microphone and a streamer explaining SQL injection to 900 viewers using only a sandwich as a prop.'),{y:L1});
 int('con',86,20.4,()=>'Play OUTRUN.EXE',once('arc',()=>[N('You grip the wheel. Neon palm trees. A synth soundtrack that sounds like 1987 dreaming of the future. You take first place and a little ticket printer chatters.'),FX({cred:3})],'You put your last coin in. You crash on the first corner. The machine plays a sad little tune.'),{y:L1});
 int('con',90.2,9.7,()=>'Vending machine',()=>run([N(S.cred>0?'The machine thinks about it, then drops a Club-Mate with a clunk. One credit well spent.':'You pat your pockets. No credits. The machine glows at you, unbothered.'),...(S.cred>0?[FX({cred:-1})]:[])],hub),{y:L1});
 int('con',99,34.4,()=>'Read the Con Ops whiteboard',()=>run([N(S.ch>=4?'Marge\'s whiteboard, rewritten overnight: "4PM KEYNOTE · AV: NYX (signed!) · EVIDENCE: RIN, ADA · REGULATOR: SENT · DO NOT BE WRONG." Someone has drawn a small heart next to the last line.':'A whiteboard: "BADGES · RADIOS · LOST PROPERTY · DAVE (?)". Under it, in Marge\'s handwriting: "Do not trust the Wi-Fi. I mean it."')],hub),{y:L1});
 int('con',110,29,()=>'Press room',N1('Three journalists, one coffee machine, and a sign: "PLEASE DO NOT PHOTOGRAPH ATTENDEES WITHOUT CONSENT". A man photographs the sign.'),{y:L1});
 int('con',118,30.6,()=>'Speaker lounge biscuits',N1('Real biscuits. Chocolate ones. You take one and walk out at a normal speed, as if you are a speaker. Nobody stops you. You are, for one biscuit, a speaker.'),{y:L1});
 int('con',54,44,()=>'Sit in the quiet room',once('qr',()=>[N('You sit. You breathe. You put your phone face-down. Somewhere far below, four thousand people are arguing about tabs. In here, nothing.'),FX({exp:-2})],'You sit for another minute. It\'s still nice.'),{y:L1});
 int('con',38,16,()=>'Look over the courtyard',N1('From the terrace, the courtyard is a green square in a glass box. The big tree, the amphitheatre, the fountain, and two people in cloaks having what looks like a very serious duel with foam swords.'),{y:L1});
 int('con',-73,-15.4,()=>'Look through the glass at the pool',N1('The hotel pool, glowing blue. One person is swimming slow lengths in a CTRL+ALT+CON hoodie. You have so many questions.'),{y:L1});
 int('con',-73.5,-34,()=>'Read the meeting room slides',N1('"LUMEN PARTNER BREAKFAST · SafeSphere 2 roadmap". Somebody forgot to close the projector. The next slide is titled "Monetising the Social Graph".'),{y:L1});
 int('con',-59,-37.2,()=>S.ch>=4?'Look at the papers on the bar':null,()=>run([N('A glossy folder on the Lumen Lounge bar. "KEYNOTE RUN-SHEET · CONFIDENTIAL".'),...(S.clues.includes('runsheet')?[N('The same run-sheet Dave showed you. Same plan. Same Monday launch.')]:[N('"SafeSphere 2: contact graph. Launch all regions Monday." You photograph it. Your hands are steady. Mostly.'),{unlock:'clues'},FX({clue:'runsheet'})])],hub),{y:L1});
 /* ---- back of house ---- */
 int('con',-38,-37.8,()=>'Watch the CCTV wall',()=>run([N(S.ch>=2?'Fifteen screens. One is paused on the bar from last night: you can see Victor leaning over the counter towards Bea. A sticky note under the screen: "LUMEN ASKED FOR THIS FOOTAGE AGAIN. NO WARRANT. NO."':'Fifteen screens. The Foyer, the Ring, the bar, the car park. On one of them, a man is trying to pick up a free tote bag with his feet. Security is watching him very closely.')],hub));
 int('con',28.5,-63.8,()=>'Look at the box on the core switch',()=>run([N('Between the racks, plugged straight into the con\'s core switch: a small white box with a Lumen asset sticker and a hand-written label: "temp · do not unplug · V.H."'),...(S.clues.includes('evil_twin')?[N('The other end of the fake Wi-Fi. Nyx and Priya will want a photo.')]:[N('Lumen hardware, inside the con\'s own network. That\'s not sponsorship. That\'s a wiretap with a logo.'),{unlock:'clues'},FX({clue:'evil_twin'})])],hub));
 int('con',146,-59.6,()=>'Fire stairs · roof',()=>fadeTp(()=>teleportArea('conroof')));
 int('con',117,-53,()=>'Fire stairs · down',()=>fadeTp(()=>teleport('con',146,-61.5,Math.PI,0)),{y:RFY});
 int('con',104.3,-4.5,()=>'Check the box on the antenna mast',()=>run([N('Zip-tied to the mast, wrapped in grey tape so it looks like part of the roof: a weatherproof box with a directional antenna pointed straight down at the Halcyon.'),...(S.clues.includes('rooftop')?[N('WHISPER\'s real listening post. The one on the hotel was a decoy. Of course it was.')]:[N('This is the real one. Whoever watches this con watches it from here.'),{unlock:'clues'},FX({clue:'rooftop'})])],hub),{y:RFY});
 int('con',123,0,()=>'Look out from the con roof',N1('The whole site laid out below you: the courtyard tree, the glass Foyer, the hotel tower going up into the clouds with Room 1337 somewhere near the top. You can see the Lumen logo turning in the Foyer, very small, like a fly in a jar.'),{y:RFY});
 /* ---- basement ---- */
 int('con',-56.5,11.8,()=>'Look at the black car',N1('A long black car, very clean, very quiet. The plate reads PRIV4CY. On the dashboard: a SafeSphere air freshener, shaped like a shield.'),{y:BY});
 int('con',-12.5,9.2,()=>'Talk to the network engineers',()=>run([{w:'Engineer',np:1,t:S.ch>=3?'You want to trace WHISPER? Join the queue. Every upload goes out through an access point we don\'t own. Somewhere up high. Roof height.':pick(ROLELINES.Engineer)},...(S.f.met_priya?[N('A sticky note on a monitor: "PRIYA — your rogue AP list, printed. Don\'t lose it."')]:[])],hub),{y:BY});
 int('con',-88.5,-24,()=>'Hide among the laundry carts',N1('Warm towels, the smell of starch, and the hum of fifty machines. Nobody would look for you here. You think about staying until Monday.'),{y:BY});
 /* ---- 13th floor + roof ---- */
 int('f13',243,-9.4,()=>'Call the lift',()=>liftMenu());
 int('f13',228.7,-9.2,()=>'Ice machine',N1('It makes a noise like a dial-up modem, then dispenses one ice cube. You treasure it.'));
 int('f13',232,9.4,()=>'Vending nook',N1('Crisps, Club-Mate, and a toothbrush for £6. Someone has taped a handwritten sign to the glass: "THE B4 BUTTON IS A LIE".'));
 int('f13',249.7,10.4,()=>'Housekeeping cart',N1('Tiny shampoos, tiny soaps, and a laminated card: "Please do not hack the housekeeping cart." So someone has tried.'));
 int('f13',212.8,-10,()=>'Look out of the corridor window',N1('Thirteen floors down, the plaza glows. The neon sign is a pink smudge. Over the road, an office tower with one lit window: a man eating cereal at his desk at midnight.'));
 int('f13',275.2,10,()=>'Look out of the corridor window',N1('The convention centre, flat-roofed and glowing, and beyond it the whole city. On the con roof, a tiny red light blinks on a mast.'));
 int('f13',261.4,13.4,()=>'Drop into Room 1336',()=>run([{w:'Partygoer',np:1,t:pick(ROLELINES.Partygoer)},N('The room is twelve people, six laptops, a mountain of fries and a TV showing a Linux boot screen on loop. Someone hands you a fry. You have been accepted.')],hub));
 int('f13',212+8*16/3+2.67,-12.7,()=>'Room 1309',()=>run([N(S.stage.kit>=3?'Room 1309. Kit\'s room. A new sign on the door: "DO NOT DISTURB". The peephole has a sticker over it from the outside. You hope it was her.':S.stage.kit>=2?'Room 1309. A photo taken outside this door is how the creep found her. You don\'t linger. You check the corridor both ways when you leave.':'Room 1309. A cyan strip of armour paint on the door handle. Someone\'s been in and out in a hurry, carrying a costume.')],hub));
 int('f13',212+2*16/3+2.67,-12.7,()=>'Room 1303',N1('Room 1303. A Faraday bag hangs on the door handle like a "do not disturb" sign. Even the peephole has a tiny square of tape over it. You don\'t need to ask whose room this is.'));
 int('f13',269.5,13.6,()=>'Use your laptop',()=>roomMenu());
 int('f13',273.6,14.2,()=>S.ch===1&&S.f.d1_checkin&&!S.f.d1_room?'Drop your bag':S.ch===2?'Go to bed (end Day 2)':S.ch===3?'Get ready: everyone\'s coming over (Night 3)':'Lie on the bed',()=>{if(S.ch===1&&!S.f.d1_room&&S.f.d1_checkin)return run(D1_ROOM(),hub);if(S.ch===2||S.ch===3)return advance();run([N('The bed crunches. You stare at the ceiling for a bit. It\'s weirdly restful.')],hub)});
 int('f13',274.6,17.4,()=>'Look out of the window',N1('Two windows. The city glitters through both. Somewhere out there, Proof is closed for the night, and a tiny person in a cape is drawn on a stack of empty bags.'));
 int('f13',264.9,13.9,()=>'Open the minibar',N1('£9 for a Toblerone. You close the minibar with respect.'));
 int('f13',265.4,18.8,()=>'Look at the bathtub',()=>run([N(S.ch>=4?'Still full of everyone\'s phones from last night. Priya\'s bathtub Faraday zone. It\'s a monument now.':'A bathtub. Clean. Suspiciously crunchy towel.')],hub));
 int('f13',271.5,18.4,()=>'Sit in the seating area',N1('A sofa, two armchairs and a coffee table. Enough seats for a small party. You have never once had a small party.'));
 int('f13',244,17,()=>'Look through the telescope',N1('Pointed at the sky, it shows stars. Pointed at the office tower across the road, it shows a man eating cereal at his desk at midnight. You point it back at the stars.'),{y:TOP});
 int('f13',227,-3,()=>'Sit on a lounger',N1('You lie back by the pool. The city hums. For a minute, there is no con, no Lumen, no WHISPER. Just sky.'),{y:TOP});
 int('f13',218,13.2,()=>'Order at the sky bar',N1('"Sky bar" is a man called Phil with a cooler box. Phil makes a very good lemonade. Phil does not want to see your GitHub.'),{y:TOP});
 int('f13',230,-5,()=>'Dip your toes in the pool',N1('Cold. Shockingly cold. A man in the pool says "you get used to it", in the voice of someone who has not got used to it.'),{y:TOP});
 int('f13',249.4,0,()=>S.clues.includes('device')?'The spot where the sniffer was':null,N1('Just tape marks now, on the fence post by the maintenance door. Someone took the box. Someone with silver hair, probably.'),{y:TOP});
 int('f13',275,8,()=>'Look over the edge',N1('Thirteen floors down, the street glows. Up here the wind is loud enough that nobody could listen in. That\'s probably the point.'),{y:TOP});
}
/* ---------------- moving between places ---------------- */
function liftMenu(){
 const here=WD.reg,onL1=here==='con'&&WD.y>3,onB=here==='con'&&WD.y<-2;
 if(S.ch===1&&!S.f.d1_checkin)return run([N('You press the button. A little screen asks you to tap your room key. You don\'t have a room key yet. Reception first.')],hub);
 run([{hide:1},N(here==='con'?'The lift arrives with a soft ding. Muzak. A mirror. The panel has G, 13 and, under a little cover, B. Level 1 is just the mezzanine: that\'s the grand staircase.':'The lift arrives with a soft ding. Muzak. A mirror. You look tired, but in a cool way.'),C(
  {t:'Ground floor · Lobby',if:()=>here!=='con'||onL1||onB,then:()=>{fadeTp(()=>teleport('con',-78,26.6,0,0));return[]}},
  {t:'13th floor · Room 1337',if:()=>here!=='f13',then:()=>{fadeTp(()=>teleport('f13',243,-10.2,0,0));return[]}},
  {t:'B · Car park',if:()=>S.ch>=2&&!onB,then:()=>{fadeTp(()=>teleport('con',-90,22,-Math.PI/2,BY));return[]}},
  {t:'Stay here',then:[]})],hub);
}
function serviceLift(){
 run([N('A steel box that smells of laundry and old coffee.'),C(
  {t:'Ground · back stairs',if:()=>WD.y<-2,then:()=>{fadeTp(()=>teleport('con',-88,27,Math.PI,0));return[]}},
  {t:'B · basement',if:()=>WD.y>-2,then:()=>{fadeTp(()=>teleport('con',-88,27,Math.PI,BY));return[]}},
  {t:'Stay here',then:[]})],hub);
}
function trainMenu(){
 run([{hide:1},N('The train hums at Platform 4. The doors chime. A screen above them lists the stops.'),C(
  {t:'CTRL+ALT+CON · Halcyon Hotel & Convention Centre',then:()=>{
   if(S.ch===0)return[...CH0TRAIN(),()=>{S.ch=1;S.resume='open';save();return OPEN[1]()}];
   fadeTp(()=>{teleportArea('plaza')});return[N('Twenty minutes later, the taxi rank outside the Halcyon. The neon sign is still shouting.')]}},
  {t:'Brindle & Co · work',then:[N(S.ch===0?'You booked the week off. Linda made you promise not to check your email. You will check your email.':'Not until the con is over. Linda would be thrilled to see you, which is exactly the problem.')]},
  {t:'Home · Proof bakery',then:[N(S.ch===0?'You only just left. Ellie would know. Ellie always knows.':'Not until the con\'s over. Ellie made you promise to bring back stickers, not excuses.')]},
  {t:'Not yet',then:[]})],hub);
}
function goOffice(){fadeTp(()=>{teleportArea('office');run(CH0OFFICE(),hub)})}
function goEvening(){fadeTp(()=>{teleportArea('flat');run(CH0EVE(),()=>{S.f.ch0_eve=1;save();fadeTp(()=>{teleportArea('station');run(CH0STATION(),hub)})})})}
function fadeTp(fn){const f=$('fade');sfx('whoosh');f.classList.add('on');setTimeout(()=>{fn();WD.area=null;G.forceFrame=true;setTimeout(()=>f.classList.remove('on'),160)},300)}
/* ---------- characters ---------- */
function charAct(c){
 const id=c.id;
 if(id==='bea'&&S.ch===1){if(!S.f.d1_room)return run([L('bea','s','Bar\'s not open yet, hoodie. Go and find your room. Come back at seven.')],hub);return advance()}
 if(id==='linda')return run([L('linda','n',S.f.ch0_work?pick(['Good work today. Don\'t let it go to your head. Your head is already quite large.','Go home, {h}. And enjoy your hacker thing. Don\'t hack anything of ours.']):'{h}! The queue! Half of Claims is about to click something terrible.')],hub);
 if(id==='gary'){if(!S.f.ch0_work)return run([L('gary','h','Mate. Busy? You look busy. I\'ll catch you after the queue.')],hub);if(!S.f.ch0_gary)return run(CH0GARY(),()=>{S.f.ch0_gary=1;hub()});return run([L('gary','h',pick(['Still trying to un-buy those gift cards. Customer service keeps asking for gift cards.','Hacker mate! My hacker mate. That\'s you.']))],hub)}
 if(id==='marge'){if(S.ch===4)return advance();return run([L('marge','n',pick(['Be excellent to each other. And hydrate.','If you see Lumen people in the ceiling, tell me. I\'m only half joking.','Twenty years of this con. It still makes me cry at the closing.','Don\'t trust the Wi-Fi. I\'ve told everyone. Nobody listens.']))],hub)}
 if(id==='victor')return run([L('victor',S.ch>=3?'a':'s',pick(S.ch>=3?['Not now.','I don\'t talk to "researchers" without legal present.','You\'re one of Marge\'s little friends, aren\'t you?']:['Have you installed SafeSphere? It\'s free. Privacy should be free.','Lumen is proud to support the community. Truly.','Do you know who I am? Good. Then you know I\'m busy.']))],hub);
 if(id==='dave'){
  if(daveReady())return run([...DAVE[S.stage.dave].sc(),()=>{S.stage.dave++;return[]}],hub);
  return run([L(S.ch>=2?'davex':'dave',S.ch>=2?'n':'h',pick(S.ch<2?['Bro. Ten million downloads. Ten. Million.','Want a stress ball? It has a QR code. Don\'t scan it. Or do. I don\'t know what it does.']:S.f.dave_helped?['Two-factor on everything now, bro. I\'m basically Priya.','I deleted all my boarding passes. I feel naked. In a good way.']:['I\'m hiding. From pizza delivery drivers.','Bro, everything in my inbox looks like a scam now.']))],hub);
 }
 if(id==='ellie'&&S.ch===0){if(!S.f.ch0b)return run(CH0B(),()=>{S.f.ch0b=1;hub()});return run([L('ellie','h',pick(['Go to work! You\'ll be late. Again.','Go on. Shoo. Fix some printers.']))],hub)}
 if(ROM.includes(id)){
  if(!d1('open'))return run([L(id,'n',pick(['Opening ceremony first. Come find me after.','Hall A. Go. The ceremony\'s starting. We\'ll talk later.']))],hub);
  if(sceneReady(id)){const R=ROUTES[id];return run(R.scenes[S.stage[id]](),()=>{if(S.f.hold){delete S.f.hold}else S.stage[id]++;hub()})}
  const a=areaAt(c.reg,c.x,c.z,c.y);return hang(id,a?AREAS[a].bg:'con');
 }
}
