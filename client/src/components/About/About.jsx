import React from 'react'
import './About.css';

export default function About() {
  return (
    <div className='aboutContainer'>
  <div className='objetives'>
    <h2>Objetives of this page</h2>
    <p>The primary function of this page is to get recipes. 
      It has also some extra functions like adding new recipes, or getting a random if you don't want 
      to think any more.
    <br/>
    <br/>
    <span>🚀🚀🚀</span>
    <br/>
    <br/>
     In the future it will have the upgrade of saving your favorites ones.
     A link to cooking videos, and a button for delivery food.
     Sometimes you see to many recipes, and get tiered before starting.
    </p>
  </div>
    
   <div className='aboutboxes'>
   <div className='tec'>
    <h2>Technologys involved:</h2>
    <ul className='ulabout'>
      <li className='liabout'>HTML-CSS</li>
      <li className='liabout'>REACT-REDUXS</li>
      <li className='liabout'>EXPRESS</li>
      <li className='liabout'>NODE-JS</li>
    </ul>
  </div>

  <div className='authabout'>
    <h2>About the author</h2>
    <p className='pabout'>My name is Mariana Salez, I'am a full stack devolepor, but also I'am a civil engenieer.
      The best way o describe me is as a fast and eternal learner. I speak two more languages besides 
      my native language, regardless of programming languages 😉 . If you want to know a little more 
      about me, here's my Linkedin: https://www.linkedin.com/in/mariana-ines-salez-b56547144/ 
      <span>Regards! Have a nice day!</span>
      
    </p>
  </div>
    
    </div> 
    </div>
  )
}
