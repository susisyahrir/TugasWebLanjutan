const fs = require('fs')

//3 cek file exist atua not exist -> access
//3.1
fs.access('existFile.txt', fs.constants.F_OK, (err) => {
    // jika file blm ada, maka file akan dibuat dan isi -> writeFileSync
    if (err){
        console.error('\nFile existFile.txt tidak ada\n -File akan dibuat\n')
        fs.writeFileSync("existFile.txt", "testing 123")
        //HASIL : File existFile.txt tidak ada
        //         -File akan dibuat
    }
    // jika file sudah ada, maka isi file akan dibaca -> readFileSync
    else{
        console.log('\nFile existFile.txt tersedia')
        const data = fs.readFileSync("existFile.txt", {encoding:'utf8'}, 'r')
        console.log(`isi file: ${data}`)
        //HASIL : File existFile.txt tersedia
        //        isi file: testing 123
    }
});
    
//3.2 mengecek apakah memiliki permissions utk read dan write
fs.access('existFile.txt', fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if (err)
        console.error('\ntidak ada akses read dan write existFile.txt\n');
    else
        console.log('\nmemiliki akses read dan write existFile.txt\n');
});
