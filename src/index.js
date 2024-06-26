import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Housing from './pages/Housing/Housing';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <Nav />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/housing/:id' element={<Housing />} />
      <Route path='/about' element={<About />} />
      <Route path='/*' element={<Error />} />
    </Routes>

    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
