import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/gandaki.png'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    })

  },[]);

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <nav className={`cusContainer ${sticky?'dark-nav':''}`}>
        <img src={logo} alt="Gandaki Logo"  className='logo'/>
        <ul className={menu?'':'hide-burger'}>
            <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='package' smooth={true} offset={-250} duration={500}>Package</Link></li>
            <li><Link to='homePicture' smooth={true} offset={0} duration={500}>About Us</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className='cusBtn'>Contact</button></Link> </li>
        </ul>
        <FontAwesomeIcon icon={faBars} className='burger' onClick={toggleMenu} />


    </nav>
  )
}

export default Navbar
