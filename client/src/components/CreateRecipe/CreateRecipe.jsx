import React, {useEffect} from 'react';
import { createRecipe } from '../../actions';
import './create.css';
import { useDispatch,useSelector } from 'react-redux';
import { getDiets } from '../../actions';
import axios from 'axios';
import { useState } from 'react';



function validate(data) {
  let errores={}
  if(!data.name)errores.name='Set the Recipe Name'
  
  if(!data.summary)errores.summary=`What's this recipe about?`
  
  if(data.summary.length>1500)errores.summary='Please synthesize, you can only public 1500 characters'
  
  if(!data.score) errores.score='Enter this recipe score'

  if(!data.healthScore) errores.healthScore='Enter this recipe Health Score'

  if(data.healthScore>100||data.healthScore<0) errores.healthScore='The health Score range is between 0-100. Enter a valid value'
  
  if(!data.steps) errores.steps='Enter the steps we must folow to make this recipe'

  if(!data.image) errores.image='Please upload this recipe image, it is nice to see what we are going to prepare'

  if(data.diets.length===0) errores.diets='Please select at least one diet'
  
  return errores}

export default function CreateRecipe() {

  const dispatch=useDispatch()
  const diets= useSelector(state=>state.diets)


  const [error, setError]=useState({})
  const[data, setData]=useState({
    name:'',
    summary:'',
    score:0,
    healthScore:0,
    steps:[],
    image:'',
    diets:[],
  })


  const [selectedImage, setSelectedImage]=useState('')
  const [previewSource, setPreviewSource]= useState()

  
let handleFileInputChange=(e)=>{
  const file=e.target.files[0]
  setSelectedImage(file)
  previewFile(file)
}

const previewFile=(file)=>{
  const reader= new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend=()=>{
    setPreviewSource(reader.result)
  }
}

  useEffect(()=>{
    dispatch(getDiets())
  },[dispatch])
  

  
  let handleOnChange=(e)=>{
    setData({...data,
      [e.target.name]:e.target.value})

      setError(
        validate({...data,
          [e.target.name]:e.target.value})

      )
  }

  let handleSteps=(e)=>{
    setData({
      ...data,
      steps: [e.target.value],
    });
    setError(
      validate({
        ...data,
        steps: e.target.value,
      })
    );
  }




  let handleSelectedDiets=(e)=>{
    e.preventDefault();
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
    setError(
      validate({
        ...data,
        diets: [...data.diets, e.target.value],
      })
    );
  }


    
  let handleImage=(e)=>{
    e.preventDefault();
    const formData=new FormData()
    formData.append('file', selectedImage)
    formData.append("upload_preset",'Data_Base' )
    axios.post('https://api.cloudinary.com/v1_1/dvkvyi1dr/image/upload', 
    formData).then((response)=>{setData({...data, image: response.data.secure_url})})

  }
   

  let handleOnSubmit=(e)=> {
    
    console.log(data)
    dispatch(createRecipe(data))
    setData({
      name:'',
      summary:'',
      score:0,
      healthScore:0,
      steps:[],
      image:'',
      diets:[],
    })}

  function handleOnSubmitButton(e) {
    e.preventDefault();
    if (Object.values(error).length > 0)  document.getElementById("myBtn").disabled = true;
    else document.getElementById("myBtn").disabled = false;
    
    }


    
  
  
  return (
    <div className='formContainer'>
     <form className='form'  onChange={handleOnSubmitButton}>
      <div id="header" >
        <label>Recipe Name: </label>
        <input className='title' onChange={handleOnChange} name='name' value={data.name}></input>
      </div>
      
      <div id='aside_Score'>
      <label>score: </label>
        <input className='score' onChange={handleOnChange} type='number' name='score' value={data.score}></input>

        <label>Health Score: </label>
        <input  className='score' onChange={handleOnChange} type='number' name='healthScore' value={data.healthScore}></input>

      </div>

      <div id='body_form'>
      <label>Summary: </label>
      <textarea onChange={handleOnChange} className='textArea' name='summary' value={data.summary} />

      <label>Steps: </label>
      <textarea onChange={handleSteps} className='textArea' name='steps' value={data.steps}/>
      </div>
        
        
        <div id='imageUploadArea'>
        <input  id="upload_widget" onChange={handleFileInputChange} type='file' name='image'/>
        {previewSource&&(
          <img src={previewSource} alt='chosenOne' style={{height:'50px'}}/>
        )}
        <button onClick={handleImage}>Upload Image</button>
        </div>
     
     <div id='dietsArea'>
    <label>Diets</label>
    {diets&&diets.map((d)=>
        <button value={d} key={d}>{d} <input onChange={handleSelectedDiets} type='checkbox' value={d}></input></button>)}
      
     </div>
     </form>

     <button id="myBtn" type="submit" onSubmit={handleOnSubmit} >Create</button>
    
    </div>
  );
};


