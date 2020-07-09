
const mysql = require('mysql');
const prompt = require('prompt')

const con = mysql.createConnection({
    host     : 'mysql669.umbler.com',
    port     : 41890,
    user     : 'thomas',
    password : 'thomas15',
    database : 'palavras-chave',
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})
const db = []

con.query(
    'SELECT b.id, b.titulo, a.nome FROM livros as b INNER JOIN autor as a ON b.author = a.id',
    (err, rows) => {
    if (err) throw err

    rows.forEach(row => {
         dados = {
        titulo: row.titulo,
        autor: row.nome
    }
    db.push(dados)

    });
       prompt.get(['autor'], function (err, result) {
           autor = result.autor

        db.forEach(index => {
           // console.log(index.autor)
           if(autor == index.autor){
                console.log('Livros:')
                console.log(index.titulo)
            }
        

        })

    //console.log(db)
    })
})

// PARA ADICIONAR SO DESCOMENTAR
// const newBook = {title: 'Computer Networks', author: 2}

// con.query(
//     'INSERT INTO book SET ?', newBook, (err, res) => {
//     if (err) throw err

//     console.log(`New book added with ID: ${res.insertId}`)
// })



setInterval(function(){
con.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return
    }
    console.log('The connection was finish...')
})

}, 30000);