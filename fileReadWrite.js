const {readFileSync, writeFileSync}=require('fs')

const firstFileContent=readFileSync('./content/firstFile.txt');

const secondFileContent=readFileSync('./content/secondFile.txt');

writeFileSync('./content/writeFile.txt', `Here is the write file ${firstFileContent} ${secondFileContent}`, {flag:'a'})