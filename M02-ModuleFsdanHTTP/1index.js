//      File System
// https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_readfile_path_options_callback

const fs = require('fs')

//1 membaca isi file -> readFile
//1.1
fs.readFile('myFile.txt', function(err, data){
    console.log(data)
})
//HASIL : undefined, krna blm ad file "myFile.txt"

//1.2
// buat myFile1.txt pada folder yang sama
fs.readFile('myFile1.txt', function(err, data){
    console.log(data)
})
//HASIL : <Buffer 54 65 73 20 31 32 33>

//1.3
// buat myFile2.txt
// tambahkan parameter optionalny yaitu {encoding:'utf8'}
fs.readFile('myFile2.txt',{encoding:'utf8'}, function(err, data){
    console.log(data)
})
//HASIL : ini adalah my file 2








