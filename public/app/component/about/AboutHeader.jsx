import React from 'react';
import {Link} from 'react-router';

require('../../../stylesheets/component/about/AboutHeader.scss');

export default class AboutHeader extends React.Component {

	constructor() {
		super()
		this.timeDelay = this.timeDelay.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			class: "about-header-wrapper-hidden",
			class2: "route-away-hidden"
		}
	}

	componentDidMount() {
		this.timeDelay();

	}


	timeDelay() {
		setTimeout(function updateState() {
			this.setState({class: "about-header-wrapper", class3: "mounted"})
		}.bind(this), 1000);
	}

	render() {
		return (
			<section>
				<div className={this.state.class}>
					<span className="header-left-block"></span>
					<span className="header-mid-block">
						<h1>"My About Page" -Lonnie McGill</h1>
					</span>
					<span className="header-right-block">
						<section className="right-upper-box">
							<div className="about-menu-header-button" onClick={this.handleClick}>

								<span>
									<div></div>
								</span>
								<span>
									<div></div>
								</span>
								<span>
									<div></div>
								</span>
							</div>
						</section>

					 	  <section className={this.state.class2}>
							  <Link className="from-about-to-home-link" to='/'>Home</Link>
							  <Link className="from-about-to-projects-link" to='/projects'>Projects</Link>
							  <Link className="from-about-to-contact-link" to='/contact'>Contact Info</Link>
						  </section>

					</span>

				</div>
			</section>

		)
	}

	handleClick(event) {
		this.state.class2 === "route-away-hidden"
			? this.setState({class2: "route-away"})
			: this.setState({class2: "route-away-hidden"})
	}
}
