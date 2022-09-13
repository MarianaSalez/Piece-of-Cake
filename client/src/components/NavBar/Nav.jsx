import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
//import {FaSearchLocation} from 'react-icons/fa'

export default function Nav(onSearch) {
  return (
    <>
    <>
    <Link to='/'>
        <img onClick={handleLanding()} src='' alt='Logo'/>
    </Link>
    <h1>"Anyone can cook" <span>Gusteau</span></h1>
    <SearchBar onSearch={onSearch}/>
    <br/>
    </>
    <div id='filters'>
        <button> Clear Filters</button>

        <select name="sort">
            <option hidden>Sort Recipes</option>
            <option value="asc">Ascendant A-Z</option>
            <option value="desc">Descensant Z-A</option>
            <option value='ascHelth'>Healthier</option>
            <option value='ascRate'>Popular</option>
        </select>
    </div>
    <Link to='/recipe/random'>
        <button>Random</button>
    </Link>
    <Link to='/recipes/create'>
        <button>Add New</button>
    </Link>
    
    </>
   
    
  )
}


function  handleLanding(e) {
    e.preventDefault()
    //change loading to true
    
}