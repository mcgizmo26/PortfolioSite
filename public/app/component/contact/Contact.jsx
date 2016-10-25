import React from 'react';

import ContactBackground from './ContactBackground.jsx';
import ContactForeground from './ContactForeground.jsx';


require('../../../stylesheets/component/contact/ContactBackground.scss');
require('../../../stylesheets/component/contact/ContactForeground.scss');
require('../../../stylesheets/component/contact/ContactLinks.scss');
require('../../../stylesheets/component/contact/ContactUpperContainer.scss');

export default class Contact extends React.Component {

	constructor() {
		super()
    this.state={
      clicked: "false"
    }
    this.changeOnClick = this.changeOnClick.bind(this);
	}

  changeOnClick(clickedStateChange){
    clickedStateChange !== 'false'
    ? this.setState({ clicked: clickedStateChange })
    : null
  }

	render() {
      console.log('Clicked:', this.state.clicked);
		return (
			<section className="contact-container">
      <ContactBackground clicked={this.state.clicked}/>
      <ContactForeground clicked={this.state.clicked} cbClickedChange={this.changeOnClick}/>
			</section>
		)
	}
}
