const express = require('express');
const { getInfoRecipe, getNamedRecipe, getAllRecipes, getDiets,getRecipesDiet}= require('../utils/routesFunctions')
const {Recipe,Diet} =require('../db')

const db = require('../db');

const router = express.Router()

router.get('/',async (req,res)=>{
    try {
       let {name}=req.query
    if(name){
        let diets= await getDiets()
        if(diets.find(e=>e.includes(name.split('/\s/').join('').toLowerCase()))){
            const recipesByDiet=await getRecipesDiet(name)
            res.json(recipesByDiet)
            }
        else{
            const apirecepies=await getNamedRecipe(name)
            if (apirecepies&&apirecepies.length!==0) return  res.status(200).json(apirecepies)
            else{
            res.status(201).send('Disculpe, no encontramos coincidencia. Pruebe con otra receta')
            }}
        }
    else{
        const apirecepies=await getAllRecipes()
        if (apirecepies) return res.json(apirecepies)
        }
    } catch (error) {
        //Puedo ver de enviar imagen not found
        console.log(error)
        res.status(404).send(e)
    }
    
})

.get('/random',async (req,res)=>{
    try{
        const id =Math.floor(Math.random() *100)
        const recipeApiDetail= await getInfoRecipe(id)
        return  res.status(201).json(recipeApiDetail)}
    catch(e){
        res.status(404).send(e)
    }

} )

.get('/:idReceta', async(req, res)=>{
    try{
        const {idReceta} =req.params
        const recipeApiDetail= await getInfoRecipe(idReceta)
        if (recipeApiDetail)  {return  res.status(201).json(recipeApiDetail)}
        else return res.status(404).send('Disculpe, no encontramos mas informacion de esta receta')
    }
    catch(e){
        console.log(e)
        res.status(404).send(e)
    }


})


.post('/createRecipe', async(req, res)=>{
    try {
        const { name, summary, healthScore, steps, diets, image } = req.body;
        const newRecipe= await Recipe.create({
        name, summary, healthScore, steps, image
    })
    diets.forEach(async (elem) => {
        const dbDiet= await Diet.findOrCreate({
            where: { name: elem }
        })
        newRecipe.setDiet(dbDiet)
        })
    res.status(201).send(`Receta ${newRecipe.name} creada correctamente`)
    } catch (error) {
        res.status(404).send("Disculpe las molestias, algo salio mal, intente cargar la receta nuevamente")
    }
})



/*

[ ] POST /recipes:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
Crea una receta en la base de datos relacionada con sus tipos de dietas.

*/
module.exports = router
