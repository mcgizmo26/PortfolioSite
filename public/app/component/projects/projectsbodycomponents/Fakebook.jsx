import React from 'react';

export default class Fakebook extends React.Component {
	render() {
		return (
			<section className="actual-project-wrapper">

				<div className="actual-project-top-container">

					<div className="project-wrapper-left-side">
						<div className="fakebook-image"></div>
					</div>

					<div className="project-wrapper-right-side">
						<div className="project-title">Fakebook App:</div>
						<div className="about-project-text">
							This was my group project. We recreated the Facebook app in React.js Node.js and PostgreSql. Most of the functionality is present.
              If we didn't have time to add something we at least implemented the styles including hover effects.
						</div>
					</div>

				</div>

				<div className="actual-project-bottom-container">

						<div>Click here to see the code: &nbsp;
							<a href={`https://github.com/FakebookClone/Fakebook`}>Fakebook Github Repository</a>
						</div>
						<div>Click here to see the project: &nbsp;
							<a href={`http://www.fakebook.host/`}>Fakebook App</a>
						</div>

				</div>

			</section>

		)
	}
}
