/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BsMessenger } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaViber } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import './contact.css'

const Contact = () => {
    return (
        <section id='contact-section' className='contact'>
            <div className='contact-div'>
                <div>
                    <div className='questions'>Have More Questions?</div>
                    <div className='contact-me'>
                        Contact Me
                    </div>
                </div>
                <div className='contact-me-links'>
                    <a href=""><BsMessenger /></a>
                    <a href="" > <MdEmail /></a>
                    <a href="" > <FaViber /></a>
                    <a href="" > <AiFillPhone /></a>
                </div>
            </div>
        </section>
    )
}

export default Contact
