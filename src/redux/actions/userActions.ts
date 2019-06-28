import actionTypes from "./actionTypes";

const fetchUsers = () => (dispatch: any) => {
	return dispatch({type: actionTypes.USER_FETCH_REQUESTED});
}

const searchUsers = (searchParams: any) => (dispatch: any) => {
	dispatch({type: actionTypes.USER_SEARCH_REQUESTED, payload: searchParams});
}

export default { fetchUsers, searchUsers };
