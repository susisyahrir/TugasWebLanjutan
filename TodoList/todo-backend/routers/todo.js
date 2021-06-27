const express = require('express')
const bodyParser = require('body-parser')
const db = require('../DB/db.js')
const router = express.Router()

router.post('/', (req, res) => {
    let data = req.body.deskripsi
    db.query("INSERT INTO dataaa (deskripsi) VALUES (?)", data, function (err, result) {
        if(err){
            console.log("error: ", err)
            return
        }
        // console.log(result)
        res.status(200).json({id: result.insertId, deskripsi: req.body.deskripsi})
    });
    // console.log(req)
})

router.get('/', (req, res) => {
    db.query("SELECT * FROM dataaa",  (err, result) => {
        if (err){
            console.log("error",err)
        }
        console.log(result);
        // res.send(result)
        res.json(result)
    })
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    // console.log(id)
    let sql ="DELETE FROM dataaa WHERE id = ?;"
    db.query(sql, id, (err, result) => {
        if (err) throw err;
        else {
            // console.log(result)
            console.log(`Row deleted: ${result.affectedRows}`);
        }
    })
    res.end()
})

module.exports = router