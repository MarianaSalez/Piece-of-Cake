import React from 'react'
import './Pagination.css'

export default function Pagination(recipes) {
    const numPages=Math.round(recipes.recipes/recipes.recipesPerPage)
    const pages=[]
    for (let i = 0; i < numPages; i++) {
        pages.push(i)
     }
  return (
    (pages.length!==0)?
      <ul className='ulPaginate'>

      <button  className='paginateBut' value={'back'}  onClick={recipes.paginate}>{'<'}</button>
        {
            pages&&pages.map((p)=><button  className='paginateBut' onClick={recipes.paginate} key={p} value={p}>{p+1}</button>)
        }
      <button className='paginateBut' value={'next'}  onClick={recipes.paginate}>{'>'}</button>
    </ul>:
    <ul className='ulPaginate'></ul> 
  )
}
