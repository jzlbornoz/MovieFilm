import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import '../style/containers/Profile.css';
import { Link } from 'react-router-dom';
import { LogoutButton } from '../components/LogoutButton';


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!!isAuthenticated) {
    return (
      <section className='Profile'>
        <div className="Profile-wrapped">
          <h2>PROFILE</h2>
          <img src={user.picture} alt={user.name} />
          <p><b>UserName: </b>{user.name}</p>
          <p><b>Email: </b>{user.email}</p>
          <LogoutButton />
          <Link to='/'>
            <p><i className="fa-solid fa-arrow-right-from-bracket fa-2xl" /></p>
          </Link>
        </div>
      </section>
    )
  } else {
    return (
      <section className='Profile'>
        <div className="Profile-wrapped">
          <p>Inicia sesion</p>
        </div>
      </section>
    )
  }

}

export { Profile };