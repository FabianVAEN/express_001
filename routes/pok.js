const express = require("express") //Importa la librería express
const router = express.Router() //Crea un mini sistema de rutas 

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
router.get("/random", (req, res) => { //router.get define una ruta HTTP GET. /random es la URL relativa, (req, res) es la función callback que se ejecuta cuando alguien entra a esa url
    console.log("Generando un pokemon random")  //solo es la confirmación por consola para saber si accedimos a la ruta 
    const randomIndex = Math.floor(Math.random() * pokemons.length) 
    const randomPokemon = pokemons[randomIndex]
    res.json(randomPokemon)
})
    //Explicación de la funcion 
    // Math.random() devuelve un numero entre 0 y 0.9999
    //pokemons.lenght en este caso devuelve 10 
    // math.floor redonde hacia abajo 
    // Math.random() * 10 → número entre 0 y 9.999 resultando en 0,1,2,3...9
    // const randomPokemon = pokemons[randomIndex] aacede al elmento del array usando el indice genrado
    // y devuelve un objeto pokemon que se usa en res.json(randomPokemon)

// En caso de querer ingresa a uno de los pokemon por su nombre 
// colocamos el nombre de estos como parámetro 
// ::nombre es un parametro dinamico, todo lo que va despues de /
// se guarda en req.params.nombre 
router.get("/:nombre", (req, res) => {
    const nombre = req.params.nombre
    const pokemon = pokemons.find(p => p.nombre.toLowerCase() === nombre.toLowerCase())
    
    if (pokemon) {  //Si el pokemon existe devuelve una respuesta 
        res.json(pokemon)
    } else {
        res.json({ error: "Pokemon no encontrado" }) //Si no existe devuelve esto 
    }
})
/*
const nombre obtiene y guarda el parametro 
en const pokemon = pokemons.find( / Se recorre el array uno por uno 
y devuelve el primer elmeneto que cumpla con la condicion en este caso el nombre 
  p => p.nombre.toLowerCase() === nombre.toLowerCase()
Es una funci+ón flecha que hace la comparación sin importar las mayúsculas

*/

module.exports = router //exportamos el modelo del router 