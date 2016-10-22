import React from 'react';

export default class PersonalFacts extends React.Component {

	constructor() {
		super()

	}


	render() {
		return (
			<section className={"personal-facts-wrapper"}>
				<div className="facts">Facts:</div>
					<div className="facts-text">I am married and have four children. I enjoy hiking and want to mountaineer some day. I love soccer and am an avid Arsenal and Real Salt Lake supporter. I love gaming and play Destiny, Fifa and Titanfall on the Xbox One. I also love Star Wars and may or may not secretly be a Mandalorian.</div>
			</section>
		)
	}
}
