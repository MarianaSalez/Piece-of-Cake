
// Importa las actions types que necesites acá:
import {GET_ALL_RECIPES, SEARCH_BY_NAME, SEARCH_BY_DIET, GET_RANDOM, GET_DETAIL, CREATE_RECIPE, SORT_BY_NAME, SORT_BY_HEALTH, GET_POPULAR, GET_DIETS,CHANGE_LOADING} from "../actions";


const initialState = {
  loading: true,
  recipe:{},
  recipes: [],
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      // Acá va tu código:
      case GET_ALL_RECIPES:
        return {...state, recipes:action.payload, loading:false}
      
      case SEARCH_BY_NAME:
        return {...state, recipe:action.payload, loading:false}
      
      case SEARCH_BY_DIET:
        return {...state, recipes:action.payload, loading:false}
      
      case GET_RANDOM:
        return {...state, recipe:action.payload, loading:false}

      case GET_DETAIL:
        return {...state, recipe:action.payload, loading:false}
        
      case CREATE_RECIPE:
        return {...state, recipes: [...state.recipes, action.payload], loading:false}
     
      case SORT_BY_NAME:
        return {...state, recipes:action.payload, loading:false}

      case SORT_BY_HEALTH:
        return {...state, recipes:action.payload, loading:false}

      case GET_POPULAR:
        return {...state, recipes:action.payload, loading:false}

      case GET_DIETS:
        return {...state, diets:action.payload}
      
      case CHANGE_LOADING:
        return {...state, loading:(!state.loading)}
    
      default:
        return state

     
  };
};

export default rootReducer;