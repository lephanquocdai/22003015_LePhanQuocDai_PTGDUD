import React from "react";
import imgProduct from "../../assets/xeco.jpg";
import "./ProductCard.css";

function ProductCard() {
  const product = {
    image: imgProduct,
    name: "Sample Product",
    price: 19.99
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
