import React from 'react';

export default class Ecommerce extends React.Component {
	render() {
		return (
			<section className="actual-project-wrapper">

				<div className="actual-project-top-container">

					<div className="project-wrapper-left-side">
						<div className="ecommerce-image"></div>
					</div>

					<div className="project-wrapper-right-side">
						<div className="project-title">E-commerce App:</div>
						<div className="about-project-text">
							This is a simple web application using Angular.js, Node.js, and PostgreSql. I used several custom directives in order to stream line the code. I also implemented passport in order to hash the users password. The cart is actually stored into local storage and then when the user signs in the cart is then pushed to the backend.
						</div>
					</div>

				</div>

				<div className="actual-project-bottom-container">

						<div>Click here to see the code: &nbsp;
							<a href={`https://github.com/mcgizmo26/Ecommerce-Site`}>Ecommmerce Github Repository</a>
						</div>
						<div>Click here to see the project: &nbsp;
							<a href={`http://138.68.23.129/#/`}>E-commerce App</a>
						</div>

				</div>

			</section>

		)
	}
}
