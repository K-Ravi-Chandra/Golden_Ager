import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Navigation from './components/Navigation'

export default function LandingPage() {
    return (
        <>
            <Navigation/>
            <Header/>
            <About/>
        </>
    )
}
