import actionTypes from "./actionTypes";
import Action from "../../models/action/Action";

const fetchUsers = (): Action => ({ type: actionTypes.USER_FETCH_REQUESTED });
const requestUserValidation = (userData: any): Action => ({ type: actionTypes.USER_VALIDATION_REQUESTED, payload: { ...userData } });
const requestUserLogout = (): Action => ({ type: actionTypes.USER_LOGOUT_REQUESTED });
const requestLoginForm = (): Action => ({ type: actionTypes.USER_LOGIN_FORM_REQUESTED });
const requestUserById = (id: number): Action => ({ type: actionTypes.USER_FETCH_BY_ID_REQUESTED, payload: id });

export default { fetchUsers, requestUserValidation, requestUserLogout, requestLoginForm, requestUserById };
