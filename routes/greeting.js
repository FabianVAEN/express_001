const express = require('express')
// En este punto definimos router
const router = express.Router()

// En este punto modificamos router 
// lo llamamos como localhost:300/api/hola-mundo/greeting
// Ejemplo localhost:300/api/hola-mundo/greeting/fabian ->
// {"mensaje": "hola fabian", hora: "23:00"}
// para este ejemplo de json manual utilizaremos ya request :name es un  parametro 
// este se llena manualmente al escribir la url 
router.get('/greeting/:name/:languaje', (req ,res)=>{
    console.log(req.params)
    const name = req.params.name
    const languaje = req.params.languaje

    let saludo

    switch(languaje){
        case "EN": 
            saludo = "Hello"
            break;
        case "ES":
            saludo = "Hola"
            break;
        case "FR":
            saludo = "Bonjour"
            break;
        case "IT":
            saludo = "Ciao"
            break;
        case "CH":
            saludo = "Nihao"
            break;
        default: saludo = "Halo"
            break;

    }
    
    res.json({
        message: `${saludo} ${name}`,
        timestamp: new Date().toLocaleDateString(),
    })
})

module.exports = router // En este punto exportamos nuestro archivo 