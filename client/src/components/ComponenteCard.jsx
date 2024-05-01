import { useCart } from "../hooks/useCart";
import { Toaster } from "sonner";

export const ComponenteCard = ({ products }) => {
  const { addCart } = useCart();
  return (
    <>
      <Toaster />
      <div className="products">
        {products.map((product) => (
          <div className="product-card-conteiner" key={product.id}>
            <div className="img-product-card">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="info-product">
              <h2>{product.name}</h2>
              <p>Stock: {product.stock} Unidades</p>
              <p>${product.price}</p>
              <button onClick={() => addCart(product)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
