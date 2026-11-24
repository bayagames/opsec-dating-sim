/* ============ WORLD ============ */
const WD={x:0,y:0,z:0,yaw:0,pit:0,vx:0,vz:0,vy:0,eye:1.62,ground:true,reg:'home',area:null,active:false,keys:{},joy:null,look:null,near:null,t:0,lastSave:0,npcs:[],touch:false,bob:0,stepPh:0,fovk:0,land:0,bobAmp:0};
/* ---------- areas ---------- */
/* the most specific area wins: 'sub' areas first, then the smallest rectangle (a café inside a lobby, a food court inside the courtyard) */
function areaAt(reg,x,z,y){let best=null,bs=1e18;for(const k in AREAS){const a=AREAS[k];if(a.reg!==reg)continue;const r=a.r;if(x>=r[0]&&x<=r[2]&&z>=r[1]&&z<=r[3]&&y>=a.y0&&y<=a.y1){const sz=(r[2]-r[0])*(r[3]-r[1])/(a.sub?1e6:1);if(sz<bs){bs=sz;best=k}}}return best}
function teleport(reg,x,z,yaw,y){WD.tpAt=performance.now();if(WD.cut){WD.cut=null;if(typeof cutClass==='function')setTimeout(cutClass,0)}if(reg!=='train'&&typeof S!=='undefined'&&S&&S.trip)S.trip=null;G.poolReg=null;G.atmoInit=false;WD.reg=reg;WD.x=x;WD.z=z;WD.yaw=yaw;WD.pit=0;WD.y=y||0;WD.vy=0;WD.vx=WD.vz=0;WD.eye=WD.y+1.62}
function teleportArea(k){const a=AREAS[k];if(!a)return;teleport(a.reg,a.sp[0],a.sp[1],a.sp[2],a.sp[3]||0)}
const bgArea=k=>BG2AREA[k]||(typeof AREAS!=='undefined'&&AREAS[k]?k:null);
/* are you in (or right at the edge of) this area? talking over a counter or through a doorway counts */
function nearArea(k,m){const a=AREAS[k];if(!a||!S||a.reg!==WD.reg)return false;m=m===undefined?3:m;const r=a.r;return WD.x>=r[0]-m&&WD.x<=r[2]+m&&WD.z>=r[1]-m&&WD.z<=r[3]+m&&WD.y>=a.y0-1.5&&WD.y<=a.y1+1.5}
function worldBG(k){const ak=bgArea(k);if(!(S&&S.inWorld&&G.ok)||!ak)return false;const cur=areaAt(WD.reg,WD.x,WD.z,WD.y);if(!(cur&&(AREAS[cur].bg===k||ak===cur))&&!nearArea(ak))teleportArea(ak);placeChars();return true}
/* ---------- physics ---------- */
function heightAt(reg,x,z,cy){const L=G.regions[reg].shash[Math.floor(x/4)+','+Math.floor(z/4)]||[];let best=-1e9;
 for(const s of L){if(x<s.x0||x>s.x1||z<s.z0||z>s.z1)continue;let h=s.y;if(h===undefined){const t=s.ax==='x'?(x-s.x0)/(s.x1-s.x0):(z-s.z0)/(s.z1-s.z0);h=s.ya+(s.yb-s.ya)*t}if(h<=cy+.62&&h>best)best=h}
 return best>-1e9?best:null}
function blockedAt(reg,x,z,y,r){const H=G.regions[reg].hash,a=y+.4,b=y+1.75;
 for(let gx=Math.floor((x-r)/4);gx<=Math.floor((x+r)/4);gx++)for(let gz=Math.floor((z-r)/4);gz<=Math.floor((z+r)/4);gz++){const L=H[gx+','+gz];if(!L)continue;for(const q of L){if(x+r>q[0]&&x-r<q[2]&&z+r>q[1]&&z-r<q[3]&&q[5]>a&&q[4]<b)return true}}
 if(gateClosedAt(reg,x,z,y,r))return true;
 for(const d of DYN){if(d.reg!==reg||!d.when())continue;const q=d.b;if(x+r>q[0]&&x-r<q[2]&&z+r>q[1]&&z-r<q[3]&&q[5]>a&&q[4]<b)return true}
 const h=heightAt(reg,x,z,y);if(h===null)return true;
 return false}
/* the top of a prop you've dropped onto from above (a fall from a landing onto a table, say): you land on it rather
   than sinking inside it, and walk off its edge normally */
function propTopAt(reg,x,z,y,r){const H=G.regions[reg].hash;let best=null;
 for(let gx=Math.floor((x-r)/4);gx<=Math.floor((x+r)/4);gx++)for(let gz=Math.floor((z-r)/4);gz<=Math.floor((z+r)/4);gz++){const L=H[gx+','+gz];if(!L)continue;
  for(const q of L){if(x+r>q[0]&&x-r<q[2]&&z+r>q[1]&&z-r<q[3]&&q[5]<=y+.05&&q[5]>y-12&&(best===null||q[5]>best))best=q[5]}}
 return best}
/* if you ever end up inside something (a gate shut on you, an old save from before a prop moved), step out to the
   nearest spot you could stand, instead of being frozen there for good */
function unstick(){const reg=WD.reg,R=.3;if(!blockedAt(reg,WD.x,WD.z,WD.y,R))return false;
 for(let d=.1;d<=6;d+=.1){const n=Math.max(8,Math.round(d*12));for(let i=0;i<n;i++){const a=i/n*Math.PI*2,x=WD.x+Math.cos(a)*d,z=WD.z+Math.sin(a)*d;
  for(const dy of[0,.3,-.3,.6,-.6,1,-1]){const h=heightAt(reg,x,z,WD.y+dy);if(h===null||Math.abs(h-WD.y)>1.2)continue;if(!blockedAt(reg,x,z,h,R)){WD.x=x;WD.z=z;WD.y=h;WD.vx=WD.vz=WD.vy=0;return true}}}}
 return false}
/* what's underfoot: the floor's texture decides how a footstep sounds */
function floorKind(){
 const L=(G.ftag&&G.ftag[WD.reg])||[],x=WD.x,z=WD.z,y=WD.y;let best=null,bd=.3,stair=null;
 for(const t of L){if(x<t[0]||x>t[2]||z<t[1]||z>t[3])continue;
  if(t[6]){if(y<=t[4]+.3&&y>=t[4]-7)stair=t;continue}
  const d=Math.abs(t[4]-y);if(d<bd){bd=d;best=t}}
 const t=best||stair;if(!t)return['concrete',0];
 const k=t[5],m=t[7];
 const kind=/^carpet|^rug|^linen|^fabric/.test(k)?'carpet':/^(marble|tile|tileDark)$/.test(k)?'hard':/^wood/.test(k)?'wood':k==='grass'?'grass':k==='gravel'?'gravel':k==='water'?'water':(m>.5||k==='metal')?'metal':'concrete';
 return[kind,best?0:1];
}
/* ---------- input ---------- */
/* Desktop: the view is always pointer-locked while you walk around. Esc (which the browser uses to release
   the mouse) opens the phone; closing the phone locks the view again. Touch: left stick moves, dragging
   anywhere else looks around. No axis is ever inverted: drag/move right looks right, up looks up. */
