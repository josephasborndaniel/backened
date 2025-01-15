const fs = require('node:fs');
//create a new file
// fs.writeFile('log.txt','hey this is data',(err)=>{
//     if(err) console.log(err);
//     else
//     console.log('file written');
// })


// //append data/add data to a existing file
// fs.appendFile('log.txt','\n singam varuthu',(err)=>{
//     if(err) console.log(err);
//    else
//     console.log('file written');
// })


// fs.rename('log.txt','data.txt',(err)=>{
//     if(err) console.log(err);
//     else console.log('done');
// })

// fs.copyFile('data.txt','./day 1/datacopy.txt',(err)=>{

//     if(err) console.log(err);
//      else console.log('done');
// })

// fs.unlink('datacopy.txt',(err)=>{
//     if(err) console.log(err);
//     else console.log('done')

// })

fs.rmdir('./day 1',{recursive:true},(err)=>
{
    if(err) console.log(err);
       else console.log('done')
})