import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './vite-project/src/components/navbar';
import Footer from './vite-project/src/components/footer';
import Shop from './vite-project/src/pages/shop';
import Contact from './vite-project/src/pages/contact';
import Home from './vite-project/src/pages/home';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
