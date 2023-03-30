import "./ProductCard.scss";
import React from "react";
import Button from "../button/Button";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button buttonType="inverted">GO TO CHECKOUT</Button>
    </div>
  );
};

export default ProductCard;
