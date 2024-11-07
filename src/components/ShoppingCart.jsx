import { useState } from "react";

const ShoppingCart = ({ cartItems, resetCart, onReduceQuantity }) => {
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

  const handlePurchase = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.quantity * item.unitPrice,
      0
    );

    setPurchaseConfirmed(`Compra confirmada! Total: $${total.toFixed(2)}`);
    resetCart();
  };

  return (
    <div>
      <h2 className="mb-3">Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-info">
          Clickea un producto para agregar al carrito
        </div>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
                onClick={() => onReduceQuantity(item.id)}
                style={{ cursor: "pointer" }}
              >
                <span>
                  {item.name} - {item.quantity} unidad(es)
                </span>
                <span>${(item.quantity * item.unitPrice).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <button onClick={handlePurchase} className="btn btn-success w-100">
            Comprar
          </button>
        </>
      )}

      {purchaseConfirmed && (
        <div className="alert alert-success mt-3">{purchaseConfirmed}</div>
      )}
    </div>
  );
};

export default ShoppingCart;
