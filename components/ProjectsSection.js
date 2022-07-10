import React from 'react'
import Project from './Project'

const projects = [
    {
        title: 'e-commerce website',
        description: 'Lorem ipsum dolor sit amet lorem, one or more of the more projects indexed',
        imgUrl: 'https://www.vapulus.com/en/wp-content/uploads/2021/01/facebook_shop.jpg',
        codeUrl: '#',
        deploymentUrl: '#',
    },
    {
        title: 'booking app',
        description: 'Lorem ipsum dolor sit amet lorem, one or more of the more projects indexed',
        imgUrl: 'https://www.vapulus.com/en/wp-content/uploads/2021/01/facebook_shop.jpg',
        codeUrl: '#',
        deploymentUrl: '#',
    },
    {
        title: 'news app',
        description: 'Lorem ipsum dolor sit amet lorem, one or more of the more projects indexed',
        imgUrl: 'https://www.vapulus.com/en/wp-content/uploads/2021/01/facebook_shop.jpg',
        codeUrl: '#',
        deploymentUrl: '#',
    },
    {
        title: 'weather app',
        description: 'Lorem ipsum dolor sit amet lorem, one or more of the more projects indexed',
        imgUrl: 'https://www.vapulus.com/en/wp-content/uploads/2021/01/facebook_shop.jpg',
        codeUrl: '#',
        deploymentUrl: '#',
    },
    {
        title: 'note taking app',
        description: 'Lorem ipsum dolor sit amet lorem, one or more of the more projects indexed',
        imgUrl: 'https://www.vapulus.com/en/wp-content/uploads/2021/01/facebook_shop.jpg',
        codeUrl: '#',
        deploymentUrl: '#',
    },
]

const ProjectsSection = () => {
    return (
        <div className = 'pt-10 ml-5 mr-5 sm:ml-10 sm:mr-10 flex flex-col items-center'>
            <div className = 'max-width-of-page'>
                <div className = 'text-2xl sm:text-3xl p-2 text-cente'>
                    Some Things I've Built
                </div>
                <div>
                    {
                        projects.map((project, index) => {
                            return (
                                <div key = {index}>
                                    <Project project = {project} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection