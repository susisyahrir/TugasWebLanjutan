const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mysql = require("mysql");
const app = express()

app.use(logger("dev"))
app.use(express.static(__dirname + "/public")) 
app.use(bodyParser.urlencoded({ extended: true })); 

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
});

connection.connect((err) => {
    if(!err)
        console.log('Database Connected')
    else{
        console.log('Error')
    }
})

app.get('/', (req, res) =>{
    res.send(`<html>
                <body>
                    <form action="/data" method ="post">
                        <input type ="text" name ="nama" placeholder ="nama"/><br><br>
                        <input type ="text" name ="tinggi" placeholder ="tinggi"/><br><br>
                        <input type ="text" name ="berat" placeholder ="berat"/><br><br>
                        <button type ="submit">submit</button>
                    </form>
                </body>
            </html>`)
})


app.post('/data', (req, res) => {
    let nama = req.body.nama
    let tinggi = parseInt(req.body.tinggi)
    let berat = parseInt(req.body.berat)
    let sql = "INSERT INTO datadiri (nama, tinggi, berat) VALUES (?,?,?)"
    connection.query(sql, [nama,tinggi,berat], function (err, result) {
        if (err) throw err;
        else {
            res.statusCode = 200
            res.setHeader("Content-Type", "text/plain")
            // console.log(result);
            console.log(`Row inserted: ${result.affectedRows}`);
            console.log(`Row inserted ID: ${result.insertId}`);
        }})
    res.end()
})


app.get('/data/list', (req, res) => {
    let sql = "SELECT * FROM datadiri"
    connection.query(sql,  (err, result) => {
        if (err){
            console.log("error",err)
        }
        // console.log(result);
        res.send(result)
    })
})

app.get('/data/list/:nama', (req, res) => {
    let nama = req.params.nama

    let sql = "SELECT * FROM datadiri WHERE nama = ?"
    connection.query(sql, nama, (err, result) => {
        if (err){
            console.log("error",err)
        }
        else if(result.length>0){
            console.log(result);
            res.send(result)
        }
        else
            res.send("Data tidak ada")
    })
})

app.get('/data/list/:nama/update/:tinggi', (req, res) => {
    let nama = req.params.nama
    let tinggi = req.params.tinggi

    let sql = "UPDATE datadiri SET tinggi = ? WHERE id = (SELECT id FROM datadiri WHERE nama = ?)"
    connection.query(sql, [tinggi,nama], (err, result) => {
        if (err) throw err;
        else {
            // console.log(result)
            console.log(`Row updated: ${result.affectedRows}`);
        }
    })
    res.end()
})


app.get('/data/list/delete/:id', (req, res) => {
    let id = req.params.id

    let sql ="DELETE FROM datadiri WHERE id = ?;"
    connection.query(sql, id, (err, result) => {
        if (err) throw err;
        else {
            // console.log(result)
            console.log(`Row deleted: ${result.affectedRows}`);
        }
    })
    res.end()
})


app.listen(3000)