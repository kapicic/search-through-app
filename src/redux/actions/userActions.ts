import actionTypes from "./actionTypes";

const fetchUsers = () => ({ type: actionTypes.USER_FETCH_REQUESTED });
const requestUserValidation = (userData: any) => ({ type: actionTypes.USER_VALIDATION_REQUESTED, payload: { ...userData } });
const requestUserLogout = () => ({ type: actionTypes.USER_LOGOUT_REQUESTED });
const requestLoginForm = () => ({ type: actionTypes.USER_LOGIN_FORM_REQUESTED });

export default { fetchUsers, requestUserValidation, requestUserLogout, requestLoginForm };
