let inpCode = document.getElementById('inpCode')
let btnEncode=document.getElementById('btnEncode')
let btnEncrypt=document.getElementById('btnEncrypt')
let btnDecode=document.getElementById('btnDecode')
let btnDecrypt=document.getElementById('btnDecrypt')

let code=document.getElementById('code')

btnEncode.onclick =  function()
{
    let data =inpCode.value
    data=btoa(data) 
    code.value=data
}
btnEncrypt.onclick=function(){
    let data=code.value
    data=encryptData(data)
    code.value=data
}
btnDecode.onclick =  function()
{
    let data =inpCode.value
    data=btoa(data) 
    code.value=data
}
btnDecrypt.onclick=function(){
    let data=code.value
    data=decryptData(data)
    code.value=data
}
function encryptData(rawData){
    /* 
    todo:actually encrypt data
    logic : turn lowercase chars to uppercase and viceversa
    */
    return 'XXXXXXXXXX'
}
function decryptData(rawData){
    /* 
    todo:actually encrypt data
    logic : turn lowercase chars to uppercase and viceversa
    */
    return 'xxxxxxxx'
}