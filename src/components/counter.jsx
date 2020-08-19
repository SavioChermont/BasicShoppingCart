import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  /* 
  Usando arrow function em vez de Constructor
    constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } */

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div id="container-buttons">
        <span className={this.getBadgeClasses()}>{this.formatValue()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
