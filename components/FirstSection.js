import React from 'react'
import { classes } from '../utils/classes'
import Header from './Header'
import ScrollAnimation from 'react-animate-on-scroll';

const FirstSection = () => {
    return (
        <>
        <Header />
        <div className={'text-gray-100 flex items-center justify-center min-h-160 min-h-screen h-screen bg-gray-900 relative text-white bbg-[url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80")]'}>    
            {/* <div className = 'absolute top-0 left-0'>
                <div className = 'h-96 w-96 bg-gray-800'>

                </div>
            </div>  */}
            <div className = 'p-10 flex-wrap flex items-center justify-around flex-col sm:flex-row w-full' >
                <ScrollAnimation animateIn="fadeInLeft" duration = {2} animateOnce = {true}>
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
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque reiciendis velit nulla quaerat necessitatibus minus adipisci maiores sit ipsa vitae vero distinctio, rerum omnis nesciunt nostrum id magni blanditiis labore reprehenderit quia?
                        </div>
                        <button className = ' mt-5 p-3 border rounded text-orange-300 border-orange-300 hover-button text-sm'>
                            Get in touch
                        </button>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration = {6} animateOnce = {true}>
                    <div><img src = 'https://www.slazzer.com/downloads/7679fdb6-8618-11ed-9c06-42010a80000a/mthethird_web_developer_coding_illustration_cafdc54e-2dfa-4e9c-b56f-1a64d26f84d2_prev_ui.png' alt = '' className = 'md:h-[40vw] h-[50vw] rounded-full' /></div>
                </ScrollAnimation>
            </div>
        </div>
        </>
    )
}

export default FirstSection