import React from 'react';

require("../../../../stylesheets/component/about/AboutMe.scss");

export default class AboutMeHeader extends React.Component {

	constructor() {
		super()
	}

	render() {
		return (
			<div className="about-me-header">
				<div>
					<h1>Front End Developer</h1>
				</div>
			</div>
		)
	}
}
