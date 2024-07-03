const fs=require('fs');
const path = require('path');

const data = fs.readFileSync('file.txt');

console.log(""+ data);

// fs.writeFile('file.txt', "Hello World !", 'utf-8', (err) =>{
//     console.log('file modified');
// })

// fs.mkdir('dir1', (err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log('dir formed');
// })

//rmdir directory
// fs.rmdir('dir1',{recursive : true},(err)=>{
//     console.log("dir1 removed");
// })

// // rename the file.txt new-file.txt
// fs.rename('f1.txt', 'file.txt', (err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log('File has been renamed');
// })

// const p= '/home/tanviagarwal/node-pr/file.txt';
// const path = require("path");
// const dirname= path.dirname(p);

// const extension =path.extname(p);

// console.log(dirname);
// console.log(extension);

//shift file into dir
    //get the path of folder
    //get the path of file
    //copy The file from source to dst
// fs.copyFile('/home/tanviagarwal/node-pr/new-file.txt', '/home/tanviagarwal/node-pr/dir1/new-file.txt', (err)=>{
    // console.log("file copied");
// })
//OR
// fs.unlinkSync('file.txt');
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    if(req.url === '/login') {
        fs.readFile('login.html', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200);
            res.end(data);
        });
    } else {
        fs.readFile('index.html', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200);
            res.end(data);
        });
    }
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}/`);
});