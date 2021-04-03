import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      counters,
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <table className="table table-hover table-sm">
        <thead>
          <tr className="row">
            <th className="reset">
              <button onClick={onReset} className="btn btn-primary btn sm m-2">
                Reset
              </button>
            </th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {counters.map((count) => (
            <tr className="row" key={count.id}>
              <Counter
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counter={count}
              />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Counters;
