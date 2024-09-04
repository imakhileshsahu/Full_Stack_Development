function downloadPromise(){
    return new Promise(function (resolve,reject){
        console.log("Starting to download the file")
            setTimeout(function(){
                console.log("Dowmload is complete")
                resolve();

            },3000)
        
    })
}
let downloadFile=downloadPromise()

setTimeout(function (){
    downloadFile.then(function(){
        console.log("After download")
    })

},5000)