import React from 'react';

import ProjectsHeader from './ProjectsHeader.jsx';
import ProjectsBody from './ProjectsBody.jsx';

export default class Projects extends React.Component {
	constructor() {
		super()
		this.state = {
      header: "default"
    }
		this.headerChange = this.headerChange.bind(this);
	}

	componentDidMount(){
		this.headerChange();
	}

		headerChange(newStateToHeader)  {
			newStateToHeader !== undefined
			? this.setState({ header: newStateToHeader })
			: null
		}

	render() {
		return (
			<div>

				<section className="projects-background"></section>
				{console.log(this.state.header)}
				<ProjectsHeader state={this.state.header}/>
				<ProjectsBody route={this.props} parentToChild={this.state.header} cbChildToParent={this.headerChange}/>

			</div>
		)
	}
}
