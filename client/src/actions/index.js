import axios from "axios"
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const SEARCH_BY_DIET = "SEARCH_BY_DIET";
export const GET_RANDOM = "GET_RANDOM";
export const GET_DETAIL = "GET_DETAIL";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const SORT = "SORT";
export const CLEAN_FILTER = "CLEAN_FILTER";
export const GET_DIETS = "GET_DIETS";
export const CHANGE_LOADING = "CHANGE_LOADING";

// const jsonbak=[
//     {
//     "score": 3689,
//     "healthScore": 76,
//     "id": 716426,
//     "name": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
//     "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
//     "summary": "Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199\">Vegetable Fried Brown Rice</a>, <a href=\"https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261\">Vegetable Fried Cauliflower Rice</a>, and <a href=\"https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042\">Easy Vegetable Fried Brown Rice with Egg</a>.",
//     "diets": [
//     "gluten free",
//     "dairy free",
//     "lacto ovo vegetarian",
//     "vegan"
//     ],
//     },
//     {
//     "score": 1669,
//     "healthScore": 77,
//     "creditsText": "Jen West",
//     "id": 715594,
//     "name": "Homemade Garlic and Basil French Fries",
//     "image": "https://spoonacular.com/recipeImages/715594-312x231.jpg",
//     "summary": "The recipe Homemade Garlic and Basil French Fries is ready <b>in roughly 45 minutes</b> and is definitely a super <b>vegan</b> option for lovers of American food. One serving contains <b>596 calories</b>, <b>18g of protein</b>, and <b>15g of fat</b>. For <b>83 cents per serving</b>, you get a side dish that serves 2. Several people made this recipe, and 1669 would say it hit the spot. If you have garlic salt, flour, garlic powder, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/homemade-french-fries-with-fresh-garlic-and-dill-494220\">Homemade French Fries with Fresh Garlic and Dill</a>, <a href=\"https://spoonacular.com/recipes/roasted-garlic-french-fries-519898\">Roasted Garlic French Fries</a>, and <a href=\"https://spoonacular.com/recipes/sweet-potato-fries-with-basil-salt-and-garlic-mayonnaise-120735\">Sweet Potato Fries With Basil Salt and Garlic Mayonnaise</a> for similar recipes.",
//     "diets": [
//     "dairy free",
//     "lacto ovo vegetarian",
//     "vegan"
//     ]},
//     {
//     "score": 689,
//     "healthScore": 63,
//     "id": 715497,
//     "name": "Berry Banana Breakfast Smoothie",
//     "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
//     "summary": "If you have around <b>5 minutes</b> to spend in the kitchen, Berry Banana Breakfast Smoothie might be a tremendous <b>lacto ovo vegetarian</b> recipe to try. This recipe makes 1 servings with <b>501 calories</b>, <b>21g of protein</b>, and <b>11g of fat</b> each. For <b>$2.19 per serving</b>, this recipe <b>covers 32%</b> of your daily requirements of vitamins and minerals. 688 people found this recipe to be tasty and satisfying. It is brought to you by Pink When. Head to the store and pick up graham crackers, soy milk, banana, and a few other things to make it today. It works well as a morn meal. Overall, this recipe earns a <b>super spoonacular score of 100%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-249239\">Berry Banana Breakfast Smoothie</a>, <a href=\"https://spoonacular.com/recipes/berry-and-banana-oat-breakfast-smoothie-626817\">Berry and Bananan Oat Breakfast Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/berry-breakfast-smoothie-774875\">Berry Breakfast Smoothie</a>.",
//     "diets": [
//     "lacto ovo vegetarian"
//     ],
//     },
//     {
//     "score": 19,
//     "healthScore": 92,
//     "id": 644387,
//     "name": "Garlicky Kale",
//     "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
//     "summary": "Garlicky Kale might be just the side dish you are searching for. This caveman, gluten free, primal, and whole 30 recipe serves 2 and costs <b>69 cents per serving</b>. One serving contains <b>179 calories</b>, <b>3g of protein</b>, and <b>15g of fat</b>. A few people made this recipe, and 17 would say it hit the spot. If you have olive oil, garlic, curly kale, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is awesome. Try <a href=\"https://spoonacular.com/recipes/garlicky-kale-248759\">Garlicky Kale</a>, <a href=\"https://spoonacular.com/recipes/garlicky-kale-14910\">Garlicky Kale</a>, and <a href=\"https://spoonacular.com/recipes/garlicky-kale-crostini-15010\">Garlicky Kale Crostini</a> for similar recipes.",
//     "diets": [
//     "gluten free",
//     "dairy free",
//     "paleolithic",
//     "lacto ovo vegetarian",
//     "primal",
//     "whole 30",
//     "vegan"
//     ],
//    },
//     {
//     "score": 124,
//     "healthScore": 100,
//     "id": 716268,
//     "name": "African Chicken Peanut Stew",
//     "image": "https://spoonacular.com/recipeImages/716268-312x231.jpg",
//     "summary": "Need a <b>gluten free and dairy free main course</b>? African Chicken Peanut Stew could be a tremendous recipe to try. This recipe makes 1 servings with <b>1377 calories</b>, <b>75g of protein</b>, and <b>102g of fat</b> each. For <b>$3.87 per serving</b>, this recipe <b>covers 62%</b> of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. 124 people have tried and liked this recipe. Head to the store and pick up bell peppers, tomato, pepper, and a few other things to make it today. To use up the tomato you could follow this main course with the <a href=\"https://spoonacular.com/recipes/pink-peony-popcorn-balls-129348\">Pink Peony Popcorn Balls</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. Try <a href=\"https://spoonacular.com/recipes/african-chicken-peanut-stew-245461\">African Chicken Peanut Stew</a>, <a href=\"https://spoonacular.com/recipes/west-african-peanut-chicken-stew-163315\">West African Peanut-Chicken Stew</a>, and <a href=\"https://spoonacular.com/recipes/one-pot-african-peanut-stew-854978\">One-Pot African Peanut Stew</a> for similar recipes.",
//     "diets": [
//     "gluten free",
//     "dairy free"
//     ],
//     },
//     {
//     "score": 361,
//     "healthScore": 89,
//     "creditsText": "Afrolems",
//     "id": 716381,
//     "name": "Nigerian Snail Stew",
//     "image": "https://spoonacular.com/recipeImages/716381-312x231.jpg",
//     "summary": "Nigerian Snail Stew might be just the main course you are searching for. For <b>$9.08 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. This recipe makes 1 servings with <b>363 calories</b>, <b>23g of protein</b>, and <b>5g of fat</b> each. Plenty of people made this recipe, and 361 would say it hit the spot. If you have chili powder, snails, limes, and a few other ingredients on hand, you can make it. To use up the ice cubes you could follow this main course with the <a href=\"https://spoonacular.com/recipes/nectarine-blackberry-and-pecan-sundaes-50465\">Nectarine, Blackberry, and Pecan Sundaes</a> as a dessert. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. It is a good option if you're following a <b>gluten free, dairy free, and whole 30</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/nigerian-kidney-bean-stew-with-a-peanut-sauce-112643\">Nigerian Kidney Bean Stew With a Peanut Sauce</a>, <a href=\"https://spoonacular.com/recipes/little-snail-rolls-369096\">Little Snail Rolls</a>, and <a href=\"https://spoonacular.com/recipes/maple-snail-cookies-76877\">Maple Snail Cookies</a> for similar recipes.",
//     "diets": [
//     "gluten free",
//     "dairy free",
//     "paleolithic",
//     "primal",
//     "whole 30"
//     ],
//     },
//     {
//     "score": 53,
//     "healthScore": 100,
//     "id": 782601,
//     "name": "Red Kidney Bean Jambalaya",
//     "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
//     "summary": "Red Kidney Bean Jambalaya might be just the <b>Creole</b> recipe you are searching for. One serving contains <b>538 calories</b>, <b>21g of protein</b>, and <b>8g of fat</b>. For <b>$1.69 per serving</b>, this recipe <b>covers 34%</b> of your daily requirements of vitamins and minerals. This recipe from foodandspice.blogspot.com has 52 fans. A few people really liked this main course. Head to the store and pick up brown rice, vegetable stock, liquid smoke, and a few other things to make it today. To use up the sea salt you could follow this main course with the <a href=\"https://spoonacular.com/recipes/raspberry-sea-salt-brownies-494161\">Raspberry Sea Salt Brownies</a> as a dessert. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Try <a href=\"https://spoonacular.com/recipes/red-kidney-bean-dip-148569\">Red Kidney Bean Dip</a>, <a href=\"https://spoonacular.com/recipes/kidney-bean-dip-119992\">Kidney Bean Dip</a>, and <a href=\"https://spoonacular.com/recipes/red-kidney-bean-curry-80686\">Red Kidney Bean Curry</a> for similar recipes.",
//     "diets": [
//     "gluten free",
//     "dairy free",
//     "lacto ovo vegetarian",
//     "vegan"
//     ]},
//     {
//     "score": 44,
//     "healthScore": 100,
//     "id": 794349,
//     "name": "Broccoli and Chickpea Rice Salad",
//     "image": "https://spoonacular.com/recipeImages/794349-312x231.jpg",
//     "summary": "Need a <b>gluten free and vegan main course</b>? Broccoli and Chickpea Rice Salad could be a spectacular recipe to try. One serving contains <b>524 calories</b>, <b>19g of protein</b>, and <b>12g of fat</b>. For <b>$1.38 per serving</b>, this recipe <b>covers 36%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up almonds, olive oil, 2 tablespoons pineapple juice (juice from canned pineapple), and a few other things to make it today. 42 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/easy-balsamic-chickpea-brown-rice-broccoli-salad-101160\">Easy Balsamic Chickpea, Brown Rice & Broccoli Salad</a>, <a href=\"https://spoonacular.com/recipes/super-easy-chickpea-brown-rice-broccoli-crockpot-casserole-584241\">Super Easy Chickpea, Brown Rice & Broccoli Crockpot Casserole</a>, and <a href=\"https://spoonacular.com/recipes/chickpea-and-broccoli-salad-29686\">Chickpean And Broccoli Salad</a>.",
//     "diets": [
//     "gluten free",
//     "dairy free",
//     "lacto ovo vegetarian",
//     "vegan"
//     ],
//     },
//     {
//     "score": 57,
//     "healthScore": 100,
//     "id": 715446,
//     "name": "Slow Cooker Beef Stew",
//     "image": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
//     "diets": [
//     "gluten free",
//     "dairy free"
//     ],
//    },
//     {
//     "score": 1866,
//     "healthScore": 73,
//     "id": 715415,
//     "name": "Red Lentil Soup with Chicken and Turnips",
//     "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
//     "diets": [
//     "gluten free",
//     "dairy free"
//     ],
//    }]

