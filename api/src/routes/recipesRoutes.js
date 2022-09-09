const express = require('express');
const { getInfoRecipe, getNamedRecipe, getAllRecipes, getDiets,getRecipesDiet}= require('../utils/routesFunctions')
const {Recipe, Diet} =require('../db')
const { Op } = require("sequelize");
const db = require('../db');

const router = express.Router()

router.get('/',async (req,res)=>{
    try {
       const {name}=req.query
    if(name){

        const diets= await getDiets()
        if(diets.includes(name)){
            const recipesByDiet=getRecipesDiet(diets)
            res.json(recipesByDiet)
            }
        else{
            const apirecepies=await getNamedRecipe(name)
            if (apirecepies.length!==0) return  res.status(200).json(apirecepies)
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
        res.status(404).send("Disculpe las molestias, algo salio mal en su consulta")
    }
    
})

.get('/:idReceta', async(req, res)=>{
    try{
        let {id} =req.params
        const recipeApiDetail= await getInfoRecipe(id)
        const recipeDbDetail= await Recipe.findByPk(id)
        console.log('entre aca')
        if (recipeApiDetail)  { 
            console.log('tambien entre aca')
            return  res.status(201).json(recipeApiDetail)}
        else if(recipeDbDetail) return  res.status(201).json(recipeDbDetail)
        else return res.status(404).send('Disculpe, no encontramos mas informacion de esta receta')
    }
    catch(e){
        console.log('genere error')
        res.status(404).send("Disculpe las molestias, algo salio mal")
    }


})


.post('/createRecipes', async(req, res)=>{
    //!!!!ESTO HAY QUE CAMBIARLO PORQUE VIENE DEL FRONT, NO POR BODY!!
    try {
        const { name, summary, healthScore, steps, diets, image } = req.body;
        const newRecipe= await Recipe.create({
        name, summary, healthScore, steps, image
    })
    //Me falta conectar con la tabla de dietas
    res.status(201).send(`Receta ${newRecipe.name} creada correctamente`)
    } catch (error) {
        res.status(404).send("Disculpe las molestias, algo salio mal, intente cargar la receta nuevamente")
    }
})

/*
[ ] GET /recipes?name="...":
Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
Si no existe ninguna receta mostrar un mensaje adecuado
[ ] GET /recipes/{idReceta}:
Obtener el detalle de una receta en particular
Debe traer solo los datos pedidos en la ruta de detalle de receta
Incluir los tipos de dieta asociados
[ ] POST /recipes:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
Crea una receta en la base de datos relacionada con sus tipos de dietas.


La ruta que esta abajo sirve para buscar recetar, es la que se usa en el buscador :
https://spoonacular.com/food-api/docs#Search-Recipes-Complex

GET https://api.spoonacular.com/recipes/complexSearch
Para obtener mayor información sobre las recetas, como por ejemplo el tipo de dieta deben agregar el flag &addRecipeInformation=true a este endpoint
Para los tipos de dieta deben tener en cuenta las propiedades vegetarian, vegan, glutenFree por un lado y también analizar las que se incluyan dentro de la propiedad diets


me trae la info de una receta en particular, sirve para el detalle
https://spoonacular.com/food-api/docs#Get-Recipe-Information

GET https://api.spoonacular.com/recipes/{id}/information
*/
module.exports = router
