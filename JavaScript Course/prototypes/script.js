let str="asdfasd"                       //3 levelfromnull
let num=233                              //3 levelfromnull
let bool=true                             //3 levelfromnull
let arr=[324,324,456,4]                      //3 levelfromnull
let obj={a:10,b:'asdf'}                      //2levelfrom null
let fun=function(){console.log('yay!')}        //3levelfromnull

//if x and y are not primitive
//x==y:true <- what does this mean?
//this means they are references to same object inmemory
 
console.log ('======types=====')
console.log('typeof String',typeof String)
console.log('typeof Boolean',typeof Boolean)
console.log('typeof Number',typeof Number)
console.log('typeof Array',typeof Array)
console.log('typeof Object',typeof Object)
console.log('typeof Function',typeof Function)

console.log('=====proto chain======')
console.log(str.__proto__.__proto__==obj.__proto__)
console.log(bool.__proto__.__proto__==obj.__proto__)
console.log(arr.__proto__.__proto__==obj.__proto__)
console.log(fun.__proto__.__proto__==obj.__proto__)
console.log(num.__proto__.__proto__==obj.__proto__ )

//Everyrhing indirectly inherits from the same thing 
//that obj is inherited from //i.e. in javascript ,teverything is essentially an object

console.log ('=====prototypes=====')
console.log(obj.__proto__==Object.prototype)
console.log(str.__proto__==String.prototype)
console.log(num.__proto__==Number.prototype)
console.log(fun.__proto__==Function.prototype)
console.log(arr.__proto__==Array.prototype)
console.log(bool.__proto__==Boolean.prototype)

//string.prototype inherits from Object.prototype

console.log(typeof Object.create(Boolean.prototype))
/* our object oriented nature of javascript is dr iven using prototype,and prototype are the blueprint from which we create thing*/
//__proto__ this is a hidden pointer that point from which modem it was created


console.log (str.charAt(4))
console.log(typeof str.charAt)
let str2="asffas"
console.log(str.charAt==str2.charAt)//true

str.charAt=function(){return 'X'}//does not make a difference

console.log(str.__proto__==String.prototype)//true
console.log(String.prototype.charAt)
String.prototype.charAt=function(){return 'x'}
console.log(str.charAt(3))//x

//String.prototype contains all default string function
//like charAt,indexof, substring ,slice etc


Array.prototype.joinOriginal=Array.prototype.join

Array.prototype.join=function(){
    console.log('join called on',this)
    return this.joinOriginal(...arguments)
}
let l=[123,324,546,546]
console.log(l.join(','))
