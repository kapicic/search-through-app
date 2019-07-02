import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

const App: React.FC = () => {
	return (
		<Provider store={store} >
			<Header />
			<Banner />
		</Provider>
	);
}

export default App;
