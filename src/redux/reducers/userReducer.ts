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
		default:
			
		return state;
	}
};

export default userReducer;
