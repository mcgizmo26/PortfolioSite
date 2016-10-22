import React from 'react';

import AngularGroup from './AngularGroup.jsx';
import ReactGroup from './ReactGroup.jsx';

require('../../../../stylesheets/component/projects/ProjectsBody.scss');

export default class ReactBody extends React.Component {

	constructor() {
		super()
		this.state = {
			rb: "react-body-container",
			projectgroup: "angular"
		}
		this.triggerSticky = this.triggerSticky.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.triggerSticky);
	}

	triggerSticky() {
		window.pageYOffset > 400
			? this.setState({rb: "react-body-container-sticky"})
			: null
	}

	render() {
		return (
			<section id="rbc" className="react-body-wrapper">

				<div className={this.state.rb}>

					<div className="links-to-projects-groups">
						<div className="angular-js">Angular.js</div>
						<div className="react-js">React.js</div>
					</div>

					<div className="project-text-and-links-container">
						<div className="project-text"></div>

						<div className="project-group-routes">
							{this.state.projectgroup === "angular"
								? <AngularGroup />
								: <ReactGroup />
               }
						</div>

					</div>
				</div>

			</section>
		)
	}
}
