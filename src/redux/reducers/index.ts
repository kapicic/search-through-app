import userReducer from './userReducer';
import searchReducer from './searchReducer';
import formReducer from './formReducer';
import { combineReducers } from 'redux';

export default combineReducers({
	form: formReducer,
	usersState: userReducer,
	searchState: searchReducer
});
