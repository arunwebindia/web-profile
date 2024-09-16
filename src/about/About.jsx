import React from 'react'
import Education from '../profile/Education'
import Skill from '../profile/Skill'
import Contact from '../profile/Contact'
import Project from '../profile/Project'
import Banner from '../components/Banner'


export default function About(){
  return (
    <>
        <Banner/>
        <Education/>
        <Skill/>
        <Project/>
    </>
  )
}
