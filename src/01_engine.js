/* ============ CHARACTERS ============ */
const CH={
 ellie:{name:'Ellie',col:'#ffb38a',skin:'#f3d2bc',hair:'#7a4a2c',style:'wavy',eye:'#5d7a3a',outfit:'apron',oc:'#e9a9a0',acc:['bandana','flour']},
 nyx:{name:'Nyx',col:'#ff3fa4',skin:'#f1d3c4',hair:'#1d1726',streak:'#ff3fa4',style:'bob',eye:'#e0315b',outfit:'jacket',oc:'#2a2530',acc:['choker']},
 ada:{name:'Ada',col:'#8affc1',skin:'#7a4a32',hair:'#24160f',style:'puffs',eye:'#6b4426',outfit:'hoodie',oc:'#ff8a3d',acc:['glasses']},
 priya:{name:'Priya',col:'#7cc4ff',skin:'#b07a5a',hair:'#140f12',style:'ponytail',eye:'#3d2a1c',outfit:'blazer',oc:'#3f526a',acc:['phones']},
 juno:{name:'Juno',col:'#ff8fc8',skin:'#fbe0d6',hair:'#ff8fc8',style:'twin',eye:'#9b59ff',outfit:'jacket',oc:'#efeaff',acc:['catears']},
 kit:{name:'Kit',col:'#2bf0ff',skin:'#f6d9c6',hair:'#3b2a4f',style:'pixie',eye:'#6a4fb3',outfit:'tee',oc:'#2d2d3a',acc:['freckles','earring']},
 kitc:{name:'Kit',col:'#2bf0ff',skin:'#f6d9c6',hair:'#2bd9e8',style:'hipony',eye:'#6a4fb3',outfit:'armor',oc:'#1c2133',acc:['visor','freckles']},
 rin:{name:'Rin',col:'#c9b6ff',skin:'#f7e0d4',hair:'#d8c6ff',style:'fluffy',eye:'#4fb3c4',outfit:'hoodie',oc:'#ffd1e6',acc:['bandaid','catclip','choker2']},
 bea:{name:'Bea',col:'#ff9a5c',skin:'#f5d6c4',hair:'#c2532b',style:'bun',eye:'#4d7a5c',outfit:'vest',oc:'#f2f2f2',acc:['freckles','earring']},
 mira:{name:'Mira',col:'#cfd8ff',skin:'#ecdfd9',hair:'#e3e7f0',brow:'#9aa3b5',style:'long',eye:'#8c96a8',outfit:'turtle',oc:'#17151c',acc:['clip']},
 ellie2:{name:'Ellie',col:'#ffb38a',skin:'#f3d2bc',hair:'#7a4a2c',style:'wavy',eye:'#5d7a3a',outfit:'cardigan',oc:'#f1e3c8',inn:'#c8504a',acc:['beret'],lower:{t:'skirt',c:'#3d4a6a',l:'#3d4a6a',s:'#6a3a2a',boot:1}},
 saoirse:{name:'Saoirse',col:'#e8a35c',skin:'#f4d8c6',hair:'#a0482a',style:'curly',eye:'#4a7a5a',outfit:'trench',oc:'#b59a6a',acc:['freckles','pencil'],lower:{t:'pants',c:'#2a2a34',s:'#5a3a2a',boot:1}},
 sunny:{name:'Sunny',col:'#ffe066',skin:'#6a4430',hair:'#f2e6b8',brow:'#2a1a10',style:'buzz',eye:'#3a2a1a',outfit:'hivis',oc:'#2a2a34',acc:['radio','earring'],lower:{t:'pants',c:'#2f3440',s:'#1a1a1a',boot:1}},
 tilly:{name:'Tilly',col:'#9fe3c0',skin:'#f6dccb',hair:'#9fe3c0',brow:'#6a8a7a',style:'braids',eye:'#7a5a3a',outfit:'overalls',oc:'#f0e6d8',acc:['goggles','bandaid'],lower:{t:'pants',c:'#6a8ab0',s:'#f4f4f4'}},
 petra:{name:'Petra',col:'#ff7a3c',skin:'#efd2bd',hair:'#1a1418',style:'hipony',eye:'#5a6a8a',outfit:'coveralls',oc:'#3a4a5a',acc:['grease','earring'],lower:{t:'pants',c:'#3a4a5a',s:'#1a1a1a',boot:1}},
 astrid:{name:'Astrid',col:'#a8d8ff',skin:'#f8e4d8',hair:'#f1e6c8',brow:'#c8b48a',style:'braid',eye:'#6aa0c8',outfit:'cardigan',oc:'#2a3a6a',inn:'#e9e3da',acc:['roundglasses','stars'],lower:{t:'long',c:'#5a4a3a',s:'#3a2a1a'}},
 yuki:{name:'Yuki',col:'#3aa0ff',skin:'#f3d9c4',hair:'#14141c',streak:'#3aa0ff',style:'shag',eye:'#3a2a2a',outfit:'varsity',oc:'#c0283a',acc:['headphones'],lower:{t:'shorts',c:'#1a1a24',s:'#f4f4f4',sock:'#1a1a24'}},
 vesper:{name:'Vesper',col:'#d64a5a',skin:'#efd0c0',hair:'#7a1a22',style:'waves',eye:'#6a4a2a',outfit:'gown',oc:'#141018',acc:['pearls','mole','lips'],lower:{t:'long',c:'#141018',s:'#0d0d10'}},
 delphine:{name:'Delphine',col:'#9ab4d8',skin:'#f2dccd',hair:'#e8d29a',brow:'#b89a6a',style:'chignon',eye:'#7a8a9a',outfit:'blazer',oc:'#1f2a44',acc:['studs','lips2'],lower:{t:'skirt',c:'#1f2a44',l:'#e9dcd0',s:'#0d0d10'}},
 noor:{name:'Noor',col:'#5ac8a0',skin:'#c9946e',hair:'#1d4a3a',style:'hijab',eye:'#4a3020',outfit:'blazer',oc:'#6a4a3a',acc:['glasses'],lower:{t:'long',c:'#2a2a34',s:'#2a1a14'}},
 fern:{name:'Fern',col:'#8ac86a',skin:'#efcfb4',hair:'#6a4a2a',style:'loose',eye:'#5a7a3a',outfit:'garden',oc:'#e9e0c8',acc:['sunhat','dirt'],lower:{t:'pants',c:'#6a7a4a',s:'#4a3a2a',boot:1}},
 wren:{name:'Wren',col:'#ff6a5a',skin:'#e8bf9a',hair:'#d8b878',brow:'#9a7a4a',style:'wavyshort',eye:'#3a6a8a',outfit:'hoodie',oc:'#d0302a',acc:['whistle','freckles'],lower:{t:'shorts',c:'#1a2a4a',s:'#f4f4f4'}},
 pia:{name:'Pia',col:'#c89ae8',skin:'#d9a888',hair:'#2a1a14',style:'curly',eye:'#5a3a24',outfit:'coat',oc:'#4a5a4a',acc:['beanie','scarf'],lower:{t:'pants',c:'#2a2a34',s:'#3a2a1a',boot:1}},
 pam:{name:'Pam',col:'#b8d8a8',skin:'#e9c3a6',hair:'#5a5a5a',brow:'#3a3a3a',style:'bob',streak:'#5a5a5a',eye:'#4a5a3a',outfit:'cardigan',oc:'#5a6a4a',inn:'#e9e3da',acc:['glasses','earring'],lower:{t:'pants',c:'#2a2a34',s:'#2a1a10'}},
 krall:{name:'Silas Krall',col:'#8a8f9a',skin:'#e6c4a8',hair:'#6a6a70',style:'buzz',eye:'#5a6a7a',outfit:'suit',oc:'#1a1c22',acc:['scar','stubble'],lower:{t:'pants',c:'#1a1c22',s:'#0d0d10'}},
 pike:{name:'Graham Pike',col:'#b8a88a',skin:'#efc8a8',hair:'#8a8070',style:'slick',eye:'#4a5a4a',outfit:'suit',oc:'#4a4a3a',acc:['glasses','tie'],lower:{t:'pants',c:'#4a4a3a',s:'#2a1a10'}},
 owen:{name:'Owen Pryce',col:'#c8b08a',skin:'#efcfb4',hair:'#7a5a3a',style:'short',eye:'#4a5a3a',outfit:'cardigan',oc:'#6a5a4a',inn:'#e9e3da',acc:['beard','glasses'],lower:{t:'pants',c:'#3a3a44',s:'#2a1a10'}},
 ashgrove:{name:'Mr Ashgrove',col:'#c8ccd8',skin:'#ecd0bc',hair:'#d8dce4',style:'slick',eye:'#8a9aa8',outfit:'suit',oc:'#2a2a2e',acc:['tie'],lower:{t:'pants',c:'#2a2a2e',s:'#0d0d10'}},
 jonah:{name:'Jonah',col:'#a89a8a',skin:'#c99878',hair:'#2a1a14',style:'curly',eye:'#4a3020',outfit:'hoodie',oc:'#4a4a3a',acc:['beard'],lower:{t:'pants',c:'#2a2a34',s:'#3a2a1a'}},
 dave:{name:'Dave',col:'#9be36b',skin:'#f0c8a8',hair:'#8a5a2b',style:'short',eye:'#555',outfit:'hoodie',oc:'#3a7d44',acc:['shades']},
 davex:{name:'Dave',col:'#9be36b',skin:'#f0c8a8',hair:'#8a5a2b',style:'short',eye:'#5a6a3a',outfit:'hoodie',oc:'#3a7d44',acc:[]},
 victor:{name:'Victor Hale',col:'#b0b6c3',skin:'#e8c7ad',hair:'#9aa0aa',style:'slick',eye:'#3a4a5a',outfit:'suit',oc:'#2c3140',acc:['stubble','tie']},
 linda:{name:'Linda',col:'#d9d4cc',skin:'#e8c7ad',hair:'#5a3a2a',style:'bob',streak:'#5a3a2a',eye:'#3a4a5a',outfit:'blazer',oc:'#4a5a7a',acc:['glasses']},
 gary:{name:'Gary',col:'#9be36b',skin:'#f0c8a8',hair:'#c2532b',style:'short',eye:'#4a6a3a',outfit:'tee',oc:'#6a7a5a',acc:['freckles']},
 marge:{name:'Marge',col:'#ffd166',skin:'#c98f6e',hair:'#d4d4d4',style:'bun',eye:'#4a3a2a',outfit:'hoodie',oc:'#6b4f8a',acc:['glasses','earring']}
};
const ROM=['ellie','nyx','ada','priya','juno','kit','rin','bea','mira','saoirse','sunny','tilly','petra','astrid','yuki','vesper','delphine','noor','fern','wren','pia'];
const DK='#1a1220';
const PC={};
/* ---------- drawn art from the character creator (art/chars/<look>.js, made by tools/artprep.js) ----------
   A look without its own art borrows its base character's until it gets some (Ellie's cardigan, Kit's armour).
   Expressions that haven't been made yet fall back: angry → neutral, teary → worried. */
