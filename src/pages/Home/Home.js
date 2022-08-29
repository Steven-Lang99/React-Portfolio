import React from 'react';

function Home() {
    return (
        <header class="text-right">
            <nav>
                <li><a href="/">Steven Langlois</a></li>
                <ul className='list'>
                    <li><a href="/about">About me</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a
                        href="https://docs.google.com/document/d/1mu0lTC6yF85y4RpbK5VpT890fIGvLE09nKMRjevfFsc/edit?usp=sharing">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Home