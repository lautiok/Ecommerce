import React from 'react'
import { Link, useParams } from 'react-router-dom';


export const PedidoExitoso = () => {
    const { id } = useParams();

  return (
    <div className='pedido-exitoso'>
        <h1>Su Pedido Fue Exitoso✨🎉</h1>
        <p>su numero de pedido es ({id})</p>
        <Link to='/'>volver</Link>
    </div>
  )
}
