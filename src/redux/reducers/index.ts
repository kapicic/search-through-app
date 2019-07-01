import userReducer from './userReducer';
import formReducer from './formReducer';
import { combineReducers } from 'redux';

export default combineReducers({
	form: formReducer,
	usersState: userReducer
});
