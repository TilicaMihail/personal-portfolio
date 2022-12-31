import React, {useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '../firebase-config'
import { collection, query, where, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";
import Project from '../components/Project';

const Dashboard = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [user, setUser] = useState({});
    const [addModalOpen, setAddModalOpen] = useState(false)
    const [projects, setProjects] = useState([])
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [deploymentUrl, setDeploymentUrl] = useState('');
    const [codeUrl, setCodeUrl] = useState('');
    const [techStack, setTechStack] = useState('');
    const [error, setError] = useState('');

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
        onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
        fetchProjects();
    }, [])

    const login = async () => {
        try{
            setError('')
            const user = await signInWithEmailAndPassword(
                auth, 
                loginEmail, 
                loginPassword
            );
            console.log(user)
        }
        catch (error) {
            setError(err.message)
        }
    }

    const handleAddProject = async () => {
        try {
            setError('')
            await setDoc(doc(db, "projects", title), {
                title: title,
                description: description,
                imgUrl: imgUrl,
                codeUrl: codeUrl,
                deploymentUrl: deploymentUrl,
                techStack: techStack,
            });
            setProjects(p => [...p, {
                title: title,
                description: description,
                imgUrl: imgUrl,
                codeUrl: codeUrl,
                deploymentUrl: deploymentUrl,
                techStack: techStack,
            }])
            setAddModalOpen(false);
        } catch (err) {
            setError(err.message)
        }
    }

    const handleRemoveProject = async (titleToRemove) => {
        setError('')
        try {
            await deleteDoc(doc(db, "projects", titleToRemove))
            setProjects(p => p.filter(e => e.title !== titleToRemove))
        } catch (err) {
            setError(err.message)
        }
    }

    const logout = async () => {
        await signOut(auth);
    }

    return (
        <div className = 'bg-gray-900 min-h-screen text-gray-100 relative flex flex-col justify-between'>
            {addModalOpen &&
                <div className = {'h-screen w-screen flex items-center justify-center absolute z-10'} onClick = {e => {e.stopPropagation(); setAddModalOpen(false)}}>
                    <div className = ' w-[50vw] bg-gray-800 rounded-xl shadow-lg flex flex-wrap gap-5' onClick = {e => {e.stopPropagation();}}>
                        <input onChange = {e => setTitle(e.target.value)} value = {title}  type="text" className = 'grow w-full ml-4 mt-4 mr-4 bg-transparent p-3 border rounded text-orange-300 border-orange-300 text-sm' placeholder = 'Enter title' />
                        <input onChange = {e => setDescription(e.target.value)} value = {description} type="text" className = 'grow w-full ml-4 mr-4 bg-transparent p-3 border rounded text-orange-300 border-orange-300 text-sm' placeholder = 'Enter description' />
                        <input onChange = {e => setImgUrl(e.target.value)} value = {imgUrl} type="text" className = 'grow w-full ml-4 mr-4 bg-transparent p-3 border rounded text-orange-300 border-orange-300 text-sm' placeholder = 'Enter img url' />
                        <input onChange = {e => setDeploymentUrl(e.target.value)} value = {deploymentUrl} type="text" className = 'grow w-full ml-4 mr-4 bg-transparent p-3 border rounded text-orange-300 border-orange-300 text-sm' placeholder = 'Enter deployment url' />
                        <input onChange = {e => setCodeUrl(e.target.value)} value = {codeUrl} type="text" className = 'grow w-full ml-4 mr-4 bg-transparent p-3 border rounded text-orange-300 border-orange-300 text-sm' placeholder = 'Enter github url' />
                        <input onChange = {e => setTechStack(e.target.value)} value = {techStack} type="text" className = 'grow w-full ml-4 mr-4 bg-transparent p-3 border rounded text-orange-300 border-orange-300 text-sm' placeholder = 'Enter tech stack all techs should be divided by comma' />
                        <button onClick = {handleAddProject} className = 'bg-gray-500 font-bold text-white grow w-full m-4 bg-transparent p-3 rounded-lg text-xl '>
                            Add project
                        </button>
                    </div>
                </div>
            }
            <div>
                <div className = 'flex gap-4 items-center justify-between p-4 bg-gray-800'>
                    <div className = 'flex gap-4'>
                    <input className = 'bg-transparent p-3 border rounded text-orange-300 border-orange-300 hover-button text-sm' placeholder="Email..." onChange={(e) => {
                        setLoginEmail(e.target.value);
                    }}/>
                    <input type = 'password' className = 'bg-transparent p-3 border rounded text-orange-300 border-orange-300 hover-button text-sm' placeholder="Password..."onChange={(e) => {
                        setLoginPassword(e.target.value);
                    }}/>
                    <button onClick={login} className = 'p-3 border rounded text-orange-300 border-orange-300 hover-button text-sm'>Login</button>
                    </div>
                    <div className = 'flex items-center gap-4'>
                        <h4 className = 'font-bold'>User Logged In: {user?.email}</h4>
                        <button className = 'p-3 border rounded text-orange-300 border-orange-300 hover-button text-sm' onClick={logout}>Sign Out</button>
                    </div>
                </div>
                <div className = 'flex justify-between items-center'>
                    <div className = 'text-5xl font-bold text-center p-10'>
                        Projects
                    </div>
                    <div className = 'p-3 border rounded text-orange-300 border-orange-300 hover-button text-sm m-10' onClick = {e => setAddModalOpen(true)}>
                        Add project
                    </div>
                </div>
                <div>
                    <div className = 'flex flex-wrap mt-6'>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <div key = {index} className = 'relative'>
                                            <div onDoubleClick = {e => handleRemoveProject(project.title)} className = 'flex items-center cursor-pointer justify-center w-[95%] h-[95%] m-3 bg-red-500 absolute opacity-0 hover:opacity-70 rounded-xl'>
                                                <div className = 'font-bold text-4xl'>
                                                    Double click to delete
                                                </div>
                                            </div>
                                            <Project project = {project} />
                                        </div>
                                    )
                                })
                            }
                    </div>  
                </div>
            </div>
            <div className = 'text-red-500 font-bold text-2xl text-center p-3'>
                {error}
            </div>
        </div>
    )
}

export default Dashboard