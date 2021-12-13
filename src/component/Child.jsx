import React,  { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
          <h2>{this.props.message}</h2>
        <button onClick = {this.props.clickHandler}>Click</button>
      </div>
    );
  }
}
export default Child;
