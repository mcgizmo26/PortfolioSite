import React from 'react';
import {Link} from "react-router";

require('../../../stylesheets/component/contact/Contact.scss');

export default class Contact extends React.Component {

	constructor() {
		super()
	}

	render() {
		return (
			<section className="contact-background">

				<div className="upper-contacts-container">
					<div>
						<Link to='/' className="home-contact-link">Home</Link>
						<Link to='/about' className="about-contact-link">About</Link>
						<Link to='/projects' className="projects-contact-link">Projects</Link>
					</div>
				</div>

			</section>
		)
	}
}
