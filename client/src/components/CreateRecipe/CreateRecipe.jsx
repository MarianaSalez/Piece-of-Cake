import React, {useEffect} from 'react';
import { createRecipe } from '../../actions';
import './create.css';
import { useDispatch,useSelector } from 'react-redux';
import { getDiets } from '../../actions';


export default function CreateRecipe() {

  const dispatch=useDispatch()
  const diets= useSelector(state=>state.diets)

  const[data, setData]=React.useState({
    name:'',
    summary:'',
    score:0,
    healthScore:0,
    steps:[],
    image:'',
    diets:[],
  })


  useEffect(()=>{
    dispatch(getDiets())
  },[dispatch])
  
  
// function validate(data) {
//   let error={}
//   if(!data.name){
//     error.name= 'Which is the Recipe name?'
//   }
  
// }

  
  let handleOnChange=(e)=>{
    setData({...data,
      [e.target.name]:e.target.value})
  }

  let handleSelectedDiets=(e)=>{
    if(e.target.checked){
      if(!data.diets.includes(e.target.value)){
        setData({...data,
          [data.diets]:[...data.diets,e.target.value]})
      }
    }
    else{
      const filt=data.diets.filter((d)=>d!==e.target.value)
      setData({...data,
        [data.diets]:filt})
    }
    return console.log(data)
  }
    
   

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(createRecipe(data))
    setData({
      name:'',
      summary:'',
      score:0,
      healthScore:0,
      steps:[],
      image:'',
      diets:[],
    })
  }
  
  return (
    <>
     <form onSubmit={handleOnSubmit}>
        <label>Recipe Name: </label>
        <input onChange={handleOnChange} name='name' value={data.name}></input>
        <label>Summary: </label>
        <textarea onChange={handleOnChange} name='summary' value={data.summary}/>
        <label>score: </label>
        <input onChange={handleOnChange} type='number' name='score' value={data.score}></input>
        <label>Health Score: </label>
        <input onChange={handleOnChange} type='number' name='healthScore' value={data.healthScore}></input>
        <label>Steps: </label>
        <textarea onChange={handleOnChange} name='steps' value={data.steps}/>
        <label>Image: </label>
        <input onChange={handleOnChange} type='image' name='image' value={data.image} alt='RecipeImage'></input>
     
     <div>
    <label>Diets</label>
    {diets&&diets.map((d)=>
        <button value={d} key={d}>{d} <input onChange={handleSelectedDiets} type='checkbox' value={d}></input></button>)}

     </div>
        {/* <select name="filter" onChange={(e)=>handleSelectedDiets(e)} >
        <option hidden>Filter by Diet</option>
        {diets&&diets.map((d)=>
        <option value={d} key={d}>{d}</option>)}
        </select> */}
      
      <button type="submit" >Create</button>
     </form>
    </>
  );
};


