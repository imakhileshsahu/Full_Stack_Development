class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    isAdult(){
        return this.age>=18
    }
}

let p1=new Person('john doe',22)
let p2=new Person('jane dow',12)
console.log(p1)
console.log(typeof Person)
console.log(p1.__proto__ ==Person.prototype)
console.log(p1.__proto__.__proto__ ==Object.prototype)
console.log(p1.isAdult())
console.log(p2.isAdult())

class Student extends Person{
    constructor(name,age,grade){
        super(name,age)
        this.grade=grade


    }
}


let s1=new Student('harry potter',12,5)
let s2=new Student('hermoine',14,4)

console.log(s1,s2)
console.log(s1.isAdult())

console.log(s1.__proto__==Student.prototype )
console.log(s1.__proto__.__proto__==Person.prototype )
console.log(s1.__proto__.__proto__.__proto__==Object.prototype )


//inheritance chain
//object.prototype->person.prototype->Student.prototype
//no inheritance between the classses (actually they are functions)
//object -x->person -x->student
