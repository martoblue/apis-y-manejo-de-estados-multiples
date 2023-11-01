import React, { useState, useEffect } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => { setProducts(data); setOrder(data) });
  }, []);

  const originalList = () => {
    setProducts(order)
  }
  const sortList = () => {
    const sortList = [...order].sort((b, a) => a.rating.rate - b.rating.rate);
    setProducts(sortList);
  }
  const sortListAsc = () => {
    const sortList = [...order].sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts(sortList);
  }
  const sortListPrice = () => {
    const sortList = [...order].sort((b, a) => a.price - b.price);
    setProducts(sortList);
  }
  const sortListPriceAsc = () => {
    const sortList = [...order].sort((a, b) => a.price - b.price);
    setProducts(sortList);
  }

  return (
    <main>
      <div className="main-container">
        <div className='button-container'>
          <button onClick={originalList}>List original</button>
          <button onClick={sortList}>Ordenar: Rating Desc</button>
          <button onClick={sortListAsc}>Ordenar: Rating Asc</button>
          <button onClick={sortListPrice}>Ordenar: Precio Desc</button>
          <button onClick={sortListPriceAsc}>Ordenar: Precio Asc</button>
        </div>
        <div className='product-list-container'>
          {products.map((product) => (
            <ProductCard key={product.id} props={product} value={product.id} />
          ))}
        </div>

      </div>
    </main>
  )
}

export default App;