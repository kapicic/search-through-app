import React, { FC } from 'react';
import styled from 'styled-components';
import styleVariables from '../../style/variables';
import AuthButtonProps from '../../models/props/AuthButtonProps';
import { NavLink } from 'react-router-dom';
import config from '../../config';

const buttonStyleObject = {
	marginLeft: '15px',
	padding: '7px 20px',
	border: 0,
	backgroundColor: styleVariables.colors.brown,
	fontWeight: styleVariables.fontWeights.bold,
	fontSize: '11px',
	color: styleVariables.colors.white,
	textDecoration: 'none',
	cursor: 'pointer',
	transition: 'background-color 200ms linear',
	'&:hover': {
		backgroundColor: styleVariables.colors.brownLightHover,
	}
}

const StyledButton = styled.button`${buttonStyleObject}`;
const StyledNavLink = styled(NavLink)`${buttonStyleObject}`;

const AuthButton:FC<AuthButtonProps> = ({ isLoggedIn, handleClick }) => {
	return isLoggedIn ? <StyledButton onClick={() => handleClick(isLoggedIn)}>Logout</StyledButton> : <StyledNavLink to={config.paths.login} >Login</StyledNavLink>;
}

export default AuthButton;
