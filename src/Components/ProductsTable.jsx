import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./Common/Table";

class ProductsTable extends Component {
  columns = [
    {
      path: "name",
      label: "Name",
      content: (product) => (
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      ),
    },
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
          <div className="bttn">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Aggiungi
            al carrello
          </div>
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
