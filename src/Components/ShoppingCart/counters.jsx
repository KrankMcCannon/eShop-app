import React from "react";
// import Counter from "./counter";

const Counters = (props) => {
  const { selectedCar } = props;

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th className="reset" scope="col">
            <button
              className="btn btn-primary btn sm m-2"
              onClick={() => props.onReset()}
            >
              Reset
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {selectedCar
          ? selectedCar.map((car) => (
              <tr key={car.id}>
                <td>{car.name}</td>
                <td>{car.price}</td>
                <td>
                  <span
                    style={{ textAlign: "center", marginTop: "5%" }}
                    className="badge m-2 badge-primary"
                  >
                    {car.value}
                  </span>
                </td>
                <td>
                  <button
                    style={{ textAlign: "center", marginTop: "5%" }}
                    className="icon-btn add-btn"
                    onClick={() => props.onIncrement(car)}
                  >
                    <div className="add-icon"></div>
                    <div className="btn-txt">Aggiungi</div>
                  </button>
                </td>
                <td>
                  <button
                    style={{ textAlign: "center", marginTop: "5%" }}
                    className="icon-btn add-btn"
                    onClick={() => props.onDecrement(car)}
                  >
                    <div className="btn-txt">Remove</div>
                  </button>
                </td>
                <td>
                  <button
                    style={{ textAlign: "center", marginTop: "5%" }}
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => props.onDelete(car)}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
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
