import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';


const Profile = () => {
    const {user} = useAuth0();
  return (
    <div>
        <h2>PROFILE</h2>
        <h3>{user.name}</h3>
        
    </div>
  )
}

export  {Profile};