import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

export default function Footer() {
  return (
    <div className='rowFooter'>
     <div className='footerAbout'>
      <Link to='/about'>
      <h3 className='footerAbout'>About Us</h3>
      </Link>
      <p>Mariana Salez 2022- Todos los derechos reservados</p>
     </div>

    <div>
    <h3>Contact me!</h3>
    <div>
      <button>GIT</button>
      <button>Ln</button>
    </div>
    </div>
 
    </div> )
   
}
