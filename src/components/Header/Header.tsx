import React from 'react';
import { connect } from 'react-redux';
import SiteBrand from '../../assets/search-through-logo.png';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 60px;
`;

const Logo = styled.img`
	display: inline-block;
	max-height: 30px;
`;

const Header: React.FC = (props: any) => {
	const { isLoggedIn } = props;

	return (
		<HeaderWrapper>
			<Logo src={SiteBrand} alt="Search Through Site Branding" />
		</HeaderWrapper>
	)
}

const mapState = (state: any) => ({
	isLoggedIn: state.isLoggedIn
});

export default connect(mapState)(Header);
