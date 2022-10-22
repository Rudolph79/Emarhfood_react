import React from 'react';
import '../styles/Contact.css';
import ContactImage from '../assets/rajasthani.jpg';

export default function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${ContactImage})` }}></div>
        <div className='rightSide'>
            <h1>Nous contacter</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Nom Complet</label>
                <input name='name' type='text' placeholder='Entrez votre nom complet' />

                <label htmlFor='email'>Email</label>
                <input name='email' type='text' placeholder='Entrez votre adresse email' />

                <label htmlFor='message'>Message</label>
                <textarea 
                    name='message' 
                    placeholder='Entrez le contenu de votre message'
                    rows='7'
                ></textarea>
                <button type='submit'>Envoyer</button>
            </form>
        </div>
    </div>
  )
}
