window.onload = function () {
    let newtask = document.getElementById('newtask')
    let addtask = document.getElementById('addtask')
    let todolist = document.getElementById('todolist')

    addtask.onclick = function () {
        let li = document.createElement('li')
        //add the X button
        let xBtn=document.createElement('button')
        xBtn.innerText='❌'
        xBtn.onclick=function(event){
            event.target.parentElement.remove()
        }
         
         let upBtn =document.createElement('button')
         upBtn.innerText='⬆️'
         upBtn.onclick=function(event){
         //event.target=the up button
         //event.target.parentElement=the<li>item
         //event.target.parentElement.parentEleementi is the todolist

         event.target.parentElement.parentElement.insertBefore(
            event.target.parentElement,//insert this elemnet
            event.target.parentElement.previousElementSibling//before it's parentElement
         )
         }
         let dnBtn =document.createElement('button')
         dnBtn.innerText='⬇️'
         dnBtn.onclick=function (event){
            //event.target=the down button
            //event.target.parentElement.nextElemntSibling
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling ,//insert next elemnet
                event.target.parentElement//before current element
             )
        }

        //add the task text
        let taskSpan=document.createElement('span')
        taskSpan.innerText = newtask.value

        li.appendChild(xBtn)
        li.appendChild(upBtn)
        li.appendChild(dnBtn)
        li.appendChild(taskSpan)
        todolist.appendChild(li)
       // todolist.innerHTML +=`<li>${newtask.value}</li>`
    }
}