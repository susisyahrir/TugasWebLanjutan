const fs = require('fs')

//4.2 secara sync -> renameSync
try{
    fs.renameSync("4async_sync.json", "4async-sync.json")
    console.log("Berhasil mengganti nama sync")
}
catch{
    console.error(err)
}
//HASIL : Berhasil mengganti nama secara sync