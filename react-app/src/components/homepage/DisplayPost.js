import React, {useEffect, useState} from 'react'
import PostHeader from './PostHeader'
import {getPostLikes, likePost} from '../../services/likes'
import {useSelector} from 'react-redux'

const DisplayPost = ({id, caption, content, createdAt, user}) => {
    const currentUser = useSelector(state => state.users.user)
    const [likes, setLikes] = useState([])
    const [userLike, setUserLike] = useState(false)

    useEffect(() => {
        (async () => {
            const likesResponse = await getPostLikes(id)
            console.log(likesResponse.like)
            setLikes(likesResponse.like)
        })()
    }, [id])

    const handleLike = async () => {
        const response = await likePost(id, currentUser.id)
        // console.log(response)
        if (response.error) {
            alert(response.error)
        }
        setUserLike(true)
    }

    if (userLike === true){
        return (
            <h1>user likes this</h1>
        )
    }


    return (
        <div className="homepage_post">
            <PostHeader user={user}/>
            <h1>{caption}</h1>
            <img className="homepage_post_image" src={content} width="500" alt="content"/>
            <h3>{createdAt}</h3>
            <h3>{likes.length}</h3>
            <button onClick={handleLike}>Like</button>
        </div>
    )
}

export default DisplayPost
