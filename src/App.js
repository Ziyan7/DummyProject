import React, { Component,useEffect, useState } from "react";
import Child from "./component/Child";
import RefChild from "./component/RefChild";
//import './App.css';
//import EventBind from './component/User';
// import HigherOrder from './component/HigherOrder';
// import HourCounter from './component/HourCounter';
//import ContextAPi from "./component/ContextTest/ContextAPi";
//import AddTodo from "./containers/AddTodo";

function App({ store }) {
  const [counter,setCounter] = useState(0)
  return (
    <div>
      <h1>Testing Enzyme</h1>
      <div id = "counter-value">{counter}</div>
      <button id = "increment-btn" onClick = {() => { setCounter(counter +1)}}>Increment</button>
      <button id = "decrement-btn" onClick = {() => { setCounter(counter -1)}}>Deccrement</button>
      
    </div>

    //   <div className = "App">

    //   {/* <HigherOrder/>
    //   <HourCounter/> */}
    //   {/* <ContextAPi/> */}

    //   <AddTodo />
    // </div>
  );
}

// class App extends Component {
//   constructor(props) {
// 		super(props)

// 		this.state = {
// 			message: 'Welcome'
// 		}
// 	}

// 	clickHandler() {
// 		this.setState({
// 			message:'Byee'
// 		})
// 	}

//   render()
//   {
//     return(
//       <div>
//         <Child message={this.state.message}  clickHandler = {() => this.clickHandler()}/>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor(props) {
// 		super(props)
//     this.inputRef = React.createRef();
// 	}

// 	clickHandler() {
// 		this.inputRef.current.focus();
// 	}

//   render()
//   {
//     return(
//       <div>
//         <RefChild ref = {this.inputRef} clickHandler = {() => this.clickHandler()}/>
//       </div>
//     )
//   }
// }

export default App;