function setupInput(){
 const tz=$('tzone');
 addEventListener('keydown',e=>{if(!S||!S.inWorld)return;const k=e.key.toLowerCase();WD.keys[k]=true;
  if(!worldLive())return;
  if(k==='e'||k==='enter'||k==='f'){e.preventDefault();doInteract()}
  if(k==='m'&&S.unl.map){e.preventDefault();mapOpen(false)}});
 addEventListener('keyup',e=>{WD.keys[e.key.toLowerCase()]=false;if(e.key==='Escape'){WD.escDown=false;if(WD.lockAfterEsc){WD.lockAfterEsc=false;setTimeout(tryLock,30)}}});
 addEventListener('keydown',e=>{if(e.key==='Escape')WD.escDown=true},true);
 addEventListener('blur',()=>{WD.keys={};WD.blurAt=performance.now()});
 document.addEventListener('pointerlockerror',()=>{if(!WD.clickLock)return;WD.clickLock=false;WD.lockFails=(WD.lockFails||0)+1;if(WD.lockFails>=3&&!WD.everLocked){WD.noLock=true;$('lockHint').innerHTML='<b>Drag</b> to look around'}});
 /* The mouse, in one rule: in the world the mouse is captured, and the phone, maps and conversations use the drawn
    cursor, so the real one never appears or jumps. The only thing that releases it is the browser's own Esc (or
    leaving the window). Esc from the world opens the phone; Esc with the phone open closes it. Any key or click puts
    the capture back, with no prompt. */
 document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement)WD.fsExitAt=performance.now()});
 document.addEventListener('pointerlockchange',()=>{
  WD.locked=document.pointerLockElement===lockEl();
  if(WD.locked){WD.everLocked=true;WD.lockFails=0;WD.lockAt=performance.now();return}
  WD.unlockAt=performance.now();
  // only a real Esc opens the phone. Anything the game does itself doesn't count, and neither does anything just after
  // it: our own releases (and a second one the browser sometimes sends), loading screens and the moment after them,
  // moving to another place, a capture that dies as soon as it's granted
  const now=performance.now();if(WD.selfUnlock)WD.quietUntil=now+1500;
  const self=WD.selfUnlock||G.baking||G.lmBusy||!S||S.ending||!S.inWorld||now<(WD.quietUntil||0)||now-(WD.tpAt||0)<2500||now-(G.lmDoneAt||0)<1500||now-(WD.lockAt||0)<450||now-(WD.fsExitAt||0)<900||!!WD.escAt;
  WD.selfUnlock=false;if(self)return;
  // leaving the window also drops the capture: that's not an Esc, so leave everything as it was
  setTimeout(()=>{if(document.hidden||!document.hasFocus()||WD.blurAt&&performance.now()-WD.blurAt<600)return;if(!S||!S.inWorld)return;if(performance.now()-(WD.fsExitAt||0)<900)return;
   const o=$('ov');
   if(o.classList.contains('phoneov')){closePhone();return}
   if(!o.classList.contains('on')&&!$('card').classList.contains('on')&&(worldLive()||$('vn').classList.contains('on')))phone()},90);
 });
 // only explicit clicks count towards the 'pointer lock is impossible here' fallback (e.g. a sandboxed iframe)
 tz.addEventListener('click',()=>{if(WD.touch||!worldLive())return;WD.clickLock=true;tryLock()});
 // step back in automatically: any click or key in the world re-captures the mouse (no "click to play" prompt)
 addEventListener('mousedown',e=>{if(e.isTrusted&&S&&S.inWorld&&!WD.touch&&!locked()&&!$('title').classList.contains('on')&&!$('ov').classList.contains('phoneov')&&!$('pgx'))tryLock()},true);
 addEventListener('keydown',e=>{if(e.key==='Escape'||e.key==='p'||e.key==='P'||e.key==='Tab')return;if(S&&S.inWorld&&!WD.touch&&!locked()&&(worldLive()||$('vn').classList.contains('on'))&&!$('ov').classList.contains('phoneov'))tryLock()},true);
 let drag=null;
 tz.addEventListener('mousedown',e=>{if(WD.noLock)drag=[e.clientX,e.clientY]});
 addEventListener('mouseup',()=>drag=null);
 addEventListener('mousemove',e=>{if(!worldLive()||WD.touch)return;
  if(locked()){if(performance.now()-(WD.lockAt||0)<120||Math.abs(e.movementX)>260||Math.abs(e.movementY)>260)return;look(e.movementX,e.movementY,.0022)}
  else if(drag&&WD.noLock){look(e.clientX-drag[0],e.clientY-drag[1],.0045);drag=[e.clientX,e.clientY]}});
 const joyCenter=()=>{const r=$('joy').getBoundingClientRect();return[r.left+r.width/2,r.top+r.height/2,r.width/2]};
 const tStart=e=>{setTouch(true);for(const t of e.changedTouches){
   const[jx,jy,jr]=joyCenter();
   if(!WD.joy&&Math.hypot(t.clientX-jx,t.clientY-jy)<jr*1.7&&t.clientX<innerWidth*.5){WD.joy={id:t.identifier,dx:t.clientX-jx,dy:t.clientY-jy};showJoy()}
   else if(!WD.look)WD.look={id:t.identifier,x:t.clientX,y:t.clientY}}e.preventDefault()};
 const tMove=e=>{for(const t of e.changedTouches){
   if(WD.joy&&t.identifier===WD.joy.id){const[jx,jy]=joyCenter();WD.joy.dx=t.clientX-jx;WD.joy.dy=t.clientY-jy;showJoy()}
   if(WD.look&&t.identifier===WD.look.id){if(worldLive())look(t.clientX-WD.look.x,t.clientY-WD.look.y,.0058);WD.look.x=t.clientX;WD.look.y=t.clientY}}e.preventDefault()};
 const tEnd=e=>{for(const t of e.changedTouches){if(WD.joy&&t.identifier===WD.joy.id){WD.joy=null;showJoy()}if(WD.look&&t.identifier===WD.look.id)WD.look=null}};
 tz.addEventListener('touchstart',tStart,{passive:false});tz.addEventListener('touchmove',tMove,{passive:false});tz.addEventListener('touchend',tEnd);tz.addEventListener('touchcancel',tEnd);
 $('actBtn').addEventListener('click',e=>{e.stopPropagation();doInteract()});
}
/* step back into mouse-look (after the phone closes, a scene ends...). While Esc is held, wait for it to come up:
   locking during an Esc press hands the browser an Esc to cancel the lock with, and the phone pops straight back */
function relock(){if(WD.touch||WD.noLock||locked())return;if(WD.escDown){WD.lockAfterEsc=true;return}tryLock()}
/* Full screen with Esc kept for the game. Browsers always let go of a captured mouse on Esc, and only take it back
   after a click or a key that isn't Esc, so in a normal window Esc can open and close the phone but can't hand the
   mouse straight back. In full screen the page can keep Esc for itself (Chrome, Edge, Opera): Esc opens and closes the
   phone with the mouse staying captured, and holding Esc leaves full screen. It needs a click or key press to start,
   so it's asked for the moment you step into the world. Off in Settings. Elsewhere the old way still works: after an
   Esc, any key or click captures the mouse again. */
function immersive(){if(WD.touch||SETTINGS.nofs||!document.documentElement.requestFullscreen)return;
 const kl=()=>{if(navigator.keyboard&&navigator.keyboard.lock)navigator.keyboard.lock(['Escape']).catch(()=>{})};
 if(document.fullscreenElement){kl();return}
 try{document.documentElement.requestFullscreen({navigationUI:'hide'}).then(kl).catch(()=>{})}catch(e){}}
