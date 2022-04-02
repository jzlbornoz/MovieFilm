import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Home } from './Home';
import '../style/containers/Landing.css';
import { Welcome } from '../components/Welcome';

const Landing = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="Landing">
      {!isAuthenticated ? <Welcome /> : <Home />}
    </div>
  )
}

export { Landing };