import React, { useEffect, useState } from 'react';
import { ComponenteCard } from './ComponenteCard';
import { useProduct } from '../context/ProductContext';
import { useParams } from 'react-router-dom';

export const ContenedorList = () => {
  const { getProduct, product } = useProduct();
  const { id } = useParams();
  const [isloading, setIsloading] = useState(true);

  // Obtener el producto por ID

  useEffect(() => {
    const getProductById = async () => {
      await getProduct(id);
      setIsloading(false);
    }

    getProductById();
  }, []);


  return (
    <div className='contenedor-list-products'>
      {isloading ? <div className='loading'>Cargando...</div>
       : <ComponenteCard products={[product]} />}

    </div>
  );
};
