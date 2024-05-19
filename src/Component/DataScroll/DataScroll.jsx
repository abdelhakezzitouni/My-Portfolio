import React from 'react'
import './DataScroll.css'

import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'

function DataScroll() {
  return (
    <div className='DataScroll'>
       <About/>
       <Skills/>
       <Projects/>

       <h3 className='copy-right'>© 2024 <b>Abdelhak Ezzitouni</b>. All rights reserved.</h3>
    </div>
  )
}

export default DataScroll