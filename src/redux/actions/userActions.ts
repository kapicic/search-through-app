import actionTypes from "./actionTypes";

const fetchUsers = () => ({ type: actionTypes.USER_FETCH_REQUESTED });
const searchUsers = (searchParams: any) => ({ type: actionTypes.USER_SEARCH_REQUESTED, payload: searchParams });
const checkUserValidation = () => ({ type: actionTypes.USER_VALIDATION_REQUESTED });

export default { fetchUsers, searchUsers, checkUserValidation };
