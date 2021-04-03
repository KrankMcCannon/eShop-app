import React from "react";

const Table = (props) => {
  const { carSorted } = props;

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" className="clickable">
            Name
          </th>
          <th scope="col" className="clickable">
            Category
          </th>
          <th scope="col" className="clickable">
            Rate
          </th>
          <th scope="col" className="clickable">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {carSorted.map((car) => (
          <tr key={car.id}>
            <th scope="row">{car.id}</th>
            <td>{car.name}</td>
            <td>{car.category.name}</td>
            <td>{car.rate}</td>
            <td>{car.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
