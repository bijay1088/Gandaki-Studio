import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2024 Gandaki Studio. All rights reserved.</p>
      <ul>
            <li>
                <a href="https://m.facebook.com/people/Gandaki-Studio/100054571414371/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </li>
            <li>
                <a href='https://www.youtube.com/@gandakistudio9585' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Footer
