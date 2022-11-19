import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Footer = () => {

    return (
        <div className = 'min-h-[300px] flex flex-col items-center  p-4 mt-10 pb-10 bg-gradient-to-bl from-blue-600 via-indigo-700 to-violet-900 text-white'>
            <div className = 'flex w-full max-w-2xl pl-10 pr-10 p-3 '>
                <input 
                    placeholder = 'Title'
                    className = 'grow bg-transparent outline-none border-2 rounded-xl p-2 text-lg' 
                />
            </div>
            <div className = 'flex w-full max-w-2xl pl-10 pr-10 p-3 '>
                <textarea 
                    placeholder = 'Tell me your idea'
                    className = ' min-h-[200px] grow bg-transparent outline-none border-2 rounded-xl p-2 text-lg' 
                />
            </div>
            <div className = 'flex w-full max-w-2xl pl-10 pr-10 p-3'>
                <button className = 'bg-glass text-xl font-bold w-full p-3 transition duration-100 hover:-translate-y-1 hover:opacity-90'>
                    Contact me
                </button>
            </div>
        </div>
    )
}

export default Footer