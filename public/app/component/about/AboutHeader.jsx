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
			class2: "lower-about-header-container-hidden"
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
			<section className={this.state.class}>

				<section className="upper-about-header-container">
					<span className="header-left-block">
						<h1>"My About Page" -Lonnie McGill</h1>
					</span>
					<span className="header-right-block">
						<div className="about-menu-header-button" onClick={this.handleClick}>
							<div className="button-piece">
								<div></div>
							</div>
							<div className="button-piece">
								<div></div>
							</div>
							<div className="button-piece">
								<div></div>
							</div>
						</div>
					</span>
				</section>

				<section className={this.state.class2}>
					<span>
						<div>
							<Link className="from-about-to-home-link" to='/'>Home</Link>
							<Link className="from-about-to-projects-link" to='/projects'>Projects</Link>
							<Link className="from-about-to-contact-link" to='/contact'>Contact Info</Link>
						</div>
					</span>
				</section>

			</section>

		)
	}

	handleClick(event) {
		this.state.class2 === "lower-about-header-container-hidden"
			? this.setState({class2: "lower-about-header-container"})
			: this.setState({class2: "lower-about-header-container-hidden"})
	}
}
