import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as prayerActions from '../../actions/prayerActions';
import PrayerForm from './PrayerForm';

class NewPrayerPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prayer: {
				title: '',
				request: '',
				email: ''
			},
			saving: false
		};
		this.savePrayer = this.savePrayer.bind(this);
		this.updatePrayerState = this.updatePrayerState.bind(this);
	}

	updatePrayerState(event) {
		const field = event.target.name;
		const prayer = this.state.prayer;
		prayer[field] = event.target.value;
		return this.setState({prayer: prayer});
	}

	savePrayer(event) {
		event.preventDefault();
		this.props.actions.createPrayer(this.state.prayer);
	}

	render() {
		return (
			<div>
				<h2><strong>Need Prayer?</strong> You're in the right place</h2>
				<p><em>Submit a prayer request and have People Church pastors and leaders interceding on your behalf</em></p>
				<br/>
				<PrayerForm
					prayer={this.state.prayer}
					onSave={this.savePrayer}
					onChange={this.updatePrayerState}/>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(prayerActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPrayerPage);
