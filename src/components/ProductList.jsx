import Product from "./Product";

const ProductListComponent = ({ products, onAddToCart, isDisabled }) => {
  return (
    <div>
      <h1 className="mb-3">Productos Disponibles</h1>
      <ul className="list-group">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={`$${product.unitPrice.toFixed(2)}`}
            onClick={() => onAddToCart(product)}
            disabled={isDisabled(product)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductListComponent;
