import { call, put, takeLatest, all } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes';
import config from '../../config';

function* fetchUser(action: any) {
	try {
		const users = yield call(fetch, config.api.users.fetch);
		yield put({ type: "USER_FETCH_SUCCEEDED", users: users });
	} catch (e) {
		yield put({ type: "USER_FETCH_FAILED", message: e.message });
	}
}


function* searchUser(action: any) {
	try {
		yield put({type: actionTypes.USER_SEARCH_SUCCEEDED, payload: 'MAKE_API_CALL_HERE'});
	} catch (e) {
		yield put({ type: actionTypes.USER_SEARCH_FAILED, payload: 'MAKE_API_CALL_HERE' });
	}
}


function* watchUserSearch(action: any) {
	yield takeLatest(actionTypes.USER_SEARCH_REQUESTED, searchUser);
}

function* watchUserFetch(action: any) {
	yield takeLatest(actionTypes.USER_FETCH_REQUESTED, fetchUser);
}

function* userSaga(action: any) {
	yield all([
		watchUserFetch(action),
		watchUserSearch(action)
	]);
}

export default userSaga;
