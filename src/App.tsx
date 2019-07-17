import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './views/Home';
import Error from './views/Error';
import SingleUser from './views/SingleUser';
import Landing from './views/Landing';
import config from './config';
const { paths : { login, home, user } } = config;

const ProtectedRoute = (props: any) => {
	const { isLoggedIn } = store.getState().usersState;
	return isLoggedIn ? <Route {...props} /> : <Redirect to={login} />;
}

const App: React.FC = () => {
	return (
		<Provider store={store} >
			<Router history={config.history}>
				<Header />

				<Switch>
					<Route path={login} component={Landing} />
					<ProtectedRoute path={home} component={Home} exact />
					<ProtectedRoute path={user} component={SingleUser} />
					<Route component={Error} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
