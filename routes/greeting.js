const express = require("express")
// Aca definimos el router
const router = express.Router()

// Aca modificamos el router
// localhost:300/api/hola-mundo/greeting/
//
router.get("/greeting/:name/:languaje",(req,res) => {
    console.log(req.params)
    const name = req.params.name
    const languaje = req.params.languaje

    switch (languaje) {
        case "EN":
        saludo = 'Hello'
        break;
    case "ES":
        saludo = "Hola"
        break;
    default: saludo = "Hola"
    break;
    }

    res.json({
    message: `${saludo} ${name}`,
    timestamp: new Date().toLocaleDateString()
})
})

// Aca exportamos el router modificado 
module.exports = router