import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter } = this.props;
    return (
      <React.Fragment>
        <td>
          <p>{counter.name}</p>
        </td>
        <td>{counter.price}</td>
        {/* <td>
          <span
            style={{ fontSize: 20, fontWeight: "bold", width: 60 }}
            className={this.getBadges()}
          >
            {this.formatCounter()}
          </span>
        </td> */}
        <td>
          <button
            style={{ fontSize: 20, fontWeight: "bold" }}
            className="btn btn-secondary btn-sm m-2"
            // onClick={() => onIncrement(counter)}
          >
            +
          </button>
        </td>
        <td>
          <button
            style={{ fontSize: 20, fontWeight: "bold" }}
            className="btn btn-secondary btn-sm m-2"
            // onClick={() => onDecrement(counter)}
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
        </td>
        <td>
          <button
            style={{ fontSize: 20, fontWeight: "bold" }}
            className="btn btn-danger btn-sm m-2"
            // onClick={() => onDelete(counter.id)}
          >
            X
          </button>
        </td>
      </React.Fragment>
    );
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadges() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
