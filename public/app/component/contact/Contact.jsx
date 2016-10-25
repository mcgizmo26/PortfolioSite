import React from 'react';

import ContactBackground from './ContactBackground.jsx';
import ContactForeground from './ContactForeground.jsx';


require('../../../stylesheets/component/contact/ContactForeground.scss');
require('../../../stylesheets/component/contact/ContactBackground.scss');

export default class Contact extends React.Component {

	constructor() {
		super()
	}

	render() {
		return (
			<section className="contact-container">
      <ContactBackground />
      <ContactForeground />
			</section>
		)
	}
}
