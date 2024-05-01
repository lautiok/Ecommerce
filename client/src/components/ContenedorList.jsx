import React, { useEffect } from 'react';
import { ComponenteCard } from './ComponenteCard';
import { useProduct } from '../context/ProductContext';
import { useParams } from 'react-router-dom';

export const ContenedorList = () => {
  const { getProduct, product } = useProduct();
  const { id } = useParams();

  // Obtener el producto por ID

  useEffect(() => {
    getProduct(id);
  }, [id]);


  return (
    <div className='contenedor-list-products'>
      {product && <ComponenteCard products={[product]} />}

    </div>
  );
};
