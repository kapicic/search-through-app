import { call, put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes';
import config from '../../config';
import Action from '../../models/action/Action';

function* searchUsers(action: Action) {
	try {
		const searchUrl = new URL(config.api.users.search);
		searchUrl.searchParams.append('title', action.payload);
		const response = yield call(fetch, searchUrl.toString());
		const filteredUsers = yield response.json();

		yield put({ type: actionTypes.USER_SEARCH_SUCCEEDED, payload: filteredUsers });
	} catch (error) {
		yield put({ type: actionTypes.USER_SEARCH_FAILED, payload: action.payload });
	}
}

const searchSaga = [
	takeLatest(actionTypes.USER_SEARCH_REQUESTED, searchUsers)
]

export default searchSaga;
