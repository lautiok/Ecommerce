import React, { createContext, useState, useEffect } from "react";
import {toast} from 'sonner'


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Cargar el carrito desde el almacenamiento local al inicio
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Guardar el carrito en el almacenamiento local cada vez que cambie
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Función para calcular el total del carrito
    const calculateTotal = () => {
        return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    };

    // Guardar el total del carrito en el almacenamiento local cada vez que cambie
    useEffect(() => {
        localStorage.setItem('cartTotal', calculateTotal());
    }, [cart]);

    const addCart = (product) => {
        const productIndex = cart.findIndex(item => item.id === product.id);

        if (productIndex !== -1) {
            const newCart = [...cart];
            newCart[productIndex].quantity += 1;
            setCart(newCart);
            toast.success('se agrego al carrito', {
                duration: 2000,
            })

        } else {
            setCart(prevCart => [
                ...prevCart,
                { ...product, quantity: 1 }
            ]);
            toast.success('Añadido al carrito', {
                duration: 2000
            })
        }
    };

    const removeCart = () => {
        setCart([]);
        toast.success('se elimino el carrito', {
            duration: 2000
        })
    };
    
    const removeItem = (id) => {
        const productIndex = cart.findIndex(item => item.id === id);
    
        if (productIndex !== -1) {
            const newCart = [...cart];
            if (newCart[productIndex].quantity > 1) {
                newCart[productIndex].quantity -= 1;
                toast.success('se elimino del carrito', {
                    duration: 2000
                })
            } else {
                // Si solo hay un producto de este tipo, lo eliminamos del carrito
                newCart.splice(productIndex, 1);
                toast.success('se elimino del carrito', {
                    duration: 2000
                })
            }
            setCart(newCart);
        }
    }

    return (
        <CartContext.Provider value={{ cart, total: calculateTotal(), addCart, removeCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
