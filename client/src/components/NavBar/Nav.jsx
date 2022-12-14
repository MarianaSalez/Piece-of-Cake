import React from 'react';
import './nav.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import {changeLoagind} from '../../actions';
// import {FaSearchLocation} from 'react-icons/fa'

export default function Nav() {
    //const [state, setState]=useState({})
    const dispatch = useDispatch()
  return (
    <div className='navRoot' >
    <div className='row'>
        <Link to='/'><img className='logo' onClick={()=>dispatch(changeLoagind())} src='https://res.cloudinary.com/dvkvyi1dr/image/upload/v1663372772/PI-FOOD/logo_food_api_ytyqfh.jpg' alt='Logo'/></Link>
        <Link to='/recipes'><h1 className='frase'>"Anyone can cook" <span className='firma'>Gusteau</span></h1></Link>
        <div>
        <SearchBar  />
    <div>
      <Link to='/recipes/random'>
        <button  className='buttonsNav' >Random</button>
      </Link>

      <Link to='/recipes/create'>
        <button  className='buttonsNav' >Add New</button>
      </Link>

    </div>
        

        </div>  
    </div>
    
    {/* icon={<FaSearchLocation/>} */}
    
   
    </div>
   
    
  )
}

