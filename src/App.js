import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Common/Navbar";
import RegisterForm from "./Components/Common/RegisterForm";
import LoginForm from "./Components/Common/LoginForm";
import Logout from "./Components/Common/Logout";
import ProtectedRoute from "./Components/Common/ProtectedRoute";
import NewProduct from "./Components/Common/NewProduct";
import Products from "./Components/Products";
import NotFound from "./Components/Common/Notfound";
import auth from "./Database/authService";
import "react-toastify/dist/ReactToastify.css";
import "./css/App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <Navbar user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/products/:id" component={NewProduct} />
            <Route
              path="/products"
              render={(props) => <Products {...props} user={user} />}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/products" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
