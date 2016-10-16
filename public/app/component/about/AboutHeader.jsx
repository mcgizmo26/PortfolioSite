import React from 'react';

require('../../../stylesheets/component/about/AboutHeader.scss');

export default class AboutHeader extends React.Component {

	constructor() {
		super()
		this.timeDelay = this.timeDelay.bind(this);
		this.state = {
			class: "about-header-wrapper-hidden"
		}
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
		return (
			<section>
				<div className={this.state.class}>
					<h1>"My About Page" -Lonnie McGill</h1>
				</div>
			</section>
		)
	}
}
