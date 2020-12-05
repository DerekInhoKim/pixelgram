import React, {useEffect, useState} from 'react'
import PostHeader from './PostHeader'
import {getPostLikes} from '../../services/likes'
import {useSelector} from 'react-redux'

const DisplayPost = ({id, caption, content, createdAt, user}) => {
    const currentUser = useSelector(state => state.users.user)
    const [likes, setLikes] = useState(0)
    const [userLikes, setUserLikes] = useState(false)

    useEffect(() => {
        (async () => {
            const likesResponse = await getPostLikes(id)
            setLikes(likesResponse.likes)
        })()
    }, [id])

    return (
        <div className="homepage_post">
            <PostHeader user={user}/>
            <h1>{caption}</h1>
            <img className="homepage_post_image" src={content} width="500" alt="content"/>
            <h3>{createdAt}</h3>
            <h3>{likes}</h3>
        </div>
    )
}

export default DisplayPost
