import UserData from "../user/UserData";

interface HeaderProps {
	isLoggedIn: boolean,
	isLoginFormRequested?: boolean,
	requestUserValidation(userData: UserData): void,
	requestUserLogout(): void,
	requestLoginForm(): void
}

export default HeaderProps;
