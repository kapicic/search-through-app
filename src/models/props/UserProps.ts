interface UserProps {
	match: {
		params: {
			id: number
		}
	},
	activeUser: Array<any>,
	requestUserById(id: number): void,
}

export default UserProps;
