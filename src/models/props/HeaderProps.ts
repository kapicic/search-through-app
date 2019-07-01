import UserData from "../user/UserData";

interface HeaderProps {
	isLoggedIn: boolean,
	requestUserValidation(userData: UserData): void,
	requestUserLogout(): void,
}

export default HeaderProps;
