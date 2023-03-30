import React from "react";
import { createContext } from "react";
import PRODUCT from "../ShopData.json";
import { useState } from "react";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCT);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
