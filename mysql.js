const mysql = require ('mysql')
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
database: 'demo',
password: ''
})

connection.connect((err)=>{
if(err) throw err
console.log('Conexion establecida exitosamenter')
})


connection.end()