import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css';
import { useDispatch} from 'react-redux';
import {changeFound} from '../../actions';

export default function NotFound() {
    const dispatch = useDispatch()
  return (
    <div className='containerNotFound'>

        <Link to='/recipes'>
        <button className='backNotFound' onClick={()=>dispatch(changeFound())}>Go Back🏠</button>
        </Link>

        <h1 className='titleNotFound'>Something go wrong, so sorry</h1>
        <img className='imgNotFound' src='https://res.cloudinary.com/dvkvyi1dr/image/upload/v1664757938/PI-FOOD/58718-404-error-page_2_online-video-cutter.com_ms7itv.gif' alt='Not Found'/>
      
        
        
    </div>
  )
}
