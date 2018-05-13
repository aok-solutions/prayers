import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import moment from 'moment';
import MutationCreatePrayer from '../../graphQL/MutationCreatePrayer';
import TextInput from '../common/TextInput'
import TextArea from '../common/TextArea';
import CheckBox from '../common/CheckBox';

class NewPrayer extends Component {
	static defaultProps = {
		createPrayer: () => null
	};

	state = {
		prayer: {
			request: '',
			firstName: '',
			email: '',
			private: false,
			createdAt: ''
		}
	};

	handleChange = (field, { target: { value, type, checked } }) => {
		const { prayer } = this.state;
		prayer[field] = type === 'checkbox' ? checked : value;

		this.setState({ prayer })
	}

	handleSave = async (event) => {
		event.stopPropagation();
		event.preventDefault();

		const { createPrayer, history } = this.props;
		const { prayer } = this.state;

		await createPrayer({
			...prayer,
			createdAt: moment.utc().format()
		});

		history.push({
			pathname: '/thanks',
			state: { prayer }
		});
	}

	render() {
		const { prayer } = this.state;

		return (
			<div>
				<div>
					<h2><strong>People Church</strong> <em style={{color: "#aaa"}}>Prayer Community</em></h2>
					<p><em>Submit a prayer request and have People Church pastors and leaders interceding on your behalf</em></p>
					<br/>
				</div>

				<div>
					<form>
						<TextInput
							name="first-name"
							label="First Name"
							placeholder="First Name"
							value={prayer.firstName}
							onChange={this.handleChange.bind(this, 'firstName')}/>

						<TextArea
							name="request"
							label="Request"
							placeholder="What would you like us to pray for?"
							rows={5}
							columns={50}
							value={prayer.request}
							onChange={this.handleChange.bind(this, 'request')}/>

						<TextInput
							name="email"
							label="Email"
							placeholder="Email Address"
							value={prayer.email}
							onChange={this.handleChange.bind(this, 'email')}/>

						<CheckBox
							name="private"
							label="My prayer request should only be visible to Community leaders"
							value={prayer.private}
							onChange={this.handleChange.bind(this, 'private')}/>


						<button
							type="submit"
							className="uk-button uk-button-default"
							onClick={this.handleSave}>
							Pray For Me
						</button>
					</form>
				</div>
			</div>
		)
	}
}

export default graphql(
	MutationCreatePrayer,
	{
		props: (props) => ({
			createPrayer: (prayer) => {
				return props.mutate({
					variables: prayer
				})
			}
		})
	}
)(NewPrayer)