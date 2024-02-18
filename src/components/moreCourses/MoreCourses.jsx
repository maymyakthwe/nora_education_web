import React, { useEffect } from 'react'
import './moreCourses.css'
import allCourses from '../data'
import Contact from '../contact/Contact'


const MoreCourses = () => {

    useEffect(() => {
        let moreCourses = document.querySelector('.more-courses')
        console.log(moreCourses)
        while (moreCourses.firstChild) {
            moreCourses.removeChild(moreCourses.firstChild)
        }
        let result = allCourses.map((course) => {
            //the whole link
            let a = document.createElement('a');
            a.setAttribute('class', course.isAvailable ? 'more-course' : 'more-course coming-soon')
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
            div.setAttribute('class', 'more-course-infos')
            div.innerHTML = `
            <div class='more-course-details'>
            <div class='more-course-heading'>${course.name}</div>
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
        for (let i = 0; i < allCourses.length; i++) {
            moreCourses.append(result[i]);
        }
    })
    return (
        <div className='More-courses-section'>
            <div className='more-courses' >
            </div>
            <Contact />
        </div>
    )
}

export default MoreCourses