import React from 'react';
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
							<a href="http://www.instagram.com/chriscarmona" target="_blank">Chris Carmona</a>
						</div>
					</div>
					<div>
						<div className="uk-card uk-card-default uk-background-light-grey uk-text-dark-grey">
							<img src={audrey} alt="Audrey Carmona" />
							<a href="http://www.instagram.com/audscarmona" target="_blank">Audrey Carmona</a>
						</div>
					</div>
				</div>

				<br/>
				<div>
					<a href="/">Click here</a> to submit another prayer request
				</div>
			</div>
		)
	}
}

export default ThankYouPage;
