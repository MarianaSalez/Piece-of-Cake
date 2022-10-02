import React,{ useEffect } from 'react'
import { getRandom } from '../../actions'
import { useSelector,useDispatch } from 'react-redux'
import './../Detail/Detail.css';

export default function RandomRecipe() {
  const dispatch=useDispatch()
  
  
  
    useEffect(()=>{
      dispatch(getRandom())
    },[dispatch,])
  
  
   const r= useSelector((state)=>state.recipe)
    
   return (
    <>
    {(Object.keys(r).length !== 0)?
    <div className='backDetail'>
    <div id='recTitle'>
    <h1 className='titleDetail'>{r.name}</h1>
    <div className='dietsDetail'>
      Dietas:
    {r.diets?r.diets.map((d)=><p key={d}>{d}</p>):
    <p>Sin dietas asociadas</p>}
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
          {/* <img src={i.img}/> */}
          {`${i.cant} ${i.un} ${i.name} `}
        </li>):
        <li> Disculpe no se encuentran los Ingredientes</li>}
      </ul>
  
      </div>
      <div id='steps'>
        <ol>
        {r.steps?r.steps.map((s)=><li className='liDetail'>{s.step}</li>):
        <p>No se encontraron los pasos de esta receta</p>}
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