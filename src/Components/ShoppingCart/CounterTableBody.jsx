import React from "react";

const CounterTableBody = (props) => {
  const { selectedProduct, onIncrement, onDecrement, onDelete } = props;
  return (
    <tbody>
      {selectedProduct
        ? selectedProduct.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <span
                  style={{ textAlign: "center", marginTop: "5%" }}
                  className="badge m-2 badge-primary"
                >
                  {product.value}
                </span>
              </td>
              <td>
                <button
                  style={{ textAlign: "center", marginTop: "5%" }}
                  className="icon-btn add-btn"
                  onClick={() => onIncrement(product)}
                >
                  <div className="add-icon"></div>
                  <div className="btn-txt">Aggiungi</div>
                </button>
              </td>
              <td>
                <button
                  style={{ textAlign: "center", marginTop: "5%" }}
                  className="icon-btn add-btn"
                  onClick={() => onDecrement(product)}
                >
                  <div className="btn-txt">Remove</div>
                </button>
              </td>
              <td>
                <button
                  style={{ textAlign: "center", marginTop: "5%" }}
                  className="btn btn-danger btn-sm m-2"
                  onClick={() => onDelete(product)}
                >
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          ))
        : null}
    </tbody>
  );
};

export default CounterTableBody;
