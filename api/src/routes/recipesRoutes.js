const express = require('express');
const { getInfoRecipe, getNamedRecipe, getAllRecipes, getDiets,getRecipesDiet}= require('../utils/routesFunctions')
const {Recipe,Diet} =require('../db')

const db = require('../db');
const e = require('express');

const router = express.Router()

router.get('/',async (req,res)=>{
    try {
       let {name}=req.query
    if(name){
            const apirecepies=await getNamedRecipe(name)
            if (apirecepies&&apirecepies.length!==0) return  res.status(200).json(apirecepies)
            else{
            res.status(201).send('Disculpe, no encontramos coincidencia. Pruebe con otra receta')
            }}
        
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
        const id =Math.floor(Math.random() *10)
        //CAMBIAR A 100
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


.post('/create', async(req, res)=>{
    try {
        const { name, summary, score, healthScore, steps, image, diets} = req.body;
        if(!name || !summary){res.status(401).send("Falta informacion principal para cargar la receta")}
        const newRecipe= await Recipe.create({
        name, summary,score,  healthScore, steps, image
        })
        diets.forEach(async (d) => {
            const dbDiet = await Diet.findOrCreate({
              where: {
                name: d,
              },
            });
            newRecipe.setDiets(dbDiet);
          });
    
        // const proms = Array.from(diets).map(diet => newRecipe.addDiet( {where: { name: diet }}));
        // await Promise.all(proms)
        
    res.status(201).send(`Receta ${newRecipe.name} creada correctamente`)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})

module.exports = router
