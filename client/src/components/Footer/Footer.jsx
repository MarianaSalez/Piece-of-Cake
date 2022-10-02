import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

export default function Footer() {
  return (
    <div className='row'>
     <div className='footerAbout'>
      <Link to='/about'>
      <h3 className='footerAbout'>About Us</h3>
      </Link>
      <p>Mariana Salez 2022- Todos los derechos reservados</p>
     </div>

    <div>
    <h3>Contact me!</h3>
    <div className='footerButtons'>
      <a href='https://github.com/MarianaSalez'>
      <button>GIT</button>
      </a>
      <a href='https://www.linkedin.com/in/mariana-ines-salez-b56547144/'>
      <button>Ln</button>
      </a>
      
    </div>
    </div>
 
    </div> )
   
}
