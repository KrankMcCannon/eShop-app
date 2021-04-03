import React, { Component } from "react";
import { ReactComponent as Logo } from "../svg/logo-12.svg";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/font-awesome/css/font-awesome.css";
import ListGroup from "./Common/Listgroup";
import Pagination from "./Common/Pagination";
import ProductsTable from "./ProductsTable";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { getAllProducts, getAllCategories } from "../Database/db.js";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Products extends Component {
  state = {
    cars: [],
    categories: [],
    currentPage: 1,
    pageSize: 6,
    sortColumn: { path: "name", order: "asc" },
  };

  componentDidMount() {
    const categories = [
      { id: "", name: "All Categories" },
      ...getAllCategories(),
    ];

    this.setState({ cars: getAllProducts(), categories });
  }

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
      cars,
      selectedCategory,
      pageSize,
      currentPage,
      sortColumn,
    } = this.state;

    const filtered =
      selectedCategory && selectedCategory.id
        ? cars.filter((c) => c.category.id === selectedCategory.id)
        : cars;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const carSorted = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: carSorted };
  };

  render() {
    const {
      categories,
      selectedCategory,
      pageSize,
      currentPage,
      sortColumn,
    } = this.state;

    const { totalCount, data: carSorted } = this.getPageData();

    return (
      <React.Fragment>
        <div className="logo">
          <Logo />
          <h2>eShop - eCommerce - eFake</h2>
          {/* {totalCount} */}
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
              carSorted={carSorted}
              sortColumn={sortColumn}
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
        <ShoppingCart />
      </React.Fragment>
    );
  }
}

export default Products;
