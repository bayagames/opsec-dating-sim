import glob
t=open('src/template.html').read()
js='\n'.join(open(f).read() for f in sorted(glob.glob('src/*.js')))
# character art made by tools/artprep.js: one script per look, loaded before the game
art=''.join(f'<script src="{f}"></script>\n' for f in sorted(glob.glob('art/chars/*.js')))
t=t.replace('<script src="vendor/three.bundle.js"></script>\n','<script src="vendor/three.bundle.js"></script>\n'+art)
open('index.html','w').write(t.replace('/*JS*/',js))
open('/tmp/all.js','w').write('{'+js+'}')
