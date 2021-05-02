import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import RegisterForm from "./Components/Common/RegisterForm";
import LoginForm from "./Components/Common/LoginForm";
import Logout from "./Components/Common/Logout";
import ProtectedRoute from "./Components/Common/ProtectedRoute";
import NewProduct from "./Components/Common/NewProduct";
import Products from "./Components/Products";
import Customers from "./Components/Common/Customers";
import NotFound from "./Components/Common/NotFound";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main>
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/products/:id" component={NewProduct} />
            <Route
              path="/products"
              render={(props) => <Products {...props} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
