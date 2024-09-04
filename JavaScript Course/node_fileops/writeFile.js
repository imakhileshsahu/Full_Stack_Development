const fs=require('fs')

fs.writeFile(__dirname+'/myfile.txt',"some data", function(err){
    if(err) throw err
    console.log("File was written")
})//dirname file inside folder block
