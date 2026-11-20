/* ============ AUDIO ============ */
/* All sound is synthesised with Web Audio. Area music and ambience loops are rendered once with an
   OfflineAudioContext (seamless: the tail is cross-faded into the head) and then looped; UI sounds are
   generated live. Four buses: music, ambience and effects into a master with a gentle compressor. */
let AC=null,AU=null;
function audioOn(){
 if(AC){if(AC.state==='suspended')AC.resume().catch(()=>{});return}
 const Ctx=window.AudioContext||window.webkitAudioContext;if(!Ctx)return;
 try{AC=new Ctx();}catch(e){AC=null;return}
 const comp=AC.createDynamicsCompressor();comp.threshold.value=-14;comp.knee.value=12;comp.ratio.value=3;comp.attack.value=.01;comp.release.value=.25;comp.connect(AC.destination);
 const mk=()=>{const g=AC.createGain();return g};
 AU={master:mk(),music:mk(),amb:mk(),sfx:mk(),buf:{},pending:{},cur:{music:null,amb:null},want:{music:null,amb:null},t:0,bg:null};
 AU.master.connect(comp);AU.music.connect(AU.master);AU.amb.connect(AU.master);AU.sfx.connect(AU.master);
 const n=AC.sampleRate*.12;AU.nb=AC.createBuffer(1,n,AC.sampleRate);const d=AU.nb.getChannelData(0);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,3);
 applyVolumes();
 // warm up the loops you're most likely to hear first, when the browser is idle
 const idle=window.requestIdleCallback||(f=>setTimeout(f,400));idle(()=>{getLoop('music','con');getLoop('amb','hum')});
}
['pointerdown','keydown','touchstart'].forEach(e=>addEventListener(e,audioOn,{passive:true}));
function applyVolumes(){if(!AU)return;const v=SETTINGS.vol,c=x=>x*x,t=AC.currentTime;
 AU.master.gain.setTargetAtTime(c(v.master),t,.05);AU.music.gain.setTargetAtTime(c(v.music)*.55,t,.05);AU.amb.gain.setTargetAtTime(c(v.amb)*.8,t,.05);AU.sfx.gain.setTargetAtTime(c(v.sfx),t,.05)}
/* ---------- scene → loops ---------- */
const AREA_AUD={flat:['home','home'],stairs:['home','home'],bakery:['home','bakery'],office:['hotel','office'],lindaoffice:['hotel','office'],station:['home','station'],platform:['home','station'],
 plaza:['night','street'],vestibule:['con','hum'],foyer:['con','hum'],lobby:['hotel','lobby'],cafe:['hotel','lobby'],luggage:['hotel','hotel'],backstairs:['hotel','hotel'],bar:['bar','bar'],terrace:['bar','garden'],
 walkway:['con','hum'],ringN:['con','hum'],ringE:['con','hum'],ringS:['con','hum'],courtyard:['night','garden'],hallA:['hall','hall'],backstage:['hall','room'],hallB:['hall','room'],vendor:['con','hum'],villagerow:['con','hum'],
 lockpick:['con','room'],ctf:['con','room'],soc:['con','room'],carhack:['con','room'],ics:['con','room'],soceng:['con','room'],food:['con','hum'],cosplay:['con','hum'],lounge:['night','room'],naps:['night','hotel'],
 security:['tense','hotel'],mdf:['tense','hotel'],service:['tense','hotel'],stafffw:['tense','hotel'],staffc:['tense','hotel'],dock:['tense','street'],
 gallery:['con','hum'],skybridge:['hotel','lobby'],hotelL1:['hotel','hotel'],mezz:['hotel','lobby'],meeting:['hotel','hotel'],gym:['hotel','hotel'],lumenlounge:['tense','hotel'],fcterrace:['night','garden'],vrL1:['con','hum'],
 workshopA:['con','room'],workshop:['con','room'],hwv:['con','room'],creator:['con','room'],arcade:['arcade','arcade'],conops:['con','room'],press:['con','room'],speakers:['hotel','room'],quiet:['night',null],
 basement:['tense','hotel'],carpark:['tense','hotel'],noc:['tense','room'],plant:['tense','hotel'],tunnel:['tense','hotel'],conroof:['night','wind'],
 corridor:['hotel','hotel'],room1337:['hotel','hotel'],room1336:['party','bar'],housekeeping:['hotel','hotel'],stairwell:['hotel','hotel'],roof:['night','wind'],plantdeck:['night','wind']};
