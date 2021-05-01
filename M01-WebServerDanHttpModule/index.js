const  http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write('Module HTTP Mobile and Web');

    res.end();
})
.listen(3400)