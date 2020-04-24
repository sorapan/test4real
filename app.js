const express = require('express')
const app = express()
var http = http = require('http').createServer(app)

app.get('/',(req,res)=>{
    res.send('Yo MATAFAKA')
})

http.listen(80)