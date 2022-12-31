import React, { useEffect, useState } from 'react'
import Project from './Project'
import ScrollAnimation from 'react-animate-on-scroll';
import { db } from '../firebase-config'
import { collection, query, getDocs} from "firebase/firestore";

const allProjects = [
    {
        title: 'e-commerce website',
        description: 'Lorem ipsum dolor sit amet lorem, one or more of the more projects indexed',
        imgUrl: 'https://cdn.dribbble.com/userupload/4160523/file/original-6121b534db6b0a42070fe0b9a979f0f2.png?compress=1&resize=1200x900',
        codeUrl: '#',
        deploymentUrl: '#',
    },
    {
        title: 'booking app',
        description: 'Lorem ipsum dolor sit amet lorem, one or more of the more projects indexed',
        imgUrl: 'https://cdn.dribbble.com/users/25514/screenshots/13914075/media/93d0ecdd88dad80b5915d2fe4541e77c.png?compress=1&resize=1000x750&vertical=top',
        codeUrl: '#',
        deploymentUrl: '#',
    },
    {
        title: 'news app',
        description: 'Lorem ipsum dolor sit amet lorem, one or more of the more projects indexed',
        imgUrl: 'https://cdn.dribbble.com/users/1814344/screenshots/11578809/media/a74e755ec0e1b236a6bc1648ee755070.png?compress=1&resize=1000x750&vertical=top',
        codeUrl: '#',
        deploymentUrl: '#',
    },
    {
        title: 'weather app',
        description: 'Lorem ipsum dolor sit amet lorem, one or more of the more projects indexed',
        imgUrl: 'https://cdn.dribbble.com/users/835462/screenshots/14952937/kvartet_video_tomas_skarba_platform.png?compress=1&resize=400x300&vertical=top',
        codeUrl: '#',
        deploymentUrl: '#',
    },
    {
        title: 'note taking app',
        description: 'Lorem ipsum dolor sit amet lorem, one or more of the more projects indexed',
        imgUrl: 'https://cdn.dribbble.com/users/4859/screenshots/14609945/media/b361cb59a174d13466b0dfbf072f020f.png?compress=1&resize=400x300&vertical=top',
        codeUrl: '#',
        deploymentUrl: '#',
    },
]

const ProjectsSection = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchProjects = async () => {
            if(projects.length !== 0) return
            const q = query(collection(db, "projects"));
            const querySnapshot = await getDocs(q);
            setProjects([])
            querySnapshot.forEach(async (doc) => {
                //console.log(doc.data())
                setProjects(p => [...p, doc.data()]) 
            });
        }
        fetchProjects();
    }, [])

    return (
        <div className = 'pt-10 ml-5 mr-5 sm:ml-10 sm:mr-10 flex flex-col items-center'>
            <ScrollAnimation animateIn = 'fadeInUp' animateOnce = {true} >
            <div className = 'max-width-of-page'>
                <div className = 'text-2xl sm:text-5xl p-2 text-center font-bold text-gray-300'>
                    Some Things I&apos;ve Built
                </div>
                <div className = 'flex flex-wrap mt-6'>
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
            </ScrollAnimation>
        </div>
    )
}

export default ProjectsSection