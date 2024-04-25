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
            <li><Link to='home' smooth={false} offset={0} duration={200}>Home</Link></li>
            <li><Link to='package' smooth={false} offset={-250} duration={200}>Package</Link></li>
            <li><Link to='works' smooth={false} offset={-200} duration={200}>About Us</Link></li>
            <li><Link to='contact' smooth={false} offset={-260} duration={200}><button className='cusBtn'>Contact</button></Link> </li>
        </ul>
        <FontAwesomeIcon icon={faBars} className='burger' onClick={toggleMenu} />


    </nav>
  )
}

export default Navbar
