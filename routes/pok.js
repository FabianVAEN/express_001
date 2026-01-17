const express = require("express")
const router = express.Router()

// Se define a los pokémons 
const pokemons = [
    { nombre: "Pikachu", tipo: "Eléctrico", ataque: "Impactrueno" },
    { nombre: "Charizard", tipo: "Fuego", ataque: "Lanzallamas" },
    { nombre: "Blastoise", tipo: "Agua", ataque: "Hidrobomba" },
    { nombre: "Gengar", tipo: "Fantasma", ataque: "Bola Sombra" },
    { nombre: "Lucario", tipo: "Lucha", ataque: "Esfera Aural" },
    { nombre: "Garchomp", tipo: "Dragón", ataque: "Garra Dragón" },
    { nombre: "Mewtwo", tipo: "Psíquico", ataque: "Psíquico" },
    { nombre: "Dragonite", tipo: "Dragón", ataque: "Hiperrayo" },
    { nombre: "Umbreon", tipo: "Siniestro", ataque: "Pulso Umbrío" },
    { nombre: "Gyarados", tipo: "Agua", ataque: "Hidrobomba" }
]

// En la direccón utilizamos random para el caso especial 
// en el que deseamos un pokemon al azar 
router.get("/random", (req, res) => {
    console.log("ENTRANDO A RANDOM")
    const randomIndex = Math.floor(Math.random() * pokemons.length)
    const randomPokemon = pokemons[randomIndex]
    res.json(randomPokemon)
})

// En caso de querer ingresa a uno de los pokemon por su nombre 
// colocamos el nombre de estos como parámetro 
router.get("/:nombre", (req, res) => {
    const nombre = req.params.nombre
    const pokemon = pokemons.find(p => p.nombre.toLowerCase() === nombre.toLowerCase())
    
    if (pokemon) {
        res.json(pokemon)
    } else {
        res.json({ error: "Pokemon no encontrado" })
    }
})

module.exports = router