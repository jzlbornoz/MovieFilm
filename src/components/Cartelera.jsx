import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { AppContext } from '../context/AppContext';
import { Card } from './Card';
import { EmptyResults } from './EmptyResults';
import '../style/components/Cartelera.css';

const Cartelera = () => {
  const { user } = useAuth0();
  const { filteredMovies, loading, selectMovie } = useContext(AppContext);

  const handleSelect = item => () => {
    selectMovie(item)
  };
  
  if (!!loading) {
    <p>loading</p>
  } else {
    return (
      <div className="Cartelera">
        <h2>{`Hello ${user.name}`}</h2>
        <div className='Cartelera-wrapped'>
          {filteredMovies.length > 0 ? filteredMovies.map(movie => {
            return (
              <Link to='/review' key={movie.id + 12} onClick={handleSelect(movie)} >
                <Card movie={movie}  />
              </Link>
            )
          }) : <EmptyResults />}
        </div>
      </div>
    )
  }
}

export { Cartelera };