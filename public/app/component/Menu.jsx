import React from 'react';

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
            <div id="about-link">About</div>
            <div id="projects-link">Projects</div>
            <div id="contact-link">Contact Info</div>
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
