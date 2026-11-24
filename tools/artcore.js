/* Character-creator SVG exports → game art. Runs in a browser: tools/import.html (drag and drop) and
   tools/artprep.js (the command line, through a headless browser) both use it.
   Input: { n: svgText, h: svgText, ... } (n, the neutral, is required). Every export must come from the same creator
   canvas, feet on the same line, so heights carry over. Output: the full body once (from the neutral) and, for each
   other expression, only the rectangle of the face that changes, as WebP data URLs. */
const ARTEXP={n:'neutral',h:'happy',o:'surprised',s:'half-lidded',b:'worried / blush',a:'angry',d:'teary'};
// the creator's own file names, in the order the expressions were made
function artGuessExp(name){const m=name.match(/Default_Expression|Expression_(\d+)/i);if(!m)return null;if(!m[1])return'n';return{2:'h',3:'o',4:'s',5:'b',6:'a',7:'d'}[m[1]]||null}
function artGuessId(name){const m=name.match(/^(?:[0-9a-f]{8}-)?([a-z0-9]+)-/i);return m?m[1].toLowerCase():null}
async function artProcess(svgs,progress){
 const W=2560,H=5120,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d',{willReadFrequently:true});
 const draw=async svg=>{const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));const img=new Image();img.src=url;await img.decode();x.clearRect(0,0,W,H);x.drawImage(img,0,0,W,H);URL.revokeObjectURL(url)};
 const say=t=>progress&&progress(t);
 say('Reading the neutral');await draw(svgs.n);const N=x.getImageData(0,0,W,H).data;
 let x0=W,y0=H,x1=0,y1=0;for(let y=0;y<H;y++)for(let i=0;i<W;i++){if(N[(y*W+i)*4+3]>8){if(i<x0)x0=i;if(i>x1)x1=i;if(y<y0)y0=y;if(y>y1)y1=y}}
 if(x1<x0)throw new Error('The neutral is empty');
 const m=16,body=[Math.max(0,x0-m),Math.max(0,y0-m),0,0];body[2]=Math.min(W,x1+m)-body[0];body[3]=Math.min(H,y1+m)-body[1];
 const crop=r=>{const o=document.createElement('canvas');o.width=r[2];o.height=r[3];o.getContext('2d').drawImage(c,r[0],r[1],r[2],r[3],0,0,r[2],r[3]);return o.toDataURL('image/webp',.9)};
 const img=crop(body);
 // where the face changes: compare every other expression with the neutral
 let f0=W,g0=H,f1=0,g1=0;const ks=Object.keys(svgs).filter(k=>k!=='n'&&svgs[k]);
 for(const k of ks){say('Comparing '+ARTEXP[k]);await draw(svgs[k]);const D=x.getImageData(x0,y0,x1-x0+1,y1-y0+1).data,w=x1-x0+1;
  for(let y=y0;y<=y1;y++)for(let i=x0;i<=x1;i++){const a=((y-y0)*w+(i-x0))*4,b=(y*W+i)*4;if(Math.abs(D[a]-N[b])+Math.abs(D[a+1]-N[b+1])+Math.abs(D[a+2]-N[b+2])+Math.abs(D[a+3]-N[b+3])>12){if(i<f0)f0=i;if(i>f1)f1=i;if(y<g0)g0=y;if(y>g1)g1=y}}}
 const fm=12,face=f1>f0?[f0-fm,g0-fm,f1-f0+2*fm,g1-g0+2*fm]:null,ex={};
 if(face)for(const k of ks){say('Cutting out '+ARTEXP[k]);await draw(svgs[k]);ex[k]=crop(face)}
 return{body,face,top:y0,foot:y1,cx:Math.round((x0+x1)/2),img,ex}}
function artFile(id,out){const meta={body:out.body,face:out.face,top:out.top,foot:out.foot,cx:out.cx};
 return`/* ${id}: generated from character-creator exports (tools/import.html or tools/artprep.js). Do not edit by hand. */\n(window.ART=window.ART||{})[${JSON.stringify(id)}]=Object.assign(${JSON.stringify(meta)},{img:${JSON.stringify(out.img)},ex:${JSON.stringify(out.ex)}});\n`}
// Ellie's neutral, head to toe, in creator pixels: 165 cm. Used to show heights in centimetres.
const ARTCM={px:3078,cm:165};
