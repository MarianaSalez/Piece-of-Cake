import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RecipeCard from './RecipeCard/RecipeCard';
import {getAllRecipes,getDiets,sort,searchByDiet, cleanFilter} from '../../actions';
import { useEffect } from 'react'
import './Home.css';
import { useState } from 'react';
import Pagination from '../Pagination/Pagination';


const INITIAL_PAGE=0
const LIMIT =9

export default function Home() {

  const [page, setPage]=useState(INITIAL_PAGE)
  const[currentRecipes,setCurrentRecipes]=useState([])

  const dispatch=useDispatch()
  const recipes= useSelector(state=>state.recipes)
  const filtered= useSelector(state=>state.filtered)
  const diets= useSelector(state=>state.diets)


  //ACTUALIZACION DE PAGINA
  useEffect(()=>{
    const lastRecipe=page*LIMIT+ LIMIT
    const firstRecipe=lastRecipe-LIMIT
    setCurrentRecipes((filtered.length!==0)?filtered.slice(firstRecipe,lastRecipe):recipes.slice(firstRecipe,lastRecipe))
  },[page,recipes,filtered])
 

useEffect(()=>{
  dispatch(getAllRecipes())
},[dispatch])

useEffect(()=>{
  dispatch(getDiets())
},[dispatch])


function handleSort(e) {
  var value = [e.target.value].toString()
  setPage(INITIAL_PAGE)
  dispatch(sort(value))
  setCurrentRecipes((filtered.length!==0)?filtered.slice(INITIAL_PAGE*LIMIT,LIMIT+1):
                                          recipes.slice(INITIAL_PAGE*LIMIT,LIMIT+1))
}

function handleOnSelect(e) {
  e.preventDefault()
  var value = [e.target.value]
  dispatch(searchByDiet(value))
  setCurrentRecipes((filtered.length!==0)?filtered.slice(INITIAL_PAGE*LIMIT,LIMIT+1):
                                          recipes.slice(INITIAL_PAGE*LIMIT,LIMIT+1))
 
}

function handlePage(e) {
  var value = [e.target.value]
  if(e.target.value==='back'&&page!==0) {
    setPage(()=>{
    return page-1})
  }
  else if(e.target.value.includes('next')&&page<((Math.round(((filtered.length!==0)?filtered.lenght:recipes?.length)/LIMIT))-1)){ 
    setPage(()=>{return page+1})}
  else if(e.target.value!=='back'&&e.target.value!=='next') {setPage(()=>{return value[0]})}
  else {return page}
}

function clearFilters(e) {
  dispatch(cleanFilter())
}





  return (
    <div className='back'>
      <div className='row'>
        <div className='filters'>
        <button className='filtersOptions' onClick={(e)=>clearFilters(e)}> Clear Filters</button>

        <select className='filtersOptions' name="sort" onChange={(e)=>handleSort(e)}>
            <option key='sortTitle' hidden>Sort Recipes</option>
            <option value="asc">Ascendant A-Z</option>
            <option value="des">Descensant Z-A</option>
            <option value='ascHealth'>Healthier</option>
            <option value='ascRate'>Popular</option>
        </select>
        
        <select className='filtersOptions' name="filter" onChange={(e)=>handleOnSelect(e)} >
        <option  key='filterTitle' hidden>Filter by Diet</option>
        {diets&&diets.map((d)=>
        <option value={d} key={d}>{d}</option>)}
        </select>
        
    </div>
    </div>
    
      {/* {notFound?
      <h1>Disculpe las molestias la receta no fue encontrada</h1>: }*/
        currentRecipes.length!==0?
        <div className='home'>
        {currentRecipes.map((r)=>{
          return(
        
       <RecipeCard
        key={r.id}
        id={r.id}
        name={r.name}
        image={r.image}
        diets={r.diets}/>
          )
        })}
         </div>:
        
    <div  className='backHomeLoading'>
      <h1>Loading...</h1>
        <p>
          <img className='homeLoadingImage' src='https://res.cloudinary.com/dvkvyi1dr/image/upload/v1664649018/PI-FOOD/wock_loading_cgrkh6.gif' alt='Loading'/>
        </p>
    </div>
      }
      
      <div>
        <Pagination recipes={(filtered.length!==0)?filtered.lenght:recipes?.length} paginate={(e)=>handlePage(e)} recipesPerPage={LIMIT}/>
      </div>

    </div>
    
  )
}
