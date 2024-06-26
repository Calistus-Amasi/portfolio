import './FormStyle.css'

import React from 'react'

const Form = () => {
    return (
        <div className='form'>
            <form action="">
                <label>Your Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Subject</label>
                <input type="text" />
                <label>Message</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Enter your message'></textarea>
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form