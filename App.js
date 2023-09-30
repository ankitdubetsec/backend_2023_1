// const p=require('./num')
// // const fcn=require('./fxn')
// require('./fxn')
// // console.log(fcn)
// // fcn.sum()

// const os=require('os')
// const path=require('path')
// const absolute=path.resolve(__dirname,'content','text.txt')
// console.log(os.uptime())
// console.log(absolute)

// const {readFile,writeFile}=require('fs')

// readFile('./content/text1.txt','utf8',(err,res)=>{
// if(err){
//     return
// }
// const fist=res
// readFile('./content/text2.txt','utf8',(err,res)=>{
//     if(err){
//         return
//     }
//     const sec=res

//     writeFile('./content/text3.txt',`the result is ${fist},${sec}`,(err,res)=>{
//         if(err){
//             return
//         }
//        console.log(res)
//     })})})


const  http=require('http')
const server=http.createServer((req,res)=>{
    // res.write("hello everyone")
    // res.end();

    if(req.url==='/'){

        res.end("this is home page"); 
    }

    if(req.url==='/about'){

        res.end("this is about page"); 
    }

    res.end(`<h1>there is an error</h1>`)
})

server.listen(3000)