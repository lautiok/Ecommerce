import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export const Footer = () => {
  return (
    <footer>
         <div className='izq'>
                <img src={logo} alt="logo" />
                <p>Todos los derechos reservados</p>
         </div>
         <div className='der'>
            <div className='redes'>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-whatsapp"></i></a>
            </div>
         </div>
    </footer>
  )
}
