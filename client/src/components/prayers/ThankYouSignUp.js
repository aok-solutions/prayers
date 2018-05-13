import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify'
import TextInput from '../common/TextInput'
import chris from './chris-carmona.png'
import audrey from './audrey-carmona.png'

class ThankYouSignUp extends Component {
	state = {
		password: '',
		authCode: ''
	}

	handleChange = (key, value) => {
		this.setState({ [key]: value })
	}

	signUp = (email) => {
		const { password } = this.state;

		Auth.signUp({
			username: email.replace(/[@.]/g, '|'),
			password,
			attributes: { email }
		})
			.then(() => console.log('successful sign up!'))
			.catch(error => console.log('error signing up: ', error))
	}

	confirmSignUp = (email) => {
		const { authCode } = this.state;

		Auth.confirmSignUp(email.replace(/[@.]/g, '|'), authCode)
			.then(console.log('successfully confirmed sign up!'))
			.catch(error => console.log('error confirming sign up: ', error))
	}

	renderSignUpForm = () => {
		const { history, location } = this.props;

		if (typeof location.state === 'undefined') {
			history.push('/pray');
		} else {
			const emailAddress = location.state.prayer.email;

			return (
				<div>
					<br/>
					<div className="uk-padding uk-section uk-section-muted">
						<h4>Want to track the progress of your prayer requests? <br/>Message the pastors directly?</h4>
						<h4>Enter a password below to create an AskForPrayer account</h4>

						<div>
							<div className="uk-margin">
								<h4><strong>{emailAddress}</strong></h4>
							</div>

							<TextInput
								name="password"
								label="Password"
								placeholder="Password"
								value={this.state.password}
								onChange={event => this.handleChange('password', event.target.value)}/>

							<button
								className="uk-button uk-button-default"
								onClick={() => {this.signUp(emailAddress)}}>
								Create Account
							</button>

							<hr/>

							<TextInput
								name="authCode"
								label="Authentication Code"
								placeholder="Authentication Code"
								value={this.state.authCode}
								onChange={event => this.handleChange('authCode', event.target.value)}/>

							<button
								className="uk-button uk-button-default"
								onClick={() => {this.confirmSignUp(emailAddress)}}>
								Confirm Sign Up
							</button>
						</div>
					</div>
				</div>
			)
		}
	}

	render() {
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

				{this.renderSignUpForm()}
			</div>
		)
	}
}

export default withRouter(ThankYouSignUp);
