// ***** React ***** //
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => (
  <div>
    <div className="about">
      <div className="about__photo">
        <img src="./images/profile.jpg" alt="Marcel" />
      </div>

      <div className="about__info">
        <h1 className="about__h1">Marcel Cruz</h1>
        <h2 className="about__h2">Web Developer</h2>
        <h3 className="about__h3">This app was created with:</h3>
        <ul className="about__ul">
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Sass</li>
          <li>Flickr API</li>
        </ul>
      </div>
    </div>
    <Link to="/">
      <div className="button__close" />
    </Link>
  </div>
)

export default About
