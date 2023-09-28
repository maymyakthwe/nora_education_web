import React from 'react'
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ReactComponent from './components/react/ReactComponent'
import Basic from './components/basic/Basic'
import About from './components/about/About'

const App = () => {
    return (
        <div className='app'>
            <NavBar />

            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/basic" element={<Basic />} />
                    <Route path="/react" element={< ReactComponent />} />
                    <Route path="/about" element={< About />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
