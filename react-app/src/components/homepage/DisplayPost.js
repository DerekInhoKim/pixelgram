import React, {useEffect, useState} from 'react'
import PostHeader from './PostHeader'
import {getPostLikes, likePost, userLikesPost, dislikePost} from '../../services/likes'
import {getComments} from '../../services/comments'
import {useSelector} from 'react-redux'
import DisplayComments from './DisplayComments'
import CommentForm from './CommentForm'

const DisplayPost = ({id, caption, content, createdAt, user}) => {
    const currentUser = useSelector(state => state.users.user)

    const [likes, setLikes] = useState([])
    const [userLike, setUserLike] = useState(false)
    const [comments, setComments] = useState([])

    // This use effect sends a request to see if a user is already liking a post.
    // If a user already likes a post, it displays the liked post version of the post.
    useEffect(() => {
        (async () => {
            const likesResponse = await userLikesPost(id, currentUser.id)
            setUserLike(likesResponse.likes)
        })()
    }, [id])


    // This use effect sends a request to get the number of likes for a post
    useEffect(() => {
        (async () => {
            const likesResponse = await getPostLikes(id)
            setLikes(likesResponse.like)
        })()
    }, [userLike, id])

    useEffect(() => {
        (async () => {
            const commentsResponse = await getComments(id)
            setComments(commentsResponse.comments)
        })()
    }, [])

    // Handles the button click when a user likes a post
    const handleLike = async () => {
        const response = await likePost(id, currentUser.id)
        if (response.error) {
            alert(response.error)
        }
        setUserLike(true)
    }

    // Handles the button click when a user dislikes/unlikes a post
    const handleDislike = async () => {
        const response = await dislikePost(id, currentUser.id)
        setUserLike(false)
    }

    // Used to display each comment
    const commentComponent = comments.map(comment => {
        return (
            <DisplayComments comment={comment}/>
        )
    })

    // Display a liked post
    if (userLike === true){
        return (
            <div className="homepage_post">
                <PostHeader user={user}/>
                <h1>{caption}</h1>
                <img className="homepage_post_image" src={content} width="500" alt="content"/>
                <h3>{createdAt}</h3>
                <h3>{likes.length}</h3>
                <button onClick={handleDislike}>Like</button>
                <h1>user likes</h1>
                <div>{commentComponent}</div>
                <CommentForm postId={id}/>
            </div>
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
            <div>{commentComponent}</div>
            <CommentForm postId={id}/>
        </div>
    )
}

export default DisplayPost
