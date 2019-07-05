import React, { FC } from 'react'
import { connect } from 'react-redux';
import State from '../../models/state/State';
import UserContent from '../../models/user/UserContent';
import UsersListsProps from '../../models/props/UsersListProps';

import UE from './UsersListStyle'; // UE = user elements

const UsersList: FC<UsersListsProps> = ({ users }) => {
	return (
		users && users.length ? (
		<UE.UsersListWrapper>
			{ users.map((user: UserContent) => <UE.UsersListItem key={user.nid}><UE.UsersListLink to={'/user/' + user.nid}>{user.title}</UE.UsersListLink></UE.UsersListItem>) }
		</UE.UsersListWrapper>
		) : (<UE.UserListNotFound>User not found</UE.UserListNotFound>)
	)
}

const mapState = (state: State) => ({
	...state.searchState
});

export default connect(mapState)(UsersList);
