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

    /* Searching function */
    function handleSearchChange(event){
        // value of the search input
        setSearchTerm(event.target.value);
        console.log(event.target.value);
    }
    /* Filter movies according to the search term */
    const filteredMovies = movies.filter( 
        (m) => m.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    /* Return the component */
    return(
        <div>
            <input
                type="text" placeholder='Search'
                value={searchTerm}
                onChange={handleSearchChange}
                className='search-input'
            />
            <div className='movies-grid'>
                <h2>Number of movies: {movies.length}</h2>
                {
                    filteredMovies.map((m) => {
                        return(
                            <MovieCard m={m} key={m.id}></MovieCard>
                    )})
                }
            </div>
        </div>
    );
}