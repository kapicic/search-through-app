import { call, put, takeLatest } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes';
import config from '../../config';
import Action from '../../models/action/Action';

function* fetchUser() {
	try {
		const response = yield call(fetch, config.api.users.fetch.all);
		const users = yield response.json();
		yield put({ type: actionTypes.USER_FETCH_SUCCEEDED, payload: users });
	} catch (exception) {
		yield put({ type: actionTypes.USER_FETCH_FAILED, message: exception.message });
	}
}

function* logoutUser() {
	yield put({ type: actionTypes.USER_LOGOUT_SUCCEEDED });
	yield config.history.push(config.paths.login);
}

function* validateUser(action: Action) {
	try {
		const response = yield call(fetch, config.api.login, {
			method: 'POST',
			body: JSON.stringify({ username: action.payload.username, password: action.payload.password })
		});
		const data = yield response.json();
		const { isValid } = JSON.parse(data);
		yield put({ type: actionTypes.USER_VALIDATION_SUCCEEDED, payload: isValid });
		yield isValid && config.history.push(config.paths.home);
	} catch (exception) {
		yield put({ type: actionTypes.USER_VALIDATION_FAILED, message: exception.message });
		yield config.history.push(config.paths.login);
	}
}

function* fetchUserById(action: Action) {
	try {
		const endPoint = new URL(config.api.users.fetch.byId + action.payload);
		const data = yield call(fetch, endPoint.toString());
		const json = yield data.json();
		yield put({ type: actionTypes.USER_FETCH_BY_ID_SUCCEEDED, payload: json });
	} catch (exception) {
		yield put({ type: actionTypes.USER_FETCH_BY_ID_FAILED, message: exception.message });
	}
}

const userSaga = [
	takeLatest(actionTypes.USER_LOGOUT_REQUESTED, logoutUser),
	takeLatest(actionTypes.USER_VALIDATION_REQUESTED, validateUser),
	takeLatest(actionTypes.USER_FETCH_REQUESTED, fetchUser),
	takeLatest(actionTypes.USER_FETCH_BY_ID_REQUESTED, fetchUserById),
];

export default userSaga;
