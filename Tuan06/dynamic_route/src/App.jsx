import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

export default function App() {
  return (
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
  );
}