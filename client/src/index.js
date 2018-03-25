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

import css from 'uikit/dist/css/uikit.css';
import Icons from 'uikit/dist/js/uikit-icons';
import UIkit from 'uikit/dist/js/uikit.js'

UIkit.use(Icons);

const store = configureStore();
store.dispatch(loadPrayers());

render(
	<Provider store={store}>
		<div class="uk-container uk-container-small">
			<Router history={history}>
				<div>
					<Route exact path="/" component={NewPrayerPage}/>
					<Route path="/thank-you" component={ThankYouPage}/>
					<Route path="/prayers" component={PrayerPage}/>
				</div>
			</Router>
		</div>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
