/* ============ CUTSCENES ============
   For the big moments the camera leaves your eyes and goes to where the action is. The world isn't blurred, the
   dialogue box sits in the middle without a portrait (you can see who's talking), and the people in the scene stand on
   their marks. A shot is a little piece of camera work: a list of moves (dolly from one pose to another, an orbit around
   a point, a push in), eased, then a slow breathing hold. While people talk the camera covers them: when the speaker
   changes it cuts to a close-up of whoever's talking, from alternating sides, and back to the wide shot for narration.
   In a script:
     [cut hallA_stage victor marge]   frame a shot; the names stand on the shot's marks, in order
     [cut pan plaza]                  an establishing shot of an area (authored, or worked out from the room itself):
                                      it holds for the narration and gets out of the way when somebody speaks
     [cut wide] / [cut close victor]  force the wide shot, or a close-up on someone in the shot
     [cut off]                        back to your own eyes
   A shot ends by itself when its conversation does. Outside the 3D world it does nothing.
   The title screen uses the same camera (titleShots) for its slow tour of the convention. */
const SY_A=1.6;
// moves: {eye,at,to:{eye,at},dur,fov,fov1,ease} or {orbit:[x,y,z],r,r1,h,h1,a0,a1,dur,fov}
const CUTS={
 // Hall A from the middle of the floor seats: the podium, the LED wall behind; a slow push towards the stage
 hallA_stage:{reg:'con',marks:[[-5,-126.6,SY_A],[-10,-124,SY_A],[0,-124,SY_A],[4.5,-123.5,SY_A]],
  moves:[{eye:[-5,4.4,-108],at:[-5,3.2,-125],to:{eye:[-5,3.6,-114],at:[-5,2.9,-125]},dur:7,fov:46,fov1:42}]},
 // closer on the podium, a little to the side, drifting round
 hallA_podium:{reg:'con',marks:[[-5,-126.6,SY_A],[-8.6,-125.4,SY_A],[-2,-124.6,SY_A],[-11,-124,SY_A]],
  moves:[{eye:[1.5,3.4,-118],at:[-5.2,3.3,-126.4],to:{eye:[-1.6,3.5,-119.6],at:[-5.4,3.3,-126.4]},dur:9,fov:40,fov1:36}]},
 // the front row, seen from the stage: someone standing up out of the seats
 hallA_front:{reg:'con',marks:[[-5,-109.5,0],[-8,-109.5,0],[-2,-109.5,0],[1,-109.5,0]],
  moves:[{eye:[-9,3.4,-118],at:[-5,1.4,-108],to:{eye:[-3,3,-117],at:[-4.5,1.5,-108]},dur:8,fov:44}]},
 // the stage from the side wing, tracking along it
 hallA_wing:{reg:'con',marks:[[-6,-127.2,SY_A],[-6.5,-123.2,SY_A],[-9,-125.6,SY_A],[-3.5,-121.2,SY_A]],
  moves:[{eye:[-21,3.6,-119],at:[-6,2.9,-124.5],to:{eye:[-18,3.2,-123],at:[-6,2.8,-124.8]},dur:8,fov:44}]},
 // the whole arena from the back of the stands, craning down
 hallA_crane:{reg:'con',marks:[[-5,-126.6,SY_A],[-10,-124,SY_A],[0,-124,SY_A],[4.5,-123.5,SY_A]],
  moves:[{eye:[-5,11,-80],at:[-5,3,-122],to:{eye:[-5,6,-96],at:[-5,2.6,-124]},dur:10,fov:50,fov1:44,ease:'io'}]}
};
/* establishing shots, by area: a camera move across the room while someone narrates. Authored where the room is
   awkward (columns, low ceilings); anywhere else panFor() works one out from the room's shape */
