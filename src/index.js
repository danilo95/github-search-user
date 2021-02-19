import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import History from './components/history/History';
import InitAnimation from './components/initAnimation/InitAnimation';
import reportWebVitals from './reportWebVitals';

import reducers from './reducers/Index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const renderLoader = () => <InitAnimation />;

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router history={History}>
				<Suspense fallback={renderLoader()}>
					<App />
				</Suspense>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
