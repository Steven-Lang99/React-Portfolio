import React from 'react';
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <header class="text-right">
            <h4>Steven Langlois</h4>
            <nav>
                <NavLink to="/about">About Me</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact Me</NavLink>
                <a href="https://docs.google.com/document/d/1mu0lTC6yF85y4RpbK5VpT890fIGvLE09nKMRjevfFsc/edit?usp=sharing">Resume</a>
            </nav>
        </header >
    )
}

export default Home
