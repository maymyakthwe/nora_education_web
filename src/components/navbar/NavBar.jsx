/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './navbar.css'
import noraLogoOne from '../../images/logo2.png'
import { BsSearch } from 'react-icons/bs'
import allCourses from '../data'


const NavBar = () => {
    let [searchValue, setSearchValue] = useState('');

    let handleSearch = (e) => {
        setSearchValue(e.target.value);
    }

    useEffect(() => {
        let searchResult = document.querySelector('.search-result');
        let resultContainerDiv = document.createElement('div');
        resultContainerDiv.setAttribute('class', 'result-container-div')
        while (searchResult.firstChild) {
            searchResult.removeChild(searchResult.firstChild)
        }
        if (searchValue.length > 2) {
            let filteredResult = allCourses.filter((courses) => courses.catagory.includes(searchValue.toLowerCase()));
            if (filteredResult.length > 0) {
                filteredResult.map((eachResult) => {
                    let eachResultDiv = document.createElement('div');
                    let imgDiv = document.createElement('div');
                    let img = document.createElement('img');
                    img.setAttribute('src', eachResult.img)

                    imgDiv.appendChild(img);

                    let a = document.createElement('a');
                    a.setAttribute('href', eachResult.link);
                    eachResultDiv.setAttribute('class', 'result-div');
                    a.innerHTML = eachResult.name;

                    eachResultDiv.appendChild(imgDiv)
                    eachResultDiv.appendChild(a)

                    resultContainerDiv.appendChild(eachResultDiv);
                    return resultContainerDiv;
                });

                searchResult.appendChild(resultContainerDiv);
            }
        }
    }, [searchValue]);

    return (
        <div className='navbar'>
            <div className='nav'>
                <div className='nav-title'>
                    <div className='nav-img'>
                        <a href="/#home-section">
                            <img src={noraLogoOne} alt="logo" />
                        </a>
                    </div>
                    <div className='search-bar-section'>
                        <div className='search-bar'>
                            <label htmlFor="search-value">
                                <BsSearch />
                            </label>
                            <input id="search-value" type="search" name={searchValue} placeholder="find courses" onChange={(e) => handleSearch(e)} />
                        </div>
                        <div className='search-result'></div>
                    </div>
                </div>
                <div className='nav-links'>
                    <div className='nav-link'><a href="/#home-section">Home</a></div>
                    <div className='nav-link'><a href="/courses">Courses</a></div>
                    <div className='nav-link'><a href="#contact-section">Contact Us</a></div>
                    <div className='nav-link'><a href="/about">About Us</a></div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
