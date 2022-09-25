import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getDetail } from '../../../actions';
import './RecipeCard.css';


export default function RecipeCard(recipe) {
  const dispatch=useDispatch()
  return (
    <div className='card'>
    <div>{recipe.name}</div>
    <img src={recipe.image} alt=' '/>
    <ul>
    {Array.isArray(recipe.diets)? recipe.diets.map((d)=><li key={d}>{d}</li>):
      <li>No tiene Dieta asignada</li>
      }
    </ul>
    <Link to={`/recipes/${recipe.id}`}>
    <button onClick={()=>dispatch(getDetail(recipe.id))}>View</button>
    </Link>
    
  
    </div>
  )
}