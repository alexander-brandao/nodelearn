
//chama o framework para dentro de um contante
const express = require("express");

// (cria uma instancia) coloca a funcao express dentro de uma constante
const app = express();

//criando rotas do backend

// funcao de call back que printa uma mensagem no site
app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app")
})

//criando a pagina "sobre" atravez de uma funcao de call back
app.get("/sobre",function(req, res){
    res.send("bem vindo ao sobre")
} )

// rota com parametros
app.get('/ola/:nome/:cargo', function(req, res){
    res.send("<h1>vamos conseguir essa vaga " + req.params.nome +"</h1> <br>" +
    "<h2> Seu cargo: " + req.params.cargo + "</h2>")
    

})

//rodando o servidor

// chama a funcao "listen" que abre um servidor na porta 8081 e chamando uma funcao de call back
app.listen(8081, function(){
    console.log("servidor rodando na url http://localhost:8081");
})
