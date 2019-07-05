import UserContent from "../user/UserContent";

interface State {
	users: UserContent[],
	isLoggedIn: boolean,
	usersState?: any,
	searchState?: any
}

export default State;
