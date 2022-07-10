import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/AboutSection'
import CodingChallengesSection from '../components/CodingChallengesSection'
import FirstSection from '../components/FirstSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'

export default function Home() {
    return (
        <div className = ''>
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
