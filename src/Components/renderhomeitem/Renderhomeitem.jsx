import React from "react";
import "./Renderhomeitem.css";
import allproducts from "../Assets/allproductsHome";
import Items from "../Items/Items";

const Renderhomeitem = () => {
  return (
    <div>
      <h1>Best Selling Products</h1>
      <hr />
      <div className="product-grid">
        {allproducts.map((product) => (
          <Items
            key={product.id}
            type={product.type}
            description={product.description}
            img={product.img}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Renderhomeitem;
