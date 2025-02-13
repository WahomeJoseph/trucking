/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

export const Post = ({messageChange,nameChange}) => {
    
const bloggers = ['JWahome', 'WJoseph', 'CPalmer', 'MAoko']
const chooseBlogger = Math.random() > 0.75 ? bloggers[0] : Math.random() > 0.5 ? bloggers[1] : Math.random() > 0.25 ? bloggers[2] : bloggers[3]
  return (
    <div  className='flex flex-col p-8 items-center shadow-md shadow-[#f1f1f1] m-8 text-red-600'>
        <h2 className='items-center'>MY POSTS</h2>
        <span>{chooseBlogger}</span>
        <span className='jusify-start text-[#f1f1f1]'>{messageChange}</span>
        <span className='text-justify text-[#f1f1f1]'>{nameChange}</span>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fugiat ullam. Ea earum tempore ex!</p> */}
    </div>
  )
}

Post.propTypes = {
    message: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    messageChange: PropTypes.func.isRequired,
    nameChange: PropTypes.func.isRequired
}
