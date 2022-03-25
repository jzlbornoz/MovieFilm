import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import '../style/containers/Profile.css';
import { Link } from 'react-router-dom';


const Profile = () => {
    const {user , isAuthenticated} = useAuth0();

    if (!!isAuthenticated) {
      return (
        <div className='Profile'>
            <h2>PROFILE</h2>
            <img src={user.picture} alt={user.name} />
            <h3>{user.name}</h3>
            <Link to='/'>
            <p>Atras</p>
            </Link>
        </div>
      )
    }else{
      <p>Inicia secion</p>
    }
  
}

export  {Profile};