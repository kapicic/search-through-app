import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';

const App: React.FC = () => {
	
  return (
		<Provider store={store} >
			<div className="App">
				<Header />
			</div>
		</Provider>
  );
}

export default App;
