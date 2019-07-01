import React, { Component } from 'react';
import { connect } from 'react-redux';
import SiteBrand from '../../assets/search-through-logo.png';
import HS from './HeaderStyle';
import userActions from '../../redux/actions/userActions';
import HeaderProps from '../../models/props/HeaderProps';
import State from '../../models/state/State';

class Header extends Component<HeaderProps> {
	componentDidMount() {
		this.props.checkUserValidation({ username: 'test', password: 'test' });
	}

	render() {
		const { isLoggedIn } = this.props;

		return (
		<HS.HeaderWrapper>
			<HS.Logo src={SiteBrand} alt="Search Through Site Branding" />
			{isLoggedIn && (<HS.AuthUser>
				<span>Welcome back USER</span>
				<HS.ButtonLogout>LOGOUT</HS.ButtonLogout>
			</HS.AuthUser>)}
		</HS.HeaderWrapper>
		)
	}
}

const mapState = (state: State) => ({
	isLoggedIn: state.usersState.isLoggedIn
});

const mapDispatch = { ...userActions };

export default connect(mapState, mapDispatch)(Header);
