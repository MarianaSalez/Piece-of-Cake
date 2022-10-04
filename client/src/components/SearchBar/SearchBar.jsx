import React, {useState} from 'react'
import './SearchBar.css';
import { useDispatch } from 'react-redux'
import {searchByName} from '../../actions';
import {FiSearch} from 'react-icons/fi'

export default function SearchBar() {

  const dispatch = useDispatch();
  const [name, setName] = useState("");


  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleButton(e) {
    e.preventDefault();
    dispatch(searchByName(name))
  }


return(
  <div>
   <input className='search_input' type='text' id='inputRec' placeholder='Recipe...' onChange={(e) => handleChange(e)}/>
  <button className='navButtonInput' type='submit'   onClick={(e) => handleButton(e)}><FiSearch/></button>
  </div>)
  
}
