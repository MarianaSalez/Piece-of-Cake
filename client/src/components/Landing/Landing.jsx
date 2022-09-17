import React from 'react'
import './Landing.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getDiets,changeLoagind} from '../../actions';
import { useEffect } from 'react'

export default function Landing() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getDiets())
  },[dispatch])
  
  const diets=useSelector(state=>state.diets)
  
  return (
    <div className='container'>
      <h1>What are you in a mood for?</h1> 
      <Link to='/recipes'>
      <button onClick={()=>dispatch(changeLoagind())}>Don't Know, show me all</button>
      </Link>
      <div>
        {diets.map((d)=> 
          <Link key={d} to= {`/recipes?name=${d}`}>
          <button onClick={()=>dispatch(changeLoagind())} >{d}</button>
          </Link>)}
      </div>
      </div>
  )
}
