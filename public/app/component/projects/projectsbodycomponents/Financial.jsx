import React from 'react';

export default class Financial extends React.Component {
	render() {
		return (
			<section className="actual-project-wrapper">

				<div className="actual-project-top-container">

					<div className="project-wrapper-left-side">
						<div className="financial-image"></div>
					</div>

					<div className="project-wrapper-right-side">
						<div className="project-title">Financial App:</div>
						<div className="about-project-text">
							The Financial App uses Angular.js, Node.js, and MongoDB on the backend. Everything up until the user signs in is designed for
              mobile devices and tablets. The app is simple. The client/user fills out a financial application form. The user is then able
              to see their information sent back from the server when he/she signs in. To simplify things I did not implement 'roles'. So feel
              free to sign in as a potential underwriter and play around. Do not use real information.
						</div>
					</div>

				</div>

				<div className="actual-project-bottom-container">

						<div>Click here to see the code: &nbsp;
							<a href={`https://github.com/mcgizmo26/Financialapp`}>Financialapp Github Repository</a>
						</div>
						<div>Click here to see the project: &nbsp;
							<a href={`http://138.68.43.253/#/`}>Financial App</a>
						</div>

				</div>

			</section>

		)
	}
}
