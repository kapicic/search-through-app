import initialState from '../store/initialState';
import actionTypes from '../actions/actionTypes';

const userReducer = (state = initialState, action: any) => {
	console.log(action.type);

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
				isLoggedIn: action.payload
			};

		case actionTypes.USER_VALIDATION_FAILED:
		case actionTypes.USER_LOGOUT_SUCCEEDED:
			return {
				...state,
				isLoggedIn: true
			};

		default:

		return state;
	}
};

export default userReducer;
