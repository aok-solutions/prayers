import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/prayerActions'
import PrayerList from './PrayerList'

class PrayerPage extends React.Component {
    render() {
        return(
            <div>
                <h1>Prayers</h1>
                <div>
                    <PrayerList prayers={this.props.prayers} />
                </div>
            </div>
        )
    }
}

PrayerPage.propTypes = {
    prayers: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        prayers: state.prayers
    }
}

export default connect(mapStateToProps)(PrayerPage)
