const express = require('express')
const { Router } = express;

//Routes
const route = new Router();

route.get('/',(req , res)=>
{  
    return res.send('Bienvenido a la API'); // main
})

route.get ('/',(req,res)=>
{
    //obtener productos
})

route.get('/:id' , (req,res)=>
{
    // obtener producto por id
})

route.post('/',(req,res)=>
{
    // añadir producto
})

route.put('/:id',(req,res)=>
{
    //actualizar producto
})

route.delete('/:id',(req,res)=>
{
    //eliminar producto por id
})

module.exports = route;