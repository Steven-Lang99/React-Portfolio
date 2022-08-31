import React from 'react';
import Project1 from '../../images/Project1.gif'
import Projectv2 from '../../images/Projectv3.gif'
import '../Portfolio/portfolio.css'

function Portfolio() {
    return (
        <section>
            <h1>Portfolio</h1>
            <div className='container'>
                <a href='https://github.com/Lilniz/Chatter-Portal'><img src={Project1} className="project1" alt='project1' width='375px' height='275px'></img>
                </a>
                <p className='paragraph'>This is a project in which 3 separate minds combined as one!
                    What we came up with correlates to issues/problems seen everywhere today!
                    Sometimes it's impossible to get a conversation going, to introduce some cool new facts in a conversation, or even find a way to escape such cruel and unusual punishment of needing to talk when you just don't feel like it.
                    Also, Pokemon! Our Chatter Portal will help you stay in or enter a conversation with ease, or escape with the strength of a raging river!

                    For this first project we decided to create a generator for Excuses, Trivia, Fun Facts, and Pokemon! This works but pressing the generate buttons and it will pop up with something random for each category. When you find one that you like, you are able to click the favorite button within that card and it will be saved to your local storage. After you have found a few that you like, you can go ahead and press the favorites button at the bottom and it will pop up with a modal and it will display your favorites within the local storage within the modal.</p>
                <a href='https://github.com/troymnelson/ChatApp'><img src={Projectv2} className="project2" alt='project2' width='350px' height='250px'></img>
                </a>
                <p className='paragraph'>A social media and coding forum app to share life updates or get coding help.
                    This app is perfect for classmates to come together and share about themselves or get help on homework.
                    We envision this app to be a fun and easy way to give life updates and share experences that you have had.
                    We all worked hard to make sure that the application fit the style we wanted and was easy to navigate. All you have to do is register at the main menu.
                    Then you will be sent back to the main menu where you can login. Once you click the login button you will be sent to your dashboard where you can start making posts.
                    After you have decided you have made enough post you can logout to the main menu with the logout button. Simple and easy to use!</p>
            </div>
        </section>
    )
}

export default Portfolio