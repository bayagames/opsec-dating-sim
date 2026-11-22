/* ============ CUTSCENES ============
   For a few big moments the camera leaves your eyes and goes to where the action is: the stage, the front row, the
   roof. The world isn't blurred, the dialogue box sits in the middle without a portrait (you can see who's talking),
   and the people in the scene stand on their marks. In a script:
     [cut hallA_stage victor marge]   frame a shot; the names stand on the shot's marks, in order
     [cut off]                        back to your own eyes
   A shot ends by itself when its conversation does. Outside the 3D world it does nothing. */
const SY_A=1.6;
const CUTS={
 // Hall A from the middle of the floor seats: the podium, the LED wall behind
 hallA_stage:{reg:'con',eye:[-5,3.5,-113.5],at:[-5,2.9,-125],marks:[[-5,-126.6,SY_A],[-10,-124,SY_A],[0,-124,SY_A],[4.5,-123.5,SY_A]],drift:.35},
 // closer on the podium, a little to the side, for the keynote
 hallA_podium:{reg:'con',eye:[-1.2,3.3,-119.2],at:[-5.4,2.9,-126.4],marks:[[-5,-126.6,SY_A],[-8.6,-125.4,SY_A],[-2,-124.6,SY_A],[-11,-124,SY_A]],drift:.15},
 // the front row, seen from the stage: someone standing up out of the seats
 hallA_front:{reg:'con',eye:[-5,3.1,-117],at:[-5,1.3,-108],marks:[[-5,-109.5,0],[-8,-109.5,0],[-2,-109.5,0],[1,-109.5,0]],drift:.2},
 // the stage from the side wing, for something happening on stage between people
 hallA_wing:{reg:'con',eye:[-19,3.4,-121.5],at:[-6,2.8,-124.5],marks:[[-6,-127.2,SY_A],[-6.5,-123.2,SY_A],[-9,-125.6,SY_A],[-3.5,-121.2,SY_A]],drift:.2}
};
WD.cut=null;
const cutOn=()=>!!(WD.cut&&document.body.classList.contains('cutscene'));
function cutSet(a){
 const was=WD.cut;
 if(!a||a==='off'){WD.cut=null}
 else{const p=String(a).trim().split(/\s+/),C=CUTS[p[0]];
  if(!C||!(S&&S.inWorld&&G.ok)||C.reg!==WD.reg){WD.cut=null}
  else{const cast={};p.slice(1).forEach((id,i)=>{const m=C.marks[i];if(m&&CH[id])cast[id]={reg:C.reg,x:m[0],z:m[1],y:m[2]}});
   WD.cut={k:p[0],C,cast,t0:performance.now()}}}
 if(was||WD.cut){if(typeof placeChars==='function')placeChars();G.forceFrame=true}
 cutClass();
}
/* the cinematic look only while the background really is the world (a black "broadcast" card pauses it) */
function cutClass(){const on=!!WD.cut&&$('bg').classList.contains('bg-dim')&&$('vn').classList.contains('on');document.body.classList.toggle('cutscene',on);if(on)clearPor()}
/* the camera for the shot: a slow drift sideways so it's alive, never a still frame */
function cutCam(cam){const c=WD.cut.C,t=(performance.now()-WD.cut.t0)/1000,d=c.drift||0;
 const ex=c.eye[0]+Math.sin(t*.12)*d,ey=c.eye[1]+Math.sin(t*.09)*d*.15,ez=c.eye[2]+Math.cos(t*.1)*d*.4;
 cam.position.set(ex,ey,ez);cam.lookAt(c.at[0],c.at[1],c.at[2]);
 WD.cutYaw=Math.atan2(-(c.at[0]-ex),-(c.at[2]-ez));return[ex,ey,ez]}
