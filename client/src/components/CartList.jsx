import React from 'react'

export const CartList = ({ img, name, price, quantity, addCart, removeCart }) => {
    return (
      <li className='cart-list'>
          <img src={img} alt={name} />
          <div>
              <strong>{name}</strong> - ${price}
          </div>
          <footer className='cart-footer'>
              <small>
              cantidad : {quantity}
              </small>
              <div className='cart-actions'>
                <a className='add' onClick={addCart}>+</a>
                <a className='remove' onClick={removeCart}>-</a>
              </div>
              
          </footer>
      </li>
    )
  }