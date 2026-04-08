import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Iphone" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Laptop" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      {product ? (
        <p>{product.name} - Product ID: {product.id}</p>
      ) : (
        <p>Sản phẩm không tồn tại</p>
      )}
    </div>
  );
}