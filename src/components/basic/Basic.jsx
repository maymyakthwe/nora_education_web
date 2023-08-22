import React, { useState } from 'react'
import course1 from '../../images/1.png'
import './basic.css'
import BasicContent from '../basicContent/BasicContent'
import { motion } from 'framer-motion'


const Basic = () => {
    const [mainContent, setMainContent] = useState('about')

    return (
        <section id='Basic-course-section' className='basic-course'>
            <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0, y: 300 }}
                transition={{ delay: 0.2, type: 'spring', duration: 1.3 }}
                className='basic-course-header container'>
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
                        Last Update : 20/8/2023
                    </div>
                </div>
                <div className="basic-course-header-img">
                    <img src={course1} alt="" />
                </div>
            </motion.div>

            {/* /* ************ nav-start ************* */}
            <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0, y: 300 }}
                transition={{ delay: 0.5, type: 'spring', duration: 1.3 }}
                className='course-navbar container scroll-menu'>
                <div
                    onClick={() => setMainContent('about')}
                    className={mainContent === 'about' ?
                        'active course-nav-link' : 'course-nav-link'}>
                    About
                </div>
                <div
                    onClick={() => setMainContent('qualification')}
                    className={mainContent === 'qualification' ?
                        'active course-nav-link' : 'course-nav-link'}>
                    Qualification
                </div>
                <div
                    onClick={() => setMainContent('experience')}
                    className={mainContent === 'experience' ?
                        'active course-nav-link' : 'course-nav-link'}>
                    Student Experience
                </div>
                <div
                    onClick={() => setMainContent('content')}
                    className={mainContent === 'content' ?
                        'active course-nav-link' : 'course-nav-link'}>
                    Course Content
                </div>
                <div
                    onClick={() => setMainContent('platform')}
                    className={mainContent === 'platform' ?
                        'active course-nav-link' : 'course-nav-link'}>
                    Platform
                </div>
                <div
                    onClick={() => setMainContent('certificate')}
                    className={mainContent === 'certificate' ?
                        'active course-nav-link' : 'course-nav-link'}>
                    Certificate
                </div>
            </motion.div>
            {/* /* ************ nav-end ************* */}

            <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0, y: 300 }}
                transition={{ delay: 0.8, type: 'spring', duration: 1.3 }}
                className='course-main container'>

                {mainContent === 'about' ?
                    <motion.div
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0, y: 300 }}
                        transition={{ type: 'spring', duration: 1.3 }}
                        className='basic-main-info'>
                        <h1>About This Course</h1>
                        <p>
                            In this course, every things you need to know about HTML, CSS and JavaScript is
                            included which are the perfect start to build your career as a website developer
                            or a mobile app developer. In fact, Html and Css are the very basic of developing
                            websites,web applications and mobile applications. JavaScript is used in many fields even
                            in game development and web servers, including the formor three. You wouldn't wanna miss
                            the opportunity to study the perfect foundation course of the highest demand jobs with
                            attractive salary. In this course, these three basic languages essential to start your carrer as a developer
                            are explained through the most super simple lectures together with examples and
                            exercises for your practice. Inspite of all that, the most attractive part is, this course is self-paced learning which is
                            based your ability to learn with a 24 hr standby instructor. Including all these privilege, we are still offering a 10% discount. Get your access before
                            time is up !!!
                        </p>
                    </motion.div> : ''}
                {mainContent === 'qualification' ?
                    <motion.div
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0, y: 300 }}
                        transition={{ type: 'spring', duration: 1.3 }}
                        className='basic-main-info'>
                        <h1>Qualification</h1>
                        <ul>
                            <li>Recommended minimum age: <b>13</b>  </li>
                            <li>No Other Qualification Needed.</li>
                        </ul>
                    </motion.div> : ''}
                {mainContent === 'experience' ?
                    <motion.div
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0, y: 300 }}
                        transition={{ type: 'spring', duration: 1.3 }}
                        className='basic-main-info'>
                        <h1>Student Experience</h1>
                        <ul>
                            <li>Self-paced Learning</li>
                            <li>Weekends Discussion via Discord <span>9:00pm to 9:30pm</span> <span className='importance'>Not Mandatory</span></li>
                            <li>Weekly Exercises <span className='importance'> Mandatory for Certificate </span></li>
                            <li>Project 1 &#58; HTML,CSS Course Project <span> &#40; Demon Slayer Project &#41;</span> <span className='importance'> Mandatory for Certificate </span></li>
                            <li>Project 2 &#58; Java Script, Dom Manipulation Practice <span> &#40; Tick Tac Toe Project &#41;</span> <span className='importance'> Mandatory for Certificate </span></li>
                            <li>Duration: Approximately 4 months </li>
                        </ul>
                    </motion.div> : ''}
                {mainContent === 'content' ?
                    <motion.div
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0, y: 300 }}
                        transition={{ type: 'spring', duration: 1.3 }}
                        className='basic-main-info'>
                        <h1>Course Content</h1>
                        <BasicContent />
                    </motion.div> : ''}
                {mainContent === 'platform' ?
                    <motion.div
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0, y: 300 }}
                        transition={{ type: 'spring', duration: 1.3 }}
                        className='basic-main-info'>
                        <h1>Platforms</h1>
                        <ul>
                            <li>Google Classroom</li>
                            <li>Telegram</li>
                            <li>Discord</li>
                        </ul>
                    </motion.div> : ''}
                {mainContent === 'certificate' ?
                    <motion.div
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0, y: 300 }}
                        transition={{ type: 'spring', duration: 1.3 }}
                        className='basic-main-info'>
                        <h1>Certificate</h1>
                        <p>Certificate Will be given <span>only if</span> the student finishes the following requirements before deadline which is 1 year after student join the class.</p>
                        <ul>
                            <li>Weekly Exercises</li>
                            <li>Final Project 1</li>
                            <li>Final Project 2</li>
                        </ul>

                    </motion.div> : ''}
            </motion.div>
        </section >
    )
}

export default Basic