const ARTBASE={ellie2:'ellie',kitc:'kit',davex:'dave'},ARTEX={a:'n',d:'b'};
function artOf(id){const A=window.ART||{};return A[id]||A[ARTBASE[id]]||null}
/* framing, calibrated on Ellie so the new art reads at the same size as the old: in a portrait (200 x 262) the top of
   the head sits at y 47, centred, at 0.26 units per creator pixel; in the 3D figure (200 x 500) the feet sit at y 494
   at 0.1453 units per pixel, so a character who is taller in the creator stands taller in the world */
const ARTP={k:.26,top:47},ART3={k:.1453,foot:494};
function artPor(A,x){const k=ARTP.k,X=v=>(100+(v-A.cx)*k).toFixed(2),Y=v=>(ARTP.top+(v-A.top)*k).toFixed(2);
 const e=A.ex[x]?x:A.ex[ARTEX[x]]?ARTEX[x]:null,b=A.body,f=A.face;
 return`<image href="${A.img}" x="${X(b[0])}" y="${Y(b[1])}" width="${(b[2]*k).toFixed(2)}" height="${(b[3]*k).toFixed(2)}" preserveAspectRatio="none"/>`+(e&&f?`<image href="${A.ex[e]}" x="${X(f[0])}" y="${Y(f[1])}" width="${(f[2]*k).toFixed(2)}" height="${(f[3]*k).toFixed(2)}" preserveAspectRatio="none"/>`:'')}
