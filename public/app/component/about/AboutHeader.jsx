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
		console.log(this.state);
	}

	componentDidMount() {
		console.log("mounted");
		this.timeDelay();
	}

	timeDelay() {
		setTimeout(function updateState() {
			this.setState({class: "about-header-wrapper"})
		}.bind(this), 1000);
		console.log("timeDelay worked");
	}

	render() {
		{
			console.log(this.state)
		}
		return (
			<section>
				<div className={this.state.class}>
					<span></span>
					<span className="header-mid-block">
						<h1>"My About Page" -Lonnie McGill</h1>
					</span>
					<span className="header-right-block">
						<section className="right-upper-box">
							<div className="about-menu-header-button" onClick={this.handleClick}>

								<span>
									<p></p>
								</span>
								<span>
									<p></p>
								</span>
								<span>
									<p></p>
								</span>
							</div>
						</section>

					 	  <section className={this.state.class2}>
							  <Link className="from-about-to-home-link" to='/'>Home</Link>
							  <Link className="from-about-to-projects-link" to='/Projects'>Projects</Link>
							  <Link className="from-about-to-contact-link">Contact Info</Link>
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
