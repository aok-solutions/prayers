import React from 'react';
import { Link } from 'react-router-dom';
import chris from './chris-carmona.png'
import audrey from './audrey-carmona.png'

class ThankYouPage extends React.Component {
	render() {
		return (
			<div>
				<h2>Thank You for submitting a Prayer Request</h2>
				<h4>Here are some of the People Church pastors that will be praying for you</h4>

				<div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid uk-grid-match" data-uk-grid>
					<div>
						<div className="uk-card uk-card-default uk-background-light-grey uk-text-dark-grey">
							<img src={chris} alt="Chris Carmona" />
							<Link to="http://www.instagram.com/chriscarmona">Chris Carmona</Link>
						</div>
					</div>
					<div>
						<div className="uk-card uk-card-default uk-background-light-grey uk-text-dark-grey">
							<img src={audrey} alt="Audrey Carmona" />
							<Link to="http://www.instagram.com/audscarmona">Audrey Carmona</Link>
						</div>
					</div>
				</div>

				<br/>
				<div>
					<Link to="/">Click here</Link> to submit another prayer request
				</div>
			</div>
		)
	}
}

export default ThankYouPage;
