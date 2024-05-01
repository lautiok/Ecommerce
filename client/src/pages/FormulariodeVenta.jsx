import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../context/CartContext";
import { useOrder } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";

export const FormularioDeVenta = () => {
  const { cart, total, removeCart } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const { createOrder } = useOrder();
  const navigate = useNavigate();

  //generar id aleatorio

  const orden = Math.random().toString(36).substring(2, 7);

  const onSubmit = handleSubmit((data) => {
    createOrder({
      ...data,
      pedido: cart.map((item) => ({
        name: item.name,
        id: item.id,
        price: item.price,
        quantity: item.quantity,
      })),
      total,
      orden,
    });
    console.log("Orden creada exitosamente");
    removeCart();
    navigate(`/pedidoexitoso/${orden}`);
  });
  return (
    <main className="formulariodeVenta">
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="motorcycle@example.com"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
              {...register("name", { required: true })}
            />
            <input
              type="text"
              name="apellido"
              id="apellido"
              placeholder="Apellido"
              {...register("apellido", { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="direccion"
              id="direccion"
              placeholder="Dirección"
              {...register("direccion", { required: true })}
            />
            <input
              type="text"
              name="casa"
              id="casa"
              placeholder="Casa, apartamento, etc. (opcional)"
              {...register("casa")}
            />
            <input
              type="number"
              name="codigopostal"
              id="codigopostal"
              placeholder="Código Postal"
              {...register("codigopostal", { required: true })}
            />
            <input
              type="text"
              name="ciudad"
              id="ciudad"
              placeholder="Ciudad"
              {...register("ciudad", { required: true })}
            />
            <input
              type="text"
              name="provincia"
              id="provincia"
              placeholder="Provincia"
              {...register("provincia", { required: true })}
            />
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Teléfono"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="form-group ">
            <div className="mpago ar ">
              <label htmlFor="efectivo">Contraentrega</label>
              <input
                type="radio"
                name="contraentrega"
                id="contraentrega"
                {...register("contraentrega")}
              />
            </div>
            <div className="mpago">
              <label htmlFor="transferencia">Transferencia</label>
              <input
                type="radio"
                name="transferencia"
                id="transferencia"
                {...register("transferencia")}
              />
            </div>
            <div className="alert">
              <p>
                Si eliges la opción de transferencia, el pedido no será
                procesado hasta que envíes el comprobante a través de WhatsApp
                al número 1137720298.
              </p>
              <p>CBU: 01234567890123456789</p>
            </div>
          </div>
          <input
            type="submit"
            value="Confirmar pedido"
            className="submit-btn"
          />
        </form>
      </div>
      <div className="cart-list-container">
        {cart.map((item) => (
          <div className="cart-item-container" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">${item.price}</p>
            <p className="quantity">Cantidad: {item.quantity}</p>
          </div>
        ))}
        <p>Total: ${total}</p>
      </div>
    </main>
  );
};
