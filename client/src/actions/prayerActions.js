import * as types from './actionTypes'
import prayersApi from '../api/prayersApi'

export function loadPrayersSuccess(prayers) {
	return {type: types.LOAD_PRAYERS_SUCCESS, prayers}
}

export function createPrayerSuccess(prayer) {
	return {type: types.CREATE_PRAYER_SUCCESS, prayer}
}

export function loadPrayers() {
	return function (dispatch) {
		return prayersApi.getAllPrayers().then(prayers => {
			dispatch(loadPrayersSuccess(prayers))
		}).catch(error => {
			throw(error)
		})
	}
}

export function createPrayer(prayer) {
	return function (dispatch) {
		return prayersApi.createPrayer(prayer).then(prayerResponse => {
			dispatch(createPrayerSuccess(prayerResponse))
			return prayerResponse
		}).catch(error => {
			throw(error)
		})
	}
}
