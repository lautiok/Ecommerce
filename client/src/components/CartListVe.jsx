import React from "react";
import { useCart } from "../hooks/useCart";

export const CartListVe = () => {
  const { cart, total } = useCart();
  return (
    <div className="cart-list-container">
      { cart && cart.map((item) => (
        <div className="cart-item-container" key={item.id}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p className="price">${item.price}</p>
          <p className="quantity">Cantidad: {item.quantity}</p>
        </div>
      ))}
      <p>Total: ${total}</p>
    </div>
  );
};
