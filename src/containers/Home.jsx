import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Home = () => {
    const {isAuthenticated} = useAuth0();
    return (
        <div>
            home
        </div>
    )
}

export { Home };