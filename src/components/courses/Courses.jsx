import React from 'react'
import './courses.css'
import course1 from '../../images/1.png'
import course2 from '../../images/2.png'
import { BsFillArrowDownSquareFill } from 'react-icons/bs'
import { motion } from 'framer-motion'


const Courses = () => {
    return (
        <section id='courses-section' className='courses-section '>
            <div className='courses-headline'>
                <motion.div
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    initial={{ opacity: 0, scale: 0, y: 300 }}
                    transition={{ delay: 0.5, type: 'spring', duration: 1.3 }}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400 }}>
                        <a href="#courses-section"> Check Out These New Courses On Promotion</a>
                        < div><BsFillArrowDownSquareFill /></div >
                    </motion.div>
                </motion.div>
                <motion.h1
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    initial={{ opacity: 0, scale: 0, y: 300 }}
                    transition={{ delay: 0.7, type: 'spring', duration: 1.3 }}>
                    Browse Available Courses
                </motion.h1>
            </div>
            {/* ********************************* */}
            <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0, y: 300 }}
                transition={{ delay: 0.9, type: 'spring', duration: 1.3 }}
                className='courses'>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 250 }}
                    className='course'>
                    <a href="/basic">
                        <div className='course-logo'>
                            <img src={course1} alt="" />
                        </div>
                        <div className='course-info'>
                            <div className='course-name'>HTML5 ,CSS3 ,Java Script basic to Advanced</div>
                            <div className='course-description'>
                                <div className='accordion'>
                                    <input type="checkbox" id='input-1' />
                                    <p><label htmlFor="input-1"> What you'll learn </label></p>
                                    <div className='content'>
                                        <p>HTML, CSS, Java Script , Dom Manipulation With Java Script</p>
                                    </div>
                                </div>
                            </div>
                            <div className='course-level'>
                                <div className='accordion'>
                                    <input type="checkbox" id='input-2' />
                                    <p><label htmlFor="input-2"> Course Level</label></p>
                                    <div className='content'>
                                        <p>Beginner Course</p>
                                    </div>
                                </div>
                            </div>
                            <div className='course-price'>
                                <div className='accordion'>
                                    <input type="checkbox" id='input-3' />
                                    <p><label htmlFor="input-3"> Pricing </label></p>
                                    <div className='content'>
                                        <p className='course-price'><span><b>40,000 mmk </b></span><small> <b>On Promotion</b> </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </motion.div>

                {/* ********************************* */}
                <div className='course'>
                    <a href="/react">
                        <div className='course-logo'>
                            <img src={course2} alt="" />
                        </div>
                        <div className='course-info'>
                            <div className='course-name'>React Js : Complete React Developer Course</div>
                            <div className='course-description'>
                                <div className='accordion'>
                                    <input type="checkbox" id='input-11' />
                                    <p><label htmlFor="input-11"> What you'll learn </label></p>
                                    <div className='content'>
                                        <p>React, React-Router, Framer-motion</p>
                                    </div>
                                </div>
                            </div>
                            <div className='course-level'>
                                <div className='accordion'>
                                    <input type="checkbox" id='input-12' />
                                    <p><label htmlFor="input-12"> Course Level </label></p>
                                    <div className='content'>
                                        <p>Html,Css and Js knowledge Required</p>
                                    </div>
                                </div>
                            </div>
                            <div className='course-price'>
                                <div className='accordion'>
                                    <input type="checkbox" id='input-13' />
                                    <p><label htmlFor="input-13"> Pricing </label></p>
                                    <div className='content'>
                                        <p className='course-price'><span><b>40,000 mmk </b></span><small> <b>On Promotion</b> </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* ************** courses state with an array ******************* */}
                {/* ************** create coming soon state with an array ******************* */}
            </motion.div>
        </section >
    )
}

export default Courses
