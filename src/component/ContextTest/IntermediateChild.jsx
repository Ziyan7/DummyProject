import React,  { Component } from "react";
import ContextConsume from "./ContextConsume";

class IntermediateChild extends Component {
  render() {
    return (
      <div>
        <ContextConsume/>
      </div>
    );
  }
}
export default IntermediateChild;