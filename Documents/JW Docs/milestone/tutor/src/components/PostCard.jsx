/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { Post } from './Post'
import { NewPost } from './NewPost'
import PropTypes from 'prop-types'

export const PostCard = () => {
    const [message, setMessage] = useState('')
    const [username,setUserName] = useState('')

    const handleMessage = (event) => {
        setMessage(event.target.value)
    }

    const handleName = () => {
        setUserName(event.target.value)
    }
  return (
    <div> 
        <NewPost messageChange={handleMessage} nameChange={handleName}/>
        <ul>
            <Post messageChange={message} setMessage={setMessage} nameChange={username} setUserName={setUserName}/>
            <Post messageChange={message} setMessage={setMessage} nameChange={username} setUserName={setUserName}/>
        </ul>
    </div>
  )
}

PostCard.propTypes = {
    message: PropTypes.string.isRequired,
    setMessage: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    setUserName: PropTypes.func.isRequired
}
