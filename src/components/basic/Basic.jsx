import React, { useState } from 'react'
import course1 from '../../images/1.png'
import './basic.css'
import BasicContent from '../basicContent/BasicContent'
import { motion } from 'framer-motion'
import vidOne from '../../videos/demon-slayer.mp4'
import vidTwo from '../../videos/tic-tac-toe.mp4'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoMdArrowDropup } from 'react-icons/io'
import Contact from '../contact/Contact'



const Basic = () => {
    const [mainContent, setMainContent] = useState('About');
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = (isOpenValue) => {
        isOpenValue === true ?
            setIsOpen(false) : setIsOpen(true)
    }

    return (
        <section id='basic-course-section' className='basic-course'>
            <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0, y: 300 }}
                transition={{ delay: 0.2, type: 'tween', duration: 0.7 }}
                className='basic-course-header container'>
                <div>
                    <div className="basic-course-header-img">
                        <img src={course1} alt="" />
                    </div>
                    <div className='basic-course-header-info'>
                        <div>

                            <div className='basic-course-title'>
                                HTML5 ,CSS3 ,Java Script Basic to Advanced
                            </div>
                            <div className='basic-course-intro'>
                                Learn Javascript like a Professional Start from the basics and go all the way to creating your own applications and games.
                            </div>
                            <div className='basic-course-owner'>
                                This Course is offered by <span>Nora</span> . <a href="/home#courses">Website Development</a>
                            </div>
                            <div className='basic-updated'>
                                Last Update : <span>20/8/2023</span>
                            </div>
                        </div>
                        <div className='basic-course-price'>
                            Price: <b>40,000</b>  mmk
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0, y: 300 }}
                transition={{ delay: 0.9, type: 'tween', duration: 0.7 }}
                className='project-preview container'>
                <h1>Included Video Preview</h1>
                <p>The following are the projects included in the course.</p>
                <div className='videos'>
                    <div className='video'>
                        <video width="100%" controls >
                            <source src={vidOne} type="video/mp4" />
                        </video>
                        <p>Demon Slayer Project</p>
                    </div>
                    <div className='video'>
                        <video width="100%" controls >
                            <source src={vidTwo} type="video/mp4" />
                        </video>
                        <p>Tic Tac Toe Project</p>
                    </div>
                </div>
            </motion.div>


            {/* /* ************ nav-start ************* */}
            <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0, y: 300 }}
                transition={{ delay: 1.2, type: 'tween', duration: 0.7 }}
                className='course-navbar container'>
                <div className='course-nav'>
                    <div
                        onClick={() => setMainContent('About')}
                        className={mainContent === 'About' ?
                            'active course-nav-link' : 'course-nav-link'}>
                        About
                    </div>
                    <div
                        onClick={() => setMainContent('Qualification')}
                        className={mainContent === 'Qualification' ?
                            'active course-nav-link' : 'course-nav-link'}>
                        Qualification
                    </div>
                    <div
                        onClick={() => setMainContent('Experience')}
                        className={mainContent === 'Experience' ?
                            'active course-nav-link' : 'course-nav-link'}>
                        Student Experience
                    </div>
                    <div
                        onClick={() => setMainContent('Course Content')}
                        className={mainContent === 'Course Content' ?
                            'active course-nav-link' : 'course-nav-link'}>
                        Course Content
                    </div>
                    <div
                        onClick={() => setMainContent('Platform')}
                        className={mainContent === 'Platform' ?
                            'active course-nav-link' : 'course-nav-link'}>
                        Platform
                    </div>
                    <div
                        onClick={() => setMainContent('Certificate')}
                        className={mainContent === 'Certificate' ?
                            'active course-nav-link' : 'course-nav-link'}>
                        Certificate
                    </div>
                </div>
            </motion.div>

            {/* dropdown-nav */}
            <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0, y: 300 }}
                transition={{ delay: 1.2, type: 'tween', duration: 0.7 }}
                className='course-navbar-dropdown container'>
                <div className='dropdown-active' onClick={() => toggleIsOpen(isOpen)}>
                    <div>
                        {mainContent}
                    </div>
                    {isOpen === true ?
                        <div>
                            <IoMdArrowDropup />
                        </div> :
                        <div>
                            <IoMdArrowDropdown />
                        </div>
                    }
                </div>
                {
                    isOpen === true ? <div className='course-nav-dropdown'>
                        <div
                            onClick={() => setMainContent('About')}
                            className={mainContent === 'About' ?
                                'active course-nav-link' : 'course-nav-link'}>
                            About
                        </div>
                        <div
                            onClick={() => setMainContent('Qualification')}
                            className={mainContent === 'Qualification' ?
                                'active course-nav-link' : 'course-nav-link'}>
                            Qualification
                        </div>
                        <div
                            onClick={() => setMainContent('Experience')}
                            className={mainContent === 'Experience' ?
                                'active course-nav-link' : 'course-nav-link'}>
                            Student Experience
                        </div>
                        <div
                            onClick={() => setMainContent('Course Content')}
                            className={mainContent === 'Course Content' ?
                                'active course-nav-link' : 'course-nav-link'}>
                            Course Content
                        </div>
                        <div
                            onClick={() => setMainContent('Platform')}
                            className={mainContent === 'Platform' ?
                                'active course-nav-link' : 'course-nav-link'}>
                            Platform
                        </div>
                        <div
                            onClick={() => setMainContent('Certificate')}
                            className={mainContent === 'Certificate' ?
                                'active course-nav-link' : 'course-nav-link'}>
                            Certificate
                        </div>
                    </div> : ''
                }

            </motion.div>
            {/* dropdown-nav */}
            {/* /* ************ nav-end ************* */}

            <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0, y: 300 }}
                transition={{ delay: 1.5, type: 'tween', duration: 0.7 }}
                className='course-main container'>

                {mainContent === 'About' ?
                    <motion.div
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0, y: 300 }}
                        transition={{ type: 'spring', duration: 1.3 }}
                        className='basic-main-info'>
                        <h1>About This Course</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Soluta, pariatur. Soluta, quia in? Itaque dolores tenetur
                             perspiciatis vel, non exercitationem aperiam quod repellendus 
                             voluptatem consequuntur id ipsum ut eaque beatae.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Soluta, pariatur. Soluta, quia in? Itaque dolores tenetur 
                             perspiciatis vel, non exercitationem aperiam quod repellendus
                              voluptatem consequuntur id ipsum ut eaque beatae.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Soluta, pariatur. Soluta, quia in? Itaque dolores tenetur 
                             perspiciatis vel, non exercitationem aperiam quod repellendus 
                             voluptatem consequuntur id ipsum ut eaque beatae.
                        </p>
                    </motion.div> : ''}
                {mainContent === 'Qualification' ?
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
                {mainContent === 'Experience' ?
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
                {mainContent === 'Course Content' ?
                    <motion.div
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0, y: 300 }}
                        transition={{ type: 'spring', duration: 1.3 }}
                        className='basic-main-info'>
                        <h1>Course Content</h1>
                        <BasicContent />
                    </motion.div> : ''}
                {mainContent === 'Platform' ?
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
                {mainContent === 'Certificate' ?
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
            <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0, y: 300 }}
                transition={{ delay: 0.9, type: 'tween', duration: 0.7 }}>
                <Contact />
            </motion.div>
        </section >
    )
}

export default Basic




// dropdown icon pake yin pyn change yan
// dropdown link design pyin yan
