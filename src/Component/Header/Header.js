import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item text" >
                    <Link className="nav-link" to="/myprofile/profile" style={{color:'whitesmoke'}}>About</Link>
                </li>
                <li className="nav-item text">
                    <Link className="nav-link" to="/myprofile/projects"  style={{color:'whitesmoke'}}>Projects</Link>
                </li>
                <li className="nav-item text">
                    <Link className="nav-link" to="/myprofile/work"  style={{color:'whitesmoke'}}>Work</Link>
                </li>
                </ul>
        </div>
    )
}

export default Header
