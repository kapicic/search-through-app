import UserContent from "../user/UserContent";

interface State {
	users: UserContent[],
	isLoggedIn: boolean,
	usersState?: any,
	searchTerm?: string
}

export default State;
