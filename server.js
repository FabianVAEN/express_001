const express = require("express")
const app = express()
const PORT = 3000

// En este punto importamos el router modificado de greeting 
const greetingRoute = require('./routes/greeting.js')
// Definimos la ruta de los pokemon
const pokemonRoute = require('./routes/pok.js')

// La idea es que al pegar esto el el localhots:3000/hola-mundo devuelva 
// un hola mundo 
app.get('/hola-mundo',(req,res) => {
    res.send("Hola mundo este es mi primer endpoint desde express")
})

// Aqui estamos llamando a route de greeting
app.use("/api/hola-mundo", greetingRoute)
// Aquí estamos llamando a route pok, la dirección entre comillas es 
// ña que ira en  nuestro URL
app.use("/api/pokemon", pokemonRoute)


// Esta parte es necesaria por que es la que escucha al puerto o lo que 
// se esta intentando llamar
app.listen(PORT, ()=>{
    console.log(`La aplicación esta corriendo en el puerto: ${PORT}`)
})


// La idea es utilizar este archivo principal únicamente para 
// enrutar 