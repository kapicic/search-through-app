import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App2 from './App2';

const App: React.FC = () => {
	
  return (
		<Provider store={store} >
			<App2/>
			<div className="App">
				<h1>Hello React!</h1>
			</div>
		</Provider>
  );
}

export default App;
