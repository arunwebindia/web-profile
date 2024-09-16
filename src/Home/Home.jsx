import React from 'react'
import Banner from '../components/Banner'
import About from './pages/About'
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