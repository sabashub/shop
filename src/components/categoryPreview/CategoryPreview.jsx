import React from "react";
import { Link } from "react-router-dom";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./CategoryPreview.styles.jsx";
import ProductCard from "../productCart/ProductCard";
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title}</Title>
      </h2>
      <Preview>
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
