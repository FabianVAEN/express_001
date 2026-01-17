const express = require("express")
const app = express()
const PORT = 3000

const greetingRoute = require('./routes/greeting.js')
const pokemonRoute = require('./routes/pok.js')

app.get('/hola-mundo',(req,res) => {
    res.send("Hola mundo este es mi primer endpoint desde express")
})

app.use("/api/hola-mundo", greetingRoute)
app.use("/api/pokemon", pokemonRoute)

app.listen(PORT, ()=>{
    console.log(`La aplicación esta corriendo en el puerto: ${PORT}`)
})