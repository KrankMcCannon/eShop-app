import React, { Component } from "react";
import Table from "./Common/Table";

class ProductsTable extends Component {
  columns = [
    { path: "name", label: "Name" },
    { path: "category.name", label: "Category" },
    { path: "stock", label: "Stock" },
    { path: "price", label: "Price" },
    {
      key: "buy",
      content: (product) => (
        <div
          onClick={() => this.props.onClick(product)}
          className="btn-buy flex"
        >
          <a className="bttn" href="!#">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Aggiungi
            al carrello
          </a>
        </div>
      ),
    },
  ];

  render() {
    const { productSorted, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        data={productSorted}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}

export default ProductsTable;
