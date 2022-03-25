import React from 'react';
import { LoginButton } from './LoginButton';
import '../style/components/Welcome.css';

const Welcome = () => {
    return (
        <div className='Welcome'>
            <div className='Welcome-wrapped'>
                <div className='Welcome-title'>
                    <h2>
                        Welcome to MovieFilm
                    </h2>
                </div>
                <div className="Welcome-login">
                    <h3>Inicia sesion!</h3>
                    <LoginButton />
                </div>
            </div>
        </div>
    )
}

export { Welcome };