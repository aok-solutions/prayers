import * as types from './actionTypes'
import prayersApi from '../api/prayersApi'

export default function loadPrayers() {
    return function (dispatch) {
        return prayersApi.getAllPrayers().then(prayers => {
            dispatch(loadPrayersSuccess(prayers))
        }).catch(error => {
            throw(error)
        })
    }
}

export function loadPrayersSuccess(prayers) {
    return { type: types.LOAD_PRAYERS_SUCCESS, prayers }
}
