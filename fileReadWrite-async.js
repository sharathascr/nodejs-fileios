const {readFile, writeFile} =require('fs');

readFile('./content/firstFile.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result;
    readFile('./content//secondFile.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second=result;
        writeFile('./content/writeFileAsync.txt', `Here is the result ${first} ${second}`, (err, result)=>{
            if(err){
                console.log(err)
                return ;
            }
            console.log(result);
        })
    })
})