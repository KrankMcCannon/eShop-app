import React, { Component } from "react";

class Table extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { carSorted } = this.props;

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th
              onClick={() => this.raiseSort("name")}
              scope="col"
              className="clickable"
            >
              Name
            </th>
            <th
              onClick={() => this.raiseSort("category.name")}
              scope="col"
              className="clickable"
            >
              Category
            </th>
            <th
              onClick={() => this.raiseSort("rate")}
              scope="col"
              className="clickable"
            >
              Rate
            </th>
            <th
              onClick={() => this.raiseSort("price")}
              scope="col"
              className="clickable"
            >
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
  }
}

export default Table;
