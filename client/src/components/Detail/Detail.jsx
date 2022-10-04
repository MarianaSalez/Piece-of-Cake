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
  <h1 className='titleDetail'>{r.name}</h1>
  <div className='dietsDetail'>
  {r.diets?<p>Dietas:</p>: <span/>}
  {r.diets?r.diets.map((d)=><p key={d}>{d}</p>):
  <span/>}
  </div>
 
  </div>
  <div id='recimage'>
  <img className='recImg' src={r.image} alt=' '/>
  </div>
  <div id='recScore'>{`Score:
        ${r.healthScore}`}</div>
  
  <div id='description'>
    <p>{r.summary&& r.summary.replace(/<[^>]+>/g, "")}</p> 
    </div>
    <div id='ingridients'>
    <p>Ingredients:</p>
    <ul className='listIng' >
    {r.ingredients?r.ingredients.map((i)=>
      <li>
        {`${i.cant} ${i.un} ${i.name} `}
      </li>):
      <li> Disculpe no se encuentran los Ingredientes</li>}
    </ul>

    </div>
    <div id='steps'>
      <ol>
      {r.steps&&Array.isArray(r.steps)&&(r.steps[0].hasOwnProperty("step"))?
      r.steps.map((s)=><li className='liDetail'>{s.step}</li>):
      r.steps&&Array.isArray(r.steps)?
      r.steps.map((s)=><li className='liDetail'>{s}</li>):
      (typeof(r.steps)==='string')?
      <>
      <p>{r.steps.replace("{", "").replace("}", "")}</p>
      </>
      :
        <p>No se encontraron los pasos de esta receta</p>}
      </ol>
    </div>
    </div>:

    <div  className='backDetailLoading'>
      <h1>Loading...</h1>
        <p>
          <img className='detailLoadingImage' src='https://res.cloudinary.com/dvkvyi1dr/image/upload/v1664649018/PI-FOOD/wock_loading_cgrkh6.gif' alt='Loading'/>
        </p>
    </div>
  }
    
   
    </>
    
  )
}
