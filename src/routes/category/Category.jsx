import React, { Fragment, useEffect, useState } from "react";
import { CategoryContainer, CategoryTitle } from "./Category.styles.jsx";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import ProductCard from "../../components/productCart/ProductCard";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
