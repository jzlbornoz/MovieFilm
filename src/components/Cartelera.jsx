import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../style/components/Cartelera.css';
import { AppContext } from '../context/AppContext';

const Cartelera = () => {
  const { user } = useAuth0();
  const { movies, loading } = useContext(AppContext);

  if (!!loading) {
    <p>loading</p>
  } else {
    return (
      <div className="Cartelera">
        {`Hola ${user.name}`}
        <div>
          {movies.map(movie => {
            const ImgUrl ="https://image.tmdb.org/t/p/w300" + movie.poster_path;
            return (
              <div>
                 {<img src={ImgUrl} alt={movie.title} /> }
                 <p>{movie.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export { Cartelera };