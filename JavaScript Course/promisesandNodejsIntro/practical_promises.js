function download (url){
    return new Promise(function(resolve,reject){
        if(!url.startsWith("http")){
            reject(new Error("url does  not start with http"))

        }
        else{
            console.log("start download:"+ url)
            setTimeout(function(){//fake  3 second download task
            let fileName=url.split('/').pop()
            resolve(fileName)                
            },3000)
        }
    })
}

function resize (fileName){
    return new Promise (function (resolve,reject){
        if(!fileName.endsWith(".png")){
            reject(new Error("file is not png"))

        }else{
            console.log("start resize:"+ fileName)
            setTimeout(function(){
                //fake 3-sec resize task
                //change x.png -> x-resized.png
                let resizedFile=fileName.split(".")[0] + "-resized.png"
                resolve(resizedFile)
            })
        }

    })
}

function upload (resizedFileName){
    return new Promise(function (resolve,reject){
         console.log("start upload"+ resizedFileName)
        setTimeout(function(){//fake 3 secupload task
            
            let uploadUrl= "http://imgur.com"+ resizedFileName
            resolve(uploadUrl)

        },3000)
    })
}

download('http://cb.lk/logo.png')
.then(resize)
.then(upload)
.then(function(uploadUrl){
    console.log("File was uploaded to :" + uploadUrl)
})
.catch(function(err){
    console.error(err)
})