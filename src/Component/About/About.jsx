import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>

      <div className="about-title">
        <h1>About</h1>
        <hr />
      </div>
      {/* --------- */}
      <div className="about-body">

        <p className='about-desc'>
            Since I was young, I've been interested in programming and web development. I decided to pursue my passion and enrolled in training courses to learn front-end development.<span>I'm now a front-end developer</span>. I'm always working on improving my skills and learning new technologies in this field. Finding a solution to a problem brings me joy. <span> My core stack is React</span>
        </p>

      </div>

    </div>
  )
}

export default About