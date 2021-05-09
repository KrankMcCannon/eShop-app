import { Component } from "react";
import auth from "../../Database/authService";

class Logout extends Component {
  componentDidMount() {
    auth.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
