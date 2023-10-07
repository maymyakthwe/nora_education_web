import React, { useEffect } from 'react'
import './courses.css'
import { BsFillArrowDownSquareFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import allCourses from '../data'


const Courses = () => {

    useEffect(() => {
        let previewCourse = document.querySelector('.preview-courses')
        while (previewCourse.firstChild) {
            previewCourse.removeChild(previewCourse.firstChild)
        }
        let result = allCourses.map((course) => {
            //the whole link
            let a = document.createElement('a');
            a.setAttribute('class', course.isAvailable ? 'preview-course' : 'preview-course coming-soon')
            a.setAttribute('href', course.link)

            //add an img
            let img = document.createElement('img');
            img.setAttribute('src', course.img);
            a.append(img);

            //promotion div
            if (course.onpromotion) {
                let onPromotion = document.createElement('div');
                onPromotion.setAttribute('class', 'on-promotion')
                onPromotion.innerHTML = 'On Promotion'
                a.append(onPromotion);
            }

            //add info div
            let div = document.createElement('div');
            div.setAttribute('class', 'preview-course-infos')
            div.innerHTML = `
            <div class='preview-course-details'>
            <div class='preview-course-heading'>${course.name}</div>
                <div>${course.description}</div>
                <div>${course.level}</div>
                <div>${course.price} mmk<span>${course.onpromotion === true ? ' on promotion' : ''}</span></div>
            </div>
            <div class='go-to-courses' >
                <a href=${course.link}>
                    More Details
                </a>
            </div>`

            a.append(div)
            return a
        })
        for (let i = 0; i < 2; i++) {
            previewCourse.append(result[i]);
        }
    }, [])

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
                className='preview-courses container'>
            </motion.div>
            <div class='more-courses container' >
                <a href='/courses'>
                    More Courses
                </a>
            </div>
            {/* ********************************* */}
        </section >
    )
}

export default Courses