const BG_AUD={con:['con','hum'],lock:['con','room'],ctf:['con','room'],soc:['con','room'],stream:['con','hum'],hotel:['hotel','hotel'],roof:['night','wind'],dawn:['night','wind'],stage:['hall','hall'],keynote:['hall','hall'],vendor:['con','hum'],party:['party','bar'],void:['tense',null],flat:['home','home'],bakery:['home','bakery'],office:['hotel','office'],train:['home','station'],cos:['con','hum'],chill:['night','room'],bar:['bar','bar'],lobby:['hotel','lobby']};
function audioScene(){
 if(!S||$('title').classList.contains('on'))return['night',null];
 if(S.ending)return BG_AUD[CURBG]||['night',null];
 const vn=$('vn').classList.contains('on'),dimmed=$('bg').classList.contains('bg-dim');
 if(vn&&!dimmed&&CURBG&&BG_AUD[CURBG])return BG_AUD[CURBG];
 if(S.inWorld&&G.ok&&WD.area&&AREA_AUD[WD.area])return AREA_AUD[WD.area];
 if(S.inWorld&&G.ok){const a=areaAt(WD.reg,WD.x,WD.z,WD.y);if(a&&AREA_AUD[a])return AREA_AUD[a]}
 return BG_AUD[CURBG]||['con','hum'];
}
function audioTick(dt){
 if(!AU)return;AU.t-=dt;if(AU.t>0)return;AU.t=.4;
 const[m,a]=audioScene();setLoop('music',m);setLoop('amb',a);
 // muffle everything a little while the phone is open
 const muff=$('ov').classList.contains('phoneov');AU.master.gain.setTargetAtTime(SETTINGS.vol.master**2*(muff?.6:1),AC.currentTime,.2);
}
function setLoop(bus,key){
 if(AU.want[bus]===key)return;AU.want[bus]=key;
 const cur=AU.cur[bus];
 if(cur){const t=AC.currentTime;cur.g.gain.cancelScheduledValues(t);cur.g.gain.setValueAtTime(cur.g.gain.value,t);cur.g.gain.linearRampToValueAtTime(0,t+1.6);const s=cur.s;setTimeout(()=>{try{s.stop()}catch(e){}},1800);AU.cur[bus]=null}
 if(!key)return;
 getLoop(bus,key).then(buf=>{if(!buf||AU.want[bus]!==key||AU.cur[bus])return;
  const s=AC.createBufferSource();s.buffer=buf;s.loop=true;const g=AC.createGain();g.gain.value=0;s.connect(g);g.connect(AU[bus]);
  const t=AC.currentTime;s.start(t,(t*.37)%buf.duration);g.gain.linearRampToValueAtTime(1,t+2.2);AU.cur[bus]={s,g,key}});
}
function getLoop(bus,key){
 const k=bus+':'+key;const D=(bus==='music'?MUSIC:AMBS)[key];if(D&&!D.rms)D.rms=(bus==='music'?MUSIC_RMS:AMB_RMS)*(D.lvl||1);if(AU.buf[k])return Promise.resolve(AU.buf[k]);if(AU.pending[k])return AU.pending[k];
 const def=(bus==='music'?MUSIC:AMBS)[key];if(!def)return Promise.resolve(null);
 const p=renderLoop(def).then(b=>{AU.buf[k]=b;delete AU.pending[k];
  // keep memory in check: forget the least recently built loops
  const ks=Object.keys(AU.buf);if(ks.length>9){for(const o of ks.slice(0,ks.length-9))if(!Object.values(AU.cur).some(c=>c&&(bus+':'+c.key)===o))delete AU.buf[o]}
  return b}).catch(e=>{console.warn('audio',e);delete AU.pending[k];return null});
 return AU.pending[k]=p;
}
function renderLoop(def){
 const sr=def.sr||24000,L=def.len,X=1.5,N=Math.ceil((L+X)*sr);
 const OC=window.OfflineAudioContext||window.webkitOfflineAudioContext;const ctx=new OC(2,N,sr);
 const out=ctx.createGain();out.connect(ctx.destination);
 def.build(ctx,out,L+X,seeded(def.seed||7));
 return ctx.startRendering().then(b=>{
  const n=Math.floor(L*sr),x=Math.floor(X*sr),res=AC.createBuffer(2,n,sr);
  for(let ch=0;ch<2;ch++){const src=b.getChannelData(ch),dst=res.getChannelData(ch);
   for(let i=0;i<n;i++)dst[i]=src[i];
   for(let i=0;i<x;i++){const t=i/x;dst[i]=src[i]*Math.sin(t*Math.PI/2)+src[n+i]*Math.cos(t*Math.PI/2)}}
  // even out loudness between loops so moving between areas doesn't jump in volume
  let pk=0,ss=0;const L0=res.getChannelData(0),L1=res.getChannelData(1);for(let i=0;i<n;i+=3){const v=(Math.abs(L0[i])+Math.abs(L1[i]))/2;pk=Math.max(pk,v);ss+=v*v}
  const rms=Math.sqrt(ss/(n/3))||1,g=Math.min((def.rms||.05)/rms,.85/(pk||1));for(const c of[L0,L1])for(let i=0;i<n;i++)c[i]*=g;
  return res});
}
const seeded=s=>()=>(s=(s*16807)%2147483647)/2147483647;
/* ---------- synthesis helpers (offline) ---------- */
function noiseBuf(ctx,sec,kind){const n=Math.floor(ctx.sampleRate*sec),b=ctx.createBuffer(1,n,ctx.sampleRate),d=b.getChannelData(0);let l=0,p0=0,p1=0,p2=0;
 for(let i=0;i<n;i++){const w=Math.random()*2-1;if(kind==='brown'){l=(l+.02*w)/1.02;d[i]=l*3.5}else if(kind==='pink'){p0=.99765*p0+w*.099;p1=.963*p1+w*.2965;p2=.57*p2+w*1.0526;d[i]=(p0+p1+p2+w*.1848)*.2}else d[i]=w}return b}
function noiseSrc(ctx,kind,dur){const s=ctx.createBufferSource();s.buffer=noiseBuf(ctx,Math.min(dur,6),kind);s.loop=true;s.start(0);return s}
function verb(ctx,sec,decay,wet){const c=ctx.createConvolver(),n=Math.floor(ctx.sampleRate*sec),b=ctx.createBuffer(2,n,ctx.sampleRate);
 for(let ch=0;ch<2;ch++){const d=b.getChannelData(ch);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,decay)}c.buffer=b;const g=ctx.createGain();g.gain.value=wet;c.connect(g);return{i:c,o:g}}
function pan(ctx,v){if(ctx.createStereoPanner){const p=ctx.createStereoPanner();p.pan.value=v;return p}return ctx.createGain()}
const mtof=m=>440*Math.pow(2,(m-69)/12);
function tone(ctx,dst,t,f,dur,o){o=o||{};const os=ctx.createOscillator();os.type=o.type||'sine';os.frequency.setValueAtTime(f,t);if(o.slide)os.frequency.exponentialRampToValueAtTime(o.slide,t+dur);if(o.det)os.detune.value=o.det;
 const g=ctx.createGain();const v=o.v||.2,a=o.a||.005,r=o.r||dur;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+a);if(o.sus){g.gain.setValueAtTime(v,t+dur-r);g.gain.linearRampToValueAtTime(0,t+dur)}else g.gain.exponentialRampToValueAtTime(.0001,t+Math.max(a+.01,r));
 let n=os;if(o.lp){const f2=ctx.createBiquadFilter();f2.type='lowpass';f2.frequency.value=o.lp;f2.Q.value=o.q||.7;os.connect(f2);n=f2}n.connect(g);g.connect(dst);os.start(t);os.stop(t+Math.max(dur,r)+.05);return os}
