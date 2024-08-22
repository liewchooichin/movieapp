import React from 'react';
import '../styles.css';

/**
 * 
 * @param {m} Invidividual movie object 
 * @returns 
 */

export function MovieCard({m}) {

    /* Error handling */
    function handleError(e) {
        return e.target.src = "images/default.jpg";
    }
    /* Color the rating */
    function getRatingClass(rating){
        /* rating color is defined in the css */
        if(rating >= 8){
            return 'rating-good';
        }
        else if(rating >= 5){
            return 'rating-ok';
        }
        else{
            return 'rating-bad';
        }
    }
    /* Return the components */
    return(
        <div key={m.id} className='movie-card'>
            <img src={`images/${m.image}`} 
                alt={m.title}
                onError={handleError}>
            </img>
            <div className='movie-card-info'>
                <h3 className='movie-card-title'>{m.title}</h3>
                <p className='movie-card-genre'>{m.genre}</p>
                <p className={`movie-card-rating 
                        ${getRatingClass(m.rating)}`}>
                    {m.rating}
                </p>
            </div>
        </div>
    )
}