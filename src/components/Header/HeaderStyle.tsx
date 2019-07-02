import styled from 'styled-components';
import styleVariables from '../../style/variables';
import AuthButton from '../AuthButton/AuthButton';

const HeaderWrapper = styled.div`
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

export default {
	HeaderWrapper,
	Logo,
	AuthUser,
	AuthButton
}