function epiano(ctx,dst,t,m,dur,v){const f=mtof(m);tone(ctx,dst,t,f,dur,{v:v*.7,a:.004,r:dur});tone(ctx,dst,t,f*2,dur*.6,{v:v*.18,a:.002,r:dur*.5});tone(ctx,dst,t,f*3.01,.25,{v:v*.08,a:.001,r:.2})}
function padChord(ctx,dst,t,notes,dur,v,o){o=o||{};for(const m of notes)for(const d of[-7,7]){tone(ctx,dst,t,mtof(m),dur,{type:o.type||'sawtooth',v:v,a:o.a||dur*.35,r:o.r||dur*.4,sus:1,det:d,lp:o.lp||900,q:.5})}}
function kick(ctx,dst,t,v){tone(ctx,dst,t,120,.35,{v:v||.5,slide:42,a:.002,r:.3})}
function hat(ctx,dst,t,v,len){const s=ctx.createBufferSource();s.buffer=ctx._nb||(ctx._nb=noiseBuf(ctx,.5,'white'));const f=ctx.createBiquadFilter();f.type='highpass';f.frequency.value=7000;const g=ctx.createGain();g.gain.setValueAtTime(v||.08,t);g.gain.exponentialRampToValueAtTime(.0001,t+(len||.05));s.connect(f);f.connect(g);g.connect(dst);s.start(t);s.stop(t+(len||.05)+.02)}
function snare(ctx,dst,t,v,len,f0){const s=ctx.createBufferSource();s.buffer=ctx._nb||(ctx._nb=noiseBuf(ctx,.5,'white'));const f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=f0||1800;f.Q.value=.8;const g=ctx.createGain();g.gain.setValueAtTime(v||.15,t);g.gain.exponentialRampToValueAtTime(.0001,t+(len||.18));s.connect(f);f.connect(g);g.connect(dst);s.start(t);s.stop(t+(len||.18)+.02)}
/* a crowd of talking voices: formant-filtered buzz switching vowels at syllable rate, in spurts */
function babble(ctx,dst,dur,R,o){
 const n=o.n||8;const F=[[730,1090],[270,2290],[530,1840],[570,840],[440,1020],[300,870],[660,1720],[490,1350]];
 for(let i=0;i<n;i++){
  const os=ctx.createOscillator();os.type='sawtooth';const f0=(R()<.5?105:190)+R()*50;os.frequency.value=f0;
  const lfo=ctx.createOscillator();lfo.frequency.value=4+R()*3;const lg=ctx.createGain();lg.gain.value=f0*.06;lfo.connect(lg);lg.connect(os.frequency);lfo.start(0);
  const b1=ctx.createBiquadFilter(),b2=ctx.createBiquadFilter();b1.type=b2.type='bandpass';b1.Q.value=6;b2.Q.value=8;
  const g=ctx.createGain();g.gain.value=0;const mix=ctx.createGain();mix.gain.value=.5;
  os.connect(b1);os.connect(b2);b1.connect(mix);b2.connect(mix);mix.connect(g);
  const p=pan(ctx,(R()*2-1)*(o.spread||.8));g.connect(p);p.connect(dst);
  let t=R()*2;const vol=(o.v||.05)*(.5+R());
  while(t<dur){const spurt=1+R()*3;const end=Math.min(dur,t+spurt);
   while(t<end){const syl=.09+R()*.16,f=F[Math.floor(R()*F.length)];b1.frequency.setValueAtTime(f[0]*(.9+R()*.2),t);b2.frequency.setValueAtTime(f[1]*(.9+R()*.2),t);os.frequency.setValueAtTime(f0*(.9+R()*.25),t);
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol*(.6+R()*.4),t+syl*.3);g.gain.linearRampToValueAtTime(vol*.15,t+syl);t+=syl}
   g.gain.setValueAtTime(0,t);t+=.4+R()*2.5}
  os.start(0);os.stop(dur);
 }
}
function hum(ctx,dst,dur,v,lp){const s=noiseSrc(ctx,'brown',dur);const f=ctx.createBiquadFilter();f.type='lowpass';f.frequency.value=lp||180;const g=ctx.createGain();g.gain.value=v;s.connect(f);f.connect(g);g.connect(dst);tone(ctx,dst,0,57,dur,{v:v*.08,a:1,r:1,sus:1})}
function clinks(ctx,dst,dur,R,n){for(let i=0;i<n;i++){const t=R()*dur,p=pan(ctx,R()*1.6-.8);p.connect(dst);const b=2200+R()*1800;for(const k of[1,1.48,2.13])tone(ctx,p,t,b*k,.6,{v:.02/k,a:.001,r:.25+R()*.4})}}
function windNoise(ctx,dst,dur,R,v,lo,hi){const s=noiseSrc(ctx,'pink',dur);const f=ctx.createBiquadFilter();f.type='lowpass';f.Q.value=1.2;const g=ctx.createGain();g.gain.value=v*.5;s.connect(f);f.connect(g);g.connect(dst);
 let t=0;f.frequency.setValueAtTime(lo,0);while(t<dur){const d=1.5+R()*3;f.frequency.setTargetAtTime(lo+R()*(hi-lo),t,d*.4);g.gain.setTargetAtTime(v*(.35+R()*.8),t,d*.4);t+=d}
 const w=noiseSrc(ctx,'white',dur),bp=ctx.createBiquadFilter();bp.type='bandpass';bp.Q.value=14;const wg=ctx.createGain();wg.gain.value=v*.05;w.connect(bp);bp.connect(wg);wg.connect(dst);t=0;while(t<dur){bp.frequency.setTargetAtTime(500+R()*900,t,1.5);t+=2+R()*2}}
function cars(ctx,dst,dur,R,n){for(let i=0;i<n;i++){const t=R()*(dur-3),len=2.5+R()*2;const s=ctx.createBufferSource();s.buffer=noiseBuf(ctx,len,'pink');const f=ctx.createBiquadFilter();f.type='lowpass';f.frequency.setValueAtTime(300,t);f.frequency.linearRampToValueAtTime(1400,t+len*.5);f.frequency.linearRampToValueAtTime(260,t+len);const g=ctx.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.07,t+len*.5);g.gain.linearRampToValueAtTime(0,t+len);const p=pan(ctx,0);if(p.pan){p.pan.setValueAtTime(-.8,t);p.pan.linearRampToValueAtTime(.8,t+len)}s.connect(f);f.connect(g);g.connect(p);p.connect(dst);s.start(t);s.stop(t+len)}}
function beeps(ctx,dst,dur,R,n){const sc=[72,76,79,84,88,91];for(let i=0;i<n;i++){let t=R()*dur;const p=pan(ctx,R()*1.6-.8);p.connect(dst);const k=2+Math.floor(R()*4);for(let j=0;j<k;j++){tone(ctx,p,t,mtof(sc[Math.floor(R()*sc.length)]),.09,{type:'square',v:.018,a:.002,r:.08});t+=.07+R()*.05}}}
/* ---------- music ---------- */
function seq(ctx,out,dur,bpm,bars,fn){const beat=60/bpm,bar=beat*4;let t=0,i=0;while(t<dur){fn(t,i%bars,beat,bar);t+=bar;i++}}
const MUSIC_RMS=.045,AMB_RMS=.06;
const MUSIC={
 home:{len:4*4*60/76*2,seed:11,build(ctx,out,dur,R){const rv=verb(ctx,2.2,3,.35);rv.o.connect(out);const bus=ctx.createGain();bus.gain.value=.9;bus.connect(out);bus.connect(rv.i);
  const ch=[[53,57,60,64],[52,55,59,62],[50,53,57,60],[48,52,55,59]];
  seq(ctx,out,dur,76,4,(t,i,b)=>{const c=ch[i];for(let k=0;k<4;k++)epiano(ctx,bus,t+k*.012,c[k],b*3.6,.06);epiano(ctx,bus,t+b*2.5,c[2]+12,b*1.4,.04);tone(ctx,bus,t,mtof(c[0]-12),b*3.5,{type:'triangle',v:.12,a:.02,r:b*3});
   for(let s=0;s<4;s++){if(s%2===0)kick(ctx,bus,t+s*b,.26);else tone(ctx,bus,t+s*b,180,.12,{v:.05,slide:120,a:.002,r:.1})}});
}},
 con:{len:8*4*60/100,seed:21,build(ctx,out,dur,R){const rv=verb(ctx,2.6,3,.4);rv.o.connect(out);const bus=ctx.createGain();bus.connect(out);bus.connect(rv.i);
  const ch=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]];
  seq(ctx,out,dur,100,8,(t,i,b)=>{const c=ch[Math.floor(i/2)%4];padChord(ctx,bus,t,c,b*4,.018,{lp:1100});tone(ctx,bus,t,mtof(c[0]-24),b*1.8,{type:'triangle',v:.16,a:.01,r:b*1.6});tone(ctx,bus,t+b*2,mtof(c[0]-24),b*1.8,{type:'triangle',v:.13,a:.01,r:b*1.6});
   for(let s=0;s<16;s++){const n=c[[0,1,2,1][s%4]]+12+(s>=8?(i%2?7:12):0);tone(ctx,bus,t+s*b/4,mtof(n),b*.24,{type:'square',v:.022,a:.003,r:b*.22,lp:2600})}
   for(let s=0;s<4;s++){kick(ctx,bus,t+s*b,.28);hat(ctx,bus,t+s*b+b/2,.035)}if(i%2)snare(ctx,bus,t+b*3,.05,.2,2200)});}},
 bar:{len:8*4*60/88,seed:31,build(ctx,out,dur,R){const rv=verb(ctx,1.8,3.5,.3);rv.o.connect(out);const bus=ctx.createGain();bus.connect(out);bus.connect(rv.i);
  const ch=[[50,53,57,60,64],[43,53,57,59,64],[48,52,55,59,62],[45,49,55,58,61]];const bass=[[38,41,45,48],[43,47,50,53],[36,40,43,47],[45,44,43,42]];
  seq(ctx,out,dur,88,8,(t,i,b)=>{const c=ch[i%4],sw=b*.62;for(let k=1;k<5;k++){epiano(ctx,bus,t+k*.01,c[k],b*1.6,.05);epiano(ctx,bus,t+b*2+sw-b/2+k*.01,c[k],b*1.2,.035)}
   bass[i%4].forEach((m,s)=>tone(ctx,bus,t+s*b,mtof(m),b*.9,{type:'triangle',v:.2,a:.01,r:b*.85,lp:700}));
   for(let s=0;s<4;s++){snare(ctx,bus,t+s*b,.025,.25,5000);snare(ctx,bus,t+s*b+sw,.018,.12,6000)}});}},
 hall:{len:8*4*60/64,seed:41,build(ctx,out,dur,R){const rv=verb(ctx,4,2.2,.55);rv.o.connect(out);const bus=ctx.createGain();bus.connect(out);bus.connect(rv.i);
  const ch=[[48,55,63],[44,51,60],[51,58,67],[46,53,62]];
  seq(ctx,out,dur,64,8,(t,i,b)=>{const c=ch[Math.floor(i/2)%4];padChord(ctx,bus,t,c,b*8,.016,{lp:700,a:b*3});tone(ctx,bus,t,mtof(c[0]-12),b*8,{type:'sine',v:.14,a:b*2,r:b*3,sus:1});if(i%2===0)for(let s=0;s<3;s++)tone(ctx,bus,t+b*(1+s*2.3),mtof(c[(s+1)%3]+24),b*3,{v:.03,a:.01,r:b*2.5})});}},
 hotel:{len:8*4*60/84,seed:51,build(ctx,out,dur,R){const rv=verb(ctx,1.6,3,.25);rv.o.connect(out);const bus=ctx.createGain();bus.connect(out);bus.connect(rv.i);
  const ch=[[55,59,62,66],[52,55,59,62],[57,60,64,67],[50,54,57,60]];
  seq(ctx,out,dur,84,8,(t,i,b)=>{const c=ch[i%4];[0,1.5,2.5,3.5].forEach((p,k)=>{for(let n=0;n<4;n++)epiano(ctx,bus,t+p*b+n*.008,c[n]+(k%2?0:12)*0,b*(k===0?1.4:.9),.035)});
   [0,1.5,2,3].forEach((p,k)=>tone(ctx,bus,t+p*b,mtof(c[0]-24+(k===2?7:0)),b*.8,{type:'sine',v:.18,a:.01,r:b*.7}));
   for(let s=0;s<8;s++)if([0,3,6].includes(s))snare(ctx,bus,t+s*b/2,.02,.06,3500);});}},
 night:{lvl:.8,len:8*4*60/66,seed:61,build(ctx,out,dur,R){const rv=verb(ctx,4.5,2,.6);rv.o.connect(out);const bus=ctx.createGain();bus.connect(out);bus.connect(rv.i);
  const ch=[[52,59,63,66],[49,56,59,63],[45,52,56,59],[47,54,58,61]];
  seq(ctx,out,dur,66,8,(t,i,b)=>{const c=ch[Math.floor(i/2)%4];padChord(ctx,bus,t,c,b*8,.009,{lp:900,type:'triangle',a:b*2.5});for(let s=0;s<3;s++)if(R()<.8){const n=c[Math.floor(R()*4)]+24;tone(ctx,bus,t+b*(s*1.3+R()*.5),mtof(n),b*2.5,{v:.035,a:.002,r:b*2.2});tone(ctx,bus,t+b*(s*1.3)+.003,mtof(n)*2.01,b,{v:.008,a:.001,r:b*.8})}});}},
 arcade:{len:8*4*60/124,seed:71,build(ctx,out,dur,R){const bus=ctx.createGain();bus.gain.value=.8;bus.connect(out);
  const ch=[[57,60,64],[53,57,60],[55,59,62],[52,56,59]];
  seq(ctx,out,dur,124,8,(t,i,b)=>{const c=ch[i%4];for(let s=0;s<16;s++)tone(ctx,bus,t+s*b/4,mtof(c[s%3]+12+(s%8>5?12:0)),b*.2,{type:'square',v:.03,a:.001,r:b*.18});
   for(let s=0;s<8;s++)tone(ctx,bus,t+s*b/2,mtof(c[0]-12+(s%2?12:0)),b*.4,{type:'triangle',v:.12,a:.002,r:b*.35});
   for(let s=0;s<4;s++){kick(ctx,bus,t+s*b,.25);hat(ctx,bus,t+s*b+b/2,.03,.03)}if(i%2)snare(ctx,bus,t+b*3.5,.04,.1,3000)});}},
 party:{len:8*4*60/122,seed:81,build(ctx,out,dur,R){const rv=verb(ctx,2,3,.3);rv.o.connect(out);const bus=ctx.createGain();bus.connect(out);bus.connect(rv.i);
  const ch=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]];
  seq(ctx,out,dur,122,8,(t,i,b)=>{const c=ch[i%4];for(let s=0;s<4;s++){kick(ctx,bus,t+s*b,.4);hat(ctx,bus,t+s*b+b/2,.05);padChord(ctx,bus,t+s*b+b/2,c,b*.45,.012,{lp:2400,a:.01,r:b*.3})}snare(ctx,bus,t+b,.08,.2,2000);snare(ctx,bus,t+b*3,.08,.2,2000);
   for(let s=0;s<8;s++)tone(ctx,bus,t+s*b/2,mtof(c[0]-24+(s%2?12:0)),b*.4,{type:'sawtooth',v:.06,a:.005,r:b*.35,lp:500})});}},
 tense:{lvl:.8,len:16,seed:91,build(ctx,out,dur,R){const rv=verb(ctx,4,2,.5);rv.o.connect(out);const bus=ctx.createGain();bus.connect(out);bus.connect(rv.i);
  tone(ctx,bus,0,mtof(33),dur,{type:'sawtooth',v:.05,a:3,r:3,sus:1,lp:200});tone(ctx,bus,0,mtof(34),dur,{type:'sawtooth',v:.03,a:4,r:3,sus:1,lp:260});
  for(let t=1;t<dur-1;t+=2+R()*2)tone(ctx,bus,t,mtof(70+Math.floor(R()*3)),1.5,{v:.02,a:.01,r:1.4})}}
};
/* ---------- ambience ---------- */
const AMBS={
 hum:{len:18,seed:5,build(ctx,out,dur,R){const rv=verb(ctx,3,2.2,.7);rv.o.connect(out);const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1800;lp.connect(out);lp.connect(rv.i);babble(ctx,lp,dur,R,{n:14,v:.035});hum(ctx,out,dur,.5);}},
 room:{len:16,seed:6,build(ctx,out,dur,R){const rv=verb(ctx,1.2,3,.35);rv.o.connect(out);const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=2400;lp.connect(out);lp.connect(rv.i);babble(ctx,lp,dur,R,{n:6,v:.035});hum(ctx,out,dur,.35,240);
  for(let i=0;i<10;i++){let t=R()*dur;const k=6+R()*14;for(let j=0;j<k;j++){snare(ctx,out,t,.012,.02,4000+R()*2000);t+=.07+R()*.12}}}},
 lobby:{len:18,seed:7,build(ctx,out,dur,R){const rv=verb(ctx,3.5,2,.8);rv.o.connect(out);const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1500;lp.connect(out);lp.connect(rv.i);babble(ctx,lp,dur,R,{n:9,v:.03});hum(ctx,out,dur,.3);
  tone(ctx,rv.i,dur*.4,mtof(84),1.6,{v:.05,a:.003,r:1.5});tone(ctx,rv.i,dur*.4+.25,mtof(79),1.6,{v:.04,a:.003,r:1.5})}},
 bar:{len:16,seed:8,build(ctx,out,dur,R){const rv=verb(ctx,1.4,3,.35);rv.o.connect(out);const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=2600;lp.connect(out);lp.connect(rv.i);babble(ctx,lp,dur,R,{n:9,v:.045,spread:1});clinks(ctx,out,dur,R,12);hum(ctx,out,dur,.25,200)}},
 street:{len:20,seed:9,build(ctx,out,dur,R){cars(ctx,out,dur,R,6);windNoise(ctx,out,dur,R,.12,300,900);const rv=verb(ctx,2.5,2,.6);rv.o.connect(out);const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1200;lp.connect(rv.i);babble(ctx,lp,dur,R,{n:4,v:.02});
  for(let i=0;i<2;i++)tone(ctx,rv.i,R()*dur,380+R()*80,.5,{type:'square',v:.012,a:.02,r:.45,sus:1,lp:900})}},
 garden:{len:16,seed:10,build(ctx,out,dur,R){windNoise(ctx,out,dur,R,.14,250,700);
  const s=noiseSrc(ctx,'pink',dur),bp=ctx.createBiquadFilter();bp.type='bandpass';bp.frequency.value=900;bp.Q.value=.6;const g=ctx.createGain();g.gain.value=.12;s.connect(bp);bp.connect(g);g.connect(out);
  for(let t=0;t<dur;t+=.5+R()*1.5){const p=pan(ctx,R()*1.6-.8);p.connect(out);const f=4200+R()*600;for(let k=0;k<3+R()*3;k++)tone(ctx,p,t+k*.06,f,.04,{v:.012,a:.005,r:.04})}}},
 wind:{len:20,seed:12,build(ctx,out,dur,R){windNoise(ctx,out,dur,R,.4,180,1100);hum(ctx,out,dur,.2,120)}},
 home:{lvl:.45,len:16,seed:13,build(ctx,out,dur,R){hum(ctx,out,dur,.12,110);for(let t=1;t<dur-1;t+=1.5+R()*3){const p=pan(ctx,R()*1.4-.7);p.connect(out);const f=2600+R()*1400;for(let k=0;k<2+R()*3;k++)tone(ctx,p,t+k*.11,f*(1+R()*.08),.08,{v:.008,a:.01,r:.07})}}},
 office:{lvl:.6,len:16,seed:18,build(ctx,out,dur,R){hum(ctx,out,dur,.25,160);const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1600;lp.connect(out);babble(ctx,lp,dur,R,{n:3,v:.02});for(let i=0;i<14;i++){let t=R()*dur;const k=6+R()*14;for(let j=0;j<k;j++){snare(ctx,out,t,.01,.02,4200+R()*2000);t+=.07+R()*.12}}}},
 station:{len:20,seed:19,build(ctx,out,dur,R){const rv=verb(ctx,3.5,1.8,.8);rv.o.connect(out);const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1500;lp.connect(out);lp.connect(rv.i);babble(ctx,lp,dur,R,{n:10,v:.03});hum(ctx,out,dur,.3,90);
  for(const[t,m]of[[dur*.3,76],[dur*.3+.45,72],[dur*.3+.9,79]])tone(ctx,rv.i,t,mtof(m),1.4,{v:.05,a:.004,r:1.3})}},
 bakery:{len:16,seed:14,build(ctx,out,dur,R){hum(ctx,out,dur,.4,220);const rv=verb(ctx,1,3,.3);rv.o.connect(out);const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=2000;lp.connect(out);lp.connect(rv.i);babble(ctx,lp,dur,R,{n:3,v:.03});clinks(ctx,out,dur,R,4)}},
 hotel:{lvl:.6,len:14,seed:15,build(ctx,out,dur,R){hum(ctx,out,dur,.45,140);const s=noiseSrc(ctx,'white',dur),f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=2400;f.Q.value=.4;const g=ctx.createGain();g.gain.value=.012;s.connect(f);f.connect(g);g.connect(out)}},
 hall:{len:18,seed:16,build(ctx,out,dur,R){const rv=verb(ctx,4.5,1.8,.9);rv.o.connect(out);const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1100;lp.connect(rv.i);lp.connect(out);babble(ctx,lp,dur,R,{n:7,v:.02});hum(ctx,out,dur,.35,120)}},
 arcade:{len:16,seed:17,build(ctx,out,dur,R){const rv=verb(ctx,1.2,3,.3);rv.o.connect(out);const lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=2000;lp.connect(out);lp.connect(rv.i);babble(ctx,lp,dur,R,{n:6,v:.03});beeps(ctx,out,dur,R,26);hum(ctx,out,dur,.25,200)}}
};
/* ---------- live UI sounds ---------- */
function sfx(k,o){
 if(!AU||!AC||AC.state!=='running')return;
 const t=AC.currentTime,d=AU.sfx;
 const T=(f,dur,op)=>{const os=AC.createOscillator(),g=AC.createGain();os.type=(op&&op.type)||'sine';os.frequency.setValueAtTime(f,t+(op&&op.at||0));if(op&&op.to)os.frequency.exponentialRampToValueAtTime(op.to,t+(op.at||0)+dur);const v=(op&&op.v)||.1,s=t+(op&&op.at||0);g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(v,s+.004);g.gain.exponentialRampToValueAtTime(.0001,s+dur);os.connect(g);g.connect(d);os.start(s);os.stop(s+dur+.02)};
 const Nz=(dur,f0,f1,v,q)=>{const s=AC.createBufferSource();s.buffer=AU.nb;s.loop=true;const f=AC.createBiquadFilter();f.type='bandpass';f.Q.value=q||1.2;f.frequency.setValueAtTime(f0,t);f.frequency.exponentialRampToValueAtTime(f1,t+dur);const g=AC.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+dur*.4);g.gain.linearRampToValueAtTime(0,t+dur);s.connect(f);f.connect(g);g.connect(d);s.start(t);s.stop(t+dur+.02)};
 switch(k){
  case'hover':T(2100,.03,{v:.025});break;
  case'tap':T(900,.05,{v:.06,to:1300});break;
  case'advance':T(620,.04,{v:.035,type:'triangle'});break;
  case'select':T(660,.09,{v:.07,type:'triangle',to:990});T(1320,.16,{v:.035,at:.06});break;
  case'notify':T(1318,.5,{v:.06});T(1976,.6,{v:.035,at:.09});break;
  case'phoneOpen':Nz(.22,500,2600,.09,1.5);T(1046,.12,{v:.04,at:.12});break;
  case'phoneClose':Nz(.2,2400,500,.08,1.5);break;
  case'heartUp':[784,988,1318].forEach((f,i)=>T(f,.22,{v:.05,at:i*.06}));break;
  case'heartDown':[392,330].forEach((f,i)=>T(f,.25,{v:.06,at:i*.09,type:'triangle'}));break;
  case'discover':[1046,1318,1568,2093].forEach((f,i)=>T(f,.35,{v:.04,at:i*.07}));break;
  case'unlock':[523,659,784,1046].forEach((f,i)=>T(f,.6,{v:.04,at:i*.05,type:'triangle'}));break;
  case'whoosh':Nz(.45,250,1600,.07,.8);break;
  case'error':T(140,.14,{v:.07,type:'square'});break;
  case'chapter':[262,330,392,523].forEach((f,i)=>T(f,1.4,{v:.05,at:i*.12,type:'triangle'}));break;
 }
}
/* ---------- footsteps ----------
   Each step is synthesised once per surface (a few variants each) and then played from a buffer: a heel strike
   (a low body thump plus a filtered click), a softer toe roll a few hundredths of a second later, and whatever
   the floor adds: carpet swallows the click, marble and tile ring out into the room, wood knocks hollow, metal
   stairs clang, grass and gravel crunch. Steps alternate slightly left and right and never repeat exactly. */
const STEPS={};
function stepBuf(kind,i){
 const key=kind+i;if(STEPS[key])return STEPS[key];
 const sr=AC.sampleRate,len=Math.floor(sr*.42),d=new Float32Array(len);
 let seed=(i+1)*9301+kind.length*49297;const r=()=>(seed=(seed*16807)%2147483647)/2147483647*2-1;
 const bq=(x,type,f,q)=>{const w=2*Math.PI*f/sr,c=Math.cos(w),a=Math.sin(w)/(2*q);let b0,b1,b2;
  if(type==='lp'){b0=(1-c)/2;b1=1-c;b2=b0}else if(type==='hp'){b0=(1+c)/2;b1=-(1+c);b2=b0}else{b0=a;b1=0;b2=-a}
  const a0=1+a,a1=-2*c,a2=1-a;let x1=0,x2=0,y1=0,y2=0;for(let n=0;n<x.length;n++){const y=(b0*x[n]+b1*x1+b2*x2-a1*y1-a2*y2)/a0;x2=x1;x1=x[n];y2=y1;y1=y;x[n]=y}return x};
 const burst=(t0,dur,tau,amp,filt)=>{const n0=Math.floor(t0*sr),n=Math.floor(dur*sr),b=new Float32Array(n);for(let k=0;k<n;k++)b[k]=r()*Math.exp(-k/sr/tau);for(const f of filt)bq(b,f[0],f[1],f[2]);for(let k=0;k<n&&n0+k<len;k++)d[n0+k]+=b[k]*amp};
 const thump=(t0,f0,f1,tau,amp)=>{const n0=Math.floor(t0*sr);let ph=0;for(let k=0;n0+k<len&&k<sr*tau*6;k++){const t=k/sr,f=f1+(f0-f1)*Math.exp(-t/.02);ph+=2*Math.PI*f/sr;d[n0+k]+=Math.sin(ph)*Math.exp(-t/tau)*amp*Math.min(1,k/(sr*.002))}};
 const mode=(t0,f,tau,amp)=>{const n0=Math.floor(t0*sr);for(let k=0;n0+k<len&&k<sr*tau*6;k++){const t=k/sr;d[n0+k]+=Math.sin(2*Math.PI*f*t)*Math.exp(-t/tau)*amp}};
 const grains=(t0,span,n,amp,f,q)=>{for(let g=0;g<n;g++){const t=t0+Math.pow(Math.abs(r()),1.6)*span;burst(t,.012,.0025+Math.abs(r())*.003,amp*(.4+Math.abs(r())*.6),[['bp',f*(.7+Math.abs(r())*.8),q]])}};
 // envelope-shaped noise (attack then decay), the building block of a believable scuff or swish
 const swish=(t0,att,tau,amp,filt)=>{const n0=Math.floor(t0*sr),n=Math.floor((att+tau*6)*sr),b=new Float32Array(n);for(let k=0;k<n;k++){const t=k/sr;b[k]=r()*(t<att?t/att:Math.exp(-(t-att)/tau))}for(const f of filt)bq(b,f[0],f[1],f[2]);for(let k=0;k<n&&n0+k<len;k++)d[n0+k]+=b[k]*amp};
 // a diffuse room tail: decaying filtered noise after the step, what makes a hard floor sound like a big hall
 const tail=(t0,tau,amp,lp)=>swish(t0,.004,tau,amp,[['lp',lp,.7],['hp',180,.7]]);
 // everyone at a con wears trainers: a rubbery heel thud, a short sole scuff, then the toe rolling down
 const j=1+r()*.07,toe=.085+Math.abs(r())*.03;
 if(kind==='carpet'){thump(0,92*j,50,.04,.6);swish(.002,.004,.025,.35,[['lp',650*j,.7]]);thump(toe,80*j,48,.03,.3);swish(toe,.006,.03,.16,[['lp',900,.7]])}
 else if(kind==='hard'){
  thump(0,105*j,58,.03,.55);swish(.001,.002,.014,.42,[['hp',600,.7],['lp',3800*j,.7]]);swish(.003,.002,.006,.1,[['bp',2600*j,.9]]);
  thump(toe,92*j,55,.025,.32);swish(toe,.006,.03,.2,[['bp',1900*j,.6]]);
  if(i===2)mode(toe+.02,2900*j,.012,.025); // the odd squeak of a trainer on polished stone
  tail(.006,.09,.1,2600)}
 else if(kind==='wood'){thump(0,112*j,66,.045,.6);swish(0,.002,.016,.32,[['bp',520*j,1.1]]);mode(0,180*j,.07,.12);mode(0,310*j,.05,.08);thump(toe,100*j,60,.035,.3);swish(toe,.006,.025,.14,[['bp',1200,.8]]);tail(.006,.05,.04,2000)}
 else if(kind==='metal'){thump(0,118*j,70,.03,.5);swish(0,.002,.012,.4,[['bp',1500*j,.9]]);mode(0,640*j,.18,.06);mode(0,1370*j,.13,.04);mode(0,2490*j,.09,.025);thump(toe,105,64,.025,.28);swish(toe,.004,.02,.18,[['bp',2200,1]]);tail(.006,.07,.05,3000)}
 else if(kind==='grass'){
  // grass is a soft swish of blades round the shoe, not a crackle: overlapping, smoothly enveloped noise, mostly high
  thump(.004,70*j,45,.035,.28);
  swish(0,.018,.05,.34,[['bp',3400*j,.55],['lp',7000,.7]]);swish(.03,.02,.04,.2,[['bp',5200*j,.6]]);swish(toe-.01,.025,.055,.22,[['bp',2700*j,.5]]);
  for(let g=0;g<5;g++)swish(Math.abs(r())*.12,.004,.006,.035,[['bp',4000+Math.abs(r())*3000,1.2]])}
 else if(kind==='gravel'){thump(0,90*j,55,.03,.4);swish(0,.01,.05,.18,[['bp',2400*j,.6]]);grains(0,.15,40,.16,2400,.8);grains(toe,.08,18,.12,3200,1)}
 else if(kind==='water'){thump(0,80*j,50,.03,.3);swish(0,.01,.07,.3,[['bp',900*j,.8]]);grains(.02,.15,14,.1,1800,2)}
 else if(kind==='land'){thump(0,85,45,.07,.95);swish(0,.003,.03,.5,[['lp',700,.7]])}
 else{thump(0,100*j,58,.03,.55);swish(.001,.002,.016,.36,[['bp',1100*j,.7]]);grains(.002,.03,6,.06,3800,.9);thump(toe,90*j,55,.025,.3);swish(toe,.006,.03,.16,[['bp',2000*j,.7]]);tail(.006,.06,.05,2400)}
 let pk=0;for(let n=0;n<len;n++)pk=Math.max(pk,Math.abs(d[n]));const g=.9/(pk||1);
 for(let n=0;n<len;n++){d[n]*=g;if(n>len-400)d[n]*=(len-n)/400}
 const b=AC.createBuffer(1,len,sr);b.getChannelData(0).set(d);return STEPS[key]=b;
}
const STEPVOL={carpet:.6,hard:.62,wood:.75,metal:.75,concrete:.68,grass:.55,gravel:.7,water:.7,land:.9};
function stepSound(v,kind,left){if(!AU||!AC)return;try{if(AC.state==='suspended')return;
 let st=0;if(!kind){const f=typeof floorKind==='function'?floorKind():['concrete',0];kind=f[0];st=f[1]}
 const s=AC.createBufferSource();s.buffer=stepBuf(kind,Math.random()*6|0);s.playbackRate.value=(.95+Math.random()*.1)*(v>.9?1.04:1);
 const g=AC.createGain();g.gain.value=(v||.7)*.3*(STEPVOL[kind]||.7)*(st?1.15:1)*(.88+Math.random()*.24);
 let out=g;if(AC.createStereoPanner){const p=AC.createStereoPanner();p.pan.value=(left?-1:1)*.1;g.connect(p);out=p}
 s.connect(g);out.connect(AU.sfx);s.start()}catch(e){}}
/* hover/tap feedback for every button, without wiring each one */
let hovT=0;
document.addEventListener('pointerover',e=>{const b=e.target.closest&&e.target.closest('button:not([disabled])');if(!b||b===AU?.lastHover)return;if(AU)AU.lastHover=b;const n=performance.now();if(n-hovT<45)return;hovT=n;sfx('hover')},{passive:true});
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('button');if(!b||b.disabled)return;if(b.classList.contains('ch'))sfx('select');else if(!b.closest('.phone')||b.classList.contains('app')||b.id==='pback')sfx('tap')},true);
