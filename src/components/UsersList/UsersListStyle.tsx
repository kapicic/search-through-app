import styled from "styled-components";
import SV from '../../style/variables';
import { NavLink } from "react-router-dom";

const UsersListWrapper = styled.ul`
	display: flex;
	flex-flow: row wrap;
	max-width: 800px;
	width: 100%;
	margin: 0 auto;
	padding: 40px 0 20px;
`;

const UsersListItem = styled.li`
	max-width: 50%;
	width: 100%;
	margin-bottom: 20px;
	font-size: 18px;
	font-weight: ${SV.fontWeights.bold};
	text-align: center;
	list-style: none;

	@media screen and (max-width: 768px) {
		max-width: 100%;
	}
`;

const UsersListLink = styled(NavLink)`
	color: ${SV.colors.brown};
	text-decoration: none;
	transition: color 200ms linear;

	&:hover {
		color: ${SV.colors.brownLightHover};
	}
`;

const UserListNotFound = styled.p`
	margin: 40px 0 20px;
	font-size: 24px;
	font-weight: ${SV.fontWeights.bold};
	color: ${SV.colors.brown};
	text-transform: uppercase;
	text-align: center;
`;

export default {
	UsersListWrapper,
	UsersListItem,
	UsersListLink,
	UserListNotFound
}
