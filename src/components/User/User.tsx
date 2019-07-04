import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import State from '../../models/state/State';
import userActions from '../../redux/actions/userActions';
import UserProps from '../../models/props/UserProps';

import BE from '../../style/elements';

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
	}, [requestUserById, match.params.id]);

	const userFound = activeUser && activeUser.length;
	const user = activeUser && activeUser.length && activeUser[0];

	return (
		<BE.Container>
			{ userFound ? (
			<div>
				<h1>{ user.title }</h1>
				<p dangerouslySetInnerHTML={{ __html: user.body }}></p>
				<img src={ 'http://skapicic.sitesstage.com' + user.field_image } alt="image alternate text" aria-hidden />
			</div>
			) : (<p>User not found</p>) }
		</BE.Container>
	);
}

export default connect(mapState, mapDispatch)(User);
