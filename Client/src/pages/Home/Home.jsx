import React from 'react'
import { Element } from 'react-scroll/modules'
import Hero from './components/Hero'

function Home() {
  return (
    <Element id='home' className=' px-5 bg-slate-800'>
    <div className='min-h-screen'>
      <Hero/>
    </div>

    </Element>
  )
}

export default Home
