import React from 'react';
import banner from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${banner})` }}>
        <div className='headerContainer'>
            <h1>Régalez-vous !</h1>
            <p>VOUS VOULEZ MANGER SAIN ET NUTRITIF. CLIQUEZ SUR CE BOUTON POUR COMMANDER</p>
            <Link to='/menu'>
                <button>Commander Maintenant</button>
            </Link>
        </div>
    </div>
  )
}

export default Home