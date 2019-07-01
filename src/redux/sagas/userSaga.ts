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

function* searchUser(action: Action) {
	try {
		yield put({type: actionTypes.USER_SEARCH_SUCCEEDED, payload: 'PAYLOAD'});
	} catch (exception) {
		yield put({ type: actionTypes.USER_SEARCH_FAILED, payload: 'PAYLOAD' });
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

function* watchUserFetch() {
	yield takeLatest(actionTypes.USER_FETCH_REQUESTED, fetchUser);
}

function* watchUserSearch(action: Action) {
	yield takeLatest(actionTypes.USER_SEARCH_REQUESTED, searchUser);
}

function* watchUserValidation(action: Action) {
	yield takeLatest(actionTypes.USER_VALIDATION_REQUESTED, validateUser);
}

function* watchUserLogout() {
	yield takeLatest(actionTypes.USER_LOGOUT_REQUESTED, logoutUser);
}

function* watchUserFormRequested() {
	yield takeLatest(actionTypes.USER_LOGIN_FORM_REQUESTED, showUserForm);
}

function* userSaga(action: Action) {
	yield all([
		watchUserFetch(),
		watchUserSearch(action),
		watchUserValidation(action),
		watchUserLogout(),
		watchUserFormRequested()
	]);
}

export default userSaga;
