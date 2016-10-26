import React from 'react';

export default class ContactBottomContainer extends React.Component{

  constructor(props){
    super(props)
    this.state={
      cbl: "colored-background-left",
      cbr: "colored-background-right"
    }
    this.triggerBackgroundChange = this.triggerBackgroundChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
    console.log(this.props, nextProps);
    this.props !== nextProps
    ? this.triggerBackgroundChange()
    : null
  }

  triggerBackgroundChange(){
    setTimeout(function contactStateUpdate(){
      this.setState({cbl: "colored-background-left-change", cbr: "colored-background-right-change"})
    }.bind(this), 1000);
  }

  render(){
    console.log('CBC:', this.props.clicked);
    return(
      <div className="bottom-contacts-conatiner">

        <div className={this.state.cbl}></div>
        <div className={this.state.cbr}></div>

        <div className="twitter-container">
          <div className="twitter-text">
            Follow me on &nbsp;
            <div></div>
            &nbsp;@26Mcgizmo
          </div>
        </div>

        <div className="linkedin-container">
          <div className="linkedin-text">I'm also on &nbsp;
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
