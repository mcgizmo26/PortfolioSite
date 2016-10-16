import React from 'react';

import AboutHeader from './AboutHeader.jsx';
import AboutMe from './AboutMe.jsx';

require('../../../stylesheets/component/about/About.scss');

export default class About extends React.Component{
  constructor(){
    super()
  }

  render() {
    return(
      <div className="about-background">
        <AboutHeader />
        <AboutMe />
      </div>
    )
  }
}
