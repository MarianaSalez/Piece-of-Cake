const express = require('express');
const { getDiets}= require('../utils/routesFunctions')


const router = express.Router()

router.get('/',async (req,res)=>{
    try {
        const diets=await getDiets()
        res.json(diets)
    } catch (error) {
        res.status(404).send("Disculpe las molestias, no hemos podido obtener las dietas")
    }

})

// [ ] GET /diets:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá
// Testing

module.exports = router