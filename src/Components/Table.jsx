import React, { Component } from "react";
import TableHeader from "../Common/TableHeader";
import TableBody from "../Common/TableBody";

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
        <TableBody columns={this.columns} data={carSorted} />
      </table>
    );
  }
}

export default Table;
