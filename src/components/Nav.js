import React from 'react';
import { useState } from 'react';
import "./Nav.scss";

import MenuIcon from '@mui/icons-material/Menu';  
import SearchIcon from '@mui/icons-material/Search';   
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';     
import NotificationsIcon from '@mui/icons-material/Notifications';              


function Nav() {
    const [navBlack, setNavBlack] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);


    const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
    };

    useState(() => {
        document.addEventListener("scroll", transitionNav);
    });

    const handleClick = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
        !toggleMenu ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto";
    };


    return (
        <div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparant"} ${toggleMenu && "show"}`}> 
            <button className="nav__burger" onClick={handleClick}>
                <MenuIcon/>
            </button>
            <img src="./images/logo.png" alt="Netflux" className="nav__logo" />
            <nav className="nav__links">
                <a href="http://" className="nav__link">
                    Accueil
                </a>
                <a href="http://" className="nav__link">
                    Séries
                </a>
                <a href="http://" className="nav__link">
                    Films
                </a>
            </nav>
            <div className="nav__actions">
                <a href="http://" className="nav__link">
                    <SearchIcon/>
                </a>
                <a href="http://" className="nav__link">
                    <CardGiftcardIcon/>
                </a>
                <a href="http://" className="nav__link">
                    <NotificationsIcon/>
                </a>
                <a href="http://" className="nav__link">
                    <img src="./images/avatar.png" alt="Avatar" className="nav__avatar" />
                </a>
            </div>
        </div>
    );
}

export default Nav