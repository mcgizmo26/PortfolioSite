import React from 'react';
import {Link} from 'react-router';

export default class ProjectsHeaderLinks extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<section className="projects-header-links-container">
				<div className="projects-header-links">
					<Link className="projects-to-home" to='/'>Home</Link>
					<Link className="projects-to-contact" to='/contact'>Contact</Link>
					<Link className="projects-to-about" to="/about">About</Link>
				</div>
			</section>
		)
	}
}
