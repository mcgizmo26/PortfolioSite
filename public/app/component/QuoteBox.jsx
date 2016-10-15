import React from 'react';

require("../../stylesheets/component/QuoteBox.scss");

export default class QuoteBox extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="text-box">
				<div className="text">
					<div>"I have a passion for programming. I see coding as Art and love creating things. Thank you for visiting my Portfolio Site"</div>
					<div className="author">-Lonnie McGill</div>
				</div>
			</div>
		)
	}
}
