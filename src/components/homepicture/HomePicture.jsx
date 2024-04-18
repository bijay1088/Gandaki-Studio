import React from 'react'
import './HomePicture.css'
import Button from 'react-bootstrap/Button';




const HomePicture = () => {
  return (
    <div className='home cusContainer'>
        <div className="home-text">
            <h1>Welcome to Gandaki Studio</h1>
            <p>Established for over 15 years, Gandaki Studio is a leading photography and videography service provider. 
                Specializing in capturing moments for various occasions, including weddings, ceremonies, and more, we are dedicated to delivering high-quality imagery and memorable experiences.</p>
            <button className='cusBtn'>Read More</button>
            
        </div>
    </div>
  )
}

export default HomePicture
