import initialState from '../store/initialState';
import actionTypes from '../actions/actionTypes';

const userReducer = (state = initialState, action: any) => {
	switch(action.type) {
		case actionTypes.USER_FETCH_SUCCEEDED:
			return { 
				...state,
				...action.payload
			};
		case actionTypes.USER_FETCH_FAILED:
			return {
				...state,
				users: []
			};

		case actionTypes.USER_VALIDATION_SUCCEEDED:
			return {
				...state,
				isLoggedIn: action.payload,
				isLoginFormRequested: !action.payload
			};

		case actionTypes.USER_VALIDATION_FAILED:
			return {
				...state,
				loginFailed: action.payload
			}
		case actionTypes.USER_LOGOUT_SUCCEEDED:
			return {
				...state,
				isLoggedIn: action.payload
			};
		
		case actionTypes.USER_LOGIN_FORM_SHOW:
			return {
				...state,
				isLoginFormRequested: action.payload
			};

		default:

		return state;
	}
};

export default userReducer;
