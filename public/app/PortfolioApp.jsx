import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link, hashHistory } from 'react-router';

import PortfolioHomePage from './component/HomePage.jsx';
import About from './component/About.jsx';

class PortfolioApp extends React.Component{
  constructor(){
    super()
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={PortfolioHomePage} />
        <Route path="/about" component={About} />
      </Router>
    )
  }
}

ReactDOM.render(<PortfolioApp />, document.getElementById('app'));
