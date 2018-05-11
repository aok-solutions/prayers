import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextInput from '../common/TextInput'
import chris from './chris-carmona.png'
import audrey from './audrey-carmona.png'

class ThankYouSignUp extends Component {

	signUp = () => {
		const { history, location } = this.props;

		if (typeof location.state === 'undefined') {
			history.push('/pray');
		} else {
			return (
				<div>
					<br/>
					<div className="uk-padding uk-section uk-section-muted">
						<h4>Want to track the progress of your prayer requests? <br/>Message the pastors directly?</h4>
						<h4>Enter a password below to create an AskForPrayer account</h4>

						<form>
							<div className="uk-margin">
								<h4><strong>{location.state.prayer.email}</strong></h4>
							</div>

							<TextInput
								name="password"
								label="Password"
								placeholder="Password"
								value={null}
								onChange={null}/>

							<button
								type="submit"
								className="uk-button uk-button-default"
								onClick={null}>
								Create Account
							</button>
						</form>
					</div>
				</div>
			)
		}
	}

	render() {
		const { location } = this.props;

		return (
			<div>
				<h2>Thank You for submitting a Prayer Request</h2>
				<h4>Here are some of the People Church pastors that will be praying for you</h4>

				<div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid uk-grid-match" data-uk-grid>
					<div>
						<div className="uk-card uk-card-default">
							<div className="uk-card-media-top">
								<img src={chris} alt="Chris Carmona" />
							</div>
							<div className="uk-card-body">
								<h3 className="uk-card-title">
									<a href="http://www.instagram.com/chriscarmona" target="_blank">Chris Carmona</a>
								</h3>
							</div>
						</div>
					</div>
					<div>
						<div className="uk-card uk-card-default">
							<div className="uk-card-media-top">
								<img src={audrey} alt="Audrey Carmona" />
							</div>
							<div className="uk-card-body">
								<h3 className="uk-card-title">
									<a href="http://www.instagram.com/audscarmona" target="_blank">Audrey Carmona</a>
								</h3>
							</div>
						</div>
					</div>
				</div>

				<br/>
				<div>
					<Link to="/pray">Click here</Link> to submit another prayer request
				</div>

				{this.signUp()}
			</div>
		)
	}
}

export default withRouter(ThankYouSignUp);
