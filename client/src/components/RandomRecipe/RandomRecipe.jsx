import React,{ useEffect } from 'react'
import { getRandom } from '../../actions'
import { useSelector,useDispatch } from 'react-redux'
import './RandomRecipe.css';

export default function RandomRecipe() {
  const dispatch=useDispatch()
  
  
  
    useEffect(()=>{
      dispatch(getRandom())
    },[dispatch,])
  
  
   const r= useSelector((state)=>state.recipe)
    
  
    return (
    <>
    {(Object.keys(r).length !== 0)?
    <>
    <div>
    <h1>{r.name}</h1>
    {r.diets.map((d)=><p key={d}>{d}</p>)}
    <img src={r.image} alt=' '/>
    <div>{r.healthScore}</div>
    </div>
    <div>
      <p>{r.summary}</p>
      <ul>
        <p>Ingredients:</p>
      {r.ingredients.map((i)=>
        <li>
          {/* <img src={i.img}/> */}
          {`${i.cant}${i.un} ${i.name} `}
        </li>)}
      </ul>
  
      </div>
      <div>
        <ol>
        {r.steps.map((s)=><li>{s.step}</li>)}
        </ol>
      </div>
      </>:
      <p>Loading...</p>
  
  
    }
      
     
      </>)
}
