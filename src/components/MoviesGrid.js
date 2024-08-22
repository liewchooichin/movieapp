import React from 'react';
import {useState, useEffect} from 'react';
import '../styles.css';

/* Using State in this lesson */
export function MoviesGrid(){
    /* Movies state */
    const [movies, setMovies] = useState([]);

    /* Fetch movies */
    async function fetchMovies(){
        const response = await fetch("movies.json");
        const movies_obj = await response.json();
        return movies_obj.data;
    }

    /* initial the state */
    /* setMovies will set the length of the movies
    const [movies, setMovies] = useState([]);
    /* useEffect [] only once */
    useEffect(() => {
        /* The Public folder does not have to be specified here. */
        fetch("movies.json")
        .then(response => response.json())
        .then(data => setMovies(data))
        
       //setMovies(fetchMovies());
    }, []);

    return(
        <div>
            <h2>Number of movies: {movies.length}</h2>
            {
                movies.map(m => (
                    <div key={m.id} className='movie-card'>
                        <img src={`images/${m.image}`} alt={m.title}></img>
                        <div className='movie-card-info'>
                            <h3 className='movie-card-title'>{m.title}</h3>
                            <p className='movie-card-genre'>{m.genre}</p>
                            <p className='movie-card-rating'>{m.rating}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}