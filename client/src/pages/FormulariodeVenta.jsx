import React from "react";
import {FormularioDeVentaForm} from "../components/FormulariodeVentaForm";
import {CartList} from "../components/CartListVe";

export const FormulariodeVenta = ({cart, total, removeCart, navigate, orden}) => {
  return (
    <main className="formulariodeVenta">
      <div className="form-container">
        <FormularioDeVentaForm
          cart={cart}
          total={total}
          removeCart={removeCart}
          navigate={navigate}
          orden={orden}
        />
      </div>
      <CartList cart={cart} total={total} />
    </main>
  );
};
