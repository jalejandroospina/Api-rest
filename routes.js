const { application } = require('express');
const express = require('express')
const { Router } = express;

const productos = 
[
    {
      id: 1,
      title: "Escuadra",
      price: 123.45,
      thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    },
    {
      id: 2,
      title: "Calculadora",
      price: 234.56,
      thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    },
    {
      id: 3,
      title: "Globo Terráqueo",
      price: 345.67,
      thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    }
   ]

//Routes
const route = new Router();

// route.get('/',(req , res)=>
// {  
//     return res.send('Bienvenido a la API'); // main
// })

route.get ('/',(req,res)=>
{
    //obtener productos
    return res.json(productos);
})

route.get('/:id' , (req,res)=>
{     
    //obtener producto por Id

      const { id } = req.params // recibe id de parametro
      const producto = productos.find(producto => producto.id === Number(id)) //Busca el id en el el array

        if (!producto)  // si no existe producto por id ingresado
        {
            return res.status(404).json
            ({
                error: 'Producto No Encontrado'
            })
        }

        return res.json(producto) // resultado del filtro
})

route.post('/',(req,res)=>
{
    // añadir producto

    const producto = req.body; // recibo cuerpo del producto
    producto.id = productos.length + 1; // asignacion de a id automatico
    productos.push (producto)       //añadiendolo al array de productos

    return res.status(201).json(producto);
})

route.put('/:id',(req,res)=>
{
    //actualizar producto

    const { id } = req.params;
    const body = req.body;

    const producto = productos.find(producto => producto.id === Number(id)) //Busca el id en el el array

        if (!producto)  // si no existe producto por id ingresado
        {
            return res.status(404).json
            ({
                error: 'Producto No Encontrado'
            })
        }

    producto.producto = body.producto // actualiza el producto con el body ingresado

    return res.json(producto);
})

route.delete('/:id',(req,res)=>
{
    //eliminar producto por id

    const { id } = req.params;

    const index = productos.findIndex(producto => producto.id === Number(id)); //Busca el indice en el el array

        if (index === -1)  // si no existe el indice en el arreglo
        {
            return res.status(404).json
            ({
                error: 'Producto No Encontrado'
            })
        }
    
    productos.splice(index , 1) // eliminar elemento por el indice adyacente

    return res.status(204).json({}); 

})

module.exports = route;