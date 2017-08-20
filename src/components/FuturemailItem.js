import React from 'react';
import './FuturemailItem.css';

const FuturemailItem = (props) => {

	return (
		<div className="FuturemailItem">
			<div className="email-subject">{props.subject}: {props.time}</div>
			<div className="email-info">
				<p>{props.content}</p>
			</div>
		</div>
	);
};

export default FuturemailItem;
