import React from 'react';
import jQuery from 'jquery';
import $ from 'jquery';

import ProjectsHeaderLinks from "./ProjectsHeaderLinks.jsx";

require('../../../stylesheets/component/projects/ProjectsHeaderLinks.scss');

export default class ProjectsHeader extends React.Component {

	constructor() {
		super()
		this.state = {
			class: "not-sticky-div",
			class2: "hidden-span",
			class3: "projects-quote-hidden",
			class4: "project-title-hidden",
			class5: "header"
		}
	}

	componentDidMount() {
		this.scrollTop();
	}

		scrollTop(){
			let that = this;
			let head = $(".header");
			let stick = "sticky";
			let sw = 400;
			let projHead = document.getElementById("projHead");
			if ($(window).width() > 1601) {
         sw = 400;
			 } else if ($(window).width() <= 1200){
         sw = 250;
       } else if ($(window).width() <= 1600){
				 sw = 300;
			 }
		$(window).scroll(function() {
			$(window).scrollTop() > sw
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


	render() {

		return (
			<div id="projHead" className={this.state.class5}>

				<div className={this.state.class}>
				{this.state.class === "not-sticky-div"
					? <div>"I love to code" --Lonnie McGill</div>
					: null
				}
				</div>

				{this.props.state === "default"
			   ?<div className={this.state.class3}>
            <div className={this.state.class4}>This is my project page, go ahead and look around.</div>
					</div>
         : <div className={this.state.class3}>
					  {this.props.state === "angular"
						  ? <div className={this.state.class4}>These are my Angular.js projects.</div>
						  :<div className={this.state.class4}>These are my React.js projects.</div>
						}
						</div>
				 }


				{this.state.class === "sticky-div"
					? <ProjectsHeaderLinks />
					: null
				}
			</div>
		)
	}

	componentWillUnmount(){
		$(window).unbind("scroll");
	}
}
