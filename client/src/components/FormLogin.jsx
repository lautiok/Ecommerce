import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singin, errors: signinErrors, isAuth } = useAuth();
  const navegate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    singin(data);
  });

  useEffect(() => {
    if (isAuth) navegate("/dashboard");
  }, [isAuth]);

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        {signinErrors.map((error, i) => (
          <div className="register-error" key={i}>
            <p>{error}</p>
          </div>
        ))}
        <form onSubmit={onSubmit} className="login-form">
          <input type="email" placeholder="Username" {...register("email", { required: true })}  />
          {errors.email && <p className="error">Email is required</p>}
          <input type="password" placeholder="Password" {...register("password", { required: true })} />
          {errors.password && <p className="error">Password is required</p>}
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};
