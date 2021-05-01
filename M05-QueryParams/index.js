const express = require('express')
const logger = require('morgan')

const app = express()
app.use(logger("dev"))
app.use(express.static(__dirname + "/publik")) 

app.get('/api/cari', function(req,res){
    var nama = req.query.nama
    console.log(`Name   : ${nama}`)
    var umur = req.query.umur
    console.log(`Name   : ${umur}`)
    res.send(umur)
})
//localhost:3000/api/cari?nama=susi&umur=20
//HASIL : 20


app.listen(3000, function(){
    console.log('server sudah dibuka pada port 3000')
})