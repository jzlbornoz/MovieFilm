import React from 'react';
import { Link } from 'react-router-dom';
import { LoginButton } from './LoginButton';
import '../style/components/Header.css';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutButton } from './LogoutButton';

const Header = () => {
    const { isAuthenticated} = useAuth0();
    return (
        <div className="Header">
            <div className="Header-wrapped">
                <Link to='/'>
                <p>MovieFilm</p>
                </Link>
                <div className="Header-profile">
                    <Link to='/profile'>
                    {!!isAuthenticated && <p>Profile</p>}
                    </Link>
                </div>
                <div className="Header-button">
                    {!isAuthenticated ? <LoginButton /> : <LogoutButton/>}
                </div>
            </div>
        </div>
    )
}

export { Header };