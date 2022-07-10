import React from 'react'

const Project = ({ project }) => {
    return (
        <div >
            <div className = 'overflow-hidden m-3 shadow-lg rounded-xl p-3 flex flex-col border sm:flex-row items-center justify-center'>
                <div className = 'grow'>
                    <img src = {project?.imgUrl} alt = '' className = 'rounded max-h-[300px] aspect-video' />              
                </div>
                <div className = 'flex flex-col justify-between'>
                    <div className = 'text-right text-xl font-bold sm:text-2xl md:text-3xl'>
                        {project?.title}
                    </div>
                    <div className = ' p-2 max-h-[60px] overflow-hidden'>
                        {project?.description}
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
        </div>
    )
}

export default Project