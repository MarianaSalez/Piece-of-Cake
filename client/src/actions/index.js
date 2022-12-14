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
export const CHANGE_FOUND="CHANGE_FOUND"



export function getAllRecipes(){
    return async function (dispatch) {
        let json = await axios.get("/recipes");
        return dispatch({ type: GET_ALL_RECIPES, payload: json.data });
      };
}

export function searchByName(name){
    return async function (dispatch) {
        let json = await axios.get("/recipes?name="+name);
        if(json==='NOT FOUND') return{type:CHANGE_FOUND}
        else return dispatch({ type: SEARCH_BY_NAME, payload: json.data });
      };

}

export function searchByDiet(name){
    return async function (dispatch) {
        let json = await axios.get("/recipes?diet="+name);
        return dispatch({ type: SEARCH_BY_DIET, payload: json.data });
      };
    
}

export function getRandom(){
    return async function (dispatch) {
        let json = await axios.get("/recipes/random");
        return dispatch({ type: GET_RANDOM, payload: json.data });
      };
}

export function getDetail(id){
    return async function (dispatch) {
        let json = await axios.get("/recipes/"+id);
        return dispatch({ type: GET_DETAIL, payload: json.data });
      };
}


export function createRecipe(data){
    return async function () {
        let json = await axios.post("/recipes/create",data);
        return json;
      };
}

export const sort = (payload) => {
    return{type:SORT, payload}}

export const cleanFilter = () => {
    return{type:CLEAN_FILTER}}



export function getDiets(){
    return async function (dispatch) {
        let json = await axios.get("/diets");
        return dispatch({ type: GET_DIETS, payload: json.data });
        };
    }

export const changeLoagind = () => {
    return{type:CHANGE_LOADING}}

export const changeFound = () => {
        return{type:CHANGE_FOUND}}
