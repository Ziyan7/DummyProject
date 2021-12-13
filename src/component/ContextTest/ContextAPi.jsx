import React,  { Component,createContext } from "react";
import IntermediateChild from "./IntermediateChild";

const MyContext = createContext();
class ContextAPi extends Component {
  render() {
    return (
      <div>
          <MyContext.Provider value={"Ziyan"}>
            <h1>Context check</h1>
           <IntermediateChild/>
          </MyContext.Provider>
      </div>
    );
  }
}
export default ContextAPi;
export {MyContext};