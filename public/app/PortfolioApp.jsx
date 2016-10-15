import React from 'react';
import ReactDOM from 'react-dom';

import PortfolioHomePage from './component/HomePage.jsx';

class PortfolioApp extends React.Component{
  constructor(){
    super()
  }

  render() {
    return (
      <div>
        <PortfolioHomePage />
      </div>
    )
  }
}

ReactDOM.render(<PortfolioApp />, document.getElementById('app'));
