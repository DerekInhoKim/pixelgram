import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {createComment} from '../../services/comments'
import {addComment} from '../../redux/actions/comments'

const CommentForm = ({postId}) => {
    const currentUser = useSelector(state => state.users.user)
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState('')
    const dispatch = useDispatch()

    const updateMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const comment = createComment(message, postId, currentUser.id)
        if (!comment.errors) {
            console.log('success')
            dispatch(addComment(comment))
            setMessage('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="comment"></label>
            <textarea onChange={updateMessage} name="comment" cols="10" rows="5" value={message} placeholder="Add a comment..."></textarea>
            <button>Post</button>
        </form>
    )
}

export default CommentForm
