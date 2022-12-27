import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const SkillsSection = () => {

    return (
        <div className = 'p-5 flex flex-col items-center justify-center w-full mt-5 pb-32 '>
            <ScrollAnimation animateIn = "fadeInUp" animateOnce = {true}>
                <div className = 'bg-slate-800 p-10 rounded-xl  shadow-xl text-gray-200'>
                    <div className = 'text-2xl sm:text-5xl p-2 text-center font-bold  '>
                        Technologies I use
                    </div>
                    <div className = 'flex items-center justify-center flex-wrap m-10 gap-3'>
                        <div className = 'p-3 border rounded-lg  font-bold'>
                            React
                        </div>
                        <div className = 'p-3 border rounded-lg  font-bold'>
                            Next
                        </div>

                        <div className = 'p-3 border rounded-lg  font-bold'>
                            Tailwind
                        </div>
                            <div className = 'p-3 border rounded-lg  font-bold'>
                                Node
                            </div>
                        
                            <div className = 'p-3 border rounded-lg font-bold'>
                                GraphQl
                            </div>
                        
                            <div className = 'p-3 border rounded-lg  font-bold'>
                                MongoDb
                            </div>
                        
                            <div className = 'p-3 border rounded-lg  font-bold'>
                                Mongoose
                            </div>
                        
                            <div className = 'p-3 border rounded-lg  font-bold'>
                                Prisma
                            </div>
                        
                            <div className = 'p-3 border rounded-lg font-bold'>
                                PostgresQl
                            </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default SkillsSection