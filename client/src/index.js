import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import PrayerPage from './components/prayers/PrayerPage'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import loadPrayers from './actions/prayerActions'

const store = configureStore()
store.dispatch(loadPrayers())

render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={PrayerPage} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
