import React from 'react'
import Banner from './Banner'
import About from './About'
import Education from './Education'
import Skill from './Skill'
import Contact from './Contact'
import Project from './Project'

export default function Profile() {
  return (
    <>
        <Banner/>
        <About/>
        <Education/>
        <Skill/>
        <Project/>
        <Contact/>
    </>
  )
}
