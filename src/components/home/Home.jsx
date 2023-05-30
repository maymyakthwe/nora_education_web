import React from 'react'
import nora_logo from '../../images/nora_logo.png'
import './home.css'
import Courses from '../courses/Courses'
import Contact from '../contact/Contact'



const Home = () => {
    return (
        <section id='home-section' className='home'>
            <div className='home-background'>
                <div className='nora-logo'>
                    <img src={nora_logo} alt="nora-logo" />
                </div>
                <div className='introduction-texts'>
                    <div>
                        Interested In Becoming A Front-End Developer?
                    </div>

                </div>
            </div>
            <Courses />
            <Contact />
        </section>


    )
}

export default Home
