import React from 'react';
import jQuery from 'jquery';
import $ from 'jquery';

export default class ProjectsHeader extends React.Component {

	constructor() {
		super()
	}

	componentDidMount() {

		let head = $(".header");
		let stick = "sticky";
		let projHead = document.getElementById("projHead");
		let notStickyDiv = document.getElementsByClassName('not-sticky-div');

		$(window).scroll(function() {
			$(window).scrollTop() > 400
				? head.addClass(stick)
				: head.removeClass(stick);
				let newValue = projHead.classList.value.split(' ', 2);
				for(var i = 0; i < newValue.length; i++){
					newValue[i] === "sticky"
					? console.log('worked')
					: null;
				}
		})

  }

	render() {
		return (
			<div id="projHead" className="header">
				<div className="not-sticky-div">
					<div>"This is My Projects Page" --Lonnie McGill</div>
				</div>
				<div className="hidden-span">
					<span>Something1</span>
					<span>Something2</span>
					<span>Something3</span>
				</div>
			</div>
		)
	}
}
