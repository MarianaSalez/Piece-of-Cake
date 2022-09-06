const {API_KEY_ALL, API_KEY_RECIPE} = process.env;


async function getAllRecipes() {
    const recepies = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_ALL}&addRecipeInformation=true&number=100`)
    const infoLanding= recepies.data? recepies.map(elem=>{
        return {
            name:elem.title,
            img: elem.image,
            dietas:elem.diets,
            healthy:elem.healthScore,
            liked:elem.aggregateLikes
        }}):null
        return infoLanding
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
    const infoLanding= getAllRecipes()
    if (infoLanding) return infoLanding.filter(e=>e.name.includes(name))}

async function getDietsRecipes(diet) {
    const infoLanding= getAllRecipes()
    if (infoLanding) return infoLanding.filter((e)=>e.diet.includes(diet))}

 async function getInfoRecipe() {
        const recipe = await fetch(`https://api.spoonacular.com/recipes/{id}/information?apiKey=${API_KEY_RECIPE}&addRecipeInformation=true`)
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

/*
BRINGS THE DETAIL FETCH

{"vegetarian":false,
"vegan":false,
"glutenFree":false,
"dairyFree":true,
"veryHealthy":false,
"cheap":false,
"veryPopular":false,
"sustainable":false,
"lowFodmap":false,
"weightWatcherSmartPoints":11,
"gaps":"no",
"preparationMinutes":-1,
"cookingMinutes":-1,
"aggregateLikes":0,
"healthScore":5,
"creditsText":"SippitySup",
"sourceName":"SippitySup",
"pricePerServing":150.5,
"extendedIngredients":
[{"id":15001,
"aisle":"Seafood",
"image":"anchovies.jpg",
"consistency":"SOLID",
"name":"anchovies",
"nameClean":"boquerones",
"original":"1 lb whole fresh, or cleaned and marinated anchovies (not the salted or tinned variety)",
"originalName":"whole fresh, or cleaned and marinated anchovies (not the salted or tinned variety)",
"amount":1.0,
"unit":"lb",
"meta":["fresh","salted","whole","tinned","cleaned","(not the or variety)"],
"measures":{"us":{"amount":1.0,"unitShort":"lb","unitLong":"pound"},
"metric":{"amount":453.592,"unitShort":"g","unitLong":"grams"}}},
{"id":2031,"aisle":"Spices and Seasonings","image":"chili-powder.jpg","consistency":"SOLID","name":"cayenne pepper","nameClean":"ground cayenne pepper","original":"0.25 t cayenne pepper","originalName":"cayenne pepper","amount":0.25,"unit":"t","meta":[],"measures":{"us":{"amount":0.25,"unitShort":"tsps","unitLong":"teaspoons"},"metric":{"amount":0.25,"unitShort":"tsps","unitLong":"teaspoons"}}},
{"id":10311529,"aisle":"Produce","image":"cherry-tomatoes.png","consistency":"SOLID","name":"cherry tomatoes","nameClean":"cherry tomato","original":"0 cherry tomatoes, as needed","originalName":"cherry tomatoes, as needed","amount":0.0,"unit":"","meta":["as needed"],"measures":{"us":{"amount":0.0,"unitShort":"","unitLong":""},"metric":{"amount":0.0,"unitShort":"","unitLong":""}}},
{"id":10018029,"aisle":"Bakery/Bread","image":"crusty-bread.jpg","consistency":"SOLID","name":"crusty bread","nameClean":"crusty bread","original":"0 crusty bread","originalName":"crusty bread","amount":0.0,"unit":"","meta":[],"measures":{"us":{"amount":0.0,"unitShort":"","unitLong":""},"metric":{"amount":0.0,"unitShort":"","unitLong":""}}},
{"id":1123,"aisle":"Milk, Eggs, Other Dairy","image":"egg.png","consistency":"SOLID","name":"eggs","nameClean":"egg","original":"3 large eggs","originalName":"eggs","amount":3.0,"unit":"large","meta":[],"measures":{"us":{"amount":3.0,"unitShort":"large","unitLong":"larges"},"metric":{"amount":3.0,"unitShort":"large","unitLong":"larges"}}},
{"id":1034053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consistency":"LIQUID","name":"extra virgin olive oil","nameClean":"extra virgin olive oil","original":"0 extra virgin olive oil, for dipping bread, optional","originalName":"extra virgin olive oil, for dipping bread, optional","amount":0.0,"unit":"","meta":["for dipping bread, optional"],"measures":{"us":{"amount":0.0,"unitShort":"","unitLong":""},"metric":{"amount":0.0,"unitShort":"","unitLong":""}}},
{"id":20081,"aisle":"Baking","image":"flour.png","consistency":"SOLID","name":"flour","nameClean":"wheat flour","original":"1.5 c flour","originalName":"flour","amount":1.5,"unit":"c","meta":[],"measures":{"us":{"amount":1.5,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":354.882,"unitShort":"ml","unitLong":"milliliters"}}},{"id":4053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consistency":"LIQUID","name":"olive oil","nameClean":"olive oil","original":"2 c olive oil","originalName":"olive oil","amount":2.0,"unit":"c","meta":[],"measures":{"us":{"amount":2.0,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":473.176,"unitShort":"ml","unitLong":"milliliters"}}},{"id":1102047,"aisle":"Spices and Seasonings","image":"salt-and-pepper.jpg","consistency":"SOLID","name":"salt and pepper","nameClean":"salt and pepper","original":"0 salt and black pepper to taste","originalName":"salt and black pepper to taste","amount":0.0,"unit":"","meta":["black","to taste"],"measures":{"us":{"amount":0.0,"unitShort":"","unitLong":""},"metric":{"amount":0.0,"unitShort":"","unitLong":""}}}],
"id":6,
"title":"Fried Anchovies",
"readyInMinutes":15,
"servings":15,
"sourceUrl":"http://www.sippitysup.com/fried-anchovies",
"image":"https://spoonacular.com/recipeImages/6-556x370.jpg",
"imageType":"jpg",
"summary":"Fried Anchovies requires around <b>15 minutes</b> from start to finish. This recipe serves 15. One portion of this dish contains approximately <b>9g of protein</b>, <b>31g of fat</b>, and a total of <b>352 calories</b>. For <b>$1.49 per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 1 foodies and cooks. It is a good option if you're following a <b>dairy free and pescatarian</b> diet. Head to the store and pick up crusty bread, cayenne pepper, flour, and a few other things to make it today. It is brought to you by SippitySup. Overall, this recipe earns a <b>good spoonacular score of 42%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/fried-anchovies-253335\">Fried Anchovies</a>, <a href=\"https://spoonacular.com/recipes/fried-sage-with-anchovies-493285\">Fried Sage With Anchovies</a>, and <a href=\"https://spoonacular.com/recipes/fried-anchovies-with-sage-1\">Fried Anchovies with Sage</a>.",
"cuisines":[],
"dishTypes":["antipasti","starter","snack","appetizer","antipasto","hor d'oeuvre"],
"diets":["dairy free","pescatarian"],
"occasions":[],
"winePairing":{},
"instructions":"If you are using whole, fresh anchovies you must clean them first. Pull off the heads and pull out the insides. Then rinse with clean water.Pour the olive oil into a small deep saucepan set over heat. Use a deep fry thermometer to monitor the heat.Meanwhile, add the eggs to a small bowl and beat until well mixed. Add the flour, cayenne, salt and black pepper to a shallow bowl, use a fork to mix the ingredients together. Dip the fish one at a time into the beaten eggs and then roll it in flour.When the oil reaches 365 degrees F. fry the fish a few at a time, rolling them around in the oil to assure even cooking until they are golden brown (about 5-8 minutes). Serve with crusty bread, extra-virgin olive oil for dipping the bread (optional) and tomatoes.",
"analyzedInstructions":
[{"name":"",
"steps":[
    {"number":1,"step":"If you are using whole, fresh anchovies you must clean them first. Pull off the heads and pull out the insides. Then rinse with clean water.","ingredients":[{"id":15001,"name":"fresh anchovies","localizedName":"fresh anchovies","image":"fresh-anchovies.jpg"},{"id":14412,"name":"water","localizedName":"water","image":"water.png"}],"equipment":[]},
    {"number":2,"step":"Pour the olive oil into a small deep saucepan set over heat. Use a deep fry thermometer to monitor the heat.Meanwhile, add the eggs to a small bowl and beat until well mixed.","ingredients":[{"id":4053,"name":"olive oil","localizedName":"olive oil","image":"olive-oil.jpg"},{"id":1123,"name":"egg","localizedName":"egg","image":"egg.png"}],"equipment":[{"id":404789,"name":"kitchen thermometer","localizedName":"kitchen thermometer","image":"food-thermometer.jpg"},{"id":404669,"name":"sauce pan","localizedName":"sauce pan","image":"sauce-pan.jpg"},{"id":404783,"name":"bowl","localizedName":"bowl","image":"bowl.jpg"}]},
    {"number":3,"step":"Add the flour, cayenne, salt and black pepper to a shallow bowl, use a fork to mix the ingredients together. Dip the fish one at a time into the beaten eggs and then roll it in flour.When the oil reaches 365 degrees F. fry the fish a few at a time, rolling them around in the oil to assure even cooking until they are golden brown (about 5-8 minutes).","ingredients":[{"id":1102047,"name":"salt and pepper","localizedName":"salt and pepper","image":"salt-and-pepper.jpg"},{"id":2031,"name":"ground cayenne pepper","localizedName":"ground cayenne pepper","image":"chili-powder.jpg"},{"id":20081,"name":"all purpose flour","localizedName":"all purpose flour","image":"flour.png"},{"id":1123,"name":"egg","localizedName":"egg","image":"egg.png"},{"id":10115261,"name":"fish","localizedName":"fish","image":"fish-fillet.jpg"},{"id":0,"name":"roll","localizedName":"roll","image":"dinner-yeast-rolls.jpg"},{"id":0,"name":"dip","localizedName":"dip","image":""},{"id":4582,"name":"cooking oil","localizedName":"cooking oil","image":"vegetable-oil.jpg"}],"equipment":[{"id":404783,"name":"bowl","localizedName":"bowl","image":"bowl.jpg"}],"length":{"number":8,"unit":"minutes"}},
    {"number":4,"step":"Serve with crusty bread, extra-virgin olive oil for dipping the bread (optional) and tomatoes.","ingredients":[{"id":1034053,"name":"extra virgin olive oil","localizedName":"extra virgin olive oil","image":"olive-oil.jpg"},{"id":10018029,"name":"crusty bread","localizedName":"crusty bread","image":"crusty-bread.jpg"},{"id":11529,"name":"tomato","localizedName":"tomato","image":"tomato.png"},{"id":18064,"name":"bread","localizedName":"bread","image":"white-bread.jpg"}],"equipment":[]}]}],
    "originalId":null}

*/

async function getApiDiets() {
    const infoLanding= getAllRecipes()
    if (infoLanding) {
        const repetDiets= infoLanding.map(e=>e.repetDiets).flat()
        const diets = [...new Set(repetDiets)]
        return diets
    } }

module.exports={getAllRecipes, getApiDiets, getDietsRecipes, getInfoRecipe, getNamedRecipe}