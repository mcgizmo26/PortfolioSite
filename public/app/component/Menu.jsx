import React from 'react';

require("../../stylesheets/component/Menu.scss");

export default class Menu extends React.Component {
	constructor() {
		super()
		this.handleClick = this.handleClick.bind(this);
    this.state = {
      modalVisible: false
    }

	}

	render() {
		return (
			<section className="menu-wrapper">
				<div className="menu-container">
					<div className="icon" onClick={this.handleClick}></div>
          {this.state.modalVisible === true ? <div className="menu-box"></div> : null}
				</div>
			</section>
		)
	}

	handleClick(event) {
    if(this.state.modalVisible === false){
      this.setState({
        modalVisible: true
      })
    } else {
      this.setState({
        modalVisible: false
      })
    }
	}
}
