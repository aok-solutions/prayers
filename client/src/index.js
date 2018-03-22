import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import loadPrayers from './actions/prayerActions'

const store = configureStore()
store.dispatch(loadPrayers())

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
