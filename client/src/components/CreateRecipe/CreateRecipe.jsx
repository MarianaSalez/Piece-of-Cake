import React, {useEffect} from 'react';
import { createRecipe } from '../../actions';
import './create.css';
import { useDispatch,useSelector } from 'react-redux';
import { getDiets } from '../../actions';
//import cloudinary from 'cloudinary'


export default function CreateRecipe() {

  const dispatch=useDispatch()
  const diets= useSelector(state=>state.diets)

  // const myWidget = cloudinary.createUploadWidget({
  //   cloudName: 'dvkvyi1dr', 
  //   uploadPreset: 'Data_Base'}, (error, result) => { 
  //     if (!error && result && result.event === "success") { 
  //       setData({...data, image: `https://res.cloudinary.com/${cloudName}/${result.info.resource_type}/${result.info.type}/v${result.info.version}/${result.info.pyblic_id}.${result.info.format}`})
  //       console.log('Done! Here is the image info: ', data.image); 
  //     }
  //   }
  // )
  
  

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
        setData({...data, diets: [...data.diets, e.target.value]})
      }
    }
    else{
      const filt=data.diets.filter((d)=>d!==e.target.value)
      setData({...data,
        diets:filt})
    }
  }
    
  let handleImage=()=>{
  // document.getElementById("upload_widget").addEventListener("click", function(){
  //   myWidget.open();
  // }, false);}
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
    <div className='formContainer'>
     <form onSubmit={handleOnSubmit} className='form' >
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
        <button  id="upload_widget" onChange={handleImage} type='image' name='image' value={data.image} alt='RecipeImage'>Uploead Image</button>
     
     <div>
    <label>Diets</label>
    {diets&&diets.map((d)=>
        <button value={d} key={d}>{d} <input onChange={handleSelectedDiets} type='checkbox' value={d}></input></button>)}

     </div>
    
      <button type="submit" onSubmit={handleOnSubmit} >Create</button>
     </form>
    </div>
  );
};


