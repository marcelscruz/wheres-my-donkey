// ***** React ***** //
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => (
  <div>
    <div className="about">
      <div className="about__photo__container">
        <img src="./images/profile.jpg" alt="Marcel" className="about__photo" />
      </div>

      <div className="about__info">
        <h1>Marcel Cruz</h1>
        <h2>Web Developer</h2>
        <h3>This app was created with:</h3>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Sass</li>
          <li>Flickr API</li>
        </ul>
      </div>
    </div>
    <Link to="/">
      <div className="x" />
    </Link>
  </div>
)

export default About
