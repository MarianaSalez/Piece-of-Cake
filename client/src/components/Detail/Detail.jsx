import React,{ useEffect } from 'react'
import { useSelector } from 'react-redux'
import {getDetail} from '../../actions';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import './Detail.css';

export default function Detail() {
  
const dispatch=useDispatch()
const {id}=useParams()


  useEffect(()=>{
    dispatch(getDetail(id))
  },[dispatch, id])


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
    <p dangerouslySetInnerHTML={{__html:r.summary}}/>
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
    
   
    </>
    
  )
}
