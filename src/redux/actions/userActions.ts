import actionTypes from "./actionTypes";

const fetchUsers = () => {
	return {type: actionTypes.USER_FETCH_REQUESTED};
}

const searchUsers = (searchParams: any) => {
	return {type: actionTypes.USER_SEARCH_REQUESTED, payload: searchParams};
}

export default { fetchUsers, searchUsers };
