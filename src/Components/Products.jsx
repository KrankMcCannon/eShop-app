import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/font-awesome/css/font-awesome.css";
import ListGroup from "../Common/Listgroup";
import Pagination from "../Common/Pagination";
import Table from "./Table";
import { getAllProducts, getAllCategories } from "../Database/db.js";
import { paginate } from "../utils/paginate";

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

  render() {
    const {
      cars,
      categories,
      selectedCategory,
      pageSize,
      currentPage,
    } = this.state;

    const filtered =
      selectedCategory && selectedCategory.id
        ? cars.filter((c) => c.category.id === selectedCategory.id)
        : cars;

    const carSorted = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            itemsCategory={categories}
            selectedItem={selectedCategory}
            onItemSelect={this.handleCategorySelect}
          />
        </div>
        <div className="col">
          <h2>Hai scelto di vedere {filtered.length} prodotti</h2>
          <Table carSorted={carSorted} />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Products;