const escKept=()=>!!(document.fullscreenElement&&navigator.keyboard&&navigator.keyboard.lock&&!SETTINGS.nofs);
function tryLock(){if(WD.touch||WD.noLock||!S||!S.inWorld||S.ending||$('title').classList.contains('on')||$('pgx'))return;const el=lockEl();if(document.pointerLockElement===el)return;immersive();try{const p=el.requestPointerLock&&el.requestPointerLock();if(p&&p.catch)p.catch(()=>{})}catch(e){}}
if(SETTINGS.nolock)WD.noLock=true;
function setTouch(on){WD.touch=on;document.body.classList.toggle('touchui',on);document.body.classList.toggle('desk',!on)}
/* dx>0 (mouse/finger moves right) turns right; dy<0 (moves up) looks up. Never inverted. */
function look(dx,dy,k){const s=lookSens();WD.yaw-=dx*k*s;WD.pit=clamp(WD.pit-dy*k*s,-1.25,1.25)}
function lookSens(){return (typeof SETTINGS!=='undefined'&&SETTINGS.sens)||1}
function showJoy(){const j=$('joy');const kn=$('knob');if(!WD.joy){kn.style.transform='';j.classList.remove('run');return}const d=Math.hypot(WD.joy.dx,WD.joy.dy),R=52,m=Math.min(d,R),a=Math.atan2(WD.joy.dy,WD.joy.dx);kn.style.transform=`translate(${Math.cos(a)*m}px,${Math.sin(a)*m}px)`;j.classList.toggle('run',d>R*.92)}
const worldLive=()=>S&&S.inWorld&&WD.active&&$('world').classList.contains('on')&&!$('ov').classList.contains('on')&&!$('card').classList.contains('on');
/* ---------- update ---------- */
function update(dt){
 let f=0,r=0;const K=WD.keys;
 if(K.w||K.arrowup||K.z)f+=1;if(K.s||K.arrowdown)f-=1;if(K.a||K.arrowleft||K.q)r-=1;if(K.d||K.arrowright)r+=1;
 let run=K.shift;
 if(WD.joy){const R=52,d=Math.hypot(WD.joy.dx,WD.joy.dy);if(d>7){const mag=Math.min(1,(d-7)/(R-7)),c=mag*mag*.35+mag*.65;f=-WD.joy.dy/d*c;r=WD.joy.dx/d*c;if(d>R*.92)run=true}}
 const m=Math.hypot(f,r);if(m>1){f/=m;r/=m}
 // walking pace is a brisk 5 m/s, sprinting 8.6; running backwards or sideways is a little slower, like a person
 const back=f<-.1&&Math.abs(f)>Math.abs(r);
 const spd=(run&&!back?8.6:5.1)*(back?.8:1);
 const fx=-Math.sin(WD.yaw),fz=-Math.cos(WD.yaw),rx=Math.cos(WD.yaw),rz=-Math.sin(WD.yaw);
 const tvx=(fx*f+rx*r)*spd,tvz=(fz*f+rz*r)*spd;
 // quick to get going, quicker to stop: responsive, but with enough weight that turns feel smooth
 const want=Math.hypot(tvx,tvz),have=Math.hypot(WD.vx,WD.vz);
 const k=WD.ground?(want<.01?16:want<have-.5?12:9):2.5,acc=1-Math.exp(-dt*k);
 WD.vx+=(tvx-WD.vx)*acc;WD.vz+=(tvz-WD.vz)*acc;if(want<.01&&have<.05){WD.vx=WD.vz=0}
 const R=.3,reg=WD.reg;
 const nx=WD.x+WD.vx*dt,nz=WD.z+WD.vz*dt;
 if((WD.stuckT=(WD.stuckT||0)+dt)>.25){WD.stuckT=0;unstick()}
 if(Math.abs(WD.vx)>1e-4){if(!blockedAt(reg,nx,WD.z,WD.y,R)&&!lockedAt(reg,nx,WD.z,WD.y))WD.x=nx;else WD.vx=0}
 if(Math.abs(WD.vz)>1e-4){if(!blockedAt(reg,WD.x,nz,WD.y,R)&&!lockedAt(reg,WD.x,nz,WD.y))WD.z=nz;else WD.vz=0}
 // vertical
 const gh=heightAt(reg,WD.x,WD.z,WD.y);let gy=gh===null?WD.y:gh;if(WD.y>gy+.25){const pt=propTopAt(reg,WD.x,WD.z,WD.y,R*.7);if(pt!==null&&pt>gy)gy=pt}
 if(WD.vy>0||WD.y>gy+.02){WD.vy-=18*dt;WD.y+=WD.vy*dt;if(WD.y<=gy){if(WD.vy<-4){stepSound(.3,'land');WD.land=Math.min(.09,-WD.vy*.012)}WD.y=gy;WD.vy=0;WD.ground=true}else WD.ground=false}
 else{WD.y=gy;WD.vy=0;WD.ground=true}
 const target=WD.y+1.62;WD.eye+=(target-WD.eye)*Math.min(1,dt*(WD.eye<target?14:20));if(Math.abs(target-WD.eye)>1.2)WD.eye=target;
 const sp=Math.hypot(WD.vx,WD.vz);
 // one gentle dip per footstep, timed to a real stride (longer when sprinting); no side-to-side sway
 WD.bobAmp=(WD.bobAmp||0)+((WD.ground&&sp>.6?Math.min(1,sp/5.1):0)-(WD.bobAmp||0))*Math.min(1,dt*8);
 if(WD.ground&&sp>.6){const stride=sp>6.5?2.55:1.95,ph=WD.bob;WD.bob+=dt*sp/stride*Math.PI;if(Math.floor(ph/Math.PI)!==Math.floor(WD.bob/Math.PI))stepSound(sp>6.5?1:.72,null,WD.foot=!WD.foot)}
 else if(WD.bobAmp<.05)WD.bob=Math.round(WD.bob/Math.PI)*Math.PI;
 WD.land=(WD.land||0)*Math.exp(-dt*9);
 WD.fovk+=((run&&sp>6?1:0)-WD.fovk)*Math.min(1,dt*5);
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
  S.visited=S.visited||{};if(!S.visited[a]&&!A.hide){S.visited[a]=1;if(S.day>0){toast('Discovered: '+A.n,'var(--butter)');sfx('discover')}}}
 if(S&&!S.ending&&performance.now()-(WD.bcT||0)>300){WD.bcT=performance.now();beatCheck()}
 if(performance.now()-WD.lastSave>8000){WD.lastSave=performance.now();S.pos=[WD.reg,WD.x,WD.z,WD.yaw,WD.y];save()}
}
/* ---------- interaction ---------- */
const ACTIV={ctf:['Practise a CTF challenge',()=>ctfPractice()],hallB:['Catch a talk in Hall B',()=>attendTalk()],hallC:['Catch a talk in Hall C',()=>attendTalk()],workshopA:['Join the workshop',()=>attendTalk()],workshop:['Join the workshop',()=>attendTalk()],lounge:['Take a breather',()=>restSlot()],naps:['Borrow a nap pod',()=>restSlot()],quiet:['Sit in the quiet for a while',()=>restSlot()]};
/* stepping into an area that isn't open yet: you stop at its edge and are told why (never trapped: you can always leave) */
function lockedAt(reg,x,z,y){const a=areaAt(reg,x,z,y);if(!a||a===WD.area)return false;const m=areaLock(a);if(!m)return false;
 // already somewhere that's closed (a lift, a scene, a gap): every way out is open, so nobody gets stuck
 if(WD.area&&areaLock(WD.area))return false;
 if(performance.now()-(WD.lockT||0)>2500){WD.lockT=performance.now();toast(m,'var(--coral)')}return true}
function visibleChars(){return WCH.filter(c=>c.reg===WD.reg&&c.when())}
function candidates(){
 const L=[];
 for(const c of visibleChars()){const nm=CH[c.id].name;const st=beatStep(curBeat());
  let lbl=stepIs(c.id)?(st.lbl||'Talk to '+nm):(ROM.includes(c.id)&&!met(c.id)?'Talk to '+(UNMET[c.id]||'the stranger'):'Talk to '+nm);
  L.push({x:c.x,z:c.z,y:c.y||0,label:lbl,act:()=>charAct(c),r:2.4,col:CH[c.id].col,kind:'talk'})}
 for(const n of WD.npcs)if(n.reg===WD.reg)L.push({x:n.x,z:n.z,y:n.y,label:n.role?({Doorman:'Chat with the doorman',Volunteer:'Talk to a volunteer',Info:'Ask at the info desk',Receptionist:'Talk to the receptionist',Barista:'Talk to the barista',Security:'Talk to the guard',Engineer:'Talk to an engineer',Commuter:'Chat with a commuter',Passenger:'Talk to a passenger',Coworker:'Chat with a coworker',Partygoer:'Talk to a partygoer'})[n.role]||'Talk':(n.reg==='office'?'Chat with a coworker':n.reg==='station'?'Chat with a commuter':'Chat with an attendee'),act:()=>npcTalk(n),r:2,kind:'talk',col:'#9a98a6'});
 for(const i of INTS)if(i.reg===WD.reg){const lb=i.label();if(lb)L.push({x:i.x,z:i.z,y:i.y,h:i.h,label:lb,act:i.act,r:i.r})}
 // leads and activities that belong to the room you're standing in: offered just ahead of you, below anything nearer
 if(S.day>=1){const ar=areaAt(WD.reg,WD.x,WD.z,WD.y),fx=-Math.sin(WD.yaw),fz=-Math.cos(WD.yaw),px=WD.x+fx*1.9,pz=WD.z+fz*1.9;
  for(const k in LEADS)if(LEADS[k].w===ar&&leadOpen(k))L.push({virt:1,x:px,z:pz,y:WD.y,label:'Lead: '+LEADS[k].n,act:()=>leadStart(k),r:2.5,col:'#c9b6ff'});
  if(isFree())for(const e of eventsNow())if(e.w===ar||(e.ws&&e.ws.includes(ar)))L.push({virt:1,x:px,z:pz,y:WD.y,label:'Join: '+e.n,act:()=>joinEvent(e.id),r:2.5,col:'#ffd166'});
  const A=ACTIV[ar];if(A&&isFree())L.push({virt:1,x:px,z:pz,y:WD.y,label:A[0],act:A[1],r:2.5,col:'#8affc1'})}
 // closed gates: the point on the gate nearest to you
 for(const g of GATES)if(g.reg===WD.reg&&!g.open()){const dx=g.x1-g.x0,dz=g.z1-g.z0,l2=dx*dx+dz*dz||1,t=clamp(((WD.x-g.x0)*dx+(WD.z-g.z0)*dz)/l2,0,1);L.push({x:g.x0+dx*t,z:g.z0+dz*t,y:g.y,label:g.label,act:()=>gateAct(g),r:2.2,col:'#ff5d73'})}
 return L;
}
/* what you're pointing at: the candidate closest to the centre of your view (in 3D, pitch included) within reach.
   Talking reaches a little further, so people behind counters are easy to talk to. Leads and activities offered for the
   room you're in only show when you aren't pointing at anything else. */
