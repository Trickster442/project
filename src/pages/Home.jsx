import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../Home/Hero/Hero'
import Featured from '../Home/Featured/Featured.jsx'
import WhyUs from '../Home/WhyUs/WhyUs.jsx'


export default function Home(){
  return (
    <>
    <Navbar/>
    <Hero/>
    <Featured/>
    <WhyUs/>
    </>
    
  )
}
