import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './components/App';
import './index.css';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Router>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider>
    </Router>
	, document.getElementById('root'));
