import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Connect from './pages/Contect.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/connect-with-us" element={<Connect />} />
      
      </Routes>
    </>
  );
};

export default App;
