import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const HeaderDash = () => {
    const { logout, user } = useAuth();
    
  return (
    <header className='header-das'>
        <ul>
          <li><Link to='/dashboard'>Productos</Link></li>
          <li><Link to='/dashboard/product/add'>Agregar Productos</Link></li>
          <li><Link to='/dashboard/orders'>Ordenes</Link></li>
          {
            user?.role === 'admin' && <li><Link to='/dashboard/user/add'>agregar usuario</Link></li>
          }
        </ul>
        <button onClick={logout} >cerrar sesion</button>
      </header>
  )
}
