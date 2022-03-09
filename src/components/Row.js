import React from 'react';
import { useState, useEffect } from 'react';

import Axios from 'axios';

import "./Row.scss";

function Row({title, fetchUrl, isPoster}) {
  const baseUrl="https://image.tmdb.org/t/p/original/"
  const [movies, setMovies] = useState([]);

  useEffect( () => {
      async function fetchData() {
          const Request = await Axios.get(fetchUrl);
          setMovies(Request.data.results);
      }
      fetchData();
  }, [fetchUrl]);
    

  return (
    <div className='row'>
      <h2 className='row__title'>{title}</h2>
      <div className='row__images'>
        {movies.map( (movie) => (
          <div key={movie.id}>
            {isPoster ? (
              <img 
                src={`${baseUrl}${movie.poster_path}`} 
                className='row__image' 
                alt={movie?.title || movie?.name}
              />
              ) : (
                <img 
                  src={`${baseUrl}${movie.backdrop_path}`} 
                  className='row__image' 
                  alt={movie?.title || movie?.name}
                />
              )
            }
          </div>
        ))}
      </div>  
    </div>
  )
}

export default Row  