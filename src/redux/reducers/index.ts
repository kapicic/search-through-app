import userReducer from './userReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';

export default combineReducers({
	usersState: userReducer,
	searchState: searchReducer
});
