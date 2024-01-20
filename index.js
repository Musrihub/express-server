const fs = require('fs');
const http = require('http');
const url = require('url');


///////////////////////////
//File
//////////////////////////
//blocking, sync
// const readFile = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(readFile);

// const writeFile = `this is i know about avocado:${readFile}.\ncreated on ${Date.now()}`;
// fs.writeFileSync('./final/txt/output.txt', writeFile);
// console.log('file written');

// //non-blocking, asnc

// fs.readFile('./txt/start.txt', 'utf-8', (err,data1) =>{
//     if(err) return console.log('error');
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err,data2) =>{
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err,data3) =>{
//     console.log(data3);
//     fs.writeFile('./final/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err =>{
//         console.log('The file has been written');
//     })
//         })
//     });
// })

////////SERVER

const server = http.createServer((req, res) =>{
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview'){
    res.end('this is an OVERVIEW');
    }
    else if(pathName === '/product'){
        res.end('this is a product');
    }
    else{
        res.end('page not found');
    }
})
    server.listen(8000, '127.0.0.1', () =>{
        console.log('Listening to requests on port 8000')
    })