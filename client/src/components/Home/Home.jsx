import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RecipeCard from './RecipeCard/RecipeCard';
import {getAllRecipes,getDiets,sortByName,searchByDiet} from '../../actions';
import { useEffect } from 'react'
import './Home.css';


export default function Home() {
  const dispatch=useDispatch()
  const recipes= useSelector((state)=>state.recipes)
  const diets= useSelector((state)=>state.diets)

  function handleSort(e) {
    e.preventDefault()
    var value = [e.target.value].toString()
    dispatch(sortByName(value))
  
  }

  function handleOnSelect(e) {
    e.preventDefault()
    var value = [e.target.value]
    dispatch(searchByDiet(value))
  }

useEffect(()=>{
  dispatch(getAllRecipes())
},[dispatch])

useEffect(()=>{
  dispatch(getDiets())
},[dispatch])

  
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


      <div className='home'>
      {
        
        recipes&&recipes.map((r)=>
        <div>
       <RecipeCard
        key={r.id}
        id={r.id}
        name={r.name}
        image={r.image}
        diets={r.diets}/>
        </div>
        )
      }
      </div>

    </div>
    
  )
}
