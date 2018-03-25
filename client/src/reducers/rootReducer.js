import { combineReducers } from 'redux';
import prayers from './prayerReducer';

const rootReducer = combineReducers({
	prayers
});

export default rootReducer;
