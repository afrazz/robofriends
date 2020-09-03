import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { changeSearchField, requestRobots } from './reducers';
import 'tachyons';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
    changeSearchField, requestRobots
})
const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root') 
)
 registerServiceWorker()
