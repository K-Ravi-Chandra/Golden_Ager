import React from 'react'
import About from './components/About'
import Navigation from './components/Navigation'
import Team from './components/Team'
import Contact from './components/Contact'
import Hero from './components/Hero'

// Landing Page function
export default function LandingPage() 
{
    return (
        <>
            <Navigation/>
            <Hero/>
            <About/>
            <Team/>
            <Contact/>
        </>
    )
}
