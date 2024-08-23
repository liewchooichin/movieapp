import React from 'react';
import '../styles.css';
import { MovieCard } from './MovieCard';

export function Watchlist({movies, watchlist, toggleWatchlist}){
    /**
     * The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
     */
    /**
     * The watchlist maps items that are in the toggleWatchlist into the watchlist.
     */
    return(
        <div>
            <h1 className='title'>Watchlist</h1>
            <div className="watchlist">
                {
                    watchlist.map(
                        id => {
                            const movie_element = 
                                movies.find(m => m.id === id);
                            return <MovieCard 
                                key={id}
                                movie={movie_element} 
                                toggleWatchlist={toggleWatchlist}
                                isWatchlisted={true}
                              ></MovieCard>
                    })
                }
            </div>
        </div>
    );
}