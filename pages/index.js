import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import AboutSection from '../components/AboutSection'
import CodingChallengesSection from '../components/CodingChallengesSection'
import FirstSection from '../components/FirstSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'

export default function Home() {
    useEffect(() => {
        const scrollToTop = () =>{
            window.scrollTo({
              top: 0, 
              behavior: 'smooth'
            });
        };
        scrollToTop()
    }, [])

    return (
        <div className = 'bg-gray-900 relative'>
            <FirstSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <CodingChallengesSection />
            <Footer />
        </div>
    )
}
