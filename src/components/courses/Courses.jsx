import React from 'react'
import './courses.css'
import course1 from '../../images/1.png'
import course2 from '../../images/2.png'
import { BsFillArrowDownSquareFill } from 'react-icons/bs'


const Courses = () => {
    return (
        <section id='courses-section' className='courses-section '>
            <div className='courses-headline'>
                <div>
                    <p><a href="#courses-section"> Check Out These New Courses On Promotion</a></p>
                    < div><BsFillArrowDownSquareFill /></div >
                </div>
                <h1 >
                    Browse Available Courses
                </h1>
            </div>
            {/* ********************************* */}
            <div className='courses'>

                <div className='course'>
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
                                        <p>HTML, CSS, JS</p>
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
                                        <p className='course-price'><span><b>Only 50,000 mmk </b></span><small>On Promotion <b>50% Off</b> </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

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
                                        <p>Complete Beginner Course. Html,Css and Js knowledge Required</p>
                                    </div>
                                </div>
                            </div>
                            <div className='course-price'>
                                <div className='accordion'>
                                    <input type="checkbox" id='input-13' />
                                    <p><label htmlFor="input-13"> Pricing </label></p>
                                    <div className='content'>
                                        <p className='course-price'><span><b>Only 50,000 mmk </b></span><small>On Promotion <b>50% Off</b> </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* ********************************* */}
            </div>
        </section >
    )
}

export default Courses
