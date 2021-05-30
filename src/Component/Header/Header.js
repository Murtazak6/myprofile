import React, {useState} from 'react'
import './header.css'
const Header = () => {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item text" >
                    <a className="nav-link" href="/myprofile/" style={{color:'whitesmoke'}}>About</a>
                </li>
                <li className="nav-item text">
                    <a className="nav-link" href="/myprofile/projects"  style={{color:'whitesmoke'}}>Projects</a>
                </li>
                <li className="nav-item text">
                    <a className="nav-link" href="/myprofile/work"  style={{color:'whitesmoke'}}>Work</a>
                </li>
                </ul>
        </div>
    )
}

export default Header
