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
 dave:{name:'Dave',col:'#9be36b',skin:'#f0c8a8',hair:'#8a5a2b',style:'short',eye:'#555',outfit:'hoodie',oc:'#3a7d44',acc:['shades']},
 davex:{name:'Dave',col:'#9be36b',skin:'#f0c8a8',hair:'#8a5a2b',style:'short',eye:'#5a6a3a',outfit:'hoodie',oc:'#3a7d44',acc:[]},
 victor:{name:'Victor Hale',col:'#b0b6c3',skin:'#e8c7ad',hair:'#9aa0aa',style:'slick',eye:'#3a4a5a',outfit:'suit',oc:'#2c3140',acc:['stubble','tie']},
 linda:{name:'Linda',col:'#d9d4cc',skin:'#e8c7ad',hair:'#5a3a2a',style:'bob',streak:'#5a3a2a',eye:'#3a4a5a',outfit:'blazer',oc:'#4a5a7a',acc:['glasses']},
 gary:{name:'Gary',col:'#9be36b',skin:'#f0c8a8',hair:'#c2532b',style:'short',eye:'#4a6a3a',outfit:'tee',oc:'#6a7a5a',acc:['freckles']},
 marge:{name:'Marge',col:'#ffd166',skin:'#c98f6e',hair:'#d4d4d4',style:'bun',eye:'#4a3a2a',outfit:'hoodie',oc:'#6b4f8a',acc:['glasses','earring']}
};
const ROM=['ellie','nyx','ada','priya','juno','kit','rin','bea','mira'];
const DK='#1a1220';
const PC={};
function por(id,x,full){
 x=x||'n';const key=id+x+(full?'F':'');if(PC[key])return PC[key];
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
 const oc=c.oc;const HB=o;o='';
 if(!full){
 o+=`<path d="M22 262 Q26 198 100 188 Q174 198 178 262Z" fill="${oc}"/><path d="M22 262 Q26 198 100 188 Q60 204 52 262Z" fill="#000" opacity=".15"/>`;
 if(c.outfit==='hoodie')o+=`<path d="M62 198 Q100 220 138 198 Q130 184 100 182 Q70 184 62 198Z" fill="#000" opacity=".22"/><path d="M90 206 L88 236 M110 206 L112 236" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>`;
 if(c.outfit==='jacket')o+=`<path d="M86 190 L100 228 L114 190Z" fill="${id==='juno'?'#9b59ff':'#ff3fa4'}"/><path d="M84 190 L100 236 L70 200Z M116 190 L100 236 L130 200Z" fill="#000" opacity=".25"/><path d="M100 236 L100 262" stroke="#000" stroke-opacity=".3" stroke-width="2"/>`;
 if(c.outfit==='blazer')o+=`<path d="M86 190 L100 230 L114 190Z" fill="#e9eef5"/><path d="M84 190 L100 240 L68 202Z M116 190 L100 240 L132 202Z" fill="#000" opacity=".22"/>`;
 if(c.outfit==='suit')o+=`<path d="M84 190 L100 236 L116 190Z" fill="#eef1f6"/><path d="M84 190 L100 244 L64 204Z M116 190 L100 244 L136 204Z" fill="#000" opacity=".3"/>`;
 if(c.outfit==='apron')o+=`<path d="M72 212 L128 212 L134 262 L66 262Z" fill="#f4efe6"/><path d="M74 212 L84 192 M126 212 L116 192" stroke="#f4efe6" stroke-width="5"/><path d="M88 236 H112" stroke="#d8cfc0" stroke-width="2"/>`;
 if(c.outfit==='tee')o+=`<path d="M86 192 Q100 202 114 192" stroke="#000" stroke-opacity=".25" stroke-width="3" fill="none"/><path d="M84 222 L96 214 L108 228 L120 216" stroke="#2bf0ff" stroke-width="3" fill="none" opacity=".8"/>`;
 if(c.outfit==='armor')o+=`<path d="M22 238 Q28 196 72 190 L78 226Z" fill="#2bf0ff" opacity=".75"/><path d="M178 238 Q172 196 128 190 L122 226Z" fill="#2bf0ff" opacity=".75"/><path d="M84 196 L100 214 L116 196 L112 262 L88 262Z" fill="#2a3450"/><path d="M100 214 L100 262" stroke="#ff5fb0" stroke-width="3"/>`;
 if(c.outfit==='vest')o+=`<path d="M48 262 L58 206 Q76 196 88 194 L100 238 L112 194 Q124 196 142 206 L152 262Z" fill="#17141c"/><path d="M94 196 L100 206 L106 196Z" fill="#7a1f2b"/>`;
 }
 const BD=o;o='';
 const NK=`<rect x="88" y="138" width="24" height="45" rx="6" fill="${sk}"/><rect x="88" y="150" width="24" height="12" fill="#000" opacity=".12"/>`;
 if(!full&&c.outfit==='turtle')o+=`<rect x="82" y="164" width="36" height="32" rx="10" fill="${oc}"/><path d="M84 176 H116 M84 184 H116" stroke="#fff" stroke-opacity=".08" stroke-width="2"/>`;
 if(!full&&c.acc.includes('tie'))o+=`<path d="M96 192 L104 192 L106 230 L100 240 L94 230Z" fill="#8b1e2d"/>`;
 const CL=o;o='';
 o+=`<ellipse cx="56" cy="114" rx="7" ry="10" fill="${sk}"/><ellipse cx="144" cy="114" rx="7" ry="10" fill="${sk}"/>`;
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
 else o+=`<path d="M54 106 Q50 52 100 50 Q150 52 146 106 Q138 82 124 76 Q118 94 104 80 Q96 96 84 80 Q72 94 64 80 Q58 94 54 106Z" fill="${hr}"/>`;
 o+=`<path d="M70 64 Q100 54 130 64" stroke="#fff" stroke-opacity="${st==='long'?.5:.22}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
 for(const a of c.acc){
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
const fresh=h=>{const z={};ROM.concat(['dave']).forEach(g=>z[g]=0);return{h,ch:0,skill:10,clout:10,exp:5,cred:20,mapv:3,aff:{...z},stage:{...z},hang:{},gifted:{},inv:{},f:{},clues:[],msgs:[],log:[],unl:{},talk:{},room:{},fast:false,ending:null}};
const CHAP=[['Hello, World','Two weeks before the con'],['Badge In','CTRL+ALT+CON · Day 1'],['Capture the Flag','Day 2'],['Exposure','Day 3'],['Responsible Disclosure','Day 4 · final day'],['Keynote','Day 4 · 4:00 PM'],['0xFF','The afterparty']];
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const LS={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const save=()=>LS.set('opsec3_save',JSON.stringify(S));
const endsSeen=()=>{try{return JSON.parse(LS.get('opsec2_endings')||'[]')}catch(e){return[]}};
const $=id=>document.getElementById(id);
const sub=t=>String(t).replace(/\{h\}/g,S?S.h:'you').replace(/\{H\}/g,S?S.h.toUpperCase():'YOU');
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=a=>a[Math.random()*a.length|0];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function toast(t,c){const tb=$('toasts');while(tb.children.length>=4)tb.firstChild.remove();const d=document.createElement('div');d.className='toast';d.style.color=c||'var(--ink)';d.textContent=t;tb.appendChild(d);setTimeout(()=>d.remove(),2500)}
function fx(e){
 if(!e)return;
 for(const k in e){
  const v=e[k];
  if(k in S.aff){
   let g=v;
   if(k==='priya'&&g>0&&S.exp>=70)g=Math.ceil(g/2);
   S.aff[k]=clamp(S.aff[k]+g,0,100);
   if(S.unl.aff&&k!=='dave'){toast(`${CH[k].name} ${g>=0?'♥ +'+g:'♥ '+g}`,CH[k].col);if(typeof sfx==='function')sfx(g>=0?'heartUp':'heartDown')}
  }
  else if(k==='exp'){
   let g=v;
   if(g>0&&S.inv.faraday)g=Math.ceil(g/2);
   if(g>0&&e.phish&&S.inv.yubi){S.inv.yubi--;if(!S.inv.yubi)delete S.inv.yubi;toast('Security key blocked it','var(--mint)');continue}
   S.exp=clamp(S.exp+g,0,100);if(S.unl.exp)toast(`Exposure ${g>=0?'+':''}${g}`,'var(--coral)');
  }
  else if(['skill','clout','cred'].includes(k)){
   S[k]=k==='cred'?Math.max(0,S[k]+v):clamp(S[k]+v,0,100);
   const lbl={skill:'Skill',clout:'Clout',cred:'Credits'}[k];
   const u={skill:'skill',clout:'clout',cred:'cred'}[k];
   if(S.unl[u])toast(`${lbl} ${v>=0?'+':''}${v}`,k==='skill'?'var(--mint)':k==='clout'?'var(--butter)':'var(--dim)');
  }
  else if(k==='flag'){[].concat(v).forEach(f=>S.f[f]=1)}
  else if(k==='clue'){if(!S.clues.includes(v)){S.clues.push(v);toast('Clue noted','var(--butter)')}}
  else if(k==='item'){S.inv[v]=(S.inv[v]||0)+1;toast('Got: '+ITEMS[v].n,'var(--mint)')}
 }
 hud();
}
function hud(){
 if(!S)return;
 $('when').innerHTML=S.ch<=5?`Ch.${S.ch}<span class="t"> · ${CHAP[S.ch][0]}</span>`:'Epilogue';
 const ms=[];
 if(S.unl.skill)ms.push(['SKL',S.skill,'var(--mint)']);
 if(S.unl.clout)ms.push(['CLT',S.clout,'var(--butter)']);
 if(S.unl.exp)ms.push(['EXP',S.exp,'var(--coral)']);
 $('meters').innerHTML=ms.map(m=>`<div class="m">${m[0]} ${m[1]}<b><i style="width:${m[1]}%;background:${m[2]}"></i></b></div>`).join('')+(S.unl.cred?`<div class="m" style="width:auto;color:var(--butter)">CR<br>${S.cred}</div>`:'');
 $('phoneBtn').style.display='block';
 $('phoneBtn').innerHTML='Phone<span class="kn" style="margin:0 0 0 6px">P</span>'+(S.msgs.some(m=>!m.r)?'<span class="dot"></span>':'');
}
function show(id){document.body.classList.toggle('inworld',id==='world');if(id==='title'&&typeof vcShow==='function')vcShow(false);setTimeout(updBlur,0);document.querySelectorAll('.scr').forEach(s=>s.classList.toggle('on',s.id===id));$('hud').style.display=id==='title'?'none':'flex';$('gl').style.display=(id!=='title'&&S&&S.inWorld&&G.ok)?'block':'none';if(id!=='world'){WD.active=false;if((id==='title'||id==='hub')&&document.pointerLockElement){WD.selfUnlock=true;try{document.exitPointerLock()}catch(e){}}}}

/* ============ VN ENGINE ============ */
let Q=[],onDone=null,typing=null,full='',waiting=false;
const BG={con:'CTRL+ALT+CON',lock:'LOCKPICK VILLAGE',ctf:'CTF ROOM · SCOREBOARD LIVE',soc:'BLUE TEAM VILLAGE',stream:'● LIVE · CYBERJUNO',hotel:'ROOM 1337',roof:'ROOFTOP',dawn:'ROOFTOP · 5:52 AM',stage:'MAIN STAGE',keynote:'CLOSING KEYNOTE',vendor:'VENDOR HALL',party:'0xFF AFTERPARTY',void:'█████',flat:'YOUR FLAT',bakery:'PROOF · BAKERY',office:'BRINDLE & CO · IT HELPDESK',train:'TRAIN · PLATFORM 4',cos:'COSPLAY HALL',chill:'CHILL-OUT LOUNGE',bar:'THE HOTEL BAR',lobby:'HOTEL LOBBY'};
function setBG(k){const w=typeof worldBG==='function'&&worldBG(k);const cls='bg '+(w?'bg-dim':'bg-'+k);if($('bg').className!==cls){$('bg').className=cls;$('bg').classList.add('bgin')}CURBG=k;$('sign').textContent=BG[k]||'';$('sign').style.display=BG[k]?'block':'none';if(w&&G.ok)G.forceFrame=true}
/* does switching to this background move us somewhere else? (then fade through black) */
function bgChanges(k){if(k===CURBG||!$('vn').classList.contains('on'))return false;
 if(S&&S.inWorld&&G.ok&&typeof BG2AREA!=='undefined'&&BG2AREA[k]){const cur=areaAt(WD.reg,WD.x,WD.z,WD.y);return !(cur&&(AREAS[cur].bg===k||BG2AREA[k]===cur))}
 return !!$('txt').textContent}
function fadeScene(fn){const f=$('fade');if(typeof sfx==='function')sfx('whoosh');f.classList.add('on');setTimeout(()=>{fn();setTimeout(()=>f.classList.remove('on'),90)},300)}
function updBlur(){const vn=$('vn').classList.contains('on'),o=$('ov').classList.contains('on');document.body.classList.toggle('talking',!!(S&&S.inWorld&&G.ok&&(vn||o)));document.body.classList.toggle('busyov',o&&!$('ov').classList.contains('phoneov'))}
function run(steps,done){closeOv();clearPor();$('txt').textContent='';$('who').textContent='';show('vn');hud();Q=steps.slice();onDone=done;next()}
function next(){
 $('chs').innerHTML='';
 if(S.exp>=100&&!S.ending&&!S.f.doxxing){S.f.doxxing=1;Q=ENDS.doxxed();onDone=null}
 if(!Q.length){const d=onDone;onDone=null;if(d)d();return}
 const st=Q.shift();
 if(typeof st==='function'){const r=st();if(Array.isArray(r))Q.unshift(...r);return next()}
 if(st.bg&&!st._f&&bgChanges(st.bg)){const s2=Object.assign({},st,{_f:1});fadeScene(()=>{Q.unshift(s2);next()});return}
 if(st.bg){setBG(st.bg);if(st.t===undefined&&st.n===undefined)return next()}
 if(st.fx){fx(st.fx);if(st.t===undefined&&st.n===undefined)return next()}
 if(st.hide){clearPor();return next()}
 if(st.msg){addMsg(st.msg[0],st.msg[1]);return next()}
 if(st.tp){if(G.ok&&S.inWorld)teleportArea(st.tp);return next()}
 if(st.unlock)return unlock(st.unlock,next);
 if(st.chapter!==undefined)return chapterCard(st.chapter,next);
 if(st.choice)return choose(st.choice);
 if(st.game)return GAMES[st.game](st,()=>next());
 if(st.end)return finishEnding(st.end);
 say(st);
}
function say(st){
 const who=st.w,box=$('txt');
 box.className='';
 const pw=$('who').textContent;
 if(who&&CH[who]){if(!st.keep)setPor(who,st.x);$('who').textContent=st.as||CH[who].name;$('who').style.background=CH[who].col}
 else if(who==='whisper'){clearPor();$('who').textContent='WHISPER';$('who').style.background='var(--coral)';box.className='whisper'}
 else if(who==='me'){$('who').textContent=S.h;$('who').style.background='var(--butter)'}
 else if(who==='sms'){$('who').textContent=st.from;$('who').style.background='var(--mint)';box.className='sms'}
 else if(who){if(st.np)clearPor();$('who').textContent=who;$('who').style.background='var(--dim)'}
 else{$('who').textContent='';box.className='narr'}
 $('por').classList.toggle('dim',!(who&&CH[who]));
 if($('who').textContent!==pw){const w=$('who');w.classList.remove('pop');void w.offsetWidth;w.classList.add('pop')}
 const bx=$('box');if(!bx.classList.contains('up')){bx.classList.add('up')}
 full=sub(st.t!==undefined?st.t:st.n);box.textContent='';waiting=true;$('nexti').style.visibility='hidden';
 S.log.push([$('who').textContent,full]);if(S.log.length>120)S.log.shift();
 if(S.fast){box.textContent=full;return doneTyping()}
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
 aff:['Affection','Your choices change how people feel about you. Hearts float up when they do. Some scenes only open once someone likes you enough.'],
 skill:['Skill','Real knowledge. You earn it by learning, by answering honestly and by doing the work. Experts can tell.'],
 clout:['Clout','Hype. Big claims said confidently. Some people love it. Others can smell it from across the room.'],
 exp:['Exposure','How findable you are. Oversharing, bad clicks and leaked details all add to it. Keep it low. At 100, anyone can find you, and the story ends badly.'],
 phone:['Phone','Your phone holds everything: Messages, a Log of past dialogue and Settings. More apps unlock as you go. A red dot means something new. Tap Phone at the top, or press P.'],
 notes:['More apps','Your phone now has Stats, Hearts (everyone you\'ve met and how close you are), Goals and Map. Tap Phone at the top, or press P.'],
 move:['Walking around','Walk with WASD or the arrow keys, or drag the stick on the left. Look with the mouse, or drag anywhere else on a touch screen. When something can be used, a prompt appears: press E or tap it. Hold Shift (or push the stick all the way) to run. Esc or P opens your phone and frees the mouse.'],
 map:['The con','It\'s huge, and there\'s no clock. Walk anywhere, in any order. A yellow ! means someone has a new scene for you. The minimap shows them as yellow dots, and your story goal as a green star. Once you\'ve visited a place, you can fast travel back from the Map app. When you\'re ready to move the story on, go to the goal.'],
 hang:['Hanging out','Once per chapter you can talk shop with each person you\'ve met. Real answers impress the experts. Some people prefer the hype.'],
 cred:['Credits','You earn credits from minigames, bug bounties and inbox triage. Spend them in the Vendor Hall on gear and gifts. Each person has one gift they\'ll love.'],
 room:['Room 1337','Your hotel room. Use the laptop once per chapter to grind a bug bounty for credits, or triage your inbox to pull Exposure back down.'],
 clues:['Clues','Someone at this con is watching everyone. Evidence you find goes into your notebook. It will matter.']
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
 const c=$('card');c.innerHTML=`<div><div class="k">${n<=5?'CHAPTER '+n:'EPILOGUE'}</div><h2>${CHAP[n][0]}</h2><p>${CHAP[n][1]}</p><div class="tap">tap to continue</div></div>`;
 c.classList.add('on');clearPor();if(typeof sfx==='function')sfx('chapter');
 c.onclick=()=>{c.onclick=null;const f=$('fade');f.style.transition='none';f.classList.add('on');void f.offsetWidth;c.classList.remove('on');cb();
  if(typeof G!=='undefined'&&G.ok)G.forceFrame=true;
  requestAnimationFrame(()=>requestAnimationFrame(()=>setTimeout(()=>{f.style.transition='';f.classList.remove('on')},60)))};
}
function addMsg(from,t){S.msgs.push({f:from,t:sub(t),c:S.ch,r:0});if(S.unl.phone){toast('New message · '+(CH[from]?CH[from].name:from),'var(--mint)');if(typeof sfx==='function')sfx('notify')}hud()}
