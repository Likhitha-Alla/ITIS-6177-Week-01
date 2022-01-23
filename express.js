var express = require('express')
var app = express()
var a = 5000
app.get('/',function(req,res) {
    res.send('Creating a simple Nodejs server sing express..')
})
app.listen(a,function(){
    console.log('Server is running..' +a)
})
