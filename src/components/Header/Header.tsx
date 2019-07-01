import React, { Component } from 'react';
import { connect } from 'react-redux';
import SiteBrand from '../../assets/search-through-logo.png';
import HS from './HeaderStyle';
import userActions from '../../redux/actions/userActions';
import HeaderProps from '../../models/props/HeaderProps';
import State from '../../models/state/State';

class Header extends Component<HeaderProps> {
		
	requestLoginForm() {
		return '';
	}

	handleClick(isLoggedIn: boolean) {
		isLoggedIn ? this.props.requestUserLogout() : this.props.requestUserValidation({ username: 'test', password: 'test' });
	}

	render() {
		const { isLoggedIn } = this.props;

		return (
		<HS.HeaderWrapper>
			<HS.Logo src={SiteBrand} alt="Search Through Site Branding" />
			<HS.AuthUser>
					<HS.AuthButton isLoggedIn={isLoggedIn} handleClick={() => this.handleClick(isLoggedIn)}></HS.AuthButton>
			</HS.AuthUser>
		</HS.HeaderWrapper>
		)
	}
}

const mapState = (state: State) => ({
	isLoggedIn: state.usersState.isLoggedIn
});

const mapDispatch = { ...userActions };

export default connect(mapState, mapDispatch)(Header);
