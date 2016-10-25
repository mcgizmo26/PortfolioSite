import React from 'react';

export default class Calculator extends React.Component {
	render() {
		return (
			<section className="actual-project-wrapper">

				<div className="actual-project-top-container">

					<div className="project-wrapper-left-side">
						<div className="calculator-image"></div>
					</div>

					<div className="project-wrapper-right-side">
						<div className="project-title">Calculator App:</div>
						<div className="about-project-text">
							The Calculator is a simple React App just to demonstrate a basic understanding of React.js.
						</div>
					</div>

				</div>

				<div className="actual-project-bottom-container">

						<div>Click here to see the code: &nbsp;
							<a href={`https://github.com/mcgizmo26/react_calculator`}>Calculator Github Repository</a>
						</div>

				</div>

			</section>

		)
	}
}
