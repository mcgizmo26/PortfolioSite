import React from 'react';

export default class BottomContactsContainer extends React.Component{

  constructor(){
    super()
  }

  render(){
    return(
      <div className="bottom-contacts-conatiner">

        <div className="twitter-container">
          <div className="twitter-text">
            Follow me on &nbsp;
            <div></div>
            &nbsp;@26Mcgizmo
          </div>
        </div>

        <div className="linkedin-container">
          <div className="linkedin-text">I'm also on
            <div></div>
            so link with Lonnie McGill</div>
        </div>

        <div className="email-container">
          <div className="twitter-text">If you'd like to e-mail me. I'm on &nbsp;<div></div>&nbsp; It's mcgizmo_26@yahoo.com
          </div>
        </div>

      </div>
    )
  }
}
