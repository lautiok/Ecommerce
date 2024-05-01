import React, { useEffect } from "react";
import { useProduct } from "../context/ProductContext";
import { DashProductsCards } from "./DashProductsCards";
import { HeaderDash } from "./HeaderDash";

export const ProducDas = () => {
  const { products, getProducts, deleteProduct } = useProduct();
  // Obtener los productos
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
    <HeaderDash />
    <div className="list-products">
        <DashProductsCards products={products} deleteProduct={deleteProduct} />
    </div>
    </>

    
  );
};
