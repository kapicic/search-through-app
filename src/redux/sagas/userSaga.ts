import { call, put, takeLatest, all } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes';
import config from '../../config';
import Action from '../../models/action/Action';

function* fetchUser() {
	try {
		const response = yield call(fetch, config.api.users.fetch);
		const users = yield response.json();
		yield put({ type: actionTypes.USER_FETCH_SUCCEEDED, payload: users });
	} catch (exception) {
		yield put({ type: actionTypes.USER_FETCH_FAILED, message: exception.message });
	}
}

function* validateUser(action: Action) {
	try {
		const response = yield call(fetch, config.api.login, {
			method: 'POST',
			body: JSON.stringify({ username: action.payload.username, password: action.payload.password })
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

function* watchUserValidation(action: Action) {
	yield takeLatest(actionTypes.USER_VALIDATION_REQUESTED, validateUser);
}

function* userSaga(action: Action) {
	yield all([
		watchUserFetch(),
		watchUserValidation(action)
	]);
}

export default userSaga;
