import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Home } from './Home';
import '../style/containers/Landing.css';

const Landing = () => {
  const {isAuthenticated} = useAuth0();
  return (
    <div className="Landing">
        {!isAuthenticated ? <p>Aca va un componente que va a ir en el home tambien</p> : <Home />}
    </div>
  )
}

export  {Landing};