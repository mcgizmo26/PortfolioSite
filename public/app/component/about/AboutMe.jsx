import React from 'react';
import { Link } from 'react-router';

import AboutMeHeader from "./aboutmecomponents/AboutMeHeader.jsx";
import AboutMeText from "./aboutmecomponents/AboutMeText.jsx";
import Skills from './aboutmecomponents/Skills.jsx';
import PersonalFacts from './aboutmecomponents/PersonalFacts.jsx';

require('../../../stylesheets/component/about/AboutMe.scss');

export default class AboutMe extends React.Component{

  constructor(props){
    super(props)

    {console.log(this.props.props.children)}
  }

  render(){
    return(
      <section className="about-me-wrapper">
        <div className="pic-box"></div>
        <div className="about-me-content-box">
          <div className="about-me-text-area">
            <AboutMeHeader />
            {this.props.props.children === null
            ? <AboutMeText />
            : this.props.props.children
          }
            <section className="about-me-footer-wrapper">
              <Link className="about-me-home" to='/about'>About Me</Link>
      				<Link className="skills-link" to='/skills'>Skills</Link>
      				<Link className="personal-link" to='/personalfacts'>Personal Facts</Link>
      			</section>
          </div>
        </div>
      </section>
    )
  }
}
