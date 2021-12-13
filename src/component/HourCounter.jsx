import React, { Component } from 'react';
import UpadatedComponent from './withCounter';

class HourCounter extends Component {
	
	render() {
		return (
			<div>
				
                <h2 onMouseOver={this.props.clickHandler}> Hovered {this.props.count} times;</h2>
			</div>
		)
	}
}

export default UpadatedComponent(HourCounter);