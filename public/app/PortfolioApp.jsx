import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom'
import {IndexRoute} from 'react-router';
import {Router, Route, browserHistory, Link, hashHistory} from 'react-router';

import PortfolioHomePage from './component/HomePage.jsx';
import About from './component/about/About.jsx';
import AboutMeText from './component/about/aboutmecomponents/AboutMeText.jsx';
import Skills from './component/about/aboutmecomponents/Skills.jsx';
import PersonalFacts from './component/about/aboutmecomponents/PersonalFacts.jsx';

class PortfolioApp extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={PortfolioHomePage}/>
				<Route path="/about" component={About}>
					<Route path="/skills" component={Skills}/>
					<Route path="/personalfacts" component={PersonalFacts}/>
				</Route>
			</Router>
		)
	}
}

ReactDOM.render(
	<PortfolioApp/>, document.getElementById('app'));
