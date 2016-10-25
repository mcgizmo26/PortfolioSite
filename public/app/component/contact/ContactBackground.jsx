import React from 'react';

export default class ContactBackground extends React.Component{

  constructor(){
    super()
  }

  render(){
    return(

      <div className="absolute-contact-background">

        <div className="upper-background-container">
          <div className="colored-square-wrapper">
            <div className="blue-background-square"></div>
            <div className="blue-background-square"></div>
            <div className="blue-background-square"></div>
          </div>
        </div>

      </div>
    )
  }
}
