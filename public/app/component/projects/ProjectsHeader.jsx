import React from 'react';
import jQuery from 'jquery';
import $ from 'jquery';

import ProjectsHeaderLinks from "./ProjectsHeaderLinks.jsx";

require('../../../stylesheets/component/projects/ProjectsHeaderLinks.scss');

export default class ProjectsHeader extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			hidden: this.props.parentToChild,
			class: "not-sticky-div",
			class2: "hidden-span",
			class3: "projects-quote-hidden",
			class4: "project-title-hidden",
			class5: "header"
		}		
	}

	componentDidMount() {
		this.scrollTop();
		this.sendToParent();
	}




  componentWillUnmount(){
		$(window).unbind("scroll");
	}


		scrollTop(){
			let that = this;
			let head = $(".header");
			let stick = "sticky";
			let projHead = document.getElementById("projHead");
		$(window).scroll(function() {
			$(window).scrollTop() > 400
				? head.addClass(stick)
				: head.removeClass(stick);
			let newValue = projHead.classList.value.split(' ', 2);
			for (var i = 0; i < newValue.length; i++) {
				newValue[i] === "sticky"
					? that.setState({hidden: true, class: "sticky-div", class2: "visible-span", class3: "projects-quote", class4: "projects-title"})
					: null
			}
		})
	}

	sendToParent(){
		console.log(this.state.class);
		let newStateFromHeader = this.state.hidden;
		this.setState({sizechange: newStateFromHeader});
		this.props.cbChildToParent(newStateFromHeader);
		console.log(newStateFromHeader);
	}

	render() {
		return (
			<div id="projHead" className={this.state.class5}>
				<div className={this.state.class}>
				{this.state.class === "not-sticky-div"
					? <div>"I love to code" --Lonnie McGill</div>
					: null
				}
				</div>
				<div className={this.state.class3}>
					<div className={this.state.class4}>This is my project page, go ahead and look around.</div>
				</div>
				{this.state.class === "sticky-div"
					? <ProjectsHeaderLinks />
					: null
				}
			</div>
		)
	}
}
