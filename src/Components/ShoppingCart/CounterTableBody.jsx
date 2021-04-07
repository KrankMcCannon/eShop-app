import React from "react";

const CounterTableBody = (props) => {
  const { selectedCar, onIncrement, onDecrement, onDelete } = props;
  return (
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
                  onClick={() => onIncrement(car)}
                >
                  <div className="add-icon"></div>
                  <div className="btn-txt">Aggiungi</div>
                </button>
              </td>
              <td>
                <button
                  style={{ textAlign: "center", marginTop: "5%" }}
                  className="icon-btn add-btn"
                  onClick={() => onDecrement(car)}
                >
                  <div className="btn-txt">Remove</div>
                </button>
              </td>
              <td>
                <button
                  style={{ textAlign: "center", marginTop: "5%" }}
                  className="btn btn-danger btn-sm m-2"
                  onClick={() => onDelete(car)}
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
