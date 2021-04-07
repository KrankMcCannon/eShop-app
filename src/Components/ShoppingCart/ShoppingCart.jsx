import React from "react";
import Counters from "./counters.jsx";

const ShoppingCart = (props) => {
  return (
    <React.Fragment>
      <main className="container">
        <Counters
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