// const dietsApi=['gluten free',
// 'dairy free',
// 'lacto ovo vegetarian',
// 'vegan',
// 'paleolithic',
// 'primal',
// 'whole 30']

export function getAllRecipes(){
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/recipes");
        return dispatch({ type: GET_ALL_RECIPES, payload: json.data });
      };
    // return async function (dispatch) {
    //     return dispatch({ type: GET_ALL_RECIPES, payload: jsonbak}) }
}

export function searchByName(name){
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/recipes?name="+name);
        return dispatch({ type: SEARCH_BY_NAME, payload: json.data });
      };

}

export function searchByDiet(name){
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/recipes?diet="+name);
        return dispatch({ type: SEARCH_BY_DIET, payload: json.data });
      };
    
}

export function getRandom(){
    return async function (dispatch) {
        console.log('entre en funcion getRandom')
        let json = await axios.get("http://localhost:3001/recipes/random");
        console.log(json)
        return dispatch({ type: GET_RANDOM, payload: json.data });
      };
}

export function getDetail(id){
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/recipes/"+id);
        return dispatch({ type: GET_DETAIL, payload: json.data });
      };
}


export function createRecipe(data){
    return async function () {
        let json = await axios.post("http://localhost:3001/recipes/create",data);
        return json;
      };
}

export const sort = (payload) => {
    return{type:SORT, payload}}

export const cleanFilter = () => {
    return{type:CLEAN_FILTER}}



export function getDiets(){
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/diets");
        return dispatch({ type: GET_DIETS, payload: json.data });
        };
      
    }

export const changeLoagind = () => {
    return{type:CHANGE_LOADING}}

