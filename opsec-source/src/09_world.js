/* ============ WORLD ============ */
const WD={x:0,y:0,z:0,yaw:0,pit:0,vx:0,vz:0,vy:0,eye:1.62,ground:true,reg:'home',area:null,active:false,keys:{},joy:null,look:null,near:null,t:0,lastSave:0,npcs:[],touch:false,bob:0,stepPh:0,fovk:0};
const BG2AREA={con:'concourse',lock:'lockpick',ctf:'ctf',soc:'soc',stream:'stream',hotel:'room1337',roof:'roof',stage:'hallA',keynote:'hallA',vendor:'vendor',flat:'flat',bakery:'bakery',cos:'cosplay',chill:'lounge',bar:'bar',lobby:'lobby'};
const FAR={home:70,con:180,f13:460};
const HANDLES=['xX_r00t_Xx','null_byte','packet_pam','sudo_sam','lord_of_logs','0xDEADBEEF','grep_grrl','cron_job','bitflip','yak_shaver','tcp_tina','salt_n_hash','mitm_mike','captcha_carl','ssh_sasha','vimlord','emacs_emma','port_80','buffer_bob','kernel_kev','dns_dana','wifi_wendy','phreak','byte_me','404_found','hexadecimal_hal','proxy_pete','zero_cool_ish','ping_pong','cookie_monster','segfault_sue','race_condition','heap_hannah','stack_smash','the_doorman'];
const NPCLINES={
 any:['First con? Pro tip: drink water. Club-Mate is not water.','I\'ve been awake for 31 hours. I can see sounds.','Have you seen the badge? It has a hidden game on it. I\'ve found nothing. For six hours.','Someone said there\'s free pizza somewhere. There is never free pizza.','My talk got rejected. I\'m giving it in the corridor anyway.','Don\'t connect to the Wi-Fi. Either of them.','I\'m not a hacker, I\'m a "security researcher". The difference is a lawyer.','I lost my laptop charger and with it, my will to live.','Is that a SafeSphere tote? Bold choice.','I just watched a man pick a handcuff lock with a hairpin. I need to lie down.','Tabs. Obviously tabs. Fight me.','I came for the talks. I stayed for the stickers.','Somebody\'s been rickrolling every TV in the hotel. Respect.','My mum thinks I\'m at a "computer party". She\'s not wrong.','I brought three phones. One for me, one burner, one to look cool.'],
 lobby:['The lobby piano is a MIDI device. Someone\'s been playing it over Bluetooth.','The concierge asked if I was "with the hackers". I said no. I was wearing four lanyards.'],
 mezz:['Best view in the hotel. You can watch everyone forget their badges.','I come up here to think. And to judge people\'s laptop stickers from a height.'],
 hwv:['I soldered my thumb to a badge. It\'s fine. It\'s part of the badge now.','That LED wall is running Game of Life. Someone made a glider that spells "HELP".','Want to see my toaster? It runs Linux. Its uptime beats my sleep schedule.'],
 vendor:['I bought a USB cable that might be a keylogger. For science.','The lanyard guy only sells lanyards. I respect his focus.','My laptop lid has no lid left. It\'s all stickers.'],
 bar:['Bea makes a cocktail called "Segfault". It crashes you.','Don\'t ask Bea about blockchain. A man did. He\'s still outside.'],
 plaza:['Taxi driver asked if I was "one of the hacker lot". I said no. He said "sure".','The big CTRL+ALT+CON sign was sponsored by Lumen. Someone put a sticker over the logo. Iconic.'],
 garden:['Fresh air. I forgot this existed.','Somebody threw a phone in the fountain. It was a burner. I think.','Sitting on the steps here is the only quiet place in the building.'],
 food:['The pizza place says NO PINEAPPLE. They seem to have strong reasons.','Noodles are the official food of incident response.'],
 hallA:['Saving seats for the keynote. Yes, all of these.','The AV team here are wizards. Respect the AV team.','I got up on stage just to see what it\'s like. It\'s terrifying. Do not recommend.'],
 lockpick:['I opened my first lock! It was the practice one. I still feel like a god.'],
 ctf:['We\'re 40th. But we\'re having fun. That\'s what we tell ourselves.','The crypto challenge is just a picture of a duck. Why is it a duck.'],
 soc:['Seventeen people here have their home address as their Wi-Fi name. Priya\'s keeping count.'],
 lounge:['Shh. I\'m recompiling my soul.','These bean bags have seen things.'],
 cosplay:['My armour is ninety per cent hot glue. The other ten is pain.','Neon Ronin\'s wings this year. Unreal.','I walked the runway. My knees are still shaking.'],
 corridor:['Room 1336 has been ordering room service for six hours. Somebody\'s fine.'],
 roof:['How did you get up here? ...Same way as me, I suppose.','Best signal in the building. Worst opsec in the building.']
};
const CHLINES={2:['Did you see what WHISPER did to MegaHax? Brutal.','Everyone\'s checking their posts. I deleted four years of tweets this morning.'],3:['WHISPER hit the Lumen CEO! On the main screens!','Lumen security asked to scan my badge. I said no. They asked again.','I uninstalled SafeSphere. Just in case. Just... vibes.'],4:['Rumour is something big\'s happening at the keynote.','Hall A at four. Everyone\'s going. EVERYONE.']};
function genCrowd(){
 const st=['bob','long','ponytail','twin','short','wavy','pixie','fluffy','bun','slick','puffs','short','short'],skins=['#f3d2bc','#e8c7ad','#c98f6e','#a8704e','#7a4a32','#5a3424','#f6dfd0','#d9a98a'],hairs=['#1d1726','#3a2418','#7a4a2c','#c2532b','#e3c07a','#2bd9e8','#ff8fc8','#8affc1','#d4d4d4','#5a3a6a','#141018'],ocs=['#2a2530','#3a7d44','#ff5d73','#3f526a','#ffd166','#6b4f8a','#1c2133','#7cc4ff','#efeaff','#ff8a3d','#444'],outs=['hoodie','hoodie','tee','jacket','blazer','tee'],accs=[[],[],['glasses'],['phones'],['earring'],['freckles'],['glasses','earring'],['shades']];
 const lows=[{t:'pants',c:'#2a3a5a',s:'#fff'},{t:'pants',c:'#1a1a22',s:'#222'},{t:'pants',c:'#5a5a46',s:'#2a2a2a',boot:1},{t:'shorts',c:'#3a4a6a',s:'#fff'},{t:'skirt',c:'#1a1520',l:'#2a2030',s:'#111'},{t:'skirt',c:'#ff8fc8',l:'#ffffff',thigh:1,s:'#fff'},{t:'long',c:'#2a2a3a',s:'#111'},{t:'pants',c:'#6b4f8a',s:'#ffd166'}];
 const spots={concourse:[[-30,3],[-8,2.5],[14,-3],[22,3],[38,-2],[-36,-3],[5,3.5],[-22,2],[30,-3]],hallA:[[-24,-16],[-30,-24.15],[-17,-20.25],[-26,-9],[-20,-32.5],[-30,-38,1.2,1]],vendor:[[-4,-27],[9,-21],[18,-26],[4,-15],[14,-18],[-5,-11],[11,-31]],cosplay:[[30,-21],[38,-18],[27,-10],[40,-10],[36,-26,.6,1]],lockpick:[[-11,12.5,0,1],[-1,16.5,0,1],[-9,17.5]],ctf:[[4,15.5,0,1],[14,19],[11,8.5]],soc:[[18,17],[28,10]],lounge:[[33,17,0,1],[36,10.5]],lobby:[[-30,25],[-19,12],[-17,8],[-29,9],[-36,22]],mezz:[[-36,15,5.2],[-36,25,5.2,1]],hwv:[[-53,13,5.2,1],[-45,20,5.2],[-57,23,5.2,1],[-48,29,5.2]],bar:[[-47,21],[-56,18.2,0,1],[-44,26],[-59,24]],plaza:[[-27,34.6,0,1],[-32,42],[-18,43],[-10,36]],food:[[3,47],[8,41],[13,52],[-2,37]],garden:[[50,-5],[68,8],[59,-5.4,-.4,1],[62,9.5],[48,15]],corridor:[[220,.5],[232,-.6]],roof:[[244,-14.6,3.6,1],[276,0,3.6]]};
 let i=0;
 for(const a in spots)for(const p of spots[a]){
  const door=a==='plaza'&&p[3];
  WD.npcs.push({id:'n'+i,v:i%8,role:door?'Doorman':null,reg:AREAS[a].reg,x:p[0],z:p[1],y:p[2]||0,hx:p[0],hz:p[1],ar:a,tx:p[0],tz:p[1],wait:rnd()*5,still:!!p[3]});
  i++;
 }
}
function placeWorld(){
 BR='con';table(-24,12.2,2.6,1,MT.plain('#f4efe6'));box(-25.1,.76,11.9,-22.9,.92,12.5,MT.bread,{col:false});
 const ch=()=>S?S.ch:0;
 const C=(id,reg,x,z,when,o)=>WCH.push(Object.assign({id,reg,x,z,y:0,when},o||{}));
 C('ellie','home',-295.5,2.2,()=>ch()===0);
 C('ellie','con',-24,11.3,()=>ch()>=3&&ch()<5);
 C('nyx','con',-8.2,12.6,()=>ch()>=1);
 C('ada','con',9,11.8,()=>ch()>=1);
 C('priya','con',23,12,()=>ch()>=1);
 C('juno','con',30,3.4,()=>ch()>=1,{y:.25});
 C('kit','con',31,-16.6,()=>ch()>=1,{spr:()=>(S.stage.kit<1||S.ch===3)?'kitc':'kit'});
 C('rin','con',42.4,12,()=>ch()>=2);
 C('bea','con',-53,14.7,()=>ch()>=1);
 C('mira','f13',284,-8.5,()=>ch()>=3&&S.f.roof_open,{y:5.2});
 C('dave','con',4.5,-1.6,()=>ch()===1);
 C('dave','con',-2,-32.2,()=>ch()>=2&&ch()<5,{spr:()=>'davex'});
 C('marge','con',-16,-3.4,()=>ch()>=1&&ch()<4);
 C('marge','con',-24,-36.6,()=>ch()===4,{y:1.2});
 C('victor','con',1,-4.8,()=>ch()>=1&&ch()<3);
 C('victor','con',-45,28.6,()=>ch()===3);
 DYN.push({reg:'f13',b:[259.6,-.8,260.4,.8,3.6,6.2],when:()=>!S.f.roof_open,spr:[259.7,0,3.6]});
 genCrowd();
 const N1=t=>()=>run([N(t)],hub);
 // home
 int('home',-293.2,-6.4,()=>'Look at your monitor',N1('Your forum post from 3 AM: "honestly most firewalls are a joke if you know what you\'re doing." Fourteen upvotes. One reply: "source?" You never answered.'),{y:3.4});
 int('home',-292.8,1.2,()=>'Water the plant',N1('It\'s plastic. You water it anyway. It\'s a ritual now.'),{y:3.4});
 int('home',-298,.6,()=>'Check the pizza boxes',N1('Three boxes. Two empty. One contains a single crust you\'re saving for reasons you can\'t explain.'),{y:3.4});
 int('home',-297,-7.2,()=>'Look out of the window',N1('Morning. The street below. The smell of bread rising up from Proof like a summons.'),{y:3.4});
 int('home',-296.5,-6,()=>'Look at the ovens',N1('Three ovens, already roaring. Ellie gets up at 4 AM every day. You get up at 4 AM sometimes, but from the other direction.'));
 int('home',-301.1,9.6,()=>'Read the chalkboard',N1('Today\'s special: "cinnamon knot (ask the computer guy, he\'s had 400)". You have had 400.'));
 int('home',-295.5,11.2,()=>S.ch!==0?null:S.f.ch0b?'Head out to work':'Leave for work',()=>{if(!S.f.ch0b)return run([N('Breakfast first. You can smell the cinnamon from here. Ellie\'s at the counter.')],hub);run(CH0C(),()=>{S.ch=1;S.resume='open';save();teleportArea('plaza');run(OPEN[1](),()=>{teleportArea('concourse');hub()})})});
 // convention
 int('con',-16,-.9,()=>'Read the schedule board',N1('Today: lockpicking 101, "Your Fridge Is a Botnet", a CTF that runs all weekend, a cosplay contest on Day 3, and the closing keynote in Hall A. Sponsored by Lumen, in letters slightly too large.'));
 int('con',1,-2.9,()=>S.ch>=1&&S.ch<4?'Take a SafeSphere flyer':null,()=>run([N('"SafeSphere: your privacy, protected. Free forever!" On the back, in 4-point type: "By installing you agree to share insights with trusted partners."'),N(S.ch>=3?'You bin it. Three other people do the same while you watch.':'You fold it into a very small square.')],hub));
 int('con',-14,-1.2,()=>'Look up at the ceiling',()=>run([N(S.clues.includes('evil_twin')?'The tile Nyx pointed out. Behind it, a small box with a Lumen asset tag blinks away, pretending to be the con\'s Wi-Fi.':'One ceiling tile above the registration desk is slightly askew. A tiny green light blinks behind it. Probably nothing. Probably.')],hub));
 int('con',-24,-14.5,()=>'Sit down for a talk',()=>go('stage'));
 int('con',-24,-35,()=>'Step up to the podium',N1('You grip the podium and look out at the empty seats. Your heart rate doubles. Imagine doing this for real.'),{y:1.2});
 int('con',-36,-10.4,()=>'Look at the AV desk',N1('Four screens, a mixing desk and an AV tech eating a sandwich with the calm of someone who has seen every possible failure. "Don\'t touch anything," she says, without looking up.'),{y:1.4});
 int('con',-30,-46,()=>'Raid the speakers\' snacks',N1('Grapes, crisps and a bowl of only green M&Ms. You take one grape. You feel like a criminal.'));
 int('con',17,-8.7,()=>'Shop at the Con Store',()=>{if(S.ch<2)return run([N('"Opening tomorrow!" says a sign. The shopkeeper waves a price gun at you menacingly.')],hub);if(!S.unl.cred)return run([{unlock:'cred'}],()=>shop());shop()});
 [['STICKERS','A sticker that says "I\'m not a hacker, I just read the logs." You feel seen.'],['LOCK PICKS','Tension wrenches, rakes, a lock shaped like a heart. The vendor winks. You don\'t know why.'],['LEDs & BADGES','A badge that plays Snake. A badge that plays Doom. A badge that is just a very bright light.'],['SUSPICIOUS USB CABLES','"Totally normal cables," says the sign. The vendor is wearing sunglasses. You keep walking.'],['LANYARDS ONLY','He sells lanyards. Only lanyards. He seems at peace.'],['T-SHIRTS','"There\'s no place like 127.0.0.1." You\'ve seen four people wearing it already.'],['KEYBOARDS','Someone types on a keyboard so loud it sounds like popcorn. They look extremely happy.'],['BOOKS & ZINES','A zine titled "So You Got Doxxed". It\'s selling very well this weekend.'],['RETRO COMPUTERS','A beige machine from 1989 boots up with a noise like a jet engine. A crowd gathers in reverence.']].forEach((s,i)=>{const cx=-2+(i%3)*9,cz=-31+Math.floor(i/3)*7;if(i!==0)int('con',cx,cz+.9,()=>'Browse: '+s[0].toLowerCase(),N1(s[1]))});
 int('con',34,-25,()=>'Strike a pose on the runway',N1('You stand at the end of the runway and pose. Nobody is watching. It still feels amazing. A tape mark on the floor says "WINGS NEED 3M CLEARANCE".'),{y:.6});
 int('con',-6,19.1,()=>'Practise on the pegboard locks',()=>{const k='peg'+S.ch;if(S.room[k])return run([N('Your fingers are sore. Maybe next chapter.')],hub);S.room[k]=1;run([N('You pick a padlock off the pegboard and get to work.'),{game:'timing',kind:'pins',n:3}],hub)});
 int('con',9,21,()=>'Read the scoreboard',N1('KERNEL (ada) is third. A team called "dave_hax" has forty points and a very aggressive logo.'));
 int('con',23,21,()=>'Watch the dashboards',N1('Graphs, alerts, a map of every Wi-Fi network in the building. One flashes red: ROGUE AP: "CTRLALTCON". It\'s been flashing for days.'));
 int('con',37,13.6,()=>'Stare into a lava lamp',N1('The blob rises. The blob falls. You lose four minutes and gain inner peace.'));
 int('con',-34.8,12.5,()=>'Talk to reception',N1('"Room 1337? Ah. Thirteenth floor. You\'re the third person to ask if we did that on purpose." They don\'t answer the question.'));
 int('con',-14.9,24,()=>'Call the lift',()=>liftMenu());int('con',-14.9,28,()=>'Call the lift',()=>liftMenu());
 int('con',-61.2,22,()=>'Watch the bar TV',()=>run([N(S.ch>=3?'Breaking news ticker: "Questions grow over popular privacy app." The whole bar goes quiet to read it.':'A muted football match. Somebody has changed the subtitles to Linux error messages.')],hub));
 int('con',-57,12.9,()=>'Solder practice station',()=>{const k='sol'+S.ch;if(S.room[k])return run([N('The volunteer shakes her head. "Let the iron cool. Come back later."')],hub);S.room[k]=1;run([T('Volunteer','Free solder lesson! Make a little LED badge. Mind your fingers.'),{game:'timing',kind:'solder',n:3}],hub)},{y:5.2});
 int('con',-51,7.2,()=>'Watch the LED wall',N1('Thousands of LEDs cycling through Conway\'s Game of Life. Someone has built a glider gun that spells "BE EXCELLENT".'),{y:5.2});
 int('con',-41,26,()=>'Badge hacking table',N1('Tables of con badges with their guts out. A teenager has made hers play the con\'s theme tune in eight-bit. You clap. She bows.'),{y:5.2});
 int('con',-35,39.2,()=>'Look at the big sign',N1('CTRL+ALT+CON, in letters taller than you. Somebody has stuck a tiny sticker over the Lumen logo at the bottom. It says "no".'));
 int('con',-24,51,()=>'Hail a taxi',N1('The driver leans out. "Leaving already?" You think about it. No. Not yet. Not with everything going on.'));
 int('con',59,-.6,()=>'Toss a credit in the fountain',()=>run([N(S.cred>0?'You toss a con credit in. You wish for a good keynote. A pigeon watches, judgementally.':'You don\'t have any credits. You wish anyway.'),...(S.cred>0?[FX({cred:-1})]:[])],hub),{y:-1.2});
 int('con',-1,53,()=>'Order noodles',N1('Noodles in a cardboard box. They\'re incredible. It might just be that you haven\'t eaten since yesterday.'));
 int('con',4,53,()=>'Order pizza',N1('"Any toppings?" "Not pineapple." "Correct answer. We\'ve had incidents."'));
 int('con',9,53,()=>'Order tacos',N1('Three tacos. One falls apart instantly. Classic.'));
 int('con',14,53,()=>'Buy a Club-Mate',N1('Cold, fizzy, faintly bitter. You can feel your neurons applauding.'));
 // hotel
 int('f13',201.4,0,()=>'Call the lift',()=>liftMenu());
 int('f13',259.2,0,()=>S.f.roof_open?null:'Roof door',N1('Locked, and taped off: STAFF ONLY. The handle\'s been oiled recently, though. Interesting.'),{y:3.6});
 int('f13',214.7,-1,()=>'Ice machine',N1('It makes a noise like a dial-up modem, then dispenses one ice cube. You treasure it.'));
 int('f13',244.6,8.2,()=>'Use your laptop',()=>room());
 int('f13',238.6,7,()=>S.ch===2?'Go to bed (end Day 2)':S.ch===3?'Get ready: everyone\'s coming over (Night 3)':'Lie on the bed',()=>{if(S.ch===2||S.ch===3)return advance();run([N('The bed crunches. You stare at the ceiling for a bit. It\'s weirdly restful.')],hub)});
 int('f13',241.5,11,()=>'Look out of the window',N1('The city glitters. Somewhere out there, Proof is closed for the night, and a tiny person in a cape is drawn on a stack of empty bags.'));
 int('f13',244.5,10.85,()=>'Open the minibar',N1('£9 for a Toblerone. You close the minibar with respect.'));
 int('f13',243.2,3,()=>'Look at the bathtub',()=>run([N(S.ch>=4?'Still full of everyone\'s phones from last night. Priya\'s bathtub Faraday zone. It\'s a monument now.':'A bathtub. Clean. Suspiciously crunchy towel.')],hub));
 int('f13',299,0,()=>'Look over the edge',N1('Thirteen floors down, the street glows. Up here the wind is loud enough that nobody could listen in. That\'s probably the point.'),{y:3.6});
 int('f13',214.5,7,()=>'Look through the telescope',N1('Pointed at the sky, it shows stars. Pointed at the office tower across the road, it shows a man eating cereal at his desk at midnight. You point it back at the stars.'),{y:3.6});
 int('f13',261,1.6,()=>S.clues.includes('device')?'The spot where the sniffer was':null,N1('Just tape marks now, under the door frame. Someone took the box. Someone with silver hair, probably.'),{y:3.6});
 int('f13',244,-14.6,()=>'Sit on a lounger',N1('You lie back. The city hums. For a minute, there is no con, no Lumen, no WHISPER. Just sky.'),{y:3.6});
}
function liftMenu(){
 const here=WD.reg;
 run([{hide:1},N('The lift arrives with a soft ding. Muzak. A mirror. You look tired, but in a cool way.'),C(
  {t:'Ground floor · Lobby',if:()=>here!=='con',then:()=>{fadeTp(()=>teleport('con',-16.2,26,Math.PI/2,0));return[]}},
  {t:'13th floor · Room 1337',if:()=>here!=='f13',then:()=>{fadeTp(()=>teleport('f13',202,0,-Math.PI/2,0));return[]}},
  {t:'Stay here',then:[]})],hub);
}
function fadeTp(fn){const f=$('fade');f.classList.add('on');setTimeout(()=>{fn();WD.area=null;setTimeout(()=>f.classList.remove('on'),120)},260)}
/* ---------- characters ---------- */
function charAct(c){
 const id=c.id;
 if(id==='bea'&&S.ch===1)return advance();
 if(id==='marge'){if(S.ch===4)return advance();return run([L('marge','n',pick(['Be excellent to each other. And hydrate.','If you see Lumen people in the ceiling, tell me. I\'m only half joking.','Twenty years of this con. It still makes me cry at the closing.','Don\'t trust the Wi-Fi. I\'ve told everyone. Nobody listens.']))],hub)}
 if(id==='victor')return run([L('victor',S.ch>=3?'a':'s',pick(S.ch>=3?['Not now.','I don\'t talk to "researchers" without legal present.','You\'re one of Marge\'s little friends, aren\'t you?']:['Have you installed SafeSphere? It\'s free. Privacy should be free.','Lumen is proud to support the community. Truly.','Do you know who I am? Good. Then you know I\'m busy.']))],hub);
 if(id==='dave'){
  if(daveReady())return run([...DAVE[S.stage.dave].sc(),()=>{S.stage.dave++;return[]}],hub);
  return run([L(S.ch>=2?'davex':'dave',S.ch>=2?'n':'h',pick(S.ch<2?['Bro. Ten million downloads. Ten. Million.','Want a stress ball? It has a QR code. Don\'t scan it. Or do. I don\'t know what it does.']:S.f.dave_helped?['Two-factor on everything now, bro. I\'m basically Priya.','I deleted all my boarding passes. I feel naked. In a good way.']:['I\'m hiding. From pizza delivery drivers.','Bro, everything in my inbox looks like a scam now.']))],hub);
 }
 if(id==='ellie'&&S.ch===0){if(!S.f.ch0b)return run(CH0B(),()=>{S.f.ch0b=1;hub()});return run([L('ellie','h',pick(['Go to work! You\'ll be late. Again.','Go on. Shoo. Fix some printers.']))],hub)}
 if(ROM.includes(id)){
  if(sceneReady(id)){const R=ROUTES[id];return run(R.scenes[S.stage[id]](),()=>{if(S.f.hold){delete S.f.hold}else S.stage[id]++;hub()})}
  const a=areaAt(c.reg,c.x,c.z,c.y);return hang(id,a?AREAS[a].bg:'con');
 }
}
/* ---------- areas ---------- */
function areaAt(reg,x,z,y){let best=null;for(const k in AREAS){const a=AREAS[k];if(a.reg!==reg)continue;const r=a.r;if(x>=r[0]&&x<=r[2]&&z>=r[1]&&z<=r[3]&&y>=a.y0&&y<=a.y1){if(a.sub)return k;if(!best)best=k}}return best}
function teleport(reg,x,z,yaw,y){WD.reg=reg;WD.x=x;WD.z=z;WD.yaw=yaw;WD.pit=0;WD.y=y||0;WD.vy=0;WD.vx=WD.vz=0;WD.eye=WD.y+1.62}
function teleportArea(k){const a=AREAS[k];if(!a)return;teleport(a.reg,a.sp[0],a.sp[1],a.sp[2],a.sp[3]||0)}
function worldBG(k){if(!(S&&S.inWorld&&G.ok)||!BG2AREA[k])return false;const cur=WD.area;if(!(cur&&(AREAS[cur].bg===k||BG2AREA[k]===cur)))teleportArea(BG2AREA[k]);return true}
/* ---------- physics ---------- */
function heightAt(reg,x,z,cy){const L=G.regions[reg].shash[Math.floor(x/4)+','+Math.floor(z/4)]||[];let best=-1e9;
 for(const s of L){if(x<s.x0||x>s.x1||z<s.z0||z>s.z1)continue;let h=s.y;if(h===undefined){const t=s.ax==='x'?(x-s.x0)/(s.x1-s.x0):(z-s.z0)/(s.z1-s.z0);h=s.ya+(s.yb-s.ya)*t}if(h<=cy+.62&&h>best)best=h}
 return best>-1e9?best:null}
function blockedAt(reg,x,z,y,r){const H=G.regions[reg].hash,a=y+.4,b=y+1.75;
 for(let gx=Math.floor((x-r)/4);gx<=Math.floor((x+r)/4);gx++)for(let gz=Math.floor((z-r)/4);gz<=Math.floor((z+r)/4);gz++){const L=H[gx+','+gz];if(!L)continue;for(const q of L){if(x+r>q[0]&&x-r<q[2]&&z+r>q[1]&&z-r<q[3]&&q[5]>a&&q[4]<b)return true}}
 for(const d of DYN){if(d.reg!==reg||!d.when())continue;const q=d.b;if(x+r>q[0]&&x-r<q[2]&&z+r>q[1]&&z-r<q[3]&&q[5]>a&&q[4]<b)return true}
 const h=heightAt(reg,x,z,y);if(h===null)return true;
 return false}
/* ---------- audio ---------- */
let AC=null,NB=null;
function audioOn(){if(AC||!(window.AudioContext||window.webkitAudioContext))return;try{AC=new(window.AudioContext||window.webkitAudioContext)();const n=AC.sampleRate*.12;NB=AC.createBuffer(1,n,AC.sampleRate);const d=NB.getChannelData(0);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,3)}catch(e){AC=null}}
function stepSound(v,f){if(!AC||!S||S.mute)return;try{if(AC.state==='suspended')AC.resume();const s=AC.createBufferSource();s.buffer=NB;const bp=AC.createBiquadFilter();bp.type='bandpass';bp.frequency.value=f||(380+Math.random()*260);bp.Q.value=1.2;const g=AC.createGain();g.gain.value=v||.18;s.connect(bp);bp.connect(g);g.connect(AC.destination);s.start()}catch(e){}}
['pointerdown','keydown','touchstart'].forEach(e=>addEventListener(e,audioOn,{once:false,passive:true}));
/* ---------- input ---------- */
function setupInput(){
 const tz=$('tzone');
 addEventListener('keydown',e=>{if(!S||!S.inWorld)return;const k=e.key.toLowerCase();WD.keys[k]=true;
  if(!worldLive())return;
  if(k==='e'||k==='enter'||k==='f'){e.preventDefault();doInteract()}
  if(k==='m'&&S.unl.map){e.preventDefault();phone('map')}});
 addEventListener('keyup',e=>{WD.keys[e.key.toLowerCase()]=false});
 addEventListener('blur',()=>{WD.keys={}});
 document.addEventListener('pointerlockerror',()=>{WD.noLock=true;$('lockHint').innerHTML='<b>Drag</b> with the mouse to look around'});
 document.addEventListener('pointerlockchange',()=>{WD.locked=document.pointerLockElement===tz;if(WD.locked)WD.wantLock=true;else{if(!WD.selfUnlock)WD.wantLock=false;WD.selfUnlock=false}});
 tz.addEventListener('click',()=>{if(WD.touch||!worldLive())return;tryLock()});
 let drag=null;
 tz.addEventListener('mousedown',e=>{if(document.pointerLockElement!==tz)drag=[e.clientX,e.clientY]});
 addEventListener('mouseup',()=>drag=null);
 addEventListener('mousemove',e=>{if(!worldLive()||WD.touch)return;
  if(document.pointerLockElement===tz)look(e.movementX,e.movementY,.0022,false);
  else if(drag){look(e.clientX-drag[0],e.clientY-drag[1],.0045,false);drag=[e.clientX,e.clientY]}});
 const joyCenter=()=>{const r=$('joy').getBoundingClientRect();return[r.left+r.width/2,r.top+r.height/2,r.width/2]};
 const tStart=e=>{setTouch(true);for(const t of e.changedTouches){
   const[jx,jy,jr]=joyCenter();
   if(!WD.joy&&Math.hypot(t.clientX-jx,t.clientY-jy)<jr*1.7&&t.clientX<innerWidth*.5){WD.joy={id:t.identifier,dx:t.clientX-jx,dy:t.clientY-jy};showJoy()}
   else if(!WD.look)WD.look={id:t.identifier,x:t.clientX,y:t.clientY}}e.preventDefault()};
 const tMove=e=>{for(const t of e.changedTouches){
   if(WD.joy&&t.identifier===WD.joy.id){const[jx,jy]=joyCenter();WD.joy.dx=t.clientX-jx;WD.joy.dy=t.clientY-jy;showJoy()}
   if(WD.look&&t.identifier===WD.look.id){if(worldLive())look(t.clientX-WD.look.x,t.clientY-WD.look.y,.0058,true);WD.look.x=t.clientX;WD.look.y=t.clientY}}e.preventDefault()};
 const tEnd=e=>{for(const t of e.changedTouches){if(WD.joy&&t.identifier===WD.joy.id){WD.joy=null;showJoy()}if(WD.look&&t.identifier===WD.look.id)WD.look=null}};
 tz.addEventListener('touchstart',tStart,{passive:false});tz.addEventListener('touchmove',tMove,{passive:false});tz.addEventListener('touchend',tEnd);tz.addEventListener('touchcancel',tEnd);
 $('actBtn').addEventListener('click',e=>{e.stopPropagation();doInteract()});
}
function tryLock(){if(WD.touch||WD.noLock)return;const tz=$('tzone');try{const p=tz.requestPointerLock&&tz.requestPointerLock();if(p&&p.catch)p.catch(()=>{})}catch(e){}}
function setTouch(on){WD.touch=on;document.body.classList.toggle('touchui',on);document.body.classList.toggle('desk',!on)}
function look(dx,dy,k,touch){const s=(S&&S.sens)||1;const tw=touch&&!(S&&S.tcam)?-1:1;WD.yaw-=dx*k*s*tw;WD.pit=clamp(WD.pit-dy*k*s*tw*(S&&S.inv?-1:1),-1.25,1.25)}
function showJoy(){const j=$('joy');const kn=$('knob');if(!WD.joy){kn.style.transform='';j.classList.remove('run');return}const d=Math.hypot(WD.joy.dx,WD.joy.dy),R=52,m=Math.min(d,R),a=Math.atan2(WD.joy.dy,WD.joy.dx);kn.style.transform=`translate(${Math.cos(a)*m}px,${Math.sin(a)*m}px)`;j.classList.toggle('run',d>R*.92)}
const worldLive=()=>S&&S.inWorld&&WD.active&&$('world').classList.contains('on')&&!$('ov').classList.contains('on')&&!$('card').classList.contains('on');
/* ---------- update ---------- */
function update(dt){
 let f=0,r=0;const K=WD.keys;
 if(K.w||K.arrowup||K.z)f+=1;if(K.s||K.arrowdown)f-=1;if(K.a||K.arrowleft||K.q)r-=1;if(K.d||K.arrowright)r+=1;
 let run=K.shift;
 if(WD.joy){const R=52,d=Math.hypot(WD.joy.dx,WD.joy.dy);if(d>7){const mag=Math.min(1,(d-7)/(R-7)),c=mag*mag*.35+mag*.65;f=-WD.joy.dy/d*c;r=WD.joy.dx/d*c;if(d>R*.92)run=true}}
 const m=Math.hypot(f,r);if(m>1){f/=m;r/=m}
 const spd=run?5.4:3.1;
 const fx=-Math.sin(WD.yaw),fz=-Math.cos(WD.yaw),rx=Math.cos(WD.yaw),rz=-Math.sin(WD.yaw);
 const tvx=(fx*f+rx*r)*spd,tvz=(fz*f+rz*r)*spd;
 const acc=Math.min(1,dt*(WD.ground?11:2.5));WD.vx+=(tvx-WD.vx)*acc;WD.vz+=(tvz-WD.vz)*acc;
 const R=.3,reg=WD.reg;
 const nx=WD.x+WD.vx*dt,nz=WD.z+WD.vz*dt;
 if(Math.abs(WD.vx)>1e-4){if(!blockedAt(reg,nx,WD.z,WD.y,R))WD.x=nx;else WD.vx=0}
 if(Math.abs(WD.vz)>1e-4){if(!blockedAt(reg,WD.x,nz,WD.y,R))WD.z=nz;else WD.vz=0}
 // vertical
 const gh=heightAt(reg,WD.x,WD.z,WD.y);const gy=gh===null?WD.y:gh;
 if(WD.vy>0||WD.y>gy+.02){WD.vy-=16*dt;WD.y+=WD.vy*dt;if(WD.y<=gy){if(WD.vy<-4)stepSound(.3,180);WD.y=gy;WD.vy=0;WD.ground=true}else WD.ground=false}
 else{WD.y=gy;WD.vy=0;WD.ground=true}
 const target=WD.y+1.62;WD.eye+=(target-WD.eye)*Math.min(1,dt*(WD.eye<target?12:20));if(Math.abs(target-WD.eye)>1.2)WD.eye=target;
 const sp=Math.hypot(WD.vx,WD.vz);
 if(WD.ground&&sp>.4){const ph=WD.bob;WD.bob+=dt*sp*2.3;if(Math.floor(ph/Math.PI)!==Math.floor(WD.bob/Math.PI))stepSound(run?.2:.14)}
 WD.fovk+=((run&&sp>4?1:0)-WD.fovk)*Math.min(1,dt*6);
 // npc wander
 for(const n of WD.npcs){if(n.reg!==WD.reg||n.still)continue;
  if(n.wait>0){n.wait-=dt;continue}
  const ddx=n.tx-n.x,ddz=n.tz-n.z,d=Math.hypot(ddx,ddz);
  if(d<.2){n.wait=2+rnd()*6;const ar=AREAS[n.ar].r;for(let t=0;t<6;t++){const tx=n.hx+(rnd()-.5)*6,tz=n.hz+(rnd()-.5)*6;if(tx>ar[0]+.6&&tx<ar[2]-.6&&tz>ar[1]+.6&&tz<ar[3]-.6&&!blockedAt(n.reg,tx,tz,n.y,.3)&&Math.abs((heightAt(n.reg,tx,tz,n.y)??-9)-n.y)<.05){n.tx=tx;n.tz=tz;break}}continue}
  const s=.7*dt,mx=n.x+ddx/d*s,mz=n.z+ddz/d*s;
  if(blockedAt(n.reg,mx,mz,n.y,.25)||Math.hypot(mx-WD.x,mz-WD.z)<.7){n.tx=n.x;n.tz=n.z;continue}
  n.x=mx;n.z=mz;
 }
 // area
 const a=areaAt(WD.reg,WD.x,WD.z,WD.y);
 if(a&&a!==WD.area){WD.area=a;const A=AREAS[a];$('areaName').textContent=A.n;$('areaName').classList.remove('fade');void $('areaName').offsetWidth;$('areaName').classList.add('fade');
  S.visited=S.visited||{};if(!S.visited[a]&&!A.hide){S.visited[a]=1;if(S.ch>0)toast('Discovered: '+A.n,'var(--butter)')}}
 if(performance.now()-WD.lastSave>8000){WD.lastSave=performance.now();S.pos=[WD.reg,WD.x,WD.z,WD.yaw,WD.y];save()}
}
/* ---------- interaction ---------- */
function visibleChars(){return WCH.filter(c=>c.reg===WD.reg&&c.when())}
function candidates(){
 const L=[];
 for(const c of visibleChars()){const story=(c.id==='bea'&&S.ch===1)||(c.id==='marge'&&S.ch===4);const nm=CH[c.spr?c.spr():c.id].name;
  let lbl=story?(c.id==='bea'?'End Day 1: order a drink from Bea':'Tell Marge you\'re ready for the keynote'):(ROM.includes(c.id)&&!S.f['met_'+c.id]?'Talk to the '+({nyx:'woman picking locks',ada:'person at the CTF table',priya:'woman by the dashboards',juno:'streamer',kit:'cosplayer',mira:'woman on the air-con unit'}[c.id]||'stranger'):'Talk to '+nm);
  if(c.id==='dave'&&daveReady())lbl='Talk to Dave';
  L.push({x:c.x,z:c.z,y:c.y||0,label:lbl,act:()=>charAct(c),r:2.4,col:CH[c.id].col,kind:'talk'})}
 for(const n of WD.npcs)if(n.reg===WD.reg)L.push({x:n.x,z:n.z,y:n.y,label:n.role==='Doorman'?'Chat with the doorman':'Chat with an attendee',act:()=>npcTalk(n),r:2,kind:'talk',col:'#9a98a6'});
 for(const i of INTS)if(i.reg===WD.reg){const lb=i.label();if(lb)L.push({x:i.x,z:i.z,y:i.y,label:lb,act:i.act,r:i.r})}
 return L;
}
function interactCheck(){
 const fx=-Math.sin(WD.yaw),fz=-Math.cos(WD.yaw);let best=null,bs=1e9;
 for(const c of candidates()){if(Math.abs((c.y||0)-WD.y)>1.9)continue;const dx=c.x-WD.x,dz=c.z-WD.z,d=Math.hypot(dx,dz);if(d>c.r)continue;const dot=(dx*fx+dz*fz)/(d||1);if(dot<.5&&d>.8)continue;const s=d*(1.6-dot);if(s<bs){bs=s;best=c}}
 WD.near=best;const p=$('prompt');
 $('world').classList.toggle('near',!!best);
 if(best){p.style.display='flex';$('promptT').textContent=best.label;p.style.borderColor=best.col||'var(--butter)';$('actBtn').style.borderColor=best.col||'var(--butter)';$('actL').textContent=best.kind==='talk'?'Talk':'Use';$('cross').classList.add('hot')}else{p.style.display='none';$('cross').classList.remove('hot')}
}
function doInteract(){if(!worldLive()||!WD.near)return;if(document.pointerLockElement){WD.selfUnlock=true;try{document.exitPointerLock()}catch(e){}}const a=WD.near.act;WD.near=null;$('prompt').style.display='none';WD.active=false;WD.keys={};WD.vx=WD.vz=0;a()}
function npcTalk(n){const pool=n.role==='Doorman'?['Welcome to the hotel. Please don\'t hack the revolving door. Somebody tried yesterday.','Taxis to the left, hackers to the right. Mostly hackers.','I\'ve worked twenty cons. This lot are the politest. And the strangest.']:(NPCLINES[n.ar]||[]).concat(NPCLINES.any,CHLINES[S.ch]||[],CHLINES[S.ch]||[]);run([{w:n.role||'Attendee',np:1,t:pick(pool)}],hub)}
/* ---------- objective ---------- */
function objective(){
 if(!S)return null;
 if(S.ch===0)return S.f.ch0b?{t:'Head out to work: the bakery\'s front door.',reg:'home',x:-295.5,z:11.2,y:0}:{t:'Go downstairs to Proof for breakfast.',reg:'home',x:-295.5,z:2.2,y:0};
 return{1:{t:'Explore the con. When you\'re ready, end the day at the Hotel Bar.',reg:'con',x:-53,z:14.7,y:0},2:{t:'When you\'re done, head up to Room 1337 for the night.',reg:'f13',x:238.6,z:7,y:0},3:{t:'When you\'re ready: Room 1337. Everyone\'s coming over.',reg:'f13',x:238.6,z:7,y:0},4:{t:'Finish what you started. Then find Marge on the Hall A stage.',reg:'con',x:-24,z:-36.6,y:1.2}}[S.ch]||null;
}
function newScenes(){const L=[];for(const c of WCH){if(ROM.includes(c.id)&&c.when()&&sceneReady(c.id))L.push({id:c.id,reg:c.reg,x:c.x,z:c.z,y:c.y||0,a:areaAt(c.reg,c.x,c.z,c.y||0)})}if(daveReady()){const c=WCH.find(c=>c.id==='dave'&&c.when());if(c)L.push({id:'dave',reg:c.reg,x:c.x,z:c.z,y:0,a:areaAt(c.reg,c.x,c.z,0)})}return L}
function updObjective(){const o=objective();const n=S.ch>0?newScenes().length:0;$('objT').textContent=o?o.t:'';$('objN').textContent=n?`${n} new scene${n>1?'s':''} waiting (yellow on the minimap)`:'';$('obj').style.display=o?'block':'none'}
/* ---------- render ---------- */
function render(){
 const gl=G.gl,cv=G.cv,dpr=Math.min(devicePixelRatio||1,1.5);
 const w=Math.floor(cv.clientWidth*dpr),h=Math.floor(cv.clientHeight*dpr);if(cv.width!==w||cv.height!==h){cv.width=w;cv.height=h}
 gl.viewport(0,0,w,h);
 const R=G.regions[WD.reg],A=WD.area&&AREAS[WD.area];const fog=(A&&A.fog)||R.fog,fr=(A&&A.fr)||R.fr;
 gl.clearColor(fog[0],fog[1],fog[2],1);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
 const sp=Math.hypot(WD.vx,WD.vz),bob=WD.ground?Math.sin(WD.bob*2)*.03*Math.min(1,sp/3):0,sway=Math.sin(WD.bob)*.012*Math.min(1,sp/3);
 const asp=w/h,vf=clamp(2*Math.atan(Math.tan(.75+WD.fovk*.06)/asp),1.05,1.8);
 const M=mul(persp(vf,asp,.05,FAR[WD.reg]||180),viewM(WD.x+Math.cos(WD.yaw)*sway,WD.eye+bob,WD.z-Math.sin(WD.yaw)*sway,WD.yaw,WD.pit));
 gl.uniformMatrix4fv(G.loc.M,false,new Float32Array(M));gl.uniform3fv(G.loc.F,fog);gl.uniform2fv(G.loc.FR,fr);
 gl.activeTexture(gl.TEXTURE0);gl.uniform1i(G.loc.T,0);
 gl.bindTexture(gl.TEXTURE_2D,G.tex);gl.bindBuffer(gl.ARRAY_BUFFER,R.buf);bindAttribs();gl.drawArrays(gl.TRIANGLES,0,R.n);
 if(G.sdirty){G.sdirty=false;upTex(G.stex,G.spr)}
 const v=[];const rx=Math.cos(WD.yaw),rz=-Math.sin(WD.yaw);const tt=performance.now()/1000;
 const q=(x,y,z,wd,ht,rect,col)=>{const hw=wd/2;const P=[[x-rx*hw,y,z-rz*hw,0,0],[x+rx*hw,y,z+rz*hw,1,0],[x+rx*hw,y+ht,z+rz*hw,1,1],[x-rx*hw,y+ht,z-rz*hw,0,1]];for(const i of[0,1,2,0,2,3]){const p=P[i];v.push(p[0],p[1],p[2],p[3]*.999,p[4]*.999,col[0],col[1],col[2],rect[0],rect[1],rect[2],rect[3])}};
 const tint=[.96,.94,.98];
 const news=S.ch>0?new Set(newScenes().map(n=>n.id)):new Set();
 for(const c of visibleChars()){const id=c.spr?c.spr():c.id;const by=Math.sin(tt*1.6+c.x)*.008;q(c.x,(c.y||0)+by,c.z,.96,1.92,charSprite(id),tint);
  const story=(c.id==='bea'&&S.ch===1)||(c.id==='marge'&&S.ch===4)||(c.id==='ellie'&&S.ch===0&&!S.f.ch0b);
  if(news.has(c.id)||story){const mk=markSprite();q(c.x,(c.y||0)+2.08+Math.sin(tt*3)*.06,c.z,.42,.42,[mk[0],mk[1],mk[2],mk[3]/2],[1,1,1])}}
 for(const n of WD.npcs)if(n.reg===WD.reg){const mv=n.still?0:Math.abs(Math.sin(tt*6+n.hx))*.03*(n.wait>0?0:1);q(n.x,n.y+mv,n.z,.92,1.84,anonSprite(n.role?7:n.v),tint)}
 for(const d of DYN)if(d.reg===WD.reg&&d.when()&&d.spr){const ts=tapeSprite();q(d.spr[0],d.spr[2],d.spr[1],1.3,2.4,ts,[1,1,1])}
 if(v.length){gl.bindTexture(gl.TEXTURE_2D,G.stex);gl.bindBuffer(gl.ARRAY_BUFFER,G.sbuf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(v),gl.DYNAMIC_DRAW);bindAttribs();gl.drawArrays(gl.TRIANGLES,0,v.length/12)}
}
/* ---------- maps ---------- */
function levelOf(reg,y){const L=LEVELS[reg]||[[0,'']];let b=L[0][0];for(const l of L)if(l[0]<=y+1.2)b=l[0];return b}
function drawMapCanvas(c,reg,o){
 const x=c.getContext('2d'),Wd=c.width,Hd=c.height;x.clearRect(0,0,Wd,Hd);
 const lv=o.level!==undefined?o.level:levelOf(reg,WD.y);
 const rs=(MAPR[reg]||[]).filter(r=>Math.abs(r.y-lv)<.6||(r.n==='Stairs'||r.n==='Stairwell'));
 let sc,ox,oz;
 if(o.mini){sc=o.sc;ox=WD.x;oz=WD.z}else{let a=1e9,b=1e9,cc=-1e9,d=-1e9;for(const r of rs){a=Math.min(a,r.x0);b=Math.min(b,r.z0);cc=Math.max(cc,r.x1);d=Math.max(d,r.z1)}sc=Math.min((Wd-20)/(cc-a),(Hd-20)/(d-b));ox=(a+cc)/2;oz=(b+d)/2}
 const X=v=>Wd/2+(v-ox)*sc,Z=v=>Hd/2+(v-oz)*sc;
 x.fillStyle=o.mini?'#0a0610cc':'#0a0610';x.fillRect(0,0,Wd,Hd);
 for(const r of rs){x.fillStyle=r.c;x.fillRect(X(r.x0),Z(r.z0),(r.x1-r.x0)*sc,(r.z1-r.z0)*sc)}
 x.strokeStyle='#f6eefc';x.lineWidth=o.mini?1.6:1.4;x.beginPath();for(const w of G.walls[reg]||[]){if(w[4]>lv+1.2||w[5]<lv+1.2)continue;x.moveTo(X(w[0]),Z(w[1]));x.lineTo(X(w[2]),Z(w[3]))}x.stroke();
 if(!o.mini){x.font='bold 12px Chakra Petch, sans-serif';x.textAlign='center';for(const r of rs){if(!r.n)continue;const A=Object.values(AREAS).find(A=>A.reg===reg&&Math.abs((A.r[0]+A.r[2])/2-(r.x0+r.x1)/2)<1.5&&Math.abs((A.r[1]+A.r[3])/2-(r.z0+r.z1)/2)<1.5&&lv>=A.y0&&lv<=A.y1);const seen=A&&S.visited&&S.visited[A.k];x.fillStyle=seen?'#ffd166':'#bba8cf';const w=(r.x1-r.x0)*sc;if(w>34)x.fillText(seen?r.n:'?',X((r.x0+r.x1)/2),Z((r.z0+r.z1)/2)+4)}}
 const news=S.ch>0?newScenes():[];
 const onLv=y=>levelOf(reg,y||0)===lv;
 for(const c of visibleChars()){if(c.reg!==reg||!onLv(c.y))continue;const nw=news.some(n=>n.id===c.id);x.fillStyle=nw?'#ffd166':(CH[c.id].col||'#fff');x.beginPath();x.arc(X(c.x),Z(c.z),nw?(o.mini?4:5):(o.mini?2.6:3.5),0,7);x.fill();if(nw){x.strokeStyle='#1b1026';x.lineWidth=1.5;x.stroke()}}
 if(o.mini)for(const n of WD.npcs)if(n.reg===reg&&onLv(n.y)){x.fillStyle='#bba8cf88';x.fillRect(X(n.x)-1,Z(n.z)-1,2,2)}
 const ob=objective();
 if(ob&&ob.reg===reg){let px=X(ob.x),pz=Z(ob.z);if(o.mini){const cx=Wd/2,cz=Hd/2,dx=px-cx,dz=pz-cz,m=Math.max(Math.abs(dx),Math.abs(dz)),lim=Wd/2-8;if(m>lim){px=cx+dx/m*lim;pz=cz+dz/m*lim}}star(x,px,pz,o.mini?6:8);if(!onLv(ob.y)){x.fillStyle='#8affc1';x.font='bold 11px sans-serif';x.textAlign='center';x.fillText(ob.y>lv?'▲':'▼',px,pz-9)}}
 if(reg===WD.reg&&levelOf(reg,WD.y)===lv){const px=X(WD.x),pz=Z(WD.z);x.save();x.translate(px,pz);x.rotate(-WD.yaw);x.fillStyle='#ff5d73';x.beginPath();x.moveTo(0,-8);x.lineTo(5.5,6);x.lineTo(0,3);x.lineTo(-5.5,6);x.closePath();x.fill();x.strokeStyle='#fff';x.lineWidth=1.2;x.stroke();x.restore()}
 if(o.mini){x.fillStyle='#f6eefc';x.font='bold 10px sans-serif';x.textAlign='center';x.fillText('N',Wd/2,11)}
}
function star(x,cx,cy,r){x.fillStyle='#8affc1';x.beginPath();for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,rr=i%2?r*.45:r;x.lineTo(cx+Math.cos(a)*rr,cy+Math.sin(a)*rr)}x.closePath();x.fill();x.strokeStyle='#1b1026';x.lineWidth=1.2;x.stroke()}
let mmT=0;
function loop(t){
 requestAnimationFrame(loop);
 const dt=Math.min(.05,(t-(WD.t||t))/1000);WD.t=t;
 if(!S||!S.inWorld||!G.ok)return;
 const live=worldLive();
 if(live)update(dt);
 if(!window.__nr)render();
 $('mini').style.display=S.unl.map?'block':'none';
 document.body.classList.toggle('unlocked',live&&!WD.touch&&!WD.locked);
 if(live){interactCheck();if(t-mmT>60&&S.unl.map){mmT=t;drawMapCanvas($('mini'),WD.reg,{mini:1,sc:3})}}
}
function initWorld(){
 if(G.inited)return G.ok;G.inited=true;
 try{
  if(!glInit($('gl')))return false;
  const ac=document.createElement('canvas');ac.width=ATW;ac.height=ATH;G.actx=ac.getContext('2d');G.atlas=ac;
  const sc=document.createElement('canvas');sc.width=sc.height=AT;G.sctx=sc.getContext('2d');G.spr=sc;
  paintTextures();buildLevels();placeWorld();finishRegions();
  G.tex=mkTex(ac);G.stex=mkTex(sc);
  setupInput();requestAnimationFrame(loop);
 }catch(e){console.error(e);G.ok=false}
 return G.ok;
}
try{document.fonts&&document.fonts.load('20px VT323')}catch(e){}
