import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout.jsx';
import { Landing } from '../containers/Landing.jsx';
import { Home } from '../containers/Home.jsx';
import '../App.css';
import { Profile } from '../containers/Profile.jsx';

function App() {
  return (
    <BrowserRouter >
      <Layout >
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
