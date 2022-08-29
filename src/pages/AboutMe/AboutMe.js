import React from 'react';
import Images from '../../images/Pictureofme.jpg'

function AboutMe() {
    return (
        <section>
            <h1>About Me</h1>
            <div className='container'>
                <div className='center row'>
                    <img src={Images} alt='Steven' width='500px' height='350px'></img>
                </div>
                <div>
                    <div className='paragraph row'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eius corrupti illum error quam ab saepe atque harum qui blanditiis inventore soluta minima, aut, deleniti obcaecati doloremque optio reiciendis voluptate?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe