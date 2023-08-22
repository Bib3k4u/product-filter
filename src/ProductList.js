import React, { useState } from 'react';
import products from './products.json';

function ProductList() {
  const [category, setCategory] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(Number(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(Number(event.target.value));
  };

  const filteredProducts = products.filter((product) => {
    return (
      (category === 'All' || product.category === category) &&
      product.price >= minPrice &&
      product.price <= maxPrice
    );
  });

  return (
    <div>
      <h1 className=' m-4  pt-2 font-bold text-3xl text-center text-purple-700'>Products Details</h1>
      <div className='font-bold p-8 text-xl text-center'>
        <label className=' m-8 text-purple-700'>
          Category:
          <select className='border w-1/6 h-10 rounded-lg m-2 hover:bg-slate-200' value={category} onChange={handleCategoryChange}>
            <option value="All">All</option>
            <option value="Category 1">Apple</option>
            <option value="Category 2">Bird</option>
            <option value="Category 3">BoAt</option>
            <option value="Category 4">JBL</option>
          </select>
        </label>
        <label className=' m-8 text-purple-700'>
          Min Price:
          <input className='border w-1/6 h-10 rounded-lg m-2 hover:bg-slate-200' type="number" value={minPrice} onChange={handleMinPriceChange} />
        </label>
        <label className=' m-8 text-purple-700'>
          Max Price:
          <input className='border w-1/6 h-10 rounded-lg m-2 hover:bg-slate-200' type="number" value={maxPrice} onChange={handleMaxPriceChange} />
        </label>
      </div>


      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-col-5 m-4 items-center'>
        {filteredProducts.map((product) => (
          <li key={product.name}>
            <img className='h-80 w-96  rounded-md shadow-md hover:scale-105 hover:duration-300 hover:shadow-xl ml-16' src={product.image} alt={product.name} />
            <div className='m-2 ml-16 w-96 mb-8'>
              <h3 className='font-bold text-lg text-purple-700'>{product.name}</h3>
              <p>{product.description}</p>
              <p className='font-bold'>Rs.{product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;