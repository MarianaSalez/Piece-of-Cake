import React from 'react'
import { useSelector } from 'react-redux'

function Detail() {
  const recipe=useSelector(state=>state.recipe)
  console.log(recipe)
  return (
    <div>Detail</div>
  )
}

export default Detail