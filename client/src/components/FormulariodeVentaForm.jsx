import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useOrder } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import { useCart } from "../hooks/useCart";
import { random } from "../utils/numberRamdom";
import { options } from "../utils/optionsFormulario";
import Select from "react-select";

export const FormulariodeVentaForm = () => {
  const { register, handleSubmit } = useForm();
  const { createOrder } = useOrder();
  const { cart, total, removeCart } = useCart();
  const navigate = useNavigate();
  const { updateProduct } = useProduct();
  const [select, setSelect] = useState(null);
  const orden = random(1000, 9999);

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

    cart.forEach((item) => {
      updateProduct(item._id, {
        stock: item.stock - item.quantity,
      });

      console.log("Se actualizo el stock");
    });
    console.log("Orden creada exitosamente");
    removeCart();
    navigate(`/pedidoexitoso/${orden}`);
  });

  return (
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
        <div className="mpago">
          <Select
            placeholder="Metodo de pago"
            options={options}
            {...register("mpago", { required: true })}
          />
        </div>
        <div className="alert">
          <p>
            Si eliges la opción de transferencia, el pedido no será procesado
            hasta que envíes el comprobante a través de WhatsApp al número
            1137720298.
          </p>
          <p>CBU: 01234567890123456789</p>
        </div>
      </div>
      <input type="submit" value="Confirmar pedido" className="submit-btn" />
    </form>
  );
};
