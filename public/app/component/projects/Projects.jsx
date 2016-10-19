import React from 'react';

import ProjectsHeader from './ProjectsHeader.jsx';

export default class Projects extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<section className="projects-background"></section>

				<ProjectsHeader/>
				<div className="demo-space"></div>

			</div>
		)
	}
}
