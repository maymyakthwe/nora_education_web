import React, { useState } from 'react'
import course1 from '../../images/1.png'
import './basic.css'

const Basic = () => {
    const [mainContent, setMainContent] = useState('about')

    return (
        <section id='Basic-course-section' className='basic-course'>
            <div className='basic-course-header container'>
                <div className='basic-course-header-info'>
                    <div className='basic-course-route'>
                        <a href="/home#courses">Website Development</a>
                    </div>
                    <div className='basic-course-title'>
                        HTML5 ,CSS3 ,Java Script Basic to Advanced
                    </div>
                    <div className='basic-course-intro'>
                        Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games
                    </div>
                    <div className='basic-course-owner'>
                        This Course is offered by <span>Nora</span> .
                    </div>
                    <div className='basic-updated'>
                        Last Update : 29/5/2023
                    </div>
                </div>
                <div className="basic-course-header-img">
                    <img src={course1} alt="" />
                </div>
            </div>

            {/* /* ************ nav-start ************* */}
            <div className='course-navbar container '>
                <div onClick={() => setMainContent('about')} className={mainContent === 'about' ? 'active course-nav-link' : 'course-nav-link'}>About</div>
                <div onClick={() => setMainContent('qualification')} className={mainContent === 'qualification' ? 'active course-nav-link' : 'course-nav-link'}>Qualification</div>
                <div onClick={() => setMainContent('experience')} className={mainContent === 'experience' ? 'active course-nav-link' : 'course-nav-link'}>Student Experience</div>
                <div onClick={() => setMainContent('content')} className={mainContent === 'content' ? 'active course-nav-link' : 'course-nav-link'}>Course Content</div>
                <div onClick={() => setMainContent('platform')} className={mainContent === 'platform' ? 'active course-nav-link' : 'course-nav-link'}>Platform</div>
                <div onClick={() => setMainContent('certificate')} className={mainContent === 'certificate' ? 'active course-nav-link' : 'course-nav-link'}>Certificate</div>
            </div>
            {/* /* ************ nav-end ************* */}

            <div className='course-main container'>

                {mainContent === 'about' ?
                    <div className='basic-main-info'>
                        <h1>About This Course</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsum doloremque qui culpa. Laboriosam dolore impedit esse
                            mollitia, quaerat non id, nisi corrupti, natus autem amet
                            commodi? Deleniti quidem quia et.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Temporibus debitis, nihil error voluptas sapiente excepturi
                            sunt mollitia? Ratione aspernatur commodi expedita maxime
                            nam cupiditate temporibus iure possimus, animi nisi sapiente?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsum doloremque qui culpa. Laboriosam dolore impedit esse
                            mollitia, quaerat non id, nisi corrupti, natus autem amet
                            commodi? Deleniti quidem quia et.
                        </p>
                    </div> : ''}
                {mainContent === 'qualification' ?
                    <div className='basic-main-info'>
                        <h1>Qualification</h1>
                        <ul>
                            <li>Recommended minimum age: <b>13</b>  </li>
                            <li>No Other Qualification Needed.</li>
                        </ul>
                    </div> : ''}
                {mainContent === 'experience' ?
                    <div className='basic-main-info'>
                        <h1>Student Experience</h1>
                        <ul>
                            <li>Self-paced Learning</li>
                            <li>Discussion Every Night via Discord <span>9:00pm to 9:30pm</span> <span className='importance'>Not Mandatory</span></li>
                            <li>Weekly Mini Projects <span className='importance'> Mandatory for Certificate </span></li>
                            <li>Final Project 1 <span>Course Project</span> <span className='importance'> Mandatory for Certificate </span></li>
                            <li>Final Project 2 <span>with 100% student's idea and design Under Instructor's guidance</span> <span className='importance'> Mandatory for Certificate </span></li>
                            <li>Duration: approximately 3 months </li>
                        </ul>
                    </div> : ''}
                {mainContent === 'content' ?
                    <div className='basic-main-info'>
                        content
                    </div> : ''}
                {mainContent === 'platform' ?
                    <div className='basic-main-info'>
                        <h1>Platforms</h1>
                        <ul>
                            <li>Google Classroom</li>
                            <li>Discord</li>
                        </ul>
                    </div> : ''}
                {mainContent === 'certificate' ?
                    <div className='basic-main-info'>
                        <h1>Certificate</h1>
                        <p>Certificate Will be given <span>only if</span> the student finishes the following requirements before deadline which is 1 year after student join the class.</p>
                        <ul>
                            <li>Weekly Mini Projects</li>
                            <li>Final Project 1</li>
                            <li>Final Project 2</li>
                        </ul>

                    </div> : ''}
            </div>
        </section >
    )
}

export default Basic
