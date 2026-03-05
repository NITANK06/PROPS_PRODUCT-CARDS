import React from "react";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />

      <h2>{props.name}</h2>

      <p className="price">₹{props.price}</p>

      <p>{props.description}</p>

      <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;
