import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipesCards.css'

export default function RecipesCard(props) {
    const recipes=props.currentRecipes
   
  return (
   
    <div className='home'>
    {
      
      recipes&&recipes.map((r)=>{
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
    </div>
  )
}