function interactCheck(){
 const cp=Math.cos(WD.pit),fx=-Math.sin(WD.yaw)*cp,fy=Math.sin(WD.pit),fz=-Math.cos(WD.yaw)*cp;let best=null,bs=1e9,virt=null;
 for(const c of candidates()){if(c.virt){if(!virt)virt=c;continue}
  if(Math.abs((c.y||0)-WD.y)>2.2)continue;const reach=(c.r||2.2)+(c.kind==='talk'?1.4:.8);
  const dx=c.x-WD.x,dz=c.z-WD.z,dh=Math.hypot(dx,dz);if(dh>reach)continue;
  const dy=(c.y||0)+(c.h||(c.kind==='talk'?1.45:1.05))-WD.eye,d=Math.hypot(dh,dy)||.01;
  const ang=Math.acos(clamp((dx*fx+dy*fy+dz*fz)/d,-1,1)),tol=Math.max(.2,Math.atan((c.kind==='talk'?.55:.45)/d));
  const close=dh<1.1&&ang<1.2;if(ang>tol&&!close)continue;
  const sc=ang/tol+d*.08;if(sc<bs){bs=sc;best=c}}
 if(!best)best=virt;
 WD.near=best;const p=$('prompt');
 $('world').classList.toggle('near',!!best);
 if(best){p.style.display='flex';$('promptT').textContent=best.label;p.style.borderColor=best.col||'var(--butter)';$('actBtn').style.borderColor=best.col||'var(--butter)';$('actL').textContent=best.kind==='talk'?'Talk':'Use';$('cross').classList.add('hot')}else{p.style.display='none';$('cross').classList.remove('hot')}
}
function doInteract(){if(!worldLive()||!WD.near)return;const a=WD.near.act;WD.near=null;$('prompt').style.display='none';WD.active=false;WD.keys={};WD.vx=WD.vz=0;a()}
function npcTalk(n){const pool=n.role&&ROLELINES[n.role]?ROLELINES[n.role]:(NPCLINES[n.ar]||[]).concat(n.reg==='con'||n.reg==='f13'?NPCLINES.any.concat(CHLINES[S.ch]||[],CHLINES[S.ch]||[]):[]);run([{w:n.role==='Info'?'Info desk':(n.role||(n.reg==='office'?'Coworker':n.reg==='station'?'Commuter':'Attendee')),np:1,t:pick(pool.length?pool:NPCLINES.any)}],hub)}
/* ---------- objective ---------- */
function objective(){
 if(!S)return null;
 if(S.ending)return null;
 const b=curBeat();let o=null;
 if(b){const st=beatStep(b),tg=beatTarget(b);o=Object.assign({t:st.t||b.t},tg||{})}
 else if(isFree()){const n=ROM.filter(sceneReady).length;o={t:`Free time: the ${SLOTN[S.slot].toLowerCase()} is yours. ${n?n+' '+(n>1?'people have':'person has')+' a scene for you (yellow on the minimap). ':''}Spend it with someone, on a lead, or at a talk. Or call it ${S.slot===5?'a night':'a '+SLOTN[S.slot].toLowerCase()} from your phone.`}}
 if(o&&o.reg&&o.reg!==WD.reg){
  const H={f13:{reg:'f13',x:243,z:-9.4,y:0},conlift:{reg:'con',x:-212,z:-27,y:WD.y>8?L2:WD.y>3?L1:0},taxi:{reg:'con',x:-136,z:98.6,y:0},train:{reg:'station',x:734,z:4.4,y:0},stationexit:{reg:'station',x:736,z:46.6,y:0},homedoor:{reg:'home',x:-302.6,z:10.9,y:0},officelift:{reg:'office',x:497.7,z:12,y:0}};
  const via={con:{f13:'conlift',station:'taxi',home:'taxi',office:'taxi'},f13:{con:'f13',station:'f13',home:'f13',office:'f13'},station:{con:'train',home:'stationexit',office:'stationexit',f13:'train'},train:{},home:{station:'homedoor',con:'homedoor',f13:'homedoor',office:'homedoor'},office:{station:'officelift',con:'officelift',home:'officelift',f13:'officelift'}}[WD.reg];
  const k=via&&via[o.reg];if(k)o=Object.assign({},o,H[k],{far:1})}
 return o;
}
function newScenes(){if(!S||S.day<1)return[];const L=[];for(const c of WCH){if(ROM.includes(c.id)&&c.when()&&sceneReady(c.id))L.push({id:c.id,reg:c.reg,x:c.x,z:c.z,y:c.y||0,a:areaAt(c.reg,c.x,c.z,c.y||0)})}return L}
function updObjective(){const o=objective();const n=S.day>0?newScenes().length:0;const ot=o?o.t:'';if($('objT').textContent!==ot){$('objT').textContent=ot;const ob=$('obj');if(ot){ob.classList.remove('new');void ob.offsetWidth;ob.classList.add('new')}}$('objN').textContent=o&&o.far?'(Follow the green light: it\'s in another building)':'';$('obj').style.display=o?'block':'none'}
/* ---------- render ---------- */
const _c1={r:0,g:0,b:0};
function storyMark(c){return stepIs(c.id)}
/* how a character currently looks in the world (so hangout portraits match the outfit you just saw) */
function worldLook(id){if(!S||!G.ok)return id;const c=WCH.find(c=>c.id===id&&c.reg===WD.reg&&c.when());return c?charSVGKey(c):id}
function charSVGKey(c){return lookOf(c.id)}
/* time of day for the con, the hotel and the station: sky, the fog outdoors, and how much daylight reaches outside and
   through the glass. Home and the office have their own baked morning. */
const TODP=[
 {hz:[.86,.74,.68],zn:[.32,.52,.86],st:0,fog:[.62,.6,.66],amb:[.62,.6,.64],sun:3.2,inside:1.25},
 {hz:[.74,.82,.92],zn:[.22,.48,.9],st:0,fog:[.66,.72,.82],amb:[.7,.72,.78],sun:3.8,inside:1.35},
 {hz:[.92,.78,.6],zn:[.28,.45,.82],st:0,fog:[.7,.62,.54],amb:[.68,.62,.56],sun:3.2,inside:1.25},
 {hz:[.96,.5,.36],zn:[.2,.14,.38],st:.25,fog:[.42,.26,.3],amb:[.46,.32,.34],sun:1.8,inside:1.1},
 {hz:[.1,.06,.16],zn:[.012,.012,.05],st:1,fog:[.1,.06,.16],amb:[.3,.3,.35],sun:1,inside:1},
 {hz:[.06,.04,.1],zn:[.008,.008,.03],st:1,fog:[.06,.04,.1],amb:[.24,.24,.3],sun:.85,inside:.95}];
