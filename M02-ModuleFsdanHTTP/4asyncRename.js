const fs = require('fs')

// 4. menggant nama file 
// 4.1 secara async -> rename
fs.rename("4async-sync.json", "4async_sync.json", (err) =>{
    if(err)
        return console.error(err)
    console.log("berhasil megganti nama secara Async")
})
//HASIL : Berhasil mengganti nama secara Async
