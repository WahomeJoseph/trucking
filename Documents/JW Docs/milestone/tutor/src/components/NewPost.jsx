/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const NewPost = ({messageChange,nameChange}) => {
    return (
        <div className='bg-transparent items-center justify-center text-[#f1f1f1] flex flex-col p-1 w-full h-1/2'>
            <form action="" className='w-1/2 rounded-sm p-4 shadow-md'>
                <div className='flex flex-col p-2 '>
                    <label htmlFor="postmessage">Post:</label>
                    <textarea name="postmessage"  id="postmessage" rows={4} required onChange={messageChange} className='bg-[#f1f1] p-2 rounded-sm'></textarea>
                </div>
                <div className='flex flex-col p-2'>
                    <label htmlFor="nuserame">Username:</label>
                    <input type="text" id='username' placeholder='Enter your username' onChange={nameChange} autoComplete='off' required className='bg-[#f1f1] w-full rounded-sm p-3' />
                </div>
                {/* <button className='w-1/4 rounded-sm text-xl mb-2 ml-2 hover:bg-red-800 cursor-pointer bg-[#f1f1] mt-4 p-2'>Submit</button> */}
            </form>
        </div>
)
}

NewPost.propTypes = {
    messageChange: PropTypes.func.isRequired,
    nameChange: PropTypes.func.isRequired,
}

