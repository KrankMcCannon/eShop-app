import React from "react";
import CounterTableHead from "./CounterTableHead";
import CounterTableBody from "./CounterTableBody";

const CounterTable = (props) => {
  const {
    selectedProduct,
    onReset,
    onIncrement,
    onDecrement,
    onDelete,
  } = props;

  return (
    <table className="table table-hover">
      <CounterTableHead selectedProduct={selectedProduct} onReset={onReset} />
      <CounterTableBody
        selectedProduct={selectedProduct}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    </table>
  );
};

export default CounterTable;
