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
				isLoggedIn: action.payload
			};

		case actionTypes.USER_VALIDATION_FAILED:
			return {
				...state,
				isLoggedIn: false
			};

		default:

		return state;
	}
};

export default userReducer;
