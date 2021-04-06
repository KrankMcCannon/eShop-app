import React from "react";
// import Counter from "./counter";

const Counters = (props) => {
  const { selectedCar } = props;

  return (
    <table className="table table-hover table-sm">
      <thead>
        <tr className="row">
          <th className="reset">
            <button className="btn btn-primary btn sm m-2">Reset</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {selectedCar
          ? selectedCar.map((car) => (
              <tr className="row" key={selectedCar.indexOf(car)}>
                <td>{car.name}</td>
                <td>{car.price}</td>
                <td>
                  <span
                    style={{ fontSize: 20, fontWeight: "bold", width: 60 }}
                    className="badge m-2 badge-primary"
                  >
                    {car.value}
                  </span>
                </td>
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
            ))
          : null}
      </tbody>
    </table>
  );
};

export default Counters;
