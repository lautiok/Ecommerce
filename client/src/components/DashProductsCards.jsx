import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../context/ProductContext";

export const DashProductsCards = ({ products }) => {
  const { deleteProduct } = useProduct();
  return (
    <div className="products">
      {products &&
        products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <img src={product.img} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <div className="product-card-buttons-dash">
                <Link to={`/dashboard/product/${product._id}`}>Editar</Link>
                <button onClick={() => deleteProduct(product._id)}>Eliminar</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
