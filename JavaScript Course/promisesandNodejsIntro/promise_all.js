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
Promise.all([

    download('http://cb.lk/logo.png'),
    download('http://cb.lk/banner.png'),
    download('http://cb.lk/promo.png')
])
.then(function(downloadValues){
return Promise.all(downloadValues.map(resize))

}).then(function(resizeValues){
    return Promise.all(resizeValues.map(upload))
})
.then(function(uploadValues){
    console.log(uploadValues)
})
.catch(function(err){
    console.error(err) 
})