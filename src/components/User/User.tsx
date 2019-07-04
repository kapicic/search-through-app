import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import State from '../../models/state/State';
import userActions from '../../redux/actions/userActions';
import UserProps from '../../models/props/UserProps';

const mapState = (state: State) => ({
	...state.usersState
});

const mapDispatch = {
	...userActions
}

const User: FC<UserProps> = (props) => {
	const { activeUser, requestUserById, match } = props;

	useEffect(() => {
		requestUserById(match.params.id);
	}, []);

	const userFound = activeUser && activeUser.length;
	const user = userFound && activeUser[0];
	return (
		userFound ? (
		<div>
			<h1>{ user.title }</h1>
			<p dangerouslySetInnerHTML={{ __html: user.body }}></p>
			<img src={ 'http://skapicic.sitesstage.com' + user.field_image } />
		</div>
		) : (<p>User not found</p>)
	);
}

export default connect(mapState, mapDispatch)(User);
