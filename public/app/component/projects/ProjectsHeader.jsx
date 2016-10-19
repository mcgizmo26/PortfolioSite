import React from 'react';
import jQuery from 'jquery';
import $ from 'jquery';

import ProjectsHeaderLinks from "./ProjectsHeaderLinks.jsx";

export default class ProjectsHeader extends React.Component {

	constructor() {
		super()
		this.state = {
			class: "not-sticky-div",
			class2: "hidden-span"
		}
	}

	componentDidMount() {

		let head = $(".header");
		let stick = "sticky";
		let projHead = document.getElementById("projHead");

		var that = this;

		$(window).scroll(function() {
			$(window).scrollTop() > 400
				? head.addClass(stick)
				: head.removeClass(stick);
			let newValue = projHead.classList.value.split(' ', 2);
			for (var i = 0; i < newValue.length; i++) {
				newValue[i] === "sticky"
					? that.setState({class: "sticky-div", class2: "visible-span"})
					: that.setState({class: "not-sticky-div", class2: "hidden-span"});
			}
		})

	}

	render() {
		return (
			<div id="projHead" className="header">
				<div className={this.state.class}>
				{this.state.class === "not-sticky-div"
				  ? <div>"This is My Projects Page" --Lonnie McGill</div>
					: <div> <ProjectsHeaderLinks/> </div>
				}
				</div>
			</div>
		)
	}
}
