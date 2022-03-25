import React from 'react';
import { SideBar } from '../components/SideBar';
import { Cartelera } from '../components/Cartelera';
import '../style/containers/Home.css'

const Home = () => {
    return (
        <div className="Home">
            <SideBar />
            <Cartelera />
        </div>
    )
}

export { Home };