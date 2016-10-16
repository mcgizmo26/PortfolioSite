import React from 'react';
import {Link, browserHistory} from 'react-router';

require("../../stylesheets/component/Menu.scss");

export default class Menu extends React.Component {
	constructor() {
		super()
		this.handleClick = this.handleClick.bind(this);
    this.state = {
      modalVisible: false,
      class: "menu-box-hidden"
    }

	}

	render() {
		return (
			<section className="menu-wrapper">
				<div className="menu-container">
					<div className="icon" onClick={this.handleClick}></div>
          <div className={this.state.class}>
            {this.state.modalVisible ? <div>
            <Link className="about-link" to='/About'>
            <ul>About</ul>
            </Link>
            <Link className="projects-link">Projects</Link>
            <Link className="contact-link">Contact Info</Link>
            </div> : null}
          </div>
				</div>
			</section>
		)
	}

	handleClick(event) {
    if(this.state.class === "menu-box-hidden"){
      this.setState({
        modalVisible: true,
        class: "menu-box"
      })
    } else if(this.state.class === "menu-box") {
      this.setState({
        modalVisible: false,
        class: "menu-box-hidden"
      })
    }
	}
}
