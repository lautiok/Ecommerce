import { Link } from "react-router-dom";

export const Cardproducts = ({ products }) => {
    
    return (
        <div className='products'>
    {products && products.map((product) => {
        return (
            <div className='product-card' key={product.id}>
                <img src={product.img} alt={product.name} />
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <Link className="link-product" to={`/product/${product._id}`}>Ver Producto</Link>
            </div>
        )
    })}
</div>
    );
};
