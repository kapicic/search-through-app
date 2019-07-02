import styled from "styled-components";
import SV from '../../style/variables';

const SearchForm = styled.form`
	max-width: 600px;
	width: 100%;
	height: 60px;
	margin: 0 auto;
`;

const SearchInput = styled.input`
	height: 100%;
	width: calc(100% - 120px);
	padding: 10px 20px;
	border: 0;
	font-size: 14px;
	font-weight: ${SV.fontWeights.bold};
	outline: none;
	`;

const SearchSubmit = styled.input`
	width: 120px;
	height: 60px;
	border: 0;
	background-color: ${SV.colors.brownLight};
	font-size: 14px;
	font-weight: 400;
	color: ${SV.colors.white};
	text-transform: uppercase;
	letter-spacing: 1px;
	outline: none;
	cursor: pointer;
	transition: background-color 200ms linear;

	&:hover {
		background-color: ${SV.colors.brownLightHover};
	}
`;

export default {
	SearchForm,
	SearchInput,
	SearchSubmit
}
