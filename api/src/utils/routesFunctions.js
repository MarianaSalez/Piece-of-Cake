require("dotenv").config();
const {API_KEY_ALL, API_KEY_RECIPE,API_KEY_DIET} = process.env;
const axios = require("axios");
const {Recipe, Diet} =require('../db')
const { Op } = require("sequelize");

//Busqueda de todas las recetas y recetas por nombre

const getAllRecipes=async function() {
    const recepies = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_ALL}&addRecipeInformation=true&number=100`)
   if (recepies.data.results) {
    const infoLanding=recepies.data.results.map(elem=>{
        return {
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
    const apinameRecipe=infoLanding.filter(e=>e.name.includes(name))
    const dbNameRecipes=await Recipe.findAll({where:{name: {[Op.like]: `%${name}%`}}})
    return apinameRecipe.concat(dbNameRecipes)
    }

//Busqueda info detail

 async function getInfoRecipe(id) {
    if(Number(id)){
        const recipe = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY_RECIPE}&addRecipeInformation=true`)
        console.log(recipe.data)
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
    const recepies = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_DIET}&addRecipeInformation=true&number=100`)
   if (recepies.data.results) {
    const repetDiets=recepies.data.results.map(elem=>elem.diets).flat()
    const dietsApi = [...new Set(repetDiets)]
    const dietsDb= await Diet.findAll()
    return dietsApi.concat(dietsDb)
    }}

async function getRecipesDiet(diet){
    const infoLanding= await getAllRecipes()
    const apiDietRecipes=infoLanding.filter(e=>e.diets.filter(d=>d===diet))

    //Revisar base de datos
    const dbRecipesWithDiets= await Recipe.findAll({include:{ model: Diet,
      attibutes: ["name"],
      through: {
        attibutes: [],
      }}})
    const dbDietRecipes=dbRecipesWithDiets.filter((recipe) => recipe.name.includes(diet));
    return apiDietRecipes.concat(dbDietRecipes)
}



module.exports={getAllRecipes, getRecipesDiet, getDiets, getInfoRecipe, getNamedRecipe}


