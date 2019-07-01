import actionTypes from "./actionTypes";

const fetchUsers = () => ({ type: actionTypes.USER_FETCH_REQUESTED });
const searchUsers = (searchParams: any) => ({ type: actionTypes.USER_SEARCH_REQUESTED, payload: searchParams });
const requestUserValidation = (userData: any) => ({ type: actionTypes.USER_VALIDATION_REQUESTED, payload: { ...userData } });
const requestUserLogout = () => ({ type: actionTypes.USER_LOGOUT_REQUESTED });
const requestLoginForm = () => ({ type: actionTypes.USER_LOGIN_FORM_REQUESTED });

export default { fetchUsers, searchUsers, requestUserValidation, requestUserLogout, requestLoginForm };
