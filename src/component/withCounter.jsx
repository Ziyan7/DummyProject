import React, { Component } from "react";

const UpadatedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    clickHandler() {
      this.setState({
        count: this.state.count + 1,
      });
    }
    render() {
      return <OriginalComponent  count = {this.state.count} clickHandler = {() => this.clickHandler()}/>;
    }
  }
  return NewComponent;
};

export default UpadatedComponent;
