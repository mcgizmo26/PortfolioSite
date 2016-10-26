import React from 'react';
import {Link, browserHistory} from 'react-router';

require("../../../stylesheets/component/Menu.scss");

export default class Menu extends React.Component {
	constructor() {
		super()
		this.handleClick = this.handleClick.bind(this);
    this.state = {
      modalVisible: false,
      class: "menu-box-hidden",
			class1: "icon"
    }

	}

	render() {
		return (
			<section className="menu-wrapper">
				<div className="menu-container">
					<div className={this.state.class1} onClick={this.handleClick}></div>
          <div className={this.state.class}>
            {this.state.modalVisible ? <div>
            <Link className="menu-about-link" to='/About'>
            <ul>About</ul>
            </Link>
            <Link className="menu-projects-link" to='/Projects'>Projects</Link>
            <Link className="menu-contact-link">Contact Info</Link>
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
        class: "menu-box",
				class1: "icon-clicked"
      })
    } else if(this.state.class === "menu-box") {
      this.setState({
        modalVisible: false,
        class: "menu-box-hidden",
				class1: "icon"
      })
    }
	}
}
