import { call, put, takeLatest } from 'redux-saga/effects'
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

function* logoutUser() {
	yield put({ type: actionTypes.USER_LOGOUT_SUCCEEDED });
}

function* validateUser(action: Action) {
	try {
		const response = yield call(fetch, config.api.login, {
			method: 'POST',
			body: JSON.stringify({ username: action.payload.username, password: action.payload.password })
		});
		const data = yield response.json();
		const { isValid } = JSON.parse(data);
		yield isValid ? put({ type: actionTypes.USER_VALIDATION_SUCCEEDED, payload: isValid }) : put({ type: actionTypes.USER_VALIDATION_FAILED, payload: isValid });
	} catch (exception) {
		yield put({ type: actionTypes.USER_VALIDATION_FAILED, message: exception.message });
	}
}

function* showUserForm() {
	yield put({ type: actionTypes.USER_LOGIN_FORM_SHOW, payload: true });
}

export const userSaga = [
	takeLatest(actionTypes.USER_LOGIN_FORM_REQUESTED, showUserForm),
	takeLatest(actionTypes.USER_LOGOUT_REQUESTED, logoutUser),
	takeLatest(actionTypes.USER_VALIDATION_REQUESTED, validateUser),
	takeLatest(actionTypes.USER_FETCH_REQUESTED, fetchUser),
];

export default userSaga;
