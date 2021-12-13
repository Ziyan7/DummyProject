import React, { Component } from "react";
import { MyContext } from "./ContextAPi";

class ContextConsume extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>{(myName) => {return <h1>child1 {myName}</h1>}}</MyContext.Consumer>
      </div>
    );
  }
}
export default ContextConsume;
