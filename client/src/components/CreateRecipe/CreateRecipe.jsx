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

  const[selfDiet, setSelfDiet]=useState('')
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
      console.log(data)

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
    if(e.target.checked&&e.target.value){
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


    
  let handleImage=async(e)=>{
    e.preventDefault();
    const formData=new FormData()
    formData.append('file', selectedImage)
    formData.append("upload_preset",'Data_Base' )
    await axios.post('https://api.cloudinary.com/v1_1/dvkvyi1dr/image/upload', 
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
    if (Object.values(error).length > 0 || data.name.length===0)  document.getElementById("myBtn").disabled = true;
    else document.getElementById("myBtn").disabled = false;
    
    }

    let handleNewDietInput=(e)=>{
        (e).preventDefault()
        setSelfDiet(e.target.value)
        console.log(selfDiet)
    }

    
  
  
  return (
    <div className='formContainer'>
     <form className='form'  onChange={handleOnSubmitButton}>
      <div id="header" >
        <label>Recipe Name:  {error.name&&<p className='error'>{error.name}</p>} </label>
        <input className='title' onChange={handleOnChange} name='name' value={data.name}></input>
     
      </div>
      
      <div id='aside_Score'>
      <label>score: </label>
      <input className='score' onChange={handleOnChange} type='number' name='score' value={data.score}></input>
      {error.score&&<p className='error'>{error.score}</p>}
      <label>Health Score:  </label>
      <input  className='score' onChange={handleOnChange} type='number' name='healthScore' value={data.healthScore}></input>
      {error.healthScore&&<p className='error'>{error.healthScore}</p>}
      </div>

      <div id='body_form'>
      <label>Summary: {error.summary&&<p className='error'>{error.summary}</p>} </label>
      <textarea onChange={handleOnChange} className='textArea' name='summary' value={data.summary} />
      

      <label>Steps: {error.steps&&<p className='error'>{error.steps}</p>}</label>
      <textarea onChange={handleSteps} className='textArea' name='steps' value={data.steps}/>
      
      </div>
        
        
        <div id='imageUploadArea'>
        <input  id="upload_widget" onChange={handleFileInputChange} type='file' name='image'/>
        {previewSource?(
          <img src={previewSource} alt='chosenOne' style={{height:'250px', margin: '10px', width: '250px', border:'solid black'
        }}/>
        ):<div className='boxImage'>Preview</div>}
        <button onClick={handleImage}>Upload Image</button>
        {error.image&&<p>{error.image}</p>}
        </div>
     
     <div id='dietsArea'>
    <label id='title'>Diets  {error.diets&&<p>{error.diets}</p>}</label>
    <div id='buttons'>
      {diets&&diets.map((d)=>
        <div className='dietsButtons' key={d}>{d} <input onChange={handleSelectedDiets} type='checkbox' value={d}></input></div>)}
       <div className='dietsButtons'><input onChange={handleNewDietInput} input={selfDiet} placeholder='Enter your Diet Name'/><input onChange={handleSelectedDiets} type='checkbox' value={selfDiet}/></div>
    </div>
     </div>

     <div id='createButton'>
        <button className='submitButton' id="myBtn" type="submit" onClick={handleOnSubmit} >Create</button>
      </div>

     </form>

     
    
    
    </div>
  );
};


