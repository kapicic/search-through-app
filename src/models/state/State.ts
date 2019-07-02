import UserContent from "../user/UserContent";

interface State {
	users: UserContent[],
	isLoggedIn: boolean,
	usersState?: any,
	isLoginFormRequested?: boolean
}

export default State;
