import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  // console.log(item);
  const navigate = useNavigate();
  return (
    <div className="product">
      <div className="title">{item.title}</div>
      <button
        className="p-btn"
        onClick={() => navigate("/details", { state: item })}
      >
        View details
      </button>
    </div>
  );
};

export default Product;