function todNow(){if(TT.on)return TODP[TITLESHOTS[TT.i].slot];if(!S||S.day<1||!['con','f13','station','train'].includes(WD.reg))return null;return TODP[clamp(S.slot,0,5)]}
function render(dt){
 const T=G.T,r=G.r,cv=G.cv,cam=G.cam;
 // resolution (adaptive)
 const dpr=Math.max(.5,Math.min(devicePixelRatio||1,G.dprCap)*G.dprK);
 const w=Math.max(1,cv.clientWidth|0),h=Math.max(1,cv.clientHeight|0),key=w+'x'+h+'@'+dpr.toFixed(2);
 if(key!==G.sizeKey){G.sizeKey=key;r.setPixelRatio(dpr);r.setSize(w,h,false);if(G.composer){G.composer.setPixelRatio(dpr);G.composer.setSize(w,h)}if(G.fxaa)G.fxaa.material.uniforms.resolution.value.set(1/(w*dpr),1/(h*dpr));cam.aspect=w/h}
 for(const k in G.regions){const o=G.regions[k].obj;if(o)o.visible=k===WD.reg}
 // atmosphere: fog + hemisphere ease towards the current area's values
 const aK=TT.on?TITLESHOTS[TT.i].area:WD.cut&&WD.cut.C.area&&cutOn()?WD.cut.C.area:WD.area,R=G.regions[WD.reg],A=aK&&AREAS[aK],TOD=todNow();const fog=(TOD&&A&&(A.out||WD.reg==='train'))?TOD.fog:(A&&A.fog)||R.fog,fr=(A&&A.fr)||R.fr,amb=(TOD&&A&&A.out)?TOD.amb:(A&&A.amb)||R.amb||[.3,.3,.35];
 const ease=G.atmoInit?Math.min(1,dt*2.5):1;G.atmoInit=true;
 G.fogT=G.fogT||new T.Color();G.fogT.setRGB(fog[0],fog[1],fog[2],T.SRGBColorSpace);G.fog.color.lerp(G.fogT,ease);
 G.fog.near+=(fr[0]-G.fog.near)*ease;G.fog.far+=(fr[1]-G.fog.far)*ease;
 G.hT=G.hT||new T.Color();G.hT.setRGB(amb[0]*1.25,amb[1]*1.25,amb[2]*1.35,T.SRGBColorSpace);G.hemi.color.lerp(G.hT,ease);
 G.gT=G.gT||new T.Color();G.gT.setRGB(amb[0]*.55,amb[1]*.5,amb[2]*.5,T.SRGBColorSpace);G.hemi.groundColor.lerp(G.gT,ease);
 // with baked light the sources do the work: only a faint fill remains (more outdoors and in daylight)
 const fillK=G.baked?(R.day?LOOK.bakeFill*1.2:A&&A.out?LOOK.bakeFill*1.8:LOOK.bakeFill):(QUALITY[G.q].env?LOOK.fill:1);
 G.hemi.intensity=(A&&A.out?1.2*(TOD?TOD.sun:1):1)*G.HK*fillK*(TOD&&!(A&&A.out)?TOD.inside:1);
 // reflections + directional fill from the region's environment (medium/high); outdoors leans on the sky instead
 if(QUALITY[G.q].env){const env=buildEnv(WD.reg);if(G.scene.environment!==env)G.scene.environment=env;const ek=(LOOK.env[WD.reg]||.7)*(A&&A.out?.55:1)*(A&&A.envk||1)*(G.baked&&!R.day?LOOK.bakeEnv:1);
  G.scene.environmentIntensity=G.scene.environmentIntensity===undefined?ek:G.scene.environmentIntensity+(ek-G.scene.environmentIntensity)*ease}else G.scene.environment=null;
 if(G.grade){const u=G.grade.uniforms;u.t.value=performance.now()/1000;u.res.value=u.res.value||new T.Vector2();u.res.value.set(w,h);u.sat.value=LOOK.sat;u.con.value=LOOK.con;u.vig.value=LOOK.vig;
  u.sh.value=u.sh.value||new T.Vector3(.55,.25,.9);u.hi.value=u.hi.value||new T.Vector3(1.04,1.,.95)}
 G.scene.background=G.fog.color;
 // camera
 const sp=Math.hypot(WD.vx,WD.vz),bamp=(WD.bobAmp||0)*(sp>6.5?.024:.016)*(SETTINGS.bob===false?0:1),bob=-bamp*(1-Math.cos(WD.bob*2))*.5-(WD.land||0);
 const asp=w/h,vf=clamp(2*Math.atan(Math.tan(.75+WD.fovk*.045)/asp),1.05,1.8);
 cam.fov=vf*180/Math.PI;cam.far=(FAR[WD.reg]||180)+40;cam.updateProjectionMatrix();
 if(TT.on&&$('title').classList.contains('on')){const p=titleCam(cam);zoneCull(WD.reg,p[0],p[1],p[2])}
 else if(WD.cut&&cutOn()){const p=cutCam(cam);zoneCull(WD.reg,p[0],p[1],p[2])}
 else{cam.position.set(WD.x,WD.eye+bob,WD.z);WD.roll=(WD.roll||0)+((worldLive()?-(Math.cos(WD.yaw)*WD.vx-Math.sin(WD.yaw)*WD.vz)*.0022:0)-(WD.roll||0))*Math.min(1,dt*6);cam.rotation.set(WD.pit,WD.yaw,WD.roll,'YXZ');if(typeof trainSway==='function')trainSway(cam);zoneCull(WD.reg,WD.x,WD.eye,WD.z)}
 G.sky.position.copy(cam.position);const su=G.sky.material.uniforms;su.t.value=performance.now()/1000;
 const tod=todNow();if(tod){su.hz.value.setRGB(...tod.hz);su.zn.value.setRGB(...tod.zn);su.st.value=tod.st}
 else{su.hz.value.copy(G.fog.color);if(R.day){su.zn.value.setRGB(.12,.3,.75);su.st.value=0}else{su.zn.value.setRGB(.012,.012,.05);su.st.value=1}}
 updLights(dt);
 if(typeof trainTick==='function'&&!TT.on)trainTick(dt);
 updSprites(dt);if(!TT.on)updBeacon();else{for(const id of['wpG','wpP'])if($(id))$(id).style.display='none';if(G.beacon){G.beacon.visible=false;G.pinB.visible=false}}vfxTick();
 G.revZOn=G.revZ;try{if(G.composer)G.composer.render(dt);else r.render(G.scene,cam)}finally{G.revZOn=false}
}
/* the story goal, in the world: a faint column of light over a place, or a small turning marker over a person. It fades
   as you arrive. A second, plain marker shows your own map pin. On screen, a small tag tracks whichever matters,
   and slides to the edge of the screen with an arrow when it's behind you or out of view. */
function goalTarget(){const o=S&&WD.active&&typeof objective==='function'?objective():null;if(o&&o.reg)return Object.assign({kind:'goal'},o);return null}
function pinTarget(){const w=S&&S.wp;return w&&w.reg===WD.reg?{kind:'pin',reg:w.reg,x:w.x,z:w.z,y:w.y||0,t:'Your pin'}:null}
function mkBeacon(col){const T=G.T,g=new T.Group();
 const cv=document.createElement('canvas');cv.width=8;cv.height=128;const x=cv.getContext('2d'),gr=x.createLinearGradient(0,0,0,128);gr.addColorStop(0,'rgba(255,255,255,0)');gr.addColorStop(.75,'rgba(255,255,255,.22)');gr.addColorStop(1,'rgba(255,255,255,.45)');x.fillStyle=gr;x.fillRect(0,0,8,128);
 const tx=new T.CanvasTexture(cv);tx.colorSpace=T.SRGBColorSpace;
 const colM=new T.Mesh(new T.CylinderGeometry(.22,.22,5,16,1,true),new T.MeshBasicMaterial({map:tx,color:col,transparent:true,depthWrite:false,blending:T.AdditiveBlending,side:T.DoubleSide,fog:false}));colM.position.y=2.5;colM.userData.noAO=1;
 const gem=new T.Mesh(new T.OctahedronGeometry(.13),new T.MeshBasicMaterial({color:col,transparent:true,depthWrite:false,fog:false}));gem.scale.y=1.5;gem.userData.noAO=1;
 const ring=new T.Mesh(new T.RingGeometry(.34,.4,40),new T.MeshBasicMaterial({color:col,transparent:true,depthWrite:false,blending:T.AdditiveBlending,side:T.DoubleSide,fog:false}));ring.rotation.x=-Math.PI/2;ring.position.y=.04;ring.userData.noAO=1;
 g.add(colM,gem,ring);g.userData={col:colM,gem,ring};G.scene.add(g);return g}
function placeBeacon(b,o,person){if(!o||o.reg!==WD.reg||Math.abs((o.y||0)-WD.y)>2.6){b.visible=false;return 0}
 const d=Math.hypot(o.x-WD.x,o.z-WD.z),k=clamp((d-1.6)/5,0,1);if(k<=0){b.visible=false;return 0}
 b.visible=true;b.position.set(o.x,o.y||0,o.z);const t=performance.now()/1000,u=b.userData;
 u.col.visible=!person;u.ring.visible=!person;u.gem.position.y=person?2.25+Math.sin(t*2)*.05:1.9+Math.sin(t*2)*.1;u.gem.rotation.y=t*1.6;
 u.gem.material.opacity=.85*k;u.col.material.opacity=.5*k;u.ring.material.opacity=(.35+.2*Math.sin(t*3))*k;return d}
