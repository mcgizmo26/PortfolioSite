import React from 'react';

import AboutHeader from './AboutHeader.jsx';
import AboutMe from './AboutMe.jsx';

require('../../../stylesheets/component/about/About.scss');

export default class About extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="about-background">
				<AboutHeader/>
				{console.log(this.props)}
				<div className='false-about-background'>
					<AboutMe props={this.props}/>
				</div>
			</div>
		)
	}
}
