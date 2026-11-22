/* ============ MONEY, SHOPS AND GIFTS ============
   You have money (£), not credits. You get it from Brindle's per diem each morning, bug bounties on your laptop,
   minigames and the CTF, shifts (the info desk, the hotel bar), and selling things back. You spend it in shops spread
   around the week: the Con Store, the café in the food court, the hotel boutique, the bar, the station kiosk, the
   arcade's prize counter, and one booth in the Vendor Hall that sells something it shouldn't.
   Gifts are ordinary things now. Everyone feels differently about each one: loves, likes, doesn't mind, dislikes.
   You learn by giving, by getting closer (people mention what they love), by talking shop, or by paying a data broker. */
/* gear: things that help you, not gifts */
for(const k in ITEMS)delete ITEMS[k];
Object.assign(ITEMS,{
 yubi:{n:'Hardware security key',d:'Blocks the Exposure from one bad click.',p:30,gear:1},
 faraday:{n:'Faraday pouch',d:'Phone goes in, signals stay out. Cuts every Exposure gain by 40%.',p:45,gear:1},
 hoodie:{n:'Plain black hoodie',d:'No logo, no slogan. Risky leads are less likely to go wrong when nobody remembers you.',p:35,gear:1},
 espresso:{n:'Triple espresso',d:'Single use. Skip the risk roll on one lead: you\'re just faster than everyone.',p:5,gear:1},
 // gifts
 coffee:{n:'Proper coffee',d:'Flat white, oat, from the good place. Small, warm, says "I noticed you\'re tired".',p:4},
 pastry:{n:'Box of pastries',d:'Six, still warm, in a paper box tied with string.',p:9},
 tea:{n:'Loose-leaf tea',d:'A tin of something smoky with a long name.',p:7},
 sweets:{n:'Bag of retro sweets',d:'Fizzy cola bottles, flying saucers, a sherbet dip.',p:3},
 flowers:{n:'Bunch of flowers',d:'Ranunculus and eucalyptus, wrapped in brown paper.',p:16},
 plant:{n:'Little potted plant',d:'A succulent in a hand-thrown pot. Hard to kill.',p:12},
 book:{n:'Paperback novel',d:'Something second-hand with someone else\'s pencil notes in it.',p:8},
 notebook:{n:'Good notebook',d:'Dotted pages, lies flat, survives rain.',p:9},
 zine:{n:'Hacker zine',d:'Photocopied, stapled, furious and funny.',p:4},
 stickers:{n:'Sticker pack',d:'Holographic, die-cut, extremely laptop.',p:4},
 gadget:{n:'Tiny dev board',d:'A microcontroller the size of a stamp, a USB-C port and endless possibility.',p:18},
 tools:{n:'Precision tool kit',d:'Sixty-four bits, a magnetic driver, tweezers. Smells like a workshop.',p:22},
 game:{n:'Retro game cartridge',d:'Boxed, mint, a little bit sun-faded.',p:24},
 record:{n:'Vinyl record',d:'An old jazz pressing with a coffee ring on the sleeve.',p:20},
 pendant:{n:'Silver pendant',d:'A tiny moon on a fine chain.',p:30},
 wine:{n:'Bottle of wine',d:'Red. The barman said "good choice" and didn\'t sound sarcastic.',p:18},
 plush:{n:'Plush cryptid',d:'A soft green moth with button eyes. Arcade prize, can\'t be bought.',p:0,prize:1},
 starmap:{n:'Star chart print',d:'The sky over the city tonight, printed on heavy paper.',p:11}
});
const GIFTS=Object.keys(ITEMS).filter(k=>!ITEMS[k].gear);
/* how everyone feels about each gift: 2 love, 1 like, -1 dislike, anything else is fine */
const GPREF={};
(function(){const raw={
 ellie:'plant book|tea coffee notebook flowers|pastry gadget',nyx:'tools sweets|stickers gadget record zine|flowers pendant',
 ada:'game gadget|sweets coffee zine plush|wine flowers',priya:'tea notebook|book plant tools|gadget stickers',
 juno:'stickers plush|sweets gadget pendant coffee|book tea',kit:'tools gadget|stickers plush coffee|wine flowers',
 rin:'sweets plush|game zine pastry|wine coffee',bea:'book record|plant tea flowers|wine coffee',
 mira:'zine starmap|record tools coffee|pendant plush',saoirse:'notebook coffee|book wine pastry|plush stickers',
 sunny:'coffee pastry|sweets tea plant|gadget game',tilly:'tools gadget|stickers sweets plush|wine pendant',
 petra:'record tools|coffee sweets game|flowers tea',astrid:'starmap book|tea plant notebook|stickers wine',
 yuki:'game plush|sweets stickers pastry|book wine',vesper:'record pendant|wine flowers book|stickers plush',
 delphine:'book wine|flowers tea pendant|stickers game',noor:'notebook tea|book pastry flowers|wine game',
 fern:'plant tea|book pastry notebook|gadget stickers',wren:'book zine|notebook coffee sweets|pendant wine',
 pia:'record flowers|tea pastry book|game gadget'};
 for(const g in raw){const[l,k,h]=raw[g].split('|').map(s=>s.split(' '));GPREF[g]={};l.forEach(i=>GPREF[g][i]=2);k.forEach(i=>GPREF[g][i]=1);h.forEach(i=>GPREF[g][i]=-1)}})();
