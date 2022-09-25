import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RecipeCard from './RecipeCard/RecipeCard';
import {getAllRecipes,getDiets,sort,searchByDiet} from '../../actions';
import { useEffect } from 'react'
import './Home.css';
import { useState } from 'react';
import Pagination from '../Pagination/Pagination';


const INITIAL_PAGE=0
const LIMIT =3

export default function Home() {

  const [page, setPage]=useState(INITIAL_PAGE)
  const[currentRecipes,setCurrentRecipes]=useState([])

  const dispatch=useDispatch()
  const recipes= useSelector(state=>state.recipes)
  const filtered= useSelector(state=>state.filtered)
  const diets= useSelector(state=>state.diets)

  //ACTUALIZACION DE PAGINA
  useEffect(()=>{
    const lastRecipe=page*LIMIT+ LIMIT
    const firstRecipe=lastRecipe-LIMIT
    setCurrentRecipes((filtered.length!==0)?filtered.slice(firstRecipe,lastRecipe):recipes.slice(firstRecipe,lastRecipe))
  },[page,recipes,filtered])
 

useEffect(()=>{
  dispatch(getAllRecipes())
},[dispatch])

useEffect(()=>{
  dispatch(getDiets())
},[dispatch])


function handleSort(e) {
  var value = [e.target.value].toString()
  setPage(INITIAL_PAGE)
  dispatch(sort(value))
  setCurrentRecipes((filtered.length!==0)?filtered.slice(INITIAL_PAGE*LIMIT,LIMIT+1):
                                          recipes.slice(INITIAL_PAGE*LIMIT,LIMIT+1))
}

function handleOnSelect(e) {
  e.preventDefault()
  var value = [e.target.value]
  dispatch(searchByDiet(value))
}

function handlePage(e) {
  console.log('cambie de pagina')
  var value = [e.target.value]
  setPage(()=>{return value[0]})
}

function clearFilters(e) {
  
}





  return (
    <div className='back'>
      <div className='row'>
        <div id='filters'>
        <button onClick={(e)=>clearFilters(e)}> Clear Filters</button>

        <select name="sort" onChange={(e)=>handleSort(e)}>
            <option hidden>Sort Recipes</option>
            <option value="asc">Ascendant A-Z</option>
            <option value="des">Descensant Z-A</option>
            <option value='ascHealth'>Healthier</option>
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
