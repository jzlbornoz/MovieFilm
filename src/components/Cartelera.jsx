import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { AppContext } from '../context/AppContext';
import { Card } from './Card';
import { EmptyResults } from './EmptyResults';
import '../style/components/Cartelera.css';

const Cartelera = () => {
  const { user } = useAuth0();
  const { filteredMovies, loading, selectMovie, filteredSeries } = useContext(AppContext);

  const handleSelect = item => () => {
    selectMovie(item)
  };

  if (!!loading) {
    <p>loading</p>
  } else {
    return (
      <section className="Cartelera">
        <h2>{`Hello ${user.name}`}</h2>
        <p className='Cartelera-h3'>MOVIES</p>
        <div className='Cartelera-wrapped'>
          {filteredMovies.length > 0 ? filteredMovies.map(movie => {
            return (
              <section>
                <Link to='/review' key={movie.id + 12} onClick={handleSelect(movie)} className='hola'>
                <Card movie={movie} />
              </Link>
              </section>
              
            )
          }) : <EmptyResults />} </div>
          <p className='Cartelera-h3'>SERIES</p>
          <div className='Cartelera-wrapped'>
          {filteredSeries.length > 0 ?  filteredSeries.map(serie => (
            <section>
              <Link to='/review' key={serie.id} onClick={handleSelect(serie)} className='hola'>
              <Card movie={serie} />
            </Link>
            </section>
          )) : <EmptyResults />}</div>
      </section>
    )
  }
}

export { Cartelera };