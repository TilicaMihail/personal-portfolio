import React from 'react'
import { classes } from '../utils/classes'
import Header from './Header'

const FirstSection = () => {
    return (
        <>
        <Header />
        <div className={'text-gray-100 flex items-center justify-center min-h-160 h-screen max-h-screen bg-gradient-to-bl from-blue-600 via-indigo-700 to-violet-900 text-white'}>  
            <div className = 'p-10 flex-wrap flex items-center justify-center' >
                <div className = 'max-w-xl'>
                    <div className = 'text-gray-400'>
                        Hi, I am
                    </div>
                    <div className = 'text-6xl pb-1 font-ubuntu'>
                        Tilica Mihail
                    </div>
                    <div className = 'text-4xl pb-1 font-ubuntu text-gray-300'>
                        Fullstack Developer and Designer
                    </div>
                    <div className = ' text-gray-400 text-sm'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque reiciendis velit nulla quaerat necessitatibus minus adipisci maiores sit ipsa vitae vero distinctio, rerum omnis nesciunt nostrum id magni blanditiis labore reprehenderit quia?
                    </div>
                    <button className = ' mt-5 p-3 border rounded text-emerald-300 border-green-300 hover-button text-sm'>
                        Get in touch
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default FirstSection