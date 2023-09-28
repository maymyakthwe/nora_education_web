import React from 'react'
import './about.css'
import logo1 from '../../images/nora-logo-1.png'
import cover from '../../images/cover.png'
import Contact from '../contact/Contact'

const About = () => {
    return (
        <div>
            <div className='about-section'>
                <div className='about-img'>
                    <img src={cover} alt="" />
                </div>

            </div>
            <div className='about-texts '>
                <div className='container'>
                    <div className='about-text-heading'>WELCOME TO NORA'S ACADEMY</div>
                    <div className='about-text-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus nobis porro distinctio repellendus architecto eum culpa quisquam, laborum enim, molestiae vel autem. Accusantium dolorem necessitatibus eaque nostrum? Ad, architecto?</div>
                    <div className='about-links'>
                        <a href="/">Go Back to Home Page</a>
                        <a href="#contact-section">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className='profession-fields '>
                <div className='container'>
                    <div className='profession-fields-header'>Professional Fields We Aim To Provide</div>
                    <div className='fields'>
                        <div>Website Development <small>Available Now</small></div>
                        <div>Digital Art <small>In Progress </small></div>
                        <div>Japanese Language &#38; JLPT Training <small>In Progress</small></div>
                        <div>Daily English for Children <small>In Progress</small></div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default About
