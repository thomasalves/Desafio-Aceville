
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'mysql669.umbler.com',
  port     : 41890,
  user     : 'thomas',
  password : 'thomas15',
  database : 'palavras-chave',

});


function createTable(conn){

    const sql = "CREATE TABLE IF NOT EXISTS autor (\n"+
                "ID int NOT NULL AUTO_INCREMENT,\n"+
                "nome varchar(150) NOT NULL,\n"+
                "PRIMARY KEY (ID)\n"+
                ");";

    const sql2 = "CREATE TABLE IF NOT EXISTS livros (\n"+
                 "ID int NOT NULL AUTO_INCREMENT,\n"+
                 "titulo varchar(150) NOT NULL,\n"+
                 "author INT UNSIGNED NOT NULL,\n"+
                 "PRIMARY KEY (ID)\n"+
                 ");";

    conn.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('criou a tabela!');
        addRows(conn)
    });

    conn.query(sql2, function (error, results, fields){
        if(error) return console.log(error);
        console.log('criou a tabela!');
        addRows2(conn)
    });
}

    connection.connect(function(err){
        if(err) return console.log(err);
        console.log('conectou!');
        createTable(connection);
    })

    function addRows(conn){
        const sql = "INSERT INTO autor(id, nome) VALUES ?";
        const values = [
            [1, 'Thomas H. Cormen'],
            [2, 'Andrew S. Tanenbaum'],
            [3, 'Rafael Santos'],
            [4, 'Rony Meisler'],
            [5, 'J.K.Rowling'],
            [6, 'Mark Williams']
            ];

    conn.query(sql, [values], function (error, results, fields){
        if(error) return console.log(error);
        console.log('adicionou registros!');
        conn.end();//fecha a conexão
    });
}

    function addRows2(conn){
        const sql2 = "INSERT INTO livros(id, titulo, author) VALUES ?";
        const values = [
            [1, 'Introduction to Algorithms', 1],
            [2, 'Algorithms Unlocked', 1],
            [3, 'Introdução À Programação Orientada A Objetos Usando Java', 3],
            [4, 'Distributed Systems: Principles and Paradigms', 2],
            [5, 'Structured Computer Organization', 2],
            [6, 'Rebeldes têm Asas', 4],
            [7, 'Herry Potter', 5],
            [8, 'Atenção Plena', 6]
            ];

    conn.query(sql2, [values], function (error, results, fields){
        if(error) return console.log(error);
        console.log('adicionou registros!');
        conn.end();//fecha a conexão
    });

}


