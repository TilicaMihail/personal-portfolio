import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import AboutSection from '../components/AboutSection'
import CodingChallengesSection from '../components/CodingChallengesSection'
import FirstSection from '../components/FirstSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'

export default function Home() {
    return (
        <div className = 'bg-gray-900 relative'>
            {/* <div className = 'bg-orange-300 h-96 w-96 absolute z-1 bottom-0 right-0 rounded-l-[200%]  -translate-y-[100px]'>

            </div> */}
            {/* <Header /> */}
            <FirstSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <CodingChallengesSection />
            <Footer />
        </div>
    )
}
