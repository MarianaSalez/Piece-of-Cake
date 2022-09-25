import React, {useState} from 'react'
import './SearchBar.css';
import { useDispatch } from 'react-redux'
import {searchByName} from '../../actions';

export default function SearchBar() {

  const dispatch = useDispatch();
  const [name, setName] = useState("");


  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name)
  }

  function handleButton(e) {
    console.log('lo envie')
    e.preventDefault();
    dispatch(searchByName(name))
  }


return(
  <div>
   <input className='search_input' type='text' id='inputRec' placeholder='Recipe...' onChange={(e) => handleChange(e)}/>
  <button type='submit'   onClick={(e) => handleButton(e)}>Find</button>
  </div>)
  
  

    // function handleOnSearch(event) {
    //   event.preventDefault()

    //   if(typeof onSearch==='function'){
    //     const input=document.getElementById('inputCity')
    //     onSearch(input.value)
    //     input.value=''
    //   }
    // }

    // return <form className='searchBar' onSubmit={handleOnSearch}>
    //   <input className='search_input' type='text' id='inputCity' placeholder='Ciudad...'/>
    //   <button  className='btn_search' type='submit' >
    //   {icon&&<div className='icon'>{icon}</div>}
    //   Agregar</button>

    //   </form>

}


// function onSearch(recipe){
//   const dispatch=useDispatch()

//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)
//   .then(r => r.json())
//   .then((recurso) => {
//     if(recurso.main !== undefined){
//       const ciudad = {
//         min: Math.round(recurso.main.temp_min),
//         max: Math.round(recurso.main.temp_max),
//         img: recurso.weather[0].icon,
//         descr: recurso.weather[0].description,
//         id: recurso.id,
//         wind: recurso.wind.speed,
//         temp: recurso.main.temp,
//         name: recurso.name,
//         weather: recurso.weather[0].main,
//         clouds: recurso.clouds.all,
//         humidity:recurso.main.humidity,
//         latitud: recurso.coord.lat,
//         longitud: recurso.coord.lon
//       };
//       console.log(ciudad)

//     handleAddCity(ciudad)

//     } else {
//       alert("Ciudad no encontrada");
//     }
//   });
// }