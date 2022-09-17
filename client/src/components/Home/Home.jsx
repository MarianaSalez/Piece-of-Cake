import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RecipeCard from './RecipeCard/RecipeCard';
import {searchByDiet} from '../../actions';
import { useEffect } from 'react'

export default function Home() {
  const dispatch = useDispatch()
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  let dietParam=params.get('diet')
  let nameParam=params.get('name')
  if(dietParam){
  dietParam.replace("%20"," ")
  //aca meto en las recipes lo filtrado por diet
    dispatch(searchByDiet(dietParam))
  }
const recipes=useSelector(state=>state.recipes)

  return (
    <div>
        {recipes.map((r)=> 
        <RecipeCard title={`${r.name}`}/>)}
          
        
      </div>
  )
}
