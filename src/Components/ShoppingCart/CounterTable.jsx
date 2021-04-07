import React from "react";
import CounterTableHead from "./CounterTableHead";
import CounterTableBody from "./CounterTableBody";

const CounterTable = (props) => {
  const { selectedCar, onReset, onIncrement, onDecrement, onDelete } = props;

  return (
    <table className="table table-hover">
      <CounterTableHead selectedCar={selectedCar} onReset={onReset} />
      <CounterTableBody
        selectedCar={selectedCar}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    </table>
  );
};

export default CounterTable;
