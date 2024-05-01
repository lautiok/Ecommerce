import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Link to='/'>
        <img src={logo} alt='logo' />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </nav>
      <div className='carrito'>
        <a href=""><i className="bi bi-facebook"></i></a>
        <a href=""><i className="bi bi-twitter"></i></a>
        <a href=""><i className="bi bi-whatsapp"></i></a>
      </div>
    </header>
  )
}
