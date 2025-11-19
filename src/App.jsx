import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { MissionVision, Services, Initiatives, Impact, Partnerships, CaseStudies, Team, ContactCTA } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <MissionVision />
        <Services />
        <Initiatives />
        <Impact />
        <Partnerships />
        <CaseStudies />
        <Team />
        <ContactCTA />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500 bg-white border-t">
        © {new Date().getFullYear()} AWJ. All rights reserved.
      </footer>
    </div>
  )
}

export default App
