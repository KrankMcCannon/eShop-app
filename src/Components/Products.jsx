import React, { Component } from "react";
import { ReactComponent as Logo } from "../svg/logo-12.svg";
import { getAllProducts, getAllCategories } from "../Database/db.js";
import { paginate } from "../utils/paginate";
import ListGroup from "./Common/Listgroup";
import Pagination from "./Common/Pagination";
import ProductsTable from "./ProductsTable";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/font-awesome/css/font-awesome.css";
import _ from "lodash";

class Products extends Component {
  state = {
    products: [],
    categories: [],
    productChosen: [],
    currentPage: 1,
    pageSize: 6,
    sortColumn: { path: "name", order: "asc" },
  };

  componentDidMount() {
    const categories = [
      { id: "", name: "All Categories" },
      ...getAllCategories(),
    ];

    this.setState({ products: getAllProducts(), categories });
  }

  addProductChosen = (product) => {
    const newStateProducts = [...this.state.productChosen];
    const check = newStateProducts.find((p) => p.id === product.id);
    if (check) {
      const productChosen = newStateProducts.map((p) =>
        p.id === product.id ? { ...p, value: p.value + 1 } : p
      );
      this.setState({ productChosen });
    } else {
      newStateProducts.push({
        id: product.id,
        name: product.name,
        price: product.price,
        value: 1,
      });
      this.setState({ productChosen: newStateProducts });
    }
  };

  handleIncrement = (product) => {
    const products = [...this.state.productChosen];
    const findProduct = products.find((p) => p.id === product.id);
    if (findProduct) {
      const productChosen = products.map((p) =>
        p.id === product.id ? { ...p, value: p.value + 1 } : p
      );
      this.setState({ productChosen });
    } else {
      return null;
    }
  };

  handleDecrement = (product) => {
    const products = [...this.state.productChosen];
    const findProduct = products.find((p) => p.id === product.id);
    if (findProduct && findProduct.value > 1) {
      const productChosen = products.map((p) =>
        p.id === product.id ? { ...p, value: p.value - 1 } : { ...p }
      );
      this.setState({ productChosen });
    } else if (findProduct && findProduct.value === 1) {
      const productChosen = products.filter((p) => p.id !== product.id);
      this.setState({ productChosen });
    }
  };

  handleDelete = (product) => {
    const products = [...this.state.productChosen];
    const deleteCar = products.filter((p) => p.id !== product.id);
    this.setState({ productChosen: deleteCar });
  };

  handleReset = () => {
    let reset = [...this.state.productChosen];
    reset = [];
    this.setState({ productChosen: reset });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      products,
      selectedCategory,
      pageSize,
      currentPage,
      sortColumn,
    } = this.state;

    const filtered =
      selectedCategory && selectedCategory.id
        ? products.filter((p) => p.category.id === selectedCategory.id)
        : products;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const productSorted = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: productSorted };
  };

  render() {
    const {
      productChosen,
      categories,
      selectedCategory,
      pageSize,
      currentPage,
      sortColumn,
    } = this.state;

    const { totalCount, data: productSorted } = this.getPageData();

    return (
      <React.Fragment>
        <div className="logo">
          <Logo />
          <h2>eShop - eCommerce - eFake</h2>
        </div>
        <div className="row">
          <div className="col-3">
            <ListGroup
              itemsCategory={categories}
              selectedItem={selectedCategory}
              onItemSelect={this.handleCategorySelect}
            />
          </div>
          <div className="col">
            <ProductsTable
              productSorted={productSorted}
              sortColumn={sortColumn}
              onClick={this.addProductChosen}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
        <ShoppingCart
          productBought={productChosen}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default Products;
