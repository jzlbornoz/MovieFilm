import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout.jsx';
import { Landing } from '../containers/Landing.jsx';
import { Home } from '../containers/Home.jsx';
import '../App.css';
import { Profile } from '../containers/Profile.jsx';
import { AppContext } from '../context/AppContext';
import { useData } from '../hooks/useData.jsx';
import { Review } from '../containers/Review.jsx';

function App() {
  const value = useData();
  return (
    <AppContext.Provider value={value}>
      <BrowserRouter >
        <Layout >
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/review' element={<Review />} />
            <Route path="*" element={<div>No encontrado</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
