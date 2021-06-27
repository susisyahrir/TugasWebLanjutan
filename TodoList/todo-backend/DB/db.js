const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "weblanjutan",
});

connection.connect((err) => {
    if(!err)
        console.log('Database Connected')
    else{
        console.log('Error')
    }
})

module.exports = connection