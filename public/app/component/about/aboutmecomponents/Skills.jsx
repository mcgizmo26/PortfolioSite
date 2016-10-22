import React from 'react';

export default class Skills extends React.Component{

  constructor(){
    super()

  }



  render(){
    return(
      <section className="skills-wrapper">
        <div className="skills">Skills:</div>
        <div className="skills-container">
          <div className="skill-list">Angular.js</div>
          <div className="skill-list">CSS</div>
          <div className="skill-list">Github</div>
          <div className="skill-list">JavaScript</div>
          <div className="skill-list">Jquery</div>
          <div className="skill-list">Node.js</div>
          <div className="skill-list">Mongo</div>
          <div className="skill-list">PostgreSQL</div>
          <div className="skill-list">SASS/SCSS</div>
          <div className="skill-list">React.js</div>
        </div>
      </section>
    )
  }
}
