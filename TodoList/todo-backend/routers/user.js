const express = require('express')
const bodyParser = require('body-parser')
const db = require('../DB/db.js')
const router = express.Router()
const auth = require('../middlewares/auth.js')

router.get('/', auth, (req, res) => {
    db.query("SELECT * FROM userr",  (err, result) => {
        if (err){
            console.log("error",err)
        }
        console.log(result);
        res.json(result)
    })
})


let authPostfMiddleware = (req,res,next) => {
    db.query("SELECT COUNT(*) as jlh_user FROM userr", (err, resultss) => {
        if(resultss[0].jlh_user > 0){
            auth(req,res,next)
        }else{
            // console.log(resultss[0].jlh_user)
            next()
        }
    })
}

router.post('/', authPostfMiddleware, (req, res) => {
    let username = req.body.username
    let password = req.body.password
    db.query("INSERT INTO userr (username, password) VALUES ( ?, ?)", [username, password], function (err, result) {
        if(err){
            console.log("error: ", err)
            return
        }
        res.status(200).json({id: result.insertId, username: req.body.username})
    })
})


let authDeleteMiddleware = (req,res,next) => {
    db.query("SELECT COUNT(*) as jlh_user FROM userr", (err, resultss) => {
        if(resultss[0].jlh_user == 1){
            console.log("cannot delete the last user")
        }else{
            console.log(resultss[0].jlh_user)
            next()
        }
    })
}
router.delete('/:id', authDeleteMiddleware, (req, res) => {
    let id = req.params.id
    let sql ="DELETE FROM userr WHERE id = ?;"
    db.query(sql, id, (err, result) => {
        if (err) throw err;
        else {
            console.log(`Row deleted: ${result.affectedRows}`);
        }
    })
    res.end()
})

module.exports = router