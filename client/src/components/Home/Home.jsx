import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RecipeCard from './RecipeCard/RecipeCard';
import {getAllRecipes} from '../../actions';
import { useEffect } from 'react'
import './Home.css';

export default function Home() {
  const dispatch=useDispatch()
  const recipes= useSelector((state)=>state.recipes)

useEffect(()=>{
  dispatch(getAllRecipes())
},[dispatch])
  
  return (
    <div>
      {
        recipes&&recipes.map((r)=>
       <RecipeCard
        key={r.id}
        id={r.id}
        name={r.name}
        image={r.image}
        diets={r.diets}/>
        )
      }
      </div>
  )
}
