// import userSaga from './userSaga';
import { searchSaga } from './searchSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
	yield all([
		...searchSaga
	]);	
};
