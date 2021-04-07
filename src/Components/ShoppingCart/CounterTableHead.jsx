import React from "react";

const CounterTableHead = (props) => {
  const { onReset } = props;
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
      </tr>
    </thead>
  );
};

export default CounterTableHead;
