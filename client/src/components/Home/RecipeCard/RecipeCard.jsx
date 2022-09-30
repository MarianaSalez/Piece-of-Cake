import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getDetail } from '../../../actions';
import './RecipeCard.css';


export default function RecipeCard(recipe) {
  const dispatch=useDispatch()
  return (
    <div className='card'>
    <h2 className='RecipecardTitle'>{recipe.name}</h2>
    <ul>
    {Array.isArray(recipe.diets)? recipe.diets.map((d)=><li key={d}>{d} |</li>):
      <li>No tiene Dieta asignada</li>
      }
    </ul>
    <img src={recipe.image} alt=' '/>
    <br/>
    <div>
      <Link to={`/recipes/${recipe.id}`}>
    <button className='buttonDetail' onClick={()=>dispatch(getDetail(recipe.id))}>View More</button>
    </Link>

    </div>
    
    
  
    </div>
  )
}