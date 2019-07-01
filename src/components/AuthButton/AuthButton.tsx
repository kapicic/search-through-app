import React, { FC } from 'react';
import styled from 'styled-components';
import styleVariables from '../../style/variables';
import AuthButtonProps from '../../models/props/AuthButtonProps';

const StyledButton = styled.button`
	margin-left: 15px;
	padding: 5px 15px;
	border: 0;
	border-radius: 5px;
	background-color: ${styleVariables.colors.brown};
	font-weight: ${styleVariables.fontWeights.bold};
	font-size: 10px;
	color: ${styleVariables.colors.white};
`;

const AuthButton:FC<AuthButtonProps> = (props) => {
	return <StyledButton onClick={() => props.handleClick(props.isLoggedIn)}>
		{props.isLoggedIn ? 'Logout' : 'Login'}
	</StyledButton>
}

export default AuthButton;
