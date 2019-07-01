import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import styled from 'styled-components';
import styleVariables from './style/variables';

import Header from './components/Header/Header';

const Container = styled.div`
	max-width: 1140px;
	width: 100%;
	margin: 0 auto;
	padding: 0 30px;
`;

const AppWrapper = styled.div`
	background-color: ${styleVariables.colors.brownWhite}
`;

const App: React.FC = () => {
	return (
		<Provider store={store} >
			<AppWrapper>
				<Container>
					<Header />
				</Container>
			</AppWrapper>
		</Provider>
	);
}

export default App;
