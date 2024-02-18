import React from 'react'

const BasicContent = () => {
    return (
        <div>
            <div className='accordion'>
                <input type="checkbox" id='basic-course-input-1' />
                <p><label htmlFor="basic-course-input-1"> Module 1 &#58; Course Introduction </label></p>
                <div className='content'>
                    <p>Episode 1 &#58; Example Title</p>
                    <p>Episode 2 &#58; Example Title</p>
                    <p>Episode 3 &#58; Example Title</p>
                    <p>Episode 4 &#58; Example Title</p>
                </div>
            </div>
            <div className='accordion'>
                <input type="checkbox" id='basic-course-input-2' />
                <p><label htmlFor="basic-course-input-2"> Module 2 &#58; HTML Basic </label></p>
                <div className='content'>
                    <p>Episode 1 &#58; Example Title</p>
                    <p>Episode 2 &#58; Example Title</p>
                    <p>Episode 3 &#58; Example Title</p>
                    
                </div>
            </div>
            <div className='accordion'>
                <input type="checkbox" id='basic-course-input-3' />
                <p><label htmlFor="basic-course-input-3"> Module 3 &#58; CSS &#40; Cascading Style Sheet &#41; </label></p>
                <div className='content'>
                    <p>Episode 1 &#58; Example Title</p>
                    <p>Episode 2 &#58; Example Title</p>
                    
                </div>
            </div>
        </div>
    )
}

export default BasicContent
