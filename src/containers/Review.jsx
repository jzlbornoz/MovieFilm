import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Review = () => {
    const { state } = useContext(AppContext);
    const { selectedMovie } = state;
    return (
        <div className='Review'>
            <div className='Review-Card'>
                {selectedMovie.map(movie => (
                    <div className='Review-Movie' key={movie.id + 23}>
                        <img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt={movie.title} />
                        <p>{movie.title}</p>
                    </div>
                )
                )}
            </div>
        </div>

    )
}

export { Review };