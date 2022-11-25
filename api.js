
const express = require('express')
const route = require('./routes');
const app = express(); 
const PORT = 8080; 

const server = app. listen(PORT,()=>
{       // en escucha al servidor
    console.log (`Servidor Express en el puerto ${PORT}`);

    server.on('error', err =>{
        console.log(`Error en el servidor ${err}`); // catchear error 
    })
})

app.use('/api/productos',route);




