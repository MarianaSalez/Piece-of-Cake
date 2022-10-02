require("dotenv").config();
const {API_KEY_ALL5, API_KEY_RECIPE5,API_KEY_DIET5} = process.env;
const axios = require("axios");
const {Recipe, Diet} =require('../db')
const { Op, where } = require("sequelize");


//Busqueda de todas las recetas y recetas por nombre

const getAllRecipes=async function() {
    const recepies = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_ALL5}&addRecipeInformation=true&number=18`)
   if (recepies.data.results) {
    const infoLanding=recepies.data.results.map(elem=>{
        return {
            id:elem.id,
            name:elem.title,
            summary:elem.summary,
            score:elem.aggregateLikes,
            healthScore:elem.healthScore,
            image: elem.image,
            diets:elem.diets,

        }})

    return infoLanding}
}

async function getNamedRecipe(name) {
    const infoLanding= await getAllRecipes()
    const apinameRecipe=infoLanding.filter(e=>e.name. toLowerCase().includes(name.toLowerCase()))
    const dbNameRecipes=await Recipe.findAll({where:{name: {[Op.like]: `%${name}%`}}})
    return apinameRecipe.concat(dbNameRecipes)
    }

//Busqueda info detail

 async function getInfoRecipe(id) {
    if(Number(id)){
        const recipe = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY_RECIPE5}&addRecipeInformation=true`)
        if(recipe.data) {
            const detail= {
                name:recipe.data.title,
                summary: recipe.data.summary,
                score:recipe.data.aggregateLikes,
                healthScore:recipe.data.healthScore,
                ingredients: recipe.data.extendedIngredients?.map((e)=>{return{
                    img:e.image,
                    name:e.name,
                    cant:e.amount,
                    un:e.unit,
                }}),
                steps:recipe.data.analyzedInstructions[0]?.steps.map((e)=>{return {
                    number:e.number,
                    step: e.step
                }}),
                image: recipe.data.image,
                diets:recipe.data.diets,
            }
            return detail
        }}
        else {
            const recipeDbDetail= await Recipe.findByPk(id)
            if(recipeDbDetail) return recipeDbDetail
        }

    }


//Busqueda de todas las dietas y dietas por nombre

async function getDiets() {
    const recepies = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_DIET5}&addRecipeInformation=true&number=18`)
   if (recepies.data.results) {
    const repetDiets=recepies.data.results.map(elem=>elem.diets).flat()
    const dietsApi = [...new Set(repetDiets)]
    const dietsDb= await Diet.findAll()
    if(dietsDb){
        for (let i = 0; i < dietsDb.length; i++) {
            if(!dietsApi.includes(dietsDb[i].dataValues.name)){
                dietsApi.push(dietsDb[i].dataValues.name)
            }

        }
    }
    return dietsApi

    }}

async function getRecipesDiet(diet){
    const infoLanding= await getAllRecipes()
    const apiDietRecipes=infoLanding.filter((e)=>e.diets.includes(diet)
        )
        console.log(diet)

    const recipesWithDiets= await Recipe.findAll({include:{
        model: Diet,
        through: {
        attibutes: ["name"],
      }}},)

      const dbDietRecipes=[]
      for (let i = 0; i < recipesWithDiets.length; i++) {
        let dietas=recipesWithDiets[i].dataValues.diets
        for (let j = 0; j < dietas.length; j++) {
           if(dietas[j].dataValues.name===diet){
            dbDietRecipes.push(recipesWithDiets[i].dataValues)
           }
        }
      }

      for (let i = 0; i < dbDietRecipes.length; i++) {
        let nameDiets=[]
        let dietas=dbDietRecipes[i].diets
        for (let j = 0; j < dietas.length; j++) {
            nameDiets.push(dietas[j].dataValues.name)
         }
        delete dbDietRecipes[i].diets
        dbDietRecipes[i].diets=nameDiets

      }
   
    return apiDietRecipes.concat(dbDietRecipes)
}



module.exports={getAllRecipes, getRecipesDiet, getDiets, getInfoRecipe, getNamedRecipe}


