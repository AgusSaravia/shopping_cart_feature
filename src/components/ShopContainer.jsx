import ProductListComponent from "./ProductList";
import groceries from "../utils/utils";
import ShoppingCart from "../components/ShoppingCart";
import { useState } from "react";

const ShopContainer = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([...groceries]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);

      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const resetCart = () => {
    setCart([]);
  };

  const isDisabled = (product) => {
    // Verificar si el producto es el que debe tener un límite de 5 unidades
    if (product.id === 20 || product.id === 21) {
      const cartItem = cart.find((item) => item.id === product.id);
      // Deshabilitar si el producto está en el carrito y su cantidad es 5 o más
      return cartItem && cartItem.quantity >= 5;
    }
    return false;
  };

  const reduceQuantity = (productId) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Elimina el producto si la cantidad es 0
    );
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <ProductListComponent
                products={products}
                onAddToCart={addToCart}
                isDisabled={isDisabled}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <ShoppingCart
                cartItems={cart}
                resetCart={resetCart}
                onReduceQuantity={reduceQuantity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopContainer;
