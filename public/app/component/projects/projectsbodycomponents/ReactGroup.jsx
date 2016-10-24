import React from "react";
import {Link} from "react-router";

export default class ReactGroup extends React.Component {
	constructor() {
		super()

	}

	render() {
		return (
			<section className="project-groups-section">
				<div className="react-app">
					<div className="react-app-header">
						<div>React Apps</div>
					</div>
					<Link to="/projects/portfolio" className="portfolio-app">Portfolio</Link>
					<Link to="/projects/fakebook" className="fakebook-app">Fakebook</Link>
					<Link to="/projects/calculator" className="calculator-app">Calculator</Link>
				</div>
			</section>
		)
	}
}
