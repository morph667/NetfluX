import React from 'react'
import { useState, useEffect } from 'react';
import './Banner.scss'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import Requests from '../data/Requests'
import Axios from 'axios';



function Banner() {
    const [movie, setMovie] = useState([]);

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
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition:"center center"
    }

    console.log(movie);

  return (
    <header className='banner' style={bannerStyle}>
        <div className='banner__content'>
            <h1 className='banner__title'>{movie?.title || movie?.name}</h1>
            <p className='banner__description'>
            {truncateText(movie?.overview, 100)}
            </p>
            <div className='banner__buttons'>
                <button className='banner__button banner__button--play'>
                    <PlayArrowIcon />
                    Lecture
                </button>
                <button className='banner__button'>
                    <HelpOutlineIcon />
                    Plus d'infos
                </button>    
            </div>
        </div>
    </header>
  )
}

export default Banner