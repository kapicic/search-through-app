import React, { Component } from 'react';
import { connect } from 'react-redux';
import SiteBrand from '../../assets/search-through-logo.png';
import HS from './HeaderStyle';
import userActions from '../../redux/actions/userActions';
import HeaderProps from '../../models/props/HeaderProps';
import State from '../../models/state/State';
import LoginForm from '../LoginForm/LoginForm';

class Header extends Component<HeaderProps> {

	handleClick(isLoggedIn: boolean) {
		isLoggedIn ? this.props.requestUserLogout() : this.props.requestLoginForm();
	}
	
	handleSubmit(userData: any) {
		this.props.requestUserValidation({ ...userData });
	}

	render() {
		const { isLoggedIn } = this.props;

		return (
		<HS.HeaderWrapper>
			<HS.Logo src={SiteBrand} alt="Search Through Site Branding" />
			{ this.props.isLoginFormRequested && (<LoginForm onSubmit={this.handleSubmit.bind(this)}/>) }
			<HS.AuthUser>
					<HS.AuthButton isLoggedIn={isLoggedIn} handleClick={() => this.handleClick(isLoggedIn)}></HS.AuthButton>
			</HS.AuthUser>
		</HS.HeaderWrapper>
		)
	}
}

const mapState = (state: State) => ({
	isLoggedIn: state.usersState.isLoggedIn,
	isLoginFormRequested: state.usersState.isLoginFormRequested,
});

const mapDispatch = { ...userActions };

export default connect(mapState, mapDispatch)(Header);
