import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch()
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  let dietParam=params.get('name')
  if(dietParam){
  dietParam.replace("%20"," ")
  //aca meto en las recipes lo filtrado por dieta
  useEffect(()=>{
    dispatch(searchByDiet(dietParam))
  },[dispatch])
  }


  return (
    <div>Home</div>
  )
}
