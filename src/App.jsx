import React from 'react'
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Basic from './components/basic/Basic'
import About from './components/about/About'
import MoreCourses from './components/moreCourses/MoreCourses'

const App = () => {
    return (
        <div className='app'>
            <NavBar />

            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/1" element={<Basic />} />
                    <Route path="/about" element={< About />} />
                    <Route path="/courses" element={< MoreCourses />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
