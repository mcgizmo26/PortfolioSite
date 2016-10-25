import React from 'react';

import ContactLinks from './contactcomponents/ContactLinks.jsx';
import ContactBottomContainer from './contactcomponents/ContactBottomContainer.jsx';

require('../../../stylesheets/component/contact/ContactUpperContainer.scss');

export default class ContactForeground extends React.Component{

  constructor(props){
    super(props)
    this.state={
      clicked: this.props.clicked
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }


  render(){
    return(
      <div className="contact-foreground">

        <ContactLinks />

        <div className="upper-contacts-container">
          <div>Click
            <div onClick={this.handleOnClick}>color mode</div>
            Here</div>
        </div>

        <div className="middle-contacts-container">
          <div>
            "Feel free to contact me. I'm reachable on several social media platforms" --Lonnie McGill
          </div>
        </div>

        <ContactBottomContainer clicked={this.state.clicked}/>

      </div>
    )
  }

  handleOnClick(event){
    this.setState({
      clicked: "true"
    })
  }

  componentDidUpdate(prevProps, prevState){
    prevState.clicked !== this.state.clicked
    ? this.sendToContact()
    : null
  }

  sendToContact(){
    let clickedStateChange = this.state.clicked;
    this.props.cbClickedChange(clickedStateChange);
  }
}
