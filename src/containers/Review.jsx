import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../style/containers/Review.css';


const Review = () => {
    const { state } = useContext(AppContext);
    const { selectedMovie } = state;
    return (
        <section className='Review'>
            <div className='Review-Card'>
                {selectedMovie.map(movie => (
                    <section className='Review-Movie' key={movie.id + 23}>
                        <img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt={movie.title} />
                        <div className="Review-info">
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                            <p><b>Release Date: </b> {movie.release_date}</p>
                            <p><b>Original Language: </b> {movie.original_language}</p>
                            <p><b>Popularity: </b> {movie.popularity}</p>
                            <p><b>Vote Average:</b> {movie.vote_average}</p>
                            <Link to='/'><i className="fa-solid fa-arrow-right-from-bracket fa-2xl" /></Link>
                        </div>
                    </section>
                )
                )}
            </div>
        </section>

    )
}

export { Review };