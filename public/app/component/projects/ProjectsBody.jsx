import React from 'react';

import AngularGroup from './projectsbodycomponents/AngularGroup.jsx';
import ReactGroup from './projectsbodycomponents/ReactGroup.jsx';

require('../../../stylesheets/component/projects/ProjectsBody.scss');
require('../../../stylesheets/component/projects/ProjectsStyles.scss');

export default class ReactBody extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
      header: this.props.parentToChild,
			rb: "react-body-container",
			projectgroup: "angular",
      textstate: "default"
		}
		this.bodyChange = this.bodyChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRouteChange = this.handleRouteChange.bind(this);
    this.triggerSticky = this.triggerSticky.bind(this);
	}

  componentDidMount() {
    window.addEventListener('scroll', this.triggerSticky);
    this.bodyChange();
  }

  triggerSticky() {
    let sbw = 400;
    if (window.screen.width > 1601){
      sbw = 400;
    } else if (window.screen.width <= 1200){
      sbw = 250;
    } else if (window.screen.width <= 1600){
      sbw = 300;
    }
    window.pageYOffset > sbw
      ? this.setState({rb: "react-body-container-sticky"})
      : null
  }

  bodyChange(textStateToBody)  {
    this.setState({ header: textStateToBody});
  }

	render() {
		return (
			<div id="rbc" className="react-body-wrapper">

				<div className={this.state.rb}>

					<div className="links-to-projects-groups">
						<button type="button" value="angular" onClick={this.handleClick} className="angular-js">Angular.js</button>
						<button type="button" value="react" onClick={this.handleClick} className="react-js">React.js</button>
					</div>

					<div className="project-text-and-links-container">
						<div className="project-text">

              {this.state.textstate === 'default'
              ? <div className="instructions">Click on the 2 links above to toggle between Angular.js and React.js projects. Use the links on the right to access a specific project.</div>
              : this.props.route.children
              }

            </div>

						<div onClick={this.handleRouteChange} className="project-group-routes">
							{this.state.projectgroup === "angular"
								? <AngularGroup />
								: <ReactGroup />
               }
						</div>

					</div>
				</div>

			</div>
		)
	}

  handleRouteChange(){
    this.state.textstate === "default" || "angular"
    ? this.setState({header: this.state.projectgroup, textstate: "angular"})
    : this.setState({textstate: "react"})
  }

  handleClick(event){
    this.setState({
      header: event.target.value,
      projectgroup: event.target.value
    })
  }

  componentDidUpdate(prevProps, prevState){
    prevState.header !== this.state.header
    ? this.sendToParent()
    : null
  }

  sendToParent(){
    let newStateToHeader = this.state.header;
    this.setState({header: newStateToHeader});
    this.props.cbChildToParent(newStateToHeader);
  }
}
