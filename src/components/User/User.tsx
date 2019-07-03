import React, { Component } from 'react';
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


class User extends Component<UserProps> {
	componentDidMount() {
		this.props.requestUserById(this.props.match.params.id);
	}

	render() {
		const activeUser = this.props.activeUser ? this.props.activeUser : null;
		const user = activeUser && activeUser.length && activeUser[0];
		const userFound = activeUser && activeUser.length;
		return (
			userFound ? (
			<div>
				<h1>{ user.title[0].value }</h1>
				<p>{ user.body[0].value }</p>
			</div>
			) : (<p>User not found</p>)
		);
	}
}

export default connect(mapState, mapDispatch)(User);
