import React from 'react';
import Github from '../../images/Github.png'
import Linkedin from '../../images/Linkedin.png'

function Footer() {
    return (
        <footer id="footer">
            <nav className='bottom'>
                <ul>
                    <a className="lastimage" href="https://github.com/Steven-Lang99"><img src={Github}
                        height="50" width="50" /></a>
                    <a className="lastimage" href="https://www.linkedin.com/in/stevenlanglois9999/"><img src={Linkedin}
                        height="50" width="50" /></a>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer