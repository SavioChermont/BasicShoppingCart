import React, { Component } from "react";
import Counter from "./counter";
import "./counters.css";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, newCounter } = this.props;

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
          id="btn1"
        >
          Reset
        </button>

        <button
          onClick={newCounter}
          className=" btn btn-success btn-sm m-2"
          id="btn2"
        >
          Create
        </button>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
