import React from 'react';
import '../styles/Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <TwitterIcon />
            <LinkedInIcon />
            <InstagramIcon />
            <FacebookIcon />
            <p>&copy; 2002 EmarhFood.com.</p>
        </div>
    </div>
  )
}

export default Footer