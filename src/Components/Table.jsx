import React, { Component } from "react";
import TableHeader from "../Common/TableHeader";

class Table extends Component {
  columns = [
    { path: "name", label: "Name" },
    { path: "category.name", label: "Category" },
    { path: "rate", label: "Rate" },
    { path: "price", label: "Price" },
  ];

  render() {
    const { carSorted, sortColumn, onSort } = this.props;

    return (
      <table className="table table-hover">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
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
  }
}

export default Table;