function updBeacon(){
 if(!G.beacon){G.beacon=mkBeacon(0x8affc1);G.pinB=mkBeacon(0xffd166)}
 const o=goalTarget(),b0=beatStep(curBeat()),person=!!(b0&&b0.who)||(o&&WCH.some(c=>c.on&&c.reg===o.reg&&Math.hypot(c.x-o.x,c.z-o.z)<.6));
 const dg=placeBeacon(G.beacon,o,person);
 const pn=pinTarget();if(pn&&Math.hypot(pn.x-WD.x,pn.z-WD.z)<2.5&&Math.abs(pn.y-WD.y)<2.6){S.wp=null;toast('Reached your pin','var(--butter)')}
 placeBeacon(G.pinB,pinTarget(),false);
 hudMark('wpG',o,'#8affc1',person?2.4:1.6);hudMark('wpP',pinTarget(),'#ffd166',1.4);
}
/* the on-screen tag: projected into view, or an arrow on the edge pointing the way */
function hudMark(id,o,col,h){let el=$(id);if(!el){el=document.createElement('div');el.id=id;el.className='wpmark';el.style.setProperty('--c',col);el.innerHTML='<i></i><span></span>';$('world').appendChild(el)}
 if(!o||!o.reg||!WD.active||(o.far&&o.reg!==WD.reg)){el.style.display='none';return}
 if(o.reg!==WD.reg){el.style.display='none';return}
 const T=G.T,v=new T.Vector3(o.x,(o.y||0)+h,o.z);v.project(G.cam);const W=innerWidth,H=innerHeight;
 const behind=v.z>1;let x=(v.x*.5+.5)*W,y=(-v.y*.5+.5)*H;const m=28,on=!behind&&x>m&&x<W-m&&y>m+40&&y<H-m;
 const d=Math.hypot(o.x-WD.x,o.z-WD.z),dy=(o.y||0)-WD.y;
 if(d<2.2&&Math.abs(dy)<2){el.style.display='none';return}
 el.style.display='flex';el.classList.toggle('edge',!on);
 if(!on){let dx=x-W/2,dz=y-H/2;if(behind){dx=-dx;dz=-dz;if(Math.abs(dz)<1)dz=H}const s=Math.min((W/2-m)/Math.abs(dx||1e-6),(H/2-m-30)/Math.abs(dz||1e-6));x=W/2+dx*s;y=H/2+dz*s;el.querySelector('i').style.transform=`rotate(${Math.atan2(dz,dx)}rad)`}
 else el.querySelector('i').style.transform='';
 el.style.transform=`translate(${x|0}px,${y|0}px)`;
 el.querySelector('span').textContent=(Math.abs(dy)>2.6?(dy>0?'▲ ':'▼ '):'')+Math.round(Math.hypot(d,dy))+' m';
}
function updSprites(dt){
 const T=G.T,tt=performance.now()/1000,yaw=TT.on||WD.cut&&cutOn()?WD.cutYaw:WD.yaw;
 G.newsT=(G.newsT||0)-dt;if(G.newsT<=0||!G.news){G.newsT=.25;G.news=!TT.on&&S&&S.ch>0?new Set(newScenes().map(n=>n.id)):new Set()}
 for(const c of WCH){
  const vis=TT.on?!!TT.cast[c.id]:c.reg===WD.reg&&c.when();
  if(!c.obj){if(!vis)continue;c.obj=cutout(null,.98,2.45);G.scene.add(c.obj);c.mark=markObj();G.scene.add(c.mark)}
  c.obj.visible=vis;c.mark.visible=false;if(!vis)continue;
  const sk=charSVGKey(c);if(c.objKey!==sk){c.objKey=sk;const t=artOf(sk)?artTex('a:'+sk,artOf(sk)):spriteTex('c:'+sk,fullSVG(sk));const bd=c.obj.userData.body,b=bd.material;b.map=t;b.emissiveMap=t;b.needsUpdate=true;if(bd.customDistanceMaterial){bd.customDistanceMaterial.map=t;bd.customDistanceMaterial.needsUpdate=true}}
  if(TT.on){const m=TT.cast[c.id];c.obj.position.set(m[0],m[2]||0,m[1]);c.obj.rotation.y=yaw;litSprite(c.obj,WD.reg,m[0],(m[2]||0)+1.2,m[1],tt,CHAR_MIN);continue}
  // sitting down (a seat on the train): the same figure, lowered so the floor hides the legs
  const sy=(c.y||0)-(c.sit&&!WD.cut?.58:0);c.obj.position.set(c.x,sy,c.z);c.obj.rotation.y=yaw;litSprite(c.obj,WD.reg,c.x,(c.y||0)+1.2,c.z,tt,CHAR_MIN);
  const body=c.obj.userData.body;body.scale.y=1+Math.sin(tt*1.7+c.x)*.007;body.scale.x=1-Math.sin(tt*1.7+c.x)*.004;
  if(!c.sit&&(G.news.has(c.id)||storyMark(c))){c.mark.visible=true;c.mark.position.set(c.x,sy+2.62+Math.sin(tt*3)*.07,c.z)}
 }
 for(const n of WD.npcs){
  const vis=n.reg===WD.reg&&Math.abs(n.x-WD.x)+Math.abs(n.z-WD.z)<90;
  if(!n.obj){if(!vis)continue;const v=n.role?7:n.v;n.obj=cutout(spriteTex('anon'+v,anonSVG(v)),.94,2.3);G.scene.add(n.obj)}
  n.obj.visible=vis;if(!vis)continue;
  const moving=!n.still&&n.wait<=0;const ph=tt*6.5+n.hx;
  n.obj.position.set(n.x,n.y,n.z);n.obj.rotation.y=yaw;litSprite(n.obj,WD.reg,n.x,n.y+1.2,n.z,tt);const b=n.obj.userData.body;
  b.position.y=moving?Math.abs(Math.sin(ph))*.035:0;b.rotation.z=moving?Math.sin(ph)*.025:Math.sin(tt*.8+n.hx)*.008;
 }
 for(const d of DYN){const vis=!TT.on&&d.reg===WD.reg&&d.when()&&d.spr;
  if(!d.obj){if(!vis)continue;d.obj=cutout(tapeTex(),1.3,2.4,{noShadow:1,glow:.3});G.scene.add(d.obj)}
  d.obj.visible=!!vis;if(vis){d.obj.position.set(d.spr[0],d.spr[2],d.spr[1]);d.obj.rotation.y=yaw}}
 for(const g of GATES){const vis=!TT.on&&g.reg===WD.reg&&!g.open();if(!g.obj){if(!vis)continue;g.obj=gateObj(g);G.scene.add(g.obj)}g.obj.visible=vis}
}
/* with baked lighting there are no realtime lights: a cut-out's glow is set from the lights around it instead */
const _pr={r:0,g:0,b:0};
/* the cast (min>0) never drops below a floor of brightness: you should always be able to see who you're talking to,
   even in the dark corner of a station platform. The tint of the place survives, it's only lifted */
const CHAR_MIN=.34;
function litSprite(o,reg,x,y,z,tt,min){const u=o.userData;const m=u.body.material;
 if(!G.baked){if(min&&!u.minSet){u.minSet=1;m.emissive.setRGB(min*.55,min*.55,min*.6);m.emissiveIntensity=1}return}
 if(u.lt!==undefined&&tt-u.lt<.25&&Math.abs(u.lx-x)+Math.abs(u.lz-z)<.3)return;u.lt=tt;u.lx=x;u.lz=z;
 probeAt(reg,x,y,z,_pr);const k=1/Math.PI;let r=.05+_pr.r*k,g=.05+_pr.g*k,b=.06+_pr.b*k;
 if(min){const l=.2126*r+.7152*g+.0722*b;if(l<min){const f=min/Math.max(l,.001),w=Math.min(1,(min-l)/min);
  // scale the place's colour up, mixed towards neutral where it's nearly black (so it can't go deep blue or red)
  r=r*f*(1-w*.6)+min*w*.6;g=g*f*(1-w*.6)+min*w*.6;b=b*f*(1-w*.6)+min*1.05*w*.6}}
 m.emissive.setRGB(r,g,b);m.emissiveIntensity=1}
/* gate visuals: velvet rope on chrome posts, or a closed door with a card reader */
function gateObj(g){
 const T=G.T,grp=new T.Group();G.gm=G.gm||{post:new T.MeshStandardMaterial({color:0xc8ccd6,metalness:.9,roughness:.25}),rope:new T.MeshStandardMaterial({color:0x8a1e3a,roughness:.7}),door:new T.MeshStandardMaterial({map:soloTex('door'),roughness:.6}),red:new T.MeshBasicMaterial({color:new T.Color(3,.4,.5)})};
 const dx=g.x1-g.x0,dz=g.z1-g.z0,L=Math.hypot(dx,dz)||.01,ang=Math.atan2(dz,dx);
 if(g.kind==='rope'){const n=Math.max(1,Math.round(L/2.4));
  for(let i=0;i<=n;i++){const t=i/n,p=new T.Mesh(new T.CylinderGeometry(.045,.06,1,10),G.gm.post);p.position.set(g.x0+dx*t,g.y+.5,g.z0+dz*t);grp.add(p);const b=new T.Mesh(new T.CylinderGeometry(.16,.18,.04,14),G.gm.post);b.position.set(p.position.x,g.y+.02,p.position.z);grp.add(b)}
  for(let i=0;i<n;i++){const t=(i+.5)/n,seg=L/n,r=new T.Mesh(new T.BoxGeometry(seg,.05,.05),G.gm.rope);r.position.set(g.x0+dx*t,g.y+.86,g.z0+dz*t);r.rotation.y=-ang;grp.add(r)}}
 else if(g.kind==='glass'){
  // a pair of glass doors in chrome frames with push bars, sized to the doorway (the revolving door has its own drum)
  if(g.label==='Revolving door')return grp;
  const f=fitGate(g);let w=L,h=2.6,cx=(g.x0+g.x1)/2,cz=(g.z0+g.z1)/2,y=g.y,a=-ang;if(f){w=f.w-.02;h=f.h-.01;cx=f.cx;cz=f.cz;y=f.y;a=f.o==='h'?0:-Math.PI/2}
  G.gm.glass=G.gm.glass||new T.MeshStandardMaterial({color:0x9fb8c8,transparent:true,opacity:.28,roughness:.05,metalness:.2,depthWrite:false});
  const fr=(bw,bh,px,py)=>{const m=new T.Mesh(new T.BoxGeometry(bw,bh,.06),G.gm.post);m.position.set(px,py,0);return m},leaf=new T.Group();leaf.position.set(cx,y,cz);leaf.rotation.y=a;
  for(const s of[-1,1]){const lx=s*w/4,lw=w/2-.02;leaf.add(fr(.06,h,lx-lw/2+.03,h/2),fr(.06,h,lx+lw/2-.03,h/2),fr(lw,.06,lx,h-.03),fr(lw,.12,lx,.06));
   const gl=new T.Mesh(new T.BoxGeometry(lw-.1,h-.16,.02),G.gm.glass);gl.position.set(lx,h/2+.03,0);leaf.add(gl);const bar=fr(lw*.6,.05,lx,1.05);bar.position.z=.06;leaf.add(bar)}
  grp.add(leaf)}
 else{const f=fitGate(g);let w=L,h=g.kind==='card'||g.label==='The bar'?2.6:2.4,cx=(g.x0+g.x1)/2,cz=(g.z0+g.z1)/2,y=g.y,a=-ang;
  if(f){w=f.w-.02;h=f.h-.01;cx=f.cx;cz=f.cz;y=f.y;a=f.o==='h'?0:-Math.PI/2}
  const d=new T.Mesh(new T.BoxGeometry(w,h,.07),G.gm.door);d.position.set(cx,y+h/2,cz);d.rotation.y=a;grp.add(d);
  if(g.kind==='card'){const r=new T.Mesh(new T.BoxGeometry(.12,.18,.14),G.gm.red);r.position.set(cx,y+1.25,cz);r.rotation.y=a;r.translateX(w/2+.22);grp.add(r)}}
 return grp}
