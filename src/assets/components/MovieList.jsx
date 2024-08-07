import React from 'react'
import Genres from './Genres';

function MovieList() {

    const genres = ["Thriller", "Action", "Adventure"];

    return (

        <>{
            genres.map((genre, index) => (
                <>
                    <Genres genre={genre} index={index} />
               
                </>
            ))
        }

        </>




    )
}

export default MovieList