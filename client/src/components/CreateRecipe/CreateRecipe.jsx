import React from 'react';
import { createRecipe } from '../../actions';
import './CreateRecipe.css';
import { useDispatch } from 'react-redux';
export default function CreateRecipe() {

  const[data, setData]=React.useState({
    name:'',
    summary:'',
    score:0,
    healthScore:0,
    steps:[],
    image:'',
    diets:[],
  })

  
function validate(data) {
  let error={}
  if(!data.name){
    error.name= 'Which is the Recipe name?'
  }
  
}

  const dispatch=useDispatch()
  
  let handleOnChange=(e)=>{
    setData({...data,
      [e.target.name]:e.target.value})
  }

  let handleSelectedDiets=(e)=>{
    if(!data.diets.includes(e.target.value)){
      setData({...data,
        [data.diets]:[...data.diets,e.target.value]})
    }
    //else validar datos pues formulario controlado
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
        <input onChange={handleOnChange} name='summary' value={data.summary}></input>
        <label>Words: </label>
        <input onChange={handleOnChange} name='words' value={data.words}></input>
      <button type="submit" >Create</button>
     </form>
    </>
  );
};


