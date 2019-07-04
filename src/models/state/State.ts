import UserContent from "../user/UserContent";

interface State {
	users: UserContent[],
	isLoggedIn: boolean,
	usersState?: any,
	searchState?: any,
	isLoginFormRequested?: boolean
}

export default State;
