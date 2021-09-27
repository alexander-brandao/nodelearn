
//chama o framework para dentro de um contante
const express = require("express");

// (cria uma instancia) coloca a funcao express dentro de uma constante
const app = express();

// constante que recebe o handlebars
const handlebars = require('express-handlebars')

//criando rotas do backend



//rodando o servidor

// chama a funcao "listen" que abre um servidor na porta 8081 e chamando uma funcao de call back
app.listen(8081, function(){
    console.log("servidor rodando na url http://localhost:8081");
})