const PANS={
 plaza:[{eye:[-60,9,128],at:[-86,6,66],to:{eye:[-108,6,118],at:[-88,5,64]},dur:16,fov:52}],
 vestibule:[{eye:[-88,2.4,92],at:[-88,2.4,62],to:{eye:[-88,2,76],at:[-88,2.2,60]},dur:24,fov:50}],
 foyer:[{eye:[-104,7.5,52],at:[-80,3,-10],to:{eye:[-70,5,48],at:[-90,2.5,-14]},dur:16,fov:54}],
 courtyard:[{orbit:[-5,2,-15],r:28,h:9,h1:6,a0:-.6,a1:.4,dur:18,fov:50}],
 hallA:[{eye:[-13,10.5,-79],at:[-5,3,-124],to:{eye:[3,9,-82],at:[-5,3,-124]},dur:18,fov:50}],
 vendor:[{eye:[60,6,16],at:[100,2,-40],to:{eye:[64,4.5,-48],at:[110,2,4]},dur:18,fov:54}],
 food:[{eye:[-60,4.2,58],at:[-20,1.5,38],to:{eye:[-16,3.6,58],at:[-50,1.5,38]},dur:16,fov:54}],
 skygarden:[{eye:[-60,15,58],at:[-20,11.5,36],to:{eye:[-14,14,58],at:[-50,11.5,36]},dur:16,fov:54}],
 lobby:[{eye:[-178,4.6,56],at:[-210,1.5,10],to:{eye:[-220,4,54],at:[-190,1.5,4]},dur:16,fov:54}],
 garden:[{eye:[-114,6,56],at:[-150,1.5,10],to:{eye:[-170,5,52],at:[-130,1.5,6]},dur:16,fov:54}],
 bar:[{eye:[-131,3,-28],at:[-160,1.4,-56],to:{eye:[-170,2.8,-28],at:[-140,1.4,-58]},dur:14,fov:54}],
 ballroom:[{eye:[-146,9,-27],at:[-168,6,-58],to:{eye:[-172,8.5,-28],at:[-150,6,-60]},dur:14,fov:56}],
 conroof:[{orbit:[95,17,-17],r:34,h:24,h1:20,a0:2.2,a1:3.2,dur:18,fov:52}],
 ringS:[{eye:[-60,3,27],at:[50,2,27],to:{eye:[20,2.6,27],at:[50,2,27]},dur:14,fov:50}]
};
/* the title screen's tour: wide, slow and mostly empty. Each one is a single move, ~10s, faded between */
const TITLESHOTS=[
 {area:'plaza',slot:4,moves:[{eye:[-40,12,132],at:[-88,8,60],to:{eye:[-130,8,124],at:[-90,6,60]},dur:12,fov:50}]},
 {area:'hallA',slot:3,moves:[{eye:[-5,14,-70],at:[-5,3,-124],to:{eye:[-5,6,-100],at:[-5,3,-126]},dur:12,fov:48}]},
 {area:'foyer',slot:2,moves:[{eye:[-70,9,54],at:[-95,3,-10],to:{eye:[-104,6,40],at:[-80,3,-18]},dur:12,fov:52}]},
 {area:'courtyard',slot:5,moves:[{orbit:[-5,2,-15],r:30,h:10,h1:7,a0:.3,a1:1.2,dur:12,fov:50}]},
 {area:'vendor',slot:2,moves:[{eye:[62,6.5,14],at:[110,2,-40],to:{eye:[70,5,-46],at:[120,2,10]},dur:12,fov:54}]},
 {area:'skygarden',slot:5,moves:[{eye:[-12,16,58],at:[-50,11,34],to:{eye:[-58,14,58],at:[-24,11,34]},dur:12,fov:54}]},
 {area:'conroof',slot:4,moves:[{orbit:[95,17,-17],r:36,h:26,h1:21,a0:3.3,a1:2.4,dur:12,fov:52}]}
];
WD.cut=null;
const cutOn=()=>!!(WD.cut&&document.body.classList.contains('cutscene'));
const EZ={sine:t=>-(Math.cos(Math.PI*t)-1)/2,io:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,out:t=>1-Math.pow(1-t,3),lin:t=>t};
const lerp3=(a,b,t)=>[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t];
/* the pose a list of moves gives at time t (seconds): the last move holds its end pose */
function movesPose(moves,t){let m=moves[0],tt=t;for(let i=0;i<moves.length;i++){m=moves[i];if(tt<=m.dur||i===moves.length-1)break;tt-=m.dur}
 const u=Math.min(1,Math.max(0,tt/(m.dur||1))),e=(EZ[m.ease]||EZ.sine)(u),fov=m.fov1!==undefined?m.fov+(m.fov1-m.fov)*e:(m.fov||50);
 if(m.orbit){const o=m.orbit,a=m.a0+(m.a1-m.a0)*e,r=m.r+((m.r1!==undefined?m.r1:m.r)-m.r)*e,h=m.h+((m.h1!==undefined?m.h1:m.h)-m.h)*e;
  return{eye:[o[0]+Math.sin(a)*r,h,o[2]+Math.cos(a)*r],at:o.slice(),fov}}
 return{eye:lerp3(m.eye,m.to?m.to.eye:m.eye,e),at:lerp3(m.at,m.to?m.to.at:m.at,e),fov}}
