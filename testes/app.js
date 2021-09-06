var http = require('http')

http.createServer(function(req,res){
    res.end("iae parcero")
}).listen(8081)

console.log("o Servidor esta rodando")
