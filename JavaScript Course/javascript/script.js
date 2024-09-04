let obj1={
    a:10,
    b:20,
    c:30
}
let obj2=Object.create(obj1)
obj2.p='asd'
obj2.q='sdf'
obj2.r='vxv'
let obj3=Object.create(obj2)

// obj3.__proto__==obj2
// console.log(obj3.__proto__.__proto__==obj1)

/*
obj2.-> IT WILL try to find a in obj2
-> if not found 
->it will try to find it in obj2.__proto__
->if not  found,
->
it will try to find it in obj2.__proto__.__proto__
-> ...and so on...
->till .__proto __ becomes null
 */