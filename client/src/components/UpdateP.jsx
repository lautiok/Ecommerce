import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import { HeaderDash } from "./HeaderDash";

export const UpdateP = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { getProduct, product, updateProduct } = useProduct();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getProduct(params.id);
  }, []);

  useEffect(() => {
    if (product) {
      setValue("id", product.id);
      setValue("name", product.name);
      setValue("description", product.description);
      setValue("price", product.price);
      setValue("stock", product.stock);
      setValue("img", product.img);
      setValue("category", product.category);
      setValue("gender", product.gender);
    }
  }, [product, setValue]);

  const onSubmit = handleSubmit((data) => {
      updateProduct(params.id, data);
    navigate("/dashboard");
  });

  return (
    <>
      <HeaderDash />
      <div className="product-form-page">
        <h1>Editar Producto</h1>
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
              placeholder="imagen"
              {...register("img", { required: true })}
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
            <button>Actualizar Producto</button>
          </form>
        </div>
      </div>
    </>
  );
};
