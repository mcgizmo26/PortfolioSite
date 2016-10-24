import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom'
import {IndexRoute} from 'react-router';
import {Router, Route, browserHistory, Link} from 'react-router';

import About from './component/about/About.jsx';
import AboutMeText from './component/about/aboutmecomponents/AboutMeText.jsx';
import Calculator from './component/projects/projectsbodycomponents/Calculator.jsx';
import Contact from './component/contact/Contact.jsx';
import Ecommerce from './component/projects/projectsbodycomponents/Ecommerce.jsx';
import Fakebook from './component/projects/projectsbodycomponents/Fakebook.jsx';
import Financial from './component/projects/projectsbodycomponents/Financial.jsx';
import PersonalFacts from './component/about/aboutmecomponents/PersonalFacts.jsx';
import Portfolio from './component/projects/projectsbodycomponents/Portfolio.jsx';
import PortfolioHomePage from './component/home/HomePage.jsx';
import Projects from './component/projects/Projects.jsx';
import Skills from './component/about/aboutmecomponents/Skills.jsx';

require('../stylesheets/component/about/About.scss');
require('../stylesheets/component/about/AboutMe.scss');
require('../stylesheets/component/about/Skills.scss');
require('../stylesheets/component/about/PersonalFacts.scss');

require('../stylesheets/component/projects/Projects.scss');

require('../stylesheets/component/contact/Contact.scss');

class PortfolioApp extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={PortfolioHomePage}/>
				<Route path="/about" component={About}>
					<Route path="/about/skills" component={Skills}/>
					<Route path="/about/personalfacts" component={PersonalFacts}/>
				</Route>
				<Route path="/projects" component={Projects}>
					<Route path="/projects/ecommerce" component={Ecommerce}/>
					<Route path="/projects/financial" component={Financial}/>
					<Route path="/projects/portfolio" component={Portfolio}/>
					<Route path="/projects/fakebook" component={Fakebook}/>
					<Route path="/projects/calculator" component={Calculator}/>
				</Route>

				<Route path="/contact" component={Contact}/>
			</Router>
		)
	}
}

ReactDOM.render(
	<PortfolioApp/>, document.getElementById('app'));
