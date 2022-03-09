import React from 'react';
import './Footer.scss';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <footer className="footer">
      <div className='container'>
        <div className="footer__socials">
          <a href="http://" className="footer__social"><FacebookIcon/></a>
          <a href="http://" className="footer__social"><InstagramIcon/></a>
          <a href="http://" className="footer__social"><TwitterIcon/></a> 
          <a href="http://" className="footer__social"><YouTubeIcon/></a>
        </div>
        <ul className="footer__links">
          <li className="footer__link">
            <a href="http://" >Lien footer</a>
          </li>
          <li className="footer__link">
            <a href="http://" >Lien footer</a>
          </li>
          <li className="footer__link">
            <a href="http://" >Lien footer</a>
          </li>
          <li className="footer__link">
            <a href="http://" >Lien footer</a>
          </li>
          <li className="footer__link">
            <a href="http://" >Lien footer</a>
          </li>
          <li className="footer__link">
            <a href="http://" >Lien footer</a>
          </li>
          <li className="footer__link">
            <a href="http://" >Lien footer</a>
          </li>
          <li className="footer__link">
            <a href="http://" >Lien footer</a>
          </li>
        </ul>
        <div className="footer__copy">
          NetFlux - Tous droits réservés exclusivement à NetFlux 
        </div>
      </div>
    </footer>
  );
}

export default Footer