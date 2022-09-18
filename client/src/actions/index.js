import axios from "axios"
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const SEARCH_BY_DIET = "SEARCH_BY_DIET";
export const GET_RANDOM = "GET_RANDOM";
export const GET_DETAIL = "GET_DETAIL";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_HEALTH = "SORT_BY_HEALTH";
export const GET_POPULAR = "GET_POPULAR";
export const GET_DIETS = "GET_DIETS";
export const CHANGE_LOADING = "CHANGE_LOADING";



export function getAllRecipes(){
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/recipes");
        return dispatch({ type: GET_ALL_RECIPES, payload: json.data });
      };
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
        let json = await axios.get("http://localhost:3001/recipes/random");
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

export const sortByName = (payload) => {
    return{type:SORT_BY_NAME, payload}}

export const sortByHealth = (payload) => {
    return{type:SORT_BY_HEALTH, payload}}

export const getPopular = (payload) => {
    return{type:GET_POPULAR, payload}}

export function getDiets(){
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/diets");
        return dispatch({ type: GET_DIETS, payload: json.data });
        };
    }

export const changeLoagind = () => {
    return{type:CHANGE_LOADING}}
