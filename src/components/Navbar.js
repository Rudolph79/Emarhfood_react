import React, { useState } from 'react';
import logo from '../assets/android-chrome-512x512.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const clickNav = () => {
        setShowLinks(!showLinks);
    }
  return (
    <div className='navbar'>
        <div className='leftSide' id={showLinks ? 'open': 'close'}>
            <img src={logo} />
            <div className='hiddenLinks'>
                <Link to='/'>Accueil</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/a-propos'>Nous</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to='/'>Accueil</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/a-propos'>A propos</Link>
            <Link to='/contact'>Contact</Link>
            <button onClick={clickNav}>
                <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar;