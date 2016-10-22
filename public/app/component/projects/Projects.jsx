import React from 'react';

import ProjectsHeader from './ProjectsHeader.jsx';
import ProjectsBody from './projectsbodycomponents/ProjectsBody.jsx';

export default class Projects extends React.Component {
	constructor() {
		super()
		this.state = {
      hidden: "false"
    }
		this.headerChange = this.headerChange.bind(this);
	}


componentDidMount(){
	this.headerChange();
}

	headerChange(newStateFromHeader)  {
		this.setState({ hidden: newStateFromHeader });
		console.log(newStateFromHeader);
	}

	render() {
		return (
			<div>
				<section className="projects-background"></section>
				<ProjectsHeader parentToChild={this.state.hidden} cbChildToParent={this.headerChange} />
				<ProjectsBody />

			</div>
		)
	}
}
