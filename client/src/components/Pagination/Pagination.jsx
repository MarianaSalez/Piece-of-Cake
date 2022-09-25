import React from 'react'
import './Pagination.css'

export default function Pagination(recipes) {
    const numPages=Math.round(recipes.recipes/recipes.recipesPerPage)
    const pages=[]
    for (let i = 0; i < numPages; i++) {
        pages.push(i)
     }
  return (
    <ul>
        {
            pages&&pages.map((p)=><button onClick={recipes.paginate} key={p} value={p}>{p+1}</button>)
        }
    </ul>
  )
}
