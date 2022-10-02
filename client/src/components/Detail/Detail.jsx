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
  <div className='backDetail'>
  <div id='recTitle'>
  <h1>{r.name}</h1>
  {r.diets.map((d)=><p key={d}>{d}</p>)}
  </div>
  <div id='recimage'>
  <img className='recImg' src={r.image} alt=' '/>
  </div>
  <div id='recScore'>{`This score recipeis:
        ${r.healthScore}`}</div>
  
  <div id='description'>
    <p  dangerouslySetInnerHTML={{__html:r.summary}}/>
    </div>
    <div id='ingridients'>
    <p>Ingredients:</p>
    <ul className='listIng' >
    {r.ingredients.map((i)=>
      <li>
        {/* <img src={i.img}/> */}
        {`${i.cant} ${i.un} ${i.name} `}
      </li>)}
    </ul>

    </div>
    <div id='steps'>
      <ol>
      {r.steps.map((s)=><li>{s.step}</li>)}
      </ol>
    </div>
    </div>:
    <p>
      <img src='https://res.cloudinary.com/dvkvyi1dr/image/upload/v1664649018/PI-FOOD/wock_loading_cgrkh6.gif' alt='Loading'/>
    </p>


  }
    
   
    </>
    
  )
}
