import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import User from './components/User/User';

const App: React.FC = () => {
	return (
		<Provider store={store} >
			<Router>
				<Header />
				<Banner />
				<Route path='/user/:id' component={User} />
			</Router>
		</Provider>
	);
}

export default App;
