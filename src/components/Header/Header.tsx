import React, { FC } from 'react';
import { connect } from 'react-redux';
import SiteBrand from '../../assets/search-through-logo.png';
import HS from './HeaderStyle';
import BE from '../../style/elements'; // BE = base elements
import SV from '../../style/variables'; // SV = style variables
import userActions from '../../redux/actions/userActions';
import HeaderProps from '../../models/props/HeaderProps';
import State from '../../models/state/State';
import { NavLink } from 'react-router-dom';
import config from '../../config';

const Header: FC<HeaderProps> = (props) => {
	const { isLoggedIn, requestUserLogout } = props;

	return (
	<header style={{ backgroundColor: SV.colors.brownWhite }}>
		<BE.Container>
			<HS.HeaderWrapper>
				<NavLink to={config.paths.home}>
					<HS.Logo src={SiteBrand} alt="Search Through Site Branding" />
				</NavLink>
				<HS.AuthUser>
						<HS.AuthButton isLoggedIn={isLoggedIn} handleClick={requestUserLogout}></HS.AuthButton>
				</HS.AuthUser>
			</HS.HeaderWrapper>
		</BE.Container>
	</header>
	);
}

const mapState = (state: State) => ({
	isLoggedIn: state.usersState.isLoggedIn
});

const mapDispatch = { ...userActions };

export default connect(mapState, mapDispatch)(Header);
