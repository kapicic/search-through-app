import { call, put, takeLatest, all } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes';
import config from '../../config';

function* fetchUser() {
	try {
		const response = yield call(fetch, config.api.users.fetch);
		const users = yield response.json();
		yield put({ type: actionTypes.USER_FETCH_SUCCEEDED, payload: users });
	} catch (exception) {
		yield put({ type: actionTypes.USER_FETCH_FAILED, message: exception.message });
	}
}

function* searchUser(action: any) {
	try {
		yield put({type: actionTypes.USER_SEARCH_SUCCEEDED, payload: 'PAYLOAD'});
	} catch (exception) {
		yield put({ type: actionTypes.USER_SEARCH_FAILED, payload: 'PAYLOAD' });
	}
}

function* validateUser() {
	try {
		const response = yield call(fetch, config.api.login, {
			method: 'POST',
			body: JSON.stringify({ username: 'test', password: 'test' })
		});
		const data = yield response.json();
		const { isValid } = JSON.parse(data);
		yield put({ type: actionTypes.USER_VALIDATION_SUCCEEDED, payload: isValid })
	} catch (exception) {
		yield put({ type: actionTypes.USER_VALIDATION_FAILED, message: exception.message });
	}
}

function* watchUserFetch() {
	yield takeLatest(actionTypes.USER_FETCH_REQUESTED, fetchUser);
}

function* watchUserSearch(action: any) {
	yield takeLatest(actionTypes.USER_SEARCH_REQUESTED, searchUser);
}

function* watchUserValidation(action: any) {
	yield takeLatest(actionTypes.USER_VALIDATION_REQUESTED, validateUser);
}

function* userSaga(action: any) {
	yield all([
		watchUserFetch(),
		watchUserSearch(action),
		watchUserValidation(action)
	]);
}

export default userSaga;
