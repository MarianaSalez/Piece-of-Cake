import React from 'react'
import './Landing.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {changeLoagind,getAllRecipes,getDiets,searchByDiet} from '../../actions';
import { useEffect } from 'react'

export default function Landing() {
  const dispatch = useDispatch()
  const diets= useSelector(state=>state.diets)

  useEffect(()=>{
    dispatch(getDiets())
  },[dispatch])

   useEffect(()=>{
   dispatch(getAllRecipes())
 },[dispatch])


  return (
    <div className='containerLanding'>
      <h1 className='titleLanding'>What are you in a mood for?</h1> 
      <Link to='/recipes'>
      <button className='landignButton' onClick={()=>dispatch(changeLoagind())}>Don't Know, show me all</button>
      </Link>

      <h2 className='subtitleLanding'>Something in this Diet:</h2> 
      <div className='buttonslanding'>
      {diets&&diets.map((d)=>
      <Link  to='/recipes'>
      <button  key={d} value={d} className='sublandignButton' onClick={(e)=>dispatch(searchByDiet(e.target.value))}>{d}</button>
      </Link>)}
    </div>
      </div>
  )
}