const movesDur=ms=>ms.reduce((s,m)=>s+(m.dur||0),0);
/* an establishing move for any room, from its rectangle: along the long side, eye a little above head height, looking
   across the room and ahead. Rooms with authored pans use those */
function panFor(k){if(PANS[k])return PANS[k];const A=AREAS[k];if(!A)return null;const[x0,z0,x1,z1]=A.r,y=(A.sp&&A.sp[3])||0,w=x1-x0,d=z1-z0;
 const h=y+Math.min(3.4,1.9+Math.min(w,d)*.12),cx=(x0+x1)/2,cz=(z0+z1)/2;
 if(w>=d){const zz=z1-Math.min(2.2,d*.18);return[{eye:[x0+w*.18,h,zz],at:[cx,y+1.3,z0+d*.3],to:{eye:[x0+w*.62,h-.2,zz],at:[x1-w*.15,y+1.3,z0+d*.3]},dur:14,fov:56}]}
 const xx=x0+Math.min(2.2,w*.18);return[{eye:[xx,h,z0+d*.18],at:[x0+w*.7,y+1.3,cz],to:{eye:[xx,h-.2,z0+d*.62],at:[x0+w*.7,y+1.3,z1-d*.15]},dur:14,fov:56}]}
function cutSet(a){
 const was=WD.cut;
 if(!a||a==='off'){WD.cut=null}
 else{const p=String(a).trim().split(/\s+/);
  if(p[0]==='wide'){if(WD.cut){WD.cut.sub=null;WD.cut.lock=true;cutBlend(0)}return}
  if(p[0]==='close'){if(WD.cut)cutClose(p[1],true);return}
  let C=CUTS[p[0]];
  if(p[0]==='pan'){const ak=AREAS[p[1]]?p[1]:typeof bgArea==='function'&&bgArea(p[1]||CURBG),A=ak&&AREAS[ak],mv=A&&panFor(ak);C=mv?{reg:A.reg,moves:mv,marks:[],est:1,area:ak}:null}
  if(!C||!(S&&S.inWorld&&G.ok)||C.reg!==WD.reg){WD.cut=null}
  else{const cast={};p.slice(1).forEach((id,i)=>{const m=C.marks[i];if(m&&CH[id])cast[id]={reg:C.reg,x:m[0],z:m[1],y:m[2]}});
   const prev=WD.cut&&WD.cut.pose;
   WD.cut={k:p[0],C,cast,t0:performance.now(),sub:null,side:1,est:!!C.est,ctr:movesPose(C.moves,0).at};
   // shot to shot inside one scene: a quick ease, not a jump
   if(prev&&was&&was.C.reg===C.reg)WD.cut.from={pose:prev,t0:performance.now(),dur:.9}}}
 if(was||WD.cut){if(typeof placeChars==='function')placeChars();G.forceFrame=true}
 cutClass();
}
function cutBlend(d){if(!WD.cut||!WD.cut.pose)return;WD.cut.from=d?{pose:WD.cut.pose,t0:performance.now(),dur:d}:null}
/* a close-up of someone on their mark: from the wide shot's side of them, turned a little to one side or the other,
   framed slightly off-centre, pushing in slowly */
function cutClose(id,force){const c=WD.cut;if(!c||!c.cast[id])return;const m=c.cast[id],base=movesPose(c.C.moves,0).eye;
 let dx=base[0]-m.x,dz=base[2]-m.z;const L=Math.hypot(dx,dz)||1;dx/=L;dz/=L;
 c.side=-c.side;const th=c.side*.42,cs=Math.cos(th),sn=Math.sin(th),ux=dx*cs-dz*sn,uz=dx*sn+dz*cs,px=-uz,pz=ux;
 const hy=m.y+1.86,d0=3.7,d1=3.15,off=c.side*.5;
 c.sub={id,moves:[{eye:[m.x+ux*d0,hy+.1,m.z+uz*d0],at:[m.x+px*off,hy-.3,m.z+pz*off],to:{eye:[m.x+ux*d1,hy+.04,m.z+uz*d1],at:[m.x+px*off,hy-.26,m.z+pz*off]},dur:9,fov:34,fov1:32}],t0:performance.now()};
 c.lock=!!force;c.from=null}
