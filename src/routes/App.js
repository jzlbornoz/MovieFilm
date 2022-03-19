import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout.jsx';
import { Landing } from '../containers/Landing.jsx';
import '../App.css';

function App() {
  return (
    <BrowserRouter >
      <Layout >
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
