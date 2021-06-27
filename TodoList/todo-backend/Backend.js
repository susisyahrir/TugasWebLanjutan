const cors = require('cors')
// const bodyParser = require('body-parser')
const express = require('express')
// const mysql = require("mysql")

const routerUser = require('./routers/user.js')
const routerTodo = require('./routers/todo.js')
const auth = require('./middlewares/auth.js')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/todo', auth, routerTodo)
// app.use('/todo', routerTodo)
app.use('/user', routerUser)

app.get('/', (req, res) =>{
    res.send(`<html>
                <body>
                    <form action="/user" method ="post">
                        <input name = "username" placeholder = "username"/>
                        <input name = "password" placeholder = "password"/>
                        <button type = "submitUser">Add</button>
                    </form>
                    <form action="/todo" method ="post">
                        <input name = "deskripsi"/>
                        <button type = "submit">Add</button>
                    </form>
                </body>
            </html>`)
})

app.listen(3000)