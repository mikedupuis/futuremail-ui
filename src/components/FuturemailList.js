import React, { Component } from 'react';
import './FuturemailList.css';

class FuturemailList extends Component {
	render() {
	var type = "All";
	if (this.props.type.toUpperCase() === "NEW")
		type = "New";
	else if (this.props.type.toUpperCase() === "SENT")
		type = "Sent";
	else if (this.props.type.toUpperCase() === "CANCELLED")
		type = "Cancelled";

	console.log(type);
		return (
			<div className="FuturemailList">
				<h3>{type} Futuremails</h3>
				{this.props.children}
			</div>
		);
	}
}

export default FuturemailList;
