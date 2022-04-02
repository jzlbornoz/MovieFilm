import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../style/components/Header.css';
import { useAuth0 } from '@auth0/auth0-react';
import { AppContext } from '../context/AppContext';
import logo from '../assets/LOGO.png';

const Header = () => {
    const { isAuthenticated } = useAuth0();
    const { search, inputRef, handleSearch } = useContext(AppContext);
    return (
        <div className="Header">
            <div className="Header-wrapped">
                <Link to='/'>
                    <div className="Header-logo">
                        <img src={logo} alt="LOGO" />
                    </div>
                </Link>
                <div className="Header-secondLeg">
                    <div className="Header-profile">
                        <Link to='/profile'>
                            {!!isAuthenticated && <p>Profile</p>}
                        </Link>
                    </div>
                    <div className="Header-input">
                        {!!isAuthenticated && <input type="text" placeholder='Search' ref={inputRef} value={search} onChange={handleSearch} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Header };