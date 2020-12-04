import React from 'react'
import { useSelector } from 'react-redux'

const DisplayPost = ({caption, content, createdAt, user}) => {


    return (
        <div className="homepage_post">
            <h1>{caption}</h1>
            <img className="homepage_post_image" src={content} width="500" alt="content"/>
            <h3>{createdAt}</h3>
            <h3>{user.username}</h3>
        </div>
    )
}

export default DisplayPost
