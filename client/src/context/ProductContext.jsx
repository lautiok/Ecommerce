import { createContext, useContext, useState } from "react";
import { getProductsreq, getProductreq, deleteProductreq, createProductreq, updateProductreq } from "../api/products";

const ProductContext = createContext();

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct debe ser utilizado dentro de un ProductProvider");
    }
    return context;
}

export function ProductProvider({ children }) {
    const [products, setProducts] = useState();
    const [product, setProduct] = useState();

    const getProducts = async () => {
        try {
            const res = await getProductsreq();
            setProducts(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getProduct = async (id) => {
        try {
            const res = await getProductreq(id);
            setProduct(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const createProduct = async (product) => {
        const res = await createProductreq(product);
        console.log(res);
    }

    const updateProduct = async (_id, product) => {
        try {
            await updateProductreq(_id, product);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async (_id) => {
        try {
            const res = await deleteProductreq(_id);
            console.log(res);
            getProducts();
        } catch (error) {
            console.log(error);
        }

    }
    
    

    return (
        <ProductContext.Provider value={{
            products,
            getProducts,
            getProduct,
            createProduct,
            product,
            setProduct,
            updateProduct,
            deleteProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}
