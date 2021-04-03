import React, { Component } from "react";
import Table from "./Common/Table";

class ProductsTable extends Component {
  columns = [
    { path: "name", label: "Name" },
    { path: "category.name", label: "Category" },
    { path: "rate", label: "Rate" },
    { path: "price", label: "Price" },
    // { key: "increment", content: "<Increment />" },
    // { key: "decrement", content: "<Decrement />" },
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
