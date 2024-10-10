import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import { HeaderDash } from "./HeaderDash";

export const FormProduct = () => {
    const { register, handleSubmit } = useForm();
    const { createProduct} = useProduct();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createProduct(data);

    console.log(data);
  })

  
  return (

    <>
    <HeaderDash />
    <div className="product-form-page">
      <h1>Nuevo Producto</h1>
      <div className="register-product">
        <form className="register-form-product" onSubmit={onSubmit}>
          <input
            type="number"
            placeholder="codigo"
            {...register("id", { required: true })}
          />
          <input
            type="text"
            placeholder="nombre"
            {...register("name", { required: true })}
          />
          <input
            type="text"
            placeholder="descripcion"
            {...register("description", { required: true })}
          />
          <input
            type="text"
            placeholder="precio"
            {...register("price", { required: true })}
          />
          <input
            type="number"
            placeholder="stock"
            {...register("stock", { required: true })}
          />
         
          <input
            type="text"
            placeholder="categoria"
            {...register("category", { required: true })}
          />

          <input
            type="text"
            placeholder="genero"
            {...register("gender", { required: true })}
          />
          <label htmlFor="img"> Imagen</label>
          <input type="file" placeholder="imagen" {...register("image", { required: true })}/>
          <button>Save Product</button>
        </form>
      </div>
    </div>
    </>
    
  );
};
