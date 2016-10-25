import React from 'react';
import {Link} from 'react-router';

export default class ContactLinks extends React.Component{

  render(){
    return(
      <div className="contact-link-wrapper">
        <Link to='/' className="home-contact-link">Home</Link>
        <Link to='/about' className="about-contact-link">About</Link>
        <Link to='/projects' className="projects-contact-link">Projects</Link>
      </div>
    )
  }
}
