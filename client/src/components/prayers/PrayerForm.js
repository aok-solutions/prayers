import React from 'react';
import TextInput from '../common/TextInput';
import TextArea from '../common/TextArea';

class PrayerForm extends React.Component {
	render() {
		return (
			<div>
				<form>
					<TextInput
						name="title"
						label="Subject"
						placeholder="Subject"
						value={this.props.prayer.title}
						onChange={this.props.onChange}/>

					<TextArea
						name="request"
						label="Request"
						placeholder="What would you like us to pray for?"
						rows={5}
						columns={50}
						value={this.props.prayer.request}
						onChange={this.props.onChange}/>

					<TextInput
						name="email"
						label="Email"
						placeholder="Email"
						value={this.props.prayer.email}
						onChange={this.props.onChange}/>

					<button
						type="submit"
						disabled={this.props.saving}
						class="uk-button uk-button-default"
						onClick={this.props.onSave}>Pray For Me</button>
				</form>
			</div>
		)
	}
}

export default PrayerForm;
