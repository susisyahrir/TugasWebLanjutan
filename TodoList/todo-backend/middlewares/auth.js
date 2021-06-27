const db = require('../DB/db.js')

module.exports = function(req, res, next){
    const username = req.headers.username
    const password = req.headers.password

    db.query("SELECT username FROM userr WHERE username = (?) AND password = (?)", [username, password] , function (err, result) {
        if(result.length > 0){
            next()
        }else{
            res.send(401)
        }
    })
    // if(username === 'susi' && password === '123'){
    //     next()
    // }else{
    //     res.send(401)
    // }
}