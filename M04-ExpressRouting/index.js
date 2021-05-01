const express = require('express')
const bodyParser = require('body-parser') 
const logger = require('morgan')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"))
app.use(express.static(__dirname + "/publik")) 

app.get('/hello/:nama', function(req,res){
    res.send('Hello ' + req.params.nama)
})
//localhost:3000/hello/abc
//HASIL : Hello abc


app.get('/*abc*/:nama', function(req,res){
    res.send('ABC ' + req.params.nama)
})
//localhost:3000/XYZabcMNO/123
//HASIL : ABC 123


let cb = function(req,res){
    res.send('halalala '+ req.params.nama)
}
app.get('/bye/:nama', cb)
//localhost:3000/bye/123
//HASIL : halalala 123


app.get('/berattt/:nama', function(req,res){
    let isTinggi
    if(req.query.tinggi>150) 
        isTinggi = true
    res.send('Hello ' + req.params.nama + ' '+ (isTinggi ? 'tinggi' : 'rendah'))
})
//localhost:3000/berattt/abcd?berat=10&tinggi=170
//HASIL : Hello abcd tinggi


app.get('/detail/:berat/:tinggi', function(req,res){
    // res.send(detail)
    res.send('berat  : ' + req.params.berat + ' ' +
    'tinggi : ' + req.params.tinggi)
})
//http://localhost:3000/detail/50/150
//HASIL : berat : 50 tinggi : 150



app.get('/', (req, res) =>{
    res.send(`<html>
                <body>
                    <form action="/latihan" method ="post">
                        <input name = "deskripsi"/>
                        <button type = "submit">Add</button>
                    </form>
                </body>
            </html>`)
})

app.post('/latihan', (req, res) => {
    let data = req.body.deskripsi
    res.send('deskripsi : ' + data)
})


app.listen(3000, function(){
    console.log('server sudah dibuka pada port 3000')
})