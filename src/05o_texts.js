/* ============ TEXTS THAT WANT A REPLY ============
   TEXTQ[g+'_'+i] arrives the slot after you see scene i of g's route. Answer in Messages.
   Each reply has its own answer back, and can move closeness (fx). */
function tqAdd(g,i,t,...r){TEXTQ[g+'_'+i]={t,replies:r.map(([t,a,n])=>({t,a,fx:{[g]:n||3}}))}}
/* delivered at the start of the next slot (see nextSlot), never in the middle of a scene with them */
function tqQueue(g,i){if(TEXTQ[g+'_'+i]&&!S.f['tq_'+g+'_'+i]){S.tqp=S.tqp||[];if(!S.tqp.includes(g+'_'+i))S.tqp.push(g+'_'+i)}}
function tqFlush(){if(!S||!S.tqp||!S.tqp.length)return;const l=S.tqp.splice(0);for(const k of l)textQ(k.split('_')[0],k)}

tqAdd('ellie',3,'Okay I have now looked up "lockpicking" and there are YOUTUBERS. There are COMPETITIONS. Am I a lockpicker now?? Do I need a name??',
 ['You need a name. "The Proofer".','THE PROOFER. Oh no. Oh no I love it. Mrs Okafor is going to call me that whether I like it or not.',4],
 ['You\'re a baker who can open locks. That\'s already the best kind of person.','Stop it. I\'m blushing at a till. A customer just asked if I\'m okay.',3]);
tqAdd('ellie',4,'I keep checking the new password manager. Not to use it. Just to look at it. Is that normal? It\'s so TIDY.',
 ['Completely normal. Welcome to the club.','There\'s a club?? Does the club have biscuits? I\'ll do the biscuits.',4],
 ['Don\'t check it too much. It\'ll get shy.','It\'s a piece of software. It can\'t get shy. ...Can it?',2]);
tqAdd('ellie',5,'Couldn\'t sleep. Made forty croissants. Thinking about Tuesday. Thinking about you, a bit. A normal amount. Goodnight.',
 ['More than a normal amount, I hope.','...Okay that\'s not fair, it\'s 2am, I\'m in flour, you can\'t say things like that. Say it again tomorrow.',5],
 ['Goodnight, Ellie. Save me one.','Already did. It\'s in a bag. There\'s a drawing on it. You know which one.',3]);
tqAdd('nyx',1,'You held the tension wrong all evening and still opened it. Annoying. Don\'t get cocky.',
 ['Teach me how to hold it right.','Tomorrow. Bring coffee. Black. No questions.',4],
 ['Too late. Already cocky.','Hm. Fine. It suits you, a bit.',2]);
tqAdd('nyx',3,'If anyone asks, you didn\'t see me in the service corridor at 2am.',
 ['See who?','Good. You\'re learning.',4],
 ['What were you doing in the service corridor at 2am?','Counting doors. There\'s one too many. I\'ll show you. Maybe.',3]);
tqAdd('nyx',5,'I don\'t text people. This is me texting someone. Don\'t make it weird.',
 ['Not weird. Nice.','...Okay. Nice is acceptable.',5],
 ['Too late, it\'s already weird. I love it.','Ugh. Fine. Me too. Delete this.',4]);
tqAdd('ada',1,'I just re-solved the challenge from earlier in 4 min. Not to show off. Okay, a little. Mostly to show off. To you specifically.',
 ['Four minutes?? You\'re a monster.','The NICE kind of monster though?? Tell me it\'s the nice kind.',4],
 ['Show me how you did it tomorrow.','YES. I\'ll bring the whiteboard. I own a portable whiteboard. Is that weird. It\'s fine.',3]);
tqAdd('ada',4,'Can\'t stop thinking about what you said. About it being okay to be bad at things. I\'m bad at most things that aren\'t flags. Like texting. Like this.',
 ['You\'re doing great at this.','I rewrote that message eleven times. It was meant to be funny. It was not funny. But thank you.',5],
 ['Be bad at things with me.','Okay. Yes. Deal. Can we start with bowling, I\'ve heard I\'d be terrible.',4]);
tqAdd('priya',1,'Reminder: your phone\'s Bluetooth is on. I can see it from here. Turn it off. Also hi.',
 ['Off. Also hi.','Good. Also hi again. That was two his. I\'m bad at this part.',4],
 ['Are you watching me?','Professionally. Also a bit personally. Turn it off.',3]);
tqAdd('priya',4,'I\'ve started a threat model for us. Not for us as in us. For us as in the team. Stop reading into it.',
 ['What\'s the biggest threat in it?','Honestly? Me, getting attached. Delete this.',5],
 ['Am I in it?','You\'re the first entry. Under "assets". Not "risks". That\'s a big deal for me.',4]);
tqAdd('juno',1,'chat won\'t stop asking about "the mysterious opsec person" lmao. i told them you\'re a cryptid',
 ['Good. Keep it that way.','cryptid status: maintained. you\'re welcome 🫡',4],
 ['Tell them I say hi.','absolutely not. you\'re mine. i mean. my secret. my cryptid.',3]);
tqAdd('juno',4,'stream\'s off. it\'s weird. it\'s quiet. i don\'t know what to do with my hands. what do normal people do',
 ['They text someone they like.','...oh. ok. i\'m doing that then. this is me doing that.',5],
 ['Make toast.','i\'ve made toast. now what. NOW WHAT. this is terrifying',3]);
tqAdd('kit',1,'Fixed the strap on the gauntlet thanks to you. It doesn\'t pinch anymore. Small thing. Big thing.',
 ['Glad I could help.','You helped more than you know. I\'ll show you the next piece first.',4],
 ['Next time I\'m wearing it.','It wouldn\'t fit you! ...I could make one that does.',3]);
tqAdd('kit',4,'Took the helmet off in the lift today. On my own. Nobody looked. I\'m telling you because you\'re the only person I\'d tell.',
 ['I\'m really proud of you.','Don\'t, I\'ll cry into my glue gun. Thanks.',5],
 ['Next time, take it off when I\'m there.','...okay. Yeah. I want that.',4]);
tqAdd('rin',1,'thanks for not laughing at my nail polish. most people do a little face. you didn\'t do the face',
 ['It\'s a great colour.','IT IS a great colour!! it\'s called "midnight snack". i\'ll do yours if you want',4],
 ['What face?','exactly. exactly that. keep not doing it',3]);
tqAdd('rin',3,'can\'t sleep. reading my own report again. three years old. i was right. i hate that i was right',
 ['Being right is why we\'re going to win.','"we". ok. we. i like we. going to sleep now. maybe.',5],
 ['Come for a walk. I can\'t sleep either.','meet you by the vending machine. bring nothing. i have worms',4]);
tqAdd('rin',5,'ok i practised the talk in the mirror and my voice went squeaky on "forensic". is that bad',
 ['Squeaky is fine. Squeaky is honest.','squeaky is honest. writing that on my hand',4],
 ['Practise it on me tomorrow.','deal. you have to look at me the whole time though. no phone',5]);
tqAdd('bea',1,'Drew you. Don\'t ask to see it. It\'s not good. It\'s a bit good.',
 ['I won\'t ask. I\'ll just hope.','Good answer. You\'re learning bar manners.',4],
 ['Please let me see it.','Earn it. Come back tomorrow. Order something difficult.',3]);
tqAdd('bea',4,'Glasgow forms are open on my laptop. Haven\'t filled them in. Been staring at them for an hour.',
 ['Fill in one box. Just one.','...Name. Done. One box. That\'s a start, isn\'t it.',5],
 ['They\'d be lucky to have you.','Stop. I\'m on shift. Customers can see my face doing a thing.',4]);
tqAdd('mira',2,'Burn this after reading. You asked the right question today. Nobody asks the right question.',
 ['Burned.','Good. Liar. Thank you.',4],
 ['What was the right question?','"What do you want." Not "who are you." Goodnight.',5]);
tqAdd('mira',5,'If I turn this phone off and don\'t turn it on for a week, will you still be there.',
 ['Yes.','Then I\'m turning it off. See you in the real world.',6],
 ['I\'ll be on the roof. Every night.','...the roof. Okay. That\'s a good place to be found.',5]);
tqAdd('saoirse',1,'Off the record: that was a good tip. On the record: I have no idea who you are.',
 ['Perfect. Keep it that way.','That\'s my favourite kind of source. The kind that wants nothing.',4],
 ['Can we be off the record more often?','...Careful. That\'s how journalists get into trouble.',3]);
tqAdd('saoirse',4,'Editor wants the story by Saturday. I want it by never, because then I\'d have to stop working with you.',
 ['We could keep working together. After.','That would be extremely unprofessional. I\'m considering it very seriously.',5],
 ['File it. Then we\'ll have dinner.','Dinner. A real one. With nobody watching. Deal.',4]);
tqAdd('sunny',1,'Network\'s green. Coffee\'s cold. Thanks for bringing the second one.',
 ['Any time.','"Any time" is a dangerous thing to say to a NOC lead. I\'ll hold you to it.',4],
 ['Go to sleep, Sunny.','Sleep is for networks with redundancy. ...I\'ll try. Night.',3]);
tqAdd('sunny',4,'Switch on Level 2 went amber at 3am. I fixed it in my pyjamas. Thought of you for some reason.',
 ['What kind of pyjamas?','The ones with sheep on. Classified. Forget I said that.',4],
 ['Because I\'d have brought you coffee.','...Yes. That. Exactly that.',5]);
tqAdd('tilly',1,'did you really read the back of the badge?? nobody reads the back',
 ['Every word. "Made with love and solder".','!!!!!!!!!!! ok i\'m lying on the floor of the badge lab now',5],
 ['I always read the back.','that\'s the most attractive thing anyone\'s ever said to me. sorry. that slipped out',4]);
tqAdd('tilly',4,'I wrote my own firmware tonight. It\'s just a rainbow. It\'s just for me. It\'s the first thing I\'ve made all year that\'s mine.',
 ['Send me a video.','*video of a tiny rainbow, going round and round, in the dark* ok i\'m going to cry, goodnight',5],
 ['It sounds beautiful.','it is. you\'d like it. i\'ll show you. tomorrow.',4]);
tqAdd('petra',1,'The car started first time after you held the torch. She likes you. She doesn\'t like anyone.',
 ['Tell her I like her too.','Told her. She revved. That\'s a yes.',4],
 ['What\'s her name?','I\'m not telling you her name until the third date. ...Not that this is a date.',5]);
tqAdd('petra',4,'Fixed the radio. Unfixed it again. It was better broken. Bit like me.',
 ['You\'re not broken.','...Shut up. Okay. Thanks.',5],
 ['Broken things are the best ones.','You\'d know. You hang out with me.',3]);
tqAdd('astrid',1,'ISS goes over at 22:14. Look up. I\'ll be looking too.',
 ['I\'m looking.','I can see it. So we\'re looking at the same thing. That\'s nice. That\'s science.',5],
 ['Can\'t, I\'m inside. Tell me about it?','Bright. Steady. Very fast. Bit like you, sort of. Ignore that.',3]);
tqAdd('astrid',4,'Got a signal from a weather satellite tonight. Picture of the whole city. You\'re in it somewhere.',
 ['Send it to me.','*a grey swirl of cloud over the city* You\'re about here. Third pixel from the left.',4],
 ['Wish you were in it with me.','I am. Two pixels over. I checked.',5]);
tqAdd('yuki',1,'new PB on the practice route!! i blame you for watching. you\'re lucky',
 ['Or you\'re just brilliant.','both. it\'s both. ok i\'m going to bed. no i\'m not. one more run',4],
 ['I\'ll watch every run then.','that\'s a lot of runs. like a LOT. you sure? ...ok good',5]);
tqAdd('yuki',5,'i keep watching the clip of me not falling in the pit. 400 views. one of them is you isn\'t it',
 ['Two hundred of them are me.','STOP. that\'s so many. that\'s too many. do it again',5],
 ['I was there. I don\'t need the clip.','oh. that\'s worse. that\'s so much worse. in a good way',4]);
tqAdd('vesper',1,'You looked at the exits before you looked at me, darling. I noticed. I liked it.',
 ['I looked at you second. That\'s still high.','Second. I\'ll take second. For now.',4],
 ['I always look at the exits.','So do I. Lovely. We\'ll never get trapped anywhere together.',3]);
tqAdd('vesper',4,'No song tonight. I sat at the piano and didn\'t play. That\'s new for me. Somebody did that to me.',
 ['Was it a good feeling?','Terrifying. Wonderful. Mostly terrifying. Come tomorrow and I\'ll play you something real.',5],
 ['Who could have done that?','Don\'t be coy. It doesn\'t suit you. ...Yes. It does. Damn.',4]);
tqAdd('delphine',1,'This is my personal phone. Nobody at Lumen has this number. I wanted you to have it.',
 ['I\'ll keep it safe.','I know you will. That\'s why you have it.',5],
 ['Why me?','Because you didn\'t ask me for a statement.',4]);
tqAdd('delphine',4,'Wrote my resignation letter. Deleted it. Wrote it again. It\'s in my drafts. The most honest document I own.',
 ['Keep it there until you\'re ready.','Patience. Not a thing my industry rewards. Thank you.',4],
 ['Read it to me tomorrow.','You\'ll be the only person who ever hears it out loud.',5]);
tqAdd('noor',1,'Quick question: is it normal for a client to make me laugh during a briefing? Asking for a lawyer.',
 ['Very unprofessional of them.','Shocking. I\'ve made a note. In pencil. Underlined twice.',4],
 ['Only the good ones.','Ah. Then I\'ll have to keep this one.',5]);
tqAdd('noor',4,'Can\'t sleep. Reading case law. This one\'s from 1974 and the judge is SO rude, it\'s wonderful. Wish you were here to hear it.',
 ['Read me the rudest bit.','"The plaintiff\'s argument has all the structural integrity of a wet biscuit." I\'m going to frame it.',5],
 ['I\'m listening.','*two thousand words about a dispute over a hedge* ...still there?',3]);
tqAdd('fern',1,'Bees were calm today. They\'re calm when the person they\'re with is calm. You were calm. I noticed.',
 ['I was terrified, honestly.','Then you\'re very good at hiding it. Bees can\'t tell. Neither can I.',4],
 ['You were calm. That helped.','...Oh. Nobody\'s ever said that. Thanks.',5]);
tqAdd('fern',4,'Planted something for you in the garden. Won\'t tell you what. You\'ll find out in spring.',
 ['I\'ll come back in spring.','Good. That\'s what I was hoping. That\'s why I planted it.',6],
 ['Give me a hint.','It\'s purple. It climbs. It doesn\'t give up. Like someone.',4]);
tqAdd('wren',1,'Listened back to the bit you were on. You don\'t sound like you think you sound. You sound nice.',
 ['You sound nice too.','I sound like a woman who talks to 44 people about murders. But thank you.',4],
 ['Please don\'t use any of it.','I won\'t. It\'s mine. It\'s just mine.',5]);
tqAdd('wren',4,'My sister asked if I\'d "met anyone". I said no. Then I said "...maybe". Then she screamed. So. Maybe.',
 ['Definitely maybe.','DEFINITELY MAYBE. I\'m telling her. She\'s going to scream again.',5],
 ['What did you tell her about me?','That you never once asked me about the drowning. That you asked about the pool.',4]);
tqAdd('pia',1,'played the station again tonight. kept looking up when the doors opened. that used to just be for jonah',
 ['Who\'s it for now?','...not saying. you know. shush.',5],
 ['I\'ll come next Thursday.','i\'ll save you the bench. it\'s the good bench',4]);
tqAdd('pia',4,'jonah sent a song request. it was a new one. not "that one". i think that means he\'s getting better. i think you did that',
 ['You did that.','we both did. ok. i\'m crying at a bus stop. normal',5],
 ['What song?','one our mum used to sing. the happy one. i forgot it existed',4]);
