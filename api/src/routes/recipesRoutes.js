const express = require('express');
const { getInfoRecipe, getNamedRecipe, getAllRecipes, getDiets,getRecipesDiet}= require('../utils/routesFunctions')
const {Recipe,Diet} =require('../db')

const db = require('../db');
const e = require('express');

const router = express.Router()

router.get('/',async (req,res)=>{
    try {
       let {name}=req.query
       let{diet}=req.query
    if(name){
            const apirecepies=await getNamedRecipe(name)
            if (apirecepies&&apirecepies.length!==0) return  res.status(200).json(apirecepies)
            else{
                res.json('NOT FOUND')
            }}
    else if(diet){
        const apirecepies=await getRecipesDiet(diet)
            if (apirecepies&&apirecepies.length!==0) return  res.status(200).json(apirecepies)
            
            else{
            res.json('NOT FOUND')
            }

    }
    else{
        const apirecepies=await getAllRecipes()
        if (apirecepies) return res.status(200).json(apirecepies)
        }
    } catch (error) {
        res.status(404).json(error)
    }
    
})

.get('/random',async (req,res)=>{
    try{
        const id =Math.floor(Math.random() *100)
        const recipeApiDetail= await getInfoRecipe(id)
        return  res.status(200).json(recipeApiDetail)}
    catch(e){
        res.status(404).json('NOT FOUND')
    }

} )

.get('/:idReceta', async(req, res)=>{
    try{
        const {idReceta} =req.params
        const recipeApiDetail= await getInfoRecipe(idReceta)
        if (recipeApiDetail)  {return  res.status(200).json(recipeApiDetail)}
        else return res.status(404).send('Disculpe, no encontramos mas informacion de esta receta')
    }
    catch(e){
        res.status(404).json('NOT FOUND')
    }


})


.post('/create', async(req, res)=>{
    try {
        const { name, summary, score, healthScore, steps, image, diets} = req.body;
        if(!name || !summary){res.status(401).send("Falta informacion principal para cargar la receta")}
        const newRecipe= await Recipe.create({
        name, summary,score, healthScore, steps, image
        })

        diets.forEach(async (d) => {
            const dbDiet = await Diet.findOrCreate({
              where: {
                name: d,
              },
            });
            newRecipe.addDiets(dbDiet[0].dataValues.id)
          });
  
        
    res.status(200).send(`Receta ${newRecipe.name} creada correctamente`)
    } catch (error) {
        res.status(404).json(error)
    }
})

module.exports = router
