import React from 'react';
import './nav.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import DietList from '../DietList/DietList';
import {changeLoagind} from '../../actions';
// import {FaSearchLocation} from 'react-icons/fa'

export default function Nav() {
    //const [state, setState]=useState({})
    const dispatch = useDispatch()
  return (
    <div className='navRoot' >
    <div className='row'>
        <Link to='/'><img className='logo' onClick={()=>dispatch(changeLoagind())} src='https://res.cloudinary.com/dvkvyi1dr/image/upload/v1663625895/PI-FOOD/logo_food_api_brgjuw.png' alt='Logo'/></Link>
        <h1 className='frase'>"Anyone can cook" <span className='firma'>Gusteau</span></h1>
        <SearchBar  />
    </div>

    <div className='row'>
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
    <Link to='/recipes/random'>
        <button>Random</button>
    </Link>
    <Link to='/recipes/create'>
        <button>Add New</button>
    </Link>
    

    </div>
    
    {/* icon={<FaSearchLocation/>} */}
    
   
    </div>
   
    
  )
}

