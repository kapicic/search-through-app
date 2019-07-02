import styled from 'styled-components';
import SV from '../../style/variables'; // SV = style variables


const BannerWrapper = styled.div`
	min-height: 300px;
	padding: 80px 0;
	background-color: ${SV.colors.brown}; /* Add a background image later and leave this line as a fallback */
	color: ${SV.colors.white};
	text-align: center;
`;

const BannerTitle = styled.h1`
	margin-bottom: 30px;
	font-size: 40px;
	font-weight: ${SV.fontWeights.light};
	letter-spacing: 1.3px;
	text-transform: uppercase;
`;

export default {
	BannerWrapper,
	BannerTitle
};
