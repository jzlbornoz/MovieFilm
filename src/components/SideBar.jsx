import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../style/components/SideBar.css';

const SideBar = () => {
    const { genres } = useContext(AppContext);
    if (!genres) {
        return <p>NO hay</p>
    } else {
        return (
            <div className="SideBar">
                <h3>Categorias</h3>
                {genres.map(genre => (
                    <p>{genre.name}</p>
                ))}
            </div>
        )
    }

}

export { SideBar }