import React from 'react';
import Project1 from '../../images/Project1.gif'
import Projectv2 from '../../images/Project2.png'

function Portfolio() {
    return (
        <section>
            <h1>Portfolio</h1>
            <div className='container'>
                <a href='https://github.com/Lilniz/Chatter-Portal'><img src={Project1} className="project1" alt='project1' width='350px' height='250px'></img>
                </a>
                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eius corrupti illum error quam ab saepe atque harum qui blanditiis inventore soluta minima, aut, deleniti obcaecati doloremque optio reiciendis voluptate?</p>
                <a href='https://github.com/troymnelson/ChatApp'><img src={Projectv2} className="project2" alt='project2' width='350px' height='250px'></img>
                </a>
                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eius corrupti illum error quam ab saepe atque harum qui blanditiis inventore soluta minima, aut, deleniti obcaecati doloremque optio reiciendis voluptate?</p>
            </div>
        </section>
    )
}

export default Portfolio