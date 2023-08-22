import React from 'react'
import nora_logo from '../../images/nora_logo.png'
import './home.css'
import Courses from '../courses/Courses'
import Contact from '../contact/Contact'
import { motion } from 'framer-motion'
import CarouselText from './CarouselText'



const Home = () => {
    return (
        <section id='home-section' className='home'>
            <motion.div
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.3, type: 'tween' }}
                className='home-background'>
                <div className='nora-logo'>
                    <img src={nora_logo} alt="nora-logo" />
                </div>
                <div className='introduction-texts'>
                    <div >
                        <CarouselText />
                    </div>
                </div>
            </motion.div>
            <Courses />
            <Contact />
        </section >
    )
}

export default Home
