import React from 'react';
import ReactDOM from 'react-dom';

import Menu from "./Menu.jsx";
import QuoteBox from "./QuoteBox.jsx";

require('../../../stylesheets/component/HomePage.scss');

export default class PortfolioHomePage extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div className="home-page-wrapper">
        <Menu />
        <QuoteBox />
      </div>
    )
  }
}
