import React from "react";
// import Counter from "./counter";

const Counters = (props) => {
  //fin qui arrivano le info che mi servono
  //ora dobbiamo creare un array vuoto dove inserirle
  //in modo tale che possiamo mapparli e renderizzarli
  //p.s. potrebbe risolvere anche lo stato iniziale di undefined di carBought

  // const {
  //   // counters,
  //   // onReset,
  //   // onDelete,
  //   // onIncrement,
  //   // onDecrement,
  // } = this.props;
  const { selectedCar } = props;
  return (
    <table className="table table-hover table-sm">
      <thead>
        <tr className="row">
          <th className="reset">
            <button className="btn btn-primary btn sm m-2">Reset</button>
          </th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {selectedCar.map((car) => (
          <tr className="row" key={car.id}>
            <td>{car.name}</td>
            <td>{car.price}</td>
            <td>
              <button
                style={{ fontSize: 20, fontWeight: "bold" }}
                className="btn btn-secondary btn-sm m-2"
                // onClick={() => onIncrement(counter)}
              >
                +
              </button>
            </td>
            <td>
              <button
                style={{ fontSize: 20, fontWeight: "bold" }}
                className="btn btn-secondary btn-sm m-2"
                // onClick={() => onDecrement(counter)}
                // disabled={this.props.counter.value === 0 ? "disabled" : ""}
              >
                -
              </button>
            </td>
            <td>
              <button
                style={{ fontSize: 20, fontWeight: "bold" }}
                className="btn btn-danger btn-sm m-2"
                // onClick={() => onDelete(counter.id)}
              >
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Counters;
