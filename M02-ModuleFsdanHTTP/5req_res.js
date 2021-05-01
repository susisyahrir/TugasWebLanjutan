//      MODUL HTTP
// dokumentasi: https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_http_createserver_options_requestlistener

const http = require('http')
const fs = require('fs')

//5.
var server = http.createServer(function(req, res){
    const url = req.url
    if(url === '/web')
    {
        res.write('web lanjutan')
        res.end()
    }
    else if(url === '/mobile')
    {
        res.write('mobile lanjutan')
        res.end()
    }
    else{
        fs.readFile("index.html", (err,data) =>{
            if (err)
                throw err
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()   // utk menghentikan LOADING PAGE nya
        })
    }
})
server.listen(3400)