/* find the doorway a gate stands in (from the level's door list) so the door fills it exactly, centred in the wall */
function fitGate(g){
 const L=DOORS[g.reg]||[],hz=Math.abs(g.z1-g.z0)<.05,o=hz?'h':'v',at=hz?g.z0:g.x0,c0=hz?Math.min(g.x0,g.x1):Math.min(g.z0,g.z1),c1=hz?Math.max(g.x0,g.x1):Math.max(g.z0,g.z1);
 let best=null,bs=1e9;for(const d of L){if(d.o!==o||Math.abs(d.at-at)>1.2||Math.abs(d.y-g.y)>.6)continue;if(d.c<c0-.6||d.c>c1+.6)continue;const sc=Math.abs(d.at-at)+Math.abs(d.c-(c0+c1)/2);if(sc<bs){bs=sc;best=d}}
 if(!best)return null;const d=best,H=G.regions[g.reg].hash,yy=d.y+1;
 const solid=(x,z)=>{for(const q of H[Math.floor(x/4)+','+Math.floor(z/4)]||[])if(x>q[0]&&x<q[2]&&z>q[1]&&z<q[3]&&yy>q[4]&&yy<q[5])return true;return false};
 const j=d.c-d.w/2-.05,side=o==='h'?(solid(j,d.at+.1)?1:solid(j,d.at-.1)?-1:0):(solid(d.at+.1,j)?1:solid(d.at-.1,j)?-1:0);
 const p=d.at+side*.1;return{o,w:d.w,h:d.h,y:d.y,cx:o==='h'?d.c:p,cz:o==='h'?p:d.c};
}
function tapeTex(){if(G.tape)return G.tape;const c=document.createElement('canvas');c.width=128;c.height=256;const x=c.getContext('2d');for(let i=0;i<3;i++){x.save();x.translate(64,70+i*50);x.rotate(i%2?.18:-.18);x.fillStyle='#ffd166';x.fillRect(-64,-12,128,24);x.fillStyle='#1b1026';x.font='bold 15px sans-serif';x.textAlign='center';x.fillText('STAFF ONLY',0,6);x.restore()}const t=new G.T.CanvasTexture(c);t.colorSpace=G.T.SRGBColorSpace;return G.tape=t}
/* ---------- maps ---------- */
function levelOf(reg,y){const L=LEVELS[reg]||[[0,'']];let b=L[0][0];for(const l of L)if(l[0]<=y+1.2)b=l[0];return b}
/* the static part of the minimap (rooms + walls) is drawn once per region/level and blitted */
const MAPC={};
function mapLayer(reg,lv,sc){
 const k=reg+'|'+lv+'|'+sc;if(MAPC[k])return MAPC[k];
 const rs=(MAPR[reg]||[]).filter(r=>Math.abs(r.y-lv)<.6||(r.n==='Stairs'||r.n==='Stairwell'));
 let a=1e9,b=1e9,cc=-1e9,d=-1e9;for(const r of rs){a=Math.min(a,r.x0);b=Math.min(b,r.z0);cc=Math.max(cc,r.x1);d=Math.max(d,r.z1)}a-=4;b-=4;cc+=4;d+=4;
 const c=document.createElement('canvas');c.width=Math.ceil((cc-a)*sc);c.height=Math.ceil((d-b)*sc);const x=c.getContext('2d');
 const X=v=>(v-a)*sc,Z=v=>(v-b)*sc;
 for(const r of rs){x.fillStyle=r.c;x.fillRect(X(r.x0),Z(r.z0),(r.x1-r.x0)*sc,(r.z1-r.z0)*sc)}
 x.strokeStyle='#f6eefc';x.lineWidth=sc*.55;x.lineCap='round';x.beginPath();for(const w of G.walls[reg]||[]){if(w[4]>lv+1.2||w[5]<lv+1.2)continue;x.moveTo(X(w[0]),Z(w[1]));x.lineTo(X(w[2]),Z(w[3]))}x.stroke();
 return MAPC[k]={c,x0:a,z0:b};
}
function drawMapCanvas(c,reg,o){
 const x=c.getContext('2d'),Wd=c.width,Hd=c.height;x.clearRect(0,0,Wd,Hd);
 const u=o.mini?Wd/132:1;
 const lv=o.level!==undefined?o.level:levelOf(reg,WD.y);
 const rs=(MAPR[reg]||[]).filter(r=>Math.abs(r.y-lv)<.6||(r.n==='Stairs'||r.n==='Stairwell'));
 let sc,ox,oz;
 if(o.mini){sc=o.sc*u;ox=WD.x;oz=WD.z}else if(o.view){sc=o.view.sc;ox=o.view.ox;oz=o.view.oz}else{let a=1e9,b=1e9,cc=-1e9,d=-1e9;for(const r of rs){a=Math.min(a,r.x0);b=Math.min(b,r.z0);cc=Math.max(cc,r.x1);d=Math.max(d,r.z1)}sc=Math.min((Wd-20)/(cc-a),(Hd-20)/(d-b));ox=(a+cc)/2;oz=(b+d)/2}
 const X=v=>Wd/2+(v-ox)*sc,Z=v=>Hd/2+(v-oz)*sc;
 x.fillStyle=o.mini?'#0a0610cc':'#0a0610';x.fillRect(0,0,Wd,Hd);
 if(o.mini){const L=mapLayer(reg,lv,sc);x.drawImage(L.c,X(L.x0),Z(L.z0))}
 else{for(const r of rs){x.fillStyle=r.c;x.fillRect(X(r.x0),Z(r.z0),(r.x1-r.x0)*sc,(r.z1-r.z0)*sc)}
  x.strokeStyle='#f6eefc';x.lineWidth=1.4;x.beginPath();for(const w of G.walls[reg]||[]){if(w[4]>lv+1.2||w[5]<lv+1.2)continue;x.moveTo(X(w[0]),Z(w[1]));x.lineTo(X(w[2]),Z(w[3]))}x.stroke();
  if(o.labels){const fs=Math.round(clamp(Wd/70,12,22));x.textAlign='center';x.textBaseline='middle';
   for(const A of Object.values(AREAS)){if(A.reg!==reg||A.hide||levelOf(reg,A.sp[3]||0)!==lv)continue;if(A.sub&&!(S.visited&&S.visited[A.k]))continue;const w=(A.r[2]-A.r[0])*sc,h=(A.r[3]-A.r[1])*sc,seen=S.visited&&S.visited[A.k],sel=o.view.sel===A.k;
    if(sel){x.strokeStyle='#8affc1';x.lineWidth=3;x.strokeRect(X(A.r[0]),Z(A.r[1]),w,h);x.fillStyle='#8affc122';x.fillRect(X(A.r[0]),Z(A.r[1]),w,h)}
    const t=seen?A.n:'?',f=Math.min(fs,h*.45);if(f<8)continue;x.font=`bold ${f|0}px Chakra Petch, sans-serif`;const tw=x.measureText(t).width;if(tw>w*.96&&seen&&!sel)continue;
    const cx=X((A.r[0]+A.r[2])/2),cz=Z((A.r[1]+A.r[3])/2);x.fillStyle='#0a0610bb';x.fillRect(cx-tw/2-4,cz-f*.62,tw+8,f*1.24);x.fillStyle=sel?'#8affc1':seen?'#ffd166':'#bba8cf';x.fillText(t,cx,cz+1)}
   x.textBaseline='alphabetic'}
  else{x.font='bold 12px Chakra Petch, sans-serif';x.textAlign='center';for(const r of rs){if(!r.n)continue;const A=Object.values(AREAS).find(A=>A.reg===reg&&Math.abs((A.r[0]+A.r[2])/2-(r.x0+r.x1)/2)<1.5&&Math.abs((A.r[1]+A.r[3])/2-(r.z0+r.z1)/2)<1.5&&lv>=A.y0&&lv<=A.y1);const seen=A&&S.visited&&S.visited[A.k];x.fillStyle=seen?'#ffd166':'#bba8cf';const w=(r.x1-r.x0)*sc;if(w>34)x.fillText(seen?r.n:'?',X((r.x0+r.x1)/2),Z((r.z0+r.z1)/2)+4)}}}
 const news=S.ch>0?newScenes():[];
 const onLv=y=>levelOf(reg,y||0)===lv;
 for(const c of visibleChars()){if(c.reg!==reg||!onLv(c.y))continue;const nw=news.some(n=>n.id===c.id);x.fillStyle=nw?'#ffd166':(CH[c.id].col||'#fff');x.beginPath();x.arc(X(c.x),Z(c.z),(nw?(o.mini?4:5):(o.mini?2.6:3.5))*u,0,7);x.fill();if(nw){x.strokeStyle='#1b1026';x.lineWidth=1.5*u;x.stroke()}}
 if(o.mini)for(const n of WD.npcs)if(n.reg===reg&&onLv(n.y)){x.fillStyle='#bba8cf88';x.fillRect(X(n.x)-u,Z(n.z)-u,2*u,2*u)}
 const ob=objective();
 if(ob&&ob.reg===reg){let px=X(ob.x),pz=Z(ob.z);if(o.mini){const cx=Wd/2,cz=Hd/2,dx=px-cx,dz=pz-cz,m=Math.hypot(dx,dz),lim=Wd/2-11*u;if(m>lim){px=cx+dx/m*lim;pz=cz+dz/m*lim}}star(x,px,pz,(o.mini?6:8)*u);if(!onLv(ob.y)){x.fillStyle='#8affc1';x.font=`bold ${11*u}px sans-serif`;x.textAlign='center';x.fillText(ob.y>lv?'▲':'▼',px,pz-9*u)}}
 if(S.wp&&S.wp.reg===reg){let px=X(S.wp.x),pz=Z(S.wp.z);if(o.mini){const cx=Wd/2,cz=Hd/2,dx=px-cx,dz=pz-cz,m=Math.hypot(dx,dz),lim=Wd/2-11*u;if(m>lim){px=cx+dx/m*lim;pz=cz+dz/m*lim}}const r=(o.mini?5:8)*u;x.fillStyle='#ffd166';x.beginPath();x.arc(px,pz-r,r*.75,Math.PI,0);x.lineTo(px,pz+r*.4);x.closePath();x.fill();x.strokeStyle='#1b1026';x.lineWidth=1.2*u;x.stroke();if(levelOf(reg,S.wp.y||0)!==lv){x.fillStyle='#ffd166';x.font=`bold ${10*u}px sans-serif`;x.textAlign='center';x.fillText((S.wp.y||0)>lv?'▲':'▼',px,pz-r*2)}}
 if(reg===WD.reg&&levelOf(reg,WD.y)===lv){const px=X(WD.x),pz=Z(WD.z);x.save();x.translate(px,pz);x.scale(u,u);x.rotate(-WD.yaw);x.fillStyle='#ff5d73';x.beginPath();x.moveTo(0,-8);x.lineTo(5.5,6);x.lineTo(0,3);x.lineTo(-5.5,6);x.closePath();x.fill();x.strokeStyle='#fff';x.lineWidth=1.2;x.stroke();x.restore()}
 if(o.mini){x.fillStyle='#f6eefc';x.font=`bold ${10*u}px sans-serif`;x.textAlign='center';x.fillText('N',Wd/2,11*u)}else if(o.view){x.fillStyle='#f6eefc';x.font='bold 18px sans-serif';x.textAlign='center';x.fillText('N ↑',30,26)}
}
function star(x,cx,cy,r){x.fillStyle='#8affc1';x.beginPath();for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,rr=i%2?r*.45:r;x.lineTo(cx+Math.cos(a)*rr,cy+Math.sin(a)*rr)}x.closePath();x.fill();x.strokeStyle='#1b1026';x.lineWidth=1.2;x.stroke()}
/* ---------- main loop ---------- */
let mmT=0,icT=0,perfAcc=0,perfN=0,perfT=0;
function loop(t){
 requestAnimationFrame(loop);
 const dt=Math.min(.05,(t-(WD.t||t))/1000);WD.t=t;
 if(typeof audioTick==='function')audioTick(dt);
 // the place you're in needs its lightmaps on the GPU (loaded from cache, or baked on a first visit)
 if(S&&S.inWorld&&G.ok&&G.baked){const R=G.regions[WD.reg];if(R&&!R.lmTex&&!R.lmSkip){if(!G.lmBusy)regionNeed(WD.reg,true);else lmUI(true,G.lmBusy,null,G.bakeP)}}
 vcShow(vcActive());
 // the title screen: the convention, on its own, through a slow camera
 if(TT.on&&G.ok&&$('title').classList.contains('on')){const R=G.regions.con;if(G.baking||$('pgx'))return;if(G.baked&&R&&!R.lmTex&&!R.lmSkip){$('tfade').classList.add('on');if(!G.lmBusy)titleNeed();return}
  if($('gl').style.display==='none')$('gl').style.display='block';G.skip=(G.skip||0)+1;if(!window.__nr)render(dt);if(typeof adaptRes==='function')adaptRes(dt);return}
 if(!S||!S.inWorld||S.ending){vcShow(vcActive());return}
 if(!G.ok||G.baking||$('gl').style.display==='none')return;
 const live=worldLive();
 if(live)update(dt);
 // behind a conversation the world is blurred: a few frames a second is plenty
 const behind=!live&&!cutOn()&&($('vn').classList.contains('on')||$('ov').classList.contains('on'));
 G.skip=(G.skip||0)+1;
 if(!window.__nr&&(!behind||G.skip%4===0||G.forceFrame)){G.forceFrame=false;render(behind?dt*4:dt)}
 if(live){adaptRes(dt);}
 $('mini').style.display=S.unl.map?'block':'none';
 vcShow(vcActive());
 $('lockHint').style.display=WD.noLock&&live&&!WD.touch?'block':'none';
 // after an Esc the mouse is free until the next key or click: the dot in the middle dims to say so, no prompt
 $('cross').classList.toggle('idle',live&&!WD.touch&&!WD.noLock&&!locked());
 if(live){if(t-icT>66){icT=t;interactCheck()}if(t-mmT>90&&S.unl.map){mmT=t;drawMapCanvas($('mini'),WD.reg,{mini:1,sc:3})}}
}
/* drop render resolution when frames get slow, raise it again when there's headroom */
function adaptRes(dt){if(window.__noAdapt)return;perfAcc+=dt;perfN++;perfT+=dt;if(perfT<1.2)return;const avg=perfAcc/perfN;perfAcc=perfN=perfT=0;
 if(avg>1/42&&G.dprK>.6){G.dprK=Math.max(.6,G.dprK-.12)}else if(avg<1/57&&G.dprK<1){G.dprK=Math.min(1,G.dprK+.06)}}
