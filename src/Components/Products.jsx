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

  addCarChosen = (car) => {
    const newStateCars = [...this.state.carChosen];
    const check = newStateCars.find((c) => c.id === car.id);
    if (check) {
      const carChosen = newStateCars.map((c) =>
        c.id === car.id ? { ...c, value: c.value + 1 } : c
      );
      this.setState({ carChosen });
    } else {
      newStateCars.push({
        id: car.id,
        name: car.name,
        price: car.price,
        value: 1,
      });
      this.setState({ carChosen: newStateCars });
    }
  };

  handleIncrement = (car) => {
    const cars = [...this.state.carChosen];
    const findCar = cars.find((c) => c.id === car.id);
    if (findCar) {
      const carChosen = cars.map((c) =>
        c.id === car.id ? { ...c, value: c.value + 1 } : c
      );
      this.setState({ carChosen });
    } else {
      return null;
    }
  };

  handleDecrement = (car) => {
    const cars = [...this.state.carChosen];
    const findCar = cars.find((c) => c.id === car.id);
    if (findCar) {
      const carChosen = cars.map((c) =>
        c.id === car.id && c.value > 1 ? { ...c, value: c.value - 1 } : c
      );
      this.setState({ carChosen });
    } else {
      return null;
    }
  };

  handleDelete = (car) => {
    const cars = [...this.state.carChosen];
    const deleteCar = cars.filter((c) => c.id !== car.id);
    this.setState({ carChosen: deleteCar });
  };

  handleReset = () => {
    const reset = this.state.carChosen.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ carChosen: reset });
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
              onClick={this.addCarChosen}
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
          carBought={carChosen}
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
