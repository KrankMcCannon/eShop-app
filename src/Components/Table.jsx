import React from "react";

const Table = (props) => {
  const { carSorted, onSort } = props;

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th onClick={() => onSort("name")} scope="col" className="clickable">
            Name
          </th>
          <th
            onClick={() => onSort("category.name")}
            scope="col"
            className="clickable"
          >
            Category
          </th>
          <th onClick={() => onSort("rate")} scope="col" className="clickable">
            Rate
          </th>
          <th onClick={() => onSort("price")} scope="col" className="clickable">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {carSorted.map((car) => (
          <tr key={car.id}>
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
