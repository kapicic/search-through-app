import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

const App: React.FC = () => {
	
  return (
		<Provider store={store} >
			<div className="App">
				<h1>Hello React!</h1>
			</div>
		</Provider>
  );
}

export default App;
