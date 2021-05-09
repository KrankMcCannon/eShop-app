import React from "react";
import Joi from "joi-browser";
import Form from "./Form";
import { getProduct, saveProduct } from "../../Database/ProductService";
import { getCategories } from "../../Database/CategoryService";

class NewProduct extends Form {
  state = {
    data: {
      name: "",
      categoryId: "",
      stock: "",
      price: "",
    },
    categories: [],
    errors: {},
  };

  schema = {
    id: Joi.string(),
    name: Joi.string().required().label("Name"),
    categoryId: Joi.string().required().label("Category"),
    stock: Joi.number().min(0).max(100).required().label("Stock"),
    price: Joi.number().min(0).max(100).required().label("Price"),
  };

  async populateCategories() {
    const { data: categories } = await getCategories();
    this.setState({ categories });
  }

  async populateProducts() {
    try {
      const productId = this.props.match.params.id;
      if (productId === "new") return;
      const { data: product } = await getProduct(productId);
      this.setState({ data: this.maptoViewModel(product) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateCategories();
    await this.populateProducts();
  }

  maptoViewModel(product) {
    return {
      id: product.id,
      name: product.name,
      categoryId: product.category.id,
      stock: product.stock,
      price: product.price,
    };
  }

  doSubmit = async () => {
    console.log(this.state.data);
    await saveProduct(this.state.data);

    this.props.history.push("/products");
  };

  render() {
    return (
      <div>
        <h1>New Product</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderDropdown("categoryId", "Category", this.state.categories)}
          {this.renderInput("stock", "Stock", "number")}
          {this.renderInput("price", "Price")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewProduct;
