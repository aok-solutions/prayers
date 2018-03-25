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
						value={this.props.prayer.title}
						onChange={this.props.onChange}/>

					<TextArea
						name="request"
						label="Request"
						rows={5}
						columns={50}
						value={this.props.prayer.request}
						onChange={this.props.onChange}/>

					<TextInput
						name="email"
						label="Email"
						value={this.props.prayer.email}
						onChange={this.props.onChange}/>

					<input
						type="submit"
						disabled={this.props.saving}
						onClick={this.props.onSave}/>
				</form>
			</div>
		)
	}
}

export default PrayerForm;
