import React from "react";
import {Link} from "react-router";

export default class AngularGroup extends React.Component {
	constructor() {
		super()

	}

	render() {
		return (
			<section className="project-groups-section">
				<div className="angular-apps">
					<div className="angular-app-header">
						<div>Angular Apps</div>
					</div>
					<Link className="ecommerce-app" to="/projects/ecommerce">Ecommerce App</Link>
					<Link className="financial-app" to="/projects/financial">Financial App</Link>
				</div>
			</section>
		)
	}
}
