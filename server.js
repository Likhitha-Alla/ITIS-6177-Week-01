var a = require('http')
var b = 5000
const server = a.createServer(function(req,res){
res.write('Creating a simple Nodejs server..')
res.end()
})

server.listen(b,function(error){
    if(error)
    {
        console.log('Error '+ error)
    }
    else{
        console.log('Server is running..' +b)
    }
})

