import React from 'react';

import AboutHeader from './AboutHeader.jsx';
import AboutMe from './AboutMe.jsx';

export default class About extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="about-background">
				<div className="about-upper">
					<AboutHeader/>
				</div>
				<div className='about-lower'>
					<AboutMe props={this.props}/>
				</div>
			</div>
		)
	}
}