function por(id,x,full){
 x=x||'n';const key=id+x+(full?'F':'');if(PC[key])return PC[key];
 if(!full&&artOf(id))return PC[key]=`<svg viewBox="0 0 200 262" xmlns="http://www.w3.org/2000/svg" aria-label="${CH[id].name}" class="art">${artPor(artOf(id),x)}</svg>`;
 const c=CH[id],sk=c.skin,hr=c.hair,st=c.style,ec=c.eye,bw=c.brow||DK;
 let o='';
 if(st==='bob')o+=`<path d="M50 104 Q44 42 100 40 Q156 42 150 104 L154 164 Q128 172 112 160 L100 150 L88 160 Q72 172 46 164Z" fill="${hr}"/>`;
 if(st==='long')o+=`<path d="M48 104 Q42 36 100 34 Q158 36 152 104 Q160 180 168 260 L32 260 Q40 180 48 104Z" fill="${hr}"/><path d="M48 104 Q42 36 100 34 Q158 36 152 104 Q160 180 168 260 L32 260 Q40 180 48 104Z" fill="#000" opacity=".12"/>`;
 if(st==='ponytail')o+=`<path d="M52 100 Q50 44 100 42 Q150 44 148 100 L150 132 L50 132Z" fill="${hr}"/><path d="M138 64 Q196 76 182 170 Q174 222 150 240 Q164 180 140 118Z" fill="${hr}"/><circle cx="142" cy="66" r="8" fill="#7cc4ff"/>`;
 if(st==='twin')o+=`<path d="M52 104 Q46 42 100 40 Q154 42 148 104 L150 140 L50 140Z" fill="${hr}"/><path d="M56 66 Q6 86 14 172 Q20 226 42 250 Q34 190 58 118Z" fill="${hr}"/><path d="M144 66 Q194 86 186 172 Q180 226 158 250 Q166 190 142 118Z" fill="${hr}"/><path d="M56 66 Q6 86 14 172 Q20 226 42 250 Q30 200 36 150Z" fill="#000" opacity=".1"/>`;
 if(st==='puffs')o+=`<circle cx="56" cy="50" r="32" fill="${hr}"/><circle cx="144" cy="50" r="32" fill="${hr}"/><circle cx="48" cy="40" r="10" fill="#fff" opacity=".06"/><path d="M50 110 Q44 52 100 50 Q156 52 150 110 L148 132 L52 132Z" fill="${hr}"/>`;
 if(st==='short')o+=`<path d="M54 100 Q50 46 100 44 Q150 46 146 100 L144 112 L56 112Z" fill="${hr}"/>`;
 if(st==='wavy')o+=`<path d="M48 104 Q42 40 100 38 Q158 40 152 104 Q158 140 160 176 Q150 186 142 176 Q136 192 124 180 L76 180 Q64 192 58 176 Q50 186 40 176 Q42 140 48 104Z" fill="${hr}"/><path d="M40 176 Q42 140 48 104 Q50 150 60 176Z" fill="#000" opacity=".12"/>`;
 if(st==='pixie')o+=`<path d="M52 100 Q48 44 100 42 Q152 44 148 100 L148 124 L52 124Z" fill="${hr}"/>`;
 if(st==='hipony')o+=`<path d="M52 100 Q50 44 100 42 Q150 44 148 100 L150 130 L50 130Z" fill="${hr}"/><path d="M98 46 Q118 2 168 18 Q150 30 158 70 Q138 40 108 52Z" fill="${hr}"/><path d="M150 28 Q198 84 178 190 Q168 120 146 70Z" fill="${hr}"/><path d="M150 28 Q198 84 178 190 Q182 110 160 60Z" fill="#000" opacity=".15"/>`;
 if(st==='fluffy')o+=`<path d="M46 106 Q38 38 100 36 Q162 38 154 106 Q160 150 148 164 Q140 150 136 158 L64 158 Q60 150 52 164 Q40 150 46 106Z" fill="${hr}"/>`;
 if(st==='bun')o+=`<circle cx="100" cy="34" r="20" fill="${hr}"/><path d="M52 104 Q48 46 100 44 Q152 46 148 104 L146 130 L54 130Z" fill="${hr}"/>`;
 if(st==='slick')o+=`<path d="M54 98 Q52 44 100 42 Q148 44 146 98 L146 106 L54 106Z" fill="${hr}"/>`;
 if(st==='curly'){o+=`<path d="M44 108 Q30 58 72 40 Q100 24 128 40 Q170 58 156 108 Q168 142 154 172 Q140 182 128 170 L72 170 Q60 182 46 172 Q32 142 44 108Z" fill="${hr}"/>`;for(const[cx,cy,r]of[[48,120,14],[152,120,14],[44,150,13],[156,150,13],[52,172,12],[148,172,12]])o+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${hr}"/>`;o+=`<path d="M44 108 Q34 150 52 176" stroke="#000" stroke-opacity=".12" stroke-width="6" fill="none"/>`}
 if(st==='buzz')o+=`<path d="M56 98 Q56 52 100 50 Q144 52 144 98 L142 104 L58 104Z" fill="${hr}"/>`;
 if(st==='braids'){o+=`<path d="M52 104 Q48 46 100 44 Q152 46 148 104 L148 132 L52 132Z" fill="${hr}"/>`;for(const sx of[52,148])for(let k=0;k<7;k++)o+=`<ellipse cx="${sx+(sx<100?-4:4)}" cy="${140+k*15}" rx="${10-k*.6}" ry="9" fill="${hr}"/><path d="M${sx-8} ${136+k*15} q8 6 16 0" stroke="#000" stroke-opacity=".15" stroke-width="2" fill="none"/>`;o+=`<circle cx="48" cy="246" r="5" fill="#ff8fc8"/><circle cx="152" cy="246" r="5" fill="#ff8fc8"/>`}
 if(st==='braid'){o+=`<path d="M52 104 Q48 46 100 44 Q152 46 148 104 L150 134 L50 134Z" fill="${hr}"/>`;for(let k=0;k<8;k++)o+=`<ellipse cx="${146+k*2.2}" cy="${132+k*15}" rx="${11-k*.5}" ry="9" fill="${hr}"/><path d="M${138+k*2.2} ${128+k*15} q9 6 17 0" stroke="#000" stroke-opacity=".12" stroke-width="2" fill="none"/>`;o+=`<rect x="154" y="250" width="12" height="5" rx="2" fill="#a8d8ff"/>`}
 if(st==='shag')o+=`<path d="M48 104 Q42 42 100 40 Q158 42 152 104 L158 156 L142 146 L138 160 L122 148 L78 148 L62 160 L58 146 L42 156Z" fill="${hr}"/><path d="M42 156 L48 130 M158 156 L152 130" stroke="${c.streak||hr}" stroke-width="5"/>`;
 if(st==='waves')o+=`<path d="M44 104 Q34 32 100 30 Q166 32 156 104 Q172 158 158 212 Q170 244 152 262 L48 262 Q30 244 42 212 Q28 158 44 104Z" fill="${hr}"/><path d="M42 140 Q30 180 44 214 Q32 240 48 262 M158 140 Q170 180 156 214 Q168 240 152 262" stroke="#000" stroke-opacity=".14" stroke-width="7" fill="none"/>`;
 if(st==='chignon')o+=`<path d="M54 98 Q52 46 100 44 Q148 46 146 98 L144 116 L56 116Z" fill="${hr}"/><circle cx="134" cy="52" r="15" fill="${hr}"/><path d="M122 46 Q134 40 146 50" stroke="#000" stroke-opacity=".15" stroke-width="2" fill="none"/>`;
 if(st==='hijab')o+=`<path d="M40 122 Q34 38 100 34 Q166 38 160 122 L168 200 Q100 236 32 200Z" fill="${hr}"/><path d="M40 122 Q36 170 40 196" stroke="#000" stroke-opacity=".15" stroke-width="6" fill="none"/>`;
 if(st==='loose')o+=`<path d="M48 104 Q42 40 100 38 Q158 40 152 104 Q158 150 154 196 L46 196 Q42 150 48 104Z" fill="${hr}"/><path d="M48 120 Q44 160 48 196" stroke="#000" stroke-opacity=".12" stroke-width="5" fill="none"/>`;
 if(st==='wavyshort')o+=`<path d="M48 104 Q42 42 100 40 Q158 42 152 104 Q160 132 154 154 Q144 160 138 150 Q132 162 122 152 L78 152 Q68 162 62 150 Q56 160 46 154 Q40 132 48 104Z" fill="${hr}"/>`;
 const oc=c.oc;const HB=o;o='';
 if(!full){
 if(c.outfit==='gown')o+=`<path d="M22 262 Q26 198 100 188 Q174 198 178 262Z" fill="${sk}"/><path d="M22 262 Q26 198 100 188 Q60 204 52 262Z" fill="#000" opacity=".08"/><path d="M34 262 Q44 222 100 230 Q156 222 166 262Z" fill="${oc}"/><path d="M60 230 L72 200 M140 230 L128 200" stroke="${oc}" stroke-width="3"/>`;
 else o+=`<path d="M22 262 Q26 198 100 188 Q174 198 178 262Z" fill="${oc}"/><path d="M22 262 Q26 198 100 188 Q60 204 52 262Z" fill="#000" opacity=".15"/>`;
 if(c.outfit==='hoodie')o+=`<path d="M62 198 Q100 220 138 198 Q130 184 100 182 Q70 184 62 198Z" fill="#000" opacity=".22"/><path d="M90 206 L88 236 M110 206 L112 236" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>`;
 if(c.outfit==='jacket')o+=`<path d="M86 190 L100 228 L114 190Z" fill="${id==='juno'?'#9b59ff':'#ff3fa4'}"/><path d="M84 190 L100 236 L70 200Z M116 190 L100 236 L130 200Z" fill="#000" opacity=".25"/><path d="M100 236 L100 262" stroke="#000" stroke-opacity=".3" stroke-width="2"/>`;
 if(c.outfit==='blazer')o+=`<path d="M86 190 L100 230 L114 190Z" fill="#e9eef5"/><path d="M84 190 L100 240 L68 202Z M116 190 L100 240 L132 202Z" fill="#000" opacity=".22"/>`;
 if(c.outfit==='suit')o+=`<path d="M84 190 L100 236 L116 190Z" fill="#eef1f6"/><path d="M84 190 L100 244 L64 204Z M116 190 L100 244 L136 204Z" fill="#000" opacity=".3"/>`;
 if(c.outfit==='apron')o+=`<path d="M72 212 L128 212 L134 262 L66 262Z" fill="#f4efe6"/><path d="M74 212 L84 192 M126 212 L116 192" stroke="#f4efe6" stroke-width="5"/><path d="M88 236 H112" stroke="#d8cfc0" stroke-width="2"/>`;
 if(c.outfit==='tee')o+=`<path d="M86 192 Q100 202 114 192" stroke="#000" stroke-opacity=".25" stroke-width="3" fill="none"/><path d="M84 222 L96 214 L108 228 L120 216" stroke="#2bf0ff" stroke-width="3" fill="none" opacity=".8"/>`;
 if(c.outfit==='armor')o+=`<path d="M22 238 Q28 196 72 190 L78 226Z" fill="#2bf0ff" opacity=".75"/><path d="M178 238 Q172 196 128 190 L122 226Z" fill="#2bf0ff" opacity=".75"/><path d="M84 196 L100 214 L116 196 L112 262 L88 262Z" fill="#2a3450"/><path d="M100 214 L100 262" stroke="#ff5fb0" stroke-width="3"/>`;
 if(c.outfit==='cardigan')o+=`<path d="M86 190 L100 234 L114 190Z" fill="${c.inn||'#c8504a'}"/><path d="M84 190 L100 240 L74 206Z M116 190 L100 240 L126 206Z" fill="#000" opacity=".16"/><circle cx="104" cy="248" r="2.6" fill="#7a5a3a"/><circle cx="104" cy="258" r="2.6" fill="#7a5a3a"/><path d="M60 212 v40 M140 212 v40" stroke="#fff" stroke-opacity=".1" stroke-width="3"/>`;
 if(c.outfit==='trench')o+=`<path d="M88 190 L100 226 L112 190Z" fill="#f2efe8"/><path d="M78 188 L100 236 L64 206 L70 192Z M122 188 L100 236 L136 206 L130 192Z" fill="#000" opacity=".2"/><path d="M64 206 L76 200 M136 206 L124 200" stroke="#fff" stroke-opacity=".15" stroke-width="2"/><circle cx="88" cy="248" r="3" fill="#5a4a2a"/><circle cx="112" cy="248" r="3" fill="#5a4a2a"/>`;
 if(c.outfit==='hivis')o+=`<path d="M40 262 L50 212 Q64 200 84 194 L92 262Z M160 262 L150 212 Q136 200 116 194 L108 262Z" fill="#d8f03a"/><path d="M46 238 L90 238 M154 238 L110 238" stroke="#e8e8f0" stroke-width="5"/><path d="M84 194 Q100 204 116 194" stroke="#000" stroke-opacity=".3" stroke-width="3" fill="none"/>`;
 if(c.outfit==='overalls')o+=`<path d="M72 216 L128 216 L132 262 L68 262Z" fill="#6a8ab0"/><path d="M76 216 L84 190 M124 216 L116 190" stroke="#6a8ab0" stroke-width="8"/><circle cx="78" cy="222" r="3.2" fill="#ffd166"/><circle cx="122" cy="222" r="3.2" fill="#ffd166"/><rect x="88" y="228" width="24" height="16" rx="3" fill="#000" opacity=".12"/>`;
 if(c.outfit==='coveralls')o+=`<path d="M100 194 L100 262" stroke="#d8d8e0" stroke-width="3"/><path d="M82 190 L100 206 L118 190" stroke="#000" stroke-opacity=".3" stroke-width="5" fill="none"/><rect x="58" y="222" width="22" height="12" rx="2" fill="#e9e3da"/><path d="M62 228 h14" stroke="#c0283a" stroke-width="2"/>`;
 if(c.outfit==='varsity')o+=`<path d="M82 190 Q100 202 118 190" stroke="#f4f4f4" stroke-width="7" fill="none"/><path d="M100 202 L100 262" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="3 6"/><text x="60" y="246" font-size="28" font-family="Georgia,serif" font-weight="bold" fill="#f4f4f4">Y</text><path d="M22 262 Q24 236 34 220" stroke="#f4f4f4" stroke-width="6" fill="none"/><path d="M178 262 Q176 236 166 220" stroke="#f4f4f4" stroke-width="6" fill="none"/>`;
 if(c.outfit==='garden')o+=`<path d="M70 212 L130 212 L136 262 L64 262Z" fill="#7a8a5a"/><path d="M72 212 L82 192 M128 212 L118 192" stroke="#7a8a5a" stroke-width="5"/><path d="M86 232 h28 v18 h-28Z" fill="#000" opacity=".15"/><path d="M90 230 l3 -8 M96 230 l-2 -9" stroke="#5a8a3a" stroke-width="2.5"/>`;
 if(c.outfit==='coat')o+=`<path d="M76 190 L100 222 L124 190 L134 212 L100 244 L66 212Z" fill="#000" opacity=".2"/><path d="M100 244 L100 262" stroke="#000" stroke-opacity=".3" stroke-width="2"/><circle cx="92" cy="252" r="3" fill="#2a2a2a"/>`;
 if(c.outfit==='vest')o+=`<path d="M48 262 L58 206 Q76 196 88 194 L100 238 L112 194 Q124 196 142 206 L152 262Z" fill="#17141c"/><path d="M94 196 L100 206 L106 196Z" fill="#7a1f2b"/>`;
 }
 const BD=o;o='';
 const NK=`<rect x="88" y="138" width="24" height="45" rx="6" fill="${sk}"/><rect x="88" y="150" width="24" height="12" fill="#000" opacity=".12"/>`;
 if(!full&&c.outfit==='turtle')o+=`<rect x="82" y="164" width="36" height="32" rx="10" fill="${oc}"/><path d="M84 176 H116 M84 184 H116" stroke="#fff" stroke-opacity=".08" stroke-width="2"/>`;
 if(!full&&c.acc.includes('tie'))o+=`<path d="M96 192 L104 192 L106 230 L100 240 L94 230Z" fill="#8b1e2d"/>`;
 const CL=o;o='';
 if(st!=='hijab')o+=`<ellipse cx="56" cy="114" rx="7" ry="10" fill="${sk}"/><ellipse cx="144" cy="114" rx="7" ry="10" fill="${sk}"/>`;
 o+=`<path d="M56 100 Q56 150 100 162 Q144 150 144 100 Q144 58 100 58 Q56 58 56 100Z" fill="${sk}"/>`;
 const eye=(cx,side)=>{
  const Y=112;let e='';
  const open=(ir,ry)=>`<ellipse cx="${cx}" cy="${Y}" rx="9" ry="${ry||11}" fill="#fff"/><circle cx="${cx}" cy="${Y+1}" r="${ir}" fill="${ec}"/><circle cx="${cx}" cy="${Y+2}" r="${ir/2}" fill="${DK}"/><circle cx="${cx-2.5}" cy="${Y-2.5}" r="2.2" fill="#fff"/><path d="M${cx-11} ${Y-7} Q${cx} ${Y-15} ${cx+11} ${Y-7}" stroke="${DK}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
  if(x==='h')e=`<path d="M${cx-9} ${Y+2} Q${cx} ${Y-8} ${cx+9} ${Y+2}" stroke="${DK}" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;
  else if(x==='o')e=`<ellipse cx="${cx}" cy="${Y}" rx="9" ry="12" fill="#fff"/><circle cx="${cx}" cy="${Y}" r="4" fill="${ec}"/><circle cx="${cx}" cy="${Y}" r="2" fill="${DK}"/><path d="M${cx-11} ${Y-9} Q${cx} ${Y-17} ${cx+11} ${Y-9}" stroke="${DK}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  else{
   e=open(7);
   if(x==='s')e+=`<rect x="${cx-13}" y="${Y-18}" width="26" height="15" fill="${sk}"/><path d="M${cx-11} ${Y-3} Q${cx} ${Y-6} ${cx+11} ${Y-3}" stroke="${DK}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
   if(x==='b')e+=`<rect x="${cx-13}" y="${Y-18}" width="26" height="12" fill="${sk}"/><path d="M${cx-11} ${Y-6} Q${cx} ${Y-9} ${cx+11} ${Y-6}" stroke="${DK}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
   if(x==='a'){const p=side<0?`M${cx-13} ${Y-18} L${cx+13} ${Y-18} L${cx+13} ${Y-4}Z`:`M${cx-13} ${Y-18} L${cx+13} ${Y-18} L${cx-13} ${Y-4}Z`;e+=`<path d="${p}" fill="${sk}"/>`;}
   if(x==='d')e+=`<path d="M${cx-4} ${Y+12} q1 5 0 8" stroke="#7cc4ff" stroke-width="2.5" fill="none" opacity="${id==='kitc'?0:.0}"/>`;
  }
  let br;
  if(x==='a')br=side<0?`M${cx-9} ${Y-24} L${cx+9} ${Y-17}`:`M${cx-9} ${Y-17} L${cx+9} ${Y-24}`;
  else if(x==='d'||x==='b')br=side<0?`M${cx-9} ${Y-19} L${cx+9} ${Y-25}`:`M${cx-9} ${Y-25} L${cx+9} ${Y-19}`;
  else if(x==='o')br=`M${cx-9} ${Y-27} Q${cx} ${Y-31} ${cx+9} ${Y-27}`;
  else br=`M${cx-9} ${Y-22} Q${cx} ${Y-25} ${cx+9} ${Y-22}`;
  e+=`<path d="${br}" stroke="${bw}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  return e;
 };
 o+=eye(82,-1)+eye(118,1);
 if(c.acc.includes('freckles'))o+=`<g fill="#b5653f" opacity=".55"><circle cx="70" cy="126" r="1.4"/><circle cx="75" cy="129" r="1.4"/><circle cx="66" cy="130" r="1.2"/><circle cx="130" cy="126" r="1.4"/><circle cx="125" cy="129" r="1.4"/><circle cx="134" cy="130" r="1.2"/></g>`;
 if(c.acc.includes('stubble'))o+=`<path d="M66 132 Q100 172 134 132 Q100 160 66 132Z" fill="#000" opacity=".12"/>`;
 o+=`<path d="M100 120 L98 127 L101 128" stroke="#000" stroke-opacity=".25" fill="none" stroke-width="1.6" stroke-linecap="round"/>`;
 const M={n:'M93 138 Q100 141 107 138',h:'M89 134 Q100 150 111 134Z',s:'M92 139 Q103 142 111 133',a:'M93 141 Q100 135 107 141',o:'',b:'M94 138 Q100 142 106 138',d:'M93 142 Q100 137 107 142'};
 if(x==='o')o+=`<ellipse cx="100" cy="140" rx="5" ry="7" fill="#7a2a3a"/>`;
 else if(x==='h')o+=`<path d="${M.h}" fill="#7a2a3a"/><path d="M92 136 Q100 140 108 136" stroke="#fff" stroke-width="2.5" fill="none"/>`;
 else o+=`<path d="${M[x]||M.n}" stroke="#7a2a3a" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
 if(x==='b'||x==='h')o+=`<ellipse cx="72" cy="128" rx="9" ry="4.5" fill="#ff5f87" opacity="${x==='b'?.6:.3}"/><ellipse cx="128" cy="128" rx="9" ry="4.5" fill="#ff5f87" opacity="${x==='b'?.6:.3}"/>`;
 if(x==='b')o+=`<path d="M66 124 l4 6 M72 123 l4 6 M124 123 l4 6 M130 124 l4 6" stroke="#ff5f87" stroke-width="1.5"/>`;
 if(x==='d')o+=`<path d="M77 124 q-1 6 1 9" stroke="#9fd4ff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".8"/>`;
 // bangs
 if(st==='bob')o+=`<path d="M54 112 Q46 50 100 46 Q154 48 148 102 Q122 92 98 64 Q92 92 72 86 Q64 100 54 112Z" fill="${hr}"/><path d="M98 64 Q112 84 130 94 Q116 70 108 52Z" fill="${c.streak}"/>`;
 else if(st==='long')o+=`<path d="M54 118 Q48 48 100 46 Q152 48 146 118 Q140 80 104 62 Q100 72 96 62 Q60 80 54 118Z" fill="${hr}"/><path d="M58 116 Q52 170 46 226 L62 226 Q64 164 66 120Z M142 116 Q148 170 154 226 L138 226 Q136 164 134 120Z" fill="${hr}"/>`;
 else if(st==='puffs')o+=`<path d="M56 100 Q54 58 100 56 Q146 58 144 100 Q138 78 124 76 Q114 66 100 74 Q86 66 76 76 Q62 78 56 100Z" fill="${hr}"/>`;
 else if(st==='short')o+=`<path d="M56 98 Q56 50 100 48 Q148 50 146 96 Q136 72 120 78 Q110 64 98 76 Q82 66 72 80 Q62 78 56 98Z" fill="${hr}"/>`;
 else if(st==='wavy')o+=`<path d="M54 114 Q48 50 100 46 Q152 48 148 110 Q138 78 114 66 Q88 82 62 86 Q56 98 54 114Z" fill="${hr}"/><path d="M146 108 Q154 140 146 168 Q140 140 138 112Z" fill="${hr}"/>`;
 else if(st==='pixie')o+=`<path d="M54 104 Q52 52 100 50 Q148 52 146 100 L136 86 L128 98 L118 82 L108 96 L96 80 L86 96 L76 82 L66 98Z" fill="${hr}"/>`;
 else if(st==='fluffy')o+=`<path d="M52 110 Q50 50 100 46 Q150 50 148 110 Q140 86 130 92 Q124 74 110 84 Q100 70 90 84 Q76 74 70 92 Q60 86 52 110Z" fill="${hr}"/><path d="M52 110 Q46 140 54 150 Q58 130 60 112Z M148 110 Q154 140 146 150 Q142 130 140 112Z" fill="${hr}"/>`;
 else if(st==='bun')o+=`<path d="M54 106 Q52 54 100 52 Q148 54 146 106 Q140 80 120 70 Q100 78 80 70 Q60 80 54 106Z" fill="${hr}"/><path d="M58 104 Q54 130 60 146 M142 104 Q146 130 140 146" stroke="${hr}" stroke-width="3" fill="none"/>`;
 else if(st==='slick')o+=`<path d="M56 94 Q60 52 100 50 Q140 52 144 94 Q132 66 100 62 Q74 66 56 94Z" fill="${hr}"/><path d="M70 60 Q100 50 130 60" stroke="#fff" stroke-opacity=".3" stroke-width="2" fill="none"/>`;
 else if(st==='curly'){for(const[cx,cy,r]of[[60,92,13],[70,74,14],[86,64,14],[104,60,14],[122,66,14],[136,78,13],[142,96,11]])o+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${hr}"/>`;o+=`<path d="M74 70 q8 -6 16 0 M108 62 q8 -6 16 0" stroke="#000" stroke-opacity=".15" stroke-width="2" fill="none"/>`}
 else if(st==='buzz')o+=`<path d="M58 96 Q58 56 100 54 Q142 56 142 96 Q132 74 100 70 Q68 74 58 96Z" fill="${hr}" opacity=".95"/>`;
 else if(st==='braids')o+=`<path d="M54 106 Q50 52 100 50 Q150 52 146 106 Q140 76 104 62 L100 70 L96 62 Q60 76 54 106Z" fill="${hr}"/>`;
 else if(st==='braid')o+=`<path d="M54 108 Q50 50 100 48 Q152 50 148 104 Q120 70 70 92 Q60 98 54 108Z" fill="${hr}"/>`;
 else if(st==='shag')o+=`<path d="M52 110 Q48 50 100 48 Q152 50 148 110 L140 94 L132 104 L122 88 L112 100 L100 84 L88 100 L78 88 L68 104 L60 94Z" fill="${hr}"/><path d="M122 88 L118 100 M78 88 L82 100" stroke="${c.streak||hr}" stroke-width="4"/>`;
 else if(st==='waves')o+=`<path d="M52 116 Q46 46 100 44 Q154 46 150 112 Q140 70 90 64 Q66 76 52 116Z" fill="${hr}"/><path d="M52 116 Q44 150 50 186 Q58 160 60 122Z" fill="${hr}"/>`;
 else if(st==='chignon')o+=`<path d="M56 98 Q58 54 100 52 Q142 54 144 98 Q134 64 108 62 Q82 62 64 80 Q58 88 56 98Z" fill="${hr}"/><path d="M70 66 Q100 54 130 64" stroke="#fff" stroke-opacity=".3" stroke-width="2" fill="none"/>`;
 else if(st==='hijab')o+=`<path d="M48 100 Q50 48 100 46 Q150 48 152 100 L152 150 Q142 170 124 176 Q140 150 142 110 Q138 64 100 62 Q62 64 58 110 Q60 150 76 176 Q58 170 48 150Z" fill="${hr}"/><path d="M60 104 Q64 68 100 66 Q136 68 140 104" stroke="#000" stroke-opacity=".18" stroke-width="3" fill="none"/>`;
 else if(st==='loose')o+=`<path d="M54 110 Q50 52 100 50 Q150 52 146 110 Q138 72 100 62 Q62 72 54 110Z" fill="${hr}"/>`;
 else if(st==='wavyshort')o+=`<path d="M54 112 Q48 50 100 46 Q152 48 148 108 Q132 74 106 68 Q84 84 62 86 Q56 98 54 112Z" fill="${hr}"/><path d="M146 106 Q154 128 148 146 Q142 128 140 110Z" fill="${hr}"/>`;
 else o+=`<path d="M54 106 Q50 52 100 50 Q150 52 146 106 Q138 82 124 76 Q118 94 104 80 Q96 96 84 80 Q72 94 64 80 Q58 94 54 106Z" fill="${hr}"/>`;
 o+=`<path d="M70 64 Q100 54 130 64" stroke="#fff" stroke-opacity="${st==='long'?.5:.22}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
 for(const a of c.acc){
  if(a==='pencil')o+=`<rect x="140" y="78" width="5" height="34" rx="2" fill="#ffd166" transform="rotate(25 142 95)"/><path d="M141 110 l2 6 l2 -6" fill="#3a2a1a" transform="rotate(25 142 95)"/>`;
  if(a==='radio')o+=`<rect x="134" y="168" width="13" height="20" rx="3" fill="#1a1a1a"/><rect x="139" y="156" width="3" height="14" fill="#1a1a1a"/><circle cx="140" cy="174" r="2" fill="#8affc1"/>`;
  if(a==='goggles')o+=`<rect x="58" y="60" width="84" height="11" rx="5" fill="#5a4a3a"/><circle cx="82" cy="66" r="11" fill="#8ad8ff" stroke="#c9a46a" stroke-width="3"/><circle cx="118" cy="66" r="11" fill="#8ad8ff" stroke="#c9a46a" stroke-width="3"/><circle cx="78" cy="62" r="3" fill="#fff" opacity=".7"/>`;
  if(a==='grease')o+=`<path d="M118 132 q8 -3 15 3" stroke="#2a2a2a" stroke-width="4" opacity=".45" stroke-linecap="round" fill="none"/>`;
  if(a==='roundglasses')o+=`<g stroke="#c9a46a" stroke-width="2" fill="#fff" fill-opacity=".08"><circle cx="82" cy="112" r="13"/><circle cx="118" cy="112" r="13"/></g><path d="M95 111 Q100 107 105 111" stroke="#c9a46a" stroke-width="2" fill="none"/>`;
  if(a==='stars')o+=`<path d="M128 70 l3 7 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1Z" fill="#ffd166"/>`;
  if(a==='headphones')o+=`<path d="M62 168 Q100 194 138 168" stroke="#e9e9f0" stroke-width="6" fill="none"/><rect x="52" y="158" width="16" height="22" rx="6" fill="#3aa0ff"/><rect x="132" y="158" width="16" height="22" rx="6" fill="#3aa0ff"/>`;
  if(a==='pearls')o+=`<path d="M84 168 Q100 182 116 168" stroke="#f4f0e8" stroke-width="4" stroke-dasharray=".1 5" stroke-linecap="round" fill="none"/><circle cx="56" cy="128" r="3.2" fill="#f4f0e8"/><circle cx="144" cy="128" r="3.2" fill="#f4f0e8"/>`;
  if(a==='mole')o+=`<circle cx="120" cy="134" r="1.7" fill="#3a2a2a"/>`;
  if((a==='lips'||a==='lips2')&&x!=='o'&&x!=='h')o+=`<path d="${M[x]||M.n}" stroke="${a==='lips'?'#b81a30':'#b05a6a'}" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;
  if((a==='lips'||a==='lips2')&&x==='h')o+=`<path d="${M.h}" fill="${a==='lips'?'#b81a30':'#b05a6a'}"/><path d="M92 136 Q100 140 108 136" stroke="#fff" stroke-width="2.5" fill="none"/>`;
  if(a==='studs')o+=`<circle cx="56" cy="124" r="2.4" fill="#e8e8f0"/><circle cx="144" cy="124" r="2.4" fill="#e8e8f0"/>`;
  if(a==='sunhat')o+=`<ellipse cx="100" cy="60" rx="76" ry="15" fill="#e8d29a"/><path d="M62 60 Q64 22 100 20 Q136 22 138 60Z" fill="#e8d29a"/><path d="M63 54 Q100 62 137 54" stroke="#7a8a5a" stroke-width="5" fill="none"/><path d="M30 64 Q100 80 170 64" stroke="#000" stroke-opacity=".12" stroke-width="3" fill="none"/>`;
  if(a==='dirt')o+=`<ellipse cx="74" cy="132" rx="5" ry="2.5" fill="#6a4a2a" opacity=".4"/>`;
  if(a==='whistle')o+=`<path d="M84 166 L100 196 L116 166" stroke="#f4f4f4" stroke-width="2.5" fill="none"/><rect x="93" y="194" width="15" height="8" rx="3" fill="#c0c4cc"/>`;
  if(a==='beanie')o+=`<path d="M52 92 Q52 32 100 30 Q148 32 148 92Z" fill="#7a3a4a"/><rect x="50" y="82" width="100" height="15" rx="6" fill="#6a2a3a"/><path d="M60 86 v8 M72 86 v8 M84 86 v8 M96 86 v8 M108 86 v8 M120 86 v8 M132 86 v8 M144 86 v8" stroke="#000" stroke-opacity=".15" stroke-width="2"/><circle cx="100" cy="28" r="9" fill="#e9e3da"/>`;
  if(a==='scarf')o+=`<path d="M68 166 Q100 184 132 166 L136 180 Q100 200 64 180Z" fill="#c8a04a"/><path d="M112 182 L118 226 L104 228 L100 188Z" fill="#c8a04a"/><path d="M106 200 h10 M108 212 h10" stroke="#000" stroke-opacity=".15" stroke-width="2"/>`;
  if(a==='beret')o+=`<ellipse cx="86" cy="52" rx="46" ry="15" fill="#c8504a" transform="rotate(-10 86 52)"/><circle cx="86" cy="38" r="3.5" fill="#c8504a"/><path d="M44 60 Q86 46 128 44" stroke="#000" stroke-opacity=".15" stroke-width="3" fill="none"/>`;
  if(a==='scar')o+=`<path d="M126 94 L134 120" stroke="#b07060" stroke-width="2.2"/>`;
  if(a==='beard')o+=`<path d="M64 124 Q66 160 100 168 Q134 160 136 124 Q130 146 114 148 Q100 144 86 148 Q70 146 64 124Z" fill="${hr}"/><path d="M90 142 Q100 138 110 142" stroke="${hr}" stroke-width="4" fill="none"/>`;

  if(a==='glasses')o+=`<g stroke="#2b1d12" stroke-width="2.6" fill="#fff" fill-opacity=".1"><circle cx="82" cy="112" r="15"/><circle cx="118" cy="112" r="15"/></g><path d="M97 111 Q100 107 103 111" stroke="#2b1d12" stroke-width="2.6" fill="none"/>`;
  if(a==='choker')o+=`<rect x="89" y="164" width="22" height="6" rx="2" fill="#111"/><circle cx="100" cy="173" r="2.6" fill="#ff3fa4"/>`;
  if(a==='choker2')o+=`<rect x="89" y="164" width="22" height="5" rx="2" fill="#f6b6d6"/><circle cx="100" cy="172" r="3.4" fill="#ffd166"/><path d="M97.4 172 h5.2" stroke="#b8860b" stroke-width="1"/>`;
  if(a==='phones')o+=`<path d="M68 180 Q100 200 132 180" stroke="#20242c" stroke-width="6" fill="none"/><rect x="58" y="168" width="18" height="24" rx="7" fill="#2a2f3a"/><rect x="124" y="168" width="18" height="24" rx="7" fill="#2a2f3a"/><circle cx="67" cy="180" r="3" fill="#7cc4ff"/><circle cx="133" cy="180" r="3" fill="#7cc4ff"/>`;
  if(a==='catears')o+=`<path d="M50 96 Q100 22 150 96" stroke="#f4f0ff" stroke-width="7" fill="none"/><path d="M60 62 L50 18 L86 44Z M140 62 L150 18 L114 44Z" fill="#f4f0ff"/><path d="M62 54 L56 30 L76 44Z M138 54 L144 30 L124 44Z" fill="#ff5fb0"/><circle cx="54" cy="112" r="11" fill="#f4f0ff"/><circle cx="54" cy="112" r="5" fill="#ff5fb0"/><circle cx="146" cy="112" r="11" fill="#f4f0ff"/><circle cx="146" cy="112" r="5" fill="#ff5fb0"/>`;
  if(a==='clip')o+=`<rect x="124" y="70" width="20" height="5" rx="2" fill="#8affc1" transform="rotate(-25 134 72)"/><rect x="122" y="80" width="16" height="4" rx="2" fill="#8affc1" opacity=".7" transform="rotate(-25 130 82)"/>`;
  if(a==='catclip')o+=`<path d="M58 78 L62 64 L70 74Z M68 74 L74 62 L80 74Z" fill="#ff8fc8"/><circle cx="69" cy="78" r="7" fill="#ff8fc8"/>`;
  if(a==='shades')o+=`<rect x="68" y="103" width="27" height="15" rx="5" fill="#0d0d10"/><rect x="105" y="103" width="27" height="15" rx="5" fill="#0d0d10"/><path d="M95 109 H105 M68 108 L57 106 M132 108 L143 106" stroke="#0d0d10" stroke-width="3"/><path d="M72 106 l8 0" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>`;
  if(a==='bandana')o+=`<path d="M50 84 Q100 34 150 84 L148 96 Q100 50 52 96Z" fill="#e85d5d"/><g fill="#fff" opacity=".7"><circle cx="76" cy="70" r="2"/><circle cx="100" cy="60" r="2"/><circle cx="124" cy="70" r="2"/></g><path d="M146 86 L162 100 L156 80Z" fill="#e85d5d"/>`;
  if(a==='flour')o+=`<ellipse cx="128" cy="127" rx="7" ry="3" fill="#fff" opacity=".85" transform="rotate(-20 128 127)"/><circle cx="72" cy="96" r="2" fill="#fff" opacity=".6"/>`;
  if(a==='earring')o+=`<circle cx="145" cy="126" r="3" fill="#ffd166"/>`;
  if(a==='bandaid')o+=`<rect x="119" y="122" width="15" height="6" rx="3" fill="#f7c59f" transform="rotate(-15 126 125)"/><path d="M125 123 v4" stroke="#d89a70" stroke-width="1" transform="rotate(-15 126 125)"/>`;
  if(a==='visor')o+=`<rect x="56" y="74" width="88" height="11" rx="5.5" fill="#2bf0ff" opacity=".9"/><rect x="56" y="74" width="88" height="11" rx="5.5" fill="none" stroke="#fff" stroke-opacity=".6"/>`;
 }
 return PC[key]=`<svg viewBox="0 0 200 262" xmlns="http://www.w3.org/2000/svg" aria-label="${c.name}"><g transform="translate(0 9)">${HB}</g>${BD}<g transform="translate(0 9)">${NK}</g>${CL}<g transform="translate(0 9)">${o}</g></svg>`;
}
const head=(id,x)=>por(id,x).replace('viewBox="0 0 200 262"','viewBox="34 21 132 150"');

/* ============ STATE ============ */
let S;
/* device-wide settings (volume, graphics, look speed), separate from save files */
const SETTINGS=(()=>{const d={vol:{master:.85,music:.6,amb:.75,sfx:.8},gfx:null,sens:1,fast:false};try{const o=JSON.parse(localStorage.getItem('opsec_settings')||'{}');return Object.assign(d,o,{vol:Object.assign(d.vol,o.vol||{})})}catch(e){return d}})();
const saveSettings=()=>{try{localStorage.setItem('opsec_settings',JSON.stringify(SETTINGS))}catch(e){}};
let CURBG=null;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const LS={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const save=()=>{if(PROF)LS.set(slotKey('auto'),JSON.stringify(S))};
const endsSeen=()=>{try{return JSON.parse(LS.get('opsec2_endings')||'[]')}catch(e){return[]}};
const $=id=>document.getElementById(id);
const sub=t=>String(t).replace(/\{=([^}]*)\}/g,(m,e)=>{const r=ev(e);return r===undefined||r===false?'':r}).replace(/\{h\}/g,S?S.h:'you').replace(/\{H\}/g,S?S.h.toUpperCase():'YOU');
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=a=>a[Math.random()*a.length|0];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function toast(t,c){const tb=$('toasts');while(tb.children.length>=4)tb.firstChild.remove();const d=document.createElement('div');d.className='toast';d.style.color=c||'var(--ink)';d.textContent=t;tb.appendChild(d);setTimeout(()=>d.remove(),2500)}
function hud(){
 if(!S)return;
 $('when').innerHTML=S.ending?'Epilogue':S.day===0?'Prologue<span class="t"> · Two weeks earlier</span>':`Day ${S.day}<span class="t"> · ${DAYN[S.day]} · ${SLOTN[S.slot]}</span>`;
 const ms=[];
 const rk=k=>{const v=S[k],r=rankOf(v),a=RANKXP[r],b=RANKXP[r+1];return[r,b?Math.round((v-a)/(b-a)*100):100]};
 if(S.unl.skill){const[r,p]=rk('skill');ms.push(['SKL '+r,p,'var(--mint)',RANKS.skill[r]])}
 if(S.unl.clout){const[r,p]=rk('clout');ms.push(['CLT '+r,p,'var(--butter)',RANKS.clout[r]])}
 if(S.unl.exp)ms.push(['EXP '+S.exp,S.exp,'var(--coral)','Exposure '+S.exp+'/100 · resets to '+S.foot+' each morning']);
 $('meters').innerHTML=ms.map(m=>`<div class="m" title="${m[3]}">${m[0]}<b><i style="width:${m[1]}%;background:${m[2]}"></i></b></div>`).join('')+(S.unl.money||S.unl.cred?`<div class="m" style="width:auto;color:var(--butter)">£<br>${S.money||0}</div>`:'');
 $('phoneBtn').style.display='block';
 $('phoneBtn').innerHTML='Phone<span class="kn" style="margin:0 0 0 6px">P</span>'+(S.msgs.some(m=>!m.r)?'<span class="dot"></span>':'');
}
function show(id){document.body.classList.toggle('inworld',id==='world');if(id!=='title'&&typeof titleCamOn==='function'){titleCamOn(false);if(typeof titleCast==='function')titleCast(false)}if(id==='title'&&typeof vcShow==='function')vcShow(false);setTimeout(updBlur,0);document.querySelectorAll('.scr').forEach(s=>s.classList.toggle('on',s.id===id));$('hud').style.display=id==='title'?'none':'flex';$('gl').style.display=(id!=='title'&&S&&S.inWorld&&G.ok)?'block':'none';if(id!=='world'){WD.active=false;if((id==='title'||id==='hub')&&document.pointerLockElement){WD.selfUnlock=true;try{document.exitPointerLock()}catch(e){}}}}

/* ============ VN ENGINE ============ */
let Q=[],onDone=null,typing=null,full='',waiting=false;
const BG={carriage:'QUARTERLINE · COACH B',con:'CTRL+ALT+CON',lock:'LOCKPICK VILLAGE',ctf:'CTF ROOM · SCOREBOARD LIVE',soc:'BLUE TEAM VILLAGE',stream:'● LIVE · CYBERJUNO',hotel:'ROOM 1337',roof:'ROOFTOP',dawn:'ROOFTOP · 5:52 AM',stage:'MAIN STAGE',keynote:'CLOSING KEYNOTE',vendor:'VENDOR HALL',party:'0xFF AFTERPARTY',void:'█████',flat:'YOUR FLAT',bakery:'PROOF · BAKERY',office:'BRINDLE & CO · IT HELPDESK',train:'TRAIN · PLATFORM 4',cos:'COSPLAY HALL',chill:'CHILL-OUT LOUNGE',bar:'THE HOTEL BAR',lobby:'HOTEL LOBBY'};
function setBG(k){const w=typeof worldBG==='function'&&worldBG(k);const cls='bg '+(w?'bg-dim':'bg-'+(BG[k]?k:'con'));if($('bg').className!==cls){$('bg').className=cls;$('bg').classList.add('bgin')}CURBG=k;if(typeof cutClass==='function')cutClass();const sg=BG[k]||(typeof AREAS!=='undefined'&&AREAS[k]?AREAS[k].n.toUpperCase():'');$('sign').textContent=sg;$('sign').style.display=sg?'block':'none';if(w&&G.ok)G.forceFrame=true}
/* does switching to this background move us somewhere else? (then fade through black) */
function bgChanges(k){if(k===CURBG||!$('vn').classList.contains('on'))return false;
 if(S&&S.inWorld&&G.ok&&typeof bgArea!=='undefined'&&bgArea(k)){const cur=areaAt(WD.reg,WD.x,WD.z,WD.y);return !(cur&&(AREAS[cur].bg===k||bgArea(k)===cur))}
 return !!$('txt').textContent}
function fadeScene(fn){if(window.__test){fn();return}const f=$('fade');if(typeof sfx==='function')sfx('whoosh');f.classList.add('on');setTimeout(()=>{fn();setTimeout(()=>f.classList.remove('on'),90)},300)}
function updBlur(){const vn=$('vn').classList.contains('on'),o=$('ov').classList.contains('on');document.body.classList.toggle('talking',!!(S&&S.inWorld&&G.ok&&(vn||o)));document.body.classList.toggle('busyov',o&&!$('ov').classList.contains('phoneov'))}
function run(steps,done){closeOv();clearPor();$('txt').textContent='';$('who').textContent='';show('vn');hud();Q=steps.slice();onDone=done;next()}
function next(){
 $('chs').innerHTML='';
 if(S.exp>=100&&!S.ending&&!S.failing&&S.day>0){S.failing=1;Q=[];onDone=null;clearPor();failDay();return}
 if(!Q.length){if(typeof cutSet==='function'&&WD.cut)cutSet(null);const d=onDone;onDone=null;if(d)d();return}
 const st=Q.shift();
 if(typeof st==='function'){const r=st();if(Array.isArray(r))Q.unshift(...r);return next()}
 if(st.bg&&!st._f&&bgChanges(st.bg)){const s2=Object.assign({},st,{_f:1});fadeScene(()=>{Q.unshift(s2);next()});return}
 if(st.bg){setBG(st.bg);if(st.t===undefined&&st.n===undefined)return next()}
 if(st.fx){fx(st.fx);if(st.t===undefined&&st.n===undefined)return next()}
 if(st.hide){clearPor();return next()}
 if(st.msg){addMsg(st.msg[0],st.msg[1]);return next()}
 if(st.tp){if(G.ok&&S.inWorld)teleportArea(st.tp);return next()}
 if(st.cut!==undefined){if(typeof cutSet==='function')cutSet(st.cut);return next()}
 if(st.unlock)return unlock(st.unlock,next);
 if(st.chapter!==undefined)return chapterCard(st.chapter,next);
 if(st.choice)return choose(st.choice);
 if(st.game){if(S.replay)return next();return GAMES[st.game](st,()=>next())}
 if(st.end)return finishEnding(st.end);
 say(st);
}
function say(st){
 const who=st.w,box=$('txt');
 if(typeof cutSpeaker==='function'&&WD.cut)cutSpeaker(who&&CH[who]?who:null);
 box.className='';
 const pw=$('who').textContent;
 if(who&&CH[who]){if(!st.keep&&!(typeof cutOn==='function'&&cutOn()))setPor(lookOf(who),st.x);$('who').textContent=st.as||CH[who].name;$('who').style.background=CH[who].col}
 else if(who==='whisper'){clearPor();$('who').textContent='WHISPER';$('who').style.background='var(--coral)';box.className='whisper'}
 else if(who==='wh1sper'){clearPor();$('who').textContent='WH1SPER';$('who').style.background='#c0102a';box.className='whisper wh1'}
 else if(who==='think'){$('who').textContent='';box.className='think'}
 else if(who==='me'){$('who').textContent=S.h;$('who').style.background='var(--butter)'}
 else if(who==='sms'){$('who').textContent=sub(st.from);$('who').style.background='var(--mint)';box.className='sms'}
 else if(who){if(st.np)clearPor();$('who').textContent=who;$('who').style.background='var(--dim)'}
 else{$('who').textContent='';box.className='narr'}
 $('por').classList.toggle('dim',!(who&&CH[who])&&who!=='think'&&who!=='me');
 if($('who').textContent!==pw){const w=$('who');w.classList.remove('pop');void w.offsetWidth;w.classList.add('pop')}
 const bx=$('box');if(!bx.classList.contains('up')){bx.classList.add('up')}
 full=sub(st.t!==undefined?st.t:st.n);box.textContent='';waiting=true;$('nexti').style.visibility='hidden';
 S.log.push([$('who').textContent,full]);if(S.log.length>120)S.log.shift();
 if(S.fast||window.__test){box.textContent=full;return doneTyping()}
 let i=0;clearInterval(typing);
 typing=setInterval(()=>{i+=2;box.textContent=full.slice(0,i);if(i>=full.length)doneTyping()},16);
}
function doneTyping(){clearInterval(typing);typing=null;$('txt').textContent=full;$('nexti').style.visibility='visible'}
$('phoneBtn').onclick=e=>{e.stopPropagation();if(S)phone()};
function tapBox(){
 if($('chs').children.length||$('ov').classList.contains('on')||$('card').classList.contains('on'))return;
 if(typing){doneTyping();return}
 if(waiting){waiting=false;if(typeof sfx==='function')sfx('advance');next()}
}
/* portraits: a new speaker slides in, an expression change just swaps */
function setPor(id,x){const P=$('por'),html=por(id,x);$('vn').classList.add('haspor');if(P.dataset.id===id&&P.firstElementChild){P.firstElementChild.outerHTML=html;return}
 P.dataset.id=id;P.innerHTML=html;const el=P.firstElementChild;if(el){el.classList.add('enter')}}
function clearPor(){const P=$('por');P.dataset.id='';$('vn').classList.remove('haspor');const el=P.firstElementChild;if(!el){return}P.innerHTML=''}
$('box').addEventListener('click',tapBox);
$('box').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();tapBox()}});
function choose(opts){
 waiting=false;
 const list=opts.filter(o=>!o.if||o.if());
 $('nexti').style.visibility='hidden';
 $('chs').innerHTML=list.map((o,i)=>`<button class="ch" style="--i:${i}" data-i="${i}"><span class="kn">${i+1}</span>${esc(sub(o.t))}${o.hint?`<small>${esc(o.hint)}</small>`:''}</button>`).join('');
 $('chs').querySelectorAll('.ch').forEach(b=>b.onclick=e=>{
  e.stopPropagation();const o=list[+b.dataset.i];
  $('chs').innerHTML='';
  S.log.push(['›',sub(o.t)]);
  if(o.fx)fx(o.fx);
  if(o.then)Q.unshift(...(typeof o.then==='function'?o.then():o.then));
  next();
 });
}
const N=t=>({n:t}),L=(w,x,t)=>({w,x,t}),W=t=>({w:'whisper',t}),ME=t=>({w:'me',t}),T=(w,t)=>({w,t}),SMS=(from,t)=>({w:'sms',from,t}),C=(...o)=>({choice:o}),FX=e=>({fx:e});
const CHAT=t=>({w:'Chat',t});

