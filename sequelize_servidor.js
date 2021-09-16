const Sequelize = require('sequelize')

// criando um objeto para guardar um banco de dados
// prametros test:nome do banco, root: nome padrao usuario, s, objeto JSON
const sequelize = new Sequelize('test', 'root', 't', {
   //qual maquina esta o servidor? - localhost = meu proprio computador
    host: "localhost",
    // dialect: linguagem de database que o sequelize vai utilizar "mysql"
    dialect: 'mysql'
})

//programacao assincrona 
sequelize.authenticate().then(function(){
    console.log("concectado com sucesso!")
}).catch(function(erro){
    console.log("falha ao se conectar: " + erro)
})


