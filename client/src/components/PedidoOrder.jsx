import React, { useEffect } from "react";
import { useOrder } from "../context/OrderContext";
import { useParams } from "react-router-dom";
import { HeaderDash } from "./HeaderDash";

export const PedidoOrder = () => {
  const { getOrder, order } = useOrder();
  const { id } = useParams();

  useEffect(() => {
    getOrder(id);
  }, [id]);

  console.log(order);

  // si viene estado pendiente poner pagar, si es pagado poner enviar y si es enviado mostrar en distribución

  return (
    <div className="order-container">
      <HeaderDash />
      {order &&
        order.map((orderItem) => {
          return (
            <div className="order">
              <div className="order-content" key={orderItem._id}>
                <div className="order-fecha">
                  <h2>Pedido: {orderItem.orden}</h2>
                  <p>Fecha: {new Date(orderItem.updatedAt).toLocaleString()}</p>
                </div>
                <div className="order-datos">
                  <p>
                    Cliente: {orderItem.name} {orderItem.apellido}
                  </p>
                  <p>Dirección: {orderItem.direccion}</p>
                  <p>Ciudad: {orderItem.ciudad}</p>
                  <p>Provincia: {orderItem.provincia}</p>
                  <p>Codigo postal: {orderItem.codigopostal}</p>
                  <p>Telefono: {orderItem.phone}</p>
                  <p>Email: {orderItem.email}</p>
                </div>
              </div>
              <table className="order-table" key={orderItem._id}>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {orderItem.pedido &&
                    orderItem.pedido.map((product) => {
                      return (
                        <tr key={product._id}>
                          <td>{product.name}</td>
                          <td>{product.quantity}</td>
                          <td>${product.price}</td>
                        </tr>
                      );
                    })}
                  <div className="order-total-forma">
                    <p>Total: ${orderItem.total}</p>
                    <p>
                      Forma de pago:{" "}
                      {orderItem.contraentrega
                        ? "Contraentrega"
                        : "Transferencia"}
                    </p>
                    <button className={orderItem.estado}>
                      {orderItem.estado === "Pendiente"
                        ? "Pagar"
                        : orderItem.estado === "Pagado"
                        ? "Enviar"
                        : "En distribución"}
                    </button>
                  </div>
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
};
