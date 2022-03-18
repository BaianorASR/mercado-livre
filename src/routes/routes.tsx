import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Cart, Home, Details } from '../pages';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
