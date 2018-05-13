import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import history from './history';
import './index.css';
import NewPrayerPage from './components/prayers/NewPrayerPage';
import NewPrayer from './components/prayers/NewPrayer';
import HomePage from './components/HomePage';
import PrayerPage from './components/prayers/PrayerPage';
import ThankYouPage from './components/prayers/ThankYouPage';
import ThankYouSignUp from './components/prayers/ThankYouSignUp';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { loadPrayers } from './actions/prayerActions';

import appSyncConfig from "./AppSync";
import { ApolloProvider } from "react-apollo";
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";

import css from 'uikit/dist/css/uikit.css';
import Icons from 'uikit/dist/js/uikit-icons';
import UIkit from 'uikit/dist/js/uikit.js'

import config from './aws-exports'
import Amplify from 'aws-amplify'
Amplify.configure(config)

UIkit.use(Icons);

const store = configureStore();
store.dispatch(loadPrayers());

const client = new AWSAppSyncClient({
	url: appSyncConfig.graphqlEndpoint,
	region: appSyncConfig.region,
	auth: {
		type: appSyncConfig.authenticationType,
		apiKey: appSyncConfig.apiKey,
	}
});

const App = () => (
	<Provider store={store}>
		<div className="uk-container uk-container-small">
			<Router history={history}>
				<div>
					<Route exact path="/" component={NewPrayerPage}/>
					<Route path="/thank-you" component={ThankYouPage}/>
					<Route path="/prayers" component={PrayerPage}/>

					<Route path="/home" component={HomePage}/>
					<Route path="/pray" component={NewPrayer}/>
					<Route path="/thanks" component={ThankYouSignUp}/>
				</div>
			</Router>
		</div>
	</Provider>
);

render(
	<ApolloProvider client={client}>
		<Rehydrated>
			<App />
		</Rehydrated>
	</ApolloProvider>,
	document.getElementById('root')
);
registerServiceWorker();
