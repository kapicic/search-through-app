import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas/userSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(sagaMiddleware),
		(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
	)
);
sagaMiddleware.run(sagas as any);

export default store;
