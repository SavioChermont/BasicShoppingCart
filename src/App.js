import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleNewCounter = () => {
    let counters = [...this.state.counters];
    console.log("antes do push:", counters);
    let index = counters.length + 1;
    let newCounter = { id: index, value: 0 };
    counters.push(newCounter);
    this.setState({ counters });
    console.log("dps do push:", counters);
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="Container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            newCounter={this.handleNewCounter}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
