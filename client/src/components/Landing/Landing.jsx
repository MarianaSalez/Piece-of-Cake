import React from 'react'
import './Landing.css';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {changeLoagind} from '../../actions';


export default function Landing() {
  const dispatch = useDispatch()
  
  return (
    <div className='container'>
      <h1>What are you in a mood for?</h1> 
      <Link to='/recipes'>
      <button onClick={()=>dispatch(changeLoagind())}>Don't Know, show me all</button>
      </Link>
      </div>
  )
}