const prefOf=(g,i)=>(GPREF[g]&&GPREF[g][i])||0;
const PREFW={2:'Loves',1:'Likes',0:'Doesn\'t mind',[-1]:'Dislikes'};
function prefKnow(g,i){S.pk=S.pk||{};(S.pk[g]=S.pk[g]||{})[i]=1}
const prefKnown=(g,i)=>!!(S.pk&&S.pk[g]&&S.pk[g][i]);
/* getting closer: people mention what they love (scene 2 and scene 4 each give one away) */
function prefReveal(g,n){const loves=GIFTS.filter(i=>prefOf(g,i)===2&&!prefKnown(g,i));for(const i of loves.slice(0,n||1)){prefKnow(g,i);if(S.unl.aff)toast(CH[g].name+' loves: '+ITEMS[i].n,CH[g].col)}}
/* ---- money ---- */
function earn(v,why){if(!v)return;S.money=Math.max(0,(S.money||0)+v);if(v>0)META_note('earned',v);if(S.unl.money||S.unl.cred)toast((v>0?'+':'−')+'£'+Math.abs(v)+(why?' · '+why:''),v>0?'var(--butter)':'var(--dim)');if(S.money>=200)ach('rich');if(META.stats&&META.stats.earned>=500)ach('money500');hud()}
function META_note(k,v){if(typeof META==='undefined')return;META.stats=META.stats||{};META.stats[k]=(META.stats[k]||0)+v}
/* ---- the shops ---- */
const SHOPS={
 constore:{n:'Con Store',w:'Vendor Hall',open:()=>S.day>=2,closed:'"Opening tomorrow!" says a sign. The shopkeeper waves a price gun at you menacingly.',stock:['yubi','faraday','hoodie','stickers','zine','gadget','tools','game','starmap','sweets']},
 cafe:{n:'Byte Café',w:'Food Court',open:()=>S.day>=1&&S.slot<=4,closed:'The shutter\'s down. A sign: "BACK AT 7AM. GO TO BED."',stock:['espresso','coffee','pastry','tea','sweets']},
 boutique:{n:'Halcyon Boutique',w:'hotel lobby',open:()=>S.day>=1&&S.slot<=4,closed:'Closed. The mannequins watch you through the glass.',stock:['flowers','plant','pendant','tea','book']},
 bar:{n:'The Bar',w:'Halcyon',open:()=>S.day>=1&&S.slot>=3,closed:'The bar doesn\'t open until the evening.',stock:['wine','coffee','sweets']},
 proof:{n:'Proof',w:'Linden Street',open:()=>S.slot<=2,closed:'Ellie\'s sold out. There is one sad bun left and she\'s eating it.',stock:['pastry','coffee','tea']},
 kiosk:{n:'Paper & Co',w:'Central Station',open:()=>true,stock:['book','notebook','zine','sweets','coffee','record','flowers']}
};
function shopOpen(id){const sh=SHOPS[id];if(!sh)return;
 if(!sh.open())return run([N(sh.closed||'Closed.')],hub);
 if(!S.unl.money)return run([{unlock:'money'}],()=>shopOpen(id));
 const draw=(msg)=>{
  const rows=sh.stock.map(k=>{const it=ITEMS[k],have=S.inv[k]||0,lovers=it.gear?[]:ROM.filter(g=>met(g)&&prefKnown(g,k)&&prefOf(g,k)>0);
   return`<div class="item"><div><b>${esc(it.n)}</b>${have?` <span class="small">(×${have} in your bag)</span>`:''}<small>${esc(it.d)}${lovers.length?' · '+lovers.map(g=>CH[g].name+(prefOf(g,k)===2?' ♥':'')).join(', '):''}</small></div><span class="price">£${it.p}</span><button class="btn" data-k="${k}" ${S.money<it.p?'disabled':''}>Buy</button></div>`}).join('');
  const sell=Object.keys(S.inv).filter(k=>ITEMS[k]&&!ITEMS[k].gear&&ITEMS[k].p>1);
  ov(`<div class="card"><h3>${esc(sh.n)}</h3><p class="small">You have <b class="term" style="font-size:20px;color:var(--butter)">£${S.money}</b>.${msg?' '+esc(msg):''}</p>${rows}
  ${id==='constore'&&sell.length?`<p class="small" style="margin-top:14px"><b>Sell back</b> (half price)</p>${sell.map(k=>`<div class="item"><div><b>${esc(ITEMS[k].n)}</b> <span class="small">×${S.inv[k]}</span></div><span class="price">£${Math.floor(ITEMS[k].p/2)}</span><button class="btn" data-s="${k}">Sell</button></div>`).join('')}`:''}
  <div class="row"><button class="btn pri" id="sx">Done</button></div></div>`);
  $('ov').querySelectorAll('.item .btn[data-k]').forEach(b=>b.onclick=()=>{const k=b.dataset.k;if(S.money<ITEMS[k].p)return;S.money-=ITEMS[k].p;S.inv[k]=(S.inv[k]||0)+1;ach('shopper');if(typeof sfx==='function')sfx('coin');hud();draw('Bought: '+ITEMS[k].n+'.')});
  $('ov').querySelectorAll('.item .btn[data-s]').forEach(b=>b.onclick=()=>{const k=b.dataset.s;S.inv[k]--;if(!S.inv[k])delete S.inv[k];S.money+=Math.floor(ITEMS[k].p/2);hud();draw('Sold.')});
  $('sx').onclick=()=>{closeOv();hub()}};draw()}
/* ---- gifts: one a day each. What they think of it is a surprise the first time ---- */
const GIFTLINE={2:['Oh. Oh! How did you know?','This is... this is exactly right. Thank you.','You\'ve been paying attention. I like that a lot.'],1:['That\'s really sweet. Thank you.','Oh, nice! I\'ll use this.','You didn\'t have to. I\'m glad you did.'],0:['Oh. Thanks! That\'s... thoughtful.','Huh. Okay. Thank you.','That\'s nice of you.'],[-1]:['Ah. Right. Thanks. I\'ll... find somewhere for it.','Oh. Um. That\'s not really my thing, but thank you.','I appreciate the thought. Genuinely. The thought.']};
function giftOpts(g){const tk=g+':g:'+S.day,have=GIFTS.filter(k=>S.inv[k]);
 if(!have.length)return[];
 return[{t:'Give a gift',hint:S.hang[tk]?'Already gave one today':have.length+' in your bag · once a day',if:()=>!S.hang[tk],then:()=>[N('Which one?'),C(...have.map(k=>({t:ITEMS[k].n,hint:prefKnown(g,k)?PREFW[prefOf(g,k)]+' this':'',then:()=>giveGift(g,k)})),{t:'Never mind',then:[]})]}]}
function giveGift(g,k){S.hang[g+':g:'+S.day]=1;S.inv[k]--;if(!S.inv[k])delete S.inv[k];const v=prefOf(g,k),first=!prefKnown(g,k);prefKnow(g,k);
 S.gifted[g]=(S.gifted[g]||0)+1;seen(g);if(Object.keys(S.gifted).length>=5)ach('gifts5');if(v===2)ach('perfect_gift');
 const R=ROUTES[g],pg=typeof worldLook==='function'?worldLook(g):g;
 const line=pick(GIFTLINE[v]);
 // a gift is time you chose to spend on them: it shares the day's limit with hangouts
 S.amult=S.amult||{};S.amult[g]=1;
 return[L(pg,v===2?'h':v===1?'h':v===0?'n':'d',line),FX({[g]:[-6,2,5,10][v+1]}),()=>{delete S.amult[g];return first?[T('think',CH[g].name+' '+PREFW[v].toLowerCase()+' '+ITEMS[k].n.toLowerCase()+'. Noted.')]:[]}]}
