import React from "react";

const CounterTableHead = (props) => {
  const { selectedProduct, onReset } = props;
  return (
    <thead>
      <tr>
        <th className="reset" scope="col">
          <button
            className="btn btn-primary btn sm m-2"
            onClick={() => onReset()}
          >
            Reset
          </button>
        </th>
        <th>
          <span
            style={{ textAlign: "center", marginTop: "5%" }}
            className="badge m-2 badge-primary"
          >
            {selectedProduct.length}
          </span>
        </th>
      </tr>
    </thead>
  );
};

export default CounterTableHead;
