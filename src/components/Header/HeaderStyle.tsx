import styled from 'styled-components';
import styleVariables from '../../style/variables';

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

const AuthUser = styled.div`
	font-size: 14px;
	color: ${styleVariables.colors.brown};
`;

const ButtonLogout = styled.button`
	margin-left: 15px;
	padding: 5px 15px;
	border: 0;
	border-radius: 5px;
	background-color: ${styleVariables.colors.brown};
	font-weight: ${styleVariables.fontWeights.bold};
	font-size: 10px;
	color: ${styleVariables.colors.white};
`;

export default {
	HeaderWrapper,
	Logo,
	AuthUser,
	ButtonLogout
}
