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
                        <p>Hello, I am Steven Langlois. I am orginally from Wisconsin but after graduating from the University
                            of Wisconsin-Stout I moved to Minnesota for better carreer opportunities. I am currently employed
                            with Wells Fargo at the moment
                            but I am hoping with the expereince working in a coding bootcamp to further my career.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe