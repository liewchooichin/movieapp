import React from 'react';
import {useState} from 'react';
import '../styles.css';
import { MovieCard } from './MovieCard';

/* Using State in this lesson */
export function MoviesGrid({movies, watchlist, toggleWatchlist}){
    /* States */
    const [searchTerm, setSearchTerm] = useState("");
    const [genre, setGenre] = useState("All genres");
    const [rating, setRating] = useState("All ratings");

    /* Searching function */
    function handleSearchChange(event){
        // value of the search input
        setSearchTerm(event.target.value);
        console.log(event.target.value);
    }
    /* Handle genre changes */
    function handleGenreChange(event){
        setGenre(event.target.value);
    }
    /* Handle rating changes */
    function handleRatingChange(event){
        setRating(event.target.value);
    }
    /* Match and filter the genre */
    function matchesGenre (movie, genre) {
        return (genre === "All genres") ||
            (movie.genre.toLowerCase() === genre.toLowerCase());
    }
    /* Match the search term */
    function matchesSearchTerm (movie, searchTerm) {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    /* Match the rating */
    /* Return boolean */
    function matchesRating(movie, rating) {
        switch(rating){
            case "All ratings":
                return true;
            case "Good":
                return (movie.rating >= 8);
            case "Ok":
                return (movie.rating >= 5) && (movie.rating < 8);
            case "Bad":
                return (movie.rating < 5);
            default:
                return false;
        }
    }
    /* Filter movies according to the search term */
    /* Return an array of filtered movies */
    const filteredMovies = movies.filter( 
        (m) =>
            matchesGenre(m, genre) &&
            matchesRating(m, rating) &&
            matchesSearchTerm(m, searchTerm) 
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

            <div className="filter-bar">
                <div className="filter-slot">
                    <label>Genre</label>
                    <select className="filter-dropdown"
                        value={genre} onChange={handleGenreChange}>
                        <option>All genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>

                <div className="filter-slot">
                    <label>Rating</label>
                    <select className="filter-dropdown"
                        value={rating} onChange={handleRatingChange}>
                        <option>All ratings</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
                    </select>
                </div>
            </div>

            <div className='movies-grid'>
                <h2>Number of movies: {movies.length}</h2>
                {
                    /* This is an array */
                    filteredMovies.map((movie) => {
                        return(
                            <MovieCard 
                            movie={movie} 
                                key={movie.id} 
                                isWatchlisted={watchlist.includes(movie.id)}
                                toggleWatchlist={toggleWatchlist}
                            ></MovieCard>
                    )})
                }
            </div>
        </div>
    );
}