import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import UsersList from './components/UsersList/UsersList';

const App: React.FC = () => {
	return (
		<Provider store={store} >
			<Header />
			<Banner />
			<UsersList />
		</Provider>
	);
}

export default App;
