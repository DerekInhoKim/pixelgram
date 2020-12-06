import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {createComment} from '../../services/comments'

const CommentForm = ({postId}) => {
    const currentUser = useSelector(state => state.users.user)
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState('')

    const updateMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = async () => {
        const comment = createComment(message, postId, currentUser.id)
        if (comment.errors) {
            alert(comment.errors)
        }
        console.log('success')
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
