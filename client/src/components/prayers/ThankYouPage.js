import React from 'react';
import { Link } from 'react-router-dom';

class ThankYouPage extends React.Component {
	render() {
		return (
			<div>
				<h2>Thank You for submitting a Prayer Request</h2>
				<h4>People church pastors and leaders will be praying for you</h4>

				<div>
					<Link to="/">Click here</Link> to submit another prayer request
				</div>
			</div>
		)
	}
}

export default ThankYouPage;
