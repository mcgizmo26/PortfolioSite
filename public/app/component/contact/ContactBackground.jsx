import React from 'react';

export default class ContactBackground extends React.Component{

  constructor(props){
    super(props)
    this.state={
      clicked: this.props.clicked,
      bbs: "red-background-square-hidden",
      ybs: "yellow-background-square-hidden",
      gbs: "green-background-square-hidden",
      csw: "colored-square-wrapper"
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(this.props, nextProps);
    this.props !== nextProps
    ? this.triggerSquareToDiamond()
    : null
  }

  triggerSquareToDiamond(){
    setTimeout(function contactShapeUpdate(){
      this.setState({bbs: "red-background-square-1", ybs: "yellow-background-square-1", gbs: "green-background-square-1"})
    }.bind(this), 1000);
    setTimeout(function contactShapeUpdate2(){
      this.setState({bbs: "red-background-square-2", ybs: "yellow-background-square-2", gbs: "green-background-square-2"})
    }.bind(this), 3500);
    setTimeout(function contactShapeUpdate2(){
      this.setState({csw: "colored-square-wrapper-together", bbs: "red-background-square-3", ybs: "yellow-background-square-3", gbs: "green-background-square-3"})
    }.bind(this), 6000);
  }

  render(){
    console.log('CB:', this.props.clicked);
    return(

      <div className="absolute-contact-background">

        <div className={"upper-background-container"}>
          <div className={this.state.csw}>
            <div className={this.state.bbs}></div>
            <div className={this.state.ybs}></div>
            <div className={this.state.gbs}></div>
          </div>
        </div>

      </div>
    )
  }
}
