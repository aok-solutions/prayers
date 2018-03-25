import * as types from '../actions/actionTypes';
import initialState from './initialState';
import history from '../history'

export default function prayerReducer(state = initialState.prayers, action) {
	switch (action.type) {
		case types.LOAD_PRAYERS_SUCCESS:
			return action.prayers;
		case types.CREATE_PRAYER_SUCCESS:
			history.push('/thank-you');
			return [
				...state.filter(prayer => prayer.id !== action.prayer.id),
				Object.assign({}, action.prayer)
			];
		default:
			return state;
	}
}
