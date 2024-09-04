//object oriented programming in javascript


//allows to create object without defining the class
//One of way creating jajvascript(JSON)javascriptobeject notation
//Another way
function Fruit(taste,color){
    this.color=color;
    this.taste=taste;
}
//new keyword
let mango=new Fruit("sweet","yellow");
let orange=new Fruit("sour","orange");
//one way
var apple={
    taste:"sweet",
    color:"red",
}

//class keyword (ECMA Script 2015)
//class declaration
class FruitClass{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
};
//Function - Declaration,Function Expression
let kiwi =new FruitClass("sour","green");
//class Expression
let FruitClass2 =class{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
};
//Function - Declaration,Function Expression
let kiwi2 =new FruitClass2("sour","green");
/*var bird ={
    x:100,
    y:20,
    color:"blue",
    eggs:['one','two','three','four'],

    fly:function(){
        console.log("Bird is flying",this.x,this.y);
    }
   
};
console.log(bird);
console.log(bird.fly());

//for loop
for(let i=0;i<bird.eggs.length;i++)
{
    console.log(bird.eggs[i]);
}
//For Each loop
bird.eggs.forEach(function(val,idx){
    console.log(idx,val);
});*/