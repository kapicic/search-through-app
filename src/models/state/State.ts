import UserContent from "../user/UserContent";

interface State {
	users: UserContent[],
	isLoggedIn: boolean,
	usersState?: any,
	searchTerm?: string,
	isLoginFormRequested?: boolean
}

export default State;
