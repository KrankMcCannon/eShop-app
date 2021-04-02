import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/font-awesome/css/font-awesome.css";
import ListGroup from "../Common/Listgroup";
import Pagination from "../Common/Pagination";
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
    // console.log(category);
    this.setState({ selectedCategory: category });
  };

  render() {
    const {
      cars,
      categories,
      selectedCategory,
      pageSize,
      currentPage,
    } = this.state;

    const carSorted = paginate(cars, currentPage, pageSize);

    // const filtered = selectedCategory
    //   ? cars.filter((c) => c.id === selectedCategory.id)
    //   : cars;

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
          <h2>Hai scelto di vedere {cars.length} prodotti</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" className="clickable">
                  Name
                </th>
                <th scope="col" className="clickable">
                  Category
                </th>
                <th scope="col" className="clickable">
                  Rate
                </th>
                <th scope="col" className="clickable">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {carSorted.map((car) => (
                <tr key={car.id}>
                  <th scope="row">{car.id}</th>
                  <td>{car.name}</td>
                  <td>{car.category}</td>
                  <td>{car.rate}</td>
                  <td>{car.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={cars.length}
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
