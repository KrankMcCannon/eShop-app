import React from "react";
// import Navbar from "./navbar.jsx";
import Counters from "./counters.jsx";

const ShoppingCart = ({ carBought, onClick }) => {
  // const handleIncrement = (car) => {
  //   const cars = [...car];
  //   const index = cars.indexOf(car);
  //   cars[index] = { ...car };
  //   cars[index].value++;
  //   this.setState({ car: cars });
  // };

  // const handleDecrement = (car) => {
  //   const cars = [...car];
  //   const index = cars.indexOf(car);
  //   cars[index] = { ...car };
  //   if (cars[index].value > 0) {
  //     cars[index].value--;
  //   }
  //   this.setState({ car: cars });
  // };

  // const handleDelete = (carId) => {
  //   const cars = cars.filter((c) => c.id !== carId);
  //   this.setState({ car: cars });
  // };

  // const handleReset = () => {
  //   const reset = cars.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ car: reset });
  // };
  return (
    <React.Fragment>
      {/* <Navbar totalCounter={carBought.filter((c) => c.id > 0).length} /> */}
      <main className="container">
        <Counters
          selectedCar={carBought}
          onClick={onClick}
          // onReset={handleReset}
          // onIncrement={handleIncrement}
          // onDecrement={handleDecrement}
          // onDelete={handleDelete}
        />
      </main>
    </React.Fragment>
  );
};

export default ShoppingCart;
