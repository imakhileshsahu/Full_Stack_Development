//Answer in contest of C++/Java
//what does the keyword "this " mean , what does it refer to?
//In which places in code can we NOT use "this"?

function chechThis(){
    console,log (this)

}

let obj={
    a:10,
    b:"asdf",
    c:true,
   d: function(){
    console.log(this)

    },
    e:{
        l:234,
        m:'sdaf',
        n:function(){
            console.log(this)

        },
    },
}
console.log(obj)
console.log(obj.e.n())