const Product = ({ name, price, onClick, disabled }) => {
  return (
    <div
      className={`list-group-item ${disabled ? "disabled" : ""}`}
      onClick={!disabled ? onClick : null}
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
    >
      <h6 className="fw-bold">{name + ":" + " "}</h6>
      <span>({price + " c/u"})</span>
      {disabled && (
        <span className="text-warning"> - Límite de compra alcanzado</span>
      )}
    </div>
  );
};

export default Product;
