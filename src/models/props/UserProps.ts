import Action from '../action/Action';

interface UserProps {
	match: {
		params: {
			id: number
		}
	},
	activeUser: Array<any>,
	requestUserById(id: number): Action,
}

export default UserProps;
