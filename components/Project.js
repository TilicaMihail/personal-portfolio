import React from 'react'

const Project = ({ project }) => {
    // return (
    //     <div className = 'overflow-hidden  shadow-lg flex flex-col items-center justify-center bg-gray-800 relative'>
    //         <div className = 'grow'>
    //             <img src = {project?.imgUrl} alt = '' className = 'max-h-[350px] aspect-video' />              
    //         </div>
    //         <div className = 'flex flex-col  p-3 h-full opacity-0 hover:opacity-100 absolute bottom-0'>
    //             <div className = 'text-right text-xl font-bold sm:text-2xl md:text-3xl'>
    //                 {project?.title}
    //             </div>
    //             <div className = ' p-2 max-h-[60px] overflow-hidden'>
    //                 {project?.description}
    //             </div>
    //             <div className = 'flex items-center justify-end'>
    //                 <a href = {project?.codeUrl} className = 'flex items-center justify-center text-3xl p-2 hover-button'>
    //                     <ion-icon name="logo-github"></ion-icon>
    //                 </a>
    //                 <a href = {project?.deploymentUrl}  className = 'flex items-center justify-center text-3xl p-2 hover-button'>
    //                     <ion-icon name="desktop-outline"></ion-icon>
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // )
    return (
        <div className = 'overflow-hidden m-3 shadow-lg rounded-xl flex flex-col items-center justify-center bg-slate-800 text-gray-300'>
            <div className = 'grow'>
                <img src = {project?.imgUrl} alt = '' className = 'rounded max-h-[250px] aspect-video' />              
            </div>
            <div className = 'flex items-center justify-between w-full p-1 max-w-[400px]'>
                <div className = 'text text-xl font-bold sm:text-xl md:text-xl'>
                    {project?.title}
                </div>
                <div className = 'flex items-center justify-end'>
                    <a href = {project?.codeUrl} className = 'flex items-center justify-center text-3xl p-2 hover-button'>
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                    <a href = {project?.deploymentUrl}  className = 'flex items-center justify-center text-3xl p-2 hover-button'>
                        <ion-icon name="desktop-outline"></ion-icon>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project