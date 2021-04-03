import React, { Component } from "react";
import Navbar from "./navbar.jsx";
import Counters from "./counters.jsx";

class App extends Component {
  state = {
    counter: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counter: counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
    }
    this.setState({ counter: counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counter.filter((c) => c.id !== counterId);
    this.setState({ counter: counters });
  };

  handleReset = () => {
    const reset = this.state.counter.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter: reset });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounter={this.state.counter.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counter}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
