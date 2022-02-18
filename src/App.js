import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './Component/Header/header';
import About from './Component/About/about';
import Product from './Component/Product/product';

export const RouteContext = React.createContext({});

const initRoutes = [
  { name: 'Home', url: '/home' },
  { name: 'About', url: '/about' }
];


const App = () => {
  const [olProduct, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const url = "https://fakestoreapi.com/products";
    
    fetch(url)
      .then((response) => response.json())
      .then((products) => setProducts(products))
      .catch((error) => console.log(error));
  };
  
  return (
    <div className="App">
      <RouteContext.Provider value={initRoutes}>
        <Header company='Shop React' />
      </RouteContext.Provider>
      <Routes>
        <Route path='home' element={<Product Products={olProduct} />} />
        <Route path='about' element={<About />} />
        <Route path='product' element={<Product Products={olProduct} />} />
        <Route path='product/:id' element={<Product Products={ olProduct} />} />
        <Route path='*' element={<Product Products={olProduct} />} />
      </Routes>
    </div>
  );
}

export default App;
