
//chama o framework para dentro de um contante
const express = require("express");

// (cria uma instancia) coloca a funcao express dentro de uma constante
const app = express();

// constante que recebe o handlebars(template engine)
const handlebars = require('express-handlebars')


// conexao com o banco de dados mysql

// criando um objeto para guardar um banco de dados
const Sequelize = require('sequelize')
// prametros test:nome do banco, root: nome padrao usuario, s, objeto JSON
const sequelize = new Sequelize('test', 'root', 'alex1230', {
    //qual maquina esta o servidor? - localhost = meu proprio computador
     host: "localhost",
     // dialect: linguagem de database que o sequelize vai utilizar "mysql"
     dialect: 'mysql'
 })

//configuracao do handlebars(template engine)
 app.engine('handlebars', handlebars({defaultLayout: 'main'}))
 app.set('view engine', 'handlebars')

//criando rotas do backend
 app.get('/cad', function(req,res){
        res.render('formulario')
 })


//rodando o servidor

// chama a funcao "listen" que abre um servidor na porta 8081 e chamando uma funcao de call back
app.listen(8081, function(){
    console.log("servidor rodando na url http://localhost:8081");
})
