import React from 'react';

import ContactLinks from './contactcomponents/ContactLinks.jsx';
import BottomContactsContainer from './contactcomponents/BottomContactsContainer.jsx';

export default class ContactForeground extends React.Component{

  constructor(){
    super()
  }

  render(){
    return(
      <div className="contact-foreground">

        <ContactLinks />

        <div className="upper-contacts-container">
          <div>Click
            <div>color mode</div>
            Here</div>
        </div>

        <div className="middle-contacts-container">
          <div>
            "Feel free to contact me. I'm reachable on several social media platforms" --Lonnie McGill
          </div>
        </div>

        <BottomContactsContainer />

      </div>
    )
  }
}
