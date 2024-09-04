let a=10;
console.log(a);

let b=[1,2,3,4,5];
console.log(b);
console.log("hello world");

//javascript
//Variables ,arrays ,function ,loops ,classes ,objects


c=20;//global variables
var d=30;//function scope

let e=50;//block scope

//Function declaration
// function fun(){
//     let a=5;
//     if(a===5){
//         // let b=10;
//         // var b=10;
//         b=100;//global scope
//         console.log("inside",b);

//     }
//     console.log("outside",b);
// }
// fun();

// console.log("global",b);


// function square_root(n){
//     // console.log(Math.sqrt(n));
//     console.log("in first Sqrt fn");
//     return;
// }
// var sqrt_n=function(){
//     console.log("ssecond sqrt fn");
//     return;
// }
// square_root (10);
// sqrt_n(4);

let arr=['Apple','mango','guava'];
console.log(arr);

for(let i=0;i<5;i++){
    console.log(arr[i]);
}

arr.push("banana");//insert at back
arr.pop();//remove from back
arr.shift();//remove from front
arr.unshift("kiwi");//insert at front
arr.indexOf("kiwi");//finds you the index

if(arr[0]=="Apple"){
    console.log("Apple");
}
else{
    console.log("no it is",arr[0]);

}
