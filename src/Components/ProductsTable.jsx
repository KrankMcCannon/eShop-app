import React, { Component } from "react";
import Table from "./Common/Table";

class ProductsTable extends Component {
  columns = [
    { path: "name", label: "Name" },
    { path: "category.name", label: "Category" },
    { path: "rate", label: "Rate" },
    { path: "price", label: "Price" },
    {
      key: "increment",
      content: (car) => (
        <button
          onClick={() => this.props.onIncrement(car)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
      ),
    },
    {
      key: "decrement",
      content: (car) => (
        <button
          onClick={() => this.props.onDecrement(car)}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
      ),
    },
  ];

  render() {
    const { carSorted, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        data={carSorted}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}

export default ProductsTable;
