import React, { useState } from 'react';
import img1 from '../Components/Assets/bathware-waterclosets.webp';
import './CSS/Productcategory.css'

const ProductList = () => {
  // State variables for filters
  const [priceRange, setPriceRange] = useState([0, 10000]);

  // Function to handle price range change
  const handlePriceChange = (event) => {
    const [minPrice, maxPrice] = event.target.value.split(',').map(Number);
    setPriceRange([minPrice, maxPrice]);
  };

  // Function to format price in INR
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
  };

  return (
    <div className="product-list-container">
      {/* Filter section */}
      <div className="filter-container">
        <div className="filter-content">
          <div className="filter-group">
            <h3>Price</h3>
            <input type="range" min="0" max="10000" onChange={handlePriceChange} />
            <span>Range: {formatPrice(priceRange[0])}</span>
          </div>
          <div className="filter-group">
            <h3>Brand</h3>
            <label>
              <input type="checkbox" value="Brand 1" />
              Brand 1
            </label>
            <label>
              <input type="checkbox" value="Brand 2" />
              Brand 2
            </label>
            {/* Add more brand checkboxes as needed */}
          </div>
          <div className="filter-group">
            <h3>Quality</h3>
            <select>
              <option value="">All</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="filter-group">
            <h3>Size</h3>
            <label>
              <input type="checkbox" value="Small" id="h1" />
              <h3 className="h1">Small</h3>
            </label>
            <label>
              <input type="checkbox" value="Medium" />
              <h3 className="h0">Medium</h3>
            </label>
            <label>
              <input type="checkbox" value="Large" />
              <h3 className="h0">Large</h3>
            </label>
            {/* Add more size checkboxes as needed */}
          </div>
        </div>
      </div>

      {/* Product section */}
      <div className="product-list">
        {/* Sample JSON data representing products */}
        {products.map(product => (
          <div key={product.id} className="product-box">
            <img src={product.image} alt={`Product ${product.id}`} />
            <div className="text">
              <h3>{product.type}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample JSON data representing products
const products = [
  { id: 1, type: 'Type 1', image: img1 },
  { id: 2, type: 'Type 2', image: img1 },
  { id: 3, type: 'Type 3', image: img1 },
  { id: 4, type: 'Type 4', image: img1 },
  { id: 5, type: 'Type 5', image: img1 },
  { id: 6, type: 'Type 6', image: img1 },
  { id: 7, type: 'Type 7', image: img1 },
  { id: 8, type: 'Type 8', image: img1 },
  { id: 9, type: 'Type 9', image: img1 },
  { id: 10, type: 'Type 10', image: img1 },
  { id: 11, type: 'Type 11', image: img1 },
  { id: 12, type: 'Type 12', image: img1 },
  { id: 13, type: 'Type 13', image: img1 },
  { id: 14, type: 'Type 14', image: img1 },
  { id: 15, type: 'Type 15', image: img1 },
  { id: 16, type: 'Type 16', image: img1 },
  { id: 17, type: 'Type 17', image: img1 },
  { id: 18, type: 'Type 18', image: img1 },
  { id: 19, type: 'Type 19', image: img1 },
  { id: 20, type: 'Type 20', image: img1 }
];

export default ProductList;
