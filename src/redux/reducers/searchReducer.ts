import initialState from '../store/initialState';
import actionTypes from '../actions/actionTypes';
import Action from '../../models/action/Action';

const userReducer = (state = initialState, action: Action) => {
	switch(action.type) {
		case actionTypes.USER_SEARCH_SUCCEEDED:
			return {
				...state,
				...action.payload
			};

		case actionTypes.USER_SEARCH_FAILED:
			return {
				...state,
				users: []
			};

		case actionTypes.UPDATE_SEARCH_TERM_SUCCEEDED:
			return {
				...state,
				searchTerm: action.payload
			};

		case actionTypes.UPDATE_SEARCH_TERM_FAILED:
			return {
				...state,
				searchTerm: ''
			};

		default:

		return state;
	}
};

export default userReducer;
