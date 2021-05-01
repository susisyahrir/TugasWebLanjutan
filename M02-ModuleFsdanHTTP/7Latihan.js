const http = require('http')
const randomstring = require('randomstring')
const moment = require('moment')

const server = http.createServer((req, res)=>{
    if(req.url === '/masuk')
    {
        let d = moment()
        const s = randomstring.generate({length :6, capitalization:'uppercase'})
        res.write('Tanggal   : ')
        res.write(d.format('LL'))
        res.write('\n')
        res.write('Jam Masuk : ')
        res.write(d.format('LTS'))
        res.write('\n\n')
        res.write(s)
        res.write("\n\n\n")
        res.end()
    }
    // else if(req.url==='/a'){
    //     res.write("haaa")
    //     res.end()
    // }
    else{
        res.statusCode = 404
        res.end()
    }
})
server.listen(3000)
