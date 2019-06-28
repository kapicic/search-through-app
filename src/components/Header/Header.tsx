import React, { Component } from 'react';
import { connect } from 'react-redux';
import SiteBrand from '../../assets/search-through-logo.png';
import HS from './HeaderStyle';
import userActions from '../../redux/actions/userActions';

class Header extends Component<any> {
	componentDidMount() {
		this.props.checkUserValidation();
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

const mapState = (state: any) => ({
	isLoggedIn: state.usersState.isLoggedIn
});

const mapDispatch = { ...userActions };

export default connect(mapState, mapDispatch)(Header);
