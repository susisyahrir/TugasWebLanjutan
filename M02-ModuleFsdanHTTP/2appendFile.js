const fs = require('fs')

//2 membuat dan mengisi file -> appendFile
//2.1
fs.appendFile("myAppendFile.txt", "file ini dibuaaat dgn appendFile", err =>{
    if (err)
        throw err;
    console.log("appendFile success")
})
// Hasil : akan muncul file baru dgn nama "myAppendFIle.txt" yg isinya adalah "file ini dibuat dgn appendFile"
