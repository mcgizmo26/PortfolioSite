import React from 'react';

export default class Portfolio extends React.Component {
	render() {
		return (
			<section className="actual-project-wrapper">

				<div className="actual-project-top-container">

					<div className="project-wrapper-left-side">
						<div className="portfolio-image"></div>
					</div>

					<div className="project-wrapper-right-side">
						<div className="project-title">Portfolio Site:</div>
						<div className="about-project-text">
              My Portfolio was built in React.js and Node.js.
						</div>
					</div>

				</div>

				<div className="actual-project-bottom-container">

						<div>Click here to see the code: &nbsp;
							<a href={`https://github.com/mcgizmo26/PortfolioSite`}>Portfolio Github Repository</a>
						</div>

				</div>

			</section>

		)
	}
}
