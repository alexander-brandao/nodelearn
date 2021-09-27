/* const Sequelize = require('sequelize')

// criando um objeto para guardar um banco de dados
// prametros test:nome do banco, root: nome padrao usuario, s, objeto JSON
const sequelize = new Sequelize('test', 'root', 's', {
   //qual maquina esta o servidor? - localhost = meu proprio computador
    host: "localhost",
    // dialect: linguagem de database que o sequelize vai utilizar "mysql"
    dialect: 'mysql'
})
// models = uma referencia a sua tabela dentro do sequelize

// models para postagem:

const Postagem = sequelize.define('postagens',{
    // o tipo 'titulo' da minha tabela vai ser string
    titulo:{
        type: Sequelize.STRING 
    },
    // o tipo 'conteudo' da minha tabela vai ser TEXT
    conteudo:{
        type: Sequelize.TEXT
    }
})
// criando uma nova postagem
Postagem.create({
    titulo: "titulo teste"
})
//funcao para sincronizar o model com o mysql
// Postagem.sync({force: true})

const Usuarios = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
})
Usuarios.sync({force: true})

*/