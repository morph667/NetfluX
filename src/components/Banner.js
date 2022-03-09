import React from 'react'
import { useState, useEffect } from 'react';
import './Banner.scss'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import Requests from '../data/Requests'
import Axios from 'axios';

import QuickView from './QuickView';

import {Link} from 'react-router-dom';



function Banner() {
    const [movie, setMovie] = useState([]);
    const [popup, setPopup]= useState(false);

    function handleClickPopup(){
        popup ? setPopup(false) : setPopup(true);
    }

    useEffect(() => {
        async function fetchData() {
            const Request = await Axios.get(Requests.fetchTrending);

            setMovie(
                Request.data.results[
                    Math.floor(Math.random()* Request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, []);

    function truncateText(string, n){
        return string?.length > 0 ?string.substr(0, n-1) + "..." : "No description";
    }

    const bannerStyle = {
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition:"center center"
    }

    console.log(popup);


  return (
    <header className='banner' style={bannerStyle}>
        <div className='banner__content'>
            <h1 className='banner__title'>{movie?.title || movie?.name}</h1>
            <p className='banner__description'>
            {truncateText(movie?.overview, 100)}
            </p>
            <div className='banner__buttons'>
                <Link to={`/video/${movie?.id}`} >
                    <button className='banner__button banner__button--play'>
                        <PlayArrowIcon />
                        Lecture
                    </button>
                </Link>
                <button className='banner__button' onClick={handleClickPopup}>
                    <HelpOutlineIcon />
                    Plus d'infos
                </button>    
            </div>
        </div>
        <QuickView 
            bannerStyle={bannerStyle} 
            movie={movie} 
            popup={handleClickPopup} 
            popupStatut={popup}
        />
    </header>
  )
}

export default Banner