import React from "react";
import CounterTable from "./CounterTable.jsx";

const ShoppingCart = (props) => {
  return (
    <React.Fragment>
      <main className="container">
        <CounterTable
          selectedCar={props.carBought}
          onReset={props.onReset}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          onDelete={props.onDelete}
        />
      </main>
    </React.Fragment>
  );
};

export default ShoppingCart;
