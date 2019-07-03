import React, { FC } from 'react'
import { connect } from 'react-redux';
import State from '../../models/state/State';

import UE from './UsersListStyle'; // UE = user elements

const UsersList: FC<any> = (props) => {
	const isArrayPopulated = props.users && props.users.length;
	const singleUser = props.users ? props.users : null;

	return (
		isArrayPopulated ? (
		<UE.UsersListWrapper>
			{ singleUser.map((user: any) => <UE.UsersListItem key={user.nid[0].value}><UE.UsersListLink href={'api/user/' + user.nid[0].value}>{user.title[0].value}</UE.UsersListLink></UE.UsersListItem>) }
		</UE.UsersListWrapper>
		) : (<UE.UserListNotFound>User not found</UE.UserListNotFound>)
	)
}

const mapState = (state: State) => ({
	...state.searchState
});

export default connect(mapState)(UsersList);