function initWorld(cb){
 if(G.inited){if(cb){if(G.ready)cb();else{(G.waiters=G.waiters||[]).push(cb);loadUI(true)}}return G.ok}
 G.inited=true;G.waiters=cb?[cb]:[];
 try{
  if(!glInit($('gl')))return finishInit(),false;
  paintTextures();buildLevels();placeWorld();finishRegions();vfxBuild();
  setupInput();requestAnimationFrame(loop);
 }catch(e){console.error(e);G.ok=false;finishInit();return false}
 // lighting is baked per place, the first time you go there (and cached after): warm up the place the latest save is in
 G.baked=bakeOK();setQuality(G.q);finishInit();
 let pre=$('title').classList.contains('on')&&!window.__test?'con':'home';if(pre==='home')try{const a=readSlot('auto');if(a&&a.pos&&G.regions[a.pos[0]]&&(a.mapv||0)>=3)pre=a.pos[0];else if(a&&a.ch>=1)pre='con'}catch(e){}
 if(!/[?&]nopre\b/.test(location.search))setTimeout(()=>{if(!G.lmBusy&&!(S&&S.inWorld))regionNeed(pre,false)},50);
 return G.ok;
}
function finishInit(){G.ready=true;loadUI(false);const w=G.waiters||[];G.waiters=[];for(const f of w)f()}
function loadUI(on){const e=$('loading');if(e)e.classList.toggle('on',!!on&&!G.ready)}
try{document.fonts&&document.fonts.load('20px VT323')}catch(e){}
