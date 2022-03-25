import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Home = () => {
    const {isAuthenticated , user} = useAuth0();
    return (
        <div>
            {`Hola ${user.name}`}
        </div>
    )
}

export { Home };