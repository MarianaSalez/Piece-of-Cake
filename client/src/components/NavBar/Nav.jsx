import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import DietList from '../DietList/DietList';
//import {FaSearchLocation} from 'react-icons/fa'

export default function Nav() {
    //const [state, setState]=useState({})
  return (
    <>
    
    <Link to='/'><img onClick={() => dispatch({ type: 'CHANGE_LOADING' })} src='https://res.cloudinary.com/dvkvyi1dr/image/upload/v1663372772/PI-FOOD/logo_food_api_ytyqfh.jpg' alt='Logo'/></Link>
    <h1>"Anyone can cook" <span>Gusteau</span></h1>
    <SearchBar />
   
    
    <div id='filters'>
        <button> Clear Filters</button>

        <select name="sort">
            <option hidden>Sort Recipes</option>
            <option value="asc">Ascendant A-Z</option>
            <option value="desc">Descensant Z-A</option>
            <option value='ascHelth'>Healthier</option>
            <option value='ascRate'>Popular</option>
        </select>

        <div name="diets">
            <DietList/>
        </div>
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

