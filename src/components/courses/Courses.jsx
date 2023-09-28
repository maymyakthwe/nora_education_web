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
            let div = document.createElement('div');
            div.setAttribute('classname', 'preview-course')
            let img = document.createElement('img');
            img.setAttribute('src', course.img);
            div.append(img);

            let div2 = document.createElement('div');
            div2.setAttribute('classname', 'preview-course-infos')
            div2.innerHTML = `
            <div className='preview-course-heading'>${course.name}</div>
            <div className='preview-course-details'>
                <div>${course.description}</div>
                <div>${course.level}</div>
                <div>${course.price} mmk<span>${course.onpromotion === true ? 'on promotion' : ''}</span></div>
            </div>`

            div.append(div2)

            console.log(div)
            return div
        })
        for (let r of result) {
            previewCourse.append(r)
        }
    })

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
                className='preview-courses'>
            </motion.div>
        </section >
    )
}

export default Courses
