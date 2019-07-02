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

function* updateSearchTerm(action: Action) {
	try {
		yield put({ type: actionTypes.UPDATE_SEARCH_TERM_SUCCEEDED, payload: action.payload });
	} catch (exception) {
		yield put({ type: actionTypes.UPDATE_SEARCH_TERM_FAILED, payload: action.payload });
	}
}

export const searchSaga = [
	takeLatest(actionTypes.UPDATE_SEARCH_TERM_REQUESTED, updateSearchTerm),
	takeLatest(actionTypes.USER_SEARCH_REQUESTED, searchUsers)
]
