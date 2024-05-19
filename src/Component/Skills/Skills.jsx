import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className='skills'>
        <div className="skills-title">
            <h1>Skills</h1>
            <hr />
      </div>

      {/* ------body------- */}

      <div className="skills-body">
        <button className='item'>HTML</button>
        <button className='item'>CSS</button>
        <button className='item'>JavaScript</button>
        <button className='item'>Tailwind</button>
        <br />
        <button className='item'>React</button>
        <button className='item'>Framer Motion</button>
        <button className='item'>Gasp</button>
        <button className='item'>SASS</button>
      </div>

    </div>
  )
}

export default Skills