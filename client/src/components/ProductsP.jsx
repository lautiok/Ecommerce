import React, { useState, useEffect } from 'react';
import { useProduct } from '../context/ProductContext';
import { Cardproducts } from './Cardproducts';
import { Filter } from './Filter';
import useFilter from '../hooks/useFilter';

export const ProductsP = () => {
    const { products, getProducts } = useProduct();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState();
     const filteredProducts = useFilter(products, selectedCategory, selectedPrice);

    useEffect(() => {
        getProducts();
    }, []);

    if (!filteredProducts) {
        return <div className='loading'>No hay productos disponibles</div>;
    }

    const filterlimit = filteredProducts.slice(0, 10);

   
    return (
        <div className='products-page'>
            <Filter 
                setSelectedCategory={setSelectedCategory} 
                selectedPrice={selectedPrice} 
                selectedCategory={setSelectedCategory} 
                setSelectedPrice={setSelectedPrice}  
            />
            <div className='list-products'>
                <Cardproducts products={filterlimit} /> 
            </div>
        </div>
    );
};
