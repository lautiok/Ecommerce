import React, { useEffect } from 'react';
import { Cardproducts } from './Cardproducts';
import { useProduct } from '../context/ProductContext';

export const ListProducts = () => {
    const { products, getProducts } = useProduct();

    useEffect(() => {
        getProducts();
    }, []);

    // Check if products is undefined or null
    if (!products) {
        return <div className='loading'>No hay productos disponibles</div>; 
    }

    const filterproducts = products.slice(0, 3);

    return (
        <div className='list-products'>
            <Cardproducts products={filterproducts} /> 
        </div>
    );
};
