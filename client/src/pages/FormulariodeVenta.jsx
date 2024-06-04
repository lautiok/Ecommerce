import React from "react";
import {FormulariodeVentaForm} from "../components/FormulariodeVentaForm";
import {CartListVe} from "../components/CartListVe";

export const FormularioDeVenta = () => {
  return (
    <main className="formulariodeVenta">
      <div className="form-container">
        <FormulariodeVentaForm

        />
      </div>
      <CartListVe/>
    </main>
  );
};
