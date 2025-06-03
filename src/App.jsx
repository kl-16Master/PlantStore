// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Products from './components/Products';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
