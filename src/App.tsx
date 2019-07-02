import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import styled from 'styled-components';
import SV from './style/variables'; // SV = style variables
import BE from './style/elements'; // BE = base elements

import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

const AppWrapper = styled.div`
	background-color: ${SV.colors.brownWhite}
`;

const App: React.FC = () => {
	return (
		<Provider store={store} >
			<AppWrapper>
				<BE.Container>
					<Header />
				</BE.Container>
				<Banner />
			</AppWrapper>
		</Provider>
	);
}

export default App;
