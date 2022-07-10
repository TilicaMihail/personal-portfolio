import React from 'react'
import { classes } from '../utils/classes'


const Header = () => {
    return (
        <div className = 'header flex items-center justify-center p-2 absolute w-full'> 
            <div className = 'ml-10 mr-10 max-width-of-page w-full flex items-center justify-between'> 
                <a href = '#' className = 'text-white hover-button'>
                    <ion-icon name="code-slash-outline"></ion-icon>
                </a>
                <div className = 'flex pl-2'>
                    <a href = "#" className = {classes.iconContainer + ' hover-button p-1'} >
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a href = "#" className = {classes.iconContainer + ' hover-button p-1'} >
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                    <a href = "#" className = {classes.iconContainer + ' hover-button p-1'} >
                        <ion-icon name="logo-github" size = 'medium'></ion-icon>
                    </a>
                </div> 
            </div>         
        </div>
    )
}

export default Header