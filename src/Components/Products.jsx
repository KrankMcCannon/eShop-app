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
    carChosen: [],
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

  handleBuy = (car) => {
    const carChosen = [
      ...this.state.carChosen,
      {
        id: car.id,
        name: car.name,
        price: car.price,
      },
    ];
    this.setState({ carChosen });
  };

  handleIncrement = (car) => {
    const cars = [...this.state.cars];
    const index = cars.indexOf(car);
    cars[index] = { ...car };
    cars[index].value++;
    this.setState({ car: cars });
  };

  handleDecrement = (car) => {
    const cars = [...this.state.cars];
    const index = cars.indexOf(car);
    cars[index] = { ...car };
    if (cars[index].value > 0) {
      cars[index].value--;
    }
    this.setState({ car: cars });
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
      carChosen,
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
              onBuy={this.handleBuy}
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
        <ShoppingCart carBought={carChosen} onClick={this.handleBuy} />
      </React.Fragment>
    );
  }
}

export default Products;
