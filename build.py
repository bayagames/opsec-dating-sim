import glob
t=open('src/template.html').read()
js='\n'.join(open(f).read() for f in sorted(glob.glob('src/*.js')))
open('index.html','w').write(t.replace('/*JS*/',js))
open('/tmp/all.js','w').write('{'+js+'}')
