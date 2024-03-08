//1 require
const express = require('express')
//2 variable declaration
const app = express()
const PORT = '4003'
//4 middlewares
app.use(express.static('public'))
//5 routes
const Verif = require('./Verif')
app.get('/', Verif, (req,res)=> {
    fs.readFile('./Public/home.html','utf8',(err,data)=> {
        err ? res.send('file not found') && console.error(err) : res.send(data)
    })
})
app.get('/Home', Verif, (req,res)=> {
    fs.readFile('./Public/home.html','utf8',(err,data)=> {
        err ? res.send('file not found') && console.error(err) : res.send(data)
    })
})
app.get('/Services', Verif, (req,res)=> {
    fs.readFile('./Public/services.html','utf8',(err,data)=> {
        err ? res.send('file not found') && console.error(err) : res.send(data)
    })
})
app.get('/Contact', Verif, (req,res)=> {
    fs.readFile('./Public/contact.html','utf8',(err,data)=> {
        err ? res.send('file not found') && console.error(err) : res.send(data)
    })
})
//3 server
app.listen(PORT, (err) => {
    err ?
        console.log(err) :
        console.log(`the server is running in http://localhost:${PORT}`)
})