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
                <div className="Sidebar-wrapped">
                    <h3>Categorias</h3>
                    {genres.map(genre => (
                        <li key={genre.name + 1234}>{genre.name}</li>
                    ))}
                </div>
            </div>
        )
    }

}

export { SideBar }