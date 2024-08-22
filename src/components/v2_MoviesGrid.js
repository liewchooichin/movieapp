import React from 'react';
import {useState, useEffect} from 'react';
import '../styles.css';
import { MovieCard } from './MovieCard';

/* Using State in this lesson */
export function MoviesGrid(){
    /* Movies state */
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

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
            <div className='movies-grid'>
                <h2>Number of movies: {movies.length}</h2>
                {
                    movies.map((m) => {
                        return(
                            <MovieCard m={m} key={m.id}></MovieCard>
                    )})
                }
            </div>
    );
}