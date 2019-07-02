import actionTypes from "./actionTypes";

const fetchUsers = () => ({ type: actionTypes.USER_FETCH_REQUESTED });
const checkUserValidation = (userData: any) => ({ type: actionTypes.USER_VALIDATION_REQUESTED, payload: { ...userData } });

export default { fetchUsers, checkUserValidation };
