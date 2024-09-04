function greet(name){
    console.log('hello',name)
}
function createGreeter(greeting){

    function greet (name){
        console.log(greeting ,name)//here we treat name as if it is string
        console.log(greeting ,name())//here wetreat as if name iss function
    }
    return greet
    // return greet()
}
    function getName(){
        return document.getElementById('namebox').value
    }

let g1 =createGreeter('Good morning ')
let g2 =createGreeter('good evening')
console.log(typeof g1)
 
console.log(greet('akhil'))
console.log(g1('akhil'))