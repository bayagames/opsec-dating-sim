/* ============ FULL-BODY CHARACTER ART ============ */
/* Drawn as SVG (viewBox 200x500), rendered into canvases and stood up in the 3D world as cut-outs.
   The portrait head from por() is reused, scaled to sit on a body with a short neck. */
const LOWER={ellie:{t:'pants',c:'#3d5a8a',s:'#f4f4f4'},nyx:{t:'skirt',c:'#1a1520',l:'#2a2030',s:'#111',boot:1},ada:{t:'pants',c:'#2a3a5a',s:'#ffffff'},priya:{t:'pants',c:'#2a3040',s:'#1a1a1a'},juno:{t:'skirt',c:'#9b59ff',l:'#ffffff',thigh:1,s:'#ff8fc8'},kit:{t:'pants',c:'#5a5a46',s:'#2a2a2a',boot:1},kitc:{t:'pants',c:'#1c2133',s:'#2bf0ff',boot:1,knee:'#2bf0ff'},rin:{t:'skirt',c:'#c9b6ff',l:'#ff9fd0',thigh:1,s:'#ffffff'},bea:{t:'pants',c:'#17141c',s:'#111'},mira:{t:'long',c:'#17151c',s:'#111'},dave:{t:'shorts',c:'#c9a46a',s:'#ffffff'},davex:{t:'shorts',c:'#c9a46a',s:'#ffffff'},victor:{t:'pants',c:'#2c3140',s:'#0d0d10'},marge:{t:'long',c:'#4a3a5a',s:'#3a2a2a'}};
const SH_=o=>`fill="#000" opacity="${o}"`;
function bodyFromSpec(b){
 const oc=b.oc,sk=b.sk,lo=b.lower,of=b.outfit,acc=b.acc||[];const tee=of==='tee';
 let o='';
 /* ---- legs ---- */
 const legs=col=>`<path d="M66 292 L98 292 L97 330 Q95 400 94 474 L74 474 Q70 400 67 330Z" fill="${col}"/><path d="M102 292 L134 292 L133 330 Q130 400 126 474 L106 474 Q105 400 103 330Z" fill="${col}"/><path d="M118 300 L134 300 L133 330 Q130 400 126 474 L116 474 Q120 400 118 300Z" ${SH_(.18)}/>`;
 if(lo.t==='pants'){o+=legs(lo.c)+`<path d="M60 286 L140 286 L138 312 L62 312Z" fill="${lo.c}"/><path d="M100 300 L100 330" stroke="#0004" stroke-width="2"/><path d="M76 330 Q78 400 80 470" stroke="#ffffff10" stroke-width="3" fill="none"/>`;
  if(lo.knee)o+=`<rect x="70" y="372" width="26" height="22" rx="7" fill="${lo.knee}"/><rect x="105" y="372" width="26" height="22" rx="7" fill="${lo.knee}"/>`}
 else if(lo.t==='shorts'){o+=legs(sk)+`<path d="M60 286 L140 286 L143 352 L104 352 L100 330 L96 352 L57 352Z" fill="${lo.c}"/><path d="M118 296 L140 296 L143 352 L120 352Z" ${SH_(.15)}/>`}
 else if(lo.t==='skirt'){const lc=lo.l||sk;o+=legs(lo.thigh?sk:lc);if(lo.thigh)o+=`<path d="M67 388 L97 388 Q95 430 94 474 L74 474 Q70 430 67 388Z" fill="${lc}"/><path d="M103 388 L133 388 Q130 430 126 474 L106 474 Q105 430 103 388Z" fill="${lc}"/><path d="M67 388 h30 v5 h-30Z M103 388 h30 v5 h-30Z" ${SH_(.2)}/>`;
  o+=`<path d="M60 282 L140 282 L160 366 Q100 376 40 366Z" fill="${lo.c}"/><path d="M72 292 L60 368 M88 292 L84 372 M100 292 L100 374 M112 292 L116 372 M128 292 L140 368" stroke="#0003" stroke-width="2.5"/><path d="M118 284 L140 282 L160 366 Q140 370 128 371Z" ${SH_(.16)}/>`}
 else{o+=`<path d="M60 282 L140 282 L154 482 Q100 490 46 482Z" fill="${lo.c}"/><path d="M100 300 L100 484" stroke="#0002" stroke-width="2"/><path d="M118 284 L140 282 L154 482 Q138 486 124 487Z" ${SH_(.16)}/>`}
 /* ---- shoes ---- */
 const bh=lo.boot?40:14;
 o+=`<path d="M70 ${474-bh+14} L96 ${474-bh+14} L97 486 Q97 494 88 494 L64 494 Q58 494 60 488 Q62 482 70 478Z" fill="${lo.s}"/><path d="M104 ${474-bh+14} L128 ${474-bh+14} L130 478 Q138 482 140 488 Q142 494 136 494 L112 494 Q103 494 103 486Z" fill="${lo.s}"/><path d="M60 490 H97 V494 H62Z M103 490 H140 V494 H105Z" ${SH_(.35)}/><path d="M72 ${474-bh+16} h20" stroke="#fff" stroke-opacity=".18" stroke-width="2"/>`;
 /* ---- arms ---- */
 const sleeve=tee||of==='gown'?sk:oc;
 const armL=`M60 166 Q42 172 40 200 L37 256 Q35 282 38 300 L52 300 Q50 280 53 256 L58 212 Z`,armR=`M140 166 Q158 172 160 200 L163 256 Q165 282 162 300 L148 300 Q150 280 147 256 L142 212 Z`;
 o+=`<path d="${armL}" fill="${sleeve}"/><path d="${armR}" fill="${sleeve}"/>`;
 if(tee)o+=`<path d="M60 166 Q42 172 40 200 L39 214 L58 216 L60 200Z" fill="${oc}"/><path d="M140 166 Q158 172 160 200 L161 214 L142 216 L140 200Z" fill="${oc}"/>`;
 if(of==='hoodie'||of==='turtle'||of==='jacket'||of==='blazer'||of==='suit')o+=`<path d="M37 286 Q36 294 38 300 L52 300 Q51 294 52 286Z" ${SH_(.22)}/><path d="M163 286 Q164 294 162 300 L148 300 Q149 294 148 286Z" ${SH_(.22)}/>`;
 o+=`<path d="M150 190 L160 200 L163 256 Q165 282 162 300 L154 300 Q156 270 152 236Z" ${SH_(.2)}/>`;
 o+=`<ellipse cx="45" cy="309" rx="8.5" ry="11" fill="${sk}"/><ellipse cx="155" cy="309" rx="8.5" ry="11" fill="${sk}"/><ellipse cx="158" cy="311" rx="5" ry="9" ${SH_(.15)}/>`;
 /* ---- torso ---- */
 o+=`<path d="M60 164 Q100 150 140 164 Q148 170 146 190 L141 260 Q139 282 142 296 L58 296 Q61 282 59 260 L54 190 Q52 170 60 164Z" fill="${oc}"/>`;
 o+=`<path d="M114 154 Q140 158 146 178 L141 260 Q139 282 142 296 L120 296 Q126 226 114 154Z" ${SH_(.17)}/><path d="M62 170 Q58 220 62 290" stroke="#fff" stroke-opacity=".08" stroke-width="5" fill="none"/>`;
 o+=`<path d="M82 156 Q100 170 118 156 Q112 168 100 172 Q88 168 82 156Z" ${SH_(.25)}/>`;
 const inn=b.inn||'#ff3fa4';
 if(of==='hoodie')o+=`<path d="M70 160 Q100 190 130 160 Q120 152 100 150 Q80 152 70 160Z" ${SH_(.22)}/><path d="M91 172 L89 210 M109 172 L111 210" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".85"/><circle cx="89" cy="212" r="2.5" fill="#fff" opacity=".85"/><circle cx="111" cy="212" r="2.5" fill="#fff" opacity=".85"/><path d="M72 238 L128 238 L132 276 L68 276Z" ${SH_(.14)}/><path d="M56 284 Q100 296 144 284 L143 296 Q100 304 57 296Z" ${SH_(.2)}/>`;
 if(of==='jacket')o+=`<path d="M86 158 L100 200 L114 158 L112 296 L88 296Z" fill="${inn}"/><path d="M84 158 L100 214 L72 180Z M116 158 L100 214 L128 180Z" ${SH_(.25)}/><path d="M88 222 L88 296 M112 222 L112 296" stroke="#0004" stroke-width="2"/><rect x="66" y="250" width="14" height="3" rx="1.5" fill="#fff" opacity=".25"/>`;
 if(of==='blazer'||of==='suit'){o+=`<path d="M84 156 L100 198 L116 156 L110 296 L90 296Z" fill="#eef1f6"/><path d="M82 158 L100 218 L68 180Z M118 158 L100 218 L132 180Z" ${SH_(.28)}/><circle cx="100" cy="240" r="3" ${SH_(.4)}/><circle cx="100" cy="262" r="3" ${SH_(.4)}/>`;if(of==='suit'||acc.includes('tie'))o+=`<path d="M96 162 L104 162 L106 214 L100 224 L94 214Z" fill="#8b1e2d"/>`}
 if(of==='apron')o+=`<path d="M72 190 L128 190 L130 296 L70 296Z" fill="#f4efe6"/><path d="M58 286 L142 286 L148 420 L52 420Z" fill="#f4efe6"/><path d="M120 190 L128 190 L130 296 L122 296Z M126 286 L142 286 L148 420 L132 420Z" ${SH_(.08)}/><path d="M74 190 L82 158 M126 190 L118 158" stroke="#f4efe6" stroke-width="5"/><rect x="84" y="316" width="32" height="26" rx="4" fill="#e6dccb"/><path d="M58 288 L142 288" stroke="#d8cfc0" stroke-width="3"/>`;
 if(of==='tee')o+=`<path d="M84 160 Q100 172 116 160" stroke="#0003" stroke-width="3" fill="none"/><path d="M74 222 L88 210 L100 228 L112 212 L126 224" stroke="#2bf0ff" stroke-width="4" fill="none"/><path d="M56 284 L144 284 L143 296 L57 296Z" ${SH_(.2)}/>`;
 if(of==='armor')o+=`<path d="M28 196 Q34 164 74 160 L78 198Z" fill="#2bf0ff" opacity=".88"/><path d="M172 196 Q166 164 126 160 L122 198Z" fill="#2bf0ff" opacity=".88"/><path d="M78 172 L122 172 L126 244 L100 258 L74 244Z" fill="#2a3450"/><path d="M100 176 L100 256" stroke="#ff5fb0" stroke-width="4"/><rect x="56" y="276" width="88" height="12" fill="#2bf0ff" opacity=".7"/>`;
 if(of==='vest')o+=`<path d="M60 170 L86 160 L100 228 L114 160 L140 170 L146 296 L54 296Z" fill="#17141c"/><path d="M94 162 L100 172 L106 162Z" fill="#7a1f2b"/><circle cx="96" cy="246" r="2.5" fill="#ffd166"/><circle cx="96" cy="266" r="2.5" fill="#ffd166"/>`;
 if(of==='turtle')o+=`<rect x="84" y="134" width="32" height="32" rx="9" fill="${oc}"/><path d="M86 146 H114 M86 154 H114" stroke="#fff1" stroke-width="2"/><path d="M106 136 Q116 140 116 160 L106 164Z" ${SH_(.18)}/>`;
 if(of==='cardigan')o+=`<path d="M86 158 L100 206 L114 158 L112 296 L88 296Z" fill="${b.inn||'#c8504a'}"/><path d="M84 158 L100 214 L76 180Z M116 158 L100 214 L124 180Z" ${SH_(.18)}/><circle cx="90" cy="234" r="2.6" fill="#7a5a3a"/><circle cx="90" cy="256" r="2.6" fill="#7a5a3a"/><circle cx="90" cy="278" r="2.6" fill="#7a5a3a"/>`;
 if(of==='trench')o+=`<path d="M86 156 L100 196 L114 156 L110 296 L90 296Z" fill="#f2efe8"/><path d="M80 156 L100 214 L64 182 L70 164Z M120 156 L100 214 L136 182 L130 164Z" ${SH_(.22)}/><path d="M54 270 L146 270 L146 280 L54 280Z" fill="#8a724a"/><path d="M54 286 L146 286 L156 412 L44 412Z" fill="${oc}"/><path d="M100 286 L100 412" stroke="#0003" stroke-width="2"/><path d="M120 288 L146 286 L156 412 L134 412Z" ${SH_(.15)}/>`;
 if(of==='hivis')o+=`<path d="M58 168 L86 158 L94 296 L56 296Z M142 168 L114 158 L106 296 L144 296Z" fill="#d8f03a"/><path d="M57 236 L93 236 M57 262 L93 262 M143 236 L107 236 M143 262 L107 262" stroke="#e8e8f0" stroke-width="6"/>`;
 if(of==='overalls')o+=`<path d="M70 210 L130 210 L136 300 L64 300Z" fill="#6a8ab0"/><path d="M74 210 L84 160 M126 210 L116 160" stroke="#6a8ab0" stroke-width="9"/><circle cx="76" cy="216" r="3.5" fill="#ffd166"/><circle cx="124" cy="216" r="3.5" fill="#ffd166"/><rect x="86" y="228" width="28" height="20" rx="3" ${SH_(.14)}/>`;
 if(of==='coveralls')o+=`<path d="M100 162 L100 296" stroke="#d8d8e0" stroke-width="3"/><path d="M82 158 L100 176 L118 158" stroke="#0004" stroke-width="5" fill="none"/><rect x="62" y="196" width="22" height="12" rx="2" fill="#e9e3da"/><path d="M54 280 Q100 292 146 280 L146 294 Q100 304 54 294Z" fill="${oc}"/><path d="M58 276 L68 300 M142 276 L132 300" stroke="${oc}" stroke-width="10"/>`;
 if(of==='varsity')o+=`<path d="M82 158 Q100 172 118 158" stroke="#f4f4f4" stroke-width="7" fill="none"/><path d="M100 172 L100 296" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="3 7"/><text x="64" y="226" font-size="34" font-family="Georgia,serif" font-weight="bold" fill="#f4f4f4">Y</text><path d="M56 286 L144 286 L144 296 L56 296Z" fill="#f4f4f4" opacity=".85"/><path d="M37 286 L52 286 L52 296 L38 296Z M163 286 L148 286 L148 296 L162 296Z" fill="#f4f4f4" opacity=".85"/>`;
 if(of==='gown')o+=`<path d="M60 164 Q100 150 140 164 L140 184 Q100 176 60 184Z" fill="${sk}"/><path d="M62 186 Q100 176 138 186" stroke="#0002" stroke-width="2" fill="none"/><path d="M58 280 L142 280 L150 484 Q100 492 50 484Z" fill="${oc}"/><path d="M116 282 L142 280 L150 484 L128 486Z" ${SH_(.2)}/><path d="M100 330 Q110 410 104 484" stroke="#fff" stroke-opacity=".06" stroke-width="6" fill="none"/>`;
 if(of==='garden')o+=`<path d="M70 196 L130 196 L134 296 L66 296Z" fill="#7a8a5a"/><path d="M58 284 L142 284 L146 392 L54 392Z" fill="#7a8a5a"/><path d="M72 196 L82 158 M128 196 L118 158" stroke="#7a8a5a" stroke-width="6"/><rect x="84" y="300" width="32" height="24" rx="4" ${SH_(.14)}/><path d="M90 300 l4 -14 M100 300 l-2 -16" stroke="#5a8a3a" stroke-width="3"/>`;
 if(of==='coat')o+=`<path d="M76 158 L100 196 L124 158 L134 186 L100 222 L66 186Z" ${SH_(.2)}/><path d="M54 286 L146 286 L152 380 L48 380Z" fill="${oc}"/><path d="M100 222 L100 380" stroke="#0003" stroke-width="2"/><circle cx="92" cy="246" r="3" fill="#2a2a2a"/><circle cx="92" cy="272" r="3" fill="#2a2a2a"/><path d="M120 288 L146 286 L152 380 L130 380Z" ${SH_(.15)}/>`;
 if(b.lanyard)o+=`<path d="M86 160 L100 206 L114 160" stroke="${b.lanyard}" stroke-width="3.5" fill="none"/><rect x="91" y="204" width="18" height="24" rx="2" fill="#e9e4ee"/><rect x="91" y="204" width="18" height="6" rx="2" fill="${b.lanyard}"/>`;
 /* belt line */
 if(lo.t==='pants'||lo.t==='shorts')o+=`<path d="M60 288 L140 288 L140 294 L60 294Z" ${SH_(.28)}/>`;
 return o;
}
function bodySVG(id){const c=CH[id];return bodyFromSpec({oc:c.oc,sk:c.skin,outfit:c.outfit,lower:c.lower||LOWER[id]||{t:'pants',c:'#2a2f45',s:'#222'},acc:c.acc,inn:c.inn||(id==='juno'?'#9b59ff':'#ff3fa4'),lanyard:['victor','mira','vesper','ellie','ellie2','fern','wren','bea','pia','krall','pike','ashgrove','jonah','linda','gary'].includes(id)?null:(id==='marge'?'#ffd166':'#ff5d73')})}
function fullSVG(id){
 const p=por(id,'n',true);
 const inner=p.replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'');
 return `<svg viewBox="0 0 200 500" xmlns="http://www.w3.org/2000/svg"><g transform="translate(22,10) scale(.78)">${inner}</g>${bodySVG(id)}</svg>`;
}
/* anonymous attendees: faceless and muted, so the named cast stands out */
function anonSVG(v){
 const P=[['#8b8996','#6f6d7b','#5a5866'],['#7c7a88','#9a8f8a','#4a4856'],['#9794a2','#5d6a7e','#3e3c48'],['#6f6d7b','#8a7a8a','#2e2c38'],['#85838f','#6a7a6e','#4a4856'],['#7f7d8b','#5e5a72','#3a3844'],['#918f9c','#7a6a6a','#4e4c58'],['#3e3c48','#2a2830','#1a1820']][v%8];
 const skin=P[0],top=P[1],bot=P[2];
 const outfit=['hoodie','tee','jacket','hoodie','blazer','tee','hoodie','suit'][v%8];
 const lower=[{t:'pants',c:bot,s:'#2a2830'},{t:'skirt',c:bot,l:'#4a4856',s:'#2a2830'},{t:'pants',c:bot,s:'#d0ccd6'},{t:'shorts',c:bot,s:'#d0ccd6'},{t:'pants',c:bot,s:'#1a1820',boot:1},{t:'long',c:bot,s:'#2a2830'},{t:'pants',c:bot,s:'#3a3844'},{t:'pants',c:bot,s:'#111'}][v%8];
 const hair=['#3a3844','#2a2830','#4a4856','#1e1c26','#5a5866','#2e2c38','#3e3c48','#1a1820'][v%8];
 const hs=v%5;let h='';
 // head (faceless), hair silhouettes
 h+=`<rect x="90" y="122" width="20" height="30" rx="6" fill="${skin}"/><rect x="90" y="130" width="20" height="8" ${SH_(.15)}/>`;
 if(hs===2)h+=`<path d="M64 74 Q60 30 100 28 Q140 30 136 74 L140 150 L120 150 L122 90 L78 90 L80 150 L60 150Z" fill="${hair}"/>`;
 h+=`<ellipse cx="100" cy="92" rx="34" ry="42" fill="${skin}"/><ellipse cx="88" cy="80" rx="11" ry="16" fill="#fff" opacity=".1"/><path d="M118 60 Q136 80 132 108 Q126 128 108 134 Q126 110 118 60Z" ${SH_(.12)}/>`;
 if(hs===0)h+=`<path d="M66 84 Q64 46 100 44 Q136 46 134 84 Q124 64 100 62 Q76 64 66 84Z" fill="${hair}"/>`;
 if(hs===1)h+=`<circle cx="100" cy="42" r="16" fill="${hair}"/><path d="M66 86 Q64 50 100 48 Q136 50 134 86 Q120 66 100 66 Q80 66 66 86Z" fill="${hair}"/>`;
 if(hs===2)h+=`<path d="M66 90 Q62 44 100 42 Q138 44 134 90 Q120 62 100 60 Q80 62 66 90Z" fill="${hair}"/>`;
 if(hs===3)h+=`<path d="M64 80 Q66 44 102 44 Q136 46 136 76 L142 80 Q120 62 96 64 Q74 66 64 80Z" fill="${hair}"/>`;
 if(hs===4)h+=`<path d="M66 84 Q60 40 100 40 Q140 40 134 84 L130 70 L122 80 L116 64 L106 76 L98 62 L88 76 L80 64 L72 80Z" fill="${hair}"/>`;
 const body=bodyFromSpec({oc:top,sk:skin,outfit,lower,acc:[],inn:'#6a6878',lanyard:v%8===7?null:'#d96a7a'});
 return `<svg viewBox="0 0 200 500" xmlns="http://www.w3.org/2000/svg">${h}${body}${v%3===2?`<path d="M64 168 L134 262" stroke="#000" stroke-opacity=".3" stroke-width="5"/><rect x="124" y="250" width="22" height="30" rx="5" fill="${hair}"/>`:''}</svg>`;
}
