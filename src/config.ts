import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const config = {
	history,

	api: {
		users: {
			fetch: {
				all: 'http://skapicic.sitesstage.com/api/users/all',
				byId: 'http://skapicic.sitesstage.com/api/user/',
			},
			search: 'http://skapicic.sitesstage.com/api/users/search',
		},
		login: 'http://skapicic.sitesstage.com/api/user/login'
	},

	paths: {
		login: '/login',
		home: '/',
		user: '/user/:id'
	},
}

export default config;
