import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { HeaderDash } from './HeaderDash'
export const FormNewUser = () => {
    const { register, handleSubmit } = useForm();
    const {signup, user} = useAuth();
    const navigate = useNavigate();

    // ver si el que entra es un admin si no mandar un mesaje no autorizado


    if (user?.role !== 'admin') {
        navigate('/dashboard/user/add')

        return (
            <h1>No tienes permisos para acceder a esta página</h1>
        )
    }

    const onSubmit = handleSubmit((data) => {
        signup(data)
    })
    navigate('/dashboard')


  return (

    <>
    <HeaderDash />
    <div className='form-new-user'>
        <form className="register-form-user" onSubmit={onSubmit}>
            <input type="text" placeholder="Username" {...register("username")} />
            <input type="email" placeholder="Email" {...register("email") } />
            <input type="password" placeholder="Password" {...register("password")} />
            <select name="role" id="role-create" {...register("role")}>
                <option value="admin">Administrador</option>
                <option value="facturacion">Facturacion</option>
                <option value="logistica">Logistica</option>
            </select>
            <button>Register</button>
        </form>
    </div>
    </>
    
  )
}
