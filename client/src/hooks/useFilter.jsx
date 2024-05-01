import { useState, useEffect } from 'react';

const useFilter = (products, selectedCategory, selectedPrice) => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        let filtered = products;

        if (selectedCategory) {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }
        if (selectedPrice) {
            filtered = filtered.filter(product => product.price <= selectedPrice);
        }

        setFilteredProducts(filtered);
    }, [products, selectedCategory, selectedPrice]);

    return filteredProducts;
};

export default useFilter;
