import axios from 'axios'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'

const Footer = () => {

    return (     
        <div className = 'flex flex-col items-center mt-20 p-10 text-white bg-gray-700 rounded-md bg-opacity-20 p-20'>
            <ScrollAnimation animateIn="fadeIn" duration = {2} animateOnce = {true} >
                <div className = 'text-3xl md:text-5xl font-bold text-center'>
                    Interested in collaborating for a project?
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration = {2} animateOnce = {true} >
                <div className = 'p-2 text-lg text-center'>
                    I&apos;m always open to discussing new opportunities. Send me your thoughts and we&apos;ll take it from there.
                </div>
                </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration = {2} animateOnce = {true} >
                <Link href = 'mailto:mihailtilica1@gmail.com'>
                    <button className = ' mt-12 p-5 text-xl font-bold border-2 rounded text-orange-300 border-orange-300 hover-button text-sm'>
                        Start a project together
                    </button>  
                </Link>
            </ScrollAnimation>
        </div>
    )
}

export default Footer