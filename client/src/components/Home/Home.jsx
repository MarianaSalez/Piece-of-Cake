import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RecipeCard from './RecipeCard/RecipeCard';
import {getAllRecipes,getDiets,sortByName,searchByDiet} from '../../actions';
import { useEffect } from 'react'
import './Home.css';
import { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import RecipesCard from './RecipesCards/RecipesCard';

const INITIAL_PAGE=0
const LIMIT =3

export default function Home() {

  const [page, setPage]=useState(INITIAL_PAGE)
  const[currentRecipes,setCurrentRecipes]=useState([])

  const dispatch=useDispatch()
  const recipes= useSelector(state=>state.recipes)
  const diets= useSelector(state=>state.diets)

  const lastRecipe=page*LIMIT+ LIMIT
  const firstRecipe=lastRecipe-LIMIT
  
 
                        


useEffect(()=>{
  console.log('entre a montar componente')
  dispatch(getAllRecipes())
},[dispatch])

useEffect(()=>{
  dispatch(getDiets())
},[dispatch])

useEffect(()=>{
  console.log('actualice esto')
  setCurrentRecipes(recipes.slice(firstRecipe,lastRecipe+1))
},[setCurrentRecipes, recipes])




function handleSort(e) {
  var value = [e.target.value].toString()
  setPage(INITIAL_PAGE)
  dispatch(sortByName(value))
  setCurrentRecipes(recipes.slice(firstRecipe,lastRecipe+1))
  
}

function handleOnSelect(e) {
  e.preventDefault()
  var value = [e.target.value]
  dispatch(searchByDiet(value))
}

function handlePage(e) {
  var value = [e.target.value]
  setPage(()=>{return value[0]})
  setCurrentRecipes(recipes.slice(firstRecipe,lastRecipe+1))

 
  
}


  return (
    <div className='back'>
      <div className='row'>
        <div id='filters'>
        <button> Clear Filters</button>

        <select name="sort" onChange={(e)=>handleSort(e)}>
            <option hidden>Sort Recipes</option>
            <option value="asc">Ascendant A-Z</option>
            <option value="des">Descensant Z-A</option>
            <option value='ascHelth'>Healthier</option>
            <option value='ascRate'>Popular</option>
        </select>
        
        <select name="filter" onChange={(e)=>handleOnSelect(e)} >
        <option hidden>Filter by Diet</option>
        {diets&&diets.map((d)=>
        <option value={d} key={d}>{d}</option>)}
        </select>
        
    </div>
    </div>
      {
        // currentRecipes&&<RecipesCard currentRecipes={currentRecipes}/>
        currentRecipes.length!==0&&currentRecipes.map((r)=>{
          return(
        
       <RecipeCard
        key={r.id}
        id={r.id}
        name={r.name}
        image={r.image}
        diets={r.diets}/>
          )
        })
      }
      <div>
        <Pagination recipes={recipes?.length} paginate={(e)=>handlePage(e)} recipesPerPage={LIMIT}/>
      </div>

    </div>
    
  )
}
