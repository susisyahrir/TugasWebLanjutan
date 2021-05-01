const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser') 

const app = express()
app.use(logger("dev"))
app.use(express.static(__dirname + "/publik")) 
app.use(bodyParser.urlencoded({ extended: true }));

let myMiddleware = function(req,res,next){
    if(req.params.id ==="ID1"){
        console.log('ID valid')
        next()
    }
    else{
        const err ={
            status: 'error',
            data:{id: req.params.id}
        }
        next(err)
    }
}

app.get('/hello/:id/:nama', myMiddleware, (req, res)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.send(req.params)
})

app.use((error, req, res, next)=>{
    res.send(error)
})


app.listen(3000, function(){
    console.log('server sudah dibuka pada port 3000')
})