import React, { Component } from 'react';
import UpadatedComponent from './withCounter';
class HigherOrder extends Component {
	render() {
		return (
			<div>
				<button onClick={this.props.clickHandler}>
				Click {this.props.count} times;
				</button>
			</div>
		)
	}
}

export default  UpadatedComponent(HigherOrder);