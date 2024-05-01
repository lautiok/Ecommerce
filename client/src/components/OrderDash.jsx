import React, { useEffect } from "react";
import { useOrder } from "../context/OrderContext";
import { Link } from "react-router-dom";
import { HeaderDash } from "./HeaderDash";

export const OrderDash = () => {
  const { getOrders, orders, deleteOrder  } = useOrder();

  useEffect(() => {
    getOrders();
  }, []);


  console.log(orders);
  return (
    <>
    <HeaderDash/>
     <div className="order-dash">
      <h2>Mis pedidos</h2>
      <div className="order">
      <table className='table'>
                        <thead>
                            <tr>
                                <th>Numero de orden</th>
                                <th>Cliente</th>
                                <th>Fecha</th>
                                <th>Total</th>
                                <th>Ver pedidos</th>
                            </tr>
                        </thead>
        {orders &&
          orders.map((order) => {
            return (
              <tbody>
                <tr key={order._id}>
                  <td>{order.orden}</td>
                  <td>
                    {order.name} {order.apellido}
                  </td>
                  <td>{new Date(order.updatedAt).toLocaleString()}</td>
                  <td>${order.total}</td>
                 <td className="actions-dash-order">
                    <Link to={`/dashboard/order/${order._id}`}>Ver pedido</Link>
                    <button onClick={() => deleteOrder(order._id)}>Cancelar orden</button>
                 </td> 
                </tr>
                
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
      </>
  );
};
