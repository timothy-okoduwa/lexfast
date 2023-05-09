import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LandingP from './pages/LandingP/LandingP';
import Fotter from './components/Fotter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './pages/StartWithUs/Start';
import ScrollToTop from './ScrollToTop';

function App() {


  return (
    <BrowserRouter >
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingP />} />
        <Route path='/start' element={<Start />} />
      </Routes>
      <Fotter />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
