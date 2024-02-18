import React from 'react'
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

                <div className='introduction-texts'>
                    <div >
                        <CarouselText />
                    </div>
                </div>
            </motion.div>
            <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0, y: 300 }}
                transition={{ delay: 0.5, type: 'tween', duration: 0.7 }}>
                <Courses />
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

export default Home