/* ---- work: a part of the day for money ---- */
const JOBS={
 infodesk:{n:'Do a shift on the info desk',w:'foyer',pay:22,fx:{clout:3},when:()=>S.day>=2,txt:['Two hours of "where are the toilets", "is the Wi-Fi safe" (no) and one man who wants to report his own badge for "looking at him". Marge pays volunteers in cash and biscuits.','You give directions to Hall B nineteen times. Somebody tips you in stickers. Marge tips you in actual money.']},
 barshift:{n:'Help Bea behind the bar',w:'bar',pay:30,fx:{bea:3},when:()=>S.day>=2&&S.slot>=3&&met('bea'),txt:['Bea shows you how to pour without a head, how to say no to a drunk speaker, and where the good ice is. Tips go in a pint glass. Your half is yours.','A rush at nine. You and Bea move round each other like you\'ve done it for years. She doesn\'t say thanks. She slides you the tip glass.']},
 bakery:{n:'Help out at Proof for the morning',w:'proof',pay:18,fx:{ellie:3},when:()=>S.day>=1&&S.slot<=1,txt:['Flour to the elbows. Ellie lets you do the till, then takes it off you after you give a man £40 change from a tenner.','You fold three hundred croissants badly and one perfectly. Ellie keeps the perfect one for herself.']}
};
function jobRun(id){const J=JOBS[id];if(!J||!J.when())return run([N('Not now.')],hub);if(!isFree())return run([N(curBeat()?blockedMsg():'Not now.')],hub);if(!freeCheck())return;
 run([N(pick(J.txt)),FX(J.fx),()=>{earn(J.pay,'shift');ach('worked');spend('job');return[]}],hub)}
/* ---- the data broker's booth in the Vendor Hall: £15 buys a "background report" on anyone you've met ---- */
function brokerOpen(){if(S.day<2)return run([N('A booth under a banner: PEOPLEFINDR · KNOW WHO YOU\'RE MEETING. The shutter is down.')],hub);
 if(!S.unl.money)return run([{unlock:'money'}],brokerOpen);
 const who=ROM.filter(g=>met(g)&&GIFTS.some(i=>prefOf(g,i)&&!prefKnown(g,i)));
 run([N('PEOPLEFINDR · KNOW WHO YOU\'RE MEETING. A man in a suit too shiny for a hacker con smiles at you with a lot of teeth.'),L('Broker','n','Shopping history, social likes, loyalty cards. Fifteen quid and I\'ll tell you what anyone here likes. They\'ll never know. Probably.'),
  C(...who.slice(0,8).map(g=>({t:CH[g].name,hint:S.money<15?'£15 · you can\'t afford it':'£15 · Exposure +4',if:()=>S.money>=15,then:()=>{earn(-15,'PEOPLEFINDR');const ks=GIFTS.filter(i=>prefOf(g,i)&&!prefKnown(g,i)).slice(0,3);ks.forEach(i=>prefKnow(g,i));S.f['broker_'+g]=1;ach('broker');
   return[FX({exp:4}),N('A printout, still warm. '+ks.map(i=>PREFW[prefOf(g,i)]+': '+ITEMS[i].n.toLowerCase()).join('. ')+'.'),T('think','It took him eleven seconds. Imagine what LANTERN takes.')]}})),{t:'Walk away',then:()=>[T('think','Fifteen quid to sell out a friend\'s shopping list. Not today.')]})],hub)}
