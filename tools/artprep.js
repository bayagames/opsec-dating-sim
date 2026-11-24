// Command-line version of tools/import.html: turns character-creator SVG exports into game art.
// Usage: node tools/artprep.js <look id> n=<file.svg> h=<file.svg> o=... s=... b=... a=... d=...
//    or: node tools/artprep.js <look id> <folder>      (files named the creator's way: Default_Expression, Expression_2..7)
//   expressions: n neutral (required), h happy, o surprised, s half-lidded, b worried/blush, a angry, d teary
// Writes art/chars/<id>.js. The game loads it on its own; no rebuild needed.
const {chromium}=require('playwright');const fs=require('fs'),path=require('path');
const [id,...args]=process.argv.slice(2);
if(!id||!args.length){console.log('usage: node tools/artprep.js <id> n=<neutral.svg> h=<happy.svg> ...   or   <id> <folder>');process.exit(1)}
const core=path.join(__dirname,'artcore.js');
const guess=new Function(fs.readFileSync(core,'utf8')+';return artGuessExp')();
const files={};
for(const a of args){if(a.includes('=')){const[k,f]=a.split('=');files[k]=fs.readFileSync(f,'utf8')}
 else if(fs.statSync(a).isDirectory()){for(const f of fs.readdirSync(a))if(/\.svg$/i.test(f)){const k=guess(f);if(k)files[k]=fs.readFileSync(path.join(a,f),'utf8')}}}
if(!files.n){console.log('a neutral is required');process.exit(1)}
(async()=>{const b=await chromium.launch();const pg=await b.newPage();await pg.addScriptTag({path:core});
 const text=await pg.evaluate(async([id,files])=>artFile(id,await artProcess(files)),[id,files]);await b.close();
 const dir=path.join(__dirname,'..','art','chars');fs.mkdirSync(dir,{recursive:true});const out=path.join(dir,id+'.js');fs.writeFileSync(out,text);
 console.log('wrote',path.relative(process.cwd(),out),Math.round(text.length/1024)+' KB','expressions:',Object.keys(files).join(' '))})();
