import { useState, useContext } from 'react';
import { useId } from 'react';
import { CartContext } from '../context/CartContext'; // Asegúrate de importar el contexto del carrito
import { CartList } from './CartList'; // Assuming CartList is exported from './CartList'
import { Link } from 'react-router-dom';

export const CartContainer = () => {
    const cartCheckboxId = useId();
    const { cart, removeCart, addCart, removeItem } = useContext(CartContext); // Obtener el contexto del carrito
    const [cartActive, setCartActive] = useState(false); // Estado para controlar si el carrito está activo

    const toggleCart = () => {
        setCartActive(!cartActive); // Cambiar el estado del carrito al hacer clic en el botón
    };

    // Función para calcular el total del carrito
    const calculateTotal = () => {
        return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    };

    // Función para cerrar el carrito cuando se presiona "Comprar"
    const handleCloseCart = () => {
        setCartActive(false);
    };

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId} onClick={toggleCart}>
                {/* Mostrar un ícono diferente dependiendo de si el carrito está activo */}
                {cartActive ? (
                    <i className="bi bi-bag-x"></i>
                ) : (
                    <i className="bi bi-bag-fill"></i>
                )}
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden defaultChecked={cartActive} onChange={toggleCart} />
            <aside className={`cart ${cartActive ? 'active' : ''}`}>
                <ul className='cart-list-ul'>
                    {cart.map(product => (
                        <CartList
                            key={product.id}
                            img={product.img}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}
                            addCart={() => addCart(product)}
                            removeCart={() => removeItem(product.id)}
                        />
                    ))}
                </ul>
                {cart.length === 0 && <p className='cart-empty'>Carrito vacío</p>}
                {cart.length > 0 && <button className='cart-button-clear' onClick={removeCart}>Vaciar carrito</button>}
                <div className='carts-bb'>
                    {cart.length > 0 && (
                        <>
                            <p>Total: ${calculateTotal()}</p>
                            {/* Agrega la función handleCloseCart al evento onClick del botón "Comprar" */}
                            <Link className='cart-button-buy' onClick={handleCloseCart} to="/FormulariodeVenta">Comprar</Link>
                        </>
                    )}
                </div>
            </aside>
        </>
    );
};
