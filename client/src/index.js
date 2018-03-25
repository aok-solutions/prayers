import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import history from './history';
import './index.css';
import NewPrayerPage from './components/prayers/NewPrayerPage';
import PrayerPage from './components/prayers/PrayerPage';
import ThankYouPage from './components/prayers/ThankYouPage';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { loadPrayers } from './actions/prayerActions';

const store = configureStore();
store.dispatch(loadPrayers());

render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Route exact path="/" component={NewPrayerPage}/>
				<Route path="/thank-you" component={ThankYouPage}/>
				<Route path="/prayers" component={PrayerPage}/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
