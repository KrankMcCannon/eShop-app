import React, { Component } from "react";
import Table from "./Common/Table";

class ProductsTable extends Component {
  columns = [
    { path: "name", label: "Name" },
    { path: "category.name", label: "Category" },
    { path: "rate", label: "Rate" },
    { path: "price", label: "Price" },
    {
      key: "buy",
      content: (car) => (
        <div onClick={() => this.props.onClick(car)} className="btn-buy flex">
          <a className="bttn" href="!#">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Aggiungi
            al carrello
          </a>
        </div>
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