/* called for each line in a cutscene: cover whoever is talking */
function cutSpeaker(who){const c=WD.cut;if(!c||!cutOn())return;c.n=(c.n||0)+1;
 if(c.est){if(who&&CH[who]&&!c.cast[who]){cutSet(null);return}return}
 if(c.lock&&c.sub&&who===c.sub.id)return;c.lock=false;
 if(c.n<2)return;
 if(who&&c.cast[who]&&Object.keys(c.cast).length){if(!c.sub||c.sub.id!==who)cutClose(who)}
 else if(c.sub){c.sub=null}}
/* the cinematic look only while the background really is the world (a black "broadcast" card pauses it) */
function cutClass(){const on=!!WD.cut&&$('bg').classList.contains('bg-dim')&&$('vn').classList.contains('on');document.body.classList.toggle('cutscene',on);document.body.classList.toggle('cutest',on&&!!WD.cut.est);if(on)clearPor()}
/* breathing: a held camera is never quite still */
function camBreath(p,t,k){return{eye:[p.eye[0]+Math.sin(t*.37)*.05*k,p.eye[1]+Math.sin(t*.53+1)*.03*k,p.eye[2]+Math.cos(t*.31)*.05*k],at:[p.at[0]+Math.sin(t*.29+2)*.03*k,p.at[1]+Math.sin(t*.41)*.02*k,p.at[2]],fov:p.fov}}
function camApply(cam,p){cam.position.set(p.eye[0],p.eye[1],p.eye[2]);cam.lookAt(p.at[0],p.at[1],p.at[2]);
 cam.fov=clamp(p.fov/Math.min(1,Math.max(.62,cam.aspect/1.6)),20,90);cam.updateProjectionMatrix();
 WD.cutYaw=Math.atan2(-(p.at[0]-p.eye[0]),-(p.at[2]-p.eye[2]))}
function cutCam(cam){const c=WD.cut,now=performance.now(),src=c.sub||c,t=(now-src.t0)/1000;
 let p=camBreath(movesPose(src.moves||c.C.moves,t),now/1000,c.sub?.6:1);
 if(c.from){const u=Math.min(1,(now-c.from.t0)/1000/c.from.dur),e=EZ.sine(u),f=c.from.pose;p={eye:lerp3(f.eye,p.eye,e),at:lerp3(f.at,p.at,e),fov:f.fov+(p.fov-f.fov)*e};if(u>=1)c.from=null}
 c.pose=p;camApply(cam,p);return p.eye}
/* ---------- the title screen's camera ---------- */
const TT={on:false,i:0,t0:0,cast:{}};
function titleCamOn(on){TT.on=!!on&&G.ok&&!/[?&]nopre\b/.test(location.search);if(TT.on&&!TT.t0){TT.i=Math.floor(Math.random()*TITLESHOTS.length);TT.t0=performance.now();titleShotIn()}if(!TT.on)TT.t0=0}
function titleNeed(){if(typeof regionNeed==='function')regionNeed('con',false)}
function titleShotIn(){const s=TITLESHOTS[TT.i];if(typeof titlePlace==='function')titlePlace(s.area,s.slot);TT.cast={};for(const c of s.cast||[])TT.cast[c[0]]=c.slice(1);WD.reg='con';WD.area=s.area;G.atmoInit=false;const f=$('tfade');if(f){f.classList.remove('on')}}
function titleCam(cam){const s=TITLESHOTS[TT.i],now=performance.now(),t=(now-TT.t0)/1000,D=movesDur(s.moves);
 // a dip to black a moment before the end, then the next place
 const f=$('tfade');if(f)f.classList.toggle('on',t>D-1.1);
 if(t>D){TT.i=(TT.i+1)%TITLESHOTS.length;TT.t0=now;titleShotIn();return titleCam(cam)}
 const p=camBreath(movesPose(s.moves,t),now/1000,.8);camApply(cam,p);WD.x=p.eye[0];WD.z=p.eye[2];return p.eye}
