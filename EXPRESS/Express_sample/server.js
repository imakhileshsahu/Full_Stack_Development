const express =require('express')
const srv =express();
const todoRoute=require('./routes/todos');
const { todos } = require('node:test');

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.get ('/hello',function(req,res){
    res.send("hello")

})
srv.use('/public',express.static(__dirname +"/public"))

srv.use('/todos',todoRoute)

srv.listen(4567);