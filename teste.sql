/* criando tabela no banco de dados */
create table usuarios(
    nome varchar(50),
    email varchar(100),
    idade int
);

/*inserindo dados na tablela usuarios */
Insert into usuarios(nome, email, idade) values(
    "joao",
    "email121@gmail.com",
    9
);

/*pesquisando usuarios com idade maior ou igual a 18 anos */
select *from usuarios where idade >= 18;

/*deletando registros do BD */
delete from usuarios where nome = "fulano";

/*atualizando registros do DB */
update usuarios set nome = "Alexander" where nome = "Alexander Brandao"; 
