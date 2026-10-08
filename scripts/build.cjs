'use strict';const fs=require('node:fs');const path=require('node:path');
const root=path.resolve(__dirname,'..'),dist=path.resolve(root,'dist');
if(path.dirname(dist)!==root||path.basename(dist)!=='dist')throw Error('Invalid build output directory');
fs.rmSync(dist,{recursive:true,force:true});fs.mkdirSync(dist,{recursive:true});
for(const item of ['index.html','downloads.html','wiki.html','styles.css','site.js','assets','data','robots.txt','sitemap.xml']){const source=path.join(root,item);if(fs.existsSync(source))fs.cpSync(source,path.join(dist,item),{recursive:true});}console.log('Built static website in dist/ (website assets only).');
