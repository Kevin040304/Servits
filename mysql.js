const express = require("express");

const mysql= require("mysql");

const app = express();


let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'demo',
    password: ''
})

app.set ("view engine", "ejs");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extend:false}));

app.get("/", function(req,res){
    res.render("registro");
})

app.post("/validar", function(req,res){
    const datos = req.body;

    let nombre = datos.nombre;
    let contrasena = datos.contrasena;
    let confirmarContrasena = datos.confirmarContrasena;

    let registrar = "INSERT INTO users(username, password)VALUES ('"+nombre+"','"+contrasena+"')";

    conexion.query(registrar, function(error){
        if(error){
            throw error;
        }else{
            console.log("datos almacenados correctamente");

        }
    });

    

    console.log(datos);
});


app.listen(3000, function(){
    console.log("Servidor creado http://localhost:3000");
})
