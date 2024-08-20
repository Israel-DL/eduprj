import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/education.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 180 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu  ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'': 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-120} duration={500}>About Us</Link></li>
            <li><Link to='programs' smooth={true} offset={-250} duration={500}>Programs</Link></li>
            <li><Link to='campus' smooth={true} offset={-300} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-270} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-280} duration={500} className='btn '>Contact Me</Link></li>
        </ul>
        <img src={menu} alt="" className='menu' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar