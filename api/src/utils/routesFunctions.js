require("dotenv").config();
const {API_KEY_ALL, API_KEY_RECIPE} = process.env;
const axios = require("axios");
const {Recipe, Diet} =require('../db')

//Busqueda de todas las recetas y recetas por nombre

const getAllRecipes=async function() {
    const recepies = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_ALL}&addRecipeInformation=true&number=100`)
   if (recepies.data.results) {
    const infoLanding=recepies.data.results.map(elem=>{
        return {
            name:elem.title,
            img: elem.image,
            dietas:elem.diets,
            healthy:elem.healthScore,
            liked:elem.aggregateLikes
        }})
    return infoLanding}
    /*Me trae:
    {"results":
    [
        {"vegetarian":true,
        "vegan":true,
        "glutenFree":true,
        "dairyFree":true,
        "veryHealthy":true,
        "cheap":false,
        "veryPopular":true,
        "sustainable":false,
        "lowFodmap":false,
        "weightWatcherSmartPoints":4,
        "gaps":"no",
        "preparationMinutes":-1,
        "cookingMinutes":-1,
        "aggregateLikes":3689,
        "healthScore":76,
        "creditsText":"Full Belly Sisters",
        "license":"CC BY-SA 3.0",
        "sourceName":"Full Belly Sisters",
        "pricePerServing":112.39,
        "id":716426,
        "title":"Cauliflower, Brown Rice, and Vegetable Fried Rice",
        "readyInMinutes":30,
        "servings":8,
        "sourceUrl":"http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
        "image":"https://spoonacular.com/recipeImages/716426-312x231.jpg",
        "imageType":"jpg",
        "summary":"Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199\">Vegetable Fried Brown Rice</a>, <a href=\"https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261\">Vegetable Fried Cauliflower Rice</a>, and <a href=\"https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042\">Easy Vegetable Fried Brown Rice with Egg</a>.",
        "cuisines":["Chinese","Asian"],
        "dishTypes":["side dish"],
        "diets":["gluten free","dairy free","lacto ovo vegetarian","vegan"],
        "occasions":[],
        "analyzedInstructions":
        [{"name":"",
        "steps":[
            {"number":1,"step":"Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
                "ingredients":[{"id":10011135,"name":"cauliflower florets","localizedName":"cauliflower florets","image":"cauliflower.jpg"},{"id":10111135,"name":"cauliflower rice","localizedName":"cauliflower rice","image":"cauliflower.jpg"},{"id":11135,"name":"cauliflower","localizedName":"cauliflower","image":"cauliflower.jpg"},{"id":20028,"name":"couscous","localizedName":"couscous","image":"couscous-cooked.jpg"},{"id":20444,"name":"rice","localizedName":"rice","image":"uncooked-white-rice.png"}],
                "equipment":[{"id":404771,"name":"food processor","localizedName":"food processor","image":"food-processor.png"}]},
            {"number":2,"step":"Heat 1T butter and 1T oil in a large skillet over medium heat.",
                "ingredients":[{"id":1001,"name":"butter","localizedName":"butter","image":"butter-sliced.jpg"},{"id":4582,"name":"cooking oil","localizedName":"cooking oil","image":"vegetable-oil.jpg"}],
                "equipment":[{"id":404645,"name":"frying pan","localizedName":"frying pan","image":"pan.png"}]},
            {"number":3,"step":"Add garlic and the white and light green pieces of scallion. Sauté about a minute.",
                "ingredients":[{"id":11291,"name":"green onions","localizedName":"green onions","image":"spring-onions.jpg"},{"id":11215,"name":"garlic","localizedName":"garlic","image":"garlic.png"}],
                "equipment":[]},
            {"number":4,"step":"Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.",
                "ingredients":[{"id":11135,"name":"cauliflower","localizedName":"cauliflower","image":"cauliflower.jpg"},{"id":0,"name":"spread","localizedName":"spread","image":""},{"id":4582,"name":"cooking oil","localizedName":"cooking oil","image":"vegetable-oil.jpg"}],
                "equipment":[{"id":404645,"name":"frying pan","localizedName":"frying pan","image":"pan.png"}]},
            {"number":5,"step":"Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
                "ingredients":[{"id":4047,"name":"coconut oil","localizedName":"coconut oil","image":"oil-coconut.jpg"},{"id":1001,"name":"butter","localizedName":"butter","image":"butter-sliced.jpg"},{"id":0,"name":"spread","localizedName":"spread","image":""},{"id":20444,"name":"rice","localizedName":"rice","image":"uncooked-white-rice.png"}],
                "equipment":[{"id":404645,"name":"frying pan","localizedName":"frying pan","image":"pan.png"}]},
            {"number":6,"step":"Let it sit for about two minutes—so the rice can get toasted and a little crispy.",
                "ingredients":[{"id":20444,"name":"rice","localizedName":"rice","image":"uncooked-white-rice.png"}],
                "equipment":[],"length":{"number":2,"unit":"minutes"}},
            {"number":7,"step":"Add the peas and broccoli and stir again.",
                "ingredients":[{"id":11090,"name":"broccoli","localizedName":"broccoli","image":"broccoli.jpg"},{"id":11304,"name":"peas","localizedName":"peas","image":"peas.jpg"}],
                "equipment":[]},
            {"number":8,"step":"Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.",
                "ingredients":[{"id":4058,"name":"sesame oil","localizedName":"sesame oil","image":"sesame-oil.png"},{"id":16124,"name":"soy sauce","localizedName":"soy sauce","image":"soy-sauce.jpg"},{"id":20444,"name":"rice","localizedName":"rice","image":"uncooked-white-rice.png"}],
                "equipment":[]},
            {"number":9,"step":"Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.",
                "ingredients":[{"id":12023,"name":"sesame seeds","localizedName":"sesame seeds","image":"sesame-seeds.png"},{"id":16124,"name":"soy sauce","localizedName":"soy sauce","image":"soy-sauce.jpg"},{"id":11291,"name":"green onions","localizedName":"green onions","image":"spring-onions.jpg"},{"id":5006,"name":"whole chicken","localizedName":"whole chicken","image":"whole-chicken.jpg"},{"id":18070,"name":"toast","localizedName":"toast","image":"toast"},{"id":20444,"name":"rice","localizedName":"rice","image":"uncooked-white-rice.png"},{"id":2047,"name":"salt","localizedName":"salt","image":"salt.jpg"}],
                "equipment":[{"id":404645,"name":"frying pan","localizedName":"frying pan","image":"pan.png"}]}
            ]}],
        "spoonacularSourceUrl":"https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426"},
    
    {"vegetarian":true,
    "vegan":true,
    "glutenFree":false,"dairyFree":true,"veryHealthy":true,"cheap":false,"veryPopular":true,"sustainable":false,"lowFodmap":false,"weightWatcherSmartPoints":19,"gaps":"no","preparationMinutes":-1,"cookingMinutes":-1,"aggregateLikes":1669,"healthScore":77,"creditsText":"Jen West","sourceName":"Pink When","pricePerServing":83.23,"id":715594,"title":"Homemade Garlic and Basil French Fries","readyInMinutes":45,"servings":2,"sourceUrl":"http://www.pinkwhen.com/homemade-french-fries/","image":"https://spoonacular.com/recipeImages/715594-312x231.jpg","imageType":"jpg","summary":"The recipe Homemade Garlic and Basil French Fries is ready <b>in roughly 45 minutes</b> and is definitely a super <b>vegan</b> option for lovers of American food. One serving contains <b>596 calories</b>, <b>18g of protein</b>, and <b>15g of fat</b>. For <b>83 cents per serving</b>, you get a side dish that serves 2. Several people made this recipe, and 1669 would say it hit the spot. If you have garlic salt, flour, garlic powder, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/homemade-french-fries-with-fresh-garlic-and-dill-494220\">Homemade French Fries with Fresh Garlic and Dill</a>, <a href=\"https://spoonacular.com/recipes/roasted-garlic-french-fries-519898\">Roasted Garlic French Fries</a>, and <a href=\"https://spoonacular.com/recipes/sweet-potato-fries-with-basil-salt-and-garlic-mayonnaise-120735\">Sweet Potato Fries With Basil Salt and Garlic Mayonnaise</a> for similar recipes.","cuisines":["American"],"dishTypes":["lunch","main course","main dish","dinner"],"diets":["dairy free","lacto ovo vegetarian","vegan"],"occasions":[],"analyzedInstructions":[],"spoonacularSourceUrl":"https://spoonacular.com/homemade-garlic-and-basil-french-fries-715594"},

    */
}

async function getNamedRecipe(name) {
    const infoLanding= await getAllRecipes()
    const apinameRecipe=infoLanding.filter(e=>e.name.includes(name))
    const dbNameRecipes=await Recipe.findAll({where:{name: {[Op.like]: `%${name}%`}}})
    apinameRecipe.concat(dbNameRecipes)

    }

//Busqueda info detail

 async function getInfoRecipe(id) {
    console.log('entre a funcion detalle')
        const recipe = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY_RECIPE}&addRecipeInformation=true`)
        if(recipe.data) return {
                name:recipe.title,
                img: recipe.image,
                dietas:recipe.diets,
                healthy:recipe.healthScore,
                description: recipe.summary,
                ingredients: recipe.extendedIngredients.map((e)=>{return{
                    img:e.image,
                    name:e.name,
                    cant:e.amount,
                    un:e.unit,
                }}),
                steps:recipe.steps.map((e)=>{return e.step}),
                
            }}


//Busqueda de todas las dietas y dietas por nombre

async function getDiets() {
    const infoLanding= await getAllRecipes()
    const repetDiets= infoLanding.map(e=>e.repetDiets).flat()
    const dietsApi = [...new Set(repetDiets)]
    const dietsDb= await Diet.findAll()
    return dietsApi.concat(dietsDb)
    }

async function getRecipesDiet(diet){
    const infoLanding= await getAllRecipes()
    const apiDietRecipes=infoLanding.filter(e=>e.diets.includes(diet))
    const dbRecipesWithDiets= await Recipe.findAll({include:diet})
    const dbDietRecipes=dbRecipesWithDiets.filter(e=>e.diets.includes(diet))
    return apiDietRecipes.concat(dbDietRecipes)
}



module.exports={getAllRecipes, getRecipesDiet, getDiets, getInfoRecipe, getNamedRecipe}