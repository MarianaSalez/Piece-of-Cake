import React from 'react'
import './SearchBar.css';
import { useDispatch } from 'react-redux'
import { search } from '../../../../api/src/routes/recipesRoutes';

export default function SearchBar({icon}) {
return(
  <button type='submit' > 
  {icon&&<div >{icon}</div>}
 Agregar</button>)
  
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