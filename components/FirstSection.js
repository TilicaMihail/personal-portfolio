import React from 'react'
import { classes } from '../utils/classes'
import Header from './Header'
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

const FirstSection = () => {

    return (
        <>
        <Header />
        <div className={'text-gray-100 flex items-center justify-center min-h-screen bg-gray-900 relative text-white bbg-[url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80")]'}>    
            {/* <div className = 'absolute top-0 left-0'>
                <div className = 'h-96 w-96 bg-gray-800'>

                </div>
            </div>  */}
            <div className = 'p-10 flex-wrap flex items-center justify-around flex-col sm:flex-row w-full' >
                <ScrollAnimation animateIn="fadeInLeft" duration = {2} animateOnce = {true} >
                    <div className = 'max-w-xl md:mb-2 mb-10'>
                        <div className = 'text-gray-400'>
                            Hi, I am
                        </div>
                        <div className = 'text-6xl pb-1 font-ubuntu text-orange-300 font-bold'>
                            Tilica Mihail
                        </div>
                        <div className = 'text-4xl pb-1 font-ubuntu text-gray-300'>
                            Fullstack Developer and Designer
                        </div>
                        <div className = ' text-gray-400 text-sm'>
                        I love building websites and web applications, and I am always looking to learn and stay up-to-date on the latest technologies and best practices. Feel free to take a look at my portfolio to see some of my past work and don't hesitate to reach out if you have any questions or want to work together on a project.
                        </div>
                        <button className = ' mt-5 p-3  border rounded text-white border hover-button text-sm'>
                            My CV
                        </button>
                        <Link href='mailto:mihailtilica1@gmail.com'>
                            <button className = ' mt-5 ml-4 p-3 border rounded text-orange-300 border-orange-300 hover-button text-sm'>
                                Get in touch
                            </button>  
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration = {6} animateOnce = {true} >
                    <div><img src = '/mthethird_web_developer_coding_illustration_cafdc54e-2dfa-4e9c-b56f-1a64d26f84d2_prev_ui.png' alt = '' /></div>
                </ScrollAnimation>
            </div>
        </div>
        </>
    )
}

export default FirstSection