import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getAllRecipes,getDiets,searchByDiet} from '../../actions'

export default function Landing() {
  const dispatch = useDispatch()
  //const diets=useDispatch({ type: 'GET_DIETS' })
 // console.log(diets)
  return (
    <div>
      <h1>What are you in a mood for?</h1> 
      <Link to='/recipes'>
      <button onClick={() => dispatch(getAllRecipes())}>Don't Know, show me all</button>
      </Link>
      <div>
        {/*diets.map((d)=><button onClick={() => dispatch(searchByDiet(this.innerText))}
        >{d.name}</button>)*/}
      </div>
      </div>
  )
}
