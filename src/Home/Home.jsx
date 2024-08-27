import React from 'react'
import Banner from '../profile/Banner'
import About from '../profile/About'
import Contact from '../profile/Contact'
import CurrentProject from './CurrentProject'
import CurrentWorking from './CurrentWorking'


export default function Home() {
  return (
    <>
        <Banner/>
        <About/>
        <CurrentProject/>
        <CurrentWorking/>
        <Contact/>
    </>
  )
}