/* ============ OVERLAYS / SYSTEMS ============ */
/* NB: the overlay is shared by minigames, tutorials and the phone. Any click handler the phone puts on the
   backdrop must not survive into a minigame, or clicking beside the card closes the game mid-story. */
function ov(html){const o=$('ov');o.onclick=null;o.innerHTML=html;o.classList.add('on');o.scrollTop=0;updBlur();return o}
function closeOv(){const o=$('ov');o.onclick=null;o.classList.remove('on');o.innerHTML='';updBlur()}
const TUT={
 aff:['Affection','Your choices change how people feel about you. Hearts float up when they do. Spending time together moves you closer: Met, Acquaintance, Friend, Close, Dating, and finally In love. Each person has a story of their own, and it ends with a scene that is only for the two of you.'],
 skill:['Skill','Real knowledge, earned by learning, answering honestly and doing the work. It builds in ranks, from Script Kiddie to Elite. Some people, and some doors, only open to a high enough rank.'],
 clout:['Clout','Hype: big claims said confidently, being seen, being talked about. It builds in ranks, from Nobody to Legend. Some people love it. Others can smell it from across the room. A little of it opens doors that skill can\'t.'],
 exp:['Exposure','How findable you are today. Oversharing, bad clicks and getting caught somewhere you shouldn\'t be all add to it. It drops back each morning to your Footprint, the leaks you can never take back. If it hits 100, you\'re doxxed and the day starts again.'],
 phone:['Phone','Your phone holds everything: Messages, a Log of past dialogue and Settings. More apps unlock as you go. A red dot means something new. Tap Phone at the top, or press P.'],
 notes:['More apps','Your phone now has a Calendar (what today holds), Hearts (everyone you\'ve met and how close you are), Stats, Story (your week so far), Achievements and the Map. Press P, or M for the map.'],
 move:['Walking around','Walk with WASD or the arrow keys, or drag the stick on the left. Look with the mouse, or drag anywhere else on a touch screen. When something can be used, a prompt appears: press E or tap it. Hold Shift (or push the stick all the way) to run. Esc or P opens your phone and frees the mouse.'],
 map:['The map','Press M for the map. Drag to look around, scroll or pinch to zoom, tap a room you\'ve visited to fast travel. A green light in the world, and a green star on the map, mark where the story wants you.'],
 time:['Time','Each day has six parts: Morning, Midday, Afternoon, Evening, Night and Late night. Time only moves when you do something that takes it. Some parts of the day belong to the story: the green light shows where. The rest are yours: spend each one with someone, on a lead, at a talk, or however you like. Walking, talking, shopping and your phone are free. You can\'t do everything. Choose.'],
 hang:['Spending time','Walk up to someone and choose Spend time to use the current part of the day with them. Their next scene needs them to like you enough, and sometimes it needs the right day, or enough Skill or Clout. Talking shop is free, once a day each.'],
 money:['Money','Brindle pays a per diem every morning. You can earn more from bug bounties on your laptop, minigames, the CTF, and shifts (the info desk, the hotel bar, Proof). Shops are spread around: the Con Store, the Byte Café, the hotel boutique, the bar, the station kiosk. Gifts are ordinary things, and everyone feels differently about each one. You find out by giving, by getting closer, or by asking the wrong people.'],
 echo:['Echo','You remember. Your phone has a new app, Echo: it lists everyone and everything left, and lets you rewind the day to this morning. Each part of the day now holds six things instead of one, people can take three times as much of you, and nobody\'s story waits as long for its day.'],
 room:['Room 1337','Your hotel room. The laptop runs bug bounties for money, and the bed ends the day. Your phone can call it a night from anywhere.'],
 clues:['The case board','Someone at this con is watching everyone, and there\'s more going on than that. Clues go onto the case board in your phone. Leads there cost time, and some are risky. When you have the evidence, pick the answer and the three clues that prove it. Get it wrong and people notice you asking.']
};
function unlock(k,cb){
 if(S.unl[k]){cb();return}
 S.unl[k]=1;hud();
 const t=TUT[k];
 if(typeof sfx==='function')sfx('unlock');
 ov(`<div class="card tut"><div class="k">NEW MECHANIC</div><h3>${t[0]}</h3><p>${t[1]}</p><div class="row"><button class="btn pri" id="tutok">Got it</button></div></div>`);
 $('tutok').onclick=()=>{closeOv();cb()};
}
function chapterCard(n,cb){
 const t=typeof n==='object'?n:DAYCARD[n];const c=$('card');c.innerHTML=`<div><div class="k">${esc(t[0])}</div><h2>${esc(t[1])}</h2><p>${esc(t[2]||'')}</p><div class="tap">tap to continue</div></div>`;
 c.classList.add('on');clearPor();if(typeof sfx==='function')sfx('chapter');
 c.onclick=()=>{c.onclick=null;const f=$('fade');f.style.transition='none';f.classList.add('on');void f.offsetWidth;c.classList.remove('on');cb();
  if(typeof G!=='undefined'&&G.ok)G.forceFrame=true;
  requestAnimationFrame(()=>requestAnimationFrame(()=>setTimeout(()=>{f.style.transition='';f.classList.remove('on')},60)))};
}
/* a text that wants an answer: TEXTQ[key] = {t, replies:[{t, fx, a (their reply)}]}. Answer it in Messages. */
function textQ(from,key){const q=TEXTQ[key];if(!q||S.f['tq_'+key])return;S.f['tq_'+key]=1;S.msgs.push({f:from,t:sub(q.t),c:S.day,s:S.slot,r:0,q:key});if(S.unl.phone){toast('New message · '+(CH[from]?CH[from].name:from)+' (wants a reply)','var(--mint)');if(typeof sfx==='function')sfx('notify')}hud()}
function addMsg(from,t){S.msgs.push({f:from,t:sub(t),c:S.day,s:S.slot,r:0});if(S.unl.phone){toast('New message · '+(CH[from]?CH[from].name:from),'var(--mint)');if(typeof sfx==='function')sfx('notify')}hud()}
