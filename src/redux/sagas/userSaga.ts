import { call, put, takeLatest, all } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes';
import config from '../../config';

function* fetchUser() {
	try {
		const response = yield call(fetch, config.api.users.fetch);
		const users = yield response.json();
		yield put({ type: actionTypes.USER_FETCH_SUCCEEDED, payload: users });
	} catch (e) {
		yield put({ type: actionTypes.USER_FETCH_FAILED, message: e.message });
	}
}


function* searchUser(action: any) {
	try {
		yield put({type: actionTypes.USER_SEARCH_SUCCEEDED, payload: 'PAYLOAD'});
	} catch (e) {
		yield put({ type: actionTypes.USER_SEARCH_FAILED, payload: 'PAYLOAD' });
	}
}


function* watchUserSearch(action: any) {
	yield takeLatest(actionTypes.USER_SEARCH_REQUESTED, searchUser);
}

function* watchUserFetch() {
	yield takeLatest(actionTypes.USER_FETCH_REQUESTED, fetchUser);
}

function* userSaga(action: any) {
	yield all([
		watchUserFetch(),
		watchUserSearch(action)
	]);
}

export default userSaga;
