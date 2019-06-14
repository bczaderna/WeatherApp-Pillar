
import React from 'react';
import ReactDOM from 'react-dom';
import './views/css/styles.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

//Views
import App from './views/Components/App';
import Home from './views/Containers/Home';
// import CurrentWeather from './views/Containers/FoundWeather';
import ErrorDisplay from './views/Components/ErrorDisplay';

ReactDOM.render(

	<Router>
	  <App>
		  <Route exact path='/' component={Home}/>
		  {/* <Route exact path='/current-weather' component={CurrentWeather}/> */}
		  <Route exact path='/error' component={ErrorDisplay}/>
	  </App>
	</Router>

,document.getElementById('root'));

