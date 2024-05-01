import React from 'react'
import { Link } from 'react-router-dom'

export const HeroSeccion = () => {
  return (
    <div className='hero-seccion'>
      <h1>MOTORCLYCLE</h1>
    <Link to='/products'>Nuestros Productos</Link>
    </div>
  )
}
