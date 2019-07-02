import actionTypes from "./actionTypes";
import Action from '../../models/action/Action';

const requestSearchUsers = (searchParams: string): Action => ({ type: actionTypes.USER_SEARCH_REQUESTED, payload: searchParams });
const requestUpdateSearchTerm = (searchParams: string): Action => ({ type: actionTypes.UPDATE_SEARCH_TERM_REQUESTED, payload: searchParams });

export default { requestSearchUsers, requestUpdateSearchTerm };